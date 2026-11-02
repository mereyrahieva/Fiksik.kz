
import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

const messages = [
  { id: 1, title: "Customer Support", body: "How can we help you today?", date: "10:30 AM", unread: true },
  { id: 2, title: "Account Notification", body: "Your monthly statement is ready.", date: "Yesterday", unread: false },
  { id: 3, title: "Card Services", body: "Your card settings were updated.", date: "Monday", unread: false },
  { id: 4, title: "Security Center", body: "Remember to keep your account safe.", date: "Sunday", unread: true }
];

export default function Messages({ onBack, onNext }: Props) {
  const [query, setQuery] = useState("");
  const [readIds, setReadIds] = useState<number[]>([]);

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}><Text style={s.back}>‹</Text></TouchableOpacity>
        <Text style={s.heading}>Messages</Text>
      </View>
      <ScrollView contentContainerStyle={s.body}>
        <TextInput
          style={s.search} value={query}
          onChangeText={setQuery} placeholder="Search messages"
        />
        <Text style={s.section}>Inbox</Text>
        {messages.filter(m =>
          `${m.title} ${m.body}`.toLowerCase().includes(query.toLowerCase())
        ).map(message => (
          <TouchableOpacity
            key={message.id} style={s.message}
            onPress={() => {
              setReadIds(old => [...old, message.id]);
              onNext?.();
            }}
          >
            <View style={s.avatar}><Text style={s.avatarText}>✉</Text></View>
            <View style={s.details}>
              <Text style={s.name}>{message.title}</Text>
              <Text style={s.preview} numberOfLines={1}>{message.body}</Text>
            </View>
            <View style={s.right}>
              <Text style={s.date}>{message.date}</Text>
              {message.unread && !readIds.includes(message.id) &&
                <View style={s.dot} />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  header: { height: 95, backgroundColor: "#3525B5", flexDirection: "row", alignItems: "center", paddingHorizontal: 22 },
  back: { color: "#fff", fontSize: 31, marginRight: 24 },
  heading: { fontSize: 20, fontWeight: "bold", color: "#fff" },
  body: { padding: 22 },
  search: { backgroundColor: "#F5F5FA", borderRadius: 12, height: 52, paddingHorizontal: 15 },
  section: { fontSize: 18, fontWeight: "bold", marginTop: 27, marginBottom: 15, color: "#333" },
  message: { flexDirection: "row", alignItems: "center", paddingVertical: 17, borderBottomWidth: 1, borderColor: "#eee" },
  avatar: { width: 52, height: 52, borderRadius: 26, backgroundColor: "#EBE9FF", alignItems: "center", justifyContent: "center" },
  avatarText: { color: "#3525B5", fontSize: 26 },
  details: { flex: 1, marginLeft: 12 },
  name: { fontWeight: "bold", fontSize: 14, color: "#333" },
  preview: { fontSize: 12, color: "#999", marginTop: 7 },
  right: { alignItems: "flex-end", marginLeft: 6 },
  date: { fontSize: 10, color: "#999" },
  dot: { width: 9, height: 9, borderRadius: 5, backgroundColor: "#3525B5", marginTop: 12 }
});
