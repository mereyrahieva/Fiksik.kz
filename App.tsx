
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

import SignIn from "./src/components/SignIn";
import SignUpEmpty from "./src/components/SignUpEmpty";
import SignUpFilled from "./src/components/SignUpFilled";
import ForgotPhoneEmpty from "./src/components/ForgotPhoneEmpty";
import ForgotPhoneFilled from "./src/components/ForgotPhoneFilled";
import ForgotCodeEmpty from "./src/components/ForgotCodeEmpty";
import ForgotCodeFilled from "./src/components/ForgotCodeFilled";
import ChangePasswordForm from "./src/components/ChangePasswordForm";
import ChangePasswordSuccess from "./src/components/ChangePasswordSuccess";
import Home from "./src/components/Home";
import Search from "./src/components/Search";
import Branch from "./src/components/Branch";
import InterestRate from "./src/components/InterestRate";
import ExchangeRate from "./src/components/ExchangeRate";
import Language from "./src/components/Language";
import ExchangeEmpty from "./src/components/ExchangeEmpty";
import ExchangeFilled from "./src/components/ExchangeFilled";
import ExchangeCurrencyModal from "./src/components/ExchangeCurrencyModal";
import TransferEmpty from "./src/components/TransferEmpty";
import TransferFilled from "./src/components/TransferFilled";
import TransferManualEmpty from "./src/components/TransferManualEmpty";
import TransferBeneficiaryFilled from "./src/components/TransferBeneficiaryFilled";

import TransferConfirmEmpty from "./src/components/TransferConfirmEmpty";
import TransferConfirmOTP from "./src/components/TransferConfirmOTP";
import TransferConfirmBiometric from "./src/components/TransferConfirmBiometric";
import TransferTouchDialog from "./src/components/TransferTouchDialog";
import TransferFingerprint from "./src/components/TransferFingerprint";
import TransferFaceEmpty from "./src/components/TransferFaceEmpty";
import TransferFaceReady from "./src/components/TransferFaceReady";
import TransferFaceProcessing from "./src/components/TransferFaceProcessing";
import TransferSuccess from "./src/components/TransferSuccess";
import TransferBankEmpty from "./src/components/TransferBankEmpty";
import TransferBankPicker from "./src/components/TransferBankPicker";
import TransferBankFilled from "./src/components/TransferBankFilled";
import TransferBankRecipient from "./src/components/TransferBankRecipient";
import TransferBankConfirm from "./src/components/TransferBankConfirm";
import Messages from "./src/components/Messages";
import MessageThread from "./src/components/MessageThread";
import MessageReply from "./src/components/MessageReply";
import Settings from "./src/components/Settings";
import AppInformation from "./src/components/AppInformation";
import ChangePasswordSettings from "./src/components/ChangePasswordSettings";
import TransactionReportChart from "./src/components/TransactionReportChart";
import TransactionReportList from "./src/components/TransactionReportList";

import Accounts from "./src/components/Accounts";
import Cards from "./src/components/Cards";
import CardDetail from "./src/components/CardDetail";
import WithdrawEmpty from "./src/components/WithdrawEmpty";
import WithdrawPreset from "./src/components/WithdrawPreset";
import WithdrawAccountModal from "./src/components/WithdrawAccountModal";
import WithdrawCustom from "./src/components/WithdrawCustom";
import WithdrawFilled from "./src/components/WithdrawFilled";
import WithdrawSuccess from "./src/components/WithdrawSuccess";
import MobileRechargeEmpty from "./src/components/MobileRechargeEmpty";
import MobileRechargeFilled from "./src/components/MobileRechargeFilled";
import MobileRechargeOTP from "./src/components/MobileRechargeOTP";
import MobileRechargeTouch from "./src/components/MobileRechargeTouch";
import MobileRechargeBiometric from "./src/components/MobileRechargeBiometric";
import MobileRechargeSuccess from "./src/components/MobileRechargeSuccess";
import Bills from "./src/components/Bills";
import PaymentHistoryElectric from "./src/components/PaymentHistoryElectric";
import PaymentHistoryInternet from "./src/components/PaymentHistoryInternet";
import ElectricPaymentDetail from "./src/components/ElectricPaymentDetail";
import InternetBillEmpty from "./src/components/InternetBillEmpty";
import InternetBillDetails from "./src/components/InternetBillDetails";
import InternetBillOTP from "./src/components/InternetBillOTP";

import InternetBillSuccess from "./src/components/InternetBillSuccess";
import SaveOnlineMenu from "./src/components/SaveOnlineMenu";
import SaveOnlineEmpty from "./src/components/SaveOnlineEmpty";
import SaveOnlineCardSelection from "./src/components/SaveOnlineCardSelection";
import SaveOnlineDepositPicker from "./src/components/SaveOnlineDepositPicker";
import SaveOnlineFilled from "./src/components/SaveOnlineFilled";
import SaveOnlineSuccess from "./src/components/SaveOnlineSuccess";
import AccountManagement from "./src/components/AccountManagement";
import BeneficiaryDirectory from "./src/components/BeneficiaryDirectory";
import BeneficiaryAddEmpty from "./src/components/BeneficiaryAddEmpty";
import BeneficiaryAddFilled from "./src/components/BeneficiaryAddFilled";
import BeneficiaryDetails from "./src/components/BeneficiaryDetails";
import CreditCardOverview from "./src/components/CreditCardOverview";
import CreditCardCheckout from "./src/components/CreditCardCheckout";
import CreditCardOTP from "./src/components/CreditCardOTP";
import CreditCardAccountModal from "./src/components/CreditCardAccountModal";
import CreditCardSuccess from "./src/components/CreditCardSuccess";
import PaymentDetail from "./src/components/PaymentDetail";
import ElectricBillEmpty from "./src/components/ElectricBillEmpty";
import ElectricBillFilled from "./src/components/ElectricBillFilled";
import ElectricBillDetails from "./src/components/ElectricBillDetails";
import ElectricBillOTP from "./src/components/ElectricBillOTP";
import ElectricBillSuccess from "./src/components/ElectricBillSuccess";

const screens = [
  SignIn,
  SignUpEmpty,
  SignUpFilled,
  ForgotPhoneEmpty,
  ForgotPhoneFilled,
  ForgotCodeEmpty,
  ForgotCodeFilled,
  ChangePasswordForm,
  ChangePasswordSuccess,
  Home,
  Search,
  Branch,
  InterestRate,
  ExchangeRate,
  Language,
  ExchangeEmpty,
  ExchangeFilled,
  ExchangeCurrencyModal,
  TransferEmpty,
  TransferFilled,
  TransferManualEmpty,
  TransferBeneficiaryFilled,

  TransferConfirmEmpty,
  TransferConfirmOTP,
  TransferConfirmBiometric,
  TransferTouchDialog,
  TransferFingerprint,
  TransferFaceEmpty,
  TransferFaceReady,
  TransferFaceProcessing,
  TransferSuccess,
  TransferBankEmpty,
  TransferBankPicker,
  TransferBankFilled,
  TransferBankRecipient,
  TransferBankConfirm,
  Messages,
  MessageThread,
  MessageReply,
  Settings,
  AppInformation,
  ChangePasswordSettings,
  TransactionReportChart,
  TransactionReportList,

  Accounts,
  Cards,
  CardDetail,
  WithdrawEmpty,
  WithdrawPreset,
  WithdrawAccountModal,
  WithdrawCustom,
  WithdrawFilled,
  WithdrawSuccess,
  MobileRechargeEmpty,
  MobileRechargeFilled,
  MobileRechargeOTP,
  MobileRechargeTouch,
  MobileRechargeBiometric,
  MobileRechargeSuccess,
  Bills,
  PaymentHistoryElectric,
  PaymentHistoryInternet,
  ElectricPaymentDetail,
  InternetBillEmpty,
  InternetBillDetails,
  InternetBillOTP,

  InternetBillSuccess,
  SaveOnlineMenu,
  SaveOnlineEmpty,
  SaveOnlineCardSelection,
  SaveOnlineDepositPicker,
  SaveOnlineFilled,
  SaveOnlineSuccess,
  AccountManagement,
  BeneficiaryDirectory,
  BeneficiaryAddEmpty,
  BeneficiaryAddFilled,
  BeneficiaryDetails,
  CreditCardOverview,
  CreditCardCheckout,
  CreditCardOTP,
  CreditCardAccountModal,
  CreditCardSuccess,
  PaymentDetail,
  ElectricBillEmpty,
  ElectricBillFilled,
  ElectricBillDetails,
  ElectricBillOTP,
  ElectricBillSuccess,
] as const;

export default function App() {
  const [history, setHistory] = useState<number[]>([0]);

  const currentIndex = history[history.length - 1];
  const CurrentScreen = screens[currentIndex];

  const goTo = (index: number) => {
    if (index < 0 || index >= screens.length) return;
    setHistory(previous => [...previous, index]);
  };

  const next = () => {
    goTo((currentIndex + 1) % screens.length);
  };

  const back = () => {
    setHistory(previous =>
      previous.length > 1
        ? previous.slice(0, -1)
        : previous
    );
  };

  const home = () => {
    setHistory([9]);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <CurrentScreen
        onNext={next}
        onBack={back}
        onHome={home}
      />

      <View style={styles.navigation}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={back}
        >
          <Text style={styles.navText}>‹ Back</Text>
        </TouchableOpacity>

        <Text style={styles.counter}>
          {currentIndex + 1} / {screens.length}
        </Text>

        <TouchableOpacity
          style={styles.navButton}
          onPress={next}
        >
          <Text style={styles.navText}>Next ›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
  },
  navButton: {
    backgroundColor: "#3525B5",
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 10,
  },
  navText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  counter: {
    color: "#3525B5",
    fontSize: 14,
    fontWeight: "bold",
  },
});
