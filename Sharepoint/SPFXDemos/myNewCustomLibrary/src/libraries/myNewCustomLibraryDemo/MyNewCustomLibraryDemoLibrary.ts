export class MyNewCustomLibraryDemoLibrary {
  public name(): string {
    return 'MyNewCustomLibraryDemoLibrary';
  }

   public getCurrentTime(): string {
     const currentDate: Date = new Date();
     return `<p>Todays date is: ${currentDate.toDateString()}</p>
             <p>Current Time is: ${currentDate.toTimeString()}`;
   }
}
