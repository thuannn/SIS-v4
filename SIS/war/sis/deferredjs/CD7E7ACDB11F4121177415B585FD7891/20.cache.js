function $getRowCount(this$static){
  return (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount;
}

function $setCellWidth(this$static, w){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && (td['width'] = '80%' , undefined);
}

function $resize(this$static){
  $resizeColumns(this$static, 2);
  $resizeRows(this$static, 6);
}

function $addNewUser(this$static, fullName, userName, password, email){
  var newUser, rc, rf;
  rf = new UserRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  newUser = dynamicCast($create_1(rc, Lcom_lemania_sis_shared_UserProxy_2_classLit), Q$UserProxy);
  newUser.setFullName(fullName);
  newUser.setUserName(userName);
  newUser.setPassword(password);
  newUser.setEmail(email);
  newUser.setActive(($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
  $fire($save_3(rc, newUser), new UserManagementPresenter$2_0(this$static, newUser));
}

function $updateUserStatus(this$static, user, active, admin, isProf, isStudent){
  var rc, rf, updatedUser;
  rf = new UserRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  updatedUser = dynamicCast($editProxy(rc, user), Q$UserProxy);
  updatedUser.setActive(active);
  updatedUser.setAdmin(admin);
  updatedUser.setIsProf(isProf);
  updatedUser.setIsStudent(isStudent);
  $fire($save_3(rc, updatedUser), new UserManagementPresenter$3_0(this$static, updatedUser));
}

function UserManagementPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
  dynamicCast(this.view, Q$UserManagementPresenter$MyView).setUiHandlers(this);
}

defineSeed(871, 672, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ProfessorAfterAddEvent$ProfessorAfterAddHandler, Q$StudentAfterAddEvent$StudentAfterAddHandler, Q$UserManagementPresenter, Q$UserManagementUiHandler]), UserManagementPresenter_0);
_.onBind = function onBind_21(){
  $initializeTables_0(dynamicCast(this.view, Q$UserManagementPresenter$MyView));
}
;
_.onProfessorAfterAdd = function onProfessorAfterAdd(event_0){
  $onProfessorAfterAdd(this, event_0);
}
;
_.onReset = function onReset_14(){
  var rf, rc, x;
  rf = new UserRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire((x = new UserRequestFactory_UserRequestContextImpl$4X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new UserManagementPresenter$1_0(this));
}
;
_.onStudentAfterAdd = function onStudentAfterAdd(event_0){
  $onStudentAfterAdd(this, event_0);
}
;
_.revealInParent = function revealInParent_20(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_59(this$static, response){
  $setUserData(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
}

function UserManagementPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(872, 611, makeCastMap([Q$Receiver]), UserManagementPresenter$1_0);
_.onFailure_0 = function onFailure_59(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_59(response){
  $onSuccess_59(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_60(this$static){
  $addNewUser_0(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), this$static.val$newUser);
}

function UserManagementPresenter$2_0(this$0, val$newUser){
  this.this$0 = this$0;
  this.val$newUser = val$newUser;
}

defineSeed(873, 611, makeCastMap([Q$Receiver]), UserManagementPresenter$2_0);
_.onFailure_0 = function onFailure_60(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_60(response){
  $onSuccess_60(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
_.val$newUser = null;
function $onSuccess_61(this$static){
  $refreshTable_2(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), this$static.val$updatedUser);
}

function UserManagementPresenter$3_0(this$0, val$updatedUser){
  this.this$0 = this$0;
  this.val$updatedUser = val$updatedUser;
}

defineSeed(874, 611, makeCastMap([Q$Receiver]), UserManagementPresenter$3_0);
_.onFailure_0 = function onFailure_61(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_61(response){
  $onSuccess_61(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
_.val$updatedUser = null;
function $get_Key$type$com$lemania$sis$client$presenter$UserManagementPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$UserManagementPresenter$_annotation$$none$$) {
    result = new UserManagementPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$UserManagementView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$UserManagementPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$UserManagementPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$UserManagementPresenter$_annotation$$none$$;
}

defineSeed(910, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_76(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$UserManagementPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $addNewUser_0(this$static, newUser){
  var list;
  list = new ArrayList_0;
  setCheck(list.array, list.size_0++, newUser);
  $setRowData(this$static.tblUser, $getRowCount(this$static.tblUser.presenter) + 1, list);
  $setRowCount_0(this$static.tblUser, $getRowCount(this$static.tblUser.presenter) + list.size_0, true);
}

function $initializeTables_0(this$static){
  var cellActive, cellAdmin, cellProf, cellStudent, colActive, colAdmin, colFullName, colProf, colStudent, colUserName, passCol;
  colFullName = new UserManagementView$1_0;
  $addColumn(this$static.tblUser, colFullName, 'Nom & Pr\xE9nom');
  colUserName = new UserManagementView$2_0;
  $addColumn(this$static.tblUser, colUserName, "Nom d'utilisateur");
  passCol = new UserManagementView$3_0;
  $addColumn(this$static.tblUser, passCol, 'Password');
  cellActive = new CheckboxCell_0;
  colActive = new UserManagementView$4_0(cellActive);
  $addColumn(this$static.tblUser, colActive, 'Actif');
  $setFieldUpdater(colActive, new UserManagementView$5_0(this$static));
  cellAdmin = new CheckboxCell_0;
  colAdmin = new UserManagementView$6_0(cellAdmin);
  $addColumn(this$static.tblUser, colAdmin, 'Admin');
  $setFieldUpdater(colAdmin, new UserManagementView$7_0(this$static));
  cellProf = new CheckboxCell_0;
  colProf = new UserManagementView$8_0(cellProf);
  $addColumn(this$static.tblUser, colProf, 'Professeur');
  $setFieldUpdater(colProf, new UserManagementView$9_0(this$static));
  cellStudent = new CheckboxCell_0;
  colStudent = new UserManagementView$10_0(cellStudent);
  $addColumn(this$static.tblUser, colStudent, 'Eleve');
  $setFieldUpdater(colStudent, new UserManagementView$11_0(this$static));
}

function $onCmdAddClicked_0(this$static){
  if (!isValidUserName($getPropertyString(this$static.txtUserName.element, 'value'))) {
    alert_0("Le nom d'utilisateur n'est pas valable.");
    return;
  }
  if (!isValidUserName($getPropertyString(this$static.txtPassword.element, 'value'))) {
    alert_0("Le mot de passe n'est pas valable.");
    return;
  }
  !!this$static.uiHandlers && $addNewUser(dynamicCast(this$static.uiHandlers, Q$UserManagementUiHandler), $getPropertyString(this$static.txtFullName.element, 'value'), $getPropertyString(this$static.txtUserName.element, 'value'), $getPropertyString(this$static.txtPassword.element, 'value'), $getPropertyString(this$static.txtEmail.element, 'value'));
}

function $refreshTable_2(this$static, updatedUser){
  var users;
  users = new ArrayList_0;
  setCheck(users.array, users.size_0++, updatedUser);
  $setRowData(this$static.tblUser, this$static.selectedUserIndex, users);
  $ensurePendingState(this$static.tblUser.presenter).redrawRequired = true;
}

function $setUserData(this$static, list){
  $setRowData_0(this$static.tblUser, list);
}

function UserManagementView_0(){
  this.tblUser = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_18(new UserManagementView_BinderImpl$Widgets_0(this));
}

defineSeed(1114, 677, makeCastMap([Q$IsWidget, Q$UserManagementPresenter$MyView]), UserManagementView_0);
_.asWidget = function asWidget_23(){
  return this.widget;
}
;
_.selectedUserIndex = 0;
_.txtEmail = null;
_.txtFullName = null;
_.txtPassword = null;
_.txtUserName = null;
_.widget = null;
function UserManagementView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1115, 377, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$1_0);
_.getValue = function getValue_32(object){
  return dynamicCast(object, Q$UserProxy).getFullName();
}
;
function UserManagementView$10_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1116, 351, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$10_0);
_.getValue = function getValue_33(user){
  return dynamicCast(user, Q$UserProxy).getIsStudent();
}
;
function $update_23(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, user.getActive(), user.getAdmin(), user.getIsProf(), value);
  }
}

function UserManagementView$11_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1117, 1, {}, UserManagementView$11_0);
_.update = function update_24(index, user, value){
  $update_23(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function UserManagementView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(1118, 377, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$2_0);
_.getValue = function getValue_34(object){
  return dynamicCast(object, Q$UserProxy).getUserName();
}
;
function UserManagementView$3_0(){
  TextColumn_0.call(this);
}

defineSeed(1119, 377, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$3_0);
_.getValue = function getValue_35(object){
  return dynamicCast(object, Q$UserProxy).getPassword();
}
;
function UserManagementView$4_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1120, 351, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$4_0);
_.getValue = function getValue_36(ecole){
  return dynamicCast(ecole, Q$UserProxy).getActive();
}
;
function $update_24(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, value, user.getAdmin(), user.getIsProf(), user.getIsStudent());
  }
}

function UserManagementView$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1121, 1, {}, UserManagementView$5_0);
_.update = function update_25(index, user, value){
  $update_24(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function UserManagementView$6_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1122, 351, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$6_0);
_.getValue = function getValue_37(user){
  return dynamicCast(user, Q$UserProxy).getAdmin();
}
;
function $update_25(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, user.getActive(), value, user.getIsProf(), user.getIsStudent());
  }
}

function UserManagementView$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1123, 1, {}, UserManagementView$7_0);
_.update = function update_26(index, user, value){
  $update_25(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function UserManagementView$8_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1124, 351, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$8_0);
_.getValue = function getValue_38(user){
  return dynamicCast(user, Q$UserProxy).getIsProf();
}
;
function $update_26(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, user.getActive(), user.getAdmin(), value, user.getIsStudent());
  }
}

function UserManagementView$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1125, 1, {}, UserManagementView$9_0);
_.update = function update_27(index, user, value){
  $update_26(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function UserManagementView_BinderImpl_0(){
}

defineSeed(1126, 1, {}, UserManagementView_BinderImpl_0);
function $build_f_HTMLPanel1_18(this$static){
  var attachRecord19, f_HTMLPanel1, f_VerticalPanel2, f_Label3;
  f_HTMLPanel1 = new HTMLPanel_0($html1_15(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord19 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord19.origParent?$insertBefore(attachRecord19.origParent, attachRecord19.element, attachRecord19.origSibling):orphan(attachRecord19.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_9(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'GESTION DES UTILISATEURS') , $updateHorizontalAlignment(f_Label3) , f_Label3.element.style['width'] = '900' , f_Label3)) , $add_9(f_VerticalPanel2, this$static.f_Grid4) , $setCellWidth(f_VerticalPanel2, this$static.f_Grid4) , $add_9(f_VerticalPanel2, this$static.tblUser) , $setCellWidth(f_VerticalPanel2, this$static.tblUser) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function UserManagementView_BinderImpl$Widgets_0(owner){
  var f_Label5, txtFullName, f_Label6, txtUserName, f_Label7, txtPassword, f_Label8, txtEmail, f_Label9, cmdAdd;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new UserManagementView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.f_Grid4 = new Grid_0;
  $resize(this.f_Grid4);
  $setWidget_1(this.f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Nom & Pr\xE9nom :') , $updateHorizontalAlignment(f_Label5) , f_Label5));
  $setWidget_1(this.f_Grid4, 0, 1, (txtFullName = new TextBox_0 , this.owner.txtFullName = txtFullName , txtFullName));
  $setWidget_1(this.f_Grid4, 1, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, "Nom d'utilisateur :") , $updateHorizontalAlignment(f_Label6) , f_Label6));
  $setWidget_1(this.f_Grid4, 1, 1, (txtUserName = new TextBox_0 , this.owner.txtUserName = txtUserName , txtUserName));
  $setWidget_1(this.f_Grid4, 2, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Mot de passe :') , $updateHorizontalAlignment(f_Label7) , f_Label7));
  $setWidget_1(this.f_Grid4, 2, 1, (txtPassword = new TextBox_0 , this.owner.txtPassword = txtPassword , txtPassword));
  $setWidget_1(this.f_Grid4, 3, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Email :') , $updateHorizontalAlignment(f_Label8) , f_Label8));
  $setWidget_1(this.f_Grid4, 3, 1, (txtEmail = new TextBox_0 , this.owner.txtEmail = txtEmail , txtEmail));
  $setWidget_1(this.f_Grid4, 4, 0, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label9.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label9) , f_Label9));
  $setWidget_1(this.f_Grid4, 4, 1, (cmdAdd = new Button_0 , $setInnerText(cmdAdd.element, 'Ajouter') , $addDomHandler(cmdAdd, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdAdd));
  $setWidth(this.f_Grid4, '80%');
  this.tblUser = this.owner.tblUser;
  $setHeight(this.tblUser, '450px');
  $setWidth(this.tblUser, '80%');
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1127, 1, {}, UserManagementView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.f_Grid4 = null;
_.owner = null;
_.tblUser = null;
function UserManagementView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1128, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserManagementView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_39(event_0){
  $onCmdAddClicked_0(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_15(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$view$UserManagementView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$UserManagementView$_annotation$$none$$) {
    result = new UserManagementView_0(new UserManagementView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$UserManagementView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$UserManagementView$_annotation$$none$$;
}

function UserRequestFactory_UserRequestContextImpl$4X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1250, 615, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_39(){
  return new RequestData_0('VuXhpYahDeD667PTuf_Pto3kkxM=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_UserProxy_2_classLit);
}
;
var Lcom_lemania_sis_client_presenter_UserManagementPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenter', 871), Lcom_lemania_sis_client_presenter_UserManagementPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenter$1', 872), Lcom_lemania_sis_client_presenter_UserManagementPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenter$2', 873), Lcom_lemania_sis_client_presenter_UserManagementPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenter$3', 874), Lcom_lemania_sis_client_view_UserManagementView_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView', 1114), Lcom_lemania_sis_client_view_UserManagementView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$1', 1115), Lcom_lemania_sis_client_view_UserManagementView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$2', 1118), Lcom_lemania_sis_client_view_UserManagementView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$3', 1119), Lcom_lemania_sis_client_view_UserManagementView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$4', 1120), Lcom_lemania_sis_client_view_UserManagementView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$5', 1121), Lcom_lemania_sis_client_view_UserManagementView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$6', 1122), Lcom_lemania_sis_client_view_UserManagementView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$7', 1123), Lcom_lemania_sis_client_view_UserManagementView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$8', 1124), Lcom_lemania_sis_client_view_UserManagementView$9_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$9', 1125), Lcom_lemania_sis_client_view_UserManagementView$10_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$10', 1116), Lcom_lemania_sis_client_view_UserManagementView$11_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$11', 1117), Lcom_lemania_sis_client_view_UserManagementView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView_BinderImpl', 1126), Lcom_lemania_sis_client_view_UserManagementView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView_BinderImpl$Widgets', 1127), Lcom_lemania_sis_client_view_UserManagementView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView_BinderImpl$Widgets$1', 1128), Lcom_lemania_sis_shared_service_UserRequestFactory_1UserRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'UserRequestFactory_UserRequestContextImpl$4X', 1250);
$entry(onLoad)(20);
