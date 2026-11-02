
import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, StyleSheet, Alert
} from "react-native";

type Props = {
  onNext?: () => void;
  onSignUp?: () => void;
  onForgotPassword?: () => void;
};

export default function SignIn({
  onNext, onSignUp, onForgotPassword
}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const signIn = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    onNext?.();
  };

  return (
    <ScrollView style={s.container}>
      <View style={s.header}>
        <Text style={s.headerTitle}>Sign in</Text>
      </View>
      <View style={s.body}>
        <Text style={s.title}>Welcome Back</Text>
        <Text style={s.sub}>Hello there, sign in to continue</Text>
        <View style={s.picture}>
          <Text style={s.emoji}>🔐</Text>
        </View>
        <Text style={s.label}>Email or phone number</Text>
        <TextInput
          style={s.input} placeholder="Enter email or phone"
          value={email} onChangeText={setEmail}
          autoCapitalize="none"
        />
        <Text style={s.label}>Password</Text>
        <View style={s.passwordRow}>
          <TextInput
            style={s.passwordInput}
            placeholder="Enter password"
            secureTextEntry={!visible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Text style={s.link}>{visible ? "Hide" : "Show"}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onForgotPassword}>
          <Text style={s.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.button} onPress={signIn}>
          <Text style={s.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.fingerprint}
          onPress={() => Alert.alert("Demo", "Biometric sign-in is not configured")}
        >
          <Text style={s.emoji}>◎</Text>
          <Text style={s.sub}>Sign in with fingerprint</Text>
        </TouchableOpacity>
        <View style={s.footer}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={onSignUp}>
            <Text style={s.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    height: 115, backgroundColor: "#3525B5",
    padding: 22, justifyContent: "center"
  },
  headerTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  body: {
    padding: 24, backgroundColor: "#fff",
    borderTopLeftRadius: 24, borderTopRightRadius: 24,
    marginTop: -20
  },
  title: { fontSize: 26, fontWeight: "bold", color: "#3525B5" },
  sub: { color: "#888", fontSize: 13, marginTop: 7 },
  picture: { height: 180, alignItems: "center", justifyContent: "center" },
  emoji: { fontSize: 65, color: "#3525B5" },
  label: { fontSize: 13, color: "#555", marginBottom: 8 },
  input: {
    borderWidth: 1, borderColor: "#ddd", borderRadius: 10,
    padding: 13, marginBottom: 18, color: "#222"
  },
  passwordRow: {
    borderWidth: 1, borderColor: "#ddd", borderRadius: 10,
    flexDirection: "row", alignItems: "center", paddingHorizontal: 13
  },
  passwordInput: { flex: 1, height: 48 },
  link: { color: "#3525B5", fontWeight: "bold" },
  forgot: { textAlign: "right", color: "#888", marginTop: 13 },
  button: {
    backgroundColor: "#3525B5", padding: 16,
    borderRadius: 10, alignItems: "center", marginTop: 30
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 15 },
  fingerprint: { alignItems: "center", marginTop: 25 },
  footer: { flexDirection: "row", justifyContent: "center", marginTop: 28 }
});
