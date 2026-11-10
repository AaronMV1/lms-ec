

"use client";

import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarGroupLabel, useSidebar, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton } from "@/components/ui/sidebar"
import Link from "next/link";
import { routes, routesTeacher } from "./AppSidebar.data";
import Image from "next/image";


export default function AppSidebar() {

    const { state } = useSidebar();

    return (
        
        <Sidebar collapsible="icon">

            <SidebarContent className="bg-white">

                <SidebarHeader className="p-3">
                    <Link href="/" className="flex flex-row items-center">
                        <Image src="/logo.png" alt="Logo" width={35} height={35} className="mr-2" />
                        { state === 'expanded' && (
                            <span>UPSJB</span>
                        )}
                    </Link>
                </SidebarHeader>

                <SidebarGroup  className="p-1">

                    <SidebarGroupLabel>Plataforma</SidebarGroupLabel>

                    <SidebarMenu className="space-y-2">

                        {/* <SidebarMenuItem>

                            <SidebarMenuButton asChild>
                                <a href="/home">
                                    <div className="p-1 rounded-lg text-white bg-violet-400">
                                        <House className="w-4 h-4" />
                                    </div>
                                    <span>Home</span>
                                </a>
                            </SidebarMenuButton>    

                        </SidebarMenuItem> */}

                        { 
                            routes.map((item) => (

                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href = {item.url}>
                                            <div className="p-1 rounded-lg text-white bg-violet-400">
                                                <item.icon className="w-4 h-4" />
                                            </div>
                                            {state === 'expanded' && <span>{item.title}</span>}
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>

                            ))
                        }

                    </SidebarMenu>

                    <SidebarMenu className="mt-4">

                        <SidebarGroupLabel>Profesor</SidebarGroupLabel>

                        <SidebarMenuItem>

                            <SidebarMenuSub>

                                {
                                    routesTeacher.map((item) => (

                                        <SidebarMenuSubItem key={item.title}>

                                            <SidebarMenuSubButton href={item.url} className="hover:bg-muted transition">

                                                <div className="p-1 rounded-lg text-white bg-slate-400">
                                                    <item.icon className="w-4 h-4" />
                                                </div>          
                                                {item.title}

                                            </SidebarMenuSubButton>

                                        </SidebarMenuSubItem>

                                    ))
                                }

                            </SidebarMenuSub>

                        </SidebarMenuItem>

                    </SidebarMenu>

                </SidebarGroup>

            </SidebarContent>
            
        </Sidebar>
    )
}

