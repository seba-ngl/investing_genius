import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { prices } from "../data/data";

type IProps = {
  stockSymbol: string;
};

export function CustomLinearChart({ stockSymbol }: IProps) {
  const convertedDate = prices[stockSymbol as keyof typeof prices].map(element => {
    return {
      date: new Date(parseInt(element.date) * 1000).getHours() + ":00",
      value: element.value,
    };
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={convertedDate}>
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
        <Area dataKey="value" stroke="white" activeDot={{ r: 8 }} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
