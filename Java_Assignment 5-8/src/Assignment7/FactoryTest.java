package Assignment7;

interface Cycle1 {
    void ride();
}

class Unicycle1 implements Cycle1 {
    public void ride() { System.out.println("Riding a Unicycle."); }
}

class Bicycle1 implements Cycle1{
    public void ride() { System.out.println("Riding a Bicycle."); }
}

class Tricycle1 implements Cycle1 {
    public void ride() { System.out.println("Riding a Tricycle."); }
}

interface CycleFactory {
    Cycle1 getCycle();
}

class UnicycleFactory implements CycleFactory {
    public Cycle1 getCycle() { return new Unicycle1(); }
}

class BicycleFactory implements CycleFactory {
    public Cycle1 getCycle() { return new Bicycle1(); }
}

class TricycleFactory implements CycleFactory {
    public Cycle1 getCycle() { return new Tricycle1(); }
}

public class FactoryTest {
    public static void rideCycle(CycleFactory factory) {
        Cycle1 c = factory.getCycle();
        c.ride();
    }

    public static void main(String[] args) {
        rideCycle(new UnicycleFactory());
        rideCycle(new BicycleFactory());
        rideCycle(new TricycleFactory());
    }
}

