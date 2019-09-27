package be.jelleceulemans.javapractice;

public class MyClass {

    public static void main(String[] args) {
        int change = getMilk(2, 40);
        System.out.println("Hello Master, your change is " + change + " pounds");
    }

    public static int getMilk(int nrOfCartonsToBuy, int startingAmount){

        int priceToPay = nrOfCartonsToBuy*2;
        System.out.println("Open door");
        System.out.println("Walk to store");
        System.out.println("Buy " + nrOfCartonsToBuy + " cartons on the ground floor");
        System.out.println("Pay " + priceToPay + " pounds, but no more");
        System.out.println("Run home with milk galore");

        return startingAmount - priceToPay;
    }
}
