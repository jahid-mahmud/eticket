import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';

export interface GoogleAuthButtonOptions {
  title?: string;
  buttonClass?: string;
  backgroundColor?: "primary" | "accent" | "warn";
}

@Component({
  selector: 'app-google-auth-button',
  templateUrl: './google-auth-button.component.html',
  styleUrls: ['./google-auth-button.component.scss']
})
export class GoogleAuthButtonComponent implements OnInit {

  @Input() buttonOptions: GoogleAuthButtonOptions;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  gotoAuthUrl() {
    // this._authService.getGoogleAuthUrl().subscribe(res => {
    //   window.location.assign(res.url)
    // })
  }
}
