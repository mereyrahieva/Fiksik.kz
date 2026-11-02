
import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function BeneficiaryAddEmpty({ onBack, onNext }: Props) {
  const [name, setName] = useState("");
  const [bank, setBank] = useState("");
  const [account, setAccount] = useState("");
  const [nickname, setNickname] = useState("");

  function save() {
    if (!name.trim() || !bank.trim() || account.trim().length < 10) {
      Alert.alert("Missing Information", "Enter name, bank and account number.");
      return;
    }
    Alert.alert("Demo", "Beneficiary information validated.", [
      { text: "Continue", onPress: onNext }
    ]);
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Add Beneficiary</Text>
      </TouchableOpacity>
      <View style={s.hero}><Text style={s.icon}>👤</Text></View>
      <Text style={s.title}>Add New Beneficiary</Text>
      <Text style={s.subtitle}>Enter the recipient's account details</Text>
      <Text style={s.label}>Full Name</Text>
      <TextInput style={s.input} placeholder="Enter full name"
        value={name} onChangeText={setName} />
      <Text style={s.label}>Bank Name</Text>
      <TextInput style={s.input} placeholder="Enter bank name"
        value={bank} onChangeText={setBank} />
      <Text style={s.label}>Account Number / IBAN</Text>
      <TextInput style={s.input} placeholder="Enter account number"
        value={account} onChangeText={setAccount}
        autoCapitalize="characters" />
      <Text style={s.label}>Nickname (Optional)</Text>
      <TextInput style={s.input} placeholder="Recipient nickname"
        value={nickname} onChangeText={setNickname} />
      <View style={s.info}>
        <Text style={s.infoText}>
          Double-check recipient details before saving.
        </Text>
      </View>
      <TouchableOpacity style={s.button} onPress={save}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  body: { padding: 24, paddingBottom: 50 },
  back: { fontSize: 19, color: "#3525B5", marginBottom: 20 },
  hero: { height: 130, backgroundColor: "#F5F3FF", borderRadius: 17, justifyContent: "center", alignItems: "center", marginBottom: 25 },
  icon: { fontSize: 65 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 8, marginBottom: 28 },
  label: { color: "#555", fontSize: 13, marginBottom: 8 },
  input: { height: 51, borderWidth: 1, borderColor: "#DDD", borderRadius: 11, paddingHorizontal: 14, marginBottom: 18 },
  info: { backgroundColor: "#F5F3FF", padding: 17, borderRadius: 12, marginTop: 8 },
  infoText: { color: "#777", lineHeight: 20, fontSize: 12 },
  button: { backgroundColor: "#3525B5", padding: 17, alignItems: "center", borderRadius: 11, marginTop: 28 },
  white: { color: "#FFF", fontWeight: "bold" }
});
