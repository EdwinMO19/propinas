function calculateTip() {
    var total = parseFloat(document.getElementById('total').value);
    var percentage = parseFloat(document.getElementById('percentage').value);
    
    if (isNaN(total) || isNaN(percentage)) {
      alert('Por favor, ingrese números válidos.');
      return;
    }
    
    var tipAmount = total * (percentage / 100);
    var totalAmount = total + tipAmount;
    
    document.getElementById('result').innerHTML = `
      <p>Propina: $${tipAmount.toFixed(2)}</p>
      <p>Total a pagar: $${totalAmount.toFixed(2)}</p>
    `;
  }
  