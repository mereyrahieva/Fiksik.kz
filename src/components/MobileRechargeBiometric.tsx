import React from "react";
import {
  Page, Heading, Menu, Card, Detail,
  Info, ScreenProps
} from "./EmeraldUI";

export default function MobileRechargeBiometric({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Биометрия" onBack={onBack}>
      <Heading title="Төлемді растау тәсілі"
        subtitle="Қауіпсіздік әдісін таңдаңыз." />
      <Card>
        <Detail label="Қызмет" value="Ұялы байланыс" />
        <Detail label="Режим" value="Демо" />
      </Card>
      <Menu icon="👆" title="Саусақ ізі"
        subtitle="Биометриялық экран"
        onPress={() => onNavigate("MobileRechargeTouch")} />
      <Menu icon="✉️" title="SMS-код"
        subtitle="Растау кодын енгізу"
        onPress={() => onNavigate("MobileRechargeOTP")} />
      <Info text="Биометриялық сенсор әзірше қолданылмайды." />
    </Page>
  );
}