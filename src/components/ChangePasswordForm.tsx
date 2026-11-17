
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Button,
  Info, ScreenProps
} from "./EmeraldUI";

export default function ChangePasswordForm({
  onNavigate, onBack
}: ScreenProps) {
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [visible, setVisible] = useState(false);

  function save() {
    if (password.length < 8) {
      Alert.alert("Қате", "Құпиясөз кемінде 8 таңба болуы керек.");
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
        subtitle="Аккаунтыңызға жаңа құпиясөз орнатыңыз."
      />

      <Field
        label="Жаңа құпиясөз"
        placeholder="Кемінде 8 таңба"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!visible}
      />

      <Field
        label="Құпиясөзді қайталау"
        placeholder="Құпиясөзді қайта енгізіңіз"
        value={repeat}
        onChangeText={setRepeat}
        secureTextEntry={!visible}
      />

      <Button
        title={visible ? "Құпиясөзді жасыру" : "Құпиясөзді көрсету"}
        secondary
        onPress={() => setVisible(!visible)}
      />

      <Info text="Бұл демо режим. Құпиясөз нақты серверде өзгермейді." />

      <Button title="Құпиясөзді сақтау" onPress={save} />
    </Page>
  );
}
