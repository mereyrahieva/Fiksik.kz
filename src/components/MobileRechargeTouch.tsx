import React from "react";
import {
  View, Text, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function MobileRechargeTouch({ onBack, onNext }: Props) {
  function verify() {
    Alert.alert(
      "Touch ID Verification",
      "Simulate successful biometric verification?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Verify", onPress: onNext }
      ]
    );
  }

  return (
    <View style={s.page}>
      <View style={s.background}>
        <Text style={s.heading}>Mobile Recharge</Text>
        <View style={s.summary}>
          <Text style={s.muted}>Recharge Amount</Text>
          <Text style={s.amount}>$20.00</Text>
          <Text style={s.muted}>+7 700 123 4567</Text>
        </View>
      </View>

      <View style={s.overlay}>
        <View style={s.dialog}>
          <View style={s.circle}>
            <Text style={s.fingerprint}>◎</Text>
          </View>
          <Text style={s.title}>Touch ID</Text>
          <Text style={s.subtitle}>
            Use fingerprint verification to confirm
            your mobile recharge.
          </Text>
          <TouchableOpacity style={s.button} onPress={verify}>
            <Text style={s.white}>Verify Fingerprint</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onBack}>
            <Text style={s.cancel}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  background: { flex: 1, backgroundColor: "#F8F7FC", padding: 24 },
  heading: { color: "#3525B5", fontSize: 25, fontWeight: "bold", marginTop: 35 },
  summary: { backgroundColor: "#fff", borderRadius: 15, padding: 23, marginTop: 25 },
  muted: { color: "#999" },
  amount: { fontSize: 32, fontWeight: "bold", color: "#3525B5", marginVertical: 16 },
  overlay: { ...StyleSheet.absoluteFillObject, justifyContent: "center", padding: 30, backgroundColor: "#00000065" },
  dialog: { backgroundColor: "#fff", borderRadius: 22, padding: 25, alignItems: "center" },
  circle: { width: 120, height: 120, borderRadius: 60, alignItems: "center", justifyContent: "center", backgroundColor: "#EEEAFE" },
  fingerprint: { color: "#3525B5", fontSize: 85 },
  title: { color: "#3525B5", fontSize: 24, fontWeight: "bold", marginTop: 18 },
  subtitle: { color: "#888", textAlign: "center", lineHeight: 21, marginTop: 13 },
  button: { backgroundColor: "#3525B5", padding: 17, width: "100%", alignItems: "center", borderRadius: 11, marginTop: 28 },
  white: { color: "#fff", fontWeight: "bold" },
  cancel: { color: "#888", marginTop: 23, fontWeight: "bold" }
});