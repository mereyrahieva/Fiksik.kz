
import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onNext?: () => void; onBack?: () => void };

export default function ForgotPhoneFilled({ onNext, onBack }: Props) {
  const [phone, setPhone] = useState("+7 700 123 4567");

  function continueReset() {
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      Alert.alert("Error", "Enter a valid phone number");
      return;
    }
    Alert.alert("Demo verification", "Use code 123456", [
      { text: "OK", onPress: onNext }
    ]);
  }

  return (
    <View style={s.container}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Forgot password</Text>
      </TouchableOpacity>
      <View style={s.imageBox}><Text style={s.emoji}>📱</Text></View>
      <Text style={s.title}>Forgot password?</Text>
      <Text style={s.description}>
        Please enter the phone number associated with your account.
      </Text>
      <Text style={s.label}>Phone number</Text>
      <View style={s.inputRow}>
        <Text style={s.prefix}>☎</Text>
        <TextInput style={s.input}
          keyboardType="phone-pad" value={phone}
          onChangeText={setPhone} />
        <Text style={s.tick}>✓</Text>
      </View>
      <TouchableOpacity style={s.button} onPress={continueReset}>
        <Text style={s.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Text style={s.note}>A demo code will be shown for testing.</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 24 },
  back: { color: "#3525B5", fontSize: 19 },
  imageBox: { height: 235, alignItems: "center", justifyContent: "center" },
  emoji: { fontSize: 90 },
  title: { fontSize: 26, fontWeight: "bold", color: "#3525B5" },
  description: { marginTop: 10, color: "#999", lineHeight: 21, marginBottom: 28 },
  label: { marginBottom: 9, color: "#555", fontSize: 13 },
  inputRow: {
    height: 52, borderWidth: 1, borderColor: "#BAB6EC",
    flexDirection: "row", alignItems: "center",
    borderRadius: 12, paddingHorizontal: 12
  },
  prefix: { fontSize: 20, color: "#3525B5", marginRight: 8 },
  input: { flex: 1, color: "#222" },
  tick: { fontSize: 19, color: "#31A56F" },
  button: {
    backgroundColor: "#3525B5", marginTop: 30,
    padding: 17, alignItems: "center", borderRadius: 11
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  note: { color: "#999", textAlign: "center", marginTop: 18 }
});
