import styled from "styled-components";

export const StyledLayout = styled.div`
  display: grid;
  justify-items: center;
  padding: 1.9375rem 0 4.9375rem;
  font-size: 1rem;

  @media only screen and (min-width: 48rem) {
    padding: 8.75rem 0 14.75rem;
  }

  @media only screen and (min-width: 90rem) {
    padding: 9rem 0 9.0625rem;
  }
`;

export const Layout = () => {
  return (
    <StyledLayout>
      <div>xyz</div>
    </StyledLayout>
  );
};
