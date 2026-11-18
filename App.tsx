
import React, { useEffect, useState } from "react";
import {
  View,
  StatusBar,
  BackHandler,
  Alert
} from "react-native";

import { BankProvider } from "./src/components/BankStore";

// КІРУ ЖӘНЕ ТІРКЕЛУ
import SignIn from "./src/components/SignIn";
import SignUpEmpty from "./src/components/SignUpEmpty";
import SignUpFilled from "./src/components/SignUpFilled";
import ForgotPhoneEmpty from "./src/components/ForgotPhoneEmpty";
import ForgotPhoneFilled from "./src/components/ForgotPhoneFilled";
import ForgotCodeEmpty from "./src/components/ForgotCodeEmpty";
import ForgotCodeFilled from "./src/components/ForgotCodeFilled";
import ChangePasswordForm from "./src/components/ChangePasswordForm";
import ChangePasswordSuccess from "./src/components/ChangePasswordSuccess";

// БАСТЫ БӨЛІМ
import Home from "./src/components/Home";
import Search from "./src/components/Search";
import Branch from "./src/components/Branch";
import InterestRate from "./src/components/InterestRate";
import ExchangeRate from "./src/components/ExchangeRate";
import Language from "./src/components/Language";
import ExchangeEmpty from "./src/components/ExchangeEmpty";
import ExchangeFilled from "./src/components/ExchangeFilled";
import ExchangeCurrencyModal from "./src/components/ExchangeCurrencyModal";

// АҚША АУДАРЫМДАРЫ
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

// ХАБАРЛАМАЛАР
import Messages from "./src/components/Messages";
import MessageThread from "./src/components/MessageThread";
import MessageReply from "./src/components/MessageReply";

// БАПТАУЛАР
import Settings from "./src/components/Settings";
import AppInformation from "./src/components/AppInformation";
import ChangePasswordSettings from "./src/components/ChangePasswordSettings";
import TransactionReportChart from "./src/components/TransactionReportChart";
import TransactionReportList from "./src/components/TransactionReportList";

// ШОТТАР МЕН КАРТАЛАР
import AccountManagement from "./src/components/AccountManagement";
import Accounts from "./src/components/Accounts";
import Cards from "./src/components/Cards";
import CardDetail from "./src/components/CardDetail";

// ҚАРАЖАТ АЛУ
import WithdrawEmpty from "./src/components/WithdrawEmpty";
import WithdrawAccountModal from "./src/components/WithdrawAccountModal";
import WithdrawPreset from "./src/components/WithdrawPreset";
import WithdrawCustom from "./src/components/WithdrawCustom";
import WithdrawFilled from "./src/components/WithdrawFilled";
import WithdrawSuccess from "./src/components/WithdrawSuccess";

// ҰЯЛЫ БАЙЛАНЫС
import MobileRechargeEmpty from "./src/components/MobileRechargeEmpty";
import MobileRechargeFilled from "./src/components/MobileRechargeFilled";
import MobileRechargeOTP from "./src/components/MobileRechargeOTP";
import MobileRechargeBiometric from "./src/components/MobileRechargeBiometric";
import MobileRechargeTouch from "./src/components/MobileRechargeTouch";
import MobileRechargeSuccess from "./src/components/MobileRechargeSuccess";

// ТӨЛЕМДЕР
import Bills from "./src/components/Bills";
import PaymentDetail from "./src/components/PaymentDetail";
import InternetBillEmpty from "./src/components/InternetBillEmpty";
import InternetBillDetails from "./src/components/InternetBillDetails";
import InternetBillOTP from "./src/components/InternetBillOTP";
import InternetBillSuccess from "./src/components/InternetBillSuccess";
import ElectricPaymentDetail from "./src/components/ElectricPaymentDetail";
import ElectricBillEmpty from "./src/components/ElectricBillEmpty";
import ElectricBillFilled from "./src/components/ElectricBillFilled";
import ElectricBillDetails from "./src/components/ElectricBillDetails";
import ElectricBillOTP from "./src/components/ElectricBillOTP";
import ElectricBillSuccess from "./src/components/ElectricBillSuccess";
import PaymentHistoryElectric from "./src/components/PaymentHistoryElectric";
import PaymentHistoryInternet from "./src/components/PaymentHistoryInternet";

// ДЕПОЗИТТЕР — СЕНДЕГІ НАҚТЫ АТАУЛАР
import SaveOnlineMenu from "./src/components/SaveOnlineMenu";
import SaveOnlineEmpty from "./src/components/SaveOnlineEmpty";
import SaveOnlineFilled from "./src/components/SaveOnlineFilled";
import SaveOnlineCardSelection from "./src/components/SaveOnlineCardSelection";
import SaveOnlineDepositPicker from "./src/components/SaveOnlineDepositPicker";
import SaveOnlineSuccess from "./src/components/SaveOnlineSuccess";

// АЛУШЫЛАР
import BeneficiaryDirectory from "./src/components/BeneficiaryDirectory";
import BeneficiaryAddEmpty from "./src/components/BeneficiaryAddEmpty";
import BeneficiaryAddFilled from "./src/components/BeneficiaryAddFilled";
import BeneficiaryDetails from "./src/components/BeneficiaryDetails";

// НЕСИЕ КАРТАСЫ — СЕНДЕГІ НАҚТЫ АТАУЛАР
import CreditCardOverview from "./src/components/CreditCardOverview";
import CreditCardCheckout from "./src/components/CreditCardCheckout";
import CreditCardAccountModal from "./src/components/CreditCardAccountModal";
import CreditCardOTP from "./src/components/CreditCardOTP";
import CreditCardSuccess from "./src/components/CreditCardSuccess";

// БАРЛЫҚ БАР ЭКРАНДАР
const screens = {
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

  AccountManagement,
  Accounts,
  Cards,
  CardDetail,

  WithdrawEmpty,
  WithdrawAccountModal,
  WithdrawPreset,
  WithdrawCustom,
  WithdrawFilled,
  WithdrawSuccess,

  MobileRechargeEmpty,
  MobileRechargeFilled,
  MobileRechargeOTP,
  MobileRechargeBiometric,
  MobileRechargeTouch,
  MobileRechargeSuccess,

  Bills,
  PaymentDetail,
  InternetBillEmpty,
  InternetBillDetails,
  InternetBillOTP,
  InternetBillSuccess,
  ElectricPaymentDetail,
  ElectricBillEmpty,
  ElectricBillFilled,
  ElectricBillDetails,
  ElectricBillOTP,
  ElectricBillSuccess,
  PaymentHistoryElectric,
  PaymentHistoryInternet,

  SaveOnlineMenu,
  SaveOnlineEmpty,
  SaveOnlineFilled,
  SaveOnlineCardSelection,
  SaveOnlineDepositPicker,
  SaveOnlineSuccess,

  BeneficiaryDirectory,
  BeneficiaryAddEmpty,
  BeneficiaryAddFilled,
  BeneficiaryDetails,

  CreditCardOverview,
  CreditCardCheckout,
  CreditCardAccountModal,
  CreditCardOTP,
  CreditCardSuccess
};

type ScreenName = keyof typeof screens;

// Бұрынғы кодтардағы атауларды сәйкестендіру
const aliases: Record<string, ScreenName> = {
  Main: "Home",
  Dashboard: "Home",
  Login: "SignIn",
  Register: "SignUpEmpty",

  MyCards: "Cards",
  MyAccounts: "Accounts",
  Transfers: "TransferEmpty",
  Payments: "Bills",

  Deposits: "SaveOnlineMenu",
  Deposit: "SaveOnlineMenu",
  SaveOnline: "SaveOnlineMenu",

  SaveOnlineAccountModal: "SaveOnlineCardSelection",
  SaveOnlineConfirm: "SaveOnlineDepositPicker",

  CreditCard: "CreditCardOverview",
  CreditCardDetails: "CreditCardOverview",

  Notifications: "Messages",
  Profile: "Settings",

  MobileRecharge: "MobileRechargeEmpty",
  MobileTopUp: "MobileRechargeEmpty",

  TransactionHistory: "TransactionReportList"
};

type NavigationProps = {
  onNavigate: (screen: string) => void;
  onBack: () => void;
};

function BankNavigation() {
  const [history, setHistory] = useState<ScreenName[]>([
    "SignIn"
  ]);

  const currentName = history[history.length - 1];

  function navigate(screen: string) {
    const destination = aliases[screen] ?? screen;

    if (!(destination in screens)) {
      Alert.alert(
        "Экран табылмады",
        `${screen} бөлімі табылмады.`
      );
      return;
    }

    const target = destination as ScreenName;

    if (target === "Home" || target === "SignIn") {
      setHistory([target]);
      return;
    }

    if (target === currentName) {
      return;
    }

    setHistory(previous => [...previous, target]);
  }

  function goBack() {
    setHistory(previous =>
      previous.length > 1
        ? previous.slice(0, -1)
        : previous
    );
  }

  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (history.length > 1) {
          goBack();
          return true;
        }
        return false;
      }
    );

    return () => subscription.remove();
  }, [history.length]);

  const CurrentScreen = screens[currentName] as
    React.ComponentType<NavigationProps>;

  return (
    <View style={{
      flex: 1,
      backgroundColor: "#F4FAF7"
    }}>
      <StatusBar barStyle="dark-content" />

      <CurrentScreen
        onNavigate={navigate}
        onBack={goBack}
      />
    </View>
  );
}

export default function App() {
  return (
    <BankProvider>
      <BankNavigation />
    </BankProvider>
  );
}
