import { useState } from "react"

interface Menu{
    title:string,
    slug:string,
    description:string
}
const menu_options : Menu[] = [
    {title:'home',slug:'',description:''},
    {title:'about us',slug:'',description:''},
    {title:'something',slug:'',description:''},
    {title:'contact',slug:'',description:''}
]
export default function Navigation(){
    const [options,setOptions] = useState<Menu[]>( menu_options)
    return (
        <>
            <ul>
                {
                    options.map((option: Menu, index: number) => 
                        <li key={index}>
                            {option.title}
                        </li>
                    )
                }
            </ul>
        </>
    )
}