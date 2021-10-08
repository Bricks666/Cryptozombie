import * as HTMLElements from "./HTMLElements";
import { getAccountAddress } from "./getAccountAddress";
import { getNumber, setNumber } from "./buttons";
import { disableButtons, enableButtons } from "./changeButtonsLock";
import { connect } from "./connect";
import { instantiateWeb3 } from "./instantiateWeb3";
import { refreshAccount } from "./refreshAccount";
import { contractInfo } from "./contractInfo";

let contract;
let web3;
let accountAddress;
let intervalId;

const accountChanged = (newAddress) => {
  accountAddress = newAddress;
};

window.onload = () =>
  disableButtons(HTMLElements.getNumberButton, HTMLElements.setNumberButton);

HTMLElements.connectButton.addEventListener("click", async () => {
  disableButtons(HTMLElements.getNumberButton, HTMLElements.setNumberButton);

  clearInterval(intervalId);

  if (web3 === undefined) {
    web3 = instantiateWeb3();
  }

  contract = await connect(contractInfo, web3);

  accountAddress = await getAccountAddress(web3);

  intervalId = setInterval(
    () => refreshAccount(intervalId, web3, accountChanged),
    500
  );

  enableButtons(HTMLElements.getNumberButton, HTMLElements.setNumberButton);
});

HTMLElements.getNumberButton.addEventListener("click", async () => {
  disableButtons(HTMLElements.getNumberButton);

  await getNumber(contract, HTMLElements.getNumberField);

  enableButtons(HTMLElements.getNumberButton);
});

HTMLElements.setNumberButton.addEventListener("click", async () => {
  disableButtons(HTMLElements.setNumberButton);

  await setNumber(contract, accountAddress, HTMLElements.setNumberField);

  enableButtons(HTMLElements.setNumberButton);
});
