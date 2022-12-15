const INPUT_CHECKBOX = document.querySelectorAll("input");

function disable_checkbox(input_checkbox_nodeList) {
  input_checkbox_nodeList.forEach((element) => {
    if (!element.checked) {
      element.disabled = true;
    }
  });
}

function enable_checkbox(input_checkbox_nodeList) {
  input_checkbox_nodeList.forEach((element) => {
    if (!element.checked) {
      element.disabled = false;
    }
  });
}

function nbr_checked_input(input_checkbox_nodeList) {
  let nbr_checked = 0;
  input_checkbox_nodeList.forEach((element) => {
    if (element.checked) {
      nbr_checked++;
    }
  });
  return nbr_checked;
}

INPUT_CHECKBOX.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (nbr_checked_input(INPUT_CHECKBOX) >= 5) {
      disable_checkbox(INPUT_CHECKBOX);
    } else if (nbr_checked_input(INPUT_CHECKBOX) < 5) {
      enable_checkbox(INPUT_CHECKBOX);
    }
  });
});
