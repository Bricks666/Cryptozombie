import { errorsHandler } from "./errorsHandler";
import { RangeErrorE } from "./Errors/RangeError";

function isValid(value) {
  return isNaN(value) || value < 0;
}

export async function getNumber(contract, field) {
  try {
    field.value = await contract.methods.getNumber().call();
  } catch (e) {
    errorsHandler(e);
  }
}

export async function setNumber(contract, accountAddress, field) {
  const value = Number(field.value); //Нужно перенести валидацию размера на сторону данный

  field.value = "";

  try {
    if (isValid(value)) {
      throw new RangeErrorE(
        `для установки допустимы только неотрицательные числа`,
        -1
      );
    }

    await contract.methods.setNumber(value).send({ from: accountAddress });
  } catch (e) {
    errorsHandler(e);
  }
}
