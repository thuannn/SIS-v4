function confirm_1(msg){
  return $wnd.confirm(msg);
}

function LoadNonAttribuedStudentEvent_0(){
  $clinit_LoadNonAttribuedStudentEvent();
}

defineSeed(870, 273, {}, LoadNonAttribuedStudentEvent_0);
_.dispatch_0 = function dispatch_47(handler){
  dynamicCast(handler, Q$LoadNonAttribuedStudentEvent$LoadNonAttribuedStudentHandler).onLoadNonAttribuedStudent(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_48(){
  return TYPE_47;
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
  $fire((x = new BulletinRequestFactory_BulletinRequestContextImpl$8X_0(rc, classId) , $addInvocation(rc.state.dialect, x) , x), new FrmBulletinCreationPresenter$7_0(this$static, classId));
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
  $fire((x = new BulletinRequestFactory_BulletinRequestContextImpl$10X_0(rc, bp) , $addInvocation(rc.state.dialect, x) , x), new FrmBulletinCreationPresenter$8_0(this$static));
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
  $fire((x = new BulletinRequestFactory_BulletinRequestContextImpl$12X_0(rc, editBP) , $addInvocation(rc.state.dialect, x) , x), new FrmBulletinCreationPresenter$9_0(this$static));
}

function FrmBulletinCreationPresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
}

defineSeed(881, 805, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoadNonAttribuedStudentEvent$LoadNonAttribuedStudentHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$FrmBulletinCreationPresenter, Q$FrmBulletinCreationUiHandler]), FrmBulletinCreationPresenter_0);
_.onBind = function onBind_1(){
  dynamicCast(this.view, Q$FrmBulletinCreationPresenter$MyView).setUiHandlers(this);
  $initializeTables(dynamicCast(this.view, Q$FrmBulletinCreationPresenter$MyView));
}
;
_.onLoadNonAttribuedStudent = function onLoadNonAttribuedStudent(event_0){
  $loadActiveStudentList(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_1(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_0(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('bulletincreation'), null);
  $resetForm(dynamicCast(this.view, Q$FrmBulletinCreationPresenter$MyView));
  $loadActiveStudentList(this);
  rf = new EcoleRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_6(rc), new FrmBulletinCreationPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_0(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_1(this$static, response){
  $setEcoleList(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView), response);
}

function FrmBulletinCreationPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(882, 736, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$1_0);
_.onFailure_0 = function onFailure_1(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_1(response){
  $onSuccess_1(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_2(this$static, response){
  $setProfileListData(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView), response);
}

function FrmBulletinCreationPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(883, 736, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$2_0);
_.onFailure_0 = function onFailure_2(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_2(response){
  $onSuccess_2(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_3(this$static, response){
  $setStudentTableData(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView), response);
}

function FrmBulletinCreationPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(884, 736, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$3_0);
_.onFailure_0 = function onFailure_3(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_3(response){
  $onSuccess_3(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_4(this$static, response){
  $setCoursList(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView), response);
}

function FrmBulletinCreationPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(885, 736, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$4_0);
_.onFailure_0 = function onFailure_4(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_4(response){
  $onSuccess_4(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_5(this$static, response){
  $setClasseList(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView), response);
}

function FrmBulletinCreationPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(886, 736, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$5_0);
_.onFailure_0 = function onFailure_5(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_5(response){
  $onSuccess_5(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_6(this$static){
  $addNewBulletinToTable(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView));
  $removeStudentWithBulletin(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView));
}

function FrmBulletinCreationPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(887, 736, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$6_0);
_.onFailure_0 = function onFailure_6(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_6(response){
  $onSuccess_6(this, dynamicCast(response, Q$BulletinProxy));
}
;
_.this$0 = null;
function $onSuccess_7(this$static, response){
  $setBulletinTableData(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView), response);
  $loadActiveProfileList(this$static.this$0, this$static.val$classId);
}

function FrmBulletinCreationPresenter$7_0(this$0, val$classId){
  this.this$0 = this$0;
  this.val$classId = val$classId;
}

defineSeed(888, 736, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$7_0);
_.onFailure_0 = function onFailure_7(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_7(response){
  $onSuccess_7(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
_.val$classId = null;
function $onSuccess_8(this$static, response){
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

defineSeed(889, 736, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$8_0);
_.onFailure_0 = function onFailure_8(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_8(response){
  $onSuccess_8(this, dynamicCast(response, Q$Boolean));
}
;
_.this$0 = null;
function $onSuccess_9(this$static, response){
  $doFire(this$static.this$0.eventBus, new LoadNonAttribuedStudentEvent_0, null);
  $refreshBulletinTable(dynamicCast(this$static.this$0.view, Q$FrmBulletinCreationPresenter$MyView), response);
}

function FrmBulletinCreationPresenter$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(890, 736, makeCastMap([Q$Receiver]), FrmBulletinCreationPresenter$9_0);
_.onFailure_0 = function onFailure_9(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_9(response){
  $onSuccess_9(this, dynamicCast(response, Q$BulletinProxy));
}
;
_.this$0 = null;
defineSeed(891, 833, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$LoadNonAttribuedStudentEvent$LoadNonAttribuedStudentHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler]));
_.onLoadNonAttribuedStudent = function onLoadNonAttribuedStudent_0(event_0){
  $getPresenter_0(this, new FrmBulletinCreationPresenterMyProxyImpl$2_0(this.eventBus, event_0));
}
;
function $success_0(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new FrmBulletinCreationPresenterMyProxyImpl$2$1_0(presenter, this$static.val$event));
}

function FrmBulletinCreationPresenterMyProxyImpl$2_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(894, 818, {}, FrmBulletinCreationPresenterMyProxyImpl$2_0);
_.success = function success_2(presenter){
  $success_0(this, dynamicCast(presenter, Q$FrmBulletinCreationPresenter));
}
;
_.val$event = null;
function FrmBulletinCreationPresenterMyProxyImpl$2$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(895, 1, {}, FrmBulletinCreationPresenterMyProxyImpl$2$1_0);
_.execute_0 = function execute_31(){
  $onLoadNonAttribuedStudent(this.val$presenter);
}
;
_.val$event = null;
_.val$presenter = null;
function $addNewBulletinToTable(this$static){
  !!this$static.uiHandlers && $onClassChanged(dynamicCast(this$static.uiHandlers, Q$FrmBulletinCreationUiHandler), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
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
    bp = dynamicCast($next_5(bp$iterator), Q$BulletinProxy);
    if ($equals_5(bp.getStudentId(), this$static.selectedStudent.getId_0())) {
      alert_0(($clinit_NotificationTypes() , "L'\xE9l\xE8ve existe d\xE9j\xE0 dans cette classe."));
      return;
    }
  }
  !!this$static.uiHandlers && $createBulletin(dynamicCast(this$static.uiHandlers, Q$FrmBulletinCreationUiHandler), '' + toString_6(this$static.selectedStudent.getId_0().value_0), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex), $getValue_2(this$static.lstYear, this$static.lstYear.element.selectedIndex), $getValue_2(this$static.lstProfiles, this$static.lstProfiles.element.selectedIndex));
}

function $onLstClassesChange(this$static){
  !!this$static.uiHandlers && $onClassChanged(dynamicCast(this$static.uiHandlers, Q$FrmBulletinCreationUiHandler), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $onLstEcolesChange(this$static){
  if (!$getValue_2(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex).length) {
    $selectClear(this$static.lstProgrammes.element);
    $selectClear(this$static.lstClasses.element);
    return;
  }
  !!this$static.uiHandlers && $onEcoleSelected(dynamicCast(this$static.uiHandlers, Q$FrmBulletinCreationUiHandler), $getValue_2(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex));
}

function $onLstIsFinishedChange(this$static){
  var bp, bp$iterator;
  if ($equals_6($getValue_2(this$static.lstIsFinished, this$static.lstIsFinished.element.selectedIndex), '2')) {
    $clear_3(this$static.bulletinDataProvider.listWrapper);
    $addAll(this$static.bulletinDataProvider.listWrapper, this$static.fullBulletins);
    return;
  }
  $clear_5(this$static.filteredBulletins);
  for (bp$iterator = new AbstractList$IteratorImpl_0(this$static.fullBulletins); bp$iterator.i < bp$iterator.this$0_0.size_1();) {
    bp = dynamicCast($next_5(bp$iterator), Q$BulletinProxy);
    ($equals_6($getValue_2(this$static.lstIsFinished, this$static.lstIsFinished.element.selectedIndex), '0') && $equals_4(bp.getIsFinished(), ($clinit_Boolean() , $clinit_Boolean() , FALSE_1)) || $equals_6($getValue_2(this$static.lstIsFinished, this$static.lstIsFinished.element.selectedIndex), '0') && $equals_4(bp.getIsFinished(), null) || $equals_6($getValue_2(this$static.lstIsFinished, this$static.lstIsFinished.element.selectedIndex), '1') && $equals_4(bp.getIsFinished(), ($clinit_Boolean() , $clinit_Boolean() , TRUE_1))) && $add_20(this$static.filteredBulletins, bp);
  }
  $clear_3(this$static.bulletinDataProvider.listWrapper);
  $addAll(this$static.bulletinDataProvider.listWrapper, this$static.filteredBulletins);
}

function $onLstProgrammesChange(this$static){
  if (!$getValue_2(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex).length) {
    $selectClear(this$static.lstClasses.element);
    return;
  }
  !!this$static.uiHandlers && $onProgrammeSelected(dynamicCast(this$static.uiHandlers, Q$FrmBulletinCreationUiHandler), $getValue_2(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex));
}

function $onLstYearChange(this$static){
  dynamicCast(this$static.uiHandlers, Q$FrmBulletinCreationUiHandler);
  $getValue_2(this$static.lstYear, this$static.lstYear.element.selectedIndex);
}

function $refreshBulletinTable(this$static, bp){
  var i;
  for (i = 0; i < this$static.fullBulletins.size_0; ++i) {
    if ($equals_5(dynamicCast($get_9(this$static.fullBulletins, i), Q$BulletinProxy).getId_0(), bp.getId_0())) {
      $set_5(this$static.fullBulletins, i, bp);
      break;
    }
  }
  $onLstIsFinishedChange(this$static);
}

function $removeDeletedBulletinFromTable(this$static){
  !!this$static.uiHandlers && $onClassChanged(dynamicCast(this$static.uiHandlers, Q$FrmBulletinCreationUiHandler), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $removeStudentWithBulletin(this$static){
  $setSelected_0(this$static.tblStudents.presenter.selectionModel, this$static.selectedStudent, false);
  $remove_12(this$static.studentDataProvider.listWrapper, this$static.selectedStudentIndex);
  $refresh(this$static.studentDataProvider);
}

function $resetForm(this$static){
  $selectClear(this$static.lstYear.element);
  $insertItem_0(this$static.lstYear, '-', '', -1);
  $insertItem_0(this$static.lstYear, '2013 - 2014', '2013', -1);
  $insertItem_0(this$static.lstYear, '2014 - 2015', '2014', -1);
  $selectClear(this$static.lstIsFinished.element);
  $insertItem_0(this$static.lstIsFinished, 'Non', '0', -1);
  $insertItem_0(this$static.lstIsFinished, 'Oui', '1', -1);
  $insertItem_0(this$static.lstIsFinished, 'Tous', '2', -1);
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
  $insertItem_0(this$static.lstClasses, '-', '', -1);
  for (cours$iterator = classes.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$ClasseProxy);
    $insertItem_0(this$static.lstClasses, cours.getClassName(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setCoursList(this$static, programmes){
  var cours, cours$iterator;
  $selectClear(this$static.lstProgrammes.element);
  $insertItem_0(this$static.lstProgrammes, '-', '', -1);
  for (cours$iterator = programmes.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$CoursProxy);
    $insertItem_0(this$static.lstProgrammes, cours.getCoursNom(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setEcoleList(this$static, ecoles){
  var ecole, ecole$iterator;
  $selectClear(this$static.lstEcoles.element);
  $insertItem_0(this$static.lstEcoles, '-', '', -1);
  for (ecole$iterator = ecoles.iterator(); ecole$iterator.hasNext();) {
    ecole = dynamicCast(ecole$iterator.next_0(), Q$EcoleProxy);
    $insertItem_0(this$static.lstEcoles, ecole.getSchoolName(), '' + toString_6(ecole.getId_0().value_0), -1);
  }
}

function $setProfileListData(this$static, profiles){
  var profile, profile$iterator;
  $selectClear(this$static.lstProfiles.element);
  $insertItem_0(this$static.lstProfiles, '-', '', -1);
  for (profile$iterator = profiles.iterator(); profile$iterator.hasNext();) {
    profile = dynamicCast(profile$iterator.next_0(), Q$ProfileProxy);
    $insertItem_0(this$static.lstProfiles, profile.getProfileName(), '' + toString_6(profile.getId_0().value_0), -1);
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
  this.widget = $build_f_HTMLPanel1(new FrmBulletinCreationView_BinderImpl$Widgets_0(this));
}

defineSeed(897, 810, makeCastMap([Q$IsWidget, Q$FrmBulletinCreationPresenter$MyView]), FrmBulletinCreationView_0);
_.asWidget = function asWidget_3(){
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

defineSeed(898, 475, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinCreationView$1_0);
_.getValue = function getValue_1(object){
  return dynamicCast(object, Q$BulletinProxy).getStudentName();
}
;
function FrmBulletinCreationView$10_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(899, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), FrmBulletinCreationView$10_0);
_.onSelectionChange = function onSelectionChange_0(event_0){
  this.this$0.selectedStudent = dynamicCast($getSelectedObject(this.val$selectionModel), Q$StudentProxy);
  if (this.this$0.selectedStudent) {
    this.this$0.selectedStudentIndex = $indexOf_0(this.this$0.studentDataProvider.listWrapper, this.this$0.selectedStudent);
    $setText_0(this.this$0.lblSelectedStudentName, this.this$0.selectedStudent.getFirstName() + ' ' + this.this$0.selectedStudent.getLastName());
  }
}
;
_.this$0 = null;
_.val$selectionModel = null;
function FrmBulletinCreationView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(900, 475, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinCreationView$2_0);
_.getValue = function getValue_2(object){
  return dynamicCast(object, Q$BulletinProxy).getClasseName();
}
;
function FrmBulletinCreationView$3_0(){
  TextColumn_0.call(this);
}

defineSeed(901, 475, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinCreationView$3_0);
_.getValue = function getValue_3(object){
  return dynamicCast(object, Q$BulletinProxy).getYear();
}
;
function FrmBulletinCreationView$4_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(902, 430, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinCreationView$4_0);
_.getValue = function getValue_4(bulletin){
  return dynamicCast(bulletin, Q$BulletinProxy).getIsFinished();
}
;
function $update_0(this$static, bp, value){
  !!this$static.this$0.uiHandlers && $updateBulletinFinishedStatus(dynamicCast(this$static.this$0.uiHandlers, Q$FrmBulletinCreationUiHandler), bp, value);
}

function FrmBulletinCreationView$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(903, 1, {}, FrmBulletinCreationView$5_0);
_.update = function update_1(index, bp, value){
  $update_0(this, dynamicCast(bp, Q$BulletinProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function FrmBulletinCreationView$6_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(904, 430, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinCreationView$6_0);
_.getValue = function getValue_5(bp){
  return dynamicCast(bp, Q$BulletinProxy) , 'X';
}
;
function $update_1(this$static, bp){
  var confirm_0;
  confirm_0 = ($clinit_Boolean() , confirm_1('Etes-vous sur de vouloir enlever ' + bp.getStudentName() + ' de la classe ' + bp.getClasseName() + ' ? TOUTES LES NOTES ACTUELLES SERONT SUPPRIMEES')?TRUE_1:FALSE_1);
  confirm_0.value_0 && $removeBulletin(dynamicCast(this$static.this$0.uiHandlers, Q$FrmBulletinCreationUiHandler), bp);
}

function FrmBulletinCreationView$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(905, 1, {}, FrmBulletinCreationView$7_0);
_.update = function update_2(index, bp, value){
  $update_1(this, dynamicCast(bp, Q$BulletinProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmBulletinCreationView$8_0(){
  TextColumn_0.call(this);
}

defineSeed(906, 475, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinCreationView$8_0);
_.getValue = function getValue_6(object){
  return dynamicCast(object, Q$StudentProxy).getLastName();
}
;
function FrmBulletinCreationView$9_0(){
  TextColumn_0.call(this);
}

defineSeed(907, 475, makeCastMap([Q$HasCell, Q$Column]), FrmBulletinCreationView$9_0);
_.getValue = function getValue_7(object){
  return dynamicCast(object, Q$StudentProxy).getFirstName();
}
;
function FrmBulletinCreationView_BinderImpl_0(){
}

defineSeed(908, 1, {}, FrmBulletinCreationView_BinderImpl_0);
function $build_f_HTMLPanel1(this$static){
  var attachRecord26, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_VerticalPanel5, f_VerticalPanel8, f_VerticalPanel17, f_Label6, tblStudents, f_Label7, f_Label9, f_Grid10, f_Label11, lstYear, f_Label12, lstEcoles, f_Label13, lstProgrammes, f_Label14, lstClasses, f_Label15, lstProfiles, f_Label16, lblSelectedStudentName, cmdCreateBulletin, f_Label18, f_HorizontalPanel19, f_Label20, lstIsFinished, tblBulletins, f_Label21;
  f_HTMLPanel1 = new HTMLPanel_0($html1_1(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord26 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord26.origParent?$insertBefore(attachRecord26.origParent, attachRecord26.element, attachRecord26.origSibling):orphan(attachRecord26.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_12(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'ATTRIBUTION PROGRAMME / ELEVE', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_12(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $add_10(f_HorizontalPanel4, (f_VerticalPanel5 = new VerticalPanel_0 , $add_12(f_VerticalPanel5, (f_Label6 = new Label_0 , f_Label6.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label6.directionalTextHelper, 'Choisir un \xE9l\xE8ve non-attribu\xE9', false) , $updateHorizontalAlignment(f_Label6) , f_Label6.element.style['width'] = '' , f_Label6)) , $add_12(f_VerticalPanel5, (tblStudents = this$static.owner.tblStudents , tblStudents.element.style['height'] = '600px' , tblStudents.element.style['width'] = '100%' , tblStudents)) , $add_12(f_VerticalPanel5, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label7.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label7) , f_Label7.element.style['width'] = '300px' , f_Label7)) , f_VerticalPanel5.element['className'] = 'subSection' , f_VerticalPanel5.element.style['width'] = '100%' , f_VerticalPanel5.table['cellSpacing'] = 2 , f_VerticalPanel5)) , $add_10(f_HorizontalPanel4, (f_VerticalPanel8 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel8, ALIGN_RIGHT) , $add_12(f_VerticalPanel8, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label9.directionalTextHelper, 'Choisir un programme \xE0 attribuer', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $add_12(f_VerticalPanel8, (f_Grid10 = new Grid_0 , $resizeColumns(f_Grid10, 2) , $resizeRows(f_Grid10, 6) , $setWidget_3(f_Grid10, 0, 0, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Ann\xE9e :', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_3(f_Grid10, 0, 1, (lstYear = new ListBox_0 , lstYear.element.style['width'] = '150px' , $addDomHandler(lstYear, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstYear = lstYear , lstYear)) , $setWidget_3(f_Grid10, 1, 0, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Ecole :', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_3(f_Grid10, 1, 1, (lstEcoles = new ListBox_0 , lstEcoles.element.style['width'] = '150px' , $addDomHandler(lstEcoles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE) , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_3(f_Grid10, 2, 0, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'Programme :', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_3(f_Grid10, 2, 1, (lstProgrammes = new ListBox_0 , lstProgrammes.element.style['width'] = '150px' , $addDomHandler(lstProgrammes, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstProgrammes = lstProgrammes , lstProgrammes)) , $setWidget_3(f_Grid10, 3, 0, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, 'Classe :', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_3(f_Grid10, 3, 1, (lstClasses = new ListBox_0 , lstClasses.element.style['width'] = '150px' , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE) , this$static.owner.lstClasses = lstClasses , lstClasses)) , $setWidget_3(f_Grid10, 4, 0, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'Programmes / Classe :', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_3(f_Grid10, 4, 1, (lstProfiles = new ListBox_0 , lstProfiles.element.style['width'] = '150px' , this$static.owner.lstProfiles = lstProfiles , lstProfiles)) , $setWidget_3(f_Grid10, 5, 0, (f_Label16 = new Label_0 , $setTextOrHtml(f_Label16.directionalTextHelper, 'El\xE8ve choisit :', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $setWidget_3(f_Grid10, 5, 1, (lblSelectedStudentName = new Label_0 , lblSelectedStudentName.element['className'] = 'header' , $setTextOrHtml(lblSelectedStudentName.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblSelectedStudentName) , this$static.owner.lblSelectedStudentName = lblSelectedStudentName , lblSelectedStudentName)) , f_Grid10.element.style['width'] = '100%' , f_Grid10.tableElem['cellSpacing'] = 5 , f_Grid10.tableElem['cellPadding'] = 5 , f_Grid10)) , $add_12(f_VerticalPanel8, (cmdCreateBulletin = new Button_0 , $setInnerText(cmdCreateBulletin.element, "Attribuer le programme choisi \xE0 l'\xE9l\xE8ve") , cmdCreateBulletin.element.style['width'] = '' , $addDomHandler(cmdCreateBulletin, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdCreateBulletin)) , f_VerticalPanel8.element['className'] = 'subSection' , f_VerticalPanel8.element.style['width'] = '100%' , f_VerticalPanel8.table['cellSpacing'] = 2 , f_VerticalPanel8)) , $add_10(f_HorizontalPanel4, (f_VerticalPanel17 = new VerticalPanel_0 , $add_12(f_VerticalPanel17, (f_Label18 = new Label_0 , f_Label18.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label18.directionalTextHelper, 'Liste des \xE9l\xE8ves attribu\xE9s', false) , $updateHorizontalAlignment(f_Label18) , f_Label18)) , $add_12(f_VerticalPanel17, (f_HorizontalPanel19 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel19, ALIGN_CENTER) , $setVerticalAlignment(f_HorizontalPanel19, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_10(f_HorizontalPanel19, (f_Label20 = new Label_0 , $setTextOrHtml(f_Label20.directionalTextHelper, 'Termin\xE9 :', false) , $updateHorizontalAlignment(f_Label20) , f_Label20)) , $add_10(f_HorizontalPanel19, (lstIsFinished = new ListBox_0 , $addDomHandler(lstIsFinished, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, TYPE) , this$static.owner.lstIsFinished = lstIsFinished , lstIsFinished)) , f_HorizontalPanel19.element.style['width'] = '70%' , f_HorizontalPanel19)) , $add_12(f_VerticalPanel17, (tblBulletins = this$static.owner.tblBulletins , tblBulletins.element.style['height'] = '600px' , tblBulletins.element.style['width'] = '100%' , tblBulletins)) , $add_12(f_VerticalPanel17, (f_Label21 = new Label_0 , f_Label21.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label21.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label21) , f_Label21.element.style['width'] = '350px' , f_Label21)) , f_VerticalPanel17.element['className'] = 'subSection' , f_VerticalPanel17.element.style['width'] = '100%' , f_VerticalPanel17.table['cellSpacing'] = 2 , f_VerticalPanel17)) , f_HorizontalPanel4.element.style['width'] = '100%' , f_HorizontalPanel4.table['cellSpacing'] = 5 , f_HorizontalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmBulletinCreationView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmBulletinCreationView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new FrmBulletinCreationView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new FrmBulletinCreationView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new FrmBulletinCreationView_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new FrmBulletinCreationView_BinderImpl$Widgets$5_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new FrmBulletinCreationView_BinderImpl$Widgets$6_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(909, 1, {}, FrmBulletinCreationView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmBulletinCreationView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(910, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmBulletinCreationView_BinderImpl$Widgets$1_0);
_.onChange = function onChange(event_0){
  $onLstEcolesChange(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinCreationView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(911, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmBulletinCreationView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_0(event_0){
  $onLstProgrammesChange(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinCreationView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(912, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmBulletinCreationView_BinderImpl$Widgets$3_0);
_.onClick = function onClick_3(event_0){
  $onCmdCreateBulletinClick(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinCreationView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(913, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmBulletinCreationView_BinderImpl$Widgets$4_0);
_.onChange = function onChange_1(event_0){
  $onLstClassesChange(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinCreationView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(914, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmBulletinCreationView_BinderImpl$Widgets$5_0);
_.onChange = function onChange_2(event_0){
  $onLstIsFinishedChange(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinCreationView_BinderImpl$Widgets$6_0(this$1){
  this.this$1 = this$1;
}

defineSeed(915, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmBulletinCreationView_BinderImpl$Widgets$6_0);
_.onChange = function onChange_3(event_0){
  $onLstYearChange(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_1(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$form$bulletincreation$FrmBulletinCreationPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$bulletincreation$FrmBulletinCreationPresenter$_annotation$$none$$) {
    result = new FrmBulletinCreationPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$form$bulletincreation$FrmBulletinCreationView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$sis$client$form$bulletincreation$FrmBulletinCreationPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$form$bulletincreation$FrmBulletinCreationPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$bulletincreation$FrmBulletinCreationPresenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$sis$client$form$bulletincreation$FrmBulletinCreationView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$bulletincreation$FrmBulletinCreationView$_annotation$$none$$) {
    result = new FrmBulletinCreationView_0(new FrmBulletinCreationView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$form$bulletincreation$FrmBulletinCreationView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$bulletincreation$FrmBulletinCreationView$_annotation$$none$$;
}

defineSeed(919, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_10(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$form$bulletincreation$FrmBulletinCreationPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1854, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinProxy]));
_.setIsFinished = function setIsFinished(isFinished){
  dynamicCast($getWrapped(this.this$0), Q$BulletinProxy).setIsFinished(isFinished);
}
;
defineSeed(1855, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinProxy]));
_.setIsFinished = function setIsFinished_0(isFinished){
  $setProperty(this.this$0, 'isFinished', isFinished);
}
;
function BulletinRequestFactory_BulletinRequestContextImpl$10X_0(this$0, val$bulletin){
  this.val$bulletin = val$bulletin;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1858, 740, makeCastMap([Q$AbstractRequest]), BulletinRequestFactory_BulletinRequestContextImpl$10X_0);
_.makeRequestData = function makeRequestData(){
  return new RequestData_0('c7yd6PSdb6qDN5ed_cuLkvtqQQQ=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$bulletin]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$bulletin = null;
function BulletinRequestFactory_BulletinRequestContextImpl$12X_0(this$0, val$newBulletin){
  this.val$newBulletin = val$newBulletin;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1859, 740, makeCastMap([Q$AbstractRequest]), BulletinRequestFactory_BulletinRequestContextImpl$12X_0);
_.makeRequestData = function makeRequestData_0(){
  return new RequestData_0('vkWg7Y$Q82vmHyTsB4pRUqUnfcQ=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newBulletin]), this.propertyRefs, Lcom_lemania_sis_shared_bulletin_BulletinProxy_2_classLit, null);
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

defineSeed(1862, 740, makeCastMap([Q$AbstractRequest]), BulletinRequestFactory_BulletinRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_3(){
  return new RequestData_0('ZItArpzBeI5iNp235GH$eHNnN8U=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$studentId, this.val$classId, this.val$year, this.val$profileId]), this.propertyRefs, Lcom_lemania_sis_shared_bulletin_BulletinProxy_2_classLit, null);
}
;
_.val$classId = null;
_.val$profileId = null;
_.val$studentId = null;
_.val$year = null;
function BulletinRequestFactory_BulletinRequestContextImpl$8X_0(this$0, val$classId){
  this.val$classId = val$classId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1866, 740, makeCastMap([Q$AbstractRequest]), BulletinRequestFactory_BulletinRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_7(){
  return new RequestData_0('PV7g1O1mhGdI1tiLqur3Qd3MI00=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$classId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_bulletin_BulletinProxy_2_classLit);
}
;
_.val$classId = null;
function StudentRequestFactory_StudentRequestContextImpl$3X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(2041, 740, makeCastMap([Q$AbstractRequest]), StudentRequestFactory_StudentRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_93(){
  return new RequestData_0('ghJGPu65ZWuHEyButk0GnXVp3sE=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_student_StudentProxy_2_classLit);
}
;
var Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationPresenter_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationPresenter', 881), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationPresenter$1_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationPresenter$1', 882), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationPresenter$2_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationPresenter$2', 883), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationPresenter$3_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationPresenter$3', 884), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationPresenter$4_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationPresenter$4', 885), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationPresenter$5_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationPresenter$5', 886), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationPresenter$6_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationPresenter$6', 887), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationPresenter$7_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationPresenter$7', 888), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationPresenter$8_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationPresenter$8', 889), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationPresenter$9_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationPresenter$9', 890), Lcom_lemania_sis_client_event_LoadNonAttribuedStudentEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'LoadNonAttribuedStudentEvent', 870), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationPresenterMyProxyImpl$2_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationPresenterMyProxyImpl$2', 894), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationPresenterMyProxyImpl$2$1_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationPresenterMyProxyImpl$2$1', 895), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView', 897), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView$1_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView$1', 898), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView$2_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView$2', 900), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView$3_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView$3', 901), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView$4_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView$4', 902), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView$5_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView$5', 903), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView$6_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView$6', 904), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView$7_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView$7', 905), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView$8_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView$8', 906), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView$9_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView$9', 907), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView$10_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView$10', 899), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView_BinderImpl', 908), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView_BinderImpl$Widgets', 909), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView_BinderImpl$Widgets$1', 910), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView_BinderImpl$Widgets$2', 911), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView_BinderImpl$Widgets$3', 912), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView_BinderImpl$Widgets$4', 913), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView_BinderImpl$Widgets$5', 914), Lcom_lemania_sis_client_form_bulletincreation_FrmBulletinCreationView_1BinderImpl$Widgets$6_2_classLit = createForClass('com.lemania.sis.client.form.bulletincreation.', 'FrmBulletinCreationView_BinderImpl$Widgets$6', 915), Lcom_lemania_sis_shared_bulletin_BulletinRequestFactory_1BulletinRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.bulletin.', 'BulletinRequestFactory_BulletinRequestContextImpl$1X', 1862), Lcom_lemania_sis_shared_bulletin_BulletinRequestFactory_1BulletinRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.bulletin.', 'BulletinRequestFactory_BulletinRequestContextImpl$8X', 1866), Lcom_lemania_sis_shared_bulletin_BulletinRequestFactory_1BulletinRequestContextImpl$10X_2_classLit = createForClass('com.lemania.sis.shared.bulletin.', 'BulletinRequestFactory_BulletinRequestContextImpl$10X', 1858), Lcom_lemania_sis_shared_bulletin_BulletinRequestFactory_1BulletinRequestContextImpl$12X_2_classLit = createForClass('com.lemania.sis.shared.bulletin.', 'BulletinRequestFactory_BulletinRequestContextImpl$12X', 1859), Lcom_lemania_sis_shared_student_StudentRequestFactory_1StudentRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.student.', 'StudentRequestFactory_StudentRequestContextImpl$3X', 2041);
$entry(onLoad)(27);
