import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import { NAVBAR_QUERY, NavbarItem, NAVBAR_QUERY_RESULT, NAVBAR_QUERY_2_RESULT, NAVBAR_QUERY_2, Navbar } from '../apollo/queries/navbar';
import { Subscription, pipe } from "rxjs";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navbarItems: NavbarItem[] = [];
  navbar: Navbar = new Navbar({});
  loading = true;
  errors: any;

  navbarQuerySubscription: Subscription | undefined = undefined;
  navbarQuerySubscription2: Subscription | undefined = undefined;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.navbarQuerySubscription = this.apollo
      .watchQuery<NAVBAR_QUERY_RESULT>({
        query: NAVBAR_QUERY
      })
      .valueChanges.subscribe(result => {
        this.navbarItems = result.data.navBarItems;
        this.loading = result.loading;
        this.errors = result.errors;
      });

      this.navbarQuerySubscription2 = this.apollo
      .watchQuery<NAVBAR_QUERY_2_RESULT>({
        query: NAVBAR_QUERY_2
      })
      .valueChanges.subscribe(result => {
        this.navbar = new Navbar(result.data.navbar);
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }
  ngOnDestroy() {
    this.navbarQuerySubscription?.unsubscribe();
  }
}