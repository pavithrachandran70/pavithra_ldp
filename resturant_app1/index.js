//menu filtering
  function filterMenu() {
    let searchText = document.getElementById('menuSearch').value.toLowerCase();
    let menuItems = document.querySelectorAll('#menuList .item');
    for (let i = 0; i < menuItems.length; i++) {
      let item = menuItems[i];
      let itemText = item.textContent.toLowerCase();
      item.style.display = itemText.includes(searchText) ? 'block' : 'none';
    }
  }



  //Table filtering
  function filterTable() {
    let searchText = document.getElementById('tableSearch').value.toLowerCase();
    let tableItems = document.querySelectorAll('#tableList .tables');
    for (let i = 0; i < tableItems.length; i++) {
      let table = tableItems[i];
      let tableText = table.textContent.toLowerCase();
      table.style.display = tableText.includes(searchText) ? 'block' : 'none';
    }
  }



 //drag and drop
  let draggedItem = null;   //initially it is set to 0 and updated when a drag operation starts

  function startDrag(event) {   //called when menu item drag begins
    draggedItem = event.target;   //event.target--html element being dragged ,this will be stored in draggeditem
  }

  function allowDrop(event) {
    event.preventDefault();  //by default html elements do not allows dropping
  }

//close btn in search bar
document.getElementById('clearBtn').addEventListener('click', () => {
document.getElementById('tableSearch').value = '';
filterTable(); // Call your filtering function again
});

  document.getElementById('clearButton').addEventListener('click', () => {
document.getElementById('menuSearch').value = '';
filterMenu(); // Call your filtering function again
});


//popup box

const orders = {   //empty array stores the orders of each table
table1: [],
table2: [],
table3: []
};

const sessionActive = {  //no session is in currently active
    table1: false,
    table2: false,
    table3: false
  };

function dropItem(event, tableId) {
event.preventDefault();
if (!draggedItem) return;
 // Start session if not already active
 if (!sessionActive[tableId]) {
      sessionActive[tableId] = true;
    }

const itemName = draggedItem.querySelector('.item-name').textContent;
const price = parseInt(draggedItem.getAttribute('data-price'));

const existing = orders[tableId].find(item => item.name === itemName);
if (existing) {
  existing.qty += 1;
} else {
  orders[tableId].push({ name: itemName, price: price, qty: 1 });
}


updateTableDisplay(tableId);

}


function popup(tableId) {
const popup = document.getElementById('popupBox');
popup.style.display = 'block';
popup.setAttribute('data-table-id', tableId);  // name,value
document.getElementById('popupTitle').textContent = `${tableId.replace("table", "Table ")} Orders`;

const highlight = document.getElementById(tableId);
highlight.style.backgroundColor = "#d1aaff";
//initial state
const tbody = document.querySelector('#orderTable tbody');
tbody.innerHTML = '';  //clears the previous one
let total = 0;
if (orders[tableId].length === 0) {
  alert("No items added"); 
const row = document.createElement('tr');
row.innerHTML = `<td colspan="5" style="text-align:center;">No items added</td>`;
tbody.appendChild(row);
} else{

orders[tableId].forEach((item, index) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${item.name}</td>
    <td>₹${item.price}</td>
    
    <td>
      <button onclick="changeQty('${tableId}', ${index}, -1)">-</button>
      ${item.qty}
      <button onclick="changeQty('${tableId}', ${index}, 1)">+</button>
    </td>
    <td><button onclick="deleteItem('${tableId}', ${index})">
      <i class="fas fa-trash delete-icon" style="cursor: pointer; color:red;"></i>  
     </button></td>
   `;
  tbody.appendChild(row);
  total += item.qty * item.price;
});


}
document.getElementById('totalCost').textContent = `Total: ₹${total}`;
}
function deleteItem(tableId, index) {
orders[tableId].splice(index, 1);   //removes 1 item at given index
popup(tableId);
updateTableDisplay(tableId);
}

function generateBill() {

const tableId = document.getElementById('popupBox').getAttribute('data-table-id');
alert(`Order for ${tableId.replace("table", "Table ")} is placed. Have a nice day!`);
// orders[tableId] = []; //clears all oreders for the table
orders[tableId] = [];
sessionActive[tableId] = false;
const highlight = document.getElementById(tableId);
highlight.style.backgroundColor = "";

updateTableDisplay(tableId);
closePopup();


}

function closePopup() {
document.getElementById('popupBox').style.display = 'none';
const tableId = document.getElementById('popupBox').getAttribute('data-table-id');
// orders[tableId] = [];
// sessionActive[tableId] = false;
const highlight = document.getElementById(tableId);
highlight.style.backgroundColor = "";
// updateTableDisplay(tableId);

}
function changeQty(tableId, index, delta) {
let item = orders[tableId][index];
item.qty += delta;  //It allows you to use a single function to handle both "increase" and "decrease" quantity buttons.
// if (item.qty < 1) item.qty = 1;
if (item.qty <= 0) {
  orders[tableId].splice(index, 1);
}
popup(tableId);
updateTableDisplay(tableId);
}

function updateTableDisplay(tableId) {

const table = document.getElementById(tableId);
const info = table.querySelector('.table-info');
const order = orders[tableId] || [];

    let totalItems = 0;
    let totalCost = 0;

    orders[tableId].forEach(item => {
      totalItems += item.qty;
      totalCost += item.price * item.qty;
    });

    info.textContent = `Items: ${totalItems} | Rs. ${totalCost}`;
    const dropZone = table.querySelector('.drop-zone');
    dropZone.textContent = '';
  }
