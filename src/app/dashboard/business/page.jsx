'use client'

import useAuth from "@/lib/useAuth";

const Page = () => {
    useAuth()
    return(
        <p>Lista de negócios</p>
    )
}

export default Page;