let genders = document.querySelectorAll(".gen");
genders.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.checked) {
      document.querySelector(`.${e.id}`).classList.toggle("text-green-600");
    }
    genders.forEach((element) => {
      if (element.id !== e.id) {
        document
          .querySelector(`.${element.id}`)
          .classList.remove("text-green-600");
        element.checked = false;
      }
    });
  });
});
