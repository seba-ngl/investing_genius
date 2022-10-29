import { Link } from "react-router-dom";

type IProps = {
  link: string;
  icon?: React.ReactNode;
  labelledby?: string;
  children?: React.ReactNode;
};

const IconLink = ({ link, icon, labelledby, children }: IProps) => {
  return (
    <Link aria-labelledby={labelledby} to={link} role="link" className="iconlink-util">
      {icon}
      {children}
    </Link>
  );
};
export default IconLink;
