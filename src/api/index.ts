import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const entriesApi = axios.create({
  baseURL: API_URL,
});

export const api = {
  findEntries: async () => {
    const response = await entriesApi.get("/entries");
    return response.data;
  },
  getEntry: async (id: string, strategy?: string, n?: number) => {
    const url = strategy
      ? `/entries/${id}?strategy=${strategy}&n=${n}`
      : `/entries/${id}`;
    const response = await entriesApi.get(url);
    return response.data;
  },
  createEntry: async (entry: { name: string; content: string }) => {
    const response = await entriesApi.post("/entries/create", entry);
    return response.data;
  },
};
