import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 py-4 shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.25)]">

        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#00AEEF] rounded-full flex items-center justify-center mr-1">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/dcff/a7f3/821c9fe28e21cfe760946e74d9fab362?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PtCBH0LZcr1uAQwOcxq2yZ2OcOBfcLXjUe~mDPdyFdehFWOSOetfWdkllJ-qGBoVBARuwKyqKKaMzGG8W2TDPY1ysfkN6~yP~q3qEOIN1LNSmpiSA3Rwk73iQy72oW9e6L0Ovxt3LnstC8G0Whz8g9A4tvuBR8nIXtLg46Da3mU4W3refx~fKbvD-HbpZmwy-s-IcF2CkTEghpO~jdxdQfkL5TrVb7L8qwLfIAZbbzlJwJHP5Ti6nKaKyxZXueZKCmfS9ygLop2otWG~NbgfGKWcjcKSfvg~-YtgPlHILseRyggF3WMxtkNKPIpaZNQaniKUtXa8Ym001KF-0IaV5Q__"
                  alt="Company Logo"
                  width={24} // Adjust as needed
                  height={24} // Adjust as needed
                  className="rounded-full"
                />
              </div>
              <span className="text-xl font-bold">
                Grad<span className="text-[#00AEEF]">Hub</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Who's using GradHub section */}
        <h2 className="text-[30px] font-semibold leading-[100%] tracking-[0%] text-center text-[#035E80] mb-12">
          Who&apos;s using GradHub?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[21px] max-w-[1089px] mx-auto mb-[190px]">

          {[
            {
              title: "Student",
              description:
                "Access internships, jobs, and opportunities tailored for you.",
              image: "/student1.png",
            },
            {
              title: "Employer",
              description: "Discover and hire top talent effortlessly.",
              image:
                "https://s3-alpha-sig.figma.com/img/8f2f/798f/a963b910125b4008c6948c67e562d527?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=S1CHGD-SL6gFRjjCJC-eeov8R~l2bwtetFEoSB2pz1b5rX0jEgAIiWvvcNZvJyyusYb~30LgoZdy-P245KZU3qejX8Y-GBas~Vvw4H4IVpTv-5g8oNHeqGzsTfE0JyEcc09GLnJKpBjq2rmiUlRHql8ZAxNDT5blsENZ7qkIxxU8rcpJQQVThN7QU6fEYwDt8zNmqOqtojH5Jxu9Kl2Y2dWU3EkGERaoLHoGdtkSGzWuyyVrBokZMgUMlD~HDlNCu0NEjGfhEZ9P2TTynSwSkLRyvih3o7Uu6YeQ7gcbxnj3mCD~6gj-5GENfkr6D-KlwwPsUE2QvHas~7hVw0kYoA__",
            },
            {
              title: "University",
              description:
                "Connect students with top employers and boost growth.",
              image:
                "https://s3-alpha-sig.figma.com/img/157a/c471/5e10ecc804683529b6e8dc1683e8ff85?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j8i99iIemYeXTEys65wPz2fGFa-KJNGZtxgCv1HZ77EdhfQyWyPBiO5y3KAnLjn2Lz4m11eFFWKeLOrFiFBhoDSTZq0JSWt1mC069v3Y1CmgEcHZcjIH-fQaa95hc4rSZlOMj0ODxZbTvu7EgEzSNTwWto61KUmVIuichv~WZ1F8G5zfXvO~8XteZxFWaW3gjTujAWrV5Hyxh25t460xwkCGMekz8iA1nqBKIb4p3YBKt-YBR4ddyJp~mhfryaUprqBCpE8Gp8p1QD1GdaEROmYynuk~6v579w9R0PRykAF-lodEYBYW4~POOxLcGhiFa-u2yXR3xe6lkcg-FbHQ8g__",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-[349px] h-[128px] rounded-[15px] border border-white bg-[#FEFEFE] shadow-md shadow-[#5A5A5A40] p-6 flex items-center transition-all duration-300 hover:border-[#00AEEF]"
            >
              <div className="flex-1">
              <h3 className="text-[22px] font-semibold text-[#002961] leading-[100%] mb-2">
  {item.title}
</h3>


<p className="text-[12px] font-medium text-[#3A3A3A] leading-[100%] tracking-[0%] font-inter">
  {item.description}
</p>

              </div>
              <div className="ml-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={128}
                  height={128}
                  className="w-[128px] h-[128px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Find Your Dream Job section */}
        <h2 className="text-3xl font-bold text-center text-[#035E80] mb-12">
          Find Your Dream Job
          <span className="text-[#006685] relative">
            <span className="absolute -top-2 -right-6 text-2xl text-[#003072]">
              ✦
            </span>
          </span>
        </h2>

        <div className="flex justify-center gap-x-8">
          {[
            {
              company: "Google",
              title: "Technical Support Special.",
              location: "New Delhi, India",
              salary: "20,000 INR - 25,000 INR",
              bgColor: "bg-white",
              image:
                "https://s3-alpha-sig.figma.com/img/1b39/a554/dc5b7f13ffcebbc48f33805f8eb5a17f?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CL0zt0NQApKOmIpjKzi~gYZ2DBGWe3A-fFkdPjWPDPLzFhPcHn5Z0W38GmEM2nkrdtxA8~nB69Dw6TyxKISCMQaRI9ZT-oDCmzM2wms87~VAFELJxvyj5q12siSI3B3oO8gAWWIA-63w4z~9dzIy-9eWWbpmZ5MfZvvpIY2ipPvS4zWmPeTU3-1QijV8VXGzElXbX~WJ1vmuadpUXyV78V3PKWAsfzF6M7YX-wWWXq9JS-JUxTOiUEZN-9bMyNLjWPjiw-RgczqLgU6TbcAt9hFu7CICE~KKJdziV6LhYypoFsOlZUc5YMrDMfM~w2JT98HNym7JlZjiiYNUtwjPoQ__",
              type: "HYBRID",
            },
            {
              company: "Deloitte",
              title: "Risk Analyst",
              location: "Gurugram, India",
              salary: "8,00,000 per annum (INR)",
              bgColor: "bg-black",
              image:
                "https://s3-alpha-sig.figma.com/img/4f7c/e5e0/ecfb7e3be695fa48d8a53ea409b9166f?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sw1ncAOqJEJGOzEUmLNjTjoYVyc4dV4KtRUUSXvBNcq3uB5I-KKpHm-LlqVElompKz6EEzMtACRNGONdHtMWfxna4oHxbP~KLXEgxBUBeZx-WARP0rk44nKdpM87~mUmcjOO4dGqlZfQheU4jStUr3RmRggMcgYZYgMkGNPChiYlm7ajgJJzzb5I6oauztM2EvZ0w4a~Ttfj3MakPYiimLxndIFVjJAYLbMtqRijlAjY4sNLaogZuB1MuymxzSrXolX7jRNMWmMpvWLoSPT-mqbY4WqP90YxFuJFqDS7bFsBCKv-6T~W62pi1oKNrjVxJ5yjvH1xFsy9Jg21RptQ6A__",
              type: "HYBRID",
            },
            {
              company: "Wayspire",
              title: "Business Development Ass.",
              location: "Mumbai, India",
              salary: "6,00,000 per annum (INR)",
              bgColor: "bg-blue-900",
              image:
                "https://s3-alpha-sig.figma.com/img/ac92/7a5b/17e46c83bc126633c5db32fd3403779d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Y76SUroZ0E~~Kp~Co2HE26MF3uzcwXlHVT26pcOPp8stV~ktlo2vPNUj52yjMQrbzg~7dTVo5p~FBPOX2oj9MDxM51nmdPgmewCpGwQIiQMCX52Hy~cXO7gWUVLYVLOAefEBgHLEZiWUvKiOvWi1wzHhzozXqC0sYUw3tkVKY4FmFDwJo~6JISbwh6fJKLdvL7Dn2vnYyhczWOlgFaUqe9UPR21jJfCmA0PJgmB20~miCe5ubJNgWS457MN6rbDRJF4Wj-6CbW4z9cTPVmQIAth7HobUvgzQpijLS~vsHsJjMEGP17Y9Neclf~HxhzOSwb2tqX9dT16juCjOUGAA3g__",
              type: "IN-OFFICE",
            },
          ].map((job, index) => (
            <div
              key={index}
              className="w-[339px] h-[285px] border border-[#DDDDDD] rounded-[10px] bg-[#FEFEFE] p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 mr-4 flex-shrink-0 ${job.bgColor} rounded-[100px] flex items-center justify-center`}
                >
                  <Image
                    src={job.image}
                    alt={job.company}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div className="w-[260px] h-[38px] flex flex-col gap-[4px]">
                  <h3 className="font-bold text-[#18191C] text-[16px] leading-[19px]">
                    {job.title}
                  </h3>
                  <p className="text-[#6C6C6C] text-[14px] leading-[17px]">
                    {job.company}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <span className="bg-[#DFEDFF] text-[#004CB4] text-[12px] font-inter font-semibold leading-[14px] tracking-normal uppercase px-[10px] py-[4px] rounded-[3px] inline-flex items-center">
                  {job.type}
                </span>
              </div>

              <div className="flex items-start mb-2">
                <svg
                  width="18.17"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18.17px] h-[18px] text-gray-400 mr-[11px] flex-shrink-0"
                >
                  <path
                    d="M9.08332 9.56348C10.3375 9.56348 11.3541 8.55612 11.3541 7.31348C11.3541 6.07084 10.3375 5.06348 9.08332 5.06348C7.82918 5.06348 6.8125 6.07084 6.8125 7.31348C6.8125 8.55612 7.82918 9.56348 9.08332 9.56348Z"
                    stroke="#767F8C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.7603 7.31348C14.7603 12.376 9.08329 16.3135 9.08329 16.3135C9.08329 16.3135 3.40625 12.376 3.40625 7.31348C3.40625 5.82163 4.00436 4.39089 5.06902 3.336C6.13367 2.28111 7.57765 1.68848 9.08329 1.68848C10.5889 1.68848 12.0329 2.28111 13.0976 3.336C14.1622 4.39089 14.7603 5.82163 14.7603 7.31348V7.31348Z"
                    stroke="#767F8C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[#767F8C] text-[14px] leading-[14px] tracking-[0%] font-inter font-normal">
                  {job.location}
                </span>
              </div>

              <div className="flex items-center gap-[11px] mb-6">
                <svg
                  width="18.17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.40771 6.16211H7.34755"
                    stroke="#888888"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.309 6.896H13.3966C12.0847 6.896 11.022 7.88562 11.022 9.10662C11.022 10.3276 12.0855 11.3172 13.3959 11.3172H15.309C15.3707 11.3172 15.4009 11.3172 15.4266 11.3158C15.8235 11.2915 16.1395 10.9974 16.1652 10.6283C16.1667 10.6047 16.1667 10.576 16.1667 10.5192V7.69403C16.1667 7.63729 16.1667 7.60855 16.1652 7.58497C16.1388 7.2158 15.8235 6.92179 15.4266 6.89747C15.4009 6.896 15.3707 6.896 15.309 6.896Z"
                    stroke="#888888"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15.4053 6.89287C15.348 5.51344 15.1642 4.66751 14.5696 4.07211C13.709 3.2085 12.3229 3.2085 9.55134 3.2085H7.34646C4.57494 3.2085 3.1888 3.2085 2.32817 4.07211C1.4668 4.93499 1.4668 6.32474 1.4668 9.1035C1.4668 11.8823 1.4668 13.272 2.32817 14.1349C3.1888 14.9985 4.57494 14.9985 7.34646 14.9985H9.55134C12.3229 14.9985 13.709 14.9985 14.5696 14.1349C15.1642 13.5395 15.3487 12.6936 15.4053 11.3141"
                    stroke="#888888"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4.40771 3.21199L7.15278 1.38675C7.53883 1.13499 7.98946 1.00098 8.44999 1.00098C8.91051 1.00098 9.36114 1.13499 9.74719 1.38675L12.4923 3.21199"
                    stroke="#888888"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13.2212 9.11572H13.2273"
                    stroke="#888888"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="text-[#767F8C] text-[14px] leading-[14px] tracking-[0%] font-inter font-normal">
                  {job.salary}
                </span>
              </div>

              <div className="flex w-[293px] h-[39px] gap-[18px]">
                <button className="w-[137px] h-[39px] border border-[#02B0F1] text-[#01B0F1] rounded-[4px] px-4 py-2 hover:bg-blue-50 transition-colors flex items-center justify-center">
                  View details
                </button>

                <button className="w-[137px] h-[39px] bg-gradient-to-r from-[#02B0F1] to-[#08326C] text-white font-inter font-semibold text-[14px] leading-[14px] rounded-[4px] flex items-center justify-center hover:opacity-90 transition-opacity">
                  Apply now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
