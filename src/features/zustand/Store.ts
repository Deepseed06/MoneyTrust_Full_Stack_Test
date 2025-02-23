import { IndividualRegistrationInput } from "../individual-registration/schema";
import { create } from "zustand";
import { persist } from 'zustand/middleware';
import { createJSONStorage } from 'zustand/middleware';

type AuthRegistrationState = Partial<IndividualRegistrationInput> & {
  setData: (data: Partial<IndividualRegistrationInput>) => void;
};

export const useAuthRegistrationStore = create<AuthRegistrationState>()(
    persist(
        (set) => ({
            setData: (data) => set(data)
            
        }),
        {
            name: 'auth-registration',
            storage: createJSONStorage(() => localStorage),
        }
    )
) 
