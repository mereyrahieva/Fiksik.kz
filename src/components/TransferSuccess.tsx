
import React from "react";
import {
  Page, Success, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function TransferSuccess({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const latest = bank.transactions[0];

  return (
    <Page title="Аударым нәтижесі" onBack={onBack}>
      <Success title="Аударым аяқталды!"
        subtitle="Демонстрациялық операция сәтті орындалды." />

      <Card>
        <Detail label="Операция" value="Ақша аудару" />
        <Detail label="Алушы" value={bank.transfer.recipient} />
        <Detail label="Сома"
          value={`${Math.abs(latest?.amount ?? 0).toLocaleString("kk-KZ")} ₸`} />
        <Detail label="Мәртебе" value="Демо аяқталды" />
      </Card>

      <Button title="Тағы аудару"
        onPress={() => onNavigate("TransferEmpty")} />
      <Button title="Басты бет" secondary
        onPress={() => onNavigate("Home")} />
      <Info text="Нақты банкке төлем тапсырмасы жіберілген жоқ." />
    </Page>
  );
}
