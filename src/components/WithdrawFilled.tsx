import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function WithdrawFilled({ onBack, onNext }: Props) {
  const [amount, setAmount] = useState("500");
  const [account, setAccount] = useState("Premium Account");
  const [confirmed, setConfirmed] = useState(false);

  function submit() {
    const value = Number(amount);
    if (!Number.isFinite(value) || value <= 0 || value > 2500) {
      Alert.alert("Error", "Enter an amount between $0 and $2,500");
      return;
    }
    if (!confirmed) {
      Alert.alert("Confirmation", "Confirm the demo withdrawal");
      return;
    }
    Alert.alert("Withdrawal", `Preview: $${value.toFixed(2)}`, [
      { text: "Cancel", style: "cancel" },
      { text: "Continue", onPress: onNext }
    ]);
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Withdraw Money</Text>
      </TouchableOpacity>
      <Text style={s.title}>Confirm Withdrawal</Text>
      <Text style={s.subtitle}>Review your withdrawal information</Text>

      <View style={s.card}>
        <Text style={s.whiteSmall}>From Account</Text>
        <Text style={s.cardTitle}>{account}</Text>
        <Text style={s.whiteSmall}>•••• 4589</Text>
        <Text style={s.cardBalance}>$2,500.00</Text>
      </View>

      <Text style={s.label}>Account</Text>
      <TouchableOpacity
        style={s.field}
        onPress={() => setAccount(account === "Premium Account" ? "Savings Account" : "Premium Account")}
      >
        <Text>{account}</Text><Text style={s.purple}>⌄</Text>
      </TouchableOpacity>

      <Text style={s.label}>Amount</Text>
      <TextInput style={s.field} value={amount} onChangeText={setAmount} keyboardType="decimal-pad" />

      <View style={s.summary}>
        <View style={s.row}>
          <Text style={s.muted}>Withdrawal</Text>
          <Text style={s.bold}>${(Number(amount) || 0).toFixed(2)}</Text>
        </View>
        <View style={s.row}>
          <Text style={s.muted}>Transaction fee</Text>
          <Text>$0.00</Text>
        </View>
        <View style={s.row}>
          <Text style={s.muted}>Total</Text>
          <Text style={s.total}>${(Number(amount) || 0).toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity style={s.checkRow} onPress={() => setConfirmed(!confirmed)}>
        <Text style={s.check}>{confirmed ? "☑" : "□"}</Text>
        <Text style={s.muted}>I confirm this demo withdrawal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={s.button} onPress={submit}>
        <Text style={s.white}>Confirm Withdrawal</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { padding: 24, paddingBottom: 45 },
  back: { color: "#3525B5", fontSize: 19, marginBottom: 27 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 8, marginBottom: 25 },
  card: { backgroundColor: "#25379C", borderRadius: 17, padding: 23, marginBottom: 27 },
  whiteSmall: { color: "#D6D8FC", fontSize: 12 },
  cardTitle: { color: "#fff", fontSize: 21, fontWeight: "bold", marginVertical: 10 },
  cardBalance: { color: "#fff", fontSize: 25, fontWeight: "bold", marginTop: 20 },
  label: { color: "#666", fontSize: 13, marginBottom: 8 },
  field: { height: 52, borderWidth: 1, borderColor: "#ddd", borderRadius: 11, paddingHorizontal: 14, marginBottom: 18, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  purple: { color: "#3525B5" },
  summary: { backgroundColor: "#F7F6FC", borderRadius: 13, padding: 18, marginTop: 10 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 12 },
  muted: { color: "#888", fontSize: 12 },
  bold: { fontWeight: "bold" },
  total: { color: "#3525B5", fontWeight: "bold", fontSize: 20 },
  checkRow: { flexDirection: "row", alignItems: "center", marginTop: 24 },
  check: { fontSize: 24, color: "#3525B5", marginRight: 9 },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center", marginTop: 27 },
  white: { color: "#fff", fontWeight: "bold" }
});