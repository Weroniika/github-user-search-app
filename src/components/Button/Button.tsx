import * as SC from "./Button.styles";

type ButtonProps = {
  onCLick: () => void;
  children: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  return <SC.Button>{props.children}</SC.Button>;
};
