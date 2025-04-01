import {Component, inject, signal} from '@angular/core';
import {InputTextComponent} from '../components/input-text/input-text.component';
import {PrimaryButtonComponent} from '../components/primary-button/primary-button.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {AuthService} from '../core/services/auth.service';
import {AuthRequest} from '../core/models/auth.model';
import {UserService} from '../core/services/user.service';
import {User} from '../core/models/user.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [
    InputTextComponent,
    PrimaryButtonComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  router = inject(Router)
  fb = inject(NonNullableFormBuilder)
  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  authService = inject(AuthService)
  errorMessage = signal<string | null>(null);

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const credentials: AuthRequest = {
      username: this.loginForm.value.username!,
      password: this.loginForm.value.password!
    }

    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigateByUrl("/home");
      },
      error: (error) => {
        this.errorMessage.set("Controlla bene gay");
        this.loginForm.reset();
        this.loginForm.markAllAsTouched();
        console.log(error);
      }
    });
  }

}
