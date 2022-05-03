import * as SC from "./Button.styles";

type ButtonProps = {
  onCLick?: () => void;
  children: React.ReactNode;
  type?: "submit" | "button" | "reset" | undefined;
};

export const Button = ({ type = "submit", children, onCLick }: ButtonProps) => {
  return <SC.Button type={type}>{children}</SC.Button>;
};
