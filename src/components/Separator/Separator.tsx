import React from "react";

type SeparatorType = "vertical" | "horizontal";

interface SeparatorProps {
  separator_type: SeparatorType;
}

export default function Separator({ separator_type }: SeparatorProps) {
  const separatorStyle = {
    width: separator_type === "vertical" ? "1px" : "100%",
    height: separator_type === "vertical" ? "100%" : "1px",
    backgroundColor: "red",
  };

  return <div className="separator" style={separatorStyle} />;
}
