import { createContext } from "react";

export interface Provider {
  designation: "Therapist" | "Coach";
  name: string;
  age: number;
}

interface CareContext {
  providers: Provider[];
}

export const CareContext = createContext({
  providers: [],
});

export const UserProvider = () => {
  return (
    <CareContext.Provider
      value={{
        providers: [],
      }}
    >
      {/* children here */}
    </CareContext.Provider>
  );
};
