import SNGLogo from "../assets/SNGLogo";
import SNNLogo from "../assets/SNNLogo";
import SNPLogo from "../assets/SNPLogo";
import TLVLogo from "../assets/TLVLogo";

export const arrayStockData = [
  {
    unusedTable: {
      symbol: "tlv",
      market: "ro",
      pe: 12.2,
      eps: 3,
    },
    usedTable: {
      name: "Banca transilvania",
      icon: <TLVLogo />,
      price: 15,
      valuation: "14b",
      divYield: 6,
      industry: "Banking",
    },
  },
  {
    unusedTable: {
      symbol: "snp",
      market: "ro",
      pe: 4.5,
      eps: 0.02,
    },
    usedTable: {
      name: "OMV Petrom",
      icon: <SNPLogo />,
      price: 15,
      valuation: "12b",
      divYield: 8,
      industry: "Energy",
    },
  },
  {
    unusedTable: {
      symbol: "sng",
      market: "ro",
      pe: 8.2,
      eps: 2.1,
    },
    usedTable: {
      name: "Romgaz",
      icon: <SNGLogo />,
      price: 15,
      valuation: "9b",
      divYield: 6,
      industry: "Gas",
    },
  },

  {
    unusedTable: {
      symbol: "snn",
      market: "ro",
      pe: 8.2,
      eps: 2.1,
    },
    usedTable: {
      name: "Nuclearelectrica",
      icon: <SNNLogo />,
      price: 39.65,
      valuation: "9b",
      divYield: 6,
      industry: "Electric Utilities",
    },
  },
];

export const prices = {
  snn: [
    {
      date: "1667548800",
      value: 39.6,
    },
    {
      date: "1667552400",
      value: 39.85,
    },
    {
      date: "1667556000",
      value: 39.75,
    },
    {
      date: "1667559600",
      value: 39.75,
    },
    {
      date: "1667563200",
      value: 39.65,
    },
    {
      date: "1667566800",
      value: 39.85,
    },
    {
      date: "1667570400",
      value: 39.85,
    },
    {
      date: "1667574000",
      value: 39.75,
    },
    {
      date: "1667577600",
      value: 39.65,
    },
  ],
  snp: [
    {
      date: "1667548800",
      value: 0.451,
    },
    {
      date: "1667552400",
      value: 0.455,
    },
    {
      date: "1667556000",
      value: 0.4545,
    },
    {
      date: "1667559600",
      value: 0.455,
    },
    {
      date: "1667563200",
      value: 0.455,
    },
    {
      date: "1667566800",
      value: 0.453,
    },
    {
      date: "1667570400",
      value: 0.452,
    },
    {
      date: "1667574000",
      value: 0.4535,
    },
    {
      date: "1667577600",
      value: 0.452,
    },
  ],
  sng: [
    {
      date: "1667548800",
      value: 38,
    },
    {
      date: "1667552400",
      value: 37.6,
    },
    {
      date: "1667556000",
      value: 37.7,
    },
    {
      date: "1667559600",
      value: 37.65,
    },
    {
      date: "1667563200",
      value: 37.75,
    },
    {
      date: "1667566800",
      value: 37.85,
    },
    {
      date: "1667570400",
      value: 37.7,
    },
    {
      date: "1667574000",
      value: 37.75,
    },
    {
      date: "1667577600",
      value: 37.7,
    },
  ],
  tlv: [
    {
      date: "1667548800",
      value: 17.45,
    },
    {
      date: "1667552400",
      value: 17.5,
    },
    {
      date: "1667556000",
      value: 17.5,
    },
    {
      date: "1667559600",
      value: 17.6,
    },
    {
      date: "1667563200",
      value: 17.65,
    },
    {
      date: "1667566800",
      value: 17.65,
    },
    {
      date: "1667570400",
      value: 17.6,
    },
    {
      date: "1667574000",
      value: 17.65,
    },
    {
      date: "1667577600",
      value: 17.8,
    },
  ],
};
