
import React from "react";
import {
  Page, Heading, Card, Detail,
  Success, Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function SignUpFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Тіркелу нәтижесі" onBack={onBack}>
      <Success
        title="Қош келдіңіз!"
        subtitle="Сіздің демо аккаунтыңыз дайын."
      />

      <Heading
        title="Жеке мәліметтеріңіз"
        subtitle="Тіркелу барысында енгізілген ақпарат"
      />

      <Card>
        <Detail label="Аты-жөні" value={bank.name} />
        <Detail label="Телефон" value={bank.phone} />
        <Detail label="Email" value={bank.email} />
        <Detail label="Мәртебе" value="Демо тіркелді" />
      </Card>

      <Button
        title="Басты бетке өту"
        onPress={() => onNavigate("Home")}
      />

      <Button
        title="Кіру экраны"
        secondary
        onPress={() => onNavigate("SignIn")}
      />

      <Info text="Демо аккаунт қолданба жабылғанда қайта бастапқы күйіне келуі мүмкін." />
    </Page>
  );
}
