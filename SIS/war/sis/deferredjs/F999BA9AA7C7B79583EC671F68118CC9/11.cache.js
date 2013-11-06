function $onBulletinChange_0(this$static, bulletinId){
  var rc, rf;
  rf = new BulletinSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl_0(rf);
  $fire($listAll_2(rc, bulletinId), new FrmBulletinViewSummaryPresenter$3_0(this$static));
}

function $onClassChange_1(this$static, classId){
  var rc, rf;
  rf = new BulletinRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinRequestFactory_BulletinRequestContextImpl_0(rf);
  $fire($listAllActiveByClass(rc, classId), new FrmBulletinViewSummaryPresenter$2_0(this$static));
}

function $saveBulletinRemarques(this$static, bulletinId, remarqueDirection){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new BulletinRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinRequestFactory_BulletinRequestContextImpl_0(rf);
  $fire((x = new BulletinRequestFactory_BulletinRequestContextImpl$12X_0(rc, bulletinId, remarqueDirection) , $addInvocation(rc.state.dialect, x) , x), new FrmBulletinViewSummaryPresenter$4_0(this$static));
}

function FrmBulletinViewSummaryPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(866, 698, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$FrmBulletinViewSummaryPresenter, Q$FrmBulletinViewSummaryUiHandler]), FrmBulletinViewSummaryPresenter_0);
_.onBind = function onBind_11(){
  dynamicCast(this.view, Q$FrmBulletinViewSummaryPresenter$MyView).setUiHandlers(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_21(event_0){
  this.currentUser = event_0.currentUser;
  $drawDate(dynamicCast(this.view, Q$FrmBulletinViewSummaryPresenter$MyView), this.currentUser.currentDay + '.' + this.currentUser.currentMonth + '.' + this.currentUser.currentYear);
}
;
_.onReset = function onReset_10(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('bulletin'), null);
  $resetForm_4(dynamicCast(this.view, Q$FrmBulletinViewSummaryPresenter$MyView));
  rf = new ClasseRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAllActive(rc), new FrmBulletinViewSummaryPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_10(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_43(this$static, response){
  $setClasseList_2(dynamicCast(this$static.this$0.view, Q$FrmBulletinViewSummaryPresenter$MyView), response);
}

function FrmBulletinViewSummaryPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(867, 637, makeCastMap([Q$Receiver]), FrmBulletinViewSummaryPresenter$1_0);
_.onFailure_0 = function onFailure_44(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_44(response){
  $onSuccess_43(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_44(this$static, response){
  $setStudentListData_0(dynamicCast(this$static.this$0.view, Q$FrmBulletinViewSummaryPresenter$MyView), response);
}

function FrmBulletinViewSummaryPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(868, 637, makeCastMap([Q$Receiver]), FrmBulletinViewSummaryPresenter$2_0);
_.onFailure_0 = function onFailure_45(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_45(response){
  $onSuccess_44(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_45(this$static, response){
  $drawBulletinSubjectList(dynamicCast(this$static.this$0.view, Q$FrmBulletinViewSummaryPresenter$MyView), response);
}

function FrmBulletinViewSummaryPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(869, 637, makeCastMap([Q$Receiver]), FrmBulletinViewSummaryPresenter$3_0);
_.onFailure_0 = function onFailure_46(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_46(response){
  $onSuccess_45(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_46(this$static, response){
  $saveRemarqueDirection(dynamicCast(this$static.this$0.view, Q$FrmBulletinViewSummaryPresenter$MyView), response);
}

function FrmBulletinViewSummaryPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(870, 637, makeCastMap([Q$Receiver]), FrmBulletinViewSummaryPresenter$4_0);
_.onFailure_0 = function onFailure_47(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_47(response){
  $onSuccess_46(this, dynamicCast(response, Q$BulletinProxy));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$FrmBulletinViewSummaryPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBulletinViewSummaryPresenter$_annotation$$none$$) {
    result = new FrmBulletinViewSummaryPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmBulletinViewSummaryView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmBulletinViewSummaryPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBulletinViewSummaryPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBulletinViewSummaryPresenter$_annotation$$none$$;
}

defineSeed(1043, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_116(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmBulletinViewSummaryPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $drawBacBulletin(this$static, subjects){
  var i, rowCount, rowStart;
  $removeAllRows(this$static.tblNotes);
  $setText_0(this$static.tblNotes, 0, 0, 'Groupe');
  $setText_0(this$static.tblNotes, 0, 1, 'Coef');
  $setText_0(this$static.tblNotes, 0, 2, 'T1');
  $setText_0(this$static.tblNotes, 0, 3, 'Bac Blanc/DS');
  $setText_0(this$static.tblNotes, 0, 4, 'T2');
  $setText_0(this$static.tblNotes, 0, 5, 'Bac Blanc/DS');
  $setText_0(this$static.tblNotes, 0, 6, 'T3');
  $setText_0(this$static.tblNotes, 0, 7, 'Bac Blanc/DS');
  $setText_0(this$static.tblNotes, 0, 8, 'Moyenne Annuelle');
  $setText_0(this$static.tblNotes, 0, 9, "Remarques relatives \xE0 la p\xE9riode d'\xE9valuation");
  $setStyleName_1(this$static.tblNotes.rowFormatter, 0);
  $setVisible_0(this$static.lblConditionMatu, false);
  $setVisible_0(this$static.lblConditionES, false);
  $setVisible_0(this$static.lblConditionBac, true);
  rowStart = valueOf_1(1);
  rowCount = valueOf_1(0);
  for (i = rowStart.value_0; i < subjects.size_1() + rowStart.value_0; ++i) {
    $setText_0(this$static.tblNotes, i, 0, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getSubjectName());
    $setText_0(this$static.tblNotes, i, 1, ($clinit_Double() , '' + dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getSubjectCoef().value_0));
    $setText_0(this$static.tblNotes, i, 2, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getT1());
    $setText_0(this$static.tblNotes, i, 3, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getExamT1().toLowerCase());
    $setText_0(this$static.tblNotes, i, 4, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getT2());
    $setText_0(this$static.tblNotes, i, 5, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getExamT2());
    $setText_0(this$static.tblNotes, i, 6, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getT3());
    $setText_0(this$static.tblNotes, i, 7, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getExamT3());
    $setText_0(this$static.tblNotes, i, 8, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getAn());
    $setText_0(this$static.tblNotes, i, 9, $equals_5(dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getRemarqueT3(), '')?$equals_5(dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getRemarqueT2(), '')?dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getRemarqueT1():dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getRemarqueT2():dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getRemarqueT3());
    rowCount = valueOf_1(rowCount.value_0 + 1);
  }
  rowCount = valueOf_1(rowCount.value_0 + 1);
  $setText_0(this$static.tblNotes, rowCount.value_0, 0, 'Moyenne :');
  $setText_0(this$static.tblNotes, rowCount.value_0, 1, '');
  $setText_0(this$static.tblNotes, rowCount.value_0, 2, '');
  $setText_0(this$static.tblNotes, rowCount.value_0, 3, '');
  $setText_0(this$static.tblNotes, rowCount.value_0, 4, '');
  $setText_0(this$static.tblNotes, rowCount.value_0, 5, '');
  $setText_0(this$static.tblNotes, rowCount.value_0, 6, '');
  $setText_0(this$static.tblNotes, rowCount.value_0, 7, '');
  $setText_0(this$static.tblNotes, rowCount.value_0, 8, '');
  $setText_0(this$static.tblNotes, rowCount.value_0, 9, '');
  $setText(this$static.txtDirectionRemarque, dynamicCast($get_8(this$static.bulletins, this$static.lstBulletins.element.selectedIndex - 1), Q$BulletinProxy).getRemarqueDirection());
  $styleBacTable(this$static);
}

function $drawBulletinSubjectList(this$static, subjects){
  dynamicCast(this$static.classes.get_0(this$static.lstClasses.element.selectedIndex - 1), Q$ClasseProxy).getProgrammeName().toLowerCase().indexOf('matu') != -1 && $drawMatuBulletin(this$static, subjects);
  dynamicCast(this$static.classes.get_0(this$static.lstClasses.element.selectedIndex - 1), Q$ClasseProxy).getProgrammeName().toLowerCase().indexOf('bacc') != -1 && $drawBacBulletin(this$static, subjects);
  dynamicCast(this$static.classes.get_0(this$static.lstClasses.element.selectedIndex - 1), Q$ClasseProxy).getProgrammeName().toLowerCase().indexOf('second') != -1 && $drawESBulletin(this$static, subjects);
}

function $drawDate(this$static, date){
  $setText_1(this$static.lblDate, date);
}

function $drawESBulletin(this$static, subjects){
  var i, rowCount, rowStart;
  $removeAllRows(this$static.tblNotes);
  $setText_0(this$static.tblNotes, 0, 0, 'Groupe');
  $setText_0(this$static.tblNotes, 0, 1, 'Coef');
  $setText_0(this$static.tblNotes, 0, 2, 'T1');
  $setText_0(this$static.tblNotes, 0, 3, 'T2');
  $setText_0(this$static.tblNotes, 0, 4, 'T3');
  $setText_0(this$static.tblNotes, 0, 5, 'Moyenne Annuelle');
  $setStyleName_1(this$static.tblNotes.rowFormatter, 0);
  $setVisible_0(this$static.lblConditionMatu, false);
  $setVisible_0(this$static.lblConditionES, true);
  $setVisible_0(this$static.lblConditionBac, false);
  rowStart = valueOf_1(1);
  rowCount = valueOf_1(0);
  for (i = rowStart.value_0; i < subjects.size_1() + rowStart.value_0; ++i) {
    $setText_0(this$static.tblNotes, i, 0, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getSubjectName());
    $setText_0(this$static.tblNotes, i, 1, ($clinit_Double() , '' + dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getSubjectCoef().value_0));
    $setText_0(this$static.tblNotes, i, 2, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getT1());
    $setText_0(this$static.tblNotes, i, 3, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getT2());
    $setText_0(this$static.tblNotes, i, 4, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getT3());
    $setText_0(this$static.tblNotes, i, 5, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getAn());
    rowCount = valueOf_1(rowCount.value_0 + 1);
  }
  rowCount = valueOf_1(rowCount.value_0 + 1);
  $setText_0(this$static.tblNotes, rowCount.value_0, 0, 'Moyenne :');
  $setText_0(this$static.tblNotes, rowCount.value_0, 1, '');
  $setText_0(this$static.tblNotes, rowCount.value_0, 2, '');
  $setText_0(this$static.tblNotes, rowCount.value_0, 3, '');
  $setText_0(this$static.tblNotes, rowCount.value_0, 4, '');
  $setText_0(this$static.tblNotes, rowCount.value_0, 5, '');
  $setText(this$static.txtDirectionRemarque, dynamicCast($get_8(this$static.bulletins, this$static.lstBulletins.element.selectedIndex - 1), Q$BulletinProxy).getRemarqueDirection());
  $styleESTable(this$static);
}

function $drawMatuBulletin(this$static, subjects){
  var i, rowCount, rowStart, totalCoef, totalMoyenne;
  $removeAllRows(this$static.tblNotes);
  $setText_0(this$static.tblNotes, 0, 0, 'Groupe');
  $setText_0(this$static.tblNotes, 0, 1, 'Coef');
  $setText_0(this$static.tblNotes, 0, 2, 'T1');
  $setText_0(this$static.tblNotes, 0, 3, 'Exa. T1');
  $setText_0(this$static.tblNotes, 0, 4, 'T2');
  $setText_0(this$static.tblNotes, 0, 5, 'Exa. Semes.');
  $setText_0(this$static.tblNotes, 0, 6, 'Moyenne Semes.');
  $setText_0(this$static.tblNotes, 0, 7, "Remarques relatives \xE0 la p\xE9riode d'\xE9valuation");
  $setVisible_0(this$static.lblConditionMatu, false);
  $setVisible_0(this$static.lblConditionES, true);
  $setVisible_0(this$static.lblConditionBac, false);
  rowStart = valueOf_1(1);
  rowCount = valueOf_1(0);
  totalMoyenne = ($clinit_Double() , new Double_0(0));
  totalCoef = new Double_0(0);
  for (i = rowStart.value_0; i < subjects.size_1() + rowStart.value_0; ++i) {
    $setText_0(this$static.tblNotes, i, 0, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getSubjectName());
    $setText_0(this$static.tblNotes, i, 1, '' + dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getSubjectCoef().value_0);
    $setText_0(this$static.tblNotes, i, 2, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getT1());
    $setText_0(this$static.tblNotes, i, 3, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getExamT1().toLowerCase());
    $setText_0(this$static.tblNotes, i, 4, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getT2());
    $setText_0(this$static.tblNotes, i, 5, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getExamT2());
    $setText_0(this$static.tblNotes, i, 6, dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getAn());
    $setText_0(this$static.tblNotes, i, 7, $equals_5(dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getRemarqueT3(), '')?$equals_5(dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getRemarqueT2(), '')?dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getRemarqueT1():dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getRemarqueT2():dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getRemarqueT3());
    if (dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getAn().length) {
      totalMoyenne = new Double_0(totalMoyenne.value_0 + __parseAndValidateDouble(dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getAn()) * dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getSubjectCoef().value_0);
      totalCoef = new Double_0(totalCoef.value_0 + dynamicCast(subjects.get_0(rowCount.value_0), Q$BulletinSubjectProxy).getSubjectCoef().value_0);
    }
    rowCount = valueOf_1(rowCount.value_0 + 1);
  }
  rowCount = valueOf_1(rowCount.value_0 + 1);
  $setText_0(this$static.tblNotes, rowCount.value_0, 0, 'Moyenne :');
  $setText_0(this$static.tblNotes, rowCount.value_0, 1, '' + totalCoef.value_0);
  $setText_0(this$static.tblNotes, rowCount.value_0, 2, '');
  $setText_0(this$static.tblNotes, rowCount.value_0, 3, '');
  $setText_0(this$static.tblNotes, rowCount.value_0, 4, '');
  $setText_0(this$static.tblNotes, rowCount.value_0, 5, '');
  $setText_0(this$static.tblNotes, rowCount.value_0, 6, '' + toDouble(fromDouble(round0(totalMoyenne.value_0 / totalCoef.value_0 * 10))) / 10);
  $setText_0(this$static.tblNotes, rowCount.value_0, 7, '');
  for (i = 0; i < $getCellCount(this$static.tblNotes, rowCount.value_0); ++i)
    $setStyleName_0(this$static.tblNotes.cellFormatter, rowCount.value_0, i, 'subjectLine');
  $setText(this$static.txtDirectionRemarque, dynamicCast($get_8(this$static.bulletins, this$static.lstBulletins.element.selectedIndex - 1), Q$BulletinProxy).getRemarqueDirection());
  $styleTableMatu_0(this$static);
}

function $onCmdPrintClick(this$static){
  var popup;
  $setVisible_0(this$static.pnlBulletin, true);
  if ($wnd.navigator.userAgent.toLowerCase().indexOf('chrome') != -1)
    $setHeight(this$static.lblSpace, '' + (($clinit_NotificationTypes() , bulletinPageHeightChrome).value_0 - $getPropertyInt(this$static.tblNotes.element, 'offsetHeight')) + 'px');
  else {
    $setHeight(this$static.pnlBulletinNotes, '' + ($clinit_NotificationTypes() , bulletinPageHeight).value_0 + 'px');
    $setHeight(this$static.lblSpace, bulletinPageHeight.value_0 - $getPropertyInt(this$static.tblNotes.element, 'offsetHeight') - bulletinDirectionRemarque.value_0 + 'px');
  }
  popup = new FrmBulletinViewSummaryView$1_0;
  $getParentElement($getFirstChildElement(popup.element))['className'] = 'bulletin';
  $add_4(popup, this$static.pnlBulletin);
  $addHandler_0(popup, new FrmBulletinViewSummaryView$2_0(this$static), TYPE_10?TYPE_10:(TYPE_10 = new GwtEvent$Type_0));
  $show(popup);
}

function $onCmdSaveRemarquesClick(this$static){
  !!this$static.uiHandlers && $saveBulletinRemarques(dynamicCast(this$static.uiHandlers, Q$FrmBulletinViewSummaryUiHandler), $getValue_1(this$static.lstBulletins, this$static.lstBulletins.element.selectedIndex), $getPropertyString(this$static.txtDirectionRemarque.element, 'value'));
}

function $onLstBulletinsChange_0(this$static){
  if (this$static.uiHandlers) {
    $setText_1(this$static.lblStudentName, dynamicCast($get_8(this$static.bulletins, this$static.lstBulletins.element.selectedIndex - 1), Q$BulletinProxy).getStudentName());
    $setText_1(this$static.lblClassName, $getItemText(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
    $setText_1(this$static.lblYear, 'Ann\xE9e scolaire : ' + dynamicCast($get_8(this$static.bulletins, this$static.lstBulletins.element.selectedIndex - 1), Q$BulletinProxy).getYear() + '-' + (__parseAndValidateInt(dynamicCast($get_8(this$static.bulletins, this$static.lstBulletins.element.selectedIndex - 1), Q$BulletinProxy).getYear()) + 1));
    $onBulletinChange_0(dynamicCast(this$static.uiHandlers, Q$FrmBulletinViewSummaryUiHandler), $getValue_1(this$static.lstBulletins, this$static.lstBulletins.element.selectedIndex));
  }
}

function $onLstClassesChange_2(this$static){
  !!this$static.uiHandlers && $onClassChange_1(dynamicCast(this$static.uiHandlers, Q$FrmBulletinViewSummaryUiHandler), $getValue_1(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $resetForm_4(this$static){
  $setSelectedIndex_0(this$static.lstClasses, 0);
  $selectClear(this$static.lstBulletins.element);
}

function $saveRemarqueDirection(this$static, bp){
  $set_5(this$static.bulletins, this$static.lstBulletins.element.selectedIndex - 1, bp);
}

function $setClasseList_2(this$static, classes){
  var clazz, clazz$iterator;
  this$static.classes = classes;
  $selectClear(this$static.lstClasses.element);
  $insertItem(this$static.lstClasses, '-', '', -1);
  for (clazz$iterator = classes.iterator(); clazz$iterator.hasNext();) {
    clazz = dynamicCast(clazz$iterator.next_0(), Q$ClasseProxy);
    $insertItem(this$static.lstClasses, clazz.getClassName(), '' + toString_6(clazz.getId_0().value_0), -1);
  }
}

function $setStudentListData_0(this$static, bulletins){
  var bulletin, bulletin$iterator;
  !!this$static.bulletins && $clear_5(this$static.bulletins);
  $addAll_1(this$static.bulletins, bulletins);
  $selectClear(this$static.lstBulletins.element);
  $insertItem(this$static.lstBulletins, '-', '', -1);
  for (bulletin$iterator = bulletins.iterator(); bulletin$iterator.hasNext();) {
    bulletin = dynamicCast(bulletin$iterator.next_0(), Q$BulletinProxy);
    $insertItem(this$static.lstBulletins, bulletin.getStudentName() + ' - ' + bulletin.getClasseName() + ' - ' + bulletin.getYear(), '' + toString_6(bulletin.getId_0().value_0), -1);
  }
}

function $styleBacTable(this$static){
  var i, j;
  this$static.tblNotes.tableElem['cellSpacing'] = 0;
  this$static.tblNotes.tableElem['cellPadding'] = 3;
  $setStyleName(this$static.tblNotes, 'subSection');
  for (i = 0; i < 10; ++i)
    for (j = 1; j < this$static.tblNotes.bodyElem.rows.length; ++j) {
      $isCellPresent(this$static.tblNotes, j, i) && $equals_5($getPropertyString($getElement(this$static.tblNotes.cellFormatter, j, i), 'className'), '') && $setStyleName_0(this$static.tblNotes.cellFormatter, j, i, 'brancheLine');
    }
}

function $styleESTable(this$static){
  var i, j;
  this$static.tblNotes.tableElem['cellSpacing'] = 0;
  this$static.tblNotes.tableElem['cellPadding'] = 3;
  $setStyleName(this$static.tblNotes, 'subSection');
  for (i = 0; i < 6; ++i)
    for (j = 1; j < this$static.tblNotes.bodyElem.rows.length; ++j) {
      $isCellPresent(this$static.tblNotes, j, i) && $equals_5($getPropertyString($getElement(this$static.tblNotes.cellFormatter, j, i), 'className'), '') && $setStyleName_0(this$static.tblNotes.cellFormatter, j, i, 'brancheLine');
    }
}

function $styleTableMatu_0(this$static){
  var i, j;
  this$static.tblNotes.tableElem['cellSpacing'] = 0;
  this$static.tblNotes.tableElem['cellPadding'] = 3;
  for (i = 1; i < $getCellCount(this$static.tblNotes, 0) - 1; ++i)
    $setStyleName_0(this$static.tblNotes.cellFormatter, 0, i, 'bulletinHeaderNote');
  $setStyleName_0(this$static.tblNotes.cellFormatter, 0, 0, 'bulletinHeader');
  $setStyleName_0(this$static.tblNotes.cellFormatter, 0, $getCellCount(this$static.tblNotes, 0) - 1, 'bulletinHeader');
  for (i = 0; i < $getCellCount(this$static.tblNotes, 0); ++i)
    for (j = 1; j < this$static.tblNotes.bodyElem.rows.length; ++j) {
      $isCellPresent(this$static.tblNotes, j, i) && $equals_5($getPropertyString($getElement(this$static.tblNotes.cellFormatter, j, i), 'className'), '') && $setStyleName_0(this$static.tblNotes.cellFormatter, j, i, 'bulletinBrancheLine');
    }
}

function FrmBulletinViewSummaryView_0(){
  this.bulletins = new ArrayList_0;
  this.widget = $build_f_HTMLPanel1_9(new FrmBulletinViewSummaryView_BinderImpl$Widgets_0(this));
}

defineSeed(1186, 703, makeCastMap([Q$IsWidget, Q$FrmBulletinViewSummaryPresenter$MyView]), FrmBulletinViewSummaryView_0);
_.asWidget = function asWidget_13(){
  return this.widget;
}
;
_.classes = null;
_.imgLogo = null;
_.lblClassName = null;
_.lblConditionBac = null;
_.lblConditionES = null;
_.lblConditionMatu = null;
_.lblDate = null;
_.lblSpace = null;
_.lblStudentName = null;
_.lblYear = null;
_.lstBulletins = null;
_.lstClasses = null;
_.pnlBulletin = null;
_.pnlBulletinNotes = null;
_.pnlMainBulletin = null;
_.tblNotes = null;
_.txtAddress1 = null;
_.txtAddress2 = null;
_.txtDirectionRemarque = null;
_.widget = null;
function FrmBulletinViewSummaryView$1_0(){
  PopupPanel_0.call(this, true);
}

defineSeed(1187, 498, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]), FrmBulletinViewSummaryView$1_0);
_.onPreviewNativeEvent = function onPreviewNativeEvent_2(event_0){
  event_0.isFirstHandler && (event_0.nativeEvent , false) && (event_0.isCanceled = true);
  $eventGetTypeInt(event_0.nativeEvent.type) == 128 && (event_0.nativeEvent.keyCode || 0) == 27 && $hide(this);
}
;
function FrmBulletinViewSummaryView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1188, 1, makeCastMap([Q$CloseHandler, Q$EventHandler]), FrmBulletinViewSummaryView$2_0);
_.onClose = function onClose_1(event_0){
  $add_11(this.this$0.pnlMainBulletin, this.this$0.pnlBulletin);
  $setHeight(this.this$0.pnlBulletinNotes, '100%');
  $setHeight(this.this$0.lblSpace, '1px');
}
;
_.this$0 = null;
function FrmBulletinViewSummaryView_BinderImpl_0(){
}

defineSeed(1189, 1, {}, FrmBulletinViewSummaryView_BinderImpl_0);
function $build_f_HTMLPanel1_9(this$static){
  var attachRecord10, f_HTMLPanel1, pnlMain, f_Label2, f_HorizontalPanel3, pnlAdmin, f_HorizontalPanel5, cmdPrint, sb, f_Label7, f_VerticalPanel8, pnlMainBulletin, f_VerticalPanel15, f_HorizontalPanel16, cmdSaveRemarques, f_Label17, f_Label4, lstClasses, f_Label6, lstBulletins, pnlBulletin, f_Grid9, imgLogo, f_Label10, f_VerticalPanel11, lblStudentName, lblClassName, lblYear, lblDate, lblConditionMatu, sb_0, lblConditionES, sb_1, lblConditionBac, sb_2, pnlBulletinNotes, tblNotes, f_HorizontalPanel12, f_Label13, txtDirectionRemarque, lblSpace, f_VerticalPanel14, txtAddress1, txtAddress2;
  f_HTMLPanel1 = new HTMLPanel_0($html5(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord10 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord10.origParent?$insertBefore(attachRecord10.origParent, attachRecord10.element, attachRecord10.origSibling):orphan(attachRecord10.element);
  $addAndReplaceElement(f_HTMLPanel1, (pnlMain = new VerticalPanel_0 , $setHorizontalAlignment_1(pnlMain, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(pnlMain, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label2, ALIGN_CENTER) , $setTextOrHtml(f_Label2.directionalTextHelper, 'IMPRIMER LES BULLETINS', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(pnlMain, (f_HorizontalPanel3 = new HorizontalPanel_0 , $setVerticalAlignment(f_HorizontalPanel3, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_9(f_HorizontalPanel3, (pnlAdmin = new HorizontalPanel_0 , $setHorizontalAlignment_0(pnlAdmin, ALIGN_RIGHT) , $setVerticalAlignment(pnlAdmin, ALIGN_MIDDLE) , $add_9(pnlAdmin, (f_Label4 = new Label_0 , $setTextOrHtml(f_Label4.directionalTextHelper, 'Classe :', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , $add_9(pnlAdmin, (lstClasses = new ListBox_0 , lstClasses.element.style['width'] = '300px' , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstClasses = lstClasses , lstClasses)) , pnlAdmin.element.style['width'] = '400px' , pnlAdmin.table['cellSpacing'] = 2 , pnlAdmin)) , $add_9(f_HorizontalPanel3, (f_HorizontalPanel5 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel5, ALIGN_RIGHT) , $setVerticalAlignment(f_HorizontalPanel5, ALIGN_MIDDLE) , $add_9(f_HorizontalPanel5, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Bulletin(s) :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_9(f_HorizontalPanel5, (lstBulletins = new ListBox_0 , lstBulletins.element.style['width'] = '300px' , $addDomHandler(lstBulletins, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstBulletins = lstBulletins , lstBulletins)) , f_HorizontalPanel5.element.style['width'] = '400px' , f_HorizontalPanel5.table['cellSpacing'] = 2 , f_HorizontalPanel5)) , $add_9(f_HorizontalPanel3, (cmdPrint = new Button_0 , $setHTML(cmdPrint, (sb = new StringBuilder_0 , $append_1(sb.data, 'Imprimer') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $setInnerText(cmdPrint.element, 'Afficher la version \xE0 imprimer') , $addDomHandler(cmdPrint, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdPrint)) , f_HorizontalPanel3.element['className'] = 'subSection' , f_HorizontalPanel3.table['cellSpacing'] = 5 , f_HorizontalPanel3)) , $add_11(pnlMain, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label7.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_11(pnlMain, (f_VerticalPanel8 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel8, ALIGN_CENTER) , $add_11(f_VerticalPanel8, (pnlMainBulletin = new VerticalPanel_0 , $setHorizontalAlignment_1(pnlMainBulletin, ALIGN_CENTER) , $add_11(pnlMainBulletin, (pnlBulletin = new VerticalPanel_0 , $setHorizontalAlignment_1(pnlBulletin, ALIGN_LEFT) , $setVerticalAlignment_0(pnlBulletin, ALIGN_TOP) , $add_11(pnlBulletin, (f_Grid9 = new Grid_0 , $resizeColumns(f_Grid9, 4) , $resizeRows(f_Grid9, 2) , $setWidget_1(f_Grid9, 0, 0, (imgLogo = new Image_1 , imgLogo.element.style['height'] = '' , imgLogo.element.style['width'] = '' , $setUrl(imgLogo, ($clinit_UriUtils() , new SafeUriString_0('images/logo_lemania.png'))) , this$static.owner.imgLogo = imgLogo , imgLogo)) , $setWidget_1(f_Grid9, 0, 1, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'bulletinTitle' , $setTextOrHtml(f_Label10.directionalTextHelper, 'BULLETIN DE NOTES', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid9, 1, 0, (f_VerticalPanel11 = new VerticalPanel_0 , $add_11(f_VerticalPanel11, (lblStudentName = new Label_0 , lblStudentName.element['className'] = 'fieldTitle' , $setTextOrHtml(lblStudentName.directionalTextHelper, '-', false) , $updateHorizontalAlignment(lblStudentName) , this$static.owner.lblStudentName = lblStudentName , lblStudentName)) , $add_11(f_VerticalPanel11, (lblClassName = new Label_0 , lblClassName.element['className'] = 'fieldTitle' , $setTextOrHtml(lblClassName.directionalTextHelper, '-', false) , $updateHorizontalAlignment(lblClassName) , this$static.owner.lblClassName = lblClassName , lblClassName)) , $add_11(f_VerticalPanel11, (lblYear = new Label_0 , lblYear.element['className'] = 'fieldTitle' , $setTextOrHtml(lblYear.directionalTextHelper, '-', false) , $updateHorizontalAlignment(lblYear) , this$static.owner.lblYear = lblYear , lblYear)) , $add_11(f_VerticalPanel11, (lblDate = new Label_0 , lblDate.element['className'] = 'fieldTitle' , $setTextOrHtml(lblDate.directionalTextHelper, '-', false) , $updateHorizontalAlignment(lblDate) , this$static.owner.lblDate = lblDate , lblDate)) , f_VerticalPanel11.table['cellSpacing'] = 5 , f_VerticalPanel11)) , $setWidget_1(f_Grid9, 1, 1, (lblConditionMatu = new HTML_0 , $setHTML_0(lblConditionMatu, (sb_0 = new StringBuilder_0 , $append_1(sb_0.data, 'Crit\xE8re de r\xE9ussite : <ul> <li>Meilleure note : 6<\/li> <li>Moyenne : 4<\/li> <\/ul> La note moyenne indiqu\xE9e est calcul\xE9e en fonction des crit\xE8res de r\xE9ussite du dipl\xF4me postul\xE9.') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))).html) , lblConditionMatu.element['className'] = 'bulletinNote' , setVisible(lblConditionMatu.element, false) , lblConditionMatu.element.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'normal') , lblConditionMatu.element.style['width'] = '' , this$static.owner.lblConditionMatu = lblConditionMatu , lblConditionMatu)) , $setWidget_1(f_Grid9, 1, 2, (lblConditionES = new HTML_0 , $setHTML_0(lblConditionES, (sb_1 = new StringBuilder_0 , $append_1(sb_1.data, 'Crit\xE8re de r\xE9ussite : <ul> <li>Meilleure note : 10<\/li> <li>Moyenne : 6<\/li> <\/ul> La note moyenne indiqu\xE9e est calcul\xE9e en fonction des crit\xE8res de r\xE9ussite du dipl\xF4me postul\xE9.') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_1.data))).html) , lblConditionES.element['className'] = 'bulletinNote' , setVisible(lblConditionES.element, false) , lblConditionES.element.style['whiteSpace'] = 'normal' , lblConditionES.element.style['width'] = '' , this$static.owner.lblConditionES = lblConditionES , lblConditionES)) , $setWidget_1(f_Grid9, 1, 3, (lblConditionBac = new HTML_0 , $setHTML_0(lblConditionBac, (sb_2 = new StringBuilder_0 , $append_1(sb_2.data, 'Crit\xE8re de r\xE9ussite : <ul> <li>Meilleure note : 20<\/li> <li>Moyenne : 10<\/li> <\/ul> La note moyenne indiqu\xE9e est calcul\xE9e en fonction des crit\xE8res de r\xE9ussite du dipl\xF4me postul\xE9.') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_2.data))).html) , lblConditionBac.element['className'] = 'bulletinNote' , setVisible(lblConditionBac.element, false) , lblConditionBac.element.style['whiteSpace'] = 'normal' , lblConditionBac.element.style['width'] = '' , this$static.owner.lblConditionBac = lblConditionBac , lblConditionBac)) , f_Grid9.element.style['width'] = '100%' , f_Grid9)) , $add_11(pnlBulletin, (pnlBulletinNotes = new VerticalPanel_0 , $add_11(pnlBulletinNotes, (tblNotes = new FlexTable_0 , tblNotes.element.style['width'] = '100%' , tblNotes.tableElem['cellPadding'] = 3 , this$static.owner.tblNotes = tblNotes , tblNotes)) , $add_11(pnlBulletinNotes, (f_HorizontalPanel12 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel12, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'Direction :', false) , $updateHorizontalAlignment(f_Label13) , f_Label13.element.style['width'] = '' , f_Label13)) , $add_9(f_HorizontalPanel12, (txtDirectionRemarque = new TextArea_1 , txtDirectionRemarque.element['className'] = 'sis-TextArea' , txtDirectionRemarque.element.rows = 5 , txtDirectionRemarque.element.cols = 90 , txtDirectionRemarque.element.style['width'] = '' , this$static.owner.txtDirectionRemarque = txtDirectionRemarque , txtDirectionRemarque)) , f_HorizontalPanel12.element.style['height'] = '100%' , f_HorizontalPanel12.element.style['width'] = '100%' , f_HorizontalPanel12.table['cellSpacing'] = 5 , f_HorizontalPanel12)) , $add_11(pnlBulletinNotes, (lblSpace = new Label_0 , setStylePrimaryName(lblSpace.element, 'hiddenText') , this$static.owner.lblSpace = lblSpace , lblSpace)) , pnlBulletinNotes.element['className'] = 'subSection' , pnlBulletinNotes.element.style['width'] = '100%' , this$static.owner.pnlBulletinNotes = pnlBulletinNotes , pnlBulletinNotes)) , $add_11(pnlBulletin, (f_VerticalPanel14 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel14, ALIGN_CENTER) , $add_11(f_VerticalPanel14, (txtAddress1 = new Label_0 , txtAddress1.element['className'] = 'bulletinFooter' , $setTextOrHtml(txtAddress1.directionalTextHelper, 'Chemin de Pr\xE9ville 3 - CP 550, 1003 Lausanne, Suisse - Tel.: +41 21 320 15 01 - Fax.: +41 312 67 00', false) , $updateHorizontalAlignment(txtAddress1) , this$static.owner.txtAddress1 = txtAddress1 , txtAddress1)) , $add_11(f_VerticalPanel14, (txtAddress2 = new Label_0 , txtAddress2.element['className'] = 'bulletinFooter' , $setTextOrHtml(txtAddress2.directionalTextHelper, 'Email: info@lemania.ch - Site internet : www.lemania.ch', false) , $updateHorizontalAlignment(txtAddress2) , this$static.owner.txtAddress2 = txtAddress2 , txtAddress2)) , f_VerticalPanel14.element.style['width'] = '100%' , f_VerticalPanel14.table['cellSpacing'] = 2 , f_VerticalPanel14)) , pnlBulletin.element['className'] = 'bulletin' , pnlBulletin.element.style['width'] = '' , pnlBulletin.table['cellSpacing'] = 5 , this$static.owner.pnlBulletin = pnlBulletin , pnlBulletin)) , pnlMainBulletin.element.style['width'] = '80%' , this$static.owner.pnlMainBulletin = pnlMainBulletin , pnlMainBulletin)) , $add_11(f_VerticalPanel8, (f_VerticalPanel15 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel15, ALIGN_RIGHT) , $add_11(f_VerticalPanel15, (f_HorizontalPanel16 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel16, (cmdSaveRemarques = new Button_0 , $setInnerText(cmdSaveRemarques.element, 'Enregistrer les remarques') , $addDomHandler(cmdSaveRemarques, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_0) , cmdSaveRemarques)) , f_HorizontalPanel16.element.style['width'] = '400px' , f_HorizontalPanel16)) , f_VerticalPanel15.element.style['width'] = '80%' , f_VerticalPanel15.table['cellSpacing'] = 5 , f_VerticalPanel15)) , f_VerticalPanel8.element.style['width'] = '100%' , f_VerticalPanel8)) , $add_11(pnlMain, (f_Label17 = new Label_0 , f_Label17.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label17.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , pnlMain.element.style['width'] = '100%' , pnlMain.table['cellSpacing'] = 2 , pnlMain), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmBulletinViewSummaryView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmBulletinViewSummaryView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new FrmBulletinViewSummaryView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new FrmBulletinViewSummaryView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new FrmBulletinViewSummaryView_BinderImpl$Widgets$4_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1190, 1, {}, FrmBulletinViewSummaryView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmBulletinViewSummaryView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1191, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmBulletinViewSummaryView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_9(event_0){
  $onLstClassesChange_2(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinViewSummaryView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1192, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmBulletinViewSummaryView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_10(event_0){
  $onLstBulletinsChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinViewSummaryView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1193, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmBulletinViewSummaryView_BinderImpl$Widgets$3_0);
_.onClick = function onClick_8(event_0){
  $onCmdPrintClick(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinViewSummaryView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1194, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmBulletinViewSummaryView_BinderImpl$Widgets$4_0);
_.onClick = function onClick_9(event_0){
  $onCmdSaveRemarquesClick(this.this$1.owner);
}
;
_.this$1 = null;
function $html5(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$view$FrmBulletinViewSummaryView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBulletinViewSummaryView$_annotation$$none$$) {
    result = new FrmBulletinViewSummaryView_0(new FrmBulletinViewSummaryView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBulletinViewSummaryView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBulletinViewSummaryView$_annotation$$none$$;
}

function BulletinRequestFactory_BulletinRequestContextImpl$12X_0(this$0, val$bulletinId, val$remarqueDirection){
  this.val$bulletinId = val$bulletinId;
  this.val$remarqueDirection = val$remarqueDirection;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1438, 641, makeCastMap([Q$AbstractRequest]), BulletinRequestFactory_BulletinRequestContextImpl$12X_0);
_.makeRequestData = function makeRequestData_12(){
  return new RequestData_0('JkNFEyZcIlZO6Hb6j7eb2hAhXdk=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$bulletinId, this.val$remarqueDirection]), this.propertyRefs, Lcom_lemania_sis_shared_BulletinProxy_2_classLit, null);
}
;
_.val$bulletinId = null;
_.val$remarqueDirection = null;
var Lcom_lemania_sis_client_presenter_FrmBulletinViewSummaryPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinViewSummaryPresenter', 866), Lcom_lemania_sis_client_presenter_FrmBulletinViewSummaryPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinViewSummaryPresenter$1', 867), Lcom_lemania_sis_client_presenter_FrmBulletinViewSummaryPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinViewSummaryPresenter$2', 868), Lcom_lemania_sis_client_presenter_FrmBulletinViewSummaryPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinViewSummaryPresenter$3', 869), Lcom_lemania_sis_client_presenter_FrmBulletinViewSummaryPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinViewSummaryPresenter$4', 870), Lcom_lemania_sis_client_view_FrmBulletinViewSummaryView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinViewSummaryView', 1186), Lcom_lemania_sis_client_view_FrmBulletinViewSummaryView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinViewSummaryView$1', 1187), Lcom_lemania_sis_client_view_FrmBulletinViewSummaryView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinViewSummaryView$2', 1188), Lcom_lemania_sis_client_view_FrmBulletinViewSummaryView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinViewSummaryView_BinderImpl', 1189), Lcom_lemania_sis_client_view_FrmBulletinViewSummaryView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinViewSummaryView_BinderImpl$Widgets', 1190), Lcom_lemania_sis_client_view_FrmBulletinViewSummaryView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinViewSummaryView_BinderImpl$Widgets$1', 1191), Lcom_lemania_sis_client_view_FrmBulletinViewSummaryView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinViewSummaryView_BinderImpl$Widgets$2', 1192), Lcom_lemania_sis_client_view_FrmBulletinViewSummaryView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinViewSummaryView_BinderImpl$Widgets$3', 1193), Lcom_lemania_sis_client_view_FrmBulletinViewSummaryView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinViewSummaryView_BinderImpl$Widgets$4', 1194), Lcom_lemania_sis_shared_service_BulletinRequestFactory_1BulletinRequestContextImpl$12X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinRequestFactory_BulletinRequestContextImpl$12X', 1438);
$entry(onLoad)(11);
