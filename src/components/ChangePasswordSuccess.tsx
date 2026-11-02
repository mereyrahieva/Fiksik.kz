
import React from "react";
import {
  View, Text, TouchableOpacity,
  StyleSheet
} from "react-native";

type Props = { onNext?: () => void };

export default function ChangePasswordSuccess({ onNext }: Props) {
  return (
    <View style={s.container}>
      <View style={s.center}>
        <View style={s.circle}>
          <Text style={s.check}>✓</Text>
        </View>
        <Text style={s.title}>Password Changed!</Text>
        <Text style={s.description}>
          Your password has been changed successfully.
          You can now sign in with your new password.
        </Text>
      </View>
      <TouchableOpacity style={s.button} onPress={onNext}>
        <Text style={s.white}>Back to Sign in</Text>
      </TouchableOpacity>
      <Text style={s.note}>Demo confirmation — no server account was updated</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 25 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  circle: { width: 135, height: 135, borderRadius: 68, backgroundColor: "#EEEBFF", alignItems: "center", justifyContent: "center" },
  check: { color: "#3525B5", fontSize: 80, fontWeight: "bold" },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold", marginTop: 35 },
  description: { textAlign: "center", color: "#888", lineHeight: 22, marginTop: 13 },
  button: { padding: 18, backgroundColor: "#3525B5", borderRadius: 12, alignItems: "center" },
  white: { color: "#fff", fontWeight: "bold" },
  note: { color: "#aaa", fontSize: 11, textAlign: "center", marginTop: 18 }
});
