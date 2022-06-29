import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  message: String;

  constructor(private dialogRef: MatDialogRef<ErrorMessageComponent>,@Inject(MAT_DIALOG_DATA) message: any) { 
    this.message=message;
  }

  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close(null);
  }
}
