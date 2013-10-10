function $addNewSubject(this$static, subjectName, defaultCoef, isActive){
  var ep, rc, rf, x;
  if (!subjectName.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Nom de la mati\xE8re.');
    return;
  }
  if ($matches(defaultCoef, '-?\\d+(\\.\\d+)?')) {
    if (($clinit_Double() , __parseAndValidateDouble(defaultCoef)) < 0) {
      alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient');
      return;
    }
  }
   else {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient');
    return;
  }
  rf = new SubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SubjectRequestFactory_SubjectRequestContextImpl_0(rf);
  ep = dynamicCast($create_1(rc, Lcom_lemania_sis_shared_SubjectProxy_2_classLit), Q$SubjectProxy);
  ep.setSubjectName(subjectName);
  ep.setDefaultCoef(($clinit_Double() , new Double_0(__parseAndValidateDouble(defaultCoef))));
  ep.setIsActive(isActive);
  $fire((x = new SubjectRequestFactory_SubjectRequestContextImpl$6X_0(rc, ep) , $addInvocation(rc.state.dialect, x) , x), new FrmSubjectAddPresenter$1_0(this$static));
}

function FrmSubjectAddPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(876, 689, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$FrmSubjectAddUiHandler]), FrmSubjectAddPresenter_0);
_.onBind = function onBind_16(){
  dynamicCast(this.view, Q$FrmSubjectAddPresenter$MyView).setUiHandlers(this);
}
;
_.onReset = function onReset_15(){
  $doFire(this.eventBus, new PageAfterSelectEvent_0('subjectadd'), null);
  $resetForm_8(dynamicCast(this.view, Q$FrmSubjectAddPresenter$MyView));
}
;
_.revealInParent = function revealInParent_15(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_62(this$static){
  $showStatus_1(dynamicCast(this$static.this$0.view, Q$FrmSubjectAddPresenter$MyView), ($clinit_NotificationTypes() , 'La nouvelle mati\xE8re a \xE9t\xE9 cr\xE9\xE9e avec succ\xE8s.'));
  $resetForm_8(dynamicCast(this$static.this$0.view, Q$FrmSubjectAddPresenter$MyView));
}

function FrmSubjectAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(877, 628, makeCastMap([Q$Receiver]), FrmSubjectAddPresenter$1_0);
_.onFailure_0 = function onFailure_63(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_63(response){
  $onSuccess_62(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$FrmSubjectAddPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmSubjectAddPresenter$_annotation$$none$$) {
    result = new FrmSubjectAddPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmSubjectAddView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmSubjectAddPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmSubjectAddPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmSubjectAddPresenter$_annotation$$none$$;
}

defineSeed(995, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_119(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmSubjectAddPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onCmdSaveClick_3(this$static){
  !!this$static.uiHandlers && $addNewSubject(dynamicCast(this$static.uiHandlers, Q$FrmSubjectAddUiHandler), $getPropertyString(this$static.txtSubjectName.element, 'value'), $getPropertyString(this$static.txtDefaultCoef.element, 'value'), $getValue_0(this$static.chkActive));
}

function $resetForm_8(this$static){
  $setText(this$static.txtSubjectName, '');
  $setText(this$static.txtDefaultCoef, '');
  $setValue_1(this$static.chkActive, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
}

function $showStatus_1(this$static, msg){
  var t;
  $setText_1(this$static.lblStatus, msg);
  t = new FrmSubjectAddView$1_0(this$static);
  $schedule(t, 3000);
}

function FrmSubjectAddView_0(){
  this.widget = $build_f_HTMLPanel1_14(new FrmSubjectAddView_BinderImpl$Widgets_0(this));
}

defineSeed(1182, 694, makeCastMap([Q$IsWidget, Q$FrmSubjectAddPresenter$MyView]), FrmSubjectAddView_0);
_.asWidget = function asWidget_18(){
  return this.widget;
}
;
_.chkActive = null;
_.lblStatus = null;
_.txtDefaultCoef = null;
_.txtSubjectName = null;
_.widget = null;
function FrmSubjectAddView$1_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

defineSeed(1183, 10, makeCastMap([Q$Timer]), FrmSubjectAddView$1_0);
_.run = function run_4(){
  $setText_1(this.this$0.lblStatus, '');
}
;
_.this$0 = null;
function FrmSubjectAddView_BinderImpl_0(){
}

defineSeed(1184, 1, {}, FrmSubjectAddView_BinderImpl_0);
function $build_f_HTMLPanel1_14(this$static){
  var attachRecord15, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, txtSubjectName, f_Label6, txtDefaultCoef, f_Label7, chkActive, f_Label8, cmdSave, sb, f_Label9, lblStatus;
  f_HTMLPanel1 = new HTMLPanel_0($html2_1(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord15 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord15.origParent?$insertBefore(attachRecord15.origParent, attachRecord15.element, attachRecord15.origSibling):orphan(attachRecord15.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'AJOUTER UNE NOUVELLE MATIERE', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 2) , $resizeRows(f_Grid4, 5) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Nom de la mati\xE8re :', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 0, 1, (txtSubjectName = new TextBox_0 , txtSubjectName.element['className'] = 'sis_textbox' , this$static.owner.txtSubjectName = txtSubjectName , txtSubjectName)) , $setWidget_1(f_Grid4, 1, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Coefficient par d\xE9faut :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 1, 1, (txtDefaultCoef = new TextBox_0 , this$static.owner.txtDefaultCoef = txtDefaultCoef , txtDefaultCoef)) , $setWidget_1(f_Grid4, 2, 0, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label7.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid4, 2, 1, (chkActive = new CheckBox_0 , $setTextOrHtml(chkActive.directionalTextHelper, 'Active', false) , $setValue_1(chkActive, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , this$static.owner.chkActive = chkActive , chkActive)) , $setWidget_1(f_Grid4, 3, 0, (f_Label8 = new Label_0 , f_Label8.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label8.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid4, 3, 1, (cmdSave = new Button_0 , $setHTML(cmdSave, (sb = new StringBuilder_0 , $append_1(sb.data, 'Enregistrer') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSave)) , $setWidget_1(f_Grid4, 4, 0, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label9.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid4, 4, 1, (lblStatus = new Label_0 , this$static.owner.lblStatus = lblStatus , lblStatus)) , f_Grid4.element.style['width'] = '80%' , f_Grid4.tableElem['cellSpacing'] = 5 , f_Grid4.tableElem['cellPadding'] = 5 , f_Grid4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmSubjectAddView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmSubjectAddView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1185, 1, {}, FrmSubjectAddView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmSubjectAddView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1186, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmSubjectAddView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_13(event_0){
  $onCmdSaveClick_3(this.this$1.owner);
}
;
_.this$1 = null;
function $html2_1(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$view$FrmSubjectAddView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmSubjectAddView$_annotation$$none$$) {
    result = new FrmSubjectAddView_0(new FrmSubjectAddView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmSubjectAddView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmSubjectAddView$_annotation$$none$$;
}

function SubjectRequestFactory_SubjectRequestContextImpl$6X_0(this$0, val$subject){
  this.val$subject = val$subject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1466, 632, makeCastMap([Q$AbstractRequest]), SubjectRequestFactory_SubjectRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_63(){
  return new RequestData_0('k$JK6orbDR9gy4pyPOcLB4mMzQo=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$subject]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$subject = null;
var Lcom_lemania_sis_client_presenter_FrmSubjectAddPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmSubjectAddPresenter', 876), Lcom_lemania_sis_client_presenter_FrmSubjectAddPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmSubjectAddPresenter$1', 877), Lcom_lemania_sis_client_view_FrmSubjectAddView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectAddView', 1182), Lcom_lemania_sis_client_view_FrmSubjectAddView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectAddView$1', 1183), Lcom_lemania_sis_client_view_FrmSubjectAddView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectAddView_BinderImpl', 1184), Lcom_lemania_sis_client_view_FrmSubjectAddView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectAddView_BinderImpl$Widgets', 1185), Lcom_lemania_sis_client_view_FrmSubjectAddView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectAddView_BinderImpl$Widgets$1', 1186), Lcom_lemania_sis_shared_service_SubjectRequestFactory_1SubjectRequestContextImpl$6X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SubjectRequestFactory_SubjectRequestContextImpl$6X', 1466);
$entry(onLoad)(16);
