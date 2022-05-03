import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    primaryHoverColor: string;
    primaryTextColor: string;
    primaryTextHoverColor: string;
    secondaryTextColor: string;
    primaryBackgroundColor: string;
    secondaryBackgroundColor: string;
    primaryFont: string;
  }
  export interface DarkTheme {
    primaryColor: string;
    primaryHoverColor: string;
    primaryTextColor: string;
    primaryTextHoverColor: string;
    secondaryTextColor: string;
    primaryBackgroundColor: string;
    secondaryBackgroundColor: string;
    primaryFont: string;
  }
}
