import Toast from "react-native-toast-message";

export function showError(message) {
  Toast.show({
    type: "error",
    text1: "Error",
    text2: message || "Something went wrong",
    position: "top",
  });
}
