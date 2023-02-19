import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { VeriyPasswordService } from 'app/tempModules/services/veriy-password.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-password-verification',
  templateUrl: './password-verification.component.html',
  styleUrls: ['./password-verification.component.scss']
})
export class PasswordVerificationComponent implements OnInit {
  from:string;
  password="";
  constructor(private verifyPassService:VeriyPasswordService,private route:ActivatedRoute,private router:Router) { 
    
  }

  ngOnInit(): void {
    // this.route.queryParams.subscribe((params:HttpParams)=>{
    //   this.from=params['from'];
    // })
    this.from=history.state['from'];
  }
  onNextClick(){
    
    if(this.from==='resetpass'){
      this.verifyPassService.setPassVerify(true);
      this.router.navigateByUrl('/settings')
    }
    else if(this.from==='resetemail'){
      this.verifyPassService.setEmailVerify(true);
      this.router.navigateByUrl('/settings')
    }
    else{
      this.verifyPassService.setAdminRole(true);
      this.router.navigateByUrl('/settings')
    }
  }
  onCancelClick(){
    if(this.from==='resetpass'){
      this.verifyPassService.setPassVerify(false);
      this.router.navigateByUrl('/settings')
    }
    else if(this.from==='resetemail'){
      this.verifyPassService.setEmailVerify(false);
      this.router.navigateByUrl('/settings')
    }
    else{
      this.verifyPassService.setAdminRole(false);
      this.router.navigateByUrl('/settings')
    }
  }

}
