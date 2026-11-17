
import React from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function ForgotPhoneFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  function sendCode() {
    Alert.alert(
      "Растау коды",
      "Демо код: 123456",
      [
        {
          text: "Кодты енгізу",
          onPress: () => onNavigate("ForgotCodeEmpty")
        }
      ]
    );
  }

  return (
    <Page title="Телефонды растау" onBack={onBack}>
      <Heading
        title="Нөмірді тексеріңіз"
        subtitle="Төмендегі телефон нөмірі дұрыс па?"
      />

      <Card>
        <Detail label="Телефон нөмірі" value={bank.phone} />
        <Detail label="Растау тәсілі" value="SMS-код" />
      </Card>

      <Info text="Демо режимінде SMS жіберілмейді. Растау коды — 123456." />

      <Button title="Растау кодын алу" onPress={sendCode} />
      <Button title="Нөмірді өзгерту" secondary onPress={onBack} />
    </Page>
  );
}
