import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {
    private horizontalPosition: MatSnackBarHorizontalPosition = 'end';
    private verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor(
        private snackBar: MatSnackBar
    ) {
    }

    public snackBarOpenTop(msg: string, duration: number): void {
        this.snackBar.open(msg, '', {
            duration: this.calcDuration(duration),
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
        });
    }

    private calcDuration(duration: number): number {
        return duration * 1000;
    }
}
