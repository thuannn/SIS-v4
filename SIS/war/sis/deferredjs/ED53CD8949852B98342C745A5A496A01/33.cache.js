function StudentAfterStatusChangeEvent_0(studentId, studentEmail, status_0){
  $clinit_StudentAfterStatusChangeEvent();
  this.studentId = studentId;
  this.studentEmail = studentEmail;
  this.status_0 = status_0;
}

defineSeed(873, 273, {}, StudentAfterStatusChangeEvent_0);
_.dispatch_0 = function dispatch_57(handler){
  dynamicCast(handler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler).onStudentAfterDesactivate(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_58(){
  return TYPE_57;
}
;
_.status_0 = null;
_.studentEmail = '';
_.studentId = '';
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
  if ($equals_6(student.getEmail(), email))
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
  if ($equals_6(student.getFirstName(), firstName))
    return;
  if ($equals_6(firstName, '')) {
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
  if ($equals_6(student.getLastName(), lastName))
    return;
  if ($equals_6(lastName, '')) {
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
  Presenter_1.call(this, eventBus, view, proxy, null);
  dynamicCast(this.view, Q$StudentPresenter$MyView).setUiHandlers(this);
  $initializeTable_2(dynamicCast(this.view, Q$StudentPresenter$MyView));
}

defineSeed(1084, 798, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$StudentListUiHandler, Q$StudentPresenter]), StudentPresenter_0);
_.onBind = function onBind_9(){
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_5(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_8(){
  var rc, x;
  rc = $getStudentRequestContext(this);
  $fire((x = new StudentRequestFactory_StudentRequestContextImpl$1X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new StudentPresenter$1_0(this));
  $doFire(this.eventBus, new PageAfterSelectEvent_0('students'), null);
}
;
_.revealInParent = function revealInParent_2(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_33(this$static, response){
  $setTableData(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1085, 729, makeCastMap([Q$Receiver]), StudentPresenter$1_0);
_.onFailure_0 = function onFailure_41(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_41(response){
  $onSuccess_33(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_34(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
  $doFire(this$static.this$0.eventBus, new StudentAfterStatusChangeEvent_0('' + toString_6(this$static.val$student.getId_0().value_0), this$static.val$student.getEmail(), this$static.val$value), null);
}

function StudentPresenter$2_0(this$0, val$student, val$value){
  this.this$0 = this$0;
  this.val$student = val$student;
  this.val$value = val$value;
}

defineSeed(1086, 729, makeCastMap([Q$Receiver]), StudentPresenter$2_0);
_.onFailure_0 = function onFailure_42(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_42(response){
  $onSuccess_34(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
_.val$student = null;
_.val$value = null;
function $onSuccess_35(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1087, 729, makeCastMap([Q$Receiver]), StudentPresenter$3_0);
_.onFailure_0 = function onFailure_43(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_43(response){
  $onSuccess_35(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $onSuccess_36(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1088, 729, makeCastMap([Q$Receiver]), StudentPresenter$4_0);
_.onFailure_0 = function onFailure_44(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_44(response){
  $onSuccess_36(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $onSuccess_37(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1089, 729, makeCastMap([Q$Receiver]), StudentPresenter$5_0);
_.onFailure_0 = function onFailure_45(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_45(response){
  $onSuccess_37(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $initializeTable_2(this$static){
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
  $setDisplay_0(this$static.pagerStudent, this$static.tblStudents);
  $addDataDisplay(this$static.dataProvider, this$static.tblStudents);
}

function $setTableData(this$static, studentList){
  $clear_3(this$static.dataProvider.listWrapper);
  $setList(this$static.dataProvider, studentList);
  $flushNow(this$static.dataProvider.listWrapper);
}

function $updateEditedStudent(this$static, student){
  $remove_12(this$static.dataProvider.listWrapper, this$static.selectedStudent);
  $add_14(this$static.dataProvider.listWrapper, this$static.selectedStudent, student);
  $refresh(this$static.dataProvider);
}

function StudentView_0(){
  this.dataProvider = new ListDataProvider_0;
  this.tblStudents = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_6(new StudentView_BinderImpl$Widgets_0(this));
}

defineSeed(1094, 803, makeCastMap([Q$IsWidget, Q$StudentPresenter$MyView]), StudentView_0);
_.asWidget = function asWidget_5(){
  return this.widget;
}
;
_.pagerStudent = null;
_.selectedStudent = -1;
_.widget = null;
function StudentView$1_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1095, 427, makeCastMap([Q$HasCell, Q$Column]), StudentView$1_0);
_.getValue = function getValue_26(object){
  return dynamicCast(object, Q$StudentProxy).getLastName();
}
;
function $update_11(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentLastName(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1096, 1, {}, StudentView$2_0);
_.update = function update_12(index, student, value){
  $update_11(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function StudentView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1097, 427, makeCastMap([Q$HasCell, Q$Column]), StudentView$3_0);
_.getValue = function getValue_27(object){
  return dynamicCast(object, Q$StudentProxy).getFirstName();
}
;
function $update_12(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentFirstName(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1098, 1, {}, StudentView$4_0);
_.update = function update_13(index, student, value){
  $update_12(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function StudentView$5_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1099, 427, makeCastMap([Q$HasCell, Q$Column]), StudentView$5_0);
_.getValue = function getValue_28(object){
  return dynamicCast(object, Q$StudentProxy).getEmail();
}
;
function $update_13(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentEmail(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1100, 1, {}, StudentView$6_0);
_.update = function update_14(index, student, value){
  $update_13(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function StudentView$7_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1101, 427, makeCastMap([Q$HasCell, Q$Column]), StudentView$7_0);
_.getValue = function getValue_29(student){
  return dynamicCast(student, Q$StudentProxy).getIsActive();
}
;
function $update_14(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentStatus(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1102, 1, {}, StudentView$8_0);
_.update = function update_15(index, student, value){
  $update_14(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function StudentView_BinderImpl_0(){
}

defineSeed(1103, 1, {}, StudentView_BinderImpl_0);
function $build_f_HTMLPanel1_6(this$static){
  var attachRecord32, f_HTMLPanel1, f_VerticalPanel2, f_Label3, tblStudents;
  f_HTMLPanel1 = new HTMLPanel_0($html1_5(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord32 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord32.origParent?$insertBefore(attachRecord32.origParent, attachRecord32.element, attachRecord32.origSibling):orphan(attachRecord32.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_12(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'LISTE DES ELEVES', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_12(f_VerticalPanel2, (tblStudents = this$static.owner.tblStudents , tblStudents.element.style['height'] = '450px' , tblStudents.element.style['width'] = '100%' , $setVisibleRange(tblStudents, new Range_1($getVisibleRange(tblStudents.presenter).start, 15)) , tblStudents)) , $add_12(f_VerticalPanel2, this$static.pagerStudent) , $setCellHorizontalAlignment(f_VerticalPanel2, this$static.pagerStudent, ALIGN_CENTER) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function StudentView_BinderImpl$Widgets_0(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.pagerStudent = new SimplePager_0;
  $setPage(this.pagerStudent, 0);
  $setPageSize_0(this.pagerStudent, 15);
  $setPageStart(this.pagerStudent, 0);
  this.owner.pagerStudent = this.pagerStudent;
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1104, 1, {}, StudentView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
_.pagerStudent = null;
function $html1_5(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$form$studentmgt$StudentPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$studentmgt$StudentPresenter$_annotation$$none$$) {
    result = new StudentPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$form$studentmgt$StudentView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$sis$client$form$studentmgt$StudentPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$form$studentmgt$StudentPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$studentmgt$StudentPresenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$sis$client$form$studentmgt$StudentView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$studentmgt$StudentView$_annotation$$none$$) {
    result = new StudentView_0(new StudentView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$form$studentmgt$StudentView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$studentmgt$StudentView$_annotation$$none$$;
}

defineSeed(1108, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_46(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$form$studentmgt$StudentPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onStudentAfterDesactivate(this$static, event_0){
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

defineSeed(1116, 729, makeCastMap([Q$Receiver]), UserManagementPresenter$7_0);
_.onFailure_0 = function onFailure_53(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_53(response){
  throwClassCastExceptionUnlessNull(response);
}
;
defineSeed(1118, 826, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ParentAfterAddEvent$ParentAfterAddHandler, Q$ProfessorAfterAddEvent$ProfessorAfterAddHandler, Q$StudentAfterAddEvent$StudentAfterAddHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler]));
_.onStudentAfterDesactivate = function onStudentAfterDesactivate_0(event_0){
  $getPresenter_0(this, new UserManagementPresenterMyProxyImpl$3_0(this.eventBus, event_0));
}
;
function $success_13(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new UserManagementPresenterMyProxyImpl$3$1_0(presenter, this$static.val$event));
}

function UserManagementPresenterMyProxyImpl$3_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1123, 811, {}, UserManagementPresenterMyProxyImpl$3_0);
_.success = function success_15(presenter){
  $success_13(this, dynamicCast(presenter, Q$UserManagementPresenter));
}
;
_.val$event = null;
function UserManagementPresenterMyProxyImpl$3$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(1124, 1, {}, UserManagementPresenterMyProxyImpl$3$1_0);
_.execute_0 = function execute_42(){
  $onStudentAfterDesactivate(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $onStudentAfterDesactivate_0(this$static, event_0){
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

defineSeed(1255, 798, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler, Q$FrmBulletinManagementPresenter, Q$FrmBulletinManagementUiHandler]));
_.onStudentAfterDesactivate = function onStudentAfterDesactivate_1(event_0){
  $onStudentAfterDesactivate_0(this, event_0);
}
;
function FrmBulletinManagementPresenter$15_0(){
}

defineSeed(1262, 729, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$15_0);
_.onFailure_0 = function onFailure_81(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_81(response){
  throwClassCastExceptionUnlessNull(response);
}
;
defineSeed(1272, 826, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler]));
_.onStudentAfterDesactivate = function onStudentAfterDesactivate_2(event_0){
  $getPresenter_0(this, new FrmBulletinManagementPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
function $success_26(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new FrmBulletinManagementPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function FrmBulletinManagementPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1273, 811, {}, FrmBulletinManagementPresenterMyProxyImpl$1_0);
_.success = function success_28(presenter){
  $success_26(this, dynamicCast(presenter, Q$FrmBulletinManagementPresenter));
}
;
_.val$event = null;
function FrmBulletinManagementPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(1274, 1, {}, FrmBulletinManagementPresenterMyProxyImpl$1$1_0);
_.execute_0 = function execute_55(){
  $onStudentAfterDesactivate_0(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $updateBulletinStatus(this$static, studentId, status_0){
  var x;
  x = new BulletinRequestFactory_BulletinRequestContextImpl$14X_0(this$static, studentId, status_0);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function BulletinRequestFactory_BulletinRequestContextImpl$14X_0(this$0, val$studentId, val$status){
  this.val$studentId = val$studentId;
  this.val$status = val$status;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1854, 733, makeCastMap([Q$AbstractRequest]), BulletinRequestFactory_BulletinRequestContextImpl$14X_0);
_.makeRequestData = function makeRequestData_2(){
  return new RequestData_0('lvxznbp4eMrBcvgvPQqU4i9CPXw=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$studentId, this.val$status]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$status = null;
_.val$studentId = null;
defineSeed(2028, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$StudentProxy]));
_.setEmail = function setEmail(email){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setEmail(email);
}
;
_.setFirstName = function setFirstName_1(firstName){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setFirstName(firstName);
}
;
_.setIsActive = function setIsActive_7(isActive){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setIsActive(isActive);
}
;
_.setLastName = function setLastName_1(lastName){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setLastName(lastName);
}
;
defineSeed(2029, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$StudentProxy]));
_.setEmail = function setEmail_0(email){
  $setProperty(this.this$0, 'email', email);
}
;
_.setFirstName = function setFirstName_2(firstName){
  $setProperty(this.this$0, 'firstName', firstName);
}
;
_.setIsActive = function setIsActive_8(isActive){
  $setProperty(this.this$0, 'isActive', isActive);
}
;
_.setLastName = function setLastName_2(lastName){
  $setProperty(this.this$0, 'lastName', lastName);
}
;
function $saveAndReturn_2(this$static, newStudent){
  var x;
  x = new StudentRequestFactory_StudentRequestContextImpl$7X_0(this$static, newStudent);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function StudentRequestFactory_StudentRequestContextImpl$1X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(2032, 733, makeCastMap([Q$AbstractRequest]), StudentRequestFactory_StudentRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_91(){
  return new RequestData_0('m1r632p_cXVszsao6SuuXI9g3TA=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_student_StudentProxy_2_classLit);
}
;
function StudentRequestFactory_StudentRequestContextImpl$7X_0(this$0, val$newStudent){
  this.val$newStudent = val$newStudent;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(2035, 733, makeCastMap([Q$AbstractRequest]), StudentRequestFactory_StudentRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_94(){
  return new RequestData_0('D0a1e65YXT$WghU52lU3oIvU0u4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newStudent]), this.propertyRefs, Lcom_lemania_sis_shared_student_StudentProxy_2_classLit, null);
}
;
_.val$newStudent = null;
function $updateUserActiveStatus(this$static, userEmail, userStatus){
  var x;
  x = new UserRequestFactory_UserRequestContextImpl$12X_0(this$static, userEmail, userStatus);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function UserRequestFactory_UserRequestContextImpl$12X_0(this$0, val$userEmail, val$userStatus){
  this.val$userEmail = val$userEmail;
  this.val$userStatus = val$userStatus;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(2044, 733, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$12X_0);
_.makeRequestData = function makeRequestData_97(){
  return new RequestData_0('YBcX3ZKo8HlZDzwLF$DiQ4vIuro=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$userEmail, this.val$userStatus]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$userEmail = null;
_.val$userStatus = null;
var Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$15_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$15', 1262), Lcom_lemania_sis_client_event_StudentAfterStatusChangeEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'StudentAfterStatusChangeEvent', 873), Lcom_lemania_sis_client_form_studentmgt_StudentPresenter_2_classLit = createForClass('com.lemania.sis.client.form.studentmgt.', 'StudentPresenter', 1084), Lcom_lemania_sis_client_form_studentmgt_StudentPresenter$1_2_classLit = createForClass('com.lemania.sis.client.form.studentmgt.', 'StudentPresenter$1', 1085), Lcom_lemania_sis_client_form_studentmgt_StudentPresenter$2_2_classLit = createForClass('com.lemania.sis.client.form.studentmgt.', 'StudentPresenter$2', 1086), Lcom_lemania_sis_client_form_studentmgt_StudentPresenter$3_2_classLit = createForClass('com.lemania.sis.client.form.studentmgt.', 'StudentPresenter$3', 1087), Lcom_lemania_sis_client_form_studentmgt_StudentPresenter$4_2_classLit = createForClass('com.lemania.sis.client.form.studentmgt.', 'StudentPresenter$4', 1088), Lcom_lemania_sis_client_form_studentmgt_StudentPresenter$5_2_classLit = createForClass('com.lemania.sis.client.form.studentmgt.', 'StudentPresenter$5', 1089), Lcom_lemania_sis_client_form_usermgt_UserManagementPresenter$7_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementPresenter$7', 1116), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenterMyProxyImpl$1', 1273), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenterMyProxyImpl$1$1', 1274), Lcom_lemania_sis_client_form_usermgt_UserManagementPresenterMyProxyImpl$3_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementPresenterMyProxyImpl$3', 1123), Lcom_lemania_sis_client_form_usermgt_UserManagementPresenterMyProxyImpl$3$1_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementPresenterMyProxyImpl$3$1', 1124), Lcom_lemania_sis_client_form_studentmgt_StudentView_2_classLit = createForClass('com.lemania.sis.client.form.studentmgt.', 'StudentView', 1094), Lcom_lemania_sis_client_form_studentmgt_StudentView$1_2_classLit = createForClass('com.lemania.sis.client.form.studentmgt.', 'StudentView$1', 1095), Lcom_lemania_sis_client_form_studentmgt_StudentView$2_2_classLit = createForClass('com.lemania.sis.client.form.studentmgt.', 'StudentView$2', 1096), Lcom_lemania_sis_client_form_studentmgt_StudentView$3_2_classLit = createForClass('com.lemania.sis.client.form.studentmgt.', 'StudentView$3', 1097), Lcom_lemania_sis_client_form_studentmgt_StudentView$4_2_classLit = createForClass('com.lemania.sis.client.form.studentmgt.', 'StudentView$4', 1098), Lcom_lemania_sis_client_form_studentmgt_StudentView$5_2_classLit = createForClass('com.lemania.sis.client.form.studentmgt.', 'StudentView$5', 1099), Lcom_lemania_sis_client_form_studentmgt_StudentView$6_2_classLit = createForClass('com.lemania.sis.client.form.studentmgt.', 'StudentView$6', 1100), Lcom_lemania_sis_client_form_studentmgt_StudentView$7_2_classLit = createForClass('com.lemania.sis.client.form.studentmgt.', 'StudentView$7', 1101), Lcom_lemania_sis_client_form_studentmgt_StudentView$8_2_classLit = createForClass('com.lemania.sis.client.form.studentmgt.', 'StudentView$8', 1102), Lcom_lemania_sis_client_form_studentmgt_StudentView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.form.studentmgt.', 'StudentView_BinderImpl', 1103), Lcom_lemania_sis_client_form_studentmgt_StudentView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.form.studentmgt.', 'StudentView_BinderImpl$Widgets', 1104), Lcom_lemania_sis_shared_bulletin_BulletinRequestFactory_1BulletinRequestContextImpl$14X_2_classLit = createForClass('com.lemania.sis.shared.bulletin.', 'BulletinRequestFactory_BulletinRequestContextImpl$14X', 1854), Lcom_lemania_sis_shared_student_StudentRequestFactory_1StudentRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.student.', 'StudentRequestFactory_StudentRequestContextImpl$1X', 2032), Lcom_lemania_sis_shared_student_StudentRequestFactory_1StudentRequestContextImpl$7X_2_classLit = createForClass('com.lemania.sis.shared.student.', 'StudentRequestFactory_StudentRequestContextImpl$7X', 2035), Lcom_lemania_sis_shared_user_UserRequestFactory_1UserRequestContextImpl$12X_2_classLit = createForClass('com.lemania.sis.shared.user.', 'UserRequestFactory_UserRequestContextImpl$12X', 2044);
$entry(onLoad)(33);
