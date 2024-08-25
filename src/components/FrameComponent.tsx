import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-16 max-w-full text-left text-15xl text-midnightblue font-roboto ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-[11px]">
          <div className="h-[45px] w-[49px] relative">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
              alt=""
              src="/monochrome--layer-group.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden z-[1]"
              loading="lazy"
              alt=""
              src="/monochrome--layer-group.svg"
            />
          </div>
          <a className="[text-decoration:none] relative font-semibold text-[inherit] mq450:text-xl mq900:text-8xl">
            TalentPulse
          </a>
        </div>
      </div>
      <header className="flex-1 flex flex-row items-start justify-between relative gap-5 max-w-full text-left text-21xl text-deepskyblue-200 font-roboto">
        <div className="w-[298px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border mq1650:w-[111px]">
          <div className="flex flex-row items-start justify-start py-0 pl-0 pr-5 mq1650:hidden">
            <a className="[text-decoration:none] relative font-bold text-[inherit]">
              Overview
            </a>
            <a className="[text-decoration:none] relative font-bold text-[inherit] z-[1] ml-[-167px]">
              Overview
            </a>
          </div>
        </div>
        <div className="w-[562px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full">
          <TextField
            className="[border:none] bg-[transparent] self-stretch h-[55px] font-roboto text-lg text-gray-100 z-[2]"
            placeholder="Search..."
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "55px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                fontSize: "18px",
              },
              "& .MuiInputBase-input": { color: "#7b7878" },
            }}
          />
        </div>
        <img
          className="h-6 w-6 absolute !m-[0] bottom-[18px] left-[453px] overflow-hidden shrink-0 z-[3]"
          loading="lazy"
          alt=""
          src="/user-interface--magnifier.svg"
        />
        <div className="w-[196px] flex flex-row items-end justify-start gap-[46px]">
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[17px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-5">
              <div className="h-[27px] w-[27px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
                  alt=""
                  src="/user-interface--menu.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden z-[1]"
                  loading="lazy"
                  alt=""
                  src="/user-interface--menu.svg"
                />
              </div>
              <div className="h-[30px] w-[29px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/group-2.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-2.svg"
                />
              </div>
            </div>
          </div>
          <img
            className="h-[65px] w-[65px] relative rounded-[50%] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/ellipse-1@2x.png"
          />
        </div>
      </header>
    </div>
  );
};

export default FrameComponent;
