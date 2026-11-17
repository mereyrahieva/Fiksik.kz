
import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function TransferFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const transfer = bank.transfer;

  return (
    <Page title="Аударым мәліметтері" onBack={onBack}>
      <Heading
        title="Аударымды тексеріңіз"
        subtitle="Растамас бұрын барлық мәліметті қарап шығыңыз."
      />

      <Card>
        <Detail label="Алушы" value={transfer.recipient} />
        <Detail
          label="Карта"
          value={`•••• ${transfer.card.slice(-4)}`}
        />
        <Detail
          label="Сома"
          value={`${transfer.amount.toLocaleString("kk-KZ")} ₸`}
        />
        <Detail label="Мақсаты" value={transfer.message} />
        <Detail label="Комиссия" value="0 ₸" />
      </Card>

      <Button
        title="Аударымды растау"
        onPress={() => onNavigate("TransferConfirmEmpty")}
      />

      <Button
        title="Мәліметтерді өзгерту"
        secondary
        onPress={onBack}
      />

      <Info text="Растау демо режимінде орындалады." />
    </Page>
  );
}
