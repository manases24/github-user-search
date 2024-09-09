import { ReactNode } from "react";

export type AppContextType = {
  toggleDarkTheme: () => void;
  isDarkTheme: boolean;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export type AppProviderProps = {
  children: ReactNode;
};
