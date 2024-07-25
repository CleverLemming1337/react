import type React from 'react'
import styled from 'styled-components'
import type {SxProp} from '../sx'
import sx from '../sx'
import getGlobalFocusStyles from '../internal/utils/getGlobalFocusStyles'
import type {TooltipDirection} from '../TooltipV2'

export const StyledButton = styled.button<SxProp>`
  ${getGlobalFocusStyles('-2px')};
  ${sx};
`

export type VariantType = 'default' | 'primary' | 'invisible' | 'danger'

export type Size = 'small' | 'medium' | 'large'

export type AlignContent = 'start' | 'center'

export type ButtonA11yProps =
  | {'aria-label': string; 'aria-labelledby'?: undefined}
  | {'aria-label'?: undefined; 'aria-labelledby': string}

export type ButtonBaseProps = {
  /**
   * Determine's the styles on a button one of 'default' | 'primary' | 'invisible' | 'danger'
   */
  variant?: VariantType
  /**
   * Size of button and fontSize of text in button
   */
  size?: Size
  /**
   * Items that are disabled can not be clicked, selected, or navigated through.
   */
  disabled?: boolean
  /**
   * Allow button width to fill its container.
   */
  block?: boolean
  /**
   * When true, the button is in a loading state.
   */
  loading?: boolean
  /**
   * The content to announce to screen readers when loading.
   */
  loadingAnnouncement?: string
  /*
   * Whether the button looks visually disabled, but can still accept all the same
   * interactions as an enabled button.
   */
  inactive?: boolean
  /**
   * Whether the button label should wrap to multiple lines of it is longer than the button width.
   */
  labelWrap?: boolean
} & SxProp &
  React.ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  /**
   * Content alignment for when visuals are present
   */
  alignContent?: AlignContent

  /**
   * The icon for the IconButton
   */
  icon?: React.ElementType | null

  /**
   * The leading visual which comes before the button content
   */
  leadingVisual?: React.ElementType | null

  /**
   * The trailing visual which comes after the button content
   */
  trailingVisual?: React.ElementType | null

  /**
   * Trailing action appears to the right of the trailing visual and is always locked to the end
   */
  trailingAction?: React.ElementType | null

  children?: React.ReactNode

  count?: number
} & ButtonBaseProps

export type IconButtonProps = ButtonA11yProps & {
  /** Provide an octicon. It will be placed in the center of the button */
  icon: React.ElementType
  /** Do not use. This is planned to be a temporary prop until the default tooltip on icon buttons are fully rolled out. */
  unsafeDisableTooltip?: boolean
  /** If `description` is provided, we will use a Tooltip to describe the button. Then `aria-label` is used to label the button. */
  description?: string
  /** Sets where the tooltip renders in relation to the target. */
  tooltipDirection?: TooltipDirection
  keyshortcuts?: string
} & Omit<ButtonBaseProps, 'aria-label' | 'aria-labelledby'>

// adopted from React.AnchorHTMLAttributes
export type LinkButtonProps = {
  underline?: boolean
  download?: string
  href?: string
  hrefLang?: string
  media?: string
  ping?: string
  rel?: string
  target?: string
  type?: string
  referrerPolicy?: React.AnchorHTMLAttributes<HTMLAnchorElement>['referrerPolicy']
}
