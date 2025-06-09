package HashMap;

import java.util.HashMap;

public class Demo {
    public static void main(String[] args) {
        // Create the cart
        HashMap<String, Integer> cart = new HashMap<>();

        // User adds items
        addToCart(cart, "Laptop");
        addToCart(cart, "Phone");
        addToCart(cart, "Laptop");

        // Display cart
        System.out.println("Cart contents: " + cart);
    }

    public static void addToCart(HashMap<String, Integer> cart, String product) {
        cart.put(product, cart.getOrDefault(product, 0) + 1);
    }
}



//Why HashMap is Perfect Here:
//Fast lookup: Check if product already exists in cart.
//
//Fast update: Increment quantity in O(1) time.
//
//Clean structure for key-value (product → quantity).