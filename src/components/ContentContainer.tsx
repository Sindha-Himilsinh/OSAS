import { FunctionComponent } from "react";

export type ContentContainerType = {
  className?: string;
};

const ContentContainer: FunctionComponent<ContentContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 pl-[41px] pr-[38px] box-border max-w-full ${className}`}
    >
      <header className="flex-1 flex flex-row items-start justify-between gap-5 max-w-full text-left text-21xl text-deepskyblue-200 font-roboto">
        <div className="w-[298px] flex flex-col items-start justify-start pt-2 pb-0 pl-0 pr-5 box-border">
          <a className="[text-decoration:none] relative font-bold text-[inherit] whitespace-nowrap">
            Overview
          </a>
        </div>
        <div className="w-[562px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full text-lg text-gray-100">
          <div className="self-stretch flex flex-row items-start justify-start pt-[19px] px-[59px] pb-[15px] relative">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-white z-[1]" />
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[70px] z-[2]">
              Search...
            </a>
          </div>
        </div>
        <div className="w-[196px] flex flex-row items-end justify-start gap-[46px]">
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[17px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-5">
              <img
                className="h-[27px] w-[27px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/user-interface--menu.svg"
              />
              <img
                className="h-[30px] w-[29px] relative min-h-[30px]"
                loading="lazy"
                alt=""
                src="/group-2.svg"
              />
            </div>
          </div>
          <img
            className="h-[65px] w-[65px] relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/ellipse-1@2x.png"
          />
        </div>
      </header>
    </div>
  );
};

export default ContentContainer;
