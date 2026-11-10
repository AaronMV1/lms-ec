

import "./globals.css"
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Space_Grotesk } from "next/font/google"
import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "./(routes)/(root)/components/AppSidebar/AppSidebar"
import { Footer, Navbar } from "@/components/shared"


const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (

        <ClerkProvider>

            <html lang="en">
                
                <body className={`${spaceGrotesk.className} antialiased`}>

                    {/* <Show when="signed-out">

                        <SignInButton>
                            <button className="h-10 cursor-pointer rounded-full bg-purple-700 px-4 text-sm font-medium text-white sm:h-12 sm:px-5 sm:text-base">
                                Sign Up
                            </button>
                        </SignInButton>

                        <SignUpButton>
                            <button className="h-10 cursor-pointer rounded-full bg-purple-700 px-4 text-sm font-medium text-white sm:h-12 sm:px-5 sm:text-base">
                                Sign Up
                            </button>
                        </SignUpButton>

                    </Show>

                    <Show when="signed-in">
                        <UserButton />
                    </Show> */}

                    <SidebarProvider>

                        <AppSidebar />

                        <div className="w-full bg-stone-100 flex flex-col min-h-screen">

                            <Navbar />
                            <main className="flex-1">{children}</main>
                            <Footer />

                        </div>

                    </SidebarProvider>

                </body>

            </html>

        </ClerkProvider>

    )

}

