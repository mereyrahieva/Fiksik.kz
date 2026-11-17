
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Button,
  Info, ScreenProps
} from "../EmeraldUI";

export default function ChangePasswordSettings({
  onNavigate, onBack
}: ScreenProps) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [visible, setVisible] = useState(false);

  function save() {
    if (!oldPassword.trim()) {
      Alert.alert("Қате", "Ағымдағы құпиясөзді енгізіңіз.");
      return;
    }

    if (newPassword.length < 8) {
      Alert.alert("Қате", "Жаңа құпиясөз кемінде 8 таңба болуы керек.");
      return;
    }

    if (newPassword !== repeat) {
      Alert.alert("Қате", "Құпиясөздер сәйкес келмейді.");
      return;
    }

    Alert.alert(
      "Демо тексеру",
      "Құпиясөз формасы тексерілді. Нақты аккаунтта өзгеріс жасалмады.",
      [{ text: "Баптаулар", onPress: () => onNavigate("Settings") }]
    );
  }

  return (
    <Page title="Құпиясөзді өзгерту" onBack={onBack}>
      <Heading
        title="Қауіпсіздік"
        subtitle="Құпиясөзді жаңарту"
      />

      <Field
        label="Ағымдағы құпиясөз"
        value={oldPassword}
        onChangeText={setOldPassword}
        secureTextEntry={!visible}
        placeholder="Құпиясөз"
      />

      <Field
        label="Жаңа құпиясөз"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry={!visible}
        placeholder="Жаңа құпиясөз"
      />

      <Field
        label="Құпиясөзді қайталау"
        value={repeat}
        onChangeText={setRepeat}
        secureTextEntry={!visible}
        placeholder="Қайта енгізіңіз"
      />

      <Button
        title={visible ? "Құпиясөзді жасыру" : "Құпиясөзді көрсету"}
        secondary
        onPress={() => setVisible(!visible)}
      />

      <Button title="Өзгерістерді сақтау" onPress={save} />

      <Info text="Бұл тек демо форма. Нақты құпиясөз серверде өзгертілмейді." />
    </Page>
  );
}
