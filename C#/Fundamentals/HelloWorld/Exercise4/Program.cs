using System;
using System.Collections.Generic;
using System.Linq;


namespace Exercise4
{
    internal class Program
    {
        private static void Main(string[] args)
        { 
            Exercise1();
            //Exercise2();
            //Exercise3();
            //Exercise4();
            //Exercise5();
        }

        private static void Exercise1()
        {
            Console.Write("Enter a few numbers separated by a hyphen: ");
            var input = Console.ReadLine();
            var numbers = input.Split('-').Select(int.Parse).ToList();

            numbers.Sort();
            var isConsecutive = true;
            for (var i = 0; i < numbers.Count - 1; i++)
            {
                if (numbers[i] != numbers[i + 1] - 1)
                {
                    isConsecutive = false;
                    break;
                }
            }

            Console.WriteLine(isConsecutive ? "Consecutive" : "Not Consecutive");
        }

        public void Exercise1_FIX()
        {
            Console.Write("Enter a few numbers (eg 1-2-3-4): ");
            var input = Console.ReadLine();

            var numbers = new List<int>();
            foreach (var number in input.Split('-'))
                numbers.Add(Convert.ToInt32(number));

            numbers.Sort();

            var isConsecutive = true;
            for (var i = 1; i < numbers.Count; i++)
            {
                if (numbers[i] != numbers[i - 1] + 1)
                {
                    isConsecutive = false;
                    break;
                }
            }

            var message = isConsecutive ? "Consecutive" : "Not Consecutive";
            Console.WriteLine(message);
        }

        private static void Exercise2()
        {
            Console.Write("Enter a few numbers separated by a hyphen: ");
            var input = Console.ReadLine();

            if (string.IsNullOrEmpty(input))
                return;

            var strNumbers = input.Split('-');
            var intNumbers = Array.ConvertAll(strNumbers, Convert.ToInt32);
            var distinctNumbers = intNumbers.Distinct().ToArray();
            Console.WriteLine(intNumbers.Length == distinctNumbers.Length ? "No Duplicates" : "Duplicates");
        }

        private static void Exercise3()
        {
            Console.Write("Enter a time value (ex. 19:00): ");
            var passed = TimeSpan.TryParse(Console.ReadLine(), out _);
            Console.WriteLine(passed ? "Ok" : "Invalid");
        }

        private static void Exercise4()
        {
            Console.Write("Enter words separated by a space: ");
            var words = Console.ReadLine().ToLower().Split(' ');

            var variablePascalCase = string.Empty;
            foreach (var word in words)
            {
                variablePascalCase += word.First().ToString().ToUpper() + word.Substring(1);
            }
            Console.WriteLine(variablePascalCase);
        }

        private static void Exercise5()
        {
            Console.Write("Enter an English word: ");
            var input = Console.ReadLine();

            var vowels = new List<char> {'a', 'e', 'i', 'o', 'u'};

            var nrOfVowels = 0;
            foreach (var character in input)
            {
                if (vowels.Contains(character))
                {
                    nrOfVowels++;
                }
            }

            Console.WriteLine("Number of vowels: " + nrOfVowels);
        }
    }
}
