
import React from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

const details = [
  ["Transaction Type", "Bill Payment"],
  ["Service", "Electricity"],
  ["Provider", "Utility Services"],
  ["Account Number", "1234 •••• 5678"],
  ["Payment Method", "VISA •••• 4589"],
  ["Billing Month", "October 2026"],
  ["Transaction Fee", "$0.00"],
  ["Status", "Demo paid"]
];

export default function PaymentDetail({ onBack, onNext }: Props) {
  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}><Text style={s.back}>‹</Text></TouchableOpacity>
        <Text style={s.headerTitle}>Payment Details</Text>
      </View>
      <ScrollView contentContainerStyle={s.body}>
        <View style={s.hero}>
          <View style={s.circle}><Text style={s.icon}>⚡</Text></View>
          <Text style={s.title}>Electricity Payment</Text>
          <Text style={s.amount}>$75.00</Text>
          <Text style={s.status}>✓ Demo Completed</Text>
        </View>
        <View style={s.receipt}>
          <Text style={s.heading}>Transaction Information</Text>
          {details.map(([label, value]) => (
            <View style={s.row} key={label}>
              <Text style={s.label}>{label}</Text>
              <Text style={s.value}>{value}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity style={s.outline}
          onPress={() => Alert.alert("Receipt", "Sample transaction receipt.")}>
          <Text style={s.outlineText}>View Receipt</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.button} onPress={onNext}>
          <Text style={s.white}>Pay Another Bill</Text>
        </TouchableOpacity>
        <Text style={s.note}>No real financial transaction was completed.</Text>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  header: { height: 95, backgroundColor: "#3525B5", paddingHorizontal: 22, flexDirection: "row", alignItems: "center" },
  back: { color: "#FFF", fontSize: 31, marginRight: 22 },
  headerTitle: { color: "#FFF", fontWeight: "bold", fontSize: 19 },
  body: { padding: 23, paddingBottom: 50 },
  hero: { alignItems: "center", paddingVertical: 25 },
  circle: { width: 90, height: 90, borderRadius: 45, backgroundColor: "#EEEAFE", alignItems: "center", justifyContent: "center" },
  icon: { fontSize: 44 },
  title: { fontSize: 22, fontWeight: "bold", color: "#3525B5", marginTop: 18 },
  amount: { fontWeight: "bold", fontSize: 33, color: "#3525B5", marginTop: 15 },
  status: { color: "#25A879", marginTop: 10 },
  receipt: { borderRadius: 15, backgroundColor: "#F7F6FC", padding: 19 },
  heading: { fontWeight: "bold", color: "#333", fontSize: 17, marginBottom: 13 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 13, borderTopWidth: 1, borderColor: "#E8E6F0" },
  label: { color: "#888", fontSize: 12, flex: 1 },
  value: { color: "#333", fontSize: 12, fontWeight: "bold", textAlign: "right", flex: 1 },
  outline: { borderWidth: 1, borderColor: "#3525B5", borderRadius: 11, padding: 16, alignItems: "center", marginTop: 25 },
  outlineText: { color: "#3525B5", fontWeight: "bold" },
  button: { backgroundColor: "#3525B5", borderRadius: 11, padding: 17, alignItems: "center", marginTop: 13 },
  white: { color: "#FFF", fontWeight: "bold" },
  note: { color: "#AAA", textAlign: "center", fontSize: 11, marginTop: 17 }
});
