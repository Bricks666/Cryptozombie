import Web3 from "./web3.min";

export function instantiateWeb3() {
  if (window.web3 === undefined) {
    console.log("Web3 didn't detect");

    return new Web3(
      window.web3.providers.HttpProvider("http://localhost:8545'")
    );
  } else {
    console.log("Using Metamask's provider");

    return new Web3(window.web3.currentProvider);
  }
}
