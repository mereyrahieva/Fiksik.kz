import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function InternetBillDetails({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const payment = bank.transfer;

  return (
    <Page title="Төлем мәліметтері" onBack={onBack}>
      <Heading title="Интернет төлемі"
        subtitle="Операцияны мұқият тексеріңіз." />

      <Card>
        <Detail label="Провайдер" value={payment.recipient} />
        <Detail label="Абонент нөмірі" value={payment.card} />
        <Detail label="Сома"
          value={`${payment.amount.toLocaleString("kk-KZ")} ₸`} />
        <Detail label="Комиссия" value="0 ₸" />
      </Card>

      <Button title="SMS-код арқылы растау"
        onPress={() => onNavigate("InternetBillOTP")} />

      <Button title="Мәліметтерді өзгерту"
        secondary onPress={onBack} />

      <Info text="Бұл — интернет төлемін растаудың демо кезеңі." />
    </Page>
  );
}