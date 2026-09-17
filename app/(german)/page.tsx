import { Home } from "@/components/hydrotex/Home";
import { homeMetadata } from "@/components/hydrotex/metadata";
export const metadata = homeMetadata("de");
export default function Page() { return <Home locale="de"/>; }
