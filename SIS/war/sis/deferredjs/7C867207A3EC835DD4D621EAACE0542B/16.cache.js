function $getItemText(this$static, index){
  $checkIndex(this$static, index);
  return $getOptionText(this$static.element.options[index]);
}

function $getOptionText(option){
  var text;
  text = option.text;
  option.hasAttribute('bidiwrapped') && text.length > 1 && (text = $substring_0(text, 1, text.length - 1));
  return text;
}

function $updateSettingOptionDeadline(this$static, dayNumber){
  var rc, rf;
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($save_2(rc, 'DEADLINE', dayNumber), new SettingsPresenter$1_0(this$static));
}

function $updateSettingOptionManualBlock(this$static, blnBlock){
  var rc, rf;
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($save_2(rc, 'BLOCK', blnBlock.value_0?'true':'false'), new SettingsPresenter$3_0(this$static));
}

function SettingsPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(830, 660, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$SettingOptionsUiHandler]), SettingsPresenter_0);
_.onBind = function onBind_18(){
  dynamicCast(this.view, Q$SettingsPresenter$MyView).setUiHandlers(this);
}
;
_.onReset = function onReset_12(){
  var rf, rc;
  $initializeInterface(dynamicCast(this.view, Q$SettingsPresenter$MyView));
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($listAll_4(rc), new SettingsPresenter$2_0(this));
}
;
_.revealInParent = function revealInParent_17(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_42(this$static){
  $setText_0(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(831, 599, makeCastMap([Q$Receiver]), SettingsPresenter$1_0);
_.onFailure_0 = function onFailure_42(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_42(response){
  $onSuccess_42(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $onSuccess_43(this$static, response){
  $populateCurrentSettings(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), response);
}

function SettingsPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(832, 599, makeCastMap([Q$Receiver]), SettingsPresenter$2_0);
_.onFailure_0 = function onFailure_43(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_43(response){
  $onSuccess_43(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_44(this$static){
  $setText_0(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(833, 599, makeCastMap([Q$Receiver]), SettingsPresenter$3_0);
_.onFailure_0 = function onFailure_44(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_44(response){
  $onSuccess_44(this, throwClassCastExceptionUnlessNull(response));
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

defineSeed(877, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_63(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$SettingsPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeInterface(this$static){
  var i;
  for (i = 0; i < 31; ++i)
    $insertItem(this$static.lstDays, '' + (i + 1), '' + i, -1);
  $setText_0(this$static.lblUpdateStatus, '');
}

function $onCmdSaveClick_3(this$static){
  if (this$static.uiHandlers) {
    $updateSettingOptionDeadline(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getItemText(this$static.lstDays, this$static.lstDays.element.selectedIndex));
    $updateSettingOptionManualBlock(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_2(this$static.blnBlock));
  }
}

function $populateCurrentSettings(this$static, settingOptions){
  var setting, setting$iterator;
  for (setting$iterator = settingOptions.iterator(); setting$iterator.hasNext();) {
    setting = dynamicCast(setting$iterator.next_0(), Q$SettingOptionProxy);
    $equals_3(setting.getOptionName(), 'DEADLINE') && $setSelectedIndex_0(this$static.lstDays, __parseAndValidateInt(setting.getOptionValue()) - 1);
    $equals_3(setting.getOptionName(), 'BLOCK') && $setValue_1(this$static.blnBlock, ($clinit_Boolean() , $clinit_Boolean() , $equalsIgnoreCase('true', setting.getOptionValue())?TRUE_1:FALSE_1));
  }
}

function SettingsView_0(){
  this.widget = $build_f_HTMLPanel1_15(new SettingsView_BinderImpl$Widgets_0(this));
}

defineSeed(1055, 665, makeCastMap([Q$IsWidget, Q$SettingsPresenter$MyView, Q$SettingsView]), SettingsView_0);
_.asWidget = function asWidget_20(){
  return this.widget;
}
;
_.blnBlock = null;
_.lblUpdateStatus = null;
_.lstDays = null;
_.widget = null;
function SettingsView_BinderImpl_0(){
}

defineSeed(1056, 1, {}, SettingsView_BinderImpl_0);
function $build_f_HTMLPanel1_15(this$static){
  var attachRecord15, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, lstDays, f_Label6, f_Label7, blnBlock, f_Label8, lblUpdateStatus, cmdSave;
  f_HTMLPanel1 = new HTMLPanel_0($html1_11(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord15 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord15.origParent?$insertBefore(attachRecord15.origParent, attachRecord15.element, attachRecord15.origSibling):orphan(attachRecord15.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_9(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, "GESTION DE L'ACCES") , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_9(f_VerticalPanel2, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 3) , $resizeRows(f_Grid4, 4) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, "Bloquer automatiquement l'acc\xE8s au syst\xE8me le") , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 0, 1, (lstDays = new ListBox_0 , this$static.owner.lstDays = lstDays , lstDays)) , $setWidget_1(f_Grid4, 0, 2, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'tous les mois.') , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 1, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, "Bloquer l'acc\xE8s d\xE8s MAINTENANT") , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid4, 1, 1, (blnBlock = new SimpleCheckBox_0 , this$static.owner.blnBlock = blnBlock , blnBlock)) , $setWidget_1(f_Grid4, 2, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, '') , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid4, 2, 1, (lblUpdateStatus = new Label_0 , this$static.owner.lblUpdateStatus = lblUpdateStatus , lblUpdateStatus)) , $setWidget_1(f_Grid4, 3, 0, new Label_0) , $setWidget_1(f_Grid4, 3, 1, (cmdSave = new Button_0 , $setInnerText(cmdSave.element, 'Enregistrer') , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSave)) , f_Grid4.tableElem['cellSpacing'] = 5 , f_Grid4.tableElem['cellPadding'] = 5 , f_Grid4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function SettingsView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new SettingsView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1057, 1, {}, SettingsView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function SettingsView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1058, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_38(event_0){
  $onCmdSaveClick_3(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_11(arg0){
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

defineSeed(1174, 603, makeCastMap([Q$AbstractRequest]), SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_21(){
  return new RequestData_0('NnkxwQJ8$x3Hd9pypFvVJfCdkfw=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$optionName, this.val$optionValue]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$optionName = null;
_.val$optionValue = null;
var Lcom_lemania_sis_client_presenter_SettingsPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter', 830), Lcom_lemania_sis_client_presenter_SettingsPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$1', 831), Lcom_lemania_sis_client_presenter_SettingsPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$2', 832), Lcom_lemania_sis_client_presenter_SettingsPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'SettingsPresenter$3', 833), Lcom_lemania_sis_client_view_SettingsView_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView', 1055), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl', 1056), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets', 1057), Lcom_lemania_sis_client_view_SettingsView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'SettingsView_BinderImpl$Widgets$1', 1058), Lcom_lemania_sis_shared_service_SettingOptionRequestFactory_1SettingOptionRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X', 1174);
$entry(onLoad)(16);
