import Link from "next/link";
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Settings} from "lucide-react";

export default function DefaultPage(){
    return (
        <div className="w-1/3 bg-muted h-full rounded-2xl p-4">
            <Link href={"/view/1"}>
                <Card className="shadow-md hover:scale-[1.02] transition">
                    <CardTitle className="p-4 flex justify-between items-center">
                        Title
                        <Button className="p-2 " variant={"ghost"}>
                            <Settings className="w-full h-full"/>
                        </Button>
                    </CardTitle>
                    <CardContent className="px-4">
                        Content
                    </CardContent>
                </Card>
            </Link>
        </div>
    )
}