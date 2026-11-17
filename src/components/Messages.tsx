
import React, { useState } from "react";
import {
  Page, Heading, Menu, Button,
  Info, ScreenProps
} from "../EmeraldUI";

const messages = [
  { id: 1, icon: "🔐", title: "Қауіпсіздік", text: "Аккаунтты қорғау туралы ақпарат" },
  { id: 2, icon: "💳", title: "Карталар", text: "Банк карталарын пайдалану" },
  { id: 3, icon: "📢", title: "Жаңалықтар", text: "Қосымша қызметтері" }
];

export default function Messages({
  onNavigate, onBack
}: ScreenProps) {
  const [unread, setUnread] = useState([1, 2, 3]);

  function open(id: number) {
    setUnread(old => old.filter(item => item !== id));
    onNavigate("MessageThread");
  }

  return (
    <Page title="Хабарламалар" onBack={onBack}>
      <Heading
        title="Кіріс хабарламалар"
        subtitle={`Оқылмаған хабарламалар: ${unread.length}`}
      />

      {messages.map(item => (
        <Menu
          key={item.id}
          icon={item.icon}
          title={`${item.title}${unread.includes(item.id) ? " •" : ""}`}
          subtitle={item.text}
          onPress={() => open(item.id)}
        />
      ))}

      <Button
        title="Барлығын оқылды деп белгілеу"
        secondary
        onPress={() => setUnread([])}
      />

      <Button
        title="Қолдау қызметіне жазу"
        onPress={() => onNavigate("MessageReply")}
      />

      <Info text="Хабарламалар демонстрациялық деректерден тұрады." />
    </Page>
  );
}
