import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type IData = {
  date: string;
  value: number;
};

let data: IData[] = [
  {
    date: "Sunday, 28 Sept, 2022",
    value: 0.397,
  },
  {
    date: "Sunday, 29 Sept, 2022",
    value: 0.401,
  },
  {
    date: "Sunday, 30 Sept, 2022",
    value: 0.4085,
  },
  {
    date: "Sunday, 3 Oct, 2022",
    value: 0.4315,
  },
  {
    date: "Sunday, 4 Oct, 2022",
    value: 0.439,
  },
];

export function CustomLinearChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <CartesianGrid vertical={false} opacity={0.1} />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          minTickGap={10}
          domain={["auto", "auto"]}
        />
        <YAxis axisLine={false} tickLine={false} type="number" domain={["auto", "auto"]} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#21272f",
            border: "blue",
            color: "white",
            minWidth: 200,
            textAlign: "center",
          }}
        />
        <Area dataKey="value" stroke="white" activeDot={{ r: 8 }} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
