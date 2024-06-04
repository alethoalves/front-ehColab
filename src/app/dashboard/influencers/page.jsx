'use client'

import useAuth from "@/lib/useAuth";

const Page = () => {
    useAuth()
    return(
        <p>Lista de influenciadores</p>
    )
}

export default Page;