import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {FetchNotes} from "@/lib/fetchers";
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {Settings} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default async function PageData() {
    const data = await FetchNotes()
    console.log(data)
    return (
        <div className="w-1/3 bg-muted h-full rounded-2xl p-4 flex gap-2 flex-col">
            {data.notes.map((note, index) =>(
                <Link href={`/view/${note.id}`} key={index}>
                    <Card className="shadow-md hover:scale-[1.02] transition">
                        <CardTitle className="p-4 flex justify-between items-center">
                            {note.title}
                            <Button className="p-2 " variant={"ghost"}>
                                <Settings className="w-full h-full"/>
                            </Button>
                        </CardTitle>
                        <CardContent className="px-4">
                            {note.content}
                        </CardContent>
                    </Card>
                </Link>
            ))}

        </div>
    )
}
