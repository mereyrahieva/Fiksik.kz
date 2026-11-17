import React from "react";
import {
  Page, Success, Card, Detail,
  Button, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function MobileRechargeSuccess({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Төлем нәтижесі" onBack={onBack}>
      <Success
        title="Демо төлем аяқталды!"
        subtitle="Телефон балансын толықтыру нәтижесі"
      />

      <Card>
        <Detail label="Қызмет" value="Ұялы байланыс" />
        <Detail label="Телефон" value={bank.transfer.recipient} />
        <Detail label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`} />
        <Detail label="Мәртебе" value="Демо аяқталды" />
      </Card>

      <Button title="Тағы да толықтыру"
        onPress={() => onNavigate("MobileRechargeEmpty")} />
      <Button title="Басты бетке өту" secondary
        onPress={() => onNavigate("Home")} />

      <Info text="Нақты телефон балансы толықтырылған жоқ. Тек демо баланс өзгерді." />
    </Page>
  );
}