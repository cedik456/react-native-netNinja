import Toast from "react-native-toast-message";

export function showError(title, message) {
  const fullMessage = message ? `${title}, ${message}` : title;
  Toast.show({
    type: "error",
    text1: fullMessage,
    position: "top",
  });
}
