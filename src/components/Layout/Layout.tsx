import { Header } from "../Header/Header";
import { SearchBar } from "../SearchBar/SearchBar";
import { UserCard } from "../UserCard/UserCard";
import * as SC from "./Layout.styles";

export const Layout = () => {
  return (
    <SC.Layout>
      <Header />
      <SearchBar />
      <UserCard />
    </SC.Layout>
  );
};
