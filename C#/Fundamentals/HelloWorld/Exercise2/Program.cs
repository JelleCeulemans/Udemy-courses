using System;
using System.Linq;

namespace Exercise2
{
    class Program
    {
        static void Main(string[] args)
        {
            // Exercise 1
            //var counter = 0;
            //for (int i = 1; i <= 100; i++)
            //{
            //    if (i % 3 == 0)
            //    {
            //        counter++;
            //    }
            //}
            //Console.WriteLine("amount divedable by 3: " + counter);

            // Exercise 2
            //var total = 0;
            //while (true)
            //{
            //    Console.Write("Enter a number (ok: exit): ");
            //    var input = Console.ReadLine();

            //    if (input.ToLower() == "ok")
            //    {
            //        Console.WriteLine(total);
            //        break;
            //    }
            //    else
            //    {
            //        total += int.Parse(input);
            //    }
            //}

            // Exercise 3
            //Console.Write("Enter a number: ");
            //var input = int.Parse(Console.ReadLine());
            //var total = input;
            //for (int i = input - 1; i >= 1; i--)
            //{
            //    total *= i;
            //}
            //Console.WriteLine("Factorial outcome: " + total);

            // Exercise 4
            //var number = new Random().Next(1, 11);
            //var attempts = 4;
            //var input = 0;
            //Console.WriteLine(number);
            //do
            //{
            //    Console.Write(String.Format("Gues the number ({0} attempt left): ", attempts));
            //    input = int.Parse(Console.ReadLine());
            //    attempts--;
            //    if (attempts == 0)
            //    {
            //        Console.WriteLine("You lost");
            //        Console.WriteLine("The number was: " + number);
            //    }
            //    if (input == number) {
            //        Console.WriteLine("You won");
            //        break;
            //    }

            //} while (input != number && attempts >= 1);

            // Exercise 5
            Console.Write("Enter a series of number seperated by a comma: ");
            var input = Console.ReadLine().Replace(" ", String.Empty);
            var biggest = input.Split(",").Max();

            Console.WriteLine(biggest);
            
            
        }
    }
}
