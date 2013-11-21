function CheckClassMasterRoleEvent_0(profId){
  $clinit_CheckClassMasterRoleEvent();
  this.profId = profId;
}

defineSeed(760, 235, {}, CheckClassMasterRoleEvent_0);
_.dispatch_0 = function dispatch_35(handler){
  dynamicCast(handler, Q$CheckClassMasterRoleEvent$CheckClassMasterRoleHandler).onCheckClassMasterRole(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_36(){
  return TYPE_35;
}
;
_.profId = '';
function EvaluationStudentReportLoadEvent_0(bulletinId, evaluationHeaderId){
  $clinit_EvaluationStudentReportLoadEvent();
  this.bulletinId = bulletinId;
  this.evaluationHeaderId = evaluationHeaderId;
}

defineSeed(765, 235, {}, EvaluationStudentReportLoadEvent_0);
_.dispatch_0 = function dispatch_40(handler){
  dynamicCast(handler, Q$EvaluationStudentReportLoadEvent$EvaluationStudentReportLoadHandler).onEvaluationStudentReportLoad(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_41(){
  return TYPE_40;
}
;
_.bulletinId = '';
_.evaluationHeaderId = '';
function $onBulletinSelected_0(this$static, classId){
  var rc, rf;
  rf = new EvaluationHeaderRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl_0(rf);
  $fire($listAllByClass(rc, classId), new FrmEvaluationInputStudentPresenter$5_0(this$static));
}

function $onCheckClassMasterRole(this$static, event_0){
  var rc, rf;
  if (this$static.currentUser.isAdmin) {
    $enableCommentEditing(dynamicCast(this$static.view, Q$FrmEvaluationInputStudentPresenter$MyView), ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
    return;
  }
  rf = new UserRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire($checkClassMasterRole(rc, '' + toString_6(this$static.currentUser.userId.value_0), event_0.profId), new FrmEvaluationInputStudentPresenter$7_0(this$static));
}

function $onClassSelected(this$static, classId){
  var rc, rf;
  rf = new BulletinRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinRequestFactory_BulletinRequestContextImpl_0(rf);
  $fire($listAllActiveByClass(rc, classId), new FrmEvaluationInputStudentPresenter$4_0(this$static));
}

function $onEcoleSelected_3(this$static, ecoleId){
  var rc, rf;
  if (!ecoleId.length) {
    return;
  }
  rf = new CoursRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  $fire($listAllActive_2(rc, ecoleId), new FrmEvaluationInputStudentPresenter$2_0(this$static));
}

function $onEvaluationHeaderSelected(this$static, classId, bulletinId, evaluationHeaderId, classMasterId){
  var rc, rf, x;
  if (!classId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Classe');
    return;
  }
  if (!bulletinId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - El\xE8ve');
    return;
  }
  if (!evaluationHeaderId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Evaluation');
    return;
  }
  rf = new EvaluationSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl_0(rf);
  $fire((x = new EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$2X_0(rc, classId, bulletinId, evaluationHeaderId) , $addInvocation(rc.state.dialect, x) , x), new FrmEvaluationInputStudentPresenter$6_0(this$static, classMasterId, bulletinId, evaluationHeaderId));
}

function $onEvaluationStudentReportLoad(this$static, event_0){
  var rc, rf;
  rf = new EvaluationStudentReportRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl_0(rf);
  $fire($load(rc, event_0.bulletinId, event_0.evaluationHeaderId), new FrmEvaluationInputStudentPresenter$9_0(this$static));
}

function $onProgrammeSelected_1(this$static, programmeId){
  var rc, rf;
  rf = new ClasseRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAllActive_1(rc, programmeId), new FrmEvaluationInputStudentPresenter$3_0(this$static));
}

function $saveEvaluationStudentReport(this$static, bulletinId, evaluationHeaderId, commentaire){
  var rc, rf, x;
  rf = new EvaluationStudentReportRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl_0(rf);
  $fire((x = new EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl$4X_0(rc, bulletinId, evaluationHeaderId, commentaire) , $addInvocation(rc.state.dialect, x) , x), new FrmEvaluationInputStudentPresenter$8_0);
}

function FrmEvaluationInputStudentPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(918, 705, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$CheckClassMasterRoleEvent$CheckClassMasterRoleHandler, Q$EvaluationStudentReportLoadEvent$EvaluationStudentReportLoadHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$FrmEvaluationInputStudentPresenter, Q$FrmEvaluationInputStudentUiHandler]), FrmEvaluationInputStudentPresenter_0);
_.onBind = function onBind_15(){
  var rf, rc;
  dynamicCast(this.view, Q$FrmEvaluationInputStudentPresenter$MyView).setUiHandlers(this);
  $initializeUI(dynamicCast(this.view, Q$FrmEvaluationInputStudentPresenter$MyView));
  rf = new EcoleRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_4(rc), new FrmEvaluationInputStudentPresenter$1_0(this));
}
;
_.onCheckClassMasterRole = function onCheckClassMasterRole(event_0){
  $onCheckClassMasterRole(this, event_0);
}
;
_.onEvaluationStudentReportLoad = function onEvaluationStudentReportLoad(event_0){
  $onEvaluationStudentReportLoad(this, event_0);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_29(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_14(){
  $doFire(this.eventBus, new PageAfterSelectEvent_0('evaluationinputstudent'), null);
  $resetForm_7(dynamicCast(this.view, Q$FrmEvaluationInputStudentPresenter$MyView));
}
;
_.revealInParent = function revealInParent_14(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_59(this$static, response){
  $setEcoleList_3(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView), response);
}

function FrmEvaluationInputStudentPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(919, 644, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$1_0);
_.onFailure_0 = function onFailure_62(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_62(response){
  $onSuccess_59(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_60(this$static, response){
  $setCoursList_3(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView), response);
}

function FrmEvaluationInputStudentPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(920, 644, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$2_0);
_.onFailure_0 = function onFailure_63(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_63(response){
  $onSuccess_60(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_61(this$static, response){
  $setClasseList_3(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView), response);
}

function FrmEvaluationInputStudentPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(921, 644, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$3_0);
_.onFailure_0 = function onFailure_64(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_64(response){
  $onSuccess_61(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_62(this$static, response){
  $setStudentListData_1(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView), response);
}

function FrmEvaluationInputStudentPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(922, 644, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$4_0);
_.onFailure_0 = function onFailure_65(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_65(response){
  $onSuccess_62(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_63(this$static, response){
  $setEvaluationHeaderListData(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView), response);
}

function FrmEvaluationInputStudentPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(923, 644, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$5_0);
_.onFailure_0 = function onFailure_66(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_66(response){
  $onSuccess_63(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_64(this$static, response){
  $setEvaluationSubjectTableData(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView), response);
  $doFire(this$static.this$0.eventBus, new CheckClassMasterRoleEvent_0(this$static.val$classMasterId), null);
  $doFire(this$static.this$0.eventBus, new EvaluationStudentReportLoadEvent_0(this$static.val$bulletinId, this$static.val$evaluationHeaderId), null);
}

function FrmEvaluationInputStudentPresenter$6_0(this$0, val$classMasterId, val$bulletinId, val$evaluationHeaderId){
  this.this$0 = this$0;
  this.val$classMasterId = val$classMasterId;
  this.val$bulletinId = val$bulletinId;
  this.val$evaluationHeaderId = val$evaluationHeaderId;
}

defineSeed(924, 644, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$6_0);
_.onFailure_0 = function onFailure_67(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_67(response){
  $onSuccess_64(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
_.val$bulletinId = null;
_.val$classMasterId = null;
_.val$evaluationHeaderId = null;
function $onSuccess_65(this$static, response){
  $enableCommentEditing(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView), response);
}

function FrmEvaluationInputStudentPresenter$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(925, 644, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$7_0);
_.onFailure_0 = function onFailure_68(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_68(response){
  $onSuccess_65(this, dynamicCast(response, Q$Boolean));
}
;
_.this$0 = null;
function FrmEvaluationInputStudentPresenter$8_0(){
}

defineSeed(926, 644, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$8_0);
_.onFailure_0 = function onFailure_69(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_69(response){
  throwClassCastExceptionUnlessNull(response);
  alert_0('Donn\xE9es sauvegard\xE9es');
}
;
function $onSuccess_66(this$static, response){
  !!response && $setStudentReportData(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView), response);
}

function FrmEvaluationInputStudentPresenter$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(927, 644, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$9_0);
_.onFailure_0 = function onFailure_70(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_70(response){
  $onSuccess_66(this, dynamicCast(response, Q$EvaluationStudentReportProxy));
}
;
_.this$0 = null;
defineSeed(928, 736, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$CheckClassMasterRoleEvent$CheckClassMasterRoleHandler, Q$EvaluationStudentReportLoadEvent$EvaluationStudentReportLoadHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler]));
_.onCheckClassMasterRole = function onCheckClassMasterRole_0(event_0){
  $getPresenter_0(this, new FrmEvaluationInputStudentPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
_.onEvaluationStudentReportLoad = function onEvaluationStudentReportLoad_0(event_0){
  $getPresenter_0(this, new FrmEvaluationInputStudentPresenterMyProxyImpl$3_0(this.eventBus, event_0));
}
;
function $success_18(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new FrmEvaluationInputStudentPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function FrmEvaluationInputStudentPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(929, 718, {}, FrmEvaluationInputStudentPresenterMyProxyImpl$1_0);
_.success = function success_20(presenter){
  $success_18(this, dynamicCast(presenter, Q$FrmEvaluationInputStudentPresenter));
}
;
_.val$event = null;
function FrmEvaluationInputStudentPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(930, 1, {}, FrmEvaluationInputStudentPresenterMyProxyImpl$1$1_0);
_.execute_0 = function execute_48(){
  $onCheckClassMasterRole(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $success_20(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new FrmEvaluationInputStudentPresenterMyProxyImpl$3$1_0(presenter, this$static.val$event));
}

function FrmEvaluationInputStudentPresenterMyProxyImpl$3_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(933, 718, {}, FrmEvaluationInputStudentPresenterMyProxyImpl$3_0);
_.success = function success_22(presenter){
  $success_20(this, dynamicCast(presenter, Q$FrmEvaluationInputStudentPresenter));
}
;
_.val$event = null;
function FrmEvaluationInputStudentPresenterMyProxyImpl$3$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(934, 1, {}, FrmEvaluationInputStudentPresenterMyProxyImpl$3$1_0);
_.execute_0 = function execute_50(){
  $onEvaluationStudentReportLoad(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$_annotation$$none$$) {
    result = new FrmEvaluationInputStudentPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmEvaluationInputStudentView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$_annotation$$none$$;
}

defineSeed(1103, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_143(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $enableCommentEditing(this$static, isClassMaster){
  $setEnabled(this$static.cmdSave, isClassMaster.value_0);
}

function $initializeUI(this$static){
  var colObjective1, colObjective2, colObjective3, colObjective4, colObjective5, colObjective6, colProfName, colSubjectName;
  $selectClear(this$static.lstYears.element);
  $insertItem(this$static.lstYears, '-', '', -1);
  $insertItem(this$static.lstYears, '2013 - 2014', '2013', -1);
  colSubjectName = new FrmEvaluationInputStudentView$1_0;
  $addColumn(this$static.tblEvaluations, colSubjectName, 'Mati\xE8re');
  colProfName = new FrmEvaluationInputStudentView$2_0;
  $addColumn(this$static.tblEvaluations, colProfName, 'Professeur');
  colObjective1 = new FrmEvaluationInputStudentView$3_0;
  $addColumn(this$static.tblEvaluations, colObjective1, "Comprendre le contexte du cours, est capable d'en discuster et d'en appliquer les principes.");
  colObjective2 = new FrmEvaluationInputStudentView$4_0;
  $addColumn(this$static.tblEvaluations, colObjective2, "Est capable d'identifier des probl\xE8mes et de chercher des solutions.");
  colObjective3 = new FrmEvaluationInputStudentView$5_0;
  $addColumn(this$static.tblEvaluations, colObjective3, 'Est capable de synth\xE9tiser et de faire des propositions dans le cadre de contextes similaires.');
  colObjective4 = new FrmEvaluationInputStudentView$6_0;
  $addColumn(this$static.tblEvaluations, colObjective4, 'Est bien structur\xE9 dans son travail et parvient \xE0 hi\xE9rachiser ses priorit\xE9s.');
  colObjective5 = new FrmEvaluationInputStudentView$7_0;
  $addColumn(this$static.tblEvaluations, colObjective5, 'Travaille correctement et accomplit les t\xE2ches demand\xE9es.');
  colObjective6 = new FrmEvaluationInputStudentView$8_0;
  $addColumn(this$static.tblEvaluations, colObjective6, "Participe positivement en classes en tant qu'individu et au sein du groupe.");
  $addDataDisplay(this$static.providerEvaluationSubject, this$static.tblEvaluations);
}

function $onCmdSaveClick_1(this$static){
  $saveEvaluationStudentReport(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationInputStudentUiHandler), $getValue_1(this$static.lstBulletins, this$static.lstBulletins.element.selectedIndex), $getValue_1(this$static.lstEvaluationHeaders, this$static.lstEvaluationHeaders.element.selectedIndex), $getPropertyString(this$static.txtCommentaire.element, 'value'));
}

function $onLstBulletinsChange_1(this$static){
  $onBulletinSelected_0(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationInputStudentUiHandler), $getValue_1(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $onLstClassesChange_3(this$static){
  $onClassSelected(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationInputStudentUiHandler), $getValue_1(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $onLstEcolesChange_3(this$static){
  if (!$getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex).length) {
    $selectClear(this$static.lstProgrammes.element);
    $selectClear(this$static.lstClasses.element);
    return;
  }
  !!this$static.uiHandlers && $onEcoleSelected_3(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationInputStudentUiHandler), $getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex));
}

function $onLstEvaluationHeadersChange(this$static){
  $setText(this$static.txtCommentaire, '');
  if ($equals_5($getValue_1(this$static.lstEvaluationHeaders, this$static.lstEvaluationHeaders.element.selectedIndex), ''))
    return;
  $onEvaluationHeaderSelected(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationInputStudentUiHandler), $getValue_1(this$static.lstClasses, this$static.lstClasses.element.selectedIndex), $getValue_1(this$static.lstBulletins, this$static.lstBulletins.element.selectedIndex), $getValue_1(this$static.lstEvaluationHeaders, this$static.lstEvaluationHeaders.element.selectedIndex), dynamicCast($get_8(this$static.evaluationHeaders, this$static.lstEvaluationHeaders.element.selectedIndex - 1), Q$EvaluationHeaderProxy).getClassMasterId());
}

function $onLstProgrammesChange_1(this$static){
  if (!$getValue_1(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex).length)
    return;
  !!this$static.uiHandlers && $onProgrammeSelected_1(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationInputStudentUiHandler), $getValue_1(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex));
}

function $resetForm_7(this$static){
  $setSelectedIndex_0(this$static.lstBulletins, 0);
  $selectClear(this$static.lstEvaluationHeaders.element);
  $clear_3(this$static.providerEvaluationSubject.listWrapper);
}

function $setClasseList_3(this$static, classes){
  var cours, cours$iterator;
  $selectClear(this$static.lstClasses.element);
  $insertItem(this$static.lstClasses, '-', '', -1);
  for (cours$iterator = classes.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$ClasseProxy);
    $insertItem(this$static.lstClasses, cours.getClassName(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setCoursList_3(this$static, programmes){
  var cours, cours$iterator;
  $selectClear(this$static.lstProgrammes.element);
  $insertItem(this$static.lstProgrammes, '-', '', -1);
  for (cours$iterator = programmes.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$CoursProxy);
    $insertItem(this$static.lstProgrammes, cours.getCoursNom(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setEcoleList_3(this$static, ecoles){
  var ecole, ecole$iterator;
  $selectClear(this$static.lstEcoles.element);
  $insertItem(this$static.lstEcoles, '-', '', -1);
  for (ecole$iterator = ecoles.iterator(); ecole$iterator.hasNext();) {
    ecole = dynamicCast(ecole$iterator.next_0(), Q$EcoleProxy);
    $insertItem(this$static.lstEcoles, ecole.getSchoolName(), '' + toString_6(ecole.getId_0().value_0), -1);
  }
}

function $setEvaluationHeaderListData(this$static, headers){
  var evh, evh$iterator;
  $selectClear(this$static.lstEvaluationHeaders.element);
  $insertItem(this$static.lstEvaluationHeaders, '-', '', -1);
  for (evh$iterator = headers.iterator(); evh$iterator.hasNext();) {
    evh = dynamicCast(evh$iterator.next_0(), Q$EvaluationHeaderProxy);
    $insertItem(this$static.lstEvaluationHeaders, evh.getFromDate() + ' - ' + evh.getToDate(), '' + toString_6(evh.getId_0().value_0), -1);
  }
  $clear_5(this$static.evaluationHeaders);
  $addAll_1(this$static.evaluationHeaders, headers);
}

function $setEvaluationSubjectTableData(this$static, evaluationSubject){
  $clear_3(this$static.providerEvaluationSubject.listWrapper);
  $setList(this$static.providerEvaluationSubject, evaluationSubject);
  $setHeight(this$static.tblEvaluations, ($clinit_NotificationTypes() , lineHeightShortList).value_0 * (evaluationSubject.size_1() + 1) + 100 + 'px');
}

function $setStudentListData_1(this$static, bulletins){
  var bulletin, bulletin$iterator;
  !!this$static.bulletins && $clear_5(this$static.bulletins);
  $addAll_1(this$static.bulletins, bulletins);
  $selectClear(this$static.lstBulletins.element);
  $insertItem(this$static.lstBulletins, '-', '', -1);
  for (bulletin$iterator = bulletins.iterator(); bulletin$iterator.hasNext();) {
    bulletin = dynamicCast(bulletin$iterator.next_0(), Q$BulletinProxy);
    $insertItem(this$static.lstBulletins, bulletin.getStudentName(), '' + toString_6(bulletin.getId_0().value_0), -1);
  }
}

function $setStudentReportData(this$static, report){
  $setText(this$static.txtCommentaire, report.getEvaluationNote());
}

function FrmEvaluationInputStudentView_0(){
  this.bulletins = new ArrayList_0;
  this.evaluationHeaders = new ArrayList_0;
  this.providerEvaluationSubject = new ListDataProvider_0;
  this.tblEvaluations = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_12(new FrmEvaluationInputStudentView_BinderImpl$Widgets_0(this));
}

defineSeed(1271, 710, makeCastMap([Q$IsWidget, Q$FrmEvaluationInputStudentPresenter$MyView]), FrmEvaluationInputStudentView_0);
_.asWidget = function asWidget_16(){
  return this.widget;
}
;
_.cmdSave = null;
_.lstBulletins = null;
_.lstClasses = null;
_.lstEcoles = null;
_.lstEvaluationHeaders = null;
_.lstProgrammes = null;
_.lstYears = null;
_.txtCommentaire = null;
_.widget = null;
function FrmEvaluationInputStudentView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1272, 392, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$1_0);
_.getValue = function getValue_26(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getSubjectName();
}
;
function FrmEvaluationInputStudentView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(1273, 392, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$2_0);
_.getValue = function getValue_27(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getProfessorName();
}
;
function FrmEvaluationInputStudentView$3_0(){
  TextColumn_0.call(this);
}

defineSeed(1274, 392, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$3_0);
_.getValue = function getValue_28(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective1();
}
;
function FrmEvaluationInputStudentView$4_0(){
  TextColumn_0.call(this);
}

defineSeed(1275, 392, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$4_0);
_.getValue = function getValue_29(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective2();
}
;
function FrmEvaluationInputStudentView$5_0(){
  TextColumn_0.call(this);
}

defineSeed(1276, 392, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$5_0);
_.getValue = function getValue_30(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective3();
}
;
function FrmEvaluationInputStudentView$6_0(){
  TextColumn_0.call(this);
}

defineSeed(1277, 392, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$6_0);
_.getValue = function getValue_31(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective4();
}
;
function FrmEvaluationInputStudentView$7_0(){
  TextColumn_0.call(this);
}

defineSeed(1278, 392, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$7_0);
_.getValue = function getValue_32(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective5();
}
;
function FrmEvaluationInputStudentView$8_0(){
  TextColumn_0.call(this);
}

defineSeed(1279, 392, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$8_0);
_.getValue = function getValue_33(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective6();
}
;
function FrmEvaluationInputStudentView_BinderImpl_0(){
}

defineSeed(1280, 1, {}, FrmEvaluationInputStudentView_BinderImpl_0);
function $build_f_HTMLPanel1_12(this$static){
  var attachRecord14, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_Grid5, f_Label6, f_Label7, lstYears, f_Label8, f_Label9, lstClasses, f_Label10, f_Label11, lstEcoles, f_Label12, f_Label13, lstBulletins, f_Label14, f_Label15, lstProgrammes, f_Label16, f_Label17, lstEvaluationHeaders, f_VerticalPanel18, f_VerticalPanel24, tblEvaluations, f_HorizontalPanel25, f_Label26, txtCommentaire, cmdSave, sb, f_Label19, f_Label20, f_Label21, f_Label22, f_Label23;
  f_HTMLPanel1 = new HTMLPanel_0($html2_1(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord14 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord14.origParent?$insertBefore(attachRecord14.origParent, attachRecord14.element, attachRecord14.origSibling):orphan(attachRecord14.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'EVALUATION INTERMEDIAIRE', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel4, (f_Grid5 = new Grid_0 , $resizeColumns(f_Grid5, 6) , $resizeRows(f_Grid5, 4) , $setWidget_1(f_Grid5, 0, 0, (f_Label6 = new Label_0 , f_Label6.element['className'] = 'step' , $setTextOrHtml(f_Label6.directionalTextHelper, '1', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid5, 0, 1, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Ann\xE9e :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid5, 0, 2, (lstYears = new ListBox_0 , lstYears.element['className'] = 'sis-combobox' , this$static.owner.lstYears = lstYears , lstYears)) , $setWidget_1(f_Grid5, 0, 3, (f_Label8 = new Label_0 , f_Label8.element['className'] = 'step' , $setTextOrHtml(f_Label8.directionalTextHelper, '4', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid5, 0, 4, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Classes :', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid5, 0, 5, (lstClasses = new ListBox_0 , lstClasses.element['className'] = 'sis-combobox' , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstClasses = lstClasses , lstClasses)) , $setWidget_1(f_Grid5, 1, 0, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'step' , $setTextOrHtml(f_Label10.directionalTextHelper, '2', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid5, 1, 1, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Ecole :', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid5, 1, 2, (lstEcoles = new ListBox_0 , lstEcoles.element['className'] = 'sis-combobox' , $addDomHandler(lstEcoles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE) , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_1(f_Grid5, 1, 3, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'step' , $setTextOrHtml(f_Label12.directionalTextHelper, '5', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_1(f_Grid5, 1, 4, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'El\xE8ves :', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_1(f_Grid5, 1, 5, (lstBulletins = new ListBox_0 , lstBulletins.element['className'] = 'sis-combobox' , $addDomHandler(lstBulletins, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE) , this$static.owner.lstBulletins = lstBulletins , lstBulletins)) , $setWidget_1(f_Grid5, 2, 0, (f_Label14 = new Label_0 , f_Label14.element['className'] = 'step' , $setTextOrHtml(f_Label14.directionalTextHelper, '3', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_1(f_Grid5, 2, 1, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'Programmes :', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_1(f_Grid5, 2, 2, (lstProgrammes = new ListBox_0 , lstProgrammes.element['className'] = 'sis-combobox' , $addDomHandler(lstProgrammes, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstProgrammes = lstProgrammes , lstProgrammes)) , $setWidget_1(f_Grid5, 2, 3, (f_Label16 = new Label_0 , f_Label16.element['className'] = 'step' , $setTextOrHtml(f_Label16.directionalTextHelper, '6', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $setWidget_1(f_Grid5, 2, 4, (f_Label17 = new Label_0 , $setTextOrHtml(f_Label17.directionalTextHelper, "Rapport d'Evaluations :", false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $setWidget_1(f_Grid5, 2, 5, (lstEvaluationHeaders = new ListBox_0 , lstEvaluationHeaders.element['className'] = 'sis-combobox' , $addDomHandler(lstEvaluationHeaders, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, TYPE) , this$static.owner.lstEvaluationHeaders = lstEvaluationHeaders , lstEvaluationHeaders)) , f_Grid5.tableElem['cellSpacing'] = 3 , f_Grid5.tableElem['cellPadding'] = 2 , f_Grid5)) , $add_9(f_HorizontalPanel4, (f_VerticalPanel18 = new VerticalPanel_0 , $add_11(f_VerticalPanel18, (f_Label19 = new Label_0 , $setTextOrHtml(f_Label19.directionalTextHelper, 'TB = Tr\xE8s Bien', false) , $updateHorizontalAlignment(f_Label19) , f_Label19)) , $add_11(f_VerticalPanel18, (f_Label20 = new Label_0 , $setTextOrHtml(f_Label20.directionalTextHelper, 'B = Bien', false) , $updateHorizontalAlignment(f_Label20) , f_Label20)) , $add_11(f_VerticalPanel18, (f_Label21 = new Label_0 , $setTextOrHtml(f_Label21.directionalTextHelper, 'AB = Assez Bien', false) , $updateHorizontalAlignment(f_Label21) , f_Label21)) , $add_11(f_VerticalPanel18, (f_Label22 = new Label_0 , $setTextOrHtml(f_Label22.directionalTextHelper, 'S = Suffisant', false) , $updateHorizontalAlignment(f_Label22) , f_Label22)) , $add_11(f_VerticalPanel18, (f_Label23 = new Label_0 , $setTextOrHtml(f_Label23.directionalTextHelper, 'NA = Non atteint', false) , $updateHorizontalAlignment(f_Label23) , f_Label23)) , f_VerticalPanel18.element['className'] = 'subSection' , f_VerticalPanel18.table['cellSpacing'] = 3 , f_VerticalPanel18)) , f_HorizontalPanel4.element.style['width'] = '100%' , f_HorizontalPanel4)) , $add_11(f_VerticalPanel2, (f_VerticalPanel24 = new VerticalPanel_0 , $add_11(f_VerticalPanel24, (tblEvaluations = this$static.owner.tblEvaluations , tblEvaluations.element['className'] = 'subSection' , tblEvaluations.element.style['height'] = '200px' , tblEvaluations.element.style['width'] = '100%' , tblEvaluations)) , $add_11(f_VerticalPanel24, (f_HorizontalPanel25 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel25, (f_Label26 = new Label_0 , $setTextOrHtml(f_Label26.directionalTextHelper, "Commentaire(s) \xE9ventuel(s) et pistes d'am\xE9lioration :", false) , $updateHorizontalAlignment(f_Label26) , f_Label26)) , $add_9(f_HorizontalPanel25, (txtCommentaire = new TextArea_1 , txtCommentaire.element.rows = 5 , txtCommentaire.element.cols = 80 , this$static.owner.txtCommentaire = txtCommentaire , txtCommentaire)) , $add_9(f_HorizontalPanel25, (cmdSave = new Button_0 , $setHTML(cmdSave, (sb = new StringBuilder_0 , $append_1(sb.data, 'Enregister') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , cmdSave.element['disabled'] = true , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , this$static.owner.cmdSave = cmdSave , cmdSave)) , f_HorizontalPanel25.element.style['width'] = '100%' , f_HorizontalPanel25.table['cellSpacing'] = 5 , f_HorizontalPanel25)) , f_VerticalPanel24.element['className'] = 'subSection' , f_VerticalPanel24.element.style['width'] = '100%' , f_VerticalPanel24.table['cellSpacing'] = 2 , f_VerticalPanel24)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmEvaluationInputStudentView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$5_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$6_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1281, 1, {}, FrmEvaluationInputStudentView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1282, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_14(event_0){
  $onLstEcolesChange_3(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1283, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_15(event_0){
  $onLstProgrammesChange_1(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1284, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_16(event_0){
  $onLstClassesChange_3(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1285, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$4_0);
_.onChange = function onChange_17(event_0){
  $onLstBulletinsChange_1(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1286, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$5_0);
_.onChange = function onChange_18(event_0){
  $onLstEvaluationHeadersChange(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$6_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1287, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$6_0);
_.onClick = function onClick_11(event_0){
  $onCmdSaveClick_1(this.this$1.owner);
}
;
_.this$1 = null;
function $html2_1(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$view$FrmEvaluationInputStudentView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationInputStudentView$_annotation$$none$$) {
    result = new FrmEvaluationInputStudentView_0(new FrmEvaluationInputStudentView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationInputStudentView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationInputStudentView$_annotation$$none$$;
}

function $$init_18(this$static){
  this$static.shim = new EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_18(this);
}

function EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_18(this);
}

defineSeed(1502, 605, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_17(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_17(){
  return new EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_25(){
  return Lcom_lemania_sis_shared_EvaluationStudentReportProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_16(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = ($clinit_Boolean() , $isPublished(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'published'), Z_classLit);
  visitor.visitValueProperty('published', value, propertyContext);
  value = $getEvaluationNote(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'evaluationNote'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('evaluationNote', value, propertyContext);
}
;
function $getEvaluationNote(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$EvaluationStudentReportProxy).getEvaluationNote();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $isPublished(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$EvaluationStudentReportProxy).isPublished();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Boolean() , toReturn?TRUE_1:FALSE_1)), Q$Boolean).value_0;
  return toReturn;
}

function EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1503, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$EvaluationStudentReportProxy]), EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_46(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$EvaluationStudentReportProxy).equals$(o);
}
;
_.getEvaluationNote = function getEvaluationNote(){
  return $getEvaluationNote(this);
}
;
_.hashCode$ = function hashCode_46(){
  return dynamicCast($getWrapped(this.this$0), Q$EvaluationStudentReportProxy).hashCode$();
}
;
_.isPublished = function isPublished(){
  return $isPublished(this);
}
;
_.toString$ = function toString_33(){
  return dynamicCast($getWrapped(this.this$0), Q$EvaluationStudentReportProxy).toString$();
}
;
_.this$0 = null;
function EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1504, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$EvaluationStudentReportProxy]), EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_47(other){
  return equals_14(this.this$0, other);
}
;
_.getEvaluationNote = function getEvaluationNote_0(){
  return dynamicCast($getOrReify(this.this$0, 'evaluationNote'), Q$String);
}
;
_.hashCode$ = function hashCode_47(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.isPublished = function isPublished_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'published'), Q$Boolean);
  return !!toReturn && toReturn.value_0;
}
;
_.this$0 = null;
function $clinit_EvaluationStudentReportRequestFactoryImpl(){
  $clinit_EvaluationStudentReportRequestFactoryImpl = nullMethod;
  tokensToTypes_9 = new HashMap_0;
  typesToTokens_9 = new HashMap_0;
  entityProxyTypes_9 = new HashSet_0;
  valueProxyTypes_9 = new HashSet_0;
  tokensToTypes_9.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_9.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_20(entityProxyTypes_9, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_9.put('zDO6nJz4$8Dg$3a6A_gczL9R70U=', Lcom_lemania_sis_shared_EvaluationStudentReportProxy_2_classLit);
  typesToTokens_9.put(Lcom_lemania_sis_shared_EvaluationStudentReportProxy_2_classLit, 'zDO6nJz4$8Dg$3a6A_gczL9R70U=');
  $add_20(entityProxyTypes_9, Lcom_lemania_sis_shared_EvaluationStudentReportProxy_2_classLit);
}

function EvaluationStudentReportRequestFactoryImpl_0(){
  $clinit_EvaluationStudentReportRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1606, 639, {}, EvaluationStudentReportRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_9(){
  return 'com.lemania.sis.shared.service.EvaluationStudentReportRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_9(typeToken){
  return dynamicCast(tokensToTypes_9.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_13(type){
  return dynamicCast(typesToTokens_9.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_10(type){
  return $contains_1(entityProxyTypes_9, type);
}
;
_.isValueType = function isValueType_10(type){
  return $contains_1(valueProxyTypes_9, type);
}
;
var entityProxyTypes_9, tokensToTypes_9, typesToTokens_9, valueProxyTypes_9;
function $load(this$static, bulletinId, evaluationHeaderId){
  var x;
  x = new EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl$2X_0(this$static, bulletinId, evaluationHeaderId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1607, 649, makeCastMap([Q$AbstractRequestContext]), EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_9(){
  return !FACTORY_10 && (FACTORY_10 = new EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl_FactoryImpl_0) , FACTORY_10;
}
;
var FACTORY_10 = null;
function EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl$2X_0(this$0, val$bulletinId, val$evaluationHeaderId){
  this.val$bulletinId = val$bulletinId;
  this.val$evaluationHeaderId = val$evaluationHeaderId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1608, 648, makeCastMap([Q$AbstractRequest]), EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_43(){
  return new RequestData_0('KWtmJ462MBas1XNFHC_uRLgJfVA=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$bulletinId, this.val$evaluationHeaderId]), this.propertyRefs, Lcom_lemania_sis_shared_EvaluationStudentReportProxy_2_classLit, null);
}
;
_.val$bulletinId = null;
_.val$evaluationHeaderId = null;
function EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl$4X_0(this$0, val$bulletinId, val$evaluationHeaderId, val$commentaire){
  this.val$bulletinId = val$bulletinId;
  this.val$evaluationHeaderId = val$evaluationHeaderId;
  this.val$commentaire = val$commentaire;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1609, 648, makeCastMap([Q$AbstractRequest]), EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_44(){
  return new RequestData_0('wmCOemTRKPpGILtFSX3Plf1_GUM=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$bulletinId, this.val$evaluationHeaderId, this.val$commentaire]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$bulletinId = null;
_.val$commentaire = null;
_.val$evaluationHeaderId = null;
function $getConstructors_com_lemania_sis_shared_EvaluationStudentReportProxy(){
  return [function(factory){
    return new EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1610, 577, makeCastMap([Q$EnumMap]), EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_10(map){
  $add_15(map, Lcom_lemania_sis_shared_EvaluationStudentReportProxy_2_classLit, $getConstructors_com_lemania_sis_shared_EvaluationStudentReportProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_10(){
}
;
function EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$2X_0(this$0, val$classId, val$bulletinId, val$evaluationHeaderId){
  this.val$classId = val$classId;
  this.val$bulletinId = val$bulletinId;
  this.val$evaluationHeaderId = val$evaluationHeaderId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1613, 648, makeCastMap([Q$AbstractRequest]), EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_45(){
  return new RequestData_0('o68wJniv4IFPQgtXb3kL2iaY1gI=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$classId, this.val$bulletinId, this.val$evaluationHeaderId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_EvaluationSubjectProxy_2_classLit);
}
;
_.val$bulletinId = null;
_.val$classId = null;
_.val$evaluationHeaderId = null;
function $checkClassMasterRole(this$static, userId, profId){
  var x;
  x = new UserRequestFactory_UserRequestContextImpl$3X_0(this$static, userId, profId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function UserRequestFactory_UserRequestContextImpl$3X_0(this$0, val$userId, val$profId){
  this.val$userId = val$userId;
  this.val$profId = val$profId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1672, 648, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_78(){
  return new RequestData_0('fBVrULPRy0yVn2X9PifEMiaGEmM=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$userId, this.val$profId]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$profId = null;
_.val$userId = null;
var Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter', 918), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$1', 919), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$2', 920), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$3', 921), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$4', 922), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$5', 923), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$6', 924), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$7_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$7', 925), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$8_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$8', 926), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$9_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$9', 927), Lcom_lemania_sis_client_event_CheckClassMasterRoleEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'CheckClassMasterRoleEvent', 760), Lcom_lemania_sis_client_event_EvaluationStudentReportLoadEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'EvaluationStudentReportLoadEvent', 765), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenterMyProxyImpl$1', 929), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenterMyProxyImpl$1$1', 930), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenterMyProxyImpl$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenterMyProxyImpl$3', 933), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenterMyProxyImpl$3$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenterMyProxyImpl$3$1', 934), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView', 1271), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$1', 1272), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$2', 1273), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$3', 1274), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$4', 1275), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$5', 1276), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$6', 1277), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$7', 1278), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$8', 1279), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl', 1280), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets', 1281), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$1', 1282), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$2', 1283), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$3', 1284), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$4', 1285), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$5', 1286), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$6', 1287), Lcom_lemania_sis_shared_EvaluationStudentReportProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'EvaluationStudentReportProxy'), Lcom_lemania_sis_shared_service_EvaluationStudentReportRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationStudentReportRequestFactoryImpl', 1606), Lcom_lemania_sis_shared_service_EvaluationSubjectRequestFactory_1EvaluationSubjectRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$2X', 1613), Lcom_lemania_sis_shared_service_UserRequestFactory_1UserRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'UserRequestFactory_UserRequestContextImpl$3X', 1672), Lcom_lemania_sis_shared_service_EvaluationStudentReportRequestFactory_1EvaluationStudentReportRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl', 1607), Lcom_lemania_sis_shared_service_EvaluationStudentReportRequestFactory_1EvaluationStudentReportRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl$2X', 1608), Lcom_lemania_sis_shared_service_EvaluationStudentReportRequestFactory_1EvaluationStudentReportRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl$4X', 1609), Lcom_lemania_sis_shared_service_EvaluationStudentReportRequestFactory_1EvaluationStudentReportRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl_FactoryImpl', 1610), Lcom_lemania_sis_shared_EvaluationStudentReportProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1502), Lcom_lemania_sis_shared_EvaluationStudentReportProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1503), Lcom_lemania_sis_shared_EvaluationStudentReportProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1504);
$entry(onLoad)(15);