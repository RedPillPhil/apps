import Icon from '@ant-design/icons';
import { CustomIconComponentProps, IconComponentProps } from '@ant-design/icons/lib/components/Icon';
import React from 'react';

export type IconProps = Pick<
  IconComponentProps,
  | 'max'
  | 'required'
  | 'default'
  | 'high'
  | 'low'
  | 'disabled'
  | 'start'
  | 'open'
  | 'media'
  | 'hidden'
  | 'cite'
  | 'data'
  | 'dir'
  | 'form'
  | 'label'
  | 'slot'
  | 'span'
  | 'style'
  | 'summary'
  | 'title'
  | 'pattern'
  | 'async'
  | 'defer'
  | 'manifest'
  | 'color'
  | 'content'
  | 'size'
  | 'wrap'
  | 'multiple'
  | 'height'
  | 'rotate'
  | 'translate'
  | 'width'
  | 'prefix'
  | 'src'
  | 'children'
  | 'key'
  | 'list'
  | 'step'
  | 'value'
  | 'aria-label'
  | 'viewBox'
  | 'component'
  | 'ariaLabel'
  | 'spin'
  | 'accept'
  | 'acceptCharset'
  | 'action'
  | 'allowFullScreen'
  | 'allowTransparency'
  | 'alt'
  | 'as'
  | 'autoComplete'
  | 'autoFocus'
  | 'autoPlay'
  | 'capture'
  | 'cellPadding'
  | 'cellSpacing'
  | 'charSet'
  | 'challenge'
  | 'checked'
  | 'classID'
  | 'cols'
  | 'colSpan'
  | 'controls'
  | 'coords'
  | 'crossOrigin'
  | 'dateTime'
  | 'download'
  | 'encType'
  | 'formAction'
  | 'formEncType'
  | 'formMethod'
  | 'formNoValidate'
  | 'formTarget'
  | 'frameBorder'
  | 'headers'
  | 'href'
  | 'hrefLang'
  | 'htmlFor'
  | 'httpEquiv'
  | 'integrity'
  | 'keyParams'
  | 'keyType'
  | 'kind'
  | 'loop'
  | 'marginHeight'
  | 'marginWidth'
  | 'maxLength'
  | 'mediaGroup'
  | 'method'
  | 'min'
  | 'minLength'
  | 'muted'
  | 'name'
  | 'nonce'
  | 'noValidate'
  | 'optimum'
  | 'placeholder'
  | 'playsInline'
  | 'poster'
  | 'preload'
  | 'readOnly'
  | 'rel'
  | 'reversed'
  | 'rows'
  | 'rowSpan'
  | 'sandbox'
  | 'scope'
  | 'scoped'
  | 'scrolling'
  | 'seamless'
  | 'selected'
  | 'shape'
  | 'sizes'
  | 'srcDoc'
  | 'srcLang'
  | 'srcSet'
  | 'target'
  | 'type'
  | 'useMap'
  | 'wmode'
  | 'defaultChecked'
  | 'defaultValue'
  | 'suppressContentEditableWarning'
  | 'suppressHydrationWarning'
  | 'accessKey'
  | 'className'
  | 'contentEditable'
  | 'contextMenu'
  | 'draggable'
  | 'id'
  | 'lang'
  | 'spellCheck'
  | 'tabIndex'
  | 'radioGroup'
  | 'role'
  | 'about'
  | 'datatype'
  | 'inlist'
  | 'property'
  | 'resource'
  | 'typeof'
  | 'vocab'
  | 'autoCapitalize'
  | 'autoCorrect'
  | 'autoSave'
  | 'itemProp'
  | 'itemScope'
  | 'itemType'
  | 'itemID'
  | 'itemRef'
  | 'results'
  | 'security'
  | 'unselectable'
  | 'inputMode'
  | 'is'
  | 'aria-activedescendant'
  | 'aria-atomic'
  | 'aria-autocomplete'
  | 'aria-busy'
  | 'aria-checked'
  | 'aria-colcount'
  | 'aria-colindex'
  | 'aria-colspan'
  | 'aria-controls'
  | 'aria-current'
  | 'aria-describedby'
  | 'aria-details'
  | 'aria-disabled'
  | 'aria-dropeffect'
  | 'aria-errormessage'
  | 'aria-expanded'
  | 'aria-flowto'
  | 'aria-grabbed'
  | 'aria-haspopup'
  | 'aria-hidden'
  | 'aria-invalid'
  | 'aria-keyshortcuts'
  | 'aria-labelledby'
  | 'aria-level'
  | 'aria-live'
  | 'aria-modal'
  | 'aria-multiline'
  | 'aria-multiselectable'
  | 'aria-orientation'
  | 'aria-owns'
  | 'aria-placeholder'
  | 'aria-posinset'
  | 'aria-pressed'
  | 'aria-readonly'
  | 'aria-relevant'
  | 'aria-required'
  | 'aria-roledescription'
  | 'aria-rowcount'
  | 'aria-rowindex'
  | 'aria-rowspan'
  | 'aria-selected'
  | 'aria-setsize'
  | 'aria-sort'
  | 'aria-valuemax'
  | 'aria-valuemin'
  | 'aria-valuenow'
  | 'aria-valuetext'
  | 'dangerouslySetInnerHTML'
  | 'onCopy'
  | 'onCopyCapture'
  | 'onCut'
  | 'onCutCapture'
  | 'onPaste'
  | 'onPasteCapture'
  | 'onCompositionEnd'
  | 'onCompositionEndCapture'
  | 'onCompositionStart'
  | 'onCompositionStartCapture'
  | 'onCompositionUpdate'
  | 'onCompositionUpdateCapture'
  | 'onFocus'
  | 'onFocusCapture'
  | 'onBlur'
  | 'onBlurCapture'
  | 'onChange'
  | 'onChangeCapture'
  | 'onBeforeInput'
  | 'onBeforeInputCapture'
  | 'onInput'
  | 'onInputCapture'
  | 'onReset'
  | 'onResetCapture'
  | 'onSubmit'
  | 'onSubmitCapture'
  | 'onInvalid'
  | 'onInvalidCapture'
  | 'onLoad'
  | 'onLoadCapture'
  | 'onError'
  | 'onErrorCapture'
  | 'onKeyDown'
  | 'onKeyDownCapture'
  | 'onKeyPress'
  | 'onKeyPressCapture'
  | 'onKeyUp'
  | 'onKeyUpCapture'
  | 'onAbort'
  | 'onAbortCapture'
  | 'onCanPlay'
  | 'onCanPlayCapture'
  | 'onCanPlayThrough'
  | 'onCanPlayThroughCapture'
  | 'onDurationChange'
  | 'onDurationChangeCapture'
  | 'onEmptied'
  | 'onEmptiedCapture'
  | 'onEncrypted'
  | 'onEncryptedCapture'
  | 'onEnded'
  | 'onEndedCapture'
  | 'onLoadedData'
  | 'onLoadedDataCapture'
  | 'onLoadedMetadata'
  | 'onLoadedMetadataCapture'
  | 'onLoadStart'
  | 'onLoadStartCapture'
  | 'onPause'
  | 'onPauseCapture'
  | 'onPlay'
  | 'onPlayCapture'
  | 'onPlaying'
  | 'onPlayingCapture'
  | 'onProgress'
  | 'onProgressCapture'
  | 'onRateChange'
  | 'onRateChangeCapture'
  | 'onSeeked'
  | 'onSeekedCapture'
  | 'onSeeking'
  | 'onSeekingCapture'
  | 'onStalled'
  | 'onStalledCapture'
  | 'onSuspend'
  | 'onSuspendCapture'
  | 'onTimeUpdate'
  | 'onTimeUpdateCapture'
  | 'onVolumeChange'
  | 'onVolumeChangeCapture'
  | 'onWaiting'
  | 'onWaitingCapture'
  | 'onAuxClick'
  | 'onAuxClickCapture'
  | 'onClick'
  | 'onClickCapture'
  | 'onContextMenu'
  | 'onContextMenuCapture'
  | 'onDoubleClick'
  | 'onDoubleClickCapture'
  | 'onDrag'
  | 'onDragCapture'
  | 'onDragEnd'
  | 'onDragEndCapture'
  | 'onDragEnter'
  | 'onDragEnterCapture'
  | 'onDragExit'
  | 'onDragExitCapture'
  | 'onDragLeave'
  | 'onDragLeaveCapture'
  | 'onDragOver'
  | 'onDragOverCapture'
  | 'onDragStart'
  | 'onDragStartCapture'
  | 'onDrop'
  | 'onDropCapture'
  | 'onMouseDown'
  | 'onMouseDownCapture'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'onMouseMove'
  | 'onMouseMoveCapture'
  | 'onMouseOut'
  | 'onMouseOutCapture'
  | 'onMouseOver'
  | 'onMouseOverCapture'
  | 'onMouseUp'
  | 'onMouseUpCapture'
  | 'onSelect'
  | 'onSelectCapture'
  | 'onTouchCancel'
  | 'onTouchCancelCapture'
  | 'onTouchEnd'
  | 'onTouchEndCapture'
  | 'onTouchMove'
  | 'onTouchMoveCapture'
  | 'onTouchStart'
  | 'onTouchStartCapture'
  | 'onPointerDown'
  | 'onPointerDownCapture'
  | 'onPointerMove'
  | 'onPointerMoveCapture'
  | 'onPointerUp'
  | 'onPointerUpCapture'
  | 'onPointerCancel'
  | 'onPointerCancelCapture'
  | 'onPointerEnter'
  | 'onPointerEnterCapture'
  | 'onPointerLeave'
  | 'onPointerLeaveCapture'
  | 'onPointerOver'
  | 'onPointerOverCapture'
  | 'onPointerOut'
  | 'onPointerOutCapture'
  | 'onGotPointerCapture'
  | 'onGotPointerCaptureCapture'
  | 'onLostPointerCapture'
  | 'onLostPointerCaptureCapture'
  | 'onScroll'
  | 'onScrollCapture'
  | 'onWheel'
  | 'onWheelCapture'
  | 'onAnimationStart'
  | 'onAnimationStartCapture'
  | 'onAnimationEnd'
  | 'onAnimationEndCapture'
  | 'onAnimationIteration'
  | 'onAnimationIterationCapture'
  | 'onTransitionEnd'
  | 'onTransitionEndCapture'
> &
  React.RefAttributes<HTMLSpanElement>;

export const svgIconFactory =
  (
    Component: React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>>
    // eslint-disable-next-line react/display-name
  ) =>
  (props: IconProps) =>
    <Icon component={Component} {...props} />;
