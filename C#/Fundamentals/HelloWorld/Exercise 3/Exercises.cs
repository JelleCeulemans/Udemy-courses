using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Exercise3
{
    public class Exercises
    {

        public static void Exercise1()
        {
            var people = new List<string>();
            while (true)
            {
                Console.Write("Enter a name (always different): ");
                var input = Console.ReadLine();
                //if (input != String.Empty)
                if (String.IsNullOrWhiteSpace(input))
                    people.Add(input);
                else
                    break;
            }
            DisplayMessage(people);
        }

        private static void DisplayMessage(List<string> people)
        {
            var message = string.Empty;
            var peopleCount = people.Count;
            if (peopleCount == 1)
                message = string.Format("{0} likes your post", people[0]);
            else if (peopleCount == 2)
                message = string.Format("{0} and {1} like your post", people[0], people[1]);
            else if (peopleCount > 2)
                message = string.Format("{0}, {1} and {2} others like your post", people[0], people[1], peopleCount - 2);

            Console.WriteLine(message);
        }



        public static void Exercise2()
        {
            Console.Write("Enter your name: ");
            var input = Console.ReadLine();
            var nameArray = input.ToCharArray();
            Array.Reverse(nameArray);
            var reversedString = new string(nameArray);
            Console.WriteLine(reversedString);
        }

        public static void Exercise3()
        {
            var numbers = new List<int>();
            do // use normal while
            {
                Console.Write("Enter a unique number: ");
                var input = int.Parse(Console.ReadLine());
                if (numbers.Contains(input))
                {
                    Console.WriteLine("Number already entered!");
                    continue;
                }
                numbers.Add(input);

            } while (numbers.Count < 5);
            numbers.Sort();
            var sortedNumbers = String.Empty;
            foreach (var number in numbers)
            {
                sortedNumbers += number + " ";
            }
            Console.WriteLine(sortedNumbers);
        }

        public static void Exercise4()
        {
            var numbers = new List<int>();
            while (true)
            {
                Console.Write("Enter a number (enter 'Quit' to exit): ");
                var input = Console.ReadLine();
                if (input == "Quit") // check with ToLower()
                {
                    break;
                }
                //else
                //{

                //}
                numbers.Add(int.Parse(input));

            }
            numbers = numbers.Distinct().ToList();
            var uniqueNumbers = String.Empty;
            foreach (var number in numbers)
            {
                uniqueNumbers += number + " ";
            }
            Console.WriteLine(uniqueNumbers);

            //var uniques = new List<int>();
            //foreach (var number in numbers)
            //{
            //    if (!uniques.Contains(number))
            //        uniques.Add(number);
            //}

            //Console.WriteLine("Unique numbers:");
            //foreach (var number in uniques)
            //    Console.WriteLine(number);
        }

        public static void Exercise5()
        {
            var numbersList = new List<int>();
            while (true)
            {
                Console.Write("Enter a list of numbers seperated by a comma (min 5): ");
                var input = Console.ReadLine();
                input = input.Replace(" ", "");
                numbersList = input.Split(',').Select(n => int.Parse(n)).ToList();

                if (numbersList.Count >= 5)
                {
                    break;
                }
                // numbersList = numbersArray.OfType<int>().ToList();
                // numbersList.AddRange(numbersArray);
            }
            numbersList.Sort();
            var smallest3 = String.Empty;
            for (int i = 0; i < 3; i++)
            {
                smallest3 += numbersList[i] + " ";
            }
            Console.WriteLine(smallest3);



        }

        public void Exercise5_FIX()
        {
            string[] elements;
            while (true)
            {
                Console.Write("Enter a list of comma-separated numbers: ");
                var input = Console.ReadLine();

                if (!String.IsNullOrWhiteSpace(input))
                {
                    elements = input.Split(',');
                    if (elements.Length >= 5)
                        break;
                }

                Console.WriteLine("Invalid List");
            }

            var numbers = new List<int>();
            foreach (var number in elements)
                numbers.Add(Convert.ToInt32(number));

            var smallests = new List<int>();
            while (smallests.Count < 3)
            {
                // Assume the first number is the smallest
                var min = numbers[0];
                foreach (var number in numbers)
                {
                    if (number < min)
                        min = number;
                }
                smallests.Add(min);

                numbers.Remove(min);
            }

            Console.WriteLine("The 3 smallest numbers are: ");
            foreach (var number in smallests)
                Console.WriteLine(number);
        }
    }
}
