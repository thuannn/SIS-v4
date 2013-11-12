function StudentAfterStatusChangeEvent_0(studentId, studentEmail, status_0){
  $clinit_StudentAfterStatusChangeEvent();
  this.studentId = studentId;
  this.studentEmail = studentEmail;
  this.status_0 = status_0;
}

defineSeed(752, 231, {}, StudentAfterStatusChangeEvent_0);
_.dispatch_0 = function dispatch_43(handler){
  dynamicCast(handler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler).onStudentAfterDesactivate(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_44(){
  return TYPE_43;
}
;
_.status_0 = null;
_.studentEmail = '';
_.studentId = '';
function $onStudentAfterDesactivate(this$static, event_0){
  var rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new BulletinRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinRequestFactory_BulletinRequestContextImpl_0(rf);
  $fire($updateBulletinStatus(rc, event_0.studentId, event_0.status_0), new FrmBulletinManagementPresenter$15_0);
}

defineSeed(823, 689, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler, Q$FrmBulletinManagementPresenter, Q$FrmBulletinManagementUiHandler]));
_.onStudentAfterDesactivate = function onStudentAfterDesactivate(event_0){
  $onStudentAfterDesactivate(this, event_0);
}
;
function FrmBulletinManagementPresenter$15_0(){
}

defineSeed(830, 628, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$15_0);
_.onFailure_0 = function onFailure_28(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_28(response){
  throwClassCastExceptionUnlessNull(response);
}
;
defineSeed(840, 720, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler]));
_.onStudentAfterDesactivate = function onStudentAfterDesactivate_0(event_0){
  $getPresenter_0(this, new FrmBulletinManagementPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
function $success_9(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new FrmBulletinManagementPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function FrmBulletinManagementPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(841, 702, {}, FrmBulletinManagementPresenterMyProxyImpl$1_0);
_.success = function success_11(presenter){
  $success_9(this, dynamicCast(presenter, Q$FrmBulletinManagementPresenter));
}
;
_.val$event = null;
function FrmBulletinManagementPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(842, 1, {}, FrmBulletinManagementPresenterMyProxyImpl$1$1_0);
_.execute_0 = function execute_38(){
  $onStudentAfterDesactivate(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $getStudentRequestContext(this$static){
  var rf;
  rf = new StudentRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  return new StudentRequestFactory_StudentRequestContextImpl_0(rf);
}

function $updateStudentEmail(this$static, student, email){
  var rc, studentForUpdate;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if ($equals_5(student.getEmail(), email))
    return;
  if (isValidEmailAddress(email)) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Email');
    return;
  }
  rc = $getStudentRequestContext(this$static);
  studentForUpdate = dynamicCast($editProxy(rc, student), Q$StudentProxy);
  studentForUpdate.setEmail(email);
  $fire($saveAndReturn_2(rc, studentForUpdate), new StudentPresenter$5_0(this$static));
}

function $updateStudentFirstName(this$static, student, firstName){
  var rc, studentForUpdate;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if ($equals_5(student.getFirstName(), firstName))
    return;
  if ($equals_5(firstName, '')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Pr\xE9nom');
    return;
  }
  rc = $getStudentRequestContext(this$static);
  studentForUpdate = dynamicCast($editProxy(rc, student), Q$StudentProxy);
  studentForUpdate.setFirstName(firstName);
  $fire($saveAndReturn_2(rc, studentForUpdate), new StudentPresenter$3_0(this$static));
}

function $updateStudentLastName(this$static, student, lastName){
  var rc, studentForUpdate;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if ($equals_5(student.getLastName(), lastName))
    return;
  if ($equals_5(lastName, '')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Nom');
    return;
  }
  rc = $getStudentRequestContext(this$static);
  studentForUpdate = dynamicCast($editProxy(rc, student), Q$StudentProxy);
  studentForUpdate.setLastName(lastName);
  $fire($saveAndReturn_2(rc, studentForUpdate), new StudentPresenter$4_0(this$static));
}

function $updateStudentStatus(this$static, student, value){
  var rc, studentForUpdate;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rc = $getStudentRequestContext(this$static);
  studentForUpdate = dynamicCast($editProxy(rc, student), Q$StudentProxy);
  studentForUpdate.setIsActive(value);
  $fire($saveAndReturn_2(rc, studentForUpdate), new StudentPresenter$2_0(this$static, student, value));
}

function StudentPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
  dynamicCast(this.view, Q$StudentPresenter$MyView).setUiHandlers(this);
}

defineSeed(1000, 689, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$StudentPresenter, Q$StudentListUiHandler]), StudentPresenter_0);
_.onBind = function onBind_25(){
  $initializeTable_3(dynamicCast(this.view, Q$StudentPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_49(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_24(){
  var rc, x;
  rc = $getStudentRequestContext(this);
  $fire((x = new StudentRequestFactory_StudentRequestContextImpl$1X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new StudentPresenter$1_0(this));
  $doFire(this.eventBus, new PageAfterSelectEvent_0('students'), null);
}
;
_.revealInParent = function revealInParent_24(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_100(this$static, response){
  $setTableData(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1001, 628, makeCastMap([Q$Receiver]), StudentPresenter$1_0);
_.onFailure_0 = function onFailure_102(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_102(response){
  $onSuccess_100(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_101(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
  $doFire(this$static.this$0.eventBus, new StudentAfterStatusChangeEvent_0('' + toString_6(this$static.val$student.getId_0().value_0), this$static.val$student.getEmail(), this$static.val$value), null);
}

function StudentPresenter$2_0(this$0, val$student, val$value){
  this.this$0 = this$0;
  this.val$student = val$student;
  this.val$value = val$value;
}

defineSeed(1002, 628, makeCastMap([Q$Receiver]), StudentPresenter$2_0);
_.onFailure_0 = function onFailure_103(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_103(response){
  $onSuccess_101(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
_.val$student = null;
_.val$value = null;
function $onSuccess_102(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1003, 628, makeCastMap([Q$Receiver]), StudentPresenter$3_0);
_.onFailure_0 = function onFailure_104(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_104(response){
  $onSuccess_102(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $onSuccess_103(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1004, 628, makeCastMap([Q$Receiver]), StudentPresenter$4_0);
_.onFailure_0 = function onFailure_105(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_105(response){
  $onSuccess_103(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $onSuccess_104(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1005, 628, makeCastMap([Q$Receiver]), StudentPresenter$5_0);
_.onFailure_0 = function onFailure_106(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_106(response){
  $onSuccess_104(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $onStudentAfterDesactivate_0(this$static, event_0){
  var rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new UserRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire($updateUserActiveStatus(rc, event_0.studentEmail, event_0.status_0), new UserManagementPresenter$7_0);
}

function UserManagementPresenter$7_0(){
}

defineSeed(1017, 628, makeCastMap([Q$Receiver]), UserManagementPresenter$7_0);
_.onFailure_0 = function onFailure_113(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_113(response){
  throwClassCastExceptionUnlessNull(response);
}
;
defineSeed(1018, 720, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfessorAfterAddEvent$ProfessorAfterAddHandler, Q$StudentAfterAddEvent$StudentAfterAddHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler]));
_.onStudentAfterDesactivate = function onStudentAfterDesactivate_2(event_0){
  $getPresenter_0(this, new UserManagementPresenterMyProxyImpl$3_0(this.eventBus, event_0));
}
;
function $success_37(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new UserManagementPresenterMyProxyImpl$3$1_0(presenter, this$static.val$event));
}

function UserManagementPresenterMyProxyImpl$3_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1023, 702, {}, UserManagementPresenterMyProxyImpl$3_0);
_.success = function success_39(presenter){
  $success_37(this, dynamicCast(presenter, Q$UserManagementPresenter));
}
;
_.val$event = null;
function UserManagementPresenterMyProxyImpl$3$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(1024, 1, {}, UserManagementPresenterMyProxyImpl$3$1_0);
_.execute_0 = function execute_66(){
  $onStudentAfterDesactivate_0(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $get_Key$type$com$lemania$sis$client$presenter$StudentPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$StudentPresenter$_annotation$$none$$) {
    result = new StudentPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$StudentView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$StudentPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$StudentPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$StudentPresenter$_annotation$$none$$;
}

defineSeed(1061, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_129(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$StudentPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeTable_3(this$static){
  var cellActive, colActive, colEmail, colFirstName, colLastName;
  colFirstName = new StudentView$1_0(new EditTextCell_0);
  $addColumn(this$static.tblStudents, colFirstName, 'Nom');
  $setFieldUpdater(colFirstName, new StudentView$2_0(this$static));
  colLastName = new StudentView$3_0(new EditTextCell_0);
  $addColumn(this$static.tblStudents, colLastName, 'Pr\xE9nom');
  $setFieldUpdater(colLastName, new StudentView$4_0(this$static));
  colEmail = new StudentView$5_0(new EditTextCell_0);
  $addColumn(this$static.tblStudents, colEmail, 'Email');
  $setFieldUpdater(colEmail, new StudentView$6_0(this$static));
  cellActive = new CheckboxCell_0;
  colActive = new StudentView$7_0(cellActive);
  $addColumn(this$static.tblStudents, colActive, 'Active');
  $setFieldUpdater(colActive, new StudentView$8_0(this$static));
  $addDataDisplay(this$static.dataProvider, this$static.tblStudents);
  $setPageSize(this$static.tblStudents, 1000);
}

function $setTableData(this$static, studentList){
  $setList(this$static.dataProvider, studentList);
  $setHeight(this$static.tblStudents, '' + (studentList.size_1() * ($clinit_NotificationTypes() , lineHeight).value_0 + headerHeight.value_0) + 'px');
}

function $updateEditedStudent(this$static, student){
  $remove_12(this$static.dataProvider.listWrapper, this$static.selectedStudent);
  $add_13(this$static.dataProvider.listWrapper, this$static.selectedStudent, student);
  $refresh(this$static.dataProvider);
}

function StudentView_0(){
  this.dataProvider = new ListDataProvider_0;
  this.tblStudents = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_22(new StudentView_BinderImpl$Widgets_0(this));
}

defineSeed(1326, 694, makeCastMap([Q$IsWidget, Q$StudentPresenter$MyView]), StudentView_0);
_.asWidget = function asWidget_27(){
  return this.widget;
}
;
_.selectedStudent = -1;
_.widget = null;
function StudentView$1_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1327, 359, makeCastMap([Q$HasCell, Q$Column]), StudentView$1_0);
_.getValue = function getValue_57(object){
  return dynamicCast(object, Q$StudentProxy).getLastName();
}
;
function $update_23(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentLastName(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1328, 1, {}, StudentView$2_0);
_.update = function update_24(index, student, value){
  $update_23(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function StudentView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1329, 359, makeCastMap([Q$HasCell, Q$Column]), StudentView$3_0);
_.getValue = function getValue_58(object){
  return dynamicCast(object, Q$StudentProxy).getFirstName();
}
;
function $update_24(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentFirstName(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1330, 1, {}, StudentView$4_0);
_.update = function update_25(index, student, value){
  $update_24(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function StudentView$5_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1331, 359, makeCastMap([Q$HasCell, Q$Column]), StudentView$5_0);
_.getValue = function getValue_59(object){
  return dynamicCast(object, Q$StudentProxy).getEmail();
}
;
function $update_25(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentEmail(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1332, 1, {}, StudentView$6_0);
_.update = function update_26(index, student, value){
  $update_25(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function StudentView$7_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1333, 359, makeCastMap([Q$HasCell, Q$Column]), StudentView$7_0);
_.getValue = function getValue_60(student){
  return dynamicCast(student, Q$StudentProxy).getIsActive();
}
;
function $update_26(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentStatus(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1334, 1, {}, StudentView$8_0);
_.update = function update_27(index, student, value){
  $update_26(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function StudentView_BinderImpl_0(){
}

defineSeed(1335, 1, {}, StudentView_BinderImpl_0);
function $build_f_HTMLPanel1_22(this$static){
  var attachRecord22, f_HTMLPanel1, f_VerticalPanel2, f_Label3, tblStudents;
  f_HTMLPanel1 = new HTMLPanel_0($html1_17(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord22 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord22.origParent?$insertBefore(attachRecord22.origParent, attachRecord22.element, attachRecord22.origSibling):orphan(attachRecord22.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'LISTE DES ELEVES', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (tblStudents = this$static.owner.tblStudents , tblStudents.element.style['height'] = '500px' , tblStudents.element.style['width'] = '100%' , tblStudents)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function StudentView_BinderImpl$Widgets_0(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1336, 1, {}, StudentView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function $html1_17(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$view$StudentView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$StudentView$_annotation$$none$$) {
    result = new StudentView_0(new StudentView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$StudentView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$StudentView$_annotation$$none$$;
}

defineSeed(1398, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$StudentProxy]));
_.setEmail = function setEmail(email){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setEmail(email);
}
;
_.setFirstName = function setFirstName(firstName){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setFirstName(firstName);
}
;
_.setIsActive = function setIsActive_5(isActive){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setIsActive(isActive);
}
;
_.setLastName = function setLastName(lastName){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setLastName(lastName);
}
;
defineSeed(1399, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$StudentProxy]));
_.setEmail = function setEmail_0(email){
  $setProperty(this.this$0, 'email', email);
}
;
_.setFirstName = function setFirstName_0(firstName){
  $setProperty(this.this$0, 'firstName', firstName);
}
;
_.setIsActive = function setIsActive_6(isActive){
  $setProperty(this.this$0, 'isActive', isActive);
}
;
_.setLastName = function setLastName_0(lastName){
  $setProperty(this.this$0, 'lastName', lastName);
}
;
function $updateBulletinStatus(this$static, studentId, status_0){
  var x;
  x = new BulletinRequestFactory_BulletinRequestContextImpl$13X_0(this$static, studentId, status_0);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function BulletinRequestFactory_BulletinRequestContextImpl$13X_0(this$0, val$studentId, val$status){
  this.val$studentId = val$studentId;
  this.val$status = val$status;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1431, 632, makeCastMap([Q$AbstractRequest]), BulletinRequestFactory_BulletinRequestContextImpl$13X_0);
_.makeRequestData = function makeRequestData_13(){
  return new RequestData_0('_detNR3X0jEoy7Vjmne2z8sQm1s=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$studentId, this.val$status]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$status = null;
_.val$studentId = null;
function $saveAndReturn_2(this$static, newStudent){
  var x;
  x = new StudentRequestFactory_StudentRequestContextImpl$7X_0(this$static, newStudent);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function StudentRequestFactory_StudentRequestContextImpl$1X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1508, 632, makeCastMap([Q$AbstractRequest]), StudentRequestFactory_StudentRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_55(){
  return new RequestData_0('G2KD$kkdT6sFEa2oTck82epBU2U=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_StudentProxy_2_classLit);
}
;
function StudentRequestFactory_StudentRequestContextImpl$7X_0(this$0, val$newStudent){
  this.val$newStudent = val$newStudent;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1510, 632, makeCastMap([Q$AbstractRequest]), StudentRequestFactory_StudentRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_57(){
  return new RequestData_0('qI0_B1hYf67V$_VpVTF2RqSn4Ag=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newStudent]), this.propertyRefs, Lcom_lemania_sis_shared_StudentProxy_2_classLit, null);
}
;
_.val$newStudent = null;
function $updateUserActiveStatus(this$static, userEmail, userStatus){
  var x;
  x = new UserRequestFactory_UserRequestContextImpl$11X_0(this$static, userEmail, userStatus);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function UserRequestFactory_UserRequestContextImpl$11X_0(this$0, val$userEmail, val$userStatus){
  this.val$userEmail = val$userEmail;
  this.val$userStatus = val$userStatus;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1523, 632, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$11X_0);
_.makeRequestData = function makeRequestData_64(){
  return new RequestData_0('u8JubnwSt9DEPIbUYE7UKeV1NWo=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$userEmail, this.val$userStatus]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$userEmail = null;
_.val$userStatus = null;
var Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$15_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$15', 830), Lcom_lemania_sis_client_event_StudentAfterStatusChangeEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'StudentAfterStatusChangeEvent', 752), Lcom_lemania_sis_client_presenter_StudentPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter', 1000), Lcom_lemania_sis_client_presenter_StudentPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter$1', 1001), Lcom_lemania_sis_client_presenter_StudentPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter$2', 1002), Lcom_lemania_sis_client_presenter_StudentPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter$3', 1003), Lcom_lemania_sis_client_presenter_StudentPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter$4', 1004), Lcom_lemania_sis_client_presenter_StudentPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter$5', 1005), Lcom_lemania_sis_client_presenter_UserManagementPresenter$7_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenter$7', 1017), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenterMyProxyImpl$1', 841), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenterMyProxyImpl$1$1', 842), Lcom_lemania_sis_client_presenter_UserManagementPresenterMyProxyImpl$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenterMyProxyImpl$3', 1023), Lcom_lemania_sis_client_presenter_UserManagementPresenterMyProxyImpl$3$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenterMyProxyImpl$3$1', 1024), Lcom_lemania_sis_client_view_StudentView_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView', 1326), Lcom_lemania_sis_client_view_StudentView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$1', 1327), Lcom_lemania_sis_client_view_StudentView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$2', 1328), Lcom_lemania_sis_client_view_StudentView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$3', 1329), Lcom_lemania_sis_client_view_StudentView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$4', 1330), Lcom_lemania_sis_client_view_StudentView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$5', 1331), Lcom_lemania_sis_client_view_StudentView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$6', 1332), Lcom_lemania_sis_client_view_StudentView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$7', 1333), Lcom_lemania_sis_client_view_StudentView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$8', 1334), Lcom_lemania_sis_client_view_StudentView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView_BinderImpl', 1335), Lcom_lemania_sis_client_view_StudentView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView_BinderImpl$Widgets', 1336), Lcom_lemania_sis_shared_service_BulletinRequestFactory_1BulletinRequestContextImpl$13X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinRequestFactory_BulletinRequestContextImpl$13X', 1431), Lcom_lemania_sis_shared_service_StudentRequestFactory_1StudentRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'StudentRequestFactory_StudentRequestContextImpl$1X', 1508), Lcom_lemania_sis_shared_service_StudentRequestFactory_1StudentRequestContextImpl$7X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'StudentRequestFactory_StudentRequestContextImpl$7X', 1510), Lcom_lemania_sis_shared_service_UserRequestFactory_1UserRequestContextImpl$11X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'UserRequestFactory_UserRequestContextImpl$11X', 1523);
$entry(onLoad)(23);
