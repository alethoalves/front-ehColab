
'use client'

import useAuth from "@/lib/useAuth";

const Page =  () => {
    useAuth()
    return(
        <p>Profile</p>
    )
}

export default Page;