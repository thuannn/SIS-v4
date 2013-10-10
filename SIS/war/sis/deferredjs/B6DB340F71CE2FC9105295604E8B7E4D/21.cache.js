function $fixStudentName(this$static){
  var rc, rf, x;
  rf = new UserRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire((x = new UserRequestFactory_UserRequestContextImpl$3X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new SettingsPresenter$5_0);
}

function $updateCurrentEcole(this$static, ecoleCode){
  var rc, rf;
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($save_2(rc, 'ECOLE', ecoleCode), new SettingsPresenter$4_0(this$static));
}

function $updateSettingOptionDeadline(this$static, dayNumber){
  var rc, rf;
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($save_2(rc, 'DEADLINE', dayNumber), new SettingsPresenter$1_0(this$static));
}

function $updateSettingOptionManualBlock(this$static, blnBlock){
  var rc, rf;
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($save_2(rc, 'BLOCK', blnBlock.value_0?'true':'false'), new SettingsPresenter$3_0(this$static));
}

function SettingsPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(952, 698, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$SettingOptionsUiHandler]), SettingsPresenter_0);
_.onBind = function onBind_23(){
  dynamicCast(this.view, Q$SettingsPresenter$MyView).setUiHandlers(this);
}
;
_.onReset = function onReset_22(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('settings'), null);
  $initializeInterface(dynamicCast(this.view, Q$SettingsPresenter$MyView));
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($listAll_6(rc), new SettingsPresenter$2_0(this));
}
;
_.revealInParent = function revealInParent_22(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_93(this$static){
  $setText_1(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(953, 637, makeCastMap([Q$Receiver]), SettingsPresenter$1_0);
_.onFailure_0 = function onFailure_94(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_94(response){
  $onSuccess_93(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $onSuccess_94(this$static, response){
  $populateCurrentSettings(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), response);
}

function SettingsPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(954, 637, makeCastMap([Q$Receiver]), SettingsPresenter$2_0);
_.onFailure_0 = function onFailure_95(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_95(response){
  $onSuccess_94(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_95(this$static){
  $setText_1(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(955, 637, makeCastMap([Q$Receiver]), SettingsPresenter$3_0);
_.onFailure_0 = function onFailure_96(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_96(response){
  $onSuccess_95(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $onSuccess_96(this$static){
  $setText_1(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(956, 637, makeCastMap([Q$Receiver]), SettingsPresenter$4_0);
_.onFailure_0 = function onFailure_97(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_97(response){
  $onSuccess_96(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function SettingsPresenter$5_0(){
}

defineSeed(957, 637, makeCastMap([Q$Receiver]), SettingsPresenter$5_0);
_.onFailure_0 = function onFailure_98(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_98(response){
  throwClassCastExceptionUnlessNull(response);
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

defineSeed(1017, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_125(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$SettingsPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeInterface(this$static){
  var i;
  for (i = 0; i < 31; ++i)
    $insertItem(this$static.lstDays, '' + (i + 1), '' + i, -1);
  $setText_1(this$static.lblUpdateStatus, '');
  $selectClear(this$static.lstEcoles.element);
  $insertItem(this$static.lstEcoles, '-', '', -1);
  $insertItem(this$static.lstEcoles, 'Ecole Lemania', ($clinit_NotificationTypes() , 'LM'), -1);
  $insertItem(this$static.lstEcoles, 'Pierre Viret', 'PV', -1);
}

function $onCmdSaveClick_4(this$static){
  if (this$static.uiHandlers) {
    $updateSettingOptionDeadline(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getItemText(this$static.lstDays, this$static.lstDays.element.selectedIndex));
    $updateSettingOptionManualBlock(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_2(this$static.blnBlock));
    $updateCurrentEcole(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex));
  }
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
  }
}

function SettingsView_0(){
  this.widget = $build_f_HTMLPanel1_20(new SettingsView_BinderImpl$Widgets_0(this));
}

defineSeed(1270, 703, makeCastMap([Q$IsWidget, Q$SettingsPresenter$MyView, Q$SettingsView]), SettingsView_0);
_.asWidget = function asWidget_25(){
  return this.widget;
}
;
_.blnBlock = null;
_.lblUpdateStatus = null;
_.lstDays = null;
_.lstEcoles = null;
_.widget = null;
function SettingsView_BinderImpl_0(){
}

defineSeed(1271, 1, {}, SettingsView_BinderImpl_0);
function $build_f_HTMLPanel1_20(this$static){
  var attachRecord20, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, lstDays, f_Label6, f_Label7, blnBlock, f_Label8, lstEcoles, f_Label9, lblUpdateStatus, cmdSave, f_Label11, f_Grid12, f_Label13, cmdFixStudentName;
  f_HTMLPanel1 = new HTMLPanel_0($html1_15(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord20 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord20.origParent?$insertBefore(attachRecord20.origParent, attachRecord20.element, attachRecord20.origSibling):orphan(attachRecord20.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, "GESTION DE L'ACCES", false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 4) , $resizeRows(f_Grid4, 4) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, "Bloquer automatiquement l'acc\xE8s au syst\xE8me le", false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 0, 1, (lstDays = new ListBox_0 , this$static.owner.lstDays = lstDays , lstDays)) , $setWidget_1(f_Grid4, 0, 2, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'tous les mois.', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 1, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, "Bloquer l'acc\xE8s d\xE8s MAINTENANT", false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid4, 1, 1, (blnBlock = new SimpleCheckBox_0 , this$static.owner.blnBlock = blnBlock , blnBlock)) , $setWidget_1(f_Grid4, 2, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Ecole :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid4, 2, 1, (lstEcoles = new ListBox_0 , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_1(f_Grid4, 2, 2, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, '', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid4, 2, 3, (lblUpdateStatus = new Label_0 , this$static.owner.lblUpdateStatus = lblUpdateStatus , lblUpdateStatus)) , $setWidget_1(f_Grid4, 3, 0, new Label_0) , $setWidget_1(f_Grid4, 3, 1, (cmdSave = new Button_0 , $setInnerText(cmdSave.element, 'Enregistrer') , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSave)) , f_Grid4.tableElem['cellSpacing'] = 5 , f_Grid4.tableElem['cellPadding'] = 5 , f_Grid4)) , $add_11(f_VerticalPanel2, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label11.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $add_11(f_VerticalPanel2, (f_Grid12 = new Grid_0 , $resizeColumns(f_Grid12, 2) , $resizeRows(f_Grid12, 1) , $setWidget_1(f_Grid12, 0, 0, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'Fixer le format des noms des \xE9l\xE8ves dans Users', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_1(f_Grid12, 0, 1, (cmdFixStudentName = new Button_0 , $setInnerText(cmdFixStudentName.element, 'Fixer') , $addDomHandler(cmdFixStudentName, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , cmdFixStudentName)) , f_Grid12.tableElem['cellSpacing'] = 5 , f_Grid12.tableElem['cellPadding'] = 5 , f_Grid12)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function SettingsView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new SettingsView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new SettingsView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1272, 1, {}, SettingsView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function SettingsView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1273, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_24(event_0){
  $onCmdSaveClick_4(this.this$1.owner);
}
;
_.this$1 = null;
function SettingsView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1274, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_25(event_0){
  $fixStudentName(dynamicCast(this.this$1.owner.uiHandlers, Q$SettingOptionsUiHandler));
}
;
_.this$1 = null;
function $html1_15(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
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

defineSeed(1461, 641, makeCastMap([Q$AbstractRequest]), SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_55(){
  return new RequestData_0('NnkxwQJ8$x3Hd9pypFvVJfCdkfw=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$optionName, this.val$optionValue]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$optionName = null;
_.val$optionValue = null;
function UserRequestFactory_UserRequestContextImpl$3X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1483, 641, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_68(){
  return new RequestData_0('LngrkGjFo68X3ZI22b6ClNWvoQ4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
var Lcom_lemania_sis_client_presenter_SettingsPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter', 952), Lcom_lemania_sis_client_presenter_SettingsPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$1', 953), Lcom_lemania_sis_client_presenter_SettingsPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$2', 954), Lcom_lemania_sis_client_presenter_SettingsPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$3', 955), Lcom_lemania_sis_client_presenter_SettingsPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$4', 956), Lcom_lemania_sis_client_presenter_SettingsPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$5', 957), Lcom_lemania_sis_client_view_SettingsView_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView', 1270), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl', 1271), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets', 1272), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets$1', 1273), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets$2', 1274), Lcom_lemania_sis_shared_service_SettingOptionRequestFactory_1SettingOptionRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X', 1461), Lcom_lemania_sis_shared_service_UserRequestFactory_1UserRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'UserRequestFactory_UserRequestContextImpl$3X', 1483);
$entry(onLoad)(21);
