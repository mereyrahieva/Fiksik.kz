
import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Success, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function TransferSuccess({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Аударым нәтижесі" onBack={onBack}>
      <Success
        title="Демо аударым аяқталды!"
        subtitle="Операция нәтижесі көрсетілді."
      />

      <Card>
        <Detail label="Алушы" value={bank.transfer.recipient} />
        <Detail label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`} />
        <Detail label="Комиссия" value="0 ₸" />
        <Detail label="Мәртебе" value="Демо аяқталды" />
      </Card>

      <Button
        title="Жаңа аударым"
        onPress={() => onNavigate("TransferEmpty")}
      />

      <Button
        title="Басты бет"
        secondary
        onPress={() => onNavigate("Home")}
      />

      <Info text="Бұл нақты төлем түбіртегі емес. Нақты ақша аударылмаған." />
    </Page>
  );
}
