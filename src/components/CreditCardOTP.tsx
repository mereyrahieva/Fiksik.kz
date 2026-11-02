
import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function CreditCardOTP({ onBack, onNext }: Props) {
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);

  function verify() {
    if (code !== "123456") {
      Alert.alert("Invalid Code", "Use the demo OTP: 123456");
      return;
    }
    setVerified(true);
    Alert.alert("Verified", "Demo payment approved.", [
      { text: "Continue", onPress: onNext }
    ]);
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Credit Card Payment</Text>
      </TouchableOpacity>
      <View style={s.hero}><Text style={s.icon}>🔐</Text></View>
      <Text style={s.title}>OTP Verification</Text>
      <Text style={s.subtitle}>
        Enter your 6-digit code to confirm the card payment.
      </Text>
      <View style={s.card}>
        <Text style={s.muted}>Payment Amount</Text>
        <Text style={s.amount}>$200.00</Text>
        <Text style={s.muted}>Credit Card •••• 4589</Text>
      </View>
      <Text style={s.label}>Verification Code</Text>
      <TextInput style={s.input} value={code}
        onChangeText={value => {
          setCode(value.replace(/\D/g, "").slice(0, 6));
          setVerified(false);
        }}
        maxLength={6} keyboardType="number-pad"
        textAlign="center" placeholder="000000" />
      <TouchableOpacity
        onPress={() => Alert.alert("Demo Code", "123456")}>
        <Text style={s.resend}>Resend Verification Code</Text>
      </TouchableOpacity>
      {verified && <Text style={s.success}>✓ Code Verified</Text>}
      <TouchableOpacity style={s.button} onPress={verify}>
        <Text style={s.white}>Verify & Continue</Text>
      </TouchableOpacity>
      <Text style={s.note}>No real SMS or financial operation.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  body: { padding: 24, paddingBottom: 50 },
  back: { fontSize: 19, color: "#3525B5" },
  hero: { height: 175, alignItems: "center", justifyContent: "center" },
  icon: { fontSize: 85 },
  title: { fontSize: 25, fontWeight: "bold", color: "#3525B5" },
  subtitle: { marginTop: 12, color: "#888", lineHeight: 22 },
  card: { backgroundColor: "#F5F3FF", borderRadius: 15, alignItems: "center", padding: 21, marginVertical: 27 },
  muted: { color: "#888", fontSize: 12 },
  amount: { fontSize: 31, color: "#3525B5", fontWeight: "bold", marginVertical: 12 },
  label: { color: "#555", marginBottom: 9 },
  input: { borderWidth: 1, borderColor: "#D1CBED", borderRadius: 11, height: 57, fontSize: 24, color: "#3525B5", letterSpacing: 7 },
  resend: { color: "#3525B5", textAlign: "right", marginTop: 18, fontWeight: "bold" },
  success: { color: "#25A777", textAlign: "center", marginTop: 20 },
  button: { padding: 17, borderRadius: 11, alignItems: "center", backgroundColor: "#3525B5", marginTop: 34 },
  white: { color: "#FFF", fontWeight: "bold" },
  note: { color: "#AAA", textAlign: "center", fontSize: 11, marginTop: 17 }
});
