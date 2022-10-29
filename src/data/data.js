import React from "react";
import SNGLogo from "../assets/SNGLogo";
import SNPLogo from "../assets/SNPLogo";
import TLVLogo from "../assets/TLVLogo";

export const data = [
  {
    name: "Banca transilvania",
    link: "/ro/tlv",
    icon: <TLVLogo />,
    price: 15,
    valuation: "12b",
    divYield: 6,
    industry: "Energy",
  },
  {
    name: "OMV Petrom",
    link: "/ro/snp",
    icon: <SNPLogo />,
    price: 0.41,
    valuation: "12b",
    divYield: 6,
    industry: "Energy",
  },
  {
    name: "Romgaz",
    link: "/ro/sng",
    icon: <SNGLogo />,
    price: 35,
    valuation: "12b",
    divYield: 6,
    industry: "Energy",
  },
];
