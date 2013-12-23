function AbstractEditableCell_0(consumedEvents){
  !!consumedEvents && (this.consumedEvents = ($clinit_Collections() , new Collections$UnmodifiableSet_0(consumedEvents)));
  $$init(this);
}

function $onBrowserEvent_0(this$static, context, parent_0, value, event_0, valueUpdater){
  var eventType, target;
  $onBrowserEvent(this$static, context, parent_0, value, event_0, valueUpdater);
  target = $eventGetTarget(event_0);
  if (!$isOrHasChild($getFirstChildElement(parent_0), target)) {
    return;
  }
  eventType = event_0.type;
  $equals_5('focus', eventType)?(this$static.focusedKey = context.key):$equals_5('blur', eventType) && (this$static.focusedKey = null);
}

function AbstractInputCell_0(consumedEvents){
  AbstractEditableCell_0.call(this, getConsumedEventsImpl(consumedEvents));
}

function getConsumedEventsImpl(consumedEvents){
  var event_0, event$index, event$max, userEvents, events;
  userEvents = new HashSet_0;
  if (consumedEvents != null) {
    for (event$index = 0 , event$max = consumedEvents.length; event$index < event$max; ++event$index) {
      event_0 = consumedEvents[event$index];
      $add_20(userEvents, event_0);
    }
  }
  return events = new HashSet_0 , $add_20(events, 'focus') , $add_20(events, 'blur') , $add_20(events, 'keydown') , !!userEvents && userEvents.map.size_1() > 0 && $addAll_0(events, userEvents) , events;
}

defineSeed(88, 87, {});
_.isEditing_0 = function isEditing_1(context, parent_0, value){
  return this.focusedKey != null && equals__devirtual$(this.focusedKey, context.key);
}
;
_.onBrowserEvent = function onBrowserEvent_0(context, parent_0, value, event_0, valueUpdater){
  $onBrowserEvent_0(this, context, parent_0, value, event_0, valueUpdater);
}
;
_.onEnterKeyDown = function onEnterKeyDown_0(context, parent_0, value, event_0, valueUpdater){
  var input, key_0, target;
  input = $getFirstChildElement(parent_0);
  target = $eventGetTarget(event_0);
  key_0 = context.key;
  if ($isOrHasChild($getFirstChildElement(parent_0), target)) {
    this.focusedKey = null;
    $getFirstChildElement(parent_0).blur();
  }
   else {
    this.focusedKey = key_0;
    input.focus();
  }
}
;
_.resetFocus = function resetFocus_0(context, parent_0, value){
  if (this.focusedKey != null && equals__devirtual$(this.focusedKey, context.key)) {
    $getFirstChildElement(parent_0).focus();
    return true;
  }
  return false;
}
;
_.focusedKey = null;
function $getSelectedIndex(this$static, value){
  var index;
  index = dynamicCast(this$static.indexForOption.get_1(value), Q$Integer);
  if (!index) {
    return -1;
  }
  return index.value_0;
}

function $onBrowserEvent_4(this$static, context, parent_0, value, event_0, valueUpdater){
  var key_0, newValue, select, type;
  $onBrowserEvent_0(this$static, context, parent_0, value, event_0, valueUpdater);
  type = event_0.type;
  if ($equals_5('change', type)) {
    key_0 = context.key;
    select = parent_0.firstChild;
    newValue = dynamicCast($get_8(this$static.options_0, select.selectedIndex), Q$String);
    $setViewData(this$static, key_0, newValue);
    this$static.focusedKey = null;
    $getFirstChildElement(parent_0).blur();
    !!valueUpdater && valueUpdater.update_0(newValue);
  }
}

function $render_2(this$static, context, value, sb){
  var index, key_0, option, option$iterator, selectedIndex, viewData, sb_0, sb_1;
  key_0 = context.key;
  viewData = dynamicCast(key_0 == null?null:this$static.viewDataMap.get_1(key_0), Q$String);
  if (viewData != null && $equals_5(viewData, value)) {
    key_0 != null && this$static.viewDataMap.remove_3(key_0);
    viewData = null;
  }
  selectedIndex = $getSelectedIndex(this$static, viewData == null?value:viewData);
  $append_11(sb.sb, '<select tabindex="-1">');
  index = 0;
  for (option$iterator = new AbstractList$IteratorImpl_0(this$static.options_0); option$iterator.i < option$iterator.this$0_0.size_1();) {
    option = dynamicCast($next_4(option$iterator), Q$String);
    index++ == selectedIndex?$append_5(sb, (sb_0 = new StringBuilder_0 , sb_0.impl.string += '<option value="' , $append_11(sb_0, htmlEscape(option)) , sb_0.impl.string += '" selected="selected">' , $append_11(sb_0, htmlEscape(option)) , sb_0.impl.string += '<\/option>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string))):$append_5(sb, (sb_1 = new StringBuilder_0 , sb_1.impl.string += '<option value="' , $append_11(sb_1, htmlEscape(option)) , sb_1.impl.string += '">' , $append_11(sb_1, htmlEscape(option)) , sb_1.impl.string += '<\/option>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_1.impl.string)));
  }
  $append_11(sb.sb, '<\/select>');
}

function SelectionCell_0(options){
  var index, option, option$iterator;
  AbstractInputCell_0.call(this, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['change']));
  this.indexForOption = new HashMap_0;
  !template_0 && (template_0 = new SelectionCell_TemplateImpl_0);
  this.options_0 = new ArrayList_2(options);
  index = 0;
  for (option$iterator = new AbstractList$IteratorImpl_0(options); option$iterator.i < option$iterator.this$0_0.size_1();) {
    option = dynamicCast($next_4(option$iterator), Q$String);
    this.indexForOption.put(option, valueOf_1(index++));
  }
}

defineSeed(96, 88, {}, SelectionCell_0);
_.onBrowserEvent = function onBrowserEvent_4(context, parent_0, value, event_0, valueUpdater){
  $onBrowserEvent_4(this, context, parent_0, dynamicCast(value, Q$String), event_0, valueUpdater);
}
;
_.render = function render_3(context, value, sb){
  $render_2(this, context, dynamicCast(value, Q$String), sb);
}
;
_.options_0 = null;
var template_0 = null;
function SelectionCell_TemplateImpl_0(){
}

defineSeed(97, 1, {}, SelectionCell_TemplateImpl_0);
function $onAssignmentSelected(this$static, assignmentId){
  var rc, rf, x;
  rf = new EvaluationHeaderRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl_0(rf);
  $fire((x = new EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl$2X_0(rc, assignmentId) , $addInvocation(rc.state.dialect, x) , x), new FrmEvaluationInputPresenter$4_0(this$static));
}

function $onProfessorSelected(this$static, profId){
  var rc, rf;
  if (!profId.length) {
    $resetForm_8(dynamicCast(this$static.view, Q$FrmEvaluationInputPresenter$MyView));
    return;
  }
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  $fire($listAllActive(rc, profId), new FrmEvaluationInputPresenter$3_0(this$static));
}

function $populateEvaluationSubjectList(this$static, profId, assignmentId, evaluationHeaderId){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new EvaluationSubjectRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl_0(rf);
  $fire((x = new EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$3X_0(rc, profId, assignmentId, evaluationHeaderId) , $addInvocation(rc.state.dialect, x) , x), new FrmEvaluationInputPresenter$5_0(this$static));
}

function $updateEvaluation(this$static, es, value, order){
  var esEdit, rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new EvaluationSubjectRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl_0(rf);
  esEdit = dynamicCast($editProxy(rc, es), Q$EvaluationSubjectProxy);
  switch (order) {
    case 1:
      esEdit.setObjective1(value);
      break;
    case 2:
      esEdit.setObjective2(value);
      break;
    case 3:
      esEdit.setObjective3(value);
      break;
    case 4:
      esEdit.setObjective4(value);
      break;
    case 5:
      esEdit.setObjective5(value);
      break;
    case 6:
      esEdit.setObjective6(value);
  }
  $fire((x = new EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$5X_0(rc, esEdit) , $addInvocation(rc.state.dialect, x) , x), new FrmEvaluationInputPresenter$6_0);
}

function FrmEvaluationInputPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(898, 696, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$FrmEvaluationInputPresenter, Q$FrmEvaluationInputUiHandler]), FrmEvaluationInputPresenter_0);
_.onBind = function onBind_14(){
  dynamicCast(this.view, Q$FrmEvaluationInputPresenter$MyView).setUiHandlers(this);
  $initializeUI_0(dynamicCast(this.view, Q$FrmEvaluationInputPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_27(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_13(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('evaluationinput'), null);
  $resetForm_8(dynamicCast(this.view, Q$FrmEvaluationInputPresenter$MyView));
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  this.currentUser.isProf && $fire($getByEmail(rc, this.currentUser.userEmail), new FrmEvaluationInputPresenter$1_0(this));
  this.currentUser.isAdmin && $fire($listAll_5(rc), new FrmEvaluationInputPresenter$2_0(this));
}
;
_.revealInParent = function revealInParent_13(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_54(this$static, response){
  $setProfListData(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputPresenter$MyView), response);
}

function FrmEvaluationInputPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(899, 635, makeCastMap([Q$Receiver]), FrmEvaluationInputPresenter$1_0);
_.onFailure_0 = function onFailure_56(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_56(response){
  $onSuccess_54(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_55(this$static, response){
  $setProfListData(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputPresenter$MyView), response);
}

function FrmEvaluationInputPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(900, 635, makeCastMap([Q$Receiver]), FrmEvaluationInputPresenter$2_0);
_.onFailure_0 = function onFailure_57(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_57(response){
  $onSuccess_55(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_56(this$static, response){
  $setAssignmentTableData(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputPresenter$MyView), response);
}

function FrmEvaluationInputPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(901, 635, makeCastMap([Q$Receiver]), FrmEvaluationInputPresenter$3_0);
_.onFailure_0 = function onFailure_58(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_58(response){
  $onSuccess_56(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_57(this$static, response){
  $setEvaluationHeaderListData_0(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputPresenter$MyView), response);
}

function FrmEvaluationInputPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(902, 635, makeCastMap([Q$Receiver]), FrmEvaluationInputPresenter$4_0);
_.onFailure_0 = function onFailure_59(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_59(response){
  $onSuccess_57(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_58(this$static, response){
  $setEvaluationSubjectTableData_0(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputPresenter$MyView), response);
}

function FrmEvaluationInputPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(903, 635, makeCastMap([Q$Receiver]), FrmEvaluationInputPresenter$5_0);
_.onFailure_0 = function onFailure_60(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_60(response){
  $onSuccess_58(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function FrmEvaluationInputPresenter$6_0(){
}

defineSeed(904, 635, makeCastMap([Q$Receiver]), FrmEvaluationInputPresenter$6_0);
_.onFailure_0 = function onFailure_61(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_61(response){
  throwClassCastExceptionUnlessNull(response);
}
;
function $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputPresenter$_annotation$$none$$) {
    result = new FrmEvaluationInputPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmEvaluationInputView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputPresenter$_annotation$$none$$;
}

defineSeed(1095, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_143(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeUI_0(this$static){
  var categorieCell1, categorieCell2, categorieCell3, categorieCell4, categorieCell5, categorieCell6, categoriesName1, categoriesName2, categoriesName3, categoriesName4, categoriesName5, categoriesName6, colObjective1, colObjective2, colObjective3, colObjective4, colObjective5, colObjective6, colStudentName;
  $clear_5(this$static.categoriesName);
  $add_19(this$static.categoriesName, '');
  $add_19(this$static.categoriesName, 'TB');
  $add_19(this$static.categoriesName, 'B');
  $add_19(this$static.categoriesName, 'AB');
  $add_19(this$static.categoriesName, 'S');
  $add_19(this$static.categoriesName, 'NA');
  colStudentName = new FrmEvaluationInputView$1_0;
  $addColumn(this$static.tblEvaluations, colStudentName, 'Eleve');
  categoriesName1 = new ArrayList_2(this$static.categoriesName);
  categorieCell1 = new SelectionCell_0(categoriesName1);
  colObjective1 = new FrmEvaluationInputView$2_0(categorieCell1);
  $addColumn(this$static.tblEvaluations, colObjective1, "Comprend le contexte du cours, est capable d'en discuster et d'en appliquer les principes.");
  $setFieldUpdater(colObjective1, new FrmEvaluationInputView$3_0(this$static));
  categoriesName2 = new ArrayList_2(this$static.categoriesName);
  categorieCell2 = new SelectionCell_0(categoriesName2);
  colObjective2 = new FrmEvaluationInputView$4_0(categorieCell2);
  $addColumn(this$static.tblEvaluations, colObjective2, "Est capable d'identifier des probl\xE8mes et de chercher des solutions.");
  $setFieldUpdater(colObjective2, new FrmEvaluationInputView$5_0(this$static));
  categoriesName3 = new ArrayList_2(this$static.categoriesName);
  categorieCell3 = new SelectionCell_0(categoriesName3);
  colObjective3 = new FrmEvaluationInputView$6_0(categorieCell3);
  $addColumn(this$static.tblEvaluations, colObjective3, 'Est capable de synth\xE9tiser et de faire des propositions dans le cadre de contextes similaires.');
  $setFieldUpdater(colObjective3, new FrmEvaluationInputView$7_0(this$static));
  categoriesName4 = new ArrayList_2(this$static.categoriesName);
  categorieCell4 = new SelectionCell_0(categoriesName4);
  colObjective4 = new FrmEvaluationInputView$8_0(categorieCell4);
  $addColumn(this$static.tblEvaluations, colObjective4, 'Est bien structur\xE9 dans son travail et parvient \xE0 hi\xE9rachiser ses priorit\xE9s.');
  $setFieldUpdater(colObjective4, new FrmEvaluationInputView$9_0(this$static));
  categoriesName5 = new ArrayList_2(this$static.categoriesName);
  categorieCell5 = new SelectionCell_0(categoriesName5);
  colObjective5 = new FrmEvaluationInputView$10_0(categorieCell5);
  $addColumn(this$static.tblEvaluations, colObjective5, 'Travaille correctement et accomplit les t\xE2ches demand\xE9es.');
  $setFieldUpdater(colObjective5, new FrmEvaluationInputView$11_0(this$static));
  categoriesName6 = new ArrayList_2(this$static.categoriesName);
  categorieCell6 = new SelectionCell_0(categoriesName6);
  colObjective6 = new FrmEvaluationInputView$12_0(categorieCell6);
  $addColumn(this$static.tblEvaluations, colObjective6, "Participe positivement en classes en tant qu'individu et au sein du groupe.");
  $setFieldUpdater(colObjective6, new FrmEvaluationInputView$13_0(this$static));
  $addDataDisplay(this$static.providerEvaluationSubject, this$static.tblEvaluations);
}

function $onLstAssignmentsChange(this$static){
  !!this$static.uiHandlers && $onAssignmentSelected(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationInputUiHandler), $getValue_1(this$static.lstAssignments, this$static.lstAssignments.element.selectedIndex));
}

function $onLstEvaluationHeadersChange_0(this$static){
  !!this$static.uiHandlers && $populateEvaluationSubjectList(dynamicCast(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationInputUiHandler), Q$FrmEvaluationInputPresenter), $getValue_1(this$static.lstProfs, this$static.lstProfs.element.selectedIndex), $getValue_1(this$static.lstAssignments, this$static.lstAssignments.element.selectedIndex), $getValue_1(this$static.lstEvaluationHeaders, this$static.lstEvaluationHeaders.element.selectedIndex));
}

function $onLstProfsChange(this$static){
  $resetForm_8(this$static);
  !!this$static.uiHandlers && $onProfessorSelected(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationInputUiHandler), $getValue_1(this$static.lstProfs, this$static.lstProfs.element.selectedIndex));
}

function $resetForm_8(this$static){
  $selectClear(this$static.lstAssignments.element);
  $selectClear(this$static.lstEvaluationHeaders.element);
  $clear_3(this$static.providerEvaluationSubject.listWrapper);
}

function $setAssignmentTableData(this$static, assignments){
  var assignment, assignment$iterator;
  $selectClear(this$static.lstAssignments.element);
  $insertItem(this$static.lstAssignments, '-', '', -1);
  for (assignment$iterator = assignments.iterator(); assignment$iterator.hasNext();) {
    assignment = dynamicCast(assignment$iterator.next_0(), Q$AssignmentProxy);
    $insertItem(this$static.lstAssignments, assignment.getProgrammeName() + ' - ' + assignment.getClasseName() + ' - ' + assignment.getSubjectName(), '' + toString_6(assignment.getId_0().value_0), -1);
  }
}

function $setEvaluationHeaderListData_0(this$static, headers){
  var evh, evh$iterator;
  $selectClear(this$static.lstEvaluationHeaders.element);
  $insertItem(this$static.lstEvaluationHeaders, '-', '', -1);
  for (evh$iterator = headers.iterator(); evh$iterator.hasNext();) {
    evh = dynamicCast(evh$iterator.next_0(), Q$EvaluationHeaderProxy);
    $insertItem(this$static.lstEvaluationHeaders, evh.getFromDate() + ' - ' + evh.getToDate(), '' + toString_6(evh.getId_0().value_0), -1);
  }
}

function $setEvaluationSubjectTableData_0(this$static, evaluationSubjectList){
  $clear_3(this$static.providerEvaluationSubject.listWrapper);
  $setList(this$static.providerEvaluationSubject, evaluationSubjectList);
  $setHeight(this$static.tblEvaluations, '' + (($clinit_NotificationTypes() , lineHeightShortList).value_0 * (evaluationSubjectList.size_1() + 1) + 100) + 'px');
}

function $setProfListData(this$static, profs){
  var prof, prof$iterator;
  $selectClear(this$static.lstProfs.element);
  $insertItem(this$static.lstProfs, '-', '', -1);
  for (prof$iterator = profs.iterator(); prof$iterator.hasNext();) {
    prof = dynamicCast(prof$iterator.next_0(), Q$ProfessorProxy);
    $insertItem(this$static.lstProfs, prof.getProfName(), '' + toString_6(prof.getId_0().value_0), -1);
  }
}

function FrmEvaluationInputView_0(){
  this.providerEvaluationSubject = new ListDataProvider_0;
  this.categoriesName = new ArrayList_0;
  this.tblEvaluations = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_13(new FrmEvaluationInputView_BinderImpl$Widgets_0(this));
}

defineSeed(1289, 701, makeCastMap([Q$IsWidget, Q$FrmEvaluationInputPresenter$MyView]), FrmEvaluationInputView_0);
_.asWidget = function asWidget_17(){
  return this.widget;
}
;
_.lstAssignments = null;
_.lstEvaluationHeaders = null;
_.lstProfs = null;
_.widget = null;
function FrmEvaluationInputView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1290, 389, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputView$1_0);
_.getValue = function getValue_35(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getStudentName();
}
;
function FrmEvaluationInputView$10_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1291, 363, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputView$10_0);
_.getValue = function getValue_36(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective5();
}
;
function $update_14(this$static, object, value){
  $updateEvaluation(dynamicCast(this$static.this$0.uiHandlers, Q$FrmEvaluationInputUiHandler), object, value, 5);
}

function FrmEvaluationInputView$11_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1292, 1, {}, FrmEvaluationInputView$11_0);
_.update = function update_15(index, object, value){
  $update_14(this, dynamicCast(object, Q$EvaluationSubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmEvaluationInputView$12_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1293, 363, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputView$12_0);
_.getValue = function getValue_37(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective6();
}
;
function $update_15(this$static, object, value){
  $updateEvaluation(dynamicCast(this$static.this$0.uiHandlers, Q$FrmEvaluationInputUiHandler), object, value, 6);
}

function FrmEvaluationInputView$13_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1294, 1, {}, FrmEvaluationInputView$13_0);
_.update = function update_16(index, object, value){
  $update_15(this, dynamicCast(object, Q$EvaluationSubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmEvaluationInputView$2_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1295, 363, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputView$2_0);
_.getValue = function getValue_38(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective1();
}
;
function $update_16(this$static, object, value){
  $updateEvaluation(dynamicCast(this$static.this$0.uiHandlers, Q$FrmEvaluationInputUiHandler), object, value, 1);
}

function FrmEvaluationInputView$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1296, 1, {}, FrmEvaluationInputView$3_0);
_.update = function update_17(index, object, value){
  $update_16(this, dynamicCast(object, Q$EvaluationSubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmEvaluationInputView$4_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1297, 363, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputView$4_0);
_.getValue = function getValue_39(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective2();
}
;
function $update_17(this$static, object, value){
  $updateEvaluation(dynamicCast(this$static.this$0.uiHandlers, Q$FrmEvaluationInputUiHandler), object, value, 2);
}

function FrmEvaluationInputView$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1298, 1, {}, FrmEvaluationInputView$5_0);
_.update = function update_18(index, object, value){
  $update_17(this, dynamicCast(object, Q$EvaluationSubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmEvaluationInputView$6_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1299, 363, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputView$6_0);
_.getValue = function getValue_40(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective3();
}
;
function $update_18(this$static, object, value){
  $updateEvaluation(dynamicCast(this$static.this$0.uiHandlers, Q$FrmEvaluationInputUiHandler), object, value, 3);
}

function FrmEvaluationInputView$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1300, 1, {}, FrmEvaluationInputView$7_0);
_.update = function update_19(index, object, value){
  $update_18(this, dynamicCast(object, Q$EvaluationSubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmEvaluationInputView$8_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1301, 363, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputView$8_0);
_.getValue = function getValue_41(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective4();
}
;
function $update_19(this$static, object, value){
  $updateEvaluation(dynamicCast(this$static.this$0.uiHandlers, Q$FrmEvaluationInputUiHandler), object, value, 4);
}

function FrmEvaluationInputView$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1302, 1, {}, FrmEvaluationInputView$9_0);
_.update = function update_20(index, object, value){
  $update_19(this, dynamicCast(object, Q$EvaluationSubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmEvaluationInputView_BinderImpl_0(){
}

defineSeed(1303, 1, {}, FrmEvaluationInputView_BinderImpl_0);
function $build_f_HTMLPanel1_13(this$static){
  var attachRecord13, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_VerticalPanel4, f_HorizontalPanel5, f_Grid6, f_Label7, f_Label8, lstProfs, f_Label9, f_Label10, lstAssignments, f_Label11, f_Label12, lstEvaluationHeaders, f_VerticalPanel13, f_VerticalPanel19, f_HorizontalPanel20, f_Label21, f_Label22, tblEvaluations, f_Label14, f_Label15, f_Label16, f_Label17, f_Label18;
  f_HTMLPanel1 = new HTMLPanel_0($html1_10(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord13 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord13.origParent?$insertBefore(attachRecord13.origParent, attachRecord13.element, attachRecord13.origSibling):orphan(attachRecord13.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'EVALUATION INTERMEDIAIRE', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_VerticalPanel4 = new VerticalPanel_0 , $add_11(f_VerticalPanel4, (f_HorizontalPanel5 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel5, (f_Grid6 = new Grid_0 , $resizeColumns(f_Grid6, 3) , $resizeRows(f_Grid6, 3) , $setWidget_1(f_Grid6, 0, 0, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'step' , $setTextOrHtml(f_Label7.directionalTextHelper, '1', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid6, 0, 1, (f_Label8 = new Label_0 , f_Label8.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label8.directionalTextHelper, 'Choisir le nom du professeur :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid6, 0, 2, (lstProfs = new ListBox_0 , lstProfs.element['className'] = 'sis-combobox' , $addDomHandler(lstProfs, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstProfs = lstProfs , lstProfs)) , $setWidget_1(f_Grid6, 1, 0, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'step' , $setTextOrHtml(f_Label9.directionalTextHelper, '2', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid6, 1, 1, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label10.directionalTextHelper, 'Choisir la classe & mati\xE8re \xE0 saisir les \xE9valuations :', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid6, 1, 2, (lstAssignments = new ListBox_0 , lstAssignments.element['className'] = 'sis-combobox' , $addDomHandler(lstAssignments, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this$static.owner.lstAssignments = lstAssignments , lstAssignments)) , $setWidget_1(f_Grid6, 2, 0, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'step' , $setTextOrHtml(f_Label11.directionalTextHelper, '3', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid6, 2, 1, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label12.directionalTextHelper, "Choisir le rapport d'\xE9valuation :", false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_1(f_Grid6, 2, 2, (lstEvaluationHeaders = new ListBox_0 , lstEvaluationHeaders.element['className'] = 'sis-combobox' , $addDomHandler(lstEvaluationHeaders, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstEvaluationHeaders = lstEvaluationHeaders , lstEvaluationHeaders)) , f_Grid6.tableElem['cellSpacing'] = 2 , f_Grid6.tableElem['cellPadding'] = 2 , f_Grid6)) , $add_9(f_HorizontalPanel5, (f_VerticalPanel13 = new VerticalPanel_0 , $add_11(f_VerticalPanel13, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, 'TB = Tr\xE8s Bien', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $add_11(f_VerticalPanel13, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'B = Bien', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $add_11(f_VerticalPanel13, (f_Label16 = new Label_0 , $setTextOrHtml(f_Label16.directionalTextHelper, 'AB = Assez Bien', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $add_11(f_VerticalPanel13, (f_Label17 = new Label_0 , $setTextOrHtml(f_Label17.directionalTextHelper, 'S = Suffisant', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $add_11(f_VerticalPanel13, (f_Label18 = new Label_0 , $setTextOrHtml(f_Label18.directionalTextHelper, 'NA = Non atteint', false) , $updateHorizontalAlignment(f_Label18) , f_Label18)) , f_VerticalPanel13.element['className'] = 'subSection' , f_VerticalPanel13.table['cellSpacing'] = 2 , f_VerticalPanel13)) , f_HorizontalPanel5.element.style['width'] = '100%' , f_HorizontalPanel5)) , $add_11(f_VerticalPanel4, (f_VerticalPanel19 = new VerticalPanel_0 , $add_11(f_VerticalPanel19, (f_HorizontalPanel20 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel20, (f_Label21 = new Label_0 , f_Label21.element['className'] = 'step' , $setTextOrHtml(f_Label21.directionalTextHelper, '4', false) , $updateHorizontalAlignment(f_Label21) , f_Label21)) , $add_9(f_HorizontalPanel20, (f_Label22 = new Label_0 , f_Label22.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label22.directionalTextHelper, "Objectifs d'apprentissage pour les \xE9l\xE8ves", false) , $updateHorizontalAlignment(f_Label22) , f_Label22)) , f_HorizontalPanel20.table['cellSpacing'] = 2 , f_HorizontalPanel20)) , $add_11(f_VerticalPanel19, (tblEvaluations = this$static.owner.tblEvaluations , tblEvaluations.element.style['height'] = '500px' , tblEvaluations.element.style['width'] = '100%' , tblEvaluations)) , f_VerticalPanel19.element['className'] = 'subSection' , f_VerticalPanel19.element.style['width'] = '100%' , f_VerticalPanel19.table['cellSpacing'] = 2 , f_VerticalPanel19)) , f_VerticalPanel4.element.style['width'] = '100%' , f_VerticalPanel4.table['cellSpacing'] = 2 , f_VerticalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmEvaluationInputView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmEvaluationInputView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new FrmEvaluationInputView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new FrmEvaluationInputView_BinderImpl$Widgets$3_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1304, 1, {}, FrmEvaluationInputView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmEvaluationInputView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1305, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_20(event_0){
  $onLstProfsChange(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1306, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_21(event_0){
  $onLstEvaluationHeadersChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1307, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_22(event_0){
  $onLstAssignmentsChange(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_10(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$view$FrmEvaluationInputView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationInputView$_annotation$$none$$) {
    result = new FrmEvaluationInputView_0(new FrmEvaluationInputView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationInputView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationInputView$_annotation$$none$$;
}

defineSeed(1506, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$EvaluationSubjectProxy]));
_.setObjective1 = function setObjective1(objective1){
  dynamicCast($getWrapped(this.this$0), Q$EvaluationSubjectProxy).setObjective1(objective1);
}
;
_.setObjective2 = function setObjective2(objective2){
  dynamicCast($getWrapped(this.this$0), Q$EvaluationSubjectProxy).setObjective2(objective2);
}
;
_.setObjective3 = function setObjective3(objective3){
  dynamicCast($getWrapped(this.this$0), Q$EvaluationSubjectProxy).setObjective3(objective3);
}
;
_.setObjective4 = function setObjective4(objective4){
  dynamicCast($getWrapped(this.this$0), Q$EvaluationSubjectProxy).setObjective4(objective4);
}
;
_.setObjective5 = function setObjective5(objective5){
  dynamicCast($getWrapped(this.this$0), Q$EvaluationSubjectProxy).setObjective5(objective5);
}
;
_.setObjective6 = function setObjective6(objective6){
  dynamicCast($getWrapped(this.this$0), Q$EvaluationSubjectProxy).setObjective6(objective6);
}
;
defineSeed(1507, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$EvaluationSubjectProxy]));
_.setObjective1 = function setObjective1_0(objective1){
  $setProperty(this.this$0, 'objective1', objective1);
}
;
_.setObjective2 = function setObjective2_0(objective2){
  $setProperty(this.this$0, 'objective2', objective2);
}
;
_.setObjective3 = function setObjective3_0(objective3){
  $setProperty(this.this$0, 'objective3', objective3);
}
;
_.setObjective4 = function setObjective4_0(objective4){
  $setProperty(this.this$0, 'objective4', objective4);
}
;
_.setObjective5 = function setObjective5_0(objective5){
  $setProperty(this.this$0, 'objective5', objective5);
}
;
_.setObjective6 = function setObjective6_0(objective6){
  $setProperty(this.this$0, 'objective6', objective6);
}
;
function EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl$2X_0(this$0, val$assignmentId){
  this.val$assignmentId = val$assignmentId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1601, 639, makeCastMap([Q$AbstractRequest]), EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_39(){
  return new RequestData_0('hSjvuZP6wQXPfVESP8gFRwabraw=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$assignmentId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_EvaluationHeaderProxy_2_classLit);
}
;
_.val$assignmentId = null;
function EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$3X_0(this$0, val$profId, val$assignmentId, val$evaluationHeaderId){
  this.val$profId = val$profId;
  this.val$assignmentId = val$assignmentId;
  this.val$evaluationHeaderId = val$evaluationHeaderId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1614, 639, makeCastMap([Q$AbstractRequest]), EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_46(){
  return new RequestData_0('oSXiK$lGpBXYgcuoN_SJK1p$Kzk=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId, this.val$assignmentId, this.val$evaluationHeaderId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_EvaluationSubjectProxy_2_classLit);
}
;
_.val$assignmentId = null;
_.val$evaluationHeaderId = null;
_.val$profId = null;
function EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$5X_0(this$0, val$evaluationSubject){
  this.val$evaluationSubject = val$evaluationSubject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1616, 639, makeCastMap([Q$AbstractRequest]), EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_48(){
  return new RequestData_0('ikXxg6twlVU$3O1LVe0Sj0bA8n4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$evaluationSubject]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$evaluationSubject = null;
var Lcom_lemania_sis_client_presenter_FrmEvaluationInputPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputPresenter', 898), Lcom_lemania_sis_client_presenter_FrmEvaluationInputPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputPresenter$1', 899), Lcom_lemania_sis_client_presenter_FrmEvaluationInputPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputPresenter$2', 900), Lcom_lemania_sis_client_presenter_FrmEvaluationInputPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputPresenter$3', 901), Lcom_lemania_sis_client_presenter_FrmEvaluationInputPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputPresenter$4', 902), Lcom_lemania_sis_client_presenter_FrmEvaluationInputPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputPresenter$5', 903), Lcom_lemania_sis_client_presenter_FrmEvaluationInputPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputPresenter$6', 904), Lcom_lemania_sis_client_view_FrmEvaluationInputView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView', 1289), Lcom_lemania_sis_client_view_FrmEvaluationInputView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView$1', 1290), Lcom_lemania_sis_client_view_FrmEvaluationInputView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView$2', 1295), Lcom_lemania_sis_client_view_FrmEvaluationInputView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView$3', 1296), Lcom_lemania_sis_client_view_FrmEvaluationInputView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView$4', 1297), Lcom_lemania_sis_client_view_FrmEvaluationInputView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView$5', 1298), Lcom_lemania_sis_client_view_FrmEvaluationInputView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView$6', 1299), Lcom_lemania_sis_client_view_FrmEvaluationInputView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView$7', 1300), Lcom_lemania_sis_client_view_FrmEvaluationInputView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView$8', 1301), Lcom_lemania_sis_client_view_FrmEvaluationInputView$9_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView$9', 1302), Lcom_lemania_sis_client_view_FrmEvaluationInputView$10_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView$10', 1291), Lcom_lemania_sis_client_view_FrmEvaluationInputView$11_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView$11', 1292), Lcom_lemania_sis_client_view_FrmEvaluationInputView$12_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView$12', 1293), Lcom_lemania_sis_client_view_FrmEvaluationInputView$13_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView$13', 1294), Lcom_lemania_sis_client_view_FrmEvaluationInputView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView_BinderImpl', 1303), Lcom_lemania_sis_client_view_FrmEvaluationInputView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView_BinderImpl$Widgets', 1304), Lcom_lemania_sis_client_view_FrmEvaluationInputView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView_BinderImpl$Widgets$1', 1305), Lcom_lemania_sis_client_view_FrmEvaluationInputView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView_BinderImpl$Widgets$2', 1306), Lcom_lemania_sis_client_view_FrmEvaluationInputView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView_BinderImpl$Widgets$3', 1307), Lcom_google_gwt_cell_client_AbstractInputCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'AbstractInputCell', 88), Lcom_google_gwt_cell_client_SelectionCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'SelectionCell', 96), Lcom_google_gwt_cell_client_SelectionCell_1TemplateImpl_2_classLit = createForClass('com.google.gwt.cell.client.', 'SelectionCell_TemplateImpl', 97), Lcom_lemania_sis_shared_service_EvaluationHeaderRequestFactory_1EvaluationHeaderRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl$2X', 1601), Lcom_lemania_sis_shared_service_EvaluationSubjectRequestFactory_1EvaluationSubjectRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$3X', 1614), Lcom_lemania_sis_shared_service_EvaluationSubjectRequestFactory_1EvaluationSubjectRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$5X', 1616);
$entry(onLoad)(14);
