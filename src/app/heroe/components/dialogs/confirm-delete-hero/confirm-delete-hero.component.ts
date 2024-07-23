import {Component, Inject, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HeroInterface} from "../../../interfaces/hero.interface.";

@Component({
  selector: 'app-confirm-delete-hero',
  templateUrl: './confirm-delete-hero.component.html',
  styleUrl: './confirm-delete-hero.component.css'
})
export class ConfirmDeleteHeroComponent {

  constructor(
    private dialogRef: MatDialogRef<ConfirmDeleteHeroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HeroInterface
  ) { }

  public cancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

}
