
import React, { useState } from "react";
import {
  ScrollView, Text, TextInput, TouchableOpacity,
  View, StyleSheet, Alert
} from "react-native";

type Props = { onNext?: () => void; onBack?: () => void };

export default function SignUpFilled({ onNext, onBack }: Props) {
  const [name, setName] = useState("John Smith");
  const [phone, setPhone] = useState("+7 700 123 4567");
  const [password, setPassword] = useState("12345678");
  const [accepted, setAccepted] = useState(true);
  const [visible, setVisible] = useState(false);

  const createAccount = () => {
    if (!name.trim() || !phone.trim() || password.length < 6 || !accepted) {
      Alert.alert("Error", "Check your registration details");
      return;
    }
    Alert.alert("Demo", "Registration form validated", [
      { text: "Continue", onPress: onNext }
    ]);
  };

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Sign up</Text>
      </TouchableOpacity>
      <Text style={s.title}>Welcome to us,</Text>
      <Text style={s.sub}>Hello there, create a new account</Text>

      <View style={s.hero}>
        <Text style={s.heroText}>📱</Text>
      </View>

      <Text style={s.label}>Name</Text>
      <TextInput style={s.input} value={name} onChangeText={setName} />

      <Text style={s.label}>Phone number</Text>
      <TextInput style={s.input} value={phone}
        keyboardType="phone-pad" onChangeText={setPhone} />

      <Text style={s.label}>Password</Text>
      <View style={s.row}>
        <TextInput style={s.flex} value={password}
          onChangeText={setPassword} secureTextEntry={!visible} />
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Text style={s.link}>{visible ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={s.checkboxRow}
        onPress={() => setAccepted(!accepted)}>
        <Text style={s.check}>{accepted ? "☑" : "□"}</Text>
        <Text style={s.small}>I agree to the Terms and Conditions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={s.button} onPress={createAccount}>
        <Text style={s.white}>Sign up</Text>
      </TouchableOpacity>
      <Text style={s.notice}>Demo account — no real registration</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { padding: 24, paddingBottom: 40 },
  back: { color: "#3525B5", fontSize: 20, marginBottom: 28 },
  title: { fontSize: 27, color: "#3525B5", fontWeight: "bold" },
  sub: { color: "#888", marginTop: 7, fontSize: 13 },
  hero: {
    height: 175, backgroundColor: "#F7F6FF",
    justifyContent: "center", alignItems: "center",
    borderRadius: 18, marginVertical: 22
  },
  heroText: { fontSize: 70 },
  label: { fontSize: 13, color: "#555", marginBottom: 7 },
  input: {
    height: 50, borderWidth: 1, borderColor: "#ddd",
    borderRadius: 10, paddingHorizontal: 14, marginBottom: 17
  },
  row: {
    borderWidth: 1, borderColor: "#ddd", borderRadius: 10,
    paddingHorizontal: 14, height: 50,
    flexDirection: "row", alignItems: "center"
  },
  flex: { flex: 1 },
  link: { color: "#3525B5", fontWeight: "bold" },
  checkboxRow: { flexDirection: "row", alignItems: "center", marginTop: 20 },
  check: { color: "#3525B5", fontSize: 24, marginRight: 10 },
  small: { fontSize: 12, color: "#555" },
  button: {
    marginTop: 28, backgroundColor: "#3525B5",
    padding: 17, borderRadius: 10, alignItems: "center"
  },
  white: { color: "#fff", fontWeight: "bold" },
  notice: { textAlign: "center", color: "#999", marginTop: 18 }
});
