
import React from "react";
import {
  Page, Success, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function SaveOnlineSuccess({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const latest = bank.transactions[0];

  return (
    <Page title="Жинақ нәтижесі" onBack={onBack}>
      <Success
        title="Жинақ ашу аяқталды!"
        subtitle="Демо депозит операциясы орындалды."
      />

      <Card>
        <Detail label="Жинақ" value={bank.transfer.recipient} />
        <Detail
          label="Бастапқы сома"
          value={`${Math.abs(latest?.amount ?? 0).toLocaleString("kk-KZ")} ₸`}
        />
        <Detail label="Мәртебе" value="Демо орындалды" />
      </Card>

      <Button
        title="Жинақ бөлімін ашу"
        onPress={() => onNavigate("SaveOnlineMenu")}
      />

      <Button
        title="Шоттарды қарау"
        secondary
        onPress={() => onNavigate("AccountManagement")}
      />

      <Button
        title="Басты бетке өту"
        secondary
        onPress={() => onNavigate("Home")}
      />

      <Info text="Нақты банктік депозит ашылған жоқ." />
    </Page>
  );
}
