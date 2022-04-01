import { Theme } from "./typing";

export default function ui(theme: Theme): unknown {
  return {
    // activityBar
    "activityBar.background": theme.ui.uibackgroundalt,
    "activityBar.border": theme.ui.uiborder,
    "activityBar.foreground": theme.ui.primary,
    "activityBar.inactiveForeground": `${theme.ui.defaultalt}AA`,
    "activityBarBadge.background": theme.ui.primary,
    "activityBarBadge.foreground": theme.ui.uibackgroundalt,
    // badge
    "badge.background": theme.ui.primary,
    "badge.foreground": theme.ui.uibackgroundalt,
    // breadcrumb
    "breadcrumbPicker.background": theme.ui.uibackground,
    // button
    "button.background": theme.ui.primary,
    "button.foreground": theme.ui.uibackgroundalt,
    "button.secondaryBackground": `${theme.ui.primary}30`,
    "button.secondaryForeground": theme.ui.default,
    "extensionButton.prominentBackground": `${theme.ui.primary}9d`,
    "extensionButton.prominentForeground": theme.ui.uibackgroundalt,
    "extensionButton.prominentHoverBackground": theme.ui.primary,
    // charts
    "charts.foreground": theme.ui.default,
    "charts.lines": theme.ui.default,
    "charts.red": theme.colors.red,
    "charts.blue": theme.colors.blue,
    "charts.yellow": theme.colors.yellow,
    "charts.orange": theme.colors.orange,
    "charts.green": theme.colors.green,
    "charts.purple": theme.colors.pink,
    // common
    contrastActiveBorder: "#00000000",
    errorForeground: theme.levels.danger,
    focusBorder: `${theme.ui.primary}40`,
    foreground: theme.ui.defaultalt,
    "selection.background": `${theme.ui.primary}60`,
    "widget.shadow": "#00000000",
    "icon.foreground": theme.ui.defaultalt,
    "icon.hoverBackground": "FF0000",
    // debug
    "debugExceptionWidget.background": theme.ui.primaryalt,
    "debugExceptionWidget.border": theme.ui.uiborder,
    "debugToolBar.background": theme.ui.primaryalt,
    // description
    descriptionForeground: theme.ui.default,
    // diff
    "diffEditor.border": theme.ui.uiborder,
    "diffEditor.insertedTextBackground": `${theme.levels.success}20`,
    "diffEditor.removedTextBackground": `${theme.levels.danger}25`,
    "diffEditor.diagonalFill": `${theme.ui.uiborder}80`,
    // dropdown
    "dropdown.background": theme.ui.uibackground,
    "dropdown.border": `${theme.ui.defaultalt}aa`,
    "dropdown.foreground": theme.ui.default,
    // editor
    "editorCursor.background": theme.ui.primary,
    "editorBracketHighlight.foreground1": theme.colors.yellow,
    "editorBracketHighlight.foreground2": theme.colors.purple,
    "editorBracketHighlight.foreground3": theme.colors.blue,
    "editor.background": theme.ui.uibackground,
    "editor.findMatchBackground": `${theme.ui.primary}20`,
    "editor.findMatchBorder": `${theme.ui.primary}60`,
    "editor.findMatchHighlightBackground": `${theme.ui.primary}20`,
    "editor.findMatchHighlightBorder": `${theme.ui.primary}40`,
    "editor.foreground": theme.ui.default,
    "editor.hoverHighlightBackground": `${theme.ui.primary}40`,
    "editor.lineHighlightBackground": `${theme.ui.primary}0c`,
    "editor.lineHighlightBorder": `${theme.ui.primary}1a`,
    "editor.rangeHighlightBackground": `${theme.ui.primary}20`,
    "editor.selectionBackground": `${theme.ui.primary}25`,
    "editor.selectionForeground": theme.ui.primary,
    "editor.inactiveSelectionBackground": `${theme.ui.primary}20`,
    "editor.selectionHighlightBorder": `${theme.ui.primary}60`,
    "editor.selectionHighlightBackground": "#00000000",
    "editor.wordHighlightStrongBackground": `${theme.ui.primary}40`,
    "editor.wordHighlightBackground": `${theme.ui.primary}20`,
    "editorBracketMatch.background": `${theme.ui.primary}20`,
    "editorBracketMatch.border": `${theme.ui.primary}40`,
    "editorCodeLens.foreground": theme.ui.default,
    "editorCursor.foreground": theme.colors.yellow,
    "editorGroup.border": theme.ui.uiborder,
    "editorGroup.dropBackground": `${theme.ui.primary}15`,
    "editorHoverWidget.background": theme.ui.primaryalt,
    "editorHoverWidget.border": theme.ui.uibackgroundalt,
    "editorIndentGuide.background": `${theme.ui.defaultalt}30`,
    "editorIndentGuide.activeBackground": `${theme.ui.defaultalt}bb`,
    "editorLink.activeForeground": theme.ui.default,
    "editorWarning.border": "#00000000",
    "editorGutter.commentRangeForeground": theme.ui.primaryalt,
    "sash.hoverBorder": `${theme.ui.primary}50`,
    "editorRuler.foreground": theme.ui.defaultalt + "50",
    //  "editorError.background": `${theme.levels.danger}20`,
    //  "editorWarning.background": `${theme.levels.warning}20`,
    //  "editorInfo.background": `${theme.levels.info}20`,
    // editorMarker
    // find
    "editorWarning.foreground": theme.colors.yellow,
    "editorWhitespace.foreground": `${theme.ui.defaultalt}60`,
    "editorWidget.background": theme.ui.primaryalt,
    "editorWidget.resizeBorder": `${theme.ui.primary}50`,
    // gutter
    "editorGutter.background": theme.ui.uibackground,
    "editorGutter.addedBackground": `${theme.levels.success}cc`,
    "editorGutter.deletedBackground": `${theme.levels.danger}cc`,
    "editorGutter.modifiedBackground": `${theme.levels.info}cc`,
    "editorLineNumber.foreground": `${theme.ui.defaultalt}90`,
    "editorLineNumber.activeForeground": theme.ui.defaultalt,
    // input
    "input.background": "#00000000",
    "input.foreground": theme.ui.defaultMain,
    "input.border": `${theme.ui.primary}30`,
    "input.placeholderForeground": `${theme.ui.primary}60`,
    "inputOption.activeBorder": theme.ui.primary,
    "inputValidation.errorBackground": theme.ui.primaryalt,
    "inputValidation.errorBorder": theme.colors.yellow,
    "inputValidation.infoBackground": theme.ui.primaryalt,
    "inputValidation.infoBorder": theme.ui.primary,
    "inputValidation.warningBackground": theme.ui.primaryalt,
    "inputValidation.warningBorder": theme.colors.yellow,
    // list
    "list.activeSelectionBackground": `${theme.ui.primary}25`,
    "list.inactiveSelectionBackground": `${theme.ui.primary}25`,
    "list.dropBackground": `${theme.ui.primary}15`,
    "list.focusBackground": `${theme.ui.primary}40`,
    "list.focusForeground": theme.ui.defaultMain,
    "list.errorForeground": theme.levels.danger,
    "list.warningForeground": theme.levels.warning,
    "list.highlightForeground": theme.colors.yellow,
    "list.activeSelectionForeground": theme.ui.default,
    "list.hoverBackground": `${theme.ui.uiborder}60`,
    "list.hoverForeground": theme.ui.default,
    "gitDecoration.modifiedResourceForeground": theme.levels.info,
    "gitDecoration.deletedResourceForeground": theme.levels.danger,
    "gitDecoration.untrackedResourceForeground": theme.levels.success,
    "gitDecoration.ignoredResourceForeground": theme.ui.defaultalt,
    "gitDecoration.conflictingResourceForeground": theme.ui.primary,
    "gitDecoration.stageAddedResourceForeground": theme.colors.red,
    // menu
    "menu.background": theme.ui.primaryalt,
    "menu.foreground": theme.ui.defaultMain,
    "menu.separatorBackground": theme.ui.uiborder,
    "menu.selectionForeground": theme.ui.defaultMain,
    "menubar.selectionBackground": theme.ui.primaryalt,
    "menubar.selectionForeground": theme.ui.defaultMain,
    "menu.border": theme.ui.uiborder,

    // merge
    "merge.border": theme.ui.uiborder,
    "merge.commonContentBackground": `${theme.colors.yellow}30`,
    "merge.commonHeaderBackground": `${theme.colors.yellow}80`,
    "merge.currentContentBackground": `${theme.levels.success}30`,
    "merge.currentHeaderBackground": `${theme.levels.success}80`,
    "merge.incomingContentBackground": `${theme.levels.info}30`,
    "merge.incomingHeaderBackground": `${theme.levels.info}80`,
    "editorOverviewRuler.border": theme.ui.uiborder,
    "editorOverviewRuler.commonContentForeground": theme.colors.yellow,
    "editorOverviewRuler.currentContentForeground": theme.levels.danger,
    "editorOverviewRuler.incomingContentForeground": theme.levels.success,
    // notification
    "notificationCenterHeader.foreground": theme.ui.defaultMain,
    "notificationCenterHeader.background": theme.ui.primaryalt,
    "notifications.foreground": theme.ui.defaultMain,
    "notifications.background": theme.ui.primaryalt,
    "notifications.border": `${theme.ui.primary}50`,
    "notificationLink.foreground": theme.colors.yellow,
    // panel
    "panel.background": theme.ui.uibackground,
    "panel.border": theme.ui.uiborder,
    "panelInput.border": theme.ui.defaultalt,
    "panelSection.background": theme.ui.uiborder,
    "panelSection.border": theme.ui.uiborder,
    "panelTitle.activeBorder": theme.ui.primary,
    "panelTitle.activeForeground": theme.ui.primary,
    "panelTitle.inactiveForeground": theme.ui.defaultalt,
    "panelSectionHeader.background": `${theme.ui.defaultalt}20`,
    "panelSectionHeader.foreground": theme.ui.default,
    "panelSectionHeader.border": theme.ui.uiborder,
    // pickView
    "peekView.border": theme.ui.primary,
    "peekViewEditor.background": `${theme.ui.primaryalt}40`,
    "peekViewEditor.matchHighlightBackground": `${theme.ui.primaryalt}40`,
    "peekViewResult.background": `${theme.ui.primaryalt}40`,
    "peekViewResult.fileForeground": theme.ui.default,
    "peekViewResult.lineForeground": theme.ui.default,
    "peekViewResult.matchHighlightBackground": theme.ui.primaryalt,
    "peekViewResult.selectionBackground": theme.ui.primaryalt,
    "peekViewResult.selectionForeground": theme.ui.default,
    "peekViewTitle.background": theme.ui.uiborder,
    "peekViewTitleDescription.foreground": theme.ui.default,
    "peekViewTitleLabel.foreground": theme.ui.default,
    "peekViewEditorGutter.background": `${theme.ui.primaryalt}40`,
    "editorMarkerNavigation.background": theme.ui.uibackgroundalt,
    "editorMarkerNavigationError.background": `${theme.levels.danger}90`,
    "editorMarkerNavigationWarning.background": `${theme.levels.warning}90`,
    "editorMarkerNavigationInfo.background": `${theme.levels.info}90`,
    // picker
    "pickerGroup.border": theme.ui.uiborder,
    "pickerGroup.foreground": theme.ui.default,
    // progressbar
    "progressBar.background": theme.colors.yellow,
    // scrollbar
    "scrollbar.shadow": `${theme.ui.uiborder}80`,
    "scrollbarSlider.activeBackground": `${theme.ui.primary}40`,
    "scrollbarSlider.background": `${theme.ui.primary}20`,
    "scrollbarSlider.hoverBackground": `${theme.ui.primary}30`,
    // settings
    "settings.modifiedItemIndicator": theme.ui.primary,
    "settings.headerForeground": theme.ui.primary,
    // sidebar
    "sideBar.background": theme.ui.uibackgroundalt,
    "sideBar.border": theme.ui.uiborder,
    "sideBar.foreground": `${theme.ui.default}bb`,
    "sideBarSectionHeader.background": theme.ui.uibackgroundalt,
    "sideBarSectionHeader.foreground": theme.ui.default,
    "sideBarSectionHeader.border": theme.ui.uiborder,
    "sideBarTitle.foreground": theme.ui.defaultalt,
    "tree.indentGuidesStroke": `${theme.ui.defaultalt}70`,
    // statusBar
    "statusBar.background": theme.ui.uibackgroundalt,
    "statusBar.border": theme.ui.uiborder,
    "statusBar.debuggingBackground": `${theme.ui.primary}44`,
    "statusBar.debuggingForeground": theme.ui.default,
    "statusBar.foreground": theme.ui.default,
    "statusBar.noFolderBackground": theme.ui.uiborder,
    "statusBar.noFolderBorder": theme.ui.primary,
    "statusBar.noFolderForeground": theme.ui.default,
    "statusBarItem.activeBackground": theme.ui.primaryalt,
    "statusBarItem.hoverBackground": `${theme.ui.defaultalt}30`,
    "statusBarItem.prominentBackground": theme.ui.uiborder,
    "statusBarItem.prominentHoverBackground": theme.ui.primaryalt,
    "statusBarItem.errorBackground": theme.colors.red,
    //  "statusBarItem.errorForeground": theme.colors.red,
    // suggest
    "editorSuggestWidget.background": theme.ui.uibackground,
    "editorSuggestWidget.border": theme.ui.uiborder,
    "editorSuggestWidget.foreground": theme.ui.defaultMain,
    "editorSuggestWidget.highlightForeground": theme.colors.yellow,
    "editorSuggestWidget.selectedBackground": `${theme.ui.primary}4d`,
    // tabs
    "editorGroupHeader.noTabsBackground": theme.ui.uibackground,
    "editorGroupHeader.tabsBackground": theme.ui.uibackgroundalt,
    "editorGroupHeader.tabsBorder": theme.ui.uiborder,
    "editorGroupHeader.border": "#00000000",
    "tab.activeBackground": theme.ui.uibackground,
    "tab.activeForeground": theme.ui.primary,
    "tab.activeBorderTop": theme.ui.primary,
    "tab.border": theme.ui.uiborder,
    "tab.hoverBorder": "#00000000",
    "tab.hoverBackground": `${theme.ui.uibackground}cc`,
    "tab.unfocusedHoverBackground": `${theme.ui.primary}10`,
    "tab.unfocusedHoverBorder": "#00000000",
    "tab.inactiveBackground": theme.ui.uibackgroundalt,
    "tab.inactiveForeground": theme.ui.defaultalt,
    "tab.unfocusedActiveForeground": theme.ui.default,
    "tab.unfocusedInactiveForeground": theme.ui.default,
    "tab.lastPinnedBorder": theme.ui.uiborder,
    // terminal
    "terminal.ansiBlack": theme.ui.uibackground,
    "terminal.ansiRed": theme.levels.danger,
    "terminal.ansiGreen": theme.levels.success,
    "terminal.ansiYellow": theme.colors.yellow,
    "terminal.ansiBlue": theme.levels.info,
    "terminal.ansiMagenta": theme.colors.pink,
    "terminal.ansiCyan": theme.colors.turquoize,
    "terminal.ansiWhite": theme.ui.default,
    "terminal.ansiBrightBlack": theme.levels.info,
    "terminal.ansiBrightRed": theme.levels.danger,
    "terminal.ansiBrightGreen": theme.levels.success,
    "terminal.ansiBrightYellow": theme.colors.yellow,
    "terminal.ansiBrightBlue": theme.levels.info,
    "terminal.ansiBrightMagenta": theme.colors.pink,
    "terminal.ansiBrightCyan": theme.colors.turquoize,
    "terminal.ansiBrightWhite": theme.ui.default,
    "terminal.background": theme.ui.uibackground,
    "terminal.foreground": theme.ui.default,
    "terminalCursor.background": theme.colors.yellow,
    "terminalCursor.foreground": theme.colors.yellow,
    // text
    "textBlockQuote.background": `${theme.levels.info}34`,
    "textBlockQuote.border": `${theme.levels.info}b9`,
    "textCodeBlock.background": `${theme.levels.info}34`,
    "textLink.activeForeground": theme.levels.info,
    "textLink.foreground": theme.levels.info,
    "textPreformat.foreground": theme.colors.yellow,
    "textSeparator.foreground": theme.ui.primary,
    "walkThrough.embeddedEditorBackground": theme.ui.uibackground,
    // titleBar
    "titleBar.activeBackground": theme.ui.uibackgroundalt,
    "titleBar.activeForeground": theme.ui.defaultalt,
    "titleBar.inactiveBackground": theme.ui.uiborder,
    "titleBar.inactiveForeground": theme.ui.defaultalt,
    "titleBar.border": theme.ui.uiborder,
  };
}
