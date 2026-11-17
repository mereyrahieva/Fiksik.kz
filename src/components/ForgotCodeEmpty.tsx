
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";

export default function ForgotCodeEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const [code, setCode] = useState("");

  function verify() {
    if (code.length !== 6) {
      Alert.alert("Қате", "Алты таңбалы кодты енгізіңіз.");
      return;
    }

    if (code !== "123456") {
      Alert.alert("Қате", "Растау коды қате.");
      return;
    }

    onNavigate("ForgotCodeFilled");
  }

  return (
    <Page title="SMS-код" onBack={onBack}>
      <Heading
        title="Растау коды"
        subtitle="Телефон нөміріне жіберілген кодты енгізіңіз."
      />

      <Card>
        <Detail label="Растау әдісі" value="SMS" />
        <Detail label="Код" value="6 таңба" />
      </Card>

      <Field
        label="Растау коды"
        placeholder="000000"
        value={code}
        onChangeText={v => setCode(v.replace(/\D/g, "").slice(0, 6))}
        keyboardType="number-pad"
      />

      <Button title="Тексеру" onPress={verify} />

      <Button
        title="Кодты қайта алу"
        secondary
        onPress={() => Alert.alert("Демо код", "123456")}
      />

      <Button
        title="Телефонды өзгерту"
        secondary
        onPress={() => onNavigate("ForgotPhoneEmpty")}
      />

      <Info text="Демонстрациялық растау коды: 123456." />
    </Page>
  );
}
