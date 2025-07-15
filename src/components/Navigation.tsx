import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, Play, Calendar, Headphones, Video, GalleryHorizontal, Contact, Home, Music, Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/ThemeProvider";

function toggleDarkMode() {
  if (typeof window !== 'undefined') {
    const html = document.documentElement
    html.classList.toggle('dark')
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light')
  }
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    // Set initial theme from localStorage or system preference
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (stored === 'dark' || (!stored && prefersDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Arrange menu items as requested
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: null },
    { name: "Team", href: "/team", icon: null },
    {
      name: "Subsidiaries",
      dropdown: true,
      items: [
        { name: "Kach Sound Media", href: "/kach-sound-media" },
        { name: "Links Auto Motors", href: "/links-auto-motors" },
        { name: "Breakout Events", href: "/breakout-events" },
        { name: "KBR TV", href: "/kbr-tv" },
        { name: "KBR Radio", href: "/kbr-radio" },
        { name: "Breakout Bible Fellowship", href: "/breakout-bible-fellowship" },
        { name: "KBR Academy", href: "/kbr-academy" },
      ],
    },
    { name: "Contacts", href: "/contacts", icon: Contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <Music className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">K-GROUP KENYA</h1>
              <p className="text-xs text-secondary">Empowering Industries</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.name} className="relative group">
                    <button className="px-4 py-2 text-sm font-bold text-primary hover:text-secondary transition-colors rounded-lg flex items-center">
                      {item.name}
                      <span className="ml-1">▼</span>
                    </button>
                    <div className="absolute left-0 mt-2 w-56 bg-background rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity z-50 border border-border">
                      {item.items.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-secondary-foreground rounded-lg font-medium"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }
              const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-bold rounded-lg flex items-center transition-colors ${isActive ? 'bg-secondary text-secondary-foreground' : 'text-primary hover:text-secondary hover:bg-secondary/10'}`}
                >
                  {item.name}
                </a>
              );
            })}
            <Button variant="ghost" size="icon" className="ml-2" aria-label="Toggle dark mode" onClick={toggleTheme}>
              {isDark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border bg-background">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.name}>
                    <button
                      className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-primary hover:text-secondary transition-colors rounded-lg w-full text-left"
                      onClick={() => setIsMenuOpen((open) => !open)}
                    >
                      <span>{item.name}</span>
                      <span>▼</span>
                    </button>
                    <div className="pl-6">
                      {item.items.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-primary hover:bg-secondary/20 rounded-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }
              const Icon = item.icon;
              const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium text-primary hover:text-secondary transition-colors rounded-lg ${isActive ? 'bg-secondary/80 text-secondary-foreground font-semibold' : 'hover:bg-secondary/10'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{item.name}</span>
                </a>
              );
            })}
            {/* Dark Mode Toggle */}
            <div className="px-4 pt-2">
              <Button variant="ghost" size="icon" aria-label="Toggle dark mode" onClick={toggleTheme}>
                {isDark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation