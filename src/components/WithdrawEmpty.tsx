import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail,
  Field, Button, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function WithdrawEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [amount, setAmount] = useState("");

  function proceed() {
    const value = Number(amount.replace(",", "."));

    if (!Number.isFinite(value) || value <= 0) {
      Alert.alert("Қате", "Қаражат сомасын дұрыс енгізіңіз.");
      return;
    }

    if (value > bank.balance) {
      Alert.alert("Қате", "Қаражат жеткіліксіз.");
      return;
    }

    bank.setTransfer({
      recipient: "Қаражат алу",
      card: "•••• 4589",
      amount: value,
      message: "Демо қаражат алу"
    });

    onNavigate("WithdrawFilled");
  }

  return (
    <Page title="Қаражат алу" onBack={onBack}>
      <Heading
        title="Картадан қаражат алу"
        subtitle="Қажетті соманы енгізіңіз."
      />

      <Card>
        <Detail label="Карта" value="•••• 4589" />
        <Detail
          label="Қолжетімді баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`}
        />
      </Card>

      <Button
        title="Басқа шотты таңдау"
        secondary
        onPress={() => onNavigate("WithdrawAccountModal")}
      />

      <Button
        title="Дайын сомалардың бірін таңдау"
        secondary
        onPress={() => onNavigate("WithdrawPreset")}
      />

      <Field
        label="Қаражат сомасы (₸)"
        value={amount}
        onChangeText={setAmount}
        placeholder="0"
        keyboardType="decimal-pad"
      />

      <Button title="Жалғастыру" onPress={proceed} />

      <Info text="Нақты банкоматтан ақша берілмейді. Бұл демонстрациялық операция." />
    </Page>
  );
}