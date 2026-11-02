import React, { useState } from "react";
import {
  View, Text, TouchableOpacity,
  ScrollView, StyleSheet
} from "react-native";

type Props = {
  onBack?: () => void;
  onNext?: () => void;
  onSelect?: (account: string) => void;
};

const accounts = [
  { id: "1", title: "Premium Account", number: "•••• 4589", balance: "$2,500.00" },
  { id: "2", title: "Savings Account", number: "•••• 7812", balance: "$8,500.00" },
  { id: "3", title: "Current Account", number: "•••• 9012", balance: "$3,500.00" }
];

export default function WithdrawAccountModal({
  onBack, onNext, onSelect
}: Props) {
  const [selected, setSelected] = useState("1");

  function confirm() {
    const account = accounts.find(a => a.id === selected);
    if (account) onSelect?.(account.title);
    onNext?.();
  }

  return (
    <View style={s.page}>
      <View style={s.overlay}>
        <View style={s.modal}>
          <View style={s.handle} />
          <View style={s.headingRow}>
            <Text style={s.title}>Select Account</Text>
            <TouchableOpacity onPress={onBack}>
              <Text style={s.close}>×</Text>
            </TouchableOpacity>
          </View>
          <Text style={s.subtitle}>Choose the account to withdraw from</Text>

          <ScrollView>
            {accounts.map(account => (
              <TouchableOpacity key={account.id}
                onPress={() => setSelected(account.id)}
                style={[s.item, selected === account.id && s.active]}>
                <View style={s.iconBox}><Text style={s.icon}>🏦</Text></View>
                <View style={s.details}>
                  <Text style={s.name}>{account.title}</Text>
                  <Text style={s.number}>{account.number}</Text>
                  <Text style={s.balance}>{account.balance}</Text>
                </View>
                <Text style={s.radio}>{selected === account.id ? "◉" : "◯"}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity style={s.button} onPress={confirm}>
            <Text style={s.white}>Select Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#EDE9F5" },
  overlay: { flex: 1, backgroundColor: "#3525B533", justifyContent: "flex-end" },
  modal: { backgroundColor: "#fff", borderTopLeftRadius: 25, borderTopRightRadius: 25, minHeight: 480, padding: 22 },
  handle: { width: 48, height: 5, borderRadius: 4, backgroundColor: "#ddd", alignSelf: "center", marginBottom: 22 },
  headingRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  title: { color: "#3525B5", fontSize: 23, fontWeight: "bold" },
  close: { color: "#999", fontSize: 30 },
  subtitle: { color: "#888", marginTop: 8, marginBottom: 25 },
  item: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#eee", borderRadius: 12, padding: 13, marginBottom: 12 },
  active: { backgroundColor: "#F5F3FF", borderColor: "#3525B5" },
  iconBox: { width: 49, height: 49, borderRadius: 13, backgroundColor: "#EEEAFE", alignItems: "center", justifyContent: "center" },
  icon: { fontSize: 23 },
  details: { flex: 1, marginLeft: 13 },
  name: { color: "#333", fontWeight: "bold" },
  number: { color: "#999", fontSize: 12, marginTop: 5 },
  balance: { color: "#3525B5", fontWeight: "bold", marginTop: 7 },
  radio: { color: "#3525B5", fontSize: 23 },
  button: { backgroundColor: "#3525B5", padding: 17, alignItems: "center", borderRadius: 11, marginTop: 20 },
  white: { color: "#fff", fontWeight: "bold" }
});