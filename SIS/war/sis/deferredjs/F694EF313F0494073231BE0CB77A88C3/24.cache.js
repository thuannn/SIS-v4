function $fixStudentName(this$static){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire((x = new UserRequestFactory_UserRequestContextImpl$4X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new SettingsPresenter$5_0);
}

function $saveDeadline(this$static, code, value){
  var rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
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

function $updateDeadlinesBAC(this$static, deadlineT1, deadlineT2, deadlineT3){
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  $saveDeadline(this$static, ($clinit_NotificationTypes() , 'BLOCK_BAC_T1'), deadlineT1);
  $saveDeadline(this$static, 'BLOCK_BAC_T2', deadlineT2);
  $saveDeadline(this$static, 'BLOCK_BAC_T3', deadlineT3);
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
  Presenter_1.call(this, eventBus, view, proxy, null);
}

defineSeed(1434, 787, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$SettingsPresenter, Q$SettingOptionsUiHandler]), SettingsPresenter_0);
_.onBind = function onBind_36(){
  dynamicCast(this.view, Q$SettingsPresenter$MyView).setUiHandlers(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_55(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_35(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('settings'), null);
  $equals_6(this.currentUser.userEmail, 'thuannn@gmail.com')?$initializeInterface(dynamicCast(this.view, Q$SettingsPresenter$MyView), true):$initializeInterface(dynamicCast(this.view, Q$SettingsPresenter$MyView), false);
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($listAll_9(rc), new SettingsPresenter$2_0(this));
}
;
_.revealInParent = function revealInParent_27(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_153(this$static){
  $setText_0(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1435, 718, makeCastMap([Q$Receiver]), SettingsPresenter$1_0);
_.onFailure_0 = function onFailure_171(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_171(response){
  $onSuccess_153(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $onSuccess_154(this$static, response){
  $populateCurrentSettings(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), response);
}

function SettingsPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1436, 718, makeCastMap([Q$Receiver]), SettingsPresenter$2_0);
_.onFailure_0 = function onFailure_172(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_172(response){
  $onSuccess_154(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_155(this$static){
  $setText_0(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1437, 718, makeCastMap([Q$Receiver]), SettingsPresenter$3_0);
_.onFailure_0 = function onFailure_173(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_173(response){
  $onSuccess_155(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $onSuccess_156(this$static){
  $setText_0(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1438, 718, makeCastMap([Q$Receiver]), SettingsPresenter$4_0);
_.onFailure_0 = function onFailure_174(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_174(response){
  $onSuccess_156(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function SettingsPresenter$5_0(){
}

defineSeed(1439, 718, makeCastMap([Q$Receiver]), SettingsPresenter$5_0);
_.onFailure_0 = function onFailure_175(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_175(response){
  throwClassCastExceptionUnlessNull(response);
}
;
function $onSuccess_157(this$static){
  $setText_0(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1440, 718, makeCastMap([Q$Receiver]), SettingsPresenter$6_0);
_.onFailure_0 = function onFailure_176(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_176(response){
  $onSuccess_157(this, throwClassCastExceptionUnlessNull(response));
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

defineSeed(1483, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_193(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$SettingsPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeDayList(dayList){
  var i;
  for (i = 0; i < 31; ++i)
    $insertItem_0(dayList, '' + (i + 1), i + 1 < 10?'0' + (i + 1):'' + (i + 1), -1);
}

function $initializeInterface(this$static, isAdmin){
  var i;
  for (i = 0; i < 31; ++i)
    $insertItem_0(this$static.lstDays, '' + (i + 1), '' + i, -1);
  $setText_0(this$static.lblUpdateStatus, '');
  $selectClear(this$static.lstEcoles.element);
  $insertItem_0(this$static.lstEcoles, '-', '', -1);
  $insertItem_0(this$static.lstEcoles, 'Ecole Lemania', ($clinit_NotificationTypes() , 'LM'), -1);
  $insertItem_0(this$static.lstEcoles, 'Pierre Viret', 'PV', -1);
  $selectClear(this$static.dayMatuT1.element);
  $selectClear(this$static.dayMatuT2.element);
  $selectClear(this$static.dayEST1.element);
  $selectClear(this$static.dayEST2.element);
  $selectClear(this$static.dayEST3.element);
  $selectClear(this$static.dayBacT1.element);
  $selectClear(this$static.dayBacT2.element);
  $selectClear(this$static.dayBacT3.element);
  $selectClear(this$static.monthMatuT1.element);
  $selectClear(this$static.monthMatuT2.element);
  $selectClear(this$static.monthEST1.element);
  $selectClear(this$static.monthEST2.element);
  $selectClear(this$static.monthEST3.element);
  $selectClear(this$static.monthBacT1.element);
  $selectClear(this$static.monthBacT2.element);
  $selectClear(this$static.monthBacT3.element);
  $selectClear(this$static.yearMatuT1.element);
  $selectClear(this$static.yearMatuT2.element);
  $selectClear(this$static.yearEST1.element);
  $selectClear(this$static.yearEST2.element);
  $selectClear(this$static.yearEST3.element);
  $selectClear(this$static.yearBacT1.element);
  $selectClear(this$static.yearBacT2.element);
  $selectClear(this$static.yearBacT3.element);
  $initializeDayList(this$static.dayMatuT1);
  $initializeDayList(this$static.dayMatuT2);
  $initializeDayList(this$static.dayEST1);
  $initializeDayList(this$static.dayEST2);
  $initializeDayList(this$static.dayEST3);
  $initializeDayList(this$static.dayBacT1);
  $initializeDayList(this$static.dayBacT2);
  $initializeDayList(this$static.dayBacT3);
  $initializeMonthList(this$static.monthMatuT1);
  $initializeMonthList(this$static.monthMatuT2);
  $initializeMonthList(this$static.monthEST1);
  $initializeMonthList(this$static.monthEST2);
  $initializeMonthList(this$static.monthEST3);
  $initializeMonthList(this$static.monthBacT1);
  $initializeMonthList(this$static.monthBacT2);
  $initializeMonthList(this$static.monthBacT3);
  $initializeYearList(this$static.yearMatuT1);
  $initializeYearList(this$static.yearMatuT2);
  $initializeYearList(this$static.yearEST1);
  $initializeYearList(this$static.yearEST2);
  $initializeYearList(this$static.yearEST3);
  $initializeYearList(this$static.yearBacT1);
  $initializeYearList(this$static.yearBacT2);
  $initializeYearList(this$static.yearBacT3);
  isAdmin?$setVisible_0(this$static.pnlAdmin, true):$setVisible_0(this$static.pnlAdmin, false);
}

function $initializeMonthList(monthList){
  var i;
  for (i = 0; i < 12; ++i)
    $insertItem_0(monthList, '' + (i + 1), i + 1 < 10?'0' + (i + 1):'' + (i + 1), -1);
}

function $initializeYearList(yearList){
  var i;
  for (i = 0; i < 10; ++i)
    $insertItem_0(yearList, '' + (i + 2013), '' + (i + 2013), -1);
}

function $onCmdSaveClick_8(this$static){
  if (this$static.uiHandlers) {
    $updateSettingOptionDeadline(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getItemText(this$static.lstDays, this$static.lstDays.element.selectedIndex));
    $updateSettingOptionManualBlock(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_3(this$static.blnBlock));
    $updateCurrentEcole(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_2(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex));
  }
}

function $onCmdSaveDateBacClick(this$static){
  $updateDeadlinesBAC(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_2(this$static.yearBacT1, this$static.yearBacT1.element.selectedIndex) + $getValue_2(this$static.monthBacT1, this$static.monthBacT1.element.selectedIndex) + $getValue_2(this$static.dayBacT1, this$static.dayBacT1.element.selectedIndex), $getValue_2(this$static.yearBacT2, this$static.yearBacT2.element.selectedIndex) + $getValue_2(this$static.monthBacT2, this$static.monthBacT2.element.selectedIndex) + $getValue_2(this$static.dayBacT2, this$static.dayBacT2.element.selectedIndex), $getValue_2(this$static.yearBacT3, this$static.yearBacT3.element.selectedIndex) + $getValue_2(this$static.monthBacT3, this$static.monthBacT3.element.selectedIndex) + $getValue_2(this$static.dayBacT3, this$static.dayBacT3.element.selectedIndex));
}

function $onCmdSaveDateESClick(this$static){
  $updateDeadlinesES(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_2(this$static.yearEST1, this$static.yearEST1.element.selectedIndex) + $getValue_2(this$static.monthEST1, this$static.monthEST1.element.selectedIndex) + $getValue_2(this$static.dayEST1, this$static.dayEST1.element.selectedIndex), $getValue_2(this$static.yearEST2, this$static.yearEST2.element.selectedIndex) + $getValue_2(this$static.monthEST2, this$static.monthEST2.element.selectedIndex) + $getValue_2(this$static.dayEST2, this$static.dayEST2.element.selectedIndex), $getValue_2(this$static.yearEST3, this$static.yearEST3.element.selectedIndex) + $getValue_2(this$static.monthEST3, this$static.monthEST3.element.selectedIndex) + $getValue_2(this$static.dayEST3, this$static.dayEST3.element.selectedIndex));
}

function $onCmdSaveDateMatuClick(this$static){
  $updateDeadlinesMatu(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_2(this$static.yearMatuT1, this$static.yearMatuT1.element.selectedIndex) + $getValue_2(this$static.monthMatuT1, this$static.monthMatuT1.element.selectedIndex) + $getValue_2(this$static.dayMatuT1, this$static.dayMatuT1.element.selectedIndex), $getValue_2(this$static.yearMatuT2, this$static.yearMatuT2.element.selectedIndex) + $getValue_2(this$static.monthMatuT2, this$static.monthMatuT2.element.selectedIndex) + $getValue_2(this$static.dayMatuT2, this$static.dayMatuT2.element.selectedIndex));
}

function $populateCurrentSettings(this$static, settingOptions){
  var i, setting, setting$iterator;
  for (setting$iterator = settingOptions.iterator(); setting$iterator.hasNext();) {
    setting = dynamicCast(setting$iterator.next_0(), Q$SettingOptionProxy);
    $equals_6(setting.getOptionName(), 'DEADLINE') && $setSelectedIndex_0(this$static.lstDays, __parseAndValidateInt(setting.getOptionValue()) - 1);
    $equals_6(setting.getOptionName(), 'BLOCK') && $setValue_1(this$static.blnBlock, ($clinit_Boolean() , $clinit_Boolean() , $equalsIgnoreCase('true', setting.getOptionValue())?TRUE_1:FALSE_1));
    if ($equals_6(setting.getOptionName(), 'ECOLE')) {
      for (i = 0; i < this$static.lstEcoles.element.options.length; ++i)
        $equals_6($getValue_2(this$static.lstEcoles, i), setting.getOptionValue()) && $setSelectedIndex_0(this$static.lstEcoles, i);
    }
    $equals_6(setting.getOptionName(), ($clinit_NotificationTypes() , 'BLOCK_MATU_T1')) && $setSelectedDate(setting.getOptionValue(), this$static.dayMatuT1, this$static.monthMatuT1, this$static.yearMatuT1);
    $equals_6(setting.getOptionName(), 'BLOCK_MATU_T2') && $setSelectedDate(setting.getOptionValue(), this$static.dayMatuT2, this$static.monthMatuT2, this$static.yearMatuT2);
    $equals_6(setting.getOptionName(), 'BLOCK_ES_T1') && $setSelectedDate(setting.getOptionValue(), this$static.dayEST1, this$static.monthEST1, this$static.yearEST1);
    $equals_6(setting.getOptionName(), 'BLOCK_ES_T2') && $setSelectedDate(setting.getOptionValue(), this$static.dayEST2, this$static.monthEST2, this$static.yearEST2);
    $equals_6(setting.getOptionName(), 'BLOCK_ES_T3') && $setSelectedDate(setting.getOptionValue(), this$static.dayEST3, this$static.monthEST3, this$static.yearEST3);
    $equals_6(setting.getOptionName(), 'BLOCK_BAC_T1') && $setSelectedDate(setting.getOptionValue(), this$static.dayBacT1, this$static.monthBacT1, this$static.yearBacT1);
    $equals_6(setting.getOptionName(), 'BLOCK_BAC_T2') && $setSelectedDate(setting.getOptionValue(), this$static.dayBacT2, this$static.monthBacT2, this$static.yearBacT2);
    $equals_6(setting.getOptionName(), 'BLOCK_BAC_T3') && $setSelectedDate(setting.getOptionValue(), this$static.dayBacT3, this$static.monthBacT3, this$static.yearBacT3);
  }
}

function $setSelectedDate(optionValue, dayList, monthList, yearList){
  if ($equals_6(optionValue, ''))
    return;
  $setSelectedIndex_0(dayList, __parseAndValidateInt(optionValue.substr(6, 8 - 6)) - 1);
  $setSelectedIndex_0(monthList, __parseAndValidateInt(optionValue.substr(4, 6 - 4)) - 1);
  $setSelectedIndex_0(yearList, __parseAndValidateInt(optionValue.substr(0, 4 - 0)) - 2013);
}

function SettingsView_0(){
  this.widget = $build_f_HTMLPanel1_31(new SettingsView_BinderImpl$Widgets_0(this));
}

defineSeed(1770, 792, makeCastMap([Q$IsWidget, Q$SettingsPresenter$MyView, Q$SettingsView]), SettingsView_0);
_.asWidget = function asWidget_30(){
  return this.widget;
}
;
_.blnBlock = null;
_.dayBacT1 = null;
_.dayBacT2 = null;
_.dayBacT3 = null;
_.dayEST1 = null;
_.dayEST2 = null;
_.dayEST3 = null;
_.dayMatuT1 = null;
_.dayMatuT2 = null;
_.lblUpdateStatus = null;
_.lstDays = null;
_.lstEcoles = null;
_.monthBacT1 = null;
_.monthBacT2 = null;
_.monthBacT3 = null;
_.monthEST1 = null;
_.monthEST2 = null;
_.monthEST3 = null;
_.monthMatuT1 = null;
_.monthMatuT2 = null;
_.pnlAdmin = null;
_.widget = null;
_.yearBacT1 = null;
_.yearBacT2 = null;
_.yearBacT3 = null;
_.yearEST1 = null;
_.yearEST2 = null;
_.yearEST3 = null;
_.yearMatuT1 = null;
_.yearMatuT2 = null;
function SettingsView_BinderImpl_0(){
}

defineSeed(1771, 1, {}, SettingsView_BinderImpl_0);
function $build_f_HTMLPanel1_31(this$static){
  var attachRecord23, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Label4, f_VerticalPanel5, f_HorizontalPanel6, f_VerticalPanel7, f_VerticalPanel18, f_HorizontalPanel29, f_VerticalPanel30, pnlAdmin, f_Label8, f_Grid9, f_Label10, f_Label11, f_Label12, f_Label13, f_Label14, dayMatuT1, monthMatuT1, yearMatuT1, f_Label15, dayMatuT2, monthMatuT2, yearMatuT2, f_Label16, f_Label17, cmdSaveDateMatu, f_Label19, f_Grid20, f_Label21, f_Label22, f_Label23, f_Label24, f_Label25, dayBacT1, monthBacT1, yearBacT1, f_Label26, dayBacT2, monthBacT2, yearBacT2, f_Label27, dayBacT3, monthBacT3, yearBacT3, f_Label28, cmdSaveDateBac, f_Label31, f_Grid32, f_Label33, dayEST1, monthEST1, yearEST1, f_Label34, dayEST2, monthEST2, yearEST2, f_Label35, dayEST3, monthEST3, yearEST3, f_Label36, cmdSaveDateES, f_Label37, f_Grid38, f_Label39, lstDays, f_Label40, f_Label41, blnBlock, f_Label42, lstEcoles, f_Label43, lblUpdateStatus, cmdSave, f_Label45, f_Grid46, f_Label47, cmdFixStudentName, f_Label48;
  f_HTMLPanel1 = new HTMLPanel_0($html1_22(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord23 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord23.origParent?$insertBefore(attachRecord23.origParent, attachRecord23.element, attachRecord23.origSibling):orphan(attachRecord23.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_12(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, "GESTION DE L'ACCES", false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_12(f_VerticalPanel2, (f_Label4 = new Label_0 , $setTextOrHtml(f_Label4.directionalTextHelper, 'Choisir la date de blocage pour chaque trimestre de chaque programme.', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , $add_12(f_VerticalPanel2, (f_VerticalPanel5 = new VerticalPanel_0 , $add_12(f_VerticalPanel5, (f_HorizontalPanel6 = new HorizontalPanel_0 , $add_10(f_HorizontalPanel6, (f_VerticalPanel7 = new VerticalPanel_0 , $add_12(f_VerticalPanel7, (f_Label8 = new Label_0 , f_Label8.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label8.directionalTextHelper, 'Maturit\xE9 Suisse', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_12(f_VerticalPanel7, (f_Grid9 = new Grid_0 , $resizeColumns(f_Grid9, 4) , $resizeRows(f_Grid9, 5) , $setWidget_3(f_Grid9, 0, 0, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label10.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_3(f_Grid9, 0, 1, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Jour', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_3(f_Grid9, 0, 2, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Mois', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_3(f_Grid9, 0, 3, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'Ann\xE9e', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_3(f_Grid9, 1, 0, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, 'Trimestre 1 :', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_3(f_Grid9, 1, 1, (dayMatuT1 = new ListBox_0 , this$static.owner.dayMatuT1 = dayMatuT1 , dayMatuT1)) , $setWidget_3(f_Grid9, 1, 2, (monthMatuT1 = new ListBox_0 , this$static.owner.monthMatuT1 = monthMatuT1 , monthMatuT1)) , $setWidget_3(f_Grid9, 1, 3, (yearMatuT1 = new ListBox_0 , this$static.owner.yearMatuT1 = yearMatuT1 , yearMatuT1)) , $setWidget_3(f_Grid9, 2, 0, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'Trimestre 2 :', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_3(f_Grid9, 2, 1, (dayMatuT2 = new ListBox_0 , this$static.owner.dayMatuT2 = dayMatuT2 , dayMatuT2)) , $setWidget_3(f_Grid9, 2, 2, (monthMatuT2 = new ListBox_0 , this$static.owner.monthMatuT2 = monthMatuT2 , monthMatuT2)) , $setWidget_3(f_Grid9, 2, 3, (yearMatuT2 = new ListBox_0 , this$static.owner.yearMatuT2 = yearMatuT2 , yearMatuT2)) , $setWidget_3(f_Grid9, 3, 0, (f_Label16 = new Label_0 , f_Label16.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label16.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label16) , f_Label16.element.style['height'] = '26px' , f_Label16)) , $setWidget_3(f_Grid9, 4, 0, (f_Label17 = new Label_0 , f_Label17.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label17.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $setWidget_3(f_Grid9, 4, 1, (cmdSaveDateMatu = new Button_0 , $setInnerText(cmdSaveDateMatu.element, 'Enregistrer') , $addDomHandler(cmdSaveDateMatu, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSaveDateMatu)) , f_Grid9.tableElem['cellSpacing'] = 5 , f_Grid9.tableElem['cellPadding'] = 5 , f_Grid9)) , f_VerticalPanel7.element['className'] = 'subSection' , f_VerticalPanel7.element.style['width'] = '' , f_VerticalPanel7)) , $add_10(f_HorizontalPanel6, (f_VerticalPanel18 = new VerticalPanel_0 , $add_12(f_VerticalPanel18, (f_Label19 = new Label_0 , f_Label19.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label19.directionalTextHelper, 'Baccalaur\xE9at Fran\xE7ais', false) , $updateHorizontalAlignment(f_Label19) , f_Label19)) , $add_12(f_VerticalPanel18, (f_Grid20 = new Grid_0 , $resizeColumns(f_Grid20, 4) , $resizeRows(f_Grid20, 5) , $setWidget_3(f_Grid20, 0, 0, (f_Label21 = new Label_0 , f_Label21.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label21.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label21) , f_Label21)) , $setWidget_3(f_Grid20, 0, 1, (f_Label22 = new Label_0 , $setTextOrHtml(f_Label22.directionalTextHelper, 'Jour', false) , $updateHorizontalAlignment(f_Label22) , f_Label22)) , $setWidget_3(f_Grid20, 0, 2, (f_Label23 = new Label_0 , $setTextOrHtml(f_Label23.directionalTextHelper, 'Mois', false) , $updateHorizontalAlignment(f_Label23) , f_Label23)) , $setWidget_3(f_Grid20, 0, 3, (f_Label24 = new Label_0 , $setTextOrHtml(f_Label24.directionalTextHelper, 'Ann\xE9e', false) , $updateHorizontalAlignment(f_Label24) , f_Label24)) , $setWidget_3(f_Grid20, 1, 0, (f_Label25 = new Label_0 , $setTextOrHtml(f_Label25.directionalTextHelper, 'Trimestre 1 :', false) , $updateHorizontalAlignment(f_Label25) , f_Label25)) , $setWidget_3(f_Grid20, 1, 1, (dayBacT1 = new ListBox_0 , this$static.owner.dayBacT1 = dayBacT1 , dayBacT1)) , $setWidget_3(f_Grid20, 1, 2, (monthBacT1 = new ListBox_0 , this$static.owner.monthBacT1 = monthBacT1 , monthBacT1)) , $setWidget_3(f_Grid20, 1, 3, (yearBacT1 = new ListBox_0 , this$static.owner.yearBacT1 = yearBacT1 , yearBacT1)) , $setWidget_3(f_Grid20, 2, 0, (f_Label26 = new Label_0 , $setTextOrHtml(f_Label26.directionalTextHelper, 'Trimestre 2 :', false) , $updateHorizontalAlignment(f_Label26) , f_Label26)) , $setWidget_3(f_Grid20, 2, 1, (dayBacT2 = new ListBox_0 , this$static.owner.dayBacT2 = dayBacT2 , dayBacT2)) , $setWidget_3(f_Grid20, 2, 2, (monthBacT2 = new ListBox_0 , this$static.owner.monthBacT2 = monthBacT2 , monthBacT2)) , $setWidget_3(f_Grid20, 2, 3, (yearBacT2 = new ListBox_0 , this$static.owner.yearBacT2 = yearBacT2 , yearBacT2)) , $setWidget_3(f_Grid20, 3, 0, (f_Label27 = new Label_0 , $setTextOrHtml(f_Label27.directionalTextHelper, 'Trimestre 3 :', false) , $updateHorizontalAlignment(f_Label27) , f_Label27)) , $setWidget_3(f_Grid20, 3, 1, (dayBacT3 = new ListBox_0 , this$static.owner.dayBacT3 = dayBacT3 , dayBacT3)) , $setWidget_3(f_Grid20, 3, 2, (monthBacT3 = new ListBox_0 , this$static.owner.monthBacT3 = monthBacT3 , monthBacT3)) , $setWidget_3(f_Grid20, 3, 3, (yearBacT3 = new ListBox_0 , this$static.owner.yearBacT3 = yearBacT3 , yearBacT3)) , $setWidget_3(f_Grid20, 4, 0, (f_Label28 = new Label_0 , f_Label28.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label28.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label28) , f_Label28)) , $setWidget_3(f_Grid20, 4, 1, (cmdSaveDateBac = new Button_0 , $setInnerText(cmdSaveDateBac.element, 'Enregistrer') , $addDomHandler(cmdSaveDateBac, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, TYPE_0) , cmdSaveDateBac)) , f_Grid20.tableElem['cellSpacing'] = 5 , f_Grid20.tableElem['cellPadding'] = 5 , f_Grid20)) , f_VerticalPanel18.element['className'] = 'subSection' , f_VerticalPanel18)) , f_HorizontalPanel6.table['cellSpacing'] = 5 , f_HorizontalPanel6)) , $add_12(f_VerticalPanel5, (f_HorizontalPanel29 = new HorizontalPanel_0 , $add_10(f_HorizontalPanel29, (f_VerticalPanel30 = new VerticalPanel_0 , $add_12(f_VerticalPanel30, (f_Label31 = new Label_0 , f_Label31.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label31.directionalTextHelper, 'Etudes Secondaires', false) , $updateHorizontalAlignment(f_Label31) , f_Label31)) , $add_12(f_VerticalPanel30, (f_Grid32 = new Grid_0 , $resizeColumns(f_Grid32, 4) , $resizeRows(f_Grid32, 4) , $setWidget_3(f_Grid32, 0, 0, (f_Label33 = new Label_0 , $setTextOrHtml(f_Label33.directionalTextHelper, 'Trimestre 1 :', false) , $updateHorizontalAlignment(f_Label33) , f_Label33)) , $setWidget_3(f_Grid32, 0, 1, (dayEST1 = new ListBox_0 , this$static.owner.dayEST1 = dayEST1 , dayEST1)) , $setWidget_3(f_Grid32, 0, 2, (monthEST1 = new ListBox_0 , this$static.owner.monthEST1 = monthEST1 , monthEST1)) , $setWidget_3(f_Grid32, 0, 3, (yearEST1 = new ListBox_0 , this$static.owner.yearEST1 = yearEST1 , yearEST1)) , $setWidget_3(f_Grid32, 1, 0, (f_Label34 = new Label_0 , $setTextOrHtml(f_Label34.directionalTextHelper, 'Trimestre 2 :', false) , $updateHorizontalAlignment(f_Label34) , f_Label34)) , $setWidget_3(f_Grid32, 1, 1, (dayEST2 = new ListBox_0 , this$static.owner.dayEST2 = dayEST2 , dayEST2)) , $setWidget_3(f_Grid32, 1, 2, (monthEST2 = new ListBox_0 , this$static.owner.monthEST2 = monthEST2 , monthEST2)) , $setWidget_3(f_Grid32, 1, 3, (yearEST2 = new ListBox_0 , this$static.owner.yearEST2 = yearEST2 , yearEST2)) , $setWidget_3(f_Grid32, 2, 0, (f_Label35 = new Label_0 , $setTextOrHtml(f_Label35.directionalTextHelper, 'Trimestre 3 :', false) , $updateHorizontalAlignment(f_Label35) , f_Label35)) , $setWidget_3(f_Grid32, 2, 1, (dayEST3 = new ListBox_0 , this$static.owner.dayEST3 = dayEST3 , dayEST3)) , $setWidget_3(f_Grid32, 2, 2, (monthEST3 = new ListBox_0 , this$static.owner.monthEST3 = monthEST3 , monthEST3)) , $setWidget_3(f_Grid32, 2, 3, (yearEST3 = new ListBox_0 , this$static.owner.yearEST3 = yearEST3 , yearEST3)) , $setWidget_3(f_Grid32, 3, 0, (f_Label36 = new Label_0 , f_Label36.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label36.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label36) , f_Label36)) , $setWidget_3(f_Grid32, 3, 1, (cmdSaveDateES = new Button_0 , $setInnerText(cmdSaveDateES.element, 'Enregistrer') , $addDomHandler(cmdSaveDateES, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_0) , cmdSaveDateES)) , f_Grid32.tableElem['cellSpacing'] = 5 , f_Grid32.tableElem['cellPadding'] = 5 , f_Grid32)) , f_VerticalPanel30.element['className'] = 'subSection' , f_VerticalPanel30.element.style['width'] = '' , f_VerticalPanel30)) , f_HorizontalPanel29.table['cellSpacing'] = 5 , f_HorizontalPanel29)) , $add_12(f_VerticalPanel5, (pnlAdmin = new FlowPanel_0 , $add_8(pnlAdmin, (f_Label37 = new Label_0 , f_Label37.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label37.directionalTextHelper, 'Admin', false) , $updateHorizontalAlignment(f_Label37) , f_Label37)) , $add_8(pnlAdmin, (f_Grid38 = new Grid_0 , $resizeColumns(f_Grid38, 4) , $resizeRows(f_Grid38, 4) , $setWidget_3(f_Grid38, 0, 0, (f_Label39 = new Label_0 , $setTextOrHtml(f_Label39.directionalTextHelper, "Bloquer automatiquement l'acc\xE8s au syst\xE8me le", false) , $updateHorizontalAlignment(f_Label39) , f_Label39)) , $setWidget_3(f_Grid38, 0, 1, (lstDays = new ListBox_0 , this$static.owner.lstDays = lstDays , lstDays)) , $setWidget_3(f_Grid38, 0, 2, (f_Label40 = new Label_0 , $setTextOrHtml(f_Label40.directionalTextHelper, 'tous les mois.', false) , $updateHorizontalAlignment(f_Label40) , f_Label40)) , $setWidget_3(f_Grid38, 1, 0, (f_Label41 = new Label_0 , $setTextOrHtml(f_Label41.directionalTextHelper, "Bloquer l'acc\xE8s d\xE8s MAINTENANT", false) , $updateHorizontalAlignment(f_Label41) , f_Label41)) , $setWidget_3(f_Grid38, 1, 1, (blnBlock = new SimpleCheckBox_0 , this$static.owner.blnBlock = blnBlock , blnBlock)) , $setWidget_3(f_Grid38, 2, 0, (f_Label42 = new Label_0 , $setTextOrHtml(f_Label42.directionalTextHelper, 'Ecole :', false) , $updateHorizontalAlignment(f_Label42) , f_Label42)) , $setWidget_3(f_Grid38, 2, 1, (lstEcoles = new ListBox_0 , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_3(f_Grid38, 2, 2, (f_Label43 = new Label_0 , $setTextOrHtml(f_Label43.directionalTextHelper, '', false) , $updateHorizontalAlignment(f_Label43) , f_Label43)) , $setWidget_3(f_Grid38, 2, 3, (lblUpdateStatus = new Label_0 , this$static.owner.lblUpdateStatus = lblUpdateStatus , lblUpdateStatus)) , $setWidget_3(f_Grid38, 3, 0, new Label_0) , $setWidget_3(f_Grid38, 3, 1, (cmdSave = new Button_0 , $setInnerText(cmdSave.element, 'Enregistrer') , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_0) , cmdSave)) , f_Grid38.element.style['width'] = '' , f_Grid38.tableElem['cellSpacing'] = 5 , f_Grid38.tableElem['cellPadding'] = 5 , f_Grid38)) , $add_8(pnlAdmin, (f_Label45 = new Label_0 , f_Label45.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label45.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label45) , f_Label45)) , $add_8(pnlAdmin, (f_Grid46 = new Grid_0 , $resizeColumns(f_Grid46, 2) , $resizeRows(f_Grid46, 1) , $setWidget_3(f_Grid46, 0, 0, (f_Label47 = new Label_0 , $setTextOrHtml(f_Label47.directionalTextHelper, 'Fixer le format des noms des \xE9l\xE8ves dans Users', false) , $updateHorizontalAlignment(f_Label47) , f_Label47)) , $setWidget_3(f_Grid46, 0, 1, (cmdFixStudentName = new Button_0 , $setInnerText(cmdFixStudentName.element, 'Fixer') , $addDomHandler(cmdFixStudentName, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , cmdFixStudentName)) , f_Grid46.tableElem['cellSpacing'] = 5 , f_Grid46.tableElem['cellPadding'] = 5 , f_Grid46)) , $add_8(pnlAdmin, (f_Label48 = new Label_0 , f_Label48.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label48.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label48) , f_Label48)) , pnlAdmin.element['className'] = 'subSection' , pnlAdmin.element.style['width'] = '550px' , this$static.owner.pnlAdmin = pnlAdmin , pnlAdmin)) , f_VerticalPanel5.table['cellSpacing'] = 10 , f_VerticalPanel5)) , f_VerticalPanel2.element.style['height'] = '' , f_VerticalPanel2.element.style['width'] = '939px' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function SettingsView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new SettingsView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new SettingsView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new SettingsView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new SettingsView_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new SettingsView_BinderImpl$Widgets$5_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1772, 1, {}, SettingsView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function SettingsView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1773, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_48(event_0){
  $onCmdSaveClick_8(this.this$1.owner);
}
;
_.this$1 = null;
function SettingsView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1774, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_49(event_0){
  $fixStudentName(dynamicCast(this.this$1.owner.uiHandlers, Q$SettingOptionsUiHandler));
}
;
_.this$1 = null;
function SettingsView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1775, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$3_0);
_.onClick = function onClick_50(event_0){
  $onCmdSaveDateMatuClick(this.this$1.owner);
}
;
_.this$1 = null;
function SettingsView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1776, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$4_0);
_.onClick = function onClick_51(event_0){
  $onCmdSaveDateESClick(this.this$1.owner);
}
;
_.this$1 = null;
function SettingsView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1777, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$5_0);
_.onClick = function onClick_52(event_0){
  $onCmdSaveDateBacClick(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_22(arg0){
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

defineSeed(2006, 722, makeCastMap([Q$AbstractRequest]), SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_85(){
  return new RequestData_0('NnkxwQJ8$x3Hd9pypFvVJfCdkfw=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$optionName, this.val$optionValue]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$optionName = null;
_.val$optionValue = null;
function UserRequestFactory_UserRequestContextImpl$4X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(2037, 722, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_101(){
  return new RequestData_0('DOJYc7qjW4vsc8dfeFArmqCr9RQ=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
var Lcom_lemania_sis_client_presenter_SettingsPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter', 1434), Lcom_lemania_sis_client_presenter_SettingsPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$1', 1435), Lcom_lemania_sis_client_presenter_SettingsPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$2', 1436), Lcom_lemania_sis_client_presenter_SettingsPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$3', 1437), Lcom_lemania_sis_client_presenter_SettingsPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$4', 1438), Lcom_lemania_sis_client_presenter_SettingsPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$5', 1439), Lcom_lemania_sis_client_presenter_SettingsPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$6', 1440), Lcom_lemania_sis_client_view_SettingsView_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView', 1770), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl', 1771), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets', 1772), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets$1', 1773), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets$2', 1774), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets$3', 1775), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets$4', 1776), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets$5', 1777), Lcom_lemania_sis_shared_service_SettingOptionRequestFactory_1SettingOptionRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X', 2006), Lcom_lemania_sis_shared_user_UserRequestFactory_1UserRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.user.', 'UserRequestFactory_UserRequestContextImpl$4X', 2037);
$entry(onLoad)(24);
