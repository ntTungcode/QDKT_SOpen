import { NgModule } from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { QlqdktComponent } from './demo/components/qlqdkt/qlqdkt.component';
import {BreadcrumbModule} from "primeng/breadcrumb";
import {TableModule} from "primeng/table";
import {SliderModule} from "primeng/slider";
import {FileUploadModule} from "primeng/fileupload";
import {FormsModule} from "@angular/forms";
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {SplitButtonModule} from "primeng/splitbutton";
import {CalendarModule} from "primeng/calendar";

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, QlqdktComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        BreadcrumbModule,
        TableModule,
        SliderModule,
        FileUploadModule,
        CommonModule,
        FormsModule,
        MultiSelectModule,
        DropdownModule,
        SplitButtonModule,
        CalendarModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
