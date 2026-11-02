
import React from "react";
import {
  View, Text, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onHome?: () => void; onNext?: () => void };

export default function TransferSuccess({ onHome, onNext }: Props) {
  return (
    <View style={s.page}>
      <View style={s.content}>
        <View style={s.circle}><Text style={s.check}>✓</Text></View>
        <Text style={s.title}>Transfer Successful!</Text>
        <Text style={s.subtitle}>
          Your demo transfer has been confirmed.
        </Text>
        <View style={s.receipt}>
          <Text style={s.label}>Amount</Text>
          <Text style={s.amount}>$250.00</Text>
          <View style={s.row}><Text style={s.muted}>Recipient</Text><Text style={s.value}>Alex Johnson</Text></View>
          <View style={s.row}><Text style={s.muted}>Status</Text><Text style={s.green}>Demo completed</Text></View>
          <View style={s.row}><Text style={s.muted}>Transfer fee</Text><Text style={s.value}>$0.00</Text></View>
        </View>
        <TouchableOpacity
          onPress={() => Alert.alert("Receipt", "Demo receipt — no real transaction")}
        >
          <Text style={s.receiptLink}>View Receipt</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={s.button} onPress={onHome || onNext}>
        <Text style={s.white}>Back to Home</Text>
      </TouchableOpacity>
      <Text style={s.note}>No money has actually been transferred.</Text>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff", padding: 24 },
  content: { flex: 1, alignItems: "center", justifyContent: "center" },
  circle: { width: 125, height: 125, borderRadius: 63, backgroundColor: "#EDEBFF", alignItems: "center", justifyContent: "center" },
  check: { fontSize: 75, color: "#3525B5", fontWeight: "bold" },
  title: { fontSize: 24, color: "#3525B5", fontWeight: "bold", marginTop: 27 },
  subtitle: { textAlign: "center", color: "#888", marginTop: 12 },
  receipt: { backgroundColor: "#F7F6FC", padding: 22, borderRadius: 16, width: "100%", marginTop: 34 },
  label: { textAlign: "center", color: "#888" },
  amount: { color: "#3525B5", textAlign: "center", fontSize: 31, fontWeight: "bold", marginTop: 10, marginBottom: 18 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 12, borderTopWidth: 1, borderColor: "#e6e3ee" },
  muted: { color: "#999" },
  value: { color: "#333", fontWeight: "bold" },
  green: { color: "#24A876", fontWeight: "bold" },
  receiptLink: { color: "#3525B5", marginTop: 25, fontWeight: "bold" },
  button: { backgroundColor: "#3525B5", borderRadius: 11, padding: 17, alignItems: "center" },
  white: { color: "#fff", fontWeight: "bold" },
  note: { textAlign: "center", color: "#aaa", fontSize: 11, marginTop: 13 }
});
