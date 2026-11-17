
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

const rateFor = (c: string) => c === "EUR" ? 520 : 490;

export default function ExchangeEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [amount, setAmount] = useState("");
  const value = Number(amount.replace(",", "."));
  const rate = rateFor(bank.currency);
  const result = Number.isFinite(value) ? value * rate : 0;

  function proceed() {
    if (!Number.isFinite(value) || value <= 0) {
      Alert.alert("Қате", "Айырбастау сомасын дұрыс енгізіңіз.");
      return;
    }
    bank.setExchangeAmount(value);
    onNavigate("ExchangeFilled");
  }

  return (
    <Page title="Валюта айырбастау" onBack={onBack}>
      <Heading
        title="Айырбастау"
        subtitle="Қажетті соманы енгізіп, нәтижені есептеңіз."
      />

      <Button
        title={`Валютаны таңдау: ${bank.currency}`}
        secondary
        onPress={() => onNavigate("ExchangeCurrencyModal")}
      />

      <Field
        label={`Берілетін сома (${bank.currency})`}
        value={amount}
        onChangeText={setAmount}
        placeholder="0"
        keyboardType="decimal-pad"
      />

      <Card>
        <Detail label="Үлгі бағам" value={`1 ${bank.currency} = ${rate} ₸`} />
        <Detail label="Алынатын сома" value={`${result.toFixed(2)} ₸`} />
        <Detail label="Комиссия" value="0 ₸" />
      </Card>

      <Button title="Айырбастауды жалғастыру" onPress={proceed} />
      <Info text="Бұл есептеу демонстрациялық. Нақты айырбастау орындалмайды." />
    </Page>
  );
}
