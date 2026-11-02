import React from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

const details = [
  ["Service", "Electricity"],
  ["Provider", "Electric Utility"],
  ["Account Number", "1234 •••• 5678"],
  ["Billing Period", "October 2026"],
  ["Payment Date", "12 Oct 2026"],
  ["Payment Method", "Card •••• 4589"],
  ["Fee", "$0.00"],
  ["Status", "Demo Paid"]
];

export default function ElectricPaymentDetail({
  onBack, onNext
}: Props) {
  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>Payment Details</Text>
      </View>

      <ScrollView contentContainerStyle={s.content}>
        <View style={s.hero}>
          <View style={s.circle}><Text style={s.check}>✓</Text></View>
          <Text style={s.title}>Payment Successful</Text>
          <Text style={s.subtitle}>Demo Electricity Payment</Text>
          <Text style={s.amount}>$75.00</Text>
        </View>

        <View style={s.receipt}>
          <Text style={s.receiptTitle}>Transaction Details</Text>
          {details.map(([label, value]) => (
            <View key={label} style={s.row}>
              <Text style={s.label}>{label}</Text>
              <Text style={s.value}>{value}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={s.outline}
          onPress={() =>
            Alert.alert("Demo Receipt", "This receipt is not a real bank payment.")
          }
        >
          <Text style={s.outlineText}>View Receipt</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.button} onPress={onNext}>
          <Text style={s.white}>Continue</Text>
        </TouchableOpacity>

        <Text style={s.note}>
          Demonstration data — no actual utility payment made.
        </Text>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  header: { height: 95, backgroundColor: "#3525B5", flexDirection: "row", alignItems: "center", paddingHorizontal: 22 },
  back: { color: "#fff", fontSize: 31, marginRight: 22 },
  headerTitle: { color: "#fff", fontSize: 19, fontWeight: "bold" },
  content: { padding: 23, paddingBottom: 45 },
  hero: { alignItems: "center", paddingVertical: 28 },
  circle: { width: 95, height: 95, borderRadius: 48, backgroundColor: "#EEEAFE", alignItems: "center", justifyContent: "center" },
  check: { color: "#3525B5", fontWeight: "bold", fontSize: 62 },
  title: { color: "#3525B5", fontWeight: "bold", fontSize: 23, marginTop: 19 },
  subtitle: { color: "#888", marginTop: 9 },
  amount: { color: "#3525B5", fontSize: 33, fontWeight: "bold", marginTop: 18 },
  receipt: { backgroundColor: "#F7F6FC", padding: 19, borderRadius: 14 },
  receiptTitle: { color: "#333", fontWeight: "bold", fontSize: 17, marginBottom: 13 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 12, borderTopWidth: 1, borderColor: "#E6E3EE" },
  label: { color: "#888", fontSize: 12, flex: 1 },
  value: { color: "#333", fontSize: 12, fontWeight: "bold", flex: 1, textAlign: "right" },
  outline: { padding: 16, borderWidth: 1, borderColor: "#3525B5", borderRadius: 11, alignItems: "center", marginTop: 24 },
  outlineText: { color: "#3525B5", fontWeight: "bold" },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center", marginTop: 13 },
  white: { color: "#fff", fontWeight: "bold" },
  note: { color: "#aaa", fontSize: 11, textAlign: "center", marginTop: 19 }
});