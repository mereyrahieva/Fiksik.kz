
import React from "react";
import {
  View, Text, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void };

export default function AppInformation({ onBack }: Props) {
  const information = [
    { label: "Application", value: "Fiksik Banking" },
    { label: "Version", value: "1.0.0" },
    { label: "Platform", value: "React Native / Expo" },
    { label: "Language", value: "English" },
    { label: "Type", value: "Educational Demo" }
  ];

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>App Information</Text>
      </View>
      <ScrollView contentContainerStyle={s.content}>
        <View style={s.hero}>
          <View style={s.logo}>
            <Text style={s.logoText}>F</Text>
          </View>
          <Text style={s.title}>Fiksik Banking</Text>
          <Text style={s.version}>Version 1.0.0</Text>
        </View>
        <Text style={s.section}>About Application</Text>
        <Text style={s.description}>
          A modern mobile banking interface designed with
          React Native and TypeScript for educational purposes.
        </Text>
        <View style={s.card}>
          {information.map(item => (
            <View style={s.row} key={item.label}>
              <Text style={s.label}>{item.label}</Text>
              <Text style={s.value}>{item.value}</Text>
            </View>
          ))}
        </View>
        <Text style={s.section}>Legal & Support</Text>
        {["Terms of Service", "Privacy Policy", "Contact Support"].map(item => (
          <TouchableOpacity
            key={item}
            style={s.linkRow}
            onPress={() => Alert.alert(item, "Demo information")}
          >
            <Text style={s.linkText}>{item}</Text>
            <Text style={s.arrow}>›</Text>
          </TouchableOpacity>
        ))}
        <Text style={s.footer}>Educational application — not a real bank.</Text>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  header: { height: 95, backgroundColor: "#3525B5", flexDirection: "row", alignItems: "center", paddingHorizontal: 22 },
  back: { fontSize: 31, color: "#fff", marginRight: 22 },
  headerTitle: { fontSize: 19, color: "#fff", fontWeight: "bold" },
  content: { padding: 22, paddingBottom: 45 },
  hero: { alignItems: "center", paddingVertical: 32 },
  logo: { width: 100, height: 100, borderRadius: 24, backgroundColor: "#3525B5", alignItems: "center", justifyContent: "center" },
  logoText: { color: "#fff", fontWeight: "bold", fontSize: 65 },
  title: { color: "#3525B5", fontSize: 24, fontWeight: "bold", marginTop: 18 },
  version: { color: "#999", marginTop: 6 },
  section: { fontSize: 18, fontWeight: "bold", color: "#333", marginVertical: 18 },
  description: { color: "#888", lineHeight: 22 },
  card: { padding: 16, borderRadius: 14, backgroundColor: "#F7F6FC", marginTop: 18 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 13, borderBottomWidth: 1, borderColor: "#E9E7F1" },
  label: { color: "#888" },
  value: { color: "#3525B5", fontWeight: "bold", fontSize: 12 },
  linkRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 17, borderBottomWidth: 1, borderColor: "#eee" },
  linkText: { color: "#444" },
  arrow: { fontSize: 24, color: "#999" },
  footer: { textAlign: "center", color: "#aaa", marginTop: 30, fontSize: 11 }
});
