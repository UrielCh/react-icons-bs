import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HCircle icon from Bootstrap Icons
 * @module
 */
export function BsHCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5-3.998V12H9.67V8.455H6.33V12H5V4.002h1.33v3.322h3.34V4.002z"}}]})(props);
}
export default BsHCircle;
