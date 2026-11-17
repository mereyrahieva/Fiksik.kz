
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field,
  Button, Info, ScreenProps
} from "./EmeraldUI";

export default function ChangePasswordForm({
  onNavigate, onBack
}: ScreenProps) {
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");

  function save() {
    if (password.length < 6) {
      Alert.alert("Қате", "Құпиясөз кемінде 6 таңба болсын.");
      return;
    }
    if (password !== repeat) {
      Alert.alert("Қате", "Құпиясөздер сәйкес келмейді.");
      return;
    }

    onNavigate("ChangePasswordSuccess");
  }

  return (
    <Page title="Құпиясөзді өзгерту" onBack={onBack}>
      <Heading
        title="Жаңа құпиясөз"
        subtitle="Жаңа құпиясөзді екі рет енгізіңіз."
      />

      <Field
        label="Жаңа құпиясөз"
        placeholder="Жаңа құпиясөз"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Field
        label="Құпиясөзді қайталау"
        placeholder="Қайта енгізіңіз"
        value={repeat}
        onChangeText={setRepeat}
        secureTextEntry
      />

      <Button title="Құпиясөзді өзгерту" onPress={save} />

      <Info text="Құпиясөз демо режимінде тексеріледі; серверде жаңартылмайды." />
    </Page>
  );
}
