
import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet
} from "react-native";

type Props = {
  onBack?: () => void;
  onBranch?: () => void;
  onInterest?: () => void;
  onExchange?: () => void;
  onLanguage?: () => void;
};

export default function Search({
  onBack, onBranch, onInterest, onExchange, onLanguage
}: Props) {
  const [query, setQuery] = useState("");
  const items = [
    { title: "Branch", icon: "📍", action: onBranch },
    { title: "Interest Rate", icon: "％", action: onInterest },
    { title: "Exchange Rate", icon: "💱", action: onExchange },
    { title: "Language", icon: "🌐", action: onLanguage }
  ];

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.title}>Search</Text>
      </View>
      <ScrollView contentContainerStyle={s.body}>
        <View style={s.searchRow}>
          <Text style={s.searchIcon}>⌕</Text>
          <TextInput
            style={s.input}
            placeholder="Search services"
            value={query} onChangeText={setQuery}
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery("")}>
              <Text style={s.clear}>×</Text>
            </TouchableOpacity>
          )}
        </View>
        <Text style={s.heading}>Services</Text>
        {items.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase())
        ).map(item => (
          <TouchableOpacity key={item.title}
            style={s.item} onPress={item.action}>
            <View style={s.iconBox}>
              <Text style={s.icon}>{item.icon}</Text>
            </View>
            <Text style={s.itemText}>{item.title}</Text>
            <Text style={s.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  header: { backgroundColor: "#3525B5", height: 95, paddingHorizontal: 22, flexDirection: "row", alignItems: "center" },
  back: { fontSize: 32, color: "#fff", marginRight: 25 },
  title: { color: "#fff", fontWeight: "bold", fontSize: 20 },
  body: { padding: 22 },
  searchRow: { flexDirection: "row", height: 53, borderRadius: 12, backgroundColor: "#F4F4FA", paddingHorizontal: 13, alignItems: "center" },
  searchIcon: { fontSize: 26, color: "#aaa" },
  input: { flex: 1, marginLeft: 10 },
  clear: { color: "#aaa", fontSize: 25 },
  heading: { fontSize: 18, fontWeight: "bold", color: "#292929", marginTop: 32, marginBottom: 15 },
  item: { flexDirection: "row", alignItems: "center", paddingVertical: 13, borderBottomWidth: 1, borderBottomColor: "#eee" },
  iconBox: { width: 47, height: 47, borderRadius: 13, backgroundColor: "#F0EEFF", justifyContent: "center", alignItems: "center" },
  icon: { fontSize: 24, color: "#3525B5" },
  itemText: { flex: 1, marginLeft: 15, fontSize: 15, color: "#333" },
  arrow: { color: "#999", fontSize: 24 }
});
