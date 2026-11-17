
import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "../EmeraldUI";

export default function TransferTouchDialog({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Саусақ ізі" onBack={onBack}>
      <Heading
        title="Саусақ ізін тексеру"
        subtitle="Биометриялық тексеру кезеңі"
      />

      <Card>
        <Detail label="Тексеру тәсілі" value="Саусақ ізі" />
        <Detail label="Мәртебе" value="Демо режим" />
      </Card>

      <Button
        title="Тексеру экранын ашу"
        onPress={() => onNavigate("TransferFingerprint")}
      />

      <Button
        title="Басқа тәсілді таңдау"
        secondary
        onPress={() => onNavigate("TransferConfirmEmpty")}
      />

      <Info text="Бұл демо саусақ ізі сенсорын пайдаланбайды." />
    </Page>
  );
}
