import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function InternetBillDetails({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Интернет төлемі" onBack={onBack}>
      <Heading title="Төлем мәліметтері"
        subtitle="Провайдер мен соманы тексеріңіз." />
      <Card>
        <Detail label="Провайдер" value={bank.transfer.recipient} />
        <Detail label="Абонент" value={bank.transfer.card} />
        <Detail label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`} />
        <Detail label="Комиссия" value="0 ₸" />
      </Card>
      <Button title="SMS-код арқылы растау"
        onPress={() => onNavigate("InternetBillOTP")} />
      <Button title="Мәліметтерді өзгерту" secondary
        onPress={onBack} />
      <Info text="Нақты төлем әлі жасалған жоқ." />
    </Page>
  );
}