
import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet
} from "react-native";

type Props = {
  onBack?: () => void;
  onSelect?: (bank: string) => void;
};

const banks = [
  "Halyk Bank", "Kaspi Bank", "Bank CenterCredit",
  "ForteBank", "Freedom Bank", "Altyn Bank"
];

export default function TransferBankPicker({ onBack, onSelect }: Props) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("Halyk Bank");

  function choose(bank: string) {
    setSelected(bank);
  }

  function confirm() {
    onSelect?.(selected);
    onBack?.();
  }

  return (
    <View style={s.page}>
      <View style={s.overlay}>
        <View style={s.sheet}>
          <View style={s.handle} />
          <View style={s.header}>
            <Text style={s.title}>Select Bank</Text>
            <TouchableOpacity onPress={onBack}><Text style={s.close}>×</Text></TouchableOpacity>
          </View>
          <TextInput
            style={s.search} placeholder="Search bank"
            value={search} onChangeText={setSearch}
          />
          <ScrollView>
            {banks.filter(b => b.toLowerCase().includes(search.toLowerCase())).map(bank => (
              <TouchableOpacity
                key={bank} style={[s.bank, selected === bank && s.active]}
                onPress={() => choose(bank)}
              >
                <View style={s.iconBox}><Text style={s.icon}>🏦</Text></View>
                <Text style={s.bankName}>{bank}</Text>
                <Text style={s.radio}>{selected === bank ? "◉" : "◯"}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity style={s.button} onPress={confirm}>
            <Text style={s.white}>Confirm Bank</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#F2EFFA" },
  overlay: { flex: 1, justifyContent: "flex-end", backgroundColor: "#3525B52B" },
  sheet: { height: "83%", borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 22, backgroundColor: "#fff" },
  handle: { width: 45, height: 5, borderRadius: 4, backgroundColor: "#ddd", alignSelf: "center", marginBottom: 20 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  title: { color: "#3525B5", fontSize: 23, fontWeight: "bold" },
  close: { color: "#999", fontSize: 30 },
  search: { backgroundColor: "#F4F4F8", height: 50, borderRadius: 10, paddingHorizontal: 14, marginVertical: 20 },
  bank: { flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderColor: "#eee", padding: 12, borderRadius: 10 },
  active: { backgroundColor: "#F5F3FF" },
  iconBox: { width: 43, height: 43, backgroundColor: "#EEEAFE", borderRadius: 12, alignItems: "center", justifyContent: "center" },
  icon: { fontSize: 23 },
  bankName: { marginLeft: 14, flex: 1, color: "#333", fontWeight: "600" },
  radio: { color: "#3525B5", fontSize: 24 },
  button: { marginTop: 15, backgroundColor: "#3525B5", padding: 17, borderRadius: 12, alignItems: "center" },
  white: { color: "#fff", fontWeight: "bold" }
});
