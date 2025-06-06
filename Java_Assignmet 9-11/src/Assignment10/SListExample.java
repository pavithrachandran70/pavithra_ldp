package Assignment10;


class SList<T> {
    private final Link<T> head = new Link<>(null); // Sentinel node

    public SListIterator<T> iterator() {
        return new SListIterator<>(head);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        SListIterator<T> it = iterator();
        while (it.hasNext()) {
            sb.append(it.next());
            if (it.hasNext()) sb.append(" -> ");
        }
        return sb.toString();
    }

    // Nested Link class
    private static class Link<T> {
        //Each Link holds the data and a reference to next.
        //
        //No reference to previous, fulfilling the singly linked nature.
        T data;
        Link<T> next;

        Link(T data) {
            this.data = data;
        }
    }

    // Custom Iterator
    public static class SListIterator<T> {
        private Link<T> current;
        private Link<T> previous;

        SListIterator(Link<T> head) {
            this.current = head;
            this.previous = null;
        }

        public boolean hasNext() {
            return current.next != null;
        }

        public T next() {
//            Moves current to the next node.
//
//            Updates previous for potential removal.
//
//            Returns data from the new current node.
            previous = current;
            current = current.next;
            return current.data;
        }

        public void insert(T data) {
            Link<T> newNode = new Link<>(data);
            //Creates a new node.
            //
            //Links it after current.
            //
            //Moves current to the new node.
            newNode.next = current.next;
            current.next = newNode;
            //Used during remove operation.
            current = newNode; // Advance current to new node
        }

        public void remove() {
            if (current == null || previous == null || current == previous) {
                throw new IllegalStateException("Can't remove without advancing first.");
            }
            previous.next = current.next;
            current = previous;
        }
    }
}
// Main.java
public class SListExample {
    public static void main(String[] args) {
        SList<String> list = new SList<>();
        SList.SListIterator<String> it = list.iterator();

        it.insert("Apple");
        it.insert("Banana");
        it.insert("Cherry");
        System.out.println("After insertion: " + list);

        // Move to second element ("Banana")
        it = list.iterator();//reset iterator
        it.next(); // Apple
        it.next(); // Banana
        it.remove(); // Remove Banana
        System.out.println("After removing 'Banana': " + list);

        it.insert("Date");
        System.out.println("After inserting 'Date': " + list);
    }
}

