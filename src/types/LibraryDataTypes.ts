// Library app data types

export interface IAuthor {
    name: string
}

export interface IBook {
    title: string
    price: string
    author: IAuthor | null
}

export type SelectOption = {
    value: string
    label: string
}