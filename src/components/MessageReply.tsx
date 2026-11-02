
import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function MessageReply({ onBack, onNext }: Props) {
  const [subject, setSubject] = useState("Account Support");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function send() {
    if (!subject.trim() || !message.trim()) {
      Alert.alert("Required fields", "Enter a subject and message");
      return;
    }
    setSent(true);
    Alert.alert("Demo message", "Your message has been added locally.");
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.body}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}><Text style={s.back}>‹</Text></TouchableOpacity>
        <Text style={s.headerText}>Reply Message</Text>
      </View>
      <View style={s.content}>
        <Text style={s.title}>Contact Support</Text>
        <Text style={s.subtitle}>Write a message to customer service.</Text>
        <View style={s.support}>
          <Text style={s.supportIcon}>💬</Text>
          <View>
            <Text style={s.supportTitle}>Customer Service</Text>
            <Text style={s.muted}>Support conversation</Text>
          </View>
        </View>
        <Text style={s.label}>Subject</Text>
        <TextInput style={s.input} value={subject} onChangeText={setSubject} />
        <Text style={s.label}>Message</Text>
        <TextInput style={s.messageInput} multiline
          textAlignVertical="top"
          placeholder="Type your message..."
          value={message} onChangeText={setMessage} />
        {sent && <Text style={s.success}>✓ Demo message submitted</Text>}
        <TouchableOpacity style={s.button} onPress={send}>
          <Text style={s.white}>Send Message</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNext}>
          <Text style={s.link}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  body: { paddingBottom: 45 },
  header: { height: 95, backgroundColor: "#3525B5", flexDirection: "row", alignItems: "center", paddingHorizontal: 22 },
  back: { color: "#fff", fontSize: 31, marginRight: 23 },
  headerText: { color: "#fff", fontSize: 19, fontWeight: "bold" },
  content: { padding: 23 },
  title: { fontSize: 24, color: "#3525B5", fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 9 },
  support: { flexDirection: "row", alignItems: "center", padding: 17, backgroundColor: "#F5F3FF", borderRadius: 14, marginVertical: 28 },
  supportIcon: { fontSize: 32, marginRight: 13 },
  supportTitle: { fontWeight: "bold", color: "#3525B5" },
  muted: { color: "#999", fontSize: 12, marginTop: 5 },
  label: { color: "#555", marginBottom: 9 },
  input: { borderWidth: 1, borderColor: "#ddd", height: 50, borderRadius: 11, paddingHorizontal: 14, marginBottom: 20 },
  messageInput: { borderWidth: 1, borderColor: "#ddd", height: 160, borderRadius: 11, padding: 14 },
  success: { color: "#26A47B", marginTop: 16 },
  button: { backgroundColor: "#3525B5", borderRadius: 11, padding: 17, alignItems: "center", marginTop: 28 },
  white: { color: "#fff", fontWeight: "bold" },
  link: { color: "#3525B5", textAlign: "center", marginTop: 20 }
});
