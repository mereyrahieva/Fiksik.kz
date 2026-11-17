import React from "react";
import {
  Page, Success, Card, Detail,
  Button, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function WithdrawSuccess({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Операция нәтижесі" onBack={onBack}>
      <Success
        title="Демо операция аяқталды!"
        subtitle="Қаражат алу операциясының үлгі нәтижесі"
      />

      <Card>
        <Detail label="Операция" value="Қаражат алу" />
        <Detail label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`} />
        <Detail label="Мәртебе" value="Демо аяқталды" />
      </Card>

      <Button title="Қалған балансты қарау"
        onPress={() => onNavigate("Accounts")} />
      <Button title="Басты бетке өту" secondary
        onPress={() => onNavigate("Home")} />
      <Info text="Бұл нақты банкомат түбіртегі емес." />
    </Page>
  );
}