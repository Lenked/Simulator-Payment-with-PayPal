paypal.Buttons({
    createOrder: function(data, actions) {

      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '0.01'
          }
        }]
      });
    },
    // Finalize the transaction on the server after payer approval
    onApprove: function(data, actions) {
      return actions.transaction.capture().then(function(details) {
        alert('Transaction completed by ' + transaction.payer.name.given_name);
      });
    }
  }).render('#paypal-button-container');
