import Logo from "@/assets/icons/Logo";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="bg-background text-foreground border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-10 pt-16">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center lg:justify-start">
                <Logo />
              </div>
              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-muted-foreground lg:text-left">
                Pure, natural honey delivered from the hive to your home. Taste
                the sweetness of nature with our premium, sustainably sourced
                honey products.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <Link
                  className="transition hover:text-muted-foreground"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-muted-foreground"
                  to="/support"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-muted-foreground"
                  to="/terms"
                >
                  Term & Condition
                </Link>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-center text-sm text-muted-foreground lg:text-right">
            Copyright &copy; Mouchak 2025. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
