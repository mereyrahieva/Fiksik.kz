
import React from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onHome?: () => void; onNext?: () => void };

export default function SaveOnlineSuccess({ onHome, onNext }: Props) {
  const rows = [
    ["Savings Plan", "Premium Savings"],
    ["Deposit Amount", "$1,000.00"],
    ["Savings Period", "12 months"],
    ["Interest Rate", "5.5% (example)"],
    ["Source", "Card •••• 4589"],
    ["Status", "Demo completed"]
  ];

  return (
    <ScrollView style={s.page} contentContainerStyle={s.content}>
      <View style={s.circle}><Text style={s.check}>✓</Text></View>
      <Text style={s.title}>Savings Created!</Text>
      <Text style={s.subtitle}>
        Your demonstration savings request has been completed.
      </Text>
      <View style={s.card}>
        <Text style={s.amount}>$1,000.00</Text>
        {rows.map(([label, value]) => (
          <View style={s.row} key={label}>
            <Text style={s.label}>{label}</Text>
            <Text style={s.value}>{value}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={s.outline}
        onPress={() => Alert.alert("Demo Receipt", "No real deposit was opened.")}>
        <Text style={s.outlineText}>View Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.button} onPress={onHome || onNext}>
        <Text style={s.white}>Back to Home</Text>
      </TouchableOpacity>
      <Text style={s.note}>Educational demonstration only.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  content: { padding: 24, paddingTop: 70, paddingBottom: 45 },
  circle: { width: 125, height: 125, borderRadius: 63, backgroundColor: "#EEEAFE", justifyContent: "center", alignItems: "center", alignSelf: "center" },
  check: { color: "#3525B5", fontWeight: "bold", fontSize: 80 },
  title: { color: "#3525B5", fontSize: 25, textAlign: "center", fontWeight: "bold", marginTop: 27 },
  subtitle: { color: "#888", textAlign: "center", lineHeight: 22, marginTop: 12 },
  card: { backgroundColor: "#F7F6FC", borderRadius: 16, padding: 20, marginTop: 32 },
  amount: { fontSize: 32, fontWeight: "bold", textAlign: "center", color: "#3525B5", marginBottom: 20 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 13, borderTopWidth: 1, borderColor: "#E8E6F0" },
  label: { color: "#888", fontSize: 12, flex: 1 },
  value: { color: "#333", fontWeight: "bold", fontSize: 12, flex: 1, textAlign: "right" },
  outline: { borderWidth: 1, borderColor: "#3525B5", padding: 16, borderRadius: 11, alignItems: "center", marginTop: 26 },
  outlineText: { color: "#3525B5", fontWeight: "bold" },
  button: { backgroundColor: "#3525B5", borderRadius: 11, padding: 17, alignItems: "center", marginTop: 13 },
  white: { color: "#FFF", fontWeight: "bold" },
  note: { color: "#AAA", textAlign: "center", marginTop: 17, fontSize: 11 }
});
