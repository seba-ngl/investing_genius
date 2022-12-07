import { Link } from "react-router-dom";
import SNPLogo from "../assets/SNPLogo";
import "./table.scss";

type IProps = {
  headNames?: string[];
  additionalLinkBefore?: string;
  ignoredValues?: string[];
  data: Array<{ symbol: string }>;
};

const Table = ({
  headNames,
  data,
  additionalLinkBefore,
  ignoredValues,
}: IProps) => {
  const checkIgnoredValues = (arr: any, arr2: any) => {
    return arr
      .map((a: any) => a)
      .filter((el: string[]) => {
        let test = el.map((a) => arr2.includes(a));
        return !test.includes(true);
      });
  };

  const getHeadArray = () => {
    return headNames ?? Object.keys(data[0]);
  };

  const renderHeadNames = (arr: string[]) => {
    return arr.map((value: string) => (
      <li className="th" tabIndex={0} key={value}>
        {value}
      </li>
    ));
  };

  const renderTrKeys = (row: Object) => {
    let arrayWithoutIgnores;
    if (ignoredValues) {
      arrayWithoutIgnores = checkIgnoredValues(
        Object.entries(row),
        ignoredValues
      );
    }

    return (arrayWithoutIgnores ?? Object.values(row)).map(
      (value: any, j: any) => (
        <li
          className="td"
          key={j}
          data-label={headNames ? headNames[j] : Object.keys(row)[j]}
        >
          {value[1]}
        </li>
      )
    );
  };

  const renderBodyKeys = (arr: typeof data) => {
    return arr.map((row, i) => (
      <Link
        to={
          additionalLinkBefore
            ? `/${additionalLinkBefore}/${row.symbol}`
            : `/${row.symbol}`
        }
        key={i}
      >
        <ul className="tr">{renderTrKeys(row)}</ul>
      </Link>
    ));
  };

  return (
    <div className="table">
      <div className="thead">
        <ul className="tr">{renderHeadNames(getHeadArray())}</ul>
      </div>
      <div className="tbody">{renderBodyKeys(data)}</div>
    </div>
  );
};

export default Table;
