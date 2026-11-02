
import React, { useState } from "react";
import {
  View, Text, ScrollView, TextInput,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function SaveOnlineFilled({ onBack, onNext }: Props) {
  const [amount, setAmount] = useState("1000");
  const [period, setPeriod] = useState("12 months");
  const [source, setSource] = useState("Premium •••• 4589");
  const [accepted, setAccepted] = useState(false);

  function confirm() {
    const value = Number(amount);
    if (!Number.isFinite(value) || value < 10 || value > 2500) {
      Alert.alert("Invalid Amount", "Enter an amount from $10 to $2,500");
      return;
    }
    if (!accepted) {
      Alert.alert("Confirmation", "Accept the demo savings terms");
      return;
    }
    onNext?.();
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Save Online</Text>
      </TouchableOpacity>
      <Text style={s.title}>Confirm Savings</Text>
      <Text style={s.subtitle}>Review your savings account details</Text>

      <View style={s.hero}>
        <Text style={s.icon}>💰</Text>
        <Text style={s.heroTitle}>Premium Savings</Text>
        <Text style={s.heroSubtitle}>Example annual rate: 5.5%</Text>
      </View>

      <Text style={s.label}>Deposit Amount</Text>
      <TextInput style={s.input}
        value={amount} onChangeText={setAmount}
        keyboardType="decimal-pad" />

      <Text style={s.label}>Savings Period</Text>
      <TouchableOpacity
        style={s.selection}
        onPress={() =>
          setPeriod(period === "12 months" ? "6 months" : "12 months")
        }
      >
        <Text>{period}</Text><Text style={s.purple}>⌄</Text>
      </TouchableOpacity>

      <Text style={s.label}>From Account</Text>
      <TouchableOpacity
        style={s.selection}
        onPress={() =>
          setSource(source.startsWith("Premium")
            ? "Current •••• 9012" : "Premium •••• 4589")
        }
      >
        <Text>{source}</Text><Text style={s.purple}>⌄</Text>
      </TouchableOpacity>

      <View style={s.summary}>
        <Text style={s.summaryTitle}>Savings Summary</Text>
        <View style={s.row}><Text style={s.muted}>Deposit Amount</Text><Text>${(Number(amount) || 0).toFixed(2)}</Text></View>
        <View style={s.row}><Text style={s.muted}>Period</Text><Text>{period}</Text></View>
        <View style={s.row}><Text style={s.muted}>Interest Rate</Text><Text>5.5% (example)</Text></View>
      </View>

      <TouchableOpacity style={s.checkRow} onPress={() => setAccepted(!accepted)}>
        <Text style={s.check}>{accepted ? "☑" : "□"}</Text>
        <Text style={s.muted}>I accept the demo savings terms</Text>
      </TouchableOpacity>

      <TouchableOpacity style={s.button} onPress={confirm}>
        <Text style={s.white}>Confirm Savings</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  body: { padding: 24, paddingBottom: 50 },
  back: { color: "#3525B5", fontSize: 19, marginBottom: 26 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 9 },
  hero: {
    backgroundColor: "#F1EFFF", padding: 24,
    alignItems: "center", borderRadius: 17, marginVertical: 25
  },
  icon: { fontSize: 65 },
  heroTitle: { fontSize: 19, color: "#3525B5", fontWeight: "bold", marginTop: 13 },
  heroSubtitle: { color: "#888", marginTop: 7 },
  label: { color: "#555", fontSize: 13, marginBottom: 9 },
  input: { borderWidth: 1, borderColor: "#DDD", borderRadius: 11, height: 52, paddingHorizontal: 14, marginBottom: 19 },
  selection: {
    borderWidth: 1, borderColor: "#DDD", height: 52,
    borderRadius: 11, paddingHorizontal: 14, alignItems: "center",
    flexDirection: "row", justifyContent: "space-between", marginBottom: 19
  },
  purple: { color: "#3525B5", fontSize: 21 },
  summary: { backgroundColor: "#F7F6FC", borderRadius: 12, padding: 18, marginTop: 13 },
  summaryTitle: { color: "#333", fontWeight: "bold", fontSize: 16, marginBottom: 10 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 12 },
  muted: { color: "#888", fontSize: 12 },
  checkRow: { flexDirection: "row", alignItems: "center", marginTop: 22 },
  check: { color: "#3525B5", fontSize: 24, marginRight: 10 },
  button: { backgroundColor: "#3525B5", borderRadius: 11, padding: 17, alignItems: "center", marginTop: 26 },
  white: { color: "#FFF", fontWeight: "bold" }
});
