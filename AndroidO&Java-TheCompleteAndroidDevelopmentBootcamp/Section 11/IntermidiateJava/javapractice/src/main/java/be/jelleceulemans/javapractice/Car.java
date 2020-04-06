package be.jelleceulemans.javapractice;

public class Car {

    public String colour = "Black";
    private int mNumberOfSeats = 5;
    protected String mInterior;

    public Car() {
        mInterior = "Leather";
    }

    public Car(String colour, String interior) {
        this.colour = colour;
        this.mInterior = interior;
    }

    public String getInterior() {
        return mInterior;
    }

    public int getNumberOfSeats() {
        return mNumberOfSeats;
    }

    public void drive(){
        System.out.println("Car is moving");
    }
}
