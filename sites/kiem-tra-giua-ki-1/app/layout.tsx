import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"Kiểm tra giữa học kì I · Tin học 10 THPT Na Rì",description:"Phòng kiểm tra trực tuyến lớp 10A1, 10A3, 10A4.",icons:{icon:"/favicon.svg"},robots:{index:false,follow:false}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="vi"><body>{children}</body></html>}

