using System;
using System.Collections.Generic;
using CSharpFundamentals.Math;

namespace CSharpFundamentals
{
    
    public class Program
    {
        static void Main(string[] args)
        {
            var numbers = new List<int> { 1,2,3,4 };
            numbers.Add(5);
            numbers.AddRange(new[] { 6, 7, 8 });

            foreach (var number in numbers)
                Console.WriteLine(number);

            Console.WriteLine(numbers.IndexOf(8));
            Console.WriteLine(numbers.LastIndexOf(8));
            Console.WriteLine(numbers.Count);
            numbers.Add(1);

            for (int i = 0; i < numbers.Count; i++)
            {
                if (numbers[i] == 1)
                    numbers.Remove(numbers[i]);
            }

            foreach (var number in numbers)
                Console.WriteLine(number);

            numbers.Clear();
            Console.WriteLine(numbers.Count);



            //var numbers = new[] { 3, 7, 9, 2, 14, 6 };

            //// Length
            //Console.WriteLine("Length: " + numbers.Length);

            //// IndexOf()
            //var index = Array.IndexOf(numbers, 9);
            //Console.WriteLine(index);

            //// Clear()
            //Array.Clear(numbers, 0, 2);
            //PrintArray(numbers);

            //Console.WriteLine("");

            //// Copy()
            //var another = new int[3];
            //Array.Copy(numbers, another, 3);
            //PrintArray(another);

            //Console.WriteLine("");

            //// Sort()
            //Array.Sort(numbers);
            //PrintArray(numbers);

            //Console.WriteLine("");

            //// Reverse()
            //Array.Reverse(numbers);
            //PrintArray(numbers);


            //    var random = new Random();
            //    var password = String.Empty;

            //    const int PASSWORD_LENGTH = 16;
            //    var buffer = new char[16];
            //    for (var i = 0; i < PASSWORD_LENGTH; i++)
            //    {
            //        var generatedNumber = random.Next(65, 123);
            //        if (generatedNumber >= 91 && generatedNumber <= 96)
            //            i--;
            //        else
            //            password += (char)generatedNumber;

            //        buffer[i] = (char)('A' + random.Next(0, 26));
            //    }

            //    var bufferPassword = new string(buffer);


            //    Console.WriteLine("Password: " + password);
            //    Console.WriteLine(bufferPassword);


            //var number = 1;
            //number = Increment(number);
            //Console.WriteLine(number);

            //var person = new PersonAge() { Age = 20 };
            //MakeOld(person);
            //Console.WriteLine(person.Age);

            /*var a = 10;
            var b = a;
            b++;
            Console.WriteLine(string.Format("a: {0}, b: {1}", a, b));

            var array1 = new int[3] { 1, 2, 3 };
            var array2 = array1;
            array2[0] = 0;
            foreach (var item in array1)
            {
                Console.WriteLine(item);
            }*/

            /*var method = ShippingMethod.Express;
            Console.WriteLine((int)method);

            var methodId = 3;
            Console.WriteLine((ShippingMethod)methodId);

            Console.WriteLine(method.ToString());

            var methodName = "Express";

            var shippingMethod = (ShippingMethod)Enum.Parse(typeof(ShippingMethod), methodName);

            Console.WriteLine((int)shippingMethod);*/

            /*var firstName = "Jelle";
            string lastName = "Ceulemans";

            var fullName = firstName + " " + lastName;

            var myFullName = string.Format("My name is {0} {1}", firstName, lastName);

            var names = new string[3] { "Jelle", "Emmy", "Aiko" };
            var formattedNames = string.Join(", ", names);
            Console.WriteLine(formattedNames);

            //var text = "Hi John\nLook into the following paths\nc:\\folder1\\folder2\nc:\\folder3\\folder4";
            var text = @"Hi John
Look into the following paths
c:\folder1\folder2
c:\folder3\folder4";
            Console.WriteLine(text);*/


            /*var numbers = new int[3];
            numbers[0] = 1;

            foreach (var number in numbers)
            {
                Console.WriteLine(number);
            }

            var flags = new bool[3];
            flags[0] = true;

            foreach (var flag in flags)
            {
                Console.WriteLine(flag);
            }


            var names = new string[3] { "Jelle", "Emmy", "Aiko" };
            foreach (var name in names)
            {
                Console.WriteLine(name);
            }*/

            /*var jelle = new Person
            {
                FirstName = "Jelle",
                LastName = "Ceulemans"
            };
            jelle.Introduce();

            var calculator = new Calculator();
            var result = calculator.Add(1, 2);

            Console.WriteLine(result);*/
        }


        public static int Increment(int number)
        {
            return number += 10;
        }

        public static void MakeOld(PersonAge person)
        {
            person.Age += 10;
        }

        private static void PrintArray(int[] array)
        {
            for (int i = 0; i < array.Length; i++)
            {
                Console.Write(array[i]);

                if (i < array.Length - 1)
                {
                    Console.Write(",");
                }
            }
        }
        public enum ShippingMethod
        {
            RegularAirMail = 1,
            RrgisteredAirMail = 2,
            Express = 3
        }

        public class PersonAge
        {
            public int Age;
        }
    }
}
