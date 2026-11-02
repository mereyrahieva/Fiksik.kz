import React, { useState } from "react";
import {
  View, Text, ScrollView, TextInput,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function MobileRechargeFilled({ onBack, onNext }: Props) {
  const [phone, setPhone] = useState("+7 700 123 4567");
  const [amount, setAmount] = useState("20");
  const [operator, setOperator] = useState("Beeline");
  const [confirmed, setConfirmed] = useState(false);

  function submit() {
    if (phone.replace(/\D/g, "").length < 10 ||
        !Number.isFinite(Number(amount)) || Number(amount) <= 0) {
      Alert.alert("Error", "Check your recharge details");
      return;
    }
    if (!confirmed) {
      Alert.alert("Confirmation", "Please confirm the recharge details");
      return;
    }
    onNext?.();
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Mobile Recharge</Text>
      </TouchableOpacity>
      <Text style={s.title}>Recharge Mobile</Text>
      <Text style={s.sub}>Review your mobile recharge</Text>

      <View style={s.phoneCard}>
        <Text style={s.phoneIcon}>📱</Text>
        <Text style={s.phoneNumber}>{phone}</Text>
        <Text style={s.operatorName}>{operator}</Text>
      </View>

      <Text style={s.label}>Operator</Text>
      <View style={s.operators}>
        {["Beeline", "Kcell", "Tele2"].map(item => (
          <TouchableOpacity
            key={item}
            style={[s.operator, item === operator && s.active]}
            onPress={() => setOperator(item)}
          >
            <Text style={[s.operatorText, item === operator && s.activeText]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={s.label}>Phone Number</Text>
      <TextInput style={s.input} value={phone}
        onChangeText={setPhone} keyboardType="phone-pad" />

      <Text style={s.label}>Amount (USD)</Text>
      <TextInput style={s.input} value={amount}
        onChangeText={setAmount} keyboardType="decimal-pad" />

      <View style={s.totalRow}>
        <Text style={s.muted}>Total Amount</Text>
        <Text style={s.total}>${(Number(amount) || 0).toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={s.checkRow} onPress={() => setConfirmed(!confirmed)}>
        <Text style={s.check}>{confirmed ? "☑" : "□"}</Text>
        <Text style={s.muted}>I confirm the demo recharge details</Text>
      </TouchableOpacity>

      <TouchableOpacity style={s.button} onPress={submit}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { padding: 24, paddingBottom: 45 },
  back: { color: "#3525B5", fontSize: 19, marginBottom: 27 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  sub: { color: "#888", marginTop: 8 },
  phoneCard: { backgroundColor: "#F2F0FF", borderRadius: 17, alignItems: "center", padding: 23, marginVertical: 26 },
  phoneIcon: { fontSize: 48 },
  phoneNumber: { color: "#3525B5", fontSize: 19, fontWeight: "bold", marginTop: 12 },
  operatorName: { color: "#888", marginTop: 7 },
  label: { color: "#555", marginBottom: 9, fontSize: 13 },
  operators: { flexDirection: "row", gap: 8, marginBottom: 20 },
  operator: { flex: 1, alignItems: "center", padding: 13, backgroundColor: "#F3F1FF", borderRadius: 10 },
  active: { backgroundColor: "#3525B5" },
  operatorText: { color: "#3525B5", fontSize: 12, fontWeight: "bold" },
  activeText: { color: "#fff" },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 11, height: 52, paddingHorizontal: 14, marginBottom: 20 },
  totalRow: { flexDirection: "row", justifyContent: "space-between", backgroundColor: "#F6F4FF", padding: 18, borderRadius: 12 },
  muted: { color: "#888", fontSize: 12 },
  total: { fontSize: 21, color: "#3525B5", fontWeight: "bold" },
  checkRow: { flexDirection: "row", alignItems: "center", marginTop: 22 },
  check: { fontSize: 24, color: "#3525B5", marginRight: 10 },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center", marginTop: 26 },
  white: { color: "#fff", fontWeight: "bold" }
});