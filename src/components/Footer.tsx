import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">
                Smart's <span className="text-primary">Corporation</span>
              </span>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed">
              Centre d'excellence pour la préparation aux concours au Cameroun. Votre réussite est notre mission.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-base mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Accueil" },
                { to: "/a-propos", label: "À propos" },
                { to: "/formations", label: "Formations" },
                { to: "/cours", label: "Cours de remise à niveau" },
                { to: "/galerie", label: "Galerie" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h4 className="font-semibold text-base mb-4">Nos Formations</h4>
            <ul className="space-y-2">
              {["Polytechnique", "ENS / ENSET", "ESSEC", "FMSB / FMSP", "ISSEA / ASECNA"].map((f) => (
                <li key={f}>
                  <Link to="/formations" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all">
                    {f}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+237 6XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>contact@smartscorporation.cm</span>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-70">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Yaoundé, Cameroun</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-50">
            © {new Date().getFullYear()} Smart's Corporation. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm opacity-50 hover:opacity-100 transition-opacity">
              Politique de confidentialité
            </a>
            <a href="#" className="text-sm opacity-50 hover:opacity-100 transition-opacity">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
