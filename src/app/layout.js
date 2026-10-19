import "./globals.css";

export const metadata = {
  title: "DAY’U ADVENTURE | Jaket Outdoor & Puffer",
  description:
    "Temukan jaket puffer dan jaket outdoor DAY’U ADVENTURE untuk menemani setiap perjalanan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
