import React from "react";
import { TextInput } from "react-native";

export const SearchInList = () => {
  return (
    <TextInput
      placeholder="Search guests..."
      placeholderTextColor={"#999"}
      style={{
        backgroundColor: "#F2F2F7",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 8,
        paddingVertical: 14,
        color: "#000",
        marginTop: 16,
        fontSize: 16,
      }}
    />
  );
};
