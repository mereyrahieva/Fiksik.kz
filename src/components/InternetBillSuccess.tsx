
import React from "react";
import {
  Page, Success, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function InternetBillSuccess({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const transaction = bank.transactions[0];

  return (
    <Page title="Интернет төлемі" onBack={onBack}>
      <Success
        title="Төлем сәтті аяқталды!"
        subtitle="Интернет қызметіне демо төлем орындалды."
      />

      <Card>
        <Detail label="Қызмет" value="Интернет" />
        <Detail label="Провайдер" value={bank.transfer.recipient} />
        <Detail label="Абонент" value={bank.transfer.card} />
        <Detail
          label="Төленген сома"
          value={`${Math.abs(transaction?.amount ?? 0).toLocaleString("kk-KZ")} ₸`}
        />
        <Detail label="Комиссия" value="0 ₸" />
        <Detail label="Мәртебе" value="Демо орындалды" />
      </Card>

      <Button
        title="Тағы төлем жасау"
        onPress={() => onNavigate("InternetBillEmpty")}
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

      <Info text="Бұл нақты интернет төлемі емес." />
    </Page>
  );
}
