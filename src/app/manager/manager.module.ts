import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule
  ],
  declarations: [ManagerHomeComponent, ManagerComponent, UserManagerComponent, ReceiptLookupComponent]
})
export class ManagerModule { }
