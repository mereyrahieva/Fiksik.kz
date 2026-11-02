
import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function TransferBankConfirm({ onBack, onNext }: Props) {
  const [accepted, setAccepted] = useState(false);

  const confirm = () => {
    if (!accepted) {
      Alert.alert("Confirmation", "Please confirm the demo transfer details");
      return;
    }
    Alert.alert("Transfer preview", "This transaction is simulated.", [
      { text: "Cancel", style: "cancel" },
      { text: "Continue", onPress: onNext }
    ]);
  };

  const details = [
    ["From", "Premium Account •••• 4589"],
    ["To", "Alex Johnson"],
    ["Receiving bank", "Halyk Bank"],
    ["Account", "KZ12 •••• •••• 5678"],
    ["Transfer fee", "$0.00"],
    ["Status", "Awaiting confirmation"]
  ];

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}><Text style={s.back}>‹  Confirm Transfer</Text></TouchableOpacity>
      <View style={s.iconBox}><Text style={s.icon}>💸</Text></View>
      <Text style={s.title}>Review Transaction</Text>
      <Text style={s.subtitle}>Check all transfer details carefully</Text>
      <View style={s.card}>
        <Text style={s.label}>Transfer Amount</Text>
        <Text style={s.amount}>$250.00</Text>
        {details.map(([label, value]) => (
          <View style={s.row} key={label}>
            <Text style={s.muted}>{label}</Text>
            <Text style={s.value}>{value}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={s.checkRow} onPress={() => setAccepted(!accepted)}>
        <Text style={s.check}>{accepted ? "☑" : "□"}</Text>
        <Text style={s.small}>I confirm the above demo transfer details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.button} onPress={confirm}>
        <Text style={s.white}>Confirm Transfer</Text>
      </TouchableOpacity>
      <Text style={s.note}>No actual payment will be processed.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { padding: 24, paddingBottom: 45 },
  back: { color: "#3525B5", fontSize: 19 },
  iconBox: { height: 130, justifyContent: "center", alignItems: "center" },
  icon: { fontSize: 72 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 9, marginBottom: 25 },
  card: { backgroundColor: "#F7F6FC", padding: 20, borderRadius: 15 },
  label: { color: "#888", textAlign: "center" },
  amount: { color: "#3525B5", fontSize: 30, fontWeight: "bold", textAlign: "center", marginVertical: 20 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderTopWidth: 1, borderColor: "#E7E5F1", paddingVertical: 13 },
  muted: { color: "#888", fontSize: 12, flex: 1 },
  value: { color: "#333", fontWeight: "bold", fontSize: 12, textAlign: "right", flex: 1 },
  checkRow: { flexDirection: "row", alignItems: "center", marginTop: 22 },
  check: { color: "#3525B5", fontSize: 24, marginRight: 10 },
  small: { color: "#666", fontSize: 12, flex: 1 },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center", marginTop: 27 },
  white: { color: "#fff", fontWeight: "bold" },
  note: { color: "#aaa", fontSize: 11, textAlign: "center", marginTop: 17 }
});
