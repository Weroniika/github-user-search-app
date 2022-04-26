import styled from "styled-components";

export const Layout = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.primaryBackgroundColor};
  display: grid;
  grid-template-rows: min-content auto 517px;
  place-content: center;
  font-size: 1rem;
  transition: background-color 0.4s linear;
  grid-template-columns: 327px;

  @media only screen and (min-width: 48rem) {
    grid-template-columns: 573px;
    grid-template-rows: min-content auto 481px;
  }

  @media only screen and (min-width: 90rem) {
    grid-template-columns: 730px;
    grid-template-rows: min-content auto 444px;
  }
`;
