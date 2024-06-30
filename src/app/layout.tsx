import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/libs/query-provider";

export const metadata: Metadata = {
  title: "Nuntium Blog",
  description: "Explore articles on minimalism, technology, self-help, and more. Stay updated with editor’s picks and join a community passionate about personal growth and innovation.",
  keywords: "minimalism, technology, self-help, personal growth, innovation, editor’s picks, blog, articles, lifestyle, productivity, mindfulness, mental health, wellness, tech trends, digital transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <QueryProvider>
        {children}
      </QueryProvider>
      </body>
    </html>
  );
}
