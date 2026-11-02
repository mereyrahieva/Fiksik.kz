
import React, { useState } from "react";
import {
  View, Text, TouchableOpacity, StyleSheet
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function TransferFaceReady({ onBack, onNext }: Props) {
  const [ready, setReady] = useState(false);

  return (
    <View style={s.page}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Face Verification</Text>
      </TouchableOpacity>
      <Text style={s.title}>Face Recognition</Text>
      <Text style={s.subtitle}>Keep your face inside the oval and look straight ahead.</Text>
      <View style={s.scanArea}>
        <View style={[s.oval, ready && s.active]}>
          <Text style={s.face}>☺</Text>
        </View>
        <Text style={s.scanText}>
          {ready ? "Face positioned correctly" : "Align your face"}
        </Text>
      </View>
      <TouchableOpacity style={s.secondary} onPress={() => setReady(true)}>
        <Text style={s.secondaryText}>Align face (demo)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!ready}
        style={[s.button, !ready && s.disabled]}
        onPress={onNext}
      >
        <Text style={s.white}>Continue</Text>
      </TouchableOpacity>
      <Text style={s.note}>This screen does not capture a photo.</Text>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff", padding: 24 },
  back: { color: "#3525B5", fontSize: 20, marginBottom: 45 },
  title: { fontSize: 26, color: "#3525B5", fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 12, lineHeight: 22 },
  scanArea: { flex: 1, justifyContent: "center", alignItems: "center" },
  oval: { borderWidth: 4, borderColor: "#C7C2EB", backgroundColor: "#F2F0FF", width: 230, height: 270, borderRadius: 115, alignItems: "center", justifyContent: "center" },
  active: { borderColor: "#33B88B" },
  face: { fontSize: 105, color: "#3525B5" },
  scanText: { color: "#3525B5", fontWeight: "bold", marginTop: 25 },
  secondary: { padding: 16, borderWidth: 1, borderColor: "#3525B5", borderRadius: 11, alignItems: "center", marginBottom: 15 },
  secondaryText: { color: "#3525B5", fontWeight: "bold" },
  button: { backgroundColor: "#3525B5", borderRadius: 11, padding: 17, alignItems: "center" },
  disabled: { backgroundColor: "#C7C3E5" },
  white: { color: "#fff", fontWeight: "bold" },
  note: { color: "#aaa", fontSize: 11, marginTop: 12, textAlign: "center" }
});
