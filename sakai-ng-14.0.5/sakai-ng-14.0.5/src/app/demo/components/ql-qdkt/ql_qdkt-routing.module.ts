import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {QLQdktComponent} from "./ql-qdkt.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'ql-qdkt',component: QLQdktComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})

export class Ql_qdktRoutingModule {}
