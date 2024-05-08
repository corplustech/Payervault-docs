import { Table, TableBody, TableCell, TableHead, TableRow } from "../ui/table"


export function IdAndSecTable() {
    return (
        <Table>
            <TableBody>
                <TableRow>
                    <TableHead className="font-bold">X-Client-Id :</TableHead>
                    <TableCell className="text-green-800">YOUR_CLIENT_ID</TableCell>
                </TableRow>
                <TableRow>
                    <TableHead className="font-bold">X-Client-Secret :  </TableHead>
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
        <Table>
            <TableBody>
                <TableRow>
                    <TableHead className="font-bold">accessKey :</TableHead>
                    <TableCell className="text-green-800">Access key for authentication</TableCell>
                </TableRow>
                <TableRow>
                    <TableHead className="font-bold">accessSecret :  </TableHead>
                    <TableCell className="text-green-800">Access secret for authentication.</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}