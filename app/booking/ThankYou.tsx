import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ThankYou() {
    return (
        <div className="flex flex-col items-center gap-3 py-48 md:flex-row" >
            <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-green-500 text-7xl"
            />

            <h2 className="text-3xl text-center text-black md:text-3xl lg:text-5xl">
                Thank you, we will expect you at the saloon!
            </h2>
        </div>
    );
}