import React, { useState } from "react";
import {
  View, Text, ScrollView, TextInput,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function MobileRechargeEmpty({ onBack, onNext }: Props) {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [operator, setOperator] = useState("Beeline");

  const submit = () => {
    if (phone.replace(/\D/g, "").length < 10 ||
        !Number.isFinite(Number(amount)) || Number(amount) <= 0) {
      Alert.alert("Error", "Enter a valid phone number and amount");
      return;
    }
    onNext?.();
  };

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Mobile Recharge</Text>
      </TouchableOpacity>
      <Text style={s.title}>Mobile Prepaid</Text>
      <Text style={s.sub}>Recharge your mobile phone easily</Text>
      <View style={s.hero}><Text style={s.icon}>📱</Text></View>

      <Text style={s.label}>Mobile Operator</Text>
      <View style={s.operators}>
        {["Beeline", "Kcell", "Tele2"].map(item => (
          <TouchableOpacity
            key={item}
            onPress={() => setOperator(item)}
            style={[s.operator, operator === item && s.active]}
          >
            <Text style={[s.operatorText, operator === item && s.activeText]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={s.label}>Phone Number</Text>
      <TextInput
        style={s.input}
        placeholder="+7 700 000 00 00"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text style={s.label}>Recharge Amount</Text>
      <TextInput
        style={s.input} placeholder="0.00"
        value={amount} onChangeText={setAmount}
        keyboardType="decimal-pad"
      />

      <TouchableOpacity style={s.button} onPress={submit}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
      <Text style={s.note}>No real mobile top-up is made.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { padding: 24, paddingBottom: 50 },
  back: { color: "#3525B5", fontSize: 19, marginBottom: 26 },
  title: { color: "#3525B5", fontWeight: "bold", fontSize: 25 },
  sub: { color: "#999", marginTop: 8 },
  hero: { height: 165, backgroundColor: "#F5F3FF", marginVertical: 25, borderRadius: 18, justifyContent: "center", alignItems: "center" },
  icon: { fontSize: 75 },
  label: { color: "#555", fontSize: 13, marginBottom: 9 },
  operators: { flexDirection: "row", gap: 9, marginBottom: 25 },
  operator: { flex: 1, alignItems: "center", backgroundColor: "#F3F1FF", paddingVertical: 14, borderRadius: 10 },
  active: { backgroundColor: "#3525B5" },
  operatorText: { color: "#3525B5", fontWeight: "bold" },
  activeText: { color: "#fff" },
  input: { height: 52, borderWidth: 1, borderColor: "#ddd", borderRadius: 11, paddingHorizontal: 14, marginBottom: 20 },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center", marginTop: 16 },
  white: { color: "#fff", fontWeight: "bold" },
  note: { color: "#aaa", textAlign: "center", marginTop: 17, fontSize: 11 }
});