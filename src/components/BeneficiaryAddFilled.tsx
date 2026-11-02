
import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function BeneficiaryAddFilled({ onBack, onNext }: Props) {
  const [name, setName] = useState("Emma Wilson");
  const [bank, setBank] = useState("Halyk Bank");
  const [account, setAccount] = useState("KZ123456789012345678");
  const [nickname, setNickname] = useState("Emma");
  const [confirmed, setConfirmed] = useState(false);

  function saveBeneficiary() {
    if (!name.trim() || !bank.trim() || account.length < 10) {
      Alert.alert("Error", "Check your beneficiary details.");
      return;
    }
    if (!confirmed) {
      Alert.alert("Confirmation", "Confirm the recipient details.");
      return;
    }
    Alert.alert("Demo", "Recipient saved for this demonstration.", [
      { text: "Continue", onPress: onNext }
    ]);
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Add Beneficiary</Text>
      </TouchableOpacity>
      <Text style={s.title}>Beneficiary Details</Text>
      <Text style={s.subtitle}>Review the new recipient information</Text>
      <View style={s.avatar}><Text style={s.initial}>EW</Text></View>

      <Text style={s.label}>Full Name</Text>
      <TextInput style={s.input} value={name} onChangeText={setName} />
      <Text style={s.label}>Bank Name</Text>
      <TextInput style={s.input} value={bank} onChangeText={setBank} />
      <Text style={s.label}>Account Number</Text>
      <TextInput style={s.input} value={account} onChangeText={setAccount}
        autoCapitalize="characters" />
      <Text style={s.label}>Nickname</Text>
      <TextInput style={s.input} value={nickname} onChangeText={setNickname} />

      <View style={s.summary}>
        <Text style={s.summaryTitle}>Recipient Preview</Text>
        <Text style={s.preview}>{name}</Text>
        <Text style={s.muted}>{bank}</Text>
        <Text style={s.muted}>{account}</Text>
      </View>

      <TouchableOpacity style={s.checkRow} onPress={() => setConfirmed(!confirmed)}>
        <Text style={s.check}>{confirmed ? "☑" : "□"}</Text>
        <Text style={s.muted}>I confirm these details are correct</Text>
      </TouchableOpacity>

      <TouchableOpacity style={s.button} onPress={saveBeneficiary}>
        <Text style={s.white}>Save Beneficiary</Text>
      </TouchableOpacity>
      <Text style={s.note}>Demo form — data is not saved to a server.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  body: { padding: 24, paddingBottom: 50 },
  back: { color: "#3525B5", fontSize: 19, marginBottom: 27 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 9 },
  avatar: { width: 90, height: 90, borderRadius: 45, alignItems: "center", justifyContent: "center", backgroundColor: "#EEEAFE", alignSelf: "center", marginVertical: 28 },
  initial: { color: "#3525B5", fontWeight: "bold", fontSize: 31 },
  label: { color: "#555", fontSize: 13, marginBottom: 8 },
  input: { height: 51, borderWidth: 1, borderColor: "#DDD", borderRadius: 11, paddingHorizontal: 14, marginBottom: 18 },
  summary: { backgroundColor: "#F5F3FF", borderRadius: 13, padding: 19, marginTop: 13 },
  summaryTitle: { fontWeight: "bold", color: "#3525B5" },
  preview: { fontWeight: "bold", color: "#333", marginTop: 15 },
  muted: { color: "#888", marginTop: 8, fontSize: 12 },
  checkRow: { flexDirection: "row", alignItems: "center", marginTop: 22 },
  check: { color: "#3525B5", fontSize: 24, marginRight: 9 },
  button: { backgroundColor: "#3525B5", padding: 17, alignItems: "center", borderRadius: 11, marginTop: 27 },
  white: { color: "#FFF", fontWeight: "bold" },
  note: { color: "#AAA", fontSize: 11, textAlign: "center", marginTop: 17 }
});
