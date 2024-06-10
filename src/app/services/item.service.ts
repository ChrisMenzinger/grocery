import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, ItemData, ItemId } from '../types/Item';
import { ITEM_RESOURCE } from './constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(
    private readonly httpClient: HttpClient,
  ) { }
  
  createItem(item: Item): Observable<ItemData>{
    return this.httpClient.post<ItemData>(ITEM_RESOURCE, item)
  }

  getAllItems(): Observable<Item[]>{
    return this.httpClient.get<Item[]>(ITEM_RESOURCE)
  }

  deleteItem(itemId: ItemId): Observable<Item[]>{
    return this.httpClient.delete<Item[]>(`${ITEM_RESOURCE}/${itemId}`)
  }

}
