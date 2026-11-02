
import React, { useState } from "react";
import {
  View, Text, Pressable,
  StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function TransferFingerprint({ onBack, onNext }: Props) {
  const [verified, setVerified] = useState(false);

  function continueScreen() {
    if (!verified) {
      Alert.alert("Verification required", "Tap the fingerprint icon first");
      return;
    }
    onNext?.();
  }

  return (
    <View style={s.page}>
      <Pressable onPress={onBack}>
        <Text style={s.back}>‹  Fingerprint</Text>
      </Pressable>

      <View style={s.center}>
        <Text style={s.heading}>Fingerprint Verification</Text>
        <Text style={s.subtitle}>Place your finger on the sensor</Text>

        <Pressable
          style={[s.circle, verified && s.verified]}
          onPress={() => setVerified(true)}
        >
          <Text style={s.icon}>{verified ? "✓" : "◎"}</Text>
        </Pressable>

        <Text style={s.status}>
          {verified ? "Verification successful" : "Tap to scan fingerprint"}
        </Text>
        <Text style={s.note}>Biometric verification is simulated.</Text>
      </View>

      <Pressable style={s.button} onPress={continueScreen}>
        <Text style={s.white}>Continue</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff", padding: 25 },
  back: { fontSize: 20, color: "#3525B5" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  heading: { fontSize: 24, fontWeight: "bold", color: "#3525B5" },
  subtitle: { color: "#999", marginTop: 12 },
  circle: { width: 190, height: 190, borderRadius: 95, backgroundColor: "#EDEBFE", justifyContent: "center", alignItems: "center", marginTop: 65, borderWidth: 3, borderColor: "#D4CEF9" },
  verified: { backgroundColor: "#E2F8EF", borderColor: "#3DAD84" },
  icon: { fontSize: 105, color: "#3525B5" },
  status: { fontSize: 17, color: "#3525B5", fontWeight: "bold", marginTop: 32 },
  note: { color: "#aaa", marginTop: 13, textAlign: "center" },
  button: { backgroundColor: "#3525B5", borderRadius: 11, padding: 17, alignItems: "center" },
  white: { color: "#fff", fontWeight: "bold" }
});
