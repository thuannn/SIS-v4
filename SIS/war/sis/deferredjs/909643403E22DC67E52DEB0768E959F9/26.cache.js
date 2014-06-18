function StudentAfterAddEvent_0(student){
  $clinit_StudentAfterAddEvent();
  this.student = student;
}

defineSeed(792, 234, {}, StudentAfterAddEvent_0);
_.dispatch_0 = function dispatch_51(handler){
  dynamicCast(handler, Q$StudentAfterAddEvent$StudentAfterAddHandler).onStudentAfterAdd(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_52(){
  return TYPE_51;
}
;
_.student = null;
function $createStudent(this$static, firstName, lastName, email, active){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!firstName.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Pr\xE9nom');
    return;
  }
  if (!lastName.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Nom');
    return;
  }
  if (!isValidEmailAddress(email)) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Email');
    return;
  }
  rc = (rf = new StudentRequestFactoryImpl_0 , $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus)) , new StudentRequestFactory_StudentRequestContextImpl_0(rf));
  $fire((x = new StudentRequestFactory_StudentRequestContextImpl$8X_0(rc, firstName, lastName, email, active) , $addInvocation(rc.state.dialect, x) , x), new StudentAddPresenter$1_0(this$static));
}

function StudentAddPresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
  dynamicCast(this.view, Q$StudentAddPresenter$MyView).setUiHandlers(this);
}

defineSeed(1115, 725, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$StudentAddPresenter, Q$StudentAddUiHandler]), StudentAddPresenter_0);
_.onBind = function onBind_29(){
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_53(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_28(){
  $doFire(this.eventBus, new PageAfterSelectEvent_0('studentadd'), null);
}
;
_.revealInParent = function revealInParent_26(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_125(this$static, response){
  $doFire(this$static.this$0.eventBus, new StudentAfterAddEvent_0(response), null);
  $statusMessage(dynamicCast(this$static.this$0.view, Q$StudentAddPresenter$MyView), ($clinit_NotificationTypes() , "L'\xE9l\xE8ve a \xE9t\xE9 cr\xE9e avec succ\xE8s."));
}

function StudentAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1116, 664, makeCastMap([Q$Receiver]), StudentAddPresenter$1_0);
_.onFailure_0 = function onFailure_132(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_132(response){
  $onSuccess_125(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $onStudentAfterAdd(this$static, event_0){
  var rc, rf, student, updatedUser;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  student = event_0.student;
  updatedUser = dynamicCast($create_1(rc, Lcom_lemania_sis_shared_UserProxy_2_classLit), Q$UserProxy);
  updatedUser.setFullName(student.getFirstName() + ' ' + student.getLastName());
  updatedUser.setActive(student.getIsActive());
  updatedUser.setAdmin(($clinit_Boolean() , $clinit_Boolean() , FALSE_1));
  updatedUser.setIsProf(FALSE_1);
  updatedUser.setIsStudent(TRUE_1);
  updatedUser.setEmail(student.getEmail());
  updatedUser.setUserName(student.getEmail());
  updatedUser.setPassword($substring(toPowerOfTwoString_0(doubleToLongBits(Math.random())), 8));
  $fire($save_3(rc, updatedUser), new UserManagementPresenter$4_0);
}

function UserManagementPresenter$4_0(){
}

defineSeed(1135, 664, makeCastMap([Q$Receiver]), UserManagementPresenter$4_0);
_.onFailure_0 = function onFailure_141(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_141(response){
  throwClassCastExceptionUnlessNull(response);
  alert_0(($clinit_NotificationTypes() , "Un code d'acc\xE8s a \xE9t\xE9 cr\xE9\xE9 pour cet \xE9l\xE8ve."));
}
;
defineSeed(1139, 756, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfessorAfterAddEvent$ProfessorAfterAddHandler, Q$StudentAfterAddEvent$StudentAfterAddHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler]));
_.onStudentAfterAdd = function onStudentAfterAdd_0(event_0){
  $getPresenter_0(this, new UserManagementPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
function $success_42(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new UserManagementPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function UserManagementPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1140, 738, {}, UserManagementPresenterMyProxyImpl$1_0);
_.success = function success_44(presenter){
  $success_42(this, dynamicCast(presenter, Q$UserManagementPresenter));
}
;
_.val$event = null;
function UserManagementPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(1141, 1, {}, UserManagementPresenterMyProxyImpl$1$1_0);
_.execute_1 = function execute_71(){
  $onStudentAfterAdd(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $get_Key$type$com$lemania$sis$client$presenter$StudentAddPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$StudentAddPresenter$_annotation$$none$$) {
    result = new StudentAddPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$StudentAddView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$StudentAddPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$StudentAddPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$StudentAddPresenter$_annotation$$none$$;
}

defineSeed(1186, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_162(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$StudentAddPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onCmdSaveClick_7(this$static){
  !!this$static.uiHandlers && $createStudent(dynamicCast(this$static.uiHandlers, Q$StudentAddUiHandler), $getPropertyString(this$static.txtFirstName.element, 'value'), $getPropertyString(this$static.txtLastName.element, 'value'), $getPropertyString(this$static.txtEmail.element, 'value'), $getValue_0(this$static.blnActive));
}

function $onTxtFirstNameKeyUp(this$static){
  $equals_5($getPropertyString(this$static.txtFirstName.element, 'value'), '')?$setText_1(this$static.txtEmail, $trim($getPropertyString(this$static.txtLastName.element, 'value')).toLowerCase() + '@eprofil.ch'):$equals_5($getPropertyString(this$static.txtLastName.element, 'value'), '')?$setText_1(this$static.txtEmail, $getPropertyString(this$static.txtFirstName.element, 'value').substr(0, 1 - 0).toLowerCase() + '@eprofil.ch'):$setText_1(this$static.txtEmail, $getPropertyString(this$static.txtFirstName.element, 'value').substr(0, 1 - 0).toLowerCase() + '.' + $trim($getPropertyString(this$static.txtLastName.element, 'value')).toLowerCase() + '@eprofil.ch');
}

function $onTxtLastNameKeyUp(this$static){
  $equals_5($getPropertyString(this$static.txtFirstName.element, 'value'), '')?$setText_1(this$static.txtEmail, $trim($getPropertyString(this$static.txtLastName.element, 'value')).toLowerCase() + '@eprofil.ch'):$equals_5($getPropertyString(this$static.txtLastName.element, 'value'), '')?$setText_1(this$static.txtEmail, $getPropertyString(this$static.txtFirstName.element, 'value').substr(0, 1 - 0).toLowerCase() + '@eprofil.ch'):$setText_1(this$static.txtEmail, $getPropertyString(this$static.txtFirstName.element, 'value').substr(0, 1 - 0).toLowerCase() + '.' + $trim($getPropertyString(this$static.txtLastName.element, 'value')).toLowerCase() + '@eprofil.ch');
}

function $statusMessage(this$static, msg){
  $setText_0(this$static.lblStatus, msg);
  $setText_1(this$static.txtLastName, '');
  $setText_1(this$static.txtFirstName, '');
  $setText_1(this$static.txtEmail, '');
  $setValue_0(this$static.blnActive, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
}

function StudentAddView_0(){
  this.widget = $build_f_HTMLPanel1_26(new StudentAddView_BinderImpl$Widgets_0(this));
}

defineSeed(1509, 730, makeCastMap([Q$IsWidget, Q$StudentAddPresenter$MyView]), StudentAddView_0);
_.asWidget = function asWidget_29(){
  return this.widget;
}
;
_.blnActive = null;
_.lblStatus = null;
_.txtEmail = null;
_.txtFirstName = null;
_.txtLastName = null;
_.widget = null;
function StudentAddView_BinderImpl_0(){
}

defineSeed(1510, 1, {}, StudentAddView_BinderImpl_0);
function $build_f_HTMLPanel1_26(this$static){
  var attachRecord25, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Label4, f_Grid5, f_Label6, txtLastName, f_Label7, txtFirstName, f_Label8, txtEmail, f_Label9, blnActive, f_Label10, f_Label11, cmdSave, f_Label12, lblStatus;
  f_HTMLPanel1 = new HTMLPanel_0($html1_18(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord25 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord25.origParent?$insertBefore(attachRecord25.origParent, attachRecord25.element, attachRecord25.origSibling):orphan(attachRecord25.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT)) , $add_12(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label3, ALIGN_CENTER) , $setTextOrHtml(f_Label3.directionalTextHelper, 'RAJOUTER UN ELEVE', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_12(f_VerticalPanel2, (f_Label4 = new Label_0 , f_Label4.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label4.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , $add_12(f_VerticalPanel2, (f_Grid5 = new Grid_0 , $resizeColumns(f_Grid5, 2) , $resizeRows(f_Grid5, 7) , $setWidget_2(f_Grid5, 0, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Nom :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_2(f_Grid5, 0, 1, (txtLastName = new TextBox_0 , txtLastName.element['className'] = 'sis_textbox' , txtLastName.element.style['width'] = '' , $addDomHandler(txtLastName, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_KeyUpEvent() , $clinit_KeyUpEvent() , TYPE_3)) , this$static.owner.txtLastName = txtLastName , txtLastName)) , $setWidget_2(f_Grid5, 1, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Pr\xE9nom :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_2(f_Grid5, 1, 1, (txtFirstName = new TextBox_0 , txtFirstName.element['className'] = 'sis_textbox' , txtFirstName.element.style['width'] = '' , $addDomHandler(txtFirstName, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE_3) , this$static.owner.txtFirstName = txtFirstName , txtFirstName)) , $setWidget_2(f_Grid5, 2, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, "E-mail (nom d'utilisateur) :", false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_2(f_Grid5, 2, 1, (txtEmail = new TextBox_0 , txtEmail.element['className'] = 'sis_textbox' , txtEmail.element.style['width'] = '' , this$static.owner.txtEmail = txtEmail , txtEmail)) , $setWidget_2(f_Grid5, 3, 0, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label9.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_2(f_Grid5, 3, 1, (blnActive = new CheckBox_0 , $setTextOrHtml(blnActive.directionalTextHelper, 'Actif', false) , $setValue_0(blnActive, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , this$static.owner.blnActive = blnActive , blnActive)) , $setWidget_2(f_Grid5, 4, 0, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label10.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_2(f_Grid5, 5, 0, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label11.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_2(f_Grid5, 5, 1, (cmdSave = new Button_0 , $setInnerText(cmdSave.element, 'Enregistrer') , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSave)) , $setWidget_2(f_Grid5, 6, 0, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label12.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_2(f_Grid5, 6, 1, (lblStatus = new Label_0 , this$static.owner.lblStatus = lblStatus , lblStatus)) , f_Grid5.tableElem['cellSpacing'] = 5 , f_Grid5.tableElem['cellPadding'] = 5 , f_Grid5)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function StudentAddView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new StudentAddView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new StudentAddView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new StudentAddView_BinderImpl$Widgets$3_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1511, 1, {}, StudentAddView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function StudentAddView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1512, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), StudentAddView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_36(event_0){
  $onCmdSaveClick_7(this.this$1.owner);
}
;
_.this$1 = null;
function StudentAddView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1513, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), StudentAddView_BinderImpl$Widgets$2_0);
_.onKeyUp = function onKeyUp_2(event_0){
  $onTxtLastNameKeyUp(this.this$1.owner);
}
;
_.this$1 = null;
function StudentAddView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1514, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), StudentAddView_BinderImpl$Widgets$3_0);
_.onKeyUp = function onKeyUp_3(event_0){
  $onTxtFirstNameKeyUp(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_18(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$view$StudentAddView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$StudentAddView$_annotation$$none$$) {
    result = new StudentAddView_0(new StudentAddView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$StudentAddView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$StudentAddView$_annotation$$none$$;
}

function StudentRequestFactory_StudentRequestContextImpl$8X_0(this$0, val$firstName, val$lastName, val$email, val$active){
  this.val$firstName = val$firstName;
  this.val$lastName = val$lastName;
  this.val$email = val$email;
  this.val$active = val$active;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1731, 668, makeCastMap([Q$AbstractRequest]), StudentRequestFactory_StudentRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_70(){
  return new RequestData_0('H7T3piM3Kmr8gzT3cosCJ1Jim9w=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$firstName, this.val$lastName, this.val$email, this.val$active]), this.propertyRefs, Lcom_lemania_sis_shared_StudentProxy_2_classLit, null);
}
;
_.val$active = null;
_.val$email = null;
_.val$firstName = null;
_.val$lastName = null;
var Lcom_lemania_sis_client_presenter_StudentAddPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentAddPresenter', 1115), Lcom_lemania_sis_client_presenter_StudentAddPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentAddPresenter$1', 1116), Lcom_lemania_sis_client_presenter_UserManagementPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenter$4', 1135), Lcom_lemania_sis_client_event_StudentAfterAddEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'StudentAfterAddEvent', 792), Lcom_lemania_sis_client_presenter_UserManagementPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenterMyProxyImpl$1', 1140), Lcom_lemania_sis_client_presenter_UserManagementPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenterMyProxyImpl$1$1', 1141), Lcom_lemania_sis_client_view_StudentAddView_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentAddView', 1509), Lcom_lemania_sis_client_view_StudentAddView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentAddView_BinderImpl', 1510), Lcom_lemania_sis_client_view_StudentAddView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentAddView_BinderImpl$Widgets', 1511), Lcom_lemania_sis_client_view_StudentAddView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentAddView_BinderImpl$Widgets$1', 1512), Lcom_lemania_sis_client_view_StudentAddView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentAddView_BinderImpl$Widgets$2', 1513), Lcom_lemania_sis_client_view_StudentAddView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentAddView_BinderImpl$Widgets$3', 1514), Lcom_lemania_sis_shared_service_StudentRequestFactory_1StudentRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'StudentRequestFactory_StudentRequestContextImpl$8X', 1731);
$entry(onLoad)(26);