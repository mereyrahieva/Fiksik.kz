
import React from "react";
import {
  Page, Heading, Card, Detail,
  Menu, Button, Info, ScreenProps
} from "./EmeraldUI";

export default function InterestRate({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Пайыздық мөлшерлемелер" onBack={onBack}>
      <Heading
        title="Жинақ және несие"
        subtitle="Банк өнімдерінің шарттарымен танысыңыз."
      />

      <Card>
        <Detail label="Жинақ өнімі" value="Еркін жинақ" />
        <Detail label="Мөлшерлеме" value="Нақты дерек қосылмаған" />
        <Detail label="Валюта" value="KZT" />
        <Detail label="Мерзім" value="Шартқа байланысты" />
      </Card>

      <Card>
        <Detail label="Өнім" value="Мерзімді жинақ" />
        <Detail label="Мөлшерлеме" value="Нақты дерек қосылмаған" />
        <Detail label="Валюта" value="KZT" />
      </Card>

      <Menu
        icon="💰"
        title="Жинақ ашу"
        subtitle="Депозит түрлерін қарау"
        onPress={() => onNavigate("SaveOnlineMenu")}
      />

      <Menu
        icon="💳"
        title="Несие картасы"
        onPress={() => onNavigate("CreditCardOverview")}
      />

      <Button
        title="Депозиттер бөліміне өту"
        onPress={() => onNavigate("Deposits")}
      />

      <Info text="Нақты пайыздық мөлшерлемелерді банк API-інен алу қажет." />
    </Page>
  );
}
