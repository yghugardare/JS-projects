// multiple inheritace
class PaymentProcessor {
  processPayment(orderObj) {
    console.log(`Processing payment for order ${orderObj.id}`);
  }
}
class EmailNotifier {
  sendEmailConfirmation(orderObj) {
    console.log(`Sending email confirmation for order ${orderObj.id}`);
  }
}
// Single class inheriting from both parent classes
// class OrderProcessor extends PaymentProcessor , EmailNotifier {
//     // Not possible in JS
//     // ERROR- Classes can only extend a single class
// }
//Solution - Composition
class OrderProcessor {
  constructor() {
    //creating objects by combining smaller, 
    // more specialized objects, known as components
    this.paymentProcessor = new PaymentProcessor();
    this.emailNotifier = new EmailNotifier();
  }
  processOrder(order) {
    this.paymentProcessor.processPayment(order);
    this.emailNotifier.sendEmailConfirmation(order);
    console.log(`Order ID #${order.id} with amount ${order.amount} processed successfully`);
  }
}
let processor = new OrderProcessor();
let sampleOrder = {id:'HX69',amount:3000};
processor.processOrder(sampleOrder);
/* OUTPUT-
Processing payment for order HX69
Sending email confirmation for order HX69
Order ID #HX69 with amount 3000 processed successfully
*/
