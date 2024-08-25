import { FunctionComponent } from "react";

export type TopbarContainerType = {
  className?: string;
};

const TopbarContainer: FunctionComponent<TopbarContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-[86px] text-left text-5xl text-steelblue font-roboto ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[5px] pr-px text-15xl text-midnightblue">
        <div className="flex-1 flex flex-row items-start justify-start gap-[11px]">
          <img
            className="h-[45px] w-[49px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/monochrome--layer-group.svg"
          />
          <a className="[text-decoration:none] relative font-semibold text-[inherit] mq1050:text-8xl mq450:text-xl">
            TalentPulse
          </a>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[466px] gap-8 mq750:pb-[303px] mq750:box-border">
        <button className="cursor-pointer [border:none] py-[18px] px-[15px] bg-[transparent] self-stretch flex flex-row items-start justify-start relative gap-3">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-29xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle-67.svg"
          />
          <img
            className="h-[30px] w-[30px] relative min-h-[30px] z-[1]"
            alt=""
            src="/group1.svg"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative text-5xl font-semibold font-roboto text-white text-left inline-block min-w-[117px] z-[1] mq450:text-lgi">
              Dashboard
            </div>
          </div>
        </button>
        <div className="flex flex-row items-start justify-end py-0 px-[3px]">
          <div className="flex flex-col items-start justify-start gap-[49px]">
            <div className="flex flex-row items-start justify-start gap-3">
              <img
                className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/design-tools--grid.svg"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <h2 className="m-0 relative text-inherit font-semibold font-[inherit] mq450:text-lgi">
                  Skill Extraction
                </h2>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-3">
              <img
                className="h-[30px] w-[30px] relative"
                loading="lazy"
                alt=""
                src="/union.svg"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <h2 className="m-0 relative text-inherit font-semibold font-[inherit] mq450:text-lgi">
                  Skill Assessment
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[31px]">
        <div className="flex flex-col items-start justify-start gap-11">
          <div className="flex flex-row items-start justify-start gap-[11px]">
            <img
              className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
              loading="lazy"
              alt=""
              src="/user-interface--setting.svg"
            />
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <h2 className="m-0 relative text-inherit font-semibold font-[inherit] inline-block min-w-[90px] mq450:text-lgi">
                Settings
              </h2>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-2.5">
            <img
              className="h-[30px] w-[30px] relative overflow-hidden shrink-0 object-contain min-h-[30px]"
              loading="lazy"
              alt=""
              src="/user-interface--upload@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <h2 className="m-0 relative text-inherit font-semibold font-[inherit] inline-block min-w-[76px] mq450:text-lgi">
                Logout
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopbarContainer;
