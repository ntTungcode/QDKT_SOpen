import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QlqdktRoutingModule} from "./qlqdkt-routing.module";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {FormLayoutDemoRoutingModule} from "../uikit/formlayout/formlayoutdemo-routing.module";
import {AutoCompleteModule} from "primeng/autocomplete";
import {CalendarModule} from "primeng/calendar";
import {ChipsModule} from "primeng/chips";
import {DropdownModule} from "primeng/dropdown";
import {InputMaskModule} from "primeng/inputmask";
import {InputNumberModule} from "primeng/inputnumber";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {MultiSelectModule} from "primeng/multiselect";
import {InputTextareaModule} from "primeng/inputtextarea";



@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      QlqdktRoutingModule,
      CommonModule,
      FormsModule,
      FormLayoutDemoRoutingModule,
      AutoCompleteModule,
      CalendarModule,
      ChipsModule,
      DropdownModule,
      InputMaskModule,
      InputNumberModule,
      CascadeSelectModule,
      MultiSelectModule,
      InputTextareaModule,
      InputTextModule
  ]
})
export class QlqdktModule { }
