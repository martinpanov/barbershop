import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export const ThankYou: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 310,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 py-48 md:flex-row">
      <FontAwesomeIcon
        icon={faCircleCheck}
        className="text-7xl text-green-500"
      />

      <h2 className="text-center text-3xl md:text-3xl lg:text-5xl">
        Thank you, we will expect you at the saloon!
      </h2>
    </div>
  );
};
