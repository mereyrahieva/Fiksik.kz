import React from "react";
import {
  Page, Success, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function WithdrawSuccess({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const latest = bank.transactions[0];

  return (
    <Page title="Операция нәтижесі" onBack={onBack}>
      <Success title="Демо операция аяқталды!"
        subtitle="Қаражат алу нәтижесі" />
      <Card>
        <Detail label="Операция" value="Қаражат алу" />
        <Detail label="Карта" value="•••• 4589" />
        <Detail label="Сома"
          value={`${Math.abs(latest?.amount ?? 0).toLocaleString("kk-KZ")} ₸`} />
        <Detail label="Мәртебе" value="Демо орындалды" />
      </Card>
      <Button title="Балансты қарау"
        onPress={() => onNavigate("Accounts")} />
      <Button title="Басты бет" secondary
        onPress={() => onNavigate("Home")} />
      <Info text="Нақты қолма-қол ақша берілген жоқ." />
    </Page>
  );
}