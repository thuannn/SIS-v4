function $createMouseEvent(doc, type, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget){
  var evt = doc.createEventObject();
  evt.type = type;
  evt.detail = detail;
  evt.screenX = screenX;
  evt.screenY = screenY;
  evt.clientX = clientX;
  evt.clientY = clientY;
  evt.ctrlKey = ctrlKey;
  evt.altKey = altKey;
  evt.shiftKey = shiftKey;
  evt.metaKey = metaKey;
  evt.button = button;
  evt.relatedTarget = relatedTarget;
  return evt;
}

function $setFloat(this$static){
  this$static['styleFloat'] = 'right';
}

function $clinit_Style$Float(){
  $clinit_Style$Float = nullMethod;
  LEFT = new Style$Float$1_0;
  RIGHT = new Style$Float$2_0;
  NONE_1 = new Style$Float$3_0;
  $VALUES_4 = initValues(_3Lcom_google_gwt_dom_client_Style$Float_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Float, [LEFT, RIGHT, NONE_1]);
}

function values_5(){
  $clinit_Style$Float();
  return $VALUES_4;
}

defineSeed(201, 31, makeCastMap([Q$Style$Float, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_4, LEFT, NONE_1, RIGHT;
function Style$Float$1_0(){
  Enum_0.call(this, 'LEFT', 0);
}

defineSeed(202, 201, makeCastMap([Q$Style$Float, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Float$1_0);
function Style$Float$2_0(){
  Enum_0.call(this, 'RIGHT', 1);
}

defineSeed(203, 201, makeCastMap([Q$Style$Float, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Float$2_0);
function Style$Float$3_0(){
  Enum_0.call(this, 'NONE', 2);
}

defineSeed(204, 201, makeCastMap([Q$Style$Float, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Float$3_0);
function Button_1(){
  Button_0.call(this);
  $setInnerHTML(this.element, '+');
}

defineSeed(506, 507, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), Button_1);
function $setText(this$static, text){
  $setText_0(this$static.caption, text);
}

function $getCellForEvent(this$static, event_0){
  var column, row, td;
  td = $getEventTargetCell(this$static, event_0.nativeEvent);
  if (!td) {
    return null;
  }
  row = $getParentElement(td).sectionRowIndex;
  column = td.cellIndex;
  return new HTMLTable$Cell_0(row, column);
}

function $getEventTargetCell(this$static, event_0){
  var body, td, tr;
  td = event_0.srcElement;
  for (; td; td = $getParentElement(td)) {
    if ($equalsIgnoreCase($getPropertyString(td, 'tagName'), 'td')) {
      tr = $getParentElement(td);
      body = $getParentElement(tr);
      if (body == this$static.bodyElem) {
        return td;
      }
    }
    if (td == this$static.bodyElem) {
      return null;
    }
  }
  return null;
}

function HTMLTable$Cell_0(rowIndex, cellIndex){
  this.cellIndex_0 = cellIndex;
  this.rowIndex = rowIndex;
}

defineSeed(551, 1, {}, HTMLTable$Cell_0);
_.cellIndex_0 = 0;
_.rowIndex = 0;
function MasterAgendaLoadEvent_0(profileId){
  $clinit_MasterAgendaLoadEvent();
  this.profileId = profileId;
}

defineSeed(872, 273, {}, MasterAgendaLoadEvent_0);
_.dispatch_0 = function dispatch_49(handler){
  dynamicCast(handler, Q$MasterAgendaLoadEvent$MasterAgendaLoadHandler).onMasterAgendaLoad(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_50(){
  return TYPE_49;
}
;
_.profileId = '';
function $addMasterAgendaItem(this$static, jourCode, periodId, profileId, profileSubjectId, classroomId, duration){
  var rc, rf, x;
  rf = new MasterAgendaItemRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl_0(rf);
  $fire((x = new MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$1X_0(rc, jourCode, periodId, profileId, profileSubjectId, classroomId, duration) , $addInvocation(rc.state.dialect, x) , x), new MasterAgendaPresenter$6_0(this$static));
}

function $onClassChanged_0(this$static, classId){
  var rf, rc, rf_0, rc_0, x;
  if (!classId.length)
    return;
  rf = new ProfileRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileRequestFactory_ProfileRequestContextImpl_0(rf);
  $fire($listAllActiveByClass_0(rc, classId), new MasterAgendaPresenter$4_0(this$static));
  rf_0 = new PeriodRequestFactoryImpl_0;
  $initialize_0(rf_0, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc_0 = new PeriodRequestFactory_PeriodRequestContextImpl_0(rf_0);
  $fire((x = new PeriodRequestFactory_PeriodRequestContextImpl$5X_0(rc_0, classId) , $addInvocation(rc_0.state.dialect, x) , x), new MasterAgendaPresenter$3_0(this$static));
}

function $onMasterAgendaLoad(this$static, event_0){
  var rc, rf;
  rf = new MasterAgendaItemRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl_0(rf);
  $fire($listAllByProfile(rc, event_0.profileId), new MasterAgendaPresenter$7_0(this$static));
}

function $onProfileChanged(this$static, profileId){
  var rc, rf;
  if (!profileId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Profil');
    return;
  }
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  $fire($listAll_8(rc, profileId), new MasterAgendaPresenter$5_0(this$static, profileId));
}

function $removeMasterAgendaItem(this$static, mai){
  var rc, rf, x;
  rf = new MasterAgendaItemRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl_0(rf);
  $fire((x = new MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$7X_0(rc, mai) , $addInvocation(rc.state.dialect, x) , x), new MasterAgendaPresenter$8_0(this$static));
}

function MasterAgendaPresenter_0(eventBus, view, proxy){
  $clinit_MasterAgendaPresenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$MasterAgendaPresenter$MyView).setUiHandlers(this);
}

defineSeed(962, 805, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$MasterAgendaLoadEvent$MasterAgendaLoadHandler, Q$MasterAgendaPresenter, Q$MasterAgendaUiHandlers]), MasterAgendaPresenter_0);
_.onBind = function onBind_4(){
  $setEventHandlers(dynamicCast(this.view, Q$MasterAgendaPresenter$MyView));
}
;
_.onMasterAgendaLoad = function onMasterAgendaLoad(event_0){
  $onMasterAgendaLoad(this, event_0);
}
;
_.onReset = function onReset_3(){
  var rf, rc, rc_0, rf_0;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('masteragenda'), null);
  $initializeUI(dynamicCast(this.view, Q$MasterAgendaPresenter$MyView));
  rf = new ClasseRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAllActive_0(rc), new MasterAgendaPresenter$2_0(this));
  rc_0 = (rf_0 = new ClassroomRequestFactoryImpl_0 , $initialize_0(rf_0, this.eventBus, new EventSourceRequestTransport_0(this.eventBus)) , new ClassroomRequestFactory_ClassroomRequestContextImpl_0(rf_0));
  $fire($listAll(rc_0), new MasterAgendaPresenter$1_0(this));
}
;
function $onSuccess_12(this$static, response){
  $setClassroomList(dynamicCast(this$static.this$0.view, Q$MasterAgendaPresenter$MyView), response);
}

function MasterAgendaPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(963, 736, makeCastMap([Q$Receiver]), MasterAgendaPresenter$1_0);
_.onFailure_0 = function onFailure_15(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_15(response){
  $onSuccess_12(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_13(this$static, response){
  $setClassList(dynamicCast(this$static.this$0.view, Q$MasterAgendaPresenter$MyView), response);
}

function MasterAgendaPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(964, 736, makeCastMap([Q$Receiver]), MasterAgendaPresenter$2_0);
_.onFailure_0 = function onFailure_16(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_16(response){
  $onSuccess_13(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_14(this$static, response){
  $initializeUI_0(dynamicCast(this$static.this$0.view, Q$MasterAgendaPresenter$MyView), response);
}

function MasterAgendaPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(965, 736, makeCastMap([Q$Receiver]), MasterAgendaPresenter$3_0);
_.onFailure_0 = function onFailure_17(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_17(response){
  $onSuccess_14(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_15(this$static, response){
  $setProfileListData_0(dynamicCast(this$static.this$0.view, Q$MasterAgendaPresenter$MyView), response);
}

function MasterAgendaPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(966, 736, makeCastMap([Q$Receiver]), MasterAgendaPresenter$4_0);
_.onFailure_0 = function onFailure_18(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_18(response){
  $onSuccess_15(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_16(this$static, response){
  $setSubjectListData(dynamicCast(this$static.this$0.view, Q$MasterAgendaPresenter$MyView), response);
  $doFire(this$static.this$0.eventBus, new MasterAgendaLoadEvent_0(this$static.val$profileId), null);
}

function MasterAgendaPresenter$5_0(this$0, val$profileId){
  this.this$0 = this$0;
  this.val$profileId = val$profileId;
}

defineSeed(967, 736, makeCastMap([Q$Receiver]), MasterAgendaPresenter$5_0);
_.onFailure_0 = function onFailure_19(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_19(response){
  $onSuccess_16(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
_.val$profileId = null;
function $onSuccess_17(this$static, response){
  $showAddedMasterAgendaItem(dynamicCast(this$static.this$0.view, Q$MasterAgendaPresenter$MyView), response);
}

function MasterAgendaPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(968, 736, makeCastMap([Q$Receiver]), MasterAgendaPresenter$6_0);
_.onFailure_0 = function onFailure_20(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_20(response){
  $onSuccess_17(this, dynamicCast(response, Q$MasterAgendaItemProxy));
}
;
_.this$0 = null;
function $onSuccess_18(this$static, response){
  $showMasterAgendaItemData(dynamicCast(this$static.this$0.view, Q$MasterAgendaPresenter$MyView), response);
}

function MasterAgendaPresenter$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(969, 736, makeCastMap([Q$Receiver]), MasterAgendaPresenter$7_0);
_.onFailure_0 = function onFailure_21(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_21(response){
  $onSuccess_18(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_19(this$static){
  $clearSelectedMasterAgendaItem(dynamicCast(this$static.this$0.view, Q$MasterAgendaPresenter$MyView));
}

function MasterAgendaPresenter$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(970, 736, makeCastMap([Q$Receiver]), MasterAgendaPresenter$8_0);
_.onFailure_0 = function onFailure_22(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_22(response){
  $onSuccess_19(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
defineSeed(971, 833, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$MasterAgendaLoadEvent$MasterAgendaLoadHandler]));
_.onMasterAgendaLoad = function onMasterAgendaLoad_0(event_0){
  $getPresenter_0(this, new MasterAgendaPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
function $success_6(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MasterAgendaPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function MasterAgendaPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(972, 818, {}, MasterAgendaPresenterMyProxyImpl$1_0);
_.success = function success_8(presenter){
  $success_6(this, dynamicCast(presenter, Q$MasterAgendaPresenter));
}
;
_.val$event = null;
function MasterAgendaPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(973, 1, {}, MasterAgendaPresenterMyProxyImpl$1$1_0);
_.execute_0 = function execute_37(){
  $onMasterAgendaLoad(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $clearSelectedMasterAgendaItem(this$static){
  var i, j, vp;
  for (i = 0; i < this$static.tblAgenda.bodyElem.rows.length; ++i) {
    vp = dynamicCast($getWidget(this$static.tblAgenda, i, this$static.clickedCellIndex), Q$VerticalPanel);
    if (!vp)
      continue;
    for (j = 1; j < vp.children_0.size_0; ++j) {
      $equals_6('' + toString_6(dynamicCast($get_4(vp.children_0, j), Q$AgendaVerticalPanel).mai.getId_0().value_0), this$static.deletedMaiId) && $removeFromParent_0(dynamicCast($get_4(vp.children_0, j), Q$AgendaVerticalPanel));
    }
  }
}

function $drawTable(this$static, periods){
  var bt, i, j, vp;
  $removeAllRows(this$static.tblAgenda);
  $setText_2(this$static.tblAgenda, 0, 0, '');
  $setText_2(this$static.tblAgenda, 0, 1, getDayName('D2'));
  $setText_2(this$static.tblAgenda, 0, 2, getDayName('D3'));
  $setText_2(this$static.tblAgenda, 0, 3, getDayName('D4'));
  $setText_2(this$static.tblAgenda, 0, 4, getDayName('D5'));
  $setText_2(this$static.tblAgenda, 0, 5, getDayName('D6'));
  for (i = 0; i < periods.size_1(); ++i) {
    $setText_2(this$static.tblAgenda, i + 1, 0, dynamicCast(periods.get_0(i), Q$PeriodProxy).getDescription());
  }
  for (i = 1; i < this$static.tblAgenda.bodyElem.rows.length; ++i) {
    for (j = 1; j < $getCellCount(this$static.tblAgenda, 0); ++j) {
      vp = new VerticalPanel_0;
      bt = new Button_1;
      bt.element['className'] = 'agendaAddButton';
      $setFloat(bt.element.style, $clinit_Style$Float());
      $add_12(vp, bt);
      $setWidget_3(this$static.tblAgenda, i, j, vp);
      $addDomHandler(vp, new MasterAgendaView$1_0(this$static, vp), ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_7));
      $addDomHandler(vp, new MasterAgendaView$2_0(vp), ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_6));
      vp.element['className'] = 'agendaItemContainer';
      $setWidget_3(this$static.tblAgenda, i, j, vp);
    }
  }
  i = this$static.tblAgenda.bodyElem.rows.length;
  $setText_2(this$static.tblAgenda, i, 0, '');
  $setText_2(this$static.tblAgenda, i, 1, 'D2');
  $setText_2(this$static.tblAgenda, i, 2, 'D3');
  $setText_2(this$static.tblAgenda, i, 3, 'D4');
  $setText_2(this$static.tblAgenda, i, 4, 'D5');
  $setText_2(this$static.tblAgenda, i, 5, 'D6');
  i = $getCellCount(this$static.tblAgenda, 0);
  for (j = 0; j < periods.size_1(); ++j) {
    $setText_2(this$static.tblAgenda, j + 1, i, '' + toString_6(dynamicCast(periods.get_0(j), Q$PeriodProxy).getId_0().value_0));
  }
  $styleTable(this$static);
}

function $getCellIndexById(this$static, jourCode){
  var i;
  for (i = 0; i < $getCellCount(this$static.tblAgenda, 0); ++i) {
    if ($equals_6($getText(this$static.tblAgenda, this$static.tblAgenda.bodyElem.rows.length - 1, i), jourCode))
      return i;
  }
  return -1;
}

function $getRowIndexById(this$static, periodId){
  var i;
  for (i = 0; i < this$static.tblAgenda.bodyElem.rows.length; ++i) {
    if ($equals_6($getText(this$static.tblAgenda, i, $getCellCount(this$static.tblAgenda, i) - 1), periodId))
      return i;
  }
  return -1;
}

function $initializeUI(this$static){
  $removeAllRows(this$static.tblAgenda);
  $selectClear(this$static.lstProfiles.element);
}

function $initializeUI_0(this$static, periods){
  $clear_5(this$static.periods);
  $addAll_1(this$static.periods, periods);
  $drawTable(this$static, periods);
}

function $onCmdDeleteClick(this$static){
  if (this$static.selectedMai) {
    this$static.deletedMaiId = '' + toString_6(this$static.selectedMai.getId_0().value_0);
    $removeMasterAgendaItem(dynamicCast(this$static.uiHandlers, Q$MasterAgendaUiHandlers), this$static.selectedMai);
  }
}

function $onCmdSaveClick(this$static){
  $addMasterAgendaItem(dynamicCast(this$static.uiHandlers, Q$MasterAgendaUiHandlers), $getText(this$static.tblAgenda, this$static.tblAgenda.bodyElem.rows.length - 1, this$static.clickedCellIndex), $getText(this$static.tblAgenda, this$static.clickedRowIndex, $getCellCount(this$static.tblAgenda, this$static.clickedRowIndex) - 1), $getValue_2(this$static.lstProfiles, this$static.lstProfiles.element.selectedIndex), $getValue_2(this$static.lstSubject, this$static.lstSubject.element.selectedIndex), $getValue_2(this$static.lstClassrooms, this$static.lstClassrooms.element.selectedIndex), __parseAndValidateInt($getValue_2(this$static.lstDuration, this$static.lstDuration.element.selectedIndex)));
}

function $onLstClassesChange_0(this$static){
  !!this$static.uiHandlers && $onClassChanged_0(dynamicCast(this$static.uiHandlers, Q$MasterAgendaUiHandlers), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $onLstProfilesChange(this$static){
  !!this$static.uiHandlers && $onProfileChanged(dynamicCast(this$static.uiHandlers, Q$MasterAgendaUiHandlers), $getValue_2(this$static.lstProfiles, this$static.lstProfiles.element.selectedIndex));
}

function $prepareDialogBox(this$static, mai, jour, period){
  var i;
  $setVisible_0(this$static.pnlAdd, true);
  $add_4(this$static.popup, this$static.pnlAdd);
  this$static.popup.isAnimationEnabled = true;
  $setHeight_0(this$static.popup, $getPropertyInt(this$static.pnlAdd.element, 'offsetHeight') + 'px');
  $setWidth_0(this$static.popup, $getPropertyInt(this$static.pnlAdd.element, 'offsetWidth') + 'px');
  $setText(this$static.popup, ($clinit_NotificationTypes() , 'D\xE9tails des p\xE9riodes'));
  $center(this$static.popup);
  $selectClear(this$static.lstDuration.element);
  if (!mai) {
    for (i = 0; i < this$static.periods.size_0 - this$static.clickedRowIndex + 1; ++i) {
      $insertItem_0(this$static.lstDuration, '' + (i + 1), '' + (i + 1), -1);
    }
    $setText_0(this$static.txtJour, jour);
    $setText_0(this$static.txtPeriod, period);
    $setText_0(this$static.txtPeriodId, '');
    $setSelectedIndex_0(this$static.lstSubject, 0);
    $setEnabled(this$static.cmdSave, true);
    $setEnabled(this$static.cmdDelete, false);
  }
   else {
    for (i = 0; i < mai.getDuration(); ++i) {
      $insertItem_0(this$static.lstDuration, '' + (i + 1), '' + (i + 1), -1);
    }
    $setText_0(this$static.txtJour, getDayName(mai.getJourCode()));
    $setText_0(this$static.txtPeriod, mai.getPeriodDescription());
    $setText_0(this$static.txtPeriodId, '' + toString_6(mai.getId_0().value_0));
    selectItemByText(this$static.lstSubject, mai.getSubjectName() + ' - ' + mai.getProfName());
    selectItemByText(this$static.lstDuration, '' + mai.getDuration());
    selectItemByText(this$static.lstClassrooms, mai.getClassroomName());
    $setEnabled(this$static.cmdSave, false);
    $setEnabled(this$static.cmdDelete, true);
  }
  this$static.clickEventFired = true;
}

function $prepareSubjectList(this$static, subjects){
  var subject, subject$iterator;
  $selectClear(this$static.lstSubject.element);
  $insertItem_0(this$static.lstSubject, '-', '', -1);
  for (subject$iterator = subjects.iterator(); subject$iterator.hasNext();) {
    subject = dynamicCast(subject$iterator.next_0(), Q$ProfileSubjectProxy);
    $insertItem_0(this$static.lstSubject, subject.getSubjectName() + ' - ' + subject.getProfName(), '' + toString_6(subject.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstSubject, 0);
}

function $setClassList(this$static, classes){
  var clazz, clazz$iterator;
  $selectClear(this$static.lstClasses.element);
  $insertItem_0(this$static.lstClasses, '-', '', -1);
  for (clazz$iterator = classes.iterator(); clazz$iterator.hasNext();) {
    clazz = dynamicCast(clazz$iterator.next_0(), Q$ClasseProxy);
    $insertItem_0(this$static.lstClasses, clazz.getClassName(), '' + toString_6(clazz.getId_0().value_0), -1);
  }
}

function $setClassroomList(this$static, rooms){
  var cp, cp$iterator;
  $selectClear(this$static.lstClassrooms.element);
  $insertItem_0(this$static.lstClassrooms, '-', '', -1);
  for (cp$iterator = rooms.iterator(); cp$iterator.hasNext();) {
    cp = dynamicCast(cp$iterator.next_0(), Q$ClassroomProxy);
    $insertItem_0(this$static.lstClassrooms, cp.getRoomName(), '' + toString_6(cp.getId_0().value_0), -1);
  }
}

function $setEventHandlers(this$static){
  $addDomHandler(this$static.tblAgenda, new MasterAgendaView$6_0(this$static), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  this$static.popup = new MasterAgendaView$7_0;
  $addHandler_0(this$static.popup, new MasterAgendaView$8_0(this$static), TYPE_15?TYPE_15:(TYPE_15 = new GwtEvent$Type_0));
}

function $setProfileListData_0(this$static, profiles){
  var profile, profile$iterator;
  $selectClear(this$static.lstProfiles.element);
  $insertItem_0(this$static.lstProfiles, '-', '', -1);
  for (profile$iterator = profiles.iterator(); profile$iterator.hasNext();) {
    profile = dynamicCast(profile$iterator.next_0(), Q$ProfileProxy);
    $insertItem_0(this$static.lstProfiles, profile.getProfileName(), '' + toString_6(profile.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstProfiles, 0);
}

function $setSubjectListData(this$static, subjects){
  this$static.subjects = subjects;
  $prepareSubjectList(this$static, this$static.subjects);
}

function $showAddedMasterAgendaItem(this$static, mai){
  $showMasterAgendaItem(this$static, mai, this$static.clickedRowIndex, this$static.clickedCellIndex);
}

function $showMasterAgendaItem(this$static, mai, rowIndex, cellIndex){
  var avp, duration, i, lblNormal, lblSubject;
  duration = mai.getDuration();
  for (i = 0; i < duration; ++i) {
    avp = new AgendaVerticalPanel_0;
    avp.element['className'] = 'agendaSelected';
    avp.element.style['backgroundColor'] = $get_10(($clinit_ClassPeriod() , colors), this$static.colorIndex);
    $addDomHandler(avp, new MasterAgendaView$3_0(this$static, mai, avp), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
    $addDomHandler(avp, new MasterAgendaView$4_0(avp), ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_7));
    $addDomHandler(avp, new MasterAgendaView$5_0(avp), ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_6));
    avp.mai = mai;
    avp.cellIndex_0 = cellIndex;
    avp.rowIndex = rowIndex;
    lblSubject = new Label_2(mai.getSubjectName());
    lblSubject.element['className'] = 'agendaSubjectText';
    $add_12(avp, lblSubject);
    lblNormal = new Label_2(mai.getProfName() + ' - ' + mai.getClassroomName());
    lblNormal.element['className'] = 'agendaNormalText';
    $add_12(avp, lblNormal);
    $add_12(dynamicCast($getWidget(this$static.tblAgenda, rowIndex + i, cellIndex), Q$VerticalPanel), avp);
  }
  this$static.colorIndex + 1 < ($clinit_ClassPeriod() , colors).array.length?++this$static.colorIndex:(this$static.colorIndex = 0);
}

function $showMasterAgendaItemData(this$static, mais){
  var cellIndex, mai, mai$iterator, rowIndex;
  for (mai$iterator = mais.iterator(); mai$iterator.hasNext();) {
    mai = dynamicCast(mai$iterator.next_0(), Q$MasterAgendaItemProxy);
    rowIndex = $getRowIndexById(this$static, mai.getPeriodId());
    cellIndex = $getCellIndexById(this$static, mai.getJourCode());
    rowIndex != -1 && cellIndex != -1 && $showMasterAgendaItem(this$static, mai, rowIndex, cellIndex);
  }
}

function $showPopup(this$static, mai, jour, period){
  if (this$static.clickEventFired)
    return;
  $prepareDialogBox(this$static, mai, jour, period);
  $show_0(this$static.popup);
}

function $styleTable(this$static){
  var i, j;
  for (i = 0; i < this$static.tblAgenda.bodyElem.rows.length; ++i) {
    for (j = 0; j < $getCellCount(this$static.tblAgenda, 0); ++j) {
      $isCellPresent(this$static.tblAgenda, i, j) && $setStyleName_0(this$static.tblAgenda.cellFormatter, i, j, 'agendaNormal');
    }
  }
  for (j = 0; j < $getCellCount(this$static.tblAgenda, 0); ++j) {
    $isCellPresent(this$static.tblAgenda, this$static.tblAgenda.bodyElem.rows.length - 1, j) && $setStyleName_0(this$static.tblAgenda.cellFormatter, this$static.tblAgenda.bodyElem.rows.length - 1, j, 'agendaHidden');
  }
  for (i = 0; i < this$static.tblAgenda.bodyElem.rows.length; ++i)
    $isCellPresent(this$static.tblAgenda, i, $getCellCount(this$static.tblAgenda, 0)) && $setStyleName_0(this$static.tblAgenda.cellFormatter, i, $getCellCount(this$static.tblAgenda, 0), 'agendaHidden');
  for (j = 0; j < $getCellCount(this$static.tblAgenda, 0); ++j) {
    $isCellPresent(this$static.tblAgenda, 0, j) && $setStyleName_0(this$static.tblAgenda.cellFormatter, 0, j, 'agendaTitle');
  }
  for (i = 0; i < this$static.tblAgenda.bodyElem.rows.length - 1; ++i)
    $isCellPresent(this$static.tblAgenda, i, 0) && $setStyleName_0(this$static.tblAgenda.cellFormatter, i, 0, 'agendaTitle');
  this$static.tblAgenda.element.style['verticalAlign'] = ($clinit_Style$VerticalAlign() , 'bottom');
}

function MasterAgendaView_0(){
  this.periods = new ArrayList_0;
  this.subjects = new ArrayList_0;
  $initWidget_0(this, $build_f_HTMLPanel1_1(new MasterAgendaView_BinderImpl$Widgets_0(this)));
}

defineSeed(975, 810, makeCastMap([Q$IsWidget, Q$MasterAgendaPresenter$MyView]), MasterAgendaView_0);
_.clickEventFired = false;
_.clickedCellIndex = 0;
_.clickedRowIndex = 0;
_.cmdDelete = null;
_.cmdSave = null;
_.colorIndex = 0;
_.deletedMaiId = null;
_.lstClasses = null;
_.lstClassrooms = null;
_.lstDuration = null;
_.lstProfiles = null;
_.lstSubject = null;
_.pnlAdd = null;
_.pnlPrincipal = null;
_.popup = null;
_.selectedAVP = null;
_.selectedMai = null;
_.selectedVP = null;
_.tblAgenda = null;
_.txtJour = null;
_.txtPeriod = null;
_.txtPeriodId = null;
function MasterAgendaView$1_0(this$0, val$vp){
  this.this$0 = this$0;
  this.val$vp = val$vp;
}

defineSeed(976, 1, makeCastMap([Q$MouseOverHandler, Q$EventHandler]), MasterAgendaView$1_0);
_.onMouseOver = function onMouseOver_0(arg0){
  this.this$0.selectedVP = this.val$vp;
  this.val$vp.element.style['backgroundColor'] = '#f2f2f2';
}
;
_.this$0 = null;
_.val$vp = null;
function MasterAgendaView$2_0(val$vp){
  this.val$vp = val$vp;
}

defineSeed(977, 1, makeCastMap([Q$MouseOutHandler, Q$EventHandler]), MasterAgendaView$2_0);
_.onMouseOut = function onMouseOut_0(arg0){
  this.val$vp.element.style['backgroundColor'] = 'white';
}
;
_.val$vp = null;
function MasterAgendaView$3_0(this$0, val$mai, val$avp){
  this.this$0 = this$0;
  this.val$mai = val$mai;
  this.val$avp = val$avp;
}

defineSeed(978, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), MasterAgendaView$3_0);
_.onClick = function onClick_7(arg0){
  this.this$0.selectedMai = this.val$mai;
  this.this$0.selectedAVP = this.val$avp;
  $showPopup(this.this$0, this.val$avp.mai, $getText(this.this$0.tblAgenda, 0, this.val$avp.cellIndex_0), $getText(this.this$0.tblAgenda, this.val$avp.rowIndex, 0));
}
;
_.this$0 = null;
_.val$avp = null;
_.val$mai = null;
function MasterAgendaView$4_0(val$avp){
  this.val$avp = val$avp;
}

defineSeed(979, 1, makeCastMap([Q$MouseOverHandler, Q$EventHandler]), MasterAgendaView$4_0);
_.onMouseOver = function onMouseOver_1(arg0){
  this.val$avp.element.style['borderStyle'] = ($clinit_Style$BorderStyle() , 'solid');
  this.val$avp.element.style['borderWidth'] = 1 + ($clinit_Style$Unit() , 'px');
  this.val$avp.element.style['borderColor'] = 'lightskyblue';
  this.val$avp.element.style['cursor'] = ($clinit_Style$Cursor() , 'pointer');
}
;
_.val$avp = null;
function MasterAgendaView$5_0(val$avp){
  this.val$avp = val$avp;
}

defineSeed(980, 1, makeCastMap([Q$MouseOutHandler, Q$EventHandler]), MasterAgendaView$5_0);
_.onMouseOut = function onMouseOut_1(arg0){
  this.val$avp.element.style['borderColor'] = 'white';
  this.val$avp.element.style['cursor'] = ($clinit_Style$Cursor() , 'auto');
}
;
_.val$avp = null;
function MasterAgendaView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(981, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), MasterAgendaView$6_0);
_.onClick = function onClick_8(event_0){
  this.this$0.clickedCellIndex = $getCellForEvent(this.this$0.tblAgenda, event_0).cellIndex_0;
  this.this$0.clickedRowIndex = $getCellForEvent(this.this$0.tblAgenda, event_0).rowIndex;
  this.this$0.clickedCellIndex > 0 && $showPopup(this.this$0, null, $getText(this.this$0.tblAgenda, 0, this.this$0.clickedCellIndex), $getText(this.this$0.tblAgenda, this.this$0.clickedRowIndex, 0));
}
;
_.this$0 = null;
function MasterAgendaView$7_0(){
  DialogBox_0.call(this, true);
}

defineSeed(982, 527, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$PopupPanel, Q$UIObject, Q$Widget, Q$Iterable]), MasterAgendaView$7_0);
_.onPreviewNativeEvent = function onPreviewNativeEvent_3(event_0){
  $onPreviewNativeEvent(this, event_0);
  $eventGetTypeInt(event_0.nativeEvent.type) == 128 && (event_0.nativeEvent.keyCode || 0) == 27 && $hide_0(this);
}
;
function MasterAgendaView$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(983, 1, makeCastMap([Q$CloseHandler, Q$EventHandler]), MasterAgendaView$8_0);
_.onClose = function onClose_2(event_0){
  $add_12(this.this$0.pnlPrincipal, this.this$0.pnlAdd);
  $setVisible_0(this.this$0.pnlAdd, false);
  this.this$0.clickEventFired = false;
  !!this.this$0.selectedAVP && fireNativeEvent($createMouseEvent($doc, 'mouseout', 0, 0, 0, 0, 0, false, false, false, false, 0, null), this.this$0.selectedAVP, null);
  !!this.this$0.selectedVP && fireNativeEvent($createMouseEvent($doc, 'mouseout', 0, 0, 0, 0, 0, false, false, false, false, 0, null), this.this$0.selectedVP, null);
}
;
_.this$0 = null;
function MasterAgendaView_BinderImpl_0(){
}

defineSeed(984, 1, {}, MasterAgendaView_BinderImpl_0);
function $build_f_HTMLPanel1_1(this$static){
  var attachRecord27, f_HTMLPanel1, f_Label2, pnlPrincipal, f_VerticalPanel3, f_HorizontalPanel4, f_Label5, lstClasses, f_Label6, lstProfiles, tblAgenda, pnlAdd, f_VerticalPanel7, f_Grid8, f_Label9, txtJour, f_Label10, txtPeriod, f_Label11, lstSubject, f_Label12, lstDuration, f_Label13, lstClassrooms, txtPeriodId, f_HorizontalPanel14, cmdDelete, f_HorizontalPanel15, f_Label16, cmdSave, cmdClose, sb;
  f_HTMLPanel1 = new HTMLPanel_0($html2_0(this$static.domId0, this$static.domId1).html);
  attachRecord27 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  $get_1(this$static.domId1Element);
  attachRecord27.origParent?$insertBefore(attachRecord27.origParent, attachRecord27.element, attachRecord27.origSibling):orphan(attachRecord27.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label2.directionalTextHelper, 'HORAIRES CADRES', false) , $updateHorizontalAlignment(f_Label2) , f_Label2), $get_1(this$static.domId0Element));
  $addAndReplaceElement(f_HTMLPanel1, (pnlPrincipal = new VerticalPanel_0 , $setHorizontalAlignment_1(pnlPrincipal, ALIGN_CENTER) , $add_12(pnlPrincipal, (f_VerticalPanel3 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel3, ALIGN_CENTER) , $add_12(f_VerticalPanel3, (f_HorizontalPanel4 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel4, ALIGN_LEFT) , $add_10(f_HorizontalPanel4, (f_Label5 = new Label_0 , $setHorizontalAlignment(f_Label5, ALIGN_RIGHT) , $setTextOrHtml(f_Label5.directionalTextHelper, 'Classe :', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $add_10(f_HorizontalPanel4, (lstClasses = new ListBox_0 , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstClasses = lstClasses , lstClasses)) , $add_10(f_HorizontalPanel4, (f_Label6 = new Label_0 , $setHorizontalAlignment(f_Label6, ALIGN_RIGHT) , $setTextOrHtml(f_Label6.directionalTextHelper, 'Profil :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_10(f_HorizontalPanel4, (lstProfiles = new ListBox_0 , $addDomHandler(lstProfiles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this$static.owner.lstProfiles = lstProfiles , lstProfiles)) , f_HorizontalPanel4.element['className'] = 'toolbar' , f_HorizontalPanel4.element.style['width'] = '50%' , f_HorizontalPanel4.table['cellSpacing'] = 5 , f_HorizontalPanel4)) , $add_12(f_VerticalPanel3, (tblAgenda = new FlexTable_0 , tblAgenda.tableElem['border'] = '0' , tblAgenda.element.style['width'] = '100%' , this$static.owner.tblAgenda = tblAgenda , tblAgenda)) , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3.table['cellSpacing'] = 10 , f_VerticalPanel3)) , $add_12(pnlPrincipal, (pnlAdd = new FlowPanel_0 , $add_8(pnlAdd, (f_VerticalPanel7 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel7, ALIGN_RIGHT) , $add_12(f_VerticalPanel7, (f_Grid8 = new Grid_0 , $resizeColumns(f_Grid8, 2) , $resizeRows(f_Grid8, 6) , $setWidget_3(f_Grid8, 0, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Jour :', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_3(f_Grid8, 0, 1, (txtJour = new Label_0 , this$static.owner.txtJour = txtJour , txtJour)) , $setWidget_3(f_Grid8, 1, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'P\xE9riode :', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_3(f_Grid8, 1, 1, (txtPeriod = new Label_0 , this$static.owner.txtPeriod = txtPeriod , txtPeriod)) , $setWidget_3(f_Grid8, 2, 0, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Mati\xE8re :', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_3(f_Grid8, 2, 1, (lstSubject = new ListBox_0 , this$static.owner.lstSubject = lstSubject , lstSubject)) , $setWidget_3(f_Grid8, 3, 0, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Dur\xE9e :', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_3(f_Grid8, 3, 1, (lstDuration = new ListBox_0 , this$static.owner.lstDuration = lstDuration , lstDuration)) , $setWidget_3(f_Grid8, 4, 0, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'Salle de classe :', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_3(f_Grid8, 4, 1, (lstClassrooms = new ListBox_0 , this$static.owner.lstClassrooms = lstClassrooms , lstClassrooms)) , $setWidget_3(f_Grid8, 5, 0, (txtPeriodId = new Label_0 , txtPeriodId.element['className'] = 'hiddenText' , $setTextOrHtml(txtPeriodId.directionalTextHelper, '', false) , $updateHorizontalAlignment(txtPeriodId) , this$static.owner.txtPeriodId = txtPeriodId , txtPeriodId)) , f_Grid8.element.style['width'] = '100%' , f_Grid8.tableElem['cellSpacing'] = 2 , f_Grid8.tableElem['cellPadding'] = 2 , f_Grid8)) , $add_12(f_VerticalPanel7, (f_HorizontalPanel14 = new HorizontalPanel_0 , $add_10(f_HorizontalPanel14, (cmdDelete = new Button_0 , $setInnerText(cmdDelete.element, 'Supprimer') , $addDomHandler(cmdDelete, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , this$static.owner.cmdDelete = cmdDelete , cmdDelete)) , $add_10(f_HorizontalPanel14, (f_HorizontalPanel15 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel15, ALIGN_RIGHT) , $add_10(f_HorizontalPanel15, (f_Label16 = new Label_0 , f_Label16.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label16.directionalTextHelper, '................................', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $add_10(f_HorizontalPanel15, (cmdSave = new Button_0 , $setInnerText(cmdSave.element, 'Enregistrer') , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_0) , this$static.owner.cmdSave = cmdSave , cmdSave)) , $add_10(f_HorizontalPanel15, (cmdClose = new Button_0 , $setHTML(cmdClose, (sb = new StringBuilder_0 , $append_1(sb.data, 'Fermer') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $addDomHandler(cmdClose, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, TYPE_0) , cmdClose)) , f_HorizontalPanel15.element.style['width'] = '100%' , f_HorizontalPanel15)) , f_HorizontalPanel14.element.style['width'] = '100%' , f_HorizontalPanel14.table['cellSpacing'] = 5 , f_HorizontalPanel14)) , f_VerticalPanel7.element.style['width'] = '100%' , f_VerticalPanel7)) , setVisible(pnlAdd.element, false) , pnlAdd.element.style['width'] = '500px' , this$static.owner.pnlAdd = pnlAdd , pnlAdd)) , pnlPrincipal.element.style['width'] = '100%' , pnlPrincipal.table['cellSpacing'] = 5 , this$static.owner.pnlPrincipal = pnlPrincipal , pnlPrincipal), $get_1(this$static.domId1Element));
  return f_HTMLPanel1;
}

function MasterAgendaView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new MasterAgendaView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new MasterAgendaView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new MasterAgendaView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new MasterAgendaView_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new MasterAgendaView_BinderImpl$Widgets$5_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
  this.domId1Element = new LazyDomElement_0(this.domId1);
}

defineSeed(985, 1, {}, MasterAgendaView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.domId1 = null;
_.domId1Element = null;
_.owner = null;
function MasterAgendaView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(986, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), MasterAgendaView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_9(event_0){
  $onCmdSaveClick(this.this$1.owner);
}
;
_.this$1 = null;
function MasterAgendaView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(987, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), MasterAgendaView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_4(event_0){
  $onLstClassesChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function MasterAgendaView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(988, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), MasterAgendaView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_5(event_0){
  $onLstProfilesChange(this.this$1.owner);
}
;
_.this$1 = null;
function MasterAgendaView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(989, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), MasterAgendaView_BinderImpl$Widgets$4_0);
_.onClick = function onClick_10(event_0){
  $onCmdDeleteClick(this.this$1.owner);
}
;
_.this$1 = null;
function MasterAgendaView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(990, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), MasterAgendaView_BinderImpl$Widgets$5_0);
_.onClick = function onClick_11(event_0){
  $hide_0(this.this$1.owner.popup);
}
;
_.this$1 = null;
function $html2_0(arg0, arg1){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span> <span id='");
  $append_10(sb, htmlEscape(arg1));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaPresenter$_annotation$$none$$) {
    result = new MasterAgendaPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaPresenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaView$_annotation$$none$$) {
    result = new MasterAgendaView_0(new MasterAgendaView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaView$_annotation$$none$$;
}

defineSeed(994, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_23(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $listAllByProfile(this$static, profileId){
  var x;
  x = new MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$6X_0(this$static, profileId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$1X_0(this$0, val$jourCode, val$periodId, val$profileId, val$profileSubjectId, val$classroomId, val$duration){
  this.val$jourCode = val$jourCode;
  this.val$periodId = val$periodId;
  this.val$profileId = val$profileId;
  this.val$profileSubjectId = val$profileSubjectId;
  this.val$classroomId = val$classroomId;
  this.val$duration = val$duration;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1883, 740, makeCastMap([Q$AbstractRequest]), MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_12(){
  return new RequestData_0('FWLKnQxUKk6meMxRXRWVJySbNCE=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$jourCode, this.val$periodId, this.val$profileId, this.val$profileSubjectId, this.val$classroomId, valueOf_1(this.val$duration)]), this.propertyRefs, Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemProxy_2_classLit, null);
}
;
_.val$classroomId = null;
_.val$duration = 0;
_.val$jourCode = null;
_.val$periodId = null;
_.val$profileId = null;
_.val$profileSubjectId = null;
function MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$6X_0(this$0, val$profileId){
  this.val$profileId = val$profileId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1886, 740, makeCastMap([Q$AbstractRequest]), MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_15(){
  return new RequestData_0('p0rYJ4mETAj2w3IE14w9JbJZ8cY=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemProxy_2_classLit);
}
;
_.val$profileId = null;
function MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$7X_0(this$0, val$mai){
  this.val$mai = val$mai;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1887, 740, makeCastMap([Q$AbstractRequest]), MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_16(){
  return new RequestData_0('xW6rEJ1X4DGY4zZF4diCThn0I4c=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$mai]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$mai = null;
function PeriodRequestFactory_PeriodRequestContextImpl$5X_0(this$0, val$classId){
  this.val$classId = val$classId;
  this.val$active = true;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1905, 740, makeCastMap([Q$AbstractRequest]), PeriodRequestFactory_PeriodRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_22(){
  return new RequestData_0('h72JISjeEjyHJD3KmC1PqesLwS4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$classId, ($clinit_Boolean() , this.val$active?TRUE_1:FALSE_1)]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_period_PeriodProxy_2_classLit);
}
;
_.val$active = false;
_.val$classId = null;
var Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter', 962), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter$1_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter$1', 963), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter$2_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter$2', 964), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter$3_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter$3', 965), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter$4_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter$4', 966), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter$5_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter$5', 967), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter$6_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter$6', 968), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter$7_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter$7', 969), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter$8_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter$8', 970), Lcom_lemania_sis_client_event_MasterAgendaLoadEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'MasterAgendaLoadEvent', 872), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenterMyProxyImpl$1', 972), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenterMyProxyImpl$1$1', 973), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView', 975), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView$1_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView$1', 976), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView$2_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView$2', 977), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView$3_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView$3', 978), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView$4_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView$4', 979), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView$5_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView$5', 980), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView$6_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView$6', 981), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView$7_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView$7', 982), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView$8_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView$8', 983), Lcom_google_gwt_dom_client_Style$Float_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Float', 201, Ljava_lang_Enum_2_classLit, values_5), _3Lcom_google_gwt_dom_client_Style$Float_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Float;', 2183, Lcom_google_gwt_dom_client_Style$Float_2_classLit), Lcom_google_gwt_dom_client_Style$Float$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Float$1', 202, Lcom_google_gwt_dom_client_Style$Float_2_classLit, null), Lcom_google_gwt_dom_client_Style$Float$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Float$2', 203, Lcom_google_gwt_dom_client_Style$Float_2_classLit, null), Lcom_google_gwt_dom_client_Style$Float$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Float$3', 204, Lcom_google_gwt_dom_client_Style$Float_2_classLit, null), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView_BinderImpl', 984), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView_BinderImpl$Widgets', 985), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView_BinderImpl$Widgets$1', 986), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView_BinderImpl$Widgets$2', 987), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView_BinderImpl$Widgets$3', 988), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView_BinderImpl$Widgets$4', 989), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView_BinderImpl$Widgets$5', 990), Lcom_google_gwt_user_client_ui_HTMLTable$Cell_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$Cell', 551), Lcom_lemania_sis_shared_period_PeriodRequestFactory_1PeriodRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.period.', 'PeriodRequestFactory_PeriodRequestContextImpl$5X', 1905), Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemRequestFactory_1MasterAgendaItemRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.masteragendaitem.', 'MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$1X', 1883), Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemRequestFactory_1MasterAgendaItemRequestContextImpl$6X_2_classLit = createForClass('com.lemania.sis.shared.masteragendaitem.', 'MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$6X', 1886), Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemRequestFactory_1MasterAgendaItemRequestContextImpl$7X_2_classLit = createForClass('com.lemania.sis.shared.masteragendaitem.', 'MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$7X', 1887);
$entry(onLoad)(28);
