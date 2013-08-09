function $changePassword(this$static, current, new1, new2){
  var rc, rf;
  if ($equals_3(current, '') || $equals_3(new1, '') || $equals_3(new2, '')) {
    alert_0('Merci de saisir tous les champs.');
    return;
  }
  if (!$equals_3(new1, new2)) {
    alert_0('Le nouveau mot de passe et la confirmation ne sont pas identiques.');
    return;
  }
  if (!isValidUserName(new1) || !isValidUserName(new2)) {
    alert_0("Le nouveau mot de passe n'est pas valable (minimum 6 caract\xE8res).");
    return;
  }
  rf = new UserRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire($changePassword_0(rc, this$static.currentUser.userName, current, new1), new FrmPasswordPresenter$1_0(this$static));
}

function $logOut(this$static){
  !this$static.currentUser && (this$static.currentUser = new CurrentUser_0);
  this$static.currentUser.isLoggedIn = false;
  $clinit_History();
  !!impl_2 && $newItem(impl_2, '!homepage', true);
  $doFire(this$static.eventBus, new LoginAuthenticatedEvent_0(this$static.currentUser), null);
  $doFire(this$static.eventBus, new AfterUserLogOutEvent_0, null);
}

function FrmPasswordPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(792, 678, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$FrmPasswordPresenter, Q$FrmPasswordUiHandler]), FrmPasswordPresenter_0);
_.onBind = function onBind_10(){
  dynamicCast(this.view, Q$FrmPasswordPresenter$MyView).setUiHandlers(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_1(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.revealInParent = function revealInParent_9(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_20(this$static, response){
  if (response) {
    alert_0('Le mot de passe a \xE9t\xE9 chang\xE9 avec succ\xE8s.');
    $logOut(this$static.this$0);
  }
   else 
    alert_0("Le mot de passe actuel n'est pas correct.");
}

function FrmPasswordPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(793, 617, makeCastMap([Q$Receiver]), FrmPasswordPresenter$1_0);
_.onFailure_0 = function onFailure_20(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_20(response){
  $onSuccess_20(this, dynamicCast(response, Q$UserProxy));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$FrmPasswordPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmPasswordPresenter$_annotation$$none$$) {
    result = new FrmPasswordPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmPasswordView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmPasswordPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmPasswordPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmPasswordPresenter$_annotation$$none$$;
}

defineSeed(893, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_65(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmPasswordPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onCmdSaveClick_1(this$static){
  !!this$static.uiHandlers && $changePassword(dynamicCast(this$static.uiHandlers, Q$FrmPasswordUiHandler), $getPropertyString(this$static.txtCurrentPassword.element, 'value'), $getPropertyString(this$static.txtNewPassword1.element, 'value'), $getPropertyString(this$static.txtNewPassword2.element, 'value'));
}

function FrmPasswordView_0(){
  this.widget = $build_f_HTMLPanel1_8(new FrmPasswordView_BinderImpl$Widgets_0(this));
}

defineSeed(997, 683, makeCastMap([Q$IsWidget, Q$FrmPasswordPresenter$MyView]), FrmPasswordView_0);
_.asWidget = function asWidget_12(){
  return this.widget;
}
;
_.txtCurrentPassword = null;
_.txtNewPassword1 = null;
_.txtNewPassword2 = null;
_.widget = null;
function FrmPasswordView_BinderImpl_0(){
}

defineSeed(998, 1, {}, FrmPasswordView_BinderImpl_0);
function $build_f_HTMLPanel1_8(this$static){
  var attachRecord9, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, f_Label6, txtCurrentPassword, f_Label7, txtNewPassword1, f_Label8, txtNewPassword2, f_Label9, cmdSave;
  f_HTMLPanel1 = new HTMLPanel_0($html1_8(this$static.domId0).html);
  attachRecord9 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord9.origParent?$insertBefore(attachRecord9.origParent, attachRecord9.element, attachRecord9.origSibling):orphan(attachRecord9.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_9(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ALIGN_CENTER) , $setTextOrHtml(f_Label3.directionalTextHelper, 'CHANGER LE MOT DE PASSE') , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_9(f_VerticalPanel2, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 2) , $resizeRows(f_Grid4, 6) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label_0 , f_Label5.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label5.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 1, 0, (f_Label6 = new Label_0 , $setAutoHorizontalAlignment(f_Label6, ALIGN_LEFT) , $setTextOrHtml(f_Label6.directionalTextHelper, 'Le mot de passe actuel :') , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 1, 1, (txtCurrentPassword = new TextBox_0 , this$static.owner.txtCurrentPassword = txtCurrentPassword , txtCurrentPassword)) , $setWidget_1(f_Grid4, 2, 0, (f_Label7 = new Label_0 , $setAutoHorizontalAlignment(f_Label7, ALIGN_LEFT) , $setTextOrHtml(f_Label7.directionalTextHelper, 'Nouveau mot de passe :') , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid4, 2, 1, (txtNewPassword1 = new TextBox_0 , this$static.owner.txtNewPassword1 = txtNewPassword1 , txtNewPassword1)) , $setWidget_1(f_Grid4, 3, 0, (f_Label8 = new Label_0 , $setAutoHorizontalAlignment(f_Label8, ALIGN_LEFT) , $setTextOrHtml(f_Label8.directionalTextHelper, 'Nouveau mot de passe confirmation :') , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid4, 3, 1, (txtNewPassword2 = new TextBox_0 , this$static.owner.txtNewPassword2 = txtNewPassword2 , txtNewPassword2)) , $setWidget_1(f_Grid4, 4, 0, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label9.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid4, 4, 1, (cmdSave = new Button_0 , $setInnerText(cmdSave.element, 'Enregistrer') , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSave)) , f_Grid4.tableElem['cellSpacing'] = 5 , f_Grid4.tableElem['cellPadding'] = 5 , f_Grid4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmPasswordView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmPasswordView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(999, 1, {}, FrmPasswordView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmPasswordView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1000, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmPasswordView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_5(event_0){
  $onCmdSaveClick_1(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_8(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$view$FrmPasswordView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmPasswordView$_annotation$$none$$) {
    result = new FrmPasswordView_0(new FrmPasswordView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmPasswordView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmPasswordView$_annotation$$none$$;
}

function $changePassword_0(this$static, userName, password, newPassword){
  var x;
  x = new UserRequestFactory_UserRequestContextImpl$2X_0(this$static, userName, password, newPassword);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function UserRequestFactory_UserRequestContextImpl$2X_0(this$0, val$userName, val$password, val$newPassword){
  this.val$userName = val$userName;
  this.val$password = val$password;
  this.val$newPassword = val$newPassword;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1255, 621, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_38(){
  return new RequestData_0('GdjdHabzEzW2UlYf4ti$2USq3hw=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$userName, this.val$password, this.val$newPassword]), this.propertyRefs, Lcom_lemania_sis_shared_UserProxy_2_classLit, null);
}
;
_.val$newPassword = null;
_.val$password = null;
_.val$userName = null;
var Lcom_lemania_sis_client_presenter_FrmPasswordPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmPasswordPresenter', 792), Lcom_lemania_sis_client_presenter_FrmPasswordPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmPasswordPresenter$1', 793), Lcom_lemania_sis_client_view_FrmPasswordView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmPasswordView', 997), Lcom_lemania_sis_client_view_FrmPasswordView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmPasswordView_BinderImpl', 998), Lcom_lemania_sis_client_view_FrmPasswordView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmPasswordView_BinderImpl$Widgets', 999), Lcom_lemania_sis_client_view_FrmPasswordView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmPasswordView_BinderImpl$Widgets$1', 1000), Lcom_lemania_sis_shared_service_UserRequestFactory_1UserRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'UserRequestFactory_UserRequestContextImpl$2X', 1255);
$entry(onLoad)(10);
