import { faClock, faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

type BarberShopDetailsProps = {
  barberShopName: string;
  street: string;
  workTime: string;
  workTimeSunday: string;
  phoneNumber: string;
  email: string;
  iframeUrl: string;
  alignment?: "flex-row" | "flex-row-reverse";
};

export const BarberShopDetails: React.FC<BarberShopDetailsProps> = ({
  barberShopName,
  street,
  workTime,
  workTimeSunday,
  phoneNumber,
  email,
  iframeUrl,
  alignment = "flex-row"
}) => {
  const flexDirection = alignment === "flex-row-reverse" ? "lg:flex-row-reverse" : "lg:flex-row";

  return (
    <section className="flex flex-col items-center gap-10 py-10">
      <h2 className="text-4xl text-center md:text-5xl">
        {barberShopName}
      </h2>
      <div className={`flex flex-col items-center gap-10 ${flexDirection}`}>
        <div className="w-80 lg:w-96">
          <Image
            quality={100}
            priority={true}
            width={384}
            height={255}
            src="/barbershop-one.jpg"
            alt="barbershop-one"
            className="object-cover w-full h-full"
          />
        </div>
        <ul className="flex flex-col gap-3 px-4 text-xl">
          <li>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-3xl md:text-2xl"
            />{" "}
            {street}
          </li>
          <li>
            <FontAwesomeIcon
              icon={faClock}
              className="text-2xl"
            />{" "}
            {workTime}
          </li>
          <li>
            <FontAwesomeIcon
              icon={faClock}
              className="text-2xl"
            />{" "}
            {workTimeSunday}
          </li>
          <li>
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className="text-2xl"
            />{" "}
            {phoneNumber}
          </li>
          <li>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-2xl"
            />{" "}
            {email}
          </li>
        </ul>
      </div>
      <iframe
        src={iframeUrl}
        className="h-96 w-full max-w-7xl border-0 lg:h-[30vw]"
        loading="lazy"
      />
    </section>
  );
};