import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { SharedModule } from "../shared/shared.module";
import { TemplatesModule } from '../templates/templates.module';
import { UiModule } from '../ui/ui.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [HeaderComponent, NavComponent],
  imports: [CommonModule, RouterModule, IconsModule, SharedModule],
  exports: [UiModule, TemplatesModule, IconsModule, HeaderComponent, NavComponent]
})
export class CoreModule { }