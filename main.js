//select
let contr = document.querySelector(".container");
let frm = document.querySelector(".form");
let txt = document.querySelector(".input");
let sub = document.querySelector(".add");
let tsk = document.querySelector(".task");
let DoneTsk = document.querySelector(".DoneTask");

// load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let tasksDone = JSON.parse(localStorage.getItem("tasksDone")) || [];

// function ti save tasks in localStorage

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function saveTasksDone() {
  localStorage.setItem("tasksDone", JSON.stringify(tasksDone));
}

// Render Tasks on page load
tasks.forEach(function (taskText) {
  createTaskElement(taskText);
});
tasksDone.forEach(function (taskText) {
  createDoneTaskElement(taskText);
});

// Function to create task element---------------------------------------
function createTaskElement(taskText) {
  //create Element
  let dv = document.createElement("div");
  let spn = document.createElement("span");
  let btn = document.createElement("button");
  btn.textContent = "Delete";
  let btnDone = document.createElement("button");
  btnDone.textContent = "Done";
  let btnContainer = document.createElement("div");

  btn.addEventListener("click", function (event) {
    event.preventDefault(); // منع سلوك النموذج الافتراضي
    dv.remove();
    // Remove task from tasks array
    let taskIndex = tasks.indexOf(taskText);
    if (taskIndex > -1) {
      tasks.splice(taskIndex, 1);
      saveTasks();
    }
  });

  btnDone.addEventListener("click", function (event) {
    event.preventDefault(); // منع سلوك النموذج الافتراضي
    dv.remove();

    let taskText = spn.innerText;
    // التحقق مما إذا كان العنصر موجودًا بالفعل في قائمة العناصر المكتملة
    let isTaskCompleted = tasksDone.includes(taskText);

    if (!isTaskCompleted) {
      tasksDone.push(taskText);
      saveTasksDone();
      createDoneTaskElement(taskText);
    }

    // // التحقق مما إذا كانت العنصر موجودة بالفعل في قائمة العناصر المكتملة
    // if (tasksDone.includes(taskText)) {
    //   return; // انتهاء التنفيذ إذا تم العثور على العنصر
    // }
    // tasksDone.push(taskText);
    // saveTasksDone();
    // createDoneTaskElement(taskText);
    // // Disable the button after clicking
    // btnDone.disabled = true;
  });

  //create Class
  dv.className = "viw-data";
  spn.className = "viw-spn";
  btnContainer.className = "btn-container";
  btn.className = "del-spn";
  btnDone.className = "Done-spn";

  //appended

  dv.appendChild(spn);
  dv.appendChild(btnContainer);
  btnContainer.appendChild(btn);
  btnContainer.appendChild(btnDone);
  tsk.appendChild(dv);
  spn.innerText = taskText;
}

// Function to create Done Task element*******************************************
function createDoneTaskElement(taskText) {
  //create Element
  let dvDone = document.createElement("div");
  let spnDone = document.createElement("span");
  let btnClear = document.createElement("button");

  //create Class
  dvDone.className = "viw-Done-data";
  spnDone.className = "viw-Done-spn";

  //configure button
  btnClear.innerText = "clear";
  btnClear.className = "btnclr";

  //append elements
  dvDone.appendChild(spnDone);
  dvDone.appendChild(btnClear);
  DoneTsk.appendChild(dvDone);

  spnDone.innerText = taskText;

  // Add event listener to clear button
  btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    clearDoneTasks();
  });
}

//event listener for adding a task

sub.addEventListener("click", function (event) {
  event.preventDefault(); // منع سلوك النموذج الافتراضي
  // if (txt.value != 0)
  if (txt.value.trim() !== "") {
    let taskText = txt.value.toLowerCase();
    // التحقق مما إذا كان العنصر موجودًا بالفعل في قائمة العناصر
    if (!tasks.includes(taskText)) {
      tasks.push(taskText);
      saveTasks();
      createTaskElement(taskText);
    }

    txt.value = ""; // Clear input field
  }
});

// clear all tasks in Done
function clearDoneTasks() {
  while (DoneTsk.firstChild) {
    DoneTsk.removeChild(DoneTsk.firstChild);
  }
  tasksDone = []; // قم بإفراغ قائمة tasksDone أيضًا
  saveTasksDone();
}
