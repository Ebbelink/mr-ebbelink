import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import { NAVBAR_QUERY_2_RESULT, NAVBAR_QUERY_2, Navbar } from '../apollo/queries/navbar';
import { Subscription, pipe } from "rxjs";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navbar: Navbar = new Navbar({});
  loading = true;
  errors: any;

  navbarQuerySubscription2: Subscription | undefined = undefined;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
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
    this.navbarQuerySubscription2?.unsubscribe();
  }
}