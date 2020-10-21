import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';

export interface IUserProfileInfoProps {
  description: string;
  user: MicrosoftGraph.User;
}
