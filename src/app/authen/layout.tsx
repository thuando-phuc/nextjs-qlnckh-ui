
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Đăng Nhập",
  description: "Trang đăng nhập",
};


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
          <body>
            {children}
          </body>
        </html>
    );
  }