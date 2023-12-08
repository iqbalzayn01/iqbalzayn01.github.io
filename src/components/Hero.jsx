import PropTypes from "prop-types";

export const Hero = ({ style }) => {
  return (
    <section className="mx-auto px-5 py-5 md:px-20" style={style}>
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Caption */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-10">
          <div className="text-white">
            <p className="text-xl mb-10">
              Hello! I’m
              <span className="text-primary font-semibold"> Iqbal Zayyan</span>.
            </p>
            <h1 className="w-3/4 text-5xl font-extrabold">
              Freelance Creative Frontend Developer
            </h1>
          </div>
          <div className="flex items-start gap-10">
            <svg
              width={10}
              height={299}
              viewBox="0 0 1 277"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.2"
                y1="8.74228e-09"
                x2="0.199988"
                y2="277"
                stroke="white"
                strokeWidth="0.4"
              />
            </svg>
            <div>
              <p className="text-xl text-white mb-10">
                I’m a Frontend Developer and Web Designer. I’ve gained
                experience by being a freelancer since 2020. I specialize in
                creating visually appealing and user-friendly websites. With my
                skills in web development and design tools like Figma, I strive
                to create digital experiences that help businesses achieve their
                goals. I’m enthusiastic about staying informed on the latest
                trends and eagerly embracing new technologies and frameworks.
              </p>
              <button type="button" className="btn-cta">
                Let’s Connect
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_845_43"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_845_43)">
                    <path
                      d="M11.7824 19.9001C11.8491 19.9001 11.9155 19.886 11.9816 19.858C12.0478 19.8299 12.1194 19.7773 12.1966 19.7001L20.0009 11.8957C20.3042 11.5925 20.5301 11.2944 20.6786 11.0014C20.8272 10.7085 20.9015 10.3832 20.9015 10.0256C20.9015 9.63576 20.8355 9.28132 20.7036 8.96229C20.5718 8.64327 20.3667 8.34409 20.0884 8.06474L16.7238 4.70009C16.5216 4.49067 16.2718 4.34248 15.9743 4.25551C15.6768 4.16856 15.3854 4.12509 15.0999 4.12509C14.831 4.12509 14.5333 4.20398 14.2066 4.36176C13.88 4.51956 13.6214 4.68433 13.4308 4.85606L13.4205 4.88051L15.0825 6.56584C15.3712 6.86402 15.5857 7.18277 15.7259 7.52209C15.8662 7.8614 15.9363 8.23541 15.9363 8.64411C15.9363 9.42383 15.6668 10.0873 15.1278 10.6346C14.5889 11.1819 13.9296 11.4555 13.1498 11.4555C12.7506 11.4555 12.3792 11.3854 12.0357 11.2452C11.6922 11.105 11.3714 10.89 11.0732 10.6001L9.37809 8.97836L5.44059 12.9017C5.37392 12.9684 5.32392 13.0374 5.29059 13.1088C5.25725 13.1802 5.24059 13.2492 5.24059 13.3158C5.24059 13.4492 5.28824 13.5632 5.38354 13.658C5.47882 13.7527 5.59313 13.8001 5.72646 13.8001C5.79313 13.8001 5.87049 13.7772 5.95854 13.7313C6.04657 13.6855 6.10725 13.6418 6.14059 13.6001L8.61939 11.1354C8.80272 10.9521 9.02147 10.8583 9.27564 10.8542C9.5298 10.85 9.75272 10.9437 9.94439 11.1354C10.1277 11.3187 10.2194 11.5396 10.2194 11.7979C10.2194 12.0562 10.1277 12.2771 9.94439 12.4604L7.47809 14.9251C7.40309 15.0001 7.351 15.0735 7.32184 15.1455C7.29267 15.2174 7.27809 15.2867 7.27809 15.3533C7.27809 15.495 7.3213 15.609 7.40771 15.6955C7.49413 15.7819 7.60817 15.8251 7.74984 15.8251C7.82484 15.8251 7.90428 15.8001 7.98816 15.7501C8.07203 15.7001 8.13534 15.6584 8.17809 15.6251L10.6145 13.1871C10.7978 13.0037 11.0189 12.9123 11.2778 12.9129C11.5367 12.9134 11.7573 13.0048 11.9395 13.1871C12.1228 13.3704 12.2145 13.5912 12.2145 13.8496C12.2145 14.1079 12.1228 14.3287 11.9395 14.5121L9.47321 16.9767C9.41596 17.035 9.36831 17.102 9.33026 17.1775C9.29223 17.2531 9.27321 17.3242 9.27321 17.3908C9.27321 17.5325 9.31877 17.6489 9.40989 17.74C9.50102 17.8312 9.61742 17.8767 9.75909 17.8767C9.82575 17.8767 9.89477 17.86 9.96614 17.8267C10.0375 17.7934 10.1065 17.7434 10.1732 17.6767L12.6379 15.2104C12.8212 15.0271 13.0423 14.9357 13.3012 14.9362C13.5601 14.9368 13.7806 15.0282 13.9629 15.2104C14.1462 15.3937 14.2379 15.6146 14.2379 15.8729C14.2379 16.1312 14.1462 16.3521 13.9629 16.5354L11.4982 19.0001C11.4315 19.0668 11.3815 19.1381 11.3482 19.2142C11.3149 19.2903 11.2982 19.3617 11.2982 19.4283C11.2982 19.57 11.3435 19.684 11.4341 19.7705C11.5247 19.8569 11.6408 19.9001 11.7824 19.9001ZM11.7841 22.2132C11.1442 22.2132 10.5648 22.0147 10.0458 21.6178C9.52673 21.2208 9.22229 20.7077 9.13244 20.0784C8.60345 19.9762 8.15327 19.7412 7.78189 19.3735C7.4105 19.0057 7.17373 18.5573 7.07156 18.0284C6.552 17.9168 6.11485 17.6823 5.76014 17.3251C5.40544 16.9679 5.17229 16.5331 5.06069 16.0208C4.46794 15.9153 3.9577 15.6005 3.52999 15.0762C3.10227 14.5519 2.88841 13.9568 2.88841 13.2908C2.88841 12.9104 2.95644 12.5526 3.09249 12.2175C3.22854 11.8823 3.43207 11.5751 3.70309 11.2957L7.58839 7.41041C8.0786 6.9202 8.67127 6.67509 9.36639 6.67509C10.0615 6.67509 10.6542 6.9202 11.1444 7.41041L12.6841 8.95009C12.7529 9.01784 12.8248 9.06865 12.8998 9.10254C12.9748 9.1364 13.0504 9.15334 13.1265 9.15334C13.267 9.15334 13.3847 9.10542 13.4795 9.00959C13.5742 8.91375 13.6216 8.79139 13.6216 8.64249C13.6216 8.57582 13.6026 8.49375 13.5645 8.39629C13.5265 8.29882 13.4824 8.23342 13.4324 8.20009L9.89006 4.65769C9.72448 4.48379 9.49811 4.35155 9.21096 4.26096C8.92383 4.17038 8.62809 4.12509 8.32374 4.12509C8.02664 4.12509 7.7338 4.16205 7.44521 4.23596C7.15661 4.30988 6.91703 4.44212 6.72646 4.63269L3.62429 7.73324C3.47755 7.87997 3.35709 8.0768 3.26289 8.32371C3.16869 8.57063 3.11796 8.85514 3.11071 9.17726C3.10346 9.42073 3.129 9.63087 3.18734 9.80769C3.24567 9.98449 3.31016 10.1457 3.38081 10.2914L1.71994 11.9523C1.44602 11.6254 1.22229 11.2125 1.04874 10.7134C0.875187 10.2143 0.792029 9.70226 0.799262 9.17726C0.806512 8.60696 0.895279 8.06701 1.06556 7.55741C1.23586 7.0478 1.52735 6.58665 1.94004 6.17396L5.15306 2.94681C5.523 2.5758 5.98785 2.29391 6.54764 2.10116C7.10742 1.9084 7.69945 1.81201 8.32374 1.81201C8.93462 1.81201 9.51914 1.92506 10.0773 2.15116C10.6354 2.37725 11.1203 2.68666 11.5319 3.07941L11.6939 3.22724L11.8417 3.07941C12.2428 2.70549 12.7357 2.40079 13.3205 2.16529C13.9053 1.92977 14.4984 1.81201 15.0999 1.81201C15.7825 1.81201 16.4096 1.93864 16.9814 2.19191C17.5531 2.44518 18.0245 2.75732 18.3955 3.12834L21.8624 6.58104C22.3084 7.02705 22.6429 7.54744 22.8659 8.14219C23.0889 8.73694 23.2004 9.3642 23.2004 10.024C23.2004 10.6682 23.0756 11.2825 22.8259 11.8669C22.5763 12.4514 22.2066 12.9885 21.7167 13.4784L13.795 21.3876C13.5145 21.668 13.207 21.8757 12.8724 22.0107C12.5378 22.1457 12.175 22.2132 11.7841 22.2132Z"
                      fill="#2C3333"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Img */}
        <img src="./content/profile-2.png" alt="" className="object-cover" />
      </div>
    </section>
  );
};

Hero.propTypes = {
  style: PropTypes.object.isRequired,
};

{
  /* <img
  src="./design/explore.svg"
  alt=""
  className="fixed w-[450px] object-cover -right-20 -bottom-32 -z-50 animate-spin-slow"
/>; */
}
