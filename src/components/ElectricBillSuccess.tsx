
import React from "react";
import {
  Page, Success, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function ElectricBillSuccess({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const latest = bank.transactions[0];

  return (
    <Page title="Төлем нәтижесі" onBack={onBack}>
      <Success
        title="Төлем сәтті аяқталды!"
        subtitle="Электр энергиясы бойынша демо операция"
      />

      <Card>
        <Detail label="Қызмет" value="Электр энергиясы" />
        <Detail label="Компания" value={bank.transfer.recipient} />
        <Detail label="Дербес шот" value={bank.transfer.card} />
        <Detail
          label="Төленген сома"
          value={`${Math.abs(latest?.amount ?? 0).toLocaleString("kk-KZ")} ₸`}
        />
        <Detail label="Комиссия" value="0 ₸" />
        <Detail label="Мәртебе" value="Демо орындалды" />
      </Card>

      <Button
        title="Тағы төлем жасау"
        onPress={() => onNavigate("ElectricBillEmpty")}
      />

      <Button
        title="Операциялар тарихы"
        secondary
        onPress={() => onNavigate("TransactionReportList")}
      />

      <Button
        title="Басты бетке оралу"
        secondary
        onPress={() => onNavigate("Home")}
      />

      <Info text="Нақты электр энергиясы шотына қаражат түскен жоқ." />
    </Page>
  );
}
