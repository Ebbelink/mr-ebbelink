import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Article, ARTICLE_QUERY, ARTICLE_QUERY_RESPONSE } from "../apollo/queries/articles";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
  queryResult: Article = new Article({});
  loading = true;
  errors: any;

  private markdownImageRegex: RegExp = /\!\[.*?\]\((.*?)\)/;

  private queryArticle: Subscription | undefined = undefined;

  constructor(private apollo: Apollo, private route: ActivatedRoute) { }

  ngOnInit() {
    this.queryArticle = this.apollo
      .watchQuery<ARTICLE_QUERY_RESPONSE>({
        query: ARTICLE_QUERY,
        variables: {
          id: this.route.snapshot.paramMap.get("articleIdentifier")
        }
      })
      .valueChanges.subscribe(result => {
        this.queryResult = new Article(result.data.article);

        let tmp = this.queryResult.content.replace(/\!\[.*?\]\((.*?)\)/gm, function (searchvalue: any, newvalue: any) {
          return searchvalue.replace(newvalue, "http://localhost:1337" + newvalue);
        });

        this.queryResult.content = tmp;

        this.loading = result.loading;
        this.errors = result.errors;
      });
  }
  ngOnDestroy() {
    this.queryArticle?.unsubscribe();
  }
}
