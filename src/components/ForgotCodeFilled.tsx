
import React from "react";
import {
  Page, Success, Card, Detail,
  Button, ScreenProps
} from "./EmeraldUI";

export default function ForgotCodeFilled({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Растау нәтижесі" onBack={onBack}>
      <Success
        title="Код расталды!"
        subtitle="Енді жаңа құпиясөз орната аласыз."
      />

      <Card>
        <Detail label="Тексеру" value="SMS-код" />
        <Detail label="Нәтиже" value="Сәтті" />
        <Detail label="Келесі қадам" value="Жаңа құпиясөз" />
      </Card>

      <Button
        title="Жаңа құпиясөз орнату"
        onPress={() => onNavigate("ChangePasswordForm")}
      />
    </Page>
  );
}
