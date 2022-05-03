import * as SC from "./UserCard.styles";
import { ReactComponent as IconLocation } from "../../assets/icon-location.svg";
import { ReactComponent as IconTwitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as IconWeb } from "../../assets/icon-website.svg";
import { ReactComponent as IconCompany } from "../../assets/icon-company.svg";
import { useSearchContext } from "../../context/SearchContext";
import moment from "moment";

export const UserCard = () => {
  const {
    state: { data, loading },
  } = useSearchContext();

  return data ? (
    <SC.UserCardWrapper>
      <SC.UserAvatarWrapper>
        <SC.UserAvatarImg src={data.avatar_url} alt={`${data.login} avatar`} />
      </SC.UserAvatarWrapper>
      <SC.UserInfo>
        {data.name && <SC.UserName>{data.name}</SC.UserName>}
        <SC.UserUserName>@{data.login}</SC.UserUserName>
        <SC.UserJoin>
          Joined {moment(data.created_at).format("DD MMM YYYY")}
        </SC.UserJoin>
      </SC.UserInfo>
      <SC.UserDetails>
        <SC.UserDescription>
          {data.bio ? data.bio : "This profile has no bio"}
        </SC.UserDescription>
        <SC.UserNumbers>
          <SC.NumbersItem>
            <SC.NumbersItemName>repos</SC.NumbersItemName>
            <SC.NumbersItemValue>{data.public_repos}</SC.NumbersItemValue>
          </SC.NumbersItem>
          <SC.NumbersItem>
            <SC.NumbersItemName>followers</SC.NumbersItemName>
            <SC.NumbersItemValue>{data.followers}</SC.NumbersItemValue>
          </SC.NumbersItem>
          <SC.NumbersItem>
            <SC.NumbersItemName>following</SC.NumbersItemName>
            <SC.NumbersItemValue>{data.following}</SC.NumbersItemValue>
          </SC.NumbersItem>
        </SC.UserNumbers>
        <SC.UserContact>
          <SC.ContactItem>
            {data.location ? (
              <SC.ContactItemText>
                <IconLocation /> <span>{data.location}</span>
              </SC.ContactItemText>
            ) : (
              <SC.ContactItemLinkDisabled>
                <IconLocation /> <span>Not Available</span>
              </SC.ContactItemLinkDisabled>
            )}
          </SC.ContactItem>
          <SC.ContactItem>
            {data.html_url ? (
              <SC.ContactItemLink href={data.html_url} target="_blank">
                <IconWeb /> <span>{data.html_url}</span>
              </SC.ContactItemLink>
            ) : (
              <SC.ContactItemLinkDisabled>
                <IconWeb /> <span>Not Available</span>
              </SC.ContactItemLinkDisabled>
            )}
          </SC.ContactItem>
          <SC.ContactItem>
            {data.twitter_username ? (
              <SC.ContactItemLink
                target="_blank"
                href={`https://twitter.com/${data.twitter_username}`}
              >
                <IconTwitter /> <span>{data.twitter_username}</span>
              </SC.ContactItemLink>
            ) : (
              <SC.ContactItemLinkDisabled>
                <IconTwitter /> <span>Not Available</span>
              </SC.ContactItemLinkDisabled>
            )}
          </SC.ContactItem>
          <SC.ContactItem>
            {data.company ? (
              <SC.ContactItemText>
                <IconCompany /> <span>{data.company}</span>
              </SC.ContactItemText>
            ) : (
              <SC.ContactItemLinkDisabled>
                <IconCompany /> <span>Not Available</span>
              </SC.ContactItemLinkDisabled>
            )}
          </SC.ContactItem>
        </SC.UserContact>
      </SC.UserDetails>
    </SC.UserCardWrapper>
  ) : loading ? (
    <SC.UserCardLoader>Loading...</SC.UserCardLoader>
  ) : (
    <></>
  );
};
