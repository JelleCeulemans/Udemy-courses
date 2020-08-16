using System;
using System.Collections.Generic;
using System.Text;

namespace WorkingWithText
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            var builder = new StringBuilder("Hello World");
            builder
                .Append('-', 10)
                .AppendLine()
                .Append("Header")
                .Append('-', 10)
                .Replace('-', '+')
                .Remove(0, 10)
                .Insert(0, new string('-', 10));
            Console.WriteLine(builder);
            Console.WriteLine("First character: " + builder[0]);


            //var se    ntence = "This is going to be a really really really really really really really really really really really really long text";
            //var summar    y = StringUtility.SummerizeText(sentence, 25);
            //Console.WriteLine(summary);

            //var fullName = "Jelle Ceulemans ";
            //Console.WriteLine("Trim: '{0}'", fullName.Trim());
            //Console.WriteLine("Trim: '{0}'", fullName.Trim().ToUpper());

            //var index = fullName.IndexOf(' ');
            //var firstName = fullName.Substring(0, index);
            //var lastName = fullName.Substring(index + 1);
            //Console.WriteLine("FirstName: " + firstName);
            //Console.WriteLine("LastName: " + lastName);

            //var names = fullName.Split(' ');
            //Console.WriteLine("FirstName: " + names[0]);
            //Console.WriteLine("LastName: " + names[1]);

            //fullName.Replace("Jelle", "Jellie");
            //fullName.Replace('e', 'E');
            //Console.WriteLine(fullName.Replace("Jelle", "Jellie"));

            //if (String.IsNullOrWhiteSpace(" "))
            //    Console.WriteLine("Invalid");

            //var str = "25";
            //var age = Convert.ToByte(str);
            //Console.WriteLine(age);

            //float price = 29.95f;
            //Console.WriteLine(price.ToString("C0"));

        }
    }
}
