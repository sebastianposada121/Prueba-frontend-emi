import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() onSearch: EventEmitter<number> = new EventEmitter();
  @Input() searchControl = new FormControl<string | null>(null);
  public faSearch = faSearch;

  public search(): void{
    this.onSearch.emit();
  }
}
