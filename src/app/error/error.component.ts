import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
})
export class ErrorComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string },
    private dialog: MatDialog
  ) {}

  handleRedirect() {
    this.dialog.closeAll();
  }
}
