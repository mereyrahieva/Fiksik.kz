
import React from "react";
import {
  Page, Heading, Menu, Card,
  Detail, Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function SaveOnlineCardSelection({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Картаны таңдау" onBack={onBack}>
      <Heading
        title="Қай картадан ақша алынады?"
        subtitle="Жинаққа бастапқы ақша салатын картаны таңдаңыз."
      />

      <Menu
        icon="💳"
        title="Негізгі карта"
        subtitle="•••• 4589 · KZT"
        onPress={() => onNavigate("SaveOnlineDepositPicker")}
      />

      <Card>
        <Detail label="Карта" value="•••• 4589" />
        <Detail
          label="Баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`}
        />
        <Detail
          label="Жинақ сомасы"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`}
        />
        <Detail label="Комиссия" value="0 ₸" />
      </Card>

      <Button
        title="Осы картаны таңдау"
        onPress={() => onNavigate("SaveOnlineDepositPicker")}
      />

      <Button
        title="Артқа"
        secondary
        onPress={onBack}
      />

      <Info text="Демо режимінде бір негізгі карта қолданылады." />
    </Page>
  );
}
