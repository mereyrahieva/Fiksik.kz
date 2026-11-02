
import React, { useState } from "react";
import {
  ScrollView, Text, TextInput, View,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function TransferManualEmpty({ onBack, onNext }: Props) {
  const [bank, setBank] = useState("");
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");

  function continueTransfer() {
    if (!bank.trim() || !name.trim() || account.length < 10 || Number(amount) <= 0) {
      Alert.alert("Missing information", "Complete all bank transfer fields");
      return;
    }
    onNext?.();
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.content}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Manual Transfer</Text>
      </TouchableOpacity>
      <Text style={s.title}>Transfer to Bank</Text>
      <Text style={s.subtitle}>Enter beneficiary details manually</Text>
      <View style={s.iconBox}><Text style={s.icon}>🏦</Text></View>

      <Text style={s.label}>Beneficiary bank</Text>
      <TextInput style={s.input} placeholder="Bank name"
        value={bank} onChangeText={setBank} />

      <Text style={s.label}>Beneficiary name</Text>
      <TextInput style={s.input} placeholder="Full name"
        value={name} onChangeText={setName} />

      <Text style={s.label}>Account number / IBAN</Text>
      <TextInput style={s.input} placeholder="Account number"
        value={account} onChangeText={setAccount}
        autoCapitalize="characters" />

      <Text style={s.label}>Transfer amount</Text>
      <TextInput style={s.input} placeholder="0.00"
        value={amount} keyboardType="decimal-pad"
        onChangeText={setAmount} />

      <View style={s.info}>
        <Text style={s.infoText}>
          Make sure the beneficiary account information is correct.
          This demonstration does not connect to a bank.
        </Text>
      </View>

      <TouchableOpacity style={s.button} onPress={continueTransfer}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  content: { padding: 23, paddingBottom: 50 },
  back: { color: "#3525B5", fontSize: 19, marginBottom: 27 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 7 },
  iconBox: { backgroundColor: "#F4F2FF", height: 135, borderRadius: 18, alignItems: "center", justifyContent: "center", marginVertical: 26 },
  icon: { fontSize: 65 },
  label: { color: "#555", fontSize: 13, marginBottom: 9 },
  input: { height: 51, borderWidth: 1, borderColor: "#ddd", borderRadius: 11, paddingHorizontal: 14, marginBottom: 17 },
  info: { backgroundColor: "#F5F3FF", borderRadius: 11, padding: 15, marginTop: 8 },
  infoText: { color: "#777", fontSize: 12, lineHeight: 19 },
  button: { backgroundColor: "#3525B5", padding: 17, alignItems: "center", borderRadius: 11, marginTop: 27 },
  white: { color: "#fff", fontWeight: "bold" }
});
