
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Button, Check,
  ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function SignUpEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [accepted, setAccepted] = useState(false);

  function register() {
    if (name.trim().length < 2) {
      Alert.alert("Қате", "Аты-жөніңізді енгізіңіз.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      Alert.alert("Қате", "Телефон нөмірі дұрыс емес.");
      return;
    }
    if (password.length < 8 || password !== repeat) {
      Alert.alert("Қате", "Құпиясөздер сәйкес келмейді немесе тым қысқа.");
      return;
    }
    if (!accepted) {
      Alert.alert("Ескерту", "Қолдану шарттарын қабылдаңыз.");
      return;
    }

    bank.setName(name);
    bank.setPhone(phone);
    onNavigate("SignUpFilled");
  }

  return (
    <Page title="Тіркелу" onBack={onBack}>
      <Heading
        title="Аккаунт ашу"
        subtitle="Жеке мәліметтеріңізді енгізіңіз."
      />

      <Field label="Аты-жөніңіз" value={name}
        onChangeText={setName} placeholder="Толық аты-жөні" />
      <Field label="Телефон нөмірі" value={phone}
        onChangeText={setPhone} keyboardType="phone-pad"
        placeholder="+7 700 000 00 00" />
      <Field label="Құпиясөз" value={password}
        onChangeText={setPassword} placeholder="Кемінде 8 таңба"
        secureTextEntry />
      <Field label="Құпиясөзді қайталау" value={repeat}
        onChangeText={setRepeat} secureTextEntry
        placeholder="Қайта енгізіңіз" />

      <Check
        title="Қолдану шарттарымен келісемін"
        value={accepted}
        onPress={() => setAccepted(!accepted)}
      />

      <Button title="Тіркелу" onPress={register} />
      <Button
        title="Жүйеге кіру"
        secondary
        onPress={() => onNavigate("SignIn")}
      />
    </Page>
  );
}
