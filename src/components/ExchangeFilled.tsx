
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail, Check,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function ExchangeFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [accepted, setAccepted] = useState(false);
  const rate = bank.currency === "EUR" ? 520 : 490;
  const total = bank.exchangeAmount * rate;

  function confirm() {
    if (!accepted) {
      Alert.alert("Ескерту", "Демо операция шарттарын қабылдаңыз.");
      return;
    }
    Alert.alert(
      "Айырбастау нәтижесі",
      `${bank.exchangeAmount} ${bank.currency} = ${total.toFixed(2)} ₸\n\nНақты валюта айырбасталған жоқ.`,
      [{ text: "Басты бетке өту", onPress: () => onNavigate("Home") }]
    );
  }

  return (
    <Page title="Айырбастауды растау" onBack={onBack}>
      <Heading title="Операцияны тексеру"
        subtitle="Айырбастау сомасын растаңыз." />

      <Card>
        <Detail label="Берілетін валюта" value={bank.currency} />
        <Detail label="Берілетін сома"
          value={`${bank.exchangeAmount} ${bank.currency}`} />
        <Detail label="Айырбас бағамы" value={`${rate} ₸`} />
        <Detail label="Алынатын сома" value={`${total.toFixed(2)} ₸`} />
      </Card>

      <Check
        title="Демо айырбастау шарттарымен келісемін"
        value={accepted}
        onPress={() => setAccepted(!accepted)}
      />

      <Button title="Айырбастауды растау" onPress={confirm} />
      <Button title="Мәліметтерді өзгерту"
        secondary onPress={onBack} />

      <Info text="Нақты банк балансы немесе валюталық шот өзгермейді." />
    </Page>
  );
}
