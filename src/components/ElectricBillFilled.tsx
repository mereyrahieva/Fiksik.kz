
import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function ElectricBillFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Электр төлемі" onBack={onBack}>
      <Heading
        title="Мәліметтерді тексеру"
        subtitle="Төлемді растамас бұрын деректерді қараңыз."
      />

      <Card>
        <Detail label="Қызмет" value="Электр энергиясы" />
        <Detail label="Компания" value={bank.transfer.recipient} />
        <Detail label="Дербес шот" value={bank.transfer.card} />
        <Detail
          label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`}
        />
        <Detail label="Комиссия" value="0 ₸" />
      </Card>

      <Button
        title="Төлемді жалғастыру"
        onPress={() => onNavigate("ElectricBillDetails")}
      />

      <Button
        title="Мәліметтерді түзету"
        secondary
        onPress={onBack}
      />

      <Info text="Компания мен шоттың сәйкестігі нақты тексерілмейді." />
    </Page>
  );
}
