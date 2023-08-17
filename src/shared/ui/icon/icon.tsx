import { forwardRef, memo, Ref, SVGProps } from 'react'

import icons from '@/app/assets/icons/sprite.svg'

const SvgComponent = (
  { id, ...rest }: SVGProps<SVGSVGElement> & { id: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...rest}
  >
    <use xlinkHref={icons + `#${id}`}></use>
  </svg>
)

export const Icon = memo(forwardRef(SvgComponent))
