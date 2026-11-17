import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Card, Detail,
  Button, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function WithdrawCustom({
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
    <Page title="Соманы енгізу" onBack={onBack}>
      <Heading title="Қаражат алу"
        subtitle="Алғыңыз келетін соманы енгізіңіз." />

      <Card>
        <Detail label="Қолжетімді баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`} />
      </Card>

      <Field label="Сома (₸)" value={amount}
        onChangeText={setAmount}
        keyboardType="decimal-pad" placeholder="0" />

      <Button title="Жалғастыру" onPress={proceed} />
      <Button title="Дайын сомалар" secondary
        onPress={() => onNavigate("WithdrawPreset")} />

      <Info text="Нақты қолма-қол ақша берілмейді." />
    </Page>
  );
}