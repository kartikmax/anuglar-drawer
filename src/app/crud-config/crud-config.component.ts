import { Component} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-crud-config',
  templateUrl: './crud-config.component.html',
  styleUrls: ['./crud-config.component.css'],
})
export class CrudConfigComponent {
  constructor(private formBuilder: FormBuilder) {}

  configFormJson: string = '';

  configForm = this.formBuilder.group({
    no: new FormControl(false),
    name: new FormControl(false),
    symbol: new FormControl(false),
    classification: new FormControl(false),
    group: new FormControl(false),
    weight: new FormControl(false),
    actions: new FormControl(false),
  });

  ngOnInit(): void {
    this.configForm.valueChanges.subscribe((value) => {
      this.configFormJson = JSON.stringify(value, null, 2);
    });
  }
}
