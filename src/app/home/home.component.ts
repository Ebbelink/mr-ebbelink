import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Homepage, HomepageQueryResult, HOMEPAGE_QUERY } from '../apollo/queries/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  errors: any | undefined;
  data: Homepage = new Homepage();
  articles: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.retrieveArticles();
  }
  

  private retrieveArticles() {
    this.loading = true;
    this.errors = null;

    this.apollo
      .watchQuery<HomepageQueryResult>({
        query: HOMEPAGE_QUERY
      })
      .valueChanges.subscribe(result => {
        this.data = result.data.homepage;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }
}