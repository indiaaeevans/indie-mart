import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [CommonModule, MatTooltipModule, MatToolbarModule, MatIconModule, MatButtonModule],
  exports: [MatTooltipModule, MatToolbarModule, MatIconModule, MatButtonModule],
  declarations: []
})
export class MaterialModule {}
