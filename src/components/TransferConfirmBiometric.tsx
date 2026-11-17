
import React from "react";
import {
  Page, Heading, Card, Detail,
  Menu, Info, ScreenProps
} from "./EmeraldUI";

export default function TransferConfirmBiometric({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Биометриялық растау" onBack={onBack}>
      <Heading title="Өзіңізді растаңыз"
        subtitle="Қауіпсіздік әдісін таңдаңыз." />

      <Card>
        <Detail label="Қорғау түрі" value="Биометрия" />
        <Detail label="Режим" value="Демонстрациялық" />
      </Card>

      <Menu icon="👆" title="Саусақ ізі"
        subtitle="Саусақ ізін тексеру интерфейсі"
        onPress={() => onNavigate("TransferFingerprint")} />
      <Menu icon="🙂" title="Бетті тану"
        subtitle="Камера арқылы растау экраны"
        onPress={() => onNavigate("TransferFaceEmpty")} />
      <Menu icon="🔢" title="SMS-код"
        onPress={() => onNavigate("TransferConfirmOTP")} />

      <Info text="Құрылғы биометриясы әзірше нақты тексерілмейді." />
    </Page>
  );
}
