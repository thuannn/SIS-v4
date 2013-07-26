function $setKeyboardPagingPolicy(this$static, policy){
  $setKeyboardPagingPolicy_0(this$static.presenter, policy);
}

function $setKeyboardSelectionPolicy(this$static, policy){
  $setKeyboardSelectionPolicy_0(this$static.presenter, policy);
}

function $setSelectionModel(this$static, selectionModel){
  $setSelectionModel_0(this$static.presenter, selectionModel);
}

function $clearSelectionModel(this$static){
  if (this$static.selectionHandler) {
    $removeHandler(this$static.selectionHandler.real);
    this$static.selectionHandler = null;
  }
  this$static.selectionModel = null;
}

function $setKeyboardPagingPolicy_0(this$static, policy){
  if (!policy) {
    throw new NullPointerException_1('KeyboardPagingPolicy cannot be null');
  }
  this$static.keyboardPagingPolicy = policy;
}

function $setKeyboardSelectionPolicy_0(this$static, policy){
  if (!policy) {
    throw new NullPointerException_1('KeyboardSelectionPolicy cannot be null');
  }
  this$static.keyboardSelectionPolicy = policy;
}

function $setSelectionModel_0(this$static, selectionModel){
  $clearSelectionModel(this$static);
  this$static.selectionModel = selectionModel;
  !!selectionModel && (this$static.selectionHandler = $addSelectionChangeHandler(selectionModel, new HasDataPresenter$1_0(this$static)));
  $ensurePendingState(this$static);
}

function HasDataPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(358, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), HasDataPresenter$1_0);
_.onSelectionChange = function onSelectionChange(event_0){
  $ensurePendingState(this.this$0);
}
;
_.this$0 = null;
function $addSelectionChangeHandler(this$static, handler){
  return $addHandler(this$static.handlerManager, (!TYPE_18 && (TYPE_18 = new GwtEvent$Type_0) , TYPE_18), handler);
}

defineSeed(524, 1, makeCastMap([Q$HasHandlers]));
_.fireEvent = function fireEvent_4(event_0){
  $fireEvent(this.handlerManager, event_0);
}
;
_.isEventCancelled = false;
_.isEventScheduled = false;
function $getSelectedObject(this$static){
  $resolveChanges(this$static);
  return this$static.curSelection;
}

function SingleSelectionModel_0(){
  this.handlerManager = new HandlerManager_0(this);
}

defineSeed(526, 524, makeCastMap([Q$HasHandlers]), SingleSelectionModel_0);
_.curKey = null;
_.curSelection = null;
_.newSelected = false;
_.newSelectedItem = null;
_.newSelectedPending = false;
function $loadActiveSubjectList(this$static){
  var rc, rf, x;
  rf = new SubjectRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SubjectRequestFactory_SubjectRequestContextImpl_0(rf);
  $fire((x = new SubjectRequestFactory_SubjectRequestContextImpl$3X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new ProfsPresenter$10_0(this$static));
}

function $onEcoleSelected_1(this$static, ecoleId){
  var rc, rf;
  if (!ecoleId.length) {
    return;
  }
  rf = new CoursRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  $fire($listAll_1(rc, ecoleId), new ProfsPresenter$6_0(this$static));
}

function $onProgrammeSelected(this$static, coursId){
  var rc, rf;
  rf = new ClasseRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAll_0(rc, coursId), new ProfsPresenter$7_0(this$static));
}

function $professorSelected(this$static, prof){
  var rc, rf;
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  $fire($listAll(rc, '' + toString_6(prof.getId_0().value_0)), new ProfsPresenter$5_0(this$static));
}

function $saveAssignment(this$static, professorId, classId, subjectId, isActive){
  var rc, rf, x;
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  $fire((x = new AssignmentRequestFactory_AssignmentRequestContextImpl$8X_0(rc, professorId, classId, subjectId, isActive) , $addInvocation(rc.state.dialect, x) , x), new ProfsPresenter$8_0(this$static));
}

function $updateAssignmentStatus(this$static, assignment, value){
  var a4update, rc, rf, x;
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  a4update = dynamicCast($editProxy(rc, assignment), Q$AssignmentProxy);
  a4update.setActive(value);
  $fire((x = new AssignmentRequestFactory_AssignmentRequestContextImpl$7X_0(rc, a4update) , $addInvocation(rc.state.dialect, x) , x), new ProfsPresenter$9_0(this$static));
}

function $updateProfessorName(this$static, prof, name_0){
  var profForUpdate, rc, rf;
  if ($equals_3(prof.getProfName(), name_0))
    return;
  if (!this$static.currentUser.isAdmin) {
    alert_0("Veuillez vous connecter avec le code d'acc\xE8s de l'administrateur. La modification n'a pas \xE9t\xE9 effectu\xE9e.");
    $refreshTable_1(dynamicCast(this$static.view, Q$ProfsPresenter$MyView), prof);
    return;
  }
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  profForUpdate = dynamicCast($editProxy(rc, prof), Q$ProfessorProxy);
  profForUpdate.setProfName(name_0);
  $fire($saveAndReturn_0(rc, profForUpdate), new ProfsPresenter$4_0(this$static));
}

function $updateProfessorStatus(this$static, prof, status_0){
  var profForUpdate, rc, rf;
  if (!this$static.currentUser.isAdmin) {
    alert_0("Veuillez vous connecter avec le code d'acc\xE8s de l'administrateur. La modification n'a pas \xE9t\xE9 effectu\xE9e.");
    return;
  }
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  profForUpdate = dynamicCast($editProxy(rc, prof), Q$ProfessorProxy);
  profForUpdate.setProfActive(status_0);
  $fire($saveAndReturn_0(rc, profForUpdate), new ProfsPresenter$3_0(this$static));
}

function ProfsPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(803, 656, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfsPresenter, Q$ProfessorListUiHandler]), ProfsPresenter_0);
_.onBind = function onBind_16(){
  dynamicCast(this.view, Q$ProfsPresenter$MyView).setUiHandlers(this);
  $initializeTable_2(dynamicCast(this.view, Q$ProfsPresenter$MyView));
  $initializeAssignmentTable(dynamicCast(this.view, Q$ProfsPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_5(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_10(){
  var rf, rc, x, rf_0, rc_0;
  $resetForm_3(dynamicCast(this.view, Q$ProfsPresenter$MyView));
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire((x = new ProfessorRequestFactory_ProfessorRequestContextImpl$2X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new ProfsPresenter$2_0(this));
  rf_0 = new EcoleRequestFactoryImpl_0;
  $initialize(rf_0, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc_0 = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf_0);
  $fire($listAll_2(rc_0), new ProfsPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_15(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_27(this$static, response){
  $setEcoleList_1(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(804, 595, makeCastMap([Q$Receiver]), ProfsPresenter$1_0);
_.onFailure_0 = function onFailure_27(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_27(response){
  $onSuccess_27(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_28(this$static, response){
  $setSubjectList(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$10_0(this$0){
  this.this$0 = this$0;
}

defineSeed(805, 595, makeCastMap([Q$Receiver]), ProfsPresenter$10_0);
_.onFailure_0 = function onFailure_28(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_28(response){
  $onSuccess_28(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_29(this$static, response){
  $setData_2(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(806, 595, makeCastMap([Q$Receiver]), ProfsPresenter$2_0);
_.onFailure_0 = function onFailure_29(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_29(response){
  $onSuccess_29(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_30(this$static, response){
  $refreshTable_1(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(807, 595, makeCastMap([Q$Receiver]), ProfsPresenter$3_0);
_.onFailure_0 = function onFailure_30(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_30(response){
  $onSuccess_30(this, dynamicCast(response, Q$ProfessorProxy));
}
;
_.this$0 = null;
function $onSuccess_31(this$static, response){
  $refreshTable_1(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(808, 595, makeCastMap([Q$Receiver]), ProfsPresenter$4_0);
_.onFailure_0 = function onFailure_31(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_31(response){
  $onSuccess_31(this, dynamicCast(response, Q$ProfessorProxy));
}
;
_.this$0 = null;
function $onSuccess_32(this$static, response){
  $setAssignmentTableData(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(809, 595, makeCastMap([Q$Receiver]), ProfsPresenter$5_0);
_.onFailure_0 = function onFailure_32(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_32(response){
  $onSuccess_32(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_33(this$static, response){
  $setCoursList_1(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(810, 595, makeCastMap([Q$Receiver]), ProfsPresenter$6_0);
_.onFailure_0 = function onFailure_33(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_33(response){
  $onSuccess_33(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_34(this$static, response){
  $setClasseList(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(811, 595, makeCastMap([Q$Receiver]), ProfsPresenter$7_0);
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
  $showAddedAssignment(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(812, 595, makeCastMap([Q$Receiver]), ProfsPresenter$8_0);
_.onFailure_0 = function onFailure_35(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_35(response){
  $onSuccess_35(this, dynamicCast(response, Q$AssignmentProxy));
}
;
_.this$0 = null;
function $onSuccess_36(this$static, response){
  $showUpdatedAssignment(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(813, 595, makeCastMap([Q$Receiver]), ProfsPresenter$9_0);
_.onFailure_0 = function onFailure_36(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_36(response){
  $onSuccess_36(this, dynamicCast(response, Q$AssignmentProxy));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$ProfsPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$ProfsPresenter$_annotation$$none$$) {
    result = new ProfsPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$ProfsView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$ProfsPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$ProfsPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$ProfsPresenter$_annotation$$none$$;
}

defineSeed(861, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_56(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$ProfsPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeAssignmentTable(this$static){
  var cellActive, colActive, colClasseName, colProgrammeName, colSubjectName;
  colProgrammeName = new ProfsView$6_0;
  $addColumn(this$static.tblAssignments, colProgrammeName, 'Programme');
  colClasseName = new ProfsView$7_0;
  $addColumn(this$static.tblAssignments, colClasseName, 'Classe');
  colSubjectName = new ProfsView$8_0;
  $addColumn(this$static.tblAssignments, colSubjectName, 'Mati\xE8re');
  cellActive = new CheckboxCell_0;
  colActive = new ProfsView$9_0(cellActive);
  $addColumn(this$static.tblAssignments, colActive, 'Active');
  $setFieldUpdater(colActive, new ProfsView$10_0(this$static));
  $addDataDisplay(this$static.assignmentDataProvider, this$static.tblAssignments);
}

function $initializeTable_2(this$static){
  var cellActive, colActive, colName, nomCell, selectionModel;
  nomCell = new EditTextCell_0;
  colName = new ProfsView$1_0(nomCell);
  $addColumn(this$static.tblProfessors, colName, 'Nom');
  $setFieldUpdater(colName, new ProfsView$2_0(this$static));
  cellActive = new CheckboxCell_0;
  colActive = new ProfsView$3_0(cellActive);
  $addColumn(this$static.tblProfessors, colActive, 'Active');
  $setFieldUpdater(colActive, new ProfsView$4_0(this$static));
  selectionModel = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblProfessors, selectionModel);
  $addSelectionChangeHandler(selectionModel, new ProfsView$5_0(this$static, selectionModel));
  $addDataDisplay(this$static.dataProvider, this$static.tblProfessors);
}

function $onCmdAssignerClick(this$static){
  !!this$static.uiHandlers && $saveAssignment(dynamicCast(this$static.uiHandlers, Q$ProfessorListUiHandler), '' + toString_6(this$static.selectedProfessor.getId_0().value_0), $getValue_1(this$static.lstClasses, this$static.lstClasses.element.selectedIndex), $getValue_1(this$static.lstSubjects, this$static.lstSubjects.element.selectedIndex), ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
}

function $onLstClassesChange(this$static){
  !!this$static.uiHandlers && $loadActiveSubjectList(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ProfessorListUiHandler), Q$ProfsPresenter));
}

function $onLstCoursChange_0(this$static){
  if (!$getValue_1(this$static.lstCours, this$static.lstCours.element.selectedIndex).length) {
    $selectClear(this$static.lstClasses.element);
    return;
  }
  !!this$static.uiHandlers && $onProgrammeSelected(dynamicCast(this$static.uiHandlers, Q$ProfessorListUiHandler), $getValue_1(this$static.lstCours, this$static.lstCours.element.selectedIndex));
}

function $onLstEcolesChange_1(this$static){
  if (!$getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex).length) {
    $selectClear(this$static.lstCours.element);
    $selectClear(this$static.lstClasses.element);
    return;
  }
  !!this$static.uiHandlers && $onEcoleSelected_1(dynamicCast(this$static.uiHandlers, Q$ProfessorListUiHandler), $getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex));
}

function $refreshTable_1(this$static, prof){
  $remove_11(this$static.dataProvider.listWrapper, this$static.selectedProf);
  $add_11(this$static.dataProvider.listWrapper, this$static.selectedProf, prof);
  $refresh(this$static.dataProvider);
}

function $resetForm_3(this$static){
  $setSelected_0(this$static.tblProfessors.presenter.selectionModel, this$static.selectedProfessor, false);
  $setText_0(this$static.lblProfNameAssign, '');
  $clear_3(this$static.dataProvider.listWrapper);
  $refresh(this$static.dataProvider);
  $clear_3(this$static.assignmentDataProvider.listWrapper);
  $refresh(this$static.assignmentDataProvider);
  $selectClear(this$static.lstEcoles.element);
  $selectClear(this$static.lstCours.element);
  $selectClear(this$static.lstClasses.element);
  $selectClear(this$static.lstSubjects.element);
}

function $setAssignmentTableData(this$static, assignments){
  $clear_3(this$static.assignmentDataProvider.listWrapper);
  $setList(this$static.assignmentDataProvider, assignments);
  $refresh(this$static.assignmentDataProvider);
}

function $setClasseList(this$static, classeList){
  var cours, cours$iterator;
  $selectClear(this$static.lstClasses.element);
  $insertItem(this$static.lstClasses, '-', '', -1);
  for (cours$iterator = classeList.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$ClasseProxy);
    $insertItem(this$static.lstClasses, cours.getClassName(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setCoursList_1(this$static, coursList){
  var cours, cours$iterator;
  $selectClear(this$static.lstCours.element);
  $insertItem(this$static.lstCours, '-', '', -1);
  for (cours$iterator = coursList.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$CoursProxy);
    $insertItem(this$static.lstCours, cours.getCoursNom(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setData_2(this$static, profs){
  $clear_3(this$static.dataProvider.listWrapper);
  $setList(this$static.dataProvider, profs);
}

function $setEcoleList_1(this$static, ecoleList){
  var ecole, ecole$iterator;
  $selectClear(this$static.lstEcoles.element);
  $insertItem(this$static.lstEcoles, '-', '', -1);
  for (ecole$iterator = ecoleList.iterator(); ecole$iterator.hasNext();) {
    ecole = dynamicCast(ecole$iterator.next_0(), Q$EcoleProxy);
    $insertItem(this$static.lstEcoles, ecole.getSchoolName(), '' + toString_6(ecole.getId_0().value_0), -1);
  }
}

function $setSubjectList(this$static, subjectList){
  var subject, subject$iterator;
  $selectClear(this$static.lstSubjects.element);
  $insertItem(this$static.lstSubjects, '-', '', -1);
  for (subject$iterator = subjectList.iterator(); subject$iterator.hasNext();) {
    subject = dynamicCast(subject$iterator.next_0(), Q$SubjectProxy);
    $insertItem(this$static.lstSubjects, subject.getSubjectName(), '' + toString_6(subject.getId_0().value_0), -1);
  }
}

function $showAddedAssignment(this$static, assignment){
  $add_12(this$static.assignmentDataProvider.listWrapper, assignment);
  $refresh(this$static.assignmentDataProvider);
}

function $showUpdatedAssignment(this$static, assignment){
  $remove_11(this$static.assignmentDataProvider.listWrapper, this$static.selectedAssignmentIndex);
  $add_11(this$static.assignmentDataProvider.listWrapper, this$static.selectedAssignmentIndex, assignment);
  $refresh(this$static.assignmentDataProvider);
}

function ProfsView_0(){
  this.dataProvider = new ListDataProvider_0;
  this.assignmentDataProvider = new ListDataProvider_0;
  this.tblProfessors = new DataGrid_0;
  this.tblAssignments = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_13(new ProfsView_BinderImpl$Widgets_0(this));
}

defineSeed(1013, 661, makeCastMap([Q$IsWidget, Q$ProfsPresenter$MyView]), ProfsView_0);
_.asWidget = function asWidget_18(){
  return this.widget;
}
;
_.lblProfNameAssign = null;
_.lstClasses = null;
_.lstCours = null;
_.lstEcoles = null;
_.lstSubjects = null;
_.selectedAssignmentIndex = 0;
_.selectedProf = 0;
_.selectedProfessor = null;
_.widget = null;
function ProfsView$1_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1014, 342, makeCastMap([Q$HasCell, Q$Column]), ProfsView$1_0);
_.getValue = function getValue_14(object){
  return dynamicCast(object, Q$ProfessorProxy).getProfName();
}
;
function $update_11(this$static, index, assignment, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedAssignmentIndex = index;
    $updateAssignmentStatus(dynamicCast(this$static.this$0.uiHandlers, Q$ProfessorListUiHandler), assignment, value);
  }
}

function ProfsView$10_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1015, 1, {}, ProfsView$10_0);
_.update = function update_12(index, assignment, value){
  $update_11(this, index, dynamicCast(assignment, Q$AssignmentProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function $update_12(this$static, index, prof, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedProf = index;
    $updateProfessorName(dynamicCast(this$static.this$0.uiHandlers, Q$ProfessorListUiHandler), prof, value);
  }
}

function ProfsView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1016, 1, {}, ProfsView$2_0);
_.update = function update_13(index, prof, value){
  $update_12(this, index, dynamicCast(prof, Q$ProfessorProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function ProfsView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1017, 342, makeCastMap([Q$HasCell, Q$Column]), ProfsView$3_0);
_.getValue = function getValue_15(ecole){
  return dynamicCast(ecole, Q$ProfessorProxy).getProfActive();
}
;
function $update_13(this$static, index, prof, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedProf = index;
    $updateProfessorStatus(dynamicCast(this$static.this$0.uiHandlers, Q$ProfessorListUiHandler), prof, value);
  }
}

function ProfsView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1018, 1, {}, ProfsView$4_0);
_.update = function update_14(index, prof, value){
  $update_13(this, index, dynamicCast(prof, Q$ProfessorProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function ProfsView$5_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1019, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), ProfsView$5_0);
_.onSelectionChange = function onSelectionChange_0(event_0){
  this.this$0.selectedProfessor = dynamicCast($getSelectedObject(this.val$selectionModel), Q$ProfessorProxy);
  if (this.this$0.selectedProfessor) {
    $setText_0(this.this$0.lblProfNameAssign, this.this$0.selectedProfessor.getProfName());
    $professorSelected(dynamicCast(this.this$0.uiHandlers, Q$ProfessorListUiHandler), this.this$0.selectedProfessor);
  }
}
;
_.this$0 = null;
_.val$selectionModel = null;
function ProfsView$6_0(){
  TextColumn_0.call(this);
}

defineSeed(1020, 368, makeCastMap([Q$HasCell, Q$Column]), ProfsView$6_0);
_.getValue = function getValue_16(object){
  return dynamicCast(object, Q$AssignmentProxy).getProgrammeName();
}
;
function ProfsView$7_0(){
  TextColumn_0.call(this);
}

defineSeed(1021, 368, makeCastMap([Q$HasCell, Q$Column]), ProfsView$7_0);
_.getValue = function getValue_17(object){
  return dynamicCast(object, Q$AssignmentProxy).getClasseName();
}
;
function ProfsView$8_0(){
  TextColumn_0.call(this);
}

defineSeed(1022, 368, makeCastMap([Q$HasCell, Q$Column]), ProfsView$8_0);
_.getValue = function getValue_18(object){
  return dynamicCast(object, Q$AssignmentProxy).getSubjectName();
}
;
function ProfsView$9_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1023, 342, makeCastMap([Q$HasCell, Q$Column]), ProfsView$9_0);
_.getValue = function getValue_19(ecole){
  return dynamicCast(ecole, Q$AssignmentProxy).getActive();
}
;
function ProfsView_BinderImpl_0(){
}

defineSeed(1024, 1, {}, ProfsView_BinderImpl_0);
function $build_f_HTMLPanel1_13(this$static){
  var attachRecord13, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_VerticalPanel5, f_VerticalPanel6, tblProfessors, lblProfNameAssign, f_Label7, f_Grid8, f_Label9, lstEcoles, f_Label10, lstCours, f_Label11, lstClasses, f_Label12, lstSubjects, cmdAssigner, sb, f_Label14, f_Label15, tblAssignments;
  f_HTMLPanel1 = new HTMLPanel_0($html2_1(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord13 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord13.origParent?$insertBefore(attachRecord13.origParent, attachRecord13.element, attachRecord13.origSibling):orphan(attachRecord13.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_9(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'LISTE DES PROFESSEURS') , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_9(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $add_7(f_HorizontalPanel4, (f_VerticalPanel5 = new VerticalPanel_0 , $add_9(f_VerticalPanel5, (tblProfessors = this$static.owner.tblProfessors , $setKeyboardPagingPolicy(tblProfessors, ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , INCREASE_RANGE)) , tblProfessors.element.style['height'] = '550px' , tblProfessors.element.style['width'] = '500px' , $setVisibleRange(tblProfessors, new Range_1($getVisibleRange(tblProfessors.presenter).start, 1000)) , $setKeyboardSelectionPolicy(tblProfessors, ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED)) , tblProfessors)) , f_VerticalPanel5.element.style['width'] = '' , f_VerticalPanel5.table['cellSpacing'] = 2 , f_VerticalPanel5)) , $add_7(f_HorizontalPanel4, (f_VerticalPanel6 = new VerticalPanel_0 , $add_9(f_VerticalPanel6, (lblProfNameAssign = new Label_0 , lblProfNameAssign.element['className'] = 'header' , this$static.owner.lblProfNameAssign = lblProfNameAssign , lblProfNameAssign)) , $add_9(f_VerticalPanel6, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label7.directionalTextHelper, 'Assigner une classe') , $updateHorizontalAlignment(f_Label7) , f_Label7.element.style['width'] = '' , f_Label7)) , $add_9(f_VerticalPanel6, (f_Grid8 = new Grid_0 , $resizeColumns(f_Grid8, 2) , $resizeRows(f_Grid8, 5) , $setWidget_1(f_Grid8, 0, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Ecole :') , $updateHorizontalAlignment(f_Label9) , f_Label9.element.style['width'] = '' , f_Label9)) , $setWidget_1(f_Grid8, 0, 1, (lstEcoles = new ListBox_0 , lstEcoles.element['className'] = 'sis_textbox' , $addDomHandler(lstEcoles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_1(f_Grid8, 1, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Programme :') , $updateHorizontalAlignment(f_Label10) , f_Label10.element.style['width'] = '' , f_Label10)) , $setWidget_1(f_Grid8, 1, 1, (lstCours = new ListBox_0 , lstCours.element['className'] = 'sis_textbox' , $addDomHandler(lstCours, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this$static.owner.lstCours = lstCours , lstCours)) , $setWidget_1(f_Grid8, 2, 0, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Classe :') , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid8, 2, 1, (lstClasses = new ListBox_0 , lstClasses.element['className'] = 'sis_textbox' , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE) , this$static.owner.lstClasses = lstClasses , lstClasses)) , $setWidget_1(f_Grid8, 3, 0, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Mati\xE8re :') , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_1(f_Grid8, 3, 1, (lstSubjects = new ListBox_0 , lstSubjects.element['className'] = 'sis_textbox' , this$static.owner.lstSubjects = lstSubjects , lstSubjects)) , $setWidget_1(f_Grid8, 4, 0, new Label_0) , $setWidget_1(f_Grid8, 4, 1, (cmdAssigner = new Button_0 , $setHTML(cmdAssigner, (sb = new StringBuilder_0 , sb.impl.string += 'Ajouter' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , cmdAssigner.element.style['width'] = '100px' , $addDomHandler(cmdAssigner, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdAssigner)) , f_Grid8.element['className'] = 'subSection' , f_Grid8.element.style['width'] = '100%' , f_Grid8.tableElem['cellSpacing'] = 2 , f_Grid8.tableElem['cellPadding'] = 2 , f_Grid8)) , $add_9(f_VerticalPanel6, (f_Label14 = new Label_0 , f_Label14.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label14.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $add_9(f_VerticalPanel6, (f_Label15 = new Label_0 , f_Label15.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label15.directionalTextHelper, 'Liste des classes assign\xE9s') , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $add_9(f_VerticalPanel6, (tblAssignments = this$static.owner.tblAssignments , tblAssignments.element['className'] = 'subSection' , tblAssignments.element.style['height'] = '350PX' , tblAssignments.element.style['width'] = '400px' , tblAssignments)) , f_VerticalPanel6.element.style['width'] = '' , f_VerticalPanel6.table['cellSpacing'] = 2 , f_VerticalPanel6)) , f_HorizontalPanel4.element.style['width'] = '850px' , f_HorizontalPanel4.table['cellSpacing'] = 5 , f_HorizontalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ProfsView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ProfsView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ProfsView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ProfsView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ProfsView_BinderImpl$Widgets$4_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1025, 1, {}, ProfsView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function ProfsView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1026, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_32(event_0){
  $onCmdAssignerClick(this.this$1.owner);
}
;
_.this$1 = null;
function ProfsView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1027, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_3(event_0){
  $onLstEcolesChange_1(this.this$1.owner);
}
;
_.this$1 = null;
function ProfsView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1028, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_4(event_0){
  $onLstCoursChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function ProfsView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1029, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$4_0);
_.onChange = function onChange_5(event_0){
  $onLstClassesChange(this.this$1.owner);
}
;
_.this$1 = null;
function $html2_1(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$view$ProfsView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$ProfsView$_annotation$$none$$) {
    result = new ProfsView_0(new ProfsView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$ProfsView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$ProfsView$_annotation$$none$$;
}

function $$init_8(this$static){
  this$static.shim = new AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_8(this);
}

function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_8(this);
}

defineSeed(1070, 556, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_8(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_8(){
  return new AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_16(){
  return Lcom_lemania_sis_shared_AssignmentProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_7(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getActive(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'active'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('active', value, propertyContext);
  value = $getId_2(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getClasseName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'classeName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('classeName', value, propertyContext);
  value = $getCourseName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'courseName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('courseName', value, propertyContext);
  value = $getProgrammeName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'programmeName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('programmeName', value, propertyContext);
  value = $getSchoolName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'schoolName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('schoolName', value, propertyContext);
  value = $getSubjectName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'subjectName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('subjectName', value, propertyContext);
}
;
function $getActive(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getClasseName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getClasseName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getCourseName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getCourseName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getId_2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getProgrammeName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getProgrammeName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getSchoolName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getSchoolName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getSubjectName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getSubjectName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1071, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$AssignmentProxy]), AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_28(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$AssignmentProxy).equals$(o);
}
;
_.getActive = function getActive(){
  return $getActive(this);
}
;
_.getClasseName = function getClasseName(){
  return $getClasseName(this);
}
;
_.getCourseName = function getCourseName(){
  return $getCourseName(this);
}
;
_.getId_0 = function getId_1(){
  return $getId_2(this);
}
;
_.getProgrammeName = function getProgrammeName(){
  return $getProgrammeName(this);
}
;
_.getSchoolName = function getSchoolName(){
  return $getSchoolName(this);
}
;
_.getSubjectName = function getSubjectName(){
  return $getSubjectName(this);
}
;
_.hashCode$ = function hashCode_28(){
  return dynamicCast($getWrapped(this.this$0), Q$AssignmentProxy).hashCode$();
}
;
_.setActive = function setActive(active){
  dynamicCast($getWrapped(this.this$0), Q$AssignmentProxy).setActive(active);
}
;
_.toString$ = function toString_24(){
  return dynamicCast($getWrapped(this.this$0), Q$AssignmentProxy).toString$();
}
;
_.this$0 = null;
function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1072, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$AssignmentProxy]), AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_29(other){
  return equals_14(this.this$0, other);
}
;
_.getActive = function getActive_0(){
  return dynamicCast($getOrReify(this.this$0, 'active'), Q$Boolean);
}
;
_.getClasseName = function getClasseName_0(){
  return dynamicCast($getOrReify(this.this$0, 'classeName'), Q$String);
}
;
_.getCourseName = function getCourseName_0(){
  return dynamicCast($getOrReify(this.this$0, 'courseName'), Q$String);
}
;
_.getId_0 = function getId_2(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getProgrammeName = function getProgrammeName_0(){
  return dynamicCast($getOrReify(this.this$0, 'programmeName'), Q$String);
}
;
_.getSchoolName = function getSchoolName_0(){
  return dynamicCast($getOrReify(this.this$0, 'schoolName'), Q$String);
}
;
_.getSubjectName = function getSubjectName_0(){
  return dynamicCast($getOrReify(this.this$0, 'subjectName'), Q$String);
}
;
_.hashCode$ = function hashCode_29(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setActive = function setActive_0(active){
  $setProperty(this.this$0, 'active', active);
}
;
_.this$0 = null;
function $clinit_AssignmentRequestFactoryImpl(){
  $clinit_AssignmentRequestFactoryImpl = nullMethod;
  tokensToTypes = new HashMap_0;
  typesToTokens = new HashMap_0;
  entityProxyTypes = new HashSet_0;
  valueProxyTypes = new HashSet_0;
  tokensToTypes.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_18(entityProxyTypes, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes.put('Y4M9ZJCEf0FkvayQ8GKQxdNeYE4=', Lcom_lemania_sis_shared_AssignmentProxy_2_classLit);
  typesToTokens.put(Lcom_lemania_sis_shared_AssignmentProxy_2_classLit, 'Y4M9ZJCEf0FkvayQ8GKQxdNeYE4=');
  $add_18(entityProxyTypes, Lcom_lemania_sis_shared_AssignmentProxy_2_classLit);
}

function AssignmentRequestFactoryImpl_0(){
  $clinit_AssignmentRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1100, 590, {}, AssignmentRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken(){
  return 'com.lemania.sis.shared.service.AssignmentRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken(typeToken){
  return dynamicCast(tokensToTypes.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_3(type){
  return dynamicCast(typesToTokens.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_0(type){
  return $contains_1(entityProxyTypes, type);
}
;
_.isValueType = function isValueType_0(type){
  return $contains_1(valueProxyTypes, type);
}
;
var entityProxyTypes, tokensToTypes, typesToTokens, valueProxyTypes;
function $listAll(this$static, profId){
  var x;
  x = new AssignmentRequestFactory_AssignmentRequestContextImpl$3X_0(this$static, profId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function AssignmentRequestFactory_AssignmentRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1101, 600, makeCastMap([Q$AbstractRequestContext]), AssignmentRequestFactory_AssignmentRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory(){
  return !FACTORY_0 && (FACTORY_0 = new AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl_0) , FACTORY_0;
}
;
var FACTORY_0 = null;
function AssignmentRequestFactory_AssignmentRequestContextImpl$3X_0(this$0, val$profId){
  this.val$profId = val$profId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1102, 599, makeCastMap([Q$AbstractRequest]), AssignmentRequestFactory_AssignmentRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData(){
  return new RequestData_0('lMwcXIZKGtBXRAcy4JERU31qNR0=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_AssignmentProxy_2_classLit);
}
;
_.val$profId = null;
function AssignmentRequestFactory_AssignmentRequestContextImpl$7X_0(this$0, val$a){
  this.val$a = val$a;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1103, 599, makeCastMap([Q$AbstractRequest]), AssignmentRequestFactory_AssignmentRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_0(){
  return new RequestData_0('_YGYQXcLTE0k7sgXwMOAkX_wQms=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$a]), this.propertyRefs, Lcom_lemania_sis_shared_AssignmentProxy_2_classLit, null);
}
;
_.val$a = null;
function AssignmentRequestFactory_AssignmentRequestContextImpl$8X_0(this$0, val$profId, val$classId, val$subjectId, val$isActive){
  this.val$profId = val$profId;
  this.val$classId = val$classId;
  this.val$subjectId = val$subjectId;
  this.val$isActive = val$isActive;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1104, 599, makeCastMap([Q$AbstractRequest]), AssignmentRequestFactory_AssignmentRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_1(){
  return new RequestData_0('YyU4C1i5$5uQlrd47oQKbFqOv2o=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId, this.val$classId, this.val$subjectId, this.val$isActive]), this.propertyRefs, Lcom_lemania_sis_shared_AssignmentProxy_2_classLit, null);
}
;
_.val$classId = null;
_.val$isActive = null;
_.val$profId = null;
_.val$subjectId = null;
function $getConstructors_com_lemania_sis_shared_AssignmentProxy(){
  return [function(factory){
    return new AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1105, 528, makeCastMap([Q$EnumMap]), AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_0(map){
  $add_13(map, Lcom_lemania_sis_shared_AssignmentProxy_2_classLit, $getConstructors_com_lemania_sis_shared_AssignmentProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_0(){
}
;
function $saveAndReturn_0(this$static, newProf){
  var x;
  x = new ProfessorRequestFactory_ProfessorRequestContextImpl$5X_0(this$static, newProf);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ProfessorRequestFactory_ProfessorRequestContextImpl$2X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1134, 599, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_14(){
  return new RequestData_0('FASF6T$HSOeNninmyDnq50cS85c=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ProfessorProxy_2_classLit);
}
;
function ProfessorRequestFactory_ProfessorRequestContextImpl$5X_0(this$0, val$newProf){
  this.val$newProf = val$newProf;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1136, 599, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_16(){
  return new RequestData_0('7vC3$wpOCQmBs0$q0LXfL81qLho=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newProf]), this.propertyRefs, Lcom_lemania_sis_shared_ProfessorProxy_2_classLit, null);
}
;
_.val$newProf = null;
function SubjectRequestFactory_SubjectRequestContextImpl$3X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1152, 599, makeCastMap([Q$AbstractRequest]), SubjectRequestFactory_SubjectRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_23(){
  return new RequestData_0('MPFmfLNlkc0etb$Pi_O8mA63K60=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_SubjectProxy_2_classLit);
}
;
var Lcom_lemania_sis_client_presenter_ProfsPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter', 803), Lcom_lemania_sis_client_presenter_ProfsPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$1', 804), Lcom_lemania_sis_client_presenter_ProfsPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$2', 806), Lcom_lemania_sis_client_presenter_ProfsPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$3', 807), Lcom_lemania_sis_client_presenter_ProfsPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$4', 808), Lcom_lemania_sis_client_presenter_ProfsPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$5', 809), Lcom_lemania_sis_client_presenter_ProfsPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$6', 810), Lcom_lemania_sis_client_presenter_ProfsPresenter$7_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$7', 811), Lcom_lemania_sis_client_presenter_ProfsPresenter$8_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$8', 812), Lcom_lemania_sis_client_presenter_ProfsPresenter$9_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$9', 813), Lcom_lemania_sis_client_presenter_ProfsPresenter$10_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$10', 805), Lcom_lemania_sis_client_view_ProfsView_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView', 1013), Lcom_lemania_sis_client_view_ProfsView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$1', 1014), Lcom_lemania_sis_client_view_ProfsView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$2', 1016), Lcom_lemania_sis_client_view_ProfsView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$3', 1017), Lcom_lemania_sis_client_view_ProfsView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$4', 1018), Lcom_lemania_sis_client_view_ProfsView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$5', 1019), Lcom_lemania_sis_client_view_ProfsView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$6', 1020), Lcom_lemania_sis_client_view_ProfsView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$7', 1021), Lcom_lemania_sis_client_view_ProfsView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$8', 1022), Lcom_lemania_sis_client_view_ProfsView$9_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$9', 1023), Lcom_lemania_sis_client_view_ProfsView$10_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$10', 1015), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl', 1024), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl$Widgets', 1025), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl$Widgets$1', 1026), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl$Widgets$2', 1027), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl$Widgets$3', 1028), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl$Widgets$4', 1029), Lcom_google_gwt_user_cellview_client_HasDataPresenter$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'HasDataPresenter$1', 358), Lcom_google_gwt_view_client_SelectionModel$AbstractSelectionModel_2_classLit = createForClass('com.google.gwt.view.client.', 'SelectionModel$AbstractSelectionModel', 524), Lcom_google_gwt_view_client_SingleSelectionModel_2_classLit = createForClass('com.google.gwt.view.client.', 'SingleSelectionModel', 526), Lcom_lemania_sis_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$2X', 1134), Lcom_lemania_sis_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$5X', 1136), Lcom_lemania_sis_shared_service_SubjectRequestFactory_1SubjectRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SubjectRequestFactory_SubjectRequestContextImpl$3X', 1152), Lcom_lemania_sis_shared_AssignmentProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'AssignmentProxy'), Lcom_lemania_sis_shared_service_AssignmentRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactoryImpl', 1100), Lcom_lemania_sis_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl', 1101), Lcom_lemania_sis_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$3X', 1102), Lcom_lemania_sis_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$7X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$7X', 1103), Lcom_lemania_sis_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$8X', 1104), Lcom_lemania_sis_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl', 1105), Lcom_lemania_sis_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1070), Lcom_lemania_sis_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1071), Lcom_lemania_sis_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1072);
$entry(onLoad)(14);
