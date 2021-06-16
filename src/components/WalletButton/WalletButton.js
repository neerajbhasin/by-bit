import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      borderRadius: "10px",
      backgroundColor: "#ffff",
      padding: "10px",
      marginRight: "15px",
      color: "#0E47EF",
      border: "1px solid #0E47EF",
      "&:hover": {
        backgroundColor: "#0E47EF",
        color: "#ffff",
        cursor: "pointer",
      },
    },
  })
);
function WalletButton({
  provider,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  accounts,
}) {
  const classes = useStyles();
  const [balance, setBalance] = React.useState("");

  const checkBalance = async () => {
    if (provider != undefined) {
      const balance = await provider.eth.getBalance(accounts);
      setBalance(provider.utils.fromWei(balance, "ether"));
      console.log(balance);
    }
  };

  React.useEffect(() => {
    checkBalance();
  }, [provider]);
  return (
    <>
      {provider != undefined ? (
        <Button className={classes.root} variant="contained" color="primary">
          {balance}
        </Button>
      ) : null}
      <Button
        className={classes.root}
        variant="contained"
        color="primary"
        onClick={() => {
          if (!provider) {
            loadWeb3Modal();
          } else {
            logoutOfWeb3Modal();
          }
        }}
      >
        <span>
          {!provider
            ? "Connect wallet"
            : accounts.slice(0, 4) + "..." + accounts.slice(-4)}{" "}
        </span>
      </Button>
    </>
  );
}

export default WalletButton;
