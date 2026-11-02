
import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = {
  onBack?: () => void;
  onNext?: () => void;
};

export default function SaveOnlineEmpty({ onBack, onNext }: Props) {
  const [amount, setAmount] = useState("");
  const [period, setPeriod] = useState("12 months");
  const [account, setAccount] = useState("Premium Account");
  const periods = ["3 months", "6 months", "12 months", "24 months"];

  function continueSaving() {
    const value = Number(amount);
    if (!Number.isFinite(value) || value < 10) {
      Alert.alert("Amount", "Minimum demo deposit is $10");
      return;
    }
    onNext?.();
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Save Online</Text>
      </TouchableOpacity>

      <Text style={s.title}>Open Savings Account</Text>
      <Text style={s.subtitle}>
        Choose an amount and savings period.
      </Text>

      <View style={s.hero}>
        <Text style={s.heroIcon}>💰</Text>
        <Text style={s.heroText}>Start saving today</Text>
      </View>

      <Text style={s.label}>Deposit From</Text>
      <TouchableOpacity
        style={s.selection}
        onPress={() =>
          setAccount(account === "Premium Account"
            ? "Current Account" : "Premium Account")
        }
      >
        <Text style={s.selectionText}>{account}</Text>
        <Text style={s.purple}>⌄</Text>
      </TouchableOpacity>

      <Text style={s.label}>Deposit Amount (USD)</Text>
      <TextInput
        style={s.input}
        placeholder="Enter amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="decimal-pad"
      />

      <Text style={s.label}>Savings Period</Text>
      <View style={s.periods}>
        {periods.map(item => (
          <TouchableOpacity
            key={item}
            style={[s.period, period === item && s.active]}
            onPress={() => setPeriod(item)}
          >
            <Text style={[
              s.periodText, period === item && s.activeText
            ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={s.info}>
        <Text style={s.infoTitle}>Deposit Preview</Text>
        <Text style={s.infoText}>Amount: ${amount || "0.00"}</Text>
        <Text style={s.infoText}>Period: {period}</Text>
        <Text style={s.infoText}>
          Demo product — no bank deposit is opened.
        </Text>
      </View>

      <TouchableOpacity style={s.button} onPress={continueSaving}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  body: { padding: 24, paddingBottom: 50 },
  back: { fontSize: 19, color: "#3525B5", marginBottom: 27 },
  title: { fontSize: 25, fontWeight: "bold", color: "#3525B5" },
  subtitle: { color: "#888", marginTop: 10 },
  hero: {
    height: 155, backgroundColor: "#F3F1FF",
    borderRadius: 18, alignItems: "center",
    justifyContent: "center", marginVertical: 26
  },
  heroIcon: { fontSize: 65 },
  heroText: { color: "#3525B5", fontWeight: "bold", marginTop: 10 },
  label: { color: "#555", fontSize: 13, marginBottom: 9 },
  selection: {
    borderWidth: 1, borderColor: "#DDD",
    borderRadius: 11, height: 52,
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", paddingHorizontal: 14, marginBottom: 20
  },
  selectionText: { color: "#333" },
  purple: { color: "#3525B5", fontSize: 22 },
  input: {
    height: 52, borderWidth: 1, borderColor: "#DDD",
    borderRadius: 11, paddingHorizontal: 14, marginBottom: 23
  },
  periods: { flexDirection: "row", flexWrap: "wrap", gap: 9 },
  period: {
    width: "48%", padding: 15,
    backgroundColor: "#F3F1FF", borderRadius: 11, alignItems: "center"
  },
  active: { backgroundColor: "#3525B5" },
  periodText: { color: "#3525B5", fontWeight: "bold" },
  activeText: { color: "#FFF" },
  info: {
    backgroundColor: "#F7F6FC", padding: 18,
    borderRadius: 13, marginTop: 25
  },
  infoTitle: { color: "#3525B5", fontWeight: "bold" },
  infoText: { color: "#888", marginTop: 10, fontSize: 12 },
  button: {
    backgroundColor: "#3525B5", padding: 17,
    borderRadius: 11, alignItems: "center", marginTop: 28
  },
  white: { color: "#FFF", fontWeight: "bold" }
});
