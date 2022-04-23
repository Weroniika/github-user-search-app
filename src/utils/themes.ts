import { neutral, blue } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: blue[100],
  primaryHoverColor: blue[200],
  primaryTextColor: blue[400],
  primaryTextHoverColor: neutral[600],
  secondaryTextColor: neutral[600],
  primaryBackgroundColor: neutral[200],
  secondaryBackgroundColor: neutral[300],
  primaryFont,
};

export const darkTheme = {
  primaryColor: blue[100],
  primaryHoverColor: blue[200],
  primaryTextColor: neutral[100],
  primaryTextHoverColor: blue[500],
  secondaryTextColor: neutral[600],
  primaryBackgroundColor: neutral[400],
  secondaryBackgroundColor: neutral[500],
  primaryFont,
};
