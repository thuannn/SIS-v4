function $getRowCount(this$static){
  return (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount;
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
  if ($equals_6(type, ''))
    return;
  if ($equals_6(type, 'tout')) {
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
  Presenter_1.call(this, eventBus, view, proxy, null);
}

defineSeed(1098, 787, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfessorAfterAddEvent$ProfessorAfterAddHandler, Q$StudentAfterAddEvent$StudentAfterAddHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler, Q$UserManagementPresenter, Q$UserManagementUiHandler]), UserManagementPresenter_0);
_.onBind = function onBind_10(){
  dynamicCast(this.view, Q$UserManagementPresenter$MyView).setUiHandlers(this);
  $initializeTables_0(dynamicCast(this.view, Q$UserManagementPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_7(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onProfessorAfterAdd = function onProfessorAfterAdd(event_0){
  $onProfessorAfterAdd(this, event_0);
}
;
_.onReset = function onReset_9(){
  $doFire(this.eventBus, new PageAfterSelectEvent_0('usermanagement'), null);
  $equals_6(this.currentUser.userEmail, 'thuannn@gmail.com') && $setVisible_0(dynamicCast(dynamicCast(this.view, Q$UserManagementPresenter$MyView), Q$UserManagementView).pnlAdd, true);
  this.currentUser.isReadOnly?$hideCodesAcces(dynamicCast(this.view, Q$UserManagementPresenter$MyView), true):$hideCodesAcces(dynamicCast(this.view, Q$UserManagementPresenter$MyView), false);
}
;
_.onStudentAfterAdd = function onStudentAfterAdd(event_0){
  $onStudentAfterAdd(this, event_0);
}
;
_.onStudentAfterDesactivate = function onStudentAfterDesactivate(event_0){
  $onStudentAfterDesactivate(this, event_0);
}
;
_.revealInParent = function revealInParent_3(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_38(this$static, response){
  $setUserData(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
}

function UserManagementPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1099, 718, makeCastMap([Q$Receiver]), UserManagementPresenter$1_0);
_.onFailure_0 = function onFailure_47(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_47(response){
  $onSuccess_38(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_39(this$static){
  $addNewUser_0(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), this$static.val$newUser);
}

function UserManagementPresenter$2_0(this$0, val$newUser){
  this.this$0 = this$0;
  this.val$newUser = val$newUser;
}

defineSeed(1100, 718, makeCastMap([Q$Receiver]), UserManagementPresenter$2_0);
_.onFailure_0 = function onFailure_48(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_48(response){
  $onSuccess_39(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
_.val$newUser = null;
function $onSuccess_40(this$static){
  $refreshTable(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), this$static.val$updatedUser);
}

function UserManagementPresenter$3_0(this$0, val$updatedUser){
  this.this$0 = this$0;
  this.val$updatedUser = val$updatedUser;
}

defineSeed(1101, 718, makeCastMap([Q$Receiver]), UserManagementPresenter$3_0);
_.onFailure_0 = function onFailure_49(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_49(response){
  $onSuccess_40(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
_.val$updatedUser = null;
function $onSuccess_41(this$static, response){
  $setUserData(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
}

function UserManagementPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1104, 718, makeCastMap([Q$Receiver]), UserManagementPresenter$6_0);
_.onFailure_0 = function onFailure_52(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_52(response){
  $onSuccess_41(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
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

function $initializeTables_0(this$static){
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
  $addDataDisplay(this$static.dpUser, this$static.tblUser);
  $setDisplay_0(this$static.pagerUser, this$static.tblUser);
  $insertItem_0(this$static.lstUserTypes, '-', '', -1);
  $insertItem_0(this$static.lstUserTypes, 'Professeurs', 'professeures', -1);
  $insertItem_0(this$static.lstUserTypes, 'El\xE8ves', 'eleves', -1);
  $insertItem_0(this$static.lstUserTypes, 'Tout', 'tout', -1);
}

function $onCmdAddClicked(this$static){
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
  !!this$static.uiHandlers && $loadUsersByType(dynamicCast(this$static.uiHandlers, Q$UserManagementUiHandler), $getValue_2(this$static.lstUserTypes, this$static.lstUserTypes.element.selectedIndex));
}

function $refreshTable(this$static, updatedUser){
  var users;
  users = new ArrayList_0;
  setCheck(users.array, users.size_0++, updatedUser);
  $setRowData(this$static.tblUser, this$static.selectedUserIndex, users);
  $ensurePendingState(this$static.tblUser.presenter).redrawRequired = true;
}

function $setUserData(this$static, list){
  $clear_3(this$static.dpUser.listWrapper);
  $setList(this$static.dpUser, list);
  $flushNow(this$static.dpUser.listWrapper);
}

function UserManagementView_0(){
  this.dpUser = new ListDataProvider_0;
  this.tblUser = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_7(new UserManagementView_BinderImpl$Widgets_0(this));
}

defineSeed(1116, 792, makeCastMap([Q$IsWidget, Q$UserManagementPresenter$MyView, Q$UserManagementView]), UserManagementView_0);
_.asWidget = function asWidget_6(){
  return this.widget;
}
;
_.lstUserTypes = null;
_.pagerUser = null;
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

defineSeed(1117, 466, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$1_0);
_.getValue = function getValue_30(object){
  return dynamicCast(object, Q$UserProxy).getFullName();
}
;
function $update_15(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, user.getActive(), user.getAdmin(), value, user.getIsStudent());
  }
}

function UserManagementView$10_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1118, 1, {}, UserManagementView$10_0);
_.update = function update_16(index, user, value){
  $update_15(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function UserManagementView$11_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1119, 421, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$11_0);
_.getValue = function getValue_31(user){
  return dynamicCast(user, Q$UserProxy).getIsStudent();
}
;
function $update_16(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, user.getActive(), user.getAdmin(), user.getIsProf(), value);
  }
}

function UserManagementView$12_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1120, 1, {}, UserManagementView$12_0);
_.update = function update_17(index, user, value){
  $update_16(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function UserManagementView$13_0(){
  TextColumn_0.call(this);
}

defineSeed(1121, 466, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$13_0);
_.getValue = function getValue_32(object){
  return dynamicCast(object, Q$UserProxy).getCurrentLoggedInTime();
}
;
function UserManagementView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(1122, 466, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$2_0);
_.getValue = function getValue_33(object){
  return dynamicCast(object, Q$UserProxy).getUserName();
}
;
function UserManagementView$3_0(){
  TextColumn_0.call(this);
}

defineSeed(1123, 466, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$3_0);
_.getValue = function getValue_34(object){
  return dynamicCast(object, Q$UserProxy).getPassword();
}
;
function UserManagementView$4_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1124, 421, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$4_0);
_.getValue = function getValue_35(ecole){
  return dynamicCast(ecole, Q$UserProxy).getActive();
}
;
function $update_17(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, value, user.getAdmin(), user.getIsProf(), user.getIsStudent());
  }
}

function UserManagementView$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1125, 1, {}, UserManagementView$5_0);
_.update = function update_18(index, user, value){
  $update_17(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function UserManagementView$6_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1126, 421, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$6_0);
_.getValue = function getValue_36(user){
  return dynamicCast(user, Q$UserProxy).getAdmin();
}
;
function $update_18(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, user.getActive(), value, user.getIsProf(), user.getIsStudent());
  }
}

function UserManagementView$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1127, 1, {}, UserManagementView$7_0);
_.update = function update_19(index, user, value){
  $update_18(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function UserManagementView$8_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1128, 421, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$8_0);
_.getValue = function getValue_37(user){
  return dynamicCast(user, Q$UserProxy).getIsReadOnly();
}
;
function UserManagementView$9_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1129, 421, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$9_0);
_.getValue = function getValue_38(user){
  return dynamicCast(user, Q$UserProxy).getIsProf();
}
;
function UserManagementView_BinderImpl_0(){
}

defineSeed(1130, 1, {}, UserManagementView_BinderImpl_0);
function $build_f_HTMLPanel1_7(this$static){
  var attachRecord33, f_HTMLPanel1, f_VerticalPanel2, f_Label3, pnlAdd, f_Grid4, f_Label5, txtFullName, f_Label6, txtUserName, f_Label7, txtPassword, f_Label8, txtEmail, f_Label9, cmdAdd, f_HorizontalPanel10, f_Label11, lstUserTypes, pagerUser;
  f_HTMLPanel1 = new HTMLPanel_0($html1_6(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord33 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord33.origParent?$insertBefore(attachRecord33.origParent, attachRecord33.element, attachRecord33.origSibling):orphan(attachRecord33.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_12(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label3, ALIGN_CENTER) , $setTextOrHtml(f_Label3.directionalTextHelper, 'GESTION DES UTILISATEURS', false) , $updateHorizontalAlignment(f_Label3) , f_Label3.element.style['width'] = '900' , f_Label3)) , $add_12(f_VerticalPanel2, (pnlAdd = new HorizontalPanel_0 , $add_10(pnlAdd, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 2) , $resizeRows(f_Grid4, 6) , $setWidget_3(f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Nom & Pr\xE9nom :', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_3(f_Grid4, 0, 1, (txtFullName = new TextBox_0 , this$static.owner.txtFullName = txtFullName , txtFullName)) , $setWidget_3(f_Grid4, 1, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, "Nom d'utilisateur :", false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_3(f_Grid4, 1, 1, (txtUserName = new TextBox_0 , this$static.owner.txtUserName = txtUserName , txtUserName)) , $setWidget_3(f_Grid4, 2, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Mot de passe :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_3(f_Grid4, 2, 1, (txtPassword = new TextBox_0 , this$static.owner.txtPassword = txtPassword , txtPassword)) , $setWidget_3(f_Grid4, 3, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Email :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_3(f_Grid4, 3, 1, (txtEmail = new TextBox_0 , this$static.owner.txtEmail = txtEmail , txtEmail)) , $setWidget_3(f_Grid4, 4, 0, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label9.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_3(f_Grid4, 4, 1, (cmdAdd = new Button_0 , $setInnerText(cmdAdd.element, 'Ajouter') , $addDomHandler(cmdAdd, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdAdd)) , f_Grid4.element.style['width'] = '100%' , f_Grid4)) , setVisible(pnlAdd.element, false) , pnlAdd.element.style['width'] = '80%' , this$static.owner.pnlAdd = pnlAdd , pnlAdd)) , $add_12(f_VerticalPanel2, (f_HorizontalPanel10 = new HorizontalPanel_0 , $setVerticalAlignment(f_HorizontalPanel10, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_10(f_HorizontalPanel10, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Filtre :', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $add_10(f_HorizontalPanel10, (lstUserTypes = new ListBox_0 , lstUserTypes.element.style['width'] = '300px' , $addDomHandler(lstUserTypes, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstUserTypes = lstUserTypes , lstUserTypes)) , f_HorizontalPanel10.table['cellSpacing'] = 5 , f_HorizontalPanel10)) , $add_12(f_VerticalPanel2, this$static.tblUser) , $setCellWidth(f_VerticalPanel2, this$static.tblUser) , $add_12(f_VerticalPanel2, (pagerUser = new SimplePager_0 , $setPage(pagerUser, 0) , $setPageSize_0(pagerUser, 15) , $setPageStart(pagerUser, 0) , this$static.owner.pagerUser = pagerUser , pagerUser)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
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
  $setPageSize(this.tblUser, 15);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1131, 1, {}, UserManagementView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
_.tblUser = null;
function UserManagementView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1132, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserManagementView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_15(event_0){
  $onCmdAddClicked(this.this$1.owner);
}
;
_.this$1 = null;
function UserManagementView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1133, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), UserManagementView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_11(event_0){
  $onLstUserTypesChange(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_6(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$form$usermgt$UserManagementPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$usermgt$UserManagementPresenter$_annotation$$none$$) {
    result = new UserManagementPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$form$usermgt$UserManagementView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$sis$client$form$usermgt$UserManagementPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$form$usermgt$UserManagementPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$usermgt$UserManagementPresenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$sis$client$form$usermgt$UserManagementView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$usermgt$UserManagementView$_annotation$$none$$) {
    result = new UserManagementView_0(new UserManagementView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$form$usermgt$UserManagementView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$usermgt$UserManagementView$_annotation$$none$$;
}

defineSeed(1137, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_54(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$form$usermgt$UserManagementPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function UserRequestFactory_UserRequestContextImpl$6X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(2022, 722, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_97(){
  return new RequestData_0('VuXhpYahDeD667PTuf_Pto3kkxM=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_UserProxy_2_classLit);
}
;
function UserRequestFactory_UserRequestContextImpl$8X_0(this$0, val$type){
  this.val$type = val$type;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(2023, 722, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_98(){
  return new RequestData_0('pbdrVrgViBR_xsb0eysqhdGB$js=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$type]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_UserProxy_2_classLit);
}
;
_.val$type = null;
var Lcom_lemania_sis_client_form_usermgt_UserManagementPresenter_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementPresenter', 1098), Lcom_lemania_sis_client_form_usermgt_UserManagementPresenter$1_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementPresenter$1', 1099), Lcom_lemania_sis_client_form_usermgt_UserManagementPresenter$2_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementPresenter$2', 1100), Lcom_lemania_sis_client_form_usermgt_UserManagementPresenter$3_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementPresenter$3', 1101), Lcom_lemania_sis_client_form_usermgt_UserManagementPresenter$6_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementPresenter$6', 1104), Lcom_lemania_sis_client_form_usermgt_UserManagementView_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView', 1116), Lcom_lemania_sis_client_form_usermgt_UserManagementView$1_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView$1', 1117), Lcom_lemania_sis_client_form_usermgt_UserManagementView$2_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView$2', 1122), Lcom_lemania_sis_client_form_usermgt_UserManagementView$3_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView$3', 1123), Lcom_lemania_sis_client_form_usermgt_UserManagementView$4_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView$4', 1124), Lcom_lemania_sis_client_form_usermgt_UserManagementView$5_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView$5', 1125), Lcom_lemania_sis_client_form_usermgt_UserManagementView$6_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView$6', 1126), Lcom_lemania_sis_client_form_usermgt_UserManagementView$7_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView$7', 1127), Lcom_lemania_sis_client_form_usermgt_UserManagementView$8_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView$8', 1128), Lcom_lemania_sis_client_form_usermgt_UserManagementView$9_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView$9', 1129), Lcom_lemania_sis_client_form_usermgt_UserManagementView$10_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView$10', 1118), Lcom_lemania_sis_client_form_usermgt_UserManagementView$11_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView$11', 1119), Lcom_lemania_sis_client_form_usermgt_UserManagementView$12_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView$12', 1120), Lcom_lemania_sis_client_form_usermgt_UserManagementView$13_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView$13', 1121), Lcom_lemania_sis_client_form_usermgt_UserManagementView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView_BinderImpl', 1130), Lcom_lemania_sis_client_form_usermgt_UserManagementView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView_BinderImpl$Widgets', 1131), Lcom_lemania_sis_client_form_usermgt_UserManagementView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView_BinderImpl$Widgets$1', 1132), Lcom_lemania_sis_client_form_usermgt_UserManagementView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementView_BinderImpl$Widgets$2', 1133), Lcom_lemania_sis_shared_service_UserRequestFactory_1UserRequestContextImpl$6X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'UserRequestFactory_UserRequestContextImpl$6X', 2022), Lcom_lemania_sis_shared_service_UserRequestFactory_1UserRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'UserRequestFactory_UserRequestContextImpl$8X', 2023);
$entry(onLoad)(34);
