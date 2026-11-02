import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

const payments = [
  { id: 1, month: "October 2026", date: "12 Oct 2026", amount: 75, status: "Paid" },
  { id: 2, month: "September 2026", date: "12 Sep 2026", amount: 68, status: "Paid" },
  { id: 3, month: "August 2026", date: "12 Aug 2026", amount: 82, status: "Paid" },
  { id: 4, month: "July 2026", date: "12 Jul 2026", amount: 70, status: "Paid" }
];

export default function PaymentHistoryElectric({
  onBack, onNext
}: Props) {
  const [selected, setSelected] = useState("All");

  const filtered = selected === "All"
    ? payments
    : payments.filter(p => p.month.includes(selected));

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
          <Text style={s.icon}>💡</Text>
          <Text style={s.title}>Electric Bill History</Text>
          <Text style={s.subtitle}>View your electricity payments</Text>
        </View>

        <Text style={s.heading}>Payment Records</Text>
        <View style={s.filters}>
          {["All", "October", "September"].map(item => (
            <TouchableOpacity
              key={item}
              onPress={() => setSelected(item)}
              style={[s.filter, selected === item && s.active]}
            >
              <Text style={[s.filterText, selected === item && s.activeText]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {filtered.map(payment => (
          <TouchableOpacity key={payment.id} style={s.payment}
            onPress={onNext}>
            <View style={s.paymentIcon}><Text>⚡</Text></View>
            <View style={s.details}>
              <Text style={s.name}>{payment.month}</Text>
              <Text style={s.date}>{payment.date}</Text>
              <Text style={s.status}>✓ {payment.status}</Text>
            </View>
            <Text style={s.amount}>-${payment.amount.toFixed(2)}</Text>
          </TouchableOpacity>
        ))}

        <Text style={s.note}>
          These records are sample data for demonstration.
        </Text>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  header: { height: 95, backgroundColor: "#3525B5", flexDirection: "row", alignItems: "center", paddingHorizontal: 22 },
  back: { fontSize: 31, color: "#fff", marginRight: 22 },
  headerText: { fontSize: 19, color: "#fff", fontWeight: "bold" },
  body: { padding: 22, paddingBottom: 50 },
  hero: { alignItems: "center", backgroundColor: "#F3F1FF", padding: 25, borderRadius: 16 },
  icon: { fontSize: 55 },
  title: { color: "#3525B5", fontSize: 21, fontWeight: "bold", marginTop: 15 },
  subtitle: { color: "#888", marginTop: 9 },
  heading: { fontSize: 18, fontWeight: "bold", marginTop: 30, marginBottom: 17 },
  filters: { flexDirection: "row", gap: 8, marginBottom: 20 },
  filter: { backgroundColor: "#F3F1FF", borderRadius: 10, padding: 13, flex: 1, alignItems: "center" },
  active: { backgroundColor: "#3525B5" },
  filterText: { color: "#3525B5", fontSize: 12 },
  activeText: { color: "#fff" },
  payment: { flexDirection: "row", alignItems: "center", paddingVertical: 17, borderBottomWidth: 1, borderColor: "#eee" },
  paymentIcon: { backgroundColor: "#F0EEFF", borderRadius: 14, width: 47, height: 47, alignItems: "center", justifyContent: "center" },
  details: { flex: 1, marginLeft: 13 },
  name: { fontWeight: "bold", color: "#333" },
  date: { fontSize: 12, color: "#999", marginTop: 5 },
  status: { color: "#22A675", fontSize: 12, marginTop: 6 },
  amount: { color: "#E54B65", fontWeight: "bold" },
  note: { color: "#aaa", textAlign: "center", marginTop: 26, fontSize: 11 }
});