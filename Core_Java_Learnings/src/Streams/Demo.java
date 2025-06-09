package Streams;


import java.util.*;
import java.util.stream.Collectors;

class Order {
    String customerName;
    double amount;
    String status;

    public Order(String customerName, double amount, String status) {
        this.customerName = customerName;
        this.amount = amount;
        this.status = status;
    }

    public String getCustomerName() {
        return customerName;
    }

    public double getAmount() {
        return amount;
    }

    public String getStatus() {
        return status;
    }
}

public class Demo {
    public static void main(String[] args) {
        List<Order> orders = Arrays.asList(
                new Order("Alice", 1200.0, "Delivered"),
                new Order("Bob", 800.0, "Pending"),
                new Order("Alice", 300.0, "Delivered"),
                new Order("David", 500.0, "Cancelled"),
                new Order("Bob", 400.0, "Delivered")
        );

        // Stream API to group total delivered order amounts by customer
        Map<String, Double> totalDeliveredByCustomer = orders.stream()
                .filter(order -> order.getStatus().equalsIgnoreCase("Delivered"))
                .collect(Collectors.groupingBy(
                        Order::getCustomerName,
                        Collectors.summingDouble(Order::getAmount)
                ));

        // Print the result
        totalDeliveredByCustomer.forEach((customer, total) ->
                System.out.println(customer + " → ₹" + total)
        );
    }
}
