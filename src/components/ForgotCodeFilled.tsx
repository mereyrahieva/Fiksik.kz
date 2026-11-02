
import React, { useState } from "react";
import {
  View, Text, TextInput, Pressable,
  StyleSheet, Alert
} from "react-native";

type Props = { onNext?: () => void; onBack?: () => void };

export default function ForgotCodeFilled({ onNext, onBack }: Props) {
  const [code, setCode] = useState("123456");

  const verify = () => {
    if (code.length !== 6) {
      Alert.alert("Error", "Enter a six-digit code");
      return;
    }
    if (code !== "123456") {
      Alert.alert("Demo", "Use 123456");
      return;
    }
    onNext?.();
  };

  return (
    <View style={s.page}>
      <Pressable onPress={onBack}>
        <Text style={s.back}>‹  Verification</Text>
      </Pressable>
      <View style={s.illustration}>
        <Text style={s.icon}>🔑</Text>
      </View>
      <Text style={s.title}>Verification Code</Text>
      <Text style={s.desc}>Enter the code sent to your phone.</Text>
      <Text style={s.label}>OTP Code</Text>
      <TextInput
        style={s.code} value={code}
        onChangeText={setCode}
        keyboardType="numeric" maxLength={6}
        textAlign="center"
      />
      <View style={s.verified}>
        <Text style={s.valid}>✓ Code entered</Text>
      </View>
      <Pressable onPress={() => Alert.alert("Demo", "Your code is 123456")}>
        <Text style={s.resend}>Didn't receive the code? Resend</Text>
      </Pressable>
      <Pressable style={s.button} onPress={verify}>
        <Text style={s.white}>Verify</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, padding: 24, backgroundColor: "#fff" },
  back: { fontSize: 19, color: "#3525B5" },
  illustration: { height: 220, alignItems: "center", justifyContent: "center" },
  icon: { fontSize: 92 },
  title: { color: "#3525B5", fontWeight: "bold", fontSize: 26 },
  desc: { color: "#888", lineHeight: 23, marginVertical: 12 },
  label: { marginTop: 20, marginBottom: 9, color: "#666" },
  code: { height: 54, borderWidth: 1, borderColor: "#3525B5", borderRadius: 11, fontSize: 25, letterSpacing: 7, color: "#3525B5" },
  verified: { marginTop: 11 },
  valid: { color: "#229E70", fontSize: 12 },
  resend: { color: "#3525B5", textAlign: "right", marginTop: 20 },
  button: { backgroundColor: "#3525B5", marginTop: 32, padding: 17, alignItems: "center", borderRadius: 10 },
  white: { color: "#fff", fontWeight: "bold" }
});
