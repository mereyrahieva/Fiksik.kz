
import React, { useState } from "react";
import {
  View, Text, Pressable, StyleSheet,
  ActivityIndicator
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function TransferFaceProcessing({ onBack, onNext }: Props) {
  const [completed, setCompleted] = useState(false);

  return (
    <View style={s.page}>
      <Pressable onPress={onBack}>
        <Text style={s.back}>‹  Face Verification</Text>
      </Pressable>
      <View style={s.center}>
        <Text style={s.title}>Verify Your Identity</Text>
        <Text style={s.subtitle}>Face recognition verification</Text>
        <View style={s.frame}>
          {completed
            ? <Text style={s.check}>✓</Text>
            : <Text style={s.face}>☺</Text>}
        </View>
        {!completed && <ActivityIndicator size="large" color="#3525B5" />}
        <Text style={s.status}>
          {completed ? "Demo verification completed" : "Ready to verify"}
        </Text>
        {!completed && (
          <Pressable style={s.secondary} onPress={() => setCompleted(true)}>
            <Text style={s.secondaryText}>Simulate verification</Text>
          </Pressable>
        )}
      </View>
      <Pressable
        disabled={!completed}
        style={[s.button, !completed && s.disabled]}
        onPress={onNext}
      >
        <Text style={s.white}>Continue</Text>
      </Pressable>
      <Text style={s.note}>No biometric information is processed.</Text>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff", padding: 24 },
  back: { fontSize: 19, color: "#3525B5" },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 25, fontWeight: "bold", color: "#3525B5" },
  subtitle: { color: "#999", marginTop: 10 },
  frame: { width: 210, height: 235, borderWidth: 4, borderColor: "#3525B5", borderRadius: 100, backgroundColor: "#F2F0FF", justifyContent: "center", alignItems: "center", marginVertical: 30 },
  face: { fontSize: 105, color: "#3525B5" },
  check: { fontSize: 95, color: "#24A876" },
  status: { color: "#3525B5", marginTop: 22, fontWeight: "bold" },
  secondary: { marginTop: 24, padding: 15, borderWidth: 1, borderColor: "#3525B5", borderRadius: 12 },
  secondaryText: { color: "#3525B5" },
  button: { padding: 17, backgroundColor: "#3525B5", borderRadius: 11, alignItems: "center" },
  disabled: { backgroundColor: "#CBC7E7" },
  white: { color: "#fff", fontWeight: "bold" },
  note: { fontSize: 11, color: "#aaa", textAlign: "center", marginTop: 15 }
});
