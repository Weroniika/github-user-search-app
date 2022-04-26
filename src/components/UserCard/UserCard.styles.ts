import styled from "styled-components";
import { typeScale } from "../../utils/typography";

export const UserCardWrapper = styled.section`
  height: 100%;
  width: 100%;
  padding: 2rem 1.5rem 3rem;
  box-shadow: 0rem 1rem 1.875rem -0.625rem rgba(70, 96, 187, 0.198567);
  color: ${(props) => props.theme.secondaryTextColor};
  border-radius: 0.9375rem;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  display: grid;
  align-content: start;
  grid-template-columns: min-content;
  grid-template-areas:
    "avatar userinfo"
    "userdetails userdetails";
  grid-column-gap: 1.2188rem;

  @media only screen and (min-width: 90rem) {
    grid-template-areas:
      "avatar userinfo"
      "avatar userdetails";
    grid-column-gap: 2.3125rem;
  }
`;

export const UserCardHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 90rem) {
    align-items: flex-start;
  }
`;

export const UserAvatarWrapper = styled.div`
  width: 4.375rem;
  min-width: 4.375rem;
  height: 4.375rem;

  @media only screen and (min-width: 48rem) {
    width: 7.3125rem;
    min-width: 7.3125rem;
    height: 7.3125rem;
  }
`;

export const UserAvatarImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserInfo = styled.ul`
  display: flex;
  flex-direction: column;
  height: 4.375rem;
  justify-content: space-between;
  list-style: none;

  @media only screen and (min-width: 90rem) {
    flex-direction: row;
    width: 100%;
    align-content: flex-start;
    flex-wrap: wrap;
    height: min-content;
  }
`;

export const UserName = styled.li`
  font-size: ${typeScale.header2};
  line-height: 1.5rem;
  font-weight: 700;
`;

export const UserUserName = styled.li`
  font-size: ${typeScale.header3};
  font-weight: 400;
  line-height: 1.1875rem;
  color: ${(props) => props.theme.primaryColor};

  @media only screen and (min-width: 90rem) {
    order: 1;
    flex-basis: 100%;
    margin-top: 0;
  }
`;

export const UserJoin = styled.li`
  font-size: ${typeScale.header3};
  font-weight: 400;
  line-height: 1.1875rem;
  color: ${(props) => props.theme.primaryTextColor};
`;

export const UserDetails = styled.div`
  grid-area: userdetails;

  @media only screen and (min-width: 90rem) {
    margin-top: -4.6875rem;
  }
`;

export const UserDescription = styled.p`
  font-size: ${typeScale.header3};
  color: ${(props) => props.theme.primaryTextColor};
  line-height: 1.5625rem;
  margin-block: 2.0625rem 1.4375rem;
`;

export const UserNumbers = styled.ul`
  padding: 1.125rem 0.9375rem;
  border-radius: 0.625rem;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.primaryBackgroundColor};

  @media only screen and (min-width: 48rem) {
    padding: 1rem 2rem;
  }
`;

export const NumbersItem = styled.li`
  text-align: center;
  flex-basis: 32%;

  @media only screen and (min-width: 48rem) {
    text-align: left;
  }
`;

export const NumbersItemName = styled.div`
  font-size: 0.6875rem;
  line-height: 1rem;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  color: ${(props) => props.theme.primaryTextColor};

  @media only screen and (min-width: 48rem) {
    font-size: 0.8125rem;
  }
`;

export const NumbersItemValue = styled.div`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;

  @media only screen and (min-width: 48rem) {
    font-size: 1.375rem;
  }
`;

export const UserContact = styled.ul`
  display: grid;
  justify-items: start;
  margin-top: 1.5rem;

  @media only screen and (min-width: 48rem) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.1875rem;
  }
`;

export const ContactItem = styled.li`
  margin-bottom: 1.0625rem;

  &:first-child {
    span {
      margin-left: 1.2031rem;
    }
  }
`;

export const ContactItemLink = styled.a`
  font-size: ${typeScale.header3};
  line-height: 1.1875rem;
  display: flex;
  // width: 100%;
  justify-content: flex-start;

  span {
    margin-left: 0.8125rem;
  }

  svg {
    path {
      fill: ${(props) => props.theme.primaryTextColor};
    }
  }
`;

export const ContactItemLinkDisabled = styled(ContactItemLink)`
  mix-blend-mode: normal;
  opacity: 0.5;
  cursor: not-allowed;
`;
