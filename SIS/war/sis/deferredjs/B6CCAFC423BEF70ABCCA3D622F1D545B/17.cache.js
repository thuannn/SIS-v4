function $setColumnWidth(this$static, column, width){
  this$static.columnWidthsByIndex.put(valueOf_1(column), width);
  this$static.maxColumnIndex = max(this$static.maxColumnIndex, column);
  column < max(this$static.columns.size_0, this$static.maxColumnIndex + 1) && $doSetColumnWidth(this$static, column, width);
}

function CheckDeadlineEvent_0(){
  $clinit_CheckDeadlineEvent();
}

defineSeed(752, 238, {}, CheckDeadlineEvent_0);
_.dispatch_0 = function dispatch_36(handler){
  dynamicCast(handler, Q$CheckDeadlineEvent$CheckDeadlineHandler).onCheckDeadline(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_37(){
  return TYPE_36;
}
;
function $calculateAverage(t1, t2, t3, t4, t5){
  var average, count, total;
  $clinit_Double();
  new Double_0(0);
  total = new Double_0(0);
  count = valueOf_1(0);
  if (t1.length) {
    total = new Double_0(total.value_0 + __parseAndValidateDouble(t1));
    count = valueOf_1(count.value_0 + 1);
  }
  if (t2.length) {
    total = new Double_0(total.value_0 + __parseAndValidateDouble(t2));
    count = valueOf_1(count.value_0 + 1);
  }
  if (t3.length) {
    total = new Double_0(total.value_0 + __parseAndValidateDouble(t3));
    count = valueOf_1(count.value_0 + 1);
  }
  if (t4.length) {
    total = new Double_0(total.value_0 + __parseAndValidateDouble(t4));
    count = valueOf_1(count.value_0 + 1);
  }
  if (t5.length) {
    total = new Double_0(total.value_0 + __parseAndValidateDouble(t5));
    count = valueOf_1(count.value_0 + 1);
  }
  if (count.value_0 > 0) {
    average = new Double_0(toDouble(fromDouble(round0(total.value_0 / count.value_0 * 10))) / 10);
    return '' + average.value_0;
  }
  return '';
}

function $onAssignmentSelected_0(this$static, assignmentId){
  var rc, rf, x;
  rf = new BulletinSubjectRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl_0(rf);
  $fire((x = new BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$6X_0(rc, assignmentId) , $addInvocation(rc.state.dialect, x) , x), new FrmMarkInputPresenter$4_0(this$static));
}

function $onBulletinBrancheSelected(this$static, bulletinBranche){
  !!bulletinBranche && $showCurrentNotes(dynamicCast(this$static.view, Q$FrmMarkInputPresenter$MyView));
}

function $onBulletinSubjectSelected(this$static, bulletinSubject){
  var rc, rf;
  rf = new BulletinBrancheRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl_0(rf);
  $fire($listAll_1(rc, '' + toString_6(bulletinSubject.getId_0().value_0)), new FrmMarkInputPresenter$6_0(this$static));
}

function $onCheckDeadline(this$static){
  var rf, rc;
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($listAll_6(rc), new FrmMarkInputPresenter$5_0(this$static));
}

function $onProfessorSelected_0(this$static, profId){
  var rc, rf;
  if (!profId.length) {
    $resetForm_10(dynamicCast(this$static.view, Q$FrmMarkInputPresenter$MyView));
    return;
  }
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  $fire($listAllActive(rc, profId), new FrmMarkInputPresenter$3_0(this$static));
}

function $saveBulletinSubject(this$static, bulletinBranche, bulletinSubject, remarque1, remarque2, remarque3){
  var rcSubject, rfSubject;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rfSubject = new BulletinSubjectRequestFactoryImpl_0;
  $initialize(rfSubject, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rcSubject = new BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl_0(rfSubject);
  bulletinSubject = dynamicCast($editProxy(rcSubject, bulletinSubject), Q$BulletinSubjectProxy);
  bulletinSubject.setRemarqueT1(remarque1);
  bulletinSubject.setRemarqueT2(remarque2);
  bulletinSubject.setRemarqueT3(remarque3);
  $fire($saveAndReturn_0(rcSubject, bulletinSubject), new FrmMarkInputPresenter$8_0(this$static, bulletinBranche));
}

function $saveNotes(this$static, bulletinBranche, bulletinSubject, t_1_1, t_1_2, t_1_3, t_1_4, t_1_5, t_2_1, t_2_2, t_2_3, t_2_4, t_2_5, t_3_1, t_3_2, t_3_3, t_3_4, t_3_5, remarque1, remarque2, remarque3){
  var rcBranche, rfBranche;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!bulletinSubject) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + " - Merci de choisir l'\xE9l\xE8ve \xE0 saisir les notes.");
    return;
  }
  if (!bulletinBranche) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Merci de choisir une branche \xE0 choisir les notes.');
    return;
  }
  rfBranche = new BulletinBrancheRequestFactoryImpl_0;
  $initialize(rfBranche, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rcBranche = new BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl_0(rfBranche);
  bulletinBranche = dynamicCast($editProxy(rcBranche, bulletinBranche), Q$BulletinBrancheProxy);
  bulletinBranche.setT1_1(t_1_1);
  bulletinBranche.setT1_2(t_1_2);
  bulletinBranche.setT1_3(t_1_3);
  bulletinBranche.setT1_4(t_1_4);
  bulletinBranche.setT1_5(t_1_5);
  bulletinBranche.setT1($calculateAverage(t_1_1, t_1_2, t_1_3, t_1_4, t_1_5));
  bulletinBranche.setT2_1(t_2_1);
  bulletinBranche.setT2_2(t_2_2);
  bulletinBranche.setT2_3(t_2_3);
  bulletinBranche.setT2_4(t_2_4);
  bulletinBranche.setT2_5(t_2_5);
  bulletinBranche.setT2($calculateAverage(t_2_1, t_2_2, t_2_3, t_2_4, t_2_5));
  bulletinBranche.setT3_1(t_3_1);
  bulletinBranche.setT3_2(t_3_2);
  bulletinBranche.setT3_3(t_3_3);
  bulletinBranche.setT3_4(t_3_4);
  bulletinBranche.setT3_5(t_3_5);
  bulletinBranche.setT3($calculateAverage(t_3_1, t_3_2, t_3_3, t_3_4, t_3_5));
  $fire($saveAndReturn(rcBranche, bulletinBranche), new FrmMarkInputPresenter$7_0(this$static, bulletinSubject, remarque1, remarque2, remarque3));
}

function FrmMarkInputPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(944, 696, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$CheckDeadlineEvent$CheckDeadlineHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$FrmMarkInputPresenter, Q$FrmMarkInputUiHandler]), FrmMarkInputPresenter_0);
_.onBind = function onBind_17(){
  dynamicCast(this.view, Q$FrmMarkInputPresenter$MyView).setUiHandlers(this);
  $initializeUi(dynamicCast(this.view, Q$FrmMarkInputPresenter$MyView));
}
;
_.onCheckDeadline = function onCheckDeadline(event_0){
  $onCheckDeadline(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_33(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_16(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('markinput'), null);
  $resetForm_10(dynamicCast(this.view, Q$FrmMarkInputPresenter$MyView));
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  this.currentUser.isProf && $fire($getByEmail(rc, this.currentUser.userEmail), new FrmMarkInputPresenter$1_0(this));
  this.currentUser.isAdmin && $fire($listAll_5(rc), new FrmMarkInputPresenter$2_0(this));
}
;
_.revealInParent = function revealInParent_16(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_76(this$static, response){
  $setProfListData_1(dynamicCast(this$static.this$0.view, Q$FrmMarkInputPresenter$MyView), response);
}

function FrmMarkInputPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(945, 635, makeCastMap([Q$Receiver]), FrmMarkInputPresenter$1_0);
_.onFailure_0 = function onFailure_80(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_80(response){
  $onSuccess_76(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_77(this$static, response){
  $setProfListData_1(dynamicCast(this$static.this$0.view, Q$FrmMarkInputPresenter$MyView), response);
}

function FrmMarkInputPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(946, 635, makeCastMap([Q$Receiver]), FrmMarkInputPresenter$2_0);
_.onFailure_0 = function onFailure_81(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_81(response){
  $onSuccess_77(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_78(this$static, response){
  $setAssignmentTableData_0(dynamicCast(this$static.this$0.view, Q$FrmMarkInputPresenter$MyView), response);
}

function FrmMarkInputPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(947, 635, makeCastMap([Q$Receiver]), FrmMarkInputPresenter$3_0);
_.onFailure_0 = function onFailure_82(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_82(response){
  $onSuccess_78(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_79(this$static, response){
  $setBulletinSubjectTableData_0(dynamicCast(this$static.this$0.view, Q$FrmMarkInputPresenter$MyView), response);
  $modifyUiByProgramme(dynamicCast(this$static.this$0.view, Q$FrmMarkInputPresenter$MyView));
  $doFire(this$static.this$0.eventBus, new CheckDeadlineEvent_0, null);
}

function FrmMarkInputPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(948, 635, makeCastMap([Q$Receiver]), FrmMarkInputPresenter$4_0);
_.onFailure_0 = function onFailure_83(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_83(response){
  $onSuccess_79(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_80(this$static, response){
  $modifyUiByDeadline(dynamicCast(this$static.this$0.view, Q$FrmMarkInputPresenter$MyView), response, this$static.this$0.currentUser);
}

function FrmMarkInputPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(949, 635, makeCastMap([Q$Receiver]), FrmMarkInputPresenter$5_0);
_.onFailure_0 = function onFailure_84(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_84(response){
  $onSuccess_80(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_81(this$static, response){
  $setBulletinBrancheTableData_0(dynamicCast(this$static.this$0.view, Q$FrmMarkInputPresenter$MyView), response);
  $showCurrentRemarques(dynamicCast(this$static.this$0.view, Q$FrmMarkInputPresenter$MyView));
}

function FrmMarkInputPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(950, 635, makeCastMap([Q$Receiver]), FrmMarkInputPresenter$6_0);
_.onFailure_0 = function onFailure_85(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_85(response){
  $onSuccess_81(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_82(this$static, response){
  $saveBulletinSubject(this$static.this$0, response, this$static.val$bulletinSubject, this$static.val$remarque1, this$static.val$remarque2, this$static.val$remarque3);
}

function FrmMarkInputPresenter$7_0(this$0, val$bulletinSubject, val$remarque1, val$remarque2, val$remarque3){
  this.this$0 = this$0;
  this.val$bulletinSubject = val$bulletinSubject;
  this.val$remarque1 = val$remarque1;
  this.val$remarque2 = val$remarque2;
  this.val$remarque3 = val$remarque3;
}

defineSeed(951, 635, makeCastMap([Q$Receiver]), FrmMarkInputPresenter$7_0);
_.onFailure_0 = function onFailure_86(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_86(response){
  $onSuccess_82(this, dynamicCast(response, Q$BulletinBrancheProxy));
}
;
_.this$0 = null;
_.val$bulletinSubject = null;
_.val$remarque1 = null;
_.val$remarque2 = null;
_.val$remarque3 = null;
function $onSuccess_83(this$static, response){
  $showUpdatedBulletinDetails(dynamicCast(this$static.this$0.view, Q$FrmMarkInputPresenter$MyView), this$static.val$bulletinBranche, response);
}

function FrmMarkInputPresenter$8_0(this$0, val$bulletinBranche){
  this.this$0 = this$0;
  this.val$bulletinBranche = val$bulletinBranche;
}

defineSeed(952, 635, makeCastMap([Q$Receiver]), FrmMarkInputPresenter$8_0);
_.onFailure_0 = function onFailure_87(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_87(response){
  $onSuccess_83(this, dynamicCast(response, Q$BulletinSubjectProxy));
}
;
_.this$0 = null;
_.val$bulletinBranche = null;
defineSeed(953, 727, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$CheckDeadlineEvent$CheckDeadlineHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler]));
_.onCheckDeadline = function onCheckDeadline_0(event_0){
  $getPresenter_0(this, new FrmMarkInputPresenterMyProxyImpl$2_0(this.eventBus, event_0));
}
;
function $success_24(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new FrmMarkInputPresenterMyProxyImpl$2$1_0(presenter, this$static.val$event));
}

function FrmMarkInputPresenterMyProxyImpl$2_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(956, 709, {}, FrmMarkInputPresenterMyProxyImpl$2_0);
_.success = function success_26(presenter){
  $success_24(this, dynamicCast(presenter, Q$FrmMarkInputPresenter));
}
;
_.val$event = null;
function FrmMarkInputPresenterMyProxyImpl$2$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(957, 1, {}, FrmMarkInputPresenterMyProxyImpl$2$1_0);
_.execute_1 = function execute_52(){
  $onCheckDeadline(this.val$presenter);
}
;
_.val$event = null;
_.val$presenter = null;
function $get_Key$type$com$lemania$sis$client$presenter$FrmMarkInputPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmMarkInputPresenter$_annotation$$none$$) {
    result = new FrmMarkInputPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmMarkInputView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmMarkInputPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmMarkInputPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmMarkInputPresenter$_annotation$$none$$;
}

defineSeed(1105, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_147(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmMarkInputPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $blockT1(this$static, block){
  $setEnabled(this$static.txt_t_1_1, !block);
  $setEnabled(this$static.txt_t_1_2, !block);
  $setEnabled(this$static.txt_t_1_3, !block);
  $setEnabled(this$static.txt_t_1_4, !block);
  $setEnabled(this$static.txt_t_1_5, !block);
  $setEnabled(this$static.txtRemarque1, !block);
}

function $blockT2(this$static, block){
  $setEnabled(this$static.txt_t_2_1, !block);
  $setEnabled(this$static.txt_t_2_2, !block);
  $setEnabled(this$static.txt_t_2_3, !block);
  $setEnabled(this$static.txt_t_2_4, !block);
  $setEnabled(this$static.txt_t_2_5, !block);
  $setEnabled(this$static.txtRemarque2, !block);
}

function $blockT3(this$static, block){
  $setEnabled(this$static.txt_t_3_1, !block);
  $setEnabled(this$static.txt_t_3_2, !block);
  $setEnabled(this$static.txt_t_3_3, !block);
  $setEnabled(this$static.txt_t_3_4, !block);
  $setEnabled(this$static.txt_t_3_5, !block);
  $setEnabled(this$static.txtRemarque3, !block);
}

function $clearInputFields(this$static){
  $setText(this$static.txt_t_1_1, '');
  $setText(this$static.txt_t_1_2, '');
  $setText(this$static.txt_t_1_3, '');
  $setText(this$static.txt_t_1_4, '');
  $setText(this$static.txt_t_1_5, '');
  $setText(this$static.txt_t_2_1, '');
  $setText(this$static.txt_t_2_2, '');
  $setText(this$static.txt_t_2_3, '');
  $setText(this$static.txt_t_2_4, '');
  $setText(this$static.txt_t_2_5, '');
  $setText(this$static.txt_t_3_1, '');
  $setText(this$static.txt_t_3_2, '');
  $setText(this$static.txt_t_3_3, '');
  $setText(this$static.txt_t_3_4, '');
  $setText(this$static.txt_t_3_5, '');
  $setText(this$static.txtRemarque1, '');
  $setText(this$static.txtRemarque2, '');
  $setText(this$static.txtRemarque3, '');
  $setText_1(this$static.txtT1, '');
  $setText_1(this$static.txtT2, '');
  $setText_1(this$static.txtT3, '');
  $setText_1(this$static.lblStudentName, '');
  $blockT1(this$static, this$static.blockT1);
  $blockT2(this$static, this$static.blockT2);
  $blockT3(this$static, this$static.blockT3);
  $setVisible_0(this$static.pnlT1, false);
  $setVisible_0(this$static.pnlT2, false);
  $setVisible_0(this$static.pnlT3, false);
  $setVisible_0(this$static.cmdSave, false);
}

function $initializeUi(this$static){
  var colSubjectName, selectionModel, colBrancheName, colCoef, colT1, colT2, colT3, selectionModel_0, colT1_0, colExamT1, colT2_0, colExamT2, colT3_0, colExamT3, colAn;
  colSubjectName = new FrmMarkInputView$14_0;
  $addColumn(this$static.tblBulletinSubjects, colSubjectName, 'El\xE8ve');
  selectionModel = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblBulletinSubjects, selectionModel);
  $addSelectionChangeHandler(selectionModel, new FrmMarkInputView$15_0(this$static, selectionModel));
  $addDataDisplay(this$static.bulletinSubjectDataProvider, this$static.tblBulletinSubjects);
  colBrancheName = new FrmMarkInputView$8_0;
  $addColumn(this$static.tblBranches, colBrancheName, 'Branches');
  colCoef = new FrmMarkInputView$9_0;
  $addColumn(this$static.tblBranches, colCoef, 'Coef');
  $setColumnWidth_0(this$static.tblBranches, colCoef, 15 + ($clinit_Style$Unit() , '%'));
  colT1 = new FrmMarkInputView$10_0;
  $addColumn(this$static.tblBranches, colT1, 'T1');
  $setColumnWidth_0(this$static.tblBranches, colT1, '15%');
  colT2 = new FrmMarkInputView$11_0;
  $addColumn(this$static.tblBranches, colT2, 'T2');
  $setColumnWidth_0(this$static.tblBranches, colT2, '15%');
  colT3 = new FrmMarkInputView$12_0;
  $addColumn(this$static.tblBranches, colT3, 'T3');
  $setColumnWidth_0(this$static.tblBranches, colT3, '15%');
  selectionModel_0 = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblBranches, selectionModel_0);
  $addSelectionChangeHandler(selectionModel_0, new FrmMarkInputView$13_0(this$static, selectionModel_0));
  $addDataDisplay(this$static.bulletinBrancheDataProvider, this$static.tblBranches);
  colT1_0 = new FrmMarkInputView$1_0;
  $addColumn(this$static.tblAverageGrade, colT1_0, 'T1');
  colExamT1 = new FrmMarkInputView$2_0;
  $addColumn(this$static.tblAverageGrade, colExamT1, 'E1');
  colT2_0 = new FrmMarkInputView$3_0;
  $addColumn(this$static.tblAverageGrade, colT2_0, 'T2');
  colExamT2 = new FrmMarkInputView$4_0;
  $addColumn(this$static.tblAverageGrade, colExamT2, 'E2');
  colT3_0 = new FrmMarkInputView$5_0;
  $addColumn(this$static.tblAverageGrade, colT3_0, 'T3');
  colExamT3 = new FrmMarkInputView$6_0;
  $addColumn(this$static.tblAverageGrade, colExamT3, 'E3');
  colAn = new FrmMarkInputView$7_0;
  $addColumn(this$static.tblAverageGrade, colAn, 'Moyenne');
  $addDataDisplay(this$static.bulletinSubjectAverageDataProvider, this$static.tblAverageGrade);
}

function $modifyUiByDeadline(this$static, settings, currentUser){
  var currentDate, deadLine, setting, setting$iterator;
  currentDate = __parseAndValidateInt('' + currentUser.currentYear + (currentUser.currentMonth < 10?'0' + currentUser.currentMonth:'' + currentUser.currentMonth) + (currentUser.currentDay < 10?'0' + currentUser.currentDay:'' + currentUser.currentDay));
  for (setting$iterator = settings.iterator(); setting$iterator.hasNext();) {
    setting = dynamicCast(setting$iterator.next_0(), Q$SettingOptionProxy);
    if ($getItemText(this$static.lstAssignments, this$static.lstAssignments.element.selectedIndex).toLowerCase().indexOf('maturit\xE9 suisse') != -1) {
      if ($getItemText(this$static.lstAssignments, this$static.lstAssignments.element.selectedIndex).toLowerCase().indexOf('pr\xE9alable') == -1) {
        if ($equals_5(setting.getOptionName(), ($clinit_NotificationTypes() , 'BLOCK_MATU_T1'))) {
          deadLine = __parseAndValidateInt(setting.getOptionValue());
          deadLine <= currentDate?(this$static.blockT1 = true):(this$static.blockT1 = false);
        }
        if ($equals_5(setting.getOptionName(), 'BLOCK_MATU_T2')) {
          deadLine = __parseAndValidateInt(setting.getOptionValue());
          deadLine <= currentDate?(this$static.blockT2 = true):(this$static.blockT2 = false);
        }
      }
    }
    if ($getItemText(this$static.lstAssignments, this$static.lstAssignments.element.selectedIndex).toLowerCase().indexOf('baccalaur\xE9at fran\xE7ais') != -1) {
      if ($equals_5(setting.getOptionName(), ($clinit_NotificationTypes() , 'BLOCK_BAC_T1'))) {
        deadLine = __parseAndValidateInt(setting.getOptionValue());
        deadLine <= currentDate?(this$static.blockT1 = true):(this$static.blockT1 = false);
      }
      if ($equals_5(setting.getOptionName(), 'BLOCK_BAC_T2')) {
        deadLine = __parseAndValidateInt(setting.getOptionValue());
        deadLine <= currentDate?(this$static.blockT2 = true):(this$static.blockT2 = false);
      }
      if ($equals_5(setting.getOptionName(), 'BLOCK_BAC_T3')) {
        deadLine = __parseAndValidateInt(setting.getOptionValue());
        deadLine <= currentDate?(this$static.blockT3 = true):(this$static.blockT3 = false);
      }
    }
    if ($getItemText(this$static.lstAssignments, this$static.lstAssignments.element.selectedIndex).toLowerCase().indexOf('etudes secondaires') != -1) {
      if ($equals_5(setting.getOptionName(), ($clinit_NotificationTypes() , 'BLOCK_ES_T1'))) {
        deadLine = __parseAndValidateInt(setting.getOptionValue());
        deadLine <= currentDate?(this$static.blockT1 = true):(this$static.blockT1 = false);
      }
      if ($equals_5(setting.getOptionName(), 'BLOCK_ES_T2')) {
        deadLine = __parseAndValidateInt(setting.getOptionValue());
        deadLine <= currentDate?(this$static.blockT2 = true):(this$static.blockT2 = false);
      }
      if ($equals_5(setting.getOptionName(), 'BLOCK_ES_T3')) {
        deadLine = __parseAndValidateInt(setting.getOptionValue());
        deadLine <= currentDate?(this$static.blockT3 = true):(this$static.blockT3 = false);
      }
    }
  }
}

function $modifyUiByProgramme(this$static){
  if (this$static.selectedBulletinBrancheIndex > -1) {
    $setVisible_0(this$static.pnlT1, true);
    $setVisible_0(this$static.pnlT2, true);
    $setVisible_0(this$static.cmdSave, true);
  }
  if ($getItemText(this$static.lstAssignments, this$static.lstAssignments.element.selectedIndex).toLowerCase().indexOf('matu') != -1) {
    $setColumnWidth(this$static.tblAverageGrade, 4, '0px');
    $setColumnWidth(this$static.tblAverageGrade, 5, '0px');
    $setColumnWidth(this$static.tblBranches, 4, '0px');
    $setVisible_0(this$static.pnlT3, false);
  }
   else {
    $setColumnWidth(this$static.tblAverageGrade, 4, 15 + ($clinit_Style$Unit() , '%'));
    $setColumnWidth(this$static.tblAverageGrade, 5, '15%');
    $setColumnWidth(this$static.tblBranches, 4, '15%');
    this$static.selectedBulletinBrancheIndex > -1 && (this$static.pnlT3.element.style.display != 'none' || $setVisible_0(this$static.pnlT3, true));
  }
}

function $onCmdSaveClick_3(this$static){
  !!this$static.uiHandlers && $saveNotes(dynamicCast(this$static.uiHandlers, Q$FrmMarkInputUiHandler), this$static.selectedBulletinBranche, this$static.selectedBulletinSubject, $getPropertyString(this$static.txt_t_1_1.element, 'value'), $getPropertyString(this$static.txt_t_1_2.element, 'value'), $getPropertyString(this$static.txt_t_1_3.element, 'value'), $getPropertyString(this$static.txt_t_1_4.element, 'value'), $getPropertyString(this$static.txt_t_1_5.element, 'value'), $getPropertyString(this$static.txt_t_2_1.element, 'value'), $getPropertyString(this$static.txt_t_2_2.element, 'value'), $getPropertyString(this$static.txt_t_2_3.element, 'value'), $getPropertyString(this$static.txt_t_2_4.element, 'value'), $getPropertyString(this$static.txt_t_2_5.element, 'value'), $getPropertyString(this$static.txt_t_3_1.element, 'value'), $getPropertyString(this$static.txt_t_3_2.element, 'value'), $getPropertyString(this$static.txt_t_3_3.element, 'value'), $getPropertyString(this$static.txt_t_3_4.element, 'value'), $getPropertyString(this$static.txt_t_3_5.element, 'value'), $getPropertyString(this$static.txtRemarque1.element, 'value'), $getPropertyString(this$static.txtRemarque2.element, 'value'), $getPropertyString(this$static.txtRemarque3.element, 'value'));
}

function $onLstAssignmentsChange_0(this$static){
  $clear_3(this$static.bulletinSubjectDataProvider.listWrapper);
  $clear_3(this$static.bulletinBrancheDataProvider.listWrapper);
  this$static.selectedBulletinBrancheIndex = -1;
  $setSelected_0(this$static.tblBranches.presenter.selectionModel, this$static.selectedBulletinBranche, false);
  this$static.selectedBulletinBranche = null;
  this$static.selectedBulletinSubjectIndex = -1;
  $setSelected_0(this$static.tblBulletinSubjects.presenter.selectionModel, this$static.selectedBulletinSubject, false);
  this$static.selectedBulletinSubject = null;
  $clearInputFields(this$static);
  !!this$static.uiHandlers && $onAssignmentSelected_0(dynamicCast(this$static.uiHandlers, Q$FrmMarkInputUiHandler), $getValue_1(this$static.lstAssignments, this$static.lstAssignments.element.selectedIndex));
}

function $onLstProfsChange_0(this$static){
  $resetForm_10(this$static);
  !!this$static.uiHandlers && $onProfessorSelected_0(dynamicCast(this$static.uiHandlers, Q$FrmMarkInputUiHandler), $getValue_1(this$static.lstProfs, this$static.lstProfs.element.selectedIndex));
}

function $resetForm_10(this$static){
  $selectClear(this$static.lstAssignments.element);
  $clear_3(this$static.bulletinSubjectDataProvider.listWrapper);
  $clear_3(this$static.bulletinBrancheDataProvider.listWrapper);
  $setText_1(this$static.lblStudentName, '');
  $clearInputFields(this$static);
}

function $setAssignmentTableData_0(this$static, assignments){
  var assignment, assignment$iterator;
  $selectClear(this$static.lstAssignments.element);
  $insertItem(this$static.lstAssignments, '-', '', -1);
  for (assignment$iterator = assignments.iterator(); assignment$iterator.hasNext();) {
    assignment = dynamicCast(assignment$iterator.next_0(), Q$AssignmentProxy);
    $insertItem(this$static.lstAssignments, assignment.getProgrammeName() + ' - ' + assignment.getClasseName() + ' - ' + assignment.getSubjectName(), '' + toString_6(assignment.getId_0().value_0), -1);
  }
}

function $setBulletinBrancheTableData_0(this$static, bulletinBranches){
  $clear_3(this$static.bulletinBrancheDataProvider.listWrapper);
  $setList(this$static.bulletinBrancheDataProvider, bulletinBranches);
}

function $setBulletinSubjectTableData_0(this$static, bulletinSubjects){
  $clear_3(this$static.bulletinSubjectDataProvider.listWrapper);
  $setList(this$static.bulletinSubjectDataProvider, bulletinSubjects);
}

function $setProfListData_1(this$static, profs){
  var prof, prof$iterator;
  $selectClear(this$static.lstProfs.element);
  $insertItem(this$static.lstProfs, '-', '', -1);
  for (prof$iterator = profs.iterator(); prof$iterator.hasNext();) {
    prof = dynamicCast(prof$iterator.next_0(), Q$ProfessorProxy);
    $insertItem(this$static.lstProfs, prof.getProfName(), '' + toString_6(prof.getId_0().value_0), -1);
  }
}

function $showCurrentNotes(this$static){
  $setText(this$static.txt_t_1_1, this$static.selectedBulletinBranche.getT1_1());
  $setText(this$static.txt_t_1_2, this$static.selectedBulletinBranche.getT1_2());
  $setText(this$static.txt_t_1_3, this$static.selectedBulletinBranche.getT1_3());
  $setText(this$static.txt_t_1_4, this$static.selectedBulletinBranche.getT1_4());
  $setText(this$static.txt_t_1_5, this$static.selectedBulletinBranche.getT1_5());
  $setText(this$static.txt_t_2_1, this$static.selectedBulletinBranche.getT2_1());
  $setText(this$static.txt_t_2_2, this$static.selectedBulletinBranche.getT2_2());
  $setText(this$static.txt_t_2_3, this$static.selectedBulletinBranche.getT2_3());
  $setText(this$static.txt_t_2_4, this$static.selectedBulletinBranche.getT2_4());
  $setText(this$static.txt_t_2_5, this$static.selectedBulletinBranche.getT2_5());
  $setText(this$static.txt_t_3_1, this$static.selectedBulletinBranche.getT3_1());
  $setText(this$static.txt_t_3_2, this$static.selectedBulletinBranche.getT3_2());
  $setText(this$static.txt_t_3_3, this$static.selectedBulletinBranche.getT3_3());
  $setText(this$static.txt_t_3_4, this$static.selectedBulletinBranche.getT3_4());
  $setText(this$static.txt_t_3_5, this$static.selectedBulletinBranche.getT3_5());
  $setText_1(this$static.txtT1, this$static.selectedBulletinBranche.getT1());
  $setText_1(this$static.txtT2, this$static.selectedBulletinBranche.getT2());
  $setText_1(this$static.txtT3, this$static.selectedBulletinBranche.getT3());
  $modifyUiByProgramme(this$static);
}

function $showCurrentRemarques(this$static){
  $setText(this$static.txtRemarque1, this$static.selectedBulletinSubject.getRemarqueT1());
  $setText(this$static.txtRemarque2, this$static.selectedBulletinSubject.getRemarqueT2());
  $setText(this$static.txtRemarque3, this$static.selectedBulletinSubject.getRemarqueT3());
}

function $showUpdatedBulletinDetails(this$static, bulletinBranche, bulletinSubject){
  $set_1(this$static.bulletinSubjectDataProvider.listWrapper, this$static.selectedBulletinSubjectIndex, bulletinSubject);
  $set_1(this$static.bulletinBrancheDataProvider.listWrapper, this$static.selectedBulletinBrancheIndex, bulletinBranche);
  $set_1(this$static.bulletinSubjectAverageDataProvider.listWrapper, 0, bulletinSubject);
  $setText_1(this$static.txtT1, bulletinBranche.getT1());
  $setText_1(this$static.txtT2, bulletinBranche.getT2());
  $setText_1(this$static.txtT3, bulletinBranche.getT3());
}

function FrmMarkInputView_0(){
  this.bulletinSubjectDataProvider = new ListDataProvider_0;
  this.bulletinSubjectAverageDataProvider = new ListDataProvider_0;
  this.bulletinBrancheDataProvider = new ListDataProvider_0;
  this.tblBulletinSubjects = new DataGrid_0;
  this.tblBranches = new DataGrid_0;
  this.tblAverageGrade = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_15(new FrmMarkInputView_BinderImpl$Widgets_0(this));
}

defineSeed(1328, 701, makeCastMap([Q$IsWidget, Q$FrmMarkInputPresenter$MyView]), FrmMarkInputView_0);
_.asWidget = function asWidget_19(){
  return this.widget;
}
;
_.blockT1 = false;
_.blockT2 = false;
_.blockT3 = false;
_.cmdSave = null;
_.lblStudentName = null;
_.lstAssignments = null;
_.lstProfs = null;
_.pnlT1 = null;
_.pnlT2 = null;
_.pnlT3 = null;
_.selectedBulletinBranche = null;
_.selectedBulletinBrancheIndex = -1;
_.selectedBulletinSubject = null;
_.selectedBulletinSubjectIndex = -1;
_.txtRemarque1 = null;
_.txtRemarque2 = null;
_.txtRemarque3 = null;
_.txtT1 = null;
_.txtT2 = null;
_.txtT3 = null;
_.txt_t_1_1 = null;
_.txt_t_1_2 = null;
_.txt_t_1_3 = null;
_.txt_t_1_4 = null;
_.txt_t_1_5 = null;
_.txt_t_2_1 = null;
_.txt_t_2_2 = null;
_.txt_t_2_3 = null;
_.txt_t_2_4 = null;
_.txt_t_2_5 = null;
_.txt_t_3_1 = null;
_.txt_t_3_2 = null;
_.txt_t_3_3 = null;
_.txt_t_3_4 = null;
_.txt_t_3_5 = null;
_.widget = null;
function FrmMarkInputView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1329, 389, makeCastMap([Q$HasCell, Q$Column]), FrmMarkInputView$1_0);
_.getValue = function getValue_45(object){
  return dynamicCast(object, Q$BulletinSubjectProxy).getT1();
}
;
function FrmMarkInputView$10_0(){
  TextColumn_0.call(this);
}

defineSeed(1330, 389, makeCastMap([Q$HasCell, Q$Column]), FrmMarkInputView$10_0);
_.getValue = function getValue_46(object){
  return dynamicCast(object, Q$BulletinBrancheProxy).getT1();
}
;
function FrmMarkInputView$11_0(){
  TextColumn_0.call(this);
}

defineSeed(1331, 389, makeCastMap([Q$HasCell, Q$Column]), FrmMarkInputView$11_0);
_.getValue = function getValue_47(object){
  return dynamicCast(object, Q$BulletinBrancheProxy).getT2();
}
;
function FrmMarkInputView$12_0(){
  TextColumn_0.call(this);
}

defineSeed(1332, 389, makeCastMap([Q$HasCell, Q$Column]), FrmMarkInputView$12_0);
_.getValue = function getValue_48(object){
  return dynamicCast(object, Q$BulletinBrancheProxy).getT3();
}
;
function FrmMarkInputView$13_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1333, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), FrmMarkInputView$13_0);
_.onSelectionChange = function onSelectionChange_4(event_0){
  this.this$0.selectedBulletinBranche = dynamicCast($getSelectedObject(this.val$selectionModel), Q$BulletinBrancheProxy);
  if (this.this$0.selectedBulletinBranche) {
    $setText_1(this.this$0.lblStudentName, this.this$0.selectedBulletinSubject.getStudentName() + ' - ' + this.this$0.selectedBulletinBranche.getBulletinBrancheName());
    this.this$0.selectedBulletinBrancheIndex = $indexOf_0(this.this$0.bulletinBrancheDataProvider.listWrapper, this.this$0.selectedBulletinBranche);
    $onBulletinBrancheSelected(dynamicCast(this.this$0.uiHandlers, Q$FrmMarkInputUiHandler), this.this$0.selectedBulletinBranche);
    $blockT1(this.this$0, this.this$0.blockT1);
    $blockT2(this.this$0, this.this$0.blockT2);
    $blockT3(this.this$0, this.this$0.blockT3);
  }
}
;
_.this$0 = null;
_.val$selectionModel = null;
function FrmMarkInputView$14_0(){
  TextColumn_0.call(this);
}

defineSeed(1334, 389, makeCastMap([Q$HasCell, Q$Column]), FrmMarkInputView$14_0);
_.getValue = function getValue_49(object){
  return dynamicCast(object, Q$BulletinSubjectProxy).getStudentName();
}
;
function FrmMarkInputView$15_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1335, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), FrmMarkInputView$15_0);
_.onSelectionChange = function onSelectionChange_5(event_0){
  this.this$0.selectedBulletinSubject = dynamicCast($getSelectedObject(this.val$selectionModel), Q$BulletinSubjectProxy);
  if (this.this$0.selectedBulletinSubject) {
    $clear_3(this.this$0.bulletinSubjectAverageDataProvider.listWrapper);
    $add_14(this.this$0.bulletinSubjectAverageDataProvider.listWrapper, this.this$0.selectedBulletinSubject);
    this.this$0.selectedBulletinBrancheIndex = -1;
    $setSelected_0(this.this$0.tblBranches.presenter.selectionModel, this.this$0.selectedBulletinBranche, false);
    this.this$0.selectedBulletinBranche = null;
    $clearInputFields(this.this$0);
    this.this$0.selectedBulletinSubjectIndex = $indexOf_0(this.this$0.bulletinSubjectDataProvider.listWrapper, this.this$0.selectedBulletinSubject);
    $onBulletinSubjectSelected(dynamicCast(this.this$0.uiHandlers, Q$FrmMarkInputUiHandler), this.this$0.selectedBulletinSubject);
  }
}
;
_.this$0 = null;
_.val$selectionModel = null;
function FrmMarkInputView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(1336, 389, makeCastMap([Q$HasCell, Q$Column]), FrmMarkInputView$2_0);
_.getValue = function getValue_50(object){
  return dynamicCast(object, Q$BulletinSubjectProxy).getExamT1();
}
;
function FrmMarkInputView$3_0(){
  TextColumn_0.call(this);
}

defineSeed(1337, 389, makeCastMap([Q$HasCell, Q$Column]), FrmMarkInputView$3_0);
_.getValue = function getValue_51(object){
  return dynamicCast(object, Q$BulletinSubjectProxy).getT2();
}
;
function FrmMarkInputView$4_0(){
  TextColumn_0.call(this);
}

defineSeed(1338, 389, makeCastMap([Q$HasCell, Q$Column]), FrmMarkInputView$4_0);
_.getValue = function getValue_52(object){
  return dynamicCast(object, Q$BulletinSubjectProxy).getExamT2();
}
;
function FrmMarkInputView$5_0(){
  TextColumn_0.call(this);
}

defineSeed(1339, 389, makeCastMap([Q$HasCell, Q$Column]), FrmMarkInputView$5_0);
_.getValue = function getValue_53(object){
  return dynamicCast(object, Q$BulletinSubjectProxy).getT3();
}
;
function FrmMarkInputView$6_0(){
  TextColumn_0.call(this);
}

defineSeed(1340, 389, makeCastMap([Q$HasCell, Q$Column]), FrmMarkInputView$6_0);
_.getValue = function getValue_54(object){
  return dynamicCast(object, Q$BulletinSubjectProxy).getExamT3();
}
;
function FrmMarkInputView$7_0(){
  TextColumn_0.call(this);
}

defineSeed(1341, 389, makeCastMap([Q$HasCell, Q$Column]), FrmMarkInputView$7_0);
_.getValue = function getValue_55(object){
  return dynamicCast(object, Q$BulletinSubjectProxy).getAn();
}
;
function FrmMarkInputView$8_0(){
  TextColumn_0.call(this);
}

defineSeed(1342, 389, makeCastMap([Q$HasCell, Q$Column]), FrmMarkInputView$8_0);
_.getValue = function getValue_56(object){
  return dynamicCast(object, Q$BulletinBrancheProxy).getBulletinBrancheName();
}
;
function $getValue_7(object){
  return $clinit_Double() , '' + object.getBrancheCoef().value_0;
}

function FrmMarkInputView$9_0(){
  TextColumn_0.call(this);
}

defineSeed(1343, 389, makeCastMap([Q$HasCell, Q$Column]), FrmMarkInputView$9_0);
_.getValue = function getValue_57(object){
  return $getValue_7(dynamicCast(object, Q$BulletinBrancheProxy));
}
;
function FrmMarkInputView_BinderImpl_0(){
}

defineSeed(1344, 1, {}, FrmMarkInputView_BinderImpl_0);
function $build_f_HTMLPanel1_15(this$static){
  var attachRecord16, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, f_Label6, lstProfs, f_Label7, f_Label8, lstAssignments, f_HorizontalPanel9, f_VerticalPanel10, f_VerticalPanel14, f_VerticalPanel19, f_HorizontalPanel11, f_Label12, f_Label13, tblBulletinSubjects, f_HorizontalPanel15, f_Label16, f_Label17, tblBranches, f_Label18, tblAverageGrade, pnlNoteInput, f_HorizontalPanel20, f_Label21, f_Label22, lblStudentName, f_Label23, pnlT1, f_HorizontalPanel24, f_Label25, txt_t_1_1, txt_t_1_2, txt_t_1_3, txt_t_1_4, txt_t_1_5, txtT1, txtRemarque1, f_Label26, pnlT2, f_HorizontalPanel27, f_Label28, txt_t_2_1, txt_t_2_2, txt_t_2_3, txt_t_2_4, txt_t_2_5, txtT2, txtRemarque2, f_Label29, pnlT3, f_HorizontalPanel30, f_Label31, txt_t_3_1, txt_t_3_2, txt_t_3_3, txt_t_3_4, txt_t_3_5, txtT3, txtRemarque3, cmdSave, f_Label32;
  f_HTMLPanel1 = new HTMLPanel_0($html1_11(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord16 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord16.origParent?$insertBefore(attachRecord16.origParent, attachRecord16.element, attachRecord16.origSibling):orphan(attachRecord16.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'SAISIR LES NOTES', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 3) , $resizeRows(f_Grid4, 2) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label_0 , f_Label5.element['className'] = 'step' , $setAutoHorizontalAlignment(f_Label5, ALIGN_LEFT) , $setTextOrHtml(f_Label5.directionalTextHelper, '1', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 0, 1, (f_Label6 = new Label_0 , f_Label6.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label6.directionalTextHelper, 'Choisir le nom du professeur :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 0, 2, (lstProfs = new ListBox_0 , lstProfs.element.style['width'] = '300px' , $addDomHandler(lstProfs, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstProfs = lstProfs , lstProfs)) , $setWidget_1(f_Grid4, 1, 0, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'step' , $setTextOrHtml(f_Label7.directionalTextHelper, '2', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid4, 1, 1, (f_Label8 = new Label_0 , f_Label8.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label8.directionalTextHelper, 'Choisir la classe & mati\xE8re \xE0 saisir les notes :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid4, 1, 2, (lstAssignments = new ListBox_0 , lstAssignments.element.style['width'] = '300px' , $addDomHandler(lstAssignments, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstAssignments = lstAssignments , lstAssignments)) , f_Grid4.element.style['width'] = '80%' , f_Grid4)) , $add_11(f_VerticalPanel2, (f_HorizontalPanel9 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel9, (f_VerticalPanel10 = new VerticalPanel_0 , $add_11(f_VerticalPanel10, (f_HorizontalPanel11 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel11, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'step' , $setTextOrHtml(f_Label12.directionalTextHelper, '3', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $add_9(f_HorizontalPanel11, (f_Label13 = new Label_0 , f_Label13.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label13.directionalTextHelper, 'Choisir un \xE9l\xE8ve \xE0 saisir les notes :', false) , $updateHorizontalAlignment(f_Label13) , f_Label13.element.style['height'] = '' , f_Label13.element.style['width'] = '' , f_Label13)) , f_HorizontalPanel11.element.style['width'] = '100%' , f_HorizontalPanel11)) , $add_11(f_VerticalPanel10, (tblBulletinSubjects = this$static.owner.tblBulletinSubjects , tblBulletinSubjects.element.style['height'] = '460px' , tblBulletinSubjects.element.style['width'] = '100%' , tblBulletinSubjects)) , f_VerticalPanel10.element['className'] = 'subSection' , f_VerticalPanel10.element.style['width'] = '100%' , f_VerticalPanel10.table['cellSpacing'] = 2 , f_VerticalPanel10)) , $add_9(f_HorizontalPanel9, (f_VerticalPanel14 = new VerticalPanel_0 , $add_11(f_VerticalPanel14, (f_HorizontalPanel15 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel15, (f_Label16 = new Label_0 , f_Label16.element['className'] = 'step' , $setTextOrHtml(f_Label16.directionalTextHelper, '4', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $add_9(f_HorizontalPanel15, (f_Label17 = new Label_0 , f_Label17.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label17.directionalTextHelper, 'Chosir une branche \xE0 saisir les notes :', false) , $updateHorizontalAlignment(f_Label17) , f_Label17.element.style['height'] = '' , f_Label17.element.style['width'] = '' , f_Label17)) , f_HorizontalPanel15.element.style['width'] = '100%' , f_HorizontalPanel15)) , $add_11(f_VerticalPanel14, (tblBranches = this$static.owner.tblBranches , tblBranches.element.style['height'] = '250px' , tblBranches.element.style['width'] = '100%' , tblBranches)) , $add_11(f_VerticalPanel14, (f_Label18 = new Label_0 , f_Label18.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label18.directionalTextHelper, "Moyenne annuelle / semestrielle de l'\xE9l\xE8ve choisit", false) , $updateHorizontalAlignment(f_Label18) , f_Label18)) , $add_11(f_VerticalPanel14, (tblAverageGrade = this$static.owner.tblAverageGrade , tblAverageGrade.element.style['height'] = '150px' , tblAverageGrade.element.style['width'] = '100%' , tblAverageGrade)) , f_VerticalPanel14.element['className'] = 'subSection' , f_VerticalPanel14.element.style['width'] = '100%' , f_VerticalPanel14.table['cellSpacing'] = 2 , f_VerticalPanel14)) , $add_9(f_HorizontalPanel9, (f_VerticalPanel19 = new VerticalPanel_0 , $add_11(f_VerticalPanel19, (pnlNoteInput = new VerticalPanel_0 , $add_11(pnlNoteInput, (f_HorizontalPanel20 = new HorizontalPanel_0 , $setVerticalAlignment(f_HorizontalPanel20, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_9(f_HorizontalPanel20, (f_Label21 = new Label_0 , f_Label21.element['className'] = 'step' , $setTextOrHtml(f_Label21.directionalTextHelper, '5', false) , $updateHorizontalAlignment(f_Label21) , f_Label21)) , $add_9(f_HorizontalPanel20, (f_Label22 = new Label_0 , f_Label22.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label22.directionalTextHelper, 'Saisir les notes et les remarques pour :', false) , $updateHorizontalAlignment(f_Label22) , f_Label22)) , f_HorizontalPanel20.element.style['width'] = '100%' , f_HorizontalPanel20)) , $add_11(pnlNoteInput, (lblStudentName = new Label_0 , lblStudentName.element['className'] = 'header' , $setTextOrHtml(lblStudentName.directionalTextHelper, '-', false) , $updateHorizontalAlignment(lblStudentName) , this$static.owner.lblStudentName = lblStudentName , lblStudentName)) , $add_11(pnlNoteInput, (f_Label23 = new Label_0 , f_Label23.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label23.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label23) , f_Label23)) , $add_11(pnlNoteInput, (pnlT1 = new VerticalPanel_0 , $add_11(pnlT1, (f_HorizontalPanel24 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel24, (f_Label25 = new Label_0 , $setTextOrHtml(f_Label25.directionalTextHelper, 'Trimestre 1 :', false) , $updateHorizontalAlignment(f_Label25) , f_Label25.element.style['width'] = '' , f_Label25)) , $add_9(f_HorizontalPanel24, (txt_t_1_1 = new DoubleBox_0 , txt_t_1_1.element['className'] = 'markInputText' , txt_t_1_1.element.style['width'] = '25px' , this$static.owner.txt_t_1_1 = txt_t_1_1 , txt_t_1_1)) , $add_9(f_HorizontalPanel24, (txt_t_1_2 = new DoubleBox_0 , txt_t_1_2.element.style['width'] = '25px' , this$static.owner.txt_t_1_2 = txt_t_1_2 , txt_t_1_2)) , $add_9(f_HorizontalPanel24, (txt_t_1_3 = new DoubleBox_0 , txt_t_1_3.element.style['width'] = '25px' , this$static.owner.txt_t_1_3 = txt_t_1_3 , txt_t_1_3)) , $add_9(f_HorizontalPanel24, (txt_t_1_4 = new DoubleBox_0 , txt_t_1_4.element.style['width'] = '25px' , this$static.owner.txt_t_1_4 = txt_t_1_4 , txt_t_1_4)) , $add_9(f_HorizontalPanel24, (txt_t_1_5 = new DoubleBox_0 , txt_t_1_5.element.style['width'] = '25px' , this$static.owner.txt_t_1_5 = txt_t_1_5 , txt_t_1_5)) , $add_9(f_HorizontalPanel24, (txtT1 = new Label_0 , txtT1.element['className'] = 'averageGrade' , $setTextOrHtml(txtT1.directionalTextHelper, '-', false) , $updateHorizontalAlignment(txtT1) , txtT1.element.style['width'] = '25px' , this$static.owner.txtT1 = txtT1 , txtT1)) , f_HorizontalPanel24.element.style['width'] = '400px' , f_HorizontalPanel24)) , $add_11(pnlT1, (txtRemarque1 = new TextArea_1 , txtRemarque1.element.style['height'] = '40px' , txtRemarque1.element.cols = 50 , txtRemarque1.element.style['width'] = '95%' , this$static.owner.txtRemarque1 = txtRemarque1 , txtRemarque1)) , pnlT1.element.style['width'] = '100%' , pnlT1.table['cellSpacing'] = 5 , this$static.owner.pnlT1 = pnlT1 , pnlT1)) , $add_11(pnlNoteInput, (f_Label26 = new Label_0 , f_Label26.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label26.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label26) , f_Label26)) , $add_11(pnlNoteInput, (pnlT2 = new VerticalPanel_0 , $add_11(pnlT2, (f_HorizontalPanel27 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel27, (f_Label28 = new Label_0 , $setTextOrHtml(f_Label28.directionalTextHelper, 'Trimestre 2 :', false) , $updateHorizontalAlignment(f_Label28) , f_Label28.element.style['width'] = '' , f_Label28)) , $add_9(f_HorizontalPanel27, (txt_t_2_1 = new DoubleBox_0 , txt_t_2_1.element['className'] = 'markInputText' , txt_t_2_1.element.style['width'] = '25px' , this$static.owner.txt_t_2_1 = txt_t_2_1 , txt_t_2_1)) , $add_9(f_HorizontalPanel27, (txt_t_2_2 = new DoubleBox_0 , txt_t_2_2.element.style['width'] = '25px' , this$static.owner.txt_t_2_2 = txt_t_2_2 , txt_t_2_2)) , $add_9(f_HorizontalPanel27, (txt_t_2_3 = new DoubleBox_0 , txt_t_2_3.element.style['width'] = '25px' , this$static.owner.txt_t_2_3 = txt_t_2_3 , txt_t_2_3)) , $add_9(f_HorizontalPanel27, (txt_t_2_4 = new DoubleBox_0 , txt_t_2_4.element.style['width'] = '25px' , this$static.owner.txt_t_2_4 = txt_t_2_4 , txt_t_2_4)) , $add_9(f_HorizontalPanel27, (txt_t_2_5 = new DoubleBox_0 , txt_t_2_5.element.style['width'] = '25px' , this$static.owner.txt_t_2_5 = txt_t_2_5 , txt_t_2_5)) , $add_9(f_HorizontalPanel27, (txtT2 = new Label_0 , txtT2.element['className'] = 'averageGrade' , $setTextOrHtml(txtT2.directionalTextHelper, '-', false) , $updateHorizontalAlignment(txtT2) , txtT2.element.style['width'] = '25px' , this$static.owner.txtT2 = txtT2 , txtT2)) , f_HorizontalPanel27.element.style['width'] = '400px' , f_HorizontalPanel27)) , $add_11(pnlT2, (txtRemarque2 = new TextArea_1 , txtRemarque2.element.style['height'] = '40px' , txtRemarque2.element.cols = 50 , txtRemarque2.element.style['width'] = '95%' , this$static.owner.txtRemarque2 = txtRemarque2 , txtRemarque2)) , pnlT2.element.style['width'] = '100%' , pnlT2.table['cellSpacing'] = 5 , this$static.owner.pnlT2 = pnlT2 , pnlT2)) , $add_11(pnlNoteInput, (f_Label29 = new Label_0 , f_Label29.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label29.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label29) , f_Label29)) , $add_11(pnlNoteInput, (pnlT3 = new VerticalPanel_0 , $add_11(pnlT3, (f_HorizontalPanel30 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel30, (f_Label31 = new Label_0 , $setTextOrHtml(f_Label31.directionalTextHelper, 'Trimestre 3 :', false) , $updateHorizontalAlignment(f_Label31) , f_Label31)) , $add_9(f_HorizontalPanel30, (txt_t_3_1 = new DoubleBox_0 , txt_t_3_1.element.style['width'] = '25px' , this$static.owner.txt_t_3_1 = txt_t_3_1 , txt_t_3_1)) , $add_9(f_HorizontalPanel30, (txt_t_3_2 = new DoubleBox_0 , txt_t_3_2.element.style['width'] = '25px' , this$static.owner.txt_t_3_2 = txt_t_3_2 , txt_t_3_2)) , $add_9(f_HorizontalPanel30, (txt_t_3_3 = new DoubleBox_0 , txt_t_3_3.element.style['width'] = '25px' , this$static.owner.txt_t_3_3 = txt_t_3_3 , txt_t_3_3)) , $add_9(f_HorizontalPanel30, (txt_t_3_4 = new DoubleBox_0 , txt_t_3_4.element.style['width'] = '25px' , this$static.owner.txt_t_3_4 = txt_t_3_4 , txt_t_3_4)) , $add_9(f_HorizontalPanel30, (txt_t_3_5 = new DoubleBox_0 , txt_t_3_5.element.style['width'] = '25px' , this$static.owner.txt_t_3_5 = txt_t_3_5 , txt_t_3_5)) , $add_9(f_HorizontalPanel30, (txtT3 = new Label_0 , txtT3.element['className'] = 'averageGrade' , $setTextOrHtml(txtT3.directionalTextHelper, '-', false) , $updateHorizontalAlignment(txtT3) , txtT3.element.style['width'] = '25px' , this$static.owner.txtT3 = txtT3 , txtT3)) , f_HorizontalPanel30.element.style['width'] = '400px' , f_HorizontalPanel30)) , $add_11(pnlT3, (txtRemarque3 = new TextArea_1 , txtRemarque3.element.style['height'] = '40px' , txtRemarque3.element.cols = 50 , txtRemarque3.element.style['width'] = '95%' , this$static.owner.txtRemarque3 = txtRemarque3 , txtRemarque3)) , pnlT3.element.style['width'] = '100%' , pnlT3.table['cellSpacing'] = 5 , this$static.owner.pnlT3 = pnlT3 , pnlT3)) , $add_11(pnlNoteInput, (cmdSave = new Button_0 , $setInnerText(cmdSave.element, 'Enregistrer') , cmdSave.element.style['width'] = '150px' , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , this$static.owner.cmdSave = cmdSave , cmdSave)) , $add_11(pnlNoteInput, (f_Label32 = new Label_0 , f_Label32.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label32.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label32) , f_Label32)) , pnlNoteInput.element['className'] = 'subSection' , pnlNoteInput.element.style['width'] = '100%' , pnlNoteInput)) , f_VerticalPanel19.element.style['width'] = '100%' , f_VerticalPanel19.table['cellSpacing'] = 2 , f_VerticalPanel19)) , f_HorizontalPanel9.element.style['width'] = '100%' , f_HorizontalPanel9.table['cellSpacing'] = 5 , f_HorizontalPanel9)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmMarkInputView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmMarkInputView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new FrmMarkInputView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new FrmMarkInputView_BinderImpl$Widgets$3_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1345, 1, {}, FrmMarkInputView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmMarkInputView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1346, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmMarkInputView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_27(event_0){
  $onLstProfsChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function FrmMarkInputView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1347, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmMarkInputView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_28(event_0){
  $onLstAssignmentsChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function FrmMarkInputView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1348, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmMarkInputView_BinderImpl$Widgets$3_0);
_.onClick = function onClick_15(event_0){
  $onCmdSaveClick_3(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_11(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$view$FrmMarkInputView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmMarkInputView$_annotation$$none$$) {
    result = new FrmMarkInputView_0(new FrmMarkInputView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmMarkInputView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmMarkInputView$_annotation$$none$$;
}

defineSeed(1489, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinBrancheProxy]));
_.setT1 = function setT1(t1){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT1(t1);
}
;
_.setT1_1 = function setT1_1(t1_1){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT1_1(t1_1);
}
;
_.setT1_2 = function setT1_2(t1_2){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT1_2(t1_2);
}
;
_.setT1_3 = function setT1_3(t1_3){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT1_3(t1_3);
}
;
_.setT1_4 = function setT1_4(t1_4){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT1_4(t1_4);
}
;
_.setT1_5 = function setT1_5(t1_5){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT1_5(t1_5);
}
;
_.setT2 = function setT2(t2){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT2(t2);
}
;
_.setT2_1 = function setT2_1(t2_1){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT2_1(t2_1);
}
;
_.setT2_2 = function setT2_2(t2_2){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT2_2(t2_2);
}
;
_.setT2_3 = function setT2_3(t2_3){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT2_3(t2_3);
}
;
_.setT2_4 = function setT2_4(t2_4){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT2_4(t2_4);
}
;
_.setT2_5 = function setT2_5(t2_5){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT2_5(t2_5);
}
;
_.setT3 = function setT3(t3){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT3(t3);
}
;
_.setT3_1 = function setT3_1(t3_1){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT3_1(t3_1);
}
;
_.setT3_2 = function setT3_2(t3_2){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT3_2(t3_2);
}
;
_.setT3_3 = function setT3_3(t3_3){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT3_3(t3_3);
}
;
_.setT3_4 = function setT3_4(t3_4){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT3_4(t3_4);
}
;
_.setT3_5 = function setT3_5(t3_5){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setT3_5(t3_5);
}
;
defineSeed(1490, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinBrancheProxy]));
_.setT1 = function setT1_0(t1){
  $setProperty(this.this$0, 't1', t1);
}
;
_.setT1_1 = function setT1_1_0(t1_1){
  $setProperty(this.this$0, 't1_1', t1_1);
}
;
_.setT1_2 = function setT1_2_0(t1_2){
  $setProperty(this.this$0, 't1_2', t1_2);
}
;
_.setT1_3 = function setT1_3_0(t1_3){
  $setProperty(this.this$0, 't1_3', t1_3);
}
;
_.setT1_4 = function setT1_4_0(t1_4){
  $setProperty(this.this$0, 't1_4', t1_4);
}
;
_.setT1_5 = function setT1_5_0(t1_5){
  $setProperty(this.this$0, 't1_5', t1_5);
}
;
_.setT2 = function setT2_0(t2){
  $setProperty(this.this$0, 't2', t2);
}
;
_.setT2_1 = function setT2_1_0(t2_1){
  $setProperty(this.this$0, 't2_1', t2_1);
}
;
_.setT2_2 = function setT2_2_0(t2_2){
  $setProperty(this.this$0, 't2_2', t2_2);
}
;
_.setT2_3 = function setT2_3_0(t2_3){
  $setProperty(this.this$0, 't2_3', t2_3);
}
;
_.setT2_4 = function setT2_4_0(t2_4){
  $setProperty(this.this$0, 't2_4', t2_4);
}
;
_.setT2_5 = function setT2_5_0(t2_5){
  $setProperty(this.this$0, 't2_5', t2_5);
}
;
_.setT3 = function setT3_0(t3){
  $setProperty(this.this$0, 't3', t3);
}
;
_.setT3_1 = function setT3_1_0(t3_1){
  $setProperty(this.this$0, 't3_1', t3_1);
}
;
_.setT3_2 = function setT3_2_0(t3_2){
  $setProperty(this.this$0, 't3_2', t3_2);
}
;
_.setT3_3 = function setT3_3_0(t3_3){
  $setProperty(this.this$0, 't3_3', t3_3);
}
;
_.setT3_4 = function setT3_4_0(t3_4){
  $setProperty(this.this$0, 't3_4', t3_4);
}
;
_.setT3_5 = function setT3_5_0(t3_5){
  $setProperty(this.this$0, 't3_5', t3_5);
}
;
defineSeed(1495, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinSubjectProxy]));
_.setRemarqueT1 = function setRemarqueT1(remarqueT1){
  dynamicCast($getWrapped(this.this$0), Q$BulletinSubjectProxy).setRemarqueT1(remarqueT1);
}
;
_.setRemarqueT2 = function setRemarqueT2(remarqueT2){
  dynamicCast($getWrapped(this.this$0), Q$BulletinSubjectProxy).setRemarqueT2(remarqueT2);
}
;
_.setRemarqueT3 = function setRemarqueT3(remarqueT3){
  dynamicCast($getWrapped(this.this$0), Q$BulletinSubjectProxy).setRemarqueT3(remarqueT3);
}
;
defineSeed(1496, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinSubjectProxy]));
_.setRemarqueT1 = function setRemarqueT1_0(remarqueT1){
  $setProperty(this.this$0, 'remarqueT1', remarqueT1);
}
;
_.setRemarqueT2 = function setRemarqueT2_0(remarqueT2){
  $setProperty(this.this$0, 'remarqueT2', remarqueT2);
}
;
_.setRemarqueT3 = function setRemarqueT3_0(remarqueT3){
  $setProperty(this.this$0, 'remarqueT3', remarqueT3);
}
;
function BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$6X_0(this$0, val$assignmentId){
  this.val$assignmentId = val$assignmentId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1578, 639, makeCastMap([Q$AbstractRequest]), BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_24(){
  return new RequestData_0('2LBnZoR4LZo2SitgrGNVsaDZFp8=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$assignmentId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_BulletinSubjectProxy_2_classLit);
}
;
_.val$assignmentId = null;
var Lcom_lemania_sis_client_presenter_FrmMarkInputPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmMarkInputPresenter', 944), Lcom_lemania_sis_client_presenter_FrmMarkInputPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmMarkInputPresenter$1', 945), Lcom_lemania_sis_client_presenter_FrmMarkInputPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmMarkInputPresenter$2', 946), Lcom_lemania_sis_client_presenter_FrmMarkInputPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmMarkInputPresenter$3', 947), Lcom_lemania_sis_client_presenter_FrmMarkInputPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmMarkInputPresenter$4', 948), Lcom_lemania_sis_client_presenter_FrmMarkInputPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmMarkInputPresenter$5', 949), Lcom_lemania_sis_client_presenter_FrmMarkInputPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmMarkInputPresenter$6', 950), Lcom_lemania_sis_client_presenter_FrmMarkInputPresenter$7_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmMarkInputPresenter$7', 951), Lcom_lemania_sis_client_presenter_FrmMarkInputPresenter$8_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmMarkInputPresenter$8', 952), Lcom_lemania_sis_client_event_CheckDeadlineEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'CheckDeadlineEvent', 752), Lcom_lemania_sis_client_presenter_FrmMarkInputPresenterMyProxyImpl$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmMarkInputPresenterMyProxyImpl$2', 956), Lcom_lemania_sis_client_presenter_FrmMarkInputPresenterMyProxyImpl$2$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmMarkInputPresenterMyProxyImpl$2$1', 957), Lcom_lemania_sis_client_view_FrmMarkInputView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView', 1328), Lcom_lemania_sis_client_view_FrmMarkInputView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView$1', 1329), Lcom_lemania_sis_client_view_FrmMarkInputView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView$2', 1336), Lcom_lemania_sis_client_view_FrmMarkInputView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView$3', 1337), Lcom_lemania_sis_client_view_FrmMarkInputView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView$4', 1338), Lcom_lemania_sis_client_view_FrmMarkInputView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView$5', 1339), Lcom_lemania_sis_client_view_FrmMarkInputView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView$6', 1340), Lcom_lemania_sis_client_view_FrmMarkInputView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView$7', 1341), Lcom_lemania_sis_client_view_FrmMarkInputView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView$8', 1342), Lcom_lemania_sis_client_view_FrmMarkInputView$9_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView$9', 1343), Lcom_lemania_sis_client_view_FrmMarkInputView$10_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView$10', 1330), Lcom_lemania_sis_client_view_FrmMarkInputView$11_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView$11', 1331), Lcom_lemania_sis_client_view_FrmMarkInputView$12_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView$12', 1332), Lcom_lemania_sis_client_view_FrmMarkInputView$13_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView$13', 1333), Lcom_lemania_sis_client_view_FrmMarkInputView$14_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView$14', 1334), Lcom_lemania_sis_client_view_FrmMarkInputView$15_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView$15', 1335), Lcom_lemania_sis_client_view_FrmMarkInputView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView_BinderImpl', 1344), Lcom_lemania_sis_client_view_FrmMarkInputView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView_BinderImpl$Widgets', 1345), Lcom_lemania_sis_client_view_FrmMarkInputView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView_BinderImpl$Widgets$1', 1346), Lcom_lemania_sis_client_view_FrmMarkInputView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView_BinderImpl$Widgets$2', 1347), Lcom_lemania_sis_client_view_FrmMarkInputView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmMarkInputView_BinderImpl$Widgets$3', 1348), Lcom_lemania_sis_shared_service_BulletinSubjectRequestFactory_1BulletinSubjectRequestContextImpl$6X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$6X', 1578);
$entry(onLoad)(17);
