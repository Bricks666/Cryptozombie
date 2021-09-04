const contractAddress = "0x8c2aAF0AE7ccEA4098adBA70aa7f14D448C923B8";
const abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "getNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "setNumber",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

let contract;
let web3;
let accountAddress;

const accountName = document.querySelector(".account-name");
const connectButton = document.querySelector(".connect");
const getNumberField = document.querySelector(".get-number__field");
const getNumberButton = document.querySelector(".get-number__button");
const setNumberField = document.querySelector(".set-number__field");
const setNumberButton = document.querySelector(".set-number__button");

getNumberButton.addEventListener("click", getNumber);
setNumberButton.addEventListener("click", setNumber);

connectButton.onclick = () => {
  if (web3 === undefined) {
    web3 = instantiateWeb3();
  }

  connect();
};

function instantiateWeb3() {
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

async function connect() {
  getNumberButton.disabled = true;
  setNumberButton.disabled = true;

  if (contract === undefined) {
    contract = new web3.eth.Contract(abi, contractAddress);
  }

  accountAddress = (await web3.eth.getAccounts())[0];

  if (accountAddress !== undefined) {
    accountName.innerHTML = accountAddress;
    connectButton.innerHTML = "Reconnect";

    getNumberButton.disabled = false;
    setNumberButton.disabled = false;

    const id = setInterval(() => refreshAccount(id), 500);

    return;
  }

  alert("Please, enter to your Metamask's account");
}

async function refreshAccount(intervalId) {
  const newAdress = (await web3.eth.getAccounts())[0];

  if (newAdress === undefined) {
    alert("Please, enter to your Metamask's account and connect again");

    connectButton.innerHTML = "Connect";

    clearTimeout(intervalId);

    return;
  }

  if (newAdress !== accountName.value) {
    accountName.innerHTML = accountAddress = newAdress;
  }
}

async function getNumber() {
  getNumberButton.disabled = true;

  const value = await contract.methods.getNumber().call();
  console.log(value);

  getNumberField.value = value;

  getNumberButton.disabled = false;
}

async function setNumber() {
  setNumberButton.disabled = true;
  debugger;
  let value;
  try {
    value = Number(setNumberField.value);
  } catch (e) {
    console.log(e.message);
  }
  setNumberField.value = "";

  if (isNaN(value)) {
    alert(`${value} isn't number`);

    setNumberButton.disabled = false;

    return;
  }

  await contract.methods.setNumber(value).send({ from: accountAddress });

  setNumberButton.disabled = false;
}
