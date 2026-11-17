
import React from "react";
import {
  Page, Heading, Menu,
  Button, ScreenProps
} from "../EmeraldUI";

export default function Settings({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Баптаулар" onBack={onBack}>
      <Heading
        title="Қосымша баптаулары"
        subtitle="Аккаунт пен қауіпсіздік параметрлері"
      />

      <Menu
        icon="🔐"
        title="Құпиясөзді өзгерту"
        onPress={() => onNavigate("ChangePasswordSettings")}
      />

      <Menu
        icon="🌐"
        title="Қосымша тілі"
        onPress={() => onNavigate("Language")}
      />

      <Menu
        icon="✉️"
        title="Хабарламалар"
        onPress={() => onNavigate("Messages")}
      />

      <Menu
        icon="📊"
        title="Қаржы есебі"
        onPress={() => onNavigate("TransactionReportChart")}
      />

      <Menu
        icon="ℹ️"
        title="Қосымша туралы"
        onPress={() => onNavigate("AppInformation")}
      />

      <Button
        title="Басты бетке оралу"
        secondary
        onPress={() => onNavigate("Home")}
      />

      <Button
        title="Жүйеден шығу"
        onPress={() => onNavigate("SignIn")}
      />
    </Page>
  );
}
