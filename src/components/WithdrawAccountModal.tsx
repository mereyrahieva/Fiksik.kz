import React from "react";
import {
  Page, Heading, Menu, Card, Detail,
  Button, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function WithdrawAccountModal({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Шотты таңдау" onBack={onBack}>
      <Heading title="Қаражат алынатын карта"
        subtitle="Демо режимінде негізгі карта қолданылады." />
      <Menu icon="💳" title="Негізгі карта"
        subtitle="•••• 4589"
        onPress={() => onNavigate("WithdrawEmpty")} />
      <Card>
        <Detail label="Карта" value="•••• 4589" />
        <Detail label="Валюта" value="KZT" />
        <Detail label="Баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`} />
      </Card>
      <Button title="Картаны таңдау"
        onPress={() => onNavigate("WithdrawEmpty")} />
    </Page>
  );
}