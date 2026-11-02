import React, { useState } from "react";
import {
  View, Text, ScrollView, TextInput,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function InternetBillEmpty({ onBack, onNext }: Props) {
  const [provider, setProvider] = useState("");
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");

  function continuePayment() {
    if (!provider.trim() || !account.trim() ||
        !Number.isFinite(Number(amount)) || Number(amount) <= 0) {
      Alert.alert("Required Fields", "Please enter all payment details");
      return;
    }
    onNext?.();
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Internet Bill</Text>
      </TouchableOpacity>
      <Text style={s.title}>Pay Internet Bill</Text>
      <Text style={s.subtitle}>Pay your internet service bill</Text>

      <View style={s.hero}>
        <Text style={s.icon}>🌐</Text>
        <Text style={s.heroTitle}>Internet Service</Text>
      </View>

      <Text style={s.label}>Service Provider</Text>
      <TextInput
        style={s.input} placeholder="Enter provider"
        value={provider} onChangeText={setProvider}
      />
      <Text style={s.label}>Customer / Account Number</Text>
      <TextInput
        style={s.input} placeholder="Enter customer ID"
        value={account} onChangeText={setAccount}
      />
      <Text style={s.label}>Bill Amount</Text>
      <TextInput
        style={s.input} placeholder="0.00"
        value={amount} onChangeText={setAmount}
        keyboardType="decimal-pad"
      />

      <View style={s.info}>
        <Text style={s.infoTitle}>Payment Information</Text>
        <Text style={s.infoText}>
          Please confirm your internet provider and customer ID before proceeding.
        </Text>
      </View>

      <TouchableOpacity style={s.button} onPress={continuePayment}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
      <Text style={s.note}>Demo payment only. No real bills are paid.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { padding: 24, paddingBottom: 50 },
  back: { color: "#3525B5", fontSize: 19, marginBottom: 28 },
  title: { color: "#3525B5", fontWeight: "bold", fontSize: 25 },
  subtitle: { color: "#888", marginTop: 9 },
  hero: { backgroundColor: "#F5F3FF", height: 175, borderRadius: 18, justifyContent: "center", alignItems: "center", marginVertical: 27 },
  icon: { fontSize: 72 },
  heroTitle: { color: "#3525B5", fontWeight: "bold", marginTop: 8 },
  label: { color: "#555", fontSize: 13, marginBottom: 9 },
  input: { height: 52, borderWidth: 1, borderColor: "#ddd", borderRadius: 11, paddingHorizontal: 14, marginBottom: 19 },
  info: { backgroundColor: "#F4F2FF", padding: 17, borderRadius: 12, marginTop: 12 },
  infoTitle: { color: "#3525B5", fontWeight: "bold" },
  infoText: { color: "#888", fontSize: 12, lineHeight: 20, marginTop: 8 },
  button: { backgroundColor: "#3525B5", borderRadius: 11, alignItems: "center", padding: 17, marginTop: 30 },
  white: { color: "#fff", fontWeight: "bold" },
  note: { color: "#aaa", textAlign: "center", fontSize: 11, marginTop: 17 }
});