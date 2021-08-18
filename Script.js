// Taking reference

let question_display = document.getElementById("question_display");
let welcome_div = document.getElementById("welcome_div");
let submit = document.getElementById("submit");
let subject = document.getElementById("subject");
let textarea = document.getElementById("textarea");
let right_after = document.getElementById("right_after");
let question_div_heading = document.getElementById("question_div_heading");
let question_div_para = document.getElementById("question_div_para");
let submit_after_right = document.getElementById("submit_after_right");
let response_div = document.getElementById("response_div");
let enter_name = document.getElementById("enter_name");
let textarea_comment = document.getElementById("textarea_comment");
let resolve = document.getElementById("resolve");
let search = document.getElementById("search");

// check for localStorage

let data = localStorage.getItem("data");
if (data) data = JSON.parse(data);

// array

let main_array = data || [];

main_array.forEach((val) => {
  let div_inner = document.createElement("div");

  let h1 = document.createElement("h1");
  h1.innerText = val.title;

  let p = document.createElement("p");
  p.innerText = val.discription;

  div_inner.appendChild(h1);
  div_inner.appendChild(p);

  div_inner.setAttribute("class", "div_inner");

  question_display.appendChild(div_inner);

  div_inner.addEventListener("click", function () {
    welcome_div.style.display = "none";
    right_after.style.display = "block";

    question_div_heading.innerText = h1.innerText;
    question_div_para.innerText = p.innerText;

    let result = main_array.find((data) => {
      if (data.title === h1.innerText) return true;
    });
    let index = main_array.indexOf(result);
    response_div.innerText = "";
    console.log(index);
    main_array[index].response.forEach((data) => {
      let div_inner = document.createElement("div");

      let h1 = document.createElement("h1");
      h1.innerText = data.enterName;

      let p = document.createElement("p");
      p.innerText = data.comment;

      div_inner.appendChild(h1);
      div_inner.appendChild(p);

      div_inner.setAttribute("class", "div_inner");

      response_div.appendChild(div_inner);
    });

    resolve.addEventListener("click", function () {
      div_inner.style.display = "none";
      right_after.style.display = "none";
      welcome_div.style.display = "block";
      welcome_div.style.display = "flex";
      welcome_div.setAttribute("class", "welcome_div");

      let result = main_array.find((data) => {
        if (data.title === h1.innerText) return true;
      });
      let index = main_array.indexOf(result);
      main_array.splice(index, 1);
      console.log(main_array);
      localStorage.setItem("data", JSON.stringify(main_array));
    });
  });
});

// addEventlistners

submit.addEventListener("click", function () {
  add_div();
});

submit_after_right.addEventListener("click", function () {
  let div_inner = document.createElement("div");

  let h1 = document.createElement("h1");
  let enter_text = enter_name.value;
  h1.innerText = enter_text;

  let p = document.createElement("p");
  let textarea_text = textarea_comment.value;
  p.innerText = textarea_text;

  div_inner.appendChild(h1);
  div_inner.appendChild(p);

  div_inner.setAttribute("class", "div_inner");

  response_div.appendChild(div_inner);

  main_array.forEach((val) => {
    let h1 = val.title;

    let result = main_array.find((data) => {
      if (data.title === h1) return true;
    });
    let index = main_array.indexOf(result);
    console.log(index);
  });

  let result = main_array.find((data) => {
    if (data.title === question_div_heading.innerText) return true;
  });
  let index = main_array.indexOf(result);
  main_array[index].response.push({
    enterName: enter_text,
    comment: textarea_text,
  });
  localStorage.setItem("data", JSON.stringify(main_array));
});

search.addEventListener("input", function () {
  let search_value = search.value;
  if (search_value) question_display.innerText = "";
  let new_arr = main_array.filter((val) => {
    if (val.title.includes(search_value)) return true;
  });
  if (new_arr) {
    question_display.innerText = "";
    arrayforEach(new_arr);
  } else if (!search_value) {
    question_display.innerText = "";
    arrayforEach();
  }
  if (new_arr.length === 0) {
    console.log(new_arr);
    let div_inner = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.innerText = `No Match Found`;
    div_inner.appendChild(h1);
    div_inner.setAttribute("class", "div_inner");
    question_display.appendChild(div_inner);
  }
});

// functions

function add_div() {
  let div_inner = document.createElement("div");

  let h1 = document.createElement("h1");
  let subject_text = subject.value;
  h1.innerText = subject_text;

  let p = document.createElement("p");
  let textarea_text = textarea.value;
  p.innerText = textarea_text;

  div_inner.appendChild(h1);
  div_inner.appendChild(p);

  div_inner.setAttribute("class", "div_inner");

  question_display.appendChild(div_inner);

  main_array.push({
    title: subject_text,
    discription: textarea_text,
    response: [],
  });

  localStorage.setItem("data", JSON.stringify(main_array));

  div_inner.addEventListener("click", function () {
    welcome_div.style.display = "none";
    right_after.style.display = "block";

    question_div_heading.innerText = h1.innerText;
    question_div_para.innerText = p.innerText;

    let result = main_array.find((data) => {
      if (data.title === h1.innerText) return true;
    });
    let index = main_array.indexOf(result);
    response_div.innerHTML = "";
    main_array[index].response.forEach((data) => {
      let div_inner = document.createElement("div");

      let h1 = document.createElement("h1");
      h1.innerText = data.enterName;

      let p = document.createElement("p");
      p.innerText = data.comment;

      div_inner.appendChild(h1);
      div_inner.appendChild(p);

      div_inner.setAttribute("class", "div_inner");

      response_div.appendChild(div_inner);
    });

    resolve.addEventListener("click", function () {
      div_inner.style.display = "none";
      right_after.style.display = "none";
      welcome_div.style.display = "block";
      welcome_div.style.display = "flex";
      welcome_div.setAttribute("class", "welcome_div");

      let result = main_array.find((data) => {
        if (data.title === h1.innerText) return true;
      });
      let index = main_array.indexOf(result);
      main_array.splice(index, 1);
      localStorage.setItem("data", JSON.stringify(main_array));
    });
  });
}

function arrayforEach(defaultarray = main_array) {
  defaultarray.forEach((val) => {
    let div_inner = document.createElement("div");

    let h1 = document.createElement("h1");
    h1.innerText = val.title;

    let p = document.createElement("p");
    p.innerText = val.discription;

    div_inner.appendChild(h1);
    div_inner.appendChild(p);

    div_inner.setAttribute("class", "div_inner");

    question_display.appendChild(div_inner);
  });
}

console.log(main_array);
