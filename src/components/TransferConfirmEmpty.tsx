
import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, StyleSheet, Alert
} from "react-native";

type Props = {
  onBack?: () => void;
  onNext?: () => void;
};

export default function TransferConfirmEmpty({
  onBack, onNext
}: Props) {
  const [code, setCode] = useState("");

  function verify() {
    if (code.length !== 6) {
      Alert.alert("Error", "Enter the 6-digit verification code");
      return;
    }
    if (code !== "123456") {
      Alert.alert("Invalid code", "Demo code is 123456");
      return;
    }
    onNext?.();
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.content}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerText}>Confirm Transfer</Text>
      </View>

      <View style={s.hero}>
        <Text style={s.icon}>🔐</Text>
      </View>
      <Text style={s.title}>Verification Code</Text>
      <Text style={s.subtitle}>
        Enter the verification code to confirm your transfer.
      </Text>

      <Text style={s.label}>6-digit verification code</Text>
      <TextInput
        style={s.input}
        placeholder="000000"
        value={code}
        onChangeText={value =>
          setCode(value.replace(/\D/g, "").slice(0, 6))
        }
        keyboardType="number-pad"
        maxLength={6}
        textAlign="center"
      />

      <TouchableOpacity
        onPress={() => Alert.alert("Demo Code", "123456")}
      >
        <Text style={s.resend}>Resend Code</Text>
      </TouchableOpacity>

      <TouchableOpacity style={s.button} onPress={verify}>
        <Text style={s.buttonText}>Confirm</Text>
      </TouchableOpacity>
      <Text style={s.note}>Demo verification only</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  content: { paddingBottom: 40 },
  header: { height: 95, backgroundColor: "#3525B5", flexDirection: "row", alignItems: "center", paddingHorizontal: 22 },
  back: { fontSize: 32, color: "#fff", marginRight: 25 },
  headerText: { fontSize: 19, fontWeight: "bold", color: "#fff" },
  hero: { height: 230, alignItems: "center", justifyContent: "center" },
  icon: { fontSize: 85 },
  title: { fontSize: 25, fontWeight: "bold", color: "#3525B5", marginHorizontal: 24 },
  subtitle: { color: "#888", lineHeight: 22, marginHorizontal: 24, marginTop: 12, marginBottom: 28 },
  label: { marginHorizontal: 24, color: "#555", marginBottom: 9 },
  input: { marginHorizontal: 24, borderWidth: 1, borderColor: "#ddd", borderRadius: 11, height: 55, color: "#3525B5", fontSize: 23, letterSpacing: 7 },
  resend: { color: "#3525B5", textAlign: "right", marginRight: 24, marginTop: 18 },
  button: { backgroundColor: "#3525B5", marginHorizontal: 24, marginTop: 35, borderRadius: 12, padding: 17, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" },
  note: { color: "#aaa", textAlign: "center", marginTop: 20 }
});
