interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header>
      {eyebrow ? <span className="badge">{eyebrow}</span> : null}
      <h2 className="section-heading">{title}</h2>
      {description ? <p className="section-subheading">{description}</p> : null}
    </header>
  );
}
