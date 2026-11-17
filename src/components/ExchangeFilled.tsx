
import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function ExchangeFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Айырбастау нәтижесі" onBack={onBack}>
      <Heading
        title="Айырбастау мәліметтері"
        subtitle="Таңдалған валюта бойынша есеп ақпараты"
      />

      <Card>
        <Detail label="Бастапқы валюта" value="KZT" />
        <Detail label="Қажетті валюта" value="USD" />
        <Detail
          label="Енгізілген сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`}
        />
        <Detail label="Бағам" value="Қолжетімсіз" />
        <Detail label="Алу сомасы" value="Есептелмеді" />
      </Card>

      <Button
        title="Басқа соманы енгізу"
        onPress={() => onNavigate("ExchangeEmpty")}
      />

      <Button
        title="Валюта бағамдары"
        secondary
        onPress={() => onNavigate("ExchangeRate")}
      />

      <Info text="Нақты бағам берілмегендіктен конвертация жасалмайды және баланстан ақша алынбайды." />
    </Page>
  );
}
