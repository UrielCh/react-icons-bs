import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Explicit icon from Bootstrap Icons
 * @module
 */
export function BsExplicit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826z"}},{tag:"path",attr:{d:"M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z"},child:[]}]})(props);
}
export default BsExplicit;
