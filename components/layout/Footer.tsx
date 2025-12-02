import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="text-neutral-500 hover:text-white transition-colors duration-300 text-sm font-light tracking-wide"
    >
      {children}
    </Link>
  </li>
);

const FooterColumn: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-6 md:space-y-8">
    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
      {title}
    </h4>
    <ul className="space-y-3 md:space-y-4">
      {children}
    </ul>
  </div>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 md:pt-32 pb-32 md:pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16 md:mb-24">
          
          <FooterColumn title="Shop">
            <FooterLink to="/shop">Prumysl One</FooterLink>
            <FooterLink to="/shop">Solar Panels</FooterLink>
            <FooterLink to="/shop">Mounts & Accessories</FooterLink>
            <FooterLink to="/shop">Bundles</FooterLink>
          </FooterColumn>

          <FooterColumn title="Support">
            <FooterLink to="/support">Setup Guide</FooterLink>
            <FooterLink to="/support">Troubleshooting</FooterLink>
            <FooterLink to="/support">Warranty</FooterLink>
            <FooterLink to="/support">Contact Us</FooterLink>
          </FooterColumn>

          <FooterColumn title="Company">
            <FooterLink to="/technology">Our Story</FooterLink>
            <FooterLink to="/technology">Sustainability</FooterLink>
            <FooterLink to="#">Press</FooterLink>
            <FooterLink to="#">Careers</FooterLink>
          </FooterColumn>

          <FooterColumn title="Legal">
            <FooterLink to="#">Privacy Policy</FooterLink>
            <FooterLink to="#">Terms of Service</FooterLink>
            <FooterLink to="#">Cookie Settings</FooterLink>
          </FooterColumn>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
          
          {/* Logo Mark */}
          <Link to="/" className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-500">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-black rounded-full" />
            </div>
            <span className="text-xs font-bold tracking-[0.2em] text-white">
              PRUMYSL
            </span>
          </Link>

          <p className="text-[10px] text-neutral-600 font-medium tracking-widest uppercase">
            © 2025 Prumysl Solar Security. Designed in Europe.
          </p>
        </div>
      </div>
    </footer>
  );
};