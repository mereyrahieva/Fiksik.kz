
import React, { useState } from "react";
import {
  View, Text, ScrollView, TextInput,
  TouchableOpacity, StyleSheet, KeyboardAvoidingView
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

type ChatMessage = { id: number; text: string; mine: boolean };

export default function MessageThread({ onBack, onNext }: Props) {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, text: "Hello! Welcome to customer support.", mine: false },
    { id: 2, text: "I need help with my account.", mine: true },
    { id: 3, text: "Please tell us how we can help.", mine: false }
  ]);

  function send() {
    if (!text.trim()) return;
    setMessages(old => [...old, { id: Date.now(), text: text.trim(), mine: true }]);
    setText("");
  }

  return (
    <KeyboardAvoidingView style={s.page} behavior="padding">
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}><Text style={s.back}>‹</Text></TouchableOpacity>
        <View style={s.avatar}><Text style={s.avatarText}>S</Text></View>
        <View>
          <Text style={s.heading}>Customer Support</Text>
          <Text style={s.online}>Demo chat</Text>
        </View>
      </View>
      <ScrollView style={s.chat} contentContainerStyle={s.chatContent}>
        <Text style={s.day}>Today</Text>
        {messages.map(message => (
          <View key={message.id} style={[s.bubble, message.mine ? s.mine : s.theirs]}>
            <Text style={message.mine ? s.white : s.black}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={s.inputRow}>
        <TextInput style={s.input} value={text} onChangeText={setText}
          placeholder="Type a message" multiline />
        <TouchableOpacity style={s.send} onPress={send}>
          <Text style={s.white}>➤</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onNext}>
        <Text style={s.reply}>Open reply screen</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  header: { height: 95, backgroundColor: "#3525B5", flexDirection: "row", alignItems: "center", paddingHorizontal: 18 },
  back: { fontSize: 31, color: "#fff", marginRight: 12 },
  avatar: { backgroundColor: "#DCD7FF", width: 42, height: 42, borderRadius: 21, justifyContent: "center", alignItems: "center", marginRight: 12 },
  avatarText: { fontWeight: "bold", color: "#3525B5" },
  heading: { color: "#fff", fontWeight: "bold", fontSize: 17 },
  online: { color: "#D9D3FF", fontSize: 12, marginTop: 5 },
  chat: { flex: 1, backgroundColor: "#FAFAFE" },
  chatContent: { padding: 18 },
  day: { color: "#999", textAlign: "center", marginBottom: 25 },
  bubble: { padding: 15, borderRadius: 17, marginBottom: 14, maxWidth: "80%" },
  mine: { alignSelf: "flex-end", backgroundColor: "#3525B5", borderBottomRightRadius: 4 },
  theirs: { alignSelf: "flex-start", backgroundColor: "#EFEDF7", borderBottomLeftRadius: 4 },
  white: { color: "#fff" },
  black: { color: "#333" },
  inputRow: { flexDirection: "row", padding: 12, alignItems: "center", borderTopWidth: 1, borderColor: "#eee" },
  input: { flex: 1, backgroundColor: "#F4F4F8", borderRadius: 22, paddingHorizontal: 15, maxHeight: 100 },
  send: { backgroundColor: "#3525B5", padding: 13, borderRadius: 24, marginLeft: 10 },
  reply: { color: "#3525B5", textAlign: "center", paddingBottom: 12 }
});
