import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * EggFill icon from Bootstrap Icons
 * @module
 */
export function BsEggFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10"}}]})(props);
}
export default BsEggFill;
