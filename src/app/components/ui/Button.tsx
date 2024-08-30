import React from "react";

interface ButtonProps {
  label: string;
  variant?: "contained" | "outlined";
  startIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "contained",
  startIcon,
}) => {
  const baseClasses =
    "inline-flex items-center gap-[6px] rounded-lg px-[15px] py-[11px] text-[15px] font-medium focus:outline-none focus:ring";

  const containedClasses =
    "bg-primary text-white border border-transparent hover:bg-white hover:text-textGray hover:border-gray-300 active:text-indigo-500";

  const outlinedClasses =
    "bg-white text-textGray border border-gray-300 hover:bg-primary hover:text-white active:bg-indigo-500";

  const variantClasses =
    variant === "contained" ? containedClasses : outlinedClasses;

  return (
    <a className={`${baseClasses} ${variantClasses}`} href="#">
      {startIcon || null}
      <span>{label}</span>
    </a>
  );
};
