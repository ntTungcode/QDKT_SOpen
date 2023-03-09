import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Customer, Representative} from "../../api/customer";
import {Table} from "primeng/table";
import {CustomerService} from "../../service/customer.service";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-qlqdkt',
  templateUrl: './qlqdkt.component.html',
  styleUrls: ['./qlqdkt.component.scss']
})
export class QlqdktComponent implements OnInit {

    breadcrumbItems: MenuItem[] = [];

    customers1: Customer[] = [];

    representatives: Object[] = [];

    listfile: Object[] =[];

    statuses: any[] = [];

    loading: boolean = true;

    selectedState: any = null;

    value2: any;
    dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];

    @ViewChild('filter') filter!: ElementRef;
    constructor(private customerService: CustomerService, private productService: ProductService) { }

  ngOnInit() {
      this.breadcrumbItems = [];
      this.breadcrumbItems.push({ label: 'Quản lý quyết định khen thưởng' });
      this.breadcrumbItems.push({ label: 'Thêm mới quyết định khen thưởng' });

      this.customerService.getCustomersLarge().then(customers => {
          this.customers1 = customers;
          this.loading = false;

      });
      // @ts-ignore
      this.representatives = [
          { stt: '1', ldt:'Ông', tdt: "Nguyễn Tiến Tùng", qq: 'Hà Nội',cv: "Nguyên trưởng ban tiếp rượu", dvtk: 'TP Hà Nội', htkt: "Huân Chương"},
          { stt: '2', ldt:'Ông', tdt: "Nguyễn Tiến Tùng", qq: 'Hà Nội',cv: "Nguyên trưởng ban tiếp rượu", dvtk: 'TP Hà Nội', htkt: "Huân Chương"},
      ];

      // @ts-ignore
      this.listfile = [
          {stt: '1', tfdk: 'nttung.code'},
      ];
  }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }
}
