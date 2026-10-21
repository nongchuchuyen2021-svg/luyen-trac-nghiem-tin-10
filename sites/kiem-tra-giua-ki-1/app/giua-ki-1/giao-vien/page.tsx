import type { Metadata } from "next";
import MidtermAdmin from "@/components/MidtermAdmin";
import "../midterm.css";
export const metadata: Metadata = { title: "Quản lí kiểm tra giữa kì I · Tin học 10", robots: { index: false, follow: false } };
export default function Page() { return <MidtermAdmin />; }
