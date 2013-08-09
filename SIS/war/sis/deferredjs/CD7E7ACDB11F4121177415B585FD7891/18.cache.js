function $getStudentRequestContext(this$static){
  var rf;
  rf = new StudentRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  return new StudentRequestFactory_StudentRequestContextImpl_0(rf);
}

function $updateStudentEmail(this$static, student, email){
  var rc, studentForUpdate;
  rc = $getStudentRequestContext(this$static);
  studentForUpdate = dynamicCast($editProxy(rc, student), Q$StudentProxy);
  studentForUpdate.setEmail(email);
  $fire($saveAndReturn_1(rc, studentForUpdate), new StudentPresenter$5_0(this$static));
}

function $updateStudentFirstName(this$static, student, firstName){
  var rc, studentForUpdate;
  rc = $getStudentRequestContext(this$static);
  studentForUpdate = dynamicCast($editProxy(rc, student), Q$StudentProxy);
  studentForUpdate.setFirstName(firstName);
  $fire($saveAndReturn_1(rc, studentForUpdate), new StudentPresenter$3_0(this$static));
}

function $updateStudentLastName(this$static, student, lastName){
  var rc, studentForUpdate;
  rc = $getStudentRequestContext(this$static);
  studentForUpdate = dynamicCast($editProxy(rc, student), Q$StudentProxy);
  studentForUpdate.setLastName(lastName);
  $fire($saveAndReturn_1(rc, studentForUpdate), new StudentPresenter$4_0(this$static));
}

function $updateStudentStatus(this$static, student, value){
  var rc, studentForUpdate;
  rc = $getStudentRequestContext(this$static);
  studentForUpdate = dynamicCast($editProxy(rc, student), Q$StudentProxy);
  studentForUpdate.setIsActive(value);
  $fire($saveAndReturn_1(rc, studentForUpdate), new StudentPresenter$2_0(this$static));
}

function StudentPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
  dynamicCast(this.view, Q$StudentPresenter$MyView).setUiHandlers(this);
}

defineSeed(863, 672, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$StudentListUiHandler]), StudentPresenter_0);
_.onBind = function onBind_20(){
  $initializeTable_3(dynamicCast(this.view, Q$StudentPresenter$MyView));
}
;
_.onReset = function onReset_13(){
  var rc, x;
  rc = $getStudentRequestContext(this);
  $fire((x = new StudentRequestFactory_StudentRequestContextImpl$1X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new StudentPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_19(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_54(this$static, response){
  $setTableData(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(864, 611, makeCastMap([Q$Receiver]), StudentPresenter$1_0);
_.onFailure_0 = function onFailure_54(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_54(response){
  $onSuccess_54(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_55(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(865, 611, makeCastMap([Q$Receiver]), StudentPresenter$2_0);
_.onFailure_0 = function onFailure_55(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_55(response){
  $onSuccess_55(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $onSuccess_56(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(866, 611, makeCastMap([Q$Receiver]), StudentPresenter$3_0);
_.onFailure_0 = function onFailure_56(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_56(response){
  $onSuccess_56(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $onSuccess_57(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(867, 611, makeCastMap([Q$Receiver]), StudentPresenter$4_0);
_.onFailure_0 = function onFailure_57(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_57(response){
  $onSuccess_57(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $onSuccess_58(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(868, 611, makeCastMap([Q$Receiver]), StudentPresenter$5_0);
_.onFailure_0 = function onFailure_58(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_58(response){
  $onSuccess_58(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$StudentPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$StudentPresenter$_annotation$$none$$) {
    result = new StudentPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$StudentView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$StudentPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$StudentPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$StudentPresenter$_annotation$$none$$;
}

defineSeed(904, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_73(){
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
}

function $setTableData(this$static, studentList){
  $setList(this$static.dataProvider, studentList);
}

function $updateEditedStudent(this$static, student){
  $remove_11(this$static.dataProvider.listWrapper, this$static.selectedStudent);
  $add_11(this$static.dataProvider.listWrapper, this$static.selectedStudent, student);
  $refresh(this$static.dataProvider);
}

function StudentView_0(){
  this.dataProvider = new ListDataProvider_0;
  this.tblStudents = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_17(new StudentView_BinderImpl$Widgets_0(this));
}

defineSeed(1102, 677, makeCastMap([Q$IsWidget, Q$StudentPresenter$MyView]), StudentView_0);
_.asWidget = function asWidget_22(){
  return this.widget;
}
;
_.selectedStudent = -1;
_.widget = null;
function StudentView$1_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1103, 351, makeCastMap([Q$HasCell, Q$Column]), StudentView$1_0);
_.getValue = function getValue_28(object){
  return dynamicCast(object, Q$StudentProxy).getLastName();
}
;
function $update_19(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentLastName(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1104, 1, {}, StudentView$2_0);
_.update = function update_20(index, student, value){
  $update_19(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function StudentView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1105, 351, makeCastMap([Q$HasCell, Q$Column]), StudentView$3_0);
_.getValue = function getValue_29(object){
  return dynamicCast(object, Q$StudentProxy).getFirstName();
}
;
function $update_20(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentFirstName(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1106, 1, {}, StudentView$4_0);
_.update = function update_21(index, student, value){
  $update_20(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function StudentView$5_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1107, 351, makeCastMap([Q$HasCell, Q$Column]), StudentView$5_0);
_.getValue = function getValue_30(object){
  return dynamicCast(object, Q$StudentProxy).getEmail();
}
;
function $update_21(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentEmail(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1108, 1, {}, StudentView$6_0);
_.update = function update_22(index, student, value){
  $update_21(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function StudentView$7_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1109, 351, makeCastMap([Q$HasCell, Q$Column]), StudentView$7_0);
_.getValue = function getValue_31(student){
  return dynamicCast(student, Q$StudentProxy).getIsActive();
}
;
function $update_22(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentStatus(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1110, 1, {}, StudentView$8_0);
_.update = function update_23(index, student, value){
  $update_22(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function StudentView_BinderImpl_0(){
}

defineSeed(1111, 1, {}, StudentView_BinderImpl_0);
function $build_f_HTMLPanel1_17(this$static){
  var attachRecord17, f_HTMLPanel1, f_VerticalPanel2, f_Label3, tblStudents;
  f_HTMLPanel1 = new HTMLPanel_0($html1_14(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord17 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord17.origParent?$insertBefore(attachRecord17.origParent, attachRecord17.element, attachRecord17.origSibling):orphan(attachRecord17.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_9(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'LISTE DES ELEVES') , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_9(f_VerticalPanel2, (tblStudents = this$static.owner.tblStudents , tblStudents.element.style['height'] = '200px' , tblStudents.element.style['width'] = '80%' , tblStudents)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function StudentView_BinderImpl$Widgets_0(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1112, 1, {}, StudentView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function $html1_14(arg0){
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

defineSeed(1162, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$StudentProxy]));
_.setEmail = function setEmail(email){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setEmail(email);
}
;
_.setFirstName = function setFirstName(firstName){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setFirstName(firstName);
}
;
_.setIsActive = function setIsActive_7(isActive){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setIsActive(isActive);
}
;
_.setLastName = function setLastName(lastName){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setLastName(lastName);
}
;
defineSeed(1163, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$StudentProxy]));
_.setEmail = function setEmail_0(email){
  $setProperty(this.this$0, 'email', email);
}
;
_.setFirstName = function setFirstName_0(firstName){
  $setProperty(this.this$0, 'firstName', firstName);
}
;
_.setIsActive = function setIsActive_8(isActive){
  $setProperty(this.this$0, 'isActive', isActive);
}
;
_.setLastName = function setLastName_0(lastName){
  $setProperty(this.this$0, 'lastName', lastName);
}
;
function $saveAndReturn_1(this$static, newStudent){
  var x;
  x = new StudentRequestFactory_StudentRequestContextImpl$4X_0(this$static, newStudent);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function StudentRequestFactory_StudentRequestContextImpl$1X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1235, 615, makeCastMap([Q$AbstractRequest]), StudentRequestFactory_StudentRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_30(){
  return new RequestData_0('G2KD$kkdT6sFEa2oTck82epBU2U=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_StudentProxy_2_classLit);
}
;
function StudentRequestFactory_StudentRequestContextImpl$4X_0(this$0, val$newStudent){
  this.val$newStudent = val$newStudent;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1236, 615, makeCastMap([Q$AbstractRequest]), StudentRequestFactory_StudentRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_31(){
  return new RequestData_0('qI0_B1hYf67V$_VpVTF2RqSn4Ag=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newStudent]), this.propertyRefs, Lcom_lemania_sis_shared_StudentProxy_2_classLit, null);
}
;
_.val$newStudent = null;
var Lcom_lemania_sis_client_presenter_StudentPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter', 863), Lcom_lemania_sis_client_presenter_StudentPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter$1', 864), Lcom_lemania_sis_client_presenter_StudentPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter$2', 865), Lcom_lemania_sis_client_presenter_StudentPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter$3', 866), Lcom_lemania_sis_client_presenter_StudentPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter$4', 867), Lcom_lemania_sis_client_presenter_StudentPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter$5', 868), Lcom_lemania_sis_client_view_StudentView_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView', 1102), Lcom_lemania_sis_client_view_StudentView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$1', 1103), Lcom_lemania_sis_client_view_StudentView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$2', 1104), Lcom_lemania_sis_client_view_StudentView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$3', 1105), Lcom_lemania_sis_client_view_StudentView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$4', 1106), Lcom_lemania_sis_client_view_StudentView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$5', 1107), Lcom_lemania_sis_client_view_StudentView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$6', 1108), Lcom_lemania_sis_client_view_StudentView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$7', 1109), Lcom_lemania_sis_client_view_StudentView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$8', 1110), Lcom_lemania_sis_client_view_StudentView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView_BinderImpl', 1111), Lcom_lemania_sis_client_view_StudentView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView_BinderImpl$Widgets', 1112), Lcom_lemania_sis_shared_service_StudentRequestFactory_1StudentRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'StudentRequestFactory_StudentRequestContextImpl$1X', 1235), Lcom_lemania_sis_shared_service_StudentRequestFactory_1StudentRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'StudentRequestFactory_StudentRequestContextImpl$4X', 1236);
$entry(onLoad)(18);
