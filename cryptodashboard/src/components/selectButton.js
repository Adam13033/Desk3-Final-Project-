import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid rgba(110,37,148)",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "rgba(110,37,148)" : "",
      color: selected ? "rgb(192,192,192)" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "rgba(110,37,148)",
        color: "rgba(192,192,192)",
      },
      width: "22%",
      //   margin: 5,
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
