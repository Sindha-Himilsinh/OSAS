import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type DashboardType = {
  className?: string;
  dashboard?: boolean;

  /** Style props */
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propPadding?: CSSProperties["padding"];
  propPosition1?: CSSProperties["position"];
  propTop1?: CSSProperties["top"];
  propLeft1?: CSSProperties["left"];
  propColor?: CSSProperties["color"];
  propHeight1?: CSSProperties["height"];
  propMargin?: CSSProperties["margin"];
};

const Dashboard: FunctionComponent<DashboardType> = ({
  className = "",
  dashboard,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propHeight,
  propFlexDirection,
  propPadding,
  propPosition1,
  propTop1,
  propLeft1,
  propColor,
  propHeight1,
  propMargin,
}) => {
  const dashboardStyle: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      height: propHeight,
      flexDirection: propFlexDirection,
      padding: propPadding,
    };
  }, [
    propPosition,
    propTop,
    propLeft,
    propWidth,
    propHeight,
    propFlexDirection,
    propPadding,
  ]);

  const dashboard1Style: CSSProperties = useMemo(() => {
    return {
      position: propPosition1,
      top: propTop1,
      left: propLeft1,
      color: propColor,
      height: propHeight1,
      margin: propMargin,
    };
  }, [propPosition1, propTop1, propLeft1, propColor, propHeight1, propMargin]);

  return (
    !dashboard && (
      <div
        className={`absolute top-[208px] left-[109px] w-[117px] h-7 text-left text-5xl text-aliceblue font-roboto ${className}`}
        style={dashboardStyle}
      >
        <div
          className="absolute top-[0%] left-[0%] font-semibold inline-block min-w-[117px] w-full h-full mq450:text-lgi"
          style={dashboard1Style}
        >
          Dashboard
        </div>
      </div>
    )
  );
};

export default Dashboard;
