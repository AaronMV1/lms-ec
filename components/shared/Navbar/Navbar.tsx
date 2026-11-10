

import { BellRing, LogIn, Search } from "lucide-react"

import { Show, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"


export function Navbar() {

    return (

        <div className="flex h-16 justify-between border-b bg-white p-4">

            <SidebarTrigger />

            <div className="flex items-center gap-4">

                <div className="flex w-full max-w-sm items-center rounded-lg border-gray-300 px-2.5 py-0.5">
                    <Search className="h-4 w-4 mr-2.5" />
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full border-0"
                    />
                </div>

                <Button variant="outline">
                    <BellRing />
                </Button>

                <Show when="signed-out">
                    <SignInButton>
                        <Button className="bg-pink-600">
                            <LogIn />
                            Iniciar sesión
                        </Button>
                    </SignInButton>
                </Show>

                <Show when="signed-in">
                    <UserButton />
                </Show>

            </div>

        </div>

    )

}

