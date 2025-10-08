import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <p>
          <strong>{siteConfig.name}</strong>
        </p>
        <p>{siteConfig.location}</p>
        <p>
          Contact <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> · {siteConfig.phone}
        </p>
        <p className="small-text">
          Designed to grow with Christina&apos;s mission. Update content from the data files in <code>src/data</code> and
          configuration in <code>src/config/site.ts</code>.
        </p>
      </div>
    </footer>
  );
}
