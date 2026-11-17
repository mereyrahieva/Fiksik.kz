
import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function TransferBankFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const transfer = bank.transfer;

  return (
    <Page title="Аударым мәліметтері" onBack={onBack}>
      <Heading
        title="Банк деректемелері"
        subtitle="Мәліметтердің дұрыстығын тексеріңіз."
      />

      <Card>
        <Detail label="Алушы" value={transfer.recipient} />
        <Detail label="IBAN" value={transfer.card} />
        <Detail label="Банк" value={transfer.message} />
        <Detail
          label="Сома"
          value={`${transfer.amount.toLocaleString("kk-KZ")} ₸`}
        />
        <Detail label="Комиссия" value="0 ₸" />
      </Card>

      <Button
        title="Алушы мәліметтерін тексеру"
        onPress={() => onNavigate("TransferBankRecipient")}
      />

      <Button
        title="Банкті өзгерту"
        secondary
        onPress={() => onNavigate("TransferBankPicker")}
      />

      <Info text="Деректер нақты банк жүйесінде тексерілген жоқ." />
    </Page>
  );
}
