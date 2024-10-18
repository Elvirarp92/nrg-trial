import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NRG Deal Manager",
  description: "NRG Consulting Technical Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
