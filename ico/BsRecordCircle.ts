import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * RecordCircle icon from Bootstrap Icons
 * @module
 */
export function BsRecordCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}},{tag:"path",attr:{d:"M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"},child:[]}]})(props);
}
export default BsRecordCircle;
