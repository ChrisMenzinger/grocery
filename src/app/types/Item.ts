export type ItemId = number;

export interface Item {
    id: ItemId,
    name: string
}

export type ItemData = Omit<Item, 'itemId'>