import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Button,
  Card, Detail, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function MobileRechargeEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  function proceed() {
    const sum = Number(amount.replace(",", "."));

    if (phone.replace(/\D/g, "").length !== 11) {
      Alert.alert("Қате", "Қазақстанның телефон нөмірін дұрыс енгізіңіз.");
      return;
    }
    if (!Number.isFinite(sum) || sum <= 0 || sum > bank.balance) {
      Alert.alert("Қате", "Толықтыру сомасын тексеріңіз.");
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
        subtitle="Нөмірді және соманы енгізіңіз." />

      <Card>
        <Detail label="Төлем картасы" value="•••• 4589" />
        <Detail label="Қолжетімді баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`} />
      </Card>

      <Field label="Телефон нөмірі"
        value={phone} onChangeText={setPhone}
        placeholder="+7 700 000 00 00"
        keyboardType="phone-pad" />
      <Field label="Толықтыру сомасы (₸)"
        value={amount} onChangeText={setAmount}
        placeholder="0" keyboardType="decimal-pad" />

      <Button title="Төлемге өту" onPress={proceed} />
      <Info text="Нақты телефон балансы толықтырылмайды." />
    </Page>
  );
}