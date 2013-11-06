function $fixStudentName(this$static){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire((x = new UserRequestFactory_UserRequestContextImpl$3X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new SettingsPresenter$5_0);
}

function $saveDeadline(this$static, code, value){
  var rc, rf;
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($save_2(rc, code, value), new SettingsPresenter$6_0(this$static));
}

function $updateCurrentEcole(this$static, ecoleCode){
  var rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($save_2(rc, 'ECOLE', ecoleCode), new SettingsPresenter$4_0(this$static));
}

function $updateDeadlinesES(this$static, deadlineT1, deadlineT2, deadlineT3){
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  $saveDeadline(this$static, ($clinit_NotificationTypes() , 'BLOCK_ES_T1'), deadlineT1);
  $saveDeadline(this$static, 'BLOCK_ES_T2', deadlineT2);
  $saveDeadline(this$static, 'BLOCK_ES_T3', deadlineT3);
}

function $updateDeadlinesMatu(this$static, deadlineT1, deadlineT2){
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  $saveDeadline(this$static, ($clinit_NotificationTypes() , 'BLOCK_MATU_T1'), deadlineT1);
  $saveDeadline(this$static, 'BLOCK_MATU_T2', deadlineT2);
}

function $updateSettingOptionDeadline(this$static, dayNumber){
  var rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($save_2(rc, 'DEADLINE', dayNumber), new SettingsPresenter$1_0(this$static));
}

function $updateSettingOptionManualBlock(this$static, blnBlock){
  var rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($save_2(rc, 'BLOCK', blnBlock.value_0?'true':'false'), new SettingsPresenter$3_0(this$static));
}

function SettingsPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(983, 689, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$SettingsPresenter, Q$SettingOptionsUiHandler]), SettingsPresenter_0);
_.onBind = function onBind_23(){
  dynamicCast(this.view, Q$SettingsPresenter$MyView).setUiHandlers(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_45(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_22(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('settings'), null);
  $equals_5(this.currentUser.userEmail, 'thuannn@gmail.com')?$initializeInterface(dynamicCast(this.view, Q$SettingsPresenter$MyView), true):$initializeInterface(dynamicCast(this.view, Q$SettingsPresenter$MyView), false);
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($listAll_6(rc), new SettingsPresenter$2_0(this));
}
;
_.revealInParent = function revealInParent_22(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_94(this$static){
  $setText_1(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(984, 628, makeCastMap([Q$Receiver]), SettingsPresenter$1_0);
_.onFailure_0 = function onFailure_95(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_95(response){
  $onSuccess_94(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $onSuccess_95(this$static, response){
  $populateCurrentSettings(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), response);
}

function SettingsPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(985, 628, makeCastMap([Q$Receiver]), SettingsPresenter$2_0);
_.onFailure_0 = function onFailure_96(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_96(response){
  $onSuccess_95(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_96(this$static){
  $setText_1(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(986, 628, makeCastMap([Q$Receiver]), SettingsPresenter$3_0);
_.onFailure_0 = function onFailure_97(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_97(response){
  $onSuccess_96(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $onSuccess_97(this$static){
  $setText_1(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(987, 628, makeCastMap([Q$Receiver]), SettingsPresenter$4_0);
_.onFailure_0 = function onFailure_98(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_98(response){
  $onSuccess_97(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function SettingsPresenter$5_0(){
}

defineSeed(988, 628, makeCastMap([Q$Receiver]), SettingsPresenter$5_0);
_.onFailure_0 = function onFailure_99(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_99(response){
  throwClassCastExceptionUnlessNull(response);
}
;
function $onSuccess_98(this$static){
  $setText_1(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(989, 628, makeCastMap([Q$Receiver]), SettingsPresenter$6_0);
_.onFailure_0 = function onFailure_100(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_100(response){
  $onSuccess_98(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$SettingsPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$SettingsPresenter$_annotation$$none$$) {
    result = new SettingsPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$SettingsView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$SettingsPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$SettingsPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$SettingsPresenter$_annotation$$none$$;
}

defineSeed(1057, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_127(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$SettingsPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeDayList(dayList){
  var i;
  for (i = 0; i < 31; ++i)
    $insertItem(dayList, '' + (i + 1), i + 1 < 10?'0' + (i + 1):'' + (i + 1), -1);
}

function $initializeInterface(this$static, isAdmin){
  var i;
  for (i = 0; i < 31; ++i)
    $insertItem(this$static.lstDays, '' + (i + 1), '' + i, -1);
  $setText_1(this$static.lblUpdateStatus, '');
  $selectClear(this$static.lstEcoles.element);
  $insertItem(this$static.lstEcoles, '-', '', -1);
  $insertItem(this$static.lstEcoles, 'Ecole Lemania', ($clinit_NotificationTypes() , 'LM'), -1);
  $insertItem(this$static.lstEcoles, 'Pierre Viret', 'PV', -1);
  $initializeDayList(this$static.dayMatuT1);
  $initializeDayList(this$static.dayMatuT2);
  $initializeDayList(this$static.dayEST1);
  $initializeDayList(this$static.dayEST2);
  $initializeDayList(this$static.dayEST3);
  $initializeMonthList(this$static.monthMatuT1);
  $initializeMonthList(this$static.monthMatuT2);
  $initializeMonthList(this$static.monthEST1);
  $initializeMonthList(this$static.monthEST2);
  $initializeMonthList(this$static.monthEST3);
  $initializeYearList(this$static.yearMatuT1);
  $initializeYearList(this$static.yearMatuT2);
  $initializeYearList(this$static.yearEST1);
  $initializeYearList(this$static.yearEST2);
  $initializeYearList(this$static.yearEST3);
  isAdmin?$setVisible_0(this$static.pnlAdmin, true):$setVisible_0(this$static.pnlAdmin, false);
}

function $initializeMonthList(monthList){
  var i;
  for (i = 0; i < 12; ++i)
    $insertItem(monthList, '' + (i + 1), i + 1 < 10?'0' + (i + 1):'' + (i + 1), -1);
}

function $initializeYearList(yearList){
  var i;
  for (i = 0; i < 10; ++i)
    $insertItem(yearList, '' + (i + 2013), '' + (i + 2013), -1);
}

function $onCmdSaveClick_4(this$static){
  if (this$static.uiHandlers) {
    $updateSettingOptionDeadline(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getItemText(this$static.lstDays, this$static.lstDays.element.selectedIndex));
    $updateSettingOptionManualBlock(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_2(this$static.blnBlock));
    $updateCurrentEcole(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex));
  }
}

function $onCmdSaveDateESClick(this$static){
  $updateDeadlinesES(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_1(this$static.yearEST1, this$static.yearEST1.element.selectedIndex) + $getValue_1(this$static.monthEST1, this$static.monthEST1.element.selectedIndex) + $getValue_1(this$static.dayEST1, this$static.dayEST1.element.selectedIndex), $getValue_1(this$static.yearEST2, this$static.yearEST2.element.selectedIndex) + $getValue_1(this$static.monthEST2, this$static.monthEST2.element.selectedIndex) + $getValue_1(this$static.dayEST2, this$static.dayEST2.element.selectedIndex), $getValue_1(this$static.yearEST3, this$static.yearEST3.element.selectedIndex) + $getValue_1(this$static.monthEST3, this$static.monthEST3.element.selectedIndex) + $getValue_1(this$static.dayEST3, this$static.dayEST3.element.selectedIndex));
}

function $onCmdSaveDateMatuClick(this$static){
  $updateDeadlinesMatu(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_1(this$static.yearMatuT1, this$static.yearMatuT1.element.selectedIndex) + $getValue_1(this$static.monthMatuT1, this$static.monthMatuT1.element.selectedIndex) + $getValue_1(this$static.dayMatuT1, this$static.dayMatuT1.element.selectedIndex), $getValue_1(this$static.yearMatuT2, this$static.yearMatuT2.element.selectedIndex) + $getValue_1(this$static.monthMatuT2, this$static.monthMatuT2.element.selectedIndex) + $getValue_1(this$static.dayMatuT2, this$static.dayMatuT2.element.selectedIndex));
}

function $populateCurrentSettings(this$static, settingOptions){
  var i, setting, setting$iterator;
  for (setting$iterator = settingOptions.iterator(); setting$iterator.hasNext();) {
    setting = dynamicCast(setting$iterator.next_0(), Q$SettingOptionProxy);
    $equals_5(setting.getOptionName(), 'DEADLINE') && $setSelectedIndex_0(this$static.lstDays, __parseAndValidateInt(setting.getOptionValue()) - 1);
    $equals_5(setting.getOptionName(), 'BLOCK') && $setValue_1(this$static.blnBlock, ($clinit_Boolean() , $clinit_Boolean() , $equalsIgnoreCase('true', setting.getOptionValue())?TRUE_1:FALSE_1));
    if ($equals_5(setting.getOptionName(), 'ECOLE')) {
      for (i = 0; i < this$static.lstEcoles.element.options.length; ++i)
        $equals_5($getValue_1(this$static.lstEcoles, i), setting.getOptionValue()) && $setSelectedIndex_0(this$static.lstEcoles, i);
    }
    $equals_5(setting.getOptionName(), ($clinit_NotificationTypes() , 'BLOCK_MATU_T1')) && $setSelectedDate(setting.getOptionValue(), this$static.dayMatuT1, this$static.monthMatuT1, this$static.yearMatuT1);
    $equals_5(setting.getOptionName(), 'BLOCK_MATU_T2') && $setSelectedDate(setting.getOptionValue(), this$static.dayMatuT2, this$static.monthMatuT2, this$static.yearMatuT2);
    $equals_5(setting.getOptionName(), 'BLOCK_ES_T1') && $setSelectedDate(setting.getOptionValue(), this$static.dayEST1, this$static.monthEST1, this$static.yearEST1);
    $equals_5(setting.getOptionName(), 'BLOCK_ES_T2') && $setSelectedDate(setting.getOptionValue(), this$static.dayEST2, this$static.monthEST2, this$static.yearEST2);
    $equals_5(setting.getOptionName(), 'BLOCK_ES_T3') && $setSelectedDate(setting.getOptionValue(), this$static.dayEST3, this$static.monthEST3, this$static.yearEST3);
  }
}

function $setSelectedDate(optionValue, dayList, monthList, yearList){
  if ($equals_5(optionValue, ''))
    return;
  $setSelectedIndex_0(dayList, __parseAndValidateInt(optionValue.substr(6, 8 - 6)) - 1);
  $setSelectedIndex_0(monthList, __parseAndValidateInt(optionValue.substr(4, 6 - 4)) - 1);
  $setSelectedIndex_0(yearList, __parseAndValidateInt(optionValue.substr(0, 4 - 0)) - 2013);
}

function SettingsView_0(){
  this.widget = $build_f_HTMLPanel1_20(new SettingsView_BinderImpl$Widgets_0(this));
}

defineSeed(1310, 694, makeCastMap([Q$IsWidget, Q$SettingsPresenter$MyView, Q$SettingsView]), SettingsView_0);
_.asWidget = function asWidget_25(){
  return this.widget;
}
;
_.blnBlock = null;
_.dayEST1 = null;
_.dayEST2 = null;
_.dayEST3 = null;
_.dayMatuT1 = null;
_.dayMatuT2 = null;
_.lblUpdateStatus = null;
_.lstDays = null;
_.lstEcoles = null;
_.monthEST1 = null;
_.monthEST2 = null;
_.monthEST3 = null;
_.monthMatuT1 = null;
_.monthMatuT2 = null;
_.pnlAdmin = null;
_.widget = null;
_.yearEST1 = null;
_.yearEST2 = null;
_.yearEST3 = null;
_.yearMatuT1 = null;
_.yearMatuT2 = null;
function SettingsView_BinderImpl_0(){
}

defineSeed(1311, 1, {}, SettingsView_BinderImpl_0);
function $build_f_HTMLPanel1_20(this$static){
  var attachRecord20, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Label4, f_VerticalPanel5, f_VerticalPanel6, f_VerticalPanel16, f_Label17, f_Grid18, f_Label19, dayEST1, monthEST1, yearEST1, f_Label20, dayEST2, monthEST2, yearEST2, f_Label21, dayEST3, monthEST3, yearEST3, f_Label22, cmdSaveDateES, pnlAdmin, f_Label7, f_Grid8, f_Label9, f_Label10, f_Label11, f_Label12, f_Label13, dayMatuT1, monthMatuT1, yearMatuT1, f_Label14, dayMatuT2, monthMatuT2, yearMatuT2, f_Label15, cmdSaveDateMatu, f_Label23, f_Grid24, f_Label25, lstDays, f_Label26, f_Label27, blnBlock, f_Label28, lstEcoles, f_Label29, lblUpdateStatus, cmdSave, f_Label31, f_Grid32, f_Label33, cmdFixStudentName, f_Label34;
  f_HTMLPanel1 = new HTMLPanel_0($html1_15(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord20 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord20.origParent?$insertBefore(attachRecord20.origParent, attachRecord20.element, attachRecord20.origSibling):orphan(attachRecord20.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, "GESTION DE L'ACCES", false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_Label4 = new Label_0 , $setTextOrHtml(f_Label4.directionalTextHelper, 'Choisir la date de blocage pour chaque trimestre de chaque programme.', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , $add_11(f_VerticalPanel2, (f_VerticalPanel5 = new VerticalPanel_0 , $add_11(f_VerticalPanel5, (f_VerticalPanel6 = new VerticalPanel_0 , $add_11(f_VerticalPanel6, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label7.directionalTextHelper, 'Maturit\xE9 Suisse', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_11(f_VerticalPanel6, (f_Grid8 = new Grid_0 , $resizeColumns(f_Grid8, 4) , $resizeRows(f_Grid8, 4) , $setWidget_1(f_Grid8, 0, 0, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label9.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid8, 0, 1, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Jour', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid8, 0, 2, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Mois', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid8, 0, 3, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Ann\xE9e', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_1(f_Grid8, 1, 0, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'Trimestre 1 :', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_1(f_Grid8, 1, 1, (dayMatuT1 = new ListBox_0 , this$static.owner.dayMatuT1 = dayMatuT1 , dayMatuT1)) , $setWidget_1(f_Grid8, 1, 2, (monthMatuT1 = new ListBox_0 , this$static.owner.monthMatuT1 = monthMatuT1 , monthMatuT1)) , $setWidget_1(f_Grid8, 1, 3, (yearMatuT1 = new ListBox_0 , this$static.owner.yearMatuT1 = yearMatuT1 , yearMatuT1)) , $setWidget_1(f_Grid8, 2, 0, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, 'Trimestre 2 :', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_1(f_Grid8, 2, 1, (dayMatuT2 = new ListBox_0 , this$static.owner.dayMatuT2 = dayMatuT2 , dayMatuT2)) , $setWidget_1(f_Grid8, 2, 2, (monthMatuT2 = new ListBox_0 , this$static.owner.monthMatuT2 = monthMatuT2 , monthMatuT2)) , $setWidget_1(f_Grid8, 2, 3, (yearMatuT2 = new ListBox_0 , this$static.owner.yearMatuT2 = yearMatuT2 , yearMatuT2)) , $setWidget_1(f_Grid8, 3, 0, (f_Label15 = new Label_0 , f_Label15.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label15.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_1(f_Grid8, 3, 1, (cmdSaveDateMatu = new Button_0 , $setInnerText(cmdSaveDateMatu.element, 'Enregistrer') , $addDomHandler(cmdSaveDateMatu, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSaveDateMatu)) , f_Grid8.tableElem['cellSpacing'] = 5 , f_Grid8.tableElem['cellPadding'] = 5 , f_Grid8)) , f_VerticalPanel6.element['className'] = 'subSection' , f_VerticalPanel6.element.style['width'] = '400px' , f_VerticalPanel6)) , $add_11(f_VerticalPanel5, (f_VerticalPanel16 = new VerticalPanel_0 , $add_11(f_VerticalPanel16, (f_Label17 = new Label_0 , f_Label17.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label17.directionalTextHelper, 'Etudes Secondaires', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $add_11(f_VerticalPanel16, (f_Grid18 = new Grid_0 , $resizeColumns(f_Grid18, 4) , $resizeRows(f_Grid18, 4) , $setWidget_1(f_Grid18, 0, 0, (f_Label19 = new Label_0 , $setTextOrHtml(f_Label19.directionalTextHelper, 'Trimestre 1 :', false) , $updateHorizontalAlignment(f_Label19) , f_Label19)) , $setWidget_1(f_Grid18, 0, 1, (dayEST1 = new ListBox_0 , this$static.owner.dayEST1 = dayEST1 , dayEST1)) , $setWidget_1(f_Grid18, 0, 2, (monthEST1 = new ListBox_0 , this$static.owner.monthEST1 = monthEST1 , monthEST1)) , $setWidget_1(f_Grid18, 0, 3, (yearEST1 = new ListBox_0 , this$static.owner.yearEST1 = yearEST1 , yearEST1)) , $setWidget_1(f_Grid18, 1, 0, (f_Label20 = new Label_0 , $setTextOrHtml(f_Label20.directionalTextHelper, 'Trimestre 2 :', false) , $updateHorizontalAlignment(f_Label20) , f_Label20)) , $setWidget_1(f_Grid18, 1, 1, (dayEST2 = new ListBox_0 , this$static.owner.dayEST2 = dayEST2 , dayEST2)) , $setWidget_1(f_Grid18, 1, 2, (monthEST2 = new ListBox_0 , this$static.owner.monthEST2 = monthEST2 , monthEST2)) , $setWidget_1(f_Grid18, 1, 3, (yearEST2 = new ListBox_0 , this$static.owner.yearEST2 = yearEST2 , yearEST2)) , $setWidget_1(f_Grid18, 2, 0, (f_Label21 = new Label_0 , $setTextOrHtml(f_Label21.directionalTextHelper, 'Trimestre 3 :', false) , $updateHorizontalAlignment(f_Label21) , f_Label21)) , $setWidget_1(f_Grid18, 2, 1, (dayEST3 = new ListBox_0 , this$static.owner.dayEST3 = dayEST3 , dayEST3)) , $setWidget_1(f_Grid18, 2, 2, (monthEST3 = new ListBox_0 , this$static.owner.monthEST3 = monthEST3 , monthEST3)) , $setWidget_1(f_Grid18, 2, 3, (yearEST3 = new ListBox_0 , this$static.owner.yearEST3 = yearEST3 , yearEST3)) , $setWidget_1(f_Grid18, 3, 0, (f_Label22 = new Label_0 , f_Label22.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label22.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label22) , f_Label22)) , $setWidget_1(f_Grid18, 3, 1, (cmdSaveDateES = new Button_0 , $setInnerText(cmdSaveDateES.element, 'Enregistrer') , $addDomHandler(cmdSaveDateES, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_0) , cmdSaveDateES)) , f_Grid18.tableElem['cellSpacing'] = 5 , f_Grid18.tableElem['cellPadding'] = 5 , f_Grid18)) , f_VerticalPanel16.element['className'] = 'subSection' , f_VerticalPanel16.element.style['width'] = '400px' , f_VerticalPanel16)) , $add_11(f_VerticalPanel5, (pnlAdmin = new FlowPanel_0 , $add_7(pnlAdmin, (f_Label23 = new Label_0 , f_Label23.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label23.directionalTextHelper, 'Admin', false) , $updateHorizontalAlignment(f_Label23) , f_Label23)) , $add_7(pnlAdmin, (f_Grid24 = new Grid_0 , $resizeColumns(f_Grid24, 4) , $resizeRows(f_Grid24, 4) , $setWidget_1(f_Grid24, 0, 0, (f_Label25 = new Label_0 , $setTextOrHtml(f_Label25.directionalTextHelper, "Bloquer automatiquement l'acc\xE8s au syst\xE8me le", false) , $updateHorizontalAlignment(f_Label25) , f_Label25)) , $setWidget_1(f_Grid24, 0, 1, (lstDays = new ListBox_0 , this$static.owner.lstDays = lstDays , lstDays)) , $setWidget_1(f_Grid24, 0, 2, (f_Label26 = new Label_0 , $setTextOrHtml(f_Label26.directionalTextHelper, 'tous les mois.', false) , $updateHorizontalAlignment(f_Label26) , f_Label26)) , $setWidget_1(f_Grid24, 1, 0, (f_Label27 = new Label_0 , $setTextOrHtml(f_Label27.directionalTextHelper, "Bloquer l'acc\xE8s d\xE8s MAINTENANT", false) , $updateHorizontalAlignment(f_Label27) , f_Label27)) , $setWidget_1(f_Grid24, 1, 1, (blnBlock = new SimpleCheckBox_0 , this$static.owner.blnBlock = blnBlock , blnBlock)) , $setWidget_1(f_Grid24, 2, 0, (f_Label28 = new Label_0 , $setTextOrHtml(f_Label28.directionalTextHelper, 'Ecole :', false) , $updateHorizontalAlignment(f_Label28) , f_Label28)) , $setWidget_1(f_Grid24, 2, 1, (lstEcoles = new ListBox_0 , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_1(f_Grid24, 2, 2, (f_Label29 = new Label_0 , $setTextOrHtml(f_Label29.directionalTextHelper, '', false) , $updateHorizontalAlignment(f_Label29) , f_Label29)) , $setWidget_1(f_Grid24, 2, 3, (lblUpdateStatus = new Label_0 , this$static.owner.lblUpdateStatus = lblUpdateStatus , lblUpdateStatus)) , $setWidget_1(f_Grid24, 3, 0, new Label_0) , $setWidget_1(f_Grid24, 3, 1, (cmdSave = new Button_0 , $setInnerText(cmdSave.element, 'Enregistrer') , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_0) , cmdSave)) , f_Grid24.element.style['width'] = '' , f_Grid24.tableElem['cellSpacing'] = 5 , f_Grid24.tableElem['cellPadding'] = 5 , f_Grid24)) , $add_7(pnlAdmin, (f_Label31 = new Label_0 , f_Label31.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label31.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label31) , f_Label31)) , $add_7(pnlAdmin, (f_Grid32 = new Grid_0 , $resizeColumns(f_Grid32, 2) , $resizeRows(f_Grid32, 1) , $setWidget_1(f_Grid32, 0, 0, (f_Label33 = new Label_0 , $setTextOrHtml(f_Label33.directionalTextHelper, 'Fixer le format des noms des \xE9l\xE8ves dans Users', false) , $updateHorizontalAlignment(f_Label33) , f_Label33)) , $setWidget_1(f_Grid32, 0, 1, (cmdFixStudentName = new Button_0 , $setInnerText(cmdFixStudentName.element, 'Fixer') , $addDomHandler(cmdFixStudentName, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , cmdFixStudentName)) , f_Grid32.tableElem['cellSpacing'] = 5 , f_Grid32.tableElem['cellPadding'] = 5 , f_Grid32)) , $add_7(pnlAdmin, (f_Label34 = new Label_0 , f_Label34.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label34.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label34) , f_Label34)) , pnlAdmin.element['className'] = 'subSection' , pnlAdmin.element.style['width'] = '550px' , this$static.owner.pnlAdmin = pnlAdmin , pnlAdmin)) , f_VerticalPanel5.table['cellSpacing'] = 10 , f_VerticalPanel5)) , f_VerticalPanel2.element.style['height'] = '' , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function SettingsView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new SettingsView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new SettingsView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new SettingsView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new SettingsView_BinderImpl$Widgets$4_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1312, 1, {}, SettingsView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function SettingsView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1313, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_24(event_0){
  $onCmdSaveClick_4(this.this$1.owner);
}
;
_.this$1 = null;
function SettingsView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1314, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_25(event_0){
  $fixStudentName(dynamicCast(this.this$1.owner.uiHandlers, Q$SettingOptionsUiHandler));
}
;
_.this$1 = null;
function SettingsView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1315, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$3_0);
_.onClick = function onClick_26(event_0){
  $onCmdSaveDateMatuClick(this.this$1.owner);
}
;
_.this$1 = null;
function SettingsView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1316, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$4_0);
_.onClick = function onClick_27(event_0){
  $onCmdSaveDateESClick(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_15(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$view$SettingsView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$SettingsView$_annotation$$none$$) {
    result = new SettingsView_0(new SettingsView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$SettingsView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$SettingsView$_annotation$$none$$;
}

function $save_2(this$static, optionName, optionValue){
  var x;
  x = new SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X_0(this$static, optionName, optionValue);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X_0(this$0, val$optionName, val$optionValue){
  this.val$optionName = val$optionName;
  this.val$optionValue = val$optionValue;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1503, 632, makeCastMap([Q$AbstractRequest]), SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_54(){
  return new RequestData_0('NnkxwQJ8$x3Hd9pypFvVJfCdkfw=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$optionName, this.val$optionValue]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$optionName = null;
_.val$optionValue = null;
function UserRequestFactory_UserRequestContextImpl$3X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1525, 632, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_67(){
  return new RequestData_0('LngrkGjFo68X3ZI22b6ClNWvoQ4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
var Lcom_lemania_sis_client_presenter_SettingsPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter', 983), Lcom_lemania_sis_client_presenter_SettingsPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$1', 984), Lcom_lemania_sis_client_presenter_SettingsPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$2', 985), Lcom_lemania_sis_client_presenter_SettingsPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$3', 986), Lcom_lemania_sis_client_presenter_SettingsPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$4', 987), Lcom_lemania_sis_client_presenter_SettingsPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$5', 988), Lcom_lemania_sis_client_presenter_SettingsPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$6', 989), Lcom_lemania_sis_client_view_SettingsView_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView', 1310), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl', 1311), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets', 1312), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets$1', 1313), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets$2', 1314), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets$3', 1315), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets$4', 1316), Lcom_lemania_sis_shared_service_SettingOptionRequestFactory_1SettingOptionRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X', 1503), Lcom_lemania_sis_shared_service_UserRequestFactory_1UserRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'UserRequestFactory_UserRequestContextImpl$3X', 1525);
$entry(onLoad)(21);
