import React, { useState, useEffect } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { IFEM_IDENTITY } from '../data/ifemData';
import { LOGOS } from '../images';
import {
  Menu,
  X,
  Phone,
  ChevronRight,
  BookOpen,
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Formations', href: '#formations' },
  { label: 'Publics', href: '#publics' },
  { label: 'Dispositif FOAD', href: '#foad' },
  { label: 'Implantation', href: '#implantation' },
  { label: 'Qualité', href: '#qualite' },
  { label: 'Impact', href: '#impact' },
  { label: 'Perspectives', href: '#perspectives' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro institutional bar */}
      <div className="bg-[#112156] text-white text-xs border-b border-[#0066B1]/30 hidden md:block">
        <Container size="xl">
          <div className="py-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-bold tracking-wider text-[#0066B1] uppercase text-[11px] bg-white px-2 py-0.5 rounded">
                Madagascar
              </span>
              <span className="text-white/40">•</span>
              <span className="text-slate-200">
                Établissement d’enseignement supérieur & formation professionnelle autorisé
              </span>
            </div>
            <div className="flex items-center gap-5 text-slate-200">
              <a
                href={`tel:${IFEM_IDENTITY.phoneRaw}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#0066B1]" />
                <span className="font-medium">{IFEM_IDENTITY.phone}</span>
              </a>
              <span className="text-white/30">|</span>
              <span className="text-slate-300">Antananarivo</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-white ${
          isScrolled
            ? 'shadow-md border-b border-[#112156]/10 py-2.5'
            : 'border-b border-[#112156]/10 py-3.5'
        }`}
      >
        <Container size="xl">
          <div className="flex items-center justify-between gap-4">
            {/* Logo & Identity */}
            <a
              href="#accueil"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#accueil');
              }}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <img
                src={LOGOS.transparent}
                alt="IFEM — Institut de Formation des Enseignants à Madagascar"
                className="h-12 sm:h-14 w-auto object-contain"
                width={866}
                height={288}
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors relative ${
                      isActive
                        ? 'text-[#0066B1] font-bold bg-[#EBF4FC]'
                        : 'text-[#112156] hover:text-[#0066B1] hover:bg-[#EBF4FC]/60'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0066B1] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                href="#formations"
                icon={<BookOpen className="w-3.5 h-3.5" />}
                iconPosition="left"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#formations');
                }}
              >
                Découvrir nos formations
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 xl:hidden">
              <Button
                variant="primary"
                size="sm"
                href="#formations"
                className="hidden sm:inline-flex md:text-xs"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#formations');
                }}
              >
                Formations
              </Button>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-[#112156] hover:bg-[#EBF4FC] focus:outline-none focus:ring-2 focus:ring-[#0066B1]"
                aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer / Panel */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#112156]/70 backdrop-blur-xs xl:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <img
                  src={LOGOS.transparent}
                  alt="IFEM — Institut de Formation des Enseignants à Madagascar"
                  className="h-11 w-auto object-contain"
                  width={866}
                  height={288}
                />
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                aria-label="Fermer le panneau"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#EBF4FC] text-[#0066B1]'
                        : 'text-[#112156] hover:bg-slate-50 hover:text-[#0066B1]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                );
              })}
            </nav>

            <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col gap-3">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                href="#formations"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#formations');
                }}
              >
                Découvrir nos formations
              </Button>
              <Button
                variant="outline"
                size="md"
                className="w-full"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
              >
                Nous contacter
              </Button>
              <div className="text-center text-[11px] text-slate-500 pt-2">
                Lot III G Ter Est Ambohijanahary, Antananarivo
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
