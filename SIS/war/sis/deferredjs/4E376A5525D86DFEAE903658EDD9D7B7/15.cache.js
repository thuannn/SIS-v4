function $setKeyboardPagingPolicy(this$static, policy){
  $setKeyboardPagingPolicy_0(this$static.presenter, policy);
}

function $setKeyboardSelectionPolicy(this$static, policy){
  $setKeyboardSelectionPolicy_0(this$static.presenter, policy);
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

function $loadActiveSubjectList(this$static){
  var rc, rf;
  rf = new SubjectRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SubjectRequestFactory_SubjectRequestContextImpl_0(rf);
  $fire($listAllActive(rc), new ProfsPresenter$10_0(this$static));
}

function $onEcoleSelected_1(this$static, ecoleId){
  var rc, rf;
  if (!ecoleId.length) {
    return;
  }
  rf = new CoursRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  $fire($listAll_2(rc, ecoleId), new ProfsPresenter$6_0(this$static));
}

function $onProgrammeSelected(this$static, coursId){
  var rc, rf;
  rf = new ClasseRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAll_1(rc, coursId), new ProfsPresenter$7_0(this$static));
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
  $fire((x = new AssignmentRequestFactory_AssignmentRequestContextImpl$9X_0(rc, professorId, classId, subjectId, isActive) , $addInvocation(rc.state.dialect, x) , x), new ProfsPresenter$8_0(this$static));
}

function $updateAssignmentStatus(this$static, assignment, value){
  var a4update, rc, rf, x;
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  a4update = dynamicCast($editProxy(rc, assignment), Q$AssignmentProxy);
  a4update.setActive(value);
  $fire((x = new AssignmentRequestFactory_AssignmentRequestContextImpl$8X_0(rc, a4update) , $addInvocation(rc.state.dialect, x) , x), new ProfsPresenter$9_0(this$static));
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

defineSeed(836, 670, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfsPresenter, Q$ProfessorListUiHandler]), ProfsPresenter_0);
_.onBind = function onBind_17(){
  dynamicCast(this.view, Q$ProfsPresenter$MyView).setUiHandlers(this);
  $initializeTable_2(dynamicCast(this.view, Q$ProfsPresenter$MyView));
  $initializeAssignmentTable(dynamicCast(this.view, Q$ProfsPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_5(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_11(){
  var rf, rc, x, rf_0, rc_0;
  $resetForm_4(dynamicCast(this.view, Q$ProfsPresenter$MyView));
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire((x = new ProfessorRequestFactory_ProfessorRequestContextImpl$2X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new ProfsPresenter$2_0(this));
  rf_0 = new EcoleRequestFactoryImpl_0;
  $initialize(rf_0, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc_0 = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf_0);
  $fire($listAll_3(rc_0), new ProfsPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_16(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_40(this$static, response){
  $setEcoleList_1(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(837, 609, makeCastMap([Q$Receiver]), ProfsPresenter$1_0);
_.onFailure_0 = function onFailure_40(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_40(response){
  $onSuccess_40(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_41(this$static, response){
  $setSubjectList(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$10_0(this$0){
  this.this$0 = this$0;
}

defineSeed(838, 609, makeCastMap([Q$Receiver]), ProfsPresenter$10_0);
_.onFailure_0 = function onFailure_41(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_41(response){
  $onSuccess_41(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_42(this$static, response){
  $setData_2(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(839, 609, makeCastMap([Q$Receiver]), ProfsPresenter$2_0);
_.onFailure_0 = function onFailure_42(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_42(response){
  $onSuccess_42(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_43(this$static, response){
  $refreshTable_1(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(840, 609, makeCastMap([Q$Receiver]), ProfsPresenter$3_0);
_.onFailure_0 = function onFailure_43(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_43(response){
  $onSuccess_43(this, dynamicCast(response, Q$ProfessorProxy));
}
;
_.this$0 = null;
function $onSuccess_44(this$static, response){
  $refreshTable_1(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(841, 609, makeCastMap([Q$Receiver]), ProfsPresenter$4_0);
_.onFailure_0 = function onFailure_44(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_44(response){
  $onSuccess_44(this, dynamicCast(response, Q$ProfessorProxy));
}
;
_.this$0 = null;
function $onSuccess_45(this$static, response){
  $setAssignmentTableData(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(842, 609, makeCastMap([Q$Receiver]), ProfsPresenter$5_0);
_.onFailure_0 = function onFailure_45(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_45(response){
  $onSuccess_45(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_46(this$static, response){
  $setCoursList_1(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(843, 609, makeCastMap([Q$Receiver]), ProfsPresenter$6_0);
_.onFailure_0 = function onFailure_46(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_46(response){
  $onSuccess_46(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_47(this$static, response){
  $setClasseList(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(844, 609, makeCastMap([Q$Receiver]), ProfsPresenter$7_0);
_.onFailure_0 = function onFailure_47(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_47(response){
  $onSuccess_47(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_48(this$static, response){
  $showAddedAssignment(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(845, 609, makeCastMap([Q$Receiver]), ProfsPresenter$8_0);
_.onFailure_0 = function onFailure_48(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_48(response){
  $onSuccess_48(this, dynamicCast(response, Q$AssignmentProxy));
}
;
_.this$0 = null;
function $onSuccess_49(this$static, response){
  $showUpdatedAssignment(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(846, 609, makeCastMap([Q$Receiver]), ProfsPresenter$9_0);
_.onFailure_0 = function onFailure_49(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_49(response){
  $onSuccess_49(this, dynamicCast(response, Q$AssignmentProxy));
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

defineSeed(896, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_70(){
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

function $resetForm_4(this$static){
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
  this.widget = $build_f_HTMLPanel1_14(new ProfsView_BinderImpl$Widgets_0(this));
}

defineSeed(1072, 675, makeCastMap([Q$IsWidget, Q$ProfsPresenter$MyView]), ProfsView_0);
_.asWidget = function asWidget_19(){
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

defineSeed(1073, 351, makeCastMap([Q$HasCell, Q$Column]), ProfsView$1_0);
_.getValue = function getValue_22(object){
  return dynamicCast(object, Q$ProfessorProxy).getProfName();
}
;
function $update_16(this$static, index, assignment, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedAssignmentIndex = index;
    $updateAssignmentStatus(dynamicCast(this$static.this$0.uiHandlers, Q$ProfessorListUiHandler), assignment, value);
  }
}

function ProfsView$10_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1074, 1, {}, ProfsView$10_0);
_.update = function update_17(index, assignment, value){
  $update_16(this, index, dynamicCast(assignment, Q$AssignmentProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function $update_17(this$static, index, prof, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedProf = index;
    $updateProfessorName(dynamicCast(this$static.this$0.uiHandlers, Q$ProfessorListUiHandler), prof, value);
  }
}

function ProfsView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1075, 1, {}, ProfsView$2_0);
_.update = function update_18(index, prof, value){
  $update_17(this, index, dynamicCast(prof, Q$ProfessorProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function ProfsView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1076, 351, makeCastMap([Q$HasCell, Q$Column]), ProfsView$3_0);
_.getValue = function getValue_23(ecole){
  return dynamicCast(ecole, Q$ProfessorProxy).getProfActive();
}
;
function $update_18(this$static, index, prof, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedProf = index;
    $updateProfessorStatus(dynamicCast(this$static.this$0.uiHandlers, Q$ProfessorListUiHandler), prof, value);
  }
}

function ProfsView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1077, 1, {}, ProfsView$4_0);
_.update = function update_19(index, prof, value){
  $update_18(this, index, dynamicCast(prof, Q$ProfessorProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function ProfsView$5_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1078, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), ProfsView$5_0);
_.onSelectionChange = function onSelectionChange_1(event_0){
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

defineSeed(1079, 377, makeCastMap([Q$HasCell, Q$Column]), ProfsView$6_0);
_.getValue = function getValue_24(object){
  return dynamicCast(object, Q$AssignmentProxy).getProgrammeName();
}
;
function ProfsView$7_0(){
  TextColumn_0.call(this);
}

defineSeed(1080, 377, makeCastMap([Q$HasCell, Q$Column]), ProfsView$7_0);
_.getValue = function getValue_25(object){
  return dynamicCast(object, Q$AssignmentProxy).getClasseName();
}
;
function ProfsView$8_0(){
  TextColumn_0.call(this);
}

defineSeed(1081, 377, makeCastMap([Q$HasCell, Q$Column]), ProfsView$8_0);
_.getValue = function getValue_26(object){
  return dynamicCast(object, Q$AssignmentProxy).getSubjectName();
}
;
function ProfsView$9_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1082, 351, makeCastMap([Q$HasCell, Q$Column]), ProfsView$9_0);
_.getValue = function getValue_27(ecole){
  return dynamicCast(ecole, Q$AssignmentProxy).getActive();
}
;
function ProfsView_BinderImpl_0(){
}

defineSeed(1083, 1, {}, ProfsView_BinderImpl_0);
function $build_f_HTMLPanel1_14(this$static){
  var attachRecord14, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_VerticalPanel5, f_VerticalPanel6, tblProfessors, lblProfNameAssign, f_Label7, f_Grid8, f_Label9, lstEcoles, f_Label10, lstCours, f_Label11, lstClasses, f_Label12, lstSubjects, cmdAssigner, sb, f_Label14, f_Label15, tblAssignments;
  f_HTMLPanel1 = new HTMLPanel_0($html2_1(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord14 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord14.origParent?$insertBefore(attachRecord14.origParent, attachRecord14.element, attachRecord14.origSibling):orphan(attachRecord14.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_9(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'LISTE DES PROFESSEURS') , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_9(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $add_7(f_HorizontalPanel4, (f_VerticalPanel5 = new VerticalPanel_0 , $add_9(f_VerticalPanel5, (tblProfessors = this$static.owner.tblProfessors , $setKeyboardPagingPolicy(tblProfessors, ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , INCREASE_RANGE)) , tblProfessors.element.style['height'] = '550px' , tblProfessors.element.style['width'] = '500px' , $setVisibleRange(tblProfessors, new Range_1($getVisibleRange(tblProfessors.presenter).start, 1000)) , $setKeyboardSelectionPolicy(tblProfessors, ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED)) , tblProfessors)) , f_VerticalPanel5.element.style['width'] = '' , f_VerticalPanel5.table['cellSpacing'] = 2 , f_VerticalPanel5)) , $add_7(f_HorizontalPanel4, (f_VerticalPanel6 = new VerticalPanel_0 , $add_9(f_VerticalPanel6, (lblProfNameAssign = new Label_0 , lblProfNameAssign.element['className'] = 'header' , this$static.owner.lblProfNameAssign = lblProfNameAssign , lblProfNameAssign)) , $add_9(f_VerticalPanel6, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label7.directionalTextHelper, 'Assigner une classe') , $updateHorizontalAlignment(f_Label7) , f_Label7.element.style['width'] = '' , f_Label7)) , $add_9(f_VerticalPanel6, (f_Grid8 = new Grid_0 , $resizeColumns(f_Grid8, 2) , $resizeRows(f_Grid8, 5) , $setWidget_1(f_Grid8, 0, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Ecole :') , $updateHorizontalAlignment(f_Label9) , f_Label9.element.style['width'] = '' , f_Label9)) , $setWidget_1(f_Grid8, 0, 1, (lstEcoles = new ListBox_0 , lstEcoles.element['className'] = 'sis_textbox' , $addDomHandler(lstEcoles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_1(f_Grid8, 1, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Programme :') , $updateHorizontalAlignment(f_Label10) , f_Label10.element.style['width'] = '' , f_Label10)) , $setWidget_1(f_Grid8, 1, 1, (lstCours = new ListBox_0 , lstCours.element['className'] = 'sis_textbox' , $addDomHandler(lstCours, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this$static.owner.lstCours = lstCours , lstCours)) , $setWidget_1(f_Grid8, 2, 0, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Classe :') , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid8, 2, 1, (lstClasses = new ListBox_0 , lstClasses.element['className'] = 'sis_textbox' , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE) , this$static.owner.lstClasses = lstClasses , lstClasses)) , $setWidget_1(f_Grid8, 3, 0, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Mati\xE8re :') , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_1(f_Grid8, 3, 1, (lstSubjects = new ListBox_0 , lstSubjects.element['className'] = 'sis_textbox' , this$static.owner.lstSubjects = lstSubjects , lstSubjects)) , $setWidget_1(f_Grid8, 4, 0, new Label_0) , $setWidget_1(f_Grid8, 4, 1, (cmdAssigner = new Button_0 , $setHTML(cmdAssigner, (sb = new StringBuilder_0 , sb.impl.string += 'Ajouter' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , cmdAssigner.element.style['width'] = '100px' , $addDomHandler(cmdAssigner, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdAssigner)) , f_Grid8.element['className'] = 'subSection' , f_Grid8.element.style['width'] = '100%' , f_Grid8.tableElem['cellSpacing'] = 2 , f_Grid8.tableElem['cellPadding'] = 2 , f_Grid8)) , $add_9(f_VerticalPanel6, (f_Label14 = new Label_0 , f_Label14.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label14.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $add_9(f_VerticalPanel6, (f_Label15 = new Label_0 , f_Label15.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label15.directionalTextHelper, 'Liste des classes assign\xE9s') , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $add_9(f_VerticalPanel6, (tblAssignments = this$static.owner.tblAssignments , tblAssignments.element['className'] = 'subSection' , tblAssignments.element.style['height'] = '350PX' , tblAssignments.element.style['width'] = '400px' , tblAssignments)) , f_VerticalPanel6.element.style['width'] = '' , f_VerticalPanel6.table['cellSpacing'] = 2 , f_VerticalPanel6)) , f_HorizontalPanel4.element.style['width'] = '850px' , f_HorizontalPanel4.table['cellSpacing'] = 5 , f_HorizontalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
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

defineSeed(1084, 1, {}, ProfsView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function ProfsView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1085, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_36(event_0){
  $onCmdAssignerClick(this.this$1.owner);
}
;
_.this$1 = null;
function ProfsView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1086, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_5(event_0){
  $onLstEcolesChange_1(this.this$1.owner);
}
;
_.this$1 = null;
function ProfsView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1087, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_6(event_0){
  $onLstCoursChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function ProfsView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1088, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$4_0);
_.onChange = function onChange_7(event_0){
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

defineSeed(1130, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$AssignmentProxy]));
_.setActive = function setActive(active){
  dynamicCast($getWrapped(this.this$0), Q$AssignmentProxy).setActive(active);
}
;
defineSeed(1131, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$AssignmentProxy]));
_.setActive = function setActive_0(active){
  $setProperty(this.this$0, 'active', active);
}
;
function $listAll(this$static, profId){
  var x;
  x = new AssignmentRequestFactory_AssignmentRequestContextImpl$3X_0(this$static, profId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function AssignmentRequestFactory_AssignmentRequestContextImpl$3X_0(this$0, val$profId){
  this.val$profId = val$profId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1170, 613, makeCastMap([Q$AbstractRequest]), AssignmentRequestFactory_AssignmentRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData(){
  return new RequestData_0('lMwcXIZKGtBXRAcy4JERU31qNR0=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_AssignmentProxy_2_classLit);
}
;
_.val$profId = null;
function AssignmentRequestFactory_AssignmentRequestContextImpl$8X_0(this$0, val$a){
  this.val$a = val$a;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1172, 613, makeCastMap([Q$AbstractRequest]), AssignmentRequestFactory_AssignmentRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_1(){
  return new RequestData_0('_YGYQXcLTE0k7sgXwMOAkX_wQms=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$a]), this.propertyRefs, Lcom_lemania_sis_shared_AssignmentProxy_2_classLit, null);
}
;
_.val$a = null;
function AssignmentRequestFactory_AssignmentRequestContextImpl$9X_0(this$0, val$profId, val$classId, val$subjectId, val$isActive){
  this.val$profId = val$profId;
  this.val$classId = val$classId;
  this.val$subjectId = val$subjectId;
  this.val$isActive = val$isActive;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1173, 613, makeCastMap([Q$AbstractRequest]), AssignmentRequestFactory_AssignmentRequestContextImpl$9X_0);
_.makeRequestData = function makeRequestData_2(){
  return new RequestData_0('YyU4C1i5$5uQlrd47oQKbFqOv2o=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId, this.val$classId, this.val$subjectId, this.val$isActive]), this.propertyRefs, Lcom_lemania_sis_shared_AssignmentProxy_2_classLit, null);
}
;
_.val$classId = null;
_.val$isActive = null;
_.val$profId = null;
_.val$subjectId = null;
function $saveAndReturn_0(this$static, newProf){
  var x;
  x = new ProfessorRequestFactory_ProfessorRequestContextImpl$5X_0(this$static, newProf);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ProfessorRequestFactory_ProfessorRequestContextImpl$2X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1203, 613, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_15(){
  return new RequestData_0('FASF6T$HSOeNninmyDnq50cS85c=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ProfessorProxy_2_classLit);
}
;
function ProfessorRequestFactory_ProfessorRequestContextImpl$5X_0(this$0, val$newProf){
  this.val$newProf = val$newProf;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1205, 613, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_17(){
  return new RequestData_0('7vC3$wpOCQmBs0$q0LXfL81qLho=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newProf]), this.propertyRefs, Lcom_lemania_sis_shared_ProfessorProxy_2_classLit, null);
}
;
_.val$newProf = null;
var Lcom_lemania_sis_client_presenter_ProfsPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter', 836), Lcom_lemania_sis_client_presenter_ProfsPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$1', 837), Lcom_lemania_sis_client_presenter_ProfsPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$2', 839), Lcom_lemania_sis_client_presenter_ProfsPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$3', 840), Lcom_lemania_sis_client_presenter_ProfsPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$4', 841), Lcom_lemania_sis_client_presenter_ProfsPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$5', 842), Lcom_lemania_sis_client_presenter_ProfsPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$6', 843), Lcom_lemania_sis_client_presenter_ProfsPresenter$7_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$7', 844), Lcom_lemania_sis_client_presenter_ProfsPresenter$8_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$8', 845), Lcom_lemania_sis_client_presenter_ProfsPresenter$9_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$9', 846), Lcom_lemania_sis_client_presenter_ProfsPresenter$10_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$10', 838), Lcom_lemania_sis_client_view_ProfsView_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView', 1072), Lcom_lemania_sis_client_view_ProfsView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$1', 1073), Lcom_lemania_sis_client_view_ProfsView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$2', 1075), Lcom_lemania_sis_client_view_ProfsView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$3', 1076), Lcom_lemania_sis_client_view_ProfsView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$4', 1077), Lcom_lemania_sis_client_view_ProfsView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$5', 1078), Lcom_lemania_sis_client_view_ProfsView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$6', 1079), Lcom_lemania_sis_client_view_ProfsView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$7', 1080), Lcom_lemania_sis_client_view_ProfsView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$8', 1081), Lcom_lemania_sis_client_view_ProfsView$9_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$9', 1082), Lcom_lemania_sis_client_view_ProfsView$10_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$10', 1074), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl', 1083), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl$Widgets', 1084), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl$Widgets$1', 1085), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl$Widgets$2', 1086), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl$Widgets$3', 1087), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl$Widgets$4', 1088), Lcom_lemania_sis_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$2X', 1203), Lcom_lemania_sis_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$5X', 1205), Lcom_lemania_sis_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$3X', 1170), Lcom_lemania_sis_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$8X', 1172), Lcom_lemania_sis_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$9X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$9X', 1173);
$entry(onLoad)(15);
