
import React, { useState } from "react";
import {
  View, Text, ScrollView,
  TouchableOpacity, StyleSheet
} from "react-native";

type Props = { onBack?: () => void };

const products = [
  { title: "Savings Account", rate: "5.50%", period: "Annual interest" },
  { title: "Fixed Deposit", rate: "7.25%", period: "12 months" },
  { title: "Personal Loan", rate: "12.50%", period: "Annual interest" },
  { title: "Home Loan", rate: "9.90%", period: "Annual interest" }
];

export default function InterestRate({ onBack }: Props) {
  const [tab, setTab] = useState<"Deposit" | "Loan">("Deposit");
  const filtered = products.filter(p =>
    tab === "Deposit" ? /Savings|Deposit/.test(p.title) : /Loan/.test(p.title)
  );

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>Interest Rate</Text>
      </View>
      <ScrollView contentContainerStyle={s.body}>
        <Text style={s.heading}>Interest Rates</Text>
        <Text style={s.sub}>Explore our available banking products</Text>
        <View style={s.tabs}>
          {(["Deposit", "Loan"] as const).map(t => (
            <TouchableOpacity
              key={t}
              onPress={() => setTab(t)}
              style={[s.tab, tab === t && s.activeTab]}
            >
              <Text style={[s.tabText, tab === t && s.activeText]}>{t}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {filtered.map(p => (
          <View key={p.title} style={s.card}>
            <View>
              <Text style={s.name}>{p.title}</Text>
              <Text style={s.sub}>{p.period}</Text>
            </View>
            <Text style={s.rate}>{p.rate}</Text>
          </View>
        ))}
        <View style={s.notice}>
          <Text style={s.noticeText}>
            These are example rates for interface demonstration only.
            They are not current offers from a bank.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "white" },
  header: { height: 95, backgroundColor: "#3525B5", flexDirection: "row", alignItems: "center", paddingHorizontal: 22 },
  back: { color: "#fff", fontSize: 30, marginRight: 25 },
  headerTitle: { fontSize: 20, color: "#fff", fontWeight: "bold" },
  body: { padding: 24 },
  heading: { fontSize: 25, fontWeight: "bold", color: "#3525B5" },
  sub: { color: "#888", fontSize: 12, marginTop: 6 },
  tabs: { flexDirection: "row", backgroundColor: "#F1F0F8", borderRadius: 12, padding: 5, marginVertical: 25 },
  tab: { flex: 1, padding: 14, alignItems: "center", borderRadius: 9 },
  activeTab: { backgroundColor: "#3525B5" },
  tabText: { color: "#777", fontWeight: "bold" },
  activeText: { color: "#fff" },
  card: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#eee", paddingVertical: 22 },
  name: { color: "#333", fontWeight: "bold", fontSize: 15 },
  rate: { color: "#3525B5", fontWeight: "bold", fontSize: 23 },
  notice: { backgroundColor: "#F5F3FF", padding: 17, borderRadius: 12, marginTop: 28 },
  noticeText: { color: "#777", lineHeight: 20 }
});
