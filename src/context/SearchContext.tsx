import { createContext, useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { ApiResponse, State } from "../shared/types";

type SearchContextType = {
  username: string;
  setUsername: (username: string) => void;
  state: State<ApiResponse>;
};

const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState<string>("");
  const url = username && `https://api.github.com/users/${username}`;
  const state = useFetch<ApiResponse>(url);

  return (
    <SearchContext.Provider value={{ state, username, setUsername }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context)
    throw new Error("Search context must be used within a SearchProvider");
  return context;
};
