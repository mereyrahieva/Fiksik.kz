
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Button,
  Info, ScreenProps
} from "./EmeraldUI";

export default function ForgotCodeEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const [code, setCode] = useState("");

  function verify() {
    if (code !== "123456") {
      Alert.alert("Қате", "Растау коды дұрыс емес.");
      return;
    }
    onNavigate("ForgotCodeFilled");
  }

  return (
    <Page title="Растау коды" onBack={onBack}>
      <Heading
        title="Кодты енгізіңіз"
        subtitle="Телефон нөмірін растау үшін 6 таңбалы код қажет."
      />

      <Field
        label="Растау коды"
        placeholder="000000"
        value={code}
        onChangeText={v => setCode(v.replace(/\D/g, "").slice(0, 6))}
        keyboardType="number-pad"
      />

      <Info text="Демо режиміндегі растау коды: 123456" />

      <Button title="Кодты растау" onPress={verify} />
      <Button
        title="Кодты қайта алу"
        secondary
        onPress={() => Alert.alert("Растау коды", "123456")}
      />
    </Page>
  );
}
