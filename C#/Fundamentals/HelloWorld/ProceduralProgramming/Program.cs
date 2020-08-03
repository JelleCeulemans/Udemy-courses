using System;
using System.Collections.Generic;
using System.Linq;

namespace ProceduralProgramming
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            // Example 1
            Console.Write("Enter your name: ");
            var name = Console.ReadLine();
            var reversedName = ReversedName(name);
            Console.WriteLine(reversedName);

            //Example 2
            var numbers = new List<int>();
            while (true)
            {
                Console.Write("Enter a number (enter 'Quit' to exit): ");
                var input = Console.ReadLine();
                if (input == "Quit")
                    break;

                numbers.Add(int.Parse(input));
            }
            numbers = numbers.Distinct().ToList();

            var uniqueNumbers = string.Empty;
            foreach (var number in numbers)
            {
                uniqueNumbers += number + " ";
            }
            Console.WriteLine(uniqueNumbers);
        }

        public static string ReversedName(string name)
        {
            var nameArray = name.ToCharArray();
            Array.Reverse(nameArray);
            return new string(nameArray);
        }
    }
}
