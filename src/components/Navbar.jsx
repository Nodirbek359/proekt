function Navbar() {
  return (
    <div
      className=" pl-[22px] pr-5 bg-carbon-blue  text-white bg-logo-bg bg-no-repeat bg-left 
     bg-[length:72px_72px] flex justify-between items-center  lg:px-0 lg:pt-[33.5] lg:pb-6 lg:flex-col lg:rounded-tr-[20px] lg:bg-top lg:rounded-br-[20px] "
    >
      <img
        className="pt-7"
        src="./assets/logo.svg"
        alt="logo img"
        width={28}
        height={26}
      />
      <div className="flex lg:flex-col  lg:justify-center ">
        <div className=" lg:justify-center lg:pb-7  border-['#494E6E'] py-6 lg:p-0 lg:border-b-[1px] flex items-center pr-6  ">
          <label className="swap swap-rotate">
            <input type="checkbox" />

            <img
              className="swap-on fill-current"
              src="./assets/icon-moon.svg"
              alt=""
              width={20}
              height={20}
            />
            <img
              className="swap-off fill-current"
              src="./assets/icon-sun.svg"
              alt=""
              width={20}
              height={20}
            />
          </label>
        </div>
        <div className="py-6 pl-6 lg:py-6 lg:px-7">
          <img
            className="rounded-full"
            src="./assets/image-avatar.jpg"
            alt=""
            width={32}
            height={32}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
