import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, ScrollView
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function WithdrawCustom({ onBack, onNext }: Props) {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const balance = 2500;

  const total = Number(amount);

  function proceed() {
    if (!amount.trim() || !Number.isFinite(total) ||
        total <= 0 || total > balance) {
      Alert.alert("Invalid amount", "Please enter a valid amount up to $2,500.");
      return;
    }
    onNext?.();
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Withdraw</Text>
      </TouchableOpacity>
      <Text style={s.title}>Custom Amount</Text>
      <Text style={s.subtitle}>Enter how much you want to withdraw</Text>

      <View style={s.iconBox}><Text style={s.icon}>💵</Text></View>
      <Text style={s.label}>Withdrawal Amount</Text>
      <View style={s.amountRow}>
        <Text style={s.currency}>$</Text>
        <TextInput
          style={s.amountInput}
          value={amount}
          onChangeText={setAmount}
          keyboardType="decimal-pad"
          placeholder="0.00"
        />
        <Text style={s.currency}>USD</Text>
      </View>
      <Text style={s.available}>Available balance: $2,500.00</Text>

      <Text style={s.label}>Note (optional)</Text>
      <TextInput
        style={s.input}
        value={note}
        onChangeText={setNote}
        placeholder="Add a note"
      />

      <View style={s.summary}>
        <Text style={s.summaryTitle}>Withdrawal Summary</Text>
        <View style={s.row}><Text style={s.muted}>Amount</Text><Text>${(total || 0).toFixed(2)}</Text></View>
        <View style={s.row}><Text style={s.muted}>Fee</Text><Text>$0.00</Text></View>
        <View style={s.row}><Text style={s.muted}>Total</Text><Text style={s.total}>${(total || 0).toFixed(2)}</Text></View>
      </View>

      <TouchableOpacity style={s.button} onPress={proceed}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
      <Text style={s.note}>No actual withdrawal is made.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { padding: 24, paddingBottom: 50 },
  back: { fontSize: 19, color: "#3525B5", marginBottom: 28 },
  title: { fontSize: 25, color: "#3525B5", fontWeight: "bold" },
  subtitle: { color: "#999", marginTop: 9 },
  iconBox: { height: 170, justifyContent: "center", alignItems: "center", backgroundColor: "#F6F4FF", borderRadius: 17, marginVertical: 25 },
  icon: { fontSize: 80 },
  label: { color: "#555", fontSize: 13, marginBottom: 9 },
  amountRow: { flexDirection: "row", borderWidth: 1, borderColor: "#DCD8F5", borderRadius: 11, alignItems: "center", height: 60, paddingHorizontal: 15 },
  currency: { color: "#3525B5", fontWeight: "bold", fontSize: 20 },
  amountInput: { flex: 1, fontSize: 24, color: "#333", paddingHorizontal: 10 },
  available: { color: "#999", fontSize: 12, marginTop: 12, marginBottom: 28 },
  input: { height: 52, borderWidth: 1, borderColor: "#ddd", borderRadius: 11, paddingHorizontal: 14 },
  summary: { padding: 18, backgroundColor: "#F7F6FC", borderRadius: 13, marginTop: 28 },
  summaryTitle: { fontWeight: "bold", color: "#333", fontSize: 17, marginBottom: 12 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 11, borderTopWidth: 1, borderColor: "#eae8f0" },
  muted: { color: "#888" },
  total: { color: "#3525B5", fontWeight: "bold", fontSize: 18 },
  button: { backgroundColor: "#3525B5", borderRadius: 11, padding: 17, alignItems: "center", marginTop: 28 },
  white: { color: "#fff", fontWeight: "bold" },
  note: { color: "#aaa", marginTop: 15, textAlign: "center", fontSize: 11 }
});