import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  { date: "17/02/2022", value: 606479162 },
  { date: "17/02/2022", value: 664242578 },
  { date: "17/02/2022", value: 909595860 },
  { date: "17/02/2022", value: 1451932867 },
  { date: "17/02/2022", value: 1526658007 },
  { date: "17/02/2022", value: 1514720331 },
  { date: "17/02/2022", value: 1588353753 },
  { date: "17/02/2022", value: 1653156406 },
  { date: "17/02/2022", value: 1933075503 },
  { date: "17/02/2022", value: 1796118981 },
  { date: "17/02/2022", value: 1749911276 },
  { date: "17/02/2022", value: 1648408468 },
  { date: "17/02/2022", value: 1899936453 },
  { date: "17/02/2022", value: 2129744920 },
  { date: "17/02/2022", value: 2379424484 },
  { date: "17/02/2022", value: 2448712083 },
  { date: "17/02/2022", value: 3118375073 },
];

export const LinearChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid vertical={false} opacity={0.1} />
        <XAxis
          dataKey="date"
          tick={false}
          axisLine={false}
          tickLine={false}
          minTickGap={10}
          domain={["auto", "auto"]}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          type="number"
          domain={["auto", "dataMax + 0.01"]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#21272f",
            border: "blue",
            color: "white",
            minWidth: 200,
            textAlign: "center",
          }}
        />

        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};
