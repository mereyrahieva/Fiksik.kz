
import React, { useState } from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";

export default function InterestRate({
  onNavigate, onBack
}: ScreenProps) {
  const [type, setType] = useState<"deposit" | "loan">("deposit");

  return (
    <Page title="Пайыздық мөлшерлемелер" onBack={onBack}>
      <Heading
        title="Банк өнімдері"
        subtitle="Депозит пен несие мөлшерлемелерінің үлгілері"
      />

      <Button title="Депозиттер" onPress={() => setType("deposit")}
        secondary={type !== "deposit"} />
      <Button title="Несиелер" onPress={() => setType("loan")}
        secondary={type !== "loan"} />

      {type === "deposit" ? (
        <Card>
          <Detail label="Жинақ шоты" value="5,5%" />
          <Detail label="Мерзімді депозит" value="7,2%" />
          <Detail label="Мерзімі" value="12 айға дейін" />
        </Card>
      ) : (
        <Card>
          <Detail label="Тұтынушылық несие" value="12,5%" />
          <Detail label="Ипотекалық несие" value="9,9%" />
          <Detail label="Есептеу тәсілі" value="Жылдық" />
        </Card>
      )}

      {type === "deposit" && (
        <Button
          title="Депозиттерді қарау"
          onPress={() => onNavigate("Deposits")}
        />
      )}

      <Info text="Барлық пайыздық мөлшерлеме мысал үшін берілген. Нақты банк ұсынысы емес." />
    </Page>
  );
}
