declare interface IHelloWorldFromSpFxWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'HelloWorldFromSpFxWebPartStrings' {
  const strings: IHelloWorldFromSpFxWebPartStrings;
  export = strings;
}
