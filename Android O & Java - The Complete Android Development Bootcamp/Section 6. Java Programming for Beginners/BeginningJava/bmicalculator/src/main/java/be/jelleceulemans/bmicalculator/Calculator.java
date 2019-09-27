package be.jelleceulemans.bmicalculator;

public class Calculator {
    public static void main(String[] args) {
        double bmi = calculation(1.78, 135);

        if (bmi > 25){
            System.out.println("Overweight");
        }
        else if ( bmi < 18.5){
            System.out.println("Underweight");
        }
        else {
            System.out.println("Normal weight");
        }
    }

    private static double calculation(double height, double mass){
        return mass / (height * height);
    }
}


