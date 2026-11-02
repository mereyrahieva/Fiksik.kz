import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = {
  onBack?: () => void;
  onNext?: () => void;
};

export default function InternetBillOTP({
  onBack, onNext
}: Props) {
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);

  function verify() {
    if (code.length !== 6) {
      Alert.alert("Verification", "Enter a 6-digit code");
      return;
    }

    if (code !== "123456") {
      Alert.alert("Incorrect Code", "Demo code is 123456");
      return;
    }

    setVerified(true);

    Alert.alert(
      "Verification Successful",
      "Demo internet bill payment confirmed.",
      [{ text: "Continue", onPress: onNext }]
    );
  }

  return (
    <ScrollView
      style={s.page}
      contentContainerStyle={s.body}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>‹  Internet Bill</Text>
      </TouchableOpacity>

      <View style={s.hero}>
        <Text style={s.icon}>🔐</Text>
      </View>

      <Text style={s.title}>Payment Verification</Text>
      <Text style={s.subtitle}>
        Enter the verification code to confirm
        your internet bill payment.
      </Text>

      <View style={s.paymentCard}>
        <Text style={s.provider}>Home Internet</Text>
        <Text style={s.amount}>$35.00</Text>
        <Text style={s.cardNumber}>From: •••• 4589</Text>
      </View>

      <Text style={s.label}>Verification Code</Text>
      <TextInput
        style={s.input}
        value={code}
        onChangeText={value => {
          setCode(value.replace(/\D/g, "").slice(0, 6));
          setVerified(false);
        }}
        maxLength={6}
        keyboardType="number-pad"
        placeholder="000000"
        textAlign="center"
      />

      <TouchableOpacity
        onPress={() => Alert.alert("Demo Code", "123456")}
      >
        <Text style={s.resend}>Didn't receive a code? Resend</Text>
      </TouchableOpacity>

      <View style={s.info}>
        <Text style={s.infoText}>
          This is a demonstration. Use 123456
          to complete the payment verification.
        </Text>
      </View>

      {verified && (
        <Text style={s.success}>✓ Verification successful</Text>
      )}

      <TouchableOpacity style={s.button} onPress={verify}>
        <Text style={s.white}>Verify & Confirm</Text>
      </TouchableOpacity>

      <Text style={s.note}>
        No real internet bill payment is processed.
      </Text>
    </ScrollView>
  );
}

const PURPLE = "#3525B5";

const s = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  body: {
    padding: 24,
    paddingBottom: 50
  },
  back: {
    color: PURPLE,
    fontSize: 19,
    marginBottom: 15
  },
  hero: {
    height: 165,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    fontSize: 83
  },
  title: {
    color: PURPLE,
    fontSize: 25,
    fontWeight: "bold"
  },
  subtitle: {
    color: "#888",
    lineHeight: 22,
    marginTop: 12,
    marginBottom: 27
  },
  paymentCard: {
    backgroundColor: "#F4F2FF",
    borderRadius: 16,
    padding: 23,
    alignItems: "center",
    marginBottom: 27
  },
  provider: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333"
  },
  amount: {
    color: PURPLE,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 12
  },
  cardNumber: {
    fontSize: 12,
    color: "#999",
    marginTop: 10
  },
  label: {
    color: "#666",
    fontSize: 13,
    marginBottom: 9
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: "#D4CFF5",
    borderRadius: 11,
    fontSize: 24,
    letterSpacing: 7,
    color: PURPLE
  },
  resend: {
    color: PURPLE,
    textAlign: "right",
    marginTop: 19,
    fontWeight: "bold",
    fontSize: 12
  },
  info: {
    backgroundColor: "#F7F6FC",
    padding: 16,
    borderRadius: 12,
    marginTop: 27
  },
  infoText: {
    color: "#888",
    lineHeight: 20,
    fontSize: 12
  },
  success: {
    color: "#24A879",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20
  },
  button: {
    backgroundColor: PURPLE,
    borderRadius: 11,
    padding: 17,
    alignItems: "center",
    marginTop: 28
  },
  white: {
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  note: {
    color: "#AAA",
    fontSize: 11,
    textAlign: "center",
    marginTop: 17
  }
});