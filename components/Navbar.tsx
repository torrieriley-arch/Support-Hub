import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/training", label: "Training Hub" },
  { href: "/errors", label: "Error Reference" },
  { href: "/sprints", label: "Sprint Tracker" },
];

export default function Navbar() {
  return (
    <nav
      className="px-6 flex items-center gap-8 border-b border-[#1B51A4]/30 sticky top-0 z-[1000]"
      style={{
        background: "rgba(0, 17, 49, 0.88)",
        backdropFilter: "blur(12px)",
        height: "72px",
      }}
    >
      <Link
        href="/"
        className="text-white font-bold text-lg tracking-tight shrink-0"
        style={{ fontFamily: "var(--font-lato), system-ui, sans-serif" }}
      >
        Chowly Support Hub
      </Link>
      <div className="flex gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-3 py-1.5 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
