
import React from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = {
  onHome?: () => void;
  onNext?: () => void;
};

export default function InternetBillSuccess({
  onHome, onNext
}: Props) {
  const receipt = [
    ["Service", "Home Internet"],
    ["Customer ID", "1234567890"],
    ["Payment Method", "Card •••• 4589"],
    ["Transaction Fee", "$0.00"],
    ["Status", "Demo completed"]
  ];

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <View style={s.successCircle}>
        <Text style={s.check}>✓</Text>
      </View>

      <Text style={s.title}>Payment Successful!</Text>
      <Text style={s.subtitle}>
        Your internet bill payment has been confirmed in demo mode.
      </Text>

      <View style={s.receipt}>
        <Text style={s.amountLabel}>Payment Amount</Text>
        <Text style={s.amount}>$35.00</Text>

        {receipt.map(([label, value]) => (
          <View key={label} style={s.row}>
            <Text style={s.label}>{label}</Text>
            <Text style={s.value}>{value}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={s.outlineButton}
        onPress={() => Alert.alert(
          "Demo Receipt",
          "This is not a real payment receipt."
        )}
      >
        <Text style={s.outlineText}>View Receipt</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={s.button}
        onPress={onHome || onNext}
      >
        <Text style={s.buttonText}>Back to Home</Text>
      </TouchableOpacity>

      <Text style={s.note}>
        No real internet bill has been paid.
      </Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFFFFF" },
  body: { padding: 24, paddingTop: 75, paddingBottom: 45 },
  successCircle: {
    width: 135, height: 135, borderRadius: 68,
    backgroundColor: "#EEEAFE", alignSelf: "center",
    alignItems: "center", justifyContent: "center"
  },
  check: { fontSize: 82, fontWeight: "bold", color: "#3525B5" },
  title: {
    fontSize: 25, fontWeight: "bold", color: "#3525B5",
    textAlign: "center", marginTop: 30
  },
  subtitle: {
    color: "#888", textAlign: "center",
    lineHeight: 22, marginTop: 12
  },
  receipt: {
    backgroundColor: "#F7F6FC", borderRadius: 17,
    padding: 21, marginTop: 35
  },
  amountLabel: { textAlign: "center", color: "#999" },
  amount: {
    textAlign: "center", color: "#3525B5",
    fontSize: 34, fontWeight: "bold", marginVertical: 22
  },
  row: {
    flexDirection: "row", justifyContent: "space-between",
    paddingVertical: 13, borderTopWidth: 1,
    borderColor: "#E8E5F0"
  },
  label: { color: "#888", fontSize: 12 },
  value: { color: "#333", fontWeight: "bold", fontSize: 12 },
  outlineButton: {
    borderWidth: 1, borderColor: "#3525B5",
    borderRadius: 11, padding: 16,
    alignItems: "center", marginTop: 26
  },
  outlineText: { color: "#3525B5", fontWeight: "bold" },
  button: {
    backgroundColor: "#3525B5", padding: 17,
    borderRadius: 11, alignItems: "center", marginTop: 13
  },
  buttonText: { color: "#FFF", fontWeight: "bold" },
  note: { color: "#AAA", fontSize: 11, textAlign: "center", marginTop: 17 }
});
