using System;
using System.Collections.Generic;
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
                if (input != String.Empty)
                    people.Add(input);
                else
                    break;
            }
            DisplayMessage(people);
        }

        private static void DisplayMessage(List<string> people)
        {
            var message = String.Empty;
            var peopleCount = people.Count;
            if (peopleCount == 1)
                message = String.Format("{0} likes your post", people[0]);
            else if (peopleCount == 2)
                message = String.Format("{0} and {1} like your post", people[0], people[1]);
            else if (peopleCount > 2)
                message = String.Format("{0}, {1} and {2} others like your post", people[0], people[1], peopleCount - 2);

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
            for (int i = 0; i < 5; i++)
            {
                Console.Write("Enter a unique number: ");
                var input = int.Parse(Console.ReadLine());
                Console.WriteLine(input);
            }
        }
    }
}
