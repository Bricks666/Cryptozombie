function disableButton(button) {
  button.disabled = true;
}

export function disableButtons(...buttons) {
  for (let button of buttons) {
    disableButton(button);
  }
}

function enableButton(button) {
  button.disabled = false;
}

export function enableButtons(...buttons) {
  for (let button of buttons) {
    enableButton(button);
  }
}
