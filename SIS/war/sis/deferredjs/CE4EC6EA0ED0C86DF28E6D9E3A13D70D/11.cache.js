function $addNewSubject(this$static, subjectName, defaultCoef, isActive){
  var ep, rc, rf, x;
  if (!subjectName.length) {
    alert_0('Donn\xE9e Invalide - Nom de la mati\xE8re.');
    return;
  }
  if ($matches(defaultCoef, '-?\\d+(\\.\\d+)?')) {
    if (($clinit_Double() , __parseAndValidateDouble(defaultCoef)) < 0) {
      alert_0('Donn\xE9e Invalide - Coefficient');
      return;
    }
  }
   else {
    alert_0('Donn\xE9e Invalide - Coefficient');
    return;
  }
  rf = new SubjectRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SubjectRequestFactory_SubjectRequestContextImpl_0(rf);
  ep = dynamicCast($create_1(rc, Lcom_lemania_sis_shared_SubjectProxy_2_classLit), Q$SubjectProxy);
  ep.setSubjectName(subjectName);
  ep.setDefaultCoef(($clinit_Double() , new Double_0(__parseAndValidateDouble(defaultCoef))));
  ep.setIsActive(isActive);
  $fire((x = new SubjectRequestFactory_SubjectRequestContextImpl$5X_0(rc, ep) , $addInvocation(rc.state.dialect, x) , x), new FrmSubjectAddPresenter$1_0(this$static));
}

function FrmSubjectAddPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(784, 664, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$FrmSubjectAddUiHandler]), FrmSubjectAddPresenter_0);
_.onBind = function onBind_11(){
  dynamicCast(this.view, Q$FrmSubjectAddPresenter$MyView).setUiHandlers(this);
}
;
_.onReset = function onReset_6(){
  $resetForm_2(dynamicCast(this.view, Q$FrmSubjectAddPresenter$MyView));
}
;
_.revealInParent = function revealInParent_10(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_21(this$static){
  $showStatus_1(dynamicCast(this$static.this$0.view, Q$FrmSubjectAddPresenter$MyView));
  $resetForm_2(dynamicCast(this$static.this$0.view, Q$FrmSubjectAddPresenter$MyView));
}

function FrmSubjectAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(785, 603, makeCastMap([Q$Receiver]), FrmSubjectAddPresenter$1_0);
_.onFailure_0 = function onFailure_21(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_21(response){
  $onSuccess_21(this, throwClassCastExceptionUnlessNull(response));
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

defineSeed(881, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_66(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmSubjectAddPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onCmdSaveClick_2(this$static){
  !!this$static.uiHandlers && $addNewSubject(dynamicCast(this$static.uiHandlers, Q$FrmSubjectAddUiHandler), $getPropertyString(this$static.txtSubjectName.element, 'value'), $getPropertyString(this$static.txtDefaultCoef.element, 'value'), $getValue_0(this$static.chkActive));
}

function $resetForm_2(this$static){
  this$static.txtSubjectName.element['value'] = '';
  this$static.txtDefaultCoef.element['value'] = '';
  $setValue_0(this$static.chkActive, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
}

function $showStatus_1(this$static){
  var t;
  $setText_0(this$static.lblStatus, 'La nouvelle mati\xE8re a \xE9t\xE9 cr\xE9\xE9e avec succ\xE8s.');
  t = new FrmSubjectAddView$1_0(this$static);
  $schedule(t, 3000);
}

function FrmSubjectAddView_0(){
  this.widget = $build_f_HTMLPanel1_9(new FrmSubjectAddView_BinderImpl$Widgets_0(this));
}

defineSeed(988, 669, makeCastMap([Q$IsWidget, Q$FrmSubjectAddPresenter$MyView]), FrmSubjectAddView_0);
_.asWidget = function asWidget_13(){
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

defineSeed(989, 12, makeCastMap([Q$Timer]), FrmSubjectAddView$1_0);
_.run = function run_3(){
  $setText_0(this.this$0.lblStatus, '');
}
;
_.this$0 = null;
function FrmSubjectAddView_BinderImpl_0(){
}

defineSeed(990, 1, {}, FrmSubjectAddView_BinderImpl_0);
function $build_f_HTMLPanel1_9(this$static){
  var attachRecord10, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, txtSubjectName, f_Label6, txtDefaultCoef, f_Label7, chkActive, f_Label8, cmdSave, sb, f_Label9, lblStatus;
  f_HTMLPanel1 = new HTMLPanel_0($html2_0(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord10 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord10.origParent?$insertBefore(attachRecord10.origParent, attachRecord10.element, attachRecord10.origSibling):orphan(attachRecord10.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_9(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'AJOUTER UNE NOUVELLE MATIERE') , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_9(f_VerticalPanel2, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 2) , $resizeRows(f_Grid4, 5) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Nom de la mati\xE8re :') , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 0, 1, (txtSubjectName = new TextBox_0 , txtSubjectName.element['className'] = 'sis_textbox' , this$static.owner.txtSubjectName = txtSubjectName , txtSubjectName)) , $setWidget_1(f_Grid4, 1, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Coefficient par d\xE9faut :') , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 1, 1, (txtDefaultCoef = new TextBox_0 , this$static.owner.txtDefaultCoef = txtDefaultCoef , txtDefaultCoef)) , $setWidget_1(f_Grid4, 2, 0, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label7.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid4, 2, 1, (chkActive = new CheckBox_0 , $setTextOrHtml(chkActive.directionalTextHelper, 'Active') , $setValue_0(chkActive, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , this$static.owner.chkActive = chkActive , chkActive)) , $setWidget_1(f_Grid4, 3, 0, (f_Label8 = new Label_0 , f_Label8.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label8.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid4, 3, 1, (cmdSave = new Button_0 , $setHTML(cmdSave, (sb = new StringBuilder_0 , sb.impl.string += 'Enregistrer' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSave)) , $setWidget_1(f_Grid4, 4, 0, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label9.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid4, 4, 1, (lblStatus = new Label_0 , this$static.owner.lblStatus = lblStatus , lblStatus)) , f_Grid4.element.style['width'] = '80%' , f_Grid4.tableElem['cellSpacing'] = 5 , f_Grid4.tableElem['cellPadding'] = 5 , f_Grid4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmSubjectAddView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmSubjectAddView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(991, 1, {}, FrmSubjectAddView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmSubjectAddView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(992, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmSubjectAddView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_6(event_0){
  $onCmdSaveClick_2(this.this$1.owner);
}
;
_.this$1 = null;
function $html2_0(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$view$FrmSubjectAddView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmSubjectAddView$_annotation$$none$$) {
    result = new FrmSubjectAddView_0(new FrmSubjectAddView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmSubjectAddView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmSubjectAddView$_annotation$$none$$;
}

function SubjectRequestFactory_SubjectRequestContextImpl$5X_0(this$0, val$subject){
  this.val$subject = val$subject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1235, 607, makeCastMap([Q$AbstractRequest]), SubjectRequestFactory_SubjectRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_35(){
  return new RequestData_0('k$JK6orbDR9gy4pyPOcLB4mMzQo=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$subject]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$subject = null;
var Lcom_lemania_sis_client_presenter_FrmSubjectAddPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmSubjectAddPresenter', 784), Lcom_lemania_sis_client_presenter_FrmSubjectAddPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmSubjectAddPresenter$1', 785), Lcom_lemania_sis_client_view_FrmSubjectAddView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectAddView', 988), Lcom_lemania_sis_client_view_FrmSubjectAddView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectAddView$1', 989), Lcom_lemania_sis_client_view_FrmSubjectAddView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectAddView_BinderImpl', 990), Lcom_lemania_sis_client_view_FrmSubjectAddView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectAddView_BinderImpl$Widgets', 991), Lcom_lemania_sis_client_view_FrmSubjectAddView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectAddView_BinderImpl$Widgets$1', 992), Lcom_lemania_sis_shared_service_SubjectRequestFactory_1SubjectRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SubjectRequestFactory_SubjectRequestContextImpl$5X', 1235);
$entry(onLoad)(11);
