import Web3 from "./web3.min";

export function instantiateWeb3() {
  if (typeof web3 === "undefined") {
    console.log("Web3 didn't detect");

    return new Web3(Web3.providers.HttpProvider("http://localhost:8545'"));
  }

  console.log("Using Metamask's provider");

  return new Web3(web3.currentProvider);
}
