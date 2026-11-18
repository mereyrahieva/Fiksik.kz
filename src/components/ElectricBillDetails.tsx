
import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function ElectricBillDetails({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Төлемді растау" onBack={onBack}>
      <Heading
        title="Электр төлемін растаңыз"
        subtitle="Операция туралы қорытынды ақпарат"
      />

      <Card>
        <Detail label="Қызмет" value="Электр энергиясы" />
        <Detail label="Компания" value={bank.transfer.recipient} />
        <Detail label="Дербес шот" value={bank.transfer.card} />
        <Detail label="Төлем картасы" value="•••• 4589" />
        <Detail
          label="Төлем сомасы"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`}
        />
        <Detail label="Комиссия" value="0 ₸" />
      </Card>

      <Button
        title="SMS-код арқылы растау"
        onPress={() => onNavigate("ElectricBillOTP")}
      />

      <Button
        title="Артқа қайту"
        secondary
        onPress={onBack}
      />

      <Info text="Операция демо режимінде орындалады." />
    </Page>
  );
}
