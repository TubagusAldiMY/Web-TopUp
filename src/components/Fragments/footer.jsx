const Footer = () => {
  return (
    <footer>
      <div className="mt-20 shadow-inner h-96 flex justify-around">
        <div className="p-10 w-1/3 place-items-center ">
          <div className="flex  w-1/3 h-1/3 m-5">
            <img src="/logo.jpg" alt="" />
          </div>
          <div className=" items-center text-justify">
            Lorem ipsum, adalah tempat topup terbaik sepanjang sejarah
            per-TopUp-an dengan proses yang cepat dan juga cermat, dengan harga
            yang terjangkau.
          </div>
        </div>
        <div className=" p-10 w-1/3 text-center mt-10">
          <h1>Contact</h1>
          <div className="place-items-start pl-10 no-">
            <li>
              <a href="mailto:loremipsum@gmail.com" title="Email">
                <i>Email</i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/loremipsum" title="Instagram">
                <i>Instagram</i>
              </a>
            </li>
          </div>
        </div>
        <div className="p-10 w-1/3 items-center mt-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maxime
          mollitia omnis vero numquam ipsam eius, temporibus aliquam.
          Accusantium eos possimus quibusdam et quia magnam officia ullam quod
          hic? Ipsam!
        </div>
      </div>
      <div>
        <p className="text-center pb-10 ">
          &copy; 2024 TubsAMY & Asriqul. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
