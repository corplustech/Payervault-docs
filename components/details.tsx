"use client"
import { usePathname } from "next/navigation";

export default function Details({title, children}:{title:string ,children:React.ReactNode}){
    const path = usePathname();
    const isActive:boolean = path.includes(title.toLowerCase());
    
    return <details open={isActive}>
        <summary className={isActive? "font-medium dark:text-white text-black":""}>{title}</summary>
         {children}
    </details>
}