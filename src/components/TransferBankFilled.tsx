
import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function TransferBankFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Банк аударымы" onBack={onBack}>
      <Heading title="Аударым мәліметтері"
        subtitle="Шот бойынша ақпарат" />

      <Card>
        <Detail label="Алушы" value={bank.transfer.recipient} />
        <Detail label="IBAN" value={bank.transfer.card} />
        <Detail label="Валюта" value="KZT" />
        <Detail label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`} />
        <Detail label="Комиссия" value="0 ₸ (демо)" />
      </Card>

      <Button title="Алушыны растау"
        onPress={() => onNavigate("TransferBankRecipient")} />
      <Button title="Мәліметтерді түзету" secondary
        onPress={() => onNavigate("TransferBankEmpty")} />
    </Page>
  );
}
