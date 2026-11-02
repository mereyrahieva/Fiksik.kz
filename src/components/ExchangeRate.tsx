
import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet
} from "react-native";

type Props = { onBack?: () => void; onExchange?: () => void };

const rates = [
  { flag: "🇺🇸", code: "USD", name: "US Dollar", buy: "490.00", sell: "495.00" },
  { flag: "🇪🇺", code: "EUR", name: "Euro", buy: "520.00", sell: "528.00" },
  { flag: "🇬🇧", code: "GBP", name: "British Pound", buy: "610.00", sell: "620.00" },
  { flag: "🇨🇳", code: "CNY", name: "Chinese Yuan", buy: "67.00", sell: "69.00" }
];

export default function ExchangeRate({ onBack, onExchange }: Props) {
  const [selected, setSelected] = useState("USD");

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerText}>Exchange Rate</Text>
      </View>
      <ScrollView contentContainerStyle={s.body}>
        <Text style={s.heading}>Exchange Rates</Text>
        <Text style={s.subtitle}>Currency rates against KZT</Text>
        <View style={s.tableHeader}>
          <Text style={s.currencyHeader}>Currency</Text>
          <Text style={s.columnHeader}>Buy</Text>
          <Text style={s.columnHeader}>Sell</Text>
        </View>
        {rates.map(item => (
          <TouchableOpacity
            key={item.code}
            style={[s.rateRow, selected === item.code && s.selected]}
            onPress={() => setSelected(item.code)}
          >
            <View style={s.currency}>
              <Text style={s.flag}>{item.flag}</Text>
              <View>
                <Text style={s.code}>{item.code}</Text>
                <Text style={s.name}>{item.name}</Text>
              </View>
            </View>
            <Text style={s.value}>{item.buy}</Text>
            <Text style={s.value}>{item.sell}</Text>
          </TouchableOpacity>
        ))}
        <View style={s.summary}>
          <Text style={s.summaryText}>Selected currency: {selected}</Text>
          <Text style={s.note}>Sample rates only, not live exchange quotes.</Text>
        </View>
        <TouchableOpacity style={s.button} onPress={onExchange}>
          <Text style={s.white}>Exchange currency</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  header: { height: 95, flexDirection: "row", alignItems: "center", paddingHorizontal: 22, backgroundColor: "#3525B5" },
  back: { color: "#fff", fontSize: 30, marginRight: 25 },
  headerText: { color: "white", fontSize: 20, fontWeight: "bold" },
  body: { padding: 22 },
  heading: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  subtitle: { color: "#999", marginTop: 8, marginBottom: 25 },
  tableHeader: { flexDirection: "row", paddingVertical: 15, borderBottomWidth: 1, borderColor: "#eee" },
  currencyHeader: { flex: 2, color: "#777", fontWeight: "bold" },
  columnHeader: { flex: 1, color: "#777", textAlign: "right", fontWeight: "bold" },
  rateRow: { flexDirection: "row", alignItems: "center", paddingVertical: 17, borderBottomWidth: 1, borderColor: "#eee" },
  selected: { backgroundColor: "#F7F5FF" },
  currency: { flex: 2, flexDirection: "row", alignItems: "center" },
  flag: { fontSize: 27, marginRight: 10 },
  code: { fontWeight: "bold", color: "#333" },
  name: { color: "#999", fontSize: 11, marginTop: 4 },
  value: { flex: 1, textAlign: "right", fontWeight: "bold", color: "#3525B5", fontSize: 12 },
  summary: { marginTop: 27, backgroundColor: "#F4F2FF", padding: 17, borderRadius: 12 },
  summaryText: { color: "#3525B5", fontWeight: "bold" },
  note: { color: "#777", marginTop: 7, fontSize: 11 },
  button: { backgroundColor: "#3525B5", padding: 17, alignItems: "center", borderRadius: 11, marginTop: 27 },
  white: { color: "#fff", fontWeight: "bold" }
});
