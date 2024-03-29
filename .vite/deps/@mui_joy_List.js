"use client";
import {
  resolveSxValue
} from "./chunk-LPREB6R3.js";
import {
  GroupListContext_default,
  NestedListContext_default,
  WrapListContext_default
} from "./chunk-DIYRR6IH.js";
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

// node_modules/@mui/joy/List/List.js
init_objectWithoutPropertiesLoose();
init_extends();
var React3 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_esm();
init_composeClasses();

// node_modules/@mui/joy/List/listClasses.js
function getListUtilityClass(slot) {
  return generateUtilityClass("MuiList", slot);
}
var listClasses = generateUtilityClasses("MuiList", ["root", "nesting", "scoped", "sizeSm", "sizeMd", "sizeLg", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "horizontal", "vertical"]);
var listClasses_default = listClasses;

// node_modules/@mui/joy/List/ListProvider.js
init_extends();
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function ListProvider(props) {
  const {
    children,
    nested,
    row = false,
    wrap = false
  } = props;
  const baseProviders = (0, import_jsx_runtime.jsx)(RowListContext_default.Provider, {
    value: row,
    children: (0, import_jsx_runtime.jsx)(WrapListContext_default.Provider, {
      value: wrap,
      children: React.Children.map(children, (child, index) => React.isValidElement(child) ? React.cloneElement(child, _extends({}, index === 0 && {
        "data-first-child": ""
      }, index === React.Children.count(children) - 1 && {
        "data-last-child": ""
      })) : child)
    })
  });
  if (nested === void 0) {
    return baseProviders;
  }
  return (0, import_jsx_runtime.jsx)(NestedListContext_default.Provider, {
    value: nested,
    children: baseProviders
  });
}
var ListProvider_default = ListProvider;

// node_modules/@mui/joy/RadioGroup/RadioGroupContext.js
var React2 = __toESM(require_react());
var RadioGroupContext = React2.createContext(void 0);
if (true) {
  RadioGroupContext.displayName = "RadioGroupContext";
}
var RadioGroupContext_default = RadioGroupContext;

// node_modules/@mui/joy/List/List.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["component", "className", "children", "size", "orientation", "wrap", "variant", "color", "role", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    variant,
    color,
    size,
    nesting,
    orientation,
    instanceSize
  } = ownerState;
  const slots = {
    root: ["root", orientation, variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, !instanceSize && !nesting && size && `size${capitalize(size)}`, instanceSize && `size${capitalize(instanceSize)}`, nesting && "nesting"]
  };
  return composeClasses(slots, getListUtilityClass, {});
};
var StyledList = styled_default("ul")(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  const {
    p,
    padding,
    borderRadius
  } = resolveSxValue({
    theme,
    ownerState
  }, ["p", "padding", "borderRadius"]);
  function applySizeVars(size) {
    if (size === "sm") {
      return {
        "--ListDivider-gap": "0.25rem",
        "--ListItem-minHeight": "2rem",
        "--ListItem-paddingY": "3px",
        "--ListItem-paddingX": ownerState.marker ? "3px" : "0.5rem",
        "--ListItem-gap": "0.5rem",
        "--ListItemDecorator-size": ownerState.orientation === "horizontal" ? "1.5rem" : "2rem",
        "--Icon-fontSize": theme.vars.fontSize.lg
      };
    }
    if (size === "md") {
      return {
        "--ListDivider-gap": "0.375rem",
        "--ListItem-minHeight": "2.25rem",
        "--ListItem-paddingY": "0.25rem",
        "--ListItem-paddingX": ownerState.marker ? "0.25rem" : "0.75rem",
        "--ListItem-gap": "0.625rem",
        "--ListItemDecorator-size": ownerState.orientation === "horizontal" ? "1.75rem" : "2.5rem",
        "--Icon-fontSize": theme.vars.fontSize.xl
      };
    }
    if (size === "lg") {
      return {
        "--ListDivider-gap": "0.5rem",
        "--ListItem-minHeight": "2.75rem",
        "--ListItem-paddingY": "0.375rem",
        "--ListItem-paddingX": ownerState.marker ? "0.5rem" : "1rem",
        "--ListItem-gap": "0.75rem",
        "--ListItemDecorator-size": ownerState.orientation === "horizontal" ? "2.25rem" : "3rem",
        "--Icon-fontSize": theme.vars.fontSize.xl2
      };
    }
    return {};
  }
  return [ownerState.nesting && _extends({}, applySizeVars(ownerState.instanceSize), {
    "--ListItem-paddingRight": "var(--ListItem-paddingX)",
    "--ListItem-paddingLeft": "var(--NestedListItem-paddingLeft)",
    // reset ListItem, ListItemButton negative margin (caused by NestedListItem)
    "--ListItemButton-marginBlock": "0px",
    "--ListItemButton-marginInline": "0px",
    "--ListItem-marginBlock": "0px",
    "--ListItem-marginInline": "0px",
    padding: 0
  }, ownerState.marker && {
    paddingInlineStart: "calc(3ch - var(--_List-markerDeduct, 0px))"
    // the width of the marker
  }, {
    marginInlineStart: "var(--NestedList-marginLeft)",
    marginInlineEnd: "var(--NestedList-marginRight)",
    marginBlockStart: "var(--List-gap)",
    marginBlockEnd: "initial"
    // reset user agent stylesheet.
  }), !ownerState.nesting && _extends({}, applySizeVars(ownerState.size), {
    "--List-gap": "0px",
    "--List-nestedInsetStart": "0px",
    "--ListItem-paddingLeft": "var(--ListItem-paddingX)",
    "--ListItem-paddingRight": "var(--ListItem-paddingX)"
  }, ownerState.marker && {
    "--_List-markerDeduct": "1ch"
  }, {
    // Automatic radius adjustment kicks in only if '--List-padding' and '--List-radius' are provided.
    "--unstable_List-childRadius": "calc(max(var(--List-radius) - var(--List-padding), min(var(--List-padding) / 2, var(--List-radius) / 2)) - var(--variant-borderWidth, 0px))",
    "--ListItem-radius": "var(--unstable_List-childRadius)",
    // by default, The ListItem & ListItemButton use automatic radius adjustment based on the parent List.
    "--ListItem-startActionTranslateX": "calc(0.5 * var(--ListItem-paddingLeft))",
    "--ListItem-endActionTranslateX": "calc(-0.5 * var(--ListItem-paddingRight))",
    margin: "initial"
  }, theme.typography[`body-${ownerState.size}`], ownerState.orientation === "horizontal" ? _extends({}, ownerState.wrap ? {
    padding: "var(--List-padding)",
    // Fallback is not needed for row-wrap List
    marginInlineStart: "calc(-1 * var(--List-gap))",
    marginBlockStart: "calc(-1 * var(--List-gap))"
  } : {
    paddingInline: "var(--List-padding, var(--ListDivider-gap))",
    paddingBlock: "var(--List-padding)"
  }) : {
    paddingBlock: "var(--List-padding, var(--ListDivider-gap))",
    paddingInline: "var(--List-padding)"
  }, ownerState.marker && {
    paddingInlineStart: "3ch"
    // the width of the marker
  }), _extends({
    boxSizing: "border-box",
    borderRadius: "var(--List-radius)",
    listStyle: "none",
    display: "flex",
    flexDirection: ownerState.orientation === "horizontal" ? "row" : "column"
  }, ownerState.wrap && {
    flexWrap: "wrap"
  }, ownerState.marker && {
    "--_List-markerDisplay": "list-item",
    "--_List-markerType": ownerState.marker,
    lineHeight: "calc(var(--ListItem-minHeight) - 2 * var(--ListItem-paddingY))"
  }, {
    flexGrow: 1,
    position: "relative"
  }, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color], {
    "--unstable_List-borderWidth": "var(--variant-borderWidth, 0px)"
  }, borderRadius !== void 0 && {
    "--List-radius": borderRadius
  }, p !== void 0 && {
    "--List-padding": p
  }, padding !== void 0 && {
    "--List-padding": padding
  })];
});
var ListRoot = styled_default(StyledList, {
  name: "JoyList",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var List = React3.forwardRef(function List2(inProps, ref) {
  var _inProps$size;
  const nesting = React3.useContext(NestedListContext_default);
  const group = React3.useContext(GroupListContext_default);
  const radioGroupContext = React3.useContext(RadioGroupContext_default);
  const props = useThemeProps({
    props: inProps,
    name: "JoyList"
  });
  const {
    component,
    className,
    children,
    size: sizeProp,
    orientation = "vertical",
    wrap = false,
    variant = "plain",
    color = "neutral",
    role: roleProp,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const size = sizeProp || ((_inProps$size = inProps.size) != null ? _inProps$size : "md");
  let role;
  if (group) {
    role = "group";
  }
  if (radioGroupContext) {
    role = "presentation";
  }
  if (roleProp) {
    role = roleProp;
  }
  const ownerState = _extends({}, props, {
    instanceSize: inProps.size,
    size,
    nesting,
    orientation,
    wrap,
    variant,
    color,
    role
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
    elementType: ListRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      as: component,
      role,
      "aria-labelledby": typeof nesting === "string" ? nesting : void 0
    }
  });
  return (0, import_jsx_runtime2.jsx)(SlotRoot, _extends({}, rootProps, {
    children: (0, import_jsx_runtime2.jsx)(ComponentListContext_default.Provider, {
      value: `${typeof component === "string" ? component : ""}:${role || ""}`,
      children: (0, import_jsx_runtime2.jsx)(ListProvider_default, {
        row: orientation === "horizontal",
        wrap,
        children
      })
    })
  }));
});
true ? List.propTypes = {
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
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The marker (such as a disc, character, or custom counter style) of the list items.
   * When this prop is specified, the List Item changes the CSS display to `list-item` in order to apply the marker.
   *
   * To see all available options, check out the [MDN list-style-type page](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type).
   */
  marker: import_prop_types.default.string,
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: import_prop_types.default.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: import_prop_types.default.string,
  /**
   * The size of the component (affect other nested list* components).
   * @default 'md'
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["sm", "md", "lg"]), import_prop_types.default.string]),
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
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string]),
  /**
   * Only for horizontal list.
   * If `true`, the list sets the flex-wrap to "wrap" and adjust margin to have gap-like behavior (will move to `gap` in the future).
   *
   * @default false
   */
  wrap: import_prop_types.default.bool
} : void 0;
var List_default = List;
export {
  List_default as default,
  getListUtilityClass,
  listClasses_default as listClasses
};
//# sourceMappingURL=@mui_joy_List.js.map
