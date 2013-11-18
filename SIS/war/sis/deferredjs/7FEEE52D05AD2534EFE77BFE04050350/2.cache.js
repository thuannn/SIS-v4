function CoursAddedEvent_0(){
  $clinit_CoursAddedEvent();
}

defineSeed(794, 236, {}, CoursAddedEvent_0);
_.dispatch_0 = function dispatch_39(handler){
  dynamicCast(handler, Q$CoursAddedEvent$CoursAddedHandler).onCoursAdded(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_40(){
  return TYPE_39;
}
;
function $coursAdd(this$static, coursNom, ecoleId, coursActif){
  var rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!coursNom.length) {
    alert_0('Veuillez saissir le nom du cours.');
    return;
  }
  if (!ecoleId.length) {
    alert_0("Veuillez choisir le nom de l'\uFFFDcole.");
    return;
  }
  rf = new CoursRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  this$static.cours = dynamicCast($create_1(rc, Lcom_lemania_sis_shared_CoursProxy_2_classLit), Q$CoursProxy);
  this$static.cours.setCoursNom(coursNom);
  this$static.cours.setCoursActif(coursActif);
  $fire($save(rc, this$static.cours, ecoleId), new CoursAddPresenter$2_0(this$static));
}

function $coursAddCancel(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, '!cours', true);
}

function CoursAddPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(814, 738, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$CoursAddPresenter, Q$CoursAddUiHandler]), CoursAddPresenter_0);
_.onBind = function onBind_2(){
  dynamicCast(this.view, Q$CoursAddPresenter$MyView).setUiHandlers(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_3(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_1(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('coursadd'), null);
  rf = new EcoleRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_4(rc), new CoursAddPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_1(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.cours = null;
_.currentUser = null;
function $onSuccess_2(this$static, response){
  $populateEcoleList(dynamicCast(this$static.this$0.view, Q$CoursAddPresenter$MyView), response);
}

function CoursAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(815, 678, makeCastMap([Q$Receiver]), CoursAddPresenter$1_0);
_.onFailure_0 = function onFailure_2(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_2(response){
  $onSuccess_2(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_3(this$static){
  $doFire(this$static.this$0.eventBus, new CoursAddedEvent_0, null);
}

function CoursAddPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(816, 678, makeCastMap([Q$Receiver]), CoursAddPresenter$2_0);
_.onFailure_0 = function onFailure_3(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_3(response){
  $onSuccess_3(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
defineSeed(826, 769, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$CoursAddedEvent$CoursAddedHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler]));
_.onCoursAdded = function onCoursAdded_0(event_0){
  $getPresenter_0(this, new CoursPresenterMyProxyImpl$1_0(this.eventBus));
}
;
function $success_1(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new CoursPresenterMyProxyImpl$1$1_0);
}

function CoursPresenterMyProxyImpl$1_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(827, 751, {}, CoursPresenterMyProxyImpl$1_0);
_.success = function success_3(presenter){
  $success_1(dynamicCast(presenter, Q$CoursPresenter));
}
;
function CoursPresenterMyProxyImpl$1$1_0(){
}

defineSeed(828, 1, {}, CoursPresenterMyProxyImpl$1$1_0);
_.execute_1 = function execute_30(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, '!cours', true);
}
;
function $get_Key$type$com$lemania$sis$client$presenter$CoursAddPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$CoursAddPresenter$_annotation$$none$$) {
    result = new CoursAddPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$CoursAddView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$CoursAddPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$CoursAddPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$CoursAddPresenter$_annotation$$none$$;
}

defineSeed(1111, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_126(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$CoursAddPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onCmdAjouterClicked(this$static){
  !!this$static.uiHandlers && $coursAdd(dynamicCast(this$static.uiHandlers, Q$CoursAddUiHandler), $trim($getPropertyString(this$static.txtCoursNom.element, 'value')), $getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex), $getValue_0(this$static.chkActif));
}

function $onCmdAnnulerClicked(this$static){
  !!this$static.uiHandlers && $coursAddCancel(dynamicCast(this$static.uiHandlers, Q$CoursAddUiHandler));
}

function $populateEcoleList(this$static, ecoles){
  var i;
  $selectClear(this$static.lstEcoles.element);
  $insertItem(this$static.lstEcoles, '-', '', -1);
  for (i = 0; i < ecoles.size_1(); ++i)
    $insertItem(this$static.lstEcoles, dynamicCast(ecoles.get_0(i), Q$EcoleProxy).getSchoolName(), '' + toString_7(dynamicCast(ecoles.get_0(i), Q$EcoleProxy).getId_0().value_0), -1);
}

function CoursAddView_0(){
  this.widget = $build_f_HTMLPanel1_0(new CoursAddView_BinderImpl$Widgets_0(this));
}

defineSeed(1148, 743, makeCastMap([Q$IsWidget, Q$CoursAddPresenter$MyView]), CoursAddView_0);
_.asWidget = function asWidget_4(){
  return this.widget;
}
;
_.chkActif = null;
_.lstEcoles = null;
_.txtCoursNom = null;
_.widget = null;
function CoursAddView_BinderImpl_0(){
}

defineSeed(1149, 1, {}, CoursAddView_BinderImpl_0);
function $build_f_HTMLPanel1_0(this$static){
  var attachRecord1, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, lstEcoles, f_Label6, txtCoursNom, f_Label7, chkActif, f_HorizontalPanel9, f_HorizontalPanel10, cmdAjouter, sb, cmdAnnuler, sb_0;
  f_HTMLPanel1 = new HTMLPanel_0($html3(this$static.domId0).html);
  attachRecord1 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord1.origParent?$insertBefore(attachRecord1.origParent, attachRecord1.element, attachRecord1.origSibling):orphan(attachRecord1.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'AJOUTER UN NOUVEAU PROGRAMME', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 2) , $resizeRows(f_Grid4, 4) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, "Nom de l'\xE9cole :", false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 0, 1, (lstEcoles = new ListBox_0 , lstEcoles.element['className'] = 'sis_textbox' , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_1(f_Grid4, 1, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Nom du programme :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 1, 1, (txtCoursNom = new TextBox_0 , txtCoursNom.element['className'] = 'sis_textbox' , txtCoursNom.element.style['width'] = '' , this$static.owner.txtCoursNom = txtCoursNom , txtCoursNom)) , $setWidget_1(f_Grid4, 2, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Actif :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid4, 2, 1, (chkActif = new CheckBox_0 , $setValue_0(chkActif, ($clinit_Boolean() , $clinit_Boolean() , TRUE_2)) , this$static.owner.chkActif = chkActif , chkActif)) , $setWidget_1(f_Grid4, 3, 0, new Label_0) , $setWidget_1(f_Grid4, 3, 1, (f_HorizontalPanel9 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel9, ALIGN_LEFT) , $add_9(f_HorizontalPanel9, (f_HorizontalPanel10 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel10, (cmdAjouter = new Button_0 , $setHTML(cmdAjouter, (sb = new StringBuilder_0 , sb.impl.string += 'Ajouter' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , $setInnerText(cmdAjouter.element, 'Enregistrer') , $addDomHandler(cmdAjouter, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , cmdAjouter)) , $add_9(f_HorizontalPanel10, (cmdAnnuler = new Button_0 , $setHTML(cmdAnnuler, (sb_0 = new StringBuilder_0 , sb_0.impl.string += 'Annuler' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)).html) , $addDomHandler(cmdAnnuler, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_1) , cmdAnnuler)) , f_HorizontalPanel10.element.style['width'] = '70%' , f_HorizontalPanel10)) , f_HorizontalPanel9.element.style['width'] = '100%' , f_HorizontalPanel9)) , f_Grid4.element.style['width'] = '80%' , f_Grid4.tableElem['cellSpacing'] = 5 , f_Grid4.tableElem['cellPadding'] = 5 , f_Grid4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function CoursAddView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new CoursAddView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new CoursAddView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1150, 1, {}, CoursAddView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function CoursAddView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1151, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), CoursAddView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_4(event_0){
  $onCmdAnnulerClicked(this.this$1.owner);
}
;
_.this$1 = null;
function CoursAddView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1152, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), CoursAddView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_5(event_0){
  $onCmdAjouterClicked(this.this$1.owner);
}
;
_.this$1 = null;
function $html3(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_12(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$view$CoursAddView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$CoursAddView$_annotation$$none$$) {
    result = new CoursAddView_0(new CoursAddView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$CoursAddView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$CoursAddView$_annotation$$none$$;
}

function $save(this$static, cours, ecoleId){
  var x;
  x = new CoursRequestFactory_CoursRequestContextImpl$7X_0(this$static, cours, ecoleId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function CoursRequestFactory_CoursRequestContextImpl$7X_0(this$0, val$cours, val$ecoleId){
  this.val$cours = val$cours;
  this.val$ecoleId = val$ecoleId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1535, 682, makeCastMap([Q$AbstractRequest]), CoursRequestFactory_CoursRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_34(){
  return new RequestData_0('7mwAIWGDEaPg9HeaCAD_XVziTPQ=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$cours, this.val$ecoleId]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$cours = null;
_.val$ecoleId = null;
var Lcom_lemania_sis_client_presenter_CoursAddPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'CoursAddPresenter', 814), Lcom_lemania_sis_client_presenter_CoursAddPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'CoursAddPresenter$1', 815), Lcom_lemania_sis_client_presenter_CoursAddPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'CoursAddPresenter$2', 816), Lcom_lemania_sis_client_event_CoursAddedEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'CoursAddedEvent', 794), Lcom_lemania_sis_client_presenter_CoursPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'CoursPresenterMyProxyImpl$1', 827), Lcom_lemania_sis_client_presenter_CoursPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'CoursPresenterMyProxyImpl$1$1', 828), Lcom_lemania_sis_client_view_CoursAddView_2_classLit = createForClass('com.lemania.sis.client.view.', 'CoursAddView', 1148), Lcom_lemania_sis_client_view_CoursAddView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'CoursAddView_BinderImpl', 1149), Lcom_lemania_sis_client_view_CoursAddView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'CoursAddView_BinderImpl$Widgets', 1150), Lcom_lemania_sis_client_view_CoursAddView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'CoursAddView_BinderImpl$Widgets$1', 1151), Lcom_lemania_sis_client_view_CoursAddView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'CoursAddView_BinderImpl$Widgets$2', 1152), Lcom_lemania_sis_shared_service_CoursRequestFactory_1CoursRequestContextImpl$7X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'CoursRequestFactory_CoursRequestContextImpl$7X', 1535);
$entry(onLoad)(2);
