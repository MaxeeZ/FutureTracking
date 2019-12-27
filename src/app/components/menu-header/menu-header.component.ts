import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbSearchService, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {

  sideBarCompacted: boolean = false;
  valueSearch = "";

  constructor(private sideBarService: NbSidebarService,
              private searchService: NbSearchService,
              private toastrService: NbToastrService) { }

  ngOnInit() {

    this.searchService.onSearchSubmit().subscribe((data: any) => {
      this.valueSearch = data.term;
      this.showToast('top-right', 'success');
    });

  }

  toggleSideBar() {
    (!this.sideBarCompacted) ? this.compactSideBar() : this.expandSideBar();
  }

  compactSideBar() {
    this.sideBarCompacted = true;
    this.sideBarService.compact();
  }

  expandSideBar() {
    this.sideBarCompacted = false;
    this.sideBarService.expand();
  }

  showToast(position, status) {
    this.toastrService.show(
      status || 'Success',
      'You search result for ' + this.valueSearch,
      { position, status });
  }

  search() {
    this.searchService.activateSearch('rotate-layout');
  }

}
