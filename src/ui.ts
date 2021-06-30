import { Theme } from "./typing";

export default function ui(theme: Theme) {
  return {
    // activityBar
    "activityBar.background": theme.uibackgroundalt,
    "activityBar.border": theme.uiborder,
    "activityBar.foreground": theme.primary,
    "activityBar.inactiveForeground": `${theme.defaultalt}AA`,
    "activityBarBadge.background": theme.primary,
    "activityBarBadge.foreground": theme.uibackgroundalt,
    // badge
    "badge.background": theme.primary,
    "badge.foreground": theme.uibackgroundalt,
    // breadcrumb
    "breadcrumbPicker.background": theme.uibackground,
    // button
    "button.background": theme.primary,
    "button.foreground": theme.uibackgroundalt,
    "button.secondaryBackground": `${theme.primary}30`,
    "button.secondaryForeground": theme.default,
    "extensionButton.prominentBackground": `${theme.primary}9d`,
    "extensionButton.prominentForeground": theme.uibackgroundalt,
    "extensionButton.prominentHoverBackground": theme.primary,
    // charts
    "charts.foreground": theme.default,
    "charts.lines": theme.default,
    "charts.red": theme.red,
    "charts.blue": theme.blue,
    "charts.yellow": theme.yellow,
    "charts.orange": theme.orange,
    "charts.green": theme.green,
    "charts.purple": theme.pink,
    // common
    contrastActiveBorder: "#00000000",
    errorForeground: theme.danger,
    focusBorder: `${theme.primary}40`,
    foreground: theme.default,
    "selection.background": `${theme.primary}60`,
    "widget.shadow": theme.uiborder,
    "icon.foreground": theme.default,
    // debug
    "debugExceptionWidget.background": theme.primaryalt,
    "debugExceptionWidget.border": theme.uiborder,
    "debugToolBar.background": theme.primaryalt,
    // description
    descriptionForeground: theme.default,
    // diff
    "diffEditor.border": theme.uiborder,
    "diffEditor.insertedTextBackground": `${theme.success}20`,
    "diffEditor.removedTextBackground": `${theme.danger}20`,
    "diffEditor.diagonalFill": theme.primaryalt,
    // dropdown
    "dropdown.background": theme.uibackground,
    "dropdown.border": `${theme.defaultalt}aa`,
    "dropdown.foreground": theme.default,
    // editor
    "editor.background": theme.uibackground,
    "editor.findMatchBackground": `${theme.primary}20`,
    "editor.findMatchBorder": `${theme.primary}60`,
    "editor.findMatchHighlightBackground": `${theme.primary}20`,
    "editor.findMatchHighlightBorder": `${theme.primary}40`,
    "editor.foreground": theme.default,
    "editor.hoverHighlightBackground": `${theme.primary}40`,
    "editor.lineHighlightBackground": `${theme.primary}0c`,
    "editor.lineHighlightBorder": `${theme.primary}1a`,
    "editor.rangeHighlightBackground": `${theme.primary}20`,
    "editor.selectionBackground": `${theme.primary}30`,
    "editor.selectionForeground": theme.primary,
    "editor.inactiveSelectionBackground": `${theme.primary}20`,
    "editor.selectionHighlightBorder": `${theme.primary}60`,
    "editor.selectionHighlightBackground": "#00000000",
    "editor.wordHighlightStrongBackground": `${theme.primary}40`,
    "editor.wordHighlightBackground": `${theme.primary}20`,
    "editorBracketMatch.background": `${theme.primary}20`,
    "editorBracketMatch.border": `${theme.primary}40`,
    "editorCodeLens.foreground": theme.default,
    "editorCursor.foreground": theme.yellow,
    "editorGroup.border": theme.uiborder,
    "editorGroup.dropBackground": `${theme.primary}15`,
    "editorHoverWidget.background": theme.primaryalt,
    "editorHoverWidget.border": theme.uibackgroundalt,
    "editorIndentGuide.background": `${theme.defaultalt}30`,
    "editorIndentGuide.activeBackground": `${theme.defaultalt}bb`,
    "editorLink.activeForeground": theme.default,
    "editorWarning.border": "#00000000",
    "editorGutter.commentRangeForeground": theme.primaryalt,
    "sash.hoverBorder": `${theme.primary}50`,
    //  "editorError.background": `${theme.danger}20`,
    //  "editorWarning.background": `${theme.warning}20`,
    //  "editorInfo.background": `${theme.info}20`,
    // editorMarker
    // find
    "editorWarning.foreground": theme.yellow,
    "editorWhitespace.foreground": `${theme.defaultalt}60`,
    "editorWidget.background": theme.primaryalt,
    "editorWidget.resizeBorder": `${theme.primary}50`,
    // gutter
    "editorGutter.background": theme.uibackground,
    "editorGutter.addedBackground": `${theme.success}cc`,
    "editorGutter.deletedBackground": `${theme.danger}cc`,
    "editorGutter.modifiedBackground": `${theme.info}cc`,
    "editorLineNumber.foreground": `${theme.defaultalt}90`,
    "editorLineNumber.activeForeground": theme.defaultalt,
    // input
    "input.background": "#00000000",
    "input.foreground": theme.defaultMain,
    "input.border": `${theme.primary}30`,
    "input.placeholderForeground": `${theme.primary}60`,
    "inputOption.activeBorder": theme.primary,
    "inputValidation.errorBackground": theme.primaryalt,
    "inputValidation.errorBorder": theme.yellow,
    "inputValidation.infoBackground": theme.primaryalt,
    "inputValidation.infoBorder": theme.primary,
    "inputValidation.warningBackground": theme.primaryalt,
    "inputValidation.warningBorder": theme.yellow,
    // list
    "list.activeSelectionBackground": `${theme.primary}45`,
    "list.dropBackground": `${theme.primary}15`,
    "list.focusBackground": `${theme.primary}40`,
    "list.focusForeground": theme.defaultMain,
    "list.errorForeground": theme.danger,
    "list.warningForeground": theme.warning,
    "list.highlightForeground": theme.yellow,
    "list.activeSelectionForeground": theme.default,
    "list.hoverBackground": `${theme.uiborder}60`,
    "list.hoverForeground": theme.default,
    "list.inactiveSelectionBackground": `${theme.primary}45`,
    "gitDecoration.modifiedResourceForeground": theme.info,
    "gitDecoration.deletedResourceForeground": theme.danger,
    "gitDecoration.untrackedResourceForeground": theme.success,
    "gitDecoration.ignoredResourceForeground": theme.defaultalt,
    "gitDecoration.conflictingResourceForeground": theme.primary,
    "gitDecoration.stageAddedResourceForeground": theme.red,
    // menu
    "menu.background": theme.primaryalt,
    "menu.foreground": theme.defaultMain,
    "menu.separatorBackground": theme.uiborder,
    "menu.selectionBackground": `${theme.primary}20`,
    "menu.selectionForeground": theme.defaultMain,
    "menubar.selectionBackground": theme.primaryalt,
    "menubar.selectionForeground": theme.defaultMain,
    // merge
    "merge.border": theme.uiborder,
    "merge.commonContentBackground": `${theme.yellow}30`,
    "merge.commonHeaderBackground": `${theme.yellow}80`,
    "merge.currentContentBackground": `${theme.success}30`,
    "merge.currentHeaderBackground": `${theme.success}80`,
    "merge.incomingContentBackground": `${theme.info}30`,
    "merge.incomingHeaderBackground": `${theme.info}80`,
    "editorOverviewRuler.border": theme.uiborder,
    "editorOverviewRuler.commonContentForeground": theme.yellow,
    "editorOverviewRuler.currentContentForeground": theme.danger,
    "editorOverviewRuler.incomingContentForeground": theme.success,
    // notification
    "notificationCenterHeader.foreground": theme.defaultMain,
    "notificationCenterHeader.background": theme.primaryalt,
    "notifications.foreground": theme.defaultMain,
    "notifications.background": theme.primaryalt,
    "notifications.border": `${theme.primary}50`,
    "notificationLink.foreground": theme.yellow,
    // panel
    "panel.background": theme.uibackground,
    "panel.border": theme.uiborder,
    "panelInput.border": theme.defaultalt,
    "panelSection.background": theme.uiborder,
    "panelSection.border": theme.uiborder,
    "panelTitle.activeBorder": theme.primary,
    "panelTitle.activeForeground": theme.primary,
    "panelTitle.inactiveForeground": theme.defaultalt,
    "panelSectionHeader.background": `${theme.defaultalt}20`,
    "panelSectionHeader.foreground": theme.default,
    "panelSectionHeader.border": theme.uiborder,
    // pickView
    "peekView.border": theme.primary,
    "peekViewEditor.background": `${theme.primaryalt}40`,
    "peekViewEditor.matchHighlightBackground": `${theme.primaryalt}40`,
    "peekViewResult.background": `${theme.primaryalt}40`,
    "peekViewResult.fileForeground": theme.default,
    "peekViewResult.lineForeground": theme.default,
    "peekViewResult.matchHighlightBackground": theme.primaryalt,
    "peekViewResult.selectionBackground": theme.primaryalt,
    "peekViewResult.selectionForeground": theme.default,
    "peekViewTitle.background": theme.uiborder,
    "peekViewTitleDescription.foreground": theme.default,
    "peekViewTitleLabel.foreground": theme.default,
    "peekViewEditorGutter.background": `${theme.primaryalt}40`,
    "editorMarkerNavigation.background": theme.uibackgroundalt,
    "editorMarkerNavigationError.background": `${theme.danger}90`,
    "editorMarkerNavigationWarning.background": `${theme.warning}90`,
    "editorMarkerNavigationInfo.background": `${theme.info}90`,
    // picker
    "pickerGroup.border": theme.uiborder,
    "pickerGroup.foreground": theme.default,
    // progressbar
    "progressBar.background": theme.yellow,
    // scrollbar
    "scrollbar.shadow": theme.uiborder,
    "scrollbarSlider.activeBackground": `${theme.primary}60`,
    "scrollbarSlider.background": `${theme.primary}40`,
    "scrollbarSlider.hoverBackground": `${theme.primary}50`,
    // settings
    "settings.modifiedItemIndicator": theme.primary,
    "settings.headerForeground": theme.primary,
    // sidebar
    "sideBar.background": theme.uibackgroundalt,
    "sideBar.border": theme.uiborder,
    "sideBar.foreground": `${theme.default}bb`,
    "sideBarSectionHeader.background": theme.uibackgroundalt,
    "sideBarSectionHeader.foreground": theme.default,
    "sideBarSectionHeader.border": theme.uiborder,
    "sideBarTitle.foreground": theme.defaultalt,
    "tree.indentGuidesStroke": `${theme.defaultalt}70`,
    // statusBar
    "statusBar.background": theme.uibackgroundalt,
    "statusBar.border": theme.uiborder,
    "statusBar.debuggingBackground": `${theme.primary}44`,
    "statusBar.debuggingForeground": theme.default,
    "statusBar.foreground": theme.default,
    "statusBar.noFolderBackground": theme.uiborder,
    "statusBar.noFolderBorder": theme.primary,
    "statusBar.noFolderForeground": theme.default,
    "statusBarItem.activeBackground": theme.primaryalt,
    "statusBarItem.hoverBackground": `${theme.defaultalt}30`,
    "statusBarItem.prominentBackground": theme.uiborder,
    "statusBarItem.prominentHoverBackground": theme.primaryalt,
    "statusBarItem.errorBackground": theme.red,
    //  "statusBarItem.errorForeground": theme.red,
    // suggest
    "editorSuggestWidget.background": theme.uibackground,
    "editorSuggestWidget.border": theme.uiborder,
    "editorSuggestWidget.foreground": theme.defaultMain,
    "editorSuggestWidget.highlightForeground": theme.yellow,
    "editorSuggestWidget.selectedBackground": `${theme.primary}4d`,
    // tabs
    "editorGroupHeader.noTabsBackground": theme.uibackground,
    "editorGroupHeader.tabsBackground": theme.uibackgroundalt,
    "editorGroupHeader.tabsBorder": "#00000000",
    "editorGroupHeader.border": "#00000000",
    "tab.activeBackground": theme.uibackground,
    "tab.activeForeground": theme.primary,
    "tab.activeBorderTop": theme.primary,
    "tab.border": "#00000000",
    "tab.hoverBorder": "#00000000",
    "tab.hoverBackground": `${theme.uibackground}cc`,
    "tab.unfocusedHoverBackground": `${theme.primary}10`,
    "tab.unfocusedHoverBorder": "#00000000",
    "tab.inactiveBackground": theme.uibackgroundalt,
    "tab.inactiveForeground": theme.defaultalt,
    "tab.unfocusedActiveForeground": theme.default,
    "tab.unfocusedInactiveForeground": theme.default,
    "tab.lastPinnedBorder": theme.uiborder,
    // terminal
    "terminal.ansiBlack": theme.uibackground,
    "terminal.ansiRed": theme.danger,
    "terminal.ansiGreen": theme.success,
    "terminal.ansiYellow": theme.yellow,
    "terminal.ansiBlue": theme.info,
    "terminal.ansiMagenta": theme.pink,
    "terminal.ansiCyan": theme.turquoize,
    "terminal.ansiWhite": theme.default,
    "terminal.ansiBrightBlack": theme.info,
    "terminal.ansiBrightRed": theme.danger,
    "terminal.ansiBrightGreen": theme.success,
    "terminal.ansiBrightYellow": theme.yellow,
    "terminal.ansiBrightBlue": theme.info,
    "terminal.ansiBrightMagenta": theme.pink,
    "terminal.ansiBrightCyan": theme.turquoize,
    "terminal.ansiBrightWhite": theme.info,
    "terminal.background": theme.uibackground,
    "terminal.foreground": theme.defaultMain,
    "terminalCursor.background": theme.yellow,
    "terminalCursor.foreground": theme.yellow,
    // text
    "textBlockQuote.background": `${theme.info}34`,
    "textBlockQuote.border": `${theme.info}b9`,
    "textCodeBlock.background": `${theme.info}34`,
    "textLink.activeForeground": theme.info,
    "textLink.foreground": theme.info,
    "textPreformat.foreground": theme.yellow,
    "textSeparator.foreground": theme.primary,
    "walkThrough.embeddedEditorBackground": theme.uibackground,
    // titleBar
    "titleBar.activeBackground": theme.uibackgroundalt,
    "titleBar.activeForeground": theme.defaultalt,
    "titleBar.inactiveBackground": theme.uiborder,
    "titleBar.inactiveForeground": theme.defaultalt,
    "titleBar.border": theme.uiborder
  };
}