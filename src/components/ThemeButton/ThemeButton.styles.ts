import styled from "styled-components";
import { typeScale } from "../../utils/typography";

export const ThemeButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  span {
    text-transform: uppercase;
    font-size: ${typeScale.header3};
    margin-right: 1rem;
    line-height: 1.1875rem;
    font-weight: 700;
    color: ${(props) => props.theme.primaryTextColor};
  }

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    span {
      color: ${(props) => props.theme.primaryTextHoverColor};
    }

    svg {
      path {
        fill: ${(props) => props.theme.primaryTextHoverColor};
      }
    }
  }
`;
