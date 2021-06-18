import * as React from "react";
import { useLayer, useHover, Arrow } from "react-laag";
interface TooltipProps {
  children: any;
  content: string;
  placement?:
    | "bottom-start"
    | "bottom-end"
    | "bottom-center"
    | "top-start"
    | "top-center"
    | "top-end"
    | "left-end"
    | "left-center"
    | "left-start"
    | "right-end"
    | "right-center"
    | "right-start"
    | "center";
  width?: number;
  color?: string;
  bgColor?: string;
  borderColor?: string;
}
export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  placement,
  width,
  color,
  bgColor,
  borderColor,
}) => {
  const [isOver, hoverProps] = useHover();

  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen: isOver,
    placement: placement ? placement : "top-center",
    triggerOffset: 10,
  });

  let trigger;
  if (isReactText(children)) {
    trigger = (
      <span className="tooltip-text-wrapper" {...triggerProps} {...hoverProps}>
        {children}
      </span>
    );
  } else {
    trigger = React.cloneElement(children, {
      ...triggerProps,
      ...hoverProps,
    });
  }

  return (
    <>
      {trigger}
      {renderLayer(
        <>
          {isOver && (
            <div
              {...layerProps}
              style={{
                ...layerProps.style,
                zIndex: 11,
                backgroundColor: bgColor ? bgColor : "#1a1a1a",
                color: color ? color : "#fff",
                padding: "5px 10px",
                fontSize: 13,
                lineHeight: "18px",
                borderRadius: 5,
                border: `1px solid ${borderColor ? borderColor : "#1a1a1a"}`,
                boxShadow: "rgba(210, 210, 210, 0.5) 0px 0px 3px 0px",
                width: width ? width : "auto",
              }}
            >
              {content}
              <Arrow
                {...arrowProps}
                size={6}
                angle={45}
                roundness={1}
                borderWidth={1}
                borderColor={borderColor ? borderColor : "#1a1a1a"}
                backgroundColor={bgColor ? bgColor : "#1a1a1a"}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

function isReactText(children: any) {
  return ["string", "number"].includes(typeof children);
}

export default React.memo(Tooltip);
