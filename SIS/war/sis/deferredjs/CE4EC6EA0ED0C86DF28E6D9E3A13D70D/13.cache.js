function $onBrowserEvent_0(this$static, context, parent_0, value, event_0, valueUpdater){
  var eventTarget;
  $onBrowserEvent(this$static, context, parent_0, value, event_0, valueUpdater);
  if ($equals_3('click', event_0.type)) {
    eventTarget = event_0.target;
    if (!is_0(eventTarget)) {
      return;
    }
    $isOrHasChild($getFirstChildElement(parent_0), eventTarget) && !!valueUpdater && valueUpdater.update_0(value);
  }
}

function $onEnterKeyDown(value, valueUpdater){
  !!valueUpdater && valueUpdater.update_0(value);
}

function ButtonCell_0(){
  ButtonCell_1.call(this, (!instance_2 && (instance_2 = new SimpleSafeHtmlRenderer_0) , instance_2));
}

function ButtonCell_1(renderer){
  AbstractSafeHtmlCell_0.call(this, renderer, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['click', 'keydown']));
}

defineSeed(89, 88, {}, ButtonCell_0);
_.onBrowserEvent = function onBrowserEvent_0(context, parent_0, value, event_0, valueUpdater){
  $onBrowserEvent_0(this, context, parent_0, dynamicCast(value, Q$String), event_0, valueUpdater);
}
;
_.onEnterKeyDown = function onEnterKeyDown_0(context, parent_0, value, event_0, valueUpdater){
  $onEnterKeyDown(dynamicCast(value, Q$String), valueUpdater);
}
;
_.render_0 = function render_0(context, data, sb){
  $append_11(sb.sb, '<button type="button" tabindex="-1">');
  !!data && ($append_11(sb.sb, data.html) , sb);
  $append_11(sb.sb, '<\/button>');
}
;
function DoubleParser_0(){
}

defineSeed(303, 1, {}, DoubleParser_0);
var INSTANCE_1 = null;
function DoubleRenderer_0(){
}

defineSeed(304, 305, {}, DoubleRenderer_0);
var INSTANCE_2 = null;
function ValueBox_0(element){
  ValueBoxBase_0.call(this, element);
}

defineSeed(425, 426, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
function DoubleBox_0(){
  ValueBox_0.call(this, $createInputElement($doc, 'text'), (!INSTANCE_2 && (INSTANCE_2 = new DoubleRenderer_0) , !INSTANCE_1 && (INSTANCE_1 = new DoubleParser_0)));
}

defineSeed(424, 425, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), DoubleBox_0);
function ProfileBrancheAfterAddEvent_0(profileSubjectId){
  $clinit_ProfileBrancheAfterAddEvent();
  this.profileSubjectId = profileSubjectId;
}

defineSeed(721, 224, {}, ProfileBrancheAfterAddEvent_0);
_.dispatch_0 = function dispatch_37(handler){
  dynamicCast(handler, Q$ProfileBrancheAfterAddEvent$ProfileBrancheAfterAddHandler).onProfileBrancheAfterAdd(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_38(){
  return TYPE_37;
}
;
_.profileSubjectId = '';
function $addBrancheToProfile(this$static, profileSubjectId, brancheId, brancheCoef){
  var rc, rf, x;
  if (!profileSubjectId.length) {
    alert_0('Donn\xE9e Invalide - Profil');
    return;
  }
  if (!brancheId.length) {
    alert_0('Donn\xE9e Invalide - Mati\xE8re');
    return;
  }
  if (!$matches(brancheCoef, '-?\\d+(\\.\\d+)?')) {
    alert_0('Donn\xE9e Invalide - Coefficient de la branche');
    return;
  }
  rf = new ProfileBrancheRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0(rf);
  $fire((x = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$8X_0(rc, profileSubjectId, brancheId, brancheCoef) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$7_0(this$static, profileSubjectId));
}

function $addSubjectToProfile(this$static, profileId, subjectId, subjectCoef){
  var rc, rf, x;
  if (!profileId.length) {
    alert_0('Donn\xE9e Invalide - Profil');
    return;
  }
  if (!subjectId.length) {
    alert_0('Donn\xE9e Invalide - Mati\xE8re');
    return;
  }
  if (!$matches(subjectCoef, '-?\\d+(\\.\\d+)?')) {
    alert_0('Donn\xE9e Invalide - Coefficient de la mati\xE8re');
    return;
  }
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  $fire((x = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$9X_0(rc, profileId, subjectId, subjectCoef) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$6_0(this$static));
}

function $createNewProfile(this$static, profileName){
  var profile, rc, rf, x;
  if (!profileName.length) {
    alert_0('Donn\xE9e Invalide - Nom du profil');
    return;
  }
  rf = new ProfileRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileRequestFactory_ProfileRequestContextImpl_0(rf);
  profile = dynamicCast($create_1(rc, Lcom_lemania_sis_shared_ProfileProxy_2_classLit), Q$ProfileProxy);
  profile.setProfileName(profileName);
  profile.setIsActive(($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
  $fire((x = new ProfileRequestFactory_ProfileRequestContextImpl$5X_0(rc, profile) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$4_0(this$static));
}

function $loadProfessorList(this$static, subjectId){
  var rc, rf, x;
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  $fire((x = new AssignmentRequestFactory_AssignmentRequestContextImpl$5X_0(rc, subjectId) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$5_0(this$static));
}

function $loadProfileList(this$static){
  var rc, rf, x;
  rf = new ProfileRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileRequestFactory_ProfileRequestContextImpl_0(rf);
  $fire((x = new ProfileRequestFactory_ProfileRequestContextImpl$2X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$3_0(this$static));
}

function $onProfileBrancheAfterAdd(this$static, event_0){
  var rc, rf;
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  $fire($calculateTotalBrancheCoef(rc, event_0.profileSubjectId), new ProfileManagementPresenter$11_0(this$static));
}

function $onProfileChanged(this$static, profileId){
  var rc, rf, x;
  if (!profileId.length) {
    alert_0('Donn\xE9e Invalide - Profil');
    return;
  }
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  $fire((x = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$4X_0(rc, profileId) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$8_0(this$static));
}

function $onSubjectSelected_0(this$static, profileSubjectId){
  var rc, rf, x;
  if (!profileSubjectId.length) {
    alert_0('Merci de choisir une mati\xE8re.');
    return;
  }
  rf = new ProfileBrancheRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0(rf);
  $fire((x = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$3X_0(rc, profileSubjectId) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$10_0(this$static, profileSubjectId));
}

function $removeBranche(this$static, bp, profileSubjectId){
  var rc, rf, x;
  rf = new ProfileBrancheRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0(rf);
  $fire((x = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$5X_0(rc, bp) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$12_0(this$static, profileSubjectId));
}

function $removeSubject(this$static, ps){
  var rc, rf, x;
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  $fire((x = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$6X_0(rc, ps) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$13_0(this$static));
}

function $updateProfileSubject(this$static, ps, coef, isActive){
  var rc, rf, x;
  if (!$matches(coef, '-?\\d+(\\.\\d+)?')) {
    alert_0('Donn\xE9e Invalide - Coefficient de la mati\xE8re');
    return;
  }
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  ps = dynamicCast($editProxy(rc, ps), Q$ProfileSubjectProxy);
  ps.setSubjectCoef(($clinit_Double() , new Double_0(__parseAndValidateDouble(coef))));
  ps.setIsActive(isActive);
  $fire((x = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$8X_0(rc, ps) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$9_0(this$static));
}

function ProfileManagementPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(808, 664, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ProfileBrancheAfterAddEvent$ProfileBrancheAfterAddHandler, Q$ProfileManagementPresenter, Q$ProfileManagementUiHandler]), ProfileManagementPresenter_0);
_.onBind = function onBind_15(){
  dynamicCast(this.view, Q$ProfileManagementPresenter$MyView).setUiHandlers(this);
  $initializeTables(dynamicCast(this.view, Q$ProfileManagementPresenter$MyView));
}
;
_.onProfileBrancheAfterAdd = function onProfileBrancheAfterAdd(event_0){
  $onProfileBrancheAfterAdd(this, event_0);
}
;
_.onReset = function onReset_9(){
  var rf, rc, rf_0, rc_0;
  $resetForm_3(dynamicCast(this.view, Q$ProfileManagementPresenter$MyView));
  $loadProfileList(this);
  rf = new SubjectRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new SubjectRequestFactory_SubjectRequestContextImpl_0(rf);
  $fire($listAllActive(rc), new ProfileManagementPresenter$2_0(this));
  rf_0 = new BrancheRequestFactoryImpl_0;
  $initialize(rf_0, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc_0 = new BrancheRequestFactory_BrancheRequestContextImpl_0(rf_0);
  $fire($listAll_0(rc_0), new ProfileManagementPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_14(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_26(this$static, response){
  $setBrancheListData(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(809, 603, makeCastMap([Q$Receiver]), ProfileManagementPresenter$1_0);
_.onFailure_0 = function onFailure_26(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_26(response){
  $onSuccess_26(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_27(this$static, response){
  $doFire(this$static.this$0.eventBus, new ProfileBrancheAfterAddEvent_0(this$static.val$profileSubjectId), null);
  $setBrancheTableData_0(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$10_0(this$0, val$profileSubjectId){
  this.this$0 = this$0;
  this.val$profileSubjectId = val$profileSubjectId;
}

defineSeed(810, 603, makeCastMap([Q$Receiver]), ProfileManagementPresenter$10_0);
_.onFailure_0 = function onFailure_27(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_27(response){
  $onSuccess_27(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
_.val$profileSubjectId = null;
function $onSuccess_28(this$static, response){
  $showUpdatedProfileSubject(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$11_0(this$0){
  this.this$0 = this$0;
}

defineSeed(811, 603, makeCastMap([Q$Receiver]), ProfileManagementPresenter$11_0);
_.onFailure_0 = function onFailure_28(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_28(response){
  $onSuccess_28(this, dynamicCast(response, Q$ProfileSubjectProxy));
}
;
_.this$0 = null;
function $onSuccess_29(this$static){
  $doFire(this$static.this$0.eventBus, new ProfileBrancheAfterAddEvent_0(this$static.val$profileSubjectId), null);
  $removeProfileBrancheFromTable(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView));
}

function ProfileManagementPresenter$12_0(this$0, val$profileSubjectId){
  this.this$0 = this$0;
  this.val$profileSubjectId = val$profileSubjectId;
}

defineSeed(812, 603, makeCastMap([Q$Receiver]), ProfileManagementPresenter$12_0);
_.onFailure_0 = function onFailure_29(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_29(response){
  $onSuccess_29(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
_.val$profileSubjectId = null;
function $onSuccess_30(this$static, deleted){
  deleted.value_0?$removeProfileSubjectFromTable(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView)):alert_0("Merci de supprimer toutes les branches de cette mati\xE8re d'abord.");
}

function ProfileManagementPresenter$13_0(this$0){
  this.this$0 = this$0;
}

defineSeed(813, 603, makeCastMap([Q$Receiver]), ProfileManagementPresenter$13_0);
_.onFailure_0 = function onFailure_30(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_30(deleted){
  $onSuccess_30(this, dynamicCast(deleted, Q$Boolean));
}
;
_.this$0 = null;
function $onSuccess_31(this$static, response){
  $setSubjectListData_0(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(814, 603, makeCastMap([Q$Receiver]), ProfileManagementPresenter$2_0);
_.onFailure_0 = function onFailure_31(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_31(response){
  $onSuccess_31(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_32(this$static, response){
  $setProfileListData(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(815, 603, makeCastMap([Q$Receiver]), ProfileManagementPresenter$3_0);
_.onFailure_0 = function onFailure_32(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_32(response){
  $onSuccess_32(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_33(this$static){
  $resetForm_3(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView));
  $loadProfileList(this$static.this$0);
}

function ProfileManagementPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(816, 603, makeCastMap([Q$Receiver]), ProfileManagementPresenter$4_0);
_.onFailure_0 = function onFailure_33(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_33(response){
  $onSuccess_33(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $onSuccess_34(this$static, response){
  $setProfessorListData(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(817, 603, makeCastMap([Q$Receiver]), ProfileManagementPresenter$5_0);
_.onFailure_0 = function onFailure_34(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_34(response){
  $onSuccess_34(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_35(this$static, response){
  $addNewProfileSubjectToTable(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(818, 603, makeCastMap([Q$Receiver]), ProfileManagementPresenter$6_0);
_.onFailure_0 = function onFailure_35(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_35(response){
  $onSuccess_35(this, dynamicCast(response, Q$ProfileSubjectProxy));
}
;
_.this$0 = null;
function $onSuccess_36(this$static, response){
  $doFire(this$static.this$0.eventBus, new ProfileBrancheAfterAddEvent_0(this$static.val$profileSubjectId), null);
  $addNewProfileBrancheToTable(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$7_0(this$0, val$profileSubjectId){
  this.this$0 = this$0;
  this.val$profileSubjectId = val$profileSubjectId;
}

defineSeed(819, 603, makeCastMap([Q$Receiver]), ProfileManagementPresenter$7_0);
_.onFailure_0 = function onFailure_36(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_36(response){
  $onSuccess_36(this, dynamicCast(response, Q$ProfileBrancheProxy));
}
;
_.this$0 = null;
_.val$profileSubjectId = null;
function $onSuccess_37(this$static, response){
  $setSubjectTableData(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(820, 603, makeCastMap([Q$Receiver]), ProfileManagementPresenter$8_0);
_.onFailure_0 = function onFailure_37(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_37(response){
  $onSuccess_37(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_38(this$static, response){
  $showUpdatedProfileSubject(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(821, 603, makeCastMap([Q$Receiver]), ProfileManagementPresenter$9_0);
_.onFailure_0 = function onFailure_38(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_38(response){
  $onSuccess_38(this, dynamicCast(response, Q$ProfileSubjectProxy));
}
;
_.this$0 = null;
defineSeed(822, 695, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$ProfileBrancheAfterAddEvent$ProfileBrancheAfterAddHandler]));
_.onProfileBrancheAfterAdd = function onProfileBrancheAfterAdd_0(event_0){
  $getPresenter_0(this, new ProfileManagementPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
function $success_6(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new ProfileManagementPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function ProfileManagementPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(823, 677, {}, ProfileManagementPresenterMyProxyImpl$1_0);
_.success = function success_8(presenter){
  $success_6(this, dynamicCast(presenter, Q$ProfileManagementPresenter));
}
;
_.val$event = null;
function ProfileManagementPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(824, 1, {}, ProfileManagementPresenterMyProxyImpl$1$1_0);
_.execute_1 = function execute_34(){
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

defineSeed(886, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_68(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $addNewProfileBrancheToTable(this$static, branche){
  $add_12(this$static.brancheDataProvider.listWrapper, branche);
  $refresh(this$static.brancheDataProvider);
}

function $addNewProfileSubjectToTable(this$static, profileSubject){
  $add_12(this$static.subjectDataProvider.listWrapper, profileSubject);
  $refresh(this$static.subjectDataProvider);
}

function $initializeTables(this$static){
  var colSubjectName, colCoef, cellActive, colActive, colTotalBrancheCoef, colDelete, selectionModel, colBrancheName, colCoef_0, colDelete_0;
  colSubjectName = new ProfileManagementView$1_0;
  $addColumn(this$static.tblSubjects, colSubjectName, 'Mati\xE8re');
  colCoef = new ProfileManagementView$2_0(new EditTextCell_0);
  $addColumn(this$static.tblSubjects, colCoef, 'Coefficient');
  $setFieldUpdater(colCoef, new ProfileManagementView$3_0(this$static));
  cellActive = new CheckboxCell_0;
  colActive = new ProfileManagementView$4_0(cellActive);
  $addColumn(this$static.tblSubjects, colActive, 'Active');
  $setFieldUpdater(colActive, new ProfileManagementView$5_0(this$static));
  colTotalBrancheCoef = new ProfileManagementView$6_0;
  $addColumn(this$static.tblSubjects, colTotalBrancheCoef, 'Branche Coefs');
  colDelete = new ProfileManagementView$7_0(new ButtonCell_0);
  $addColumn(this$static.tblSubjects, colDelete, '');
  $setFieldUpdater(colDelete, new ProfileManagementView$8_0(this$static));
  $addDataDisplay(this$static.subjectDataProvider, this$static.tblSubjects);
  selectionModel = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblSubjects, selectionModel);
  $addSelectionChangeHandler(selectionModel, new ProfileManagementView$9_0(this$static, selectionModel));
  colBrancheName = new ProfileManagementView$10_0;
  $addColumn(this$static.tblBranches, colBrancheName, 'Branche');
  colCoef_0 = new ProfileManagementView$11_0(new EditTextCell_0);
  $addColumn(this$static.tblBranches, colCoef_0, 'Coefficient');
  $setFieldUpdater(colCoef_0, new ProfileManagementView$12_0(this$static));
  colDelete_0 = new ProfileManagementView$13_0(new ButtonCell_0);
  $addColumn(this$static.tblBranches, colDelete_0, '');
  $setFieldUpdater(colDelete_0, new ProfileManagementView$14_0(this$static));
  $addDataDisplay(this$static.brancheDataProvider, this$static.tblBranches);
}

function $onCmdAddBrancheClick(this$static){
  if (!this$static.selectedSubject) {
    alert_0('Merci de choisir une mati\xE8re.');
    return;
  }
  !!this$static.uiHandlers && !!this$static.selectedSubject && $addBrancheToProfile(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), '' + toString_6(this$static.selectedSubject.getId_0().value_0), $getValue_1(this$static.lstBranches, this$static.lstBranches.element.selectedIndex), $getPropertyString(this$static.txtBrancheCoef.element, 'value'));
}

function $onCmdAddSubjectClick(this$static){
  !!this$static.uiHandlers && $addSubjectToProfile(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getValue_1(this$static.lstProfiles, this$static.lstProfiles.element.selectedIndex), $getValue_1(this$static.lstSubjects, this$static.lstSubjects.element.selectedIndex), $getPropertyString(this$static.txtSubjectCoef.element, 'value'));
}

function $onCmdCreateNewProfileClick(this$static){
  this$static.txtNewProfileName.element['value'] = '';
  $setVisible_0(this$static.pnlAddNewProfile, true);
}

function $onCmdSaveNewProfileClick(this$static){
  !!this$static.uiHandlers && $createNewProfile(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getPropertyString(this$static.txtNewProfileName.element, 'value'));
}

function $onLstProfilesChange(this$static){
  $clear_3(this$static.subjectDataProvider.listWrapper);
  $clear_3(this$static.brancheDataProvider.listWrapper);
  !!this$static.uiHandlers && $onProfileChanged(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getValue_1(this$static.lstProfiles, this$static.lstProfiles.element.selectedIndex));
}

function $onLstSubjectsChange(this$static){
  !!this$static.uiHandlers && $loadProfessorList(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getValue_1(this$static.lstSubjects, this$static.lstSubjects.element.selectedIndex));
}

function $removeProfileBrancheFromTable(this$static){
  $remove_11(this$static.brancheDataProvider.listWrapper, this$static.selectedBrancheIndex);
  $refresh(this$static.brancheDataProvider);
}

function $removeProfileSubjectFromTable(this$static){
  $remove_11(this$static.subjectDataProvider.listWrapper, this$static.selectedSubjectIndex);
  $refresh(this$static.subjectDataProvider);
}

function $resetForm_3(this$static){
  $setVisible_0(this$static.pnlAddNewProfile, false);
  $clear_3(this$static.subjectDataProvider.listWrapper);
  $clear_3(this$static.brancheDataProvider.listWrapper);
  $selectClear(this$static.lstProfiles.element);
  $selectClear(this$static.lstSubjects.element);
  $selectClear(this$static.lstProfessors.element);
  $selectClear(this$static.lstBranches.element);
  this$static.txtSubjectCoef.element['value'] = '';
  this$static.txtBrancheCoef.element['value'] = '';
}

function $setBrancheListData(this$static, brancheList){
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
}

function $setProfessorListData(this$static, profs){
  var prof, prof$iterator;
  $selectClear(this$static.lstProfessors.element);
  $insertItem(this$static.lstProfessors, '-', '', -1);
  for (prof$iterator = profs.iterator(); prof$iterator.hasNext();) {
    prof = dynamicCast(prof$iterator.next_0(), Q$ProfessorProxy);
    $insertItem(this$static.lstProfessors, prof.getProfName(), '' + toString_6(prof.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstProfessors, 0);
}

function $setProfileListData(this$static, profiles){
  var profile, profile$iterator;
  $selectClear(this$static.lstProfiles.element);
  $insertItem(this$static.lstProfiles, '-', '', -1);
  for (profile$iterator = profiles.iterator(); profile$iterator.hasNext();) {
    profile = dynamicCast(profile$iterator.next_0(), Q$ProfileProxy);
    $insertItem(this$static.lstProfiles, profile.getProfileName(), '' + toString_6(profile.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstProfiles, 0);
}

function $setSubjectListData_0(this$static, subjectList){
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
  $setList(this$static.subjectDataProvider, subjects);
}

function $showUpdatedProfileSubject(this$static, ps){
  $remove_11(this$static.subjectDataProvider.listWrapper, this$static.selectedSubjectIndex);
  $add_11(this$static.subjectDataProvider.listWrapper, this$static.selectedSubjectIndex, ps);
  $refresh(this$static.subjectDataProvider);
}

function ProfileManagementView_0(){
  this.subjectDataProvider = new ListDataProvider_0;
  this.brancheDataProvider = new ListDataProvider_0;
  this.tblSubjects = new DataGrid_0;
  this.tblBranches = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_12(new ProfileManagementView_BinderImpl$Widgets_0(this));
}

defineSeed(1036, 669, makeCastMap([Q$IsWidget, Q$ProfileManagementPresenter$MyView]), ProfileManagementView_0);
_.asWidget = function asWidget_17(){
  return this.widget;
}
;
_.lblSelectedSubject = null;
_.lstBranches = null;
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

defineSeed(1037, 373, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$1_0);
_.getValue = function getValue_14(object){
  return dynamicCast(object, Q$ProfileSubjectProxy).getSubjectName();
}
;
function ProfileManagementView$10_0(){
  TextColumn_0.call(this);
}

defineSeed(1038, 373, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$10_0);
_.getValue = function getValue_15(object){
  return dynamicCast(object, Q$ProfileBrancheProxy).getProfileBrancheName();
}
;
function $getValue_5(object){
  return $clinit_Double() , '' + object.getBrancheCoef().value_0;
}

function ProfileManagementView$11_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1039, 347, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$11_0);
_.getValue = function getValue_16(object){
  return $getValue_5(dynamicCast(object, Q$ProfileBrancheProxy));
}
;
function $update_11(this$static, index){
  !!this$static.this$0.uiHandlers && (this$static.this$0.selectedBrancheIndex = index);
}

function ProfileManagementView$12_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1040, 1, {}, ProfileManagementView$12_0);
_.update = function update_12(index, subject, value){
  $update_11(this, index, (dynamicCast(subject, Q$ProfileBrancheProxy) , dynamicCast(value, Q$String)));
}
;
_.this$0 = null;
function ProfileManagementView$13_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1041, 347, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$13_0);
_.getValue = function getValue_17(bp){
  return dynamicCast(bp, Q$ProfileBrancheProxy) , 'Suprimmer';
}
;
function $update_12(this$static, index, bp){
  this$static.this$0.selectedBrancheIndex = index;
  $removeBranche(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), bp, '' + toString_6(this$static.this$0.selectedSubject.getId_0().value_0));
}

function ProfileManagementView$14_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1042, 1, {}, ProfileManagementView$14_0);
_.update = function update_13(index, bp, value){
  $update_12(this, index, dynamicCast(bp, Q$ProfileBrancheProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function $getValue_6(object){
  return $clinit_Double() , '' + object.getSubjectCoef().value_0;
}

function ProfileManagementView$2_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1043, 347, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$2_0);
_.getValue = function getValue_18(object){
  return $getValue_6(dynamicCast(object, Q$ProfileSubjectProxy));
}
;
function $update_13(this$static, index, subject, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedSubjectIndex = index;
    $updateProfileSubject(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), subject, value, subject.getIsActive());
  }
}

function ProfileManagementView$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1044, 1, {}, ProfileManagementView$3_0);
_.update = function update_14(index, subject, value){
  $update_13(this, index, dynamicCast(subject, Q$ProfileSubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function ProfileManagementView$4_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1045, 347, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$4_0);
_.getValue = function getValue_19(subject){
  return dynamicCast(subject, Q$ProfileSubjectProxy).getIsActive();
}
;
function $update_14(this$static, index, subject, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedSubjectIndex = index;
    $updateProfileSubject(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), subject, ($clinit_Double() , '' + subject.getSubjectCoef().value_0), value);
  }
}

function ProfileManagementView$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1046, 1, {}, ProfileManagementView$5_0);
_.update = function update_15(index, subject, value){
  $update_14(this, index, dynamicCast(subject, Q$ProfileSubjectProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function $getValue_7(object){
  return $clinit_Double() , '' + object.getTotalBrancheCoef().value_0;
}

function ProfileManagementView$6_0(){
  TextColumn_0.call(this);
}

defineSeed(1047, 373, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$6_0);
_.getValue = function getValue_20(object){
  return $getValue_7(dynamicCast(object, Q$ProfileSubjectProxy));
}
;
function ProfileManagementView$7_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1048, 347, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$7_0);
_.getValue = function getValue_21(bp){
  return dynamicCast(bp, Q$ProfileSubjectProxy) , 'Suprimmer';
}
;
function $update_15(this$static, index, ps){
  this$static.this$0.selectedSubjectIndex = index;
  $removeSubject(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), ps);
}

function ProfileManagementView$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1049, 1, {}, ProfileManagementView$8_0);
_.update = function update_16(index, ps, value){
  $update_15(this, index, dynamicCast(ps, Q$ProfileSubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function ProfileManagementView$9_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1050, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), ProfileManagementView$9_0);
_.onSelectionChange = function onSelectionChange_0(event_0){
  this.this$0.selectedSubject = dynamicCast($getSelectedObject(this.val$selectionModel), Q$ProfileSubjectProxy);
  if (this.this$0.selectedSubject) {
    this.this$0.selectedSubjectIndex = $indexOf_0(this.this$0.subjectDataProvider.listWrapper, this.this$0.selectedSubject);
    $setText_0(this.this$0.lblSelectedSubject, this.this$0.selectedSubject.getSubjectName());
    $onSubjectSelected_0(dynamicCast(this.this$0.uiHandlers, Q$ProfileManagementUiHandler), '' + toString_6(this.this$0.selectedSubject.getId_0().value_0));
  }
}
;
_.this$0 = null;
_.val$selectionModel = null;
function ProfileManagementView_BinderImpl_0(){
}

defineSeed(1051, 1, {}, ProfileManagementView_BinderImpl_0);
function $build_f_HTMLPanel1_12(this$static){
  var attachRecord12, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_VerticalPanel4, f_Grid5, f_Label6, lstProfiles, cmdCreateNewProfile, pnlAddNewProfile, f_Grid7, f_VerticalPanel8, f_VerticalPanel15, txtNewProfileName, cmdSaveNewProfile, f_Label9, f_Label10, f_Grid11, f_Label12, lstSubjects, txtSubjectCoef, f_Label13, lstProfessors, f_Label14, cmdAddSubject, tblSubjects, f_Label16, f_Label17, f_Grid18, f_Label19, lstBranches, txtBrancheCoef, f_Label20, cmdAddBranche, f_Label21, f_Label22, lblSelectedSubject, tblBranches;
  f_HTMLPanel1 = new HTMLPanel_0($html1_11(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord12 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord12.origParent?$insertBefore(attachRecord12.origParent, attachRecord12.element, attachRecord12.origSibling):orphan(attachRecord12.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_9(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'GESTION DES PROFILS') , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_9(f_VerticalPanel2, (f_VerticalPanel4 = new VerticalPanel_0 , $add_9(f_VerticalPanel4, (f_Grid5 = new Grid_0 , $resizeColumns(f_Grid5, 4) , $resizeRows(f_Grid5, 1) , $setWidget_1(f_Grid5, 0, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'List des profils :') , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid5, 0, 1, (lstProfiles = new ListBox_0 , lstProfiles.element['className'] = 'sis_textbox' , $addDomHandler(lstProfiles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstProfiles = lstProfiles , lstProfiles)) , $setWidget_1(f_Grid5, 0, 2, (cmdCreateNewProfile = new Button_0 , $setInnerText(cmdCreateNewProfile.element, 'Cr\xE9er un nouveau profil') , $addDomHandler(cmdCreateNewProfile, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdCreateNewProfile)) , $setWidget_1(f_Grid5, 0, 3, (pnlAddNewProfile = new FlowPanel_0 , $add_5(pnlAddNewProfile, (txtNewProfileName = new TextBox_0 , this$static.owner.txtNewProfileName = txtNewProfileName , txtNewProfileName)) , $add_5(pnlAddNewProfile, (cmdSaveNewProfile = new Button_0 , $setInnerText(cmdSaveNewProfile.element, 'Enregistrer') , $addDomHandler(cmdSaveNewProfile, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , cmdSaveNewProfile)) , setVisible(pnlAddNewProfile.element, false) , this$static.owner.pnlAddNewProfile = pnlAddNewProfile , pnlAddNewProfile)) , f_Grid5.tableElem['cellSpacing'] = 5 , f_Grid5.tableElem['cellPadding'] = 5 , f_Grid5)) , $add_9(f_VerticalPanel4, (f_Grid7 = new Grid_0 , $resizeColumns(f_Grid7, 2) , $resizeRows(f_Grid7, 1) , $setWidget_1(f_Grid7, 0, 0, (f_VerticalPanel8 = new VerticalPanel_0 , $add_9(f_VerticalPanel8, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label9.directionalTextHelper, 'Mati\xE8res') , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $add_9(f_VerticalPanel8, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Rajouter une mati\xE8re au profil') , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $add_9(f_VerticalPanel8, (f_Grid11 = new Grid_0 , $resizeColumns(f_Grid11, 3) , $resizeRows(f_Grid11, 3) , $setWidget_1(f_Grid11, 0, 0, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Mati\xE8re :') , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_1(f_Grid11, 0, 1, (lstSubjects = new ListBox_0 , lstSubjects.element['className'] = 'sis_textbox' , lstSubjects.element.style['width'] = '' , $addDomHandler(lstSubjects, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this$static.owner.lstSubjects = lstSubjects , lstSubjects)) , $setWidget_1(f_Grid11, 0, 2, (txtSubjectCoef = new DoubleBox_0 , txtSubjectCoef.element.style['width'] = '50px' , this$static.owner.txtSubjectCoef = txtSubjectCoef , txtSubjectCoef)) , $setWidget_1(f_Grid11, 1, 0, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'Professeur :') , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_1(f_Grid11, 1, 1, (lstProfessors = new ListBox_0 , lstProfessors.element['className'] = 'sis_textbox' , lstProfessors.element.style['width'] = '' , this$static.owner.lstProfessors = lstProfessors , lstProfessors)) , $setWidget_1(f_Grid11, 2, 0, (f_Label14 = new Label_0 , f_Label14.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label14.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_1(f_Grid11, 2, 1, (cmdAddSubject = new Button_0 , $setInnerText(cmdAddSubject.element, 'Ajouter la mati\xE8re') , $addDomHandler(cmdAddSubject, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_0) , cmdAddSubject)) , f_Grid11.element.style['width'] = '' , f_Grid11.tableElem['cellSpacing'] = 5 , f_Grid11.tableElem['cellPadding'] = 5 , f_Grid11)) , $add_9(f_VerticalPanel8, (tblSubjects = this$static.owner.tblSubjects , tblSubjects.element.style['height'] = '200px' , tblSubjects.element.style['width'] = '100%' , tblSubjects)) , f_VerticalPanel8.element.style['width'] = '' , f_VerticalPanel8.table['cellSpacing'] = 2 , f_VerticalPanel8)) , $setWidget_1(f_Grid7, 0, 1, (f_VerticalPanel15 = new VerticalPanel_0 , $add_9(f_VerticalPanel15, (f_Label16 = new Label_0 , f_Label16.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label16.directionalTextHelper, 'Branches') , $updateHorizontalAlignment(f_Label16) , f_Label16.element.style['width'] = '' , f_Label16)) , $add_9(f_VerticalPanel15, (f_Label17 = new Label_0 , $setTextOrHtml(f_Label17.directionalTextHelper, 'Rajouter une branche pour la mati\xE8re s\xE9lection\xE9e') , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $add_9(f_VerticalPanel15, (f_Grid18 = new Grid_0 , $resizeColumns(f_Grid18, 3) , $resizeRows(f_Grid18, 3) , $setWidget_1(f_Grid18, 0, 0, (f_Label19 = new Label_0 , $setTextOrHtml(f_Label19.directionalTextHelper, 'Branche :') , $updateHorizontalAlignment(f_Label19) , f_Label19)) , $setWidget_1(f_Grid18, 0, 1, (lstBranches = new ListBox_0 , lstBranches.element['className'] = 'sis_textbox' , lstBranches.element.style['width'] = '' , this$static.owner.lstBranches = lstBranches , lstBranches)) , $setWidget_1(f_Grid18, 0, 2, (txtBrancheCoef = new DoubleBox_0 , txtBrancheCoef.element.style['width'] = '50px' , this$static.owner.txtBrancheCoef = txtBrancheCoef , txtBrancheCoef)) , $setWidget_1(f_Grid18, 1, 0, (f_Label20 = new Label_0 , f_Label20.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label20.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label20) , f_Label20)) , $setWidget_1(f_Grid18, 1, 1, (cmdAddBranche = new Button_0 , $setInnerText(cmdAddBranche.element, 'Ajouter la branche') , $addDomHandler(cmdAddBranche, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, TYPE_0) , cmdAddBranche)) , $setWidget_1(f_Grid18, 1, 2, (f_Label21 = new Label_0 , f_Label21.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label21.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label21) , f_Label21)) , $setWidget_1(f_Grid18, 2, 0, (f_Label22 = new Label_0 , f_Label22.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label22.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label22) , f_Label22)) , $setWidget_1(f_Grid18, 2, 1, (lblSelectedSubject = new Label_0 , $setTextOrHtml(lblSelectedSubject.directionalTextHelper, '.') , $updateHorizontalAlignment(lblSelectedSubject) , this$static.owner.lblSelectedSubject = lblSelectedSubject , lblSelectedSubject)) , f_Grid18.tableElem['cellSpacing'] = 5 , f_Grid18.tableElem['cellPadding'] = 5 , f_Grid18)) , $add_9(f_VerticalPanel15, (tblBranches = this$static.owner.tblBranches , tblBranches.element.style['height'] = '200px' , tblBranches.element.style['width'] = '100%' , tblBranches)) , f_VerticalPanel15.element.style['width'] = '' , f_VerticalPanel15.table['cellSpacing'] = 2 , f_VerticalPanel15)) , f_Grid7.element.style['width'] = '' , f_Grid7.tableElem['cellSpacing'] = 5 , f_Grid7.tableElem['cellPadding'] = 5 , f_Grid7)) , f_VerticalPanel4.element.style['width'] = '100%' , f_VerticalPanel4.table['cellSpacing'] = 2 , f_VerticalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ProfileManagementView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ProfileManagementView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ProfileManagementView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ProfileManagementView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ProfileManagementView_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new ProfileManagementView_BinderImpl$Widgets$5_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new ProfileManagementView_BinderImpl$Widgets$6_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1052, 1, {}, ProfileManagementView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function ProfileManagementView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1053, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_30(event_0){
  $onCmdCreateNewProfileClick(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1054, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_31(event_0){
  $onCmdSaveNewProfileClick(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1055, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_3(event_0){
  $onLstSubjectsChange(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1056, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$4_0);
_.onClick = function onClick_32(event_0){
  $onCmdAddSubjectClick(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1057, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$5_0);
_.onClick = function onClick_33(event_0){
  $onCmdAddBrancheClick(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$6_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1058, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$6_0);
_.onChange = function onChange_4(event_0){
  $onLstProfilesChange(this.this$1.owner);
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

function $get_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$) {
    result = new ProfileManagementView_0(new ProfileManagementView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$;
}

function $$init_14(this$static){
  this$static.shim = new ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_14(this);
}

function ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_14(this);
}

defineSeed(1141, 564, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_14(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_14(){
  return new ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_22(){
  return Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_13(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getBrancheCoef(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'brancheCoef'), Ljava_lang_Double_2_classLit);
  visitor.visitValueProperty('brancheCoef', value, propertyContext);
  value = $getId_8(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getProfileBrancheName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'profileBrancheName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('profileBrancheName', value, propertyContext);
}
;
function $getBrancheCoef(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileBrancheProxy).getBrancheCoef();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Double);
  return toReturn;
}

function $getId_8(this$static){
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

defineSeed(1142, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileBrancheProxy]), ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_40(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ProfileBrancheProxy).equals$(o);
}
;
_.getBrancheCoef = function getBrancheCoef(){
  return $getBrancheCoef(this);
}
;
_.getId_0 = function getId_13(){
  return $getId_8(this);
}
;
_.getProfileBrancheName = function getProfileBrancheName(){
  return $getProfileBrancheName(this);
}
;
_.hashCode$ = function hashCode_40(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileBrancheProxy).hashCode$();
}
;
_.toString$ = function toString_30(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileBrancheProxy).toString$();
}
;
_.this$0 = null;
function ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1143, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileBrancheProxy]), ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_41(other){
  return equals_14(this.this$0, other);
}
;
_.getBrancheCoef = function getBrancheCoef_0(){
  return dynamicCast($getOrReify(this.this$0, 'brancheCoef'), Q$Double);
}
;
_.getId_0 = function getId_14(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getProfileBrancheName = function getProfileBrancheName_0(){
  return dynamicCast($getOrReify(this.this$0, 'profileBrancheName'), Q$String);
}
;
_.hashCode$ = function hashCode_41(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.this$0 = null;
function $$init_15(this$static){
  this$static.shim = new ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_15(this);
}

function ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_15(this);
}

defineSeed(1144, 564, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_15(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_15(){
  return new ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_23(){
  return Lcom_lemania_sis_shared_ProfileProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_14(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getIsActive_1(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'isActive'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('isActive', value, propertyContext);
  value = $getId_9(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getProfileName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'profileName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('profileName', value, propertyContext);
}
;
function $getId_9(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getIsActive_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileProxy).getIsActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getProfileName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileProxy).getProfileName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1145, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileProxy]), ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_42(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ProfileProxy).equals$(o);
}
;
_.getId_0 = function getId_15(){
  return $getId_9(this);
}
;
_.getIsActive = function getIsActive_3(){
  return $getIsActive_1(this);
}
;
_.getProfileName = function getProfileName(){
  return $getProfileName(this);
}
;
_.hashCode$ = function hashCode_42(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileProxy).hashCode$();
}
;
_.setIsActive = function setIsActive_3(isActive){
  dynamicCast($getWrapped(this.this$0), Q$ProfileProxy).setIsActive(isActive);
}
;
_.setProfileName = function setProfileName(profileName){
  dynamicCast($getWrapped(this.this$0), Q$ProfileProxy).setProfileName(profileName);
}
;
_.toString$ = function toString_31(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileProxy).toString$();
}
;
_.this$0 = null;
function ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1146, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileProxy]), ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_43(other){
  return equals_14(this.this$0, other);
}
;
_.getId_0 = function getId_16(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getIsActive = function getIsActive_4(){
  return dynamicCast($getOrReify(this.this$0, 'isActive'), Q$Boolean);
}
;
_.getProfileName = function getProfileName_0(){
  return dynamicCast($getOrReify(this.this$0, 'profileName'), Q$String);
}
;
_.hashCode$ = function hashCode_43(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setIsActive = function setIsActive_4(isActive){
  $setProperty(this.this$0, 'isActive', isActive);
}
;
_.setProfileName = function setProfileName_0(profileName){
  $setProperty(this.this$0, 'profileName', profileName);
}
;
_.this$0 = null;
function $$init_16(this$static){
  this$static.shim = new ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_16(this);
}

function ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_16(this);
}

defineSeed(1147, 564, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_16(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_16(){
  return new ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_24(){
  return Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_15(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getIsActive_2(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'isActive'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('isActive', value, propertyContext);
  value = $getSubjectCoef(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'subjectCoef'), Ljava_lang_Double_2_classLit);
  visitor.visitValueProperty('subjectCoef', value, propertyContext);
  value = $getTotalBrancheCoef(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'totalBrancheCoef'), Ljava_lang_Double_2_classLit);
  visitor.visitValueProperty('totalBrancheCoef', value, propertyContext);
  value = $getId_10(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getSubjectName_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'subjectName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('subjectName', value, propertyContext);
}
;
function $getId_10(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileSubjectProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getIsActive_2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileSubjectProxy).getIsActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getSubjectCoef(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileSubjectProxy).getSubjectCoef();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Double);
  return toReturn;
}

function $getSubjectName_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileSubjectProxy).getSubjectName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getTotalBrancheCoef(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileSubjectProxy).getTotalBrancheCoef();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Double);
  return toReturn;
}

function ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1148, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileSubjectProxy]), ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_44(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ProfileSubjectProxy).equals$(o);
}
;
_.getId_0 = function getId_17(){
  return $getId_10(this);
}
;
_.getIsActive = function getIsActive_5(){
  return $getIsActive_2(this);
}
;
_.getSubjectCoef = function getSubjectCoef(){
  return $getSubjectCoef(this);
}
;
_.getSubjectName = function getSubjectName_1(){
  return $getSubjectName_0(this);
}
;
_.getTotalBrancheCoef = function getTotalBrancheCoef(){
  return $getTotalBrancheCoef(this);
}
;
_.hashCode$ = function hashCode_44(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileSubjectProxy).hashCode$();
}
;
_.setIsActive = function setIsActive_5(isActive){
  dynamicCast($getWrapped(this.this$0), Q$ProfileSubjectProxy).setIsActive(isActive);
}
;
_.setSubjectCoef = function setSubjectCoef(subjectCoef){
  dynamicCast($getWrapped(this.this$0), Q$ProfileSubjectProxy).setSubjectCoef(subjectCoef);
}
;
_.toString$ = function toString_32(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileSubjectProxy).toString$();
}
;
_.this$0 = null;
function ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1149, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileSubjectProxy]), ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_45(other){
  return equals_14(this.this$0, other);
}
;
_.getId_0 = function getId_18(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getIsActive = function getIsActive_6(){
  return dynamicCast($getOrReify(this.this$0, 'isActive'), Q$Boolean);
}
;
_.getSubjectCoef = function getSubjectCoef_0(){
  return dynamicCast($getOrReify(this.this$0, 'subjectCoef'), Q$Double);
}
;
_.getSubjectName = function getSubjectName_2(){
  return dynamicCast($getOrReify(this.this$0, 'subjectName'), Q$String);
}
;
_.getTotalBrancheCoef = function getTotalBrancheCoef_0(){
  return dynamicCast($getOrReify(this.this$0, 'totalBrancheCoef'), Q$Double);
}
;
_.hashCode$ = function hashCode_45(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setIsActive = function setIsActive_6(isActive){
  $setProperty(this.this$0, 'isActive', isActive);
}
;
_.setSubjectCoef = function setSubjectCoef_0(subjectCoef){
  $setProperty(this.this$0, 'subjectCoef', subjectCoef);
}
;
_.this$0 = null;
function AssignmentRequestFactory_AssignmentRequestContextImpl$5X_0(this$0, val$subjectId){
  this.val$subjectId = val$subjectId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1165, 607, makeCastMap([Q$AbstractRequest]), AssignmentRequestFactory_AssignmentRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_0(){
  return new RequestData_0('7Aaa0cEufz9T7SRWFp03gtJeB_c=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$subjectId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ProfessorProxy_2_classLit);
}
;
_.val$subjectId = null;
function $clinit_ProfileBrancheRequestFactoryImpl(){
  $clinit_ProfileBrancheRequestFactoryImpl = nullMethod;
  tokensToTypes_5 = new HashMap_0;
  typesToTokens_5 = new HashMap_0;
  entityProxyTypes_5 = new HashSet_0;
  valueProxyTypes_5 = new HashSet_0;
  tokensToTypes_5.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_5.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_18(entityProxyTypes_5, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_5.put('kvY7Ut1y4xJ7SS$RicdCHpatpKU=', Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit);
  typesToTokens_5.put(Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit, 'kvY7Ut1y4xJ7SS$RicdCHpatpKU=');
  $add_18(entityProxyTypes_5, Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit);
}

function ProfileBrancheRequestFactoryImpl_0(){
  $clinit_ProfileBrancheRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1201, 598, {}, ProfileBrancheRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_5(){
  return 'com.lemania.sis.shared.service.ProfileBrancheRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_5(typeToken){
  return dynamicCast(tokensToTypes_5.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_9(type){
  return dynamicCast(typesToTokens_5.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_6(type){
  return $contains_1(entityProxyTypes_5, type);
}
;
_.isValueType = function isValueType_6(type){
  return $contains_1(valueProxyTypes_5, type);
}
;
var entityProxyTypes_5, tokensToTypes_5, typesToTokens_5, valueProxyTypes_5;
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1202, 608, makeCastMap([Q$AbstractRequestContext]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_5(){
  return !FACTORY_6 && (FACTORY_6 = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_FactoryImpl_0) , FACTORY_6;
}
;
var FACTORY_6 = null;
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$3X_0(this$0, val$profileSubjectId){
  this.val$profileSubjectId = val$profileSubjectId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1203, 607, makeCastMap([Q$AbstractRequest]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_18(){
  return new RequestData_0('V7dv6KIgirTxSag8or0MDidZdzI=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileSubjectId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit);
}
;
_.val$profileSubjectId = null;
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$5X_0(this$0, val$profileBranche){
  this.val$profileBranche = val$profileBranche;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1204, 607, makeCastMap([Q$AbstractRequest]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_19(){
  return new RequestData_0('t8kqVv8_9B9EkA9eL0dp9$MGjjk=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileBranche]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$profileBranche = null;
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$8X_0(this$0, val$profileSubjectId, val$brancheId, val$brancheCoef){
  this.val$profileSubjectId = val$profileSubjectId;
  this.val$brancheId = val$brancheId;
  this.val$brancheCoef = val$brancheCoef;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1205, 607, makeCastMap([Q$AbstractRequest]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_20(){
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

defineSeed(1206, 536, makeCastMap([Q$EnumMap]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_6(map){
  $add_13(map, Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit, $getConstructors_com_lemania_sis_shared_ProfileBrancheProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_6(){
}
;
function $clinit_ProfileRequestFactoryImpl(){
  $clinit_ProfileRequestFactoryImpl = nullMethod;
  tokensToTypes_6 = new HashMap_0;
  typesToTokens_6 = new HashMap_0;
  entityProxyTypes_6 = new HashSet_0;
  valueProxyTypes_6 = new HashSet_0;
  tokensToTypes_6.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_6.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_18(entityProxyTypes_6, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_6.put('4f6x2X$iTZunF$uRKvzBsMVHE8Q=', Lcom_lemania_sis_shared_ProfileProxy_2_classLit);
  typesToTokens_6.put(Lcom_lemania_sis_shared_ProfileProxy_2_classLit, '4f6x2X$iTZunF$uRKvzBsMVHE8Q=');
  $add_18(entityProxyTypes_6, Lcom_lemania_sis_shared_ProfileProxy_2_classLit);
}

function ProfileRequestFactoryImpl_0(){
  $clinit_ProfileRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1207, 598, {}, ProfileRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_6(){
  return 'com.lemania.sis.shared.service.ProfileRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_6(typeToken){
  return dynamicCast(tokensToTypes_6.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_10(type){
  return dynamicCast(typesToTokens_6.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_7(type){
  return $contains_1(entityProxyTypes_6, type);
}
;
_.isValueType = function isValueType_7(type){
  return $contains_1(valueProxyTypes_6, type);
}
;
var entityProxyTypes_6, tokensToTypes_6, typesToTokens_6, valueProxyTypes_6;
function ProfileRequestFactory_ProfileRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1208, 608, makeCastMap([Q$AbstractRequestContext]), ProfileRequestFactory_ProfileRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_6(){
  return !FACTORY_7 && (FACTORY_7 = new ProfileRequestFactory_ProfileRequestContextImpl_FactoryImpl_0) , FACTORY_7;
}
;
var FACTORY_7 = null;
function ProfileRequestFactory_ProfileRequestContextImpl$2X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1209, 607, makeCastMap([Q$AbstractRequest]), ProfileRequestFactory_ProfileRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_21(){
  return new RequestData_0('Y4ttalgWTxG4B8KpSodI3WUiu6Q=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ProfileProxy_2_classLit);
}
;
function ProfileRequestFactory_ProfileRequestContextImpl$5X_0(this$0, val$profile){
  this.val$profile = val$profile;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1210, 607, makeCastMap([Q$AbstractRequest]), ProfileRequestFactory_ProfileRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_22(){
  return new RequestData_0('4ZW3fByoCzqlWnOKyk3o7CsXeGI=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profile]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$profile = null;
function $getConstructors_com_lemania_sis_shared_ProfileProxy(){
  return [function(factory){
    return new ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function ProfileRequestFactory_ProfileRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1211, 536, makeCastMap([Q$EnumMap]), ProfileRequestFactory_ProfileRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_7(map){
  $add_13(map, Lcom_lemania_sis_shared_ProfileProxy_2_classLit, $getConstructors_com_lemania_sis_shared_ProfileProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_7(){
}
;
function $clinit_ProfileSubjectRequestFactoryImpl(){
  $clinit_ProfileSubjectRequestFactoryImpl = nullMethod;
  tokensToTypes_7 = new HashMap_0;
  typesToTokens_7 = new HashMap_0;
  entityProxyTypes_7 = new HashSet_0;
  valueProxyTypes_7 = new HashSet_0;
  tokensToTypes_7.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_7.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_18(entityProxyTypes_7, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_7.put('j7rtdtaz0ZtchwX8fbXOqSPLDOo=', Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit);
  typesToTokens_7.put(Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit, 'j7rtdtaz0ZtchwX8fbXOqSPLDOo=');
  $add_18(entityProxyTypes_7, Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit);
}

function ProfileSubjectRequestFactoryImpl_0(){
  $clinit_ProfileSubjectRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1212, 598, {}, ProfileSubjectRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_7(){
  return 'com.lemania.sis.shared.service.ProfileSubjectRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_7(typeToken){
  return dynamicCast(tokensToTypes_7.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_11(type){
  return dynamicCast(typesToTokens_7.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_8(type){
  return $contains_1(entityProxyTypes_7, type);
}
;
_.isValueType = function isValueType_8(type){
  return $contains_1(valueProxyTypes_7, type);
}
;
var entityProxyTypes_7, tokensToTypes_7, typesToTokens_7, valueProxyTypes_7;
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

defineSeed(1213, 608, makeCastMap([Q$AbstractRequestContext]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_7(){
  return !FACTORY_8 && (FACTORY_8 = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_FactoryImpl_0) , FACTORY_8;
}
;
var FACTORY_8 = null;
function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$1X_0(this$0, val$profileSubjectId){
  this.val$profileSubjectId = val$profileSubjectId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1214, 607, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_23(){
  return new RequestData_0('qTOdZ6XT2bC4RQ$sfLmvUoGt3gg=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileSubjectId]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit, null);
}
;
_.val$profileSubjectId = null;
function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$4X_0(this$0, val$profileId){
  this.val$profileId = val$profileId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1215, 607, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_24(){
  return new RequestData_0('9yjny_sIdQooOpdnpZufcosh7MQ=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit);
}
;
_.val$profileId = null;
function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$6X_0(this$0, val$profileSubject){
  this.val$profileSubject = val$profileSubject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1216, 607, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_25(){
  return new RequestData_0('4oslgQo44QiRUaRMww77Wr0Ja8E=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileSubject]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$profileSubject = null;
function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$8X_0(this$0, val$newProfileSubject){
  this.val$newProfileSubject = val$newProfileSubject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1217, 607, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_26(){
  return new RequestData_0('DiLXneANl$CK767vopw82RFxJQw=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newProfileSubject]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit, null);
}
;
_.val$newProfileSubject = null;
function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$9X_0(this$0, val$profileId, val$subjectId, val$subjectCoef){
  this.val$profileId = val$profileId;
  this.val$subjectId = val$subjectId;
  this.val$subjectCoef = val$subjectCoef;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1218, 607, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$9X_0);
_.makeRequestData = function makeRequestData_27(){
  return new RequestData_0('dvHYvsY$ErK6g69TH2oxP2kZQSI=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileId, this.val$subjectId, this.val$subjectCoef]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit, null);
}
;
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

defineSeed(1219, 536, makeCastMap([Q$EnumMap]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_8(map){
  $add_13(map, Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit, $getConstructors_com_lemania_sis_shared_ProfileSubjectProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_8(){
}
;
var Lcom_lemania_sis_client_presenter_ProfileManagementPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter', 808), Lcom_lemania_sis_shared_ProfileProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'ProfileProxy'), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$1', 809), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$2', 814), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$3', 815), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$4', 816), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$5', 817), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$6', 818), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$7_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$7', 819), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$8_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$8', 820), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$9_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$9', 821), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$10_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$10', 810), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$11_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$11', 811), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$12_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$12', 812), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$13_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$13', 813), Lcom_lemania_sis_client_event_ProfileBrancheAfterAddEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'ProfileBrancheAfterAddEvent', 721), Lcom_lemania_sis_client_presenter_ProfileManagementPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenterMyProxyImpl$1', 823), Lcom_lemania_sis_client_presenter_ProfileManagementPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenterMyProxyImpl$1$1', 824), Lcom_lemania_sis_client_view_ProfileManagementView_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView', 1036), Lcom_lemania_sis_client_view_ProfileManagementView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$1', 1037), Lcom_lemania_sis_client_view_ProfileManagementView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$2', 1043), Lcom_lemania_sis_client_view_ProfileManagementView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$3', 1044), Lcom_lemania_sis_client_view_ProfileManagementView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$4', 1045), Lcom_lemania_sis_client_view_ProfileManagementView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$5', 1046), Lcom_lemania_sis_client_view_ProfileManagementView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$6', 1047), Lcom_lemania_sis_client_view_ProfileManagementView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$7', 1048), Lcom_lemania_sis_client_view_ProfileManagementView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$8', 1049), Lcom_lemania_sis_client_view_ProfileManagementView$9_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$9', 1050), Lcom_lemania_sis_client_view_ProfileManagementView$10_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$10', 1038), Lcom_lemania_sis_client_view_ProfileManagementView$11_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$11', 1039), Lcom_lemania_sis_client_view_ProfileManagementView$12_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$12', 1040), Lcom_lemania_sis_client_view_ProfileManagementView$13_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$13', 1041), Lcom_lemania_sis_client_view_ProfileManagementView$14_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$14', 1042), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl', 1051), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets', 1052), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$1', 1053), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$2', 1054), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$3', 1055), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$4', 1056), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$5', 1057), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$6', 1058), Lcom_google_gwt_cell_client_ButtonCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'ButtonCell', 89), Lcom_google_gwt_user_client_ui_ValueBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ValueBox', 425), Lcom_google_gwt_user_client_ui_DoubleBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DoubleBox', 424), Lcom_lemania_sis_shared_service_ProfileRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileRequestFactoryImpl', 1207), Lcom_lemania_sis_shared_service_ProfileRequestFactory_1ProfileRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileRequestFactory_ProfileRequestContextImpl', 1208), Lcom_lemania_sis_shared_service_ProfileRequestFactory_1ProfileRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileRequestFactory_ProfileRequestContextImpl$2X', 1209), Lcom_lemania_sis_shared_service_ProfileRequestFactory_1ProfileRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileRequestFactory_ProfileRequestContextImpl$5X', 1210), Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'ProfileBrancheProxy'), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactoryImpl', 1201), Lcom_lemania_sis_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$5X', 1165), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl', 1202), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$3X', 1203), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$5X', 1204), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$8X', 1205), Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'ProfileSubjectProxy'), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactoryImpl', 1212), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl', 1213), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$1X', 1214), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$4X', 1215), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$6X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$6X', 1216), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$8X', 1217), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$9X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$9X', 1218), Lcom_google_gwt_text_client_DoubleRenderer_2_classLit = createForClass('com.google.gwt.text.client.', 'DoubleRenderer', 304), Lcom_google_gwt_text_client_DoubleParser_2_classLit = createForClass('com.google.gwt.text.client.', 'DoubleParser', 303), Lcom_lemania_sis_shared_service_ProfileRequestFactory_1ProfileRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileRequestFactory_ProfileRequestContextImpl_FactoryImpl', 1211), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_FactoryImpl', 1206), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_FactoryImpl', 1219), Lcom_lemania_sis_shared_ProfileProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1144), Lcom_lemania_sis_shared_ProfileProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1145), Lcom_lemania_sis_shared_ProfileProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1146), Lcom_lemania_sis_shared_ProfileBrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1141), Lcom_lemania_sis_shared_ProfileBrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1142), Lcom_lemania_sis_shared_ProfileBrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1143), Lcom_lemania_sis_shared_ProfileSubjectProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1147), Lcom_lemania_sis_shared_ProfileSubjectProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1148), Lcom_lemania_sis_shared_ProfileSubjectProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1149);
$entry(onLoad)(13);
