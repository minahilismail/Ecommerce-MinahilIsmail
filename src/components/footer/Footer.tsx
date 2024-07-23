import { Send2 } from "iconsax-react";
import { Headphone } from "iconsax-react";
import footerImg from "../../assets/images/footerLogo.png";
import { FOOTER_LINKS } from "../../constants/footerLinks";
import { SOCIAL_ICONS } from "../../constants/socialIcons";
const Footer: React.FC = () => {
  return (
    <div className="bg-quality md:px-[60px] px-[19.5px] w-full py-[29px] md:pb-[42px] md:pt-[42px] mt-[60px]">
      <div className="bg-white md:py-[38px] py-[14px] md:px-[95.5px] px-[24px] rounded-[20px] flex flex-col md:flex-row items-center md:justify-between justify-center gap-[12px] lg:gap-[137px] mb-[41px]">
        <div className="text-nowrap text-secondary font-bold md:text-[29.38px] text-[24px] md:leading-[44.07px] leading-[36px]">
          Subscribe newsletter
        </div>
        <div className="py-[21px] px-[25px] bg-primary rounded-[20px] flex text-center justify-between sm:w-[291px] w-full h-[63px] xl:w-[388px]">
          <div className="text-nowrap text-white">Email address</div>
          <div>
            <Send2 className="text-white h-[24px] w-[24px]" />
          </div>
        </div>
        <div className="flex gap-[20px] items-center">
          <div>
            <Headphone className="text-primary h-[45px] w-[45px]" />
          </div>
          <div className="text-[14px] text-footerText font-semibold">
            <div>Call us 24/7:</div>
            <div>(+62) 0123 567 789</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-[30px] md:flex-row justify-between gap-[23px] lg:gap-[80px] md:gap-0">
        <div className="flex flex-col gap-[36px]">
          <div className="flex flex-col gap-[41px]">
            <img
              className="w-[140px] h-[39px] object-contain"
              src={footerImg}
              alt=""
            />
            <p className="line-clamp-2 text-secondary text-[16.38px] leading-[24.57px] text-wrap">
              64 st james boulevard hoswick , ze2 7zj
            </p>
          </div>
          <div className="flex gap-[37px] pt-[25px] border-t border-footerBorderClr">
            {SOCIAL_ICONS.map(({ component: Icon, key }) => (
              <Icon key={key} className="cursor-pointer" />
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[24px] lg:gap-[100px] xl:gap-[227px] md:gap-[20px] text-nowrap text-[19.38px]">
          {FOOTER_LINKS.map(({ title, links }) => (
            <div key={title} className="text-secondary">
              <ul className="space-y-[15px] list-disc list-inside">
                <span className="font-semibold ">{title}</span>
                {links.map((link, index) => (
                  <li key={index} className="text-footerLinkClr">
                    <span className="text-secondary font-normal cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
