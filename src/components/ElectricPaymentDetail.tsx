import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function ElectricPaymentDetail({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Электр төлемі" onBack={onBack}>
      <Heading
        title="Төлем туралы мәлімет"
        subtitle="Электр энергиясына төлем жасау"
      />

      <Card>
        <Detail label="Қызмет" value="Электр энергиясы" />
        <Detail label="Төлем картасы" value="•••• 4589" />
        <Detail label="Валюта" value="KZT" />
        <Detail label="Комиссия" value="0 ₸" />
        <Detail
          label="Қолжетімді баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`}
        />
      </Card>

      <Button
        title="Электр ақысын төлеу"
        onPress={() => onNavigate("ElectricBillEmpty")}
      />

      <Button
        title="Төлемдер тарихын қарау"
        secondary
        onPress={() => onNavigate("PaymentHistoryElectric")}
      />

      <Button
        title="Барлық төлемдер"
        secondary
        onPress={() => onNavigate("Bills")}
      />

      <Info text="Нақты электр энергиясы компаниясының деректері қосылмаған." />
    </Page>
  );
}