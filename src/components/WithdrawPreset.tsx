import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Menu, Card, Detail,
  Button, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

const amounts = [5000, 10000, 20000, 50000, 100000];

export default function WithdrawPreset({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [amount, setAmount] = useState(10000);

  function proceed() {
    if (amount > bank.balance) {
      Alert.alert("Қате", "Қаражат жеткіліксіз.");
      return;
    }
    bank.setTransfer({
      recipient: "Қаражат алу",
      card: "•••• 4589",
      amount,
      message: "Демо қаражат алу"
    });
    onNavigate("WithdrawFilled");
  }

  return (
    <Page title="Сома таңдау" onBack={onBack}>
      <Heading title="Дайын сомалар"
        subtitle="Алғыңыз келетін соманы таңдаңыз." />
      {amounts.map(value => (
        <Menu key={value}
          icon={value === amount ? "✅" : "💵"}
          title={`${value.toLocaleString("kk-KZ")} ₸`}
          onPress={() => setAmount(value)} />
      ))}
      <Card>
        <Detail label="Таңдалған сома"
          value={`${amount.toLocaleString("kk-KZ")} ₸`} />
      </Card>
      <Button title="Жалғастыру" onPress={proceed} />
      <Button title="Өз сомамды енгізу" secondary
        onPress={() => onNavigate("WithdrawCustom")} />
    </Page>
  );
}