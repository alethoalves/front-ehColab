

import { isLogged } from "@/api/serverReq";

const Page = async () => {
    await isLogged()
    return(
        <p>Profile</p>
    )
}

export default Page;