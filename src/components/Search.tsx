
import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import {
  Page, Heading, Menu, C, ScreenProps
} from "./EmeraldUI";

const services = [
  { title: "Ақша аудару", icon: "⇄", route: "TransferEmpty" },
  { title: "Валюта айырбастау", icon: "💱", route: "ExchangeEmpty" },
  { title: "Банк бөлімшелері", icon: "📍", route: "Branch" },
  { title: "Пайыздық мөлшерлемелер", icon: "％", route: "InterestRate" },
  { title: "Валюта бағамдары", icon: "📈", route: "ExchangeRate" },
  { title: "Қосымша тілі", icon: "🌐", route: "Language" },
  { title: "Карталар", icon: "💳", route: "Cards" },
  { title: "Депозиттер", icon: "💰", route: "Deposits" },
  { title: "Баптаулар", icon: "⚙️", route: "Settings" }
];

export default function Search({
  onNavigate, onBack
}: ScreenProps) {
  const [query, setQuery] = useState("");

  const results = services.filter(item =>
    item.title.toLocaleLowerCase("kk")
      .includes(query.toLocaleLowerCase("kk"))
  );

  return (
    <Page title="Қызметтерді іздеу" onBack={onBack}>
      <Heading title="Қандай қызмет керек?"
        subtitle="Банк қызметін атауы бойынша іздеңіз." />

      <TextInput
        style={s.input}
        placeholder="Қызметті іздеу..."
        placeholderTextColor="#98ADA3"
        value={query}
        onChangeText={setQuery}
      />

      <View style={{ marginTop: 25 }}>
        {results.map(item => (
          <Menu
            key={item.route}
            icon={item.icon}
            title={item.title}
            onPress={() => onNavigate(item.route)}
          />
        ))}

        {results.length === 0 && (
          <Text style={s.empty}>Қызмет табылмады.</Text>
        )}
      </View>
    </Page>
  );
}

const s = StyleSheet.create({
  input: {
    backgroundColor: C.white,
    height: 55, borderRadius: 14,
    borderColor: C.border, borderWidth: 1,
    paddingHorizontal: 16, color: C.text
  },
  empty: { textAlign: "center", marginTop: 30, color: C.muted }
});
