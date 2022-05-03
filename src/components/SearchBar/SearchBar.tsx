import { Button } from "../Button/Button";
import * as SC from "./SearchBar.styles";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import { useSearchContext } from "../../context/SearchContext";
import { useState } from "react";

export const SearchBar = () => {
  const [input, setInput] = useState<string>("");
  const { setUsername } = useSearchContext();
  const {
    state: { error },
  } = useSearchContext();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input) {
      setUsername(input);
      setInput("");
    }
  };

  return (
    <SC.SearchForm onSubmit={onSubmit}>
      <SC.SearchInputWrapper>
        <SearchIcon />
        <SC.SearchInput
          onChange={onChange}
          placeholder="Search Github username  "
        />
      </SC.SearchInputWrapper>
      <SC.SearchButtonWrapper>
        {error && <SC.SearchError>No results</SC.SearchError>}
        <Button type="submit">search</Button>
      </SC.SearchButtonWrapper>
    </SC.SearchForm>
  );
};
