import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {QlqdktComponent} from "./qlqdkt.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'qlqdkt',component: QlqdktComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})

export class QlqdktRoutingModule {}
