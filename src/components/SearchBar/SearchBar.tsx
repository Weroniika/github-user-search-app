import { Button } from "../Button/Button";
import * as SC from "./SearchBar.styles";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

export const SearchBar = () => {
  return (
    <SC.SearchForm>
      <SC.SearchInputWrapper>
        <SearchIcon />
        <SC.SearchInput placeholder="Search Github username  " />
      </SC.SearchInputWrapper>
      <SC.SearchButtonWrapper>
        <SC.SearchError>No results</SC.SearchError>
        <Button onCLick={() => {}}>search</Button>
      </SC.SearchButtonWrapper>
    </SC.SearchForm>
  );
};
