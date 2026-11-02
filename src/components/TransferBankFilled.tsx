
import React, { useState } from "react";
import {
  ScrollView, View, Text, TextInput,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function TransferBankFilled({ onBack, onNext }: Props) {
  const [bank, setBank] = useState("Halyk Bank");
  const [account, setAccount] = useState("KZ123456789012345678");
  const [amount, setAmount] = useState("250");
  const [name, setName] = useState("Alex Johnson");

  function continueScreen() {
    if (!bank.trim() || !name.trim() || account.length < 10 || Number(amount) <= 0) {
      Alert.alert("Error", "Check your transfer details");
      return;
    }
    onNext?.();
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}><Text style={s.back}>‹  Bank Transfer</Text></TouchableOpacity>
      <Text style={s.title}>Transfer to Bank</Text>
      <Text style={s.sub}>Review and edit transfer information</Text>
      <View style={s.accountCard}>
        <Text style={s.cardLabel}>From</Text>
        <Text style={s.cardTitle}>Premium Account</Text>
        <Text style={s.cardText}>•••• 4589</Text>
        <Text style={s.cardText}>Available $2,500.00</Text>
      </View>
      <Text style={s.label}>Receiving bank</Text>
      <TextInput style={s.input} value={bank} onChangeText={setBank} />
      <Text style={s.label}>Beneficiary name</Text>
      <TextInput style={s.input} value={name} onChangeText={setName} />
      <Text style={s.label}>Account number / IBAN</Text>
      <TextInput style={s.input} value={account} onChangeText={setAccount} />
      <Text style={s.label}>Amount</Text>
      <TextInput style={s.input} value={amount} onChangeText={setAmount} keyboardType="decimal-pad" />
      <View style={s.total}>
        <Text style={s.muted}>Transfer amount</Text>
        <Text style={s.amount}>$ {(Number(amount) || 0).toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={s.button} onPress={continueScreen}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
      <Text style={s.note}>Demo form — no money is transferred.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { padding: 24, paddingBottom: 45 },
  back: { fontSize: 19, color: "#3525B5", marginBottom: 27 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  sub: { color: "#999", marginTop: 8 },
  accountCard: { backgroundColor: "#25359B", padding: 23, borderRadius: 16, marginVertical: 25 },
  cardLabel: { color: "#C5CBFC" },
  cardTitle: { color: "#fff", fontSize: 20, fontWeight: "bold", marginTop: 10 },
  cardText: { color: "#DEE1FF", marginTop: 13 },
  label: { fontSize: 13, color: "#555", marginBottom: 8 },
  input: { height: 51, borderWidth: 1, borderColor: "#ddd", borderRadius: 11, paddingHorizontal: 14, marginBottom: 17, color: "#333" },
  total: { backgroundColor: "#F4F2FF", padding: 18, borderRadius: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  muted: { color: "#888" },
  amount: { color: "#3525B5", fontSize: 21, fontWeight: "bold" },
  button: { backgroundColor: "#3525B5", padding: 17, alignItems: "center", borderRadius: 11, marginTop: 25 },
  white: { color: "#fff", fontWeight: "bold" },
  note: { textAlign: "center", color: "#aaa", fontSize: 11, marginTop: 15 }
});
