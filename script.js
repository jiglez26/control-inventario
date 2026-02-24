// Inventory Control Script

function formatDate(date) {
    return date.toISOString().replace(/[T]/g, ' ').substring(0, 19);
}

function addItem(item) {
    // Logic to add item to inventory
    console.log('Item added:', item);
}

function removeItem(item) {
    // Logic to remove item from inventory
    console.log('Item removed:', item);
}

function updateItem(itemId, newItem) {
    // Logic to update an item in inventory
    console.log('Item updated:', itemId, newItem);
}

// Example usage
console.log('Current Date and Time (UTC):', formatDate(new Date()));
