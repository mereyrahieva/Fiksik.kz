
import React from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = {
  onTransfer?: () => void;
  onExchange?: () => void;
  onSearch?: () => void;
  onNext?: () => void;
};

export default function Home({
  onTransfer, onExchange, onSearch, onNext
}: Props) {
  const actions = [
    { icon: "⇄", title: "Transfer", action: onTransfer },
    { icon: "💱", title: "Exchange", action: onExchange },
    { icon: "💳", title: "Cards", action: onNext },
    { icon: "⋯", title: "More", action: onSearch }
  ];

  const transactions = [
    { title: "Internet Bill", date: "12 October", amount: "- $25.00" },
    { title: "Salary", date: "10 October", amount: "+ $1,200.00" },
    { title: "Mobile Recharge", date: "08 October", amount: "- $10.00" }
  ];

  return (
    <ScrollView style={s.page}>
      <View style={s.header}>
        <Text style={s.greeting}>Good morning!</Text>
        <Text style={s.username}>Welcome to your bank</Text>
        <TouchableOpacity style={s.search} onPress={onSearch}>
          <Text style={s.searchText}>⌕ Search services</Text>
        </TouchableOpacity>
      </View>
      <View style={s.body}>
        <View style={s.card}>
          <Text style={s.cardTop}>Total Balance</Text>
          <Text style={s.balance}>$ 12,650.00</Text>
          <Text style={s.cardNumber}>••••  ••••  ••••  4589</Text>
          <View style={s.cardBottom}>
            <Text style={s.cardTop}>PREMIUM ACCOUNT</Text>
            <Text style={s.visa}>VISA</Text>
          </View>
        </View>

        <Text style={s.heading}>Quick Actions</Text>
        <View style={s.actions}>
          {actions.map(item => (
            <TouchableOpacity
              key={item.title} style={s.action}
              onPress={item.action || (() =>
                Alert.alert("Demo", `${item.title} selected`))}
            >
              <View style={s.actionIcon}>
                <Text style={s.actionSymbol}>{item.icon}</Text>
              </View>
              <Text style={s.actionLabel}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={s.sectionHeader}>
          <Text style={s.heading}>Recent Transactions</Text>
          <TouchableOpacity onPress={onNext}>
            <Text style={s.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {transactions.map(item => (
          <View key={item.title} style={s.transaction}>
            <View style={s.transactionIcon}><Text>↗</Text></View>
            <View style={s.transactionInfo}>
              <Text style={s.transactionTitle}>{item.title}</Text>
              <Text style={s.muted}>{item.date}</Text>
            </View>
            <Text style={s.amount}>{item.amount}</Text>
          </View>
        ))}
        <Text style={s.demo}>Demo balance and transactions</Text>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#F7F7FC" },
  header: { backgroundColor: "#3525B5", padding: 23, paddingTop: 38, paddingBottom: 65 },
  greeting: { color: "#E0DEFF", fontSize: 13 },
  username: { color: "#fff", fontWeight: "bold", fontSize: 23, marginTop: 5 },
  search: { backgroundColor: "#FFFFFF25", padding: 14, borderRadius: 12, marginTop: 22 },
  searchText: { color: "#fff" },
  body: { paddingHorizontal: 20, marginTop: -38, paddingBottom: 40 },
  card: { backgroundColor: "#243A9A", borderRadius: 20, padding: 23, height: 185, justifyContent: "space-between" },
  cardTop: { color: "#CFD6FF", fontSize: 12 },
  balance: { color: "#fff", fontSize: 31, fontWeight: "bold" },
  cardNumber: { color: "#fff", letterSpacing: 2 },
  cardBottom: { flexDirection: "row", justifyContent: "space-between" },
  visa: { color: "#fff", fontSize: 21, fontWeight: "bold", fontStyle: "italic" },
  heading: { fontSize: 18, color: "#23233A", fontWeight: "bold", marginVertical: 20 },
  actions: { flexDirection: "row", justifyContent: "space-between" },
  action: { width: "24%", alignItems: "center" },
  actionIcon: { width: 60, height: 60, borderRadius: 15, backgroundColor: "#EAE8FC", alignItems: "center", justifyContent: "center" },
  actionSymbol: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  actionLabel: { fontSize: 12, marginTop: 9, color: "#333" },
  sectionHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  seeAll: { color: "#3525B5" },
  transaction: { flexDirection: "row", backgroundColor: "#fff", padding: 14, borderRadius: 12, alignItems: "center", marginBottom: 9 },
  transactionIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: "#F0EEFF", justifyContent: "center", alignItems: "center" },
  transactionInfo: { flex: 1, marginLeft: 12 },
  transactionTitle: { fontWeight: "bold", color: "#333" },
  muted: { color: "#999", fontSize: 12, marginTop: 5 },
  amount: { color: "#3525B5", fontWeight: "bold", fontSize: 12 },
  demo: { textAlign: "center", color: "#999", marginTop: 20, fontSize: 11 }
});
