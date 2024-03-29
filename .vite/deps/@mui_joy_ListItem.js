"use client";
import {
  getListItemUtilityClass,
  listItemClasses_default
} from "./chunk-ELTEFJNZ.js";
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
import "./chunk-OIOV6HVD.js";
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
  isMuiElement,
  require_jsx_runtime,
  require_prop_types
} from "./chunk-WJCHMYNN.js";
import {
  __toESM,
  require_react
} from "./chunk-W4VDMLRG.js";

// node_modules/@mui/joy/ListItem/ListItem.js
init_objectWithoutPropertiesLoose();
init_extends();
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_esm();
init_composeClasses();

// node_modules/@mui/joy/ListSubheader/ListSubheaderContext.js
var React = __toESM(require_react());
var ListSubheaderDispatch = React.createContext(void 0);
var ListSubheaderContext_default = ListSubheaderDispatch;

// node_modules/@mui/joy/ListItem/ListItem.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["component", "className", "children", "nested", "sticky", "variant", "color", "startAction", "endAction", "role", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    sticky,
    nested,
    nesting,
    variant,
    color
  } = ownerState;
  const slots = {
    root: ["root", nested && "nested", nesting && "nesting", sticky && "sticky", color && `color${capitalize(color)}`, variant && `variant${capitalize(variant)}`],
    startAction: ["startAction"],
    endAction: ["endAction"]
  };
  return composeClasses(slots, getListItemUtilityClass, {});
};
var StyledListItem = styled_default("li")(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  return [
    !ownerState.nested && {
      // add negative margin to ListItemButton equal to this ListItem padding
      "--ListItemButton-marginInline": `calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))`,
      "--ListItemButton-marginBlock": "calc(-1 * var(--ListItem-paddingY))",
      alignItems: "center",
      gap: "var(--ListItem-gap)",
      marginInline: "var(--ListItem-marginInline)"
    },
    ownerState.nested && {
      // add negative margin to NestedList equal to this ListItem padding
      "--NestedList-marginRight": "calc(-1 * var(--ListItem-paddingRight))",
      "--NestedList-marginLeft": "calc(-1 * var(--ListItem-paddingLeft))",
      "--NestedListItem-paddingLeft": `calc(var(--ListItem-paddingLeft) + var(--List-nestedInsetStart))`,
      // add negative margin to ListItem, ListItemButton to make them start from the edge.
      "--ListItemButton-marginBlock": "0px",
      "--ListItemButton-marginInline": "calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))",
      "--ListItem-marginInline": "calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))",
      flexDirection: "column"
    },
    // Base styles
    _extends({
      // Integration with control elements, e.g. Checkbox, Radio.
      "--unstable_actionRadius": "calc(var(--ListItem-radius) - var(--variant-borderWidth, 0px))"
    }, ownerState.startAction && {
      "--unstable_startActionWidth": "2rem"
      // to add sufficient padding-left on ListItemButton
    }, ownerState.endAction && {
      "--unstable_endActionWidth": "2.5rem"
      // to add sufficient padding-right on ListItemButton
    }, {
      boxSizing: "border-box",
      borderRadius: "var(--ListItem-radius)",
      display: "var(--_ListItem-display)",
      "&:not([hidden])": {
        "--_ListItem-display": "var(--_List-markerDisplay, flex)"
      },
      flex: "none",
      // prevent children from shrinking when the List's height is limited.
      listStyleType: "var(--_List-markerType, disc)",
      position: "relative",
      paddingBlockStart: ownerState.nested ? 0 : "var(--ListItem-paddingY)",
      paddingBlockEnd: ownerState.nested ? 0 : "var(--ListItem-paddingY)",
      paddingInlineStart: "var(--ListItem-paddingLeft)",
      paddingInlineEnd: "var(--ListItem-paddingRight)"
    }, ownerState["data-first-child"] === void 0 && _extends({}, ownerState.row ? {
      marginInlineStart: "var(--List-gap)"
    } : {
      marginBlockStart: "var(--List-gap)"
    }), ownerState.row && ownerState.wrap && {
      marginInlineStart: "var(--List-gap)",
      marginBlockStart: "var(--List-gap)"
    }, {
      minBlockSize: "var(--ListItem-minHeight)"
    }, ownerState.sticky && {
      // sticky in list item can be found in grouped options
      position: "sticky",
      top: "var(--ListItem-stickyTop, 0px)",
      // integration with Menu and Select.
      zIndex: 1,
      background: `var(--ListItem-stickyBackground, ${theme.vars.palette.background.body})`
    }, {
      [`.${listItemClasses_default.nested} > &`]: {
        "--_ListItem-display": "flex"
      }
    }),
    (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]
  ];
});
var ListItemRoot = styled_default(StyledListItem, {
  name: "JoyListItem",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var ListItemStartAction = styled_default("div", {
  name: "JoyListItem",
  slot: "StartAction",
  overridesResolver: (props, styles) => styles.startAction
})(({
  ownerState
}) => ({
  display: "inherit",
  position: "absolute",
  top: ownerState.nested ? "calc(var(--ListItem-minHeight) / 2)" : "50%",
  left: 0,
  transform: "translate(var(--ListItem-startActionTranslateX), -50%)",
  zIndex: 1
  // to stay on top of ListItemButton (default `position: relative`).
}));
var ListItemEndAction = styled_default("div", {
  name: "JoyListItem",
  slot: "StartAction",
  overridesResolver: (props, styles) => styles.startAction
})(({
  ownerState
}) => ({
  display: "inherit",
  position: "absolute",
  top: ownerState.nested ? "calc(var(--ListItem-minHeight) / 2)" : "50%",
  right: 0,
  transform: "translate(var(--ListItem-endActionTranslateX), -50%)"
}));
var ListItem = React2.forwardRef(function ListItem2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyListItem"
  });
  const group = React2.useContext(GroupListContext_default);
  const listComponent = React2.useContext(ComponentListContext_default);
  const row = React2.useContext(RowListContext_default);
  const wrap = React2.useContext(WrapListContext_default);
  const nesting = React2.useContext(NestedListContext_default);
  const {
    component: componentProp,
    className,
    children,
    nested = false,
    sticky = false,
    variant = "plain",
    color = "neutral",
    startAction,
    endAction,
    role: roleProp,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const [subheaderId, setSubheaderId] = React2.useState("");
  const [listElement, listRole] = (listComponent == null ? void 0 : listComponent.split(":")) || ["", ""];
  const component = componentProp || (listElement && !listElement.match(/^(ul|ol|menu)$/) ? "div" : void 0);
  let role = group === "menu" ? "none" : void 0;
  if (listComponent) {
    role = {
      menu: "none",
      menubar: "none",
      group: "presentation"
    }[listRole];
  }
  if (roleProp) {
    role = roleProp;
  }
  const ownerState = _extends({}, props, {
    sticky,
    startAction,
    endAction,
    row,
    wrap,
    variant,
    color,
    nesting,
    nested,
    component,
    role
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    additionalProps: {
      role
    },
    ref,
    className: clsx_default(classes.root, className),
    elementType: ListItemRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotStartAction, startActionProps] = useSlot("startAction", {
    className: classes.startAction,
    elementType: ListItemStartAction,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndAction, endActionProps] = useSlot("endAction", {
    className: classes.endAction,
    elementType: ListItemEndAction,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime.jsx)(ListSubheaderContext_default.Provider, {
    value: setSubheaderId,
    children: (0, import_jsx_runtime.jsx)(NestedListContext_default.Provider, {
      value: nested ? subheaderId || true : false,
      children: (0, import_jsx_runtime2.jsxs)(SlotRoot, _extends({}, rootProps, {
        children: [startAction && (0, import_jsx_runtime.jsx)(SlotStartAction, _extends({}, startActionProps, {
          children: startAction
        })), React2.Children.map(children, (child, index) => React2.isValidElement(child) ? React2.cloneElement(child, _extends({}, index === 0 && {
          "data-first-child": ""
        }, isMuiElement(child, ["ListItem"]) && {
          // The ListItem of ListItem should not be 'li'
          component: child.props.component || "div"
        })) : child), endAction && (0, import_jsx_runtime.jsx)(SlotEndAction, _extends({}, endActionProps, {
          children: endAction
        }))]
      }))
    })
  });
});
true ? ListItem.propTypes = {
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
   * The element to display at the end of ListItem.
   */
  endAction: import_prop_types.default.node,
  /**
   * If `true`, the component can contain NestedList.
   * @default false
   */
  nested: import_prop_types.default.bool,
  /**
   * @ignore
   */
  role: import_prop_types.default.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    endAction: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    startAction: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    endAction: import_prop_types.default.elementType,
    root: import_prop_types.default.elementType,
    startAction: import_prop_types.default.elementType
  }),
  /**
   * The element to display at the start of ListItem.
   */
  startAction: import_prop_types.default.node,
  /**
   * If `true`, the component has sticky position (with top = 0).
   * @default false
   */
  sticky: import_prop_types.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
ListItem.muiName = "ListItem";
var ListItem_default = ListItem;
export {
  ListItem_default as default,
  getListItemUtilityClass,
  listItemClasses_default as listItemClasses
};
//# sourceMappingURL=@mui_joy_ListItem.js.map
