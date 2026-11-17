
import React from "react";
import {
  Page, Heading, Card, Detail, Menu,
  Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function TransferConfirmEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Аударымды растау" onBack={onBack}>
      <Heading title="Қауіпсіздік тексеруі"
        subtitle="Аударымды растау тәсілін таңдаңыз." />

      <Card>
        <Detail label="Алушы" value={bank.transfer.recipient} />
        <Detail label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`} />
      </Card>

      <Menu icon="✉️" title="SMS-код арқылы"
        subtitle="Алты таңбалы код енгізу"
        onPress={() => onNavigate("TransferConfirmOTP")} />

      <Menu icon="👆" title="Биометрия арқылы"
        subtitle="Биометриялық растау бөлімі"
        onPress={() => onNavigate("TransferConfirmBiometric")} />

      <Info text="Бұл жерде нақты SMS және биометриялық банк растауы қолданылмайды." />
    </Page>
  );
}
