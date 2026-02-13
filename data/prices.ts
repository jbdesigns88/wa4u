import { PriceList } from "@/types/PricesData"
const prices:PriceList = {
    individual:[
        {title: "1 session", price:80},
        {title: "5 sessions", price:375},
        {title: "10 sessions", price:700},
        {title: "15 sessions", price:975},
        {title: "20 sessions", price:1200},
        {title: "30 sessions", price:1650},
        {title: "50 sessions", price:2500},
        {title: "100 sessions", price:4500}
    ],
    couples:[
        {title: "1 session", price:90},
        {title: "5 sessions", price:425},
        {title: "10 sessions", price:800},
        {title: "15 sessions", price:1175},
        {title: "20 sessions", price:1400},
        {title: "30 sessions", price:1950},
        {title: "50 sessions", price:3000},
        {title: "100 sessions", price:5000},
    ]
}


export { prices }