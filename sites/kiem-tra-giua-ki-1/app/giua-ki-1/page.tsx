import type { Metadata } from "next";
import MidtermStudent from "@/components/MidtermStudent";
import "./midterm.css";
export const metadata: Metadata = { title: "Kiểm tra giữa học kì I · Tin học 10", robots: { index: false, follow: false } };
export default function Page() { return <MidtermStudent />; }
