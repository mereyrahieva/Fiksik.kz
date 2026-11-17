
import React, { useState } from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "../EmeraldUI";

export default function TransferFingerprint({
  onNavigate, onBack
}: ScreenProps) {
  const [checked, setChecked] = useState(false);

  return (
    <Page title="Саусақ ізін тексеру" onBack={onBack}>
      <Heading
        title="Биометриялық тексеру"
        subtitle="Саусақ ізі интерфейсінің демонстрациясы"
      />

      <Card>
        <Detail label="Тексеру" value="Саусақ ізі" />
        <Detail
          label="Мәртебе"
          value={checked ? "Демо тексеру аяқталды" : "Басталмаған"}
        />
      </Card>

      <Button
        title="Демо тексеруді орындау"
        onPress={() => setChecked(true)}
      />

      <Button
        title="SMS арқылы нақтылау"
        onPress={() => onNavigate("TransferConfirmOTP")}
      />

      <Button
        title="Артқа қайту"
        secondary
        onPress={onBack}
      />

      <Info text="Саусақ ізі нақты тексерілмейді. Аударымды демо код арқылы растауға болады." />
    </Page>
  );
}
