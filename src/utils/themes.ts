import { neutral, blue } from "./colors";
import { primaryFont } from "./typography";

type Theme = {
  primaryColor: string;
  primaryHoverColor: string;
  primaryTextColor: string;
  primaryTextHoverColor: string;
  secondaryTextColor: string;
  primaryBackgroundColor: string;
  secondaryBackgroundColor: string;
  primaryFont: string;
};

export const defaultTheme: Theme = {
  primaryColor: blue[100],
  primaryHoverColor: blue[200],
  primaryTextColor: blue[400],
  primaryTextHoverColor: neutral[600]!,
  secondaryTextColor: neutral[600]!,
  primaryBackgroundColor: neutral[200],
  secondaryBackgroundColor: neutral[100],
  primaryFont,
};

export const darkTheme: Theme = {
  primaryColor: blue[100],
  primaryHoverColor: blue[200],
  primaryTextColor: neutral[100],
  primaryTextHoverColor: blue[500],
  secondaryTextColor: neutral[100],
  primaryBackgroundColor: neutral[500],
  secondaryBackgroundColor: neutral[400],
  primaryFont,
};
