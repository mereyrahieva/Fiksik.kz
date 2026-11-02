import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function MobileRechargeOTP({ onBack, onNext }: Props) {
  const [code, setCode] = useState("");
  const demoCode = "123456";

  function verify() {
    if (code !== demoCode) {
      Alert.alert("Incorrect Code", "Enter the demo code 123456");
      return;
    }
    onNext?.();
  }

  return (
    <View style={s.page}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Verification</Text>
      </TouchableOpacity>

      <View style={s.hero}>
        <Text style={s.icon}>✉️</Text>
      </View>

      <Text style={s.title}>Verification Code</Text>
      <Text style={s.subtitle}>
        Enter the 6-digit verification code to confirm
        your mobile recharge.
      </Text>

      <Text style={s.label}>OTP Code</Text>
      <TextInput
        style={s.input}
        placeholder="000000"
        value={code}
        onChangeText={value =>
          setCode(value.replace(/\D/g, "").slice(0, 6))
        }
        keyboardType="number-pad"
        maxLength={6}
        textAlign="center"
      />

      <TouchableOpacity
        onPress={() => Alert.alert("Demo Code", demoCode)}
      >
        <Text style={s.resend}>Resend Code</Text>
      </TouchableOpacity>

      <View style={s.info}>
        <Text style={s.infoText}>
          For demonstration, use verification code 123456.
        </Text>
      </View>

      <TouchableOpacity style={s.button} onPress={verify}>
        <Text style={s.white}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff", padding: 24 },
  back: { color: "#3525B5", fontSize: 19 },
  hero: { height: 235, justifyContent: "center", alignItems: "center" },
  icon: { fontSize: 90 },
  title: { color: "#3525B5", fontWeight: "bold", fontSize: 26 },
  subtitle: { color: "#888", marginTop: 12, lineHeight: 22, marginBottom: 30 },
  label: { fontSize: 13, color: "#666", marginBottom: 9 },
  input: { borderWidth: 1, borderColor: "#D4CEF5", height: 58, borderRadius: 12, fontSize: 25, color: "#3525B5", letterSpacing: 7 },
  resend: { color: "#3525B5", textAlign: "right", fontWeight: "bold", marginTop: 20 },
  info: { backgroundColor: "#F5F3FF", padding: 16, borderRadius: 12, marginTop: 30 },
  infoText: { color: "#777", fontSize: 12, lineHeight: 20 },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center", marginTop: 28 },
  white: { color: "#fff", fontWeight: "bold" }
});