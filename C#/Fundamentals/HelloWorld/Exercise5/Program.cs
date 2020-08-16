using System;
using System.IO;
using System.Linq;

namespace Exercise5
{
    internal class Program
    {
        const string path = @"C:\Users\JelleCeulemans\Documents\Github\Udemy-courses\C#\Fundamentals\ReadFile.txt";
        private static void Main(string[] args)
        {
            Exercise1();
            Exercise2();
        }

        private static void Exercise1()
        {
            
            var text = File.ReadAllText(path);
            var words = text.Split(' ');
            Console.WriteLine(text);
            Console.WriteLine("Number of words: " + words.Length);
        }

        private static void Exercise2()
        {
            var text = File.ReadAllText(path);
            var words = text.Split(' ');
            Console.WriteLine(words.Max());

        }

    }
}
