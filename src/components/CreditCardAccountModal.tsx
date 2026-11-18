
import React from "react";
import {
  Page, Heading, Card, Detail,
  Menu, Button, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function CreditCardAccountModal({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Карта таңдау" onBack={onBack}>
      <Heading
        title="Қай картадан төлейсіз?"
        subtitle="Қаражат алынатын картаны таңдаңыз."
      />

      <Menu
        icon="💳"
        title="Негізгі карта"
        subtitle="•••• 4589"
        onPress={() => onNavigate("CreditCardOTP")}
      />

      <Card>
        <Detail label="Ақша алынатын карта" value="•••• 4589" />
        <Detail label="Валюта" value="KZT" />
        <Detail
          label="Баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`}
        />
        <Detail
          label="Төлем сомасы"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`}
        />
      </Card>

      <Button
        title="Төлемді растауға өту"
        onPress={() => onNavigate("CreditCardOTP")}
      />

      <Button
        title="Соманы өзгерту"
        secondary
        onPress={() => onNavigate("CreditCardCheckout")}
      />
    </Page>
  );
}
