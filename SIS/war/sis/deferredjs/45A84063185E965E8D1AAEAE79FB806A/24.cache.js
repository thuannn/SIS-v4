function $fixStudentName(this$static){
  var rc, rf, x_0;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire((x_0 = new UserRequestFactory_UserRequestContextImpl$4X_0(rc) , $addInvocation(rc.state.dialect, x_0) , x_0), new SettingsPresenter$5_0);
}

function $saveDeadline(this$static, code_0, value_0){
  var rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($save_2(rc, code_0, value_0), new SettingsPresenter$6_0(this$static));
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
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(1050, 704, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$SettingsPresenter, Q$SettingOptionsUiHandler]), SettingsPresenter_0);
_.onBind = function onBind_26(){
  dynamicCast(this.view, Q$SettingsPresenter$MyView).setUiHandlers(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_51(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_25(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('settings'), null);
  $equals_5(this.currentUser.userEmail, 'thuannn@gmail.com')?$initializeInterface(dynamicCast(this.view, Q$SettingsPresenter$MyView), true):$initializeInterface(dynamicCast(this.view, Q$SettingsPresenter$MyView), false);
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($listAll_6(rc), new SettingsPresenter$2_0(this));
}
;
_.revealInParent = function revealInParent_25(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_116(this$static){
  $setText_1(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1051, 643, makeCastMap([Q$Receiver]), SettingsPresenter$1_0);
_.onFailure_0 = function onFailure_120(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_120(response){
  $onSuccess_116(this, throwClassCastExceptionUnlessNull(response));
}
;
function $onSuccess_117(this$static, response){
  $populateCurrentSettings(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), response);
}

function SettingsPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1052, 643, makeCastMap([Q$Receiver]), SettingsPresenter$2_0);
_.onFailure_0 = function onFailure_121(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_121(response){
  $onSuccess_117(this, dynamicCast(response, Q$List));
}
;
function $onSuccess_118(this$static){
  $setText_1(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1053, 643, makeCastMap([Q$Receiver]), SettingsPresenter$3_0);
_.onFailure_0 = function onFailure_122(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_122(response){
  $onSuccess_118(this, throwClassCastExceptionUnlessNull(response));
}
;
function $onSuccess_119(this$static){
  $setText_1(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1054, 643, makeCastMap([Q$Receiver]), SettingsPresenter$4_0);
_.onFailure_0 = function onFailure_123(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_123(response){
  $onSuccess_119(this, throwClassCastExceptionUnlessNull(response));
}
;
function SettingsPresenter$5_0(){
}

defineSeed(1055, 643, makeCastMap([Q$Receiver]), SettingsPresenter$5_0);
_.onFailure_0 = function onFailure_124(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_124(response){
  throwClassCastExceptionUnlessNull(response);
}
;
function $onSuccess_120(this$static){
  $setText_1(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1056, 643, makeCastMap([Q$Receiver]), SettingsPresenter$6_0);
_.onFailure_0 = function onFailure_125(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_125(response){
  $onSuccess_120(this, throwClassCastExceptionUnlessNull(response));
}
;
function $get_Key$type$com$lemania$sis$client$presenter$SettingsPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$SettingsPresenter$_annotation$$none$$) {
    result = new SettingsPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$SettingsView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$SettingsPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$SettingsPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$SettingsPresenter$_annotation$$none$$;
}

defineSeed(1130, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_155(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$SettingsPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $clearDateLists(this$static){
  $selectClear($getSelectElement(this$static.dayMatuT1));
  $selectClear($getSelectElement(this$static.dayMatuT2));
  $selectClear($getSelectElement(this$static.dayEST1));
  $selectClear($getSelectElement(this$static.dayEST2));
  $selectClear($getSelectElement(this$static.dayEST3));
  $selectClear($getSelectElement(this$static.dayBacT1));
  $selectClear($getSelectElement(this$static.dayBacT2));
  $selectClear($getSelectElement(this$static.dayBacT3));
  $selectClear($getSelectElement(this$static.monthMatuT1));
  $selectClear($getSelectElement(this$static.monthMatuT2));
  $selectClear($getSelectElement(this$static.monthEST1));
  $selectClear($getSelectElement(this$static.monthEST2));
  $selectClear($getSelectElement(this$static.monthEST3));
  $selectClear($getSelectElement(this$static.monthBacT1));
  $selectClear($getSelectElement(this$static.monthBacT2));
  $selectClear($getSelectElement(this$static.monthBacT3));
  $selectClear($getSelectElement(this$static.yearMatuT1));
  $selectClear($getSelectElement(this$static.yearMatuT2));
  $selectClear($getSelectElement(this$static.yearEST1));
  $selectClear($getSelectElement(this$static.yearEST2));
  $selectClear($getSelectElement(this$static.yearEST3));
  $selectClear($getSelectElement(this$static.yearBacT1));
  $selectClear($getSelectElement(this$static.yearBacT2));
  $selectClear($getSelectElement(this$static.yearBacT3));
}

function $initializeDayList(dayList){
  var i;
  for (i = 0; i < 31; i++)
    $insertItem(dayList, '' + (i + 1), i + 1 < 10?'0' + (i + 1):'' + (i + 1), -1);
}

function $initializeInterface(this$static, isAdmin){
  var i;
  for (i = 0; i < 31; i++)
    $insertItem(this$static.lstDays, '' + (i + 1), '' + i, -1);
  $setText_1(this$static.lblUpdateStatus, '');
  $selectClear($getSelectElement(this$static.lstEcoles));
  $insertItem(this$static.lstEcoles, '-', '', -1);
  $insertItem(this$static.lstEcoles, 'Ecole Lemania', ($clinit_NotificationTypes() , 'LM'), -1);
  $insertItem(this$static.lstEcoles, 'Pierre Viret', 'PV', -1);
  $clearDateLists(this$static);
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
  for (i = 0; i < 12; i++)
    $insertItem(monthList, '' + (i + 1), i + 1 < 10?'0' + (i + 1):'' + (i + 1), -1);
}

function $initializeYearList(yearList){
  var i;
  for (i = 0; i < 10; i++)
    $insertItem(yearList, '' + (i + 2013), '' + (i + 2013), -1);
}

function $onCmdSaveClick_6(this$static){
  if (this$static.uiHandlers) {
    $updateSettingOptionDeadline(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getItemText(this$static.lstDays, $getSelectElement(this$static.lstDays).selectedIndex));
    $updateSettingOptionManualBlock(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_2(this$static.blnBlock));
    $updateCurrentEcole(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_1(this$static.lstEcoles, $getSelectElement(this$static.lstEcoles).selectedIndex));
  }
}

function $onCmdSaveDateBacClick(this$static){
  $updateDeadlinesBAC(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_1(this$static.yearBacT1, $getSelectElement(this$static.yearBacT1).selectedIndex) + $getValue_1(this$static.monthBacT1, $getSelectElement(this$static.monthBacT1).selectedIndex) + $getValue_1(this$static.dayBacT1, $getSelectElement(this$static.dayBacT1).selectedIndex), $getValue_1(this$static.yearBacT2, $getSelectElement(this$static.yearBacT2).selectedIndex) + $getValue_1(this$static.monthBacT2, $getSelectElement(this$static.monthBacT2).selectedIndex) + $getValue_1(this$static.dayBacT2, $getSelectElement(this$static.dayBacT2).selectedIndex), $getValue_1(this$static.yearBacT3, $getSelectElement(this$static.yearBacT3).selectedIndex) + $getValue_1(this$static.monthBacT3, $getSelectElement(this$static.monthBacT3).selectedIndex) + $getValue_1(this$static.dayBacT3, $getSelectElement(this$static.dayBacT3).selectedIndex));
}

function $onCmdSaveDateESClick(this$static){
  $updateDeadlinesES(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_1(this$static.yearEST1, $getSelectElement(this$static.yearEST1).selectedIndex) + $getValue_1(this$static.monthEST1, $getSelectElement(this$static.monthEST1).selectedIndex) + $getValue_1(this$static.dayEST1, $getSelectElement(this$static.dayEST1).selectedIndex), $getValue_1(this$static.yearEST2, $getSelectElement(this$static.yearEST2).selectedIndex) + $getValue_1(this$static.monthEST2, $getSelectElement(this$static.monthEST2).selectedIndex) + $getValue_1(this$static.dayEST2, $getSelectElement(this$static.dayEST2).selectedIndex), $getValue_1(this$static.yearEST3, $getSelectElement(this$static.yearEST3).selectedIndex) + $getValue_1(this$static.monthEST3, $getSelectElement(this$static.monthEST3).selectedIndex) + $getValue_1(this$static.dayEST3, $getSelectElement(this$static.dayEST3).selectedIndex));
}

function $onCmdSaveDateMatuClick(this$static){
  $updateDeadlinesMatu(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_1(this$static.yearMatuT1, $getSelectElement(this$static.yearMatuT1).selectedIndex) + $getValue_1(this$static.monthMatuT1, $getSelectElement(this$static.monthMatuT1).selectedIndex) + $getValue_1(this$static.dayMatuT1, $getSelectElement(this$static.dayMatuT1).selectedIndex), $getValue_1(this$static.yearMatuT2, $getSelectElement(this$static.yearMatuT2).selectedIndex) + $getValue_1(this$static.monthMatuT2, $getSelectElement(this$static.monthMatuT2).selectedIndex) + $getValue_1(this$static.dayMatuT2, $getSelectElement(this$static.dayMatuT2).selectedIndex));
}

function $populateCurrentSettings(this$static, settingOptions){
  var i, setting, setting$iterator;
  for (setting$iterator = settingOptions.iterator(); setting$iterator.hasNext();) {
    setting = dynamicCast(setting$iterator.next_0(), Q$SettingOptionProxy);
    $equals_5(setting.getOptionName(), 'DEADLINE') && $setSelectedIndex_0(this$static.lstDays, __parseAndValidateInt(setting.getOptionValue()) - 1);
    $equals_5(setting.getOptionName(), 'BLOCK') && $setValue_1(this$static.blnBlock, ($clinit_Boolean() , $clinit_Boolean() , $equalsIgnoreCase('true', setting.getOptionValue())?TRUE_1:FALSE_1));
    if ($equals_5(setting.getOptionName(), 'ECOLE')) {
      for (i = 0; i < $getSelectElement(this$static.lstEcoles).options.length; i++)
        $equals_5($getValue_1(this$static.lstEcoles, i), setting.getOptionValue()) && $setSelectedIndex_0(this$static.lstEcoles, i);
    }
    $equals_5(setting.getOptionName(), ($clinit_NotificationTypes() , 'BLOCK_MATU_T1')) && $setSelectedDate(setting.getOptionValue(), this$static.dayMatuT1, this$static.monthMatuT1, this$static.yearMatuT1);
    $equals_5(setting.getOptionName(), 'BLOCK_MATU_T2') && $setSelectedDate(setting.getOptionValue(), this$static.dayMatuT2, this$static.monthMatuT2, this$static.yearMatuT2);
    $equals_5(setting.getOptionName(), 'BLOCK_ES_T1') && $setSelectedDate(setting.getOptionValue(), this$static.dayEST1, this$static.monthEST1, this$static.yearEST1);
    $equals_5(setting.getOptionName(), 'BLOCK_ES_T2') && $setSelectedDate(setting.getOptionValue(), this$static.dayEST2, this$static.monthEST2, this$static.yearEST2);
    $equals_5(setting.getOptionName(), 'BLOCK_ES_T3') && $setSelectedDate(setting.getOptionValue(), this$static.dayEST3, this$static.monthEST3, this$static.yearEST3);
    $equals_5(setting.getOptionName(), 'BLOCK_BAC_T1') && $setSelectedDate(setting.getOptionValue(), this$static.dayBacT1, this$static.monthBacT1, this$static.yearBacT1);
    $equals_5(setting.getOptionName(), 'BLOCK_BAC_T2') && $setSelectedDate(setting.getOptionValue(), this$static.dayBacT2, this$static.monthBacT2, this$static.yearBacT2);
    $equals_5(setting.getOptionName(), 'BLOCK_BAC_T3') && $setSelectedDate(setting.getOptionValue(), this$static.dayBacT3, this$static.monthBacT3, this$static.yearBacT3);
  }
}

function $setSelectedDate(optionValue, dayList, monthList, yearList){
  if ($equals_5(optionValue, ''))
    return;
  $setSelectedIndex_0(dayList, __parseAndValidateInt($substring_0(optionValue, 6, 8)) - 1);
  $setSelectedIndex_0(monthList, __parseAndValidateInt($substring_0(optionValue, 4, 6)) - 1);
  $setSelectedIndex_0(yearList, __parseAndValidateInt($substring_0(optionValue, 0, 4)) - 2013);
}

function SettingsView_0(){
  this.widget = $build_f_HTMLPanel1_23(new SettingsView_BinderImpl$Widgets_0(this));
}

defineSeed(1445, 709, makeCastMap([Q$IsWidget, Q$SettingsPresenter$MyView, Q$SettingsView]), SettingsView_0);
_.asWidget = function asWidget_28(){
  return this.widget;
}
;
function SettingsView_BinderImpl_0(){
}

defineSeed(1446, 1, {}, SettingsView_BinderImpl_0);
function $build_f_Grid20(this$static){
  var f_Grid20, f_Label21, f_Label22, f_Label23, f_Label24, f_Label25, dayBacT1, monthBacT1, yearBacT1, f_Label26, dayBacT2, monthBacT2, yearBacT2, f_Label27, dayBacT3, monthBacT3, yearBacT3, f_Label28, cmdSaveDateBac;
  f_Grid20 = new Grid_0;
  $resizeColumns(f_Grid20, 4);
  $resizeRows(f_Grid20, 5);
  $setWidget_1(f_Grid20, 0, 0, (f_Label21 = new Label_0 , $setClassName(($clinit_DOM() , f_Label21.element), 'hiddenText') , $setTextOrHtml(f_Label21.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label21) , f_Label21));
  $setWidget_1(f_Grid20, 0, 1, (f_Label22 = new Label_0 , $setTextOrHtml(f_Label22.directionalTextHelper, 'Jour', false) , $updateHorizontalAlignment(f_Label22) , f_Label22));
  $setWidget_1(f_Grid20, 0, 2, (f_Label23 = new Label_0 , $setTextOrHtml(f_Label23.directionalTextHelper, 'Mois', false) , $updateHorizontalAlignment(f_Label23) , f_Label23));
  $setWidget_1(f_Grid20, 0, 3, (f_Label24 = new Label_0 , $setTextOrHtml(f_Label24.directionalTextHelper, 'Ann\xE9e', false) , $updateHorizontalAlignment(f_Label24) , f_Label24));
  $setWidget_1(f_Grid20, 1, 0, (f_Label25 = new Label_0 , $setTextOrHtml(f_Label25.directionalTextHelper, 'Trimestre 1 :', false) , $updateHorizontalAlignment(f_Label25) , f_Label25));
  $setWidget_1(f_Grid20, 1, 1, (dayBacT1 = new ListBox_0 , this$static.owner.dayBacT1 = dayBacT1 , dayBacT1));
  $setWidget_1(f_Grid20, 1, 2, (monthBacT1 = new ListBox_0 , this$static.owner.monthBacT1 = monthBacT1 , monthBacT1));
  $setWidget_1(f_Grid20, 1, 3, (yearBacT1 = new ListBox_0 , this$static.owner.yearBacT1 = yearBacT1 , yearBacT1));
  $setWidget_1(f_Grid20, 2, 0, (f_Label26 = new Label_0 , $setTextOrHtml(f_Label26.directionalTextHelper, 'Trimestre 2 :', false) , $updateHorizontalAlignment(f_Label26) , f_Label26));
  $setWidget_1(f_Grid20, 2, 1, (dayBacT2 = new ListBox_0 , this$static.owner.dayBacT2 = dayBacT2 , dayBacT2));
  $setWidget_1(f_Grid20, 2, 2, (monthBacT2 = new ListBox_0 , this$static.owner.monthBacT2 = monthBacT2 , monthBacT2));
  $setWidget_1(f_Grid20, 2, 3, (yearBacT2 = new ListBox_0 , this$static.owner.yearBacT2 = yearBacT2 , yearBacT2));
  $setWidget_1(f_Grid20, 3, 0, (f_Label27 = new Label_0 , $setTextOrHtml(f_Label27.directionalTextHelper, 'Trimestre 3 :', false) , $updateHorizontalAlignment(f_Label27) , f_Label27));
  $setWidget_1(f_Grid20, 3, 1, (dayBacT3 = new ListBox_0 , this$static.owner.dayBacT3 = dayBacT3 , dayBacT3));
  $setWidget_1(f_Grid20, 3, 2, (monthBacT3 = new ListBox_0 , this$static.owner.monthBacT3 = monthBacT3 , monthBacT3));
  $setWidget_1(f_Grid20, 3, 3, (yearBacT3 = new ListBox_0 , this$static.owner.yearBacT3 = yearBacT3 , yearBacT3));
  $setWidget_1(f_Grid20, 4, 0, (f_Label28 = new Label_0 , $setClassName(f_Label28.element, 'hiddenText') , $setTextOrHtml(f_Label28.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label28) , f_Label28));
  $setWidget_1(f_Grid20, 4, 1, (cmdSaveDateBac = new Button_0 , $setInnerText(cmdSaveDateBac.element, 'Enregistrer') , $addDomHandler(cmdSaveDateBac, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSaveDateBac));
  $setPropertyInt(f_Grid20.tableElem, 'cellSpacing', 5);
  $setPropertyInt(f_Grid20.tableElem, 'cellPadding', 5);
  return f_Grid20;
}

function $build_f_HTMLPanel1_23(this$static){
  var attachRecord23, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Label4, f_VerticalPanel5, f_HorizontalPanel6, f_VerticalPanel7, f_VerticalPanel18, f_HorizontalPanel29, f_VerticalPanel30, pnlAdmin, f_Label8, f_Grid9, f_Label10, f_Label11, f_Label12, f_Label13, f_Label14, dayMatuT1, monthMatuT1, yearMatuT1, f_Label15, dayMatuT2, monthMatuT2, yearMatuT2, f_Label16, f_Label17, cmdSaveDateMatu, f_Label19, f_Label31, f_Grid32, f_Label33, dayEST1, monthEST1, yearEST1, f_Label34, dayEST2, monthEST2, yearEST2, f_Label35, dayEST3, monthEST3, yearEST3, f_Label36, cmdSaveDateES, f_Label37, f_Grid38, f_Label39, lstDays, f_Label40, f_Label41, blnBlock, f_Label42, lstEcoles, f_Label43, lblUpdateStatus, cmdSave, f_Label45, f_Grid46, f_Label47, cmdFixStudentName, f_Label48;
  f_HTMLPanel1 = new HTMLPanel_0($html1_16(this$static.domId0).html);
  ($clinit_DOM() , f_HTMLPanel1.element).style['width'] = '100%';
  attachRecord23 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord23.origParent?$insertBefore(attachRecord23.origParent, attachRecord23.element, attachRecord23.origSibling):orphan(attachRecord23.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , $setClassName(f_Label3.element, 'pageTitle') , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, "GESTION DE L'ACCES", false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_Label4 = new Label_0 , $setTextOrHtml(f_Label4.directionalTextHelper, 'Choisir la date de blocage pour chaque trimestre de chaque programme.', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , $add_11(f_VerticalPanel2, (f_VerticalPanel5 = new VerticalPanel_0 , $add_11(f_VerticalPanel5, (f_HorizontalPanel6 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel6, (f_VerticalPanel7 = new VerticalPanel_0 , $add_11(f_VerticalPanel7, (f_Label8 = new Label_0 , $setClassName(f_Label8.element, 'sectionTitle') , $setTextOrHtml(f_Label8.directionalTextHelper, 'Maturit\xE9 Suisse', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_11(f_VerticalPanel7, (f_Grid9 = new Grid_0 , $resizeColumns(f_Grid9, 4) , $resizeRows(f_Grid9, 5) , $setWidget_1(f_Grid9, 0, 0, (f_Label10 = new Label_0 , $setClassName(f_Label10.element, 'hiddenText') , $setTextOrHtml(f_Label10.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid9, 0, 1, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Jour', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid9, 0, 2, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Mois', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_1(f_Grid9, 0, 3, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'Ann\xE9e', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_1(f_Grid9, 1, 0, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, 'Trimestre 1 :', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_1(f_Grid9, 1, 1, (dayMatuT1 = new ListBox_0 , this$static.owner.dayMatuT1 = dayMatuT1 , dayMatuT1)) , $setWidget_1(f_Grid9, 1, 2, (monthMatuT1 = new ListBox_0 , this$static.owner.monthMatuT1 = monthMatuT1 , monthMatuT1)) , $setWidget_1(f_Grid9, 1, 3, (yearMatuT1 = new ListBox_0 , this$static.owner.yearMatuT1 = yearMatuT1 , yearMatuT1)) , $setWidget_1(f_Grid9, 2, 0, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'Trimestre 2 :', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_1(f_Grid9, 2, 1, (dayMatuT2 = new ListBox_0 , this$static.owner.dayMatuT2 = dayMatuT2 , dayMatuT2)) , $setWidget_1(f_Grid9, 2, 2, (monthMatuT2 = new ListBox_0 , this$static.owner.monthMatuT2 = monthMatuT2 , monthMatuT2)) , $setWidget_1(f_Grid9, 2, 3, (yearMatuT2 = new ListBox_0 , this$static.owner.yearMatuT2 = yearMatuT2 , yearMatuT2)) , $setWidget_1(f_Grid9, 3, 0, (f_Label16 = new Label_0 , $setClassName(f_Label16.element, 'hiddenText') , $setTextOrHtml(f_Label16.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label16) , f_Label16.element.style['height'] = '26px' , f_Label16)) , $setWidget_1(f_Grid9, 4, 0, (f_Label17 = new Label_0 , $setClassName(f_Label17.element, 'hiddenText') , $setTextOrHtml(f_Label17.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $setWidget_1(f_Grid9, 4, 1, (cmdSaveDateMatu = new Button_0 , $setInnerText(cmdSaveDateMatu.element, 'Enregistrer') , $addDomHandler(cmdSaveDateMatu, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSaveDateMatu)) , $setPropertyInt(f_Grid9.tableElem, 'cellSpacing', 5) , $setPropertyInt(f_Grid9.tableElem, 'cellPadding', 5) , f_Grid9)) , $setClassName(f_VerticalPanel7.element, 'subSection') , f_VerticalPanel7.element.style['width'] = '' , f_VerticalPanel7)) , $add_9(f_HorizontalPanel6, (f_VerticalPanel18 = new VerticalPanel_0 , $add_11(f_VerticalPanel18, (f_Label19 = new Label_0 , $setClassName(f_Label19.element, 'sectionTitle') , $setTextOrHtml(f_Label19.directionalTextHelper, 'Baccalaur\xE9at Fran\xE7ais', false) , $updateHorizontalAlignment(f_Label19) , f_Label19)) , $add_11(f_VerticalPanel18, $build_f_Grid20(this$static)) , $setClassName(f_VerticalPanel18.element, 'subSection') , f_VerticalPanel18)) , $setPropertyInt(f_HorizontalPanel6.table, 'cellSpacing', 5) , f_HorizontalPanel6)) , $add_11(f_VerticalPanel5, (f_HorizontalPanel29 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel29, (f_VerticalPanel30 = new VerticalPanel_0 , $add_11(f_VerticalPanel30, (f_Label31 = new Label_0 , $setClassName(f_Label31.element, 'sectionTitle') , $setTextOrHtml(f_Label31.directionalTextHelper, 'Etudes Secondaires', false) , $updateHorizontalAlignment(f_Label31) , f_Label31)) , $add_11(f_VerticalPanel30, (f_Grid32 = new Grid_0 , $resizeColumns(f_Grid32, 4) , $resizeRows(f_Grid32, 4) , $setWidget_1(f_Grid32, 0, 0, (f_Label33 = new Label_0 , $setTextOrHtml(f_Label33.directionalTextHelper, 'Trimestre 1 :', false) , $updateHorizontalAlignment(f_Label33) , f_Label33)) , $setWidget_1(f_Grid32, 0, 1, (dayEST1 = new ListBox_0 , this$static.owner.dayEST1 = dayEST1 , dayEST1)) , $setWidget_1(f_Grid32, 0, 2, (monthEST1 = new ListBox_0 , this$static.owner.monthEST1 = monthEST1 , monthEST1)) , $setWidget_1(f_Grid32, 0, 3, (yearEST1 = new ListBox_0 , this$static.owner.yearEST1 = yearEST1 , yearEST1)) , $setWidget_1(f_Grid32, 1, 0, (f_Label34 = new Label_0 , $setTextOrHtml(f_Label34.directionalTextHelper, 'Trimestre 2 :', false) , $updateHorizontalAlignment(f_Label34) , f_Label34)) , $setWidget_1(f_Grid32, 1, 1, (dayEST2 = new ListBox_0 , this$static.owner.dayEST2 = dayEST2 , dayEST2)) , $setWidget_1(f_Grid32, 1, 2, (monthEST2 = new ListBox_0 , this$static.owner.monthEST2 = monthEST2 , monthEST2)) , $setWidget_1(f_Grid32, 1, 3, (yearEST2 = new ListBox_0 , this$static.owner.yearEST2 = yearEST2 , yearEST2)) , $setWidget_1(f_Grid32, 2, 0, (f_Label35 = new Label_0 , $setTextOrHtml(f_Label35.directionalTextHelper, 'Trimestre 3 :', false) , $updateHorizontalAlignment(f_Label35) , f_Label35)) , $setWidget_1(f_Grid32, 2, 1, (dayEST3 = new ListBox_0 , this$static.owner.dayEST3 = dayEST3 , dayEST3)) , $setWidget_1(f_Grid32, 2, 2, (monthEST3 = new ListBox_0 , this$static.owner.monthEST3 = monthEST3 , monthEST3)) , $setWidget_1(f_Grid32, 2, 3, (yearEST3 = new ListBox_0 , this$static.owner.yearEST3 = yearEST3 , yearEST3)) , $setWidget_1(f_Grid32, 3, 0, (f_Label36 = new Label_0 , $setClassName(f_Label36.element, 'hiddenText') , $setTextOrHtml(f_Label36.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label36) , f_Label36)) , $setWidget_1(f_Grid32, 3, 1, (cmdSaveDateES = new Button_0 , $setInnerText(cmdSaveDateES.element, 'Enregistrer') , $addDomHandler(cmdSaveDateES, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_0) , cmdSaveDateES)) , $setPropertyInt(f_Grid32.tableElem, 'cellSpacing', 5) , $setPropertyInt(f_Grid32.tableElem, 'cellPadding', 5) , f_Grid32)) , $setClassName(f_VerticalPanel30.element, 'subSection') , f_VerticalPanel30.element.style['width'] = '' , f_VerticalPanel30)) , $setPropertyInt(f_HorizontalPanel29.table, 'cellSpacing', 5) , f_HorizontalPanel29)) , $add_11(f_VerticalPanel5, (pnlAdmin = new FlowPanel_0 , $add_7(pnlAdmin, (f_Label37 = new Label_0 , $setClassName(f_Label37.element, 'sectionTitle') , $setTextOrHtml(f_Label37.directionalTextHelper, 'Admin', false) , $updateHorizontalAlignment(f_Label37) , f_Label37)) , $add_7(pnlAdmin, (f_Grid38 = new Grid_0 , $resizeColumns(f_Grid38, 4) , $resizeRows(f_Grid38, 4) , $setWidget_1(f_Grid38, 0, 0, (f_Label39 = new Label_0 , $setTextOrHtml(f_Label39.directionalTextHelper, "Bloquer automatiquement l'acc\xE8s au syst\xE8me le", false) , $updateHorizontalAlignment(f_Label39) , f_Label39)) , $setWidget_1(f_Grid38, 0, 1, (lstDays = new ListBox_0 , this$static.owner.lstDays = lstDays , lstDays)) , $setWidget_1(f_Grid38, 0, 2, (f_Label40 = new Label_0 , $setTextOrHtml(f_Label40.directionalTextHelper, 'tous les mois.', false) , $updateHorizontalAlignment(f_Label40) , f_Label40)) , $setWidget_1(f_Grid38, 1, 0, (f_Label41 = new Label_0 , $setTextOrHtml(f_Label41.directionalTextHelper, "Bloquer l'acc\xE8s d\xE8s MAINTENANT", false) , $updateHorizontalAlignment(f_Label41) , f_Label41)) , $setWidget_1(f_Grid38, 1, 1, (blnBlock = new SimpleCheckBox_0 , this$static.owner.blnBlock = blnBlock , blnBlock)) , $setWidget_1(f_Grid38, 2, 0, (f_Label42 = new Label_0 , $setTextOrHtml(f_Label42.directionalTextHelper, 'Ecole :', false) , $updateHorizontalAlignment(f_Label42) , f_Label42)) , $setWidget_1(f_Grid38, 2, 1, (lstEcoles = new ListBox_0 , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_1(f_Grid38, 2, 2, (f_Label43 = new Label_0 , $setTextOrHtml(f_Label43.directionalTextHelper, '', false) , $updateHorizontalAlignment(f_Label43) , f_Label43)) , $setWidget_1(f_Grid38, 2, 3, (lblUpdateStatus = new Label_0 , this$static.owner.lblUpdateStatus = lblUpdateStatus , lblUpdateStatus)) , $setWidget_1(f_Grid38, 3, 0, new Label_0) , $setWidget_1(f_Grid38, 3, 1, (cmdSave = new Button_0 , $setInnerText(cmdSave.element, 'Enregistrer') , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_0) , cmdSave)) , f_Grid38.element.style['width'] = '' , $setPropertyInt(f_Grid38.tableElem, 'cellSpacing', 5) , $setPropertyInt(f_Grid38.tableElem, 'cellPadding', 5) , f_Grid38)) , $add_7(pnlAdmin, (f_Label45 = new Label_0 , $setClassName(f_Label45.element, 'hiddenText') , $setTextOrHtml(f_Label45.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label45) , f_Label45)) , $add_7(pnlAdmin, (f_Grid46 = new Grid_0 , $resizeColumns(f_Grid46, 2) , $resizeRows(f_Grid46, 1) , $setWidget_1(f_Grid46, 0, 0, (f_Label47 = new Label_0 , $setTextOrHtml(f_Label47.directionalTextHelper, 'Fixer le format des noms des \xE9l\xE8ves dans Users', false) , $updateHorizontalAlignment(f_Label47) , f_Label47)) , $setWidget_1(f_Grid46, 0, 1, (cmdFixStudentName = new Button_0 , $setInnerText(cmdFixStudentName.element, 'Fixer') , $addDomHandler(cmdFixStudentName, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , cmdFixStudentName)) , $setPropertyInt(f_Grid46.tableElem, 'cellSpacing', 5) , $setPropertyInt(f_Grid46.tableElem, 'cellPadding', 5) , f_Grid46)) , $add_7(pnlAdmin, (f_Label48 = new Label_0 , $setClassName(f_Label48.element, 'hiddenText') , $setTextOrHtml(f_Label48.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label48) , f_Label48)) , $setClassName(pnlAdmin.element, 'subSection') , pnlAdmin.element.style['width'] = '550px' , this$static.owner.pnlAdmin = pnlAdmin , pnlAdmin)) , $setPropertyInt(f_VerticalPanel5.table, 'cellSpacing', 10) , f_VerticalPanel5)) , f_VerticalPanel2.element.style['height'] = '' , f_VerticalPanel2.element.style['width'] = '939px' , $setPropertyInt(f_VerticalPanel2.table, 'cellSpacing', 2) , f_VerticalPanel2), $get_1(this$static.domId0Element));
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

defineSeed(1447, 1, {}, SettingsView_BinderImpl$Widgets_0);
function SettingsView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1448, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_28(event_0){
  $onCmdSaveClick_6(this.this$1.owner);
}
;
function SettingsView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1449, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_29(event_0){
  $fixStudentName(dynamicCast(this.this$1.owner.uiHandlers, Q$SettingOptionsUiHandler));
}
;
function SettingsView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1450, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$3_0);
_.onClick = function onClick_30(event_0){
  $onCmdSaveDateMatuClick(this.this$1.owner);
}
;
function SettingsView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1451, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$4_0);
_.onClick = function onClick_31(event_0){
  $onCmdSaveDateESClick(this.this$1.owner);
}
;
function SettingsView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1452, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$5_0);
_.onClick = function onClick_32(event_0){
  $onCmdSaveDateBacClick(this.this$1.owner);
}
;
function $html1_16(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_2(sb.impl, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_2(sb.impl, "'><\/span>");
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
  var x_0;
  x_0 = new SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X_0(this$static, optionName, optionValue);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X_0(this$0, val$optionName, val$optionValue){
  this.val$optionName = val$optionName;
  this.val$optionValue = val$optionValue;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1669, 647, makeCastMap([Q$AbstractRequest]), SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_66(){
  return new RequestData_0('NnkxwQJ8$x3Hd9pypFvVJfCdkfw=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$optionName, this.val$optionValue]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
function UserRequestFactory_UserRequestContextImpl$4X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1693, 647, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_81(){
  return new RequestData_0('LngrkGjFo68X3ZI22b6ClNWvoQ4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
var Lcom_lemania_sis_client_presenter_SettingsPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter', 1050), Lcom_lemania_sis_client_presenter_SettingsPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$1', 1051), Lcom_lemania_sis_client_presenter_SettingsPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$2', 1052), Lcom_lemania_sis_client_presenter_SettingsPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$3', 1053), Lcom_lemania_sis_client_presenter_SettingsPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$4', 1054), Lcom_lemania_sis_client_presenter_SettingsPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$5', 1055), Lcom_lemania_sis_client_presenter_SettingsPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$6', 1056), Lcom_lemania_sis_client_view_SettingsView_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView', 1445), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl', 1446), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets', 1447), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets$1', 1448), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets$2', 1449), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets$3', 1450), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets$4', 1451), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets$5', 1452), Lcom_lemania_sis_shared_service_SettingOptionRequestFactory_1SettingOptionRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X', 1669), Lcom_lemania_sis_shared_service_UserRequestFactory_1UserRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'UserRequestFactory_UserRequestContextImpl$4X', 1693);
$entry(onLoad)(24);
