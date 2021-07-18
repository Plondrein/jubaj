import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs.component';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [TabsComponent],
  exports: [TabsComponent],
  imports: [CommonModule, MatTabsModule],
})
export class TabsComponentModule {}
