import { Alert, Linking } from 'react-native';

export const triggerUPIIntent = async (amount: number, vpa: string = "after7@bank") => {
  const transactionId = `A7-${Math.floor(Math.random() * 1000000)}`;
  const upiUrl = `upi://pay?pa=${vpa}&pn=After7&am=${amount}&cu=INR&tid=${transactionId}`;

  const supported = await Linking.canOpenURL(upiUrl);

  if (supported) {
    // In a real 2026 environment, this triggers the OS-level selector
    await Linking.openURL(upiUrl);
  } else {
    Alert.alert("UPI Error", "No compatible UPI app (GPay/PhonePe) found.");
  }
};