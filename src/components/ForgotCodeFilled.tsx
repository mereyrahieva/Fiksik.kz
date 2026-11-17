
import React from "react";
import {
  Page, Success, Button,
  ScreenProps
} from "./EmeraldUI";

export default function ForgotCodeFilled({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Растау нәтижесі" onBack={onBack}>
      <Success
        title="Телефон расталды!"
        subtitle="Енді жаңа құпиясөз орната аласыз."
      />

      <Button
        title="Жаңа құпиясөз орнату"
        onPress={() => onNavigate("ChangePasswordForm")}
      />
      <Button title="Артқа қайту" secondary onPress={onBack} />
    </Page>
  );
}
