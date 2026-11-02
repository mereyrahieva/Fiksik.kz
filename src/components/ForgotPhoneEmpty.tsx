
import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onNext?: () => void; onBack?: () => void };

export default function ForgotPhoneEmpty({ onNext, onBack }: Props) {
  const [phone, setPhone] = useState("");

  const sendCode = () => {
    if (phone.replace(/\D/g, "").length < 10) {
      Alert.alert("Invalid number", "Enter a valid phone number");
      return;
    }
    Alert.alert("Demo", "Verification code: 123456", [
      { text: "Continue", onPress: onNext }
    ]);
  };

  return (
    <View style={s.page}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Forgot password</Text>
      </TouchableOpacity>
      <View style={s.hero}>
        <Text style={s.icon}>📲</Text>
      </View>
      <Text style={s.title}>Forgot password?</Text>
      <Text style={s.desc}>
        Enter your phone number and we'll help you reset your password.
      </Text>
      <Text style={s.label}>Phone number</Text>
      <TextInput
        style={s.input} value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        placeholder="+7 700 000 00 00"
      />
      <TouchableOpacity style={s.button} onPress={sendCode}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff", padding: 24 },
  back: { color: "#3525B5", fontSize: 19 },
  hero: { height: 240, justifyContent: "center", alignItems: "center" },
  icon: { fontSize: 95 },
  title: { color: "#3525B5", fontSize: 26, fontWeight: "bold" },
  desc: { color: "#888", lineHeight: 22, marginTop: 12, marginBottom: 30 },
  label: { color: "#555", marginBottom: 8 },
  input: {
    borderWidth: 1, borderColor: "#ddd", borderRadius: 12,
    paddingHorizontal: 14, height: 52
  },
  button: {
    backgroundColor: "#3525B5", marginTop: 30,
    padding: 17, borderRadius: 11, alignItems: "center"
  },
  white: { color: "#fff", fontWeight: "bold" }
});
