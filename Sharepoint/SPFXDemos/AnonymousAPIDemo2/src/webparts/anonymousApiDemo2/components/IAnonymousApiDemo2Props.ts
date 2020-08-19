import {WebPartContext } from  '@microsoft/sp-webpart-base';

export interface IAnonymousApiDemo2Props {
  description: string;
  apiURL: string;
  userID: string;
  context: WebPartContext
}
