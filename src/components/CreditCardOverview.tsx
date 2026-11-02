
import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function CreditCardOverview({ onBack, onNext }: Props) {
  const [showBalance, setShowBalance] = useState(true);
  const transactions = [
    { title: "Online Shopping", amount: "-$120.00", date: "October 15" },
    { title: "Card Payment", amount: "+$300.00", date: "October 12" },
    { title: "Restaurant", amount: "-$45.00", date: "October 10" }
  ];

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}><Text style={s.back}>‹</Text></TouchableOpacity>
        <Text style={s.headerTitle}>Credit Card</Text>
      </View>
      <ScrollView contentContainerStyle={s.body}>
        <View style={s.card}>
          <Text style={s.cardTitle}>VISA Platinum</Text>
          <Text style={s.cardNumber}>•••• •••• •••• 4589</Text>
          <View style={s.cardFooter}>
            <Text style={s.whiteSmall}>JOHN SMITH</Text>
            <Text style={s.visa}>VISA</Text>
          </View>
        </View>

        <View style={s.balanceBox}>
          <View style={s.balanceHeader}>
            <Text style={s.muted}>Available Credit</Text>
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              <Text style={s.eye}>{showBalance ? "Hide" : "Show"}</Text>
            </TouchableOpacity>
          </View>
          <Text style={s.balance}>{showBalance ? "$3,250.00" : "••••••"}</Text>
          <Text style={s.muted}>Credit Limit: $5,000.00</Text>
          <View style={s.progress}><View style={s.progressFill} /></View>
        </View>

        <View style={s.actions}>
          <TouchableOpacity style={s.action} onPress={onNext}>
            <Text style={s.actionIcon}>💳</Text><Text style={s.actionText}>Pay Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.action}
            onPress={() => Alert.alert("Demo", "Card settings are not connected.")}>
            <Text style={s.actionIcon}>⚙️</Text><Text style={s.actionText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.action}
            onPress={() => Alert.alert("Demo", "Statements are sample data.")}>
            <Text style={s.actionIcon}>📄</Text><Text style={s.actionText}>Statement</Text>
          </TouchableOpacity>
        </View>

        <Text style={s.heading}>Recent Transactions</Text>
        {transactions.map(item => (
          <View style={s.transaction} key={item.title}>
            <View style={s.transactionIcon}><Text>⇄</Text></View>
            <View style={s.transactionInfo}>
              <Text style={s.name}>{item.title}</Text>
              <Text style={s.muted}>{item.date}</Text>
            </View>
            <Text style={s.amount}>{item.amount}</Text>
          </View>
        ))}
        <TouchableOpacity style={s.button} onPress={onNext}>
          <Text style={s.white}>Pay Credit Card</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  header: { height: 95, backgroundColor: "#3525B5", flexDirection: "row", alignItems: "center", paddingHorizontal: 22 },
  back: { color: "#FFF", fontSize: 31, marginRight: 22 },
  headerTitle: { color: "#FFF", fontSize: 19, fontWeight: "bold" },
  body: { padding: 22, paddingBottom: 50 },
  card: { backgroundColor: "#243698", height: 190, borderRadius: 18, padding: 23, justifyContent: "space-between" },
  cardTitle: { color: "#FFF", fontWeight: "bold", fontSize: 18 },
  cardNumber: { color: "#FFF", fontSize: 18, letterSpacing: 2 },
  cardFooter: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  whiteSmall: { color: "#DDDFFF", fontSize: 12 },
  visa: { color: "#FFF", fontSize: 22, fontWeight: "bold", fontStyle: "italic" },
  balanceBox: { backgroundColor: "#F5F3FF", borderRadius: 14, padding: 20, marginTop: 23 },
  balanceHeader: { flexDirection: "row", justifyContent: "space-between" },
  muted: { color: "#888", fontSize: 12, marginTop: 6 },
  eye: { color: "#3525B5", fontWeight: "bold" },
  balance: { color: "#3525B5", fontSize: 29, fontWeight: "bold", marginVertical: 10 },
  progress: { height: 8, borderRadius: 4, backgroundColor: "#E1DDF7", marginTop: 16, overflow: "hidden" },
  progressFill: { height: "100%", width: "65%", backgroundColor: "#3525B5", borderRadius: 4 },
  actions: { flexDirection: "row", justifyContent: "space-around", marginVertical: 27 },
  action: { alignItems: "center" },
  actionIcon: { fontSize: 30, backgroundColor: "#F2F0FF", padding: 15, borderRadius: 15 },
  actionText: { color: "#333", marginTop: 10, fontSize: 12 },
  heading: { fontSize: 18, fontWeight: "bold", marginBottom: 13, color: "#333" },
  transaction: { paddingVertical: 15, borderBottomWidth: 1, borderColor: "#EEE", flexDirection: "row", alignItems: "center" },
  transactionIcon: { width: 45, height: 45, backgroundColor: "#EEEAFE", borderRadius: 13, alignItems: "center", justifyContent: "center" },
  transactionInfo: { flex: 1, marginLeft: 12 },
  name: { color: "#333", fontWeight: "bold" },
  amount: { color: "#3525B5", fontWeight: "bold" },
  button: { padding: 17, borderRadius: 11, backgroundColor: "#3525B5", alignItems: "center", marginTop: 29 },
  white: { color: "#FFF", fontWeight: "bold" }
});
