
import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Switch, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function AccountManagement({ onBack, onNext }: Props) {
  const [notifications, setNotifications] = useState(true);
  const [selected, setSelected] = useState("Premium Account");

  const accounts = [
    { name: "Premium Account", number: "•••• 4589", balance: "$2,500.00" },
    { name: "Savings Account", number: "•••• 7812", balance: "$8,500.00" }
  ];

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}><Text style={s.back}>‹</Text></TouchableOpacity>
        <Text style={s.headerText}>Account Management</Text>
      </View>
      <ScrollView contentContainerStyle={s.body}>
        <Text style={s.title}>Manage Accounts</Text>
        <Text style={s.sub}>Your accounts and preferences</Text>
        {accounts.map(item => (
          <TouchableOpacity key={item.name}
            style={[s.account, selected === item.name && s.selected]}
            onPress={() => setSelected(item.name)}>
            <View style={s.iconBox}><Text style={s.icon}>🏦</Text></View>
            <View style={s.info}>
              <Text style={s.name}>{item.name}</Text>
              <Text style={s.muted}>{item.number}</Text>
              <Text style={s.balance}>{item.balance}</Text>
            </View>
            <Text style={s.radio}>{selected === item.name ? "◉" : "◯"}</Text>
          </TouchableOpacity>
        ))}
        <Text style={s.section}>Account Settings</Text>
        <View style={s.setting}>
          <View style={s.info}>
            <Text style={s.name}>Transaction Notifications</Text>
            <Text style={s.muted}>Receive payment alerts</Text>
          </View>
          <Switch value={notifications} onValueChange={setNotifications}
            trackColor={{ true: "#A79DE7" }} />
        </View>
        <TouchableOpacity style={s.setting}
          onPress={() => Alert.alert("Demo", "Account statement unavailable.")}>
          <Text style={s.name}>Account Statement</Text>
          <Text style={s.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.setting}
          onPress={() => Alert.alert("Demo", "Account details are sample data.")}>
          <Text style={s.name}>Account Information</Text>
          <Text style={s.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.button} onPress={onNext}>
          <Text style={s.white}>Manage Beneficiaries</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  header: { height: 95, flexDirection: "row", alignItems: "center", backgroundColor: "#3525B5", paddingHorizontal: 22 },
  back: { fontSize: 31, color: "#FFF", marginRight: 20 },
  headerText: { fontSize: 19, fontWeight: "bold", color: "#FFF" },
  body: { padding: 22, paddingBottom: 50 },
  title: { fontSize: 25, fontWeight: "bold", color: "#3525B5" },
  sub: { color: "#888", marginTop: 9, marginBottom: 25 },
  account: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#EEE", borderRadius: 13, padding: 14, marginBottom: 12 },
  selected: { borderColor: "#3525B5", backgroundColor: "#F8F7FF" },
  iconBox: { width: 47, height: 47, borderRadius: 12, backgroundColor: "#EEEAFE", justifyContent: "center", alignItems: "center" },
  icon: { fontSize: 24 },
  info: { flex: 1, marginLeft: 12 },
  name: { color: "#333", fontWeight: "bold" },
  muted: { color: "#999", fontSize: 12, marginTop: 6 },
  balance: { color: "#3525B5", fontWeight: "bold", marginTop: 8 },
  radio: { color: "#3525B5", fontSize: 23 },
  section: { fontSize: 18, color: "#333", fontWeight: "bold", marginTop: 27, marginBottom: 13 },
  setting: { paddingVertical: 19, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderColor: "#EEE" },
  arrow: { fontSize: 24, color: "#AAA" },
  button: { backgroundColor: "#3525B5", borderRadius: 11, padding: 17, alignItems: "center", marginTop: 30 },
  white: { color: "#FFF", fontWeight: "bold" }
});
