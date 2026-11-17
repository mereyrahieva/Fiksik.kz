
import React from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, StyleSheet,
  KeyboardTypeOptions
} from "react-native";

export const C = {
  dark: "#065F46",
  green: "#047857",
  bright: "#10B981",
  light: "#D1FAE5",
  bg: "#F3FAF7",
  white: "#FFFFFF",
  text: "#193B30",
  muted: "#71847C",
  border: "#D8EAE0"
};

export type ScreenProps = {
  onNavigate: (screen: string) => void;
  onBack: () => void;
};

export function Page({
  title, onBack, children, home = false
}: {
  title: string;
  onBack?: () => void;
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <View style={s.page}>
      <View style={s.header}>
        {!home && onBack && (
          <TouchableOpacity onPress={onBack} style={s.backBtn}>
            <Text style={s.back}>‹</Text>
          </TouchableOpacity>
        )}
        <Text style={s.headerTitle}>{title}</Text>
        <Text style={s.headerLogo}>✦</Text>
      </View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={s.body}
      >
        {children}
      </ScrollView>
    </View>
  );
}

export function Heading({
  title, subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <View style={{ marginBottom: 22 }}>
      <Text style={s.title}>{title}</Text>
      {subtitle && <Text style={s.subtitle}>{subtitle}</Text>}
    </View>
  );
}

export function Field({
  label, value, onChangeText, placeholder,
  keyboardType = "default", secureTextEntry = false,
  multiline = false
}: {
  label: string;
  value: string;
  onChangeText: (v: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  multiline?: boolean;
}) {
  return (
    <View style={{ marginBottom: 17 }}>
      <Text style={s.label}>{label}</Text>
      <TextInput
        style={[s.input, multiline && { height: 100, textAlignVertical: "top" }]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CAFA6"
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
      />
    </View>
  );
}

export function Button({
  title, onPress, secondary = false, disabled = false
}: {
  title: string;
  onPress: () => void;
  secondary?: boolean;
  disabled?: boolean;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      style={[
        s.button,
        secondary && s.secondary,
        disabled && { opacity: 0.45 }
      ]}
    >
      <Text style={[s.buttonText, secondary && s.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export function Card({
  children, dark = false
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <View style={[s.card, dark && s.darkCard]}>
      {children}
    </View>
  );
}

export function Detail({
  label, value
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={s.detail}>
      <Text style={s.detailLabel}>{label}</Text>
      <Text style={s.detailValue}>{value}</Text>
    </View>
  );
}

export function Menu({
  icon, title, subtitle, onPress
}: {
  icon: string;
  title: string;
  subtitle?: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={s.menu}>
      <View style={s.menuIcon}><Text style={{ fontSize: 22 }}>{icon}</Text></View>
      <View style={{ flex: 1 }}>
        <Text style={s.menuTitle}>{title}</Text>
        {subtitle && <Text style={s.menuSubtitle}>{subtitle}</Text>}
      </View>
      <Text style={s.arrow}>›</Text>
    </TouchableOpacity>
  );
}

export function Info({ text }: { text: string }) {
  return (
    <View style={s.info}>
      <Text style={s.infoText}>{text}</Text>
    </View>
  );
}

export function Check({
  value, onPress, title
}: {
  value: boolean;
  onPress: () => void;
  title: string;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={s.checkRow}>
      <Text style={s.check}>{value ? "☑" : "□"}</Text>
      <Text style={s.checkText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function Success({ title, subtitle }: {
  title: string;
  subtitle: string;
}) {
  return (
    <View style={s.success}>
      <View style={s.successCircle}><Text style={s.tick}>✓</Text></View>
      <Text style={s.successTitle}>{title}</Text>
      <Text style={s.subtitle}>{subtitle}</Text>
    </View>
  );
}

export const common = StyleSheet.create({
  section: {
    fontSize: 17, fontWeight: "700",
    color: C.text, marginTop: 24, marginBottom: 14
  },
  muted: { color: C.muted, fontSize: 13 },
  amount: { fontSize: 28, fontWeight: "800", color: C.dark },
  link: { color: C.green, fontWeight: "700" },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: C.bg },
  header: {
    backgroundColor: C.dark,
    minHeight: 86,
    paddingHorizontal: 21,
    flexDirection: "row",
    alignItems: "center",
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23
  },
  backBtn: { paddingRight: 18, paddingVertical: 10 },
  back: { fontSize: 33, color: C.white },
  headerTitle: {
    color: C.white, fontSize: 20,
    fontWeight: "800", flex: 1
  },
  headerLogo: { color: "#A7F3D0", fontSize: 26 },
  body: { padding: 21, paddingBottom: 55 },
  title: { fontSize: 25, fontWeight: "800", color: C.dark },
  subtitle: { fontSize: 13, color: C.muted, lineHeight: 21, marginTop: 9 },
  label: { fontSize: 13, color: C.text, fontWeight: "600", marginBottom: 8 },
  input: {
    height: 53, borderWidth: 1, borderColor: C.border,
    backgroundColor: C.white, borderRadius: 13,
    paddingHorizontal: 15, color: C.text, fontSize: 15
  },
  button: {
    backgroundColor: C.green, paddingVertical: 17,
    borderRadius: 13, alignItems: "center", marginTop: 14
  },
  buttonText: { color: C.white, fontSize: 15, fontWeight: "700" },
  secondary: { backgroundColor: C.white, borderWidth: 1, borderColor: C.green },
  secondaryText: { color: C.dark },
  card: {
    backgroundColor: C.white, padding: 19,
    borderRadius: 17, marginBottom: 13,
    borderWidth: 1, borderColor: C.border
  },
  darkCard: { backgroundColor: C.dark, borderColor: C.dark },
  detail: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", paddingVertical: 13,
    borderBottomWidth: 1, borderColor: C.border
  },
  detailLabel: { flex: 1, color: C.muted, fontSize: 12 },
  detailValue: { color: C.text, fontWeight: "700", fontSize: 13 },
  menu: {
    backgroundColor: C.white, flexDirection: "row",
    alignItems: "center", padding: 14, borderRadius: 14,
    marginBottom: 10, borderWidth: 1, borderColor: C.border
  },
  menuIcon: {
    height: 45, width: 45, backgroundColor: C.light,
    borderRadius: 13, alignItems: "center", justifyContent: "center",
    marginRight: 12
  },
  menuTitle: { color: C.text, fontSize: 14, fontWeight: "700" },
  menuSubtitle: { color: C.muted, fontSize: 11, marginTop: 5 },
  arrow: { fontSize: 27, color: C.green },
  info: {
    backgroundColor: C.light, padding: 15,
    borderRadius: 13, marginVertical: 14
  },
  infoText: { color: C.dark, fontSize: 12, lineHeight: 20 },
  checkRow: { flexDirection: "row", alignItems: "center", marginVertical: 13 },
  check: { color: C.green, fontSize: 25, marginRight: 11 },
  checkText: { color: C.text, fontSize: 13, flex: 1 },
  success: { alignItems: "center", paddingVertical: 45 },
  successCircle: {
    width: 120, height: 120, borderRadius: 60,
    backgroundColor: C.light, justifyContent: "center", alignItems: "center"
  },
  tick: { color: C.green, fontSize: 76, fontWeight: "800" },
  successTitle: {
    fontSize: 23, color: C.dark, fontWeight: "800",
    textAlign: "center", marginTop: 26
  }
});
