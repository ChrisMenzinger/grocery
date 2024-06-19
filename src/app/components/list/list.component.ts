import { Component, OnInit, inject, signal } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item, ItemId } from 'src/app/types/Item';
import { ListItemComponent } from '../list-item/list-item.component';
import { ItemSignalService } from 'src/app/services/item-signal.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [ListItemComponent],
})
export class ListComponent implements OnInit {
  itemService = inject(ItemService);

  ngOnInit() {
    this.itemService.getAllItems().subscribe();
  }

  get items() {
    return this.itemService.itemsSubject();
  }
}
