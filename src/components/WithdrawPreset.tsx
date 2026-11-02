import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function WithdrawPreset({ onBack, onNext }: Props) {
  const [amount, setAmount] = useState("100");
  const [selected, setSelected] = useState(100);
  const presets = [50, 100, 200, 300, 500, 1000];

  function proceed() {
    const value = Number(amount);
    if (!Number.isFinite(value) || value <= 0 || value > 2500) {
      Alert.alert("Invalid amount", "Maximum demo balance is $2,500");
      return;
    }
    onNext?.();
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.content}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Withdraw</Text>
      </TouchableOpacity>
      <Text style={s.title}>Select Amount</Text>
      <Text style={s.subtitle}>How much would you like to withdraw?</Text>

      <View style={s.balanceBox}>
        <Text style={s.muted}>Available Balance</Text>
        <Text style={s.balance}>$2,500.00</Text>
      </View>

      <Text style={s.label}>Withdrawal Amount</Text>
      <TextInput
        style={s.input} value={amount}
        onChangeText={value => {
          setAmount(value);
          setSelected(0);
        }}
        keyboardType="decimal-pad" textAlign="center"
      />

      <Text style={s.heading}>Quick Amount</Text>
      <View style={s.grid}>
        {presets.map(value => (
          <TouchableOpacity key={value}
            style={[s.option, selected === value && s.active]}
            onPress={() => {
              setSelected(value);
              setAmount(String(value));
            }}>
            <Text style={[s.optionText, selected === value && s.activeText]}>
              ${value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={s.summary}>
        <Text style={s.muted}>Total withdrawal</Text>
        <Text style={s.summaryValue}>${(Number(amount) || 0).toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={s.button} onPress={proceed}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  content: { padding: 24, paddingBottom: 45 },
  back: { color: "#3525B5", fontSize: 19, marginBottom: 30 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 9 },
  balanceBox: { backgroundColor: "#25379C", borderRadius: 17, padding: 24, marginVertical: 30 },
  muted: { color: "#999" },
  balance: { color: "#fff", fontWeight: "bold", fontSize: 30, marginTop: 12 },
  label: { color: "#666", marginBottom: 10 },
  input: { height: 65, fontSize: 30, color: "#3525B5", fontWeight: "bold", borderWidth: 1, borderColor: "#DCD8F5", borderRadius: 12 },
  heading: { fontSize: 18, fontWeight: "bold", marginTop: 30, marginBottom: 20 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  option: { width: "31%", backgroundColor: "#F3F1FF", paddingVertical: 20, alignItems: "center", borderRadius: 12, marginBottom: 12 },
  active: { backgroundColor: "#3525B5" },
  optionText: { color: "#3525B5", fontWeight: "bold" },
  activeText: { color: "#fff" },
  summary: { backgroundColor: "#F7F6FC", borderRadius: 12, padding: 18, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 23 },
  summaryValue: { color: "#3525B5", fontSize: 22, fontWeight: "bold" },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center", marginTop: 28 },
  white: { color: "#fff", fontWeight: "bold" }
});