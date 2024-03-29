"use client";
import {
  ComponentListContext_default
} from "./chunk-PMC5RLER.js";
import {
  RowListContext_default
} from "./chunk-ZVOVOZE3.js";
import {
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-NMEMF6H5.js";
import {
  generateUtilityClass,
  generateUtilityClasses
} from "./chunk-OIOV6HVD.js";
import "./chunk-MYMQ7GMB.js";
import {
  init_composeClasses
} from "./chunk-V72CMWSM.js";
import "./chunk-LFDIQURU.js";
import {
  _objectWithoutPropertiesLoose,
  clsx_default,
  init_clsx,
  init_objectWithoutPropertiesLoose
} from "./chunk-635ZHGJL.js";
import {
  _extends,
  capitalize,
  composeClasses,
  init_esm,
  init_extends,
  require_jsx_runtime,
  require_prop_types
} from "./chunk-WJCHMYNN.js";
import {
  __toESM,
  require_react
} from "./chunk-W4VDMLRG.js";

// node_modules/@mui/joy/ListDivider/ListDivider.js
init_objectWithoutPropertiesLoose();
init_extends();
var React2 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
init_clsx();
init_esm();
init_composeClasses();

// node_modules/@mui/joy/Divider/Divider.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_esm();
init_composeClasses();

// node_modules/@mui/joy/Divider/dividerClasses.js
function getDividerUtilityClass(slot) {
  return generateUtilityClass("MuiDivider", slot);
}
var dividerClasses = generateUtilityClasses("MuiDivider", ["root", "horizontal", "vertical", "insetContext", "insetNone"]);

// node_modules/@mui/joy/Divider/Divider.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "children", "component", "inset", "orientation", "role", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    orientation,
    inset
  } = ownerState;
  const slots = {
    root: ["root", orientation, inset && `inset${capitalize(inset)}`]
  };
  return composeClasses(slots, getDividerUtilityClass, {});
};
var DividerRoot = styled_default("hr", {
  name: "JoyDivider",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => _extends({
  "--Divider-thickness": "1px",
  "--Divider-lineColor": theme.vars.palette.divider
}, ownerState.inset === "none" && {
  "--_Divider-inset": "0px"
}, ownerState.inset === "context" && {
  "--_Divider-inset": "var(--Divider-inset, 0px)"
}, {
  margin: "initial",
  // reset margin for `hr` tag
  marginInline: ownerState.orientation === "vertical" ? "initial" : "var(--_Divider-inset)",
  marginBlock: ownerState.orientation === "vertical" ? "var(--_Divider-inset)" : "initial",
  position: "relative",
  alignSelf: "stretch",
  flexShrink: 0
}, ownerState.children ? _extends({
  "--Divider-gap": theme.spacing(1),
  "--Divider-childPosition": "50%",
  display: "flex",
  flexDirection: ownerState.orientation === "vertical" ? "column" : "row",
  alignItems: "center",
  whiteSpace: "nowrap",
  textAlign: "center",
  border: 0
}, theme.typography["body-sm"], {
  "&::before, &::after": {
    position: "relative",
    inlineSize: ownerState.orientation === "vertical" ? "var(--Divider-thickness)" : "initial",
    blockSize: ownerState.orientation === "vertical" ? "initial" : "var(--Divider-thickness)",
    backgroundColor: "var(--Divider-lineColor)",
    // use logical size + background is better than border because they work with gradient.
    content: '""'
  },
  "&::before": {
    marginInlineEnd: ownerState.orientation === "vertical" ? "initial" : "min(var(--Divider-childPosition) * 999, var(--Divider-gap))",
    marginBlockEnd: ownerState.orientation === "vertical" ? "min(var(--Divider-childPosition) * 999, var(--Divider-gap))" : "initial",
    flexBasis: "var(--Divider-childPosition)"
  },
  "&::after": {
    marginInlineStart: ownerState.orientation === "vertical" ? "initial" : "min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))",
    marginBlockStart: ownerState.orientation === "vertical" ? "min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))" : "initial",
    flexBasis: "calc(100% - var(--Divider-childPosition))"
  }
}) : {
  border: "none",
  // reset the border for `hr` tag
  listStyle: "none",
  backgroundColor: "var(--Divider-lineColor)",
  // use logical size + background is better than border because they work with gradient.
  inlineSize: ownerState.orientation === "vertical" ? "var(--Divider-thickness)" : "initial",
  blockSize: ownerState.orientation === "vertical" ? "initial" : "var(--Divider-thickness)"
}));
var Divider = React.forwardRef(function Divider2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyDivider"
  });
  const {
    className,
    children,
    component = children !== void 0 && children !== null ? "div" : "hr",
    inset,
    orientation = "horizontal",
    role = component !== "hr" ? "separator" : void 0,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    inset,
    role,
    orientation,
    component
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: DividerRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: _extends({
      as: component,
      role
    }, role === "separator" && orientation === "vertical" && {
      // The implicit aria-orientation of separator is 'horizontal'
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role
      "aria-orientation": "vertical"
    })
  });
  return (0, import_jsx_runtime.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? Divider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * Class name applied to the divider to shrink or stretch the line based on the orientation.
   */
  inset: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["none", "context"]), import_prop_types.default.string]),
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types.default.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: import_prop_types.default.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    root: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
Divider.muiName = "Divider";

// node_modules/@mui/joy/ListDivider/listDividerClasses.js
function getListDividerUtilityClass(slot) {
  return generateUtilityClass("MuiListDivider", slot);
}
var listDividerClasses = generateUtilityClasses("MuiListDivider", ["root", "insetGutter", "insetStartDecorator", "insetStartContent", "horizontal", "vertical"]);
var listDividerClasses_default = listDividerClasses;

// node_modules/@mui/joy/ListDivider/ListDivider.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded2 = ["component", "role", "className", "children", "inset", "orientation", "slots", "slotProps"];
var useUtilityClasses2 = (ownerState) => {
  const {
    orientation,
    inset
  } = ownerState;
  const slots = {
    root: [
      "root",
      orientation,
      // `insetContext` class is already produced by Divider
      inset && inset !== "context" && `inset${capitalize(inset)}`
    ]
  };
  return composeClasses(slots, getListDividerUtilityClass, {});
};
var ListDividerRoot = styled_default(DividerRoot, {
  name: "JoyListDivider",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState
}) => _extends({}, ownerState.inset === "context" && {
  "--Divider-inset": "calc(-1 * var(--List-padding))"
}, ownerState.row && _extends({
  marginInline: "var(--ListDivider-gap)"
}, ownerState.inset === "gutter" && {
  marginBlock: "var(--ListItem-paddingY)"
}, ownerState["data-first-child"] === void 0 && {
  // combine --List-gap and --ListDivider-gap to replicate flexbox gap behavior
  marginInlineStart: "calc(var(--List-gap) + var(--ListDivider-gap))"
}), !ownerState.row && _extends({}, ownerState["data-first-child"] === void 0 && {
  // combine --List-gap and --ListDivider-gap to replicate flexbox gap behavior
  marginBlockStart: "calc(var(--List-gap) + var(--ListDivider-gap))"
}, {
  marginBlockEnd: "var(--ListDivider-gap)"
}, ownerState.inset === "gutter" && {
  marginInlineStart: "var(--ListItem-paddingLeft)",
  marginInlineEnd: "var(--ListItem-paddingRight)"
}, ownerState.inset === "startDecorator" && {
  marginInlineStart: "var(--ListItem-paddingLeft)"
}, ownerState.inset === "startContent" && {
  marginInlineStart: "calc(var(--ListItem-paddingLeft) + var(--ListItemDecorator-size))"
})));
var ListDivider = React2.forwardRef(function ListDivider2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyListDivider"
  });
  const row = React2.useContext(RowListContext_default);
  const listComponent = React2.useContext(ComponentListContext_default);
  const {
    component: componentProp,
    role: roleProp,
    className,
    children,
    inset = "context",
    orientation: orientationProp,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const [listElement] = (listComponent == null ? void 0 : listComponent.split(":")) || ["", ""];
  const component = componentProp || (listElement && !listElement.match(/^(ul|ol|menu)$/) ? "div" : "li");
  const role = roleProp || (component === "li" ? "separator" : void 0);
  const orientation = orientationProp || (row ? "vertical" : "horizontal");
  const ownerState = _extends({}, props, {
    inset,
    row,
    orientation,
    component,
    role
  });
  const classes = useUtilityClasses2(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: ListDividerRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: _extends({
      as: component,
      role
    }, role === "separator" && orientation === "vertical" && {
      // The implicit aria-orientation of separator is 'horizontal'
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role
      "aria-orientation": "vertical"
    })
  });
  return (0, import_jsx_runtime2.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? ListDivider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types2.default.node,
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types2.default.elementType,
  /**
   * The empty space on the side(s) of the divider in a vertical list.
   *
   * For horizontal list (the nearest parent List has `row` prop set to `true`), only `inset="gutter"` affects the list divider.
   * @default 'context'
   */
  inset: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["context", "gutter", "startDecorator", "startContent"]), import_prop_types2.default.string]),
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types2.default.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: import_prop_types2.default.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types2.default.shape({
    root: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types2.default.shape({
    root: import_prop_types2.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object])
} : void 0;
var ListDivider_default = ListDivider;
export {
  ListDivider_default as default,
  getListDividerUtilityClass,
  listDividerClasses_default as listDividerClasses
};
//# sourceMappingURL=@mui_joy_ListDivider.js.map
