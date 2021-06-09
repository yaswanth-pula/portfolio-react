import Link from "@material-ui/core/Link";
const NavLink = (props) => {
  const { text, path, classes } = props;
  return (
    <Link href={path} className={classes}>
      {text}
    </Link>
  );
};

export default NavLink;
