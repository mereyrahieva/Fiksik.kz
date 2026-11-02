
import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function CreditCardCheckout({ onBack, onNext }: Props) {
  const [amount, setAmount] = useState("200");
  const [account, setAccount] = useState("Premium Account •••• 4589");
  const [confirmed, setConfirmed] = useState(false);
  const balance = 2500;

  function proceed() {
    const value = Number(amount);
    if (!Number.isFinite(value) || value <= 0 || value > balance) {
      Alert.alert("Invalid Amount", "Enter an amount between $0 and $2,500.");
      return;
    }
    if (!confirmed) {
      Alert.alert("Confirmation", "Confirm the demo card payment.");
      return;
    }
    onNext?.();
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}><Text style={s.back}>‹  Card Payment</Text></TouchableOpacity>
      <Text style={s.title}>Pay Credit Card</Text>
      <Text style={s.subtitle}>Make a payment toward your credit balance</Text>

      <View style={s.creditCard}>
        <Text style={s.whiteSmall}>Outstanding Balance</Text>
        <Text style={s.outstanding}>$1,750.00</Text>
        <Text style={s.whiteSmall}>VISA Platinum •••• 4589</Text>
      </View>

      <Text style={s.label}>Payment Amount</Text>
      <TextInput style={s.input} value={amount}
        onChangeText={setAmount} keyboardType="decimal-pad" />

      <Text style={s.label}>Pay From</Text>
      <TouchableOpacity style={s.selection}
        onPress={() => setAccount(account.startsWith("Premium")
          ? "Savings Account •••• 7812" : "Premium Account •••• 4589")}>
        <Text style={s.account}>{account}</Text>
        <Text style={s.arrow}>⌄</Text>
      </TouchableOpacity>

      <View style={s.summary}>
        <Text style={s.heading}>Payment Summary</Text>
        <View style={s.row}><Text style={s.muted}>Payment</Text><Text>${(Number(amount) || 0).toFixed(2)}</Text></View>
        <View style={s.row}><Text style={s.muted}>Fee</Text><Text>$0.00</Text></View>
        <View style={s.row}><Text style={s.muted}>Total</Text><Text style={s.total}>${(Number(amount) || 0).toFixed(2)}</Text></View>
      </View>

      <TouchableOpacity style={s.checkRow} onPress={() => setConfirmed(!confirmed)}>
        <Text style={s.check}>{confirmed ? "☑" : "□"}</Text>
        <Text style={s.muted}>I confirm the demonstration payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.button} onPress={proceed}>
        <Text style={s.white}>Continue to Verification</Text>
      </TouchableOpacity>
      <Text style={s.note}>No actual credit card payment is made.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  body: { padding: 24, paddingBottom: 50 },
  back: { color: "#3525B5", fontSize: 19, marginBottom: 26 },
  title: { color: "#3525B5", fontWeight: "bold", fontSize: 25 },
  subtitle: { color: "#888", marginTop: 9, marginBottom: 25 },
  creditCard: { backgroundColor: "#25379C", borderRadius: 17, padding: 23, marginBottom: 27 },
  whiteSmall: { color: "#DBDEFF", fontSize: 12 },
  outstanding: { fontSize: 30, fontWeight: "bold", color: "#FFF", marginVertical: 17 },
  label: { color: "#555", fontSize: 13, marginBottom: 8 },
  input: { height: 53, borderWidth: 1, borderColor: "#DDD", borderRadius: 11, paddingHorizontal: 14, marginBottom: 19 },
  selection: { height: 53, borderWidth: 1, borderColor: "#DDD", borderRadius: 11, paddingHorizontal: 13, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  account: { color: "#333", fontSize: 13 },
  arrow: { color: "#3525B5", fontSize: 22 },
  summary: { backgroundColor: "#F7F6FC", borderRadius: 13, padding: 18, marginTop: 25 },
  heading: { color: "#333", fontWeight: "bold", fontSize: 17, marginBottom: 12 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 11 },
  muted: { color: "#888", fontSize: 12 },
  total: { color: "#3525B5", fontWeight: "bold", fontSize: 20 },
  checkRow: { flexDirection: "row", alignItems: "center", marginTop: 22 },
  check: { color: "#3525B5", fontSize: 24, marginRight: 9 },
  button: { backgroundColor: "#3525B5", padding: 17, alignItems: "center", borderRadius: 11, marginTop: 26 },
  white: { color: "#FFF", fontWeight: "bold" },
  note: { color: "#AAA", marginTop: 17, textAlign: "center", fontSize: 11 }
});
