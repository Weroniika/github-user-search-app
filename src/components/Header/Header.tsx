import { ReactComponent as LogoCompany } from "../../assets/icon-company.svg";
import { ThemeButton } from "../ThemeButton/ThemeButton";
import * as SC from "./Header.styles";

export const Header = () => {
  return (
    <SC.Header>
      <SC.LogoText>devfinder</SC.LogoText>
      <ThemeButton />
    </SC.Header>
  );
};
