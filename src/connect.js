export async function connect(contractInfo, web3) {
  let contract = await new web3.eth.Contract(
    contractInfo.abi,
    contractInfo.address
  );

  return contract;
}
