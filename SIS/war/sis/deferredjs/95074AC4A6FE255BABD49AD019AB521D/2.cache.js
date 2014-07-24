function $sendMessage(this$static, lastName, firstName, email, message){
  var rc, rf, x;
  rf = new ContactRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ContactRequestFactory_ContactRequestContextImpl_0(rf);
  $fire((x = new ContactRequestFactory_ContactRequestContextImpl$1X_0(rc, lastName, firstName, email, message) , $addInvocation(rc.state.dialect, x) , x), new ContactPresenter$1_0(this$static));
}

function ContactPresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
}

defineSeed(1202, 805, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ContactPresenter, Q$ContactUiHandler]), ContactPresenter_0);
_.onBind = function onBind_13(){
  dynamicCast(this.view, Q$ContactPresenter$MyView).setUiHandlers(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_9(event_0){
}
;
_.onReset = function onReset_12(){
  $doFire(this.eventBus, new PageAfterSelectEvent_0('!contact'), null);
}
;
_.revealInParent = function revealInParent_4(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_47(this$static){
  $resetForm_0(dynamicCast(this$static.this$0.view, Q$ContactPresenter$MyView));
}

function ContactPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1203, 736, makeCastMap([Q$Receiver]), ContactPresenter$1_0);
_.onFailure_0 = function onFailure_60(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_60(response){
  $onSuccess_47(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$ContactPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$ContactPresenter$_annotation$$none$$) {
    result = new ContactPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$ContactView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$ContactPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$ContactPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$ContactPresenter$_annotation$$none$$;
}

defineSeed(1466, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_177(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$ContactPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onCmdSendClick(this$static){
  !!this$static.uiHandlers && $sendMessage(dynamicCast(this$static.uiHandlers, Q$ContactUiHandler), $getPropertyString(this$static.txtLastName.element, 'value'), $getPropertyString(this$static.txtFirstName.element, 'value'), $getPropertyString(this$static.txtEmail.element, 'value'), $getPropertyString(this$static.txtMessage.element, 'value'));
}

function $resetForm_0(this$static){
  $setText_1(this$static.txtLastName, '');
  $setText_1(this$static.txtFirstName, '');
  $setText_1(this$static.txtMessage, '');
  $setText_1(this$static.txtEmail, '');
}

function ContactView_0(){
  this.widget = $build_f_HTMLPanel1_8(new ContactView_BinderImpl$Widgets_0(this));
}

defineSeed(1515, 810, makeCastMap([Q$IsWidget, Q$ContactPresenter$MyView]), ContactView_0);
_.asWidget = function asWidget_7(){
  return this.widget;
}
;
_.txtEmail = null;
_.txtFirstName = null;
_.txtLastName = null;
_.txtMessage = null;
_.widget = null;
function ContactView_BinderImpl_0(){
}

defineSeed(1516, 1, {}, ContactView_BinderImpl_0);
function $build_f_HTMLPanel1_8(this$static){
  var attachRecord1, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_VerticalPanel4, f_Label5, f_Grid6, f_Label7, txtLastName, f_Label8, txtFirstName, f_Label9, txtEmail, f_Label10, txtMessage, f_Label11, cmdSend, sb;
  f_HTMLPanel1 = new HTMLPanel_0($html2_2(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord1 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord1.origParent?$insertBefore(attachRecord1.origParent, attachRecord1.element, attachRecord1.origSibling):orphan(attachRecord1.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_12(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'CONTACT', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_12(f_VerticalPanel2, (f_VerticalPanel4 = new VerticalPanel_0 , $add_12(f_VerticalPanel4, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Nous sommes \xE0 votre disposition pour toutes vos questions ou conseils. Merci de nous contacter en utilisant le formulaire ci-dessous.', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $add_12(f_VerticalPanel4, (f_Grid6 = new Grid_0 , $resizeColumns(f_Grid6, 2) , $resizeRows(f_Grid6, 5) , $setWidget_3(f_Grid6, 0, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Nom :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_3(f_Grid6, 0, 1, (txtLastName = new TextBox_0 , txtLastName.element['className'] = 'sis_textbox' , this$static.owner.txtLastName = txtLastName , txtLastName)) , $setWidget_3(f_Grid6, 1, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Pr\xE9nom :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_3(f_Grid6, 1, 1, (txtFirstName = new TextBox_0 , txtFirstName.element['className'] = 'sis_textbox' , this$static.owner.txtFirstName = txtFirstName , txtFirstName)) , $setWidget_3(f_Grid6, 2, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Email :', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_3(f_Grid6, 2, 1, (txtEmail = new TextBox_0 , txtEmail.element['className'] = 'sis_textbox' , this$static.owner.txtEmail = txtEmail , txtEmail)) , $setWidget_3(f_Grid6, 3, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Message :', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_3(f_Grid6, 3, 1, (txtMessage = new TextArea_1 , txtMessage.element.style['height'] = '300px' , txtMessage.element.style['width'] = '478px' , this$static.owner.txtMessage = txtMessage , txtMessage)) , $setWidget_3(f_Grid6, 4, 0, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label11.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_3(f_Grid6, 4, 1, (cmdSend = new Button_0 , $setHTML(cmdSend, (sb = new StringBuilder_0 , $append_1(sb.data, 'Envoyer') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , cmdSend.element.style['width'] = '100px' , $addDomHandler(cmdSend, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSend)) , f_Grid6.element['className'] = 'subSection' , f_Grid6.element.style['width'] = '600px' , f_Grid6.tableElem['cellPadding'] = 5 , f_Grid6)) , f_VerticalPanel4.element.style['width'] = '100%' , f_VerticalPanel4.table['cellSpacing'] = 20 , f_VerticalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ContactView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ContactView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1517, 1, {}, ContactView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function ContactView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1518, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ContactView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_22(event_0){
  $onCmdSendClick(this.this$1.owner);
}
;
_.this$1 = null;
function $html2_2(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
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
  tokensToTypes_10 = new HashMap_0;
  typesToTokens_10 = new HashMap_0;
  entityProxyTypes_10 = new HashSet_0;
  valueProxyTypes_10 = new HashSet_0;
}

function ContactRequestFactoryImpl_0(){
  $clinit_ContactRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1953, 731, {}, ContactRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_10(){
  return 'com.lemania.sis.shared.service.ContactRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_10(typeToken){
  return dynamicCast(tokensToTypes_10.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_14(type){
  return dynamicCast(typesToTokens_10.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_11(type){
  return $contains_1(entityProxyTypes_10, type);
}
;
_.isValueType = function isValueType_11(type){
  return $contains_1(valueProxyTypes_10, type);
}
;
var entityProxyTypes_10, tokensToTypes_10, typesToTokens_10, valueProxyTypes_10;
function ContactRequestFactory_ContactRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1954, 741, makeCastMap([Q$AbstractRequestContext]), ContactRequestFactory_ContactRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_10(){
  return !FACTORY_11 && (FACTORY_11 = new ContactRequestFactory_ContactRequestContextImpl_FactoryImpl_0) , FACTORY_11;
}
;
var FACTORY_11 = null;
function ContactRequestFactory_ContactRequestContextImpl$1X_0(this$0, val$lastName, val$firstName, val$email, val$message){
  this.val$lastName = val$lastName;
  this.val$firstName = val$firstName;
  this.val$email = val$email;
  this.val$message = val$message;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1955, 740, makeCastMap([Q$AbstractRequest]), ContactRequestFactory_ContactRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_50(){
  return new RequestData_0('6ufXlHRbcpJq62hfd1D_6sdbJ9Q=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$lastName, this.val$firstName, this.val$email, this.val$message]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$email = null;
_.val$firstName = null;
_.val$lastName = null;
_.val$message = null;
function ContactRequestFactory_ContactRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1956, 669, makeCastMap([Q$EnumMap]), ContactRequestFactory_ContactRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_11(map){
}
;
_.initializeEnumMap = function initializeEnumMap_11(){
}
;
var Lcom_lemania_sis_client_presenter_ContactPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ContactPresenter', 1202), Lcom_lemania_sis_client_presenter_ContactPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ContactPresenter$1', 1203), Lcom_lemania_sis_client_view_ContactView_2_classLit = createForClass('com.lemania.sis.client.view.', 'ContactView', 1515), Lcom_lemania_sis_client_view_ContactView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'ContactView_BinderImpl', 1516), Lcom_lemania_sis_client_view_ContactView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'ContactView_BinderImpl$Widgets', 1517), Lcom_lemania_sis_client_view_ContactView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'ContactView_BinderImpl$Widgets$1', 1518), Lcom_lemania_sis_shared_service_ContactRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ContactRequestFactoryImpl', 1953), Lcom_lemania_sis_shared_service_ContactRequestFactory_1ContactRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ContactRequestFactory_ContactRequestContextImpl', 1954), Lcom_lemania_sis_shared_service_ContactRequestFactory_1ContactRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ContactRequestFactory_ContactRequestContextImpl$1X', 1955), Lcom_lemania_sis_shared_service_ContactRequestFactory_1ContactRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ContactRequestFactory_ContactRequestContextImpl_FactoryImpl', 1956);
$entry(onLoad)(2);
