import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function WithdrawEmpty({ onBack, onNext }: Props) {
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("Premium Account");
  const balance = 2500;

  const submit = () => {
    const value = Number(amount);
    if (!Number.isFinite(value) || value <= 0 || value > balance) {
      Alert.alert("Invalid amount", "Enter an amount between $0 and $2,500");
      return;
    }
    onNext?.();
  };

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Withdraw</Text>
      </TouchableOpacity>
      <Text style={s.title}>Withdraw Money</Text>
      <Text style={s.sub}>Choose the amount you want to withdraw</Text>

      <View style={s.card}>
        <Text style={s.cardLabel}>Available Balance</Text>
        <Text style={s.balance}>$2,500.00</Text>
        <Text style={s.cardLabel}>•••• 4589</Text>
      </View>

      <Text style={s.label}>Withdraw from</Text>
      <TouchableOpacity
        style={s.account}
        onPress={() => setAccount(account === "Premium Account" ? "Savings Account" : "Premium Account")}
      >
        <Text style={s.accountText}>{account}</Text>
        <Text style={s.arrow}>⌄</Text>
      </TouchableOpacity>

      <Text style={s.label}>Amount (USD)</Text>
      <TextInput
        style={s.input}
        placeholder="Enter amount"
        keyboardType="decimal-pad"
        value={amount}
        onChangeText={setAmount}
      />

      <View style={s.quickRow}>
        {[50, 100, 200, 500].map(value => (
          <TouchableOpacity key={value} style={s.quick}
            onPress={() => setAmount(String(value))}>
            <Text style={s.quickText}>${value}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={s.info}>
        <Text style={s.infoText}>Transaction Fee</Text>
        <Text style={s.infoValue}>$0.00</Text>
      </View>

      <TouchableOpacity style={s.button} onPress={submit}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
      <Text style={s.note}>Demo withdrawal only</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { padding: 24, paddingBottom: 50 },
  back: { color: "#3525B5", fontSize: 19, marginBottom: 28 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  sub: { color: "#999", marginTop: 8, marginBottom: 25 },
  card: { backgroundColor: "#25379C", padding: 23, borderRadius: 17, height: 155, justifyContent: "space-between" },
  cardLabel: { color: "#D1D6F5" },
  balance: { color: "#fff", fontSize: 29, fontWeight: "bold" },
  label: { color: "#555", marginTop: 24, marginBottom: 9, fontSize: 13 },
  account: { height: 52, borderWidth: 1, borderColor: "#ddd", borderRadius: 11, paddingHorizontal: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  accountText: { color: "#333" },
  arrow: { color: "#3525B5", fontSize: 22 },
  input: { height: 55, borderWidth: 1, borderColor: "#ddd", borderRadius: 11, paddingHorizontal: 15, fontSize: 21, color: "#3525B5" },
  quickRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 17 },
  quick: { backgroundColor: "#F0EEFF", paddingVertical: 13, paddingHorizontal: 15, borderRadius: 10 },
  quickText: { color: "#3525B5", fontWeight: "bold" },
  info: { flexDirection: "row", justifyContent: "space-between", backgroundColor: "#F7F6FC", padding: 18, borderRadius: 12, marginTop: 28 },
  infoText: { color: "#888" },
  infoValue: { color: "#3525B5", fontWeight: "bold" },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center", marginTop: 30 },
  white: { color: "#fff", fontWeight: "bold" },
  note: { color: "#aaa", textAlign: "center", marginTop: 15 }
});