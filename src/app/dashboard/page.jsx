'use client'
import useAuth from "@/lib/useAuth";

const Page = () => {
    useAuth()
    return(
        <p>DASHBOARD</p>
    )
}

export default Page;