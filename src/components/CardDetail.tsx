import React, { useState } from "react";
import { Text } from "react-native";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps, C
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function CardDetail({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [visible, setVisible] = useState(false);
  const [blocked, setBlocked] = useState(false);

  return (
    <Page title="Карта мәліметтері" onBack={onBack}>
      <Heading
        title="Негізгі карта"
        subtitle="Карта туралы ақпарат"
      />

      <Card dark>
        <Text style={{ color: "#D1FAE5" }}>Fiksik Bank</Text>
        <Text style={{
          color: "#FFFFFF",
          fontSize: 25,
          fontWeight: "800",
          marginVertical: 22
        }}>
          {bank.balance.toLocaleString("kk-KZ")} ₸
        </Text>
        <Text style={{ color: "#FFFFFF", letterSpacing: 2 }}>
          {visible ? "4111 1111 1111 4589" : "•••• •••• •••• 4589"}
        </Text>
      </Card>

      <Card>
        <Detail label="Карта түрі" value="Дебеттік" />
        <Detail label="Валюта" value="KZT" />
        <Detail label="Жарамдылық мерзімі" value="12/28 (үлгі)" />
        <Detail label="Мәртебе" value={blocked ? "Демо бұғатталған" : "Белсенді"} />
      </Card>

      <Button
        title={visible ? "Нөмірді жасыру" : "Карта нөмірін көрсету"}
        secondary
        onPress={() => setVisible(!visible)}
      />

      <Button
        title={blocked ? "Картаны қайта белсендіру" : "Картаны бұғаттау"}
        secondary
        onPress={() => setBlocked(!blocked)}
      />

      <Button
        title="Ақша аудару"
        onPress={() => onNavigate("TransferEmpty")}
      />

      <Info text="Карта нөмірі мен бұғаттау функциясы демонстрациялық. Нақты карта басқарылмайды." />
    </Page>
  );
}