
import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, ScrollView
} from "react-native";

type Props = { onNext?: () => void; onBack?: () => void };

export default function ChangePasswordForm({ onNext, onBack }: Props) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [visible, setVisible] = useState(false);

  function changePassword() {
    if (password.length < 8) {
      Alert.alert("Weak password", "Use at least 8 characters");
      return;
    }
    if (password !== confirm) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    onNext?.();
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Change Password</Text>
      </TouchableOpacity>
      <View style={s.hero}><Text style={s.icon}>🔒</Text></View>
      <Text style={s.title}>Create New Password</Text>
      <Text style={s.desc}>Your new password must be different from your previous one.</Text>
      <Text style={s.label}>New Password</Text>
      <TextInput style={s.input} placeholder="New password"
        value={password} onChangeText={setPassword}
        secureTextEntry={!visible} />
      <Text style={s.label}>Confirm Password</Text>
      <TextInput style={s.input} placeholder="Confirm password"
        value={confirm} onChangeText={setConfirm}
        secureTextEntry={!visible} />
      <TouchableOpacity style={s.toggle} onPress={() => setVisible(!visible)}>
        <Text style={s.purple}>{visible ? "☑" : "□"} Show passwords</Text>
      </TouchableOpacity>
      <Text style={s.hint}>Password must contain at least 8 characters.</Text>
      <TouchableOpacity style={s.button} onPress={changePassword}>
        <Text style={s.white}>Change password</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "white" },
  body: { padding: 24 },
  back: { color: "#3525B5", fontSize: 19 },
  hero: { height: 190, alignItems: "center", justifyContent: "center" },
  icon: { fontSize: 85 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  desc: { color: "#888", marginTop: 10, lineHeight: 22, marginBottom: 26 },
  label: { color: "#666", marginBottom: 8 },
  input: { height: 51, borderWidth: 1, borderColor: "#ddd", borderRadius: 11, paddingHorizontal: 14, marginBottom: 17 },
  toggle: { alignSelf: "flex-end" },
  purple: { color: "#3525B5" },
  hint: { color: "#999", fontSize: 12, marginTop: 20 },
  button: { backgroundColor: "#3525B5", marginTop: 25, padding: 17, borderRadius: 10, alignItems: "center" },
  white: { color: "white", fontWeight: "bold" }
});
