import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { AppComponent } from '../app.component';
import { RegisterComponent } from '../register/register.component';



@NgModule({
  declarations: [
    // AppComponent,
    RegisterComponent
    // Removed AuthService from declarations
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
    HttpClientModule
  ],
  providers: [AuthService], // Add AuthService in providers
  // bootstrap: [AppComponent]
})
export class AppModule { }
