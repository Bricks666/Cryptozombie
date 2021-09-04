export async function getAccountAddress(web3) {
  return (await web3.eth.getAccounts())[0];
}
