import PaternTicket from "/images/pattern-ticket.svg";
import Logo from "/images/logo-mark.svg";
import GitIcon from "/images/icon-github.svg";
import { FormFieldsType } from "../../types";

interface TicketPreviewProps {
  formFields?: FormFieldsType;
}

const TicketPreview = ({ formFields }: TicketPreviewProps) => {
  return (
    <div
      className={`relative mt-20 flex h-[152px] w-[330px] flex-col justify-between p-3 sm:h-[260px] sm:w-full sm:p-6`}
    >
      <img
        src={PaternTicket}
        alt="Ticket"
        className="absolute right-0 top-0 h-full w-full"
      />

      <div className="flex w-[85%] gap-2 sm:gap-4">
        <img src={Logo} alt="Logo" className="" />
        <div className="flex flex-col">
          <p className="text-md font-bold sm:text-4xl">Coding Conf</p>
          <span className="text-xs font-bold sm:text-lg">
            Jan 31, 2025 / Austin, TX
          </span>
        </div>
      </div>
      <div className="flex w-[85%] gap-4">
        <div className="max-w-16">
          <img src={formFields?.avatar} alt="user" className="h-full w-full" />
        </div>
        <div className="max-h-16">
          <p className="text-md font-bold sm:text-3xl">
            {formFields?.userName}
          </p>
          <div className="flex gap-2">
            <img src={GitIcon} alt="github icon" />
            <span className="text-sm sm:text-lg">
              {formFields?.gitHubUserName}
            </span>
          </div>
        </div>
      </div>
      <div className="absolute right-[-25px] top-[40%] rotate-90 sm:right-0">
        <span className="text-4xl font-bold text-neutral-500">#01609</span>
      </div>
    </div>
  );
};

export default TicketPreview;
