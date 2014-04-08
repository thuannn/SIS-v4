function $sendMessage(this$static, lastName, firstName, email, message){
  var rc, rf, x_0;
  rf = new ContactRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ContactRequestFactory_ContactRequestContextImpl_0(rf);
  $fire((x_0 = new ContactRequestFactory_ContactRequestContextImpl$1X_0(rc, lastName, firstName, email, message) , $addInvocation(rc.state.dialect, x_0) , x_0), new ContactPresenter$1_0(this$static));
}

function ContactPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(775, 702, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ContactPresenter, Q$ContactUiHandler]), ContactPresenter_0);
_.onBind = function onBind_1(){
  dynamicCast(this.view, Q$ContactPresenter$MyView).setUiHandlers(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_1(event_0){
}
;
_.onReset = function onReset_0(){
  $doFire(this.eventBus, new PageAfterSelectEvent_0('!contact'), null);
}
;
_.revealInParent = function revealInParent_0(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_1(this$static){
  $resetForm(dynamicCast(this$static.this$0.view, Q$ContactPresenter$MyView));
}

function ContactPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(776, 641, makeCastMap([Q$Receiver]), ContactPresenter$1_0);
_.onFailure_0 = function onFailure_1(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_1(response){
  $onSuccess_1(this, throwClassCastExceptionUnlessNull(response));
}
;
function $get_Key$type$com$lemania$sis$client$presenter$ContactPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$ContactPresenter$_annotation$$none$$) {
    result = new ContactPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$ContactView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$ContactPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$ContactPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$ContactPresenter$_annotation$$none$$;
}

defineSeed(1095, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_139(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$ContactPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onCmdSendClick(this$static){
  !!this$static.uiHandlers && $sendMessage(dynamicCast(this$static.uiHandlers, Q$ContactUiHandler), $getPropertyString($getElement(this$static.txtLastName), 'value'), $getPropertyString($getElement(this$static.txtFirstName), 'value'), $getPropertyString($getElement(this$static.txtEmail), 'value'), $getPropertyString($getElement(this$static.txtMessage), 'value'));
}

function $resetForm(this$static){
  $setText(this$static.txtLastName, '');
  $setText(this$static.txtFirstName, '');
  $setText(this$static.txtMessage, '');
  $setText(this$static.txtEmail, '');
}

function ContactView_0(){
  this.widget = $build_f_HTMLPanel1(new ContactView_BinderImpl$Widgets_0(this));
}

defineSeed(1151, 707, makeCastMap([Q$IsWidget, Q$ContactPresenter$MyView]), ContactView_0);
_.asWidget = function asWidget_3(){
  return this.widget;
}
;
function ContactView_BinderImpl_0(){
}

defineSeed(1152, 1, {}, ContactView_BinderImpl_0);
function $build_f_HTMLPanel1(this$static){
  var attachRecord0, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_VerticalPanel4, f_Label5, f_Grid6, f_Label7, txtLastName, f_Label8, txtFirstName, f_Label9, txtEmail, f_Label10, txtMessage, f_Label11, cmdSend, sb;
  f_HTMLPanel1 = new HTMLPanel_0($html2(this$static.domId0).html);
  ($clinit_DOM() , f_HTMLPanel1.element).style['width'] = '100%';
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , $setClassName(f_Label3.element, 'pageTitle') , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'CONTACT', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_VerticalPanel4 = new VerticalPanel_0 , $add_11(f_VerticalPanel4, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Nous sommes \xE0 votre disposition pour toutes vos questions ou conseils. Merci de nous contacter en utilisant le formulaire ci-dessous.', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $add_11(f_VerticalPanel4, (f_Grid6 = new Grid_0 , $resizeColumns(f_Grid6, 2) , $resizeRows(f_Grid6, 5) , $setWidget_1(f_Grid6, 0, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Nom :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid6, 0, 1, (txtLastName = new TextBox_0 , $setClassName(txtLastName.element, 'sis_textbox') , this$static.owner.txtLastName = txtLastName , txtLastName)) , $setWidget_1(f_Grid6, 1, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Pr\xE9nom :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid6, 1, 1, (txtFirstName = new TextBox_0 , $setClassName(txtFirstName.element, 'sis_textbox') , this$static.owner.txtFirstName = txtFirstName , txtFirstName)) , $setWidget_1(f_Grid6, 2, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Email :', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid6, 2, 1, (txtEmail = new TextBox_0 , $setClassName(txtEmail.element, 'sis_textbox') , this$static.owner.txtEmail = txtEmail , txtEmail)) , $setWidget_1(f_Grid6, 3, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Message :', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid6, 3, 1, (txtMessage = new TextArea_1 , txtMessage.element.style['height'] = '300px' , txtMessage.element.style['width'] = '478px' , this$static.owner.txtMessage = txtMessage , txtMessage)) , $setWidget_1(f_Grid6, 4, 0, (f_Label11 = new Label_0 , $setClassName(f_Label11.element, 'hiddenText') , $setTextOrHtml(f_Label11.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid6, 4, 1, (cmdSend = new Button_0 , $setHTML(cmdSend, (sb = new StringBuilder_0 , $append_2(sb.impl, 'Envoyer') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , cmdSend.element.style['width'] = '100px' , $addDomHandler(cmdSend, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSend)) , $setClassName(f_Grid6.element, 'subSection') , f_Grid6.element.style['width'] = '600px' , $setPropertyInt(f_Grid6.tableElem, 'cellPadding', 5) , f_Grid6)) , f_VerticalPanel4.element.style['width'] = '100%' , $setPropertyInt(f_VerticalPanel4.table, 'cellSpacing', 20) , f_VerticalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , $setPropertyInt(f_VerticalPanel2.table, 'cellSpacing', 2) , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ContactView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ContactView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1153, 1, {}, ContactView_BinderImpl$Widgets_0);
function ContactView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1154, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ContactView_BinderImpl$Widgets$1_0);
_.onClick = function onClick(event_0){
  $onCmdSendClick(this.this$1.owner);
}
;
function $html2(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_2(sb.impl, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_2(sb.impl, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$view$ContactView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$ContactView$_annotation$$none$$) {
    result = new ContactView_0(new ContactView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$ContactView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$ContactView$_annotation$$none$$;
}

function $clinit_ContactRequestFactoryImpl(){
  $clinit_ContactRequestFactoryImpl = nullMethod;
  tokensToTypes_5 = new HashMap_0;
  typesToTokens_5 = new HashMap_0;
  entityProxyTypes_5 = new HashSet_0;
  valueProxyTypes_5 = new HashSet_0;
}

function ContactRequestFactoryImpl_0(){
  $clinit_ContactRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1599, 636, {}, ContactRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_5(){
  return 'com.lemania.sis.shared.service.ContactRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_5(typeToken){
  return dynamicCast(tokensToTypes_5.get_2(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_9(type_0){
  return dynamicCast(typesToTokens_5.get_2(type_0), Q$String);
}
;
_.isEntityType = function isEntityType_6(type_0){
  return $contains_1(entityProxyTypes_5, type_0);
}
;
_.isValueType = function isValueType_6(type_0){
  return $contains_1(valueProxyTypes_5, type_0);
}
;
var entityProxyTypes_5, tokensToTypes_5, typesToTokens_5, valueProxyTypes_5;
function ContactRequestFactory_ContactRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1600, 646, makeCastMap([Q$AbstractRequestContext]), ContactRequestFactory_ContactRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_5(){
  return !FACTORY_6 && (FACTORY_6 = new ContactRequestFactory_ContactRequestContextImpl_FactoryImpl_0) , FACTORY_6;
}
;
var FACTORY_6;
function ContactRequestFactory_ContactRequestContextImpl$1X_0(this$0, val$lastName, val$firstName, val$email, val$message){
  this.val$lastName = val$lastName;
  this.val$firstName = val$firstName;
  this.val$email = val$email;
  this.val$message = val$message;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1601, 645, makeCastMap([Q$AbstractRequest]), ContactRequestFactory_ContactRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_32(){
  return new RequestData_0('6ufXlHRbcpJq62hfd1D_6sdbJ9Q=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$lastName, this.val$firstName, this.val$email, this.val$message]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
function ContactRequestFactory_ContactRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1602, 571, makeCastMap([Q$EnumMap]), ContactRequestFactory_ContactRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_6(map_0){
}
;
_.initializeEnumMap = function initializeEnumMap_6(){
}
;
var Lcom_lemania_sis_client_presenter_ContactPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ContactPresenter', 775), Lcom_lemania_sis_client_presenter_ContactPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ContactPresenter$1', 776), Lcom_lemania_sis_client_view_ContactView_2_classLit = createForClass('com.lemania.sis.client.view.', 'ContactView', 1151), Lcom_lemania_sis_client_view_ContactView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'ContactView_BinderImpl', 1152), Lcom_lemania_sis_client_view_ContactView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'ContactView_BinderImpl$Widgets', 1153), Lcom_lemania_sis_client_view_ContactView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'ContactView_BinderImpl$Widgets$1', 1154), Lcom_lemania_sis_shared_service_ContactRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ContactRequestFactoryImpl', 1599), Lcom_lemania_sis_shared_service_ContactRequestFactory_1ContactRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ContactRequestFactory_ContactRequestContextImpl', 1600), Lcom_lemania_sis_shared_service_ContactRequestFactory_1ContactRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ContactRequestFactory_ContactRequestContextImpl$1X', 1601), Lcom_lemania_sis_shared_service_ContactRequestFactory_1ContactRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ContactRequestFactory_ContactRequestContextImpl_FactoryImpl', 1602);
$entry(onLoad)(1);
