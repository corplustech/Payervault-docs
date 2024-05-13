"use client"

import {Dialog, DialogContent, DialogTrigger,} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../ui/table"
import Image from "next/image"
import "./dialogStyle.css"


export function IdAndSecTable() {
    return (
        <Table className="dark:border-slate-500 dark:border">
            <TableBody>
                <TableRow>
                    <TableHead className="font-bold dark:text-white">X-Client-Id :</TableHead>
                    <TableCell className="text-green-800">YOUR_CLIENT_ID</TableCell>
                </TableRow>
                <TableRow>
                    <TableHead className="font-bold dark:text-white">X-Client-Secret :  </TableHead>
                    <TableCell className="text-green-800">YOUR_CLIENT_SECRET</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export function BodyParams({ feild, type, isRequired }: { feild: string, type: string, isRequired: boolean }) {
    return <h3>
        <span className="font-extrabold">{feild} </span>
        <span className="text-green-700"> {type} </span>
        {isRequired && <span className="text-red-600"> required</span>}
    </h3>
}

export function AccessKeyAndSec() {
    return (
        <Table className="dark:border-slate-500 dark:border" >
            <TableBody>
                <TableRow>
                    <TableHead className="font-bold dark:text-white">accessKey :</TableHead>
                    <TableCell className=" font-semibold text-xs text-green-600">Access key for authentication</TableCell>
                </TableRow>
                <TableRow>
                    <TableHead className="font-bold dark:text-white">accessSecret :  </TableHead>
                    <TableCell className="font-semibold text-xs text-green-600">Access secret for authentication.</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export function ImageDialog({ src, imageStyling }: { src: string, imageStyling?: string}) {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Image src={src} alt="image" width={500} height={200} className={imageStyling}/>
            </DialogTrigger>
            <DialogContent className="p-0 max-w-full">
                <div className="p-12">
                    <Image src={src} alt="image" width={500} height={200} className="w-full h-full"/>
                </div>
            </DialogContent>
        </Dialog>
    )
}