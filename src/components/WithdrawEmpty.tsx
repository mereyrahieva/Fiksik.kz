import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail, Field,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function WithdrawEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [amount, setAmount] = useState("");

  function proceed() {
    const sum = Number(amount.replace(",", "."));
    if (!Number.isFinite(sum) || sum <= 0 || sum > bank.balance) {
      Alert.alert("Қате", "Соманы және балансты тексеріңіз.");
      return;
    }
    bank.setTransfer({
      recipient: "Қаражат алу",
      card: "•••• 4589",
      amount: sum,
      message: "Демо қаражат алу"
    });
    onNavigate("WithdrawFilled");
  }

  return (
    <Page title="Қаражат алу" onBack={onBack}>
      <Heading title="Картадан ақша алу"
        subtitle="Қажетті соманы таңдаңыз немесе енгізіңіз." />
      <Card>
        <Detail label="Карта" value="•••• 4589" />
        <Detail label="Баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`} />
      </Card>
      <Field label="Қаражат сомасы"
        value={amount} onChangeText={setAmount}
        placeholder="0" keyboardType="decimal-pad" />
      <Button title="Жалғастыру" onPress={proceed} />
      <Button title="Дайын сомалар" secondary
        onPress={() => onNavigate("WithdrawPreset")} />
      <Button title="Шотты таңдау" secondary
        onPress={() => onNavigate("WithdrawAccountModal")} />
      <Info text="Ақша нақты банкоматтан берілмейді." />
    </Page>
  );
}