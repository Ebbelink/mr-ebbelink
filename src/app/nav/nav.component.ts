import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import { NAVBAR_QUERY, navbarItem, NAVBAR_QUERY_RESULT } from '../apollo/queries/navbar';
import { Subscription, pipe } from "rxjs";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navbarItems: navbarItem[] = [];
  loading = true;
  errors: any;

  navbarQuerySubscription: Subscription | undefined = undefined;

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
  }
  ngOnDestroy() {
    this.navbarQuerySubscription?.unsubscribe();
  }
}