import "./stockCard.scss";
import { bvbData } from "../data/generalData";

type IProps = {
  data: typeof bvbData[0];
  ignoredValues?: string[];
  stockNames?: string[];
};

const StockCard = ({ data, ignoredValues, stockNames }: IProps) => {
  const checkIgnoredValues = (arr: any, arr2: any) => {
    return arr
      .map((a: any) => a)
      .filter((el: string[]) => {
        let test = el.map((a) => arr2.includes(a));
        return !test.includes(true);
      });
  };

  const renderInfoRow = (arr: any) => {
    let arrayWithoutIgnores;
    if (ignoredValues) {
      arrayWithoutIgnores = checkIgnoredValues(
        Object.entries(arr),
        ignoredValues
      );
    }

    return (arrayWithoutIgnores ?? Object.entries(arr)).map(
      (row: any, i: any) => (
        <div className="info" key={i}>
          <div className="key">{stockNames ? stockNames[i] : row[0]}</div>
          {/* @ts-ignore */}
          <div className="value">{row[1]}</div>
        </div>
      )
    );
  };

  return (
    <div className="stock-card rounded-card">
      <div className="card-info">
        <div className="icon">{data.logo}</div>
        <div className="names">
          <div className="title">{data.symbol.toUpperCase()}</div>
          <div className="symbol">{data.name}</div>
        </div>
      </div>
      <div className="card-data">
        <div className="label">Company Info</div>
        {renderInfoRow(data)}
      </div>
    </div>
  );
};

export default StockCard;
