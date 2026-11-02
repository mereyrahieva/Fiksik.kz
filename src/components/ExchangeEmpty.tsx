
import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = {
  onBack?: () => void;
  onNext?: () => void;
  onCurrency?: () => void;
};

export default function ExchangeEmpty({ onBack, onNext, onCurrency }: Props) {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("KZT");

  const rate = 490;
  const converted = (Number(amount) || 0) * rate;

  const exchange = () => {
    if (!amount || Number(amount) <= 0) {
      Alert.alert("Invalid amount", "Enter an amount greater than zero");
      return;
    }
    Alert.alert("Demo exchange", `${amount} ${from} = ${converted.toFixed(2)} ${to}`, [
      { text: "Continue", onPress: onNext }
    ]);
  };

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Exchange</Text>
      </TouchableOpacity>
      <Text style={s.title}>Currency Exchange</Text>
      <Text style={s.subtitle}>Exchange your money quickly and easily</Text>
      <View style={s.card}>
        <Text style={s.label}>You send</Text>
        <View style={s.row}>
          <TextInput style={s.amount} placeholder="0.00"
            keyboardType="decimal-pad" value={amount}
            onChangeText={setAmount} />
          <TouchableOpacity style={s.currency}
            onPress={() => {
              setFrom(from === "USD" ? "EUR" : "USD");
              onCurrency?.();
            }}>
            <Text style={s.currencyText}>{from}  ⌄</Text>
          </TouchableOpacity>
        </View>
        <Text style={s.hint}>Available balance: Demo $2,000.00</Text>
      </View>
      <TouchableOpacity style={s.swap} onPress={() => {
        setAmount("");
        setFrom(to);
        setTo(from);
      }}>
        <Text style={s.swapText}>⇅</Text>
      </TouchableOpacity>
      <View style={s.card}>
        <Text style={s.label}>Recipient gets</Text>
        <View style={s.row}>
          <Text style={s.result}>{converted.toFixed(2)}</Text>
          <Text style={s.currencyText}>{to}</Text>
        </View>
      </View>
      <Text style={s.rate}>Demo rate: 1 USD = 490 KZT</Text>
      <TouchableOpacity style={s.button} onPress={exchange}>
        <Text style={s.white}>Exchange</Text>
      </TouchableOpacity>
      <Text style={s.demo}>No real currency is exchanged.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "white" },
  body: { padding: 24, paddingBottom: 50 },
  back: { color: "#3525B5", fontSize: 19, marginBottom: 30 },
  title: { fontSize: 25, color: "#3525B5", fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 8, marginBottom: 30 },
  card: { borderWidth: 1, borderColor: "#E5E3EE", borderRadius: 15, padding: 19 },
  label: { color: "#999", fontSize: 13 },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 12 },
  amount: { flex: 1, fontSize: 28, fontWeight: "bold", color: "#333" },
  result: { flex: 1, fontSize: 28, fontWeight: "bold", color: "#3525B5" },
  currency: { backgroundColor: "#F2F0FF", padding: 12, borderRadius: 10 },
  currencyText: { fontWeight: "bold", color: "#3525B5" },
  hint: { color: "#aaa", fontSize: 11, marginTop: 12 },
  swap: { alignSelf: "center", width: 55, height: 55, backgroundColor: "#3525B5", borderRadius: 28, alignItems: "center", justifyContent: "center", marginVertical: 13 },
  swapText: { color: "#fff", fontSize: 28 },
  rate: { color: "#888", textAlign: "center", marginTop: 25 },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center", marginTop: 35 },
  white: { color: "#fff", fontWeight: "bold" },
  demo: { color: "#aaa", textAlign: "center", marginTop: 18, fontSize: 11 }
});
