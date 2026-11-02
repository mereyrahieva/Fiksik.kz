
import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function TransferEmpty({ onBack, onNext }: Props) {
  const [recipient, setRecipient] = useState("");
  const [card, setCard] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const submit = () => {
    if (!recipient.trim() || card.replace(/\s/g, "").length !== 16 || Number(amount) <= 0) {
      Alert.alert("Invalid details", "Enter recipient, 16-digit card number and amount");
      return;
    }
    onNext?.();
  };

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Transfer</Text>
      </TouchableOpacity>
      <Text style={s.title}>Transfer Money</Text>
      <Text style={s.subtitle}>Send money to another account</Text>
      <View style={s.cardBox}>
        <Text style={s.cardLabel}>Available balance</Text>
        <Text style={s.balance}>$ 2,500.00</Text>
        <Text style={s.cardNumber}>•••• •••• •••• 4589</Text>
      </View>
      <Text style={s.heading}>Transfer Details</Text>
      <Text style={s.label}>Recipient name</Text>
      <TextInput style={s.input} placeholder="Full name"
        value={recipient} onChangeText={setRecipient} />
      <Text style={s.label}>Card number</Text>
      <TextInput style={s.input} placeholder="0000 0000 0000 0000"
        keyboardType="number-pad" value={card} maxLength={16}
        onChangeText={setCard} />
      <Text style={s.label}>Amount</Text>
      <TextInput style={s.input} placeholder="0.00"
        keyboardType="decimal-pad" value={amount} onChangeText={setAmount} />
      <Text style={s.label}>Message (optional)</Text>
      <TextInput style={s.input} placeholder="Message"
        value={note} onChangeText={setNote} />
      <View style={s.feeRow}>
        <Text style={s.muted}>Transfer fee</Text>
        <Text style={s.value}>$ 0.00</Text>
      </View>
      <TouchableOpacity style={s.button} onPress={submit}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
      <Text style={s.demo}>Demo transfer only. No real money is sent.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { padding: 23, paddingBottom: 45 },
  back: { fontSize: 19, color: "#3525B5", marginBottom: 26 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 8, marginBottom: 25 },
  cardBox: { backgroundColor: "#29369B", padding: 23, borderRadius: 17, height: 160, justifyContent: "space-between" },
  cardLabel: { color: "#DADCFD" },
  balance: { color: "#fff", fontWeight: "bold", fontSize: 28 },
  cardNumber: { color: "#E0E3FA", letterSpacing: 2 },
  heading: { fontSize: 18, fontWeight: "bold", color: "#333", marginTop: 25, marginBottom: 19 },
  label: { color: "#666", fontSize: 13, marginBottom: 8 },
  input: { height: 51, borderWidth: 1, borderColor: "#ddd", borderRadius: 11, paddingHorizontal: 14, marginBottom: 17 },
  feeRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 8 },
  muted: { color: "#999" },
  value: { color: "#3525B5", fontWeight: "bold" },
  button: { backgroundColor: "#3525B5", padding: 17, alignItems: "center", borderRadius: 11, marginTop: 29 },
  white: { color: "#fff", fontWeight: "bold" },
  demo: { color: "#aaa", fontSize: 11, textAlign: "center", marginTop: 19 }
});
