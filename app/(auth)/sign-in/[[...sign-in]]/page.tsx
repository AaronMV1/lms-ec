

import { SignIn } from "@clerk/nextjs"


export default function page() {

    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4">
            <h1 className="font-semibold text-4xl">Welcome to Back!</h1>
            <p className="text-lg">Sign in to continue to your account</p>
            <SignIn />
        </div>
    )

}

