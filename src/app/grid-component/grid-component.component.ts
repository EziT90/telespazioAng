import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomButtonComponent } from './custom-grid-component/custom-grid-component.component';

// Row Data Interface
interface IRow {
  mission: string;
  company: string;
  location: string;
  date: string;
  time: string;
  rocket: string;
  price: number;
  successful: boolean;
}


@Component({
  selector: 'app-grid-component',
  standalone: true,
  imports: [AgGridAngular, HttpClientModule],
  templateUrl: './grid-component.component.html',
  styleUrl: './grid-component.component.css',
})
export class GridComponentComponent {
  themeClass = 'ag-theme-quartz';
  // Row Data - Dati che mostriamo (righe griglia)
  rowData: IRow[] = [];

  // Definizione delle colonne.
  colDefs: ColDef[] = [
    { field: 'mission', filter: true },
    { field: 'company', filter: true },
    { field: 'location', filter: true },
    { field: 'date', filter: true },
    { field: 'price', filter: true },
    { field: 'successful', filter: true },
    { field: 'rocket', filter: true },
    {
      field: "actions",
      headerName: "Actions",
      cellRenderer: CustomButtonComponent,
    },
  ];

  // Load data into grid when ready
  constructor(private http: HttpClient) {}
  onGridReady(params: GridReadyEvent) {
    this.http
      .get<any[]>(
        'https://www.ag-grid.com/example-assets/space-mission-data.json'
      )
      .subscribe((res) => {
        this.rowData = res
      });
  }
}
