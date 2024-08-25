import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import TopbarContainer from "./TopbarContainer";
import ContentContainer from "./ContentContainer";

export type CandidateDashboardType = {
  className?: string;
};

const CandidateDashboard: FunctionComponent<CandidateDashboardType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1728px] rounded-31xl bg-whitesmoke-300 max-w-full overflow-hidden flex flex-row items-start justify-start pt-[47px] pb-0 pl-[52px] pr-[22px] box-border gap-[22px] leading-[normal] tracking-[normal] mq1050:pl-[26px] mq1050:box-border ${className}`}
    >
      <div className="h-[66px] w-[247px] relative rounded-29xl bg-deepskyblue-100 hidden" />
      <div className="h-[1117px] w-[321px] relative bg-white hidden max-w-full" />
      <img
        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
        alt=""
        src="/user-interface--magnifier.svg"
      />
      <div className="w-[247px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border mq1050:hidden">
        <TopbarContainer />
      </div>
      <section className="flex-1 flex flex-col items-end justify-start gap-[21px] max-w-[calc(100%_-_269px)] text-left text-xl text-gray-200 font-roboto mq1050:max-w-full">
        <ContentContainer />
        <div className="self-stretch bg-whitesmoke-200 flex flex-col items-start justify-start pt-0 px-[26px] pb-[122px] box-border gap-6 max-w-full mq750:pb-[51px] mq750:box-border mq1050:pb-[79px] mq1050:box-border">
          <div className="self-stretch shadow-[0px_2px_4px_-2px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start pt-6 px-[26px] pb-10 box-border gap-4 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start">
              <a className="[text-decoration:none] relative leading-[28px] font-bold text-[inherit] inline-block min-w-[92.1px] mq450:text-base mq450:leading-[22px]">
                Overview
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full text-base lg:flex-wrap">
              <div className="flex-[0.932] flex flex-col items-start justify-start py-0 pl-0 pr-[29px] box-border min-w-[320px] max-w-full mq750:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="relative leading-[24px] font-semibold">
                      Profile Completion
                    </div>
                  </div>
                  <div className="self-stretch rounded-9980xl bg-gainsboro flex flex-row items-start justify-start">
                    <div className="h-4 w-[298px] relative rounded-9980xl bg-deepskyblue-100" />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start text-sm text-dimgray">
                    <div className="relative leading-[20px] inline-block min-w-[89.8px]">
                      75% complete
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[320px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="w-[191.9px] relative leading-[24px] font-semibold inline-block shrink-0">
                    Upcoming Assessments
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-sm text-dimgray">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="w-[259.9px] relative leading-[20px] inline-block shrink-0">
                      JavaScript Assessment - Oct 10, 2023
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="w-[234.7px] relative leading-[20px] inline-block shrink-0">
                      Python Assessment - Oct 15, 2023
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[320px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="w-[161.2px] relative leading-[24px] font-semibold inline-block shrink-0">
                    Recent Notifications
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-sm text-dimgray">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="w-[193px] relative leading-[20px] inline-block shrink-0">
                      Profile updated successfully
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="w-[244.5px] relative leading-[20px] inline-block shrink-0">
                      New assessment available: React.js
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_2px_4px_-2px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start py-6 px-[26px] box-border gap-4 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start">
              <h3 className="m-0 w-[182px] relative text-inherit leading-[28px] font-bold font-[inherit] inline-block shrink-0 mq450:text-base mq450:leading-[22px]">
                Resume and Skills
              </h3>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[42px] max-w-full text-base lg:flex-wrap mq750:gap-[21px]">
              <div className="w-[598px] flex flex-col items-start justify-start gap-2 min-w-[598px] shrink-0 max-w-full lg:flex-1 mq1050:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="relative leading-[24px] font-semibold">
                    Uploaded Resume
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-whitesmoke-100 border-gainsboro border-[1px] border-solid flex flex-col items-start justify-start pt-[15px] pb-3.5 pl-[17px] pr-4 gap-2 text-sm text-dimgray">
                  <div className="self-stretch h-5 flex flex-row items-start justify-start pt-0 px-0 pb-px box-border">
                    <div className="mt-[-1px] relative leading-[20px] inline-block min-w-[73.7px]">
                      resume.pdf
                    </div>
                  </div>
                  <Button
                    className="w-[68.6px] h-10"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#4faee4",
                      borderRadius: "8px",
                      "&:hover": { background: "#4faee4" },
                      width: 68.6,
                      height: 40,
                    }}
                  >
                    View
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[416px] shrink-0 max-w-full mq750:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-2">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="w-[121.7px] relative leading-[24px] font-semibold inline-block shrink-0">
                      Extracted Skills
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-sm text-dimgray">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="relative leading-[20px] inline-block min-w-[72.4px]">
                        JavaScript
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="w-[48.3px] relative leading-[20px] inline-block shrink-0">
                        Python
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="w-[54.8px] relative leading-[20px] inline-block shrink-0">
                        React.js
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="w-[52.6px] relative leading-[20px] inline-block shrink-0">
                        Node.js
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[291.8px] flex flex-row items-start justify-start gap-[13.2px]">
                  <Button
                    className="h-10 flex-1 shrink-0"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#16a34a",
                      borderRadius: "8px",
                      "&:hover": { background: "#16a34a" },
                      height: 40,
                    }}
                  >
                    Update Skills
                  </Button>
                  <Button
                    className="h-10 flex-1 shrink-0"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#2563eb",
                      borderRadius: "8px",
                      "&:hover": { background: "#2563eb" },
                      height: 40,
                    }}
                  >
                    Confirm Skills
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[374px] shadow-[0px_2px_4px_-2px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-6 px-[26px] pb-[322px] box-border gap-4 max-w-full mq1050:pt-5 mq1050:pb-[209px] mq1050:box-border mq450:pb-[136px] mq450:box-border">
            <div className="self-stretch flex flex-row items-start justify-start shrink-0">
              <h3 className="m-0 w-[133.8px] relative text-inherit leading-[28px] font-bold font-[inherit] inline-block shrink-0 mq450:text-base mq450:leading-[22px]">
                Assessments
              </h3>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[150px] box-border gap-4 min-h-[432px] shrink-0 max-w-full text-base mq450:pb-[97px] mq450:box-border">
              <div className="self-stretch rounded-lg bg-whitesmoke-100 border-gainsboro border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[15px] pb-3.5 pl-[18px] pr-4 gap-2 max-w-full">
                <div className="self-stretch h-6 flex flex-row items-start justify-start pt-0 px-0 pb-px box-border">
                  <div className="mt-[-1px] w-[186.5px] relative leading-[24px] font-semibold inline-block shrink-0">
                    JavaScript Assessment
                  </div>
                </div>
                <div className="self-stretch h-5 flex flex-row items-start justify-start pt-0 px-0 pb-px box-border max-w-full text-sm text-dimgray">
                  <div className="mt-[-1px] w-[493.7px] relative leading-[20px] inline-block shrink-0 max-w-[calc(100%_-_0px)]">
                    Test your knowledge in JavaScript with this comprehensive
                    assessment.
                  </div>
                </div>
                <Button
                  className="w-[72.4px] h-10"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#4faee4",
                    borderRadius: "8px",
                    "&:hover": { background: "#4faee4" },
                    width: 72.4,
                    height: 40,
                  }}
                >
                  Start
                </Button>
              </div>
              <div className="self-stretch rounded-lg bg-whitesmoke-100 border-gainsboro border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[15px] pb-3.5 pl-[18px] pr-4 gap-2 max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="w-[158px] relative leading-[24px] font-semibold inline-block shrink-0">
                    Python Assessment
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start max-w-full text-sm text-dimgray">
                  <div className="w-[447.6px] relative leading-[20px] inline-block shrink-0 max-w-full">
                    Evaluate your Python skills with a series of challenging
                    questions.
                  </div>
                </div>
                <Button
                  className="w-[72.4px] h-10"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#4faee4",
                    borderRadius: "8px",
                    "&:hover": { background: "#4faee4" },
                    width: 72.4,
                    height: 40,
                  }}
                >
                  Start
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CandidateDashboard;
