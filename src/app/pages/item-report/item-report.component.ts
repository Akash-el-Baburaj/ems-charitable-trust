import { Component, OnInit } from '@angular/core';
import { itemReport } from './data.model';
import { ConsumersService } from 'src/app/core/service/consumers.service';

@Component({
  selector: 'app-item-report',
  templateUrl: './item-report.component.html',
  styleUrls: ['./item-report.component.scss']
})
export class ItemReportComponent implements OnInit {

  constructor(
    private consumerService: ConsumersService,
  ) { }

  itemsReport: any[] = [];
  filteredItems: any[] = [];
  searchText: string = '';

  ngOnInit(): void {
    this.fetchConsumers()
    this.itemsReport = itemReport
    this.filteredItems = [...this.itemsReport]; // Set filteredItems to the full list initially
  }

  filterItems(): void {
    if (this.searchText.trim() === '') {
      this.filteredItems = [...this.itemsReport]; // Reset filter if search text is empty
    } else {
      this.filteredItems = this.itemsReport.filter(item =>
        item.customerName.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  fetchConsumers() {
    this.consumerService.getConsumers().subscribe({
      next: (res : any) => {
        console.log('fetchConsumers => >. ',res)
      }
    })
  }

}
