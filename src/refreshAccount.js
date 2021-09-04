import { changeAccountName } from "./changeAccountName";

export async function refreshAccount(intervalId, web3, accountChanged) {
  const newAddress = (await web3.eth.getAccounts())[0];

  changeAccountName(newAddress, intervalId, accountChanged);
}
