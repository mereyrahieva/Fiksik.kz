
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail, Check,
  Button, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function TransferBankRecipient({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [accepted, setAccepted] = useState(false);

  function proceed() {
    if (!accepted) {
      Alert.alert("Ескерту", "Мәліметтердің дұрыстығын растаңыз.");
      return;
    }
    onNavigate("TransferBankConfirm");
  }

  return (
    <Page title="Алушыны тексеру" onBack={onBack}>
      <Heading
        title="Алушының деректері"
        subtitle="Аударым мәліметтерін тексеріңіз."
      />

      <Card>
        <Detail label="Алушы" value={bank.transfer.recipient} />
        <Detail label="Шот" value={bank.transfer.card} />
        <Detail
          label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`}
        />
      </Card>

      <Check
        title="Мәліметтер дұрыс енгізілгенін растаймын"
        value={accepted}
        onPress={() => setAccepted(!accepted)}
      />

      <Button title="Растауға өту" onPress={proceed} />
      <Button title="Деректерді түзету" secondary onPress={onBack} />

      <Info text="Алушы деректері банк арқылы расталмайды." />
    </Page>
  );
}
