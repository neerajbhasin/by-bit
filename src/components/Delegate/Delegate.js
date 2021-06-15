import React, { useState, useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { onError } from "../../hooks/errorLib";
import { useFormFields } from "../../hooks/hooksLib";
import useWeb3Modal from "../../hooks/useWeb3Modal";
import WalletButton from "../WalletButton/WalletButton";
import "./Delegate.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

function Home() {
  const classes = useStyles();
  const [provider, loadWeb3Modal, logoutOfWeb3Modal, contracts] =
    useWeb3Modal();
  console.log(provider);
  const [loading, setLoading] = useState(false);
  const [txHash, setTxhash] = useState("");

  const [balance, setBalance] = useState(undefined);
  const [fields, handleFieldChange] = useState("");

  // useEffect(() => {
  //   const balance = async () => {
  //     const balance = await contracts.methods.balanceOf(accounts);

  //     setBalance(balance);
  //   };
  //   // balance();
  // }, []);
  const delegateUser = async (address) => {
    const accounts = await provider.eth.getAccounts();
    console.log(accounts);
    const result = await contracts.methods
      .delegate(address)
      .send({ from: accounts[0], gas: 300000 });
    return result;
  };

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(fields);
    setLoading(true);
    if (provider == undefined) {
      alert("Please connect your waller first");
    } else {
      const receipt = await delegateUser(fields);
      if (receipt.transactionHash) {
        setLoading(false);
        setTxhash(receipt.transactionHash);
      }
    }
  }
  return (
    <div className="delegateForm">
      <div style={{ float: "right" }}>
        <WalletButton
          provider={provider}
          loadWeb3Modal={loadWeb3Modal}
          logoutOfWeb3Modal={logoutOfWeb3Modal}
        />
      </div>
      <div className="container">
        <br />
        <div className="">
          <div md={9} className="delegateFormContainer">
            <form onSubmit={handleSubmit}>
              <div className="mb-3" controlId="delegateAddress">
                <input
                  className="inputBox"
                  type="text"
                  value={fields}
                  placeholder="Enter delegate address"
                  onChange={(e) => handleFieldChange(e.target.value)}
                />
              </div>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="inputButton"
                style={{ marginTop: "20px" }}
              >
                Submit
              </Button>
            </form>
            {loading ? "In progress...." : txHash}
          </div>
        </div>
      </div>
      {/* <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          id="outlined-secondary"
          label="Outlined secondary"
          variant="outlined"
          color="secondary"
        />

      </form> */}
    </div>
  );
}
export default Home;
