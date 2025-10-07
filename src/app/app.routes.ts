import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Dashboard } from './Views/dashboard/dashboard';
import { SalesProcess } from './Views/sales-process/sales-process';
import { PurchaseAgreement } from './Views/purchase-agreement/purchase-agreement';
import { FirstPayment } from './Views/first-payment/first-payment';
import { Subsequent } from './Views/subsequent/subsequent';

export const routes: Routes = [
    {path: '', redirectTo: 'home' , pathMatch: 'full'},
    {path: 'home', component: Dashboard},
    {path: 'salesprocess', component: SalesProcess},
    {path: 'purchaseagreement', component: PurchaseAgreement},
    {path: 'firstpayment', component: FirstPayment},
    {path: 'subsequent', component: Subsequent},
];
