
import React, { useState } from "react";
import {
  View, Text, StyleSheet, Alert,
  TouchableOpacity
} from "react-native";
import {
  Page, Heading, Field, Button,
  Check, Info, ScreenProps, C
} from "./EmeraldUI";

export default function SignIn({
  onNavigate, onBack
}: ScreenProps) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  function login() {
    if (phone.trim().length < 10) {
      Alert.alert("Қате", "Телефон нөмірін дұрыс енгізіңіз.");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Қате", "Құпиясөз кемінде 6 таңба болуы керек.");
      return;
    }
    onNavigate("Home");
  }

  return (
    <Page title="Fiksik Bank">
      <View style={s.logo}>
        <Text style={s.logoText}>F</Text>
      </View>

      <Text style={s.brand}>Fiksik Bank</Text>
      <Text style={s.tagline}>Қаржыңыз — сенімді қолда</Text>

      <Heading
        title="Қош келдіңіз!"
        subtitle="Жеке кабинетіңізге кіру үшін мәліметтерді енгізіңіз."
      />

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
        secureTextEntry
      />

      <TouchableOpacity
        onPress={() => onNavigate("ForgotPhoneEmpty")}
        style={{ alignSelf: "flex-end", marginBottom: 8 }}
      >
        <Text style={{ color: C.green, fontWeight: "700" }}>
          Құпиясөзді ұмыттыңыз ба?
        </Text>
      </TouchableOpacity>

      <Check
        title="Осы құрылғыда мені есте сақтау"
        value={remember}
        onPress={() => setRemember(!remember)}
      />

      <Button title="Кіру" onPress={login} />

      <Button
        title="Жаңа аккаунт ашу"
        secondary
        onPress={() => onNavigate("SignUpEmpty")}
      />

      <Info text="Бұл демонстрациялық нұсқа. Кіру сервер арқылы тексерілмейді." />
    </Page>
  );
}

const s = StyleSheet.create({
  logo: {
    backgroundColor: C.green,
    height: 90,
    width: 90,
    borderRadius: 28,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    marginBottom: 15
  },
  logoText: {
    fontSize: 52,
    fontWeight: "900",
    color: C.white
  },
  brand: {
    color: C.dark,
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center"
  },
  tagline: {
    color: C.gray,
    textAlign: "center",
    marginTop: 7,
    marginBottom: 35
  }
});
