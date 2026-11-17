
import React, { useState } from "react";
import { Text, Alert } from "react-native";
import {
  Page, Heading, Field, Menu,
  Info, ScreenProps
} from "./EmeraldUI";

const branches = [
  { name: "Алматы бөлімшесі", city: "Алматы", address: "Үлгі мекенжай №1" },
  { name: "Астана бөлімшесі", city: "Астана", address: "Үлгі мекенжай №2" },
  { name: "Шымкент бөлімшесі", city: "Шымкент", address: "Үлгі мекенжай №3" }
];

export default function Branch({ onBack }: ScreenProps) {
  const [query, setQuery] = useState("");

  const results = branches.filter(item =>
    `${item.name} ${item.city}`
      .toLocaleLowerCase("kk")
      .includes(query.toLocaleLowerCase("kk"))
  );

  return (
    <Page title="Банк бөлімшелері" onBack={onBack}>
      <Heading
        title="Бөлімшені табу"
        subtitle="Қала атауын енгізіп, бөлімшелерді қараңыз."
      />

      <Field label="Қала" value={query}
        onChangeText={setQuery} placeholder="Қала атауы" />

      {results.map(item => (
        <Menu
          key={item.name}
          icon="📍"
          title={item.name}
          subtitle={item.address}
          onPress={() => Alert.alert(
            item.name,
            `Қала: ${item.city}\nМекенжай: ${item.address}\n\nБұл нақты бөлімше емес.`
          )}
        />
      ))}

      {results.length === 0 && <Text>Бөлімше табылмады.</Text>}

      <Info text="Бұл тізім оқу жобасына арналған. Нақты филиалдардың мекенжайлары көрсетілмеген." />
    </Page>
  );
}
