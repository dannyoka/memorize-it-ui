import { useEffect, useState } from "react";
import { api } from "../api";
import { Entry } from "../types";

export const useEntry = (id?: string, strategy?: string, n?: number | null) => {
  const [entry, setEntry] = useState<Entry>();

  useEffect(() => {
    const fetchEntries = async () => {
      if (!id) return;
      const response = await api.getEntry(id, strategy, n || 1);
      setEntry(response);
    };

    fetchEntries();
  }, [id, strategy, n]);

  return { entry };
};
