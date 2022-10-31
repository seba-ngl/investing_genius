import SNGLogo from "../assets/SNGLogo";
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
      divYield: 6,
      valuation: "14b",
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
      divYield: 8,
      valuation: "12b",
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
      divYield: 6,
      valuation: "9b",
      industry: "Gas",
    },
  },
];
