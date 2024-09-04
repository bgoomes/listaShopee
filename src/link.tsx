import { ArrowUpRight } from "lucide-react"

interface linkProps {
    link: string
    item: string
}

export function Link({ link, item}: linkProps){
    return (
        <a href={link}>
            <div className="flex items-center justify-between rounded-xl bg-red-200 shadow-sm text-red-800 p-4 hover:bg-red-300 cursor-pointer transition-all">
                <p>{item}</p>
                <div>
                   <ArrowUpRight />
                </div>
            </div>
        </a>
    )
}