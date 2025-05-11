import { Text, Pressable } from "react-native";
import React from "react";

const Button = ({ onPress, className = "", children, disabled = false }) => {
  const defaultStyle = "p-4 bg-black rounded";
  const disabledStyles = "bg-gray-300 text-gray-300";

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`${defaultStyle} ${
        disabled ? disabledStyles : ""
      } ${className}`}
    >
      <Text className="text-white">{children}</Text>
    </Pressable>
  );
};

export default Button;
