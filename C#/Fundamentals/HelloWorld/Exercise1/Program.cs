using System;

namespace Exercise1
{
    class Program
    {
        static void Main(string[] args)
        {
            // Exercise 1
            //Console.Write("Enter a number (1-10): ");
            //var input = int.Parse(Console.ReadLine());
            //Console.WriteLine(input >= 1 && input <= 10 ? "Valid" : "Invalid");

            //Exercise 2
            //Console.Write("Enter first number: ");
            //var number1 = int.Parse(Console.ReadLine());
            //Console.Write("Enter second number: ");
            //var number2 = int.Parse(Console.ReadLine());
            //var biggestNumber = number1 > number2 ? number1 : number2;
            //Console.WriteLine("Biggest number is: " + biggestNumber.ToString());

            //Exercise 3
            //Console.Write("Enter width: ");
            //var width = int.Parse(Console.ReadLine());
            //Console.Write("Enter height: ");
            //var height = int.Parse(Console.ReadLine());
            //Console.WriteLine(width > height ? "Landscape" : "Portrait");

            //Exercise 4
            Console.Write("Enter speed limit: ");
            var speedLimit = double.Parse(Console.ReadLine());
            Console.WriteLine("Speed limit car: ");
            var speedLimitCar = double.Parse(Console.ReadLine());
            if (speedLimit > speedLimitCar)
            {
                Console.WriteLine("Ok");
            }
            else
            {
                var demeritPoints = Math.Floor((speedLimitCar - speedLimit) / 5);
                Console.WriteLine(
                    demeritPoints > 12 ? 
                    "License suspended" : 
                    "Demerit points: " + demeritPoints);
            }
            
        }

    }
}
