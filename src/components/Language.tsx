
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Menu, Card,
  Detail, Button, Info, ScreenProps
} from "./EmeraldUI";

export default function Language({
  onNavigate, onBack
}: ScreenProps) {
  const [selected, setSelected] = useState("Қазақша");

  return (
    <Page title="Тіл баптаулары" onBack={onBack}>
      <Heading
        title="Қосымша тілі"
        subtitle="Қолданба тілін таңдаңыз."
      />

      <Menu
        icon="🇰🇿"
        title="Қазақша"
        subtitle="Қолданыстағы тіл"
        onPress={() => setSelected("Қазақша")}
      />

      <Menu
        icon="🇷🇺"
        title="Русский"
        subtitle="Аударма әлі қосылмаған"
        onPress={() => setSelected("Русский")}
      />

      <Menu
        icon="🇬🇧"
        title="English"
        subtitle="Translation is not available yet"
        onPress={() => setSelected("English")}
      />

      <Card>
        <Detail label="Таңдалған тіл" value={selected} />
      </Card>

      <Button
        title="Сақтау"
        onPress={() => {
          if (selected !== "Қазақша") {
            Alert.alert(
              "Әзірге қолжетімсіз",
              "Қазіргі нұсқада барлық экран қазақ тілінде жасалған."
            );
            return;
          }
          Alert.alert("Сақталды", "Қолданба тілі: қазақша.");
          onBack();
        }}
      />

      <Info text="Орысша және ағылшынша интерфейстер толық аударылғаннан кейін қосылады." />
    </Page>
  );
}
