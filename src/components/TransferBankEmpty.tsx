
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Button,
  Card, Detail, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function TransferBankEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [name, setName] = useState("");
  const [iban, setIban] = useState("");
  const [amount, setAmount] = useState("");

  function proceed() {
    const sum = Number(amount.replace(",", "."));
    const account = iban.replace(/\s/g, "").toUpperCase();

    if (!name.trim()) {
      Alert.alert("Қате", "Алушының аты-жөнін енгізіңіз.");
      return;
    }

    if (!/^KZ\d{18}$/.test(account)) {
      Alert.alert("Қате", "IBAN пішімі дұрыс емес.");
      return;
    }

    if (!Number.isFinite(sum) || sum <= 0 || sum > bank.balance) {
      Alert.alert("Қате", "Соманы және балансты тексеріңіз.");
      return;
    }

    bank.setTransfer({
      recipient: name,
      card: account,
      amount: sum,
      message: "Банк шотына аударым"
    });

    onNavigate("TransferBankPicker");
  }

  return (
    <Page title="Банк шотына аудару" onBack={onBack}>
      <Heading
        title="Банк аударымы"
        subtitle="Алушының деректемелерін енгізіңіз."
      />

      <Card>
        <Detail label="Бастапқы карта" value="•••• 4589" />
        <Detail
          label="Баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`}
        />
      </Card>

      <Field label="Алушының аты-жөні"
        value={name} onChangeText={setName}
        placeholder="Толық аты-жөні" />

      <Field label="IBAN"
        value={iban} onChangeText={setIban}
        placeholder="KZ..." />

      <Field label="Аударым сомасы"
        value={amount} onChangeText={setAmount}
        keyboardType="decimal-pad" placeholder="0" />

      <Button title="Банкті таңдау" onPress={proceed} />

      <Info text="IBAN тек қарапайым формат бойынша тексеріледі. Нақты банкке сұраныс жіберілмейді." />
    </Page>
  );
}
