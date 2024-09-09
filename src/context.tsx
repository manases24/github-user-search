import { createContext, useContext, useState } from "react";
import { AppContextType, AppProviderProps } from "./types";

// Creamos un contexto llamado AppContext con un valor inicial de null
export const AppContext = createContext<AppContextType | null>(null);

// Definimos un hook personalizado llamado useAppContext
export const useAppContext = () => {
  // Obtenemos el valor del contexto usando useContext
  const context = useContext(AppContext);

  // Si el contexto no está definido, lanzamos un error
  if (!context) {
    throw new Error(
      "useAppContext debe ser usado dentro de un AppContext.Provider"
    );
  }

  // Devolvemos el valor del contexto
  return context;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("octocat");

  // Función para alternar el tema oscuro
  const toggleDarkTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  // Devolvemos el proveedor del contexto con el valor adecuado
  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
