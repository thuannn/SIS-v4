function $redrawRow(this$static, absRowIndex){
  var relRowIndex;
  relRowIndex = absRowIndex - $getVisibleRange(this$static.presenter).start;
  $checkRowBounds(this$static, relRowIndex);
  $setRowData(this$static, absRowIndex, ($clinit_Collections() , new Collections$SingletonList_0(($checkRowBounds(this$static, relRowIndex) , $getVisibleItem(this$static.presenter, relRowIndex)))));
}

function $addAll(this$static, c){
  var toRet;
  this$static.minModified = min(this$static.minModified, this$static.list.size_1());
  toRet = this$static.list.addAll(c);
  this$static.maxModified = this$static.list.size_1();
  this$static.modified = true;
  $flush(this$static);
  return toRet;
}

defineSeed(551, 1, makeCastMap([Q$Iterable, Q$Collection, Q$List]));
_.addAll = function addAll(c){
  return $addAll(this, c);
}
;
function ProfileBrancheAfterAddEvent_0(profileSubjectId, lastPosition){
  $clinit_ProfileBrancheAfterAddEvent();
  this.subjectLastPosition = valueOf_1(-1);
  this.profileSubjectId = profileSubjectId;
  this.subjectLastPosition = lastPosition;
}

defineSeed(749, 231, {}, ProfileBrancheAfterAddEvent_0);
_.dispatch_0 = function dispatch_40(handler){
  dynamicCast(handler, Q$ProfileBrancheAfterAddEvent$ProfileBrancheAfterAddHandler).onProfileBrancheAfterAdd(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_41(){
  return TYPE_40;
}
;
_.profileSubjectId = '';
function $addBrancheToProfile(this$static, profileSubjectId, brancheId, brancheCoef, subjectLastPosition){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!profileSubjectId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Mati\xE8re');
    return;
  }
  if (!brancheId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Branche');
    return;
  }
  if (!$matches(brancheCoef, '-?\\d+(\\.\\d+)?')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient de la branche');
    return;
  }
  rf = new ProfileBrancheRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0(rf);
  $fire((x = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$8X_0(rc, profileSubjectId, brancheId, brancheCoef) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$8_0(this$static, profileSubjectId, subjectLastPosition));
}

function $addSubjectToProfile(this$static, profileId, subjectId, professorId, subjectCoef){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!profileId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Profil');
    return;
  }
  if (!subjectId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Mati\xE8re');
    return;
  }
  if (!$matches(subjectCoef, '-?\\d+(\\.\\d+)?')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient de la mati\xE8re');
    return;
  }
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  $fire((x = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$9X_0(rc, profileId, subjectId, professorId, subjectCoef) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$7_0(this$static));
}

function $createNewProfile(this$static, profileName, classId){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!profileName.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Nom du profil');
    return;
  }
  if (!classId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Classe');
    return;
  }
  rf = new ProfileRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileRequestFactory_ProfileRequestContextImpl_0(rf);
  $fire((x = new ProfileRequestFactory_ProfileRequestContextImpl$8X_0(rc, profileName, classId) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$5_0(this$static, classId));
}

function $loadProfessorList_0(this$static, subjectId, classId){
  var rc, rf;
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  $fire($listAllProfessorBySubject(rc, subjectId, classId), new ProfileManagementPresenter$6_0(this$static));
}

function $loadProfileList(this$static, classId){
  var rc, rf;
  rf = new ProfileRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileRequestFactory_ProfileRequestContextImpl_0(rf);
  $fire($listAllActiveByClass_0(rc, classId), new ProfileManagementPresenter$4_0(this$static));
}

function $onClassChanged_0(this$static, classId){
  if (!classId.length)
    return;
  $loadProfileList(this$static, classId);
}

function $onProfileBrancheAfterAdd(this$static, event_0){
  var rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  $fire($calculateTotalBrancheCoef(rc, event_0.profileSubjectId), new ProfileManagementPresenter$12_0(this$static, event_0));
}

function $onProfileChanged(this$static, profileId){
  var rc, rf, x;
  if (!profileId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Profil');
    return;
  }
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  $fire((x = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$4X_0(rc, profileId) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$9_0(this$static));
}

function $onSubjectSelected_1(this$static, profileSubjectId){
  var rc, rf, x;
  if (!profileSubjectId.length) {
    alert_0(($clinit_NotificationTypes() , 'Merci de choisir une mati\xE8re.'));
    return;
  }
  rf = new ProfileBrancheRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0(rf);
  $fire((x = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$3X_0(rc, profileSubjectId) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$11_0(this$static));
}

function $removeBranche_0(this$static, bp, profileSubjectId, subjectLastPosition){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new ProfileBrancheRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0(rf);
  $fire((x = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$5X_0(rc, bp) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$13_0(this$static, profileSubjectId, subjectLastPosition));
}

function $removeSubject_0(this$static, ps){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  $fire((x = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$6X_0(rc, ps) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$14_0(this$static));
}

function $updateProfileBranche(this$static, pb, coef, profileSubjectId, lastPosition){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!$matches(coef, '-?\\d+(\\.\\d+)?')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient de la branche');
    return;
  }
  if (pb.getBrancheCoef().value_0 == ($clinit_Double() , __parseAndValidateDouble(coef)))
    return;
  rf = new ProfileBrancheRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0(rf);
  pb = dynamicCast($editProxy(rc, pb), Q$ProfileBrancheProxy);
  pb.setBrancheCoef(new Double_0(__parseAndValidateDouble(coef)));
  $fire((x = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$7X_0(rc, pb) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$15_0(this$static, profileSubjectId, lastPosition));
}

function $updateProfileSubject(this$static, ps, coef, isActive, lastPosition){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!$matches(coef, '-?\\d+(\\.\\d+)?')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient de la mati\xE8re');
    return;
  }
  if (ps.getSubjectCoef().value_0 == ($clinit_Double() , __parseAndValidateDouble(coef)))
    if ($equals_3(ps.getIsActive(), isActive))
      return;
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  ps = dynamicCast($editProxy(rc, ps), Q$ProfileSubjectProxy);
  ps.setSubjectCoef(new Double_0(__parseAndValidateDouble(coef)));
  ps.setIsActive(isActive);
  $fire((x = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$8X_0(rc, ps) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$10_0(this$static, lastPosition));
}

function ProfileManagementPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(937, 689, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfileBrancheAfterAddEvent$ProfileBrancheAfterAddHandler, Q$ProfileManagementPresenter, Q$ProfileManagementUiHandler]), ProfileManagementPresenter_0);
_.onBind = function onBind_20(){
  dynamicCast(this.view, Q$ProfileManagementPresenter$MyView).setUiHandlers(this);
  $initializeTables_1(dynamicCast(this.view, Q$ProfileManagementPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_39(event_0){
  this.currentUser = event_0.currentUser;
  dynamicCast(this.view, Q$ProfileManagementPresenter$MyView);
}
;
_.onProfileBrancheAfterAdd = function onProfileBrancheAfterAdd(event_0){
  $onProfileBrancheAfterAdd(this, event_0);
}
;
_.onReset = function onReset_19(){
  var rf, rc, rf_0, rc_0, rf_1, rc_1;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('profilemgt'), null);
  $resetForm_9(dynamicCast(this.view, Q$ProfileManagementPresenter$MyView));
  rf = new ClasseRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAllActive(rc), new ProfileManagementPresenter$1_0(this));
  rf_0 = new SubjectRequestFactoryImpl_0;
  $initialize_0(rf_0, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc_0 = new SubjectRequestFactory_SubjectRequestContextImpl_0(rf_0);
  $fire($listAllActive_2(rc_0), new ProfileManagementPresenter$3_0(this));
  rf_1 = new BrancheRequestFactoryImpl_0;
  $initialize_0(rf_1, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc_1 = new BrancheRequestFactory_BrancheRequestContextImpl_0(rf_1);
  $fire($listAll_0(rc_1), new ProfileManagementPresenter$2_0(this));
}
;
_.revealInParent = function revealInParent_19(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_68(this$static, response){
  $setClassList(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(938, 628, makeCastMap([Q$Receiver]), ProfileManagementPresenter$1_0);
_.onFailure_0 = function onFailure_69(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_69(response){
  $onSuccess_68(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_69(this$static, response){
  $showUpdatedProfileSubject(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response, this$static.val$lastPosition);
}

function ProfileManagementPresenter$10_0(this$0, val$lastPosition){
  this.this$0 = this$0;
  this.val$lastPosition = val$lastPosition;
}

defineSeed(939, 628, makeCastMap([Q$Receiver]), ProfileManagementPresenter$10_0);
_.onFailure_0 = function onFailure_70(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_70(response){
  $onSuccess_69(this, dynamicCast(response, Q$ProfileSubjectProxy));
}
;
_.this$0 = null;
_.val$lastPosition = null;
function $onSuccess_70(this$static, response){
  $setBrancheTableData_0(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$11_0(this$0){
  this.this$0 = this$0;
}

defineSeed(940, 628, makeCastMap([Q$Receiver]), ProfileManagementPresenter$11_0);
_.onFailure_0 = function onFailure_71(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_71(response){
  $onSuccess_70(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_71(this$static, response){
  $showUpdatedProfileSubject(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response, this$static.val$event.subjectLastPosition);
}

function ProfileManagementPresenter$12_0(this$0, val$event){
  this.this$0 = this$0;
  this.val$event = val$event;
}

defineSeed(941, 628, makeCastMap([Q$Receiver]), ProfileManagementPresenter$12_0);
_.onFailure_0 = function onFailure_72(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_72(response){
  $onSuccess_71(this, dynamicCast(response, Q$ProfileSubjectProxy));
}
;
_.this$0 = null;
_.val$event = null;
function $onSuccess_72(this$static){
  $doFire(this$static.this$0.eventBus, new ProfileBrancheAfterAddEvent_0(this$static.val$profileSubjectId, this$static.val$subjectLastPosition), null);
  $removeProfileBrancheFromTable(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView));
}

function ProfileManagementPresenter$13_0(this$0, val$profileSubjectId, val$subjectLastPosition){
  this.this$0 = this$0;
  this.val$profileSubjectId = val$profileSubjectId;
  this.val$subjectLastPosition = val$subjectLastPosition;
}

defineSeed(942, 628, makeCastMap([Q$Receiver]), ProfileManagementPresenter$13_0);
_.onFailure_0 = function onFailure_73(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_73(response){
  $onSuccess_72(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
_.val$profileSubjectId = null;
_.val$subjectLastPosition = null;
function $onSuccess_73(this$static, deleted){
  deleted.value_0?$removeProfileSubjectFromTable(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView)):alert_0(($clinit_NotificationTypes() , 'Merci de supprimer toutes les branches de cette mati\xE8re avant la supprimer.'));
}

function ProfileManagementPresenter$14_0(this$0){
  this.this$0 = this$0;
}

defineSeed(943, 628, makeCastMap([Q$Receiver]), ProfileManagementPresenter$14_0);
_.onFailure_0 = function onFailure_74(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_74(deleted){
  $onSuccess_73(this, dynamicCast(deleted, Q$Boolean));
}
;
_.this$0 = null;
function $onSuccess_74(this$static, response){
  $doFire(this$static.this$0.eventBus, new ProfileBrancheAfterAddEvent_0(this$static.val$profileSubjectId, this$static.val$lastPosition), null);
  $showUpdatedProfileBranche(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$15_0(this$0, val$profileSubjectId, val$lastPosition){
  this.this$0 = this$0;
  this.val$profileSubjectId = val$profileSubjectId;
  this.val$lastPosition = val$lastPosition;
}

defineSeed(944, 628, makeCastMap([Q$Receiver]), ProfileManagementPresenter$15_0);
_.onFailure_0 = function onFailure_75(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_75(response){
  $onSuccess_74(this, dynamicCast(response, Q$ProfileBrancheProxy));
}
;
_.this$0 = null;
_.val$lastPosition = null;
_.val$profileSubjectId = null;
function $onSuccess_75(this$static, response){
  $setBrancheListData_0(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(945, 628, makeCastMap([Q$Receiver]), ProfileManagementPresenter$2_0);
_.onFailure_0 = function onFailure_76(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_76(response){
  $onSuccess_75(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_76(this$static, response){
  $setSubjectListData_1(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(946, 628, makeCastMap([Q$Receiver]), ProfileManagementPresenter$3_0);
_.onFailure_0 = function onFailure_77(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_77(response){
  $onSuccess_76(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_77(this$static, response){
  $setProfileListData_0(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(947, 628, makeCastMap([Q$Receiver]), ProfileManagementPresenter$4_0);
_.onFailure_0 = function onFailure_78(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_78(response){
  $onSuccess_77(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_78(this$static){
  $resetForm_9(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView));
  $loadProfileList(this$static.this$0, this$static.val$classId);
}

function ProfileManagementPresenter$5_0(this$0, val$classId){
  this.this$0 = this$0;
  this.val$classId = val$classId;
}

defineSeed(948, 628, makeCastMap([Q$Receiver]), ProfileManagementPresenter$5_0);
_.onFailure_0 = function onFailure_79(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_79(response){
  $onSuccess_78(this, dynamicCast(response, Q$ProfileProxy));
}
;
_.this$0 = null;
_.val$classId = null;
function $onSuccess_79(this$static, response){
  $setProfessorListData_0(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(949, 628, makeCastMap([Q$Receiver]), ProfileManagementPresenter$6_0);
_.onFailure_0 = function onFailure_80(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_80(response){
  $onSuccess_79(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_80(this$static, response){
  $addNewProfileSubjectToTable(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(950, 628, makeCastMap([Q$Receiver]), ProfileManagementPresenter$7_0);
_.onFailure_0 = function onFailure_81(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_81(response){
  $onSuccess_80(this, dynamicCast(response, Q$ProfileSubjectProxy));
}
;
_.this$0 = null;
function $onSuccess_81(this$static, response){
  $doFire(this$static.this$0.eventBus, new ProfileBrancheAfterAddEvent_0(this$static.val$profileSubjectId, this$static.val$subjectLastPosition), null);
  $addNewProfileBrancheToTable(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$8_0(this$0, val$profileSubjectId, val$subjectLastPosition){
  this.this$0 = this$0;
  this.val$profileSubjectId = val$profileSubjectId;
  this.val$subjectLastPosition = val$subjectLastPosition;
}

defineSeed(951, 628, makeCastMap([Q$Receiver]), ProfileManagementPresenter$8_0);
_.onFailure_0 = function onFailure_82(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_82(response){
  $onSuccess_81(this, dynamicCast(response, Q$ProfileBrancheProxy));
}
;
_.this$0 = null;
_.val$profileSubjectId = null;
_.val$subjectLastPosition = null;
function $onSuccess_82(this$static, response){
  $setSubjectTableData(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(952, 628, makeCastMap([Q$Receiver]), ProfileManagementPresenter$9_0);
_.onFailure_0 = function onFailure_83(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_83(response){
  $onSuccess_82(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
defineSeed(953, 720, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfileBrancheAfterAddEvent$ProfileBrancheAfterAddHandler]));
_.onProfileBrancheAfterAdd = function onProfileBrancheAfterAdd_0(event_0){
  $getPresenter_0(this, new ProfileManagementPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
function $success_27(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new ProfileManagementPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function ProfileManagementPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(954, 702, {}, ProfileManagementPresenterMyProxyImpl$1_0);
_.success = function success_29(presenter){
  $success_27(this, dynamicCast(presenter, Q$ProfileManagementPresenter));
}
;
_.val$event = null;
function ProfileManagementPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(955, 1, {}, ProfileManagementPresenterMyProxyImpl$1$1_0);
_.execute_0 = function execute_56(){
  $onProfileBrancheAfterAdd(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $get_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$_annotation$$none$$) {
    result = new ProfileManagementPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$_annotation$$none$$;
}

defineSeed(1044, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_121(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $addNewProfileBrancheToTable(this$static, branche){
  $add_14(this$static.brancheDataProvider.listWrapper, branche);
  $refresh(this$static.brancheDataProvider);
  $setHeight(this$static.tblBranches, '' + (($clinit_NotificationTypes() , lineHeightShortList).value_0 * this$static.brancheDataProvider.listWrapper.list.size_1() + headerHeight.value_0) + 'px');
}

function $addNewProfileSubjectToTable(this$static, profileSubject){
  $add_14(this$static.subjectDataProvider.listWrapper, profileSubject);
  $refresh(this$static.subjectDataProvider);
  $setHeight(this$static.tblSubjects, '' + (($clinit_NotificationTypes() , lineHeightShortList).value_0 * this$static.subjectDataProvider.listWrapper.list.size_1() + headerHeight.value_0) + 'px');
}

function $initializeTables_1(this$static){
  var colSubjectName, colCoef, colProf, cellActive, colActive, colTotalBrancheCoef, colDelete, selectionModel, colBrancheName, colCoef_0, colDelete_0;
  colSubjectName = new ProfileManagementView$1_0;
  $setColumnWidth_0(this$static.tblSubjects, colSubjectName, 30 + ($clinit_Style$Unit() , '%'));
  $addColumn(this$static.tblSubjects, colSubjectName, 'Mati\xE8re');
  colCoef = new ProfileManagementView$2_0(new EditTextCell_0);
  $setFieldUpdater(colCoef, new ProfileManagementView$3_0(this$static));
  $setColumnWidth_0(this$static.tblSubjects, colCoef, '10%');
  $addColumn(this$static.tblSubjects, colCoef, 'Coefficient');
  colProf = new ProfileManagementView$4_0;
  $addColumn(this$static.tblSubjects, colProf, 'Professeur');
  cellActive = new CheckboxCell_0;
  colActive = new ProfileManagementView$5_0(cellActive);
  $setFieldUpdater(colActive, new ProfileManagementView$6_0(this$static));
  $setColumnWidth_0(this$static.tblSubjects, colActive, '10%');
  $addColumn(this$static.tblSubjects, colActive, 'Active');
  colTotalBrancheCoef = new ProfileManagementView$7_0;
  $setColumnWidth_0(this$static.tblSubjects, colTotalBrancheCoef, '10%');
  $addColumn(this$static.tblSubjects, colTotalBrancheCoef, 'Branche Coefs');
  colDelete = new ProfileManagementView$8_0(new ButtonCell_0);
  $setFieldUpdater(colDelete, new ProfileManagementView$9_0(this$static));
  $setColumnWidth_0(this$static.tblSubjects, colDelete, '10%');
  $addColumn(this$static.tblSubjects, colDelete, '');
  $addDataDisplay(this$static.subjectDataProvider, this$static.tblSubjects);
  selectionModel = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblSubjects, selectionModel);
  $addSelectionChangeHandler(selectionModel, new ProfileManagementView$10_0(this$static, selectionModel));
  colBrancheName = new ProfileManagementView$11_0;
  $setColumnWidth_0(this$static.tblBranches, colBrancheName, '60%');
  $addColumn(this$static.tblBranches, colBrancheName, 'Branche');
  colCoef_0 = new ProfileManagementView$12_0(new EditTextCell_0);
  $setFieldUpdater(colCoef_0, new ProfileManagementView$13_0(this$static));
  $setColumnWidth_0(this$static.tblBranches, colCoef_0, '20%');
  $addColumn(this$static.tblBranches, colCoef_0, 'Coefficient');
  colDelete_0 = new ProfileManagementView$14_0(new ButtonCell_0);
  $setFieldUpdater(colDelete_0, new ProfileManagementView$15_0(this$static));
  $setColumnWidth_0(this$static.tblBranches, colDelete_0, '20%');
  $addColumn(this$static.tblBranches, colDelete_0, '');
  $addDataDisplay(this$static.brancheDataProvider, this$static.tblBranches);
}

function $onCmdAddBrancheClick_0(this$static){
  if (!this$static.selectedSubject) {
    alert_0(($clinit_NotificationTypes() , 'Merci de choisir une mati\xE8re.'));
    return;
  }
  !!this$static.uiHandlers && !!this$static.selectedSubject && $addBrancheToProfile(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), '' + toString_6(this$static.selectedSubject.getId_0().value_0), $getValue_1(this$static.lstBranches, this$static.lstBranches.element.selectedIndex), $getPropertyString(this$static.txtBrancheCoef.element, 'value'), valueOf_1(this$static.selectedSubjectIndex));
}

function $onCmdAddSubjectClick_0(this$static){
  !!this$static.uiHandlers && $addSubjectToProfile(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getValue_1(this$static.lstProfiles, this$static.lstProfiles.element.selectedIndex), $getValue_1(this$static.lstSubjects, this$static.lstSubjects.element.selectedIndex), $getValue_1(this$static.lstProfessors, this$static.lstProfessors.element.selectedIndex), $getPropertyString(this$static.txtSubjectCoef.element, 'value'));
}

function $onCmdCreateNewProfileClick(this$static){
  $setText(this$static.txtNewProfileName, '');
  $setVisible_0(this$static.pnlAddNewProfile, true);
}

function $onCmdSaveNewProfileClick(this$static){
  !!this$static.uiHandlers && $createNewProfile(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getPropertyString(this$static.txtNewProfileName.element, 'value'), $getValue_1(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $onLstClassesChange_3(this$static){
  $setSelected_0(this$static.tblSubjects.presenter.selectionModel, this$static.selectedSubject, false);
  $clear_3(this$static.subjectDataProvider.listWrapper);
  $clear_3(this$static.brancheDataProvider.listWrapper);
  !!this$static.uiHandlers && $onClassChanged_0(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getValue_1(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $onLstProfilesChange(this$static){
  $setSelected_0(this$static.tblSubjects.presenter.selectionModel, this$static.selectedSubject, false);
  $clear_3(this$static.subjectDataProvider.listWrapper);
  $clear_3(this$static.brancheDataProvider.listWrapper);
  !!this$static.uiHandlers && $onProfileChanged(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getValue_1(this$static.lstProfiles, this$static.lstProfiles.element.selectedIndex));
}

function $onLstSubjectsChange_0(this$static){
  !!this$static.uiHandlers && $loadProfessorList_0(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getValue_1(this$static.lstSubjects, this$static.lstSubjects.element.selectedIndex), $getValue_1(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $removeProfileBrancheFromTable(this$static){
  $remove_12(this$static.brancheDataProvider.listWrapper, this$static.selectedBrancheIndex);
  $refresh(this$static.brancheDataProvider);
}

function $removeProfileSubjectFromTable(this$static){
  $remove_12(this$static.subjectDataProvider.listWrapper, this$static.selectedSubjectIndex);
  $refresh(this$static.subjectDataProvider);
}

function $resetForm_9(this$static){
  $setVisible_0(this$static.pnlAddNewProfile, false);
  $clear_3(this$static.subjectDataProvider.listWrapper);
  $clear_3(this$static.brancheDataProvider.listWrapper);
  $selectClear(this$static.lstProfiles.element);
  $selectClear(this$static.lstSubjects.element);
  $selectClear(this$static.lstProfessors.element);
  $selectClear(this$static.lstBranches.element);
  $setText(this$static.txtSubjectCoef, '');
  $setText(this$static.txtBrancheCoef, '');
}

function $setBrancheListData_0(this$static, brancheList){
  var branche, branche$iterator;
  $selectClear(this$static.lstBranches.element);
  $insertItem(this$static.lstBranches, '-', '', -1);
  for (branche$iterator = brancheList.iterator(); branche$iterator.hasNext();) {
    branche = dynamicCast(branche$iterator.next_0(), Q$BrancheProxy);
    $insertItem(this$static.lstBranches, branche.getBrancheName(), '' + toString_6(branche.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstBranches, 0);
}

function $setBrancheTableData_0(this$static, branches){
  $clear_3(this$static.brancheDataProvider.listWrapper);
  $setList(this$static.brancheDataProvider, branches);
  $setHeight(this$static.tblBranches, '' + (($clinit_NotificationTypes() , lineHeightShortList).value_0 * branches.size_1() + headerHeight.value_0) + 'px');
}

function $setClassList(this$static, classes){
  var classe, classe$iterator;
  $selectClear(this$static.lstClasses.element);
  $insertItem(this$static.lstClasses, '-', '', -1);
  for (classe$iterator = classes.iterator(); classe$iterator.hasNext();) {
    classe = dynamicCast(classe$iterator.next_0(), Q$ClasseProxy);
    $insertItem(this$static.lstClasses, classe.getClassName(), '' + toString_6(classe.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstClasses, 0);
}

function $setProfessorListData_0(this$static, profs){
  var prof, prof$iterator;
  $selectClear(this$static.lstProfessors.element);
  $insertItem(this$static.lstProfessors, '-', '', -1);
  for (prof$iterator = profs.iterator(); prof$iterator.hasNext();) {
    prof = dynamicCast(prof$iterator.next_0(), Q$ProfessorProxy);
    $insertItem(this$static.lstProfessors, prof.getProfName(), '' + toString_6(prof.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstProfessors, 0);
}

function $setProfileListData_0(this$static, profiles){
  var profile, profile$iterator;
  $selectClear(this$static.lstProfiles.element);
  $insertItem(this$static.lstProfiles, '-', '', -1);
  for (profile$iterator = profiles.iterator(); profile$iterator.hasNext();) {
    profile = dynamicCast(profile$iterator.next_0(), Q$ProfileProxy);
    $insertItem(this$static.lstProfiles, profile.getProfileName(), '' + toString_6(profile.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstProfiles, 0);
}

function $setSubjectListData_1(this$static, subjectList){
  var subject, subject$iterator;
  $selectClear(this$static.lstSubjects.element);
  $insertItem(this$static.lstSubjects, '-', '', -1);
  for (subject$iterator = subjectList.iterator(); subject$iterator.hasNext();) {
    subject = dynamicCast(subject$iterator.next_0(), Q$SubjectProxy);
    $insertItem(this$static.lstSubjects, subject.getSubjectName(), '' + toString_6(subject.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstSubjects, 0);
}

function $setSubjectTableData(this$static, subjects){
  $clear_3(this$static.subjectDataProvider.listWrapper);
  $addAll(this$static.subjectDataProvider.listWrapper, subjects);
  $flushNow(this$static.subjectDataProvider.listWrapper);
  $refresh(this$static.subjectDataProvider);
  $ensurePendingState(this$static.tblSubjects.presenter).redrawRequired = true;
  $setHeight(this$static.tblSubjects, '' + (($clinit_NotificationTypes() , lineHeightShortList).value_0 * subjects.size_1() + headerHeight.value_0) + 'px');
}

function $showUpdatedProfileBranche(this$static, pb){
  $set_1(this$static.brancheDataProvider.listWrapper, this$static.selectedBrancheIndex, pb);
}

function $showUpdatedProfileSubject(this$static, ps, subjectLastIndex){
  $set_1(this$static.subjectDataProvider.listWrapper, subjectLastIndex.value_0, ps);
}

function ProfileManagementView_0(){
  this.subjectDataProvider = new ListDataProvider_0;
  this.brancheDataProvider = new ListDataProvider_0;
  this.tblSubjects = new DataGrid_0;
  this.tblBranches = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_17(new ProfileManagementView_BinderImpl$Widgets_0(this));
}

defineSeed(1254, 694, makeCastMap([Q$IsWidget, Q$ProfileManagementPresenter$MyView]), ProfileManagementView_0);
_.asWidget = function asWidget_22(){
  return this.widget;
}
;
_.lstBranches = null;
_.lstClasses = null;
_.lstProfessors = null;
_.lstProfiles = null;
_.lstSubjects = null;
_.pnlAddNewProfile = null;
_.selectedBrancheIndex = 0;
_.selectedSubject = null;
_.selectedSubjectIndex = 0;
_.txtBrancheCoef = null;
_.txtNewProfileName = null;
_.txtSubjectCoef = null;
_.widget = null;
function ProfileManagementView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1255, 385, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$1_0);
_.getValue = function getValue_42(object){
  return dynamicCast(object, Q$ProfileSubjectProxy).getSubjectName();
}
;
function ProfileManagementView$10_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1256, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), ProfileManagementView$10_0);
_.onSelectionChange = function onSelectionChange_5(event_0){
  this.this$0.selectedSubject = dynamicCast($getSelectedObject(this.val$selectionModel), Q$ProfileSubjectProxy);
  if (this.this$0.selectedSubject) {
    this.this$0.selectedSubjectIndex = $indexOf_0(this.this$0.subjectDataProvider.listWrapper, this.this$0.selectedSubject);
    $onSubjectSelected_1(dynamicCast(this.this$0.uiHandlers, Q$ProfileManagementUiHandler), '' + toString_6(this.this$0.selectedSubject.getId_0().value_0));
    $redrawRow(this.this$0.tblSubjects, this.this$0.selectedSubjectIndex);
  }
}
;
_.this$0 = null;
_.val$selectionModel = null;
function ProfileManagementView$11_0(){
  TextColumn_0.call(this);
}

defineSeed(1257, 385, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$11_0);
_.getValue = function getValue_43(object){
  return dynamicCast(object, Q$ProfileBrancheProxy).getProfileBrancheName();
}
;
function $getValue_9(object){
  return $clinit_Double() , '' + object.getBrancheCoef().value_0;
}

function ProfileManagementView$12_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1258, 359, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$12_0);
_.getValue = function getValue_44(object){
  return $getValue_9(dynamicCast(object, Q$ProfileBrancheProxy));
}
;
function $update_16(this$static, index, branche, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedBrancheIndex = index;
    $updateProfileBranche(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), branche, value, '' + toString_6(this$static.this$0.selectedSubject.getId_0().value_0), valueOf_1(this$static.this$0.selectedSubjectIndex));
  }
}

function ProfileManagementView$13_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1259, 1, {}, ProfileManagementView$13_0);
_.update = function update_17(index, branche, value){
  $update_16(this, index, dynamicCast(branche, Q$ProfileBrancheProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function ProfileManagementView$14_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1260, 359, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$14_0);
_.getValue = function getValue_45(bp){
  return dynamicCast(bp, Q$ProfileBrancheProxy) , 'X';
}
;
function $update_17(this$static, index, bp){
  this$static.this$0.selectedBrancheIndex = index;
  $removeBranche_0(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), bp, '' + toString_6(this$static.this$0.selectedSubject.getId_0().value_0), valueOf_1(this$static.this$0.selectedSubjectIndex));
}

function ProfileManagementView$15_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1261, 1, {}, ProfileManagementView$15_0);
_.update = function update_18(index, bp, value){
  $update_17(this, index, dynamicCast(bp, Q$ProfileBrancheProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function $getValue_10(object){
  return $clinit_Double() , '' + object.getSubjectCoef().value_0;
}

function ProfileManagementView$2_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1262, 359, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$2_0);
_.getValue = function getValue_46(object){
  return $getValue_10(dynamicCast(object, Q$ProfileSubjectProxy));
}
;
function $update_18(this$static, index, subject, value){
  if (!subject.equals$(this$static.this$0.selectedSubject))
    return;
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedSubjectIndex = index;
    $updateProfileSubject(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), subject, value, subject.getIsActive(), valueOf_1(this$static.this$0.selectedSubjectIndex));
  }
}

function ProfileManagementView$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1263, 1, {}, ProfileManagementView$3_0);
_.update = function update_19(index, subject, value){
  $update_18(this, index, dynamicCast(subject, Q$ProfileSubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function ProfileManagementView$4_0(){
  TextColumn_0.call(this);
}

defineSeed(1264, 385, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$4_0);
_.getValue = function getValue_47(object){
  return dynamicCast(object, Q$ProfileSubjectProxy).getProfName();
}
;
function ProfileManagementView$5_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1265, 359, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$5_0);
_.getValue = function getValue_48(subject){
  return dynamicCast(subject, Q$ProfileSubjectProxy).getIsActive();
}
;
function $update_19(this$static, index, subject, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedSubjectIndex = index;
    $updateProfileSubject(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), subject, ($clinit_Double() , '' + subject.getSubjectCoef().value_0), value, valueOf_1(this$static.this$0.selectedSubjectIndex));
  }
}

function ProfileManagementView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1266, 1, {}, ProfileManagementView$6_0);
_.update = function update_20(index, subject, value){
  $update_19(this, index, dynamicCast(subject, Q$ProfileSubjectProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function $getValue_11(object){
  return $clinit_Double() , '' + object.getTotalBrancheCoef().value_0;
}

function ProfileManagementView$7_0(){
  TextColumn_0.call(this);
}

defineSeed(1267, 385, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$7_0);
_.getValue = function getValue_49(object){
  return $getValue_11(dynamicCast(object, Q$ProfileSubjectProxy));
}
;
function ProfileManagementView$8_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1268, 359, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$8_0);
_.getValue = function getValue_50(bp){
  return dynamicCast(bp, Q$ProfileSubjectProxy) , 'X';
}
;
function $update_20(this$static, index, ps){
  this$static.this$0.selectedSubjectIndex = index;
  $removeSubject_0(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), ps);
}

function ProfileManagementView$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1269, 1, {}, ProfileManagementView$9_0);
_.update = function update_21(index, ps, value){
  $update_20(this, index, dynamicCast(ps, Q$ProfileSubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function ProfileManagementView_BinderImpl_0(){
}

defineSeed(1270, 1, {}, ProfileManagementView_BinderImpl_0);
function $build_f_HTMLPanel1_17(this$static){
  var attachRecord17, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_VerticalPanel4, f_Grid5, f_Label6, lstClasses, f_Label7, lstProfiles, cmdCreateNewProfile, pnlAddNewProfile, f_Grid8, f_VerticalPanel9, f_VerticalPanel18, txtNewProfileName, cmdSaveNewProfile, f_Label10, tblSubjects, f_VerticalPanel11, f_Label12, f_Grid13, f_Label14, lstSubjects, f_Label15, txtSubjectCoef, f_Label16, lstProfessors, f_Label17, cmdAddSubject, f_Label19, tblBranches, f_VerticalPanel20, f_Label21, f_Grid22, f_Label23, lstBranches, f_Label24, txtBrancheCoef, f_Label25, cmdAddBranche, f_Label26;
  f_HTMLPanel1 = new HTMLPanel_0($html1_14(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord17 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord17.origParent?$insertBefore(attachRecord17.origParent, attachRecord17.element, attachRecord17.origSibling):orphan(attachRecord17.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'GESTION DES PROGRAMMES / CLASSES', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_VerticalPanel4 = new VerticalPanel_0 , $add_11(f_VerticalPanel4, (f_Grid5 = new Grid_0 , $resizeColumns(f_Grid5, 4) , $resizeRows(f_Grid5, 2) , $setWidget_1(f_Grid5, 0, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Chosir une classe :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid5, 0, 1, (lstClasses = new ListBox_0 , lstClasses.element['className'] = 'sis_textbox' , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstClasses = lstClasses , lstClasses)) , $setWidget_1(f_Grid5, 1, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Liste des programmes de la classe choisie :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid5, 1, 1, (lstProfiles = new ListBox_0 , lstProfiles.element['className'] = 'sis_textbox' , $addDomHandler(lstProfiles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, TYPE) , this$static.owner.lstProfiles = lstProfiles , lstProfiles)) , $setWidget_1(f_Grid5, 1, 2, (cmdCreateNewProfile = new Button_0 , $setInnerText(cmdCreateNewProfile.element, 'Cr\xE9er un nouveau programme') , $addDomHandler(cmdCreateNewProfile, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdCreateNewProfile)) , $setWidget_1(f_Grid5, 1, 3, (pnlAddNewProfile = new FlowPanel_0 , $add_7(pnlAddNewProfile, (txtNewProfileName = new TextBox_0 , this$static.owner.txtNewProfileName = txtNewProfileName , txtNewProfileName)) , $add_7(pnlAddNewProfile, (cmdSaveNewProfile = new Button_0 , $setInnerText(cmdSaveNewProfile.element, 'Enregistrer') , $addDomHandler(cmdSaveNewProfile, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , cmdSaveNewProfile)) , setVisible(pnlAddNewProfile.element, false) , this$static.owner.pnlAddNewProfile = pnlAddNewProfile , pnlAddNewProfile)) , f_Grid5.tableElem['cellSpacing'] = 2 , f_Grid5.tableElem['cellPadding'] = 3 , f_Grid5)) , $add_11(f_VerticalPanel4, (f_Grid8 = new Grid_0 , $resizeColumns(f_Grid8, 2) , $resizeRows(f_Grid8, 1) , $setWidget_1(f_Grid8, 0, 0, (f_VerticalPanel9 = new VerticalPanel_0 , $add_11(f_VerticalPanel9, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label10.directionalTextHelper, 'Liste des mati\xE8re du programme choisi', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $add_11(f_VerticalPanel9, (tblSubjects = this$static.owner.tblSubjects , tblSubjects.element.style['height'] = '350px' , tblSubjects.element.style['width'] = '100%' , tblSubjects)) , $add_11(f_VerticalPanel9, (f_VerticalPanel11 = new VerticalPanel_0 , $add_11(f_VerticalPanel11, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label12.directionalTextHelper, 'Rajouter une mati\xE8re', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $add_11(f_VerticalPanel11, (f_Grid13 = new Grid_0 , $resizeColumns(f_Grid13, 4) , $resizeRows(f_Grid13, 3) , $setWidget_1(f_Grid13, 0, 0, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, 'Mati\xE8re :', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_1(f_Grid13, 0, 1, (lstSubjects = new ListBox_0 , lstSubjects.element['className'] = 'sis_textbox' , lstSubjects.element.style['width'] = '' , $addDomHandler(lstSubjects, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this$static.owner.lstSubjects = lstSubjects , lstSubjects)) , $setWidget_1(f_Grid13, 0, 2, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'Coefficient :', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_1(f_Grid13, 0, 3, (txtSubjectCoef = new DoubleBox_0 , txtSubjectCoef.element.style['width'] = '50px' , this$static.owner.txtSubjectCoef = txtSubjectCoef , txtSubjectCoef)) , $setWidget_1(f_Grid13, 1, 0, (f_Label16 = new Label_0 , $setTextOrHtml(f_Label16.directionalTextHelper, 'Professeur :', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $setWidget_1(f_Grid13, 1, 1, (lstProfessors = new ListBox_0 , lstProfessors.element['className'] = 'sis_textbox' , lstProfessors.element.style['width'] = '' , this$static.owner.lstProfessors = lstProfessors , lstProfessors)) , $setWidget_1(f_Grid13, 2, 0, (f_Label17 = new Label_0 , f_Label17.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label17.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $setWidget_1(f_Grid13, 2, 1, (cmdAddSubject = new Button_0 , $setInnerText(cmdAddSubject.element, 'Ajouter la mati\xE8re') , $addDomHandler(cmdAddSubject, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_0) , cmdAddSubject)) , f_Grid13.element.style['width'] = '' , f_Grid13.tableElem['cellSpacing'] = 5 , f_Grid13.tableElem['cellPadding'] = 5 , f_Grid13)) , f_VerticalPanel11.element.style['width'] = '100%' , f_VerticalPanel11.table['cellSpacing'] = 2 , f_VerticalPanel11)) , f_VerticalPanel9.element['className'] = 'subSection' , f_VerticalPanel9.element.style['width'] = '100%' , f_VerticalPanel9.table['cellSpacing'] = 2 , f_VerticalPanel9)) , $setWidget_1(f_Grid8, 0, 1, (f_VerticalPanel18 = new VerticalPanel_0 , $add_11(f_VerticalPanel18, (f_Label19 = new Label_0 , f_Label19.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label19.directionalTextHelper, 'Liste des branches de la mati\xE8re choisie', false) , $updateHorizontalAlignment(f_Label19) , f_Label19)) , $add_11(f_VerticalPanel18, (tblBranches = this$static.owner.tblBranches , tblBranches.element.style['height'] = '250px' , tblBranches.element.style['width'] = '100%' , tblBranches)) , $add_11(f_VerticalPanel18, (f_VerticalPanel20 = new VerticalPanel_0 , $add_11(f_VerticalPanel20, (f_Label21 = new Label_0 , f_Label21.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label21.directionalTextHelper, 'Rajouter une branche', false) , $updateHorizontalAlignment(f_Label21) , f_Label21.element.style['width'] = '' , f_Label21)) , $add_11(f_VerticalPanel20, (f_Grid22 = new Grid_0 , $resizeColumns(f_Grid22, 4) , $resizeRows(f_Grid22, 2) , $setWidget_1(f_Grid22, 0, 0, (f_Label23 = new Label_0 , $setTextOrHtml(f_Label23.directionalTextHelper, 'Branche :', false) , $updateHorizontalAlignment(f_Label23) , f_Label23)) , $setWidget_1(f_Grid22, 0, 1, (lstBranches = new ListBox_0 , lstBranches.element['className'] = 'sis_textbox' , lstBranches.element.style['width'] = '200px' , this$static.owner.lstBranches = lstBranches , lstBranches)) , $setWidget_1(f_Grid22, 0, 2, (f_Label24 = new Label_0 , $setTextOrHtml(f_Label24.directionalTextHelper, 'Coefficient :', false) , $updateHorizontalAlignment(f_Label24) , f_Label24)) , $setWidget_1(f_Grid22, 0, 3, (txtBrancheCoef = new DoubleBox_0 , txtBrancheCoef.element.style['width'] = '50px' , this$static.owner.txtBrancheCoef = txtBrancheCoef , txtBrancheCoef)) , $setWidget_1(f_Grid22, 1, 0, (f_Label25 = new Label_0 , f_Label25.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label25.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label25) , f_Label25)) , $setWidget_1(f_Grid22, 1, 1, (cmdAddBranche = new Button_0 , $setInnerText(cmdAddBranche.element, 'Ajouter la branche') , $addDomHandler(cmdAddBranche, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, TYPE_0) , cmdAddBranche)) , $setWidget_1(f_Grid22, 1, 2, (f_Label26 = new Label_0 , f_Label26.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label26.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label26) , f_Label26)) , f_Grid22.tableElem['cellSpacing'] = 5 , f_Grid22.tableElem['cellPadding'] = 5 , f_Grid22)) , f_VerticalPanel20.element.style['width'] = '100%' , f_VerticalPanel20.table['cellSpacing'] = 2 , f_VerticalPanel20)) , f_VerticalPanel18.element['className'] = 'subSection' , f_VerticalPanel18.element.style['height'] = '300px' , f_VerticalPanel18.element.style['width'] = '100%' , f_VerticalPanel18.table['cellSpacing'] = 2 , f_VerticalPanel18)) , f_Grid8.element.style['width'] = '100%' , f_Grid8.tableElem['cellSpacing'] = 2 , f_Grid8.tableElem['cellPadding'] = 3 , f_Grid8)) , f_VerticalPanel4.element.style['width'] = '100%' , f_VerticalPanel4.table['cellSpacing'] = 2 , f_VerticalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ProfileManagementView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ProfileManagementView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ProfileManagementView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ProfileManagementView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ProfileManagementView_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new ProfileManagementView_BinderImpl$Widgets$5_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new ProfileManagementView_BinderImpl$Widgets$6_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7 = new ProfileManagementView_BinderImpl$Widgets$7_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1271, 1, {}, ProfileManagementView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function ProfileManagementView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1272, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_17(event_0){
  $onCmdCreateNewProfileClick(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1273, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_18(event_0){
  $onCmdSaveNewProfileClick(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1274, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_16(event_0){
  $onLstSubjectsChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1275, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$4_0);
_.onClick = function onClick_19(event_0){
  $onCmdAddSubjectClick_0(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1276, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$5_0);
_.onClick = function onClick_20(event_0){
  $onCmdAddBrancheClick_0(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$6_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1277, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$6_0);
_.onChange = function onChange_17(event_0){
  $onLstProfilesChange(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$7_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1278, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$7_0);
_.onChange = function onChange_18(event_0){
  $onLstClassesChange_3(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_14(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$) {
    result = new ProfileManagementView_0(new ProfileManagementView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$;
}

function $$init_17(this$static){
  this$static.shim = new ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_17(this);
}

function ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_17(this);
}

defineSeed(1377, 589, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_17(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_17(){
  return new ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_25(){
  return Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_16(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getBrancheCoef_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'brancheCoef'), Ljava_lang_Double_2_classLit);
  visitor.visitValueProperty('brancheCoef', value, propertyContext);
  value = $getId_11(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getProfileBrancheName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'profileBrancheName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('profileBrancheName', value, propertyContext);
}
;
function $getBrancheCoef_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileBrancheProxy).getBrancheCoef();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Double);
  return toReturn;
}

function $getId_11(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileBrancheProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getProfileBrancheName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileBrancheProxy).getProfileBrancheName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1378, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileBrancheProxy]), ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_46(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ProfileBrancheProxy).equals$(o);
}
;
_.getBrancheCoef = function getBrancheCoef_1(){
  return $getBrancheCoef_0(this);
}
;
_.getId_0 = function getId_19(){
  return $getId_11(this);
}
;
_.getProfileBrancheName = function getProfileBrancheName(){
  return $getProfileBrancheName(this);
}
;
_.hashCode$ = function hashCode_46(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileBrancheProxy).hashCode$();
}
;
_.setBrancheCoef = function setBrancheCoef_1(brancheCoef){
  dynamicCast($getWrapped(this.this$0), Q$ProfileBrancheProxy).setBrancheCoef(brancheCoef);
}
;
_.toString$ = function toString_33(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileBrancheProxy).toString$();
}
;
_.this$0 = null;
function ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1379, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileBrancheProxy]), ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_47(other){
  return equals_14(this.this$0, other);
}
;
_.getBrancheCoef = function getBrancheCoef_2(){
  return dynamicCast($getOrReify(this.this$0, 'brancheCoef'), Q$Double);
}
;
_.getId_0 = function getId_20(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getProfileBrancheName = function getProfileBrancheName_0(){
  return dynamicCast($getOrReify(this.this$0, 'profileBrancheName'), Q$String);
}
;
_.hashCode$ = function hashCode_47(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setBrancheCoef = function setBrancheCoef_2(brancheCoef){
  $setProperty(this.this$0, 'brancheCoef', brancheCoef);
}
;
_.this$0 = null;
function $$init_19(this$static){
  this$static.shim = new ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_19(this);
}

function ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_19(this);
}

defineSeed(1383, 589, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_19(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_19(){
  return new ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_27(){
  return Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_18(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getIsActive_4(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'isActive'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('isActive', value, propertyContext);
  value = $getSubjectCoef_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'subjectCoef'), Ljava_lang_Double_2_classLit);
  visitor.visitValueProperty('subjectCoef', value, propertyContext);
  value = $getTotalBrancheCoef_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'totalBrancheCoef'), Ljava_lang_Double_2_classLit);
  visitor.visitValueProperty('totalBrancheCoef', value, propertyContext);
  value = $getId_13(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getProfName_1(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'profName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('profName', value, propertyContext);
  value = $getSubjectName_1(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'subjectName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('subjectName', value, propertyContext);
}
;
function $getId_13(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileSubjectProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getIsActive_4(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileSubjectProxy).getIsActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getProfName_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileSubjectProxy).getProfName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getSubjectCoef_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileSubjectProxy).getSubjectCoef();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Double);
  return toReturn;
}

function $getSubjectName_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileSubjectProxy).getSubjectName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getTotalBrancheCoef_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileSubjectProxy).getTotalBrancheCoef();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Double);
  return toReturn;
}

function ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1384, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileSubjectProxy]), ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_50(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ProfileSubjectProxy).equals$(o);
}
;
_.getId_0 = function getId_23(){
  return $getId_13(this);
}
;
_.getIsActive = function getIsActive_9(){
  return $getIsActive_4(this);
}
;
_.getProfName = function getProfName_3(){
  return $getProfName_1(this);
}
;
_.getSubjectCoef = function getSubjectCoef_1(){
  return $getSubjectCoef_0(this);
}
;
_.getSubjectName = function getSubjectName_3(){
  return $getSubjectName_1(this);
}
;
_.getTotalBrancheCoef = function getTotalBrancheCoef_1(){
  return $getTotalBrancheCoef_0(this);
}
;
_.hashCode$ = function hashCode_50(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileSubjectProxy).hashCode$();
}
;
_.setIsActive = function setIsActive_3(isActive){
  dynamicCast($getWrapped(this.this$0), Q$ProfileSubjectProxy).setIsActive(isActive);
}
;
_.setSubjectCoef = function setSubjectCoef_1(subjectCoef){
  dynamicCast($getWrapped(this.this$0), Q$ProfileSubjectProxy).setSubjectCoef(subjectCoef);
}
;
_.toString$ = function toString_35(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileSubjectProxy).toString$();
}
;
_.this$0 = null;
function ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1385, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileSubjectProxy]), ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_51(other){
  return equals_14(this.this$0, other);
}
;
_.getId_0 = function getId_24(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getIsActive = function getIsActive_10(){
  return dynamicCast($getOrReify(this.this$0, 'isActive'), Q$Boolean);
}
;
_.getProfName = function getProfName_4(){
  return dynamicCast($getOrReify(this.this$0, 'profName'), Q$String);
}
;
_.getSubjectCoef = function getSubjectCoef_2(){
  return dynamicCast($getOrReify(this.this$0, 'subjectCoef'), Q$Double);
}
;
_.getSubjectName = function getSubjectName_4(){
  return dynamicCast($getOrReify(this.this$0, 'subjectName'), Q$String);
}
;
_.getTotalBrancheCoef = function getTotalBrancheCoef_2(){
  return dynamicCast($getOrReify(this.this$0, 'totalBrancheCoef'), Q$Double);
}
;
_.hashCode$ = function hashCode_51(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setIsActive = function setIsActive_4(isActive){
  $setProperty(this.this$0, 'isActive', isActive);
}
;
_.setSubjectCoef = function setSubjectCoef_2(subjectCoef){
  $setProperty(this.this$0, 'subjectCoef', subjectCoef);
}
;
_.this$0 = null;
function $clinit_ProfileBrancheRequestFactoryImpl(){
  $clinit_ProfileBrancheRequestFactoryImpl = nullMethod;
  tokensToTypes_9 = new HashMap_0;
  typesToTokens_9 = new HashMap_0;
  entityProxyTypes_9 = new HashSet_0;
  valueProxyTypes_9 = new HashSet_0;
  tokensToTypes_9.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_9.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_20(entityProxyTypes_9, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_9.put('kvY7Ut1y4xJ7SS$RicdCHpatpKU=', Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit);
  typesToTokens_9.put(Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit, 'kvY7Ut1y4xJ7SS$RicdCHpatpKU=');
  $add_20(entityProxyTypes_9, Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit);
}

function ProfileBrancheRequestFactoryImpl_0(){
  $clinit_ProfileBrancheRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1473, 623, {}, ProfileBrancheRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_9(){
  return 'com.lemania.sis.shared.service.ProfileBrancheRequestFactory';
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
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1474, 633, makeCastMap([Q$AbstractRequestContext]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_9(){
  return !FACTORY_10 && (FACTORY_10 = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_FactoryImpl_0) , FACTORY_10;
}
;
var FACTORY_10 = null;
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$3X_0(this$0, val$profileSubjectId){
  this.val$profileSubjectId = val$profileSubjectId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1475, 632, makeCastMap([Q$AbstractRequest]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_42(){
  return new RequestData_0('V7dv6KIgirTxSag8or0MDidZdzI=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileSubjectId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit);
}
;
_.val$profileSubjectId = null;
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$5X_0(this$0, val$profileBranche){
  this.val$profileBranche = val$profileBranche;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1476, 632, makeCastMap([Q$AbstractRequest]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_43(){
  return new RequestData_0('t8kqVv8_9B9EkA9eL0dp9$MGjjk=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileBranche]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$profileBranche = null;
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$7X_0(this$0, val$newProfileSubject){
  this.val$newProfileSubject = val$newProfileSubject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1477, 632, makeCastMap([Q$AbstractRequest]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_44(){
  return new RequestData_0('busCLMtE1Va69lWCQgfLt745jGQ=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newProfileSubject]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit, null);
}
;
_.val$newProfileSubject = null;
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$8X_0(this$0, val$profileSubjectId, val$brancheId, val$brancheCoef){
  this.val$profileSubjectId = val$profileSubjectId;
  this.val$brancheId = val$brancheId;
  this.val$brancheCoef = val$brancheCoef;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1478, 632, makeCastMap([Q$AbstractRequest]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_45(){
  return new RequestData_0('RZwwL53l7WUUCEffE8YqcIlkS6Y=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileSubjectId, this.val$brancheId, this.val$brancheCoef]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit, null);
}
;
_.val$brancheCoef = null;
_.val$brancheId = null;
_.val$profileSubjectId = null;
function $getConstructors_com_lemania_sis_shared_ProfileBrancheProxy(){
  return [function(factory){
    return new ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1479, 561, makeCastMap([Q$EnumMap]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_10(map){
  $add_15(map, Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit, $getConstructors_com_lemania_sis_shared_ProfileBrancheProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_10(){
}
;
function ProfileRequestFactory_ProfileRequestContextImpl$8X_0(this$0, val$profileName, val$classId){
  this.val$profileName = val$profileName;
  this.val$classId = val$classId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1483, 632, makeCastMap([Q$AbstractRequest]), ProfileRequestFactory_ProfileRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_47(){
  return new RequestData_0('JEA2guWtUXYp9hXVJOdjyimKW_0=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileName, this.val$classId]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileProxy_2_classLit, null);
}
;
_.val$classId = null;
_.val$profileName = null;
function $clinit_ProfileSubjectRequestFactoryImpl(){
  $clinit_ProfileSubjectRequestFactoryImpl = nullMethod;
  tokensToTypes_11 = new HashMap_0;
  typesToTokens_11 = new HashMap_0;
  entityProxyTypes_11 = new HashSet_0;
  valueProxyTypes_11 = new HashSet_0;
  tokensToTypes_11.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_11.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_20(entityProxyTypes_11, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_11.put('j7rtdtaz0ZtchwX8fbXOqSPLDOo=', Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit);
  typesToTokens_11.put(Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit, 'j7rtdtaz0ZtchwX8fbXOqSPLDOo=');
  $add_20(entityProxyTypes_11, Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit);
}

function ProfileSubjectRequestFactoryImpl_0(){
  $clinit_ProfileSubjectRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1485, 623, {}, ProfileSubjectRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_11(){
  return 'com.lemania.sis.shared.service.ProfileSubjectRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_11(typeToken){
  return dynamicCast(tokensToTypes_11.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_15(type){
  return dynamicCast(typesToTokens_11.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_12(type){
  return $contains_1(entityProxyTypes_11, type);
}
;
_.isValueType = function isValueType_12(type){
  return $contains_1(valueProxyTypes_11, type);
}
;
var entityProxyTypes_11, tokensToTypes_11, typesToTokens_11, valueProxyTypes_11;
function $calculateTotalBrancheCoef(this$static, profileSubjectId){
  var x;
  x = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$1X_0(this$static, profileSubjectId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1486, 633, makeCastMap([Q$AbstractRequestContext]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_11(){
  return !FACTORY_12 && (FACTORY_12 = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_FactoryImpl_0) , FACTORY_12;
}
;
var FACTORY_12 = null;
function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$1X_0(this$0, val$profileSubjectId){
  this.val$profileSubjectId = val$profileSubjectId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1487, 632, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_48(){
  return new RequestData_0('qTOdZ6XT2bC4RQ$sfLmvUoGt3gg=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileSubjectId]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit, null);
}
;
_.val$profileSubjectId = null;
function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$4X_0(this$0, val$profileId){
  this.val$profileId = val$profileId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1488, 632, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_49(){
  return new RequestData_0('9yjny_sIdQooOpdnpZufcosh7MQ=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit);
}
;
_.val$profileId = null;
function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$6X_0(this$0, val$profileSubject){
  this.val$profileSubject = val$profileSubject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1489, 632, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_50(){
  return new RequestData_0('4oslgQo44QiRUaRMww77Wr0Ja8E=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileSubject]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$profileSubject = null;
function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$8X_0(this$0, val$newProfileSubject){
  this.val$newProfileSubject = val$newProfileSubject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1490, 632, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_51(){
  return new RequestData_0('DiLXneANl$CK767vopw82RFxJQw=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newProfileSubject]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit, null);
}
;
_.val$newProfileSubject = null;
function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$9X_0(this$0, val$profileId, val$subjectId, val$professorId, val$subjectCoef){
  this.val$profileId = val$profileId;
  this.val$subjectId = val$subjectId;
  this.val$professorId = val$professorId;
  this.val$subjectCoef = val$subjectCoef;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1491, 632, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$9X_0);
_.makeRequestData = function makeRequestData_52(){
  return new RequestData_0('8SLCmloTUXnDwqJAzEjz$AwsCug=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileId, this.val$subjectId, this.val$professorId, this.val$subjectCoef]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit, null);
}
;
_.val$professorId = null;
_.val$profileId = null;
_.val$subjectCoef = null;
_.val$subjectId = null;
function $getConstructors_com_lemania_sis_shared_ProfileSubjectProxy(){
  return [function(factory){
    return new ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1492, 561, makeCastMap([Q$EnumMap]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_12(map){
  $add_15(map, Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit, $getConstructors_com_lemania_sis_shared_ProfileSubjectProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_12(){
}
;
defineSeed(1528, 1, makeCastMap([Q$Iterable, Q$Collection, Q$List]));
_.addAll = function addAll_1(c){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).addAll(c);
  $clinit_Boolean();
  return toReturn;
}
;
defineSeed(1596, 1, makeCastMap([Q$Iterable, Q$Collection]));
_.addAll = function addAll_3(c){
  throw new UnsupportedOperationException_0;
}
;
var Lcom_lemania_sis_client_presenter_ProfileManagementPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter', 937), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$1', 938), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$2', 945), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$3', 946), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$4', 947), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$5', 948), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$6', 949), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$7_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$7', 950), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$8_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$8', 951), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$9_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$9', 952), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$10_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$10', 939), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$11_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$11', 940), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$12_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$12', 941), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$13_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$13', 942), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$14_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$14', 943), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$15_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$15', 944), Lcom_lemania_sis_client_event_ProfileBrancheAfterAddEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'ProfileBrancheAfterAddEvent', 749), Lcom_lemania_sis_client_presenter_ProfileManagementPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenterMyProxyImpl$1', 954), Lcom_lemania_sis_client_presenter_ProfileManagementPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenterMyProxyImpl$1$1', 955), Lcom_lemania_sis_client_view_ProfileManagementView_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView', 1254), Lcom_lemania_sis_client_view_ProfileManagementView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$1', 1255), Lcom_lemania_sis_client_view_ProfileManagementView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$2', 1262), Lcom_lemania_sis_client_view_ProfileManagementView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$3', 1263), Lcom_lemania_sis_client_view_ProfileManagementView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$4', 1264), Lcom_lemania_sis_client_view_ProfileManagementView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$5', 1265), Lcom_lemania_sis_client_view_ProfileManagementView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$6', 1266), Lcom_lemania_sis_client_view_ProfileManagementView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$7', 1267), Lcom_lemania_sis_client_view_ProfileManagementView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$8', 1268), Lcom_lemania_sis_client_view_ProfileManagementView$9_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$9', 1269), Lcom_lemania_sis_client_view_ProfileManagementView$10_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$10', 1256), Lcom_lemania_sis_client_view_ProfileManagementView$11_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$11', 1257), Lcom_lemania_sis_client_view_ProfileManagementView$12_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$12', 1258), Lcom_lemania_sis_client_view_ProfileManagementView$13_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$13', 1259), Lcom_lemania_sis_client_view_ProfileManagementView$14_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$14', 1260), Lcom_lemania_sis_client_view_ProfileManagementView$15_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$15', 1261), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl', 1270), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets', 1271), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$1', 1272), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$2', 1273), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$3', 1274), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$4', 1275), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$5', 1276), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$6', 1277), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$7', 1278), Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'ProfileBrancheProxy'), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactoryImpl', 1473), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl', 1474), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$3X', 1475), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$5X', 1476), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl$7X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$7X', 1477), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$8X', 1478), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_FactoryImpl', 1479), Lcom_lemania_sis_shared_ProfileBrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1377), Lcom_lemania_sis_shared_ProfileBrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1378), Lcom_lemania_sis_shared_ProfileBrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1379), Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'ProfileSubjectProxy'), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactoryImpl', 1485), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl', 1486), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$1X', 1487), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$4X', 1488), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$6X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$6X', 1489), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$8X', 1490), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$9X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$9X', 1491), Lcom_lemania_sis_shared_service_ProfileRequestFactory_1ProfileRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileRequestFactory_ProfileRequestContextImpl$8X', 1483), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_FactoryImpl', 1492), Lcom_lemania_sis_shared_ProfileSubjectProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1383), Lcom_lemania_sis_shared_ProfileSubjectProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1384), Lcom_lemania_sis_shared_ProfileSubjectProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1385);
$entry(onLoad)(18);
