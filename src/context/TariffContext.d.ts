
export interface TariffContextValue {
  rates: Record<string, number>;
  updateRate: (country: string, newRate: string | number) => void;
  resetToDefaults: () => void;
}

export function useTariff(): TariffContextValue;

export const TariffProvider: React.FC<{ children: React.ReactNode }>;
