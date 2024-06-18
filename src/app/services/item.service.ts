import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Item, ItemData, ItemId, ItemToCreate } from '../types/Item';
import { ITEM_RESOURCE } from './constants/api.constants';
import { ItemSignalService } from './item-signal.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService extends ItemSignalService<Item> {

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(ITEM_RESOURCE).pipe(
      tap((items: Item[]) => this.setResources(items))
    );
  }
  
  createItem(item: ItemToCreate): Observable<Item> {
    console.log('Sending HTTP request to create item:', item);
    return this.http.post<Item>(ITEM_RESOURCE, item).pipe(
      tap((createdItem: Item) => this.upsertResource(createdItem))
    );;
  }
  

  deleteItem(itemId: ItemId): Observable<Item[]> {
    return this.http.delete<Item[]>(`${ITEM_RESOURCE}/${itemId}`).pipe(
      tap(() => this.removeResource(itemId))
    );
  }
}