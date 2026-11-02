
import React from "react";
import {
  View, Text, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function TransferTouchDialog({ onBack, onNext }: Props) {
  function scan() {
    Alert.alert(
      "Demo Touch ID",
      "Simulate successful fingerprint verification?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Verify", onPress: onNext }
      ]
    );
  }

  return (
    <View style={s.page}>
      <View style={s.background}>
        <Text style={s.backgroundTitle}>Confirm Transfer</Text>
        <View style={s.summary}>
          <Text style={s.muted}>Transfer amount</Text>
          <Text style={s.amount}>$250.00</Text>
          <Text style={s.muted}>Recipient: Alex Johnson</Text>
        </View>
      </View>

      <View style={s.overlay}>
        <View style={s.dialog}>
          <View style={s.iconBox}>
            <Text style={s.icon}>◎</Text>
          </View>
          <Text style={s.title}>Touch ID</Text>
          <Text style={s.desc}>
            Use your fingerprint to confirm this transfer.
          </Text>
          <TouchableOpacity style={s.button} onPress={scan}>
            <Text style={s.white}>Verify fingerprint</Text>
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
  background: { flex: 1, backgroundColor: "#F8F7FC", padding: 25 },
  backgroundTitle: { color: "#3525B5", fontSize: 24, fontWeight: "bold", marginTop: 30 },
  summary: { padding: 23, backgroundColor: "#fff", borderRadius: 15, marginTop: 28 },
  muted: { color: "#888" },
  amount: { fontSize: 30, fontWeight: "bold", color: "#3525B5", marginVertical: 18 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "#00000070", justifyContent: "center", padding: 30 },
  dialog: { backgroundColor: "#fff", borderRadius: 22, padding: 25, alignItems: "center" },
  iconBox: { backgroundColor: "#EEEAFE", width: 110, height: 110, borderRadius: 55, justifyContent: "center", alignItems: "center" },
  icon: { fontSize: 70, color: "#3525B5" },
  title: { fontSize: 22, fontWeight: "bold", color: "#3525B5", marginTop: 20 },
  desc: { textAlign: "center", color: "#888", lineHeight: 22, marginTop: 12 },
  button: { backgroundColor: "#3525B5", width: "100%", padding: 17, borderRadius: 11, alignItems: "center", marginTop: 27 },
  white: { color: "#fff", fontWeight: "bold" },
  cancel: { color: "#888", fontWeight: "bold", marginTop: 22 }
});
