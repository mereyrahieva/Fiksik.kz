
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Button,
  Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function BeneficiaryAddEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [phone, setPhone] = useState("");

  function proceed() {
    const digits = card.replace(/\D/g, "");

    if (name.trim().length < 2) {
      Alert.alert("Қате", "Алушының аты-жөнін енгізіңіз.");
      return;
    }

    if (digits.length !== 16) {
      Alert.alert("Қате", "Карта нөмірі 16 сан болуы керек.");
      return;
    }

    if (phone.trim() && phone.replace(/\D/g, "").length < 10) {
      Alert.alert("Қате", "Телефон нөмірін дұрыс енгізіңіз.");
      return;
    }

    bank.setTransfer({
      recipient: name.trim(),
      card: digits,
      amount: 0,
      message: phone.trim()
    });

    onNavigate("BeneficiaryAddFilled");
  }

  return (
    <Page title="Алушы қосу" onBack={onBack}>
      <Heading
        title="Жаңа алушы"
        subtitle="Алушының мәліметтерін толтырыңыз."
      />

      <Field
        label="Аты-жөні"
        value={name}
        onChangeText={setName}
        placeholder="Алушының аты-жөні"
      />

      <Field
        label="Карта нөмірі"
        value={card}
        onChangeText={v => setCard(v.replace(/\D/g, "").slice(0, 16))}
        placeholder="0000 0000 0000 0000"
        keyboardType="number-pad"
      />

      <Field
        label="Телефон (міндетті емес)"
        value={phone}
        onChangeText={setPhone}
        placeholder="+7 700 000 00 00"
        keyboardType="phone-pad"
      />

      <Button
        title="Мәліметтерді тексеру"
        onPress={proceed}
      />

      <Button
        title="Алушылар тізімі"
        secondary
        onPress={() => onNavigate("BeneficiaryDirectory")}
      />

      <Info text="Карта деректері нақты банкте тексерілмейді." />
    </Page>
  );
}
