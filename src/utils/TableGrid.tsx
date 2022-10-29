import { Link } from "react-router-dom";
import "./tableGrid.style.scss";

type IProps = {
  data: Object[];
  numberOfColumns: number;
};

const TableGrid = ({ data, numberOfColumns }: IProps) => {
  return (
    <div className="table-grid-util">
      <InfoRow />
      <div className="table-body">
        {data.map((obj: Object, key: number) => (
          <Row object={obj} numberOfColumns={numberOfColumns} key={key} />
        ))}
      </div>
    </div>
  );
};

const Row = ({ object, numberOfColumns }: any) => {
  return object.name ? (
    <Link to={object.link} tabIndex={-1}>
      <button
        aria-label={object.name}
        className="grid data-row"
        style={{
          gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
        }}
      >
        {Object.keys(object).map(key => {
          return key !== "name" && key !== "link" ? <div key={key}>{object[key]}</div> : "";
        })}
      </button>
    </Link>
  ) : (
    <Link to={object.link} tabIndex={-1}>
      <button
        aria-label="no aria"
        className="grid data-row"
        style={{
          gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
        }}
      >
        {Object.keys(object).map(key => {
          return <div key={key}>{object[key]}</div>;
        })}
      </button>
    </Link>
  );
};

const InfoRow = () => {
  let numberOfColumns = 5;
  return (
    <div
      className="info-row grid"
      style={{
        gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
      }}
    >
      <button tabIndex={0} type="button" className="company">
        Company
      </button>
      <button tabIndex={0} type="button" className="price">
        Price
      </button>
      <button tabIndex={0} type="button" className="valuation">
        Valuation
      </button>
      <button tabIndex={0} type="button" className="dividend">
        Div Yield
      </button>
      <button tabIndex={0} type="button" className="industry">
        Industry
      </button>
    </div>
  );
};

export default TableGrid;
