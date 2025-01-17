import PaternTicket from "../../assets/images/pattern-ticket.svg";
import Logo from "../../assets/images/logo-mark.svg";
import GitIcon from "../../assets/images/icon-github.svg";

interface TicketPreviewProps {
  userName: string;
  userImage: string;
  userGitHub: string;
}

const TicketPreview = ({
  userName,
  userImage,
  userGitHub,
}: TicketPreviewProps) => {
  return (
    <div className="relative mt-20 flex h-[240px] max-w-[600px] flex-col justify-between p-5">
      <img src={PaternTicket} alt="Ticket" className="absolute left-0 top-0" />
      <div className="flex items-start gap-4">
        <img src={Logo} alt="Logo" />
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-bold">Coding Conf</p>
          <span>Jan 31, 2025 / Austin, TX</span>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="max-h-16 w-auto">
          <img src={userImage} alt="user" className="h-full w-full" />
        </div>
        <div className="max-h-16">
          <p className="text-3xl font-bold">{userName}</p>
          <div className="flex gap-2">
            <img src={GitIcon} alt="github icon" />
            <span>{userGitHub}</span>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-[40%] rotate-90">
        <span className="text-4xl font-bold text-neutral-500">#01609</span>
      </div>
    </div>
  );
};

export default TicketPreview;
