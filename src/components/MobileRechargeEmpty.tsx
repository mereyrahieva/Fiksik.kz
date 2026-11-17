import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail, Field,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function MobileRechargeEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  function proceed() {
    const digits = phone.replace(/\D/g, "");
    const sum = Number(amount.replace(",", "."));

    if (digits.length !== 11 || !digits.startsWith("7")) {
      Alert.alert("Қате", "Телефон нөмірін +7 форматында енгізіңіз.");
      return;
    }
    if (!Number.isFinite(sum) || sum <= 0 || sum > bank.balance) {
      Alert.alert("Қате", "Төлем сомасын тексеріңіз.");
      return;
    }

    bank.setTransfer({
      recipient: phone,
      card: "Ұялы байланыс",
      amount: sum,
      message: "Телефон балансын толықтыру"
    });

    onNavigate("MobileRechargeFilled");
  }

  return (
    <Page title="Ұялы байланыс" onBack={onBack}>
      <Heading title="Телефон балансын толықтыру"
        subtitle="Телефон нөмірін және соманы енгізіңіз." />
      <Card>
        <Detail label="Төлем картасы" value="•••• 4589" />
        <Detail label="Баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`} />
      </Card>
      <Field label="Телефон нөмірі"
        value={phone} onChangeText={setPhone}
        placeholder="+7 700 000 00 00" keyboardType="phone-pad" />
      <Field label="Сома (₸)"
        value={amount} onChangeText={setAmount}
        placeholder="0" keyboardType="decimal-pad" />
      <Button title="Жалғастыру" onPress={proceed} />
      <Info text="Нақты телефон балансы толықтырылмайды." />
    </Page>
  );
}