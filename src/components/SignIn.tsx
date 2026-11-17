
import React, { useState } from "react";
import { Text, TouchableOpacity, Alert } from "react-native";
import {
  Page, Heading, Field, Button, Info,
  ScreenProps, common
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function SignIn({ onNavigate }: ScreenProps) {
  const bank = useBank();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  function login() {
    if (phone.replace(/\D/g, "").length < 10) {
      Alert.alert("Қате", "Телефон нөмірін дұрыс енгізіңіз.");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Қате", "Құпиясөз кемінде 6 таңба болуы керек.");
      return;
    }
    bank.setPhone(phone);
    onNavigate("Home");
  }

  return (
    <Page title="Fiksik Bank" home>
      <Heading
        title="Қош келдіңіз! 💚"
        subtitle="Банк қызметтерін бір қосымшада басқарыңыз."
      />

      <Info text="Қауіпсіз әрі ыңғайлы мобильді банкингтің демо нұсқасы." />

      <Field
        label="Телефон нөмірі"
        value={phone}
        onChangeText={setPhone}
        placeholder="+7 700 000 00 00"
        keyboardType="phone-pad"
      />

      <Field
        label="Құпиясөз"
        value={password}
        onChangeText={setPassword}
        placeholder="Құпиясөзді енгізіңіз"
        secureTextEntry={!visible}
      />

      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <Text style={[common.link, { textAlign: "right" }]}>
          {visible ? "Құпиясөзді жасыру" : "Құпиясөзді көрсету"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginVertical: 23, alignItems: "flex-end" }}
        onPress={() => onNavigate("ForgotPhoneEmpty")}
      >
        <Text style={common.link}>Құпиясөзді ұмыттыңыз ба?</Text>
      </TouchableOpacity>

      <Button title="Жүйеге кіру" onPress={login} />
      <Button
        title="Демо режимінде кіру"
        secondary
        onPress={() => onNavigate("Home")}
      />
      <Button
        title="Жаңа аккаунт ашу"
        secondary
        onPress={() => onNavigate("SignUpEmpty")}
      />
    </Page>
  );
}
