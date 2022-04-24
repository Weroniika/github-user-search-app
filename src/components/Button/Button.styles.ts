import styled from "styled-components";

import { blue, neutral } from "../../utils/colors";

export const Button = styled.button`
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  cursor: pointer;
  padding: 0.7813rem 1rem;
  background-color: ${blue[100]};
  color: ${neutral[100]};
  border-radius: 0.625rem;
  border: none;
  text-transform: capitalize;
  transition: background-color 0.4s linear;

  &:hover {
    background-color: ${blue[200]};
  }
`;
