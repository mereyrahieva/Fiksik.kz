
import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function BeneficiaryDetails({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Алушы мәліметтері" onBack={onBack}>
      <Heading
        title="Алушы туралы ақпарат"
        subtitle="Алушының карта деректері"
      />

      <Card>
        <Detail
          label="Аты-жөні"
          value={bank.transfer.recipient || "Бірінші алушы"}
        />
        <Detail
          label="Карта"
          value={bank.transfer.card
            ? `•••• ${bank.transfer.card.slice(-4)}`
            : "•••• 5678"}
        />
        <Detail label="Валюта" value="KZT" />
        <Detail label="Түрі" value="Демо алушы" />
      </Card>

      <Button
        title="Ақша аудару"
        onPress={() => onNavigate("TransferManualEmpty")}
      />

      <Button
        title="Алушыларға оралу"
        secondary
        onPress={() => onNavigate("BeneficiaryDirectory")}
      />

      <Info text="Бұл ақпарат нақты банк клиенті туралы деректер емес." />
    </Page>
  );
}
