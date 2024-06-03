import { RiArrowRightLine } from "@remixicon/react";
import { Button } from "./ui/Button";
import { neueBold, neueRegular } from "./ui/fonts";

const Page = () => {
  return (
    <main className="main-lp">
      <div className="container">
        <h3 className={`${neueBold.className}`}>eh<span className={`${neueRegular.className}`}>colab</span></h3>
        <Button linkTo="/dashboard" className={`btn-primary`} iconRight={RiArrowRightLine} >Login</Button>
      </div>
    </main>
  );
}

export default Page;