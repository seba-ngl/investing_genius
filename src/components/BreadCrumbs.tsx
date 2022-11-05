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
        index !== links.length - 1 && index !== 0 ? (
          <>
            <Link className="link" to={"/" + link}>
              {capitalizeFirstLetter(link)}
            </Link>
            <ArrowSeparator />
          </>
        ) : index === 0 ? (
          <>
            <Link className="link" to={"/"}>
              {capitalizeFirstLetter(link)}
            </Link>
            <ArrowSeparator />
          </>
        ) : (
          <div>{capitalizeAllLetters(link)}</div>
        )
      )}
    </nav>
  );
};

export default BreadCrumbs;
