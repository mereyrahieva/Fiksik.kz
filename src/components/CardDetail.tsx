import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert, Switch
} from "react-native";

type Props = {
  onBack?: () => void;
  onNext?: () => void;
};

export default function CardDetail({ onBack, onNext }: Props) {
  const [frozen, setFrozen] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  const transactions = [
    { name: "Shopping", amount: "-$120.00" },
    { name: "Internet Bill", amount: "-$35.00" },
    { name: "Deposit", amount: "+$500.00" }
  ];

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerText}>Card Details</Text>
      </View>

      <ScrollView contentContainerStyle={s.body}>
        <View style={s.bankCard}>
          <Text style={s.cardType}>VISA PLATINUM</Text>
          <Text style={s.cardNumber}>
            {showNumber ? "4589 1234 5678 9012" : "•••• •••• •••• 9012"}
          </Text>
          <View style={s.cardRow}>
            <View>
              <Text style={s.cardLabel}>CARD HOLDER</Text>
              <Text style={s.cardValue}>JOHN SMITH</Text>
            </View>
            <View>
              <Text style={s.cardLabel}>EXPIRES</Text>
              <Text style={s.cardValue}>12/29</Text>
            </View>
          </View>
          <Text style={s.visa}>VISA</Text>
        </View>

        <TouchableOpacity
          style={s.showButton}
          onPress={() => setShowNumber(!showNumber)}
        >
          <Text style={s.showText}>
            {showNumber ? "Hide Card Number" : "Show Demo Card Number"}
          </Text>
        </TouchableOpacity>

        <View style={s.balanceBox}>
          <Text style={s.muted}>Available Balance</Text>
          <Text style={s.balance}>$12,500.00</Text>
        </View>

        <View style={s.settingRow}>
          <View>
            <Text style={s.settingTitle}>Freeze Card</Text>
            <Text style={s.muted}>
              {frozen ? "Card frozen in demo" : "Card is active"}
            </Text>
          </View>
          <Switch
            value={frozen}
            onValueChange={setFrozen}
            trackColor={{ true: "#958BDF" }}
          />
        </View>

        <Text style={s.heading}>Recent Transactions</Text>
        {transactions.map((item, index) => (
          <View key={index} style={s.transaction}>
            <View style={s.transactionIcon}>
              <Text>⇄</Text>
            </View>
            <Text style={s.transactionName}>{item.name}</Text>
            <Text style={s.transactionAmount}>{item.amount}</Text>
          </View>
        ))}

        <TouchableOpacity
          style={[s.button, frozen && s.disabled]}
          disabled={frozen}
          onPress={onNext}
        >
          <Text style={s.white}>Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert("Demo", "Card settings saved locally")}
        >
          <Text style={s.settingsLink}>Manage Card Settings</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  header: {
    height: 95, backgroundColor: "#3525B5",
    flexDirection: "row", alignItems: "center", paddingHorizontal: 22
  },
  back: { color: "#fff", fontSize: 31, marginRight: 23 },
  headerText: { fontSize: 20, color: "#fff", fontWeight: "bold" },
  body: { padding: 22, paddingBottom: 50 },
  bankCard: {
    backgroundColor: "#25379C",
    borderRadius: 20, padding: 24, height: 210,
    justifyContent: "space-between"
  },
  cardType: { color: "#fff", fontWeight: "bold", fontSize: 17 },
  cardNumber: { color: "#fff", letterSpacing: 2, fontSize: 18 },
  cardRow: { flexDirection: "row", gap: 35 },
  cardLabel: { color: "#CCD1F5", fontSize: 10 },
  cardValue: { color: "#fff", fontWeight: "bold", marginTop: 7 },
  visa: {
    position: "absolute", bottom: 17, right: 23,
    color: "#fff", fontWeight: "bold", fontSize: 23
  },
  showButton: { alignItems: "center", marginTop: 16 },
  showText: { color: "#3525B5", fontWeight: "bold" },
  balanceBox: {
    backgroundColor: "#F4F2FF",
    padding: 20, borderRadius: 13, marginTop: 25
  },
  muted: { color: "#888", fontSize: 12 },
  balance: {
    fontSize: 27, fontWeight: "bold",
    color: "#3525B5", marginTop: 10
  },
  settingRow: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", paddingVertical: 22,
    borderBottomWidth: 1, borderColor: "#eee"
  },
  settingTitle: { color: "#333", fontWeight: "bold" },
  heading: { color: "#333", fontWeight: "bold", fontSize: 18, marginTop: 25 },
  transaction: {
    flexDirection: "row", alignItems: "center",
    borderBottomWidth: 1, borderColor: "#eee", paddingVertical: 18
  },
  transactionIcon: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: "#EEEAFE",
    alignItems: "center", justifyContent: "center"
  },
  transactionName: { flex: 1, marginLeft: 12, color: "#333" },
  transactionAmount: { fontWeight: "bold", color: "#3525B5" },
  button: {
    backgroundColor: "#3525B5", padding: 17,
    borderRadius: 11, alignItems: "center", marginTop: 28
  },
  disabled: { backgroundColor: "#AAA5D9" },
  white: { color: "#fff", fontWeight: "bold" },
  settingsLink: {
    color: "#3525B5", textAlign: "center", marginTop: 20
  }
});