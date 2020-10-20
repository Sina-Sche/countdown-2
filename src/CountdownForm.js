export function CountdownForm(onSubmit) {
  const input = document.createElement("input");
  input.type = "number";
  input.required = true;
  input.min = 1;

  const button = document.createElement("button");
  button.classList = "start_btn";
  button.innerText = "Start🏃‍♀️";
  button.type = "submit";

  const form = document.createElement("form");
  form.onsubmit = (event) => {
    event.preventDefault();
    onSubmit(input.value);
  };
  form.append(input, button);

  return form;
}
