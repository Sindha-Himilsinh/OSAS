import { FunctionComponent } from "react";
import Dashboard from "../components/Dashboard";
import FrameComponent from "../components/FrameComponent";

const AdminDashboard: FunctionComponent = () => {
  return (
    <div className="w-full h-[1117px] relative rounded-31xl bg-whitesmoke-300 overflow-hidden leading-[normal] tracking-[normal] text-left text-lg text-gray-100 font-roboto mq1650:h-auto mq1650:min-h-[1117]">
      <div className="absolute top-[188px] left-[41px] rounded-29xl bg-deepskyblue-100 w-[247px] h-[66px] hidden" />
      <Dashboard dashboard={false} />
      <div className="absolute top-[52px] left-[785px] rounded-3xs bg-white w-[562px] h-[55px] hidden" />
      <img
        className="absolute top-[70px] left-[815px] w-6 h-6 overflow-hidden hidden"
        alt=""
        src="/user-interface--magnifier.svg"
      />
      <div className="absolute top-[71px] left-[844px] hidden min-w-[70px]">
        Search...
      </div>
      <img
        className="absolute top-[47px] left-[1603px] rounded-[50%] w-[65px] h-[65px] object-cover"
        alt=""
        src="/ellipse-1@2x.png"
      />
      <img
        className="absolute h-[2.69%] w-[1.74%] top-[18.44%] right-[94.39%] bottom-[78.87%] left-[3.88%] max-w-full overflow-hidden max-h-full z-[1]"
        alt=""
        src="/group.svg"
      />
      <img
        className="relative w-[30px] h-[30px] hidden"
        alt=""
        src="/union.svg"
      />
      <div className="absolute top-[188px] left-[41px] rounded-29xl bg-deepskyblue-100 w-[247px] h-[66px] z-[2]" />
      <img
        className="absolute top-[186.5px] left-[-1751.5px] rounded-29xl w-[247px] h-[66px]"
        loading="lazy"
        alt=""
        src="/rectangle-70.svg"
      />
      <div className="absolute top-[949px] left-[83px] flex flex-col items-start justify-start gap-11 text-5xl text-steelblue">
        <div className="flex flex-row items-end justify-start gap-[11px]">
          <div className="h-[30px] w-[30px] relative">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
              alt=""
              src="/user-interface--setting.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden z-[1]"
              loading="lazy"
              alt=""
              src="/user-interface--setting.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start">
            <h3 className="m-0 relative text-inherit font-semibold font-[inherit] inline-block min-w-[90px] mq450:text-lgi">
              Settings
            </h3>
            <h3 className="m-0 relative text-inherit font-semibold font-[inherit] inline-block min-w-[90px] z-[1] ml-[-90px] mq450:text-lgi">
              Settings
            </h3>
          </div>
        </div>
        <div className="flex flex-row items-end justify-start py-0 pl-0 pr-[15px] gap-2.5">
          <div className="h-[30px] w-[30px] relative">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-contain"
              alt=""
              src="/user-interface--upload@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/user-interface--upload@2x.png"
            />
          </div>
          <div className="flex flex-row items-start justify-start">
            <h3 className="m-0 relative text-inherit font-semibold font-[inherit] inline-block min-w-[76px] mq450:text-lgi">
              Logout
            </h3>
            <h3 className="m-0 relative text-inherit font-semibold font-[inherit] inline-block min-w-[76px] z-[1] ml-[-76px] mq450:text-lgi">
              Logout
            </h3>
          </div>
        </div>
      </div>
      <main className="absolute top-[47px] left-[0px] w-[1668px] flex flex-row items-start justify-start py-0 pl-[57px] pr-0 box-border gap-[1545px] max-w-full mq1650:flex-wrap">
        <div className="ml-[-1812px] h-[293.5px] flex flex-col items-start justify-start pt-[141px] px-0 pb-0 box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[20.5px] shrink-0">
            <img
              className="w-[247px] flex-1 relative rounded-29xl max-h-full z-[1]"
              alt=""
              src="/rectangle-67.svg"
            />
            <div className="flex flex-row items-start justify-start py-0 pl-5 pr-0">
              <img
                className="h-[66px] w-[247px] relative rounded-29xl"
                loading="lazy"
                alt=""
                src="/rectangle-66.svg"
              />
            </div>
          </div>
        </div>
        <section className="w-[1611px] flex flex-col items-start justify-start gap-[27px] shrink-0 max-w-full text-left text-5xl text-steelblue font-roboto">
          <FrameComponent />
          <div className="w-[1552px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[57px] max-w-full mq1650:flex-wrap">
              <div className="w-[203px] flex flex-col items-start justify-start pt-[67px] px-0 pb-0 box-border">
                <div className="self-stretch flex flex-row items-start justify-start gap-2.5">
                  <div className="flex flex-col items-end justify-start gap-[59.5px]">
                    <div className="flex flex-row items-start justify-end py-0 pl-1 pr-0.5">
                      <img
                        className="h-[30px] w-[30px] relative z-[3]"
                        loading="lazy"
                        alt=""
                        src="/group-1.svg"
                      />
                    </div>
                    <div className="w-9 h-[30px] relative">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full"
                        alt=""
                        src="/vector.svg"
                      />
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-end py-0 pl-1 pr-0.5">
                      <img
                        className="h-[30px] w-[30px] relative z-[1]"
                        loading="lazy"
                        alt=""
                        src="/union.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[49px]">
                      <Dashboard
                        dashboard
                        propPosition="unset"
                        propTop="unset"
                        propLeft="unset"
                        propWidth="unset"
                        propHeight="unset"
                        propFlexDirection="row"
                        propPadding="0px 20px 0px 0px"
                        propPosition1="relative"
                        propTop1="unset"
                        propLeft1="unset"
                        propColor="#fff"
                        propHeight1="unset"
                        propMargin="0"
                      />
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0">
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <h3 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] mq450:text-lgi">
                            <p className="m-0 whitespace-pre-wrap">{`Performance  `}</p>
                            <p className="m-0">Assessment</p>
                          </h3>
                          <h3 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] z-[1] mt-[-56px] mq450:text-lgi">
                            <p className="m-0 whitespace-pre-wrap">{`Performance  `}</p>
                            <p className="m-0">Assessment</p>
                          </h3>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[9px]">
                        <h3 className="m-0 relative text-inherit font-semibold font-[inherit] mq450:text-lgi">
                          Job Matching
                        </h3>
                        <h3 className="m-0 relative text-inherit font-semibold font-[inherit] z-[1] ml-[-148px] mq450:text-lgi">
                          Job Matching
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-whitesmoke-200 flex flex-col items-start justify-start pt-6 px-6 pb-[235px] box-border gap-6 min-w-[832px] max-w-full text-xl text-gray-300 mq1275:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[23.5px] max-w-full mq1275:flex-wrap">
                  <div className="flex-1 shadow-[0px_2px_4px_-2px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start pt-6 pb-[62px] pl-6 pr-5 box-border gap-1.5 min-w-[296px] min-h-[156px] max-w-full">
                    <div className="relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                      Total Candidates
                    </div>
                    <b className="relative text-11xl leading-[36px] inline-block min-w-[52px] mq450:text-lg mq450:leading-[22px] mq900:text-5xl mq900:leading-[29px]">
                      150
                    </b>
                  </div>
                  <div className="flex-1 shadow-[0px_2px_4px_-2px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start pt-6 pb-[62px] pl-6 pr-5 box-border gap-1.5 min-w-[296px] min-h-[156px] max-w-full">
                    <div className="relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                      Ongoing Assessments
                    </div>
                    <b className="relative text-11xl leading-[36px] inline-block min-w-[18px] mq450:text-lg mq450:leading-[22px] mq900:text-5xl mq900:leading-[29px]">
                      8
                    </b>
                  </div>
                  <div className="flex-1 shadow-[0px_2px_4px_-2px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start p-6 box-border gap-2 min-w-[296px] max-w-full">
                    <div className="relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                      Recent Notifications
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-base">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[24px]">
                          Assessment for John Doe completed
                        </div>
                        <div className="relative leading-[24px]">
                          New candidate Jane Smith added
                        </div>
                        <div className="relative leading-[24px]">
                          Reminder: Assessment for Mike Johnson
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_2px_4px_-2px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start pt-6 px-6 pb-[25px] box-border gap-4 max-w-full">
                  <div className="relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                    Candidate List
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-base">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0.3px] max-w-full mq1650:flex-wrap">
                      <div className="h-10 w-[163px] flex flex-col items-start justify-start py-2 px-0 box-border gap-[8.3px]">
                        <div className="w-[121px] flex flex-row items-start justify-start py-0 px-[38px] box-border">
                          <b className="flex-1 relative leading-[24px] inline-block min-w-[45px] z-[1]">
                            Name
                          </b>
                        </div>
                        <div className="self-stretch h-px relative bg-gainsboro" />
                      </div>
                      <div className="h-10 w-[296px] flex flex-col items-start justify-start py-2 px-0 box-border gap-[8.3px]">
                        <div className="w-[255.7px] flex flex-row items-start justify-center py-0 px-5 box-border">
                          <b className="w-[41px] relative leading-[24px] inline-block shrink-0 min-w-[41px] z-[1]">
                            Email
                          </b>
                        </div>
                        <div className="self-stretch h-px relative bg-gainsboro" />
                      </div>
                      <div className="h-10 w-[175px] flex flex-col items-start justify-start py-2 pl-10 pr-0 box-border gap-[8.3px]">
                        <b className="w-12 relative leading-[24px] inline-block min-w-[48px] z-[1]">
                          Phone
                        </b>
                        <div className="ml-[-40.4px] w-[175.1px] h-px relative bg-gainsboro" />
                      </div>
                      <div className="h-10 w-[549px] flex flex-col items-start justify-start py-2 pl-[219px] pr-0 box-border gap-[8.3px] max-w-full">
                        <b className="w-14 relative leading-[24px] inline-block min-w-[56px] z-[1]">
                          Actions
                        </b>
                        <div className="ml-[-219.3px] w-[549.3px] h-px relative bg-gainsboro max-w-[167%] shrink-0" />
                      </div>
                    </div>
                    <div className="self-stretch h-[146px] flex flex-col items-start justify-start pt-0 px-0 pb-12 box-border max-w-full text-left mq1650:h-auto">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[0.3px] shrink-0 max-w-full mq1650:flex-wrap">
                        <div className="h-[49px] w-[163px] flex flex-col items-start justify-start pt-[13px] px-0 pb-3 box-border gap-3">
                          <div className="flex flex-row items-start justify-start py-0 px-4">
                            <div className="relative leading-[24px] inline-block min-w-[68px] z-[1]">
                              John Doe
                            </div>
                          </div>
                          <div className="self-stretch h-px relative bg-gainsboro shrink-0" />
                        </div>
                        <div className="h-[49px] w-[296px] flex flex-col items-start justify-start pt-[13px] px-0 pb-3 box-border gap-3">
                          <div className="flex flex-row items-start justify-start py-0 px-[15px]">
                            <div className="relative leading-[24px] whitespace-nowrap z-[1]">
                              john.doe@example.com
                            </div>
                          </div>
                          <div className="self-stretch h-px relative bg-gainsboro shrink-0" />
                        </div>
                        <div className="h-[49px] w-[175px] flex flex-col items-start justify-start pt-[13px] pb-3 pl-4 pr-0 box-border gap-3">
                          <div className="relative leading-[24px] inline-block min-w-[110px] z-[1]">
                            (123) 456-7890
                          </div>
                          <div className="ml-[-16.4px] w-[175.1px] h-px relative bg-gainsboro shrink-0" />
                        </div>
                        <div className="h-[49px] w-[549px] flex flex-col items-start justify-start pt-[9px] pb-2 pl-4 pr-0 box-border gap-2 max-w-full text-center text-white mq900:h-auto">
                          <div className="w-[403px] flex flex-row items-start justify-start gap-[12.5px] max-w-full mq900:flex-wrap">
                            <div className="rounded bg-dodgerblue flex flex-row items-start justify-start py-1 px-[11px] whitespace-nowrap z-[1]">
                              <div className="relative leading-[24px] inline-block min-w-[85px]">
                                View Profile
                              </div>
                            </div>
                            <div className="rounded bg-mediumspringgreen flex flex-row items-start justify-start py-1 px-2.5 z-[1]">
                              <div className="relative leading-[24px] inline-block min-w-[93px]">
                                Performance
                              </div>
                            </div>
                            <div className="flex-1 rounded bg-goldenrod flex flex-row items-start justify-start py-1 px-2 box-border min-w-[103px] whitespace-nowrap z-[1]">
                              <div className="flex-1 relative leading-[24px]">
                                Assessment Report
                              </div>
                            </div>
                          </div>
                          <div className="ml-[-16.3px] w-[549.3px] h-px relative bg-gainsboro max-w-[104%] shrink-0" />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[0.3px] shrink-0 max-w-full mq1650:flex-wrap">
                        <div className="h-[49px] w-[163px] flex flex-col items-start justify-start pt-3 px-0 pb-[13px] box-border gap-[12.7px]">
                          <div className="flex flex-row items-start justify-start py-0 px-4">
                            <div className="relative leading-[24px] inline-block min-w-[81px] z-[1]">
                              Jane Smith
                            </div>
                          </div>
                          <div className="self-stretch h-px relative bg-gainsboro shrink-0" />
                        </div>
                        <div className="h-[49px] w-[296px] flex flex-col items-start justify-start pt-3 px-0 pb-[13px] box-border gap-[12.7px]">
                          <div className="flex flex-row items-start justify-start py-0 px-[15px]">
                            <div className="relative leading-[24px] whitespace-nowrap z-[1]">
                              jane.smith@example.com
                            </div>
                          </div>
                          <div className="self-stretch h-px relative bg-gainsboro shrink-0" />
                        </div>
                        <div className="h-[49px] w-[175px] flex flex-col items-start justify-start pt-3 pb-[13px] pl-4 pr-0 box-border gap-[12.7px]">
                          <div className="relative leading-[24px] inline-block min-w-[110px] z-[1]">
                            (987) 654-3210
                          </div>
                          <div className="ml-[-16.4px] w-[175.1px] h-px relative bg-gainsboro shrink-0" />
                        </div>
                        <div className="h-[49px] w-[549px] flex flex-col items-start justify-start pt-2 pb-[9px] pl-4 pr-0 box-border gap-[8.7px] max-w-full text-center text-white mq900:h-auto">
                          <div className="w-[403px] flex flex-row items-start justify-start gap-[12.5px] max-w-full mq900:flex-wrap">
                            <div className="w-[107px] rounded bg-dodgerblue flex flex-row items-start justify-start py-1 px-[7px] box-border whitespace-nowrap z-[1]">
                              <div className="flex-1 relative leading-[24px] inline-block min-w-[93px]">
                                View Profile
                              </div>
                            </div>
                            <div className="rounded bg-mediumspringgreen flex flex-row items-start justify-start py-1 px-2.5 z-[1]">
                              <div className="relative leading-[24px] inline-block min-w-[93px]">
                                Performance
                              </div>
                            </div>
                            <div className="flex-1 rounded bg-goldenrod flex flex-row items-start justify-start py-1 px-2 box-border min-w-[103px] whitespace-nowrap z-[1]">
                              <div className="flex-1 relative leading-[24px]">
                                Assessment Report
                              </div>
                            </div>
                          </div>
                          <div className="ml-[-16.3px] w-[549.3px] h-px relative bg-gainsboro max-w-[104%] shrink-0" />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[0.3px] shrink-0 max-w-full mq1650:flex-wrap">
                        <div className="h-[49px] w-[163px] flex flex-col items-start justify-start pt-3 px-0 pb-[13px] box-border gap-[12.3px]">
                          <div className="flex flex-row items-start justify-start py-0 px-4">
                            <div className="relative leading-[24px] inline-block min-w-[101px] z-[1]">
                              Mike Johnson
                            </div>
                          </div>
                          <div className="self-stretch h-px relative bg-gainsboro shrink-0" />
                        </div>
                        <div className="h-[49px] w-[296px] flex flex-col items-start justify-start pt-3 px-0 pb-[13px] box-border gap-[12.3px]">
                          <div className="flex flex-row items-start justify-start py-0 px-[15px]">
                            <div className="relative leading-[24px] whitespace-nowrap z-[1]">
                              mike.johnson@example.com
                            </div>
                          </div>
                          <div className="self-stretch h-px relative bg-gainsboro shrink-0" />
                        </div>
                        <div className="h-[49px] w-[175px] flex flex-col items-start justify-start pt-3 pb-[13px] pl-4 pr-0 box-border gap-[12.3px]">
                          <div className="relative leading-[24px] inline-block min-w-[110px] z-[1]">
                            (555) 123-4567
                          </div>
                          <div className="ml-[-16.4px] w-[175.1px] h-px relative bg-gainsboro shrink-0" />
                        </div>
                        <div className="h-[49px] w-[549px] flex flex-col items-start justify-start pt-2 pb-[9px] pl-4 pr-0 box-border gap-[8.3px] max-w-full text-center text-white mq900:h-auto">
                          <div className="w-[403px] flex flex-row items-start justify-start gap-[12.5px] max-w-full mq900:flex-wrap">
                            <div className="rounded bg-dodgerblue flex flex-row items-start justify-start py-1 px-[11px] whitespace-nowrap z-[1]">
                              <div className="relative leading-[24px] inline-block min-w-[85px]">
                                View Profile
                              </div>
                            </div>
                            <div className="rounded bg-mediumspringgreen flex flex-row items-start justify-start py-1 px-2.5 z-[1]">
                              <div className="relative leading-[24px] inline-block min-w-[93px]">
                                Performance
                              </div>
                            </div>
                            <div className="flex-1 rounded bg-goldenrod flex flex-row items-start justify-start py-1 px-2 box-border min-w-[103px] whitespace-nowrap z-[1]">
                              <div className="flex-1 relative leading-[24px]">
                                Assessment Report
                              </div>
                            </div>
                          </div>
                          <div className="ml-[-16.3px] w-[549.3px] h-px relative bg-gainsboro max-w-[104%] shrink-0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
