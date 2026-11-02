import React from "react";
import {
  View, Text, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onHome?: () => void; onNext?: () => void };

export default function MobileRechargeSuccess({ onHome, onNext }: Props) {
  return (
    <View style={s.page}>
      <View style={s.content}>
        <View style={s.circle}><Text style={s.check}>✓</Text></View>
        <Text style={s.title}>Recharge Successful!</Text>
        <Text style={s.subtitle}>
          Your demo mobile recharge has been completed.
        </Text>

        <View style={s.receipt}>
          <Text style={s.muted}>Recharge Amount</Text>
          <Text style={s.amount}>$20.00</Text>
          <View style={s.row}><Text style={s.muted}>Operator</Text><Text style={s.value}>Beeline</Text></View>
          <View style={s.row}><Text style={s.muted}>Phone</Text><Text style={s.value}>+7 700 123 4567</Text></View>
          <View style={s.row}><Text style={s.muted}>Fee</Text><Text style={s.value}>$0.00</Text></View>
          <View style={s.row}><Text style={s.muted}>Status</Text><Text style={s.green}>Demo completed</Text></View>
        </View>

        <TouchableOpacity
          onPress={() => Alert.alert("Receipt", "Demo mobile recharge receipt")}
        >
          <Text style={s.link}>View Receipt</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={s.button} onPress={onHome || onNext}>
        <Text style={s.white}>Back to Home</Text>
      </TouchableOpacity>
      <Text style={s.note}>No real mobile balance has been credited.</Text>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff", padding: 24 },
  content: { flex: 1, justifyContent: "center", alignItems: "center" },
  circle: { width: 125, height: 125, borderRadius: 63, backgroundColor: "#EEEAFE", alignItems: "center", justifyContent: "center" },
  check: { color: "#3525B5", fontWeight: "bold", fontSize: 78 },
  title: { color: "#3525B5", fontWeight: "bold", fontSize: 24, marginTop: 27 },
  subtitle: { color: "#888", lineHeight: 21, textAlign: "center", marginTop: 12 },
  receipt: { padding: 22, backgroundColor: "#F7F6FC", borderRadius: 15, width: "100%", marginTop: 33 },
  muted: { color: "#999", fontSize: 12 },
  amount: { color: "#3525B5", fontWeight: "bold", fontSize: 32, textAlign: "center", marginVertical: 20 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 12, borderTopWidth: 1, borderColor: "#e9e6f0" },
  value: { color: "#333", fontWeight: "bold", fontSize: 12 },
  green: { color: "#23A777", fontWeight: "bold", fontSize: 12 },
  link: { color: "#3525B5", fontWeight: "bold", marginTop: 25 },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center" },
  white: { color: "#fff", fontWeight: "bold" },
  note: { textAlign: "center", color: "#aaa", marginTop: 15, fontSize: 11 }
});