import "@/app/css/style.css";
import { montserrat, neueLight } from "./ui/fonts";


export const metadata = {
  title: "ÉhColab",
  description: "Conexão valiosa e acessível",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true} className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
