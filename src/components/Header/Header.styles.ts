import styled from "styled-components";
import { typeScale } from "../../utils/typography";

export const LogoText = styled.span`
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
  font-size: ${typeScale.header1};
  color: ${(props) => props.theme.secondaryTextColor};
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
