import { Link } from "react-router-dom";
import ArrowSeparator from "./ArrowSeparator";
import "./breadCrumbs.style.scss";

type IProps = {
  links?: string[];
};

const BreadCrumbs = ({ links }: IProps) => {
  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const capitalizeAllLetters = (text: string) => {
    return text.toUpperCase();
  };

  return (
    <nav className="breadcrumbs-comp">
      {links?.map((link, index) =>
        index !== links.length - 1 ? (
          <div className="breadcrumbs-comp" key={index}>
            <Link
              className="link"
              to={index !== 0 ? "/" + link : "/"}
              key={index}
            >
              {capitalizeFirstLetter(link)}
            </Link>
            <ArrowSeparator key={index + 10} />
          </div>
        ) : (
          <div key={index}>{capitalizeAllLetters(link)}</div>
        )
      )}
    </nav>
  );
};

export default BreadCrumbs;
