
import React, { useState } from "react";
import {
  ScrollView, Text, View, TextInput,
  TouchableOpacity, StyleSheet
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

type Transaction = {
  id: number;
  title: string;
  date: string;
  amount: number;
  category: string;
};

const transactions: Transaction[] = [
  { id: 1, title: "Electric Bill", date: "12 Oct 2026", amount: -75, category: "Bills" },
  { id: 2, title: "Salary", date: "10 Oct 2026", amount: 1500, category: "Income" },
  { id: 3, title: "Internet Bill", date: "08 Oct 2026", amount: -35, category: "Bills" },
  { id: 4, title: "Mobile Recharge", date: "05 Oct 2026", amount: -20, category: "Mobile" },
  { id: 5, title: "Bank Transfer", date: "03 Oct 2026", amount: -250, category: "Transfer" },
  { id: 6, title: "Refund", date: "01 Oct 2026", amount: 45, category: "Income" }
];

export default function TransactionReportList({
  onBack, onNext
}: Props) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | "Income" | "Expense">("All");

  const filtered = transactions.filter(item => {
    const matchesSearch = `${item.title} ${item.category}`
      .toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" ||
      (filter === "Income" ? item.amount > 0 : item.amount < 0);
    return matchesSearch && matchesFilter;
  });

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>Transaction Report</Text>
      </View>
      <ScrollView contentContainerStyle={s.body}>
        <Text style={s.title}>Transaction History</Text>
        <Text style={s.subtitle}>View and search your recent transactions</Text>

        <TextInput style={s.search}
          placeholder="Search transactions"
          value={search} onChangeText={setSearch}
        />

        <View style={s.filters}>
          {(["All", "Income", "Expense"] as const).map(item => (
            <TouchableOpacity key={item}
              onPress={() => setFilter(item)}
              style={[s.filter, filter === item && s.activeFilter]}>
              <Text style={[s.filterText, filter === item && s.activeText]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={s.section}>Recent Transactions</Text>
        {filtered.length === 0 && (
          <Text style={s.empty}>No transactions found</Text>
        )}
        {filtered.map(item => (
          <TouchableOpacity
            key={item.id} style={s.transaction} onPress={onNext}
          >
            <View style={s.iconBox}>
              <Text style={s.icon}>{item.amount > 0 ? "↙" : "↗"}</Text>
            </View>
            <View style={s.info}>
              <Text style={s.name}>{item.title}</Text>
              <Text style={s.date}>{item.date} • {item.category}</Text>
            </View>
            <Text style={[s.amount, item.amount > 0 && s.positive]}>
              {item.amount > 0 ? "+" : "-"}${Math.abs(item.amount).toFixed(2)}
            </Text>
          </TouchableOpacity>
        ))}
        <Text style={s.note}>
          Demonstration transactions. No bank account is connected.
        </Text>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  header: { height: 95, backgroundColor: "#3525B5", flexDirection: "row", alignItems: "center", paddingHorizontal: 22 },
  back: { color: "#fff", fontSize: 31, marginRight: 22 },
  headerTitle: { color: "#fff", fontSize: 19, fontWeight: "bold" },
  body: { padding: 22, paddingBottom: 50 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 9 },
  search: { backgroundColor: "#F4F4F9", borderRadius: 12, height: 52, paddingHorizontal: 15, marginTop: 25 },
  filters: { flexDirection: "row", marginTop: 20, gap: 8 },
  filter: { flex: 1, backgroundColor: "#F3F2FA", padding: 13, alignItems: "center", borderRadius: 10 },
  activeFilter: { backgroundColor: "#3525B5" },
  filterText: { color: "#777", fontSize: 12, fontWeight: "bold" },
  activeText: { color: "#fff" },
  section: { fontSize: 18, fontWeight: "bold", color: "#333", marginVertical: 25 },
  transaction: { flexDirection: "row", alignItems: "center", paddingVertical: 15, borderBottomWidth: 1, borderColor: "#eee" },
  iconBox: { backgroundColor: "#F0EEFF", width: 47, height: 47, borderRadius: 14, alignItems: "center", justifyContent: "center" },
  icon: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  info: { flex: 1, marginLeft: 12 },
  name: { fontWeight: "bold", color: "#333", fontSize: 14 },
  date: { color: "#999", fontSize: 11, marginTop: 7 },
  amount: { color: "#E54A64", fontWeight: "bold", fontSize: 13 },
  positive: { color: "#21A577" },
  empty: { color: "#999", textAlign: "center", marginTop: 30 },
  note: { color: "#aaa", fontSize: 11, textAlign: "center", marginTop: 30 }
});
