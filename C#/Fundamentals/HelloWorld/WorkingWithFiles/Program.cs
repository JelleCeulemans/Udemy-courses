using System;
using System.IO;

namespace WorkingWithFiles
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            var path =
                @"C:\Users\JelleCeulemans\Documents\Github\Udemy-courses\C#\Fundamentals\HelloWorld\HelloWorld.sln";

            var dotIndex = path.IndexOf('.');
            var extension = path.Substring(dotIndex);
            Console.WriteLine("Extension: " + Path.GetExtension(path));
            Console.WriteLine("File Name: " + Path.GetFileName(path));
            Console.WriteLine("Extension: " + Path.GetFileNameWithoutExtension(path));
            Console.WriteLine("Directory name: " + Path.GetDirectoryName(path));


            //Directory.CreateDirectory(@"c:\temp\folder1");
            //var files = Directory.GetFiles(@"C:\Users\JelleCeulemans\Videos\C#", "*.*", SearchOption.AllDirectories);
            //foreach (var file in files)
            //{
            //    Console.WriteLine(file);
            //}

            //var directories = Directory.GetDirectories(@"C:\Users\JelleCeulemans\Videos", "*.*", SearchOption.AllDirectories);
            //foreach (var directory in directories)
            //{
            //    Console.WriteLine(directory);
            //}

            //Directory.Exists("...");

            //var directoryInfo = new DirectoryInfo("...");
            //directoryInfo.GetFiles();
            //directoryInfo.GetDirectories();




            //var path = @"C:\Users\JelleCeulemans\Desktop\aiko[15598].jpg";
            //File.Copy(path, @"C:\Users\JelleCeulemans\Pictures", true);
            //File.Delete(path);
            //if (File.Exists(path))
            //{
            //    //
            //}

            //var content = File.ReadAllText(path);

            //var fileInfo = new FileInfo(path);
            //fileInfo.CopyTo("...");
            //fileInfo.Delete();
            //if (fileInfo.Exists)
            //{
            //    //
            //}
        }
    }
}
