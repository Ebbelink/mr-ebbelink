import gql from "graphql-tag";
import { AttentionZone } from "src/app/services/AttentionZoneService";

export const HOMEPAGE_QUERY = gql`
query homepageQuery{
  homepage{
    Title
    Content
    AttentionZone{
      Header
      SubHeader
    }
  }  
}
`;

export type HomepageQueryResult = {
  homepage: Homepage;
}

export class Homepage {
  Title: string = "";
  Content: string = "";
  AttentionZone: AttentionZone = new AttentionZone();

  constructor(data: Partial<Homepage>) {
    Object.assign(this, data);
  }
}