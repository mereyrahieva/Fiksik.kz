
import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function TransferFilled({ onBack, onNext }: Props) {
  const [name, setName] = useState("Alex Johnson");
  const [card, setCard] = useState("4532123412345678");
  const [amount, setAmount] = useState("250");
  const [message, setMessage] = useState("Thank you!");
  const [saveRecipient, setSaveRecipient] = useState(true);

  const total = Number(amount) || 0;

  function transfer() {
    if (!name.trim() || card.length !== 16 || total <= 0) {
      Alert.alert("Error", "Please check the transfer details");
      return;
    }
    Alert.alert("Review Transfer", `Send $${total.toFixed(2)} to ${name}?`, [
      { text: "Cancel", style: "cancel" },
      { text: "Continue", onPress: onNext }
    ]);
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Transfer</Text>
      </TouchableOpacity>
      <Text style={s.title}>Transfer Money</Text>
      <Text style={s.sub}>Confirm your recipient information</Text>
      <View style={s.account}>
        <Text style={s.accountLabel}>From account</Text>
        <Text style={s.accountName}>Premium Account</Text>
        <Text style={s.accountNumber}>•••• 4589</Text>
        <Text style={s.balance}>Available: $2,500.00</Text>
      </View>

      <Text style={s.label}>Beneficiary name</Text>
      <TextInput style={s.input} value={name} onChangeText={setName} />
      <Text style={s.label}>Account / Card number</Text>
      <TextInput style={s.input} value={card} onChangeText={setCard}
        keyboardType="number-pad" maxLength={16} />
      <Text style={s.label}>Amount (USD)</Text>
      <TextInput style={s.input} value={amount} onChangeText={setAmount} keyboardType="decimal-pad" />
      <Text style={s.label}>Message</Text>
      <TextInput style={s.input} value={message} onChangeText={setMessage} />

      <TouchableOpacity style={s.checkboxRow} onPress={() => setSaveRecipient(!saveRecipient)}>
        <Text style={s.checkbox}>{saveRecipient ? "☑" : "□"}</Text>
        <Text style={s.sub}>Save beneficiary for future transfers</Text>
      </TouchableOpacity>

      <View style={s.summary}>
        <Text style={s.summaryText}>Transfer amount</Text>
        <Text style={s.summaryAmount}>$ {total.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={s.button} onPress={transfer}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
      <Text style={s.note}>No real bank transaction will occur.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { padding: 23, paddingBottom: 45 },
  back: { color: "#3525B5", fontSize: 19, marginBottom: 26 },
  title: { fontSize: 25, color: "#3525B5", fontWeight: "bold" },
  sub: { color: "#888", fontSize: 12, marginTop: 6 },
  account: { backgroundColor: "#29369B", padding: 20, borderRadius: 17, marginVertical: 25 },
  accountLabel: { color: "#CFD4FF", fontSize: 12 },
  accountName: { fontSize: 20, fontWeight: "bold", color: "#fff", marginTop: 8 },
  accountNumber: { color: "#fff", marginTop: 10, letterSpacing: 2 },
  balance: { color: "#CDD3FF", marginTop: 12, fontSize: 12 },
  label: { color: "#555", marginBottom: 8, fontSize: 13 },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 11, height: 49, paddingHorizontal: 14, marginBottom: 16 },
  checkboxRow: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  checkbox: { color: "#3525B5", fontSize: 23, marginRight: 9 },
  summary: { backgroundColor: "#F4F2FF", borderRadius: 13, padding: 17, marginTop: 25, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  summaryText: { color: "#666" },
  summaryAmount: { fontSize: 21, fontWeight: "bold", color: "#3525B5" },
  button: { backgroundColor: "#3525B5", alignItems: "center", padding: 17, borderRadius: 11, marginTop: 24 },
  white: { color: "#fff", fontWeight: "bold" },
  note: { color: "#aaa", fontSize: 11, textAlign: "center", marginTop: 18 }
});
