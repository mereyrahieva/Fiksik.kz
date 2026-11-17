
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Button,
  Card, Detail, Info, ScreenProps
} from "../EmeraldUI";

export default function MessageReply({
  onNavigate, onBack
}: ScreenProps) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function send() {
    if (!subject.trim() || message.trim().length < 5) {
      Alert.alert("Қате", "Тақырып пен хабарламаңызды енгізіңіз.");
      return;
    }
    setSent(true);
    Alert.alert("Хабарлама сақталды", "Демо хабарлама құрылды.");
  }

  return (
    <Page title="Хабарлама жазу" onBack={onBack}>
      <Heading
        title="Қолдау қызметі"
        subtitle="Сұрағыңызды немесе ұсынысыңызды жазыңыз."
      />

      <Field
        label="Тақырыбы"
        placeholder="Хабарлама тақырыбы"
        value={subject}
        onChangeText={setSubject}
      />

      <Field
        label="Хабарлама"
        placeholder="Сұрағыңызды жазыңыз..."
        value={message}
        onChangeText={setMessage}
        multiline
      />

      {sent && (
        <Card>
          <Detail label="Мәртебе" value="Демо сақталды" />
          <Detail label="Тақырып" value={subject} />
        </Card>
      )}

      <Button title="Хабарлама жіберу" onPress={send} />

      <Button
        title="Хабарламалар тізімі"
        secondary
        onPress={() => onNavigate("Messages")}
      />

      <Info text="Хабарлама нақты серверге жіберілмейді." />
    </Page>
  );
}
