import React, { useState } from "react";
import {
  View, Text, ScrollView, TextInput,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function InternetBillDetails({ onBack, onNext }: Props) {
  const [provider, setProvider] = useState("Home Internet");
  const [account, setAccount] = useState("1234567890");
  const [amount, setAmount] = useState("35");
  const [paymentCard, setPaymentCard] = useState("Premium •••• 4589");

  function proceed() {
    if (!provider.trim() || !account.trim() ||
        !Number.isFinite(Number(amount)) || Number(amount) <= 0) {
      Alert.alert("Error", "Check the payment details");
      return;
    }
    onNext?.();
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Internet Bill</Text>
      </TouchableOpacity>
      <Text style={s.title}>Payment Details</Text>
      <Text style={s.sub}>Review your internet bill</Text>

      <View style={s.providerCard}>
        <Text style={s.providerIcon}>🌐</Text>
        <View>
          <Text style={s.providerName}>{provider}</Text>
          <Text style={s.muted}>Internet Service Provider</Text>
        </View>
      </View>

      <Text style={s.label}>Service Provider</Text>
      <TextInput style={s.input}
        value={provider} onChangeText={setProvider} />

      <Text style={s.label}>Customer Number</Text>
      <TextInput style={s.input}
        value={account} onChangeText={setAccount} />

      <Text style={s.label}>Amount</Text>
      <TextInput style={s.input}
        value={amount} onChangeText={setAmount}
        keyboardType="decimal-pad" />

      <Text style={s.label}>Pay From</Text>
      <TouchableOpacity
        style={s.selectCard}
        onPress={() => setPaymentCard(
          paymentCard.startsWith("Premium") ? "Savings •••• 7812" : "Premium •••• 4589"
        )}
      >
        <Text style={s.cardText}>{paymentCard}</Text>
        <Text style={s.arrow}>⌄</Text>
      </TouchableOpacity>

      <View style={s.summary}>
        <View style={s.row}><Text style={s.muted}>Bill Amount</Text><Text>${(Number(amount) || 0).toFixed(2)}</Text></View>
        <View style={s.row}><Text style={s.muted}>Fee</Text><Text>$0.00</Text></View>
        <View style={s.row}><Text style={s.muted}>Total</Text><Text style={s.total}>${(Number(amount) || 0).toFixed(2)}</Text></View>
      </View>

      <TouchableOpacity style={s.button} onPress={proceed}>
        <Text style={s.white}>Continue to Verification</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { padding: 24, paddingBottom: 50 },
  back: { color: "#3525B5", fontSize: 19, marginBottom: 26 },
  title: { fontSize: 25, fontWeight: "bold", color: "#3525B5" },
  sub: { color: "#888", marginTop: 8 },
  providerCard: { backgroundColor: "#F3F1FF", padding: 18, borderRadius: 15, flexDirection: "row", alignItems: "center", marginVertical: 26 },
  providerIcon: { fontSize: 44, marginRight: 15 },
  providerName: { color: "#3525B5", fontWeight: "bold", fontSize: 17 },
  muted: { color: "#888", fontSize: 12, marginTop: 5 },
  label: { color: "#555", fontSize: 13, marginBottom: 8 },
  input: { height: 51, borderWidth: 1, borderColor: "#ddd", borderRadius: 11, paddingHorizontal: 14, marginBottom: 18 },
  selectCard: { height: 52, borderWidth: 1, borderColor: "#ddd", borderRadius: 11, paddingHorizontal: 14, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  cardText: { color: "#333" },
  arrow: { color: "#3525B5", fontSize: 22 },
  summary: { backgroundColor: "#F7F6FC", borderRadius: 13, padding: 18, marginTop: 26 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 },
  total: { color: "#3525B5", fontSize: 21, fontWeight: "bold" },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center", marginTop: 27 },
  white: { color: "#fff", fontWeight: "bold" }
});