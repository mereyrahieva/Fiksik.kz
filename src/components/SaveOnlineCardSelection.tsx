
import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = {
  onBack?: () => void;
  onNext?: () => void;
};

const cards = [
  { id: 1, name: "VISA Platinum", number: "•••• 4589", balance: 2500 },
  { id: 2, name: "Mastercard Gold", number: "•••• 7812", balance: 8500 },
  { id: 3, name: "VISA Classic", number: "•••• 9012", balance: 1500 }
];

export default function SaveOnlineCardSelection({
  onBack, onNext
}: Props) {
  const [selected, setSelected] = useState(1);
  const card = cards.find(item => item.id === selected);

  function proceed() {
    if (!card) {
      Alert.alert("Card", "Select a payment card");
      return;
    }
    onNext?.();
  }

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>Select Card</Text>
      </View>

      <ScrollView contentContainerStyle={s.body}>
        <Text style={s.title}>Choose Payment Card</Text>
        <Text style={s.subtitle}>
          Select the card to fund your savings.
        </Text>

        {cards.map(item => (
          <TouchableOpacity
            key={item.id}
            style={[s.card, selected === item.id && s.selected]}
            onPress={() => setSelected(item.id)}
          >
            <View style={s.iconBox}>
              <Text style={s.icon}>💳</Text>
            </View>
            <View style={s.info}>
              <Text style={s.cardName}>{item.name}</Text>
              <Text style={s.number}>{item.number}</Text>
              <Text style={s.balance}>
                ${item.balance.toFixed(2)}
              </Text>
            </View>
            <Text style={s.radio}>
              {selected === item.id ? "◉" : "◯"}
            </Text>
          </TouchableOpacity>
        ))}

        <View style={s.summary}>
          <Text style={s.summaryTitle}>Selected Card</Text>
          <Text style={s.summaryText}>{card?.name}</Text>
          <Text style={s.summaryText}>{card?.number}</Text>
          <Text style={s.summaryBalance}>
            Available: ${card?.balance.toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity style={s.button} onPress={proceed}>
          <Text style={s.white}>Continue</Text>
        </TouchableOpacity>
        <Text style={s.note}>Demo cards only</Text>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  header: {
    height: 95, backgroundColor: "#3525B5",
    flexDirection: "row", alignItems: "center",
    paddingHorizontal: 22
  },
  back: { color: "#FFF", fontSize: 31, marginRight: 22 },
  headerTitle: { color: "#FFF", fontSize: 20, fontWeight: "bold" },
  body: { padding: 23, paddingBottom: 50 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 9, marginBottom: 30 },
  card: {
    flexDirection: "row", alignItems: "center",
    borderWidth: 1, borderColor: "#EEE",
    borderRadius: 13, padding: 15, marginBottom: 13
  },
  selected: {
    backgroundColor: "#F6F4FF", borderColor: "#3525B5"
  },
  iconBox: {
    backgroundColor: "#EEEAFE", width: 50, height: 50,
    borderRadius: 13, justifyContent: "center", alignItems: "center"
  },
  icon: { fontSize: 25 },
  info: { flex: 1, marginLeft: 13 },
  cardName: { fontWeight: "bold", color: "#333" },
  number: { color: "#999", marginTop: 6, fontSize: 12 },
  balance: { color: "#3525B5", marginTop: 7, fontWeight: "bold" },
  radio: { color: "#3525B5", fontSize: 24 },
  summary: {
    backgroundColor: "#F5F3FF", borderRadius: 13,
    padding: 19, marginTop: 20
  },
  summaryTitle: { color: "#3525B5", fontWeight: "bold" },
  summaryText: { color: "#777", marginTop: 9 },
  summaryBalance: { color: "#3525B5", marginTop: 14, fontWeight: "bold" },
  button: {
    backgroundColor: "#3525B5", padding: 17,
    borderRadius: 11, alignItems: "center", marginTop: 30
  },
  white: { color: "#FFF", fontWeight: "bold" },
  note: { color: "#AAA", textAlign: "center", marginTop: 15 }
});
