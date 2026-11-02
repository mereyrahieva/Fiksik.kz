
import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void; onChooseBank?: () => void };

export default function TransferBankEmpty({
  onBack, onNext, onChooseBank
}: Props) {
  const [bank, setBank] = useState("");
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");

  function submit() {
    if (!bank.trim() || account.trim().length < 10 || Number(amount) <= 0) {
      Alert.alert("Required fields", "Select a bank and enter account and amount");
      return;
    }
    onNext?.();
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}><Text style={s.back}>‹  Bank Transfer</Text></TouchableOpacity>
      <Text style={s.title}>Transfer to Another Bank</Text>
      <Text style={s.sub}>Enter the receiving bank details</Text>
      <View style={s.hero}><Text style={s.icon}>🏦</Text></View>
      <Text style={s.label}>Receiving bank</Text>
      <TouchableOpacity style={s.field} onPress={onChooseBank}>
        <Text style={s.fieldText}>{bank || "Select a bank"}</Text>
        <Text style={s.purple}>⌄</Text>
      </TouchableOpacity>
      <Text style={s.label}>Or enter bank name</Text>
      <TextInput style={s.input} value={bank} onChangeText={setBank} placeholder="Bank name" />
      <Text style={s.label}>Account number</Text>
      <TextInput style={s.input} value={account} onChangeText={setAccount} placeholder="IBAN or account number" autoCapitalize="characters" />
      <Text style={s.label}>Amount</Text>
      <TextInput style={s.input} value={amount} onChangeText={setAmount} placeholder="0.00" keyboardType="decimal-pad" />
      <TouchableOpacity style={s.button} onPress={submit}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
      <Text style={s.note}>Demo transfer. No real bank API is connected.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { padding: 24, paddingBottom: 50 },
  back: { color: "#3525B5", fontSize: 19, marginBottom: 28 },
  title: { color: "#3525B5", fontSize: 24, fontWeight: "bold" },
  sub: { color: "#888", marginTop: 8 },
  hero: { height: 135, borderRadius: 16, backgroundColor: "#F3F1FF", alignItems: "center", justifyContent: "center", marginVertical: 25 },
  icon: { fontSize: 70 },
  label: { color: "#666", fontSize: 13, marginBottom: 9 },
  field: { height: 52, borderWidth: 1, borderColor: "#ddd", borderRadius: 11, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 14, marginBottom: 17 },
  fieldText: { color: "#888" },
  purple: { color: "#3525B5", fontSize: 20 },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 11, height: 52, paddingHorizontal: 14, marginBottom: 18 },
  button: { backgroundColor: "#3525B5", borderRadius: 11, padding: 17, alignItems: "center", marginTop: 20 },
  white: { color: "#fff", fontWeight: "bold" },
  note: { textAlign: "center", color: "#aaa", marginTop: 16, fontSize: 11 }
});
