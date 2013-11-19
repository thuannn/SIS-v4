function $setText_3(this$static, text){
  $setText_4(this$static.impl, text);
}

function RichTextArea_0(){
  this.impl = new RichTextAreaImplIE6_0;
  $setElement(this, this.impl.elem);
  this.element['className'] = 'gwt-RichTextArea';
}

defineSeed(512, 426, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), RichTextArea_0);
_.onAttach = function onAttach_7(){
  $onAttach_2(this);
  $initElement(this.impl);
}
;
_.onDetach = function onDetach_6(){
  $onDetach_1(this);
  $uninitElement(this.impl);
}
;
_.setFocus = function setFocus_2(focused){
  this.attached && $setFocus_0(this.impl, focused);
}
;
defineSeed(554, 1, {});
_.createElement_0 = function createElement(){
  return $createElement($doc, 'textarea');
}
;
_.elem = null;
function $createElement_0(){
  return $doc.createElement('iframe');
}

function $getText(this$static){
  var elem;
  return !this$static.beforeInitPlaceholder?(elem = this$static.elem , elem.contentWindow.document.body.innerText):this$static.beforeInitPlaceholder.innerText;
}

function $setFocus_0(this$static, focused){
  this$static.initializing?(this$static.isPendingFocus = focused):$setFocusImpl(this$static, focused);
}

function $setFocusImpl(this$static, focused){
  focused?this$static.elem.contentWindow.focus():this$static.elem.contentWindow.blur();
}

function $setHTMLImpl(this$static, html){
  this$static.elem.contentWindow.document.body.innerHTML = html;
}

function $setText_4(this$static, text){
  var elem;
  !this$static.beforeInitPlaceholder?(elem = this$static.elem , elem.contentWindow.document.body.innerText = text , undefined):setInnerText(this$static.beforeInitPlaceholder, text);
}

function $uninitElement(this$static){
  var enabled, html;
  if (this$static.initializing) {
    this$static.initializing = false;
    return;
  }
  $unhookEvents(this$static);
  html = !this$static.beforeInitPlaceholder?this$static.elem.contentWindow.document.body.innerHTML:this$static.beforeInitPlaceholder.innerHTML;
  enabled = !this$static.beforeInitPlaceholder?$isEnabledImpl(this$static):!this$static.beforeInitPlaceholder['disabled'];
  this$static.beforeInitPlaceholder = $createElement($doc, 'div');
  $setInnerHTML(this$static.beforeInitPlaceholder, html);
  !this$static.beforeInitPlaceholder?$setEnabledImpl(this$static, enabled):(this$static.beforeInitPlaceholder['disabled'] = !enabled , undefined);
}

defineSeed(556, 554, {});
_.createElement_0 = function createElement_0(){
  return $createElement_0();
}
;
_.onElementInitialized = function onElementInitialized(){
  if (!this.initializing) {
    return;
  }
  this.initializing = false;
  if (this.beforeInitPlaceholder) {
    $setHTMLImpl(this, this.beforeInitPlaceholder.innerHTML);
    $setEnabledImpl(this, !this.beforeInitPlaceholder?$isEnabledImpl(this):!this.beforeInitPlaceholder['disabled']);
    this.beforeInitPlaceholder = null;
  }
  $hookEvents(this);
  if (this.isPendingFocus) {
    this.isPendingFocus = false;
    this.initializing?(this.isPendingFocus = true):$setFocusImpl(this, true);
  }
}
;
_.onElementInitializing = function onElementInitializing(){
  this.initializing = true;
  this.isPendingFocus = false;
}
;
_.initializing = false;
_.isPendingFocus = false;
function $hookEvents(this$static){
  var elem = this$static.elem;
  var body = elem.contentWindow.document.body;
  var handler = $entry(function(evt){
    if (elem.__listener) {
      if (isMyListener(elem.__listener)) {
        evt = evt || elem.contentWindow.event;
        dispatchEvent_2(evt, elem, elem.__listener);
      }
    }
  }
  );
  body.onkeydown = body.onkeyup = body.onkeypress = body.onmousedown = body.onmouseup = body.onmousemove = body.onmouseover = body.onmouseout = body.onclick = handler;
  elem.contentWindow.onfocus = elem.contentWindow.onblur = handler;
}

function $initElement(this$static){
  var _this = this$static;
  _this.onElementInitializing();
  setTimeout($entry(function(){
    if (_this.initializing == false) {
      return;
    }
    var elem = _this.elem;
    var doc = elem.contentWindow.document;
    if (!doc.body) {
      setTimeout(arguments.callee, 50);
      return;
    }
    doc.body.contentEditable = true;
    _this.onElementInitialized();
  }
  , 1));
}

function $isEnabledImpl(this$static){
  var elem = this$static.elem;
  return elem.contentWindow.document.body.contentEditable.toLowerCase() == 'true';
}

function $setEnabledImpl(this$static, enabled){
  var elem = this$static.elem;
  elem.contentWindow.document.body.contentEditable = enabled;
}

function $unhookEvents(this$static){
  var elem = this$static.elem;
  var body = elem.contentWindow.document.body;
  if (body) {
    body.onkeydown = body.onkeyup = body.onkeypress = body.onmousedown = body.onmouseup = body.onmousemove = body.onmouseover = body.onmouseout = body.onclick = null;
    elem.contentWindow.onfocus = elem.contentWindow.onblur = null;
  }
}

function RichTextAreaImplIE6_0(){
  this.elem = this.createElement_0();
  this.beforeInitPlaceholder = $createElement($doc, 'div');
}

defineSeed(555, 556, {}, RichTextAreaImplIE6_0);
_.createElement_0 = function createElement_1(){
  var elem;
  elem = $createElement_0();
  elem['src'] = "javascript:''";
  return elem;
}
;
function $createNewReport(this$static, fromDate, toDate, objective, schoolYear, classId, classMasterId){
  var rc, rf, x;
  if (!classMasterId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Ma\xEEtre de la classe');
    return;
  }
  if (!fromDate.length || !toDate.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Les dates');
    return;
  }
  rf = new EvaluationHeaderRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl_0(rf);
  $fire((x = new EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl$7X_0(rc, fromDate, toDate, objective, schoolYear, classMasterId, classId) , $addInvocation(rc.state.dialect, x) , x), new FrmEvaluationReportListPresenter$5_0(this$static));
}

function $loadClassMasterList(this$static){
  var rc, rf;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire($listAll_5(rc), new FrmEvaluationReportListPresenter$4_0(this$static));
}

function $onClassSelected(this$static, classId){
  var rc, rf, x;
  rf = new EvaluationHeaderRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl_0(rf);
  $fire((x = new EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl$3X_0(rc, classId) , $addInvocation(rc.state.dialect, x) , x), new FrmEvaluationReportListPresenter$6_0(this$static));
}

function $onEcoleSelected_3(this$static, ecoleId){
  var rc, rf;
  if (!ecoleId.length) {
    return;
  }
  rf = new CoursRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  $fire($listAllActive_2(rc, ecoleId), new FrmEvaluationReportListPresenter$2_0(this$static));
}

function $onProgrammeSelected_1(this$static, programmeId){
  var rc, rf;
  rf = new ClasseRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAllActive_1(rc, programmeId), new FrmEvaluationReportListPresenter$3_0(this$static));
}

function FrmEvaluationReportListPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(916, 705, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$FrmEvaluationReportListUiHandler]), FrmEvaluationReportListPresenter_0);
_.onBind = function onBind_15(){
  $initializeUI_0(dynamicCast(this.view, Q$FrmEvaluationReportListPresenter$MyView));
}
;
_.onReset = function onReset_14(){
  var rf, rc;
  dynamicCast(this.view, Q$FrmEvaluationReportListPresenter$MyView).setUiHandlers(this);
  $doFire(this.eventBus, new PageAfterSelectEvent_0('evaluationlist'), null);
  $resetEditForm(dynamicCast(this.view, Q$FrmEvaluationReportListPresenter$MyView));
  rf = new EcoleRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_4(rc), new FrmEvaluationReportListPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_14(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_59(this$static, response){
  $setEcoleList_3(dynamicCast(this$static.this$0.view, Q$FrmEvaluationReportListPresenter$MyView), response);
}

function FrmEvaluationReportListPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(917, 644, makeCastMap([Q$Receiver]), FrmEvaluationReportListPresenter$1_0);
_.onFailure_0 = function onFailure_62(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_62(response){
  $onSuccess_59(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_60(this$static, response){
  $setCoursList_3(dynamicCast(this$static.this$0.view, Q$FrmEvaluationReportListPresenter$MyView), response);
}

function FrmEvaluationReportListPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(918, 644, makeCastMap([Q$Receiver]), FrmEvaluationReportListPresenter$2_0);
_.onFailure_0 = function onFailure_63(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_63(response){
  $onSuccess_60(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_61(this$static, response){
  $setClasseList_3(dynamicCast(this$static.this$0.view, Q$FrmEvaluationReportListPresenter$MyView), response);
}

function FrmEvaluationReportListPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(919, 644, makeCastMap([Q$Receiver]), FrmEvaluationReportListPresenter$3_0);
_.onFailure_0 = function onFailure_64(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_64(response){
  $onSuccess_61(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_62(this$static, response){
  $setProfListData_0(dynamicCast(this$static.this$0.view, Q$FrmEvaluationReportListPresenter$MyView), response);
}

function FrmEvaluationReportListPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(920, 644, makeCastMap([Q$Receiver]), FrmEvaluationReportListPresenter$4_0);
_.onFailure_0 = function onFailure_65(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_65(response){
  $onSuccess_62(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_63(this$static, response){
  $addNewEvaluationHeaderToList(dynamicCast(this$static.this$0.view, Q$FrmEvaluationReportListPresenter$MyView), response);
}

function FrmEvaluationReportListPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(921, 644, makeCastMap([Q$Receiver]), FrmEvaluationReportListPresenter$5_0);
_.onFailure_0 = function onFailure_66(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_66(response){
  $onSuccess_63(this, dynamicCast(response, Q$EvaluationHeaderProxy));
}
;
_.this$0 = null;
function $onSuccess_64(this$static, response){
  $setEvaluationHeaderListData_0(dynamicCast(this$static.this$0.view, Q$FrmEvaluationReportListPresenter$MyView), response);
}

function FrmEvaluationReportListPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(922, 644, makeCastMap([Q$Receiver]), FrmEvaluationReportListPresenter$6_0);
_.onFailure_0 = function onFailure_67(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_67(response){
  $onSuccess_64(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationReportListPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationReportListPresenter$_annotation$$none$$) {
    result = new FrmEvaluationReportListPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmEvaluationReportListView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationReportListPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationReportListPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationReportListPresenter$_annotation$$none$$;
}

defineSeed(1082, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_133(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationReportListPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $addNewEvaluationHeaderToList(this$static, eh){
  $add_14(this$static.providerEvaluationHeader.listWrapper, eh);
}

function $initializeUI_0(this$static){
  var colFrom, colTo, selectionModel;
  $selectClear(this$static.lstYears.element);
  $insertItem(this$static.lstYears, '-', '', -1);
  $insertItem(this$static.lstYears, '2013 - 2014', '2013', -1);
  colFrom = new FrmEvaluationReportListView$1_0;
  $addColumn(this$static.tblReports, colFrom, 'Du');
  colTo = new FrmEvaluationReportListView$2_0;
  $addColumn(this$static.tblReports, colTo, 'Au');
  selectionModel = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblReports, selectionModel);
  $addSelectionChangeHandler(selectionModel, new FrmEvaluationReportListView$3_0(this$static, selectionModel));
  $addDataDisplay(this$static.providerEvaluationHeader, this$static.tblReports);
}

function $onCmdSaveClick_1(this$static){
  $createNewReport(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationReportListUiHandler), $getPropertyString(this$static.dateFrom.element, 'value'), $getPropertyString(this$static.dateTo.element, 'value'), $getText(this$static.txtObjective.impl), $getValue_1(this$static.lstYears, this$static.lstYears.element.selectedIndex), $getValue_1(this$static.lstClasses, this$static.lstClasses.element.selectedIndex), $getValue_1(this$static.lstClassMaster, this$static.lstClassMaster.element.selectedIndex));
}

function $onLstClassesChange_3(this$static){
  $onClassSelected(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationReportListUiHandler), $getValue_1(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $onLstEcolesChange_3(this$static){
  if (!$getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex).length) {
    $selectClear(this$static.lstProgrammes.element);
    $selectClear(this$static.lstClasses.element);
    return;
  }
  !!this$static.uiHandlers && $onEcoleSelected_3(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationReportListUiHandler), $getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex));
}

function $onLstProgrammesChange_1(this$static){
  if (!$getValue_1(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex).length)
    return;
  !!this$static.uiHandlers && $onProgrammeSelected_1(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationReportListUiHandler), $getValue_1(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex));
}

function $populateEvaluationHeaderData(this$static){
  $setText(this$static.dateFrom, this$static.selectedEvaluationHeader.getFromDate());
  $setText(this$static.dateTo, this$static.selectedEvaluationHeader.getToDate());
  $setText_3(this$static.txtObjective, this$static.selectedEvaluationHeader.getObjective());
  $selectListValue(this$static.lstClassMaster, this$static.selectedEvaluationHeader.getClassMasterId());
}

function $resetEditForm(this$static){
  $setText(this$static.dateFrom, '');
  $setText(this$static.dateTo, '');
  $setText_3(this$static.txtObjective, '');
  $loadClassMasterList(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationReportListUiHandler));
}

function $selectListValue(listBox, value){
  var i;
  for (i = 0; i < listBox.element.options.length; ++i) {
    if ($equals_5(($checkIndex(listBox, i) , listBox.element.options[i].value), value)) {
      $setSelectedIndex(listBox.element, i);
      break;
    }
  }
}

function $setClasseList_3(this$static, classes){
  var cours, cours$iterator;
  $selectClear(this$static.lstClasses.element);
  $insertItem(this$static.lstClasses, '-', '', -1);
  for (cours$iterator = classes.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$ClasseProxy);
    $insertItem(this$static.lstClasses, cours.getClassName(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setCoursList_3(this$static, programmes){
  var cours, cours$iterator;
  $selectClear(this$static.lstProgrammes.element);
  $insertItem(this$static.lstProgrammes, '-', '', -1);
  for (cours$iterator = programmes.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$CoursProxy);
    $insertItem(this$static.lstProgrammes, cours.getCoursNom(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setEcoleList_3(this$static, ecoles){
  var ecole, ecole$iterator;
  $selectClear(this$static.lstEcoles.element);
  $insertItem(this$static.lstEcoles, '-', '', -1);
  for (ecole$iterator = ecoles.iterator(); ecole$iterator.hasNext();) {
    ecole = dynamicCast(ecole$iterator.next_0(), Q$EcoleProxy);
    $insertItem(this$static.lstEcoles, ecole.getSchoolName(), '' + toString_6(ecole.getId_0().value_0), -1);
  }
}

function $setEvaluationHeaderListData_0(this$static, eHs){
  $clear_3(this$static.providerEvaluationHeader.listWrapper);
  $setList(this$static.providerEvaluationHeader, eHs);
}

function $setProfListData_0(this$static, profs){
  var prof, prof$iterator;
  $selectClear(this$static.lstClassMaster.element);
  $insertItem(this$static.lstClassMaster, '-', '', -1);
  for (prof$iterator = profs.iterator(); prof$iterator.hasNext();) {
    prof = dynamicCast(prof$iterator.next_0(), Q$ProfessorProxy);
    $insertItem(this$static.lstClassMaster, prof.getProfName(), '' + toString_6(prof.getId_0().value_0), -1);
  }
}

function FrmEvaluationReportListView_0(){
  this.providerEvaluationHeader = new ListDataProvider_0;
  this.tblReports = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_13(new FrmEvaluationReportListView_BinderImpl$Widgets_0(this));
}

defineSeed(1268, 710, makeCastMap([Q$IsWidget, Q$FrmEvaluationReportListPresenter$MyView]), FrmEvaluationReportListView_0);
_.asWidget = function asWidget_17(){
  return this.widget;
}
;
_.dateFrom = null;
_.dateTo = null;
_.lstClassMaster = null;
_.lstClasses = null;
_.lstEcoles = null;
_.lstProgrammes = null;
_.lstYears = null;
_.selectedEvaluationHeader = null;
_.txtObjective = null;
_.widget = null;
function FrmEvaluationReportListView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1269, 392, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationReportListView$1_0);
_.getValue = function getValue_33(object){
  return dynamicCast(object, Q$EvaluationHeaderProxy).getFromDate();
}
;
function FrmEvaluationReportListView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(1270, 392, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationReportListView$2_0);
_.getValue = function getValue_34(object){
  return dynamicCast(object, Q$EvaluationHeaderProxy).getToDate();
}
;
function FrmEvaluationReportListView$3_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1271, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), FrmEvaluationReportListView$3_0);
_.onSelectionChange = function onSelectionChange_3(event_0){
  this.this$0.selectedEvaluationHeader = dynamicCast($getSelectedObject(this.val$selectionModel), Q$EvaluationHeaderProxy);
  !!this.this$0.selectedEvaluationHeader && $populateEvaluationHeaderData(this.this$0);
}
;
_.this$0 = null;
_.val$selectionModel = null;
function FrmEvaluationReportListView_BinderImpl_0(){
}

defineSeed(1272, 1, {}, FrmEvaluationReportListView_BinderImpl_0);
function $build_f_HTMLPanel1_13(this$static){
  var attachRecord14, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_Grid5, f_Label6, lstYears, f_Label7, lstEcoles, f_Label8, lstProgrammes, f_Label9, lstClasses, f_Label10, tblReports, f_Label11, f_Label12, f_VerticalPanel13, f_Grid14, f_Label15, dateFrom, f_Label16, dateTo, f_Label17, lstClassMaster, f_Label18, txtObjective, f_Label19, f_HorizontalPanel20, button, sb, cmdSave, sb_0;
  f_HTMLPanel1 = new HTMLPanel_0($html3_0(this$static.domId0).html);
  f_HTMLPanel1.element.style['height'] = '';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord14 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord14.origParent?$insertBefore(attachRecord14.origParent, attachRecord14.element, attachRecord14.origSibling):orphan(attachRecord14.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, "LISTE DES RAPPORTS D'EVALUATION INTERMEDIAIRE", false) , $updateHorizontalAlignment(f_Label3) , f_Label3.element.style['width'] = '' , f_Label3)) , $add_11(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel4, (f_Grid5 = new Grid_0 , $resizeColumns(f_Grid5, 2) , $resizeRows(f_Grid5, 7) , $setWidget_1(f_Grid5, 0, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Ann\xE9e :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid5, 0, 1, (lstYears = new ListBox_0 , lstYears.element['className'] = 'sis-combobox' , this$static.owner.lstYears = lstYears , lstYears)) , $setWidget_1(f_Grid5, 1, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Ecole :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid5, 1, 1, (lstEcoles = new ListBox_0 , lstEcoles.element['className'] = 'sis-combobox' , $addDomHandler(lstEcoles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_1(f_Grid5, 2, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Programme :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid5, 2, 1, (lstProgrammes = new ListBox_0 , lstProgrammes.element['className'] = 'sis-combobox' , $addDomHandler(lstProgrammes, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstProgrammes = lstProgrammes , lstProgrammes)) , $setWidget_1(f_Grid5, 3, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Classe :', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid5, 3, 1, (lstClasses = new ListBox_0 , lstClasses.element['className'] = 'sis-combobox' , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, TYPE) , this$static.owner.lstClasses = lstClasses , lstClasses)) , $setWidget_1(f_Grid5, 4, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, "Liste des rapports d'\xE9valuation :", false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid5, 4, 1, (tblReports = this$static.owner.tblReports , tblReports.element.style['height'] = '200px' , tblReports.element.style['width'] = '250px' , tblReports)) , $setWidget_1(f_Grid5, 5, 0, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label11.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid5, 6, 0, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label12.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , f_Grid5.element['className'] = 'subSection' , f_Grid5.element.style['width'] = '100%' , f_Grid5)) , $add_9(f_HorizontalPanel4, (f_VerticalPanel13 = new VerticalPanel_0 , $add_11(f_VerticalPanel13, (f_Grid14 = new Grid_0 , $resizeColumns(f_Grid14, 2) , $resizeRows(f_Grid14, 5) , $setWidget_1(f_Grid14, 0, 0, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'Du :', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_1(f_Grid14, 0, 1, (dateFrom = new TextBox_0 , this$static.owner.dateFrom = dateFrom , dateFrom)) , $setWidget_1(f_Grid14, 1, 0, (f_Label16 = new Label_0 , $setTextOrHtml(f_Label16.directionalTextHelper, 'Au :', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $setWidget_1(f_Grid14, 1, 1, (dateTo = new TextBox_0 , this$static.owner.dateTo = dateTo , dateTo)) , $setWidget_1(f_Grid14, 2, 0, (f_Label17 = new Label_0 , $setTextOrHtml(f_Label17.directionalTextHelper, 'Ma\xEEtre de classe :', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $setWidget_1(f_Grid14, 2, 1, (lstClassMaster = new ListBox_0 , lstClassMaster.element['className'] = 'sis-combobox' , this$static.owner.lstClassMaster = lstClassMaster , lstClassMaster)) , $setWidget_1(f_Grid14, 3, 0, (f_Label18 = new Label_0 , $setTextOrHtml(f_Label18.directionalTextHelper, "Note d'objectif sp\xE9cifique :", false) , $updateHorizontalAlignment(f_Label18) , f_Label18)) , $setWidget_1(f_Grid14, 3, 1, (txtObjective = new RichTextArea_0 , this$static.owner.txtObjective = txtObjective , txtObjective)) , $setWidget_1(f_Grid14, 4, 0, (f_Label19 = new Label_0 , $setTextOrHtml(f_Label19.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label19) , f_Label19)) , $setWidget_1(f_Grid14, 4, 1, (f_HorizontalPanel20 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel20, ALIGN_LEFT) , $add_9(f_HorizontalPanel20, (button = new Button_0 , $setHTML(button, (sb = new StringBuilder_0 , $append_1(sb.data, 'Cr\xE9er un nouveau rapport') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , button.element['disabled'] = true , $setInnerText(button.element, 'Enregistrer') , $addDomHandler(button, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , button)) , $add_9(f_HorizontalPanel20, (cmdSave = new Button_0 , $setHTML(cmdSave, (sb_0 = new StringBuilder_0 , $append_1(sb_0.data, 'Enregistrer') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))).html) , $setInnerText(cmdSave.element, 'Cr\xE9er un nouveau rapport') , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_0) , cmdSave)) , f_HorizontalPanel20.element.style['width'] = '100%' , f_HorizontalPanel20)) , f_Grid14.element['className'] = 'subSection' , f_Grid14.element.style['width'] = '100%' , f_Grid14)) , f_VerticalPanel13.element.style['width'] = '100%' , f_VerticalPanel13)) , f_HorizontalPanel4.element.style['width'] = '100%' , f_HorizontalPanel4.table['cellSpacing'] = 5 , f_HorizontalPanel4)) , f_VerticalPanel2.element.style['height'] = '' , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmEvaluationReportListView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmEvaluationReportListView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new FrmEvaluationReportListView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new FrmEvaluationReportListView_BinderImpl$Widgets$3_0;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new FrmEvaluationReportListView_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new FrmEvaluationReportListView_BinderImpl$Widgets$5_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1273, 1, {}, FrmEvaluationReportListView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmEvaluationReportListView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1274, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationReportListView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_17(event_0){
  $onLstEcolesChange_3(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationReportListView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1275, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationReportListView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_18(event_0){
  $onLstProgrammesChange_1(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationReportListView_BinderImpl$Widgets$3_0(){
}

defineSeed(1276, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmEvaluationReportListView_BinderImpl$Widgets$3_0);
_.onClick = function onClick_11(event_0){
}
;
function FrmEvaluationReportListView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1277, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmEvaluationReportListView_BinderImpl$Widgets$4_0);
_.onClick = function onClick_12(event_0){
  $onCmdSaveClick_1(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationReportListView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1278, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationReportListView_BinderImpl$Widgets$5_0);
_.onChange = function onChange_19(event_0){
  $onLstClassesChange_3(this.this$1.owner);
}
;
_.this$1 = null;
function $html3_0(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$view$FrmEvaluationReportListView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationReportListView$_annotation$$none$$) {
    result = new FrmEvaluationReportListView_0(new FrmEvaluationReportListView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationReportListView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationReportListView$_annotation$$none$$;
}

function EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl$3X_0(this$0, val$classId){
  this.val$classId = val$classId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1558, 648, makeCastMap([Q$AbstractRequest]), EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_40(){
  return new RequestData_0('pQAC0S0c6nJxYWec7XsN8Ps_zWs=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$classId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_EvaluationHeaderProxy_2_classLit);
}
;
_.val$classId = null;
function EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl$7X_0(this$0, val$fromDate, val$toDate, val$objective, val$schoolYear, val$classMasterId, val$classId){
  this.val$fromDate = val$fromDate;
  this.val$toDate = val$toDate;
  this.val$objective = val$objective;
  this.val$schoolYear = val$schoolYear;
  this.val$classMasterId = val$classMasterId;
  this.val$classId = val$classId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1559, 648, makeCastMap([Q$AbstractRequest]), EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_41(){
  return new RequestData_0('cFkXgqB6qt8D6U$cLwxTEveSBSA=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$fromDate, this.val$toDate, this.val$objective, this.val$schoolYear, this.val$classMasterId, this.val$classId]), this.propertyRefs, Lcom_lemania_sis_shared_EvaluationHeaderProxy_2_classLit, null);
}
;
_.val$classId = null;
_.val$classMasterId = null;
_.val$fromDate = null;
_.val$objective = null;
_.val$schoolYear = null;
_.val$toDate = null;
var Lcom_lemania_sis_client_presenter_FrmEvaluationReportListPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationReportListPresenter', 916), Lcom_lemania_sis_client_presenter_FrmEvaluationReportListPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationReportListPresenter$1', 917), Lcom_lemania_sis_client_presenter_FrmEvaluationReportListPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationReportListPresenter$2', 918), Lcom_lemania_sis_client_presenter_FrmEvaluationReportListPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationReportListPresenter$3', 919), Lcom_lemania_sis_client_presenter_FrmEvaluationReportListPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationReportListPresenter$4', 920), Lcom_lemania_sis_client_presenter_FrmEvaluationReportListPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationReportListPresenter$5', 921), Lcom_lemania_sis_client_presenter_FrmEvaluationReportListPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationReportListPresenter$6', 922), Lcom_lemania_sis_client_view_FrmEvaluationReportListView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationReportListView', 1268), Lcom_lemania_sis_client_view_FrmEvaluationReportListView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationReportListView$1', 1269), Lcom_lemania_sis_client_view_FrmEvaluationReportListView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationReportListView$2', 1270), Lcom_lemania_sis_client_view_FrmEvaluationReportListView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationReportListView$3', 1271), Lcom_lemania_sis_client_view_FrmEvaluationReportListView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationReportListView_BinderImpl', 1272), Lcom_lemania_sis_client_view_FrmEvaluationReportListView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationReportListView_BinderImpl$Widgets', 1273), Lcom_lemania_sis_client_view_FrmEvaluationReportListView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationReportListView_BinderImpl$Widgets$1', 1274), Lcom_lemania_sis_client_view_FrmEvaluationReportListView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationReportListView_BinderImpl$Widgets$2', 1275), Lcom_lemania_sis_client_view_FrmEvaluationReportListView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationReportListView_BinderImpl$Widgets$3', 1276), Lcom_lemania_sis_client_view_FrmEvaluationReportListView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationReportListView_BinderImpl$Widgets$4', 1277), Lcom_lemania_sis_client_view_FrmEvaluationReportListView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationReportListView_BinderImpl$Widgets$5', 1278), Lcom_google_gwt_user_client_ui_RichTextArea_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RichTextArea', 512), Lcom_google_gwt_user_client_ui_impl_RichTextAreaImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'RichTextAreaImpl', 554), Lcom_google_gwt_user_client_ui_impl_RichTextAreaImplStandard_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'RichTextAreaImplStandard', 556), Lcom_google_gwt_user_client_ui_impl_RichTextAreaImplIE6_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'RichTextAreaImplIE6', 555), Lcom_lemania_sis_shared_service_EvaluationHeaderRequestFactory_1EvaluationHeaderRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl$3X', 1558), Lcom_lemania_sis_shared_service_EvaluationHeaderRequestFactory_1EvaluationHeaderRequestContextImpl$7X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl$7X', 1559);
$entry(onLoad)(15);
