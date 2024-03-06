export default function Header() {
  return (
    <header>
      <div className="px-6 lg:px-12 py-6 grid grid-cols-[50%_50%] lg:grid-cols-[20%_60%_20%] items-center fixed w-full z-[200]">
        <div className="text-[14px] uppercase text-white">
          Klimt - Werbetechnik
        </div>
        <div className="self-center hidden lg:block justify-self-center"></div>
        <div className="self-center hidden lg:block  justify-self-end">
          <div className="nav-btn p-4 hover:rounded-[10px] cursor-pointer hover:bg-lightblack">
            <p className="w-[45px] bg-white h-[3px] rounded-[2px]"></p>
            <p className="w-[45px] bg-white h-[3px] rounded-[2px] mt-2"></p>
            <p className="w-[45px] bg-white h-[3px] rounded-[2px] mt-2"></p>
          </div>
        </div>
        <div className="self-center block lg:hidden justify-self-end">
          nav mo
        </div>
      </div>
    </header>
  );
}
