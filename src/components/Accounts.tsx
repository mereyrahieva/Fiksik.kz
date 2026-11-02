import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = {
  onBack?: () => void;
  onNext?: () => void;
};

type Account = {
  id: number;
  name: string;
  number: string;
  balance: number;
  currency: string;
};

const accounts: Account[] = [
  {
    id: 1, name: "Current Account",
    number: "•••• 4589", balance: 12500, currency: "USD"
  },
  {
    id: 2, name: "Savings Account",
    number: "•••• 7812", balance: 8500, currency: "USD"
  },
  {
    id: 3, name: "Daily Account",
    number: "•••• 9012", balance: 3500, currency: "USD"
  }
];

export default function Accounts({ onBack, onNext }: Props) {
  const [selected, setSelected] = useState<number>(1);

  const total = accounts.reduce(
    (sum, account) => sum + account.balance, 0
  );

  const current = accounts.find(a => a.id === selected);

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>Accounts</Text>
      </View>

      <ScrollView contentContainerStyle={s.content}>
        <View style={s.balanceCard}>
          <Text style={s.whiteSmall}>Total Balance</Text>
          <Text style={s.balance}>
            ${total.toLocaleString("en-US")}.00
          </Text>
          <Text style={s.whiteSmall}>
            3 Active Accounts
          </Text>
        </View>

        <Text style={s.section}>My Accounts</Text>

        {accounts.map(account => (
          <TouchableOpacity
            key={account.id}
            style={[
              s.accountCard,
              selected === account.id && s.selected
            ]}
            onPress={() => setSelected(account.id)}
          >
            <View style={s.iconBox}>
              <Text style={s.icon}>🏦</Text>
            </View>

            <View style={s.accountInfo}>
              <Text style={s.accountName}>{account.name}</Text>
              <Text style={s.accountNumber}>{account.number}</Text>
              <Text style={s.accountBalance}>
                ${account.balance.toLocaleString("en-US")}.00
              </Text>
            </View>

            <Text style={s.check}>
              {selected === account.id ? "◉" : "◯"}
            </Text>
          </TouchableOpacity>
        ))}

        <View style={s.details}>
          <Text style={s.detailsTitle}>Selected Account</Text>
          <Text style={s.detailText}>
            {current?.name}
          </Text>
          <Text style={s.detailText}>
            Account number: {current?.number}
          </Text>
          <Text style={s.status}>● Active</Text>
        </View>

        <TouchableOpacity
          style={s.button}
          onPress={onNext}
        >
          <Text style={s.buttonText}>View Cards</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.secondary}
          onPress={() =>
            Alert.alert(
              "Demo",
              "Account creation requires a banking service."
            )
          }
        >
          <Text style={s.secondaryText}>+ Add New Account</Text>
        </TouchableOpacity>

        <Text style={s.demo}>Demo account information</Text>
      </ScrollView>
    </View>
  );
}

const PURPLE = "#3525B5";

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFFFFF" },
  header: {
    height: 95, backgroundColor: PURPLE,
    flexDirection: "row", alignItems: "center",
    paddingHorizontal: 22
  },
  back: { color: "#FFFFFF", fontSize: 32, marginRight: 23 },
  headerTitle: {
    color: "#FFFFFF", fontSize: 20, fontWeight: "bold"
  },
  content: { padding: 22, paddingBottom: 50 },
  balanceCard: {
    backgroundColor: "#243698", padding: 25,
    borderRadius: 18, marginBottom: 27
  },
  whiteSmall: { color: "#D8DCFF", fontSize: 13 },
  balance: {
    color: "#FFFFFF", fontSize: 32,
    fontWeight: "bold", marginVertical: 17
  },
  section: {
    fontSize: 19, fontWeight: "bold",
    color: "#333333", marginBottom: 17
  },
  accountCard: {
    flexDirection: "row", alignItems: "center",
    padding: 16, borderWidth: 1,
    borderColor: "#EEEEEE", borderRadius: 14,
    marginBottom: 12
  },
  selected: {
    borderColor: PURPLE, backgroundColor: "#F8F7FF"
  },
  iconBox: {
    width: 50, height: 50, borderRadius: 13,
    backgroundColor: "#EEEAFE",
    justifyContent: "center", alignItems: "center"
  },
  icon: { fontSize: 25 },
  accountInfo: { flex: 1, marginLeft: 13 },
  accountName: { fontSize: 15, fontWeight: "bold", color: "#333" },
  accountNumber: { color: "#999", fontSize: 12, marginTop: 5 },
  accountBalance: {
    color: PURPLE, fontWeight: "bold", marginTop: 8
  },
  check: { color: PURPLE, fontSize: 24 },
  details: {
    padding: 19, backgroundColor: "#F5F3FF",
    borderRadius: 13, marginTop: 20
  },
  detailsTitle: { color: PURPLE, fontWeight: "bold" },
  detailText: { color: "#666", marginTop: 10 },
  status: { color: "#23A77A", marginTop: 12 },
  button: {
    backgroundColor: PURPLE, borderRadius: 11,
    padding: 17, alignItems: "center", marginTop: 26
  },
  buttonText: { color: "#FFF", fontWeight: "bold" },
  secondary: {
    borderWidth: 1, borderColor: PURPLE,
    borderRadius: 11, padding: 16,
    alignItems: "center", marginTop: 13
  },
  secondaryText: { color: PURPLE, fontWeight: "bold" },
  demo: { textAlign: "center", color: "#AAA", marginTop: 20 }
});