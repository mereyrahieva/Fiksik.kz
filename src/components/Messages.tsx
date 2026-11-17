
import React, { useState } from "react";
import {
  Page, Heading, Menu, Button,
  Info, ScreenProps
} from "./EmeraldUI";

const notifications = [
  { id: 1, title: "Қош келдіңіз!", subtitle: "Fiksik Bank демо қосымшасына қош келдіңіз." },
  { id: 2, title: "Қауіпсіздік", subtitle: "Құпиясөзіңізді ешкімге бермеңіз." },
  { id: 3, title: "Жаңа мүмкіндіктер", subtitle: "Аударымдар мен төлемдерді қарап көріңіз." }
];

export default function Messages({
  onNavigate, onBack
}: ScreenProps) {
  const [read, setRead] = useState<number[]>([]);

  return (
    <Page title="Хабарламалар" onBack={onBack}>
      <Heading title="Сіздің хабарламаларыңыз"
        subtitle={`${notifications.length - read.length} оқылмаған хабарлама`} />

      {notifications.map(item => (
        <Menu key={item.id}
          icon={read.includes(item.id) ? "✉️" : "🔔"}
          title={item.title}
          subtitle={item.subtitle}
          onPress={() => {
            setRead(old => [...new Set([...old, item.id])]);
            onNavigate("MessageThread");
          }} />
      ))}

      <Button title="Барлығын оқылған деп белгілеу"
        secondary
        onPress={() => setRead(notifications.map(item => item.id))} />
      <Info text="Хабарламалар демонстрациялық деректерден құралған." />
    </Page>
  );
}
