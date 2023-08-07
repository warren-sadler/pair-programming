import { createContext } from "react";

export interface Provider {
  designation: "Therapist" | "Coach" | "Prescriber";
  name: string;
  specialties: ("Depression" | "Anxiety" | "Stress" | "Relationships")[];
}

interface CareContext {
  providers: Provider[];
}

export const CareContext = createContext({
  providers: [],
});

export const CareProvider = () => {
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
