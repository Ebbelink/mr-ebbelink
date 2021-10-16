import gql from "graphql-tag";

export const NAVBAR_QUERY_2 = gql`
{
  navbar {
    SiteName
    TopLevelNavItems {
      navItem: nav_bar_item {
        title
        path
        navItems: nav_bar_items {
          title
          path
          navItems: nav_bar_items {
            title
            path
          }
        }
      }
    }
  }
}
`;

export type NAVBAR_QUERY_2_RESULT = {
  navbar: Navbar;
}

export class Navbar {
  SiteName: string = "";
  TopLevelNavItems: NavRelation[] = [];

  constructor(input: Partial<Navbar>) {
    Object.assign(this, input);
  }
}

export type NavRelation = {
  navItem: navItem;
}

export type navItem = {
  readonly title: string;
  readonly path: string;
  navItems: navItem[];
}