package Oops.Inheritance.MultipleInheritance;


interface PaymentMethod {
    void pay(double amount);
}
class CreditCardPayment implements PaymentMethod {
    public void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using Credit Card.");
    }
}

class PayPalPayment implements PaymentMethod {
    public void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using PayPal.");
    }
}

class UpiPayment implements PaymentMethod {
    public void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using UPI.");
    }
}

public class Demo {
    public static void main(String[] args) {
        PaymentMethod payment;

        payment = new CreditCardPayment();
        payment.pay(500.0);

        payment = new PayPalPayment();
        payment.pay(750.0);

        payment = new UpiPayment();
        payment.pay(300.0);
    }
}
