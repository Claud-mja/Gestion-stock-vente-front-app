import { Route } from "@angular/router";
import { VendorsComponent } from "./vendors/vendors.component";
import { BillsComponent } from "./bills/bills.component";

export const PURCHASES_ROUTES : Route[] = [
    {
        path : 'vendors',
        component : VendorsComponent,
        title : 'Vendors'
    },
    {
        path : 'bills',
        component : BillsComponent,
        title : 'Bills'
    }
]