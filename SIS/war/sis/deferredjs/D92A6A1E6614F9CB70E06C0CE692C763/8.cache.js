function confirm_1(msg){
  return $wnd.confirm(msg);
}

function LoadNonAttribuedStudentEvent_0(){
  $clinit_LoadNonAttribuedStudentEvent();
}

defineSeed(766, 235, {}, LoadNonAttribuedStudentEvent_0);
_.dispatch_0 = function dispatch_41(handler){
  dynamicCast(handler, Q$LoadNonAttribuedStudentEvent$LoadNonAttribuedStudentHandler).onLoadNonAttribuedStudent(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_42(){
  return TYPE_41;
}
;
function $createBulletin(this$static, studentId, classId, year, profileId){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!studentId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - El\xE8ve');
    return;
  }
  if (!classId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Classe');
    return;
  }
  if (!year.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Ann\xE9e');
    return;
  }
  if (!profileId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Profil');
    return;
  }
  rf = new BulletinRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinRequestFactory_BulletinRequestContextImpl_0(rf);
  $fire((x = new BulletinRequestFactory_BulletinRequestContextImpl$1X_0(rc, studentId, classId, year, profileId) , $addInvocation(rc.state.dialect, x) , x), new FrmBulletinCreationPresenter$6_0(this$static));
}

function $loadActiveProfileList(this$static, classId){
  var rc, rf;
  rf = new ProfileRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileRequestFactory_ProfileRequestContextImpl_0(rf);
  $fire($listAllActiveByClass_0(rc, classId), new FrmBulletinCreationPresenter$2_0(this$static));
}

function $loadActiveStudentList(this$static){
  var rc, rf, x;
  rc = (rf = new StudentRequestFactoryImpl_0 , $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus)) , new StudentRequestFactory_StudentRequestContextImpl_0(rf));
  $fire((x = new StudentRequestFactory_StudentRequestContextImpl$3X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new FrmBulletinCreationPresenter$3_0(this$static));
}

function $onClassChanged(this$static, classId){
  var rc, rf, x;
  if (!classId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Classe');
    return;
  }
  rf = new BulletinRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinRequestFactory_BulletinRequestContextImpl_0(rf);
  $fire((x = new BulletinRequestFactory_BulletinRequestContextImpl$7X_0(rc, classId) , $addInvocation(rc.state.dialect, x) , x), new FrmBulletinCreationPresenter$7_0(this$static, classId));
}

function $onEcoleSelected(this$static, ecoleId){
  var rc, rf;
  if (!ecoleId.length) {
    return;
  }
  rf = new CoursRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  $fire($listAllActive_2(rc, ecoleId), new FrmBulletinCreationPresenter$4_0(this$static));
}

function $onLoadNonAttribuedStudent(this$static){
  $loadActiveStudentList(this$static);
}

function $onProgrammeSelected(this$static, coursId){
  var rc, rf;
  rf = new ClasseRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAllActive_1(rc, coursId), new FrmBulletinCreationPresenter$5_0(this$static));
}

function $removeBulletin(this$static, bp){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new BulletinRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinRequestFactory_BulletinRequestContextImpl_0(rf);
  $fire((x = new BulletinRequestFactory_BulletinRequestContextImpl$9X_0(rc, bp) , $addInvocation(rc.state.dialect, x) , x), new FrmBulletinCreationPresenter$8_0(this$static));
}

function $updateBulletinFinishedStatus(this$static, bp, isFinished){
  var editBP, rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new BulletinRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinRequestFactory_BulletinRequestContextImpl_0(rf);
  editBP = dynamicCast($editProxy(rc, bp), Q$BulletinProxy);
  editBP.setIsFinished(isFinished);
  $fire((x = new BulletinRequestFactory_BulletinRequestContextImpl$11X_0(rc, editBP) , $addInvocation(rc.state.dialect, x) , x), new FrmBulletinCreationPresenter$9_0(this$static));
}

function FrmBulletinCreationPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(833, 705, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoadNonAttribuedStudentEvent$LoadNonAttribuedStudentHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$FrmBulletinCreationPresenter, Q$FrmBulletinCreationUiHandler]), FrmBulletinCreationPresenter_0);
_.onBind = function onBind_8(){
  dynamicCast(this.view, Q$FrmBulletinCreationPresenter$MyView).setUiHandlers(this);
  $initializeTables(dynamicCast(this.view, Q$FrmBulletinCreationPresenter$MyView));
}
;
_.onLoadNonAttribuedStudent = function onLoadNonAttribuedStudent(event_0){
  $loadActiveStudentList(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_15(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_7(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('bulletincreation'), null);
  $resetForm_1(dynamicCast(this.view, Q$FrmBulletinCreationPresenter$MyView));
  $loadActiveStudentList(this);
  rf = new EcoleRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_4(rc), new FrmBulletinCreationPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_7(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_14(this$static, response){
  $setEcoleList(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView), response);
}

function FrmBulletinCreationPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(834, 644, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$1_0);
_.onFailure_0 = function onFailure_15(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_15(response){
  $onSuccess_14(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_15(this$static, response){
  $setProfileListData(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView), response);
}

function FrmBulletinCreationPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(835, 644, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$2_0);
_.onFailure_0 = function onFailure_16(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_16(response){
  $onSuccess_15(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_16(this$static, response){
  $setStudentTableData(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView), response);
}

function FrmBulletinCreationPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(836, 644, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$3_0);
_.onFailure_0 = function onFailure_17(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_17(response){
  $onSuccess_16(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_17(this$static, response){
  $setCoursList(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView), response);
}

function FrmBulletinCreationPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(837, 644, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$4_0);
_.onFailure_0 = function onFailure_18(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_18(response){
  $onSuccess_17(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_18(this$static, response){
  $setClasseList(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView), response);
}

function FrmBulletinCreationPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(838, 644, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$5_0);
_.onFailure_0 = function onFailure_19(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_19(response){
  $onSuccess_18(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_19(this$static){
  $addNewBulletinToTable(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView));
  $removeStudentWithBulletin(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView));
}

function FrmBulletinCreationPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(839, 644, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$6_0);
_.onFailure_0 = function onFailure_20(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_20(response){
  $onSuccess_19(this, dynamicCast(response, Q$BulletinProxy));
}
;
_.this$0 = null;
function $onSuccess_20(this$static, response){
  $setBulletinTableData(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView), response);
  $loadActiveProfileList(this$static.this$0, this$static.val$classId);
}

function FrmBulletinCreationPresenter$7_0(this$0, val$classId){
  this.this$0 = this$0;
  this.val$classId = val$classId;
}

defineSeed(840, 644, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$7_0);
_.onFailure_0 = function onFailure_21(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_21(response){
  $onSuccess_20(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
_.val$classId = null;
function $onSuccess_21(this$static, response){
  if (response.value_0) {
    $removeDeletedBulletinFromTable(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView));
    $doFire(this$static.this$0.eventBus, new LoadNonAttribuedStudentEvent_0, null);
  }
   else 
    alert_0("Une erreur s'est produite.");
}

function FrmBulletinCreationPresenter$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(841, 644, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$8_0);
_.onFailure_0 = function onFailure_22(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_22(response){
  $onSuccess_21(this, dynamicCast(response, Q$Boolean));
}
;
_.this$0 = null;
function $onSuccess_22(this$static, response){
  $doFire(this$static.this$0.eventBus, new LoadNonAttribuedStudentEvent_0, null);
  $refreshBulletinTable(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView), response);
}

function FrmBulletinCreationPresenter$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(842, 644, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$9_0);
_.onFailure_0 = function onFailure_23(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_23(response){
  $onSuccess_22(this, dynamicCast(response, Q$BulletinProxy));
}
;
_.this$0 = null;
defineSeed(843, 736, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$LoadNonAttribuedStudentEvent$LoadNonAttribuedStudentHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler]));
_.onLoadNonAttribuedStudent = function onLoadNonAttribuedStudent_0(event_0){
  $getPresenter_0(this, new FrmBulletinCreationPresenterMyProxyImpl$2_0(this.eventBus, event_0));
}
;
function $success_10(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new FrmBulletinCreationPresenterMyProxyImpl$2$1_0(presenter, this$static.val$event));
}

function FrmBulletinCreationPresenterMyProxyImpl$2_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(846, 718, {}, FrmBulletinCreationPresenterMyProxyImpl$2_0);
_.success = function success_12(presenter){
  $success_10(this, dynamicCast(presenter, Q$FrmBulletinCreationPresenter));
}
;
_.val$event = null;
function FrmBulletinCreationPresenterMyProxyImpl$2$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(847, 1, {}, FrmBulletinCreationPresenterMyProxyImpl$2$1_0);
_.execute_0 = function execute_40(){
  $onLoadNonAttribuedStudent(this.val$presenter);
}
;
_.val$event = null;
_.val$presenter = null;
function $get_Key$type$com$lemania$sis$client$presenter$FrmBulletinCreationPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBulletinCreationPresenter$_annotation$$none$$) {
    result = new FrmBulletinCreationPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmBulletinCreationView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmBulletinCreationPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBulletinCreationPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBulletinCreationPresenter$_annotation$$none$$;
}

defineSeed(1151, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_165(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmBulletinCreationPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $addNewBulletinToTable(this$static){
  !!this$static.uiHandlers && $onClassChanged(dynamicCast(this$static.uiHandlers, Q$FrmBulletinCreationUiHandler), $getValue_1(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $initializeTables(this$static){
  var colFirstName, colLastName, selectionModel, colFirstName_0, colLastName_0, colYear, cellFinished, colFinished, colDelete;
  colFirstName = new FrmBulletinCreationView$8_0;
  $addColumn(this$static.tblStudents, colFirstName, 'Nom');
  colLastName = new FrmBulletinCreationView$9_0;
  $addColumn(this$static.tblStudents, colLastName, 'Pr\xE9nom');
  selectionModel = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblStudents, selectionModel);
  $addSelectionChangeHandler(selectionModel, new FrmBulletinCreationView$10_0(this$static, selectionModel));
  $addDataDisplay(this$static.studentDataProvider, this$static.tblStudents);
  $setPageSize(this$static.tblStudents, ($clinit_NotificationTypes() , pageSize_0).value_0);
  colFirstName_0 = new FrmBulletinCreationView$1_0;
  $setColumnWidth_0(this$static.tblBulletins, colFirstName_0, 45 + ($clinit_Style$Unit() , '%'));
  $addColumn(this$static.tblBulletins, colFirstName_0, 'Eleve');
  colLastName_0 = new FrmBulletinCreationView$2_0;
  $setColumnWidth_0(this$static.tblBulletins, colLastName_0, '25%');
  $addColumn(this$static.tblBulletins, colLastName_0, 'Classe');
  colYear = new FrmBulletinCreationView$3_0;
  $addColumn(this$static.tblBulletins, colYear, 'Year');
  $setColumnWidth_0(this$static.tblBulletins, colYear, '10%');
  cellFinished = new CheckboxCell_0;
  colFinished = new FrmBulletinCreationView$4_0(cellFinished);
  $setFieldUpdater(colFinished, new FrmBulletinCreationView$5_0(this$static));
  $setColumnWidth_0(this$static.tblBulletins, colFinished, '10%');
  $addColumn(this$static.tblBulletins, colFinished, 'Termin\xE9');
  colDelete = new FrmBulletinCreationView$6_0(new ButtonCell_0);
  $setFieldUpdater(colDelete, new FrmBulletinCreationView$7_0(this$static));
  $setColumnWidth_0(this$static.tblBulletins, colDelete, '10%');
  $addColumn(this$static.tblBulletins, colDelete, '');
  $addDataDisplay(this$static.bulletinDataProvider, this$static.tblBulletins);
}

function $onCmdCreateBulletinClick(this$static){
  var bp, bp$iterator;
  for (bp$iterator = new AbstractList$IteratorImpl_0(this$static.fullBulletins); bp$iterator.i < bp$iterator.this$0_0.size_1();) {
    bp = dynamicCast($next_4(bp$iterator), Q$BulletinProxy);
    if ($equals_4(bp.getStudentId(), this$static.selectedStudent.getId_0())) {
      alert_0(($clinit_NotificationTypes() , "L'\xE9l\xE8ve existe d\xE9j\xE0 dans cette classe."));
      return;
    }
  }
  !!this$static.uiHandlers && $createBulletin(dynamicCast(this$static.uiHandlers, Q$FrmBulletinCreationUiHandler), '' + toString_6(this$static.selectedStudent.getId_0().value_0), $getValue_1(this$static.lstClasses, this$static.lstClasses.element.selectedIndex), $getValue_1(this$static.lstYear, this$static.lstYear.element.selectedIndex), $getValue_1(this$static.lstProfiles, this$static.lstProfiles.element.selectedIndex));
}

function $onLstClassesChange(this$static){
  !!this$static.uiHandlers && $onClassChanged(dynamicCast(this$static.uiHandlers, Q$FrmBulletinCreationUiHandler), $getValue_1(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $onLstEcolesChange(this$static){
  if (!$getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex).length) {
    $selectClear(this$static.lstProgrammes.element);
    $selectClear(this$static.lstClasses.element);
    return;
  }
  !!this$static.uiHandlers && $onEcoleSelected(dynamicCast(this$static.uiHandlers, Q$FrmBulletinCreationUiHandler), $getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex));
}

function $onLstIsFinishedChange(this$static){
  var bp, bp$iterator;
  if ($equals_5($getValue_1(this$static.lstIsFinished, this$static.lstIsFinished.element.selectedIndex), '2')) {
    $clear_3(this$static.bulletinDataProvider.listWrapper);
    $addAll(this$static.bulletinDataProvider.listWrapper, this$static.fullBulletins);
    return;
  }
  $clear_5(this$static.filteredBulletins);
  for (bp$iterator = new AbstractList$IteratorImpl_0(this$static.fullBulletins); bp$iterator.i < bp$iterator.this$0_0.size_1();) {
    bp = dynamicCast($next_4(bp$iterator), Q$BulletinProxy);
    ($equals_5($getValue_1(this$static.lstIsFinished, this$static.lstIsFinished.element.selectedIndex), '0') && $equals_3(bp.getIsFinished(), ($clinit_Boolean() , $clinit_Boolean() , FALSE_1)) || $equals_5($getValue_1(this$static.lstIsFinished, this$static.lstIsFinished.element.selectedIndex), '0') && $equals_3(bp.getIsFinished(), null) || $equals_5($getValue_1(this$static.lstIsFinished, this$static.lstIsFinished.element.selectedIndex), '1') && $equals_3(bp.getIsFinished(), ($clinit_Boolean() , $clinit_Boolean() , TRUE_1))) && $add_19(this$static.filteredBulletins, bp);
  }
  $clear_3(this$static.bulletinDataProvider.listWrapper);
  $addAll(this$static.bulletinDataProvider.listWrapper, this$static.filteredBulletins);
}

function $onLstProgrammesChange(this$static){
  if (!$getValue_1(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex).length) {
    $selectClear(this$static.lstClasses.element);
    return;
  }
  !!this$static.uiHandlers && $onProgrammeSelected(dynamicCast(this$static.uiHandlers, Q$FrmBulletinCreationUiHandler), $getValue_1(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex));
}

function $refreshBulletinTable(this$static, bp){
  var i;
  for (i = 0; i < this$static.fullBulletins.size_0; ++i) {
    if ($equals_4(dynamicCast($get_8(this$static.fullBulletins, i), Q$BulletinProxy).getId_0(), bp.getId_0())) {
      $set_5(this$static.fullBulletins, i, bp);
      break;
    }
  }
  $onLstIsFinishedChange(this$static);
}

function $removeDeletedBulletinFromTable(this$static){
  !!this$static.uiHandlers && $onClassChanged(dynamicCast(this$static.uiHandlers, Q$FrmBulletinCreationUiHandler), $getValue_1(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $removeStudentWithBulletin(this$static){
  $setSelected_0(this$static.tblStudents.presenter.selectionModel, this$static.selectedStudent, false);
  $remove_12(this$static.studentDataProvider.listWrapper, this$static.selectedStudentIndex);
  $refresh(this$static.studentDataProvider);
}

function $resetForm_1(this$static){
  $selectClear(this$static.lstYear.element);
  $insertItem(this$static.lstYear, '-', '', -1);
  $insertItem(this$static.lstYear, '2013 - 2014', '2013', -1);
  $selectClear(this$static.lstIsFinished.element);
  $insertItem(this$static.lstIsFinished, 'Non', '0', -1);
  $insertItem(this$static.lstIsFinished, 'Oui', '1', -1);
  $insertItem(this$static.lstIsFinished, 'Tous', '2', -1);
  $setSelectedIndex_0(this$static.lstIsFinished, 0);
  $setSelectedIndex_0(this$static.lstEcoles, 0);
  $selectClear(this$static.lstProfiles.element);
  $selectClear(this$static.lstProgrammes.element);
  $selectClear(this$static.lstClasses.element);
  $clear_3(this$static.bulletinDataProvider.listWrapper);
}

function $setBulletinTableData(this$static, bulletins){
  $clear_3(this$static.bulletinDataProvider.listWrapper);
  $addAll(this$static.bulletinDataProvider.listWrapper, bulletins);
  $clear_5(this$static.fullBulletins);
  $addAll_1(this$static.fullBulletins, bulletins);
  $onLstIsFinishedChange(this$static);
}

function $setClasseList(this$static, classes){
  var cours, cours$iterator;
  $selectClear(this$static.lstClasses.element);
  $insertItem(this$static.lstClasses, '-', '', -1);
  for (cours$iterator = classes.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$ClasseProxy);
    $insertItem(this$static.lstClasses, cours.getClassName(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setCoursList(this$static, programmes){
  var cours, cours$iterator;
  $selectClear(this$static.lstProgrammes.element);
  $insertItem(this$static.lstProgrammes, '-', '', -1);
  for (cours$iterator = programmes.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$CoursProxy);
    $insertItem(this$static.lstProgrammes, cours.getCoursNom(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setEcoleList(this$static, ecoles){
  var ecole, ecole$iterator;
  $selectClear(this$static.lstEcoles.element);
  $insertItem(this$static.lstEcoles, '-', '', -1);
  for (ecole$iterator = ecoles.iterator(); ecole$iterator.hasNext();) {
    ecole = dynamicCast(ecole$iterator.next_0(), Q$EcoleProxy);
    $insertItem(this$static.lstEcoles, ecole.getSchoolName(), '' + toString_6(ecole.getId_0().value_0), -1);
  }
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

function $setStudentTableData(this$static, students){
  $setList(this$static.studentDataProvider, students);
}

function FrmBulletinCreationView_0(){
  this.studentDataProvider = new ListDataProvider_0;
  this.bulletinDataProvider = new ListDataProvider_0;
  this.filteredBulletins = new ArrayList_0;
  this.fullBulletins = new ArrayList_0;
  this.tblStudents = new DataGrid_0;
  this.tblBulletins = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_6(new FrmBulletinCreationView_BinderImpl$Widgets_0(this));
}

defineSeed(1204, 710, makeCastMap([Q$IsWidget, Q$FrmBulletinCreationPresenter$MyView]), FrmBulletinCreationView_0);
_.asWidget = function asWidget_10(){
  return this.widget;
}
;
_.lblSelectedStudentName = null;
_.lstClasses = null;
_.lstEcoles = null;
_.lstIsFinished = null;
_.lstProfiles = null;
_.lstProgrammes = null;
_.lstYear = null;
_.selectedStudent = null;
_.selectedStudentIndex = 0;
_.widget = null;
function FrmBulletinCreationView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1205, 392, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinCreationView$1_0);
_.getValue = function getValue_9(object){
  return dynamicCast(object, Q$BulletinProxy).getStudentName();
}
;
function FrmBulletinCreationView$10_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1206, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), FrmBulletinCreationView$10_0);
_.onSelectionChange = function onSelectionChange_0(event_0){
  this.this$0.selectedStudent = dynamicCast($getSelectedObject(this.val$selectionModel), Q$StudentProxy);
  if (this.this$0.selectedStudent) {
    this.this$0.selectedStudentIndex = $indexOf_0(this.this$0.studentDataProvider.listWrapper, this.this$0.selectedStudent);
    $setText_1(this.this$0.lblSelectedStudentName, this.this$0.selectedStudent.getFirstName() + ' ' + this.this$0.selectedStudent.getLastName());
  }
}
;
_.this$0 = null;
_.val$selectionModel = null;
function FrmBulletinCreationView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(1207, 392, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinCreationView$2_0);
_.getValue = function getValue_10(object){
  return dynamicCast(object, Q$BulletinProxy).getClasseName();
}
;
function FrmBulletinCreationView$3_0(){
  TextColumn_0.call(this);
}

defineSeed(1208, 392, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinCreationView$3_0);
_.getValue = function getValue_11(object){
  return dynamicCast(object, Q$BulletinProxy).getYear();
}
;
function FrmBulletinCreationView$4_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1209, 366, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinCreationView$4_0);
_.getValue = function getValue_12(bulletin){
  return dynamicCast(bulletin, Q$BulletinProxy).getIsFinished();
}
;
function $update_6(this$static, bp, value){
  !!this$static.this$0.uiHandlers && $updateBulletinFinishedStatus(dynamicCast(this$static.this$0.uiHandlers, Q$FrmBulletinCreationUiHandler), bp, value);
}

function FrmBulletinCreationView$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1210, 1, {}, FrmBulletinCreationView$5_0);
_.update = function update_7(index, bp, value){
  $update_6(this, dynamicCast(bp, Q$BulletinProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function FrmBulletinCreationView$6_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1211, 366, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinCreationView$6_0);
_.getValue = function getValue_13(bp){
  return dynamicCast(bp, Q$BulletinProxy) , 'X';
}
;
function $update_7(this$static, bp){
  var confirm_0;
  confirm_0 = ($clinit_Boolean() , confirm_1('Etes-vous sur de vouloir enlever ' + bp.getStudentName() + ' de la classe ' + bp.getClasseName() + ' ? TOUTES LES NOTES ACTUELLES SERONT SUPPRIMEES')?TRUE_1:FALSE_1);
  confirm_0.value_0 && $removeBulletin(dynamicCast(this$static.this$0.uiHandlers, Q$FrmBulletinCreationUiHandler), bp);
}

function FrmBulletinCreationView$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1212, 1, {}, FrmBulletinCreationView$7_0);
_.update = function update_8(index, bp, value){
  $update_7(this, dynamicCast(bp, Q$BulletinProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmBulletinCreationView$8_0(){
  TextColumn_0.call(this);
}

defineSeed(1213, 392, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinCreationView$8_0);
_.getValue = function getValue_14(object){
  return dynamicCast(object, Q$StudentProxy).getLastName();
}
;
function FrmBulletinCreationView$9_0(){
  TextColumn_0.call(this);
}

defineSeed(1214, 392, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinCreationView$9_0);
_.getValue = function getValue_15(object){
  return dynamicCast(object, Q$StudentProxy).getFirstName();
}
;
function FrmBulletinCreationView_BinderImpl_0(){
}

defineSeed(1215, 1, {}, FrmBulletinCreationView_BinderImpl_0);
function $build_f_HTMLPanel1_6(this$static){
  var attachRecord7, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_VerticalPanel5, f_VerticalPanel8, f_VerticalPanel19, f_Label6, tblStudents, f_Label7, f_Label9, f_Grid10, f_Label11, lstEcoles, f_Label12, lstProgrammes, f_Label13, lstClasses, f_Label14, lstProfiles, f_Label15, lstYear, f_Label16, f_Label17, lblSelectedStudentName, f_Label18, cmdCreateBulletin, f_Label20, f_HorizontalPanel21, f_Label22, lstIsFinished, tblBulletins, f_Label23;
  f_HTMLPanel1 = new HTMLPanel_0($html1_6(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord7 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord7.origParent?$insertBefore(attachRecord7.origParent, attachRecord7.element, attachRecord7.origSibling):orphan(attachRecord7.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'ATTRIBUTION PROGRAMME / ELEVE', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel4, (f_VerticalPanel5 = new VerticalPanel_0 , $add_11(f_VerticalPanel5, (f_Label6 = new Label_0 , f_Label6.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label6.directionalTextHelper, 'Choisir un \xE9l\xE8ve non-attribu\xE9', false) , $updateHorizontalAlignment(f_Label6) , f_Label6.element.style['width'] = '' , f_Label6)) , $add_11(f_VerticalPanel5, (tblStudents = this$static.owner.tblStudents , tblStudents.element.style['height'] = '600px' , tblStudents.element.style['width'] = '100%' , tblStudents)) , $add_11(f_VerticalPanel5, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label7.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label7) , f_Label7.element.style['width'] = '300px' , f_Label7)) , f_VerticalPanel5.element['className'] = 'subSection' , f_VerticalPanel5.element.style['width'] = '100%' , f_VerticalPanel5.table['cellSpacing'] = 2 , f_VerticalPanel5)) , $add_9(f_HorizontalPanel4, (f_VerticalPanel8 = new VerticalPanel_0 , $add_11(f_VerticalPanel8, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label9.directionalTextHelper, 'Choisir un programme \xE0 attribuer', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $add_11(f_VerticalPanel8, (f_Grid10 = new Grid_0 , $resizeColumns(f_Grid10, 2) , $resizeRows(f_Grid10, 8) , $setWidget_1(f_Grid10, 0, 0, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Ecole :', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid10, 0, 1, (lstEcoles = new ListBox_0 , lstEcoles.element.style['width'] = '150px' , $addDomHandler(lstEcoles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_1(f_Grid10, 1, 0, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Programme :', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_1(f_Grid10, 1, 1, (lstProgrammes = new ListBox_0 , lstProgrammes.element.style['width'] = '150px' , $addDomHandler(lstProgrammes, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstProgrammes = lstProgrammes , lstProgrammes)) , $setWidget_1(f_Grid10, 2, 0, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'Classe :', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_1(f_Grid10, 2, 1, (lstClasses = new ListBox_0 , lstClasses.element.style['width'] = '150px' , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE) , this$static.owner.lstClasses = lstClasses , lstClasses)) , $setWidget_1(f_Grid10, 3, 0, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, 'Programmes / Classe :', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_1(f_Grid10, 3, 1, (lstProfiles = new ListBox_0 , lstProfiles.element.style['width'] = '150px' , this$static.owner.lstProfiles = lstProfiles , lstProfiles)) , $setWidget_1(f_Grid10, 4, 0, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'Ann\xE9e :', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_1(f_Grid10, 4, 1, (lstYear = new ListBox_0 , lstYear.element.style['width'] = '150px' , this$static.owner.lstYear = lstYear , lstYear)) , $setWidget_1(f_Grid10, 5, 0, (f_Label16 = new Label_0 , f_Label16.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label16.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $setWidget_1(f_Grid10, 6, 0, (f_Label17 = new Label_0 , $setTextOrHtml(f_Label17.directionalTextHelper, 'El\xE8ve choisit :', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $setWidget_1(f_Grid10, 6, 1, (lblSelectedStudentName = new Label_0 , lblSelectedStudentName.element['className'] = 'header' , $setTextOrHtml(lblSelectedStudentName.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblSelectedStudentName) , this$static.owner.lblSelectedStudentName = lblSelectedStudentName , lblSelectedStudentName)) , $setWidget_1(f_Grid10, 7, 0, (f_Label18 = new Label_0 , f_Label18.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label18.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label18) , f_Label18)) , $setWidget_1(f_Grid10, 7, 1, (cmdCreateBulletin = new Button_0 , $setInnerText(cmdCreateBulletin.element, "Attribuer le programme choisi \xE0 l'\xE9l\xE8ve") , cmdCreateBulletin.element.style['width'] = '151px' , $addDomHandler(cmdCreateBulletin, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdCreateBulletin)) , f_Grid10.element.style['width'] = '100%' , f_Grid10.tableElem['cellSpacing'] = 5 , f_Grid10.tableElem['cellPadding'] = 5 , f_Grid10)) , f_VerticalPanel8.element['className'] = 'subSection' , f_VerticalPanel8.element.style['width'] = '100%' , f_VerticalPanel8.table['cellSpacing'] = 2 , f_VerticalPanel8)) , $add_9(f_HorizontalPanel4, (f_VerticalPanel19 = new VerticalPanel_0 , $add_11(f_VerticalPanel19, (f_Label20 = new Label_0 , f_Label20.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label20.directionalTextHelper, 'Liste des \xE9l\xE8ves attribu\xE9s', false) , $updateHorizontalAlignment(f_Label20) , f_Label20)) , $add_11(f_VerticalPanel19, (f_HorizontalPanel21 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel21, ALIGN_CENTER) , $setVerticalAlignment(f_HorizontalPanel21, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_9(f_HorizontalPanel21, (f_Label22 = new Label_0 , $setTextOrHtml(f_Label22.directionalTextHelper, 'Termin\xE9 :', false) , $updateHorizontalAlignment(f_Label22) , f_Label22)) , $add_9(f_HorizontalPanel21, (lstIsFinished = new ListBox_0 , $addDomHandler(lstIsFinished, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, TYPE) , this$static.owner.lstIsFinished = lstIsFinished , lstIsFinished)) , f_HorizontalPanel21.element.style['width'] = '70%' , f_HorizontalPanel21)) , $add_11(f_VerticalPanel19, (tblBulletins = this$static.owner.tblBulletins , tblBulletins.element.style['height'] = '600px' , tblBulletins.element.style['width'] = '100%' , tblBulletins)) , $add_11(f_VerticalPanel19, (f_Label23 = new Label_0 , f_Label23.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label23.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label23) , f_Label23.element.style['width'] = '350px' , f_Label23)) , f_VerticalPanel19.element['className'] = 'subSection' , f_VerticalPanel19.element.style['width'] = '100%' , f_VerticalPanel19.table['cellSpacing'] = 2 , f_VerticalPanel19)) , f_HorizontalPanel4.element.style['width'] = '100%' , f_HorizontalPanel4.table['cellSpacing'] = 5 , f_HorizontalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmBulletinCreationView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmBulletinCreationView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new FrmBulletinCreationView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new FrmBulletinCreationView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new FrmBulletinCreationView_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new FrmBulletinCreationView_BinderImpl$Widgets$5_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1216, 1, {}, FrmBulletinCreationView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmBulletinCreationView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1217, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmBulletinCreationView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_0(event_0){
  $onLstEcolesChange(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinCreationView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1218, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmBulletinCreationView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_1(event_0){
  $onLstProgrammesChange(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinCreationView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1219, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmBulletinCreationView_BinderImpl$Widgets$3_0);
_.onClick = function onClick_5(event_0){
  $onCmdCreateBulletinClick(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinCreationView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1220, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmBulletinCreationView_BinderImpl$Widgets$4_0);
_.onChange = function onChange_2(event_0){
  $onLstClassesChange(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinCreationView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1221, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmBulletinCreationView_BinderImpl$Widgets$5_0);
_.onChange = function onChange_3(event_0){
  $onLstIsFinishedChange(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_6(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$view$FrmBulletinCreationView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBulletinCreationView$_annotation$$none$$) {
    result = new FrmBulletinCreationView_0(new FrmBulletinCreationView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBulletinCreationView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBulletinCreationView$_annotation$$none$$;
}

defineSeed(1501, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinProxy]));
_.setIsFinished = function setIsFinished(isFinished){
  dynamicCast($getWrapped(this.this$0), Q$BulletinProxy).setIsFinished(isFinished);
}
;
defineSeed(1502, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinProxy]));
_.setIsFinished = function setIsFinished_0(isFinished){
  $setProperty(this.this$0, 'isFinished', isFinished);
}
;
function BulletinRequestFactory_BulletinRequestContextImpl$11X_0(this$0, val$newBulletin){
  this.val$newBulletin = val$newBulletin;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1573, 648, makeCastMap([Q$AbstractRequest]), BulletinRequestFactory_BulletinRequestContextImpl$11X_0);
_.makeRequestData = function makeRequestData_13(){
  return new RequestData_0('QhoY0Yz9vDCYvEcSjk1PG1wTIvI=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newBulletin]), this.propertyRefs, Lcom_lemania_sis_shared_BulletinProxy_2_classLit, null);
}
;
_.val$newBulletin = null;
function BulletinRequestFactory_BulletinRequestContextImpl$1X_0(this$0, val$studentId, val$classId, val$year, val$profileId){
  this.val$studentId = val$studentId;
  this.val$classId = val$classId;
  this.val$year = val$year;
  this.val$profileId = val$profileId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1576, 648, makeCastMap([Q$AbstractRequest]), BulletinRequestFactory_BulletinRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_16(){
  return new RequestData_0('J4BOSsraqWO$RskYVL2LQ44st1A=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$studentId, this.val$classId, this.val$year, this.val$profileId]), this.propertyRefs, Lcom_lemania_sis_shared_BulletinProxy_2_classLit, null);
}
;
_.val$classId = null;
_.val$profileId = null;
_.val$studentId = null;
_.val$year = null;
function BulletinRequestFactory_BulletinRequestContextImpl$7X_0(this$0, val$classId){
  this.val$classId = val$classId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1579, 648, makeCastMap([Q$AbstractRequest]), BulletinRequestFactory_BulletinRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_19(){
  return new RequestData_0('sjC_C_cQUSggvKtqtMLaQuD1N1Y=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$classId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_BulletinProxy_2_classLit);
}
;
_.val$classId = null;
function BulletinRequestFactory_BulletinRequestContextImpl$9X_0(this$0, val$bulletin){
  this.val$bulletin = val$bulletin;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1581, 648, makeCastMap([Q$AbstractRequest]), BulletinRequestFactory_BulletinRequestContextImpl$9X_0);
_.makeRequestData = function makeRequestData_21(){
  return new RequestData_0('BQ5vW9CNHYbYCEnRuWEO1pbvqx0=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$bulletin]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$bulletin = null;
function StudentRequestFactory_StudentRequestContextImpl$3X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1672, 648, makeCastMap([Q$AbstractRequest]), StudentRequestFactory_StudentRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_68(){
  return new RequestData_0('wiynw$7muIzA0bNe2Iy$wadMq2w=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_StudentProxy_2_classLit);
}
;
var Lcom_lemania_sis_client_presenter_FrmBulletinCreationPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinCreationPresenter', 833), Lcom_lemania_sis_client_presenter_FrmBulletinCreationPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinCreationPresenter$1', 834), Lcom_lemania_sis_client_presenter_FrmBulletinCreationPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinCreationPresenter$2', 835), Lcom_lemania_sis_client_presenter_FrmBulletinCreationPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinCreationPresenter$3', 836), Lcom_lemania_sis_client_presenter_FrmBulletinCreationPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinCreationPresenter$4', 837), Lcom_lemania_sis_client_presenter_FrmBulletinCreationPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinCreationPresenter$5', 838), Lcom_lemania_sis_client_presenter_FrmBulletinCreationPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinCreationPresenter$6', 839), Lcom_lemania_sis_client_presenter_FrmBulletinCreationPresenter$7_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinCreationPresenter$7', 840), Lcom_lemania_sis_client_presenter_FrmBulletinCreationPresenter$8_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinCreationPresenter$8', 841), Lcom_lemania_sis_client_presenter_FrmBulletinCreationPresenter$9_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinCreationPresenter$9', 842), Lcom_lemania_sis_client_event_LoadNonAttribuedStudentEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'LoadNonAttribuedStudentEvent', 766), Lcom_lemania_sis_client_presenter_FrmBulletinCreationPresenterMyProxyImpl$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinCreationPresenterMyProxyImpl$2', 846), Lcom_lemania_sis_client_presenter_FrmBulletinCreationPresenterMyProxyImpl$2$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinCreationPresenterMyProxyImpl$2$1', 847), Lcom_lemania_sis_client_view_FrmBulletinCreationView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView', 1204), Lcom_lemania_sis_client_view_FrmBulletinCreationView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView$1', 1205), Lcom_lemania_sis_client_view_FrmBulletinCreationView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView$2', 1207), Lcom_lemania_sis_client_view_FrmBulletinCreationView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView$3', 1208), Lcom_lemania_sis_client_view_FrmBulletinCreationView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView$4', 1209), Lcom_lemania_sis_client_view_FrmBulletinCreationView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView$5', 1210), Lcom_lemania_sis_client_view_FrmBulletinCreationView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView$6', 1211), Lcom_lemania_sis_client_view_FrmBulletinCreationView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView$7', 1212), Lcom_lemania_sis_client_view_FrmBulletinCreationView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView$8', 1213), Lcom_lemania_sis_client_view_FrmBulletinCreationView$9_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView$9', 1214), Lcom_lemania_sis_client_view_FrmBulletinCreationView$10_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView$10', 1206), Lcom_lemania_sis_client_view_FrmBulletinCreationView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView_BinderImpl', 1215), Lcom_lemania_sis_client_view_FrmBulletinCreationView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView_BinderImpl$Widgets', 1216), Lcom_lemania_sis_client_view_FrmBulletinCreationView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView_BinderImpl$Widgets$1', 1217), Lcom_lemania_sis_client_view_FrmBulletinCreationView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView_BinderImpl$Widgets$2', 1218), Lcom_lemania_sis_client_view_FrmBulletinCreationView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView_BinderImpl$Widgets$3', 1219), Lcom_lemania_sis_client_view_FrmBulletinCreationView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView_BinderImpl$Widgets$4', 1220), Lcom_lemania_sis_client_view_FrmBulletinCreationView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinCreationView_BinderImpl$Widgets$5', 1221), Lcom_lemania_sis_shared_service_BulletinRequestFactory_1BulletinRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinRequestFactory_BulletinRequestContextImpl$1X', 1576), Lcom_lemania_sis_shared_service_BulletinRequestFactory_1BulletinRequestContextImpl$7X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinRequestFactory_BulletinRequestContextImpl$7X', 1579), Lcom_lemania_sis_shared_service_BulletinRequestFactory_1BulletinRequestContextImpl$9X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinRequestFactory_BulletinRequestContextImpl$9X', 1581), Lcom_lemania_sis_shared_service_BulletinRequestFactory_1BulletinRequestContextImpl$11X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinRequestFactory_BulletinRequestContextImpl$11X', 1573), Lcom_lemania_sis_shared_service_StudentRequestFactory_1StudentRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'StudentRequestFactory_StudentRequestContextImpl$3X', 1672);
$entry(onLoad)(8);
