import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BallSelectionComponent } from './components/ball-selection/ball-selection.component';
import { InputBetComponent } from './components/input-bet/input-bet.component';
import { DisplayResultComponent } from './components/display-result/display-result.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  imports: [
    CommonModule, DashboardRoutingModule, NgbModule, FormsModule, FontAwesomeModule
  ],
  declarations: [DashboardComponent, HeaderComponent, FooterComponent, BallSelectionComponent, InputBetComponent, DisplayResultComponent]
})
export class DashboardModule { }
