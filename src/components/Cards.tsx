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
  {
    id: 1, type: "VISA Platinum",
    number: "•••• 4589", balance: "$12,500.00",
    color: "#25379C"
  },
  {
    id: 2, type: "Mastercard Gold",
    number: "•••• 7812", balance: "$8,500.00",
    color: "#3525B5"
  },
  {
    id: 3, type: "VISA Classic",
    number: "•••• 9012", balance: "$3,500.00",
    color: "#474C78"
  }
];

export default function Cards({ onBack, onNext }: Props) {
  const [selected, setSelected] = useState(1);
  const activeCard = cards.find(c => c.id === selected);

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>My Cards</Text>
      </View>

      <ScrollView contentContainerStyle={s.content}>
        <Text style={s.title}>Your Bank Cards</Text>
        <Text style={s.subtitle}>
          Select a card to see its details
        </Text>

        {cards.map(card => (
          <TouchableOpacity
            key={card.id}
            onPress={() => setSelected(card.id)}
            style={[
              s.card,
              { backgroundColor: card.color },
              selected === card.id && s.activeCard
            ]}
          >
            <View style={s.cardTop}>
              <Text style={s.white}>{card.type}</Text>
              <Text style={s.chip}>▦</Text>
            </View>
            <Text style={s.number}>{card.number}</Text>
            <Text style={s.cardLabel}>Available Balance</Text>
            <View style={s.cardBottom}>
              <Text style={s.balance}>{card.balance}</Text>
              <Text style={s.brand}>
                {card.type.startsWith("VISA") ? "VISA" : "MC"}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={s.info}>
          <Text style={s.infoTitle}>Selected Card</Text>
          <Text style={s.infoText}>{activeCard?.type}</Text>
          <Text style={s.infoText}>{activeCard?.number}</Text>
          <Text style={s.status}>Active</Text>
        </View>

        <TouchableOpacity style={s.button} onPress={onNext}>
          <Text style={s.buttonText}>Card Details</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.addButton}
          onPress={() =>
            Alert.alert("Demo", "New card requests are unavailable")
          }
        >
          <Text style={s.addText}>+ Add New Card</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#F9F9FC" },
  header: {
    height: 95, backgroundColor: "#3525B5",
    flexDirection: "row", alignItems: "center",
    paddingHorizontal: 22
  },
  back: { color: "#fff", fontSize: 31, marginRight: 22 },
  headerTitle: {
    color: "#fff", fontSize: 20, fontWeight: "bold"
  },
  content: { padding: 22, paddingBottom: 45 },
  title: { fontSize: 25, fontWeight: "bold", color: "#3525B5" },
  subtitle: { color: "#888", marginTop: 8, marginBottom: 25 },
  card: {
    borderRadius: 18, padding: 22,
    height: 180, marginBottom: 17,
    justifyContent: "space-between"
  },
  activeCard: {
    borderWidth: 3, borderColor: "#9B90ED"
  },
  cardTop: { flexDirection: "row", justifyContent: "space-between" },
  white: { color: "#fff", fontWeight: "bold" },
  chip: { color: "#D9CE9A", fontSize: 25 },
  number: { color: "#fff", fontSize: 20, letterSpacing: 2 },
  cardLabel: { color: "#D1D6FF", fontSize: 11 },
  cardBottom: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center"
  },
  balance: { color: "#fff", fontSize: 23, fontWeight: "bold" },
  brand: { color: "#fff", fontWeight: "bold", fontSize: 22 },
  info: {
    backgroundColor: "#EEEAFE", padding: 18,
    borderRadius: 13, marginTop: 10
  },
  infoTitle: { color: "#3525B5", fontWeight: "bold" },
  infoText: { color: "#666", marginTop: 10 },
  status: { color: "#25A777", marginTop: 12 },
  button: {
    backgroundColor: "#3525B5", padding: 17,
    borderRadius: 11, alignItems: "center", marginTop: 27
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  addButton: {
    borderWidth: 1, borderColor: "#3525B5",
    padding: 16, alignItems: "center",
    borderRadius: 11, marginTop: 13
  },
  addText: { color: "#3525B5", fontWeight: "bold" }
});