function $onClassChanged_1(this$static, classId){
  var rf, rc, rf_0, rc_0;
  if (!classId.length)
    return;
  rf = new ProfileRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileRequestFactory_ProfileRequestContextImpl_0(rf);
  $fire($listAllActiveByClass_0(rc, classId), new StudentAgendaPresenter$2_0(this$static));
  rf_0 = new PeriodRequestFactoryImpl_0;
  $initialize_0(rf_0, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc_0 = new PeriodRequestFactory_PeriodRequestContextImpl_0(rf_0);
  $fire($listAllByClass(rc_0, classId), new StudentAgendaPresenter$3_0(this$static));
}

function $onProfileChanged_0(this$static, classId, profileId){
  var rc, rf, x;
  if (!profileId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' : Profil');
    return;
  }
  rf = new BulletinRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinRequestFactory_BulletinRequestContextImpl_0(rf);
  $fire((x = new BulletinRequestFactory_BulletinRequestContextImpl$7X_0(rc, classId, profileId) , $addInvocation(rc.state.dialect, x) , x), new StudentAgendaPresenter$4_0(this$static));
}

function $onStudentChange(this$static, classId, profileId, bulletinId){
  var rc, rf, x;
  rf = new MasterAgendaItemRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl_0(rf);
  $fire((x = new MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$4X_0(rc, classId, profileId, bulletinId) , $addInvocation(rc.state.dialect, x) , x), new StudentAgendaPresenter$5_0(this$static));
}

function StudentAgendaPresenter_0(eventBus, view, proxy){
  $clinit_StudentAgendaPresenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$StudentAgendaPresenter$MyView).setUiHandlers(this);
}

defineSeed(1062, 798, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$StudentAgendaUiHandlers]), StudentAgendaPresenter_0);
_.onBind = function onBind_8(){
}
;
_.onReset = function onReset_7(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('studentagenda'), null);
  $initializeUI_1(dynamicCast(this.view, Q$StudentAgendaPresenter$MyView));
  rf = new ClasseRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAllActive_0(rc), new StudentAgendaPresenter$1_0(this));
}
;
function $onSuccess_28(this$static, response){
  $setClassList_1(dynamicCast(this$static.this$0.view, Q$StudentAgendaPresenter$MyView), response);
}

function StudentAgendaPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1063, 729, makeCastMap([Q$Receiver]), StudentAgendaPresenter$1_0);
_.onFailure_0 = function onFailure_35(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_35(response){
  $onSuccess_28(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_29(this$static, response){
  $setProfileListData_1(dynamicCast(this$static.this$0.view, Q$StudentAgendaPresenter$MyView), response);
}

function StudentAgendaPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1064, 729, makeCastMap([Q$Receiver]), StudentAgendaPresenter$2_0);
_.onFailure_0 = function onFailure_36(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_36(response){
  $onSuccess_29(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_30(this$static, response){
  $initializeUI_2(dynamicCast(this$static.this$0.view, Q$StudentAgendaPresenter$MyView), response);
}

function StudentAgendaPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1065, 729, makeCastMap([Q$Receiver]), StudentAgendaPresenter$3_0);
_.onFailure_0 = function onFailure_37(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_37(response){
  $onSuccess_30(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_31(this$static, response){
  $setStudentListData(dynamicCast(this$static.this$0.view, Q$StudentAgendaPresenter$MyView), response);
}

function StudentAgendaPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1066, 729, makeCastMap([Q$Receiver]), StudentAgendaPresenter$4_0);
_.onFailure_0 = function onFailure_38(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_38(response){
  $onSuccess_31(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_32(this$static, response){
  $showMasterAgendaItemData_1(dynamicCast(this$static.this$0.view, Q$StudentAgendaPresenter$MyView), response);
}

function StudentAgendaPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1067, 729, makeCastMap([Q$Receiver]), StudentAgendaPresenter$5_0);
_.onFailure_0 = function onFailure_39(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_39(response){
  $onSuccess_32(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $clearTable_0(this$static){
  var i, j, k, vp;
  for (i = 1; i < this$static.tblAgenda.bodyElem.rows.length; ++i) {
    for (k = 1; k < $getCellCount(this$static.tblAgenda, 0); ++k) {
      vp = dynamicCast($getWidget(this$static.tblAgenda, i, k), Q$VerticalPanel);
      if (!vp)
        continue;
      for (j = 1; j < vp.children.size_0; ++j)
        $removeFromParent_0(dynamicCast($get_4(vp.children, j), Q$AgendaVerticalPanel));
    }
  }
}

function $drawTable_1(this$static, periods){
  var i, j, vp;
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
      $add_12(vp, new Label_2('+'));
      $get_4(vp.children, 0).getStyleElement()['className'] = 'hiddenText';
      $setWidget_3(this$static.tblAgenda, i, j, vp);
      $addDomHandler(vp, new StudentAgendaView$1_0(vp), ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_7));
      $addDomHandler(vp, new StudentAgendaView$2_0(vp), ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_6));
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
  $styleTable_1(this$static);
}

function $getCellIndexById_1(this$static, jourCode){
  var i;
  for (i = 0; i < $getCellCount(this$static.tblAgenda, 0); ++i) {
    if ($equals_6($getText(this$static.tblAgenda, this$static.tblAgenda.bodyElem.rows.length - 1, i), jourCode))
      return i;
  }
  return -1;
}

function $getRowIndexById_1(this$static, periodId){
  var i;
  for (i = 0; i < this$static.tblAgenda.bodyElem.rows.length; ++i) {
    if ($equals_6($getText(this$static.tblAgenda, i, $getCellCount(this$static.tblAgenda, i) - 1), periodId))
      return i;
  }
  return -1;
}

function $initializeUI_1(this$static){
  $removeAllRows(this$static.tblAgenda);
  $selectClear(this$static.lstProfiles.element);
}

function $initializeUI_2(this$static, periods){
  $clear_5(this$static.periods);
  $addAll_1(this$static.periods, periods);
  $drawTable_1(this$static, periods);
}

function $onLstClassesChange_2(this$static){
  !!this$static.uiHandlers && $onClassChanged_1(dynamicCast(this$static.uiHandlers, Q$StudentAgendaUiHandlers), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $onLstProfilesChange_0(this$static){
  !!this$static.uiHandlers && $onProfileChanged_0(dynamicCast(this$static.uiHandlers, Q$StudentAgendaUiHandlers), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex), $getValue_2(this$static.lstProfiles, this$static.lstProfiles.element.selectedIndex));
}

function $onLstStudentsChange(this$static){
  !!this$static.uiHandlers && $onStudentChange(dynamicCast(this$static.uiHandlers, Q$StudentAgendaUiHandlers), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex), $getValue_2(this$static.lstProfiles, this$static.lstProfiles.element.selectedIndex), $getValue_2(this$static.lstStudents, this$static.lstStudents.element.selectedIndex));
}

function $setClassList_1(this$static, classes){
  var clazz, clazz$iterator;
  $selectClear(this$static.lstClasses.element);
  $insertItem_0(this$static.lstClasses, '-', '', -1);
  for (clazz$iterator = classes.iterator(); clazz$iterator.hasNext();) {
    clazz = dynamicCast(clazz$iterator.next_0(), Q$ClasseProxy);
    $insertItem_0(this$static.lstClasses, clazz.getClassName(), '' + toString_6(clazz.getId_0().value_0), -1);
  }
}

function $setProfileListData_1(this$static, profiles){
  var profile, profile$iterator;
  $selectClear(this$static.lstProfiles.element);
  $insertItem_0(this$static.lstProfiles, '-', '', -1);
  for (profile$iterator = profiles.iterator(); profile$iterator.hasNext();) {
    profile = dynamicCast(profile$iterator.next_0(), Q$ProfileProxy);
    $insertItem_0(this$static.lstProfiles, profile.getProfileName(), '' + toString_6(profile.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstProfiles, 0);
}

function $setStudentListData(this$static, students){
  var bulletin, bulletin$iterator;
  $selectClear(this$static.lstStudents.element);
  $insertItem(this$static.lstStudents, '-');
  for (bulletin$iterator = students.iterator(); bulletin$iterator.hasNext();) {
    bulletin = dynamicCast(bulletin$iterator.next_0(), Q$BulletinProxy);
    $insertItem_0(this$static.lstStudents, bulletin.getStudentName(), '' + toString_6(bulletin.getId_0().value_0), -1);
  }
}

function $showMasterAgendaItem_1(this$static, mai, rowIndex, cellIndex){
  var avp, duration, i, lblNormal, lblSubject;
  duration = mai.getDuration();
  for (i = 0; i < duration; ++i) {
    avp = new AgendaVerticalPanel_0;
    avp.element['className'] = 'agendaSelected';
    avp.element.style['backgroundColor'] = $get_10(($clinit_ClassPeriod() , colors), this$static.colorIndex);
    $addDomHandler(avp, new StudentAgendaView$3_0(avp), ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_7));
    $addDomHandler(avp, new StudentAgendaView$4_0(avp), ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_6));
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

function $showMasterAgendaItemData_1(this$static, mais){
  var cellIndex, mai, mai$iterator, rowIndex;
  $clearTable_0(this$static);
  for (mai$iterator = mais.iterator(); mai$iterator.hasNext();) {
    mai = dynamicCast(mai$iterator.next_0(), Q$MasterAgendaItemProxy);
    rowIndex = $getRowIndexById_1(this$static, mai.getPeriodId());
    cellIndex = $getCellIndexById_1(this$static, mai.getJourCode());
    rowIndex != -1 && cellIndex != -1 && $showMasterAgendaItem_1(this$static, mai, rowIndex, cellIndex);
  }
}

function $styleTable_1(this$static){
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

function StudentAgendaView_0(){
  this.periods = new ArrayList_0;
  $initWidget_0(this, $build_f_HTMLPanel1_5(new StudentAgendaView_BinderImpl$Widgets_0(this)));
}

defineSeed(1070, 803, makeCastMap([Q$IsWidget, Q$StudentAgendaPresenter$MyView]), StudentAgendaView_0);
_.colorIndex = 0;
_.lstClasses = null;
_.lstProfiles = null;
_.lstStudents = null;
_.tblAgenda = null;
function StudentAgendaView$1_0(val$vp){
  this.val$vp = val$vp;
}

defineSeed(1071, 1, makeCastMap([Q$MouseOverHandler, Q$EventHandler]), StudentAgendaView$1_0);
_.onMouseOver = function onMouseOver_4(arg0){
  this.val$vp.element.style['backgroundColor'] = '#f2f2f2';
}
;
_.val$vp = null;
function StudentAgendaView$2_0(val$vp){
  this.val$vp = val$vp;
}

defineSeed(1072, 1, makeCastMap([Q$MouseOutHandler, Q$EventHandler]), StudentAgendaView$2_0);
_.onMouseOut = function onMouseOut_4(arg0){
  this.val$vp.element.style['backgroundColor'] = 'white';
}
;
_.val$vp = null;
function StudentAgendaView$3_0(val$avp){
  this.val$avp = val$avp;
}

defineSeed(1073, 1, makeCastMap([Q$MouseOverHandler, Q$EventHandler]), StudentAgendaView$3_0);
_.onMouseOver = function onMouseOver_5(arg0){
  this.val$avp.element.style['borderStyle'] = ($clinit_Style$BorderStyle() , 'solid');
  this.val$avp.element.style['borderWidth'] = 1 + ($clinit_Style$Unit() , 'px');
  this.val$avp.element.style['borderColor'] = 'lightskyblue';
  this.val$avp.element.style['cursor'] = ($clinit_Style$Cursor() , 'pointer');
}
;
_.val$avp = null;
function StudentAgendaView$4_0(val$avp){
  this.val$avp = val$avp;
}

defineSeed(1074, 1, makeCastMap([Q$MouseOutHandler, Q$EventHandler]), StudentAgendaView$4_0);
_.onMouseOut = function onMouseOut_5(arg0){
  this.val$avp.element.style['borderColor'] = 'white';
  this.val$avp.element.style['cursor'] = ($clinit_Style$Cursor() , 'auto');
}
;
_.val$avp = null;
function StudentAgendaView_BinderImpl_0(){
}

defineSeed(1075, 1, {}, StudentAgendaView_BinderImpl_0);
function $build_f_HTMLPanel1_5(this$static){
  var attachRecord31, f_HTMLPanel1, f_Label2, pnlPrincipal, f_VerticalPanel3, f_HorizontalPanel4, f_Label5, lstClasses, f_Label6, lstProfiles, f_Label7, lstStudents, tblAgenda;
  f_HTMLPanel1 = new HTMLPanel_0($html1_4(this$static.domId0, this$static.domId1).html);
  attachRecord31 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  $get_1(this$static.domId1Element);
  attachRecord31.origParent?$insertBefore(attachRecord31.origParent, attachRecord31.element, attachRecord31.origSibling):orphan(attachRecord31.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label2.directionalTextHelper, 'Les horaires des \xE9l\xE8ves', false) , $updateHorizontalAlignment(f_Label2) , f_Label2), $get_1(this$static.domId0Element));
  $addAndReplaceElement(f_HTMLPanel1, (pnlPrincipal = new VerticalPanel_0 , $setHorizontalAlignment_1(pnlPrincipal, ALIGN_CENTER) , $add_12(pnlPrincipal, (f_VerticalPanel3 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel3, ALIGN_CENTER) , $add_12(f_VerticalPanel3, (f_HorizontalPanel4 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel4, ALIGN_LEFT) , $add_10(f_HorizontalPanel4, (f_Label5 = new Label_0 , $setHorizontalAlignment(f_Label5, ALIGN_RIGHT) , $setTextOrHtml(f_Label5.directionalTextHelper, 'Classe :', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $add_10(f_HorizontalPanel4, (lstClasses = new ListBox_0 , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstClasses = lstClasses , lstClasses)) , $add_10(f_HorizontalPanel4, (f_Label6 = new Label_0 , $setHorizontalAlignment(f_Label6, ALIGN_RIGHT) , $setTextOrHtml(f_Label6.directionalTextHelper, 'Profil :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_10(f_HorizontalPanel4, (lstProfiles = new ListBox_0 , $addDomHandler(lstProfiles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstProfiles = lstProfiles , lstProfiles)) , $add_10(f_HorizontalPanel4, (f_Label7 = new Label_0 , $setHorizontalAlignment(f_Label7, ALIGN_RIGHT) , $setTextOrHtml(f_Label7.directionalTextHelper, 'El\xE8ve :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_10(f_HorizontalPanel4, (lstStudents = new ListBox_0 , $addDomHandler(lstStudents, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this$static.owner.lstStudents = lstStudents , lstStudents)) , f_HorizontalPanel4.element['className'] = 'toolbar' , f_HorizontalPanel4.element.style['width'] = '80%' , f_HorizontalPanel4.table['cellSpacing'] = 5 , f_HorizontalPanel4)) , $add_12(f_VerticalPanel3, (tblAgenda = new FlexTable_0 , tblAgenda.tableElem['border'] = '0' , tblAgenda.element.style['width'] = '100%' , this$static.owner.tblAgenda = tblAgenda , tblAgenda)) , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3.table['cellSpacing'] = 10 , f_VerticalPanel3)) , pnlPrincipal.element.style['width'] = '100%' , pnlPrincipal.table['cellSpacing'] = 5 , pnlPrincipal), $get_1(this$static.domId1Element));
  return f_HTMLPanel1;
}

function StudentAgendaView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new StudentAgendaView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new StudentAgendaView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new StudentAgendaView_BinderImpl$Widgets$3_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
  this.domId1Element = new LazyDomElement_0(this.domId1);
}

defineSeed(1076, 1, {}, StudentAgendaView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.domId1 = null;
_.domId1Element = null;
_.owner = null;
function StudentAgendaView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1077, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), StudentAgendaView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_8(event_0){
  $onLstClassesChange_2(this.this$1.owner);
}
;
_.this$1 = null;
function StudentAgendaView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1078, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), StudentAgendaView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_9(event_0){
  $onLstProfilesChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function StudentAgendaView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1079, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), StudentAgendaView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_10(event_0){
  $onLstStudentsChange(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_4(arg0, arg1){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span> <span id='");
  $append_10(sb, htmlEscape(arg1));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$form$studentagenda$StudentAgendaPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$studentagenda$StudentAgendaPresenter$_annotation$$none$$) {
    result = new StudentAgendaPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$form$studentagenda$StudentAgendaView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$sis$client$form$studentagenda$StudentAgendaPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$form$studentagenda$StudentAgendaPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$studentagenda$StudentAgendaPresenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$sis$client$form$studentagenda$StudentAgendaView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$studentagenda$StudentAgendaView$_annotation$$none$$) {
    result = new StudentAgendaView_0(new StudentAgendaView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$form$studentagenda$StudentAgendaView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$studentagenda$StudentAgendaView$_annotation$$none$$;
}

defineSeed(1083, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_40(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$form$studentagenda$StudentAgendaPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function BulletinRequestFactory_BulletinRequestContextImpl$7X_0(this$0, val$classId, val$profileId){
  this.val$classId = val$classId;
  this.val$profileId = val$profileId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1858, 733, makeCastMap([Q$AbstractRequest]), BulletinRequestFactory_BulletinRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_6(){
  return new RequestData_0('pcY8jgTLcQhQs$7bFjlzc7cIv$0=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$classId, this.val$profileId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_bulletin_BulletinProxy_2_classLit);
}
;
_.val$classId = null;
_.val$profileId = null;
function MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$4X_0(this$0, val$classId, val$profileId, val$bulletinId){
  this.val$classId = val$classId;
  this.val$profileId = val$profileId;
  this.val$bulletinId = val$bulletinId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1877, 733, makeCastMap([Q$AbstractRequest]), MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_13(){
  return new RequestData_0('1_3lsl80St_dx$REu_E4u706EK8=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$classId, this.val$profileId, this.val$bulletinId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemProxy_2_classLit);
}
;
_.val$bulletinId = null;
_.val$classId = null;
_.val$profileId = null;
var Lcom_lemania_sis_client_form_studentagenda_StudentAgendaPresenter_2_classLit = createForClass('com.lemania.sis.client.form.studentagenda.', 'StudentAgendaPresenter', 1062), Lcom_lemania_sis_client_form_studentagenda_StudentAgendaPresenter$1_2_classLit = createForClass('com.lemania.sis.client.form.studentagenda.', 'StudentAgendaPresenter$1', 1063), Lcom_lemania_sis_client_form_studentagenda_StudentAgendaPresenter$2_2_classLit = createForClass('com.lemania.sis.client.form.studentagenda.', 'StudentAgendaPresenter$2', 1064), Lcom_lemania_sis_client_form_studentagenda_StudentAgendaPresenter$3_2_classLit = createForClass('com.lemania.sis.client.form.studentagenda.', 'StudentAgendaPresenter$3', 1065), Lcom_lemania_sis_client_form_studentagenda_StudentAgendaPresenter$4_2_classLit = createForClass('com.lemania.sis.client.form.studentagenda.', 'StudentAgendaPresenter$4', 1066), Lcom_lemania_sis_client_form_studentagenda_StudentAgendaPresenter$5_2_classLit = createForClass('com.lemania.sis.client.form.studentagenda.', 'StudentAgendaPresenter$5', 1067), Lcom_lemania_sis_client_form_studentagenda_StudentAgendaView_2_classLit = createForClass('com.lemania.sis.client.form.studentagenda.', 'StudentAgendaView', 1070), Lcom_lemania_sis_client_form_studentagenda_StudentAgendaView$1_2_classLit = createForClass('com.lemania.sis.client.form.studentagenda.', 'StudentAgendaView$1', 1071), Lcom_lemania_sis_client_form_studentagenda_StudentAgendaView$2_2_classLit = createForClass('com.lemania.sis.client.form.studentagenda.', 'StudentAgendaView$2', 1072), Lcom_lemania_sis_client_form_studentagenda_StudentAgendaView$3_2_classLit = createForClass('com.lemania.sis.client.form.studentagenda.', 'StudentAgendaView$3', 1073), Lcom_lemania_sis_client_form_studentagenda_StudentAgendaView$4_2_classLit = createForClass('com.lemania.sis.client.form.studentagenda.', 'StudentAgendaView$4', 1074), Lcom_lemania_sis_client_form_studentagenda_StudentAgendaView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.form.studentagenda.', 'StudentAgendaView_BinderImpl', 1075), Lcom_lemania_sis_client_form_studentagenda_StudentAgendaView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.form.studentagenda.', 'StudentAgendaView_BinderImpl$Widgets', 1076), Lcom_lemania_sis_client_form_studentagenda_StudentAgendaView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.form.studentagenda.', 'StudentAgendaView_BinderImpl$Widgets$1', 1077), Lcom_lemania_sis_client_form_studentagenda_StudentAgendaView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.form.studentagenda.', 'StudentAgendaView_BinderImpl$Widgets$2', 1078), Lcom_lemania_sis_client_form_studentagenda_StudentAgendaView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.form.studentagenda.', 'StudentAgendaView_BinderImpl$Widgets$3', 1079), Lcom_lemania_sis_shared_bulletin_BulletinRequestFactory_1BulletinRequestContextImpl$7X_2_classLit = createForClass('com.lemania.sis.shared.bulletin.', 'BulletinRequestFactory_BulletinRequestContextImpl$7X', 1858), Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemRequestFactory_1MasterAgendaItemRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.masteragendaitem.', 'MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$4X', 1877);
$entry(onLoad)(32);
