
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Button,
  Info, ScreenProps
} from "./EmeraldUI";

export default function ForgotPhoneEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const [phone, setPhone] = useState("");

  function next() {
    if (phone.replace(/\D/g, "").length < 10) {
      Alert.alert("Қате", "Телефон нөмірін дұрыс енгізіңіз.");
      return;
    }
    onNavigate("ForgotPhoneFilled");
  }

  return (
    <Page title="Құпиясөзді қалпына келтіру" onBack={onBack}>
      <Heading
        title="Құпиясөзді ұмыттыңыз ба?"
        subtitle="Телефон нөміріңізді енгізіңіз. Келесі қадамда растау кодын көрсетеміз."
      />

      <Field
        label="Телефон нөмірі"
        placeholder="+7 700 000 00 00"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Button title="Жалғастыру" onPress={next} />
      <Button
        title="Кіру экранына оралу"
        secondary
        onPress={() => onNavigate("SignIn")}
      />

      <Info text="Демо режимінде нақты SMS жіберілмейді." />
    </Page>
  );
}
