
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Button,
  Card, Detail, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function SignUpFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [email, setEmail] = useState("");

  function complete() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      Alert.alert("Қате", "Электрондық поштаны дұрыс енгізіңіз.");
      return;
    }
    bank.setRegistered(true);
    Alert.alert(
      "Тіркелу аяқталды",
      "Демо аккаунтыңыз дайын!",
      [{ text: "Басты бетке өту", onPress: () => onNavigate("Home") }]
    );
  }

  return (
    <Page title="Тіркелуді растау" onBack={onBack}>
      <Heading
        title="Мәліметтеріңізді тексеріңіз"
        subtitle="Аккаунтты ашу үшін ақпаратты растаңыз."
      />

      <Card>
        <Detail label="Аты-жөні" value={bank.name} />
        <Detail label="Телефон нөмірі" value={bank.phone} />
        <Detail label="Аккаунт" value="Жаңа пайдаланушы" />
      </Card>

      <Field
        label="Электрондық пошта"
        value={email}
        onChangeText={setEmail}
        placeholder="Поштаңызды енгізіңіз"
        keyboardType="email-address"
      />

      <Info text="Бұл оқу жобасы. Нақты банк аккаунты ашылмайды." />

      <Button title="Тіркелуді аяқтау" onPress={complete} />
      <Button title="Мәліметтерді түзету" secondary onPress={onBack} />
    </Page>
  );
}
