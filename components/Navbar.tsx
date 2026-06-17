import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/training", label: "Training Hub" },
  { href: "/sprints", label: "Sprint Tracker" },
];

export default function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-700 px-6 py-3 flex items-center gap-8">
      <Link href="/" className="text-orange-500 font-bold text-lg tracking-tight shrink-0">
        Chowly Support Hub
      </Link>
      <div className="flex gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
