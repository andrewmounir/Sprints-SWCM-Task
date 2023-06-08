let taskList = [];
let oldyTaskName;
let oldyOrder;
let addTask = function () {
  const taskName = document.getElementById(`taskName`).value;
  const priority = document.getElementById(`priority`).value;

  // let taskObject = {
  //   Name: taskName,
  //   order: priority
  // };
  // implementing OOP concepts
  class taskObject {
    name;
    order;
    constructor(a, b) {
      this.Name = a;
      this.order = b;
    }
  }

  let taskObject1 = new taskObject(taskName, priority);

  if (validate(taskObject1)) {
    addtoArray(taskObject1);
    renderTable();
  } else {
    alert(
      `make sure you have inserted task name as string or number and given its priority `
    );
  }
};

let validate = function (taskObject1) {
  if (taskObject1.Name && taskObject1.order) {
    return true;
  } else {
    return false;
  }
};

let addtoArray = function (taskObject1) {
  taskList.push(taskObject1);
};

let renderTable = function () {
  let clicked = false;
  let tb = document.getElementById(`myTable`);
  let tbody = "";
  for (let i = 0; i < taskList.length; i++) {
    tbody += `<tr> <td>${i + 1}</td> <td>${taskList[i].Name}</td> <td>${
      taskList[i].order
    }</td> <td><button onclick= "editText(${i},${clicked})" id="editButton${i}"> edit</button></td>  <td><button onclick="deleteRow(${i})" id="deleteButton${i}">Delete</button></td></tr>`;
  }
  tb.innerHTML = tbody;
};

// Delete Button

deleteRow = function (i) {
  taskList.splice(i, 1);
  renderTable();
};

//Sort function by priority

sortTableByPriority = function () {
  taskList.sort((a, b) => {
    return b.order - a.order;
  });
  renderTable();
};

//Sort function by Name from A->Z

sortTableByName = function () {
  taskList.sort((a, b) => {
    const nameA = a.Name.toLowerCase();
    const nameB = b.Name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  console.log(taskList.name);
  renderTable();
};

//Edit Button
editText = function (i, clicked) {
  oldyTaskName = oldValue(taskList[i].Name);
  oldyOrder = oldValue2(taskList[i].order);
  clicked = true;

  if (clicked === true) {
    taskList[i].Name = `<input id="editInput${i}">`;
    taskList[i].order = `<input id="editInput2${i}">`;
  }
  renderTable();
  convertButtons(i, oldValue);
};

// Convert Buttons to save and Cancel
convertButtons = function (i, oldValue) {
  let editButton = document.getElementById(`editButton${i}`);
  let deleteButton = document.getElementById(`deleteButton${i}`);
  editButton.outerHTML = `<button onclick="saveButton(${i})">Save</button>`;
  deleteButton.outerHTML = `<button onclick="cancelButton(${i},${oldValue})">Cancel</button>`;
};

// Save Button
let saveButton = function (i) {
  let editedDoc = document.getElementById(`editInput${i}`).value;
  let editedOrder = document.getElementById(`editInput2${i}`).value;
  taskList[i].Name = editedDoc;
  taskList[i].order = editedOrder;
  renderTable();
};
// Cancel Button

let cancelButton = function (i) {
  let a = oldValue();
  taskList[i].Name = oldyTaskName;
  taskList[i].order = oldyOrder;
  renderTable();
};
// function to return old value before it has been edited used for cancel button
let oldValue = function (q) {
  return q;
};

let oldValue2 = function (q) {
  return q;
};
