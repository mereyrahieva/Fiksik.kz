
import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function ElectricBillDetails({ onBack, onNext }: Props) {
  const [confirmed, setConfirmed] = useState(false);
  const details = [
    ["Service", "Electricity"],
    ["Provider", "Electric Utility"],
    ["Customer ID", "1234567890"],
    ["Bill Period", "October 2026"],
    ["Payment Card", "VISA •••• 4589"],
    ["Payment Fee", "$0.00"]
  ];

  function submit() {
    if (!confirmed) {
      Alert.alert("Confirmation", "Please confirm the payment details.");
      return;
    }
    onNext?.();
  }

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}><Text style={s.back}>‹</Text></TouchableOpacity>
        <Text style={s.headerText}>Electric Bill</Text>
      </View>
      <ScrollView contentContainerStyle={s.body}>
        <View style={s.hero}>
          <Text style={s.icon}>💡</Text>
          <Text style={s.title}>Review Your Bill</Text>
          <Text style={s.subtitle}>Confirm your electricity payment details</Text>
        </View>
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
        <TouchableOpacity style={s.checkRow} onPress={() => setConfirmed(!confirmed)}>
          <Text style={s.check}>{confirmed ? "☑" : "□"}</Text>
          <Text style={s.muted}>I confirm this demonstration bill payment.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.button} onPress={submit}>
          <Text style={s.white}>Confirm & Continue</Text>
        </TouchableOpacity>
        <Text style={s.note}>No actual payment will be processed.</Text>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  header: { height: 95, backgroundColor: "#3525B5", flexDirection: "row", alignItems: "center", paddingHorizontal: 22 },
  back: { color: "#FFF", fontSize: 31, marginRight: 22 },
  headerText: { color: "#FFF", fontSize: 19, fontWeight: "bold" },
  body: { padding: 23, paddingBottom: 50 },
  hero: { alignItems: "center", paddingVertical: 22 },
  icon: { fontSize: 65 },
  title: { color: "#3525B5", fontSize: 24, fontWeight: "bold", marginTop: 17 },
  subtitle: { color: "#888", marginTop: 9, textAlign: "center" },
  card: { backgroundColor: "#F7F6FC", borderRadius: 15, padding: 19, marginTop: 15 },
  mutedCenter: { textAlign: "center", color: "#888" },
  amount: { fontSize: 32, fontWeight: "bold", color: "#3525B5", textAlign: "center", marginVertical: 22 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 14, borderTopWidth: 1, borderColor: "#E6E4EF" },
  label: { color: "#888", fontSize: 12, flex: 1 },
  value: { color: "#333", fontSize: 12, fontWeight: "bold", flex: 1, textAlign: "right" },
  muted: { color: "#888", fontSize: 12, flex: 1 },
  checkRow: { flexDirection: "row", alignItems: "center", marginTop: 24 },
  check: { fontSize: 24, color: "#3525B5", marginRight: 10 },
  button: { backgroundColor: "#3525B5", padding: 17, alignItems: "center", borderRadius: 11, marginTop: 26 },
  white: { color: "#FFF", fontWeight: "bold" },
  note: { color: "#AAA", fontSize: 11, textAlign: "center", marginTop: 17 }
});
