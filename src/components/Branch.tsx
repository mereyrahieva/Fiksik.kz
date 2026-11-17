
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Menu,
  Card, Detail, Button, Info, ScreenProps
} from "./EmeraldUI";

const demoBranches = [
  { city: "Алматы", address: "Демо бөлімше — Алматы" },
  { city: "Астана", address: "Демо бөлімше — Астана" },
  { city: "Шымкент", address: "Демо бөлімше — Шымкент" }
];

export default function Branch({
  onNavigate, onBack
}: ScreenProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");

  const branches = demoBranches.filter(item =>
    item.city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Page title="Филиалдар" onBack={onBack}>
      <Heading
        title="Банк бөлімшелері"
        subtitle="Қала бойынша бөлімшелерді іздеңіз."
      />

      <Field
        label="Қала"
        placeholder="Қала атауын енгізіңіз"
        value={query}
        onChangeText={setQuery}
      />

      {branches.map(item => (
        <Menu
          key={item.city}
          icon="📍"
          title={item.city}
          subtitle={item.address}
          onPress={() => setSelected(item.city)}
        />
      ))}

      {!!selected && (
        <Card>
          <Detail label="Қала" value={selected} />
          <Detail label="Мәртебе" value="Демо бөлімше" />
        </Card>
      )}

      <Button
        title="Бөлімше туралы ақпарат"
        onPress={() => Alert.alert(
          "Ақпарат",
          "Бұл тізімде нақты мекенжайлар мен жұмыс кестесі көрсетілмеген."
        )}
      />

      <Info text="Филиалдар үлгі ретінде берілген. Нақты бөлімшелер мен картаны көрсету үшін банк дереккөзі қажет." />
    </Page>
  );
}
