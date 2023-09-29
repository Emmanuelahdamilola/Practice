const quantityOrder = document.getElementById("quantity");
const totalAmount = document.getElementById("amount");
let unitPrice = 100;

function placeOrder() {
    alert("Your order will be delievered to you shortly!");
}

quantityOrder.addEventListener('input', () => {
    if (quantityOrder.value < 0 ) {
        unitPrice = 0;
    }
    const calculatedPrice = quantityOrder.value * unitPrice;
    totalAmount.innerHTML = calculatedPrice;
});
