import {Component} from '@angular/core';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent {

  pagination = {
    TotalItems: 100,
    CurrentPage: 1,
    PageSize: 10,
    TotalPageLinkButtons: 5,
    RowsPerPageOptions: [10, 20, 30, 50, 100]
  };

  /* Paging Component metodudur.  */
  myChanges(event) {
    this.pagination.CurrentPage = event.currentPage;
    this.pagination.TotalItems = event.totalItems;
    this.pagination.PageSize = event.pageSize;
    this.pagination.TotalPageLinkButtons = event.totalPageLinkButtons;
  }
}
