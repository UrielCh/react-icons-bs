import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DoorClosed icon from Bootstrap Icons
 * @module
 */
export function BsDoorClosed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3zm1 13h8V2H4z"}},{tag:"path",attr:{d:"M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0"},child:[]}]})(props);
}
export default BsDoorClosed;
