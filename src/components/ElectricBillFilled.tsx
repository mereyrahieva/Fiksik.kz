
import React, { useState } from "react";
import {
  ScrollView, View, Text, TextInput,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function ElectricBillFilled({ onBack, onNext }: Props) {
  const [provider, setProvider] = useState("Electric Utility");
  const [account, setAccount] = useState("1234567890");
  const [amount, setAmount] = useState("75");
  const [card, setCard] = useState("VISA •••• 4589");

  function proceed() {
    if (!provider.trim() || account.trim().length < 5 ||
        !Number.isFinite(Number(amount)) || Number(amount) <= 0) {
      Alert.alert("Invalid Details", "Please check your bill details.");
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
      <Text style={s.subtitle}>Review your electricity bill information</Text>
      <View style={s.provider}>
        <Text style={s.providerIcon}>⚡</Text>
        <View>
          <Text style={s.providerName}>{provider}</Text>
          <Text style={s.muted}>Electricity Service</Text>
        </View>
      </View>
      <Text style={s.label}>Provider</Text>
      <TextInput style={s.input} value={provider} onChangeText={setProvider} />
      <Text style={s.label}>Customer Number</Text>
      <TextInput style={s.input} value={account} onChangeText={setAccount} />
      <Text style={s.label}>Bill Amount</Text>
      <TextInput style={s.input} value={amount}
        onChangeText={setAmount} keyboardType="decimal-pad" />
      <Text style={s.label}>Pay From</Text>
      <TouchableOpacity style={s.select} onPress={() =>
        setCard(card.startsWith("VISA") ? "Savings •••• 7812" : "VISA •••• 4589")
      }>
        <Text style={s.cardText}>{card}</Text><Text style={s.arrow}>⌄</Text>
      </TouchableOpacity>
      <View style={s.summary}>
        <Text style={s.muted}>Total Bill</Text>
        <Text style={s.total}>${(Number(amount) || 0).toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={s.button} onPress={proceed}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  body: { padding: 24, paddingBottom: 50 },
  back: { color: "#3525B5", fontSize: 19, marginBottom: 25 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 9 },
  provider: { flexDirection: "row", alignItems: "center", padding: 20, backgroundColor: "#F4F2FF", borderRadius: 15, marginVertical: 27 },
  providerIcon: { fontSize: 48, marginRight: 16 },
  providerName: { color: "#3525B5", fontSize: 18, fontWeight: "bold" },
  muted: { color: "#888", fontSize: 12, marginTop: 6 },
  label: { color: "#555", fontSize: 13, marginBottom: 9 },
  input: { borderWidth: 1, borderColor: "#DDD", height: 51, borderRadius: 11, paddingHorizontal: 14, marginBottom: 18 },
  select: { borderWidth: 1, borderColor: "#DDD", height: 51, borderRadius: 11, paddingHorizontal: 14, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  cardText: { color: "#333" },
  arrow: { color: "#3525B5", fontSize: 23 },
  summary: { backgroundColor: "#F7F6FC", padding: 19, borderRadius: 13, marginTop: 25, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  total: { color: "#3525B5", fontWeight: "bold", fontSize: 24 },
  button: { padding: 17, borderRadius: 11, backgroundColor: "#3525B5", alignItems: "center", marginTop: 27 },
  white: { color: "#FFF", fontWeight: "bold" }
});
