/* @ds-bundle: {"format":4,"namespace":"NoKasteyevDesignSystem_d8f09b","components":[{"name":"FactList","sourcePath":"components/content/FactList.jsx"},{"name":"LifeTimeline","sourcePath":"components/content/LifeTimeline.jsx"},{"name":"Prose","sourcePath":"components/content/Prose.jsx"},{"name":"PullQuote","sourcePath":"components/content/PullQuote.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"ArtistCard","sourcePath":"components/gallery/ArtistCard.jsx"},{"name":"ArtworkCard","sourcePath":"components/gallery/ArtworkCard.jsx"},{"name":"ArtworkPlate","sourcePath":"components/gallery/ArtworkPlate.jsx"},{"name":"EraBackdrop","sourcePath":"components/gallery/EraBackdrop.jsx"},{"name":"Lightbox","sourcePath":"components/gallery/Lightbox.jsx"},{"name":"IndexOverlay","sourcePath":"components/navigation/IndexOverlay.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"TimelineScrubber","sourcePath":"components/navigation/TimelineScrubber.jsx"}],"sourceHashes":{"components/content/FactList.jsx":"d1eff8ab526a","components/content/LifeTimeline.jsx":"af26ae8eca2e","components/content/Prose.jsx":"499e32ea8393","components/content/PullQuote.jsx":"47572fcbc5a5","components/content/SectionHeading.jsx":"cc567061f37b","components/core/Button.jsx":"302828e896d2","components/core/Icon.jsx":"ca4e86e22e05","components/core/IconButton.jsx":"3db19cce436f","components/core/Tag.jsx":"470368a9561f","components/core/Wordmark.jsx":"485772c727e7","components/gallery/ArtistCard.jsx":"96641ce47c0b","components/gallery/ArtworkCard.jsx":"80d10e8d3a09","components/gallery/ArtworkPlate.jsx":"b1e648d320c1","components/gallery/EraBackdrop.jsx":"772faed009e4","components/gallery/Lightbox.jsx":"6e6a0f5dba9a","components/navigation/IndexOverlay.jsx":"df244e1809c1","components/navigation/SiteHeader.jsx":"8eec2a288064","components/navigation/TimelineScrubber.jsx":"bc997840b507","ui_kits/gallery/App.jsx":"27999fa1fbe2","ui_kits/gallery/ArtistScreen.jsx":"70dc3dc654bf","ui_kits/gallery/EraScreen.jsx":"d240bf1a20e1","ui_kits/gallery/GalleryScreen.jsx":"9c78605643db","ui_kits/gallery/HomeScreen.jsx":"3f7a8434f080","ui_kits/gallery/data.js":"6420ef2072a0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NoKasteyevDesignSystem_d8f09b = window.NoKasteyevDesignSystem_d8f09b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/FactList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FactList({
  items = [],
  columns = 1,
  onArchive = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
      gap: 'var(--space-5) var(--space-8)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '1px solid ' + (onArchive ? 'var(--line-on-archive)' : 'var(--line-hairline)'),
      paddingTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-micro)',
      textTransform: 'uppercase',
      color: onArchive ? 'var(--paper-3)' : 'var(--text-faint)',
      marginBottom: 'var(--space-2)'
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-body-lg)',
      color: onArchive ? 'var(--text-on-archive)' : 'var(--text-display)'
    }
  }, it.value), it.note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 'var(--type-body-sm)',
      color: onArchive ? 'var(--paper-3)' : 'var(--text-muted)'
    }
  }, it.note))));
}
Object.assign(__ds_scope, { FactList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FactList.jsx", error: String((e && e.message) || e) }); }

// components/content/LifeTimeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LifeTimeline({
  entries = [],
  onArchive = false,
  style,
  ...rest
}) {
  const line = onArchive ? 'var(--line-on-archive)' : 'var(--line-hairline)';
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      borderLeft: '1px solid ' + line,
      ...style
    }
  }, rest), entries.map((e, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: 'relative',
      padding: '0 0 var(--space-6) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -3,
      top: 8,
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: e.emphasis ? 'var(--pigment-terracotta)' : onArchive ? 'var(--paper-3)' : 'var(--ink-4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-subtitle)',
      lineHeight: 1.1,
      color: onArchive ? 'var(--text-on-archive)' : 'var(--text-display)'
    }
  }, e.year), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      maxWidth: 'var(--measure-narrow)',
      fontSize: 'var(--type-body-sm)',
      color: onArchive ? 'var(--paper-2)' : 'var(--text-muted)'
    }
  }, e.text))));
}
Object.assign(__ds_scope, { LifeTimeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LifeTimeline.jsx", error: String((e && e.message) || e) }); }

// components/content/Prose.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Prose({
  children,
  lead = false,
  onArchive = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      maxWidth: 'var(--measure)',
      fontFamily: lead ? 'var(--font-editorial)' : 'var(--font-ui)',
      fontSize: lead ? 'var(--type-body-lg)' : 'var(--type-body)',
      lineHeight: 'var(--leading-body)',
      color: onArchive ? 'var(--paper-2)' : lead ? 'var(--text-body)' : 'var(--text-muted)',
      textWrap: 'pretty',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Prose });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Prose.jsx", error: String((e && e.message) || e) }); }

// components/content/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PullQuote({
  children,
  attribution,
  source,
  onArchive = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      maxWidth: 'var(--measure-narrow)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: 'var(--type-subtitle)',
      lineHeight: 1.42,
      color: onArchive ? 'var(--text-on-archive)' : 'var(--text-display)'
    }
  }, children), (attribution || source) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-4)',
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: onArchive ? 'var(--paper-3)' : 'var(--text-faint)'
    }
  }, attribution && /*#__PURE__*/React.createElement("span", null, attribution), source && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7
    }
  }, "\u2014 ", source)));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  children,
  eyebrow,
  level = 2,
  align = 'left',
  onArchive = false,
  rule = true,
  style,
  ...rest
}) {
  const sizes = {
    1: 'var(--type-display-2)',
    2: 'var(--type-display-3)',
    3: 'var(--type-title)'
  };
  const H = 'h' + level;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-micro)',
      textTransform: 'uppercase',
      color: onArchive ? 'var(--paper-3)' : 'var(--text-faint)',
      marginBottom: 'var(--space-4)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement(H, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: sizes[level],
      lineHeight: 'var(--leading-title)',
      letterSpacing: 'var(--tracking-display)',
      color: onArchive ? 'var(--text-on-archive)' : 'var(--text-display)'
    }
  }, children), rule && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      marginTop: 'var(--space-5)',
      background: onArchive ? 'var(--line-on-archive)' : 'var(--line-hairline)'
    }
  }));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lucide (CDN, static SVG) — substituted set; see readme ICONOGRAPHY.
function Icon({
  name = 'arrow-right',
  size = 16,
  color = 'currentColor',
  strokeWidth,
  style,
  ...rest
}) {
  const src = `/vendor/lucide/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    width: size,
    height: size,
    alt: "",
    style: {
      display: 'block',
      opacity: 0.86
    },
    "data-stroke": strokeWidth
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '7px 14px',
    fontSize: 'var(--type-micro)'
  },
  md: {
    padding: '11px 20px',
    fontSize: 'var(--type-caption)'
  },
  lg: {
    padding: '15px 28px',
    fontSize: 'var(--type-body-sm)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  onArchive = false,
  disabled = false,
  href,
  onClick,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-ui)',
    fontWeight: 'var(--weight-medium)',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    lineHeight: 1,
    borderRadius: 'var(--radius-control)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background var(--dur-fast) var(--ease-archive), color var(--dur-fast) var(--ease-archive), border-color var(--dur-fast) var(--ease-archive), opacity var(--dur-fast) var(--ease-archive)',
    border: '1px solid transparent',
    textDecoration: 'none',
    opacity: disabled ? 0.38 : 1,
    ...sizes[size]
  };
  const ink = onArchive ? 'var(--paper-1)' : 'var(--ink-0)';
  const variants = {
    primary: {
      background: ink,
      color: onArchive ? 'var(--ink-0)' : 'var(--paper-0)'
    },
    secondary: {
      background: 'transparent',
      color: ink,
      borderColor: onArchive ? 'var(--line-on-archive)' : 'var(--line-strong)'
    },
    ghost: {
      background: 'transparent',
      color: onArchive ? 'var(--paper-2)' : 'var(--text-muted)',
      padding: sizes[size].padding.split(' ')[0] + ' 0'
    }
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: !href ? disabled : undefined,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.opacity = variant === 'primary' ? '0.84' : '1';
      if (!disabled && variant !== 'primary') e.currentTarget.style.borderColor = onArchive ? 'var(--paper-1)' : 'var(--ink-0)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = disabled ? '0.38' : '1';
      if (variant !== 'primary') e.currentTarget.style.borderColor = variants[variant].borderColor || 'transparent';
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 16 : 14
  }), children, iconAfter && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: size === 'lg' ? 16 : 14
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  name,
  label,
  size = 36,
  onArchive = false,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onClick: onClick,
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: '1px solid transparent',
      borderRadius: 'var(--radius-control)',
      color: onArchive ? 'var(--paper-1)' : 'var(--ink-0)',
      cursor: 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-archive), opacity var(--dur-fast) var(--ease-archive)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = onArchive ? 'var(--line-on-archive)' : 'var(--line-hairline)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'transparent';
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: Math.round(size * 0.44)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  tone = 'neutral',
  onArchive = false,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      color: 'var(--text-muted)',
      borderColor: 'var(--line-hairline)'
    },
    ink: {
      color: 'var(--ink-0)',
      borderColor: 'var(--line-strong)'
    },
    pigment: {
      color: 'var(--pigment-terracotta)',
      borderColor: 'var(--pigment-terracotta)'
    }
  };
  const t = onArchive ? {
    color: 'var(--paper-2)',
    borderColor: 'var(--line-on-archive)'
  } : tones[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      padding: '5px 10px',
      border: '1px solid ' + t.borderColor,
      color: t.color,
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      lineHeight: 1,
      borderRadius: 'var(--radius-control)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wordmark({
  size = 20,
  onArchive = false,
  subtitle,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      color: onArchive ? 'var(--paper-1)' : 'var(--ink-0)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: '500',
      fontSize: size,
      letterSpacing: '-0.01em',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      opacity: 0.7
    }
  }, "no"), "Kasteyev"), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-micro)',
      textTransform: 'uppercase',
      opacity: 0.6
    }
  }, subtitle));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/gallery/ArtistCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ArtistCard({
  portrait,
  name,
  years,
  discipline,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick && onClick();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      border: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      background: 'var(--surface-archive)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: portrait,
    alt: name,
    style: {
      width: '100%',
      aspectRatio: '3 / 4',
      objectFit: 'cover',
      filter: hover ? 'var(--filter-archive-soft)' : 'var(--filter-archive)',
      transform: hover ? 'scale(1.03)' : 'scale(1)',
      transition: 'filter var(--dur-base) var(--ease-archive), transform var(--dur-slow) var(--ease-archive)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-subtitle)',
      lineHeight: 1.1,
      color: 'var(--text-display)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-faint)'
    }
  }, years)), discipline && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, discipline));
}
Object.assign(__ds_scope, { ArtistCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gallery/ArtistCard.jsx", error: String((e && e.message) || e) }); }

// components/gallery/ArtworkCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ArtworkCard({
  src,
  title,
  artist,
  year,
  offset = 0,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick && onClick();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      border: 'none',
      textDecoration: 'none',
      marginTop: offset,
      transform: hover ? 'translateY(-6px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-archive)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: title,
    style: {
      width: '100%',
      display: 'block',
      boxShadow: hover ? 'var(--shadow-plate-hover)' : 'var(--shadow-plate)',
      transition: 'box-shadow var(--dur-base) var(--ease-archive)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      opacity: hover ? 1 : 0.72,
      transition: 'opacity var(--dur-base) var(--ease-archive)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: 'var(--type-body-sm)',
      color: 'var(--text-display)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, [artist, year].filter(Boolean).join(' · '))));
}
Object.assign(__ds_scope, { ArtworkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gallery/ArtworkCard.jsx", error: String((e && e.message) || e) }); }

// components/gallery/ArtworkPlate.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ArtworkPlate({
  src,
  title,
  artist,
  year,
  medium,
  caption,
  size = 'md',
  align = 'left',
  style,
  ...rest
}) {
  const widths = {
    sm: 260,
    md: 420,
    lg: 640
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      width: widths[size],
      maxWidth: '100%',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-plate)',
      padding: 'var(--space-3)',
      boxShadow: 'var(--shadow-plate)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: title,
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: 'var(--type-body)',
      color: 'var(--text-display)'
    }
  }, title, year && /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'normal',
      color: 'var(--text-muted)'
    }
  }, ", ", year)), (artist || medium) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, [artist, medium].filter(Boolean).join(' · ')), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      maxWidth: '38ch'
    }
  }, caption)));
}
Object.assign(__ds_scope, { ArtworkPlate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gallery/ArtworkPlate.jsx", error: String((e && e.message) || e) }); }

// components/gallery/EraBackdrop.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EraBackdrop({
  src,
  position = 'center',
  scrim = 'bottom',
  fixed = false,
  grain = true,
  children,
  style,
  ...rest
}) {
  const scrims = {
    none: 'none',
    bottom: 'var(--scrim-bottom)',
    full: 'var(--scrim-full)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-archive)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: position,
      filter: 'var(--filter-archive)',
      transform: 'scale(1.02)',
      transition: 'opacity var(--dur-era) var(--ease-veil), transform var(--dur-era) var(--ease-veil)',
      ...(fixed ? {
        position: 'fixed'
      } : null)
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: scrims[scrim],
      pointerEvents: 'none'
    }
  }), grain && /*#__PURE__*/React.createElement("div", {
    className: "nk-grain",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { EraBackdrop });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gallery/EraBackdrop.jsx", error: String((e && e.message) || e) }); }

// components/gallery/Lightbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Lightbox({
  open = false,
  src,
  title,
  artist,
  year,
  medium,
  onClose,
  onPrev,
  onNext,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 'var(--z-overlay)',
      background: 'rgba(10,10,10,.92)',
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      padding: 'var(--space-5) var(--gutter-page)',
      animation: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    label: "Close",
    onArchive: true,
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-6)',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "arrow-left",
    label: "Previous",
    onArchive: true,
    onClick: onPrev
  }), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: title,
    style: {
      maxHeight: '100%',
      maxWidth: '70%',
      objectFit: 'contain',
      boxShadow: 'var(--shadow-plate-hover)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "arrow-right",
    label: "Next",
    onArchive: true,
    onClick: onNext
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: 'var(--type-body-lg)',
      color: 'var(--paper-1)'
    }
  }, title, year && /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'normal',
      opacity: 0.7
    }
  }, ", ", year)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-micro)',
      textTransform: 'uppercase',
      color: 'var(--paper-3)'
    }
  }, [artist, medium].filter(Boolean).join(' · '))));
}
Object.assign(__ds_scope, { Lightbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gallery/Lightbox.jsx", error: String((e && e.message) || e) }); }

// components/navigation/IndexOverlay.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IndexOverlay({
  open = false,
  sections = [],
  onSelect,
  onClose,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 'var(--z-overlay)',
      background: 'var(--paper-1)',
      padding: 'var(--space-5) var(--gutter-page) var(--space-8)',
      overflow: 'auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    label: "Close index",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 'var(--space-8)',
      marginTop: 'var(--space-6)'
    }
  }, sections.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-micro)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      paddingBottom: 'var(--space-3)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, s.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 'var(--space-4) 0 0'
    }
  }, s.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.label,
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onSelect && onSelect(it);
    },
    style: {
      border: 'none',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-title)',
      lineHeight: 1.1,
      color: 'var(--text-display)',
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)'
    },
    onMouseEnter: e => e.currentTarget.style.fontStyle = 'italic',
    onMouseLeave: e => e.currentTarget.style.fontStyle = 'normal'
  }, it.label, it.meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-faint)'
    }
  }, it.meta)))))))));
}
Object.assign(__ds_scope, { IndexOverlay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/IndexOverlay.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  items = [],
  active,
  onNavigate,
  onArchive = false,
  onMenu,
  right,
  style,
  ...rest
}) {
  const ink = onArchive ? 'var(--paper-1)' : 'var(--ink-0)';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'relative',
      zIndex: 'var(--z-header)',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      gap: 'var(--space-5)',
      height: 'var(--rail-header)',
      padding: '0 var(--gutter-page)',
      borderBottom: '1px solid ' + (onArchive ? 'var(--line-on-archive)' : 'var(--line-hairline)'),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, onMenu && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "menu",
    label: "Index",
    size: 30,
    onArchive: onArchive,
    onClick: onMenu,
    style: {
      marginLeft: -6
    }
  }), items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(it.id);
    },
    style: {
      border: 'none',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-micro)',
      textTransform: 'uppercase',
      color: ink,
      opacity: active === it.id ? 1 : 0.52,
      transition: 'opacity var(--dur-fast) var(--ease-archive)'
    },
    onMouseEnter: e => e.currentTarget.style.opacity = '1',
    onMouseLeave: e => e.currentTarget.style.opacity = active === it.id ? '1' : '0.52'
  }, it.label))), /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 18,
    onArchive: onArchive
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 'var(--space-4)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-micro)',
      textTransform: 'uppercase',
      color: ink
    }
  }, right));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TimelineScrubber.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TimelineScrubber({
  years = [],
  value,
  onChange,
  onArchive = false,
  hint = 'Scroll to explore',
  style,
  ...rest
}) {
  const ink = onArchive ? 'var(--paper-1)' : 'var(--ink-0)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-4)'
    }
  }, years.map((y, i) => {
    const on = y === value;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: y
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 1,
        background: onArchive ? 'var(--line-on-archive)' : 'var(--line-strong)'
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => onChange && onChange(y),
      style: {
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontSize: on ? 'var(--type-display-3)' : 'var(--type-title)',
        color: ink,
        opacity: on ? 1 : 0.34,
        lineHeight: 1,
        transition: 'opacity var(--dur-base) var(--ease-archive), font-size var(--dur-base) var(--ease-archive)'
      },
      onMouseEnter: e => e.currentTarget.style.opacity = '1',
      onMouseLeave: e => e.currentTarget.style.opacity = on ? '1' : '0.34'
    }, y));
  })), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-micro)',
      textTransform: 'uppercase',
      color: onArchive ? 'var(--paper-3)' : 'var(--text-faint)'
    }
  }, hint));
}
Object.assign(__ds_scope, { TimelineScrubber });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TimelineScrubber.jsx", error: String((e && e.message) || e) }); }

// ui_kits/gallery/App.jsx
try { (() => {
const {
  SiteHeader,
  IndexOverlay,
  Lightbox,
  IconButton
} = window.NoKasteyevDesignSystem_d8f09b;
function App() {
  const D = window.NK_DATA;
  const [screen, setScreen] = React.useState('home');
  const [eraYear, setEraYear] = React.useState(D.eras[1].year);
  const [artistId, setArtistId] = React.useState(D.artists[0].id);
  const [indexOpen, setIndexOpen] = React.useState(false);
  const [work, setWork] = React.useState(null);
  const era = D.eras.find(e => e.year === eraYear);
  const artist = D.artists.find(a => a.id === artistId);
  const onArchive = screen === 'home';
  const nav = /*#__PURE__*/React.createElement(SiteHeader, {
    onArchive: onArchive,
    onMenu: () => setIndexOpen(true),
    items: [{
      id: 'era',
      label: 'Eras'
    }, {
      id: 'gallery',
      label: 'Gallery'
    }, {
      id: 'artist',
      label: 'Artists'
    }],
    active: screen,
    onNavigate: setScreen,
    right: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: .5
      }
    }, "KZ /"), /*#__PURE__*/React.createElement("span", null, "EN"), /*#__PURE__*/React.createElement(IconButton, {
      name: "volume-2",
      label: "Sound",
      size: 30,
      onArchive: onArchive
    }))
  });
  const openArtist = id => {
    setArtistId(id);
    setScreen('artist');
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, screen === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    nav: nav,
    era: era,
    setEraYear: setEraYear,
    onOpenWork: i => setWork(D.allWorks[i])
  }), screen === 'era' && /*#__PURE__*/React.createElement(EraScreen, {
    nav: nav,
    era: era,
    onOpenArtist: openArtist
  }), screen === 'artist' && /*#__PURE__*/React.createElement(ArtistScreen, {
    nav: nav,
    artist: artist,
    onOpenWork: setWork,
    onBack: () => setScreen('era')
  }), screen === 'gallery' && /*#__PURE__*/React.createElement(GalleryScreen, {
    nav: nav,
    era: era,
    setEraYear: setEraYear,
    onOpenWork: setWork
  }), /*#__PURE__*/React.createElement(IndexOverlay, {
    open: indexOpen,
    onClose: () => setIndexOpen(false),
    sections: [{
      title: 'Eras',
      items: D.eras.map(e => ({
        label: e.year,
        meta: e.title,
        kind: 'era',
        id: e.year
      }))
    }, {
      title: 'Artists',
      items: D.artists.map(a => ({
        label: a.name,
        meta: a.years,
        kind: 'artist',
        id: a.id
      }))
    }, {
      title: 'Archive',
      items: [{
        label: 'Gallery',
        kind: 'screen',
        id: 'gallery'
      }, {
        label: 'About',
        kind: 'screen',
        id: 'era'
      }]
    }],
    onSelect: it => {
      setIndexOpen(false);
      if (it.kind === 'era') {
        setEraYear(it.id);
        setScreen('era');
      } else if (it.kind === 'artist') openArtist(it.id);else setScreen(it.id);
    }
  }), /*#__PURE__*/React.createElement(Lightbox, {
    open: !!work,
    src: work && work.src,
    title: work && work.title,
    artist: work && work.artist,
    year: work && work.year,
    medium: work && work.medium,
    onClose: () => setWork(null),
    onPrev: () => setWork(D.allWorks[(D.allWorks.findIndex(w => w.title === work.title) + D.allWorks.length - 1) % D.allWorks.length]),
    onNext: () => setWork(D.allWorks[(D.allWorks.findIndex(w => w.title === work.title) + 1) % D.allWorks.length]),
    style: {
      position: 'fixed'
    }
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/gallery/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/gallery/ArtistScreen.jsx
try { (() => {
const {
  SectionHeading,
  Prose,
  FactList,
  LifeTimeline,
  PullQuote,
  ArtworkCard,
  Tag,
  Button
} = window.NoKasteyevDesignSystem_d8f09b;
function ArtistScreen({
  nav,
  artist,
  onOpenWork,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", null, nav, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '440px 1fr',
      gap: 'var(--space-9)',
      padding: 'var(--space-8) var(--gutter-page) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-archive)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: artist.portrait,
    alt: artist.name,
    style: {
      width: '100%',
      aspectRatio: '3/4',
      objectFit: 'cover',
      filter: 'var(--filter-archive)'
    }
  })), /*#__PURE__*/React.createElement(FactList, {
    columns: 2,
    items: artist.facts,
    style: {
      marginTop: 'var(--space-6)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "arrow-left",
    onClick: onBack
  }, "Back"), /*#__PURE__*/React.createElement(SectionHeading, {
    level: 1,
    eyebrow: artist.years,
    rule: false,
    style: {
      marginTop: 'var(--space-4)'
    }
  }, artist.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "ink"
  }, artist.discipline), /*#__PURE__*/React.createElement(Tag, null, artist.works.length, " works")), /*#__PURE__*/React.createElement(Prose, {
    lead: true,
    style: {
      marginTop: 'var(--space-6)'
    }
  }, artist.lead), /*#__PURE__*/React.createElement(Prose, {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, artist.bio), /*#__PURE__*/React.createElement(PullQuote, {
    attribution: artist.name,
    source: artist.quote.source,
    style: {
      marginTop: 'var(--space-7)'
    }
  }, artist.quote.text), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 'var(--space-8)',
      marginTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    rule: false,
    eyebrow: "Life"
  }, "Timeline"), /*#__PURE__*/React.createElement(LifeTimeline, {
    entries: artist.timeline,
    style: {
      marginTop: 'var(--space-5)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    rule: false,
    eyebrow: "Catalogue"
  }, "Works"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-5)'
    }
  }, artist.works.map((w, i) => /*#__PURE__*/React.createElement(ArtworkCard, {
    key: i,
    src: w.src,
    title: w.title,
    artist: artist.name,
    year: w.year,
    onClick: () => onOpenWork(w)
  }))))))));
}
Object.assign(window, {
  ArtistScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/gallery/ArtistScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/gallery/EraScreen.jsx
try { (() => {
const {
  SectionHeading,
  Prose,
  ArtworkPlate,
  ArtistCard,
  PullQuote,
  EraBackdrop,
  Tag
} = window.NoKasteyevDesignSystem_d8f09b;
function EraScreen({
  nav,
  era,
  onOpenArtist
}) {
  const artists = window.NK_DATA.artists;
  return /*#__PURE__*/React.createElement("div", null, nav, /*#__PURE__*/React.createElement(EraBackdrop, {
    src: era.backdrop,
    scrim: "full",
    style: {
      height: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 320,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 'var(--space-7) var(--gutter-page)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onArchive: true,
    eyebrow: era.year + ' — ' + (Number(era.year) + 5),
    level: 1,
    rule: false
  }, era.title))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--gutter-page)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Prose, {
    lead: true
  }, era.blurb), /*#__PURE__*/React.createElement(PullQuote, {
    attribution: "Sabyr Mambeyev",
    source: "Studio notes, 1968"
  }, "I painted the mountain the way it looked from the tram.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--gutter-page) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    eyebrow: "Plates of this era"
  }, "Selected works"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      marginTop: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, window.NK_DATA.allWorks.slice(0, 3).map((w, i) => /*#__PURE__*/React.createElement(ArtworkPlate, {
    key: i,
    size: "sm",
    src: w.src,
    title: w.title,
    artist: w.artist,
    year: w.year,
    medium: w.medium
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--gutter-page) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    eyebrow: "Working in this era"
  }, "Artists"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-6)'
    }
  }, artists.map(a => /*#__PURE__*/React.createElement(ArtistCard, {
    key: a.id,
    portrait: a.portrait,
    name: a.name,
    years: a.years,
    discipline: a.discipline,
    onClick: () => onOpenArtist(a.id)
  })))));
}
Object.assign(window, {
  EraScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/gallery/EraScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/gallery/GalleryScreen.jsx
try { (() => {
const {
  SectionHeading,
  ArtworkCard,
  Tag,
  TimelineScrubber
} = window.NoKasteyevDesignSystem_d8f09b;
function GalleryScreen({
  nav,
  era,
  setEraYear,
  onOpenWork
}) {
  const works = window.NK_DATA.allWorks;
  const [filter, setFilter] = React.useState('All');
  const media = ['All', 'Oil on canvas', 'Watercolour'];
  const shown = works.filter(w => filter === 'All' || w.medium === filter);
  return /*#__PURE__*/React.createElement("div", null, nav, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--gutter-page) var(--space-6)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 2,
    rule: false,
    eyebrow: "All plates"
  }, "Gallery"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, media.map(m => /*#__PURE__*/React.createElement("button", {
    key: m,
    onClick: () => setFilter(m),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: filter === m ? 'ink' : 'neutral'
  }, m))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--gutter-page)'
    }
  }, /*#__PURE__*/React.createElement(TimelineScrubber, {
    years: window.NK_DATA.eras.map(e => e.year),
    value: era.year,
    onChange: setEraYear,
    hint: "",
    style: {
      paddingBottom: 'var(--space-7)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--gutter-page) var(--space-9)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-8) var(--space-6)'
    }
  }, shown.map((w, i) => /*#__PURE__*/React.createElement(ArtworkCard, {
    key: i,
    src: w.src,
    title: w.title,
    artist: w.artist,
    year: w.year,
    offset: i % 2 ? 36 : 0,
    onClick: () => onOpenWork(w)
  }))));
}
Object.assign(window, {
  GalleryScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/gallery/GalleryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/gallery/HomeScreen.jsx
try { (() => {
const {
  SiteHeader,
  TimelineScrubber,
  EraBackdrop,
  ArtworkCard,
  Prose,
  Wordmark,
  Button
} = window.NoKasteyevDesignSystem_d8f09b;
function HomeScreen({
  nav,
  era,
  setEraYear,
  onOpenWork
}) {
  const works = window.NK_DATA.allWorks;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(EraBackdrop, {
    src: era.backdrop,
    scrim: "full",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }
  }, nav, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 'var(--space-8) 0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--gutter-page)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '30ch'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 44,
    onArchive: true,
    subtitle: "Digital archive of Kazakh painting",
    style: {
      alignItems: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement(Prose, {
    onArchive: true,
    style: {
      marginTop: 'var(--space-5)',
      maxWidth: '36ch'
    }
  }, era.blurb), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onArchive: true,
    iconAfter: "arrow-right",
    style: {
      marginTop: 'var(--space-6)'
    }
  }, "Enter ", era.year)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      color: 'var(--paper-2)',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-micro)',
      textTransform: 'uppercase'
    }
  }, works.length, " works \xB7 ", window.NK_DATA.artists.length, " artists")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'flex-start',
      padding: '0 var(--gutter-page)',
      overflow: 'hidden'
    }
  }, works.slice(0, 7).map((w, i) => /*#__PURE__*/React.createElement(ArtworkCard, {
    key: i,
    src: w.src,
    title: w.title,
    artist: w.artist,
    year: w.year,
    offset: [0, 48, 16, 72, 8, 56, 24][i],
    style: {
      width: 150,
      flex: '0 0 auto'
    },
    onClick: () => onOpenWork(i)
  }))), /*#__PURE__*/React.createElement(TimelineScrubber, {
    onArchive: true,
    years: window.NK_DATA.eras.map(e => e.year),
    value: era.year,
    onChange: setEraYear,
    style: {
      marginTop: 'var(--space-7)'
    }
  }))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/gallery/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/gallery/data.js
try { (() => {
window.NK_DATA = {
  eras: [{
    year: '1957',
    title: 'After the Silence',
    backdrop: '../../assets/archive/almaty-prospekt-1960s.png',
    blurb: 'The first post-war generation returns to the studio. Watercolour dominates; the steppe is painted from memory rather than from the road.'
  }, {
    year: '1962',
    title: 'The Thaw in Almaty',
    backdrop: '../../assets/archive/kasteyev-at-easel.png',
    blurb: 'Almaty was a city of poplars, wet asphalt and new concrete. Painters walked it every morning and brought the light of it back to the easel.'
  }, {
    year: '1968',
    title: 'Concrete and Poplars',
    backdrop: '../../assets/archive/almaty-prospekt-1960s.png',
    blurb: 'Micro-districts rise along the prospekt. Colour turns hard and architectural; portraiture moves indoors.'
  }, {
    year: '1974',
    title: 'The Long Exhibition',
    backdrop: '../../assets/archive/almaty-prospekt-1960s.png',
    blurb: 'Republic-wide shows travel between cities. The archive of this decade is mostly catalogue photography.'
  }],
  artists: [{
    id: 'kasteyev',
    name: 'Abylkhan Kasteyev',
    years: '1904 — 1973',
    discipline: 'Watercolour, oil',
    portrait: '../../assets/archive/kasteyev-at-easel.png',
    lead: 'The founder of Kazakh easel painting, who taught a whole republic to look at its own landscape.',
    bio: 'Born in the Zhetysu foothills, Kasteyev came to painting through the studio of Nikolai Khludov and the Moscow art school. He worked mostly in watercolour, building an inventory of a country that had never before been painted from the inside: irrigation canals, first tractors, the Turksib line, and the mountains above Alma-Ata seen from the level of a walking man.',
    facts: [{
      label: 'Born',
      value: '1904',
      note: 'Chizhin, Zhetysu'
    }, {
      label: 'Died',
      value: '1973',
      note: 'Alma-Ata'
    }, {
      label: 'Medium',
      value: 'Watercolour',
      note: 'and oil'
    }, {
      label: 'Works held',
      value: '1,000+'
    }],
    timeline: [{
      year: '1929',
      text: 'Enters the studio of Nikolai Khludov in Alma-Ata.',
      emphasis: true
    }, {
      year: '1934',
      text: 'Studies at the Krupskaya Art Studio in Moscow.'
    }, {
      year: '1944',
      text: 'First solo exhibition; named People\u2019s Artist of the Kazakh SSR.',
      emphasis: true
    }, {
      year: '1969',
      text: 'Completes the late Turksib series.'
    }],
    quote: {
      text: 'I painted the mountain the way it looked from the tram.',
      source: 'Studio notes, 1968'
    },
    works: [{
      title: 'Turksib',
      year: '1969',
      medium: 'Oil on canvas',
      src: '../../assets/placeholder/plate-1.png'
    }, {
      title: 'High Pasture',
      year: '1958',
      medium: 'Watercolour',
      src: '../../assets/placeholder/plate-3.png'
    }, {
      title: 'Canal',
      year: '1962',
      medium: 'Watercolour',
      src: '../../assets/placeholder/plate-4.png'
    }, {
      title: 'Portrait of a Brigadier',
      year: '1965',
      medium: 'Oil on canvas',
      src: '../../assets/placeholder/plate-5.png'
    }]
  }, {
    id: 'galimbayeva',
    name: 'Aisha Galimbayeva',
    years: '1917 — 2008',
    discipline: 'Painting, stage design',
    portrait: '../../assets/placeholder/portrait-2.png',
    lead: 'The first Kazakh woman to make a career of easel painting and film design.',
    bio: 'Galimbayeva built her subject out of domestic interiors: dastarkhan, embroidery, women at work in rooms full of pattern. Her colour is warmer and flatter than her contemporaries\u2019, closer to applied art than to academic painting.',
    facts: [{
      label: 'Born',
      value: '1917'
    }, {
      label: 'Died',
      value: '2008'
    }, {
      label: 'Medium',
      value: 'Oil'
    }, {
      label: 'Field',
      value: 'Film design'
    }],
    timeline: [{
      year: '1949',
      text: 'Graduates from the Moscow art institute.',
      emphasis: true
    }, {
      year: '1967',
      text: 'Paints Kamshat.'
    }],
    quote: {
      text: 'A room is a landscape if you have lived in it long enough.',
      source: 'Interview, 1981'
    },
    works: [{
      title: 'Kamshat',
      year: '1967',
      medium: 'Oil on canvas',
      src: '../../assets/placeholder/plate-2.png'
    }, {
      title: 'Dastarkhan',
      year: '1971',
      medium: 'Oil on canvas',
      src: '../../assets/placeholder/plate-6.png'
    }]
  }, {
    id: 'mambeyev',
    name: 'Sabyr Mambeyev',
    years: '1922 — 2003',
    discipline: 'Painting',
    portrait: '../../assets/placeholder/portrait-3.png',
    lead: 'A painter of the mountain edge of the city, working in flat, decorative colour.',
    bio: 'Mambeyev\u2019s canvases of the 1960s reduce the foothills to bands of colour and figures to silhouettes \u2014 the closest Kazakh painting came to a national modernism.',
    facts: [{
      label: 'Born',
      value: '1922'
    }, {
      label: 'Died',
      value: '2003'
    }, {
      label: 'Medium',
      value: 'Oil'
    }],
    timeline: [{
      year: '1958',
      text: 'Exhibits In the Foothills.',
      emphasis: true
    }],
    quote: {
      text: 'Colour first, then the story.',
      source: 'Studio notes'
    },
    works: [{
      title: 'In the Foothills',
      year: '1958',
      medium: 'Oil on canvas',
      src: '../../assets/placeholder/plate-3.png'
    }, {
      title: 'Shepherds',
      year: '1964',
      medium: 'Oil on canvas',
      src: '../../assets/placeholder/plate-4.png'
    }]
  }, {
    id: 'shardenov',
    name: 'Zhanatai Shardenov',
    years: '1927 — 1992',
    discipline: 'Landscape',
    portrait: '../../assets/placeholder/portrait-4.png',
    lead: 'Landscape painter of the Alatau slopes and the old wooden streets of Alma-Ata.',
    bio: 'Shardenov painted the same hillside for thirty years in thick, loaded paint, treating repetition as a form of attention.',
    facts: [{
      label: 'Born',
      value: '1927'
    }, {
      label: 'Died',
      value: '1992'
    }, {
      label: 'Medium',
      value: 'Oil'
    }],
    timeline: [{
      year: '1968',
      text: 'First republic-wide exhibition.'
    }],
    quote: {
      text: 'The same hill, again, until it is right.',
      source: 'Attributed'
    },
    works: [{
      title: 'Alatau, Evening',
      year: '1968',
      medium: 'Oil on canvas',
      src: '../../assets/placeholder/plate-5.png'
    }, {
      title: 'Wooden Street',
      year: '1972',
      medium: 'Oil on canvas',
      src: '../../assets/placeholder/plate-6.png'
    }]
  }]
};
window.NK_DATA.allWorks = window.NK_DATA.artists.flatMap(a => a.works.map(w => ({
  ...w,
  artist: a.name
})));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/gallery/data.js", error: String((e && e.message) || e) }); }

__ds_ns.FactList = __ds_scope.FactList;

__ds_ns.LifeTimeline = __ds_scope.LifeTimeline;

__ds_ns.Prose = __ds_scope.Prose;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.ArtistCard = __ds_scope.ArtistCard;

__ds_ns.ArtworkCard = __ds_scope.ArtworkCard;

__ds_ns.ArtworkPlate = __ds_scope.ArtworkPlate;

__ds_ns.EraBackdrop = __ds_scope.EraBackdrop;

__ds_ns.Lightbox = __ds_scope.Lightbox;

__ds_ns.IndexOverlay = __ds_scope.IndexOverlay;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.TimelineScrubber = __ds_scope.TimelineScrubber;

})();
