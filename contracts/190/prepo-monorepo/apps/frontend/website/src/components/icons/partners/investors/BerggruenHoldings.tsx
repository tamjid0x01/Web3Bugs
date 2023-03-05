import { FC, SVGProps } from 'react'

const BerggruenHoldings: FC<SVGProps<SVGSVGElement>> = ({ id, ...props }) => (
  <svg
    width="189"
    height="189"
    viewBox="0 0 189 189"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <circle cx="94.0704" cy="94.0704" r="94.0704" fill="#0E76BB" />
    <rect x="14" y="58" width="161" height="72" fill={`url(#${id})`} />
    <defs>
      <pattern
        id={id}
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
        className="animate-maintain-svg"
      >
        <use
          xlinkHref="#image0_103_96"
          transform="translate(0 -0.000462963) scale(0.0047619 0.0106481)"
        />
      </pattern>
      <image
        id="image0_103_96"
        width="210"
        height="94"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
)

export default BerggruenHoldings