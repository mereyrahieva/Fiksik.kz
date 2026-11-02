
import React, { useState } from "react";
import {
  View, Text, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "kk", label: "Қазақша", flag: "🇰🇿" },
  { code: "ru", label: "Русский", flag: "🇷🇺" }
];

export default function Language({ onBack, onNext }: Props) {
  const [current, setCurrent] = useState("en");

  const save = () => {
    const selected = languages.find(l => l.code === current);
    Alert.alert("Language", `${selected?.label} selected (demo)`);
    onNext?.();
  };

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>Language</Text>
      </View>
      <View style={s.body}>
        <Text style={s.title}>Select Language</Text>
        <Text style={s.subtitle}>Choose your preferred app language</Text>
        {languages.map(language => (
          <TouchableOpacity
            key={language.code}
            style={[s.row, current === language.code && s.active]}
            onPress={() => setCurrent(language.code)}
          >
            <Text style={s.flag}>{language.flag}</Text>
            <Text style={s.name}>{language.label}</Text>
            <Text style={s.radio}>{current === language.code ? "◉" : "◯"}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={s.button} onPress={save}>
          <Text style={s.white}>Save changes</Text>
        </TouchableOpacity>
        <Text style={s.note}>
          The selected language is stored only on this demo screen.
        </Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  header: { backgroundColor: "#3525B5", height: 95, flexDirection: "row", alignItems: "center", paddingHorizontal: 22 },
  back: { color: "#fff", fontSize: 31, marginRight: 25 },
  headerTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  body: { padding: 23, flex: 1 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 8, marginBottom: 30 },
  row: { padding: 17, borderRadius: 13, borderWidth: 1, borderColor: "#eee", flexDirection: "row", alignItems: "center", marginBottom: 12 },
  active: { borderColor: "#3525B5", backgroundColor: "#F6F4FF" },
  flag: { fontSize: 28, marginRight: 15 },
  name: { flex: 1, fontSize: 16, color: "#333" },
  radio: { fontSize: 24, color: "#3525B5" },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center", marginTop: 30 },
  white: { color: "#fff", fontWeight: "bold" },
  note: { color: "#aaa", fontSize: 11, textAlign: "center", marginTop: 18 }
});
