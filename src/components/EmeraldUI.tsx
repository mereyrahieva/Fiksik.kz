
import React, { ReactNode, useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, StyleSheet, KeyboardTypeOptions,
  StatusBar, Alert
} from "react-native";

export const C = {
  green: "#059669",
  dark: "#064E3B",
  deep: "#022C22",
  light: "#D1FAE5",
  mint: "#ECFDF5",
  white: "#FFFFFF",
  bg: "#F4FAF7",
  text: "#102C25",
  gray: "#71847D",
  border: "#DCEBE4",
  red: "#DC2626",
  gold: "#FBBF24"
};

export type ScreenProps = {
  onNavigate: (screen: string) => void;
  onBack: () => void;
};

export function Page({
  title, onBack, children
}: {
  title: string;
  onBack?: () => void;
  children: ReactNode;
}) {
  return (
    <View style={s.root}>
      <StatusBar barStyle="dark-content" backgroundColor={C.bg} />
      <View style={s.header}>
        {onBack && (
          <TouchableOpacity style={s.back} onPress={onBack}>
            <Text style={s.backText}>‹</Text>
          </TouchableOpacity>
        )}
        <Text style={s.headerTitle}>{title}</Text>
        <View style={{ width: 36 }} />
      </View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={s.content}
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
    <View style={{ marginBottom: 24 }}>
      <Text style={s.heading}>{title}</Text>
      {!!subtitle && <Text style={s.subtitle}>{subtitle}</Text>}
    </View>
  );
}

export function Card({
  children, dark = false
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <View style={[s.card, dark && s.darkCard]}>
      {children}
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
      activeOpacity={0.8}
      disabled={disabled}
      onPress={onPress}
      style={[
        s.button,
        secondary && s.secondaryButton,
        disabled && { opacity: 0.45 }
      ]}
    >
      <Text style={[
        s.buttonText,
        secondary && { color: C.green }
      ]}>{title}</Text>
    </TouchableOpacity>
  );
}

export function Field({
  label, value, onChangeText, placeholder,
  keyboardType = "default", secureTextEntry = false
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ marginBottom: 17 }}>
      <Text style={s.fieldLabel}>{label}</Text>
      <View style={s.inputWrap}>
        <TextInput
          style={s.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#94A79E"
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry && !visible}
          autoCapitalize="none"
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setVisible(!visible)}
            style={{ padding: 8 }}
          >
            <Text style={{ color: C.green }}>
              {visible ? "Жасыру" : "Көрсету"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
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
    <TouchableOpacity style={s.menu} onPress={onPress}>
      <View style={s.menuIcon}>
        <Text style={{ fontSize: 23 }}>{icon}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={s.menuTitle}>{title}</Text>
        {!!subtitle && <Text style={s.menuSubtitle}>{subtitle}</Text>}
      </View>
      <Text style={{ fontSize: 23, color: C.gray }}>›</Text>
    </TouchableOpacity>
  );
}

export function Info({ text }: { text: string }) {
  return (
    <View style={s.info}>
      <Text style={s.infoText}>ⓘ  {text}</Text>
    </View>
  );
}

export function Check({
  title, value, onPress
}: {
  title: string;
  value: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={s.checkRow} onPress={onPress}>
      <View style={[s.checkbox, value && s.checked]}>
        {value && <Text style={{ color: "white" }}>✓</Text>}
      </View>
      <Text style={{ flex: 1, color: C.text }}>{title}</Text>
    </TouchableOpacity>
  );
}

export function Success({
  title, subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <View style={s.success}>
      <View style={s.successIcon}>
        <Text style={{ fontSize: 45, color: C.white }}>✓</Text>
      </View>
      <Text style={s.successTitle}>{title}</Text>
      {!!subtitle && <Text style={s.subtitle}>{subtitle}</Text>}
    </View>
  );
}

export function SectionTitle({ title }: { title: string }) {
  return <Text style={s.sectionTitle}>{title}</Text>;
}

export function QuickActions({
  items
}: {
  items: { icon: string; title: string; onPress: () => void }[];
}) {
  return (
    <View style={s.actions}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={s.action}
          onPress={item.onPress}
        >
          <View style={s.actionIcon}>
            <Text style={{ fontSize: 26 }}>{item.icon}</Text>
          </View>
          <Text style={s.actionTitle}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export function BottomNav({
  onNavigate,
  active = "Home"
}: {
  onNavigate: (name: string) => void;
  active?: string;
}) {
  const tabs = [
    { id: "Home", icon: "⌂", title: "Басты бет" },
    { id: "TransferEmpty", icon: "⇄", title: "Аударым" },
    { id: "Bills", icon: "▦", title: "Төлемдер" },
    { id: "Cards", icon: "▣", title: "Карталар" },
    { id: "Settings", icon: "⚙", title: "Баптаулар" }
  ];

  return (
    <View style={s.nav}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.id}
          style={s.navItem}
          onPress={() => onNavigate(tab.id)}
        >
          <Text style={{
            fontSize: 23,
            color: active === tab.id ? C.green : C.gray
          }}>{tab.icon}</Text>
          <Text style={{
            fontSize: 9,
            marginTop: 4,
            color: active === tab.id ? C.green : C.gray,
            fontWeight: active === tab.id ? "800" : "400"
          }}>{tab.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export const money = (amount: number) =>
  `${amount.toLocaleString("kk-KZ")} ₸`;

export function validateAmount(
  text: string,
  balance: number
): number | null {
  const amount = Number(text.replace(",", ".").trim());

  if (!Number.isFinite(amount) || amount <= 0) {
    Alert.alert("Қате", "Дұрыс сома енгізіңіз.");
    return null;
  }

  if (amount > balance) {
    Alert.alert("Қаражат жеткіліксіз", "Шот балансын тексеріңіз.");
    return null;
  }

  return amount;
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  header: {
    height: 62,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    backgroundColor: C.white
  },
  back: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: C.mint,
    alignItems: "center",
    justifyContent: "center"
  },
  backText: { fontSize: 29, color: C.dark, marginTop: -4 },
  headerTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: C.dark
  },
  content: { padding: 20, paddingBottom: 48 },
  heading: {
    fontSize: 27,
    fontWeight: "900",
    color: C.dark,
    marginBottom: 7
  },
  subtitle: {
    fontSize: 14,
    color: C.gray,
    lineHeight: 22
  },
  card: {
    backgroundColor: C.white,
    padding: 20,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: C.border,
    marginBottom: 17
  },
  darkCard: {
    backgroundColor: C.dark,
    borderColor: C.dark
  },
  button: {
    backgroundColor: C.green,
    borderRadius: 15,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12
  },
  secondaryButton: {
    backgroundColor: C.mint,
    borderWidth: 1,
    borderColor: "#B7E8D4"
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "800",
    color: C.white
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: C.dark,
    marginBottom: 9
  },
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: C.white,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: C.border,
    paddingHorizontal: 14,
    minHeight: 55
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: C.text,
    paddingVertical: 13
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottomColor: C.border,
    borderBottomWidth: 1,
    paddingVertical: 13,
    gap: 10
  },
  detailLabel: { color: C.gray, fontSize: 13, flex: 1 },
  detailValue: {
    color: C.dark,
    fontSize: 14,
    fontWeight: "700",
    flex: 1,
    textAlign: "right"
  },
  menu: {
    backgroundColor: C.white,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 18,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 11,
    gap: 12
  },
  menuIcon: {
    width: 49,
    height: 49,
    borderRadius: 15,
    backgroundColor: C.mint,
    alignItems: "center",
    justifyContent: "center"
  },
  menuTitle: {
    color: C.dark,
    fontSize: 15,
    fontWeight: "800"
  },
  menuSubtitle: {
    color: C.gray,
    fontSize: 12,
    marginTop: 5
  },
  info: {
    backgroundColor: "#E9F8F0",
    padding: 14,
    borderRadius: 14,
    marginVertical: 10
  },
  infoText: { color: C.dark, lineHeight: 20, fontSize: 12 },
  checkRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    marginVertical: 17
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: C.green,
    alignItems: "center",
    justifyContent: "center"
  },
  checked: { backgroundColor: C.green },
  success: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30
  },
  successIcon: {
    height: 105,
    width: 105,
    borderRadius: 55,
    backgroundColor: C.green,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22
  },
  successTitle: {
    fontSize: 25,
    color: C.dark,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 10
  },
  sectionTitle: {
    color: C.dark,
    fontSize: 18,
    fontWeight: "800",
    marginTop: 16,
    marginBottom: 15
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 15
  },
  action: {
    width: "24%",
    alignItems: "center",
    marginVertical: 8
  },
  actionIcon: {
    width: 60,
    height: 60,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: C.mint,
    marginBottom: 9
  },
  actionTitle: {
    color: C.dark,
    fontSize: 11,
    textAlign: "center",
    fontWeight: "600"
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 14,
    paddingBottom: 13,
    borderTopWidth: 1,
    borderColor: C.border,
    backgroundColor: C.white
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
