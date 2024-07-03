import React, { useState } from "react";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";
import icon5 from "../../assets/images/icon5.png";
import icon6 from "../../assets/images/icon6.png";
import arrow from "../../assets/images/arrow.png";
const array1 = [
  {
    title: "Comprehensive HR Solutions",
    content:
      "Our HRMS offers a complete suite of tools to manage every aspect of HR, from recruitment and onboarding to performance management and employee engagement. With StickyHR, you have all the resourcesyou need in one place.",
    url: icon1,
  },
  {
    title: "User Friendly Interface",
    content:
      "We understand the importance of a seamless user experience. Our intuitive  interface ensures that both HR professionals and employees can navigate the  system with ease, reducing the learning curve and increasing productivity. ",
    url: icon2,
  },
  {
    title: "Customizable and Scalable",
    content:
      "Your business is unique, and so are your HR needs. StickyHR is fully  customizable to fit your specific requirements. As your business grows, our  system scales with you, ensuring continuous support and functionality. ",
    url: icon3,
  },
  {
    title: "Data-Driven Insights",
    content:
      "Make informed decisions with real-time data and analytics. Our HRMS provides  detailed reports and insights into your workforce, helping you identify trends,  measure performance, and improve overall efficiency.",
    url: icon4,
  },
  {
    title: "Secure and Compliant",
    content:
      "We prioritize the security of your data. StickyHR is built with robust security  measures and complies with all relevant regulations to ensure your information  is protected at all times. ",
    url: icon5,
  },
  {
    title: "Seamless Integration",
    content:
      "Integrate our HRMS with your existing tools and systems effortlessly. Whether  it's payroll, time tracking, or third-party applications, our system ensures  smooth and seamless integration",
    url: icon6,
  },
];

export default function Welcome() {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center lg:ml-28 lg:mr-28 lg:mt-[76px] ">
      <h1 className="text-center font-bold text-2xl mt-3  lg:text-[27px]">
        {" "}
        Welcome to Sticky HR: Transforming HR Management
      </h1>
      <p className="text-center text-md mt-2 leading-6 p-2  lg:text-[20px] lg:font-medium lg:leading-8  lg:mt-[24px]">
        In today's fast-paced business environment, managing human resources
        efficiently and effectively is crucial for success. Welcome to StickyHR
        HRMS, the ultimate solution for streamlining your HR processes and
        empowering your workforce. Our comprehensive Human Resource Management
        System HRMS is designed to cater to the unique needs of businesses of
        all sizes, from small startups to large enterprises
      </p>
      <div className="flex gap-10 flex-col items-center p-10 lg:flex-row lg:items-stretch lg:mt-[46px]">
        <div className="flex flex-col gap-5">
          <button
            onClick={() => setIndex(0)}
            className={
              index === 0
                ? "flex items-center w-96 gap-2 p-3 rounded-md hover:scale-105 duration-300 bg-[#90b3b3]"
                : "flex items-center w-96 gap-2 bg-teal-600 p-3 rounded-md hover:scale-105 duration-300"
            }
          >
            <svg
              width="40"
              height="45"
              viewBox="0 0 40 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.5625 12.3438C26.5625 12.1719 26.4219 12.0312 26.25 12.0312H11.25C11.0781 12.0312 10.9375 12.1719 10.9375 12.3438V14.2188C10.9375 14.3906 11.0781 14.5312 11.25 14.5312H26.25C26.4219 14.5312 26.5625 14.3906 26.5625 14.2188V12.3438ZM26.25 17.6562H11.25C11.0781 17.6562 10.9375 17.7969 10.9375 17.9688V19.8438C10.9375 20.0156 11.0781 20.1562 11.25 20.1562H26.25C26.4219 20.1562 26.5625 20.0156 26.5625 19.8438V17.9688C26.5625 17.7969 26.4219 17.6562 26.25 17.6562ZM18.4375 23.2812H11.25C11.0781 23.2812 10.9375 23.4219 10.9375 23.5938V25.4688C10.9375 25.6406 11.0781 25.7812 11.25 25.7812H18.4375C18.6094 25.7812 18.75 25.6406 18.75 25.4688V23.5938C18.75 23.4219 18.6094 23.2812 18.4375 23.2812ZM16.5625 35.3125H7.8125V7.8125H29.6875V21.25C29.6875 21.4219 29.8281 21.5625 30 21.5625H32.1875C32.3594 21.5625 32.5 21.4219 32.5 21.25V6.25C32.5 5.55859 31.9414 5 31.25 5H6.25C5.55859 5 5 5.55859 5 6.25V36.875C5 37.5664 5.55859 38.125 6.25 38.125H16.5625C16.7344 38.125 16.875 37.9844 16.875 37.8125V35.625C16.875 35.4531 16.7344 35.3125 16.5625 35.3125ZM30.5 32.4062C31.6328 31.3789 32.3438 29.8945 32.3438 28.2422C32.3438 25.1367 29.8242 22.6172 26.7188 22.6172C23.6133 22.6172 21.0938 25.1367 21.0938 28.2422C21.0938 29.8945 21.8047 31.3789 22.9375 32.4062C20.7109 33.6758 19.1797 36.0273 19.0625 38.7383C19.0547 38.9141 19.1992 39.0625 19.375 39.0625H21.2539C21.418 39.0625 21.5547 38.9336 21.5664 38.7656C21.7188 36.0625 23.9727 33.9062 26.7188 33.9062C29.4648 33.9062 31.7188 36.0625 31.8711 38.7656C31.8789 38.9297 32.0156 39.0625 32.1836 39.0625H34.0625C34.2422 39.0625 34.3828 38.9141 34.375 38.7383C34.2617 36.0234 32.7266 33.6758 30.5 32.4062ZM26.7188 25.1172C28.4453 25.1172 29.8438 26.5156 29.8438 28.2422C29.8438 29.9688 28.4453 31.3672 26.7188 31.3672C24.9922 31.3672 23.5938 29.9688 23.5938 28.2422C23.5938 26.5156 24.9922 25.1172 26.7188 25.1172Z"
                fill="#FFC600"
              />
            </svg>
            <h1>Comprehensive HR Solutions</h1>
          </button>
          <button
            onClick={() => setIndex(1)}
            className={
              index === 1
                ? "flex items-center w-96 gap-2 p-3 rounded-md hover:scale-105 duration-300 bg-[#90b3b3]"
                : "flex items-center w-96 gap-2 bg-teal-600 p-3 rounded-md hover:scale-105 duration-300"
            }
          >
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.578 38.5C10.794 38.5 10.1267 38.2247 9.576 37.674C9.02533 37.1233 8.75 36.4566 8.75 35.6738V6.32625C8.75 5.54458 9.02533 4.87783 9.576 4.326C10.1267 3.77533 10.794 3.5 11.578 3.5H26.9237C27.7054 3.5 28.3722 3.77533 28.924 4.326C29.4747 4.87667 29.75 5.544 29.75 6.328V12.1152H28V9.625H10.5V32.375H28V29.8848H29.75V35.672C29.75 36.456 29.4747 37.1233 28.924 37.674C28.3733 38.2247 27.7066 38.5 26.9237 38.5H11.578ZM10.5 34.125V35.6738C10.5 35.9421 10.612 36.1888 10.836 36.414C11.06 36.6392 11.3067 36.7512 11.5762 36.75H26.9237C27.1921 36.75 27.4388 36.638 27.664 36.414C27.8892 36.19 28.0012 35.9427 28 35.672V34.125H10.5ZM26.1625 26.789L19.936 20.5625L21.175 19.3235L26.1625 24.311L36.1182 14.357L37.3555 15.5943L26.1625 26.789ZM10.5 7.875H28V6.32625C28 6.05792 27.888 5.81117 27.664 5.586C27.44 5.36083 27.1933 5.24883 26.9237 5.25H11.5762C11.3079 5.25 11.0612 5.362 10.836 5.586C10.6108 5.81 10.4988 6.05733 10.5 6.328V7.875Z"
                fill="#FFC600"
              />
              <path
                d="M10.5 34.125V35.6738C10.5 35.9421 10.612 36.1888 10.836 36.414C11.06 36.6392 11.3067 36.7512 11.5762 36.75H26.9238C27.1921 36.75 27.4388 36.638 27.664 36.414C27.8892 36.19 28.0012 35.9427 28 35.672V34.125H10.5ZM10.5 34.125V36.75M10.5 7.875H28V6.32625C28 6.05792 27.888 5.81117 27.664 5.586C27.44 5.36083 27.1933 5.24883 26.9238 5.25H11.5762C11.3079 5.25 11.0612 5.362 10.836 5.586C10.6108 5.81 10.4988 6.05733 10.5 6.328V7.875ZM10.5 7.875V5.25M11.578 38.5C10.794 38.5 10.1267 38.2247 9.576 37.674C9.02533 37.1233 8.75 36.4566 8.75 35.6738V6.32625C8.75 5.54458 9.02533 4.87783 9.576 4.326C10.1267 3.77533 10.794 3.5 11.578 3.5H26.9238C27.7054 3.5 28.3722 3.77533 28.924 4.326C29.4747 4.87667 29.75 5.544 29.75 6.328V12.1152H28V9.625H10.5V32.375H28V29.8847H29.75V35.672C29.75 36.456 29.4747 37.1233 28.924 37.674C28.3733 38.2247 27.7066 38.5 26.9238 38.5H11.578ZM26.1625 26.789L19.936 20.5625L21.175 19.3235L26.1625 24.311L36.1182 14.357L37.3555 15.5943L26.1625 26.789Z"
                stroke="#FFC600"
              />
            </svg>
            <h1>User-Friendly Interface</h1>
          </button>
          <button
            onClick={() => setIndex(2)}
            className={
              index === 2
                ? "flex items-center w-96 gap-2 p-3 rounded-md hover:scale-105 duration-300 bg-[#90b3b3]"
                : "flex items-center w-96 gap-2 bg-teal-600 p-3 rounded-md hover:scale-105 duration-300"
            }
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 7.49844C37.4961 6.20187 36.9877 4.95772 36.0824 4.02948C35.1771 3.10124 33.9461 2.5618 32.6501 2.52541C31.354 2.48901 30.0946 2.95852 29.1387 3.83449C28.1828 4.71047 27.6054 5.92413 27.5287 7.21844L11.9825 10.3272C11.619 9.57172 11.0709 8.92006 10.389 8.43245C9.70698 7.94483 8.91309 7.637 8.08066 7.53739C7.24823 7.43779 6.40412 7.54963 5.62635 7.86258C4.84859 8.17553 4.16225 8.67949 3.63079 9.32788C3.09933 9.97627 2.73989 10.7482 2.5857 11.5722C2.4315 12.3963 2.48752 13.2459 2.74858 14.0426C3.00964 14.8393 3.46731 15.5573 4.0793 16.1303C4.69129 16.7033 5.43785 17.1128 6.24997 17.3209V27.6759C5.39697 27.8945 4.61701 28.3349 3.98927 28.9525C3.36153 29.57 2.90838 30.3426 2.67583 31.1919C2.44327 32.0412 2.43959 32.9369 2.66517 33.7881C2.89075 34.6392 3.33755 35.4156 3.96019 36.0382C4.58284 36.6609 5.35917 37.1077 6.21034 37.3332C7.06151 37.5588 7.95722 37.5551 8.80652 37.3226C9.65581 37.09 10.4284 36.6369 11.046 36.0091C11.6635 35.3814 12.1039 34.6014 12.3225 33.7484H22.6775C22.8853 34.5611 23.2946 35.3082 23.8677 35.9208C24.4407 36.5333 25.159 36.9915 25.956 37.2529C26.753 37.5143 27.6031 37.5705 28.4276 37.4164C29.2521 37.2622 30.0245 36.9026 30.6732 36.3709C31.3219 35.8391 31.8261 35.1524 32.1391 34.3742C32.4521 33.596 32.5639 32.7514 32.464 31.9186C32.3641 31.0857 32.0558 30.2915 31.5677 29.6094C31.0795 28.9272 30.4273 28.3792 29.6712 28.0159L32.78 12.4697C34.0525 12.3998 35.2502 11.8461 36.1277 10.9219C37.0052 9.99764 37.4961 8.77288 37.5 7.49844ZM32.5 4.99844C32.9944 4.99844 33.4778 5.14506 33.8889 5.41977C34.3 5.69447 34.6204 6.08492 34.8097 6.54173C34.9989 6.99855 35.0484 7.50122 34.9519 7.98617C34.8555 8.47112 34.6174 8.91658 34.2677 9.26621C33.9181 9.61584 33.4726 9.85394 32.9877 9.95041C32.5027 10.0469 32.0001 9.99736 31.5433 9.80814C31.0864 9.61892 30.696 9.29849 30.4213 8.88737C30.1466 8.47624 30 7.9929 30 7.49844C30 6.8354 30.2634 6.19952 30.7322 5.73067C31.201 5.26183 31.8369 4.99844 32.5 4.99844ZM4.99997 12.4984C4.99997 12.004 5.14659 11.5206 5.4213 11.1095C5.696 10.6984 6.08645 10.378 6.54326 10.1887C7.00008 9.99952 7.50274 9.95002 7.9877 10.0465C8.47265 10.1429 8.91811 10.381 9.26774 10.7307C9.61737 11.0803 9.85547 11.5258 9.95193 12.0107C10.0484 12.4957 9.99889 12.9983 9.80967 13.4552C9.62045 13.912 9.30002 14.3024 8.8889 14.5771C8.47777 14.8518 7.99442 14.9984 7.49997 14.9984C6.83693 14.9984 6.20104 14.7351 5.7322 14.2662C5.26336 13.7974 4.99997 13.1615 4.99997 12.4984ZM7.49997 34.9984C7.00552 34.9984 6.52217 34.8518 6.11105 34.5771C5.69992 34.3024 5.37949 33.912 5.19027 33.4552C5.00105 32.9983 4.95154 32.4957 5.04801 32.0107C5.14447 31.5258 5.38257 31.0803 5.7322 30.7307C6.08184 30.381 6.52729 30.1429 7.01225 30.0465C7.4972 29.95 7.99986 29.9995 8.45668 30.1887C8.9135 30.378 9.30394 30.6984 9.57864 31.1095C9.85335 31.5206 9.99997 32.004 9.99997 32.4984C9.99997 33.1615 9.73658 33.7974 9.26774 34.2662C8.7989 34.7351 8.16301 34.9984 7.49997 34.9984ZM22.6775 31.2484H12.3225C12.0978 30.3894 11.6485 29.6056 11.0206 28.9778C10.3928 28.3499 9.60903 27.9006 8.74997 27.6759V17.3209C9.771 17.0548 10.6813 16.4716 11.35 15.6554C12.0186 14.8392 12.4112 13.8319 12.4712 12.7784L28.0175 9.66969C28.507 10.6777 29.3209 11.4921 30.3287 11.9822L27.22 27.5272C26.1665 27.5872 25.1593 27.9798 24.343 28.6484C23.5268 29.3171 22.9437 30.2274 22.6775 31.2484ZM27.5 34.9984C27.0055 34.9984 26.5222 34.8518 26.111 34.5771C25.6999 34.3024 25.3795 33.912 25.1903 33.4552C25.0011 32.9983 24.9515 32.4957 25.048 32.0107C25.1445 31.5258 25.3826 31.0803 25.7322 30.7307C26.0818 30.381 26.5273 30.1429 27.0122 30.0465C27.4972 29.95 27.9999 29.9995 28.4567 30.1887C28.9135 30.378 29.3039 30.6984 29.5786 31.1095C29.8533 31.5206 30 32.004 30 32.4984C30 33.1615 29.7366 33.7974 29.2677 34.2662C28.7989 34.7351 28.163 34.9984 27.5 34.9984Z"
                fill="#FFC600"
              />
            </svg>
            <h1>customizing and scalable</h1>
          </button>
          <button
            onClick={() => setIndex(3)}
            className={
              index === 3
                ? "flex items-center w-96 gap-2 p-3 rounded-md hover:scale-105 duration-300 bg-[#90b3b3]"
                : "flex items-center w-96 gap-2 bg-teal-600 p-3 rounded-md hover:scale-105 duration-300"
            }
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6667 26.7317C19.4444 26.7317 21.8056 25.7561 23.75 23.805C25.6944 21.8539 26.6667 19.485 26.6667 16.6983C26.6667 13.9117 25.6944 11.5428 23.75 9.59167C21.8056 7.64056 19.4444 6.66556 16.6667 6.66667C13.8889 6.66778 11.5278 7.64333 9.58333 9.59333C7.63889 11.5433 6.66667 13.9117 6.66667 16.6983C6.66667 19.485 7.63889 21.8539 9.58333 23.805C11.5278 25.7561 13.8889 26.7317 16.6667 26.7317ZM15.8333 20.9933V11.0583H17.5V20.9933H15.8333ZM10.2567 20.9933V14.2333H11.9233V20.995L10.2567 20.9933ZM21.41 20.9933V15.8333H23.0767V20.9933H21.41ZM33.8533 35L24.33 25.4783C23.2978 26.3672 22.1283 27.065 20.8217 27.5717C19.515 28.0783 18.13 28.3322 16.6667 28.3333C13.41 28.3333 10.6511 27.2039 8.39 24.945C6.13 22.685 5 19.9272 5 16.6717C5 13.4161 6.13 10.6572 8.39 8.395C10.65 6.13278 13.4072 5.00111 16.6617 5C19.9161 4.99889 22.6756 6.12889 24.94 8.39C27.2022 10.6522 28.3333 13.4111 28.3333 16.6667C28.3333 18.13 28.0794 19.515 27.5717 20.8217C27.0639 22.1283 26.3661 23.2872 25.4783 24.2983L35 33.82L33.8533 35Z"
                fill="#FFC600"
                stroke="#FFC600"
              />
            </svg>
            <h1>Date-Driven Insights</h1>
          </button>
          <button
            onClick={() => setIndex(4)}
            className={
              index === 4
                ? "flex items-center w-96 gap-2 p-3 rounded-md hover:scale-105 duration-300 bg-[#90b3b3]"
                : "flex items-center w-96 gap-2 bg-teal-600 p-3 rounded-md hover:scale-105 duration-300"
            }
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 9.58203C3.75 8.91899 4.01339 8.2831 4.48223 7.81426C4.95107 7.34542 5.58696 7.08203 6.25 7.08203H13.515C14.2098 7.08201 14.8871 7.29906 15.4525 7.70286L19.5475 10.6279C20.1129 11.0317 20.7902 11.2487 21.485 11.2487H33.75C34.413 11.2487 35.0489 11.5121 35.5178 11.9809C35.9866 12.4498 36.25 13.0857 36.25 13.7487V30.4154C36.25 31.0784 35.9866 31.7143 35.5178 32.1831C35.0489 32.652 34.413 32.9154 33.75 32.9154H6.25C5.58696 32.9154 4.95107 32.652 4.48223 32.1831C4.01339 31.7143 3.75 31.0784 3.75 30.4154V9.58203Z"
                stroke="#FFC600"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 27.9167C23.2217 27.9167 25.8334 25.305 25.8334 22.0833C25.8334 18.8617 23.2217 16.25 20 16.25C16.7784 16.25 14.1667 18.8617 14.1667 22.0833C14.1667 25.305 16.7784 27.9167 20 27.9167Z"
                stroke="#FFC600"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 23.2135C21.1506 23.2135 22.0834 22.2808 22.0834 21.1302C22.0834 19.9796 21.1506 19.0469 20 19.0469C18.8494 19.0469 17.9167 19.9796 17.9167 21.1302C17.9167 22.2808 18.8494 23.2135 20 23.2135Z"
                stroke="#FFC600"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 23.2109V25.1209"
                stroke="#FFC600"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1>Secure and compliant</h1>
          </button>
          <button
            onClick={() => setIndex(5)}
            className={
              index === 5
                ? "flex items-center w-96 gap-2 p-3 rounded-md hover:scale-105 duration-300 bg-[#90b3b3]"
                : "flex items-center w-96 gap-2 bg-teal-600 p-3 rounded-md hover:scale-105 duration-300"
            }
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_383_59)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.9833 9.67677C17.1363 9.39367 17.3637 9.15772 17.641 8.99441C17.9182 8.8311 18.2349 8.74663 18.5566 8.7501L22.0566 8.80344C22.3775 8.81047 22.6904 8.9048 22.9618 9.07629C23.2331 9.24777 23.4526 9.48994 23.5966 9.77677L24.9966 12.5901L27.47 12.3801C27.7867 12.355 28.1043 12.4157 28.3894 12.5559C28.6745 12.6961 28.9165 12.9106 29.09 13.1768L30.8566 15.9168C31.0464 16.2118 31.1431 16.5571 31.1342 16.9078C31.1252 17.2585 31.0111 17.5984 30.8066 17.8834L29.5066 19.7034L30.89 21.5301C31.32 22.0968 31.3633 22.8701 30.9966 23.4834L29.33 26.2768C29.1643 26.5507 28.9273 26.7745 28.6443 26.9242C28.3613 27.074 28.043 27.144 27.7233 27.1268L25.1066 26.9668L23.4966 30.2634C23.3509 30.5565 23.1266 30.8033 22.8488 30.9763C22.571 31.1494 22.2506 31.2419 21.9233 31.2434H18.3166C17.9899 31.2412 17.6702 31.1485 17.393 30.9755C17.1159 30.8025 16.8921 30.556 16.7466 30.2634L15.2333 27.1668L12.4333 27.4201C12.1105 27.4472 11.7865 27.385 11.4967 27.2404C11.2069 27.0958 10.9624 26.8743 10.79 26.6001L9.01997 23.7501C8.83224 23.4476 8.74124 23.095 8.7591 22.7395C8.77697 22.3839 8.90286 22.0423 9.11997 21.7601L10.72 19.6768L9.4333 17.8801C9.22931 17.5947 9.11579 17.2546 9.10747 16.9039C9.09915 16.5533 9.19641 16.2082 9.38664 15.9134L11.1533 13.1734C11.3265 12.9078 11.5679 12.6936 11.8524 12.5534C12.1369 12.4133 12.4538 12.3522 12.77 12.3768L15.4266 12.6034L16.9833 9.67677ZM18.9766 11.2568L17.4033 14.2168C17.2409 14.5182 16.9944 14.766 16.6938 14.9299C16.3931 15.0938 16.0513 15.1669 15.71 15.1401L13.01 14.9101L11.7633 16.8434L13.0766 18.6768C13.2951 18.9817 13.4098 19.3488 13.4038 19.7239C13.3978 20.099 13.2714 20.4623 13.0433 20.7601L11.4166 22.8734L12.67 24.8934L15.5233 24.6334C15.8769 24.6007 16.232 24.6762 16.5416 24.8501C16.8512 25.0239 17.1006 25.2878 17.2566 25.6068L18.7866 28.7434H21.4533L23.08 25.4201C23.2336 25.1115 23.4743 24.8545 23.7722 24.681C24.0701 24.5074 24.4123 24.4249 24.7566 24.4434L27.4166 24.6034L28.59 22.6368L27.1766 20.7701C26.9518 20.4725 26.828 20.1108 26.8232 19.7378C26.8184 19.3648 26.9329 19.0001 27.15 18.6968L28.48 16.8434L27.2333 14.9101L24.7 15.1234C24.3499 15.1533 23.9989 15.077 23.6927 14.9046C23.3865 14.7322 23.1393 14.4716 22.9833 14.1568L21.56 11.2968L18.9766 11.2568Z"
                  fill="#FFC600"
                />
                <path
                  d="M34.2733 24.6668C33.2621 27.7883 31.2553 30.4921 28.5605 32.3639C25.8656 34.2358 22.6312 35.1723 19.3531 35.0301C16.075 34.8879 12.934 33.6747 10.4114 31.5765C7.88872 29.4783 6.12365 26.6108 5.38664 23.4134L8.22331 22.8534L2.82331 17.2668L-0.00335693 24.4901L2.98664 23.9034C3.8211 27.6568 5.86843 31.0308 8.81228 33.5042C11.7561 35.9775 15.4326 37.4125 19.2736 37.5874C23.1146 37.7623 26.9062 36.6673 30.0627 34.4717C33.2191 32.2761 35.5646 29.1021 36.7366 25.4401L34.2733 24.6668ZM37.06 16.2001C36.2251 12.4469 34.1774 9.07317 31.2333 6.60015C28.2893 4.12714 24.6127 2.69254 20.7717 2.51804C16.9308 2.34354 13.1393 3.43885 9.9831 5.63471C6.82691 7.83058 4.48174 11.0048 3.30998 14.6668L5.68664 15.4401C6.6975 12.3186 8.70399 9.61456 11.3986 7.74247C14.0933 5.87038 17.3275 4.93348 20.6055 5.07533C23.8836 5.21718 27.0247 6.42996 29.5476 8.52782C32.0705 10.6257 33.8359 13.4929 34.5733 16.6901L31.7366 17.2534L37.1366 22.8268L39.9966 15.6134L37.06 16.2001Z"
                  fill="#FFC600"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 18.75C19.6685 18.75 19.3505 18.8817 19.1161 19.1161C18.8817 19.3505 18.75 19.6685 18.75 20C18.75 20.3315 18.8817 20.6495 19.1161 20.8839C19.3505 21.1183 19.6685 21.25 20 21.25C20.3315 21.25 20.6495 21.1183 20.8839 20.8839C21.1183 20.6495 21.25 20.3315 21.25 20C21.25 19.6685 21.1183 19.3505 20.8839 19.1161C20.6495 18.8817 20.3315 18.75 20 18.75ZM16.25 20C16.25 19.0054 16.6451 18.0516 17.3483 17.3483C18.0516 16.6451 19.0054 16.25 20 16.25C20.9946 16.25 21.9484 16.6451 22.6516 17.3483C23.3549 18.0516 23.75 19.0054 23.75 20C23.75 20.9946 23.3549 21.9484 22.6516 22.6516C21.9484 23.3549 20.9946 23.75 20 23.75C19.0054 23.75 18.0516 23.3549 17.3483 22.6516C16.6451 21.9484 16.25 20.9946 16.25 20Z"
                  fill="#FFC600"
                />
              </g>
              <defs>
                <clipPath id="clip0_383_59">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h1>seamless Integration</h1>
          </button>
        </div>
        <div className="bg-[#90b3b3] p-10 flex flex-col-reverse lg:flex-row gap-10 items-center justify-center rounded-md">
          <div className="space-y-3 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="font-bold text-xl">{array1[index].title}</h1>
            <p className="text-md break-all">{array1[index].content}</p>
            <button className="bg-yellow p-3 rounded-3xl flex gap-2 w-60 pl-10 hover:scale-105 duration-300">
              Schedule A Demo <img src={arrow} alt="arrow" />
            </button>
          </div>
          <img
            src={array1[index].url}
            alt="url"
            className="w-full lg:w-2/5 h-36 lg:h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
