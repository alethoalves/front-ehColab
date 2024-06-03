
import { montserrat, neueBold, neueRegular } from "@/app/ui/fonts";
import { Auth } from "../ui/Auth";

const Page = () => {
  return (
    <main className="main-auth">
      <div className="container">
        <div className="logo">
            <h3 className={`${neueBold.className}`}>eh<span className={`${neueRegular.className}`}>colab</span></h3>
        </div>
        <Auth />
        
      </div>
    </main>
  );
}

export default Page;