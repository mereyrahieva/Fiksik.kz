
import React, { useState } from "react";
import {
  View, Text, TextInput, Pressable,
  ScrollView, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function TransferConfirmOTP({ onBack, onNext }: Props) {
  const [code, setCode] = useState("123456");

  const verify = () => {
    if (code !== "123456") {
      Alert.alert("Incorrect code", "Use 123456 for this demo");
      return;
    }
    onNext?.();
  };

  return (
    <ScrollView style={s.page} contentContainerStyle={s.content}>
      <View style={s.header}>
        <Pressable onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </Pressable>
        <Text style={s.heading}>Confirm Transfer</Text>
      </View>

      <View style={s.hero}>
        <Text style={s.emoji}>✉️</Text>
      </View>
      <Text style={s.title}>Enter OTP Code</Text>
      <Text style={s.subtitle}>
        A verification code has been sent to your phone.
      </Text>

      <View style={s.card}>
        <Text style={s.label}>Verification code</Text>
        <TextInput
          style={s.input}
          value={code}
          onChangeText={text =>
            setCode(text.replace(/\D/g, "").slice(0, 6))
          }
          maxLength={6}
          keyboardType="number-pad"
          textAlign="center"
        />
        <Text style={s.valid}>
          {code === "123456" ? "✓ Code accepted" : "Enter demo code 123456"}
        </Text>
      </View>

      <Pressable onPress={() => Alert.alert("Code", "123456")}>
        <Text style={s.resend}>Didn't receive a code? Resend</Text>
      </Pressable>

      <Pressable style={s.button} onPress={verify}>
        <Text style={s.white}>Verify</Text>
      </Pressable>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  content: { paddingBottom: 45 },
  header: { height: 95, backgroundColor: "#3525B5", flexDirection: "row", alignItems: "center", paddingHorizontal: 24 },
  back: { color: "#fff", fontSize: 32, marginRight: 20 },
  heading: { color: "#fff", fontSize: 19, fontWeight: "bold" },
  hero: { height: 210, justifyContent: "center", alignItems: "center" },
  emoji: { fontSize: 85 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold", marginHorizontal: 24 },
  subtitle: { color: "#888", marginHorizontal: 24, marginTop: 10, lineHeight: 21 },
  card: { margin: 24, padding: 18, borderRadius: 15, backgroundColor: "#F8F7FC" },
  label: { color: "#777", marginBottom: 12 },
  input: { height: 56, borderWidth: 1, borderColor: "#3525B5", borderRadius: 11, fontSize: 25, color: "#3525B5", letterSpacing: 6, backgroundColor: "#fff" },
  valid: { color: "#279D78", marginTop: 12 },
  resend: { color: "#3525B5", textAlign: "center", marginTop: 10 },
  button: { backgroundColor: "#3525B5", marginHorizontal: 24, marginTop: 35, borderRadius: 11, padding: 17, alignItems: "center" },
  white: { color: "#fff", fontWeight: "bold" }
});
