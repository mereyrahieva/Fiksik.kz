import React from "react";
import {
  Page, Success, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function MobileRechargeSuccess({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const latest = bank.transactions[0];

  return (
    <Page title="Төлем нәтижесі" onBack={onBack}>
      <Success title="Демо төлем аяқталды!"
        subtitle="Телефон балансын толықтыру нәтижесі" />
      <Card>
        <Detail label="Қызмет" value="Ұялы байланыс" />
        <Detail label="Телефон" value={bank.transfer.recipient} />
        <Detail label="Сома"
          value={`${Math.abs(latest?.amount ?? 0).toLocaleString("kk-KZ")} ₸`} />
        <Detail label="Мәртебе" value="Демо орындалды" />
      </Card>
      <Button title="Тағы толықтыру"
        onPress={() => onNavigate("MobileRechargeEmpty")} />
      <Button title="Басты бет" secondary
        onPress={() => onNavigate("Home")} />
      <Info text="Нақты мобильді оператор шотына ақша аударылмады." />
    </Page>
  );
}