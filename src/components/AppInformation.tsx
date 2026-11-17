
import React from "react";
import { Text } from "react-native";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps, C
} from "./EmeraldUI";

export default function AppInformation({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Қосымша туралы" onBack={onBack}>
      <Heading title="Fiksik Bank"
        subtitle="Қаржыны басқаруға арналған мобильді қосымша" />

      <Card dark>
        <Text style={{
          color: C.white, textAlign: "center",
          fontSize: 50, fontWeight: "900"
        }}>F</Text>
        <Text style={{
          color: C.light, textAlign: "center",
          fontSize: 19, fontWeight: "800", marginTop: 8
        }}>FIKSIK BANK</Text>
      </Card>

      <Card>
        <Detail label="Платформа" value="React Native / Expo" />
        <Detail label="Тіл" value="Қазақша" />
        <Detail label="Тақырып" value="Изумруд жасыл" />
        <Detail label="Қосымша" value="Студенттік демо жоба" />
      </Card>

      <Button title="Басты бет"
        onPress={() => onNavigate("Home")} />
      <Info text="Бұл қосымша нақты лицензияланған банк қызметін көрсетпейді." />
    </Page>
  );
}
