
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Card, Detail,
  Menu, Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function ExchangeEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [amount, setAmount] = useState("");

  function calculate() {
    const value = Number(amount.replace(",", "."));

    if (!Number.isFinite(value) || value <= 0) {
      Alert.alert("Қате", "Айырбастау сомасын дұрыс енгізіңіз.");
      return;
    }

    bank.setTransfer({
      recipient: "Валюта айырбастау",
      card: "USD",
      amount: value,
      message: "Демо айырбастау"
    });

    onNavigate("ExchangeFilled");
  }

  return (
    <Page title="Валюта айырбастау" onBack={onBack}>
      <Heading
        title="Валютаны айырбастау"
        subtitle="Айырбасталатын соманы енгізіңіз."
      />

      <Card>
        <Detail label="Бастапқы валюта" value="KZT" />
        <Detail label="Қажетті валюта" value="USD (демо)" />
        <Detail
          label="Баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`}
        />
      </Card>

      <Field
        label="Айырбастау сомасы"
        placeholder="0"
        keyboardType="decimal-pad"
        value={amount}
        onChangeText={setAmount}
      />

      <Menu
        icon="💱"
        title="Валютаны таңдау"
        subtitle="Айырбастау валюталарын қарау"
        onPress={() => onNavigate("ExchangeCurrencyModal")}
      />

      <Button title="Есептеу" onPress={calculate} />

      <Info text="Бұл нақты конвертация емес. Бағамдар дереккөзі қосылмаған." />
    </Page>
  );
}
