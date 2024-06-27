Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// const inputText = document.getElementById("goal");
// const addButton = document.getElementById("addGoal");
// const unList = document.getElementById("textList");
// const fistList = document.getElementById("list1");
// addButton.addEventListener("click", () => {
//   if (fistList.textContent == "Test") {
//     fistList.textContent = inputText.value;
//     inputText.value = "";
//   } else if (inputText.value != "") {
//     console.log(inputText.value);
//     newElementAtList(inputText.value);
//     inputText.value = "";
//   }
// });
// const newElementAtList = (text) => {
//   let element = document.createElement("li");
//   element.textContent = text;
//   unList.appendChild(element);
// };
