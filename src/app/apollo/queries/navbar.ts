import { query } from "@angular/animations";
import gql from "graphql-tag";

const NAVBAR_QUERY = gql`
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

type NAVBAR_QUERY_RESULT = {
  navBarItems: navbarItem[];
}

class navbarItem {
  readonly isInNavBar: boolean = false;
  readonly title: string = "";
  readonly path: string = "";
  readonly nav_bar_item: navbarItem | undefined = undefined;
  readonly nav_bar_items: navbarItem[] = [];

  constructor(queryOutput: Partial<navbarItem>) {
    Object.assign(this, queryOutput);
  }
}

export {
  NAVBAR_QUERY,
  NAVBAR_QUERY_RESULT,
  navbarItem
};
