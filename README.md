# Angular4 Paging Service & Component

[![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg?style=flat-square)](https://github.com/ugurayan/ng4-paging-service)
[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://github.com/ugurayan/ng4-paging-service)
[![Bower](https://img.shields.io/bower/l/bootstrap.svg?style=flat-square)](https://github.com/ugurayan/ng4-paging-service)
[![Build Status](https://travis-ci.org/brantwills/Angular-Paging.svg)](https://github.com/ugurayan/ng4-paging-service)
[![CDN](https://img.shields.io/badge/cdn-rawgit-brightgreen.svg)](https://github.com/ugurayan/ng4-paging-service) 

<br/>

**Demo Available At: [https://ugurayan.github.io/ng4-paging-service/](https://ugurayan.github.io/ng4-paging-service/.)**


This project includes a Paging Service (returning totalItems, currentPage, pageSize, totalPageLinkButtons, startPage, 
endPage, startIndex, endIndex, pages: `[<page_numbers>]`) and a Paging Component for Angular4 and above to aid 
paging large datasets requiring minimum and also if necessary detailed paging information.  

This paging components is unique in that we are only interested in the active page of items rather than holding 
the entire list of items in memory.

You can list your items with respect to page, size, (or/and startIndex, endIndex of the items from collection)

## 1. Background
I have often found myself paging across millions of log rows or massive non-normalized lists even after 
some level of filtering by date range or on some column value.  These scenarios have pushed me to develop a reusable paging scheme which just happens to drop nicely into AngularJS.

## 2. Installation and Contribution

First download the project files using below code in your terminal or Powershell

```
git clone https://github.com/ugurayan/ng4-paging-service.git
```

* Check the nodeJS is setup to your computer.

```
node -v
npm -v
```

* Enter the project directory
 
```
cd  ng4-paging-service
```

* Install project nodeJS dependencies

```
npm install
```

## 3. Code Samples
**Please see below samples and documentation**

The following attributes explored in the basic example are required directive inputs:

1. `TotalItems`  How many items in the collection ( defualt : 1)
1. `CurrentPage` Which page am I currently viewing ( default : 1)
2. `PageSize` How many items in the list to display on a page ( default : 10)
3. `TotalPageLinkButtons` What is the total count of items in my list ( default : 10)
4. `pageLinks` What is the total count of items in my list  ( default : 10)
5. `ulClass` Class name of the `<ul>` tag
6. `liClass` Class name of the `<li>` tag
7. `aClass` Class name of the `<a>` tag
8. `FirstText` Text of the first button ( default : '<<')
9. `PreviousText` Text of the pervious button ( default : '<')
10. `NextText` Text of the next button ( default : '>')
11. `LastText` Text of the last button ( default : '>>')

The other code examples explore supporting attributes which may be mixed and matched as you see fit. Please see **[src/index.html](https://github.com/ugurayan/ng4-paging-service/blob/master/src/index.html)** for complete code samples and documentation for a working HTML sample.

<br/>

### 3.1. Basic Example

```html
<paging-component
  [TotalItems]="pagination.TotalItems"
  [CurrentPage]="pagination.CurrentPage"
  [PageSize]="pagination.PageSize"
  [TotalPageLinkButtons]="pagination.TotalPageLinkButtons"
  [RowsPerPageOptions]="pagination.RowsPerPageOptions"
  (onPageChange)="callMyEvent($event)"></paging-component> 
```

<br/>

**Calling Function**

In any page including  this component to reach any attribute of given above you can call function using (onPageChange) 
method and define a method you give the name ike below.

```
callMyEvent(event) {
    this.pagination.CurrentPage = event.currentPage;
    this.pagination.TotalItems = event.totalItems;
    this.pagination.PageSize = event.pageSize;
    this.pagination.TotalPageLinkButtons = event.totalPageLinkButtons;
  }
```
