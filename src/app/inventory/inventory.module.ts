import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryDashComponent } from './inventory-dash/inventory-dash.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    InventoryRoutingModule
  ],
  declarations: [InventoryComponent, InventoryDashComponent, StockEntryComponent, ProductsComponent, CategoriesComponent]
})
export class InventoryModule { }
