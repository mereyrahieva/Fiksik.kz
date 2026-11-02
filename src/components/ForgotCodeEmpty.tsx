
import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onNext?: () => void; onBack?: () => void };

export default function ForgotCodeEmpty({ onNext, onBack }: Props) {
  const [code, setCode] = useState("");

  function verify() {
    if (code !== "123456") {
      Alert.alert("Incorrect code", "For demo, enter 123456");
      return;
    }
    onNext?.();
  }

  return (
    <View style={s.container}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Verification</Text>
      </TouchableOpacity>
      <View style={s.hero}><Text style={s.icon}>✉️</Text></View>
      <Text style={s.title}>Verification Code</Text>
      <Text style={s.subtitle}>
        Enter the 6-digit code to verify your phone number.
      </Text>
      <Text style={s.label}>Verification code</Text>
      <TextInput
        style={s.input} value={code}
        onChangeText={value => setCode(value.replace(/\D/g, "").slice(0, 6))}
        keyboardType="number-pad" maxLength={6}
        placeholder="— — — — — —"
        textAlign="center"
      />
      <TouchableOpacity onPress={() => Alert.alert("Demo code", "123456")}>
        <Text style={s.resend}>Resend verification code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.button} onPress={verify}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 24 },
  back: { color: "#3525B5", fontSize: 19 },
  hero: { height: 220, alignItems: "center", justifyContent: "center" },
  icon: { fontSize: 90 },
  title: { fontSize: 25, color: "#3525B5", fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 10, lineHeight: 22, marginBottom: 30 },
  label: { color: "#555", marginBottom: 9 },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 10, height: 55, fontSize: 22, letterSpacing: 6, color: "#3525B5" },
  resend: { color: "#3525B5", textAlign: "right", marginTop: 17 },
  button: { backgroundColor: "#3525B5", padding: 17, alignItems: "center", borderRadius: 12, marginTop: 35 },
  white: { color: "white", fontWeight: "bold" }
});
