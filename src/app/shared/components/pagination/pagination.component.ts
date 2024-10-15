import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationInterface } from './interfaces/pagination.interface';

@Component({
  selector: 'app-pagination',
  standalone: true,
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();

  private _pagination: PaginationInterface = {
    page: 1,
    pageSize: 10,
    itemsPerPage: 10,
    pages: []
  };

  @Input()
  set pagination(value: PaginationInterface) {
    this._pagination = this.transformPagination(value);
  }

  get pagination(): PaginationInterface {
    return this._pagination;
  }

  private transformPagination(value: PaginationInterface): PaginationInterface {
    const totalPages = Math.ceil(value.pageSize / (value.itemsPerPage ?? 10));

    if (value.page <= 0) {
      value.page = 1;
    }
    if (value.pageSize > 1000) {
      value.pageSize = 1000;
    }
    if (value.page > totalPages) {
      value.page = totalPages;
    }

    value.pages = this.generatePagesArray(totalPages, value.page);
    return value;
  }

  private generatePagesArray(totalPages: number, currentPage: number): number[] {
    const pages = Array.from({ length: totalPages }, (v, i) => i + 1);

    if (currentPage === 1) {
      return pages.slice(0, 5);
    } else if (currentPage % 5 === 0) {
      return pages.slice(currentPage - 1, currentPage + 4);
    } else {
      const start = Math.floor((currentPage - 1) / 5) * 5;
      return pages.slice(start, start + 5);
    }
  }

  onPageSelect(page: number): void {
    this.pagination.page = page;
    this.pagination.pages = this.generatePagesArray(Math.ceil(this.pagination.pageSize / (this.pagination.itemsPerPage??10)), page);
    this.onPageChange.emit(page);
  }
}
