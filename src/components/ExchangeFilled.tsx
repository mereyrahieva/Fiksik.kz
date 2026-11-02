
import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function ExchangeFilled({ onBack, onNext }: Props) {
  const [amount, setAmount] = useState("100");
  const [currency, setCurrency] = useState<"USD" | "EUR">("USD");
  const [confirmed, setConfirmed] = useState(false);

  const rate = currency === "USD" ? 490 : 520;
  const result = (Number(amount) || 0) * rate;

  function confirm() {
    if (Number(amount) <= 0) {
      Alert.alert("Invalid amount", "Enter a positive amount");
      return;
    }
    if (!confirmed) {
      Alert.alert("Confirmation", "Please accept the demo exchange terms");
      return;
    }
    Alert.alert("Exchange preview", `${amount} ${currency} = ${result.toFixed(2)} KZT`, [
      { text: "OK", onPress: onNext }
    ]);
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.content}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Exchange</Text>
      </TouchableOpacity>
      <Text style={s.title}>Currency Exchange</Text>
      <Text style={s.subtitle}>Check the exchange details before continuing</Text>

      <View style={s.box}>
        <Text style={s.label}>From</Text>
        <View style={s.row}>
          <TextInput style={s.input} value={amount} onChangeText={setAmount} keyboardType="decimal-pad" />
          <TouchableOpacity onPress={() => setCurrency(currency === "USD" ? "EUR" : "USD")}>
            <Text style={s.currency}>{currency} ⌄</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={s.swap}>
        <Text style={s.swapText}>⇣</Text>
      </View>

      <View style={s.box}>
        <Text style={s.label}>To</Text>
        <View style={s.row}>
          <Text style={s.result}>{result.toFixed(2)}</Text>
          <Text style={s.currency}>KZT</Text>
        </View>
      </View>

      <View style={s.details}>
        <Text style={s.detailTitle}>Transaction Details</Text>
        <View style={s.detailRow}><Text style={s.muted}>Exchange rate</Text><Text>1 {currency} = {rate} KZT</Text></View>
        <View style={s.detailRow}><Text style={s.muted}>Transfer fee</Text><Text>0.00 KZT</Text></View>
        <View style={s.detailRow}><Text style={s.muted}>Total received</Text><Text style={s.purple}>{result.toFixed(2)} KZT</Text></View>
      </View>

      <TouchableOpacity style={s.checkbox} onPress={() => setConfirmed(!confirmed)}>
        <Text style={s.purple}>{confirmed ? "☑" : "□"}</Text>
        <Text style={s.muted}> I understand this is a demo exchange</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.button} onPress={confirm}>
        <Text style={s.white}>Confirm exchange</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  content: { padding: 23, paddingBottom: 45 },
  back: { fontSize: 19, color: "#3525B5", marginBottom: 25 },
  title: { fontSize: 25, color: "#3525B5", fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 8, marginBottom: 28 },
  box: { borderWidth: 1, borderColor: "#E2E0EB", borderRadius: 15, padding: 18 },
  label: { color: "#999" },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  input: { fontSize: 27, color: "#333", fontWeight: "bold", flex: 1 },
  result: { fontSize: 27, color: "#3525B5", fontWeight: "bold", paddingVertical: 13 },
  currency: { color: "#3525B5", fontWeight: "bold", fontSize: 16, padding: 10 },
  swap: { alignSelf: "center", marginVertical: 12, backgroundColor: "#EEEAFE", width: 52, height: 52, borderRadius: 26, alignItems: "center", justifyContent: "center" },
  swapText: { color: "#3525B5", fontSize: 29 },
  details: { backgroundColor: "#F7F6FC", borderRadius: 14, padding: 17, marginTop: 28 },
  detailTitle: { fontSize: 17, fontWeight: "bold", marginBottom: 10 },
  detailRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 },
  muted: { color: "#888", fontSize: 12 },
  purple: { color: "#3525B5", fontWeight: "bold", fontSize: 17 },
  checkbox: { flexDirection: "row", alignItems: "center", marginTop: 23 },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center", marginTop: 27 },
  white: { color: "#fff", fontWeight: "bold" }
});
