interface SessionPriceList {
    title:string,
    price:Number
}

interface PriceList {
    individual:SessionPriceList[]
    couples:SessionPriceList[]
}

export type {PriceList}