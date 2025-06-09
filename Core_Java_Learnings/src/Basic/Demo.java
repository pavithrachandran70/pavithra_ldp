//COMMAND LINE ARGUMENTS
//SCANNER CLASS

package Basic;

import java.util.Scanner;

public class Demo {
    //Command Line Arguments--passing arguments to main via terminal
    public static void main(String args[])
    {
        for(int i=0;i<args.length;i++)
        {
            System.out.println(args[i]);
        }


        //SCANNER CLASS
        Scanner in =new Scanner(System.in);
        //int a,b,c;
        float a,b,c;
        System.out.println("Enter 2 Nos : ");
        //a=in.nextInt();
        // b=in.nextInt();
        a=in.nextFloat();
        b=in.nextFloat();
        c=(a*a)+(b*b)+(2*a*b);
        System.out.println("Result : "+c);
    }






}
