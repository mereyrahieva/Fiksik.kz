
import React from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onHome?: () => void };

export default function ElectricBillSuccess({
  onBack, onHome
}: Props) {
  const details = [
    ["Service", "Electricity"],
    ["Provider", "Electric Utility"],
    ["Account Number", "1234567890"],
    ["Billing Period", "October 2026"],
    ["Payment Method", "VISA •••• 4589"],
    ["Transaction Fee", "$0.00"],
    ["Status", "Demo completed"]
  ];

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <View style={s.circle}><Text style={s.check}>✓</Text></View>
      <Text style={s.title}>Payment Successful!</Text>
      <Text style={s.subtitle}>
        Your electricity bill payment was confirmed in demonstration mode.
      </Text>

      <View style={s.card}>
        <Text style={s.mutedCenter}>Total Payment</Text>
        <Text style={s.amount}>$75.00</Text>
        {details.map(([label, value]) => (
          <View style={s.row} key={label}>
            <Text style={s.label}>{label}</Text>
            <Text style={s.value}>{value}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={s.outline}
        onPress={() => Alert.alert(
          "Sample Receipt",
          "No payment was made to an electricity provider."
        )}>
        <Text style={s.outlineText}>View Receipt</Text>
      </TouchableOpacity>

      <TouchableOpacity style={s.button} onPress={onHome || onBack}>
        <Text style={s.white}>Back to Home</Text>
      </TouchableOpacity>

      <Text style={s.note}>
        This application is an educational demonstration.
        No real money has been transferred.
      </Text>
    </ScrollView>
  );
}

const PURPLE = "#3525B5";

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFFFFF" },
  body: { padding: 24, paddingTop: 68, paddingBottom: 50 },
  circle: {
    width: 135, height: 135, borderRadius: 68,
    alignSelf: "center", backgroundColor: "#EEEAFE",
    justifyContent: "center", alignItems: "center"
  },
  check: { color: PURPLE, fontSize: 83, fontWeight: "bold" },
  title: {
    fontSize: 25, fontWeight: "bold", color: PURPLE,
    textAlign: "center", marginTop: 30
  },
  subtitle: {
    color: "#888", textAlign: "center",
    marginTop: 12, lineHeight: 22
  },
  card: {
    backgroundColor: "#F7F6FC", borderRadius: 17,
    padding: 20, marginTop: 35
  },
  mutedCenter: { color: "#999", textAlign: "center" },
  amount: {
    color: PURPLE, fontSize: 34,
    fontWeight: "bold", textAlign: "center", marginVertical: 22
  },
  row: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", paddingVertical: 13,
    borderTopWidth: 1, borderColor: "#E8E5F0"
  },
  label: { color: "#888", fontSize: 12, flex: 1 },
  value: {
    color: "#333", fontWeight: "bold",
    fontSize: 12, flex: 1, textAlign: "right"
  },
  outline: {
    borderWidth: 1, borderColor: PURPLE,
    borderRadius: 11, padding: 17,
    alignItems: "center", marginTop: 27
  },
  outlineText: { color: PURPLE, fontWeight: "bold" },
  button: {
    backgroundColor: PURPLE, borderRadius: 11,
    padding: 17, alignItems: "center", marginTop: 13
  },
  white: { color: "#FFFFFF", fontWeight: "bold" },
  note: {
    color: "#AAA", fontSize: 11,
    textAlign: "center", lineHeight: 19, marginTop: 18
  }
});
