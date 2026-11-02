
import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function ElectricBillOTP({ onBack, onNext }: Props) {
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);

  function verify() {
    if (code !== "123456") {
      Alert.alert("Invalid Code", "Use the demo code 123456.");
      return;
    }
    setVerified(true);
    Alert.alert("Verification Successful", "Demo payment approved.", [
      { text: "Continue", onPress: onNext }
    ]);
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Electricity Payment</Text>
      </TouchableOpacity>
      <View style={s.hero}><Text style={s.icon}>🔐</Text></View>
      <Text style={s.title}>Verify Payment</Text>
      <Text style={s.subtitle}>
        Enter the 6-digit code to confirm your electric bill payment.
      </Text>
      <View style={s.summary}>
        <Text style={s.provider}>Electric Utility</Text>
        <Text style={s.amount}>$75.00</Text>
        <Text style={s.muted}>VISA •••• 4589</Text>
      </View>
      <Text style={s.label}>Verification Code</Text>
      <TextInput
        style={s.input} placeholder="000000"
        value={code}
        onChangeText={text => {
          setCode(text.replace(/\D/g, "").slice(0, 6));
          setVerified(false);
        }}
        keyboardType="number-pad"
        maxLength={6}
        textAlign="center"
      />
      <TouchableOpacity onPress={() => Alert.alert("Demo Code", "123456")}>
        <Text style={s.resend}>Resend Code</Text>
      </TouchableOpacity>
      <View style={s.info}>
        <Text style={s.infoText}>Demo verification code: 123456</Text>
      </View>
      {verified && <Text style={s.success}>✓ Code verified</Text>}
      <TouchableOpacity style={s.button} onPress={verify}>
        <Text style={s.white}>Verify Payment</Text>
      </TouchableOpacity>
      <Text style={s.note}>No real SMS or payment is processed.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  body: { padding: 24, paddingBottom: 50 },
  back: { color: "#3525B5", fontSize: 19 },
  hero: { height: 155, alignItems: "center", justifyContent: "center" },
  icon: { fontSize: 80 },
  title: { fontSize: 25, fontWeight: "bold", color: "#3525B5" },
  subtitle: { color: "#888", marginTop: 12, lineHeight: 22 },
  summary: { backgroundColor: "#F5F3FF", borderRadius: 15, padding: 22, alignItems: "center", marginVertical: 25 },
  provider: { color: "#333", fontWeight: "bold", fontSize: 16 },
  amount: { color: "#3525B5", fontSize: 30, fontWeight: "bold", marginVertical: 13 },
  muted: { color: "#888", fontSize: 12 },
  label: { color: "#555", marginBottom: 10 },
  input: { height: 57, borderWidth: 1, borderColor: "#D1CBF0", borderRadius: 11, fontSize: 25, letterSpacing: 7, color: "#3525B5" },
  resend: { color: "#3525B5", fontWeight: "bold", textAlign: "right", marginTop: 20 },
  info: { backgroundColor: "#F7F6FC", borderRadius: 12, padding: 16, marginTop: 27 },
  infoText: { color: "#777", fontSize: 12 },
  success: { textAlign: "center", color: "#25A878", marginTop: 17 },
  button: { backgroundColor: "#3525B5", borderRadius: 11, padding: 17, alignItems: "center", marginTop: 28 },
  white: { color: "#FFF", fontWeight: "bold" },
  note: { color: "#AAA", fontSize: 11, textAlign: "center", marginTop: 17 }
});
