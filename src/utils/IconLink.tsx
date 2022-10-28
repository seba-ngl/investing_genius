import { Link } from "react-router-dom";

type IProps = {
  link: string;
  icon?: React.ReactNode;
  labelledby?: string;
};

const IconLink = ({ link, icon, labelledby }: IProps) => {
  return (
    <Link aria-labelledby={labelledby} to={link} role="link">
      {icon}
    </Link>
  );
};
export default IconLink;
