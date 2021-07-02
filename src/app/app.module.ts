import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardReaderComponent } from './components/card-reader/card-reader.component';
import { CashDispenserComponent } from './components/cash-dispenser/cash-dispenser.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { ButtonLeftColumnComponent } from './components/side/left/left-side/button-left-column/button-left-column.component';
import { ButtonRightColumnComponent } from './components/side/right/button-right-column/button-right-column.component';
import { ScreenComponent } from './components/screen/screen.component';
import { DependenciesModule } from './modules/dependencies.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Dependecies module

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    CardReaderComponent,
    CashDispenserComponent,
    KeyboardComponent,
    ButtonRightColumnComponent,
    ButtonLeftColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Importing of dependencies module
    DependenciesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
