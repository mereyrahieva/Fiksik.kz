
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Menu, Button,
  Info, ScreenProps
} from "./EmeraldUI";

export default function Language({ onBack }: ScreenProps) {
  const [selected, setSelected] = useState("Қазақша");

  const languages = [
    { name: "Қазақша", icon: "🇰🇿" },
    { name: "Орысша", icon: "🇷🇺" },
    { name: "Ағылшынша", icon: "🇬🇧" }
  ];

  function save() {
    if (selected !== "Қазақша") {
      Alert.alert(
        "Тіл қолжетімсіз",
        "Әзірше қосымша тек қазақ тілінде жұмыс істейді."
      );
      return;
    }
    Alert.alert("Сақталды", "Қазақ тілі таңдалды.", [
      { text: "Жарайды", onPress: onBack }
    ]);
  }

  return (
    <Page title="Тіл баптаулары" onBack={onBack}>
      <Heading title="Қосымша тілі"
        subtitle="Қолжетімді тіл: қазақша" />

      {languages.map(item => (
        <Menu
          key={item.name}
          icon={item.icon}
          title={`${item.name}${selected === item.name ? " ✓" : ""}`}
          onPress={() => setSelected(item.name)}
        />
      ))}

      <Button title="Сақтау" onPress={save} />
      <Info text="Орысша және ағылшынша интерфейс әлі аударылмаған." />
    </Page>
  );
}
