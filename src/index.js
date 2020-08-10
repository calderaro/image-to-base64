const input = document.getElementById("image");
const textarea = document.getElementById("result");
const button = document.getElementById("convert");
const message = document.getElementById("message");

button.addEventListener("click", async () => {
  try {
    const file = input.files[0];

    if (!file) {
      throw new Error(file);
    }

    const data = await getBase64(file);

    textarea.value = data;
    message.innerHTML = "Success";
  } catch (error) {
    console.log(error.message);
    message.innerHTML = error.message;
  }
});

const getBase64 = (file) =>
  new Promise(function (resolve, reject) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject("Error: ", error);
  });
