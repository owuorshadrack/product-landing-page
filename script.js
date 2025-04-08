// script.js

// Inventory Management
const inventoryForm = document.getElementById('inventory-form');
const inventoryTableBody = document.getElementById('inventory-table').querySelector('tbody');

inventoryForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const itemName = document.getElementById('item-name').value;
    const itemCategory = document.getElementById('item-category').value;
    const itemQuantity = document.getElementById('item-quantity').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${itemName}</td>
        <td>${itemCategory}</td>
        <td>${itemQuantity}</td>
        <td>
            <button class="delete-btn">Delete</button>
        </td>
    `;

    inventoryTableBody.appendChild(newRow);

    // Clear form inputs
    inventoryForm.reset();

    // Add delete functionality
    newRow.querySelector('.delete-btn').addEventListener('click', () => {
        newRow.remove();
    });
});

// Order Management
const orderForm = document.getElementById('order-form');
const ordersTableBody = document.getElementById('orders-table').querySelector('tbody');
const productSelect = document.getElementById('product');

// Populate products in the dropdown (example products)
const products = ['Product A', 'Product B', 'Product C'];
products.forEach((product) => {
    const option = document.createElement('option');
    option.value = product;
    option.textContent = product;
    productSelect.appendChild(option);
});

orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const customerName = document.getElementById('customer-name').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${Math.floor(Math.random() * 1000)}</td>
        <td>${customerName}</td>
        <td>${product}</td>
        <td>${quantity}</td>
        <td>Pending</td>
    `;

    ordersTableBody.appendChild(newRow);

    // Clear form inputs
    orderForm.reset();
});

// Data Backup and Restore
const backupButton = document.getElementById('backup');
const restoreButton = document.getElementById('restore');

backupButton.addEventListener('click', () => {
    alert('Data backup functionality will be implemented here.');
});

restoreButton.addEventListener('click', () => {
    alert('Data restore functionality will be implemented here.');
});

// Role Management
const roleManagementForm = document.getElementById('role-management-form');
roleManagementForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const role = document.getElementById('role').value;

    alert(`Role for ${username} has been updated to ${role}.`);

    roleManagementForm.reset();
});
