
import React, { useState } from "react";
import {
  ScrollView, View, Text, TextInput,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

const beneficiaries = [
  { id: "1", name: "Alex Johnson", account: "•••• 5678" },
  { id: "2", name: "Emma Wilson", account: "•••• 9012" },
  { id: "3", name: "John Brown", account: "•••• 3456" }
];

export default function TransferBeneficiaryFilled({ onBack, onNext }: Props) {
  const [selectedId, setSelectedId] = useState("1");
  const [amount, setAmount] = useState("150");
  const [message, setMessage] = useState("Payment");

  const recipient = beneficiaries.find(item => item.id === selectedId);

  function review() {
    if (!recipient || Number(amount) <= 0) {
      Alert.alert("Error", "Select a beneficiary and enter an amount");
      return;
    }
    Alert.alert(
      "Transfer review",
      `Recipient: ${recipient.name}\nAmount: $${amount}\n\nDemo only.`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Continue", onPress: onNext }
      ]
    );
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Transfer</Text>
      </TouchableOpacity>
      <Text style={s.title}>Choose Beneficiary</Text>
      <Text style={s.subtitle}>Send money to a saved recipient</Text>
      <Text style={s.heading}>Saved Beneficiaries</Text>

      {beneficiaries.map(item => (
        <TouchableOpacity
          key={item.id}
          style={[s.recipient, selectedId === item.id && s.activeRecipient]}
          onPress={() => setSelectedId(item.id)}
        >
          <View style={s.avatar}>
            <Text style={s.avatarText}>{item.name.charAt(0)}</Text>
          </View>
          <View style={s.recipientDetails}>
            <Text style={s.name}>{item.name}</Text>
            <Text style={s.account}>{item.account}</Text>
          </View>
          <Text style={s.radio}>{selectedId === item.id ? "◉" : "◯"}</Text>
        </TouchableOpacity>
      ))}

      <View style={s.form}>
        <Text style={s.label}>Amount (USD)</Text>
        <TextInput style={s.input} value={amount}
          onChangeText={setAmount} keyboardType="decimal-pad" />
        <Text style={s.label}>Message</Text>
        <TextInput style={s.input} value={message} onChangeText={setMessage} />
      </View>

      <View style={s.summary}>
        <Text style={s.muted}>Total transfer amount</Text>
        <Text style={s.amount}>$ {(Number(amount) || 0).toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={s.button} onPress={review}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
      <Text style={s.note}>Demo beneficiaries and balance</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { padding: 23, paddingBottom: 50 },
  back: { fontSize: 19, color: "#3525B5", marginBottom: 25 },
  title: { fontSize: 25, fontWeight: "bold", color: "#3525B5" },
  subtitle: { color: "#888", marginTop: 7 },
  heading: { fontSize: 18, fontWeight: "bold", color: "#333", marginTop: 30, marginBottom: 16 },
  recipient: { flexDirection: "row", alignItems: "center", borderRadius: 13, borderWidth: 1, borderColor: "#eee", padding: 13, marginBottom: 11 },
  activeRecipient: { borderColor: "#3525B5", backgroundColor: "#F8F7FF" },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: "#EBE9FF", justifyContent: "center", alignItems: "center" },
  avatarText: { fontSize: 21, color: "#3525B5", fontWeight: "bold" },
  recipientDetails: { flex: 1, marginLeft: 13 },
  name: { color: "#333", fontWeight: "bold", fontSize: 15 },
  account: { color: "#999", fontSize: 12, marginTop: 6 },
  radio: { color: "#3525B5", fontSize: 24 },
  form: { marginTop: 24 },
  label: { color: "#555", marginBottom: 8, fontSize: 13 },
  input: { height: 50, borderWidth: 1, borderColor: "#ddd", borderRadius: 11, paddingHorizontal: 13, marginBottom: 17 },
  summary: { backgroundColor: "#F4F2FF", borderRadius: 12, padding: 18, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  muted: { fontSize: 12, color: "#777" },
  amount: { fontWeight: "bold", color: "#3525B5", fontSize: 21 },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center", marginTop: 28 },
  white: { color: "#fff", fontWeight: "bold" },
  note: { textAlign: "center", color: "#aaa", fontSize: 11, marginTop: 18 }
});
