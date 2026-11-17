import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function ElectricPaymentDetail({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Электр энергиясы" onBack={onBack}>
      <Heading title="Электр төлемінің ақпараты"
        subtitle="Қызмет бойынша төлем жасау" />
      <Card>
        <Detail label="Қызмет" value="Электр энергиясы" />
        <Detail label="Төлем картасы" value="•••• 4589" />
        <Detail label="Комиссия" value="0 ₸ (демо)" />
        <Detail label="Баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`} />
      </Card>
      <Button title="Төлем жасау"
        onPress={() => onNavigate("ElectricBillEmpty")} />
      <Button title="Төлемдер тарихы" secondary
        onPress={() => onNavigate("PaymentHistoryElectric")} />
      <Info text="Бұл бөлім нақты коммуналдық ұйыммен байланыспайды." />
    </Page>
  );
}