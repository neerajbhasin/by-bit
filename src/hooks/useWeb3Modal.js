import { useCallback, useEffect, useState } from "react";
// import { Web3Provider } from "@ethersproject/providers";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import COMPABI from "../abi/Comp.json";
// Enter a valid infura key here to avoid being rate limited
// You can get a key for free at https://infura.io/register
const INFURA_ID = process.env.REACT_APP_INFURA_KEY;

const NETWORK_NAME = "rinkeby";

function useWeb3Modal(config = {}) {
  const [provider, setProvider] = useState();
  const [autoLoaded, setAutoLoaded] = useState(false);
  const [contracts, setContracts] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const {
    autoLoad = true,
    infuraId = INFURA_ID,
    NETWORK = NETWORK_NAME,
  } = config;

  // Web3Modal also supports many other wallets.
  // You can see other options at https://github.com/Web3Modal/web3modal
  const web3Modal = new Web3Modal({
    network: NETWORK,
    cacheProvider: true,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId,
        },
      },
    },
  });

  // Open wallet selection modal.
  const loadWeb3Modal = useCallback(async () => {
    const newProvider = await web3Modal.connect();
    console.log(newProvider);
    const web3 = new Web3(newProvider);
    const contracts = await getContracts(web3);
    const accounts = await web3.eth.getAccounts();
    setAccounts(accounts[0]);
    setProvider(web3);
    setContracts(contracts);
  }, [web3Modal]);

  const logoutOfWeb3Modal = useCallback(
    async function () {
      await web3Modal.clearCachedProvider();
      window.location.reload();
    },
    [web3Modal]
  );
  const getContracts = async (provider) => {
    const networkId = await provider.eth.net.getId();
    console.log("networkId", networkId);
    const deployedNetwork = COMPABI.networks[networkId];
    console.log(provider);
    const comp = new provider.eth.Contract(
      COMPABI.abi,
      process.env.REACT_APP_CONTRACT_ADDR
    );
    console.log(comp);
    return comp;
  };
  // If autoLoad is enabled and the the wallet had been loaded before, load it automatically now.
  useEffect(() => {
    if (autoLoad && !autoLoaded && web3Modal.cachedProvider) {
      loadWeb3Modal();
      setAutoLoaded(true);
    }
  }, [
    autoLoad,
    autoLoaded,
    loadWeb3Modal,
    setAutoLoaded,
    web3Modal.cachedProvider,
  ]);

  return [provider, loadWeb3Modal, logoutOfWeb3Modal, contracts, accounts];
}

export default useWeb3Modal;
