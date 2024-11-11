import { useEffect, useState } from "react";
import { api } from "../api";
import { Entry } from "../types";

export const useEntries = () => {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await api.findEntries();
      console.log({ response });
      setEntries(response);
    };

    fetchEntries();
  }, []);

  return { entries };
}
