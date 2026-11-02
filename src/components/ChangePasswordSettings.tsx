
import React, { useState } from "react";
import {
  ScrollView, Text, View, TextInput,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function ChangePasswordSettings({
  onBack, onNext
}: Props) {
  const [current, setCurrent] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [visible, setVisible] = useState(false);

  function savePassword() {
    if (!current.trim()) {
      Alert.alert("Error", "Enter your current password");
      return;
    }
    if (newPassword.length < 8) {
      Alert.alert("Error", "New password must contain at least 8 characters");
      return;
    }
    if (newPassword !== confirm) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    if (current === newPassword) {
      Alert.alert("Error", "Choose a different password");
      return;
    }
    Alert.alert("Demo", "Password form validated. No account was updated.", [
      { text: "Continue", onPress: onNext }
    ]);
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>Change Password</Text>
      </View>
      <View style={s.content}>
        <View style={s.hero}><Text style={s.icon}>🔒</Text></View>
        <Text style={s.title}>Change Password</Text>
        <Text style={s.subtitle}>
          Create a secure password to protect your account.
        </Text>
        <Text style={s.label}>Current Password</Text>
        <TextInput style={s.input}
          value={current} onChangeText={setCurrent}
          secureTextEntry={!visible}
          placeholder="Enter current password" />

        <Text style={s.label}>New Password</Text>
        <TextInput style={s.input}
          value={newPassword} onChangeText={setNewPassword}
          secureTextEntry={!visible}
          placeholder="Enter new password" />

        <Text style={s.label}>Confirm New Password</Text>
        <TextInput style={s.input}
          value={confirm} onChangeText={setConfirm}
          secureTextEntry={!visible}
          placeholder="Confirm new password" />

        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Text style={s.show}>
            {visible ? "☑" : "□"} Show passwords
          </Text>
        </TouchableOpacity>

        <View style={s.info}>
          <Text style={s.infoText}>
            Your password should be at least 8 characters long.
          </Text>
        </View>

        <TouchableOpacity style={s.button} onPress={savePassword}>
          <Text style={s.white}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { paddingBottom: 45 },
  header: { height: 95, backgroundColor: "#3525B5", flexDirection: "row", alignItems: "center", paddingHorizontal: 22 },
  back: { color: "#fff", fontSize: 31, marginRight: 22 },
  headerTitle: { color: "#fff", fontSize: 19, fontWeight: "bold" },
  content: { padding: 23 },
  hero: { height: 155, backgroundColor: "#F5F3FF", borderRadius: 18, justifyContent: "center", alignItems: "center" },
  icon: { fontSize: 70 },
  title: { fontSize: 24, fontWeight: "bold", color: "#3525B5", marginTop: 26 },
  subtitle: { color: "#888", marginTop: 10, lineHeight: 21, marginBottom: 27 },
  label: { color: "#555", fontSize: 13, marginBottom: 8 },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 11, height: 51, paddingHorizontal: 14, marginBottom: 18 },
  show: { color: "#3525B5", textAlign: "right" },
  info: { backgroundColor: "#F5F3FF", padding: 16, borderRadius: 11, marginTop: 23 },
  infoText: { color: "#777", fontSize: 12 },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center", marginTop: 28 },
  white: { color: "#fff", fontWeight: "bold" }
});
