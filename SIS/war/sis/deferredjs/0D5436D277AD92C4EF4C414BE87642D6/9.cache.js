function $addBranche(this$static, bulletinSubjectId, brancheId, coef){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new BulletinBrancheRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl_0(rf);
  $fire((x = new BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$10X_0(rc, bulletinSubjectId, brancheId, coef) , $addInvocation(rc.state.dialect, x) , x), new FrmBulletinManagementPresenter$14_0(this$static));
}

function $addSubject(this$static, bulletinId, subjectId, profId, coef){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new BulletinSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl_0(rf);
  $fire((x = new BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$10X_0(rc, bulletinId, subjectId, profId, coef) , $addInvocation(rc.state.dialect, x) , x), new FrmBulletinManagementPresenter$13_0(this$static));
}

function $loadProfessorList(this$static, subjectId, classId){
  var rc, rf;
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  $fire($listAllProfessorBySubject(rc, subjectId, classId), new FrmBulletinManagementPresenter$16_0(this$static));
}

function $loadSubjectListByProfile(this$static, bulletin){
  var rc, rf, x;
  rf = new SubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SubjectRequestFactory_SubjectRequestContextImpl_0(rf);
  $fire((x = new SubjectRequestFactory_SubjectRequestContextImpl$4X_0(rc, bulletin) , $addInvocation(rc.state.dialect, x) , x), new FrmBulletinManagementPresenter$2_0(this$static));
}

function $onBulletinSelected(this$static, bulletin){
  var rc, rf;
  rf = new BulletinSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl_0(rf);
  $fire($listAll_4(rc, '' + toString_6(bulletin.getId_0().value_0)), new FrmBulletinManagementPresenter$7_0(this$static, bulletin));
}

function $onClassChange(this$static, classId){
  var rc, rf;
  if (!classId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Classe choisie');
    return;
  }
  rf = new BulletinRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinRequestFactory_BulletinRequestContextImpl_0(rf);
  $fire($listAllActiveByClass(rc, classId), new FrmBulletinManagementPresenter$6_0(this$static));
}

function $onEcoleSelected_0(this$static, ecoleId){
  var rc, rf;
  if (!ecoleId.length) {
    return;
  }
  rf = new CoursRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  $fire($listAllActive_2(rc, ecoleId), new FrmBulletinManagementPresenter$4_0(this$static));
}

function $onProgrammeSelected_0(this$static, coursId){
  var rc, rf;
  rf = new ClasseRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAllActive_1(rc, coursId), new FrmBulletinManagementPresenter$5_0(this$static));
}

function $onSubjectSelected(this$static, subject){
  var rc, rf;
  rf = new BulletinBrancheRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl_0(rf);
  $fire($listAll_3(rc, '' + toString_6(subject.getId_0().value_0)), new FrmBulletinManagementPresenter$9_0(this$static));
}

function $removeBranche(this$static, branche){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new BulletinBrancheRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl_0(rf);
  $fire((x = new BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$7X_0(rc, branche) , $addInvocation(rc.state.dialect, x) , x), new FrmBulletinManagementPresenter$11_0(this$static));
}

function $removeSubject(this$static, subject){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new BulletinSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl_0(rf);
  $fire((x = new BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$7X_0(rc, subject) , $addInvocation(rc.state.dialect, x) , x), new FrmBulletinManagementPresenter$8_0(this$static));
}

function $updateBrancheCoef(this$static, branche, coef){
  var rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!$matches(coef, '-?\\d+(\\.\\d+)?')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient');
    return;
  }
  rf = new BulletinBrancheRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl_0(rf);
  branche = dynamicCast($editProxy(rc, branche), Q$BulletinBrancheProxy);
  branche.setBrancheCoef(($clinit_Double() , new Double_0(__parseAndValidateDouble(coef))));
  $fire($saveAndReturn(rc, branche), new FrmBulletinManagementPresenter$10_0(this$static));
}

function $updateSubjectCoef(this$static, subject, coef, lastSubjectIndex){
  var rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new BulletinSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl_0(rf);
  subject = dynamicCast($editProxy(rc, subject), Q$BulletinSubjectProxy);
  subject.setSubjectCoef(($clinit_Double() , new Double_0(__parseAndValidateDouble(coef))));
  $fire($saveAndReturn_0(rc, subject), new FrmBulletinManagementPresenter$12_0(this$static, lastSubjectIndex));
}

function FrmBulletinManagementPresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
}

defineSeed(1253, 796, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler, Q$FrmBulletinManagementPresenter, Q$FrmBulletinManagementUiHandler]), FrmBulletinManagementPresenter_0);
_.onBind = function onBind_20(){
  dynamicCast(this.view, Q$FrmBulletinManagementPresenter$MyView).setUiHandlers(this);
  $initializeTables_1(dynamicCast(this.view, Q$FrmBulletinManagementPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_23(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_19(){
  var rf, rc, rf_0, rc_0;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('bulletinmanagement'), null);
  $resetForm_2(dynamicCast(this.view, Q$FrmBulletinManagementPresenter$MyView));
  rf = new EcoleRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_6(rc), new FrmBulletinManagementPresenter$3_0(this));
  rf_0 = new BrancheRequestFactoryImpl_0;
  $initialize_0(rf_0, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc_0 = new BrancheRequestFactory_BrancheRequestContextImpl_0(rf_0);
  $fire($listAll_2(rc_0), new FrmBulletinManagementPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_11(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_60(this$static, response){
  $setBrancheListData(dynamicCast(this$static.this$0.view, Q$FrmBulletinManagementPresenter$MyView), response);
}

function FrmBulletinManagementPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1254, 727, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$1_0);
_.onFailure_0 = function onFailure_75(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_75(response){
  $onSuccess_60(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_61(this$static, response){
  $showUpdatedBranche(dynamicCast(this$static.this$0.view, Q$FrmBulletinManagementPresenter$MyView), response);
}

function FrmBulletinManagementPresenter$10_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1255, 727, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$10_0);
_.onFailure_0 = function onFailure_76(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_76(response){
  $onSuccess_61(this, dynamicCast(response, Q$BulletinBrancheProxy));
}
;
_.this$0 = null;
function $onSuccess_62(this$static){
  $removeDeletedBrancheFromTable(dynamicCast(this$static.this$0.view, Q$FrmBulletinManagementPresenter$MyView));
}

function FrmBulletinManagementPresenter$11_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1256, 727, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$11_0);
_.onFailure_0 = function onFailure_77(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_77(response){
  $onSuccess_62(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $onSuccess_63(this$static, response){
  $showUpdatedSubject(dynamicCast(this$static.this$0.view, Q$FrmBulletinManagementPresenter$MyView), response, this$static.val$lastSubjectIndex);
}

function FrmBulletinManagementPresenter$12_0(this$0, val$lastSubjectIndex){
  this.this$0 = this$0;
  this.val$lastSubjectIndex = val$lastSubjectIndex;
}

defineSeed(1257, 727, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$12_0);
_.onFailure_0 = function onFailure_78(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_78(response){
  $onSuccess_63(this, dynamicCast(response, Q$BulletinSubjectProxy));
}
;
_.this$0 = null;
_.val$lastSubjectIndex = null;
function $onSuccess_64(this$static, response){
  $showAddedSubject(dynamicCast(this$static.this$0.view, Q$FrmBulletinManagementPresenter$MyView), response);
}

function FrmBulletinManagementPresenter$13_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1258, 727, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$13_0);
_.onFailure_0 = function onFailure_79(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_79(response){
  $onSuccess_64(this, dynamicCast(response, Q$BulletinSubjectProxy));
}
;
_.this$0 = null;
function $onSuccess_65(this$static, response){
  $showAddedBranche(dynamicCast(this$static.this$0.view, Q$FrmBulletinManagementPresenter$MyView), response);
}

function FrmBulletinManagementPresenter$14_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1259, 727, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$14_0);
_.onFailure_0 = function onFailure_80(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_80(response){
  $onSuccess_65(this, dynamicCast(response, Q$BulletinBrancheProxy));
}
;
_.this$0 = null;
function $onSuccess_66(this$static, response){
  $setProfessorListData(dynamicCast(this$static.this$0.view, Q$FrmBulletinManagementPresenter$MyView), response);
}

function FrmBulletinManagementPresenter$16_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1261, 727, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$16_0);
_.onFailure_0 = function onFailure_82(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_82(response){
  $onSuccess_66(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_67(this$static, response){
  $setSubjectListData_0(dynamicCast(this$static.this$0.view, Q$FrmBulletinManagementPresenter$MyView), response);
}

function FrmBulletinManagementPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1262, 727, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$2_0);
_.onFailure_0 = function onFailure_83(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_83(response){
  $onSuccess_67(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_68(this$static, response){
  $setEcoleList_0(dynamicCast(this$static.this$0.view, Q$FrmBulletinManagementPresenter$MyView), response);
}

function FrmBulletinManagementPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1263, 727, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$3_0);
_.onFailure_0 = function onFailure_84(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_84(response){
  $onSuccess_68(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_69(this$static, response){
  $setCoursList_0(dynamicCast(this$static.this$0.view, Q$FrmBulletinManagementPresenter$MyView), response);
}

function FrmBulletinManagementPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1264, 727, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$4_0);
_.onFailure_0 = function onFailure_85(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_85(response){
  $onSuccess_69(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_70(this$static, response){
  $setClasseList_0(dynamicCast(this$static.this$0.view, Q$FrmBulletinManagementPresenter$MyView), response);
}

function FrmBulletinManagementPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1265, 727, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$5_0);
_.onFailure_0 = function onFailure_86(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_86(response){
  $onSuccess_70(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_71(this$static, response){
  $setStudentTableData_0(dynamicCast(this$static.this$0.view, Q$FrmBulletinManagementPresenter$MyView), response);
}

function FrmBulletinManagementPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1266, 727, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$6_0);
_.onFailure_0 = function onFailure_87(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_87(response){
  $onSuccess_71(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_72(this$static, response){
  $setBulletinSubjectTableData(dynamicCast(this$static.this$0.view, Q$FrmBulletinManagementPresenter$MyView), response);
  $loadSubjectListByProfile(this$static.this$0, this$static.val$bulletin);
}

function FrmBulletinManagementPresenter$7_0(this$0, val$bulletin){
  this.this$0 = this$0;
  this.val$bulletin = val$bulletin;
}

defineSeed(1267, 727, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$7_0);
_.onFailure_0 = function onFailure_88(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_88(response){
  $onSuccess_72(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
_.val$bulletin = null;
function $onSuccess_73(this$static, response){
  response.value_0?$removeDeletedSubjectFromTable(dynamicCast(this$static.this$0.view, Q$FrmBulletinManagementPresenter$MyView)):alert_0(($clinit_NotificationTypes() , 'Merci de supprimer toutes les branches de cette mati\xE8re avant la supprimer.'));
}

function FrmBulletinManagementPresenter$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1268, 727, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$8_0);
_.onFailure_0 = function onFailure_89(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_89(response){
  $onSuccess_73(this, dynamicCast(response, Q$Boolean));
}
;
_.this$0 = null;
function $onSuccess_74(this$static, response){
  $setBulletinBrancheTableData(dynamicCast(this$static.this$0.view, Q$FrmBulletinManagementPresenter$MyView), response);
}

function FrmBulletinManagementPresenter$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1269, 727, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$9_0);
_.onFailure_0 = function onFailure_90(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_90(response){
  $onSuccess_74(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$FrmBulletinManagementPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBulletinManagementPresenter$_annotation$$none$$) {
    result = new FrmBulletinManagementPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmBulletinManagementView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmBulletinManagementPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBulletinManagementPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBulletinManagementPresenter$_annotation$$none$$;
}

defineSeed(1508, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_201(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmBulletinManagementPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $clearBulletinUi(this$static){
  !!this$static.selectedBulletin && $setSelected_0(this$static.tblBulletins.presenter.selectionModel, this$static.selectedBulletin, false);
  valueOf_1(-1);
  $clear_3(this$static.bulletinDataProvider.listWrapper);
}

function $clearSubjectUi(this$static){
  if (this$static.selectedSubject) {
    $setSelected_0(this$static.tblSubjects.presenter.selectionModel, this$static.selectedSubject, false);
    this$static.selectedSubjectIndex = valueOf_1(-1);
  }
  $clear_3(this$static.subjectDataProvider.listWrapper);
}

function $initializeTables_1(this$static){
  var colFirstName, selectionModel, colSubjectName, colSubjectCoef, colProfName, colTotalBrancheCoef, colDelete, selectionModel_0, colBrancheName, colCoef, colDelete_0;
  colFirstName = new FrmBulletinManagementView$14_0;
  $setColumnWidth_0(this$static.tblBulletins, colFirstName, 60 + ($clinit_Style$Unit() , '%'));
  $addColumn(this$static.tblBulletins, colFirstName, 'Eleve');
  selectionModel = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblBulletins, selectionModel);
  $addSelectionChangeHandler(selectionModel, new FrmBulletinManagementView$15_0(this$static, selectionModel));
  $addDataDisplay(this$static.bulletinDataProvider, this$static.tblBulletins);
  colSubjectName = new FrmBulletinManagementView$6_0;
  $setColumnWidth_0(this$static.tblSubjects, colSubjectName, '30%');
  $addColumn(this$static.tblSubjects, colSubjectName, 'Mati\xE8re');
  colSubjectCoef = new FrmBulletinManagementView$7_0(new EditTextCell_0);
  $setFieldUpdater(colSubjectCoef, new FrmBulletinManagementView$8_0(this$static));
  $setColumnWidth_0(this$static.tblSubjects, colSubjectCoef, '10%');
  $addColumn(this$static.tblSubjects, colSubjectCoef, 'Coef');
  colProfName = new FrmBulletinManagementView$9_0;
  $addColumn(this$static.tblSubjects, colProfName, 'Prof');
  colTotalBrancheCoef = new FrmBulletinManagementView$10_0;
  $addColumn(this$static.tblSubjects, colTotalBrancheCoef, 'Br.Coef');
  $setColumnWidth_0(this$static.tblSubjects, colTotalBrancheCoef, '10%');
  colDelete = new FrmBulletinManagementView$11_0(new ButtonCell_0);
  $setFieldUpdater(colDelete, new FrmBulletinManagementView$12_0(this$static));
  $setColumnWidth_0(this$static.tblSubjects, colDelete, '10%');
  $addColumn(this$static.tblSubjects, colDelete, '');
  selectionModel_0 = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblSubjects, selectionModel_0);
  $addSelectionChangeHandler(selectionModel_0, new FrmBulletinManagementView$13_0(this$static, selectionModel_0));
  $addDataDisplay(this$static.subjectDataProvider, this$static.tblSubjects);
  colBrancheName = new FrmBulletinManagementView$1_0;
  $setColumnWidth_0(this$static.tblBranches, colBrancheName, '60%');
  $addColumn(this$static.tblBranches, colBrancheName, 'Branche');
  colCoef = new FrmBulletinManagementView$2_0(new EditTextCell_0);
  $setFieldUpdater(colCoef, new FrmBulletinManagementView$3_0(this$static));
  $setColumnWidth_0(this$static.tblBranches, colCoef, '20%');
  $addColumn(this$static.tblBranches, colCoef, 'Coef');
  colDelete_0 = new FrmBulletinManagementView$4_0(new ButtonCell_0);
  $setFieldUpdater(colDelete_0, new FrmBulletinManagementView$5_0(this$static));
  $setColumnWidth_0(this$static.tblBranches, colDelete_0, '20%');
  $addColumn(this$static.tblBranches, colDelete_0, '');
  $addDataDisplay(this$static.brancheDataProvider, this$static.tblBranches);
}

function $onCmdAddBrancheClick(this$static){
  !!this$static.uiHandlers && $addBranche(dynamicCast(this$static.uiHandlers, Q$FrmBulletinManagementUiHandler), '' + toString_6(this$static.selectedSubject.getId_0().value_0), $getValue_2(this$static.lstBranches, this$static.lstBranches.element.selectedIndex), $getPropertyString(this$static.txtBrancheCoef.element, 'value'));
}

function $onCmdAddSubjectClick(this$static){
  !!this$static.uiHandlers && $addSubject(dynamicCast(this$static.uiHandlers, Q$FrmBulletinManagementUiHandler), '' + toString_6(this$static.selectedBulletin.getId_0().value_0), $getValue_2(this$static.lstSubjects, this$static.lstSubjects.element.selectedIndex), $getValue_2(this$static.lstProfessors, this$static.lstProfessors.element.selectedIndex), $getPropertyString(this$static.txtSubjectCoef.element, 'value'));
}

function $onLstClassesChange_3(this$static){
  $setText_0(this$static.lblStudentName, '');
  $clearBulletinUi(this$static);
  $clearSubjectUi(this$static);
  $clear_3(this$static.brancheDataProvider.listWrapper);
  !!this$static.uiHandlers && $onClassChange(dynamicCast(this$static.uiHandlers, Q$FrmBulletinManagementUiHandler), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $onLstEcolesChange_0(this$static){
  if (!$getValue_2(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex).length) {
    $selectClear(this$static.lstProgrammes.element);
    $selectClear(this$static.lstClasses.element);
    return;
  }
  !!this$static.uiHandlers && $onEcoleSelected_0(dynamicCast(this$static.uiHandlers, Q$FrmBulletinManagementUiHandler), $getValue_2(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex));
}

function $onLstProgrammesChange_0(this$static){
  $selectClear(this$static.lstClasses.element);
  $setText_0(this$static.lblStudentName, '');
  $clearSubjectUi(this$static);
  $clear_3(this$static.brancheDataProvider.listWrapper);
  $clearBulletinUi(this$static);
  if (!$getValue_2(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex).length)
    return;
  !!this$static.uiHandlers && $onProgrammeSelected_0(dynamicCast(this$static.uiHandlers, Q$FrmBulletinManagementUiHandler), $getValue_2(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex));
}

function $onLstSubjectsChange(this$static){
  !!this$static.uiHandlers && $loadProfessorList(dynamicCast(this$static.uiHandlers, Q$FrmBulletinManagementUiHandler), $getValue_2(this$static.lstSubjects, this$static.lstSubjects.element.selectedIndex), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $removeDeletedBrancheFromTable(this$static){
  $remove_13(this$static.brancheDataProvider.listWrapper, this$static.selectedBranche);
  $refresh(this$static.brancheDataProvider);
  this$static.selectedBrancheIndex = valueOf_1(-1);
  this$static.selectedBranche = null;
}

function $removeDeletedSubjectFromTable(this$static){
  $remove_13(this$static.subjectDataProvider.listWrapper, this$static.selectedSubject);
  $refresh(this$static.subjectDataProvider);
  this$static.selectedSubjectIndex = valueOf_1(-1);
  this$static.selectedSubject = null;
}

function $resetForm_2(this$static){
  $setSelectedIndex_0(this$static.lstEcoles, 0);
  $selectClear(this$static.lstProgrammes.element);
  $selectClear(this$static.lstClasses.element);
  $setText_0(this$static.lblStudentName, '');
  $clearSubjectUi(this$static);
  $clear_3(this$static.brancheDataProvider.listWrapper);
  $clearBulletinUi(this$static);
}

function $setBrancheListData(this$static, branches){
  var branche, branche$iterator;
  $selectClear(this$static.lstBranches.element);
  $insertItem_0(this$static.lstBranches, '-', '', -1);
  for (branche$iterator = branches.iterator(); branche$iterator.hasNext();) {
    branche = dynamicCast(branche$iterator.next_0(), Q$BrancheProxy);
    $insertItem_0(this$static.lstBranches, branche.getBrancheName(), '' + toString_6(branche.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstBranches, 0);
}

function $setBulletinBrancheTableData(this$static, branches){
  $clear_3(this$static.brancheDataProvider.listWrapper);
  $setList(this$static.brancheDataProvider, branches);
  $flushNow(this$static.brancheDataProvider.listWrapper);
}

function $setBulletinSubjectTableData(this$static, subjects){
  $clear_3(this$static.subjectDataProvider.listWrapper);
  $setList(this$static.subjectDataProvider, subjects);
  $flushNow(this$static.subjectDataProvider.listWrapper);
}

function $setClasseList_0(this$static, classes){
  var cours, cours$iterator;
  $selectClear(this$static.lstClasses.element);
  $insertItem_0(this$static.lstClasses, '-', '', -1);
  for (cours$iterator = classes.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$ClasseProxy);
    $insertItem_0(this$static.lstClasses, cours.getClassName(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setCoursList_0(this$static, programmes){
  var cours, cours$iterator;
  $selectClear(this$static.lstProgrammes.element);
  $insertItem_0(this$static.lstProgrammes, '-', '', -1);
  for (cours$iterator = programmes.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$CoursProxy);
    $insertItem_0(this$static.lstProgrammes, cours.getCoursNom(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setEcoleList_0(this$static, ecoles){
  var ecole, ecole$iterator;
  $selectClear(this$static.lstEcoles.element);
  $insertItem_0(this$static.lstEcoles, '-', '', -1);
  for (ecole$iterator = ecoles.iterator(); ecole$iterator.hasNext();) {
    ecole = dynamicCast(ecole$iterator.next_0(), Q$EcoleProxy);
    $insertItem_0(this$static.lstEcoles, ecole.getSchoolName(), '' + toString_6(ecole.getId_0().value_0), -1);
  }
}

function $setProfessorListData(this$static, profs){
  var prof, prof$iterator;
  $selectClear(this$static.lstProfessors.element);
  $insertItem_0(this$static.lstProfessors, '-', '', -1);
  for (prof$iterator = profs.iterator(); prof$iterator.hasNext();) {
    prof = dynamicCast(prof$iterator.next_0(), Q$ProfessorProxy);
    $insertItem_0(this$static.lstProfessors, prof.getProfName(), '' + toString_6(prof.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstProfessors, 0);
}

function $setStudentTableData_0(this$static, bulletins){
  $clear_3(this$static.bulletinDataProvider.listWrapper);
  $setList(this$static.bulletinDataProvider, bulletins);
  $flushNow(this$static.bulletinDataProvider.listWrapper);
}

function $setSubjectListData_0(this$static, subjects){
  var subject, subject$iterator;
  $selectClear(this$static.lstSubjects.element);
  $insertItem_0(this$static.lstSubjects, '-', '', -1);
  for (subject$iterator = subjects.iterator(); subject$iterator.hasNext();) {
    subject = dynamicCast(subject$iterator.next_0(), Q$SubjectProxy);
    $insertItem_0(this$static.lstSubjects, subject.getSubjectName(), '' + toString_6(subject.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstSubjects, 0);
}

function $showAddedBranche(this$static, branche){
  $add_15(this$static.brancheDataProvider.listWrapper, branche);
  $flushNow(this$static.brancheDataProvider.listWrapper);
}

function $showAddedSubject(this$static, subject){
  $add_15(this$static.subjectDataProvider.listWrapper, subject);
  $flushNow(this$static.subjectDataProvider.listWrapper);
}

function $showUpdatedBranche(this$static, branche){
  $set_1(this$static.brancheDataProvider.listWrapper, this$static.selectedBrancheIndex.value_0, branche);
}

function $showUpdatedSubject(this$static, subject, lastSubjectIndex){
  $set_1(this$static.subjectDataProvider.listWrapper, lastSubjectIndex.value_0, subject);
}

function FrmBulletinManagementView_0(){
  this.bulletinDataProvider = new ListDataProvider_0;
  this.subjectDataProvider = new ListDataProvider_0;
  this.brancheDataProvider = new ListDataProvider_0;
  valueOf_1(-1);
  this.selectedSubjectIndex = valueOf_1(-1);
  this.selectedBrancheIndex = valueOf_1(-1);
  this.tblBulletins = new DataGrid_0;
  this.tblSubjects = new DataGrid_0;
  this.tblBranches = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_15(new FrmBulletinManagementView_BinderImpl$Widgets_0(this));
}

defineSeed(1561, 801, makeCastMap([Q$IsWidget, Q$FrmBulletinManagementPresenter$MyView]), FrmBulletinManagementView_0);
_.asWidget = function asWidget_14(){
  return this.widget;
}
;
_.lblStudentName = null;
_.lstBranches = null;
_.lstClasses = null;
_.lstEcoles = null;
_.lstProfessors = null;
_.lstProgrammes = null;
_.lstSubjects = null;
_.selectedBranche = null;
_.selectedBulletin = null;
_.selectedSubject = null;
_.txtBrancheCoef = null;
_.txtSubjectCoef = null;
_.widget = null;
function FrmBulletinManagementView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1562, 471, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinManagementView$1_0);
_.getValue = function getValue_58(object){
  return dynamicCast(object, Q$BulletinBrancheProxy).getBulletinBrancheName();
}
;
function $getValue_8(object){
  return $clinit_Double() , '' + object.getTotalBrancheCoef().value_0;
}

function FrmBulletinManagementView$10_0(){
  TextColumn_0.call(this);
}

defineSeed(1563, 471, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinManagementView$10_0);
_.getValue = function getValue_59(object){
  return $getValue_8(dynamicCast(object, Q$BulletinSubjectProxy));
}
;
function FrmBulletinManagementView$11_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1564, 426, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinManagementView$11_0);
_.getValue = function getValue_60(bp){
  return dynamicCast(bp, Q$BulletinSubjectProxy) , 'X';
}
;
function $update_26(this$static, index, subject){
  this$static.this$0.selectedSubjectIndex = valueOf_1(index);
  this$static.this$0.selectedSubject = subject;
  $removeSubject(dynamicCast(this$static.this$0.uiHandlers, Q$FrmBulletinManagementUiHandler), subject);
}

function FrmBulletinManagementView$12_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1565, 1, {}, FrmBulletinManagementView$12_0);
_.update = function update_27(index, subject, value){
  $update_26(this, index, dynamicCast(subject, Q$BulletinSubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmBulletinManagementView$13_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1566, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), FrmBulletinManagementView$13_0);
_.onSelectionChange = function onSelectionChange_4(event_0){
  this.this$0.selectedSubject = dynamicCast($getSelectedObject(this.val$selectionModel), Q$BulletinSubjectProxy);
  if (this.this$0.selectedSubject) {
    this.this$0.selectedSubjectIndex = valueOf_1($indexOf_0(this.this$0.subjectDataProvider.listWrapper, this.this$0.selectedSubject));
    $onSubjectSelected(dynamicCast(this.this$0.uiHandlers, Q$FrmBulletinManagementUiHandler), this.this$0.selectedSubject);
  }
}
;
_.this$0 = null;
_.val$selectionModel = null;
function FrmBulletinManagementView$14_0(){
  TextColumn_0.call(this);
}

defineSeed(1567, 471, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinManagementView$14_0);
_.getValue = function getValue_61(object){
  return dynamicCast(object, Q$BulletinProxy).getStudentName();
}
;
function FrmBulletinManagementView$15_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1568, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), FrmBulletinManagementView$15_0);
_.onSelectionChange = function onSelectionChange_5(event_0){
  this.this$0.selectedBulletin = dynamicCast($getSelectedObject(this.val$selectionModel), Q$BulletinProxy);
  if (this.this$0.selectedBulletin) {
    $clearSubjectUi(this.this$0);
    $clear_3(this.this$0.brancheDataProvider.listWrapper);
    valueOf_1($indexOf_0(this.this$0.bulletinDataProvider.listWrapper, this.this$0.selectedBulletin));
    $onBulletinSelected(dynamicCast(this.this$0.uiHandlers, Q$FrmBulletinManagementUiHandler), this.this$0.selectedBulletin);
    $setText_0(this.this$0.lblStudentName, this.this$0.selectedBulletin.getStudentName());
  }
}
;
_.this$0 = null;
_.val$selectionModel = null;
function $getValue_9(object){
  return $clinit_Double() , '' + object.getBrancheCoef().value_0;
}

function FrmBulletinManagementView$2_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1569, 426, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinManagementView$2_0);
_.getValue = function getValue_62(object){
  return $getValue_9(dynamicCast(object, Q$BulletinBrancheProxy));
}
;
function $update_27(this$static, index, branche, value){
  this$static.this$0.selectedBrancheIndex = valueOf_1(index);
  this$static.this$0.selectedBranche = branche;
  !!this$static.this$0.uiHandlers && $updateBrancheCoef(dynamicCast(this$static.this$0.uiHandlers, Q$FrmBulletinManagementUiHandler), branche, value);
}

function FrmBulletinManagementView$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1570, 1, {}, FrmBulletinManagementView$3_0);
_.update = function update_28(index, branche, value){
  $update_27(this, index, dynamicCast(branche, Q$BulletinBrancheProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmBulletinManagementView$4_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1571, 426, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinManagementView$4_0);
_.getValue = function getValue_63(bp){
  return dynamicCast(bp, Q$BulletinBrancheProxy) , 'X';
}
;
function $update_28(this$static, index, bp){
  this$static.this$0.selectedBrancheIndex = valueOf_1(index);
  this$static.this$0.selectedBranche = bp;
  $removeBranche(dynamicCast(this$static.this$0.uiHandlers, Q$FrmBulletinManagementUiHandler), bp);
}

function FrmBulletinManagementView$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1572, 1, {}, FrmBulletinManagementView$5_0);
_.update = function update_29(index, bp, value){
  $update_28(this, index, dynamicCast(bp, Q$BulletinBrancheProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmBulletinManagementView$6_0(){
  TextColumn_0.call(this);
}

defineSeed(1573, 471, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinManagementView$6_0);
_.getValue = function getValue_64(object){
  return dynamicCast(object, Q$BulletinSubjectProxy).getSubjectName();
}
;
function $getValue_10(object){
  return $clinit_Double() , '' + object.getSubjectCoef().value_0;
}

function FrmBulletinManagementView$7_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1574, 426, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinManagementView$7_0);
_.getValue = function getValue_65(object){
  return $getValue_10(dynamicCast(object, Q$BulletinSubjectProxy));
}
;
function $update_29(this$static, index, subject, value){
  if (!this$static.this$0.selectedSubject.equals$(subject))
    return;
  if (subject.getSubjectCoef().value_0 != ($clinit_Double() , __parseAndValidateDouble(value))) {
    this$static.this$0.selectedSubjectIndex = valueOf_1(index);
    this$static.this$0.selectedSubject = subject;
    !!this$static.this$0.uiHandlers && ($equals_6('' + subject.getSubjectCoef().value_0, value) || $updateSubjectCoef(dynamicCast(this$static.this$0.uiHandlers, Q$FrmBulletinManagementUiHandler), subject, value, this$static.this$0.selectedSubjectIndex));
  }
}

function FrmBulletinManagementView$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1575, 1, {}, FrmBulletinManagementView$8_0);
_.update = function update_30(index, subject, value){
  $update_29(this, index, dynamicCast(subject, Q$BulletinSubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmBulletinManagementView$9_0(){
  TextColumn_0.call(this);
}

defineSeed(1576, 471, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinManagementView$9_0);
_.getValue = function getValue_66(object){
  return dynamicCast(object, Q$BulletinSubjectProxy).getProfName();
}
;
function FrmBulletinManagementView_BinderImpl_0(){
}

defineSeed(1577, 1, {}, FrmBulletinManagementView_BinderImpl_0);
function $build_f_HTMLPanel1_15(this$static){
  var attachRecord8, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_VerticalPanel5, f_VerticalPanel12, f_Label6, f_Grid7, f_Label8, lstEcoles, f_Label9, lstProgrammes, f_Label10, lstClasses, f_Label11, tblBulletins, f_VerticalPanel13, f_Label14, f_Label15, lblStudentName, f_HorizontalPanel16, f_VerticalPanel17, f_Label18, tblSubjects, f_Label19, f_VerticalPanel20, f_Label21, f_Grid22, f_Label23, lstSubjects, f_Label24, lstProfessors, f_Label25, txtSubjectCoef, f_Label26, cmdAddSubject, f_VerticalPanel27, f_Label28, tblBranches, f_VerticalPanel29, f_Label30, f_Grid31, f_Label32, lstBranches, f_Label33, txtBrancheCoef, f_Label34, cmdAddBranche, f_Label35;
  f_HTMLPanel1 = new HTMLPanel_0($html1_13(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord8 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord8.origParent?$insertBefore(attachRecord8.origParent, attachRecord8.element, attachRecord8.origSibling):orphan(attachRecord8.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_12(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'ATTRIBUTION PERSONNALISEE', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_12(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $add_10(f_HorizontalPanel4, (f_VerticalPanel5 = new VerticalPanel_0 , $add_12(f_VerticalPanel5, (f_Label6 = new Label_0 , f_Label6.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label6.directionalTextHelper, 'Choisir un \xE9l\xE8ve', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_12(f_VerticalPanel5, (f_Grid7 = new Grid_0 , $resizeColumns(f_Grid7, 2) , $resizeRows(f_Grid7, 3) , $setWidget_3(f_Grid7, 0, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Ecole :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_3(f_Grid7, 0, 1, (lstEcoles = new ListBox_0 , lstEcoles.element.style['width'] = '170px' , $addDomHandler(lstEcoles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_3(f_Grid7, 1, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Programme :', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_3(f_Grid7, 1, 1, (lstProgrammes = new ListBox_0 , lstProgrammes.element.style['width'] = '170px' , $addDomHandler(lstProgrammes, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstProgrammes = lstProgrammes , lstProgrammes)) , $setWidget_3(f_Grid7, 2, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Classe :', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_3(f_Grid7, 2, 1, (lstClasses = new ListBox_0 , lstClasses.element.style['width'] = '170px' , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this$static.owner.lstClasses = lstClasses , lstClasses)) , f_Grid7.element.style['width'] = '100%' , f_Grid7.tableElem['cellSpacing'] = 2 , f_Grid7.tableElem['cellPadding'] = 2 , f_Grid7)) , $add_12(f_VerticalPanel5, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label11.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $add_12(f_VerticalPanel5, (tblBulletins = this$static.owner.tblBulletins , tblBulletins.element.style['height'] = '500px' , tblBulletins.element.style['width'] = '100%' , tblBulletins)) , f_VerticalPanel5.element['className'] = 'subSection' , f_VerticalPanel5.element.style['height'] = '670px' , f_VerticalPanel5.element.style['width'] = '100%' , f_VerticalPanel5.table['cellSpacing'] = 2 , f_VerticalPanel5)) , $add_10(f_HorizontalPanel4, (f_VerticalPanel12 = new VerticalPanel_0 , $add_12(f_VerticalPanel12, (f_VerticalPanel13 = new VerticalPanel_0 , $add_12(f_VerticalPanel13, (f_Label14 = new Label_0 , f_Label14.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label14.directionalTextHelper, "Attribution personnalis\xE9e pour l'\xE9l\xE8ve choisi(e)", false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $add_12(f_VerticalPanel13, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'El\xE8ve choisis :', false) , $updateHorizontalAlignment(f_Label15) , f_Label15.element.style['width'] = '' , f_Label15)) , $add_12(f_VerticalPanel13, (lblStudentName = new Label_0 , lblStudentName.element['className'] = 'header' , $setTextOrHtml(lblStudentName.directionalTextHelper, '-', false) , $updateHorizontalAlignment(lblStudentName) , lblStudentName.element.style['width'] = '' , this$static.owner.lblStudentName = lblStudentName , lblStudentName)) , $add_12(f_VerticalPanel13, (f_HorizontalPanel16 = new HorizontalPanel_0 , $setVerticalAlignment(f_HorizontalPanel16, ($clinit_HasVerticalAlignment() , ALIGN_TOP)) , $add_10(f_HorizontalPanel16, (f_VerticalPanel17 = new VerticalPanel_0 , $add_12(f_VerticalPanel17, (f_Label18 = new Label_0 , f_Label18.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label18.directionalTextHelper, 'Liste des mati\xE8res', false) , $updateHorizontalAlignment(f_Label18) , f_Label18.element.style['width'] = '' , f_Label18)) , $add_12(f_VerticalPanel17, (tblSubjects = this$static.owner.tblSubjects , tblSubjects.element.style['height'] = '320px' , tblSubjects.element.style['width'] = '100%' , tblSubjects)) , $add_12(f_VerticalPanel17, (f_Label19 = new Label_0 , f_Label19.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label19.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label19) , f_Label19.element.style['height'] = '1px' , f_Label19.element.style['width'] = '450px' , f_Label19)) , $add_12(f_VerticalPanel17, (f_VerticalPanel20 = new VerticalPanel_0 , $add_12(f_VerticalPanel20, (f_Label21 = new Label_0 , f_Label21.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label21.directionalTextHelper, 'Rajouter une mati\xE8re', false) , $updateHorizontalAlignment(f_Label21) , f_Label21)) , $add_12(f_VerticalPanel20, (f_Grid22 = new Grid_0 , $resizeColumns(f_Grid22, 2) , $resizeRows(f_Grid22, 4) , $setWidget_3(f_Grid22, 0, 0, (f_Label23 = new Label_0 , $setTextOrHtml(f_Label23.directionalTextHelper, 'Mati\xE8re :', false) , $updateHorizontalAlignment(f_Label23) , f_Label23)) , $setWidget_3(f_Grid22, 0, 1, (lstSubjects = new ListBox_0 , lstSubjects.element.style['width'] = '200px' , $addDomHandler(lstSubjects, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, TYPE) , this$static.owner.lstSubjects = lstSubjects , lstSubjects)) , $setWidget_3(f_Grid22, 1, 0, (f_Label24 = new Label_0 , $setTextOrHtml(f_Label24.directionalTextHelper, 'Professeur :', false) , $updateHorizontalAlignment(f_Label24) , f_Label24)) , $setWidget_3(f_Grid22, 1, 1, (lstProfessors = new ListBox_0 , lstProfessors.element.style['width'] = '200px' , this$static.owner.lstProfessors = lstProfessors , lstProfessors)) , $setWidget_3(f_Grid22, 2, 0, (f_Label25 = new Label_0 , $setTextOrHtml(f_Label25.directionalTextHelper, 'Coefficient :', false) , $updateHorizontalAlignment(f_Label25) , f_Label25)) , $setWidget_3(f_Grid22, 2, 1, (txtSubjectCoef = new DoubleBox_0 , txtSubjectCoef.element.style['width'] = '50px' , this$static.owner.txtSubjectCoef = txtSubjectCoef , txtSubjectCoef)) , $setWidget_3(f_Grid22, 3, 0, (f_Label26 = new Label_0 , f_Label26.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label26.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label26) , f_Label26)) , $setWidget_3(f_Grid22, 3, 1, (cmdAddSubject = new Button_0 , $setInnerText(cmdAddSubject.element, 'Ajouter la mati\xE8re') , $addDomHandler(cmdAddSubject, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdAddSubject)) , f_Grid22.element.style['width'] = '' , f_Grid22.tableElem['cellSpacing'] = 5 , f_Grid22.tableElem['cellPadding'] = 5 , f_Grid22)) , f_VerticalPanel20.element.style['width'] = '100%' , f_VerticalPanel20.table['cellSpacing'] = 2 , f_VerticalPanel20)) , f_VerticalPanel17.element['className'] = 'subSection' , f_VerticalPanel17.element.style['width'] = '100%' , f_VerticalPanel17.table['cellSpacing'] = 2 , f_VerticalPanel17)) , $add_10(f_HorizontalPanel16, (f_VerticalPanel27 = new VerticalPanel_0 , $add_12(f_VerticalPanel27, (f_Label28 = new Label_0 , f_Label28.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label28.directionalTextHelper, 'Liste des branches', false) , $updateHorizontalAlignment(f_Label28) , f_Label28)) , $add_12(f_VerticalPanel27, (tblBranches = this$static.owner.tblBranches , tblBranches.element.style['height'] = '250px' , tblBranches.element.style['width'] = '100%' , tblBranches)) , $add_12(f_VerticalPanel27, (f_VerticalPanel29 = new VerticalPanel_0 , $add_12(f_VerticalPanel29, (f_Label30 = new Label_0 , f_Label30.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label30.directionalTextHelper, 'Rajouter une branche', false) , $updateHorizontalAlignment(f_Label30) , f_Label30.element.style['width'] = '' , f_Label30)) , $add_12(f_VerticalPanel29, (f_Grid31 = new Grid_0 , $resizeColumns(f_Grid31, 3) , $resizeRows(f_Grid31, 3) , $setWidget_3(f_Grid31, 0, 0, (f_Label32 = new Label_0 , $setTextOrHtml(f_Label32.directionalTextHelper, 'Branche :', false) , $updateHorizontalAlignment(f_Label32) , f_Label32)) , $setWidget_3(f_Grid31, 0, 1, (lstBranches = new ListBox_0 , lstBranches.element['className'] = 'sis_textbox' , lstBranches.element.style['width'] = '200px' , this$static.owner.lstBranches = lstBranches , lstBranches)) , $setWidget_3(f_Grid31, 1, 0, (f_Label33 = new Label_0 , $setTextOrHtml(f_Label33.directionalTextHelper, 'Coefficient :', false) , $updateHorizontalAlignment(f_Label33) , f_Label33)) , $setWidget_3(f_Grid31, 1, 1, (txtBrancheCoef = new DoubleBox_0 , txtBrancheCoef.element.style['width'] = '50px' , this$static.owner.txtBrancheCoef = txtBrancheCoef , txtBrancheCoef)) , $setWidget_3(f_Grid31, 2, 0, (f_Label34 = new Label_0 , f_Label34.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label34.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label34) , f_Label34)) , $setWidget_3(f_Grid31, 2, 1, (cmdAddBranche = new Button_0 , $setInnerText(cmdAddBranche.element, 'Ajouter la branche') , $addDomHandler(cmdAddBranche, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, TYPE_0) , cmdAddBranche)) , $setWidget_3(f_Grid31, 2, 2, (f_Label35 = new Label_0 , f_Label35.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label35.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label35) , f_Label35)) , f_Grid31.tableElem['cellSpacing'] = 5 , f_Grid31.tableElem['cellPadding'] = 5 , f_Grid31)) , f_VerticalPanel29.element.style['width'] = '100%' , f_VerticalPanel29.table['cellSpacing'] = 2 , f_VerticalPanel29)) , f_VerticalPanel27.element['className'] = 'subSection' , f_VerticalPanel27.element.style['width'] = '100%' , f_VerticalPanel27.table['cellSpacing'] = 2 , f_VerticalPanel27)) , f_HorizontalPanel16.element.style['width'] = '100%' , f_HorizontalPanel16.table['cellSpacing'] = 10 , f_HorizontalPanel16)) , f_VerticalPanel13.element['className'] = 'subSection' , f_VerticalPanel13.element.style['width'] = '100%' , f_VerticalPanel13.table['cellSpacing'] = 2 , f_VerticalPanel13)) , f_VerticalPanel12.element.style['height'] = '670px' , f_VerticalPanel12.element.style['width'] = '100%' , f_VerticalPanel12.table['cellSpacing'] = 2 , f_VerticalPanel12)) , f_HorizontalPanel4.element.style['height'] = '' , f_HorizontalPanel4.element.style['width'] = '100%' , f_HorizontalPanel4.table['cellSpacing'] = 5 , f_HorizontalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmBulletinManagementView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmBulletinManagementView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new FrmBulletinManagementView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new FrmBulletinManagementView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new FrmBulletinManagementView_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new FrmBulletinManagementView_BinderImpl$Widgets$5_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new FrmBulletinManagementView_BinderImpl$Widgets$6_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1578, 1, {}, FrmBulletinManagementView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmBulletinManagementView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1579, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmBulletinManagementView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_13(event_0){
  $onLstEcolesChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinManagementView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1580, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmBulletinManagementView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_14(event_0){
  $onLstProgrammesChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinManagementView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1581, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmBulletinManagementView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_15(event_0){
  $onLstClassesChange_3(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinManagementView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1582, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmBulletinManagementView_BinderImpl$Widgets$4_0);
_.onClick = function onClick_28(event_0){
  $onCmdAddSubjectClick(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinManagementView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1583, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmBulletinManagementView_BinderImpl$Widgets$5_0);
_.onClick = function onClick_29(event_0){
  $onCmdAddBrancheClick(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinManagementView_BinderImpl$Widgets$6_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1584, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmBulletinManagementView_BinderImpl$Widgets$6_0);
_.onChange = function onChange_16(event_0){
  $onLstSubjectsChange(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_13(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$view$FrmBulletinManagementView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBulletinManagementView$_annotation$$none$$) {
    result = new FrmBulletinManagementView_0(new FrmBulletinManagementView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBulletinManagementView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBulletinManagementView$_annotation$$none$$;
}

defineSeed(1803, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinBrancheProxy]));
_.setBrancheCoef = function setBrancheCoef(brancheCoef){
  dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).setBrancheCoef(brancheCoef);
}
;
defineSeed(1804, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinBrancheProxy]));
_.setBrancheCoef = function setBrancheCoef_0(brancheCoef){
  $setProperty(this.this$0, 'brancheCoef', brancheCoef);
}
;
defineSeed(1806, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinSubjectProxy]));
_.setSubjectCoef = function setSubjectCoef(subjectCoef){
  dynamicCast($getWrapped(this.this$0), Q$BulletinSubjectProxy).setSubjectCoef(subjectCoef);
}
;
defineSeed(1807, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinSubjectProxy]));
_.setSubjectCoef = function setSubjectCoef_0(subjectCoef){
  $setProperty(this.this$0, 'subjectCoef', subjectCoef);
}
;
function BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$10X_0(this$0, val$bulletinSubjectId, val$brancheId, val$brancheCoef){
  this.val$bulletinSubjectId = val$bulletinSubjectId;
  this.val$brancheId = val$brancheId;
  this.val$brancheCoef = val$brancheCoef;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1923, 731, makeCastMap([Q$AbstractRequest]), BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$10X_0);
_.makeRequestData = function makeRequestData_34(){
  return new RequestData_0('UJ6LZIE8clOCJkV6tknwFoLzhhM=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$bulletinSubjectId, this.val$brancheId, this.val$brancheCoef]), this.propertyRefs, Lcom_lemania_sis_shared_BulletinBrancheProxy_2_classLit, null);
}
;
_.val$brancheCoef = null;
_.val$brancheId = null;
_.val$bulletinSubjectId = null;
function BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$7X_0(this$0, val$bulletinBranche){
  this.val$bulletinBranche = val$bulletinBranche;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1927, 731, makeCastMap([Q$AbstractRequest]), BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_38(){
  return new RequestData_0('qzGlIM_noYvI_M3JI3Vve$oNSCQ=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$bulletinBranche]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$bulletinBranche = null;
function BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$10X_0(this$0, val$bulletinId, val$subjectId, val$professorId, val$subjectCoef){
  this.val$bulletinId = val$bulletinId;
  this.val$subjectId = val$subjectId;
  this.val$professorId = val$professorId;
  this.val$subjectCoef = val$subjectCoef;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1932, 731, makeCastMap([Q$AbstractRequest]), BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$10X_0);
_.makeRequestData = function makeRequestData_40(){
  return new RequestData_0('FtaxERcjRxUI3cODTilTqaw5PnM=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$bulletinId, this.val$subjectId, this.val$professorId, this.val$subjectCoef]), this.propertyRefs, Lcom_lemania_sis_shared_BulletinSubjectProxy_2_classLit, null);
}
;
_.val$bulletinId = null;
_.val$professorId = null;
_.val$subjectCoef = null;
_.val$subjectId = null;
function BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$7X_0(this$0, val$bulletinSubject){
  this.val$bulletinSubject = val$bulletinSubject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1935, 731, makeCastMap([Q$AbstractRequest]), BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_43(){
  return new RequestData_0('SXtF$2TVKto7nla_i2u9vAPKz2o=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$bulletinSubject]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$bulletinSubject = null;
function SubjectRequestFactory_SubjectRequestContextImpl$4X_0(this$0, val$bulletin){
  this.val$bulletin = val$bulletin;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(2021, 731, makeCastMap([Q$AbstractRequest]), SubjectRequestFactory_SubjectRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_88(){
  return new RequestData_0('g$57UuybrUYiusU71y4MGdiWt_U=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$bulletin]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_SubjectProxy_2_classLit);
}
;
_.val$bulletin = null;
var Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter', 1253), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$1', 1254), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$2', 1262), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$3', 1263), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$4', 1264), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$5', 1265), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$6', 1266), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$7_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$7', 1267), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$8_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$8', 1268), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$9_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$9', 1269), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$10_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$10', 1255), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$11_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$11', 1256), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$12_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$12', 1257), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$13_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$13', 1258), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$14_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$14', 1259), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$16_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$16', 1261), Lcom_lemania_sis_client_view_FrmBulletinManagementView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView', 1561), Lcom_lemania_sis_client_view_FrmBulletinManagementView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView$1', 1562), Lcom_lemania_sis_client_view_FrmBulletinManagementView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView$2', 1569), Lcom_lemania_sis_client_view_FrmBulletinManagementView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView$3', 1570), Lcom_lemania_sis_client_view_FrmBulletinManagementView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView$4', 1571), Lcom_lemania_sis_client_view_FrmBulletinManagementView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView$5', 1572), Lcom_lemania_sis_client_view_FrmBulletinManagementView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView$6', 1573), Lcom_lemania_sis_client_view_FrmBulletinManagementView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView$7', 1574), Lcom_lemania_sis_client_view_FrmBulletinManagementView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView$8', 1575), Lcom_lemania_sis_client_view_FrmBulletinManagementView$9_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView$9', 1576), Lcom_lemania_sis_client_view_FrmBulletinManagementView$10_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView$10', 1563), Lcom_lemania_sis_client_view_FrmBulletinManagementView$11_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView$11', 1564), Lcom_lemania_sis_client_view_FrmBulletinManagementView$12_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView$12', 1565), Lcom_lemania_sis_client_view_FrmBulletinManagementView$13_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView$13', 1566), Lcom_lemania_sis_client_view_FrmBulletinManagementView$14_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView$14', 1567), Lcom_lemania_sis_client_view_FrmBulletinManagementView$15_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView$15', 1568), Lcom_lemania_sis_client_view_FrmBulletinManagementView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView_BinderImpl', 1577), Lcom_lemania_sis_client_view_FrmBulletinManagementView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView_BinderImpl$Widgets', 1578), Lcom_lemania_sis_client_view_FrmBulletinManagementView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView_BinderImpl$Widgets$1', 1579), Lcom_lemania_sis_client_view_FrmBulletinManagementView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView_BinderImpl$Widgets$2', 1580), Lcom_lemania_sis_client_view_FrmBulletinManagementView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView_BinderImpl$Widgets$3', 1581), Lcom_lemania_sis_client_view_FrmBulletinManagementView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView_BinderImpl$Widgets$4', 1582), Lcom_lemania_sis_client_view_FrmBulletinManagementView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView_BinderImpl$Widgets$5', 1583), Lcom_lemania_sis_client_view_FrmBulletinManagementView_1BinderImpl$Widgets$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinManagementView_BinderImpl$Widgets$6', 1584), Lcom_lemania_sis_shared_service_SubjectRequestFactory_1SubjectRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SubjectRequestFactory_SubjectRequestContextImpl$4X', 2021), Lcom_lemania_sis_shared_service_BulletinBrancheRequestFactory_1BulletinBrancheRequestContextImpl$7X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$7X', 1927), Lcom_lemania_sis_shared_service_BulletinBrancheRequestFactory_1BulletinBrancheRequestContextImpl$10X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$10X', 1923), Lcom_lemania_sis_shared_service_BulletinSubjectRequestFactory_1BulletinSubjectRequestContextImpl$7X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$7X', 1935), Lcom_lemania_sis_shared_service_BulletinSubjectRequestFactory_1BulletinSubjectRequestContextImpl$10X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$10X', 1932);
$entry(onLoad)(9);
