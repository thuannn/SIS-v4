function $redrawRow(this$static, absRowIndex){
  var relRowIndex;
  relRowIndex = absRowIndex - $getVisibleRange(this$static.presenter).start;
  $checkRowBounds(this$static, relRowIndex);
  $setRowData(this$static, absRowIndex, ($clinit_Collections() , new Collections$SingletonList_0(($checkRowBounds(this$static, relRowIndex) , $getVisibleItem(this$static.presenter, relRowIndex)))));
}

function ProfileBrancheAfterAddEvent_0(profileSubjectId, lastPosition){
  $clinit_ProfileBrancheAfterAddEvent();
  this.subjectLastPosition = valueOf_1(-1);
  this.profileSubjectId = profileSubjectId;
  this.subjectLastPosition = lastPosition;
}

defineSeed(871, 273, {}, ProfileBrancheAfterAddEvent_0);
_.dispatch_0 = function dispatch_55(handler){
  dynamicCast(handler, Q$ProfileBrancheAfterAddEvent$ProfileBrancheAfterAddHandler).onProfileBrancheAfterAdd(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_56(){
  return TYPE_55;
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

function $onClassChanged_2(this$static, classId){
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

function $onProfileChanged_1(this$static, profileId){
  var rc, rf;
  if (!profileId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Profil');
    return;
  }
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  $fire($listAll_8(rc, profileId), new ProfileManagementPresenter$9_0(this$static));
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
    if ($equals_4(ps.getIsActive(), isActive))
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
  Presenter_1.call(this, eventBus, view, proxy, null);
}

defineSeed(1403, 798, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfileBrancheAfterAddEvent$ProfileBrancheAfterAddHandler, Q$ProfileManagementPresenter, Q$ProfileManagementUiHandler]), ProfileManagementPresenter_0);
_.onBind = function onBind_33(){
  dynamicCast(this.view, Q$ProfileManagementPresenter$MyView).setUiHandlers(this);
  $initializeTables_2(dynamicCast(this.view, Q$ProfileManagementPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_49(event_0){
  this.currentUser = event_0.currentUser;
  dynamicCast(this.view, Q$ProfileManagementPresenter$MyView);
}
;
_.onProfileBrancheAfterAdd = function onProfileBrancheAfterAdd(event_0){
  $onProfileBrancheAfterAdd(this, event_0);
}
;
_.onReset = function onReset_32(){
  var rf, rc, rf_0, rc_0, rf_1, rc_1;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('profilemgt'), null);
  $resetForm_12(dynamicCast(this.view, Q$ProfileManagementPresenter$MyView));
  rf = new ClasseRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAllActive_0(rc), new ProfileManagementPresenter$1_0(this));
  rf_0 = new SubjectRequestFactoryImpl_0;
  $initialize_0(rf_0, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc_0 = new SubjectRequestFactory_SubjectRequestContextImpl_0(rf_0);
  $fire($listAllActive_3(rc_0), new ProfileManagementPresenter$3_0(this));
  rf_1 = new BrancheRequestFactoryImpl_0;
  $initialize_0(rf_1, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc_1 = new BrancheRequestFactory_BrancheRequestContextImpl_0(rf_1);
  $fire($listAll_2(rc_1), new ProfileManagementPresenter$2_0(this));
}
;
_.revealInParent = function revealInParent_24(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_128(this$static, response){
  $setClassList_2(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1404, 729, makeCastMap([Q$Receiver]), ProfileManagementPresenter$1_0);
_.onFailure_0 = function onFailure_146(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_146(response){
  $onSuccess_128(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_129(this$static, response){
  $showUpdatedProfileSubject(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response, this$static.val$lastPosition);
}

function ProfileManagementPresenter$10_0(this$0, val$lastPosition){
  this.this$0 = this$0;
  this.val$lastPosition = val$lastPosition;
}

defineSeed(1405, 729, makeCastMap([Q$Receiver]), ProfileManagementPresenter$10_0);
_.onFailure_0 = function onFailure_147(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_147(response){
  $onSuccess_129(this, dynamicCast(response, Q$ProfileSubjectProxy));
}
;
_.this$0 = null;
_.val$lastPosition = null;
function $onSuccess_130(this$static, response){
  $setBrancheTableData_0(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$11_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1406, 729, makeCastMap([Q$Receiver]), ProfileManagementPresenter$11_0);
_.onFailure_0 = function onFailure_148(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_148(response){
  $onSuccess_130(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_131(this$static, response){
  $showUpdatedProfileSubject(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response, this$static.val$event.subjectLastPosition);
}

function ProfileManagementPresenter$12_0(this$0, val$event){
  this.this$0 = this$0;
  this.val$event = val$event;
}

defineSeed(1407, 729, makeCastMap([Q$Receiver]), ProfileManagementPresenter$12_0);
_.onFailure_0 = function onFailure_149(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_149(response){
  $onSuccess_131(this, dynamicCast(response, Q$ProfileSubjectProxy));
}
;
_.this$0 = null;
_.val$event = null;
function $onSuccess_132(this$static){
  $doFire(this$static.this$0.eventBus, new ProfileBrancheAfterAddEvent_0(this$static.val$profileSubjectId, this$static.val$subjectLastPosition), null);
  $removeProfileBrancheFromTable(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView));
}

function ProfileManagementPresenter$13_0(this$0, val$profileSubjectId, val$subjectLastPosition){
  this.this$0 = this$0;
  this.val$profileSubjectId = val$profileSubjectId;
  this.val$subjectLastPosition = val$subjectLastPosition;
}

defineSeed(1408, 729, makeCastMap([Q$Receiver]), ProfileManagementPresenter$13_0);
_.onFailure_0 = function onFailure_150(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_150(response){
  $onSuccess_132(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
_.val$profileSubjectId = null;
_.val$subjectLastPosition = null;
function $onSuccess_133(this$static, deleted){
  deleted.value_0?$removeProfileSubjectFromTable(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView)):alert_0(($clinit_NotificationTypes() , 'Merci de supprimer toutes les branches de cette mati\xE8re avant la supprimer.'));
}

function ProfileManagementPresenter$14_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1409, 729, makeCastMap([Q$Receiver]), ProfileManagementPresenter$14_0);
_.onFailure_0 = function onFailure_151(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_151(deleted){
  $onSuccess_133(this, dynamicCast(deleted, Q$Boolean));
}
;
_.this$0 = null;
function $onSuccess_134(this$static, response){
  $doFire(this$static.this$0.eventBus, new ProfileBrancheAfterAddEvent_0(this$static.val$profileSubjectId, this$static.val$lastPosition), null);
  $showUpdatedProfileBranche(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$15_0(this$0, val$profileSubjectId, val$lastPosition){
  this.this$0 = this$0;
  this.val$profileSubjectId = val$profileSubjectId;
  this.val$lastPosition = val$lastPosition;
}

defineSeed(1410, 729, makeCastMap([Q$Receiver]), ProfileManagementPresenter$15_0);
_.onFailure_0 = function onFailure_152(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_152(response){
  $onSuccess_134(this, dynamicCast(response, Q$ProfileBrancheProxy));
}
;
_.this$0 = null;
_.val$lastPosition = null;
_.val$profileSubjectId = null;
function $onSuccess_135(this$static, response){
  $setBrancheListData_0(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1411, 729, makeCastMap([Q$Receiver]), ProfileManagementPresenter$2_0);
_.onFailure_0 = function onFailure_153(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_153(response){
  $onSuccess_135(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_136(this$static, response){
  $setSubjectListData_2(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1412, 729, makeCastMap([Q$Receiver]), ProfileManagementPresenter$3_0);
_.onFailure_0 = function onFailure_154(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_154(response){
  $onSuccess_136(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_137(this$static, response){
  $setProfileListData_2(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1413, 729, makeCastMap([Q$Receiver]), ProfileManagementPresenter$4_0);
_.onFailure_0 = function onFailure_155(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_155(response){
  $onSuccess_137(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_138(this$static){
  $resetForm_12(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView));
  $loadProfileList(this$static.this$0, this$static.val$classId);
}

function ProfileManagementPresenter$5_0(this$0, val$classId){
  this.this$0 = this$0;
  this.val$classId = val$classId;
}

defineSeed(1414, 729, makeCastMap([Q$Receiver]), ProfileManagementPresenter$5_0);
_.onFailure_0 = function onFailure_156(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_156(response){
  $onSuccess_138(this, dynamicCast(response, Q$ProfileProxy));
}
;
_.this$0 = null;
_.val$classId = null;
function $onSuccess_139(this$static, response){
  $setProfessorListData_0(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1415, 729, makeCastMap([Q$Receiver]), ProfileManagementPresenter$6_0);
_.onFailure_0 = function onFailure_157(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_157(response){
  $onSuccess_139(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_140(this$static, response){
  $addNewProfileSubjectToTable(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1416, 729, makeCastMap([Q$Receiver]), ProfileManagementPresenter$7_0);
_.onFailure_0 = function onFailure_158(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_158(response){
  $onSuccess_140(this, dynamicCast(response, Q$ProfileSubjectProxy));
}
;
_.this$0 = null;
function $onSuccess_141(this$static, response){
  $doFire(this$static.this$0.eventBus, new ProfileBrancheAfterAddEvent_0(this$static.val$profileSubjectId, this$static.val$subjectLastPosition), null);
  $addNewProfileBrancheToTable(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$8_0(this$0, val$profileSubjectId, val$subjectLastPosition){
  this.this$0 = this$0;
  this.val$profileSubjectId = val$profileSubjectId;
  this.val$subjectLastPosition = val$subjectLastPosition;
}

defineSeed(1417, 729, makeCastMap([Q$Receiver]), ProfileManagementPresenter$8_0);
_.onFailure_0 = function onFailure_159(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_159(response){
  $onSuccess_141(this, dynamicCast(response, Q$ProfileBrancheProxy));
}
;
_.this$0 = null;
_.val$profileSubjectId = null;
_.val$subjectLastPosition = null;
function $onSuccess_142(this$static, response){
  $setSubjectTableData(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1418, 729, makeCastMap([Q$Receiver]), ProfileManagementPresenter$9_0);
_.onFailure_0 = function onFailure_160(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_160(response){
  $onSuccess_142(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
defineSeed(1419, 826, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfileBrancheAfterAddEvent$ProfileBrancheAfterAddHandler]));
_.onProfileBrancheAfterAdd = function onProfileBrancheAfterAdd_0(event_0){
  $getPresenter_0(this, new ProfileManagementPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
function $success_45(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new ProfileManagementPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function ProfileManagementPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1420, 811, {}, ProfileManagementPresenterMyProxyImpl$1_0);
_.success = function success_47(presenter){
  $success_45(this, dynamicCast(presenter, Q$ProfileManagementPresenter));
}
;
_.val$event = null;
function ProfileManagementPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(1421, 1, {}, ProfileManagementPresenterMyProxyImpl$1$1_0);
_.execute_0 = function execute_74(){
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

defineSeed(1488, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_190(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $addNewProfileBrancheToTable(this$static, branche){
  $add_15(this$static.brancheDataProvider.listWrapper, branche);
  $refresh(this$static.brancheDataProvider);
  $setHeight(this$static.tblBranches, '' + (($clinit_NotificationTypes() , lineHeightShortList).value_0 * this$static.brancheDataProvider.listWrapper.list.size_1() + headerHeight.value_0) + 'px');
}

function $addNewProfileSubjectToTable(this$static, profileSubject){
  $add_15(this$static.subjectDataProvider.listWrapper, profileSubject);
  $refresh(this$static.subjectDataProvider);
  $setHeight(this$static.tblSubjects, '' + (($clinit_NotificationTypes() , lineHeightShortList).value_0 * this$static.subjectDataProvider.listWrapper.list.size_1() + headerHeight.value_0) + 'px');
}

function $initializeTables_2(this$static){
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
  !!this$static.uiHandlers && !!this$static.selectedSubject && $addBrancheToProfile(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), '' + toString_6(this$static.selectedSubject.getId_0().value_0), $getValue_2(this$static.lstBranches, this$static.lstBranches.element.selectedIndex), $getPropertyString(this$static.txtBrancheCoef.element, 'value'), valueOf_1(this$static.selectedSubjectIndex));
}

function $onCmdAddSubjectClick_0(this$static){
  !!this$static.uiHandlers && $addSubjectToProfile(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getValue_2(this$static.lstProfiles, this$static.lstProfiles.element.selectedIndex), $getValue_2(this$static.lstSubjects, this$static.lstSubjects.element.selectedIndex), $getValue_2(this$static.lstProfessors, this$static.lstProfessors.element.selectedIndex), $getPropertyString(this$static.txtSubjectCoef.element, 'value'));
}

function $onCmdCreateNewProfileClick(this$static){
  $setText_1(this$static.txtNewProfileName, '');
  $setVisible_0(this$static.pnlAddNewProfile, true);
}

function $onCmdSaveNewProfileClick(this$static){
  !!this$static.uiHandlers && $createNewProfile(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getPropertyString(this$static.txtNewProfileName.element, 'value'), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $onLstClassesChange_8(this$static){
  $setSelected_0(this$static.tblSubjects.presenter.selectionModel, this$static.selectedSubject, false);
  $clear_3(this$static.subjectDataProvider.listWrapper);
  $clear_3(this$static.brancheDataProvider.listWrapper);
  !!this$static.uiHandlers && $onClassChanged_2(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $onLstProfilesChange_1(this$static){
  $setSelected_0(this$static.tblSubjects.presenter.selectionModel, this$static.selectedSubject, false);
  $clear_3(this$static.subjectDataProvider.listWrapper);
  $clear_3(this$static.brancheDataProvider.listWrapper);
  !!this$static.uiHandlers && $onProfileChanged_1(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getValue_2(this$static.lstProfiles, this$static.lstProfiles.element.selectedIndex));
}

function $onLstSubjectsChange_0(this$static){
  !!this$static.uiHandlers && $loadProfessorList_0(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getValue_2(this$static.lstSubjects, this$static.lstSubjects.element.selectedIndex), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $removeProfileBrancheFromTable(this$static){
  $remove_12(this$static.brancheDataProvider.listWrapper, this$static.selectedBrancheIndex);
  $refresh(this$static.brancheDataProvider);
}

function $removeProfileSubjectFromTable(this$static){
  $remove_12(this$static.subjectDataProvider.listWrapper, this$static.selectedSubjectIndex);
  $refresh(this$static.subjectDataProvider);
}

function $resetForm_12(this$static){
  $setVisible_0(this$static.pnlAddNewProfile, false);
  $clear_3(this$static.subjectDataProvider.listWrapper);
  $clear_3(this$static.brancheDataProvider.listWrapper);
  $selectClear(this$static.lstProfiles.element);
  $selectClear(this$static.lstSubjects.element);
  $selectClear(this$static.lstProfessors.element);
  $selectClear(this$static.lstBranches.element);
  $setText_1(this$static.txtSubjectCoef, '');
  $setText_1(this$static.txtBrancheCoef, '');
}

function $setBrancheListData_0(this$static, brancheList){
  var branche, branche$iterator;
  $selectClear(this$static.lstBranches.element);
  $insertItem_0(this$static.lstBranches, '-', '', -1);
  for (branche$iterator = brancheList.iterator(); branche$iterator.hasNext();) {
    branche = dynamicCast(branche$iterator.next_0(), Q$BrancheProxy);
    $insertItem_0(this$static.lstBranches, branche.getBrancheName(), '' + toString_6(branche.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstBranches, 0);
}

function $setBrancheTableData_0(this$static, branches){
  $clear_3(this$static.brancheDataProvider.listWrapper);
  $setList(this$static.brancheDataProvider, branches);
  $setHeight(this$static.tblBranches, '' + (($clinit_NotificationTypes() , lineHeightShortList).value_0 * branches.size_1() + headerHeight.value_0) + 'px');
}

function $setClassList_2(this$static, classes){
  var classe, classe$iterator;
  $selectClear(this$static.lstClasses.element);
  $insertItem_0(this$static.lstClasses, '-', '', -1);
  for (classe$iterator = classes.iterator(); classe$iterator.hasNext();) {
    classe = dynamicCast(classe$iterator.next_0(), Q$ClasseProxy);
    $insertItem_0(this$static.lstClasses, classe.getClassName(), '' + toString_6(classe.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstClasses, 0);
}

function $setProfessorListData_0(this$static, profs){
  var prof, prof$iterator;
  $selectClear(this$static.lstProfessors.element);
  $insertItem_0(this$static.lstProfessors, '-', '', -1);
  for (prof$iterator = profs.iterator(); prof$iterator.hasNext();) {
    prof = dynamicCast(prof$iterator.next_0(), Q$ProfessorProxy);
    $insertItem_0(this$static.lstProfessors, prof.getProfName(), '' + toString_6(prof.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstProfessors, 0);
}

function $setProfileListData_2(this$static, profiles){
  var profile, profile$iterator;
  $selectClear(this$static.lstProfiles.element);
  $insertItem_0(this$static.lstProfiles, '-', '', -1);
  for (profile$iterator = profiles.iterator(); profile$iterator.hasNext();) {
    profile = dynamicCast(profile$iterator.next_0(), Q$ProfileProxy);
    $insertItem_0(this$static.lstProfiles, profile.getProfileName(), '' + toString_6(profile.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstProfiles, 0);
}

function $setSubjectListData_2(this$static, subjectList){
  var subject, subject$iterator;
  $selectClear(this$static.lstSubjects.element);
  $insertItem_0(this$static.lstSubjects, '-', '', -1);
  for (subject$iterator = subjectList.iterator(); subject$iterator.hasNext();) {
    subject = dynamicCast(subject$iterator.next_0(), Q$SubjectProxy);
    $insertItem_0(this$static.lstSubjects, subject.getSubjectName(), '' + toString_6(subject.getId_0().value_0), -1);
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
  this.widget = $build_f_HTMLPanel1_28(new ProfileManagementView_BinderImpl$Widgets_0(this));
}

defineSeed(1730, 803, makeCastMap([Q$IsWidget, Q$ProfileManagementPresenter$MyView]), ProfileManagementView_0);
_.asWidget = function asWidget_27(){
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

defineSeed(1731, 472, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$1_0);
_.getValue = function getValue_106(object){
  return dynamicCast(object, Q$ProfileSubjectProxy).getSubjectName();
}
;
function ProfileManagementView$10_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1732, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), ProfileManagementView$10_0);
_.onSelectionChange = function onSelectionChange_9(event_0){
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

defineSeed(1733, 472, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$11_0);
_.getValue = function getValue_107(object){
  return dynamicCast(object, Q$ProfileBrancheProxy).getProfileBrancheName();
}
;
function $getValue_13(object){
  return $clinit_Double() , '' + object.getBrancheCoef().value_0;
}

function ProfileManagementView$12_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1734, 427, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$12_0);
_.getValue = function getValue_108(object){
  return $getValue_13(dynamicCast(object, Q$ProfileBrancheProxy));
}
;
function $update_42(this$static, index, branche, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedBrancheIndex = index;
    $updateProfileBranche(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), branche, value, '' + toString_6(this$static.this$0.selectedSubject.getId_0().value_0), valueOf_1(this$static.this$0.selectedSubjectIndex));
  }
}

function ProfileManagementView$13_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1735, 1, {}, ProfileManagementView$13_0);
_.update = function update_43(index, branche, value){
  $update_42(this, index, dynamicCast(branche, Q$ProfileBrancheProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function ProfileManagementView$14_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1736, 427, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$14_0);
_.getValue = function getValue_109(bp){
  return dynamicCast(bp, Q$ProfileBrancheProxy) , 'X';
}
;
function $update_43(this$static, index, bp){
  this$static.this$0.selectedBrancheIndex = index;
  $removeBranche_0(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), bp, '' + toString_6(this$static.this$0.selectedSubject.getId_0().value_0), valueOf_1(this$static.this$0.selectedSubjectIndex));
}

function ProfileManagementView$15_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1737, 1, {}, ProfileManagementView$15_0);
_.update = function update_44(index, bp, value){
  $update_43(this, index, dynamicCast(bp, Q$ProfileBrancheProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function $getValue_14(object){
  return $clinit_Double() , '' + object.getSubjectCoef().value_0;
}

function ProfileManagementView$2_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1738, 427, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$2_0);
_.getValue = function getValue_110(object){
  return $getValue_14(dynamicCast(object, Q$ProfileSubjectProxy));
}
;
function $update_44(this$static, index, subject, value){
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

defineSeed(1739, 1, {}, ProfileManagementView$3_0);
_.update = function update_45(index, subject, value){
  $update_44(this, index, dynamicCast(subject, Q$ProfileSubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function ProfileManagementView$4_0(){
  TextColumn_0.call(this);
}

defineSeed(1740, 472, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$4_0);
_.getValue = function getValue_111(object){
  return dynamicCast(object, Q$ProfileSubjectProxy).getProfName();
}
;
function ProfileManagementView$5_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1741, 427, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$5_0);
_.getValue = function getValue_112(subject){
  return dynamicCast(subject, Q$ProfileSubjectProxy).getIsActive();
}
;
function $update_45(this$static, index, subject, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedSubjectIndex = index;
    $updateProfileSubject(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), subject, ($clinit_Double() , '' + subject.getSubjectCoef().value_0), value, valueOf_1(this$static.this$0.selectedSubjectIndex));
  }
}

function ProfileManagementView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1742, 1, {}, ProfileManagementView$6_0);
_.update = function update_46(index, subject, value){
  $update_45(this, index, dynamicCast(subject, Q$ProfileSubjectProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function $getValue_15(object){
  return $clinit_Double() , '' + object.getTotalBrancheCoef().value_0;
}

function ProfileManagementView$7_0(){
  TextColumn_0.call(this);
}

defineSeed(1743, 472, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$7_0);
_.getValue = function getValue_113(object){
  return $getValue_15(dynamicCast(object, Q$ProfileSubjectProxy));
}
;
function ProfileManagementView$8_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1744, 427, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$8_0);
_.getValue = function getValue_114(bp){
  return dynamicCast(bp, Q$ProfileSubjectProxy) , 'X';
}
;
function $update_46(this$static, index, ps){
  this$static.this$0.selectedSubjectIndex = index;
  $removeSubject_0(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), ps);
}

function ProfileManagementView$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1745, 1, {}, ProfileManagementView$9_0);
_.update = function update_47(index, ps, value){
  $update_46(this, index, dynamicCast(ps, Q$ProfileSubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function ProfileManagementView_BinderImpl_0(){
}

defineSeed(1746, 1, {}, ProfileManagementView_BinderImpl_0);
function $build_f_HTMLPanel1_28(this$static){
  var attachRecord20, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_VerticalPanel4, f_Grid5, f_Label6, lstClasses, f_Label7, lstProfiles, cmdCreateNewProfile, pnlAddNewProfile, f_HorizontalPanel8, f_VerticalPanel9, f_VerticalPanel18, txtNewProfileName, cmdSaveNewProfile, f_Label10, tblSubjects, f_VerticalPanel11, f_Label12, f_Grid13, f_Label14, lstSubjects, f_Label15, txtSubjectCoef, f_Label16, lstProfessors, f_Label17, cmdAddSubject, f_Label19, tblBranches, f_VerticalPanel20, f_Label21, f_Grid22, f_Label23, lstBranches, f_Label24, txtBrancheCoef, f_Label25, cmdAddBranche, f_Label26;
  f_HTMLPanel1 = new HTMLPanel_0($html1_21(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord20 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord20.origParent?$insertBefore(attachRecord20.origParent, attachRecord20.element, attachRecord20.origSibling):orphan(attachRecord20.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_12(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'GESTION DES PROGRAMMES / CLASSES', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_12(f_VerticalPanel2, (f_VerticalPanel4 = new VerticalPanel_0 , $add_12(f_VerticalPanel4, (f_Grid5 = new Grid_0 , $resizeColumns(f_Grid5, 4) , $resizeRows(f_Grid5, 2) , $setWidget_3(f_Grid5, 0, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Choisir une classe :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_3(f_Grid5, 0, 1, (lstClasses = new ListBox_0 , lstClasses.element['className'] = 'sis_textbox' , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstClasses = lstClasses , lstClasses)) , $setWidget_3(f_Grid5, 1, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Liste des programmes de la classe choisie :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_3(f_Grid5, 1, 1, (lstProfiles = new ListBox_0 , lstProfiles.element['className'] = 'sis_textbox' , $addDomHandler(lstProfiles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, TYPE) , this$static.owner.lstProfiles = lstProfiles , lstProfiles)) , $setWidget_3(f_Grid5, 1, 2, (cmdCreateNewProfile = new Button_0 , $setInnerText(cmdCreateNewProfile.element, 'Cr\xE9er un nouveau programme') , $addDomHandler(cmdCreateNewProfile, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdCreateNewProfile)) , $setWidget_3(f_Grid5, 1, 3, (pnlAddNewProfile = new FlowPanel_0 , $add_8(pnlAddNewProfile, (txtNewProfileName = new TextBox_0 , this$static.owner.txtNewProfileName = txtNewProfileName , txtNewProfileName)) , $add_8(pnlAddNewProfile, (cmdSaveNewProfile = new Button_0 , $setInnerText(cmdSaveNewProfile.element, 'Enregistrer') , $addDomHandler(cmdSaveNewProfile, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , cmdSaveNewProfile)) , setVisible(pnlAddNewProfile.element, false) , this$static.owner.pnlAddNewProfile = pnlAddNewProfile , pnlAddNewProfile)) , f_Grid5.tableElem['cellSpacing'] = 2 , f_Grid5.tableElem['cellPadding'] = 3 , f_Grid5)) , $add_12(f_VerticalPanel4, (f_HorizontalPanel8 = new HorizontalPanel_0 , $add_10(f_HorizontalPanel8, (f_VerticalPanel9 = new VerticalPanel_0 , $add_12(f_VerticalPanel9, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label10.directionalTextHelper, 'Liste des mati\xE8re du programme choisi', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $add_12(f_VerticalPanel9, (tblSubjects = this$static.owner.tblSubjects , tblSubjects.element.style['height'] = '350px' , tblSubjects.element.style['width'] = '100%' , tblSubjects)) , $add_12(f_VerticalPanel9, (f_VerticalPanel11 = new VerticalPanel_0 , $add_12(f_VerticalPanel11, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label12.directionalTextHelper, 'Rajouter une mati\xE8re', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $add_12(f_VerticalPanel11, (f_Grid13 = new Grid_0 , $resizeColumns(f_Grid13, 4) , $resizeRows(f_Grid13, 3) , $setWidget_3(f_Grid13, 0, 0, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, 'Mati\xE8re :', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_3(f_Grid13, 0, 1, (lstSubjects = new ListBox_0 , lstSubjects.element['className'] = 'sis_textbox' , lstSubjects.element.style['width'] = '' , $addDomHandler(lstSubjects, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this$static.owner.lstSubjects = lstSubjects , lstSubjects)) , $setWidget_3(f_Grid13, 0, 2, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'Coefficient :', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_3(f_Grid13, 0, 3, (txtSubjectCoef = new DoubleBox_0 , txtSubjectCoef.element.style['width'] = '50px' , this$static.owner.txtSubjectCoef = txtSubjectCoef , txtSubjectCoef)) , $setWidget_3(f_Grid13, 1, 0, (f_Label16 = new Label_0 , $setTextOrHtml(f_Label16.directionalTextHelper, 'Professeur :', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $setWidget_3(f_Grid13, 1, 1, (lstProfessors = new ListBox_0 , lstProfessors.element['className'] = 'sis_textbox' , lstProfessors.element.style['width'] = '' , this$static.owner.lstProfessors = lstProfessors , lstProfessors)) , $setWidget_3(f_Grid13, 2, 0, (f_Label17 = new Label_0 , f_Label17.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label17.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $setWidget_3(f_Grid13, 2, 1, (cmdAddSubject = new Button_0 , $setInnerText(cmdAddSubject.element, 'Ajouter la mati\xE8re') , $addDomHandler(cmdAddSubject, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_0) , cmdAddSubject)) , f_Grid13.element.style['width'] = '' , f_Grid13.tableElem['cellSpacing'] = 5 , f_Grid13.tableElem['cellPadding'] = 5 , f_Grid13)) , f_VerticalPanel11.element.style['width'] = '100%' , f_VerticalPanel11.table['cellSpacing'] = 2 , f_VerticalPanel11)) , f_VerticalPanel9.element['className'] = 'subSection' , f_VerticalPanel9.element.style['width'] = '100%' , f_VerticalPanel9.table['cellSpacing'] = 2 , f_VerticalPanel9)) , $add_10(f_HorizontalPanel8, (f_VerticalPanel18 = new VerticalPanel_0 , $add_12(f_VerticalPanel18, (f_Label19 = new Label_0 , f_Label19.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label19.directionalTextHelper, 'Liste des branches de la mati\xE8re choisie', false) , $updateHorizontalAlignment(f_Label19) , f_Label19)) , $add_12(f_VerticalPanel18, (tblBranches = this$static.owner.tblBranches , tblBranches.element.style['height'] = '250px' , tblBranches.element.style['width'] = '100%' , tblBranches)) , $add_12(f_VerticalPanel18, (f_VerticalPanel20 = new VerticalPanel_0 , $add_12(f_VerticalPanel20, (f_Label21 = new Label_0 , f_Label21.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label21.directionalTextHelper, 'Rajouter une branche', false) , $updateHorizontalAlignment(f_Label21) , f_Label21.element.style['width'] = '' , f_Label21)) , $add_12(f_VerticalPanel20, (f_Grid22 = new Grid_0 , $resizeColumns(f_Grid22, 4) , $resizeRows(f_Grid22, 2) , $setWidget_3(f_Grid22, 0, 0, (f_Label23 = new Label_0 , $setTextOrHtml(f_Label23.directionalTextHelper, 'Branche :', false) , $updateHorizontalAlignment(f_Label23) , f_Label23)) , $setWidget_3(f_Grid22, 0, 1, (lstBranches = new ListBox_0 , lstBranches.element['className'] = 'sis_textbox' , lstBranches.element.style['width'] = '200px' , this$static.owner.lstBranches = lstBranches , lstBranches)) , $setWidget_3(f_Grid22, 0, 2, (f_Label24 = new Label_0 , $setTextOrHtml(f_Label24.directionalTextHelper, 'Coefficient :', false) , $updateHorizontalAlignment(f_Label24) , f_Label24)) , $setWidget_3(f_Grid22, 0, 3, (txtBrancheCoef = new DoubleBox_0 , txtBrancheCoef.element.style['width'] = '50px' , this$static.owner.txtBrancheCoef = txtBrancheCoef , txtBrancheCoef)) , $setWidget_3(f_Grid22, 1, 0, (f_Label25 = new Label_0 , f_Label25.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label25.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label25) , f_Label25)) , $setWidget_3(f_Grid22, 1, 1, (cmdAddBranche = new Button_0 , $setInnerText(cmdAddBranche.element, 'Ajouter la branche') , $addDomHandler(cmdAddBranche, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, TYPE_0) , cmdAddBranche)) , $setWidget_3(f_Grid22, 1, 2, (f_Label26 = new Label_0 , f_Label26.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label26.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label26) , f_Label26)) , f_Grid22.tableElem['cellSpacing'] = 5 , f_Grid22.tableElem['cellPadding'] = 5 , f_Grid22)) , f_VerticalPanel20.element.style['width'] = '100%' , f_VerticalPanel20.table['cellSpacing'] = 2 , f_VerticalPanel20)) , f_VerticalPanel18.element['className'] = 'subSection' , f_VerticalPanel18.element.style['height'] = '300px' , f_VerticalPanel18.element.style['width'] = '100%' , f_VerticalPanel18.table['cellSpacing'] = 2 , f_VerticalPanel18)) , f_HorizontalPanel8.element.style['width'] = '100%' , f_HorizontalPanel8.table['cellSpacing'] = 5 , f_HorizontalPanel8)) , f_VerticalPanel4.element.style['width'] = '100%' , f_VerticalPanel4.table['cellSpacing'] = 2 , f_VerticalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
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

defineSeed(1747, 1, {}, ProfileManagementView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function ProfileManagementView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1748, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_41(event_0){
  $onCmdCreateNewProfileClick(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1749, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_42(event_0){
  $onCmdSaveNewProfileClick(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1750, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_38(event_0){
  $onLstSubjectsChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1751, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$4_0);
_.onClick = function onClick_43(event_0){
  $onCmdAddSubjectClick_0(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1752, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$5_0);
_.onClick = function onClick_44(event_0){
  $onCmdAddBrancheClick_0(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$6_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1753, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$6_0);
_.onChange = function onChange_39(event_0){
  $onLstProfilesChange_1(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$7_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1754, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$7_0);
_.onChange = function onChange_40(event_0){
  $onLstClassesChange_8(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_21(arg0){
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

function $$init_21(this$static){
  this$static.shim = new ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_21(this);
}

function ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_21(this);
}

defineSeed(1831, 690, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_19(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_19(){
  return new ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_27(){
  return Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_18(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getBrancheCoef_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'brancheCoef'), Ljava_lang_Double_2_classLit);
  visitor.visitValueProperty('brancheCoef', value, propertyContext);
  value = $getId_12(as);
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

function $getId_12(this$static){
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

defineSeed(1832, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileBrancheProxy]), ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_50(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ProfileBrancheProxy).equals$(o);
}
;
_.getBrancheCoef = function getBrancheCoef_1(){
  return $getBrancheCoef_0(this);
}
;
_.getId_0 = function getId_21(){
  return $getId_12(this);
}
;
_.getProfileBrancheName = function getProfileBrancheName(){
  return $getProfileBrancheName(this);
}
;
_.hashCode$ = function hashCode_50(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileBrancheProxy).hashCode$();
}
;
_.setBrancheCoef = function setBrancheCoef_1(brancheCoef){
  dynamicCast($getWrapped(this.this$0), Q$ProfileBrancheProxy).setBrancheCoef(brancheCoef);
}
;
_.toString$ = function toString_36(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileBrancheProxy).toString$();
}
;
_.this$0 = null;
function ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1833, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileBrancheProxy]), ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_51(other){
  return equals_14(this.this$0, other);
}
;
_.getBrancheCoef = function getBrancheCoef_2(){
  return dynamicCast($getOrReify(this.this$0, 'brancheCoef'), Q$Double);
}
;
_.getId_0 = function getId_22(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getProfileBrancheName = function getProfileBrancheName_0(){
  return dynamicCast($getOrReify(this.this$0, 'profileBrancheName'), Q$String);
}
;
_.hashCode$ = function hashCode_51(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setBrancheCoef = function setBrancheCoef_2(brancheCoef){
  $setProperty(this.this$0, 'brancheCoef', brancheCoef);
}
;
_.this$0 = null;
defineSeed(1838, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileSubjectProxy]));
_.setIsActive = function setIsActive_3(isActive){
  dynamicCast($getWrapped(this.this$0), Q$ProfileSubjectProxy).setIsActive(isActive);
}
;
_.setSubjectCoef = function setSubjectCoef_1(subjectCoef){
  dynamicCast($getWrapped(this.this$0), Q$ProfileSubjectProxy).setSubjectCoef(subjectCoef);
}
;
defineSeed(1839, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileSubjectProxy]));
_.setIsActive = function setIsActive_4(isActive){
  $setProperty(this.this$0, 'isActive', isActive);
}
;
_.setSubjectCoef = function setSubjectCoef_2(subjectCoef){
  $setProperty(this.this$0, 'subjectCoef', subjectCoef);
}
;
function $clinit_ProfileBrancheRequestFactoryImpl(){
  $clinit_ProfileBrancheRequestFactoryImpl = nullMethod;
  tokensToTypes_17 = new HashMap_0;
  typesToTokens_17 = new HashMap_0;
  entityProxyTypes_17 = new HashSet_0;
  valueProxyTypes_17 = new HashSet_0;
  tokensToTypes_17.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_17.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_21(entityProxyTypes_17, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_17.put('kvY7Ut1y4xJ7SS$RicdCHpatpKU=', Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit);
  typesToTokens_17.put(Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit, 'kvY7Ut1y4xJ7SS$RicdCHpatpKU=');
  $add_21(entityProxyTypes_17, Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit);
}

function ProfileBrancheRequestFactoryImpl_0(){
  $clinit_ProfileBrancheRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1994, 724, {}, ProfileBrancheRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_17(){
  return 'com.lemania.sis.shared.service.ProfileBrancheRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_17(typeToken){
  return dynamicCast(tokensToTypes_17.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_21(type){
  return dynamicCast(typesToTokens_17.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_18(type){
  return $contains_1(entityProxyTypes_17, type);
}
;
_.isValueType = function isValueType_18(type){
  return $contains_1(valueProxyTypes_17, type);
}
;
var entityProxyTypes_17, tokensToTypes_17, typesToTokens_17, valueProxyTypes_17;
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1995, 734, makeCastMap([Q$AbstractRequestContext]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_17(){
  return !FACTORY_18 && (FACTORY_18 = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_FactoryImpl_0) , FACTORY_18;
}
;
var FACTORY_18 = null;
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$3X_0(this$0, val$profileSubjectId){
  this.val$profileSubjectId = val$profileSubjectId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1996, 733, makeCastMap([Q$AbstractRequest]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_73(){
  return new RequestData_0('V7dv6KIgirTxSag8or0MDidZdzI=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileSubjectId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit);
}
;
_.val$profileSubjectId = null;
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$5X_0(this$0, val$profileBranche){
  this.val$profileBranche = val$profileBranche;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1997, 733, makeCastMap([Q$AbstractRequest]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_74(){
  return new RequestData_0('t8kqVv8_9B9EkA9eL0dp9$MGjjk=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileBranche]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$profileBranche = null;
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$7X_0(this$0, val$newProfileSubject){
  this.val$newProfileSubject = val$newProfileSubject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1998, 733, makeCastMap([Q$AbstractRequest]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_75(){
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

defineSeed(1999, 733, makeCastMap([Q$AbstractRequest]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_76(){
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

defineSeed(2000, 662, makeCastMap([Q$EnumMap]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_18(map){
  $add_16(map, Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit, $getConstructors_com_lemania_sis_shared_ProfileBrancheProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_18(){
}
;
function ProfileRequestFactory_ProfileRequestContextImpl$8X_0(this$0, val$profileName, val$classId){
  this.val$profileName = val$profileName;
  this.val$classId = val$classId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(2004, 733, makeCastMap([Q$AbstractRequest]), ProfileRequestFactory_ProfileRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_78(){
  return new RequestData_0('JEA2guWtUXYp9hXVJOdjyimKW_0=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileName, this.val$classId]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileProxy_2_classLit, null);
}
;
_.val$classId = null;
_.val$profileName = null;
function $calculateTotalBrancheCoef(this$static, profileSubjectId){
  var x;
  x = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$1X_0(this$static, profileSubjectId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$1X_0(this$0, val$profileSubjectId){
  this.val$profileSubjectId = val$profileSubjectId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(2008, 733, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_79(){
  return new RequestData_0('qTOdZ6XT2bC4RQ$sfLmvUoGt3gg=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileSubjectId]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit, null);
}
;
_.val$profileSubjectId = null;
function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$6X_0(this$0, val$profileSubject){
  this.val$profileSubject = val$profileSubject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(2010, 733, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_81(){
  return new RequestData_0('4oslgQo44QiRUaRMww77Wr0Ja8E=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileSubject]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$profileSubject = null;
function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$8X_0(this$0, val$newProfileSubject){
  this.val$newProfileSubject = val$newProfileSubject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(2011, 733, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_82(){
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

defineSeed(2012, 733, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$9X_0);
_.makeRequestData = function makeRequestData_83(){
  return new RequestData_0('8SLCmloTUXnDwqJAzEjz$AwsCug=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileId, this.val$subjectId, this.val$professorId, this.val$subjectCoef]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit, null);
}
;
_.val$professorId = null;
_.val$profileId = null;
_.val$subjectCoef = null;
_.val$subjectId = null;
var Lcom_lemania_sis_client_presenter_ProfileManagementPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter', 1403), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$1', 1404), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$2', 1411), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$3', 1412), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$4', 1413), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$5', 1414), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$6', 1415), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$7_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$7', 1416), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$8_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$8', 1417), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$9_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$9', 1418), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$10_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$10', 1405), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$11_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$11', 1406), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$12_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$12', 1407), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$13_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$13', 1408), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$14_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$14', 1409), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$15_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$15', 1410), Lcom_lemania_sis_client_event_ProfileBrancheAfterAddEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'ProfileBrancheAfterAddEvent', 871), Lcom_lemania_sis_client_presenter_ProfileManagementPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenterMyProxyImpl$1', 1420), Lcom_lemania_sis_client_presenter_ProfileManagementPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenterMyProxyImpl$1$1', 1421), Lcom_lemania_sis_client_view_ProfileManagementView_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView', 1730), Lcom_lemania_sis_client_view_ProfileManagementView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$1', 1731), Lcom_lemania_sis_client_view_ProfileManagementView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$2', 1738), Lcom_lemania_sis_client_view_ProfileManagementView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$3', 1739), Lcom_lemania_sis_client_view_ProfileManagementView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$4', 1740), Lcom_lemania_sis_client_view_ProfileManagementView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$5', 1741), Lcom_lemania_sis_client_view_ProfileManagementView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$6', 1742), Lcom_lemania_sis_client_view_ProfileManagementView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$7', 1743), Lcom_lemania_sis_client_view_ProfileManagementView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$8', 1744), Lcom_lemania_sis_client_view_ProfileManagementView$9_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$9', 1745), Lcom_lemania_sis_client_view_ProfileManagementView$10_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$10', 1732), Lcom_lemania_sis_client_view_ProfileManagementView$11_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$11', 1733), Lcom_lemania_sis_client_view_ProfileManagementView$12_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$12', 1734), Lcom_lemania_sis_client_view_ProfileManagementView$13_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$13', 1735), Lcom_lemania_sis_client_view_ProfileManagementView$14_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$14', 1736), Lcom_lemania_sis_client_view_ProfileManagementView$15_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$15', 1737), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl', 1746), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets', 1747), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$1', 1748), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$2', 1749), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$3', 1750), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$4', 1751), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$5', 1752), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$6', 1753), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$7', 1754), Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'ProfileBrancheProxy'), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactoryImpl', 1994), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$1X', 2008), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$6X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$6X', 2010), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$8X', 2011), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$9X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$9X', 2012), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl', 1995), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$3X', 1996), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$5X', 1997), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl$7X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$7X', 1998), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$8X', 1999), Lcom_lemania_sis_shared_service_ProfileRequestFactory_1ProfileRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileRequestFactory_ProfileRequestContextImpl$8X', 2004), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_FactoryImpl', 2000), Lcom_lemania_sis_shared_ProfileBrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1831), Lcom_lemania_sis_shared_ProfileBrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1832), Lcom_lemania_sis_shared_ProfileBrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1833);
$entry(onLoad)(21);
