
import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet
} from "react-native";

type Props = {
  onBack?: () => void;
  onNext?: () => void;
  onSelect?: (account: string) => void;
};

const accounts = [
  { id: "premium", title: "Premium Account", number: "•••• 4589", balance: "$2,500.00" },
  { id: "saving", title: "Savings Account", number: "•••• 7812", balance: "$8,500.00" },
  { id: "current", title: "Current Account", number: "•••• 9012", balance: "$3,500.00" }
];

export default function CreditCardAccountModal({
  onBack, onNext, onSelect
}: Props) {
  const [selected, setSelected] = useState("premium");

  function confirm() {
    const account = accounts.find(a => a.id === selected);
    if (account) onSelect?.(account.title);
    onNext?.();
  }

  return (
    <View style={s.page}>
      <View style={s.background}>
        <Text style={s.backgroundTitle}>Credit Card Payment</Text>
      </View>
      <View style={s.overlay}>
        <View style={s.modal}>
          <View style={s.handle} />
          <View style={s.header}>
            <Text style={s.title}>Select Account</Text>
            <TouchableOpacity onPress={onBack}>
              <Text style={s.close}>×</Text>
            </TouchableOpacity>
          </View>
          <Text style={s.subtitle}>Choose an account for your payment</Text>
          <ScrollView>
            {accounts.map(account => (
              <TouchableOpacity key={account.id}
                style={[s.item, selected === account.id && s.active]}
                onPress={() => setSelected(account.id)}>
                <View style={s.iconBox}><Text style={s.icon}>🏦</Text></View>
                <View style={s.info}>
                  <Text style={s.name}>{account.title}</Text>
                  <Text style={s.number}>{account.number}</Text>
                  <Text style={s.balance}>{account.balance}</Text>
                </View>
                <Text style={s.radio}>
                  {selected === account.id ? "◉" : "◯"}
                </Text>
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
  page: { flex: 1, backgroundColor: "#FFF" },
  background: { flex: 1, backgroundColor: "#F2F0FF", padding: 25 },
  backgroundTitle: { color: "#3525B5", fontSize: 25, fontWeight: "bold", marginTop: 30 },
  overlay: {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "#00000045",
  justifyContent: "flex-end"
},
  modal: { minHeight: 475, backgroundColor: "#FFF", borderTopLeftRadius: 26, borderTopRightRadius: 26, padding: 22 },
  handle: { width: 46, height: 5, borderRadius: 4, backgroundColor: "#DDD", alignSelf: "center", marginBottom: 22 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  title: { color: "#3525B5", fontSize: 22, fontWeight: "bold" },
  close: { fontSize: 30, color: "#999" },
  subtitle: { marginTop: 10, marginBottom: 24, color: "#888" },
  item: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#EEE", borderRadius: 13, padding: 13, marginBottom: 12 },
  active: { borderColor: "#3525B5", backgroundColor: "#F7F5FF" },
  iconBox: { width: 47, height: 47, borderRadius: 12, backgroundColor: "#EEEAFE", alignItems: "center", justifyContent: "center" },
  icon: { fontSize: 24 },
  info: { flex: 1, marginLeft: 12 },
  name: { color: "#333", fontWeight: "bold" },
  number: { color: "#999", fontSize: 12, marginTop: 5 },
  balance: { color: "#3525B5", fontWeight: "bold", marginTop: 7 },
  radio: { color: "#3525B5", fontSize: 24 },
  button: { backgroundColor: "#3525B5", borderRadius: 11, padding: 17, alignItems: "center", marginTop: 18 },
  white: { color: "#FFF", fontWeight: "bold" }
});
