import React, { useState } from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function CardDetail({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [showNumber, setShowNumber] = useState(false);
  const [blocked, setBlocked] = useState(false);

  return (
    <Page title="Карта мәліметтері" onBack={onBack}>
      <Heading title="Негізгі карта"
        subtitle="Карта ақпаратын және баптауларын қараңыз." />
      <Card>
        <Detail label="Карта ұстаушысы" value={bank.name} />
        <Detail label="Банк" value="Fiksik Bank" />
        <Detail label="Карта" value={
          showNumber ? "4111 1111 1111 4589" : "•••• •••• •••• 4589"
        } />
        <Detail label="Мерзімі" value="12/28 (демо)" />
        <Detail label="Валюта" value="KZT" />
        <Detail label="Мәртебе"
          value={blocked ? "Демо бұғатталған" : "Белсенді"} />
      </Card>
      <Button title={showNumber ? "Нөмірді жасыру" : "Нөмірді көрсету"}
        secondary onPress={() => setShowNumber(!showNumber)} />
      <Button title={blocked ? "Белсендіру" : "Бұғаттау"}
        secondary onPress={() => setBlocked(!blocked)} />
      <Button title="Ақша аудару"
        onPress={() => onNavigate("TransferEmpty")} />
      <Info text="Карта нөмірі мен бұғаттау функциялары демонстрациялық." />
    </Page>
  );
}