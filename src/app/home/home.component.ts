import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Homepage, HomepageQueryResult, HOMEPAGE_QUERY } from '../apollo/queries/home';
import { AttentionZoneService } from '../services/AttentionZoneService';
import { SanitizeMarkdown } from '../services/MarkdownSanitizer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  errors: any | undefined;
  data: Homepage = new Homepage({});
  homepageQuerySubscription: any;

  constructor(private apollo: Apollo, private attenzionZoneService: AttentionZoneService) { }

  ngOnInit(): void {
    this.loading = true;
    this.errors = null;

    this.homepageQuerySubscription = this.apollo
      .watchQuery<HomepageQueryResult>({
        query: HOMEPAGE_QUERY
      })
      .valueChanges.subscribe(result => {
        this.data = new Homepage(result.data.homepage);

        this.attenzionZoneService.changeAttentionZone(this.data.AttentionZone);

        this.data.Content = SanitizeMarkdown(this.data.Content);

        this.loading = result.loading;
        this.errors = result.errors;
      });
  }

  ngOnDestroy() {
    this.homepageQuerySubscription?.unsubscribe();
  }
}