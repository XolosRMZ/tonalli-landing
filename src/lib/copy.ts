export type Language = "es" | "en";

type FeatureCopy = {
  title: string;
  description: string;
};

type StepCopy = {
  step: string;
  title: string;
  description: string;
};

type LocaleCopy = {
  navTagline: string;
  badgeText: string;
  heroTitle: string;
  heroDescription: [string, string];
  ctaOpenWallet: string;
  ctaDocs: string;
  security: string;
  sectionTitle: string;
  sectionIntro: string;
  features: FeatureCopy[];
  steps: StepCopy[];
  whyTitle: string;
  whyStatements: string[];
  footer: string;
};

export const copy: Record<Language, LocaleCopy> = {
  es: {
    navTagline: "Autocustodia • eCash • DEX • Mensajes on-chain",
    badgeText: "Guardianía digital",
    heroTitle: "Tonalli Wallet",
    heroDescription: [
      "Tu cartera soberana para eCash. Envía, intercambia en Tonalli DEX y registra mensajes on-chain como prueba, ritual y memoria.",
      "Soberanía cotidiana para eCash.",
    ],
    ctaOpenWallet: "Abrir Wallet",
    ctaDocs: "Ver Docs",
    security: "La seed y el cifrado viven contigo. Sin custodios. Sin permisos.",
    sectionTitle: "Qué puedes hacer",
    sectionIntro:
      "Tonalli está diseñado para uso diario: transferencias, DEX, mensajes y comunidad.",
    features: [
      {
        title: "Mensajes on-chain",
        description: "Prueba, señal y memoria permanente.",
      },
      {
        title: "Tonalli DEX",
        description: "Crea e intercambia offers sin fricción.",
      },
      {
        title: "Tokens e identidad",
        description: "RMZ + Network State como identidad digital.",
      },
      {
        title: "Autocustodia real",
        description: "Tu seed vive solo en tu dispositivo.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Crea o importa",
        description: "Genera una seed nueva o restaura con tu frase.",
      },
      {
        step: "02",
        title: "Fondea con eCash",
        description: "Recibe XEC y confirma tu balance.",
      },
      {
        step: "03",
        title: "Usa DEX + mensajes",
        description: "Intercambia y deja huella on-chain.",
      },
    ],
    whyTitle: "¿Por qué Tonalli?",
    whyStatements: [
      "No cuentas. No permisos. No intermediarios.",
      "Mensajes que viven en la cadena.",
      "Identidad soberana dentro del Network State.",
    ],
    footer: "Hecho para soberanía.",
  },
  en: {
    navTagline: "Self-custody • eCash • DEX • On-chain messages",
    badgeText: "Digital guardianship",
    heroTitle: "Tonalli Wallet",
    heroDescription: [
      "Your sovereign eCash wallet. Send, trade on Tonalli DEX, and record on-chain messages as proof, ritual, and memory.",
      "Everyday sovereignty for eCash.",
    ],
    ctaOpenWallet: "Open Wallet",
    ctaDocs: "Read Docs",
    security: "Keys and encryption live with you. No custodians. No permissions.",
    sectionTitle: "What you can do",
    sectionIntro:
      "Tonalli is built for everyday use: transfers, DEX, messages, and community.",
    features: [
      {
        title: "On-chain messages",
        description: "Proof, signal, and permanent memory.",
      },
      {
        title: "Tonalli DEX",
        description: "Create and trade offers with minimal friction.",
      },
      {
        title: "Tokens and identity",
        description: "RMZ + Network State as a digital identity layer.",
      },
      {
        title: "True self-custody",
        description: "Your seed stays on your device only.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Create or import",
        description: "Generate a new seed or restore with your phrase.",
      },
      {
        step: "02",
        title: "Fund with eCash",
        description: "Receive XEC and confirm your balance.",
      },
      {
        step: "03",
        title: "Use DEX + messages",
        description: "Trade and leave an on-chain trace.",
      },
    ],
    whyTitle: "Why Tonalli?",
    whyStatements: [
      "No accounts. No permissions. No intermediaries.",
      "Messages that live on-chain.",
      "Sovereign identity inside the Network State.",
    ],
    footer: "Built for sovereignty.",
  },
};
