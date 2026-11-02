import React, { useState } from "react";
import {
  View, Text, ScrollView, TextInput,
  TouchableOpacity, StyleSheet
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

const history = [
  { id: 1, provider: "Home Internet", date: "10 Oct 2026", amount: 35 },
  { id: 2, provider: "Home Internet", date: "10 Sep 2026", amount: 35 },
  { id: 3, provider: "Office Internet", date: "08 Aug 2026", amount: 49 },
  { id: 4, provider: "Home Internet", date: "10 Jul 2026", amount: 35 }
];

export default function PaymentHistoryInternet({
  onBack, onNext
}: Props) {
  const [search, setSearch] = useState("");
  const [onlyHome, setOnlyHome] = useState(false);

  const filtered = history.filter(item =>
    item.provider.toLowerCase().includes(search.toLowerCase()) &&
    (!onlyHome || item.provider === "Home Internet")
  );

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerText}>Payment History</Text>
      </View>

      <ScrollView contentContainerStyle={s.body}>
        <View style={s.hero}>
          <Text style={s.icon}>🌐</Text>
          <Text style={s.title}>Internet Payments</Text>
          <Text style={s.subtitle}>Your recent internet transactions</Text>
        </View>

        <TextInput
          style={s.search}
          placeholder="Search provider"
          value={search}
          onChangeText={setSearch}
        />

        <TouchableOpacity
          style={s.filter}
          onPress={() => setOnlyHome(!onlyHome)}
        >
          <Text style={s.filterText}>
            {onlyHome ? "☑" : "□"} Home Internet only
          </Text>
        </TouchableOpacity>

        <Text style={s.section}>Transaction History</Text>
        {filtered.map(item => (
          <TouchableOpacity key={item.id}
            style={s.item} onPress={onNext}>
            <View style={s.iconBox}>
              <Text style={s.itemIcon}>🌐</Text>
            </View>
            <View style={s.info}>
              <Text style={s.name}>{item.provider}</Text>
              <Text style={s.date}>{item.date}</Text>
              <Text style={s.paid}>✓ Paid</Text>
            </View>
            <Text style={s.amount}>-${item.amount.toFixed(2)}</Text>
          </TouchableOpacity>
        ))}

        {filtered.length === 0 && (
          <Text style={s.empty}>No payments found</Text>
        )}
        <Text style={s.note}>Example payment history only</Text>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  header: { height: 95, backgroundColor: "#3525B5", paddingHorizontal: 22, flexDirection: "row", alignItems: "center" },
  back: { color: "#fff", fontSize: 31, marginRight: 22 },
  headerText: { color: "#fff", fontSize: 19, fontWeight: "bold" },
  body: { padding: 22, paddingBottom: 50 },
  hero: { backgroundColor: "#F4F2FF", borderRadius: 16, alignItems: "center", padding: 25 },
  icon: { fontSize: 56 },
  title: { color: "#3525B5", fontSize: 22, fontWeight: "bold", marginTop: 15 },
  subtitle: { color: "#888", marginTop: 8 },
  search: { height: 51, backgroundColor: "#F5F5F9", borderRadius: 11, paddingHorizontal: 15, marginTop: 26 },
  filter: { padding: 14, marginTop: 12 },
  filterText: { color: "#3525B5" },
  section: { color: "#333", fontSize: 18, fontWeight: "bold", marginTop: 22, marginBottom: 12 },
  item: { flexDirection: "row", alignItems: "center", paddingVertical: 17, borderBottomWidth: 1, borderColor: "#eee" },
  iconBox: { width: 48, height: 48, backgroundColor: "#F0EEFF", borderRadius: 13, alignItems: "center", justifyContent: "center" },
  itemIcon: { fontSize: 24 },
  info: { flex: 1, marginLeft: 13 },
  name: { color: "#333", fontWeight: "bold" },
  date: { color: "#999", fontSize: 12, marginTop: 6 },
  paid: { color: "#20A575", fontSize: 12, marginTop: 6 },
  amount: { color: "#E54A63", fontWeight: "bold" },
  empty: { color: "#999", textAlign: "center", marginTop: 25 },
  note: { color: "#aaa", fontSize: 11, textAlign: "center", marginTop: 28 }
});