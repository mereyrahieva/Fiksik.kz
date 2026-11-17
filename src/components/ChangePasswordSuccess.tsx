
import React from "react";
import {
  Page, Success, Button,
  ScreenProps
} from "./EmeraldUI";

export default function ChangePasswordSuccess({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Құпиясөз" onBack={onBack}>
      <Success
        title="Құпиясөз сәтті тексерілді!"
        subtitle="Демо қалпына келтіру аяқталды. Жүйеге қайта кіре аласыз."
      />

      <Button
        title="Жүйеге кіру"
        onPress={() => onNavigate("SignIn")}
      />
    </Page>
  );
}
