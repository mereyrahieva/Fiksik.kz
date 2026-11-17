
import React, { useState } from "react";
import { Alert, Text } from "react-native";
import {
  Page, Heading, Field, Button,
  Check, Info, ScreenProps, C
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function SignUpEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [accepted, setAccepted] = useState(false);

  function proceed() {
    if (name.trim().length < 3) {
      Alert.alert("Қате", "Аты-жөніңізді толық енгізіңіз.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      Alert.alert("Қате", "Телефон нөмірін тексеріңіз.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert("Қате", "Email мекенжайы дұрыс емес.");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Қате", "Құпиясөз кемінде 6 таңбадан тұрсын.");
      return;
    }
    if (password !== repeat) {
      Alert.alert("Қате", "Құпиясөздер сәйкес келмейді.");
      return;
    }
    if (!accepted) {
      Alert.alert("Ескерту", "Қолдану шарттарын қабылдаңыз.");
      return;
    }

    bank.register(name, phone, email);
    onNavigate("SignUpFilled");
  }

  return (
    <Page title="Тіркелу" onBack={onBack}>
      <Heading
        title="Жаңа аккаунт ашу"
        subtitle="Fiksik Bank қосымшасына қош келдіңіз!"
      />

      <Text style={{
        color: C.green,
        fontWeight: "700",
        marginBottom: 20
      }}>
        Жеке мәліметтер
      </Text>

      <Field label="Аты-жөні" value={name}
        onChangeText={setName} placeholder="Аты-жөніңіз" />

      <Field label="Телефон нөмірі" value={phone}
        onChangeText={setPhone}
        placeholder="+7 700 000 00 00"
        keyboardType="phone-pad" />

      <Field label="Электрондық пошта" value={email}
        onChangeText={setEmail}
        placeholder="example@mail.com"
        keyboardType="email-address" />

      <Field label="Құпиясөз" value={password}
        onChangeText={setPassword}
        placeholder="Кемінде 6 таңба"
        secureTextEntry />

      <Field label="Құпиясөзді қайталаңыз" value={repeat}
        onChangeText={setRepeat}
        placeholder="Қайта енгізіңіз"
        secureTextEntry />

      <Check
        title="Қолдану шарттары мен құпиялылық талаптарын қабылдаймын"
        value={accepted}
        onPress={() => setAccepted(!accepted)}
      />

      <Button title="Тіркелуді жалғастыру" onPress={proceed} />

      <Button
        title="Аккаунтым бар, кіру"
        secondary
        onPress={() => onNavigate("SignIn")}
      />

      <Info text="Тіркелу демо режимінде жұмыс істейді. Мәліметтер серверге жіберілмейді." />
    </Page>
  );
}
