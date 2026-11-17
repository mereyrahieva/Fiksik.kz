
import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function TransferBankRecipient({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Алушыны растау" onBack={onBack}>
      <Heading title="Алушы туралы ақпарат"
        subtitle="Деректемелердің дұрыстығын тексеріңіз." />

      <Card>
        <Detail label="Алушы" value={bank.transfer.recipient} />
        <Detail label="Шот нөмірі" value={bank.transfer.card} />
        <Detail label="Мақсат" value={bank.transfer.message} />
      </Card>

      <Button title="Аударымды растау"
        onPress={() => onNavigate("TransferBankConfirm")} />
      <Button title="Артқа" secondary onPress={onBack} />

      <Info text="Алушының шынайы банк реквизиттері тексерілген жоқ." />
    </Page>
  );
}
