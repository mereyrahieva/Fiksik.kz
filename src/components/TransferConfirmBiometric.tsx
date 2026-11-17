
import React from "react";
import {
  Page, Heading, Card, Detail,
  Menu, Info, ScreenProps
} from "../EmeraldUI";

export default function TransferConfirmBiometric({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Биометриялық растау" onBack={onBack}>
      <Heading
        title="Қауіпсіздік тексеруі"
        subtitle="Растау тәсілін таңдаңыз."
      />

      <Card>
        <Detail label="Қауіпсіздік" value="Демо режим" />
        <Detail label="Операция" value="Ақша аудару" />
      </Card>

      <Menu
        icon="👆"
        title="Саусақ ізін тексеру"
        onPress={() => onNavigate("TransferTouchDialog")}
      />

      <Menu
        icon="🙂"
        title="Бет-әлпетті тану"
        onPress={() => onNavigate("TransferFaceEmpty")}
      />

      <Menu
        icon="✉️"
        title="SMS арқылы растау"
        onPress={() => onNavigate("TransferConfirmOTP")}
      />

      <Info text="Биометриялық растау құрылғыға әлі қосылмаған. Бұл тек интерфейс үлгісі." />
    </Page>
  );
}
