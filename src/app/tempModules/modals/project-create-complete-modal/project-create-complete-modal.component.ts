import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-project-create-complete-modal',
  templateUrl: './project-create-complete-modal.component.html',
  styleUrls: ['./project-create-complete-modal.component.scss']
})
export class ProjectCreateCompleteModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProjectCreateCompleteModalComponent>) { }

  ngOnInit(): void {
  }
  onOkClick(){
    this.dialogRef.close(true);
  }

}
