import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center bg-[#35674E]">
      <div className="text-white max-w-[1400px] px-[20px] md:px-[50px] flex flex-col items-center justify-center pt-[50px] md:pt-[70px] pb-[30px]">
        <div className="flex md:flex-row flex-col gap-[20px]">
          <div className="w-full md:w-[30%] lg:w-[25%] flex flex-col items-start gap-[10px]">
            <h3 className="font-semibold">RERA No: REA02400085612</h3>
            <p className="text-white text-[18px]">
              From preserving green spaces to promoting biodiversity, we are
              committed to developing communities that respect and embrace the
              natural environment.
            </p>
          </div>
          <div className="w-full md:w-[40%] lg:w-[55%] flex flex-col md:items-center justify-start">
            <h2 className="w-full md:text-center text-left font-semibold mb-[10px] md:mb-[0px]">
              <a href="tel:+91 63669 63669" className="font-semibold text-[#95b67b]">(+91) 63669 63669</a>
            </h2>
            <p className="w-full md:text-center text-left mb-[10px]">
              <a href="mailto:sales@nestmakers.in" className="text-white">sales@nestmakers.in</a>
            </p>
            <div className="flex flex-col gap-[10px] items-baseline justify-baseline">
              <h2 className="w-full md:text-center text-left text-[#95b67b] font-18 font-semibold">Quick Links</h2>
              <div className="flex flex-wrap gap-y-[8px] gap-x-[15px] items-start justify-baseline md:items-center md:justify-center">
              <Link
                      to="/"
                      className={
                        location.pathname === "/"
                          ? "text-[#95b67b]"
                          : "text-white"
                      }
                    >
                      Home
                    </Link>
              <Link className="hover:text-[#95b67b]">About</Link>
              <Link className="hover:text-[#95b67b]">Projects</Link>
              <Link className="hover:text-[#95b67b]">Careers</Link>
              <Link className="hover:text-[#95b67b]"> Projects</Link>
              <Link className="hover:text-[#95b67b]">Contact</Link></div>
            </div>
          </div>
          <div className="w-full md:w-[30%] lg:w-[25%] ">
            <p className="w-full md:text-right text-left text-white">
              #201, Concrete Building Behind Care Hospital Gachibowli Hyderabad
              Telangana – 500 032
            </p>
          </div>
        </div>
        <div className="border h-[1px] w-full md:w-[60%] border-[#95B67B] my-[20px] "></div>
        <div>
          <p className="text-center text-white">
            © 2024 Nestmakers. All Rights Reserved | Terms & Conditions |
            Privacy Policy <br />Designed & Developed by <a href="https://whitethoughts.in" target="_blank" className="hover:text-light-green">White Thoughts and Branding</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
