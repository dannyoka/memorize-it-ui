import { useEffect, useState } from "react";
import { api } from "../api";
import { Entry } from "../types";

export const useEntry = (id?: string, strategy?: string) => {
  const [entry, setEntry] = useState<Entry>();

  useEffect(() => {
    const fetchEntries = async () => {
      if (!id) return;
      console.log({ strategy });
      const response = await api.getEntry(id, strategy);
      setEntry(response);
    };

    fetchEntries();
  }, [id, strategy]);

  return { entry };
};
