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

    resolve.addEventListener("click", function () {
      div_inner.style.display = "none";
      right_after.style.display = "none";
      welcome_div.style.display = "block";
      welcome_div.setAttribute("class", "welcome_div");
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
});

search.addEventListener("input", function () {
  let search_value = search.value;
  if (search_value) question_display.innerText = "";
  let new_arr = main_array.filter((val) => {
    if (val.title.includes(search_value)) return true;
  });
  if (new_arr) {
    question_display.innerText = "";
    new_arr.forEach((val) => {
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
  } else {
    question_display.innerText = "";
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
    });
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
  });

  localStorage.setItem("data", JSON.stringify(main_array));

  div_inner.addEventListener("click", function () {
    welcome_div.style.display = "none";
    right_after.style.display = "block";

    question_div_heading.innerText = h1.innerText;
    question_div_para.innerText = p.innerText;

    resolve.addEventListener("click", function () {
      div_inner.style.display = "none";
      right_after.style.display = "none";
      welcome_div.style.display = "block";
      welcome_div.setAttribute("class", "welcome_div");
    });
  });
}
