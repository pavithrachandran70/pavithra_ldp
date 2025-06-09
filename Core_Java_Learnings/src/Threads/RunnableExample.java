package Threads;


//Runnable is a built-in Java interface used to define a task that can be executed by a thread.
class MyRunnable implements Runnable {
    //The run() method is overridden from the Runnable interface.

    //This method contains the code that will run in the new thread
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Runnable running: " + i);
            try {
                //Thread.sleep(500) pauses the current thread (here, the Runnable thread) for 500 milliseconds (0.5 seconds) between each iteration.
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println("Runnable interrupted");
            }
        }
    }
}

public class RunnableExample{
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable());
        t1.start(); // starts the new thread

        for (int i = 1; i <= 5; i++) {
            System.out.println("Main thread: " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println("Main thread interrupted");
            }
        }
    }
}
