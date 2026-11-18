
import React from "react";
import {
  Page, Success, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function CreditCardSuccess({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const latest = bank.transactions[0];

  return (
    <Page title="Төлем нәтижесі" onBack={onBack}>
      <Success
        title="Төлем сәтті орындалды!"
        subtitle="Несие картасына демо төлем"
      />

      <Card>
        <Detail label="Қызмет" value="Несие төлемі" />
        <Detail label="Несие картасы" value="•••• 8822" />
        <Detail
          label="Төленген сома"
          value={`${Math.abs(latest?.amount ?? 0).toLocaleString("kk-KZ")} ₸`}
        />
        <Detail label="Мәртебе" value="Демо орындалды" />
      </Card>

      <Button
        title="Несие картасы"
        onPress={() => onNavigate("CreditCardOverview")}
      />

      <Button
        title="Операциялар тарихы"
        secondary
        onPress={() => onNavigate("TransactionReportList")}
      />

      <Button
        title="Басты бет"
        secondary
        onPress={() => onNavigate("Home")}
      />

      <Info text="Нақты несие қарызы өтелмейді." />
    </Page>
  );
}
