import { query } from "@angular/animations";
import gql from "graphql-tag";

export const NAVBAR_QUERY = gql`
query topLevelNavbarItems{
  navBarItems(where: {isInNavBar:true}){
    isInNavBar
    title
    path
    nav_bar_item{
      title
    }
    nav_bar_items
    {
      title
      path
      nav_bar_items
      {
        title
        path
        nav_bar_items
        {
          title
          path
        }
      }
    }
  }
}
`;

export type NAVBAR_QUERY_RESULT = {
  navBarItems: NavbarItem[];
}

export const NAVBAR_QUERY_2 = gql`
{
  navbar {
    SiteName
    TopLevelNavItems {
      navItems: nav_bar_item {
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

export type navItems = {
  readonly title: string;
  readonly path: string;
  navItems: navItems[];
}

export type NavRelation = {
  navItems: navItems[];
}

export class NavbarItem {
  readonly isInNavBar: boolean = false;
  readonly title: string = "";
  readonly path: string = "";
  readonly nav_bar_item: NavbarItem | undefined = undefined;
  readonly nav_bar_items: NavbarItem[] = [];

  constructor(queryOutput: Partial<NavbarItem>) {
    Object.assign(this, queryOutput);
  }
}