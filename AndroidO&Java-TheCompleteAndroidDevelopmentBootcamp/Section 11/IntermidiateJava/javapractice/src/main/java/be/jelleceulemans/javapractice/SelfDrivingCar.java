package be.jelleceulemans.javapractice;

public class SelfDrivingCar extends Car {

    public SelfDrivingCar(String colour, String interior) {
        super(colour, interior);
        System.out.println("Constructing self-driving car. Installing Skynet version 0.92.4");
    }

    @Override
    public void drive(){
        System.out.println("Driving to Googleplex, Mountain View");
    }
}
