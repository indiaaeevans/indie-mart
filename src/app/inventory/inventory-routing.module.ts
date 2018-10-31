import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InventoryDashComponent } from "./inventory-dash/inventory-dash.component";
import { ProductsComponent } from "./products/products.component";
import { CategoriesComponent } from "./categories/categories.component";
import { StockEntryComponent } from "./stock-entry/stock-entry.component";
import { InventoryComponent } from "./inventory/inventory.component";

const routes: Routes = [
  {
    path: "",
    component: InventoryComponent,
    children: [
      { path: "", redirectTo: "/inventory/home", pathMatch: "full" },
      { path: "home", component: InventoryDashComponent },
      { path: "stock", component: StockEntryComponent },
      { path: "products", component: ProductsComponent },
      { path: "categories", component: CategoriesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule {}
