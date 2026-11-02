import React, { useState } from "react";
import {
  View, Text, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function MobileRechargeBiometric({ onBack, onNext }: Props) {
  const [verified, setVerified] = useState(false);

  function continueScreen() {
    if (!verified) {
      Alert.alert("Verification required", "Tap the fingerprint icon");
      return;
    }
    onNext?.();
  }

  return (
    <View style={s.page}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Biometric Verification</Text>
      </TouchableOpacity>

      <View style={s.content}>
        <Text style={s.title}>Verify Your Identity</Text>
        <Text style={s.sub}>
          Confirm the mobile recharge using biometric verification
        </Text>

        <TouchableOpacity
          style={[s.circle, verified && s.successCircle]}
          onPress={() => setVerified(true)}
        >
          <Text style={s.icon}>{verified ? "✓" : "◎"}</Text>
        </TouchableOpacity>

        <Text style={s.status}>
          {verified ? "Verification Successful" : "Touch to Verify"}
        </Text>

        <Text style={s.note}>
          This is a simulated fingerprint verification.
          No biometric data is collected.
        </Text>
      </View>

      <TouchableOpacity style={[s.button, !verified && s.disabled]}
        onPress={continueScreen}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff", padding: 24 },
  back: { color: "#3525B5", fontSize: 19 },
  content: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold", textAlign: "center" },
  sub: { color: "#888", textAlign: "center", lineHeight: 22, marginTop: 13 },
  circle: { width: 195, height: 195, borderRadius: 98, backgroundColor: "#F0EEFF", alignItems: "center", justifyContent: "center", marginTop: 65, borderWidth: 3, borderColor: "#C9C3F2" },
  successCircle: { backgroundColor: "#E1F8EF", borderColor: "#24A879" },
  icon: { fontSize: 105, color: "#3525B5" },
  status: { fontSize: 18, fontWeight: "bold", color: "#3525B5", marginTop: 30 },
  note: { color: "#aaa", textAlign: "center", marginTop: 18, lineHeight: 20, fontSize: 12 },
  button: { backgroundColor: "#3525B5", borderRadius: 11, padding: 17, alignItems: "center" },
  disabled: { backgroundColor: "#AAA4D8" },
  white: { color: "#fff", fontWeight: "bold" }
});