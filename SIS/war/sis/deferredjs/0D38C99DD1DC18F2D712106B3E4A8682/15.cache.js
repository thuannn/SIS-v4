function $onBulletinSelected_0(this$static, classId){
  var rc, rf;
  rf = new EvaluationHeaderRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl_0(rf);
  $fire($listAllByClass(rc, classId), new FrmEvaluationInputStudentPresenter$5_0(this$static));
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

function $onEvaluationHeaderSelected(this$static, classId, bulletinId, evaluationHeaderId){
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
  $fire((x = new EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$2X_0(rc, classId, bulletinId, evaluationHeaderId) , $addInvocation(rc.state.dialect, x) , x), new FrmEvaluationInputStudentPresenter$6_0(this$static));
}

function $onProgrammeSelected_1(this$static, programmeId){
  var rc, rf;
  rf = new ClasseRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAllActive_1(rc, programmeId), new FrmEvaluationInputStudentPresenter$3_0(this$static));
}

function FrmEvaluationInputStudentPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(907, 696, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$FrmEvaluationInputStudentUiHandler]), FrmEvaluationInputStudentPresenter_0);
_.onBind = function onBind_15(){
  dynamicCast(this.view, Q$FrmEvaluationInputStudentPresenter$MyView).setUiHandlers(this);
  $initializeUI(dynamicCast(this.view, Q$FrmEvaluationInputStudentPresenter$MyView));
}
;
_.onReset = function onReset_14(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('evaluationinputstudent'), null);
  $resetForm_7(dynamicCast(this.view, Q$FrmEvaluationInputStudentPresenter$MyView));
  rf = new EcoleRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_4(rc), new FrmEvaluationInputStudentPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_14(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_59(this$static, response){
  $setEcoleList_3(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView), response);
}

function FrmEvaluationInputStudentPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(908, 635, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$1_0);
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

defineSeed(909, 635, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$2_0);
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

defineSeed(910, 635, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$3_0);
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

defineSeed(911, 635, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$4_0);
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

defineSeed(912, 635, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$5_0);
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
}

function FrmEvaluationInputStudentPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(913, 635, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$6_0);
_.onFailure_0 = function onFailure_67(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_67(response){
  $onSuccess_64(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$_annotation$$none$$) {
    result = new FrmEvaluationInputStudentPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmEvaluationInputStudentView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$_annotation$$none$$;
}

defineSeed(1083, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_140(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
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
  $onEvaluationHeaderSelected(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationInputStudentUiHandler), $getValue_1(this$static.lstClasses, this$static.lstClasses.element.selectedIndex), $getValue_1(this$static.lstBulletins, this$static.lstBulletins.element.selectedIndex), $getValue_1(this$static.lstEvaluationHeaders, this$static.lstEvaluationHeaders.element.selectedIndex));
}

function $onLstProgrammesChange_1(this$static){
  if (!$getValue_1(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex).length)
    return;
  !!this$static.uiHandlers && $onProgrammeSelected_1(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationInputStudentUiHandler), $getValue_1(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex));
}

function $resetForm_7(this$static){
  $selectClear(this$static.lstEcoles.element);
  $selectClear(this$static.lstProgrammes.element);
  $selectClear(this$static.lstClasses.element);
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
}

function $setEvaluationSubjectTableData(this$static, evaluationSubject){
  $clear_3(this$static.providerEvaluationSubject.listWrapper);
  $setList(this$static.providerEvaluationSubject, evaluationSubject);
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

function FrmEvaluationInputStudentView_0(){
  this.bulletins = new ArrayList_0;
  this.providerEvaluationSubject = new ListDataProvider_0;
  this.tblEvaluations = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_12(new FrmEvaluationInputStudentView_BinderImpl$Widgets_0(this));
}

defineSeed(1251, 701, makeCastMap([Q$IsWidget, Q$FrmEvaluationInputStudentPresenter$MyView]), FrmEvaluationInputStudentView_0);
_.asWidget = function asWidget_16(){
  return this.widget;
}
;
_.lstBulletins = null;
_.lstClasses = null;
_.lstEcoles = null;
_.lstEvaluationHeaders = null;
_.lstProgrammes = null;
_.lstYears = null;
_.widget = null;
function FrmEvaluationInputStudentView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1252, 388, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$1_0);
_.getValue = function getValue_26(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getSubjectName();
}
;
function FrmEvaluationInputStudentView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(1253, 388, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$2_0);
_.getValue = function getValue_27(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getProfessorName();
}
;
function FrmEvaluationInputStudentView$3_0(){
  TextColumn_0.call(this);
}

defineSeed(1254, 388, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$3_0);
_.getValue = function getValue_28(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective1();
}
;
function FrmEvaluationInputStudentView$4_0(){
  TextColumn_0.call(this);
}

defineSeed(1255, 388, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$4_0);
_.getValue = function getValue_29(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective2();
}
;
function FrmEvaluationInputStudentView$5_0(){
  TextColumn_0.call(this);
}

defineSeed(1256, 388, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$5_0);
_.getValue = function getValue_30(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective3();
}
;
function FrmEvaluationInputStudentView$6_0(){
  TextColumn_0.call(this);
}

defineSeed(1257, 388, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$6_0);
_.getValue = function getValue_31(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective4();
}
;
function FrmEvaluationInputStudentView$7_0(){
  TextColumn_0.call(this);
}

defineSeed(1258, 388, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$7_0);
_.getValue = function getValue_32(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective5();
}
;
function FrmEvaluationInputStudentView$8_0(){
  TextColumn_0.call(this);
}

defineSeed(1259, 388, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$8_0);
_.getValue = function getValue_33(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective6();
}
;
function FrmEvaluationInputStudentView_BinderImpl_0(){
}

defineSeed(1260, 1, {}, FrmEvaluationInputStudentView_BinderImpl_0);
function $build_f_HTMLPanel1_12(this$static){
  var attachRecord14, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_Grid5, f_Label6, f_Label7, lstYears, f_Label8, f_Label9, lstClasses, f_Label10, f_Label11, lstEcoles, f_Label12, f_Label13, lstBulletins, f_Label14, f_Label15, lstProgrammes, f_Label16, f_Label17, lstEvaluationHeaders, f_VerticalPanel18, tblEvaluations, f_HorizontalPanel24, f_Label25, txtCommentaires, cmdSave, sb, f_Label19, f_Label20, f_Label21, f_Label22, f_Label23;
  f_HTMLPanel1 = new HTMLPanel_0($html2_1(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord14 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord14.origParent?$insertBefore(attachRecord14.origParent, attachRecord14.element, attachRecord14.origSibling):orphan(attachRecord14.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'EVALUATION INTERMEDIAIRE', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel4, (f_Grid5 = new Grid_0 , $resizeColumns(f_Grid5, 6) , $resizeRows(f_Grid5, 4) , $setWidget_1(f_Grid5, 0, 0, (f_Label6 = new Label_0 , f_Label6.element['className'] = 'step' , $setTextOrHtml(f_Label6.directionalTextHelper, '1', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid5, 0, 1, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Ann\xE9e :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid5, 0, 2, (lstYears = new ListBox_0 , lstYears.element['className'] = 'sis-combobox' , this$static.owner.lstYears = lstYears , lstYears)) , $setWidget_1(f_Grid5, 0, 3, (f_Label8 = new Label_0 , f_Label8.element['className'] = 'step' , $setTextOrHtml(f_Label8.directionalTextHelper, '4', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid5, 0, 4, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Classes :', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid5, 0, 5, (lstClasses = new ListBox_0 , lstClasses.element['className'] = 'sis-combobox' , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstClasses = lstClasses , lstClasses)) , $setWidget_1(f_Grid5, 1, 0, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'step' , $setTextOrHtml(f_Label10.directionalTextHelper, '2', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid5, 1, 1, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Ecole :', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid5, 1, 2, (lstEcoles = new ListBox_0 , lstEcoles.element['className'] = 'sis-combobox' , $addDomHandler(lstEcoles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE) , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_1(f_Grid5, 1, 3, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'step' , $setTextOrHtml(f_Label12.directionalTextHelper, '5', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_1(f_Grid5, 1, 4, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'El\xE8ves :', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_1(f_Grid5, 1, 5, (lstBulletins = new ListBox_0 , lstBulletins.element['className'] = 'sis-combobox' , $addDomHandler(lstBulletins, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE) , this$static.owner.lstBulletins = lstBulletins , lstBulletins)) , $setWidget_1(f_Grid5, 2, 0, (f_Label14 = new Label_0 , f_Label14.element['className'] = 'step' , $setTextOrHtml(f_Label14.directionalTextHelper, '3', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_1(f_Grid5, 2, 1, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'Programmes :', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_1(f_Grid5, 2, 2, (lstProgrammes = new ListBox_0 , lstProgrammes.element['className'] = 'sis-combobox' , $addDomHandler(lstProgrammes, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstProgrammes = lstProgrammes , lstProgrammes)) , $setWidget_1(f_Grid5, 2, 3, (f_Label16 = new Label_0 , f_Label16.element['className'] = 'step' , $setTextOrHtml(f_Label16.directionalTextHelper, '6', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $setWidget_1(f_Grid5, 2, 4, (f_Label17 = new Label_0 , $setTextOrHtml(f_Label17.directionalTextHelper, "Rapport d'Evaluations :", false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $setWidget_1(f_Grid5, 2, 5, (lstEvaluationHeaders = new ListBox_0 , lstEvaluationHeaders.element['className'] = 'sis-combobox' , $addDomHandler(lstEvaluationHeaders, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, TYPE) , this$static.owner.lstEvaluationHeaders = lstEvaluationHeaders , lstEvaluationHeaders)) , f_Grid5.tableElem['cellSpacing'] = 3 , f_Grid5.tableElem['cellPadding'] = 2 , f_Grid5)) , $add_9(f_HorizontalPanel4, (f_VerticalPanel18 = new VerticalPanel_0 , $add_11(f_VerticalPanel18, (f_Label19 = new Label_0 , $setTextOrHtml(f_Label19.directionalTextHelper, 'TB = Tr\xE8s Bien', false) , $updateHorizontalAlignment(f_Label19) , f_Label19)) , $add_11(f_VerticalPanel18, (f_Label20 = new Label_0 , $setTextOrHtml(f_Label20.directionalTextHelper, 'B = Bien', false) , $updateHorizontalAlignment(f_Label20) , f_Label20)) , $add_11(f_VerticalPanel18, (f_Label21 = new Label_0 , $setTextOrHtml(f_Label21.directionalTextHelper, 'AB = Assez Bien', false) , $updateHorizontalAlignment(f_Label21) , f_Label21)) , $add_11(f_VerticalPanel18, (f_Label22 = new Label_0 , $setTextOrHtml(f_Label22.directionalTextHelper, 'S = Suffisant', false) , $updateHorizontalAlignment(f_Label22) , f_Label22)) , $add_11(f_VerticalPanel18, (f_Label23 = new Label_0 , $setTextOrHtml(f_Label23.directionalTextHelper, 'NA = Non atteint', false) , $updateHorizontalAlignment(f_Label23) , f_Label23)) , f_VerticalPanel18.element['className'] = 'subSection' , f_VerticalPanel18.table['cellSpacing'] = 2 , f_VerticalPanel18)) , f_HorizontalPanel4.element.style['width'] = '100%' , f_HorizontalPanel4)) , $add_11(f_VerticalPanel2, (tblEvaluations = this$static.owner.tblEvaluations , tblEvaluations.element['className'] = 'subSection' , tblEvaluations.element.style['height'] = '200px' , tblEvaluations.element.style['width'] = '100%' , tblEvaluations)) , $add_11(f_VerticalPanel2, (f_HorizontalPanel24 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel24, (f_Label25 = new Label_0 , $setTextOrHtml(f_Label25.directionalTextHelper, "Commentaire(s) \xE9ventuel(s) et pistes d'am\xE9lioration :", false) , $updateHorizontalAlignment(f_Label25) , f_Label25)) , $add_9(f_HorizontalPanel24, (txtCommentaires = new TextArea_1 , txtCommentaires.element.rows = 5 , txtCommentaires.element.cols = 80 , txtCommentaires)) , $add_9(f_HorizontalPanel24, (cmdSave = new Button_0 , $setHTML(cmdSave, (sb = new StringBuilder_0 , $append_1(sb.data, 'Enregister') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSave)) , f_HorizontalPanel24.element['className'] = 'subSection' , f_HorizontalPanel24.element.style['width'] = '100%' , f_HorizontalPanel24.table['cellSpacing'] = 5 , f_HorizontalPanel24)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmEvaluationInputStudentView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$5_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$6_0;
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1261, 1, {}, FrmEvaluationInputStudentView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1262, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_14(event_0){
  $onLstEcolesChange_3(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1263, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_15(event_0){
  $onLstProgrammesChange_1(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1264, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_16(event_0){
  $onLstClassesChange_3(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1265, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$4_0);
_.onChange = function onChange_17(event_0){
  $onLstBulletinsChange_1(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1266, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$5_0);
_.onChange = function onChange_18(event_0){
  $onLstEvaluationHeadersChange(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$6_0(){
}

defineSeed(1267, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$6_0);
_.onClick = function onClick_11(event_0){
}
;
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

function EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$2X_0(this$0, val$classId, val$bulletinId, val$evaluationHeaderId){
  this.val$classId = val$classId;
  this.val$bulletinId = val$bulletinId;
  this.val$evaluationHeaderId = val$evaluationHeaderId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1585, 639, makeCastMap([Q$AbstractRequest]), EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_43(){
  return new RequestData_0('o68wJniv4IFPQgtXb3kL2iaY1gI=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$classId, this.val$bulletinId, this.val$evaluationHeaderId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_EvaluationSubjectProxy_2_classLit);
}
;
_.val$bulletinId = null;
_.val$classId = null;
_.val$evaluationHeaderId = null;
var Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter', 907), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$1', 908), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$2', 909), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$3', 910), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$4', 911), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$5', 912), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$6', 913), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView', 1251), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$1', 1252), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$2', 1253), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$3', 1254), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$4', 1255), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$5', 1256), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$6', 1257), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$7', 1258), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$8', 1259), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl', 1260), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets', 1261), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$1', 1262), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$2', 1263), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$3', 1264), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$4', 1265), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$5', 1266), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$6', 1267), Lcom_lemania_sis_shared_service_EvaluationSubjectRequestFactory_1EvaluationSubjectRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$2X', 1585);
$entry(onLoad)(15);
