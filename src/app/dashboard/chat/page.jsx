'use client'

import useAuth from "@/lib/useAuth";

const Page = () => {
    useAuth()
    return(
        <p>Chat</p>
    )
}

export default Page;