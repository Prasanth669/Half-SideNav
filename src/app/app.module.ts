import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatToolbarModule }from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { Graph1Component } from './card/graph1/graph1.component';
import { Graph2Component } from './card/graph2/graph2.component';
import { Graph3Component } from './card/graph3/graph3.component';
//import { HighchartsChartComponent } from 'highcharts-angular';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    Graph1Component,
    Graph2Component,
    Graph3Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    //HighchartsChartComponent,
    MatTooltipModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
