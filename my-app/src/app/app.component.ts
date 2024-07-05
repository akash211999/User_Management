// import { Component } from '@angular/core';
//  import { RouterOutlet } from '@angular/router';
//  import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
// import { LoginComponent } from './login/login.component';
// //import { RegisterComponent } from './register/register.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet,AppComponent,LoginComponent,RegisterComponent,DashboardComponent,],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'my-app';
// }





// export class RegisterComponent {
//   name: string = '';
//   dob: string = '';
//   email: string = '';
//   password: string = '';

//   constructor(private router: Router) {}

//   async register() {
//     try {
//       const response = await axios.post('http://localhost:8080/api/register', {
//         name: this.name,
//         dob: this.dob,
//         email: this.email,
//         password: this.password
//       });

//       localStorage.setItem('user', JSON.stringify(response.data.user));
//       this.router.navigate(['/dashboard']);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
}
