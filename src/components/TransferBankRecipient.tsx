
import React, { useState } from "react";
import {
  ScrollView, Text, TextInput, TouchableOpacity,
  View, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function TransferBankRecipient({ onBack, onNext }: Props) {
  const [name, setName] = useState("Alex Johnson");
  const [iban, setIban] = useState("KZ123456789012345678");
  const [bank, setBank] = useState("Halyk Bank");
  const [amount, setAmount] = useState("250");
  const [save, setSave] = useState(false);

  const confirmRecipient = () => {
    if (!name.trim() || iban.length < 10 || !bank.trim() || Number(amount) <= 0) {
      Alert.alert("Error", "Complete the recipient information");
      return;
    }
    onNext?.();
  };

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Beneficiary Details</Text>
      </TouchableOpacity>
      <Text style={s.title}>Recipient Information</Text>
      <Text style={s.sub}>Please verify the recipient details</Text>
      <View style={s.avatar}><Text style={s.avatarText}>AJ</Text></View>
      <Text style={s.label}>Full name</Text>
      <TextInput style={s.input} value={name} onChangeText={setName} />
      <Text style={s.label}>Account number</Text>
      <TextInput style={s.input} value={iban} onChangeText={setIban} />
      <Text style={s.label}>Bank name</Text>
      <TextInput style={s.input} value={bank} onChangeText={setBank} />
      <Text style={s.label}>Amount</Text>
      <TextInput style={s.input} value={amount} onChangeText={setAmount} keyboardType="decimal-pad" />
      <TouchableOpacity style={s.checkRow} onPress={() => setSave(!save)}>
        <Text style={s.check}>{save ? "☑" : "□"}</Text>
        <Text style={s.sub}>Save as beneficiary</Text>
      </TouchableOpacity>
      <View style={s.summary}>
        <Text style={s.sub}>Recipient bank</Text>
        <Text style={s.bank}>{bank}</Text>
      </View>
      <TouchableOpacity style={s.button} onPress={confirmRecipient}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { padding: 24, paddingBottom: 45 },
  back: { color: "#3525B5", fontSize: 19, marginBottom: 28 },
  title: { fontSize: 25, color: "#3525B5", fontWeight: "bold" },
  sub: { color: "#888", fontSize: 12, marginTop: 7 },
  avatar: { width: 86, height: 86, backgroundColor: "#EBE8FF", borderRadius: 43, alignItems: "center", justifyContent: "center", alignSelf: "center", marginVertical: 25 },
  avatarText: { fontSize: 30, color: "#3525B5", fontWeight: "bold" },
  label: { color: "#555", fontSize: 13, marginBottom: 8 },
  input: { height: 51, borderWidth: 1, borderColor: "#ddd", borderRadius: 11, paddingHorizontal: 14, marginBottom: 17 },
  checkRow: { flexDirection: "row", alignItems: "center" },
  check: { fontSize: 24, color: "#3525B5", marginRight: 10 },
  summary: { marginTop: 25, backgroundColor: "#F5F3FF", borderRadius: 12, padding: 17 },
  bank: { fontWeight: "bold", color: "#3525B5", marginTop: 8 },
  button: { padding: 17, backgroundColor: "#3525B5", borderRadius: 11, alignItems: "center", marginTop: 24 },
  white: { fontWeight: "bold", color: "#fff" }
});
