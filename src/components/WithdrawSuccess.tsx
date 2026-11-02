import React from "react";
import {
  View, Text, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onHome?: () => void; onNext?: () => void };

export default function WithdrawSuccess({ onHome, onNext }: Props) {
  return (
    <View style={s.page}>
      <View style={s.center}>
        <View style={s.circle}>
          <Text style={s.check}>✓</Text>
        </View>
        <Text style={s.title}>Withdrawal Successful!</Text>
        <Text style={s.description}>
          Your withdrawal request has been confirmed in demo mode.
        </Text>
        <View style={s.receipt}>
          <Text style={s.label}>Withdrawal Amount</Text>
          <Text style={s.amount}>$500.00</Text>
          <View style={s.row}>
            <Text style={s.muted}>From account</Text>
            <Text style={s.value}>•••• 4589</Text>
          </View>
          <View style={s.row}>
            <Text style={s.muted}>Transaction fee</Text>
            <Text style={s.value}>$0.00</Text>
          </View>
          <View style={s.row}>
            <Text style={s.muted}>Status</Text>
            <Text style={s.success}>Demo completed</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => Alert.alert("Receipt", "Demo withdrawal receipt")}
        >
          <Text style={s.receiptLink}>View Receipt</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={s.button} onPress={onHome || onNext}>
        <Text style={s.white}>Back to Home</Text>
      </TouchableOpacity>
      <Text style={s.note}>No real cash has been withdrawn.</Text>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff", padding: 24 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  circle: { width: 130, height: 130, borderRadius: 65, backgroundColor: "#EDEBFF", alignItems: "center", justifyContent: "center" },
  check: { color: "#3525B5", fontSize: 80, fontWeight: "bold" },
  title: { color: "#3525B5", fontSize: 24, fontWeight: "bold", marginTop: 28, textAlign: "center" },
  description: { color: "#888", lineHeight: 22, marginTop: 12, textAlign: "center" },
  receipt: { padding: 22, backgroundColor: "#F7F6FC", borderRadius: 15, width: "100%", marginTop: 35 },
  label: { textAlign: "center", color: "#888" },
  amount: { color: "#3525B5", fontSize: 32, fontWeight: "bold", textAlign: "center", marginVertical: 17 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 12, borderTopWidth: 1, borderColor: "#E8E6EE" },
  muted: { color: "#999", fontSize: 12 },
  value: { color: "#333", fontWeight: "bold" },
  success: { color: "#23A777", fontWeight: "bold" },
  receiptLink: { color: "#3525B5", fontWeight: "bold", marginTop: 25 },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center" },
  white: { color: "#fff", fontWeight: "bold" },
  note: { textAlign: "center", fontSize: 11, color: "#aaa", marginTop: 15 }
});