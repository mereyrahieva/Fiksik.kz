
import React, { useState } from "react";
import {
  View, Text, ScrollView,
  TouchableOpacity, StyleSheet
} from "react-native";

type Props = {
  onBack?: () => void;
  onNext?: () => void;
  onSelect?: (deposit: string) => void;
};

const deposits = [
  { id: "flex", name: "Flexible Savings", months: "No fixed term", rate: "3.0%" },
  { id: "basic", name: "Fixed Savings", months: "6 months", rate: "4.5%" },
  { id: "plus", name: "Premium Savings", months: "12 months", rate: "5.5%" },
  { id: "long", name: "Long Term Savings", months: "24 months", rate: "6.0%" }
];

export default function SaveOnlineDepositPicker({
  onBack, onNext, onSelect
}: Props) {
  const [selected, setSelected] = useState("plus");
  const current = deposits.find(d => d.id === selected);

  function confirm() {
    if (current) onSelect?.(current.name);
    onNext?.();
  }

  return (
    <View style={s.page}>
      <View style={s.background}>
        <Text style={s.backgroundTitle}>Savings Plans</Text>
      </View>

      <View style={s.overlay}>
        <View style={s.sheet}>
          <View style={s.handle} />
          <View style={s.header}>
            <Text style={s.title}>Select Savings Plan</Text>
            <TouchableOpacity onPress={onBack}>
              <Text style={s.close}>×</Text>
            </TouchableOpacity>
          </View>

          <Text style={s.subtitle}>Choose a deposit product</Text>

          <ScrollView>
            {deposits.map(deposit => (
              <TouchableOpacity
                key={deposit.id}
                style={[s.item, selected === deposit.id && s.active]}
                onPress={() => setSelected(deposit.id)}
              >
                <View style={s.iconBox}>
                  <Text style={s.icon}>💰</Text>
                </View>
                <View style={s.info}>
                  <Text style={s.name}>{deposit.name}</Text>
                  <Text style={s.details}>{deposit.months}</Text>
                  <Text style={s.rate}>
                    Example annual rate: {deposit.rate}
                  </Text>
                </View>
                <Text style={s.radio}>
                  {selected === deposit.id ? "◉" : "◯"}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={s.note}>Illustrative rates, not real bank offers.</Text>
          <TouchableOpacity style={s.button} onPress={confirm}>
            <Text style={s.white}>Select Plan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  background: { flex: 1, backgroundColor: "#F4F2FF", padding: 24 },
  backgroundTitle: { color: "#3525B5", fontSize: 25, fontWeight: "bold", marginTop: 30 },

overlay: {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "#00000040",
  justifyContent: "flex-end",
},

  sheet: {
    height: "82%", backgroundColor: "#FFF",
    borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 22
  },
  handle: {
    width: 47, height: 5, backgroundColor: "#DDD",
    borderRadius: 3, alignSelf: "center", marginBottom: 22
  },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  title: { color: "#3525B5", fontSize: 22, fontWeight: "bold" },
  close: { color: "#999", fontSize: 30 },
  subtitle: { color: "#888", marginTop: 10, marginBottom: 25 },
  item: {
    flexDirection: "row", alignItems: "center",
    padding: 15, borderWidth: 1,
    borderColor: "#EEE", borderRadius: 13, marginBottom: 12
  },
  active: { borderColor: "#3525B5", backgroundColor: "#F7F6FF" },
  iconBox: {
    width: 45, height: 45, borderRadius: 12,
    backgroundColor: "#EEEAFE", justifyContent: "center", alignItems: "center"
  },
  icon: { fontSize: 23 },
  info: { flex: 1, marginLeft: 12 },
  name: { fontSize: 14, color: "#333", fontWeight: "bold" },
  details: { color: "#999", fontSize: 12, marginTop: 5 },
  rate: { color: "#3525B5", fontSize: 12, marginTop: 6 },
  radio: { color: "#3525B5", fontSize: 23 },
  note: { color: "#999", textAlign: "center", marginVertical: 12, fontSize: 11 },
  button: {
    backgroundColor: "#3525B5", padding: 17,
    alignItems: "center", borderRadius: 11
  },
  white: { color: "#FFF", fontWeight: "bold" }
});
