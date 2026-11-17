
import React from "react";
import { Text, StyleSheet } from "react-native";
import {
  Page, Heading, Card, Menu,
  Button, Info, ScreenProps, C
} from "./EmeraldUI";

const currencies = [
  { icon: "🇺🇸", name: "АҚШ доллары", code: "USD" },
  { icon: "🇪🇺", name: "Еуро", code: "EUR" },
  { icon: "🇬🇧", name: "Фунт стерлинг", code: "GBP" },
  { icon: "🇰🇿", name: "Қазақстан теңгесі", code: "KZT" }
];

export default function ExchangeRate({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Валюта бағамы" onBack={onBack}>
      <Heading
        title="Валюта айырбастау"
        subtitle="Валюталарды таңдап, айырбастау есебін жасаңыз."
      />

      <Card dark>
        <Text style={s.cardTitle}>Fiksik Exchange</Text>
        <Text style={s.cardSubtitle}>
          Валюталарға арналған ақпараттық бөлім
        </Text>
      </Card>

      {currencies.map(item => (
        <Menu
          key={item.code}
          icon={item.icon}
          title={item.name}
          subtitle={item.code}
          onPress={() => onNavigate("ExchangeEmpty")}
        />
      ))}

      <Button
        title="Валюта айырбастау"
        onPress={() => onNavigate("ExchangeEmpty")}
      />

      <Info text="Нақты валюта бағамдары қосылмаған. Бұл экран нарықтағы ағымдағы бағамды көрсетпейді." />
    </Page>
  );
}

const s = StyleSheet.create({
  cardTitle: {
    fontSize: 23,
    color: C.white,
    fontWeight: "800",
    marginBottom: 10
  },
  cardSubtitle: {
    color: C.light,
    fontSize: 13
  }
});
