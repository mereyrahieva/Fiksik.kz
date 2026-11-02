
import React from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onHome?: () => void; onNext?: () => void };

export default function CreditCardSuccess({ onHome, onNext }: Props) {
  const rows = [
    ["Credit Card", "VISA Platinum •••• 4589"],
    ["From Account", "Premium •••• 4589"],
    ["Transaction Fee", "$0.00"],
    ["Status", "Demo completed"]
  ];

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <View style={s.circle}><Text style={s.check}>✓</Text></View>
      <Text style={s.title}>Payment Successful!</Text>
      <Text style={s.subtitle}>Credit card payment confirmed in demo mode.</Text>
      <View style={s.receipt}>
        <Text style={s.muted}>Payment Amount</Text>
        <Text style={s.amount}>$200.00</Text>
        {rows.map(([label, value]) => (
          <View style={s.row} key={label}>
            <Text style={s.label}>{label}</Text>
            <Text style={s.value}>{value}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={s.outline}
        onPress={() => Alert.alert("Receipt", "Demonstration receipt only.")}>
        <Text style={s.outlineText}>View Receipt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.button} onPress={onHome || onNext}>
        <Text style={s.white}>Back to Home</Text>
      </TouchableOpacity>
      <Text style={s.note}>No real credit card debt was paid.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  body: { padding: 24, paddingTop: 75, paddingBottom: 45 },
  circle: { width: 130, height: 130, borderRadius: 65, backgroundColor: "#EEEAFE", alignItems: "center", justifyContent: "center", alignSelf: "center" },
  check: { color: "#3525B5", fontSize: 80, fontWeight: "bold" },
  title: { fontSize: 25, fontWeight: "bold", color: "#3525B5", textAlign: "center", marginTop: 28 },
  subtitle: { color: "#888", textAlign: "center", marginTop: 12, lineHeight: 22 },
  receipt: { backgroundColor: "#F7F6FC", padding: 21, borderRadius: 15, marginTop: 35 },
  muted: { color: "#999", textAlign: "center" },
  amount: { color: "#3525B5", fontWeight: "bold", fontSize: 33, textAlign: "center", marginVertical: 21 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 14, borderTopWidth: 1, borderColor: "#E7E4F0" },
  label: { color: "#888", fontSize: 12, flex: 1 },
  value: { color: "#333", fontWeight: "bold", fontSize: 12, flex: 1, textAlign: "right" },
  outline: { borderWidth: 1, borderColor: "#3525B5", borderRadius: 11, padding: 17, alignItems: "center", marginTop: 27 },
  outlineText: { color: "#3525B5", fontWeight: "bold" },
  button: { borderRadius: 11, padding: 17, backgroundColor: "#3525B5", alignItems: "center", marginTop: 13 },
  white: { color: "#FFF", fontWeight: "bold" },
  note: { color: "#AAA", fontSize: 11, textAlign: "center", marginTop: 17 }
});
