import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * EnvelopePaperFill icon from Bootstrap Icons
 * @module
 */
export function BsEnvelopePaperFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75zM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765M16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516zm-8 3.3 5.693-3.162L0 6.873v6.5Z"}}]})(props);
}
export default BsEnvelopePaperFill;
