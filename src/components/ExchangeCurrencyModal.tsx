
import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, StyleSheet
} from "react-native";

type Props = {
  onBack?: () => void;
  onSelect?: (currency: string) => void;
};

const currencies = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "KZT", name: "Kazakhstani Tenge", flag: "🇰🇿" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧" },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵" },
  { code: "CNY", name: "Chinese Yuan", flag: "🇨🇳" }
];

export default function ExchangeCurrencyModal({ onBack, onSelect }: Props) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("USD");

  function choose(code: string) {
    setSelected(code);
    onSelect?.(code);
  }

  return (
    <View style={s.page}>
      <View style={s.overlay}>
        <View style={s.sheet}>
          <View style={s.handle} />
          <View style={s.header}>
            <Text style={s.heading}>Select Currency</Text>
            <TouchableOpacity onPress={onBack}>
              <Text style={s.close}>×</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={s.search} value={search}
            onChangeText={setSearch}
            placeholder="Search currency"
            autoCapitalize="characters"
          />
          <ScrollView>
            {currencies.filter(c =>
              `${c.code} ${c.name}`.toLowerCase().includes(search.toLowerCase())
            ).map(currency => (
              <TouchableOpacity
                key={currency.code} style={s.row}
                onPress={() => choose(currency.code)}
              >
                <Text style={s.flag}>{currency.flag}</Text>
                <View style={s.info}>
                  <Text style={s.code}>{currency.code}</Text>
                  <Text style={s.name}>{currency.name}</Text>
                </View>
                <Text style={s.check}>{selected === currency.code ? "◉" : "◯"}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity style={s.button} onPress={onBack}>
            <Text style={s.white}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#F4F1FF" },
  overlay: { flex: 1, justifyContent: "flex-end", backgroundColor: "#3525B533" },
  sheet: { backgroundColor: "#fff", borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 22, height: "85%" },
  handle: { width: 45, height: 5, borderRadius: 3, backgroundColor: "#ddd", alignSelf: "center", marginBottom: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  heading: { color: "#3525B5", fontWeight: "bold", fontSize: 23 },
  close: { fontSize: 29, color: "#999" },
  search: { backgroundColor: "#F5F5F9", paddingHorizontal: 15, height: 50, borderRadius: 12, marginVertical: 20 },
  row: { flexDirection: "row", alignItems: "center", paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: "#eee" },
  flag: { fontSize: 27, marginRight: 14 },
  info: { flex: 1 },
  code: { color: "#333", fontSize: 16, fontWeight: "bold" },
  name: { color: "#999", fontSize: 12, marginTop: 5 },
  check: { color: "#3525B5", fontSize: 24 },
  button: { padding: 17, backgroundColor: "#3525B5", alignItems: "center", borderRadius: 11, marginTop: 18 },
  white: { color: "#fff", fontWeight: "bold" }
});
