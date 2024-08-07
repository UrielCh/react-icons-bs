import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Mouse2Fill icon from Bootstrap Icons
 * @module
 */
export function BsMouse2Fill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M7.5.026C4.958.286 3 2.515 3 5.188V5.5h4.5zm1 0V5.5H13v-.312C13 2.515 11.042.286 8.5.026M13 6.5H3v4.313C3 13.658 5.22 16 8 16s5-2.342 5-5.188z"}}]})(props);
}
export default BsMouse2Fill;
