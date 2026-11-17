
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Button,
  Info, ScreenProps
} from "./EmeraldUI";

export default function ChangePasswordSettings({
  onNavigate, onBack
}: ScreenProps) {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");

  function change() {
    if (current.length < 6 || next.length < 6) {
      Alert.alert("Қате", "Құпиясөз кемінде 6 таңба болуы керек.");
      return;
    }
    if (next !== confirm) {
      Alert.alert("Қате", "Жаңа құпиясөздер сәйкес келмейді.");
      return;
    }
    Alert.alert("Демо", "Құпиясөз форматы тексерілді. Нақты өзгеріс жасалған жоқ.",
      [{ text: "Түсінікті", onPress: () => onNavigate("Settings") }]);
  }

  return (
    <Page title="Құпиясөз баптауы" onBack={onBack}>
      <Heading title="Қауіпсіздік"
        subtitle="Құпиясөзді өзгерту формасы" />
      <Field label="Қазіргі құпиясөз"
        value={current} onChangeText={setCurrent} secureTextEntry />
      <Field label="Жаңа құпиясөз"
        value={next} onChangeText={setNext} secureTextEntry />
      <Field label="Құпиясөзді қайталау"
        value={confirm} onChangeText={setConfirm} secureTextEntry />
      <Button title="Өзгертуді растау" onPress={change} />
      <Info text="Нақты құпиясөзді өзгертуге аутентификация сервері керек." />
    </Page>
  );
}
