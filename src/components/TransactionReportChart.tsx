
import React, { useState } from "react";
import {
  ScrollView, View, Text, TouchableOpacity,
  StyleSheet
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

const expenses = [
  { name: "Jan", amount: 330 },
  { name: "Feb", amount: 470 },
  { name: "Mar", amount: 380 },
  { name: "Apr", amount: 620 },
  { name: "May", amount: 510 },
  { name: "Jun", amount: 700 }
];

export default function TransactionReportChart({
  onBack, onNext
}: Props) {
  const [period, setPeriod] = useState<"Monthly" | "Yearly">("Monthly");
  const [selected, setSelected] = useState("Jun");

  const maxValue = Math.max(...expenses.map(e => e.amount));
  const active = expenses.find(e => e.name === selected);
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>Transaction Report</Text>
      </View>

      <View style={s.content}>
        <Text style={s.title}>Spending Analytics</Text>
        <Text style={s.subtitle}>Track your finances at a glance</Text>

        <View style={s.tabs}>
          {(["Monthly", "Yearly"] as const).map(item => (
            <TouchableOpacity key={item} onPress={() => setPeriod(item)}
              style={[s.tab, period === item && s.activeTab]}>
              <Text style={[s.tabText, period === item && s.activeText]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={s.totalCard}>
          <Text style={s.totalLabel}>Total Expenses</Text>
          <Text style={s.total}>${total.toLocaleString()}.00</Text>
          <Text style={s.muted}>Example data • {period}</Text>
        </View>

        <Text style={s.section}>Expenses Overview</Text>
        <View style={s.chart}>
          {expenses.map(e => (
            <TouchableOpacity
              key={e.name} style={s.column}
              onPress={() => setSelected(e.name)}
            >
              <View style={s.barArea}>
                <View style={[
                  s.bar,
                  { height: `${(e.amount / maxValue) * 100}%` },
                  selected === e.name && s.activeBar
                ]} />
              </View>
              <Text style={s.month}>{e.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={s.selectedInfo}>
          <Text style={s.muted}>{selected} spending</Text>
          <Text style={s.selectedAmount}>${active?.amount ?? 0}.00</Text>
        </View>

        <TouchableOpacity style={s.button} onPress={onNext}>
          <Text style={s.white}>View Transactions</Text>
        </TouchableOpacity>
        <Text style={s.note}>Chart uses sample transaction values.</Text>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { paddingBottom: 50 },
  header: { height: 95, flexDirection: "row", alignItems: "center", backgroundColor: "#3525B5", paddingHorizontal: 22 },
  back: { color: "#fff", fontSize: 31, marginRight: 22 },
  headerTitle: { color: "#fff", fontSize: 19, fontWeight: "bold" },
  content: { padding: 22 },
  title: { fontSize: 25, fontWeight: "bold", color: "#3525B5" },
  subtitle: { color: "#888", marginTop: 9 },
  tabs: { flexDirection: "row", backgroundColor: "#F2F0FC", padding: 5, borderRadius: 12, marginTop: 25 },
  tab: { flex: 1, padding: 13, borderRadius: 9, alignItems: "center" },
  activeTab: { backgroundColor: "#3525B5" },
  tabText: { color: "#888" },
  activeText: { color: "#fff", fontWeight: "bold" },
  totalCard: { backgroundColor: "#2A369B", borderRadius: 17, padding: 23, marginTop: 25 },
  totalLabel: { color: "#DADAFE" },
  total: { fontSize: 32, fontWeight: "bold", color: "#fff", marginTop: 10 },
  muted: { color: "#999", fontSize: 12, marginTop: 8 },
  section: { fontSize: 18, fontWeight: "bold", marginTop: 28, marginBottom: 18 },
  chart: { height: 215, flexDirection: "row", justifyContent: "space-around", paddingTop: 10 },
  column: { width: "14%", alignItems: "center" },
  barArea: { height: 175, width: "70%", justifyContent: "flex-end" },
  bar: { backgroundColor: "#C3BDF0", borderTopLeftRadius: 7, borderTopRightRadius: 7 },
  activeBar: { backgroundColor: "#3525B5" },
  month: { color: "#888", fontSize: 11, marginTop: 10 },
  selectedInfo: { backgroundColor: "#F5F3FF", padding: 19, borderRadius: 12, marginTop: 25 },
  selectedAmount: { color: "#3525B5", fontSize: 25, fontWeight: "bold", marginTop: 7 },
  button: { padding: 17, borderRadius: 11, backgroundColor: "#3525B5", marginTop: 28, alignItems: "center" },
  white: { color: "#fff", fontWeight: "bold" },
  note: { color: "#aaa", fontSize: 11, textAlign: "center", marginTop: 17 }
});
