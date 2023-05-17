// Select DOM
const tableInput = document.querySelector(".table");
const tableButton = document.querySelector(".table-button");
const fnameInput = document.querySelector(".fnameInput");
const lnameInput = document.querySelector(".lnameInput");
const fatherNameInput = document.querySelector(".fatherNameInput");
const phoneInput = document.querySelector(".phoneInput");
// Event Listeners

todoButton.addEventListener("click", addRow);

function addRow(e) {
  console.log(e);
  e.preventDefault();
  // * Create a Table
  const tableTbody = document.createElement("tbody");
  // Create a tr tag
  const trTag = document.createElement("tr");

  //Create td
  const tdTable1 = document.createElement("td");
  tdTable1.innerText = fnameInput.value;
  trTag.append(tdTable1);
  console.log(tdTable1);
  //Create another td
  const tdTable2 = document.createElement("td");
  tdTable2.innerText = lnameInput.value;
  trTag.append(tdTable2);
  console.log(tdTable2);

  //Create another td
  const tdTable3 = document.createElement("td");
  tdTable3.innerText = fatherNameInput.value;
  trTag.append(tdTable3);
  console.log(tdTable3);

  //Create another td
  const tdTable4 = document.createElement("td");
  tdTable4.innerText = phoneInput.value;
  trTag.append(tdTable4);
  console.log(tdTable4);

  //Create another td

  const tdTable5 = document.createElement("td");
  tdTable5.innerHTML = `<button class="btn btn-warning">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button class="btn btn-danger">
                        <i class="fas fa-trash"></i>
                      </button>
                      <button class="btn btn-primary">
                        <i class="fas fa-eye"></i>
                      </button>`;
  trTag.append(tdTable5);
  console.log(tdTable5);

  //append child
  tableTbody.appendChild(trTag);
  tableInput.appendChild(tableTbody);
}
