import Logo from "/images/logo-mark.svg";

const Header = () => {
  return (
    <header className="flex h-32 w-full items-center justify-center gap-4">
      <img src={Logo} alt="Logo" />
      <p className="text-3xl font-bold">Coding Conf</p>
    </header>
  );
};

export default Header;
