function $getRowCount(this$static){
  return (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount;
}

function $getWidgetTd(this$static, w){
  if (w.parent_0 != this$static) {
    return null;
  }
  return $getParentElement(w.element);
}

function $setCellWidth(this$static, w){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && (td['width'] = '100%' , undefined);
}

function $addNewUser(this$static, fullName, userName, password, email){
  var newUser, rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  newUser = dynamicCast($create_1(rc, Lcom_lemania_sis_shared_UserProxy_2_classLit), Q$UserProxy);
  newUser.setFullName(fullName);
  newUser.setUserName(userName);
  newUser.setPassword(password);
  newUser.setEmail(email);
  newUser.setActive(($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
  $fire($save_3(rc, newUser), new UserManagementPresenter$2_0(this$static, newUser));
}

function $loadUsersByType(this$static, type){
  var rc, rf, rf_0, rc_0, x, x_0;
  if ($equals_5(type, ''))
    return;
  if ($equals_5(type, 'tout')) {
    rf_0 = new UserRequestFactoryImpl_0;
    $initialize(rf_0, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
    rc_0 = new UserRequestFactory_UserRequestContextImpl_0(rf_0);
    $fire((x = new UserRequestFactory_UserRequestContextImpl$6X_0(rc_0) , $addInvocation(rc_0.state.dialect, x) , x), new UserManagementPresenter$1_0(this$static));
    return;
  }
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire((x_0 = new UserRequestFactory_UserRequestContextImpl$8X_0(rc, type) , $addInvocation(rc.state.dialect, x_0) , x_0), new UserManagementPresenter$6_0(this$static));
}

function $updateUserStatus(this$static, user, active, admin, isProf, isStudent){
  var rc, rf, updatedUser;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
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
}

defineSeed(1062, 692, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfessorAfterAddEvent$ProfessorAfterAddHandler, Q$StudentAfterAddEvent$StudentAfterAddHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler, Q$UserManagementPresenter, Q$UserManagementUiHandler]), UserManagementPresenter_0);
_.onBind = function onBind_29(){
  dynamicCast(this.view, Q$UserManagementPresenter$MyView).setUiHandlers(this);
  $initializeTables_2(dynamicCast(this.view, Q$UserManagementPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_57(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onProfessorAfterAdd = function onProfessorAfterAdd(event_0){
  $onProfessorAfterAdd(this, event_0);
}
;
_.onReset = function onReset_28(){
  $doFire(this.eventBus, new PageAfterSelectEvent_0('usermanagement'), null);
  $equals_5(this.currentUser.userEmail, 'thuannn@gmail.com') && $setVisible_0(dynamicCast(dynamicCast(this.view, Q$UserManagementPresenter$MyView), Q$UserManagementView).pnlAdd, true);
  this.currentUser.isReadOnly?$hideCodesAcces(dynamicCast(this.view, Q$UserManagementPresenter$MyView), true):$hideCodesAcces(dynamicCast(this.view, Q$UserManagementPresenter$MyView), false);
}
;
_.onStudentAfterAdd = function onStudentAfterAdd(event_0){
  $onStudentAfterAdd(this, event_0);
}
;
_.onStudentAfterDesactivate = function onStudentAfterDesactivate_1(event_0){
  $onStudentAfterDesactivate_0(this, event_0);
}
;
_.revealInParent = function revealInParent_28(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_127(this$static, response){
  $setUserData(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
}

function UserManagementPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1063, 631, makeCastMap([Q$Receiver]), UserManagementPresenter$1_0);
_.onFailure_0 = function onFailure_132(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_132(response){
  $onSuccess_127(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_128(this$static){
  $addNewUser_0(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), this$static.val$newUser);
}

function UserManagementPresenter$2_0(this$0, val$newUser){
  this.this$0 = this$0;
  this.val$newUser = val$newUser;
}

defineSeed(1064, 631, makeCastMap([Q$Receiver]), UserManagementPresenter$2_0);
_.onFailure_0 = function onFailure_133(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_133(response){
  $onSuccess_128(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
_.val$newUser = null;
function $onSuccess_129(this$static){
  $refreshTable_2(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), this$static.val$updatedUser);
}

function UserManagementPresenter$3_0(this$0, val$updatedUser){
  this.this$0 = this$0;
  this.val$updatedUser = val$updatedUser;
}

defineSeed(1065, 631, makeCastMap([Q$Receiver]), UserManagementPresenter$3_0);
_.onFailure_0 = function onFailure_134(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_134(response){
  $onSuccess_129(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
_.val$updatedUser = null;
function $onSuccess_130(this$static, response){
  $setUserData(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
}

function UserManagementPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1068, 631, makeCastMap([Q$Receiver]), UserManagementPresenter$6_0);
_.onFailure_0 = function onFailure_137(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_137(response){
  $onSuccess_130(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$UserManagementPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$UserManagementPresenter$_annotation$$none$$) {
    result = new UserManagementPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$UserManagementView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$UserManagementPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$UserManagementPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$UserManagementPresenter$_annotation$$none$$;
}

defineSeed(1123, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_159(){
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

function $hideCodesAcces(this$static, hide){
  $setVisible_0(this$static.tblUser, !hide);
}

function $initializeTables_2(this$static){
  var cellActive, cellAdmin, cellProf, cellReadOnly, cellStudent, colActive, colAdmin, colFullName, colLastLogin, colProf, colReadOnly, colStudent, colUserName, passCol;
  colFullName = new UserManagementView$1_0;
  $addColumn(this$static.tblUser, colFullName, 'Nom & Pr\xE9nom');
  colUserName = new UserManagementView$2_0;
  $addColumn(this$static.tblUser, colUserName, "Nom d'utilisateur");
  passCol = new UserManagementView$3_0;
  $addColumn(this$static.tblUser, passCol, 'Password');
  cellActive = new CheckboxCell_0;
  colActive = new UserManagementView$4_0(cellActive);
  $addColumn(this$static.tblUser, colActive, 'Actif');
  $setColumnWidth_0(this$static.tblUser, colActive, 5 + ($clinit_Style$Unit() , '%'));
  $setFieldUpdater(colActive, new UserManagementView$5_0(this$static));
  cellAdmin = new CheckboxCell_0;
  colAdmin = new UserManagementView$6_0(cellAdmin);
  $addColumn(this$static.tblUser, colAdmin, 'Admin');
  $setColumnWidth_0(this$static.tblUser, colAdmin, '5%');
  $setFieldUpdater(colAdmin, new UserManagementView$7_0(this$static));
  cellReadOnly = new CheckboxCell_0;
  colReadOnly = new UserManagementView$8_0(cellReadOnly);
  $addColumn(this$static.tblUser, colReadOnly, 'Lecture seule');
  $setColumnWidth_0(this$static.tblUser, colReadOnly, '5%');
  cellProf = new CheckboxCell_0;
  colProf = new UserManagementView$9_0(cellProf);
  $addColumn(this$static.tblUser, colProf, 'Professeur');
  $setColumnWidth_0(this$static.tblUser, colProf, '5%');
  $setFieldUpdater(colProf, new UserManagementView$10_0(this$static));
  cellStudent = new CheckboxCell_0;
  colStudent = new UserManagementView$11_0(cellStudent);
  $addColumn(this$static.tblUser, colStudent, 'Eleve');
  $setColumnWidth_0(this$static.tblUser, colStudent, '5%');
  $setFieldUpdater(colStudent, new UserManagementView$12_0(this$static));
  colLastLogin = new UserManagementView$13_0;
  $addColumn(this$static.tblUser, colLastLogin, 'Derni\xE8re login');
  $insertItem(this$static.lstUserTypes, '-', '', -1);
  $insertItem(this$static.lstUserTypes, 'Professeurs', 'professeures', -1);
  $insertItem(this$static.lstUserTypes, 'El\xE8ves', 'eleves', -1);
  $insertItem(this$static.lstUserTypes, 'Tout', 'tout', -1);
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

function $onLstUserTypesChange(this$static){
  !!this$static.uiHandlers && $loadUsersByType(dynamicCast(this$static.uiHandlers, Q$UserManagementUiHandler), $getValue_1(this$static.lstUserTypes, this$static.lstUserTypes.element.selectedIndex));
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
  $setHeight(this$static.tblUser, '' + (list.size_1() + 1) * ($clinit_NotificationTypes() , lineHeightShortList).value_0 + 'px');
}

function UserManagementView_0(){
  this.tblUser = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_26(new UserManagementView_BinderImpl$Widgets_0(this));
}

defineSeed(1454, 697, makeCastMap([Q$IsWidget, Q$UserManagementPresenter$MyView, Q$UserManagementView]), UserManagementView_0);
_.asWidget = function asWidget_31(){
  return this.widget;
}
;
_.lstUserTypes = null;
_.pnlAdd = null;
_.selectedUserIndex = 0;
_.txtEmail = null;
_.txtFullName = null;
_.txtPassword = null;
_.txtUserName = null;
_.widget = null;
function UserManagementView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1455, 385, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$1_0);
_.getValue = function getValue_80(object){
  return dynamicCast(object, Q$UserProxy).getFullName();
}
;
function $update_35(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, user.getActive(), user.getAdmin(), value, user.getIsStudent());
  }
}

function UserManagementView$10_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1456, 1, {}, UserManagementView$10_0);
_.update = function update_36(index, user, value){
  $update_35(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function UserManagementView$11_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1457, 359, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$11_0);
_.getValue = function getValue_81(user){
  return dynamicCast(user, Q$UserProxy).getIsStudent();
}
;
function $update_36(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, user.getActive(), user.getAdmin(), user.getIsProf(), value);
  }
}

function UserManagementView$12_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1458, 1, {}, UserManagementView$12_0);
_.update = function update_37(index, user, value){
  $update_36(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function UserManagementView$13_0(){
  TextColumn_0.call(this);
}

defineSeed(1459, 385, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$13_0);
_.getValue = function getValue_82(object){
  return dynamicCast(object, Q$UserProxy).getCurrentLoggedInTime();
}
;
function UserManagementView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(1460, 385, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$2_0);
_.getValue = function getValue_83(object){
  return dynamicCast(object, Q$UserProxy).getUserName();
}
;
function UserManagementView$3_0(){
  TextColumn_0.call(this);
}

defineSeed(1461, 385, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$3_0);
_.getValue = function getValue_84(object){
  return dynamicCast(object, Q$UserProxy).getPassword();
}
;
function UserManagementView$4_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1462, 359, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$4_0);
_.getValue = function getValue_85(ecole){
  return dynamicCast(ecole, Q$UserProxy).getActive();
}
;
function $update_37(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, value, user.getAdmin(), user.getIsProf(), user.getIsStudent());
  }
}

function UserManagementView$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1463, 1, {}, UserManagementView$5_0);
_.update = function update_38(index, user, value){
  $update_37(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function UserManagementView$6_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1464, 359, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$6_0);
_.getValue = function getValue_86(user){
  return dynamicCast(user, Q$UserProxy).getAdmin();
}
;
function $update_38(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, user.getActive(), value, user.getIsProf(), user.getIsStudent());
  }
}

function UserManagementView$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1465, 1, {}, UserManagementView$7_0);
_.update = function update_39(index, user, value){
  $update_38(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function UserManagementView$8_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1466, 359, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$8_0);
_.getValue = function getValue_87(user){
  return dynamicCast(user, Q$UserProxy).getIsReadOnly();
}
;
function UserManagementView$9_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1467, 359, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$9_0);
_.getValue = function getValue_88(user){
  return dynamicCast(user, Q$UserProxy).getIsProf();
}
;
function UserManagementView_BinderImpl_0(){
}

defineSeed(1468, 1, {}, UserManagementView_BinderImpl_0);
function $build_f_HTMLPanel1_26(this$static){
  var attachRecord27, f_HTMLPanel1, f_VerticalPanel2, f_Label3, pnlAdd, f_Grid4, f_Label5, txtFullName, f_Label6, txtUserName, f_Label7, txtPassword, f_Label8, txtEmail, f_Label9, cmdAdd, f_HorizontalPanel10, f_Label11, lstUserTypes;
  f_HTMLPanel1 = new HTMLPanel_0($html1_19(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord27 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord27.origParent?$insertBefore(attachRecord27.origParent, attachRecord27.element, attachRecord27.origSibling):orphan(attachRecord27.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT)) , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ALIGN_CENTER) , $setTextOrHtml(f_Label3.directionalTextHelper, 'GESTION DES UTILISATEURS', false) , $updateHorizontalAlignment(f_Label3) , f_Label3.element.style['width'] = '900' , f_Label3)) , $add_11(f_VerticalPanel2, (pnlAdd = new HorizontalPanel_0 , $add_9(pnlAdd, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 2) , $resizeRows(f_Grid4, 6) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Nom & Pr\xE9nom :', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 0, 1, (txtFullName = new TextBox_0 , this$static.owner.txtFullName = txtFullName , txtFullName)) , $setWidget_1(f_Grid4, 1, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, "Nom d'utilisateur :", false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 1, 1, (txtUserName = new TextBox_0 , this$static.owner.txtUserName = txtUserName , txtUserName)) , $setWidget_1(f_Grid4, 2, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Mot de passe :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid4, 2, 1, (txtPassword = new TextBox_0 , this$static.owner.txtPassword = txtPassword , txtPassword)) , $setWidget_1(f_Grid4, 3, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Email :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid4, 3, 1, (txtEmail = new TextBox_0 , this$static.owner.txtEmail = txtEmail , txtEmail)) , $setWidget_1(f_Grid4, 4, 0, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label9.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid4, 4, 1, (cmdAdd = new Button_0 , $setInnerText(cmdAdd.element, 'Ajouter') , $addDomHandler(cmdAdd, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdAdd)) , f_Grid4.element.style['width'] = '100%' , f_Grid4)) , setVisible(pnlAdd.element, false) , pnlAdd.element.style['width'] = '80%' , this$static.owner.pnlAdd = pnlAdd , pnlAdd)) , $add_11(f_VerticalPanel2, (f_HorizontalPanel10 = new HorizontalPanel_0 , $setVerticalAlignment(f_HorizontalPanel10, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_9(f_HorizontalPanel10, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Filtre :', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $add_9(f_HorizontalPanel10, (lstUserTypes = new ListBox_0 , lstUserTypes.element.style['width'] = '300px' , $addDomHandler(lstUserTypes, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstUserTypes = lstUserTypes , lstUserTypes)) , f_HorizontalPanel10.table['cellSpacing'] = 5 , f_HorizontalPanel10)) , $add_11(f_VerticalPanel2, this$static.tblUser) , $setCellWidth(f_VerticalPanel2, this$static.tblUser) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function UserManagementView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new UserManagementView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new UserManagementView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.tblUser = this.owner.tblUser;
  $setHeight(this.tblUser, '450px');
  $setWidth(this.tblUser, '100%');
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1469, 1, {}, UserManagementView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
_.tblUser = null;
function UserManagementView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1470, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserManagementView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_34(event_0){
  $onCmdAddClicked_0(this.this$1.owner);
}
;
_.this$1 = null;
function UserManagementView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1471, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), UserManagementView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_34(event_0){
  $onLstUserTypesChange(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_19(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$view$UserManagementView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$UserManagementView$_annotation$$none$$) {
    result = new UserManagementView_0(new UserManagementView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$UserManagementView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$UserManagementView$_annotation$$none$$;
}

function UserRequestFactory_UserRequestContextImpl$6X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1675, 635, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_82(){
  return new RequestData_0('VuXhpYahDeD667PTuf_Pto3kkxM=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_UserProxy_2_classLit);
}
;
function UserRequestFactory_UserRequestContextImpl$8X_0(this$0, val$type){
  this.val$type = val$type;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1676, 635, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_83(){
  return new RequestData_0('pbdrVrgViBR_xsb0eysqhdGB$js=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$type]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_UserProxy_2_classLit);
}
;
_.val$type = null;
var Lcom_lemania_sis_client_presenter_UserManagementPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenter', 1062), Lcom_lemania_sis_client_presenter_UserManagementPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenter$1', 1063), Lcom_lemania_sis_client_presenter_UserManagementPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenter$2', 1064), Lcom_lemania_sis_client_presenter_UserManagementPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenter$3', 1065), Lcom_lemania_sis_client_presenter_UserManagementPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenter$6', 1068), Lcom_lemania_sis_client_view_UserManagementView_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView', 1454), Lcom_lemania_sis_client_view_UserManagementView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$1', 1455), Lcom_lemania_sis_client_view_UserManagementView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$2', 1460), Lcom_lemania_sis_client_view_UserManagementView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$3', 1461), Lcom_lemania_sis_client_view_UserManagementView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$4', 1462), Lcom_lemania_sis_client_view_UserManagementView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$5', 1463), Lcom_lemania_sis_client_view_UserManagementView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$6', 1464), Lcom_lemania_sis_client_view_UserManagementView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$7', 1465), Lcom_lemania_sis_client_view_UserManagementView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$8', 1466), Lcom_lemania_sis_client_view_UserManagementView$9_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$9', 1467), Lcom_lemania_sis_client_view_UserManagementView$10_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$10', 1456), Lcom_lemania_sis_client_view_UserManagementView$11_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$11', 1457), Lcom_lemania_sis_client_view_UserManagementView$12_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$12', 1458), Lcom_lemania_sis_client_view_UserManagementView$13_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView$13', 1459), Lcom_lemania_sis_client_view_UserManagementView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView_BinderImpl', 1468), Lcom_lemania_sis_client_view_UserManagementView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView_BinderImpl$Widgets', 1469), Lcom_lemania_sis_client_view_UserManagementView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView_BinderImpl$Widgets$1', 1470), Lcom_lemania_sis_client_view_UserManagementView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'UserManagementView_BinderImpl$Widgets$2', 1471), Lcom_lemania_sis_shared_service_UserRequestFactory_1UserRequestContextImpl$6X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'UserRequestFactory_UserRequestContextImpl$6X', 1675), Lcom_lemania_sis_shared_service_UserRequestFactory_1UserRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'UserRequestFactory_UserRequestContextImpl$8X', 1676);
$entry(onLoad)(28);
