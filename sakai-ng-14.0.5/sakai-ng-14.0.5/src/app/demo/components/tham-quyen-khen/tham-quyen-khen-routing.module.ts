import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ThamQuyenKhenComponent} from "./tham-quyen-khen.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'tham-quyen-khen',component: ThamQuyenKhenComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})

export class ThamQuyenKhenRoutingModule {}
