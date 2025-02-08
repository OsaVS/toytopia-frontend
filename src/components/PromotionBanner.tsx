import { useEffect, useState } from "react";

const PromotionBanner = ({ date, image }: any) => {
  const targetDate = new Date(date);

  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-[#FFC95C]">
        <div className="bg-grn md:bg-[#FFC95C] xs:px-5 sm:px-10 sd:px-16 xl:px-20 order-2 md:order-1 py-8 md:py-0">
          <img src={image} alt="" />
        </div>
        <div className="xs:px-5 sm:px-10 sd:px-16 xl:px-20 order-1 md:order-2 py-8">
          <p className="text-white font-medium text-lg mb-2">PROMOTION</p>
          <p className="font-semibold text-4xl mb-4">Hurry up! 30% OFF</p>
          <p className="text-base mb-5">
            Thousands of toys are waiting for you
          </p>
          <div>
            <p className="mb-2">Offer expires in:</p>
            <div className="flex items-center gap-3">
              {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
                const timeValues = [
                  timeLeft.days,
                  timeLeft.hours,
                  timeLeft.minutes,
                  timeLeft.seconds,
                ];
                return (
                  <div
                    key={label}
                    className="grid items-center justify-center text-center"
                  >
                    <div className="w-14 h-14 bg-white text-black flex items-center justify-center text-lg font-bold rounded-md shadow-md">
                      {String(timeValues[index]).padStart(2, "0")}
                    </div>
                    <p className="text-xs mt-1">{label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionBanner;
