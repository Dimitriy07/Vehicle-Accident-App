export function createHtmlFromData(formData: FormData | null): HTMLFormElement {
  const form = document.createElement("form");
  if (formData)
    formData.forEach((value, key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value.toString();
      form.appendChild(input);
    });

  return form;
}
