import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement } from '../crud-country/crud-country.component';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-crud-dialog',
  templateUrl: './crud-dialog.component.html',
  styleUrls: ['./crud-dialog.component.css'],
})
export class CrudDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement,
    public elementService: CommonService
  ) { }
  
  loading = false;

  elementForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    weight: new FormControl(0),
    symbol: new FormControl(''),
    group: new FormControl(''),
    classification: new FormControl(''),
  });

  classification = ['Metals', 'Non-Metals', 'Metaloids'];
  group = [
    'Noble Gas',
    'Post-transition Metal',
    'Transition Metal',
    'Alkali-Metal',
    'Alkaline-Earth-Metal',
    'Halogen',
    'Metalloid',
    'Non-Metal',
  ];

  selectedValClassification = this.elementForm.value.classification;
  selectedValGroup = this.elementForm.value.group;

  ngOnInit(): void {
    this.elementForm.setValue({
      id: this.data.id,
      name: this.data.name,
      weight: this.data.weight,
      symbol: this.data.symbol,
      classification: this.data.classification,
      group: this.data.group,
    });
  }

  onSaveEdit(): void {
    this.loading = true;
    this.elementService
      .updateElement(this.data.id, this.elementForm.value)
      .subscribe({ next: (res) => {console.log(res)} });

    this.dialogRef.close(true);
  }
}
