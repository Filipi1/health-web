import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Angular Material Imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { TasksComponent } from './tasks/tasks.component';
import { AuthComponent } from './auth/auth.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';

// PERSONAL COMPONENTS
import { InputComponent } from '../components/input/input.component';
import { FormComponent } from '../components/form/form.component';
import { ErrorAlertComponent } from '../components/alert/alert.component';
import { DataTableComponent } from '../components/data-table/data-table.component';

//PROVIDERS
import { CustomPaginator } from '../providers/custom-paginator.provider'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    AuthComponent,
    InputComponent,
    FormComponent,
    ErrorAlertComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatGridListModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [{provide: MatPaginatorIntl, useClass: CustomPaginator}],
  bootstrap: [AppComponent]
})
export class AppModule { }
