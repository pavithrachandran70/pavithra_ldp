package Arrays;

import java.util.Scanner;

public class Demo {
    public static void main(String args[])
    {
        int a[]={10,20,30,40,50,60,70,80,90,100};
        //Accessing Elements in array
        System.out.println(a[2]);

        //Print all Elements using for loop
        for(int i=0;i<a.length;i++)
        {
            System.out.println(a[i]);
        }
        //Print all Elements using Enhanced for loop
        for(int element : a)
        {
            System.out.println(element);
        }

        int b[]; // Declaring array
        b=new int[10]; // Allocating Memory to Array
        int [] c =new int[10]; //Combining Both Statement

        //Buy default all element have zero value
        //This enhanced for-loop (for-each) prints all elements of the array b.
        //
        //Since b was just allocated, all elements are initialized to 0 by default in Java.
        //
        //Output: 10 zeros (0 printed ten times).
        for(int element : b)
        {
            System.out.println(element);
        }



        //This loop takes 3 inputs from the user and stores them in the first 3 elements of array c.
        for(int i=0;i<3;i++)
        {
            Scanner in =new Scanner(System.in);
            System.out.println("Enter The Number");
            c[i]=in.nextInt();
        }

//        This again uses an enhanced for-loop to print all 10 elements of array c.
//
//        The first 3 elements will be user input, and the remaining 7 will still be 0 (default value).
        for(int element : c)
        {
            System.out.println(element);
        }

    }
}
