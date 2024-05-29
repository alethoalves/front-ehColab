import "@/app/css/style.css";


export const metadata = {
  title: "ÉhColab",
  description: "Conexão valiosa e acessível",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
