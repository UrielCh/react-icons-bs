import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MusicNote icon from Bootstrap Icons
 * @module
 */
export function BsMusicNote(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2"}},{tag:"path",attr:{fillRule:"evenodd",d:"M9 3v10H8V3z"},child:[]},{tag:"path",attr:{d:"M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z"},child:[]}]})(props);
}
export default BsMusicNote;
