import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleFill icon from Bootstrap Icons
 * @module
 */
export function BsCircleFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"circle",attr:{"cx":"8","cy":"8","r":"8"}}]})(props);
}
export default BsCircleFill;
