import { accountName } from "./HTMLElements";

export function changeAccountName(newAddress, intervalId, accountChanged) {
  if (newAddress === undefined) {
    alert("Please, enter to your Metamask's account and connect again");

    clearTimeout(intervalId);

    return;
  }

  if (newAddress !== accountName.value) {
    accountName.innerHTML = newAddress;
    accountChanged(newAddress);
  }
}
