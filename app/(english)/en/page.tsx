import { Home } from "@/components/hydrotex/Home";
import { homeMetadata } from "@/components/hydrotex/metadata";
export const metadata = homeMetadata("en");
export default function Page() { return <Home locale="en"/>; }
