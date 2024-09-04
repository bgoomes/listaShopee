import { ArrowUpRight } from "lucide-react"

interface linkProps {
    link: string
    item: string
    destaque?: boolean
}

export function Link({ link, item, destaque}: linkProps){
    if(destaque){
        return (
            <a href={link}>
            <div className="flex items-center justify-between rounded-xl bg-red-200 shadow-sm border-4 border-red-400 text-red-900 p-4 hover:bg-red-500 hover:text-white cursor-pointer transition-all animate-pulse">
                <p>{item}</p>
                <div>
                   <ArrowUpRight />
                </div>
            </div>
        </a>
        )
    }

    return (
        <a href={link}>
            <div className="flex items-center justify-between rounded-xl bg-red-200 shadow-sm text-red-800 p-4 hover:bg-red-300 hover:text-white cursor-pointer transition-all">
                <p>{item}</p>
                <div>
                   <ArrowUpRight />
                </div>
            </div>
        </a>
    )
}