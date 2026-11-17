
import React, { useState } from "react";
import {
  Page, Heading, Menu, Card,
  Detail, Button, ScreenProps
} from "./EmeraldUI";

export default function ExchangeCurrencyModal({
  onNavigate, onBack
}: ScreenProps) {
  const [selected, setSelected] = useState("USD");

  return (
    <Page title="Валютаны таңдау" onBack={onBack}>
      <Heading
        title="Айырбастау валютасы"
        subtitle="Қажетті валютаны таңдаңыз."
      />

      <Menu icon="🇺🇸" title="АҚШ доллары"
        subtitle="USD"
        onPress={() => setSelected("USD")} />

      <Menu icon="🇪🇺" title="Еуро"
        subtitle="EUR"
        onPress={() => setSelected("EUR")} />

      <Menu icon="🇬🇧" title="Фунт стерлинг"
        subtitle="GBP"
        onPress={() => setSelected("GBP")} />

      <Card>
        <Detail label="Таңдалған валюта" value={selected} />
        <Detail label="Негізгі валюта" value="KZT" />
      </Card>

      <Button
        title="Айырбастау формасына оралу"
        onPress={() => onNavigate("ExchangeEmpty")}
      />
    </Page>
  );
}
