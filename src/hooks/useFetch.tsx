import { useEffect, useReducer, useRef } from "react";
import { State } from "../shared/types";

type Cache<T> = { [url: string]: T };
type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

export const useFetch = <T,>(url?: string, options?: RequestInit): State<T> => {
  const cache = useRef<Cache<T>>({});

  const initialState: State<T> = {
    error: undefined,
    loading: false,
    data: null,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState, loading: true };
      case "fetched":
        return { ...initialState, loading: false, data: action.payload };
      case "error":
        return { ...initialState, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: "loading" });

      if (cache.current[url]) {
        dispatch({ type: "fetched", payload: cache.current[url] });
        return;
      }

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = (await response.json()) as T;
        cache.current[url] = data;

        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        dispatch({ type: "error", payload: error as Error });
      }
    };

    fetchData();
  }, [url]);

  return state;
};
