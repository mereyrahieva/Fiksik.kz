
import React, { useState } from "react";
import {
  Page, Heading, Card, Detail,
  Menu, Button, Info, ScreenProps
} from "./EmeraldUI";

export default function SaveOnlineMenu({
  onNavigate, onBack
}: ScreenProps) {
  const [type, setType] = useState("Еркін жинақ");

  return (
    <Page title="Депозит ашу" onBack={onBack}>
      <Heading
        title="Ақшаңызды жинақтаңыз"
        subtitle="Жинақ түрін таңдап, өз мақсатыңызға ақша жинаңыз."
      />

      <Menu
        icon={type === "Еркін жинақ" ? "✅" : "💰"}
        title="Еркін жинақ"
        subtitle="Қажет уақытта ақша толықтыруға арналған"
        onPress={() => setType("Еркін жинақ")}
      />

      <Menu
        icon={type === "Мерзімді жинақ" ? "✅" : "📈"}
        title="Мерзімді жинақ"
        subtitle="Белгілі мерзімге жинақтау"
        onPress={() => setType("Мерзімді жинақ")}
      />

      <Card>
        <Detail label="Таңдалған жинақ" value={type} />
        <Detail label="Валюта" value="KZT" />
        <Detail label="Бастапқы сома" value="1 000 ₸ бастап (демо)" />
        <Detail label="Мөлшерлеме" value="Белгіленбеген" />
      </Card>

      <Button
        title="Депозит ашуды бастау"
        onPress={() => onNavigate("SaveOnlineEmpty")}
      />

      <Button
        title="Пайыздық мөлшерлемелер"
        secondary
        onPress={() => onNavigate("InterestRate")}
      />

      <Info text="Нақты депозит шарттары банк серверінен алынбайды." />
    </Page>
  );
}
