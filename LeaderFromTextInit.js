function init(basePath) {
    var action = new RGuiAction(qsTranslate("LeaderFromText", "&Leader from selected text"), RMainWindowQt.getMainWindow());
    action.setRequiresDocument(true);
    action.setScriptFile(basePath + "/LeaderFromText.js");
    action.setIcon(basePath + "/LeaderFromText.svg");
    action.setStatusTip(qsTranslate("LeaderFromText", "&LeaderFromText visible layout blocks"));
    action.setDefaultShortcut(new QKeySequence("T,2,L"));
    action.setDefaultCommands(["LeaderFromText", "lftxt"]);
    action.setGroupSortOrder(160000);
    action.setSortOrder(102);
    action.setWidgetNames(["DimensionMenu", "DimensionToolBar", "DimensionToolsPanel", "DimensionMatrixPanel"]);
}