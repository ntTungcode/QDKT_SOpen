import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from "primeng/api";
import {CustomerService} from "../../service/customer.service";
import {ProductService} from "../../service/product.service";
import {Customer} from "../../api/customer";

@Component({
  selector: 'app-ql-qdkt',
  templateUrl: './ql-qdkt.component.html',
    styles: [`
        :host ::ng-deep .p-breadcrumb {
        background: transparent !important;
        border: none;
    }
    :host ::ng-deep .p-breadcrumb ul li .p-menuitem-link .p-menuitem-text, :host ::ng-deep .p-breadcrumb ul li .p-breadcrumb-chevron {
        color: #737373 !important;
        font-weight: 700;
    }
    :host ::ng-deep .p-breadcrumb ul li:last-child .p-menuitem-text {
        color: #194886 !important;
        font-weight: 700;
    }`],
  styleUrls: ['./ql-qdkt.component.scss']
})


export class QLQdktComponent implements OnInit {
    representatives: Object[] = [];

    loading: boolean = true;
    breadcrumbItems: MenuItem[] = [];

    customers1: Customer[] = [];
    items: MenuItem[] = [];
    home!: MenuItem;

    @ViewChild('filter') filter!: ElementRef;
    constructor(private customerService: CustomerService, private productService: ProductService) { }

  ngOnInit() {
      this.items = [ {label: 'Quản lý quyết định khen thưởng'}];
      // {label: 'Quản lý danh mục'},
      this.home = {label: ' Trang chủ', icon: 'pi pi-home'};

      this.breadcrumbItems = [];
      this.breadcrumbItems.push({ label: 'Quản lý quyết định khen thưởng' });

      this.customerService.getCustomersLarge().then(customers => {
          this.customers1 = customers;
          this.loading = false;

      });

      // @ts-ignore
      this.representatives = [
          { stt: '1', ldt:'Ông', tdt: "Nguyễn Tiến Tùng", qq: 'Hà Nội',cv: "Nguyên trưởng ban tiếp rượu", dvtk: 'TP Hà Nội', htkt: "Huân Chương"},
          { stt: '2', ldt:'Ông', tdt: "Nguyễn Tiến Tùng", qq: 'Hà Nội',cv: "Nguyên trưởng ban tiếp rượu", dvtk: 'TP Hà Nội', htkt: "Huân Chương"},
          { stt: '3', ldt:'Ông', tdt: "Nguyễn Tiến Tùng", qq: 'Hà Nội',cv: "Nguyên trưởng ban tiếp rượu", dvtk: 'TP Hà Nội', htkt: "Huân Chương"},
          { stt: '4', ldt:'Ông', tdt: "Nguyễn Tiến Tùng", qq: 'Hà Nội',cv: "Nguyên trưởng ban tiếp rượu", dvtk: 'TP Hà Nội', htkt: "Huân Chương"},
          { stt: '5', ldt:'Ông', tdt: "Nguyễn Tiến Tùng", qq: 'Hà Nội',cv: "Nguyên trưởng ban tiếp rượu", dvtk: 'TP Hà Nội', htkt: "Huân Chương"},
          { stt: '6', ldt:'Ông', tdt: "Nguyễn Tiến Tùng", qq: 'Hà Nội',cv: "Nguyên trưởng ban tiếp rượu", dvtk: 'TP Hà Nội', htkt: "Huân Chương"},
          { stt: '7', ldt:'Ông', tdt: "Nguyễn Tiến Tùng", qq: 'Hà Nội',cv: "Nguyên trưởng ban tiếp rượu", dvtk: 'TP Hà Nội', htkt: "Huân Chương"},
          { stt: '8', ldt:'Ông', tdt: "Nguyễn Tiến Tùng", qq: 'Hà Nội',cv: "Nguyên trưởng ban tiếp rượu", dvtk: 'TP Hà Nội', htkt: "Huân Chương"},
          { stt: '9', ldt:'Ông', tdt: "Nguyễn Tiến Tùng", qq: 'Hà Nội',cv: "Nguyên trưởng ban tiếp rượu", dvtk: 'TP Hà Nội', htkt: "Huân Chương"},
          { stt: '10', ldt:'Ông', tdt: "Nguyễn Tiến Tùng", qq: 'Hà Nội',cv: "Nguyên trưởng ban tiếp rượu", dvtk: 'TP Hà Nội', htkt: "Huân Chương"},
      ];
  }

}
