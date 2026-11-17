import React from "react";
import {
  Page, Heading, Card, Detail,
  Menu, Info, ScreenProps
} from "../EmeraldUI";

export default function MobileRechargeBiometric({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Биометриялық растау" onBack={onBack}>
      <Heading
        title="Төлемді растау"
        subtitle="Қауіпсіздік әдісін таңдаңыз."
      />

      <Card>
        <Detail label="Қызмет" value="Ұялы байланыс" />
        <Detail label="Тексеру" value="Демонстрациялық" />
      </Card>

      <Menu icon="👆" title="Саусақ ізі"
        subtitle="Биометрия экраны"
        onPress={() => onNavigate("MobileRechargeTouch")} />

      <Menu icon="✉️" title="SMS-код"
        subtitle="Код арқылы төлемді растау"
        onPress={() => onNavigate("MobileRechargeOTP")} />

      <Info text="Нақты биометриялық аутентификация қосылмаған." />
    </Page>
  );
}