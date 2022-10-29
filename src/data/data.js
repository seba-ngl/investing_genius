import React from "react";
import SNGLogo from "../assets/SNGLogo";
import SNPLogo from "../assets/SNPLogo";
import TLVLogo from "../assets/TLVLogo";

export const data = [
  {
    unusedTable: {
      symbol: "tlv",
      market: "ro",
    },
    usedTable: {
      name: "Banca transilvania",
      icon: <TLVLogo />,
      price: 15,
      valuation: "12b",
      divYield: 6,
      industry: "Energy",
    },
  },
  {
    unusedTable: {
      symbol: "snp",
      market: "ro",
    },
    usedTable: {
      name: "OMV Petrom",
      icon: <SNPLogo />,
      price: 15,
      valuation: "12b",
      divYield: 6,
      industry: "Energy",
    },
  },
  {
    unusedTable: {
      symbol: "sng",
      market: "ro",
    },
    usedTable: {
      name: "Romgaz",
      icon: <SNGLogo />,
      price: 15,
      valuation: "12b",
      divYield: 6,
      industry: "Energy",
    },
  },
];
