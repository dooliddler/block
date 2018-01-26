import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public searchKey = "";
  public doclist = [
    {id:1, title:'Document - 1', comment:'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'},
    {id:2, title:'Document - 2', comment:'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.' },
    {id:3, title:'Document - 3', comment:'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.' },
    {id:4, title:'Document - 4', comment:'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.' },
    {id:5, title:'Document - 5', comment:'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.' },
  ];

  constructor() { }

  ngOnInit() {

  }

  getSearchResult() {

    if(this.searchKey.length < 1)
      return this.doclist;

    let searchKey = this.searchKey.toLowerCase();
    return this.doclist.filter(doc => {
      return doc.title.toLowerCase().indexOf(searchKey) >= 0;
    });
  }

  showDoc(doc_id) {
    alert("Show document : " + doc_id);
  }

}
