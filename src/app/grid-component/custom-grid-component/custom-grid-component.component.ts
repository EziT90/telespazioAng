import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Component } from '@angular/core';

@Component({
    standalone: true,
    template: `<button (click)="editBtnClicked()">Edit</button><button (click)="deleteBtnClicked()">Delete</button>`,
})
export class CustomButtonComponent implements ICellRendererAngularComp {
    agInit(params: ICellRendererParams): void {}
    refresh(params: ICellRendererParams) {
        return true;
    }
    editBtnClicked() {
        alert('Modifica della riga!');
    }
    deleteBtnClicked() {
        alert('Elimina la riga!');
    }
}