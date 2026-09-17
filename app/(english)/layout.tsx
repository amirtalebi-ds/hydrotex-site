import { Document, baseMetadata } from "@/components/hydrotex/Document";
import "../globals.css";
export const metadata = baseMetadata;
export default function Layout({children}:{children:React.ReactNode}) { return <Document locale="en">{children}</Document>; }
