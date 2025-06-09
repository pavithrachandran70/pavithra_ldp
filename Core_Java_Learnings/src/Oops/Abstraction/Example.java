package Oops.Abstraction;

// Abstract class (Abstraction)
abstract class Payment {
    public abstract void makePayment(double amount);

    public void printReceipt() {
        System.out.println("Receipt generated successfully.");
    }
}

// Concrete class 1
class CreditCardPayment extends Payment {
    @Override
    public void makePayment(double amount) {
        System.out.println("Processing credit card payment of $" + amount);
        // Logic to interact with bank, etc.
    }
}

// Concrete class 2
class UpiPayment extends Payment {
    @Override
    public void makePayment(double amount) {
        System.out.println("Processing UPI payment of $" + amount);
        // Logic to interact with UPI gateway, etc.
    }
}

// Main class
public class Example {
    public static void main(String[] args) {
        Payment payment;

        // Using credit card payment
        payment = new CreditCardPayment();
        payment.makePayment(250.0);
        payment.printReceipt();

        // Using UPI payment
        payment = new UpiPayment();
        payment.makePayment(100.0);
        payment.printReceipt();
    }
}

