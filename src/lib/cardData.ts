// Card data constants and types for the Cald Only Card

export interface CardData {
  brandName: string;
  cardNumber: string;
  cardholderName: string;
  expiryDate: string;
  cvv: string;
  cardType: string;
}

export const caldOnlyCardData: CardData = {
  brandName: "Cald Only Card",
  cardNumber: "4532 1234 5678 9012",
  cardholderName: "PREMIUM MEMBER",
  expiryDate: "12/28",
  cvv: "123",
  cardType: "PREMIUM"
};

export const cardColors = {
  primary: {
    dark: "#1e3a8a",      // Deep blue
    medium: "#3b82f6",    // Bright blue
    light: "#60a5fa"      // Light blue
  },
  metallic: {
    silver: "#94a3b8",    // Silver
    darkSilver: "#64748b", // Dark silver
    platinum: "#e2e8f0"   // Platinum
  },
  neutral: {
    darkGray: "#374151",  // Dark gray
    mediumGray: "#6b7280", // Medium gray
    lightGray: "#9ca3af"  // Light gray
  }
} as const;