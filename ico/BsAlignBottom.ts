import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlignBottom icon from Bootstrap Icons
 * @module
 */
export function BsAlignBottom(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"rect",attr:{"width":"4","height":"12",x:"6",y:"1","rx":"1"}},{tag:"path",attr:{d:"M1.5 14a.5.5 0 0 0 0 1zm13 1a.5.5 0 0 0 0-1zm-13 0h13v-1h-13z"},child:[]}]})(props);
}
export default BsAlignBottom;
