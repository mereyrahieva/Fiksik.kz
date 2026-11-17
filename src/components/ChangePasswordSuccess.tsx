
import React from "react";
import {
  Page, Success, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";

export default function ChangePasswordSuccess({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Құпиясөз нәтижесі" onBack={onBack}>
      <Success
        title="Сәтті орындалды!"
        subtitle="Құпиясөз өзгерту қадамы аяқталды."
      />

      <Card>
        <Detail label="Әрекет" value="Құпиясөз өзгерту" />
        <Detail label="Мәртебе" value="Демо орындалды" />
      </Card>

      <Button
        title="Кіру бетіне өту"
        onPress={() => onNavigate("SignIn")}
      />

      <Info text="Бұл экран нақты банк аккаунтының құпиясөзі өзгергенін білдірмейді." />
    </Page>
  );
}
