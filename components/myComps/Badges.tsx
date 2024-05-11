import { Button } from "@radix-ui/themes";

export function POSTBadge(){
    return <Button color="cyan" variant="soft">
        POST
  </Button>
}
export function GETBadge(){
    return <Button color="green" variant="soft">
        GET
  </Button>
}
export function PUTBadge(){
    return <Button color="orange" variant="soft">
        PUT
  </Button>
}
export function DELETEBadge(){
    return <Button color="red" variant="soft">
        DELETE
  </Button>
}

export function TypeBadge({type}:{type:string}){
  return <span className="text-green-500">&nbsp; &nbsp; {type}</span>
}

export function RequiredBadge(){
  return <span className="text-red-500">&nbsp; &nbsp; required</span>
}

export function Highlight({text}:{text:string} ){
  return <span className="bg-gray-800 rounded text-red-500 px-2 leading-none">{text}</span>
}
