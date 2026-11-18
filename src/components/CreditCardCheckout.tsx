
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail,
  Field, Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function CreditCardCheckout({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [amount, setAmount] = useState("5000");

  function proceed() {
    const sum = Number(amount.replace(",", "."));

    if (!Number.isFinite(sum) || sum <= 0) {
      Alert.alert("Қате", "Төлем сомасын дұрыс енгізіңіз.");
      return;
    }

    if (sum > bank.balance) {
      Alert.alert("Қате", "Қаражат жеткіліксіз.");
      return;
    }

    bank.setTransfer({
      recipient: "Несие картасы",
      card: "•••• 8822",
      amount: sum,
      message: "Демо несие төлемі"
    });

    onNavigate("CreditCardAccountModal");
  }

  return (
    <Page title="Несие төлемі" onBack={onBack}>
      <Heading
        title="Несие берешегін өтеу"
        subtitle="Төлем сомасын енгізіңіз."
      />

      <Card>
        <Detail label="Несие картасы" value="•••• 8822" />
        <Detail label="Үлгі қарыз" value="50 000 ₸" />
        <Detail
          label="Қолжетімді баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`}
        />
      </Card>

      <Field
        label="Төлем сомасы (₸)"
        value={amount}
        onChangeText={setAmount}
        placeholder="5000"
        keyboardType="decimal-pad"
      />

      <Button
        title="Төлемге өту"
        onPress={proceed}
      />

      <Button
        title="Несие картасына оралу"
        secondary
        onPress={() => onNavigate("CreditCardOverview")}
      />

      <Info text="Бұл төлем нақты несие берешегіне әсер етпейді." />
    </Page>
  );
}
