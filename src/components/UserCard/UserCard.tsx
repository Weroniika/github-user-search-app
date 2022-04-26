import * as SC from "./UserCard.styles";
import { ReactComponent as IconLocation } from "../../assets/icon-location.svg";
import { ReactComponent as IconTwitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as IconWeb } from "../../assets/icon-website.svg";
import { ReactComponent as IconCompany } from "../../assets/icon-company.svg";

type UserCardInfo = {
  name: string;
  username: string;
  joined: string;
  description: string;
};

export const UserCard = () => {
  return (
    <SC.UserCardWrapper>
      <SC.UserAvatarWrapper>
        <SC.UserAvatarImg
          src="https://ortodonta.com/wp-content/uploads/2021/03/girl-919048__340.jpg"
          alt="user avatar"
        />
      </SC.UserAvatarWrapper>
      <SC.UserInfo>
        <SC.UserName>Weronika Burzyńska</SC.UserName>
        <SC.UserUserName>@weroniika</SC.UserUserName>
        <SC.UserJoin>Joined 25 Jan 2011</SC.UserJoin>
      </SC.UserInfo>
      <SC.UserDetails>
        <SC.UserDescription>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </SC.UserDescription>
        <SC.UserNumbers>
          <SC.NumbersItem>
            <SC.NumbersItemName>repos</SC.NumbersItemName>
            <SC.NumbersItemValue>8</SC.NumbersItemValue>
          </SC.NumbersItem>
          <SC.NumbersItem>
            <SC.NumbersItemName>followers</SC.NumbersItemName>
            <SC.NumbersItemValue>8242</SC.NumbersItemValue>
          </SC.NumbersItem>
          <SC.NumbersItem>
            <SC.NumbersItemName>following</SC.NumbersItemName>
            <SC.NumbersItemValue>8242</SC.NumbersItemValue>
          </SC.NumbersItem>
        </SC.UserNumbers>
        <SC.UserContact>
          <SC.ContactItem>
            <SC.ContactItemLink>
              <IconLocation /> <span>San francisco</span>
            </SC.ContactItemLink>
          </SC.ContactItem>
          <SC.ContactItem>
            <SC.ContactItemLink>
              <IconWeb /> <span>github.com/weronnika</span>
            </SC.ContactItemLink>
          </SC.ContactItem>
          <SC.ContactItem>
            <SC.ContactItemLinkDisabled>
              <IconTwitter /> <span>Not Avaible</span>
            </SC.ContactItemLinkDisabled>
          </SC.ContactItem>
          <SC.ContactItem>
            <SC.ContactItemLink>
              <IconCompany /> <span>WWT</span>
            </SC.ContactItemLink>
          </SC.ContactItem>
        </SC.UserContact>
      </SC.UserDetails>
    </SC.UserCardWrapper>
  );
};
