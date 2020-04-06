package be.jelleceulemans.couldthisbelove;

import java.util.Random;

public class LoveCalculator {
    public static void main(String[] args) {
        System.out.println("your love score is: " + ifYouHadMyLove("Mr X.", "Miss Y."));
    }

    private static int ifYouHadMyLove(String yourName, String theirName){

        Random ranObject = new Random();
        int loveScore = ranObject.nextInt(101);

        if (loveScore > 80){
            System.out.println("You love each other like kanye loves kanye");
        }
        else if (loveScore > 40){
            System.out.println("You go together like coke and mentos");
        }
        else {
            System.out.println("No love possible. You'll be forever alone");
        }
        return loveScore;
    }
}
