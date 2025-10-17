import Image from "next/image";
import Link from "next/link";
import {
  faLocationDot,
  faClock,
  faPhoneVolume,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "Footer",
  description: "This is the footer of the website",
};

export default function Footer() {
  return (
    <footer className="flex items-center justify-center px-5 py-10">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-36">
        <div className="h-40 w-full overflow-hidden md:h-96 md:w-64">
          <Link href="/">
            <Image
              width={360}
              height={360}
              src="/logo-2.png"
              alt="logo"
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
        <ul className="flex flex-col gap-2 text-lg">
          <li>
            <Link className="hover:text-golden duration-200 ease-in" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-golden duration-200 ease-in"
              href="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-golden duration-200 ease-in"
              href="/gallery"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-golden duration-200 ease-in"
              href="/saloons"
            >
              Saloons
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-golden duration-200 ease-in"
              href="/booking"
            >
              Book now
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 text-lg">
          <li>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-golden text-xl md:text-2xl"
            />{" "}
            2100 PALOS VERDES DR LOMITA CA
          </li>
          <li>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-golden text-xl md:text-2xl"
            />{" "}
            9500 SAINT ANDREWS DR SANTEE CA
          </li>
          <li>
            <FontAwesomeIcon icon={faClock} className="text-golden text-lg" />{" "}
            Monday - Saturday: 10:00 - 19:00
          </li>
          <li>
            <FontAwesomeIcon icon={faClock} className="text-golden text-lg" />{" "}
            Sunday: 10:00 - 16:00
          </li>
          <li>
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className="text-golden text-lg"
            />{" "}
            &#40;509&#41; 786-4500
          </li>
          <li>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-golden text-lg"
            />{" "}
            random@random.com
          </li>
        </ul>
      </div>
    </footer>
  );
}
