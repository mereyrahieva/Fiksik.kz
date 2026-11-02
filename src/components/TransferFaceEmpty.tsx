
import React, { useState } from "react";
import {
  View, Text, Pressable, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function TransferFaceEmpty({ onBack, onNext }: Props) {
  const [permission, setPermission] = useState(false);

  const continueScan = () => {
    if (!permission) {
      Alert.alert("Permission", "Enable the demo camera permission");
      return;
    }
    onNext?.();
  };

  return (
    <View style={s.page}>
      <Pressable onPress={onBack}><Text style={s.back}>‹  Face ID</Text></Pressable>
      <View style={s.center}>
        <Text style={s.title}>Face Verification</Text>
        <Text style={s.subtitle}>Position your face inside the frame</Text>
        <View style={s.frame}>
          <Text style={s.face}>☺</Text>
          <Text style={s.frameText}>Face scan preview</Text>
        </View>
        <Text style={s.info}>
          Good lighting helps with facial recognition.
        </Text>
        <Pressable style={s.permission} onPress={() => setPermission(!permission)}>
          <Text style={s.permissionText}>
            {permission ? "☑" : "□"} Allow demo scan
          </Text>
        </Pressable>
      </View>
      <Pressable style={s.button} onPress={continueScan}>
        <Text style={s.white}>Start Verification</Text>
      </Pressable>
      <Text style={s.note}>No real camera or facial data is used.</Text>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff", padding: 24 },
  back: { color: "#3525B5", fontSize: 20 },
  center: { flex: 1, alignItems: "center", paddingTop: 60 },
  title: { color: "#3525B5", fontWeight: "bold", fontSize: 25 },
  subtitle: { color: "#888", marginTop: 13 },
  frame: { width: 230, height: 265, borderRadius: 95, borderWidth: 4, borderColor: "#3525B5", backgroundColor: "#F0EEFE", alignItems: "center", justifyContent: "center", marginTop: 50 },
  face: { fontSize: 110, color: "#3525B5" },
  frameText: { color: "#888", marginTop: 12 },
  info: { color: "#777", marginTop: 30, textAlign: "center" },
  permission: { backgroundColor: "#F5F3FF", borderRadius: 11, padding: 17, width: "100%", marginTop: 25 },
  permissionText: { color: "#3525B5", fontWeight: "bold", textAlign: "center" },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center" },
  white: { color: "#fff", fontWeight: "bold" },
  note: { color: "#aaa", textAlign: "center", marginTop: 12, fontSize: 11 }
});
