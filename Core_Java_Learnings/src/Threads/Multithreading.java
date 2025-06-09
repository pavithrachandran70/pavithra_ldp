package Threads;


class Task1 implements Runnable {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Task1 - Count: " + i);
            try {
                Thread.sleep(500); // Sleep for 0.5 seconds
            } catch (InterruptedException e) {
                System.out.println("Task1 Interrupted");
            }
        }
    }
}

class Task2 implements Runnable {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Task2 - Count: " + i);
            try {
                Thread.sleep(700); // Sleep for 0.7 seconds
            } catch (InterruptedException e) {
                System.out.println("Task2 Interrupted");
            }
        }
    }
}

public class Multithreading {
    public static void main(String[] args) {
        Thread thread1 = new Thread(new Task1());
        Thread thread2 = new Thread(new Task2());

        thread1.start(); // Start Task1 in a new thread
        thread2.start(); // Start Task2 in a new thread

        System.out.println("Main thread finished starting both tasks.");
    }
}




//Task1 and Task2 are two different tasks that implement the Runnable interface.
//
//Each one prints numbers from 1 to 5 with a short delay.
//
//Both are started using separate threads.
//
//Output will show interleaved results, because both threads run concurrently.