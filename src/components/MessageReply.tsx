
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Button,
  Info, ScreenProps
} from "./EmeraldUI";

export default function MessageReply({
  onNavigate, onBack
}: ScreenProps) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function submit() {
    if (!subject.trim() || message.trim().length < 10) {
      Alert.alert("Қате", "Тақырып пен кемінде 10 таңбалы хабарлама жазыңыз.");
      return;
    }

    Alert.alert(
      "Демо жіберілді",
      "Хабарлама серверге жіберілген жоқ.",
      [{ text: "Түсінікті", onPress: () => onNavigate("Messages") }]
    );
  }

  return (
    <Page title="Жауап жазу" onBack={onBack}>
      <Heading title="Қолдау қызметіне жазу"
        subtitle="Сұрағыңызды немесе ұсынысыңызды қалдырыңыз." />
      <Field label="Тақырып" value={subject}
        onChangeText={setSubject} placeholder="Хабарлама тақырыбы" />
      <Field label="Хабарлама" value={message}
        onChangeText={setMessage} placeholder="Сұрағыңызды жазыңыз..." />
      <Button title="Хабарламаны жіберу" onPress={submit} />
      <Info text="Нақты қолдау орталығына жіберу үшін backend қажет." />
    </Page>
  );
}
