package Threads;

public class ThreadLifeCycleExample {

    static class MyThread extends Thread {
        public void run() {
            System.out.println("Thread is running. Now going to sleep...");

            try {
                // Thread enters TIMED_WAITING state
                Thread.sleep(3000);
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted.");
            }

            System.out.println("Thread woke up and is finishing.");
        }
    }

    public static void main(String[] args) throws InterruptedException {
        MyThread thread = new MyThread();

        // NEW state
        System.out.println("State after thread creation: " + thread.getState());

        thread.start(); // Moves to RUNNABLE
        System.out.println("State after calling start(): " + thread.getState());

        Thread.sleep(100); // Give thread time to enter sleep
        System.out.println("State while thread is sleeping: " + thread.getState());

        thread.join(); // Wait for the thread to finish
        System.out.println("State after thread is terminated: " + thread.getState());
    }
}

