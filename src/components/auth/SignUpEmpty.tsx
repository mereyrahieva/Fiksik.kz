
import React, { useState } from "react";
import {
  ScrollView, View, Text, TextInput,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onNext?: () => void; onBack?: () => void };

export default function SignUpEmpty({ onNext, onBack }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [show, setShow] = useState(false);

  function submit() {
    if (!name.trim() || !phone.trim() || password.length < 6) {
      Alert.alert("Error", "Complete the fields. Password must have 6 characters.");
      return;
    }
    if (!agree) {
      Alert.alert("Terms", "Please accept the terms and conditions");
      return;
    }
    onNext?.();
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.content}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Sign up</Text>
      </TouchableOpacity>
      <Text style={s.title}>Welcome to us,</Text>
      <Text style={s.subtitle}>Hello there, create a new account</Text>
      <View style={s.hero}>
        <Text style={s.heroIcon}>📱</Text>
      </View>

      <Text style={s.label}>Full name</Text>
      <TextInput style={s.input} placeholder="Name"
        value={name} onChangeText={setName} />

      <Text style={s.label}>Phone number</Text>
      <TextInput style={s.input} placeholder="+7 700 000 00 00"
        keyboardType="phone-pad" value={phone} onChangeText={setPhone} />

      <Text style={s.label}>Password</Text>
      <View style={s.passwordBox}>
        <TextInput style={s.passwordInput}
          placeholder="Password" value={password}
          secureTextEntry={!show} onChangeText={setPassword} />
        <TouchableOpacity onPress={() => setShow(!show)}>
          <Text style={s.purple}>{show ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={s.terms} onPress={() => setAgree(!agree)}>
        <Text style={s.check}>{agree ? "☑" : "□"}</Text>
        <Text style={s.termsText}>I agree to the Terms and Conditions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={s.button} onPress={submit}>
        <Text style={s.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  content: { padding: 24, paddingBottom: 50 },
  back: { color: "#3525B5", fontSize: 20, marginBottom: 30 },
  title: { fontSize: 27, color: "#3525B5", fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 6 },
  hero: { height: 180, alignItems: "center", justifyContent: "center" },
  heroIcon: { fontSize: 80 },
  label: { color: "#555", fontSize: 13, marginBottom: 8 },
  input: {
    height: 50, borderWidth: 1, borderColor: "#ddd",
    borderRadius: 10, paddingHorizontal: 15, marginBottom: 17
  },
  passwordBox: {
    height: 50, borderWidth: 1, borderColor: "#ddd",
    borderRadius: 10, paddingHorizontal: 15,
    flexDirection: "row", alignItems: "center"
  },
  passwordInput: { flex: 1 },
  purple: { color: "#3525B5", fontWeight: "bold" },
  terms: { flexDirection: "row", alignItems: "center", marginTop: 23 },
  check: { fontSize: 25, color: "#3525B5", marginRight: 10 },
  termsText: { fontSize: 12, color: "#555" },
  button: {
    backgroundColor: "#3525B5", borderRadius: 11,
    padding: 16, alignItems: "center", marginTop: 30
  },
  buttonText: { color: "#fff", fontWeight: "bold" }
});
