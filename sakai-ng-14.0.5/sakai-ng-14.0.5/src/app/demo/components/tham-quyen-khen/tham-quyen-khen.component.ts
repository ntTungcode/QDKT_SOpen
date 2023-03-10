import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-tham-quyen-khen',
  templateUrl: './tham-quyen-khen.component.html',
  styleUrls: ['./tham-quyen-khen.component.scss']
})
export class ThamQuyenKhenComponent implements OnInit {

    representatives: Object[] = [];

    loading: boolean = true;

    breadcrumbItems: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {



      this.breadcrumbItems = [];
      this.breadcrumbItems.push({ label: 'Quản lý danh mục' });
      this.breadcrumbItems.push({ label: 'Thẩm quyền khen' });


  }

}
