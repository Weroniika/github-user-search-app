import styled from "styled-components";
import { red } from "../../utils/colors";

export const SearchForm = styled.form`
  padding: 0.4063rem 0.4375rem 0.4688rem 1rem;
  height: 4.3125rem;
  width: 100%;
  box-shadow: 0rem 1rem 1.875rem -0.625rem rgba(70, 96, 187, 0.198567);
  border-radius: 0.9375rem;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  margin-block: 2.25rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 48rem) {
    padding: 0.5938rem 0.625rem 0.5938rem 2rem;
    margin-block: 2.1875rem 1.5rem;
  }
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  svg {
    margin-right: 0.5594rem;
    margin-right: 1.4963rem;
  }
`;

export const SearchButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchError = styled.span`
  color: ${red[100]};
  font-weight: 700;
  font-size: 0.8125rem;
  line-height: 1.375rem;
  margin-right: 1.5rem;
  width: 10ch;

  @media only screen and (min-width: 48rem) {
    font-size: 0.9375rem;
  }
`;

export const SearchInput = styled.input`
  width: 12rem;
  border: none;
  background-color: transparent;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.5625rem;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.primaryTextColor};

  &::placeholder {
    font-size: 0.8125rem;
    color: ${(props) => props.theme.primaryTextColor};
  }

  @media only screen and (min-width: 48rem) {
    font-size: 1.125rem;
    width: 16.4375rem;

    &::placeholder {
      font-size: 1.125rem;
    }
  }
`;
