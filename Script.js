let subject = document.getElementById("subject");
let question = document.getElementById("question");
let submit = document.getElementById("submit");
let new_left = document.getElementById("new_left");
let append_right_side = document.getElementById("append_right_side");
let welcome_right_side = document.getElementById("welcome_right_side");
let response_section = document.getElementById("response_section");
let add_response = document.getElementById("add_response");
let search = document.getElementById("search");

let my_data = localStorage.getItem("data");

if (my_data) my_data = JSON.parse(my_data);

let array = my_data || [];

// For Each  loop to data

let subject_title;
let question_title;
let container;
let subject_heading;
let question_head;

array.forEach((data) => {
  // let subject_title = data.title;
  // let question_title = data.discription;

  // let container = document.createElement("div");

  // let subject_heading = document.createElement("h2");
  // let question_heading = document.createElement("p");

  // subject_heading.innerText = subject_title;
  // question_heading.innerText = question_title;

  // container.appendChild(subject_heading);
  // container.appendChild(question_heading);

  // container.classList.add("new_container");

  // new_left.appendChild(container);
  subject_title = data.title;
  question_title = data.discription;
  container_data();
});

submit.addEventListener("click", function () {
  welcome_right_side.setAttribute("class", "welcome_right_side");
  response_section.style.display = "none";
  add_response.style.display = "none";

  subject_title = subject.value;
  question_title = question.value;
  container_data();

  array.push({
    title: subject_title,
    discription: question_title,
  });

  localStorage.setItem("data", JSON.stringify(array));

  // If we click on div at left side

  container.addEventListener("click", function () {
    welcome_right_side.style.display = "none";

    let question_heading1 = document.createElement("h1");
    question_heading1.innerText = "Question";

    question_heading1.setAttribute("class", "question_heading");

    let right_div = document.createElement("div");

    let resolve_button = document.createElement("button");
    resolve_button.innerText = "Resolve";

    resolve_button.setAttribute("class", "resolve");

    let = subject_heading_right = subject_heading;
    let question_heading_right = question_heading;

    right_div.appendChild(subject_heading_right);
    right_div.appendChild(question_heading_right);

    append_right_side.appendChild(right_div);
    append_right_side.appendChild(resolve_button);
    append_right_side.appendChild(question_heading1);

    // response section div

    let response = document.createElement("h2");
    response.innerText = "Response";

    response_section.appendChild(response);

    response_section.style.display = "block";

    // Add response section div

    let add_response_div = document.createElement("div");
    add_response_div.classList.add("add_response_div");

    let add_response_heading = document.createElement("h2");
    add_response_heading.innerText = "Add Response";

    let enter_name = document.createElement("input");
    enter_name.setAttribute("placeholder", "Enter Name");

    enter_name.setAttribute("class", "enter_name");

    let textarea = document.createElement("textarea");
    textarea.setAttribute("placeholder", "Enter Comment");

    textarea.setAttribute("class", "textarea");

    let submit_button = document.createElement("button");
    submit_button.innerText = "Submit";

    submit_button.setAttribute("class", "submit_button");

    add_response_div.appendChild(add_response_heading);
    add_response_div.appendChild(enter_name);
    add_response_div.appendChild(textarea);
    add_response_div.appendChild(submit_button);

    add_response.appendChild(add_response_div);

    add_response.setAttribute("class", "add_response");

    add_response.style.display = "block";

    append_right_side.style.display = "block";

    resolve_button.addEventListener("click", function () {
      welcome_right_side.style.display = "block";
      welcome_right_side.setAttribute("class", "welcome_right_side");

      append_right_side.innerHTML = "";

      append_right_side.style.display = "none";

      response_section.style.display = "none";
      add_response.style.display = "none";
      response_section.innerHTML = "";
      add_response.innerHTML = "";

      container.innerHTML = "";
    });

    submit_button.addEventListener("click", function () {
      let enter_name_text = enter_name.value;
      let textarea_name_text = textarea.value;

      let response_inner_div = document.createElement("div");
      let name_val = document.createElement("h2");
      let comments_val = document.createElement("h4");

      name_val.innerText = enter_name_text;
      comments_val.innerText = textarea_name_text;

      response_inner_div.appendChild(name_val);
      response_inner_div.appendChild(comments_val);

      response_inner_div.setAttribute("class", "response_inner_div");

      let response_div = document.createElement("div");

      response_div.appendChild(response_inner_div);

      response_section.appendChild(response_div);
    });
  });
});

search.addEventListener("input", function () {
  let search_value = search.value;
  if (search_value) new_left.innerHTML = "";

  let new_arr = array.filter((val) => {
    if (val.title.includes(search_value)) return true;
  });

  if (new_arr) {
    new_arr.forEach((val) => {
      let container = document.createElement("div");
      let title = document.createElement("h1");
      let discription = document.createElement("p");

      title.innerText = val.title;
      discription.innerText = val.discription;

      container.appendChild(title);
      container.appendChild(discription);

      new_left.appendChild(container);

      container.setAttribute("class", "new_container");
    });
  }

  console.log(new_arr);
});

//functions

function container_data() {
  container = document.createElement("div");

  subject_heading = document.createElement("h2");
  question_heading = document.createElement("p");

  subject_heading.innerText = subject_title;
  question_heading.innerText = question_title;

  container.appendChild(subject_heading);
  container.appendChild(question_heading);

  container.classList.add("new_container");

  new_left.appendChild(container);
}
