
import React, { useState } from "react";
import {
  View, Text, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function TransferConfirmBiometric({ onBack, onNext }: Props) {
  const [approved, setApproved] = useState(false);

  function confirm() {
    if (!approved) {
      Alert.alert("Confirmation required", "Select demo biometric approval");
      return;
    }
    onNext?.();
  }

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.heading}>Confirm Transfer</Text>
      </View>

      <View style={s.content}>
        <Text style={s.title}>Biometric Verification</Text>
        <Text style={s.description}>
          Confirm your identity to continue your transaction.
        </Text>

        <View style={s.circle}>
          <Text style={s.fingerprint}>◎</Text>
        </View>

        <Text style={s.scanTitle}>Touch ID Verification</Text>
        <Text style={s.description}>
          This is a demo biometric confirmation.
        </Text>

        <TouchableOpacity
          style={[s.option, approved && s.selected]}
          onPress={() => setApproved(!approved)}
        >
          <Text style={s.optionText}>
            {approved ? "☑" : "□"} Approve demo verification
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={s.button} onPress={confirm}>
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  header: { height: 95, flexDirection: "row", alignItems: "center", paddingHorizontal: 22, backgroundColor: "#3525B5" },
  back: { fontSize: 32, color: "#fff", marginRight: 22 },
  heading: { fontSize: 19, fontWeight: "bold", color: "#fff" },
  content: { flex: 1, padding: 25, alignItems: "center" },
  title: { color: "#3525B5", fontSize: 24, fontWeight: "bold", marginTop: 20 },
  description: { color: "#888", textAlign: "center", lineHeight: 22, marginTop: 15 },
  circle: { width: 180, height: 180, borderRadius: 90, backgroundColor: "#EFEDFF", justifyContent: "center", alignItems: "center", marginTop: 60 },
  fingerprint: { color: "#3525B5", fontSize: 105 },
  scanTitle: { fontSize: 18, color: "#3525B5", fontWeight: "bold", marginTop: 30 },
  option: { borderWidth: 1, borderColor: "#ddd", padding: 18, borderRadius: 12, marginTop: 35, width: "100%" },
  selected: { borderColor: "#3525B5", backgroundColor: "#F5F3FF" },
  optionText: { color: "#3525B5", textAlign: "center", fontWeight: "bold" },
  button: { margin: 24, backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center" },
  white: { color: "#fff", fontWeight: "bold" }
});
