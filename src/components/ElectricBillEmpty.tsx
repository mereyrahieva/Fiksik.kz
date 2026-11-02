
import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function ElectricBillEmpty({ onBack, onNext }: Props) {
  const [provider, setProvider] = useState("");
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");

  function continuePayment() {
    if (!provider.trim() || account.trim().length < 5 ||
        !Number.isFinite(Number(amount)) || Number(amount) <= 0) {
      Alert.alert("Missing Details", "Fill in the provider, account and amount.");
      return;
    }
    onNext?.();
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Electric Bill</Text>
      </TouchableOpacity>
      <Text style={s.title}>Electric Bill Payment</Text>
      <Text style={s.subtitle}>Pay your electricity bill easily</Text>
      <View style={s.hero}>
        <Text style={s.heroIcon}>💡</Text>
        <Text style={s.heroText}>Electricity Service</Text>
      </View>
      <Text style={s.label}>Service Provider</Text>
      <TextInput style={s.input} placeholder="Enter provider"
        value={provider} onChangeText={setProvider} />
      <Text style={s.label}>Customer / Account Number</Text>
      <TextInput style={s.input} placeholder="Enter account number"
        value={account} onChangeText={setAccount} />
      <Text style={s.label}>Payment Amount</Text>
      <TextInput style={s.input} placeholder="0.00"
        value={amount} onChangeText={setAmount} keyboardType="decimal-pad" />
      <View style={s.info}>
        <Text style={s.infoTitle}>Payment Information</Text>
        <Text style={s.infoText}>
          Check your electricity provider and customer number
          before making a payment.
        </Text>
      </View>
      <TouchableOpacity style={s.button} onPress={continuePayment}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
      <Text style={s.note}>Demo bill payment — no money is transferred.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  body: { padding: 24, paddingBottom: 50 },
  back: { color: "#3525B5", fontSize: 19, marginBottom: 27 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 9 },
  hero: { height: 175, borderRadius: 18, backgroundColor: "#F4F2FF", marginVertical: 27, alignItems: "center", justifyContent: "center" },
  heroIcon: { fontSize: 75 },
  heroText: { color: "#3525B5", fontWeight: "bold", marginTop: 10 },
  label: { color: "#555", fontSize: 13, marginBottom: 9 },
  input: { height: 52, borderWidth: 1, borderColor: "#DDD", borderRadius: 11, paddingHorizontal: 14, marginBottom: 20 },
  info: { backgroundColor: "#F5F3FF", padding: 18, borderRadius: 12, marginTop: 12 },
  infoTitle: { color: "#3525B5", fontWeight: "bold" },
  infoText: { color: "#888", fontSize: 12, lineHeight: 20, marginTop: 10 },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center", marginTop: 28 },
  white: { color: "#FFF", fontWeight: "bold" },
  note: { color: "#AAA", marginTop: 16, textAlign: "center", fontSize: 11 }
});
