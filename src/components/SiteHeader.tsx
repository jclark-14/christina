import Link from "next/link";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <nav>
      <div className="container">
        <Link href="#top" aria-label="Back to top">
          <strong>{siteConfig.name}</strong>
        </Link>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.id}>
              <Link href={`#${item.id}`}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
