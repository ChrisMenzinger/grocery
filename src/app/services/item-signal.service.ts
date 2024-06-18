import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { Item } from 'src/app/types/Item';

type ResourceType<T> = T & Item;

@Injectable({
  providedIn: 'root'
})
export class ItemSignalService<T> {
  http = inject(HttpClient);
  itemsSubject: WritableSignal<ResourceType<T>[]> = signal<ResourceType<T>[]>([]);

  getItemsSignal(): Signal<Item[]> {
    console.log(this.itemsSubject);
    return this.itemsSubject;
  }

  protected setResources(resources: ResourceType<T>[]) {
    this.itemsSubject.set(resources);
  }

  protected upsertResource(resource: ResourceType<T>) {
    const currentItems = this.itemsSubject();
    const index = currentItems.findIndex((item) => item.id === resource.id);

    if (index === -1) {
      this.itemsSubject.set([...currentItems, resource]);
    } else {
      const updatedItems = [...currentItems];
      updatedItems[index] = resource;
      this.itemsSubject.set(updatedItems);
    }
  }

  protected removeResource(id: number) {
    const updatedItems = this.itemsSubject().filter((resource) => resource.id !== id);
    this.itemsSubject.set(updatedItems);
  }
}
