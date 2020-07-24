using System;

namespace TypeConversion
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 1000;
            byte b = (byte)i;
            Console.WriteLine(b);

            try
            {
                string str = "true";
                bool bb = Convert.ToBoolean(str);
                Console.WriteLine(bb);
            }
            catch (Exception)
            {
                Console.WriteLine("The number could not be converted to a byte");
                //throw exception;
            } 
        }
    }
}
