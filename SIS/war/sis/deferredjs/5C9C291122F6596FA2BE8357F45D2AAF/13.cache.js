function $onEcoleSelected_2(this$static, ecoleId){
  var rc, rf;
  if (!ecoleId.length) {
    return;
  }
  rf = new CoursRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  $fire($listAllActive_2(rc, ecoleId), new FrmClasseListPresenter$3_0(this$static));
}

function $onSubjectSelected_0(this$static, subjectId){
  var rc, rf, x;
  rf = new ClasseRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire((x = new ClasseRequestFactory_ClasseRequestContextImpl$3X_0(rc, subjectId) , $addInvocation(rc.state.dialect, x) , x), new FrmClasseListPresenter$4_0(this$static));
}

function $updateClasse(this$static, classe, classeName, isActive){
  var classeForUpdate, rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new ClasseRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  classeForUpdate = dynamicCast($editProxy(rc, classe), Q$ClasseProxy);
  classeForUpdate.setClassName(classeName);
  classeForUpdate.setIsActive(isActive);
  $fire((x = new ClasseRequestFactory_ClasseRequestContextImpl$9X_0(rc, classeForUpdate) , $addInvocation(rc.state.dialect, x) , x), new FrmClasseListPresenter$2_0(this$static));
}

function FrmClasseListPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(885, 692, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$FrmClasseListPresenter, Q$FrmClasseListUiHandler]), FrmClasseListPresenter_0);
_.onBind = function onBind_13(){
  dynamicCast(this.view, Q$FrmClasseListPresenter$MyView).setUiHandlers(this);
  $initializeTable_1(dynamicCast(this.view, Q$FrmClasseListPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_25(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_12(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('classlist'), null);
  rf = new EcoleRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_4(rc), new FrmClasseListPresenter$1_0(this));
  $resetForm_6(dynamicCast(this.view, Q$FrmClasseListPresenter$MyView));
}
;
_.revealInParent = function revealInParent_12(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_50(this$static, response){
  $setEcoleList_2(dynamicCast(this$static.this$0.view, Q$FrmClasseListPresenter$MyView), response);
}

function FrmClasseListPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(886, 631, makeCastMap([Q$Receiver]), FrmClasseListPresenter$1_0);
_.onFailure_0 = function onFailure_52(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_52(response){
  $onSuccess_50(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_51(this$static, response){
  $refreshUpdatedClasse(dynamicCast(this$static.this$0.view, Q$FrmClasseListPresenter$MyView), response);
}

function FrmClasseListPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(887, 631, makeCastMap([Q$Receiver]), FrmClasseListPresenter$2_0);
_.onFailure_0 = function onFailure_53(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_53(response){
  $onSuccess_51(this, dynamicCast(response, Q$ClasseProxy));
}
;
_.this$0 = null;
function $onSuccess_52(this$static, response){
  $setCoursList_2(dynamicCast(this$static.this$0.view, Q$FrmClasseListPresenter$MyView), response);
}

function FrmClasseListPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(888, 631, makeCastMap([Q$Receiver]), FrmClasseListPresenter$3_0);
_.onFailure_0 = function onFailure_54(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_54(response){
  $onSuccess_52(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_53(this$static, response){
  $setClasseListData(dynamicCast(this$static.this$0.view, Q$FrmClasseListPresenter$MyView), response);
}

function FrmClasseListPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(889, 631, makeCastMap([Q$Receiver]), FrmClasseListPresenter$4_0);
_.onFailure_0 = function onFailure_55(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_55(response){
  $onSuccess_53(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$FrmClasseListPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmClasseListPresenter$_annotation$$none$$) {
    result = new FrmClasseListPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmClasseListView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmClasseListPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmClasseListPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmClasseListPresenter$_annotation$$none$$;
}

defineSeed(1089, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_142(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmClasseListPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeTable_1(this$static){
  var cellActive, colActive, colName;
  colName = new FrmClasseListView$1_0(new EditTextCell_0);
  $addColumn(this$static.tblClasseList, colName, 'Nom de la classe');
  $setFieldUpdater(colName, new FrmClasseListView$2_0(this$static));
  cellActive = new CheckboxCell_0;
  colActive = new FrmClasseListView$3_0(cellActive);
  $addColumn(this$static.tblClasseList, colActive, 'Active');
  $setFieldUpdater(colActive, new FrmClasseListView$4_0(this$static));
  $addDataDisplay(this$static.dataProvider, this$static.tblClasseList);
}

function $onLstCoursChange(this$static){
  !!this$static.uiHandlers && $onSubjectSelected_0(dynamicCast(this$static.uiHandlers, Q$FrmClasseListUiHandler), $getValue_1(this$static.lstCours, this$static.lstCours.element.selectedIndex));
}

function $onLstEcolesChange_2(this$static){
  if (!$getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex).length) {
    $selectClear(this$static.lstCours.element);
    return;
  }
  !!this$static.uiHandlers && $onEcoleSelected_2(dynamicCast(this$static.uiHandlers, Q$FrmClasseListUiHandler), $getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex));
}

function $refreshUpdatedClasse(this$static, classe){
  $remove_12(this$static.dataProvider.listWrapper, this$static.selectedClasse);
  $add_13(this$static.dataProvider.listWrapper, this$static.selectedClasse, classe);
  $refresh(this$static.dataProvider);
}

function $resetForm_6(this$static){
  $setSelectedIndex_0(this$static.lstEcoles, 0);
  $selectClear(this$static.lstCours.element);
  $clear_3(this$static.dataProvider.listWrapper);
}

function $setClasseListData(this$static, classeList){
  $setList(this$static.dataProvider, classeList);
}

function $setCoursList_2(this$static, subjectList){
  var cours, cours$iterator;
  $selectClear(this$static.lstCours.element);
  $insertItem(this$static.lstCours, '-', '', -1);
  for (cours$iterator = subjectList.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$CoursProxy);
    $insertItem(this$static.lstCours, cours.getCoursNom(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setEcoleList_2(this$static, ecoleList){
  var ecole, ecole$iterator;
  $selectClear(this$static.lstEcoles.element);
  $insertItem(this$static.lstEcoles, '-', '', -1);
  for (ecole$iterator = ecoleList.iterator(); ecole$iterator.hasNext();) {
    ecole = dynamicCast(ecole$iterator.next_0(), Q$EcoleProxy);
    $insertItem(this$static.lstEcoles, ecole.getSchoolName(), '' + toString_6(ecole.getId_0().value_0), -1);
  }
}

function FrmClasseListView_0(){
  this.dataProvider = new ListDataProvider_0;
  this.tblClasseList = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_11(new FrmClasseListView_BinderImpl$Widgets_0(this));
}

defineSeed(1252, 697, makeCastMap([Q$IsWidget, Q$FrmClasseListPresenter$MyView]), FrmClasseListView_0);
_.asWidget = function asWidget_15(){
  return this.widget;
}
;
_.lstCours = null;
_.lstEcoles = null;
_.selectedClasse = -1;
_.widget = null;
function FrmClasseListView$1_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1253, 359, makeCastMap([Q$HasCell, Q$Column]), FrmClasseListView$1_0);
_.getValue = function getValue_24(object){
  return dynamicCast(object, Q$ClasseProxy).getClassName();
}
;
function $update_11(this$static, index, classe, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedClasse = index;
    $updateClasse(dynamicCast(this$static.this$0.uiHandlers, Q$FrmClasseListUiHandler), classe, value, classe.getIsActive());
  }
}

function FrmClasseListView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1254, 1, {}, FrmClasseListView$2_0);
_.update = function update_12(index, classe, value){
  $update_11(this, index, dynamicCast(classe, Q$ClasseProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmClasseListView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1255, 359, makeCastMap([Q$HasCell, Q$Column]), FrmClasseListView$3_0);
_.getValue = function getValue_25(classe){
  return dynamicCast(classe, Q$ClasseProxy).getIsActive();
}
;
function $update_12(this$static, index, classe, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedClasse = index;
    $updateClasse(dynamicCast(this$static.this$0.uiHandlers, Q$FrmClasseListUiHandler), classe, classe.getClassName(), value);
  }
}

function FrmClasseListView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1256, 1, {}, FrmClasseListView$4_0);
_.update = function update_13(index, classe, value){
  $update_12(this, index, dynamicCast(classe, Q$ClasseProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function FrmClasseListView_BinderImpl_0(){
}

defineSeed(1257, 1, {}, FrmClasseListView_BinderImpl_0);
function $build_f_HTMLPanel1_11(this$static){
  var attachRecord12, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, lstEcoles, f_Label6, lstCours, tblClasseList;
  f_HTMLPanel1 = new HTMLPanel_0($html1_9(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord12 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord12.origParent?$insertBefore(attachRecord12.origParent, attachRecord12.element, attachRecord12.origSibling):orphan(attachRecord12.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'LISTE DES CLASSES', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 2) , $resizeRows(f_Grid4, 2) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Ecole :', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 0, 1, (lstEcoles = new ListBox_0 , lstEcoles.element['className'] = 'sis_textbox' , $addDomHandler(lstEcoles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_1(f_Grid4, 1, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Programme :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 1, 1, (lstCours = new ListBox_0 , lstCours.element['className'] = 'sis_textbox' , $addDomHandler(lstCours, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstCours = lstCours , lstCours)) , f_Grid4.element.style['width'] = '80%' , f_Grid4.tableElem['cellSpacing'] = 5 , f_Grid4.tableElem['cellPadding'] = 5 , f_Grid4)) , $add_11(f_VerticalPanel2, (tblClasseList = this$static.owner.tblClasseList , tblClasseList.element.style['height'] = '500px' , tblClasseList.element.style['width'] = '80%' , tblClasseList)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmClasseListView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmClasseListView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new FrmClasseListView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1258, 1, {}, FrmClasseListView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmClasseListView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1259, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmClasseListView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_13(event_0){
  $onLstEcolesChange_2(this.this$1.owner);
}
;
_.this$1 = null;
function FrmClasseListView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1260, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmClasseListView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_14(event_0){
  $onLstCoursChange(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_9(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$view$FrmClasseListView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmClasseListView$_annotation$$none$$) {
    result = new FrmClasseListView_0(new FrmClasseListView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmClasseListView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmClasseListView$_annotation$$none$$;
}

function ClasseRequestFactory_ClasseRequestContextImpl$3X_0(this$0, val$coursId){
  this.val$coursId = val$coursId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1572, 635, makeCastMap([Q$AbstractRequest]), ClasseRequestFactory_ClasseRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_26(){
  return new RequestData_0('ux1TRwMTi3gvx8paXkjbeS9TtvE=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$coursId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ClasseProxy_2_classLit);
}
;
_.val$coursId = null;
function ClasseRequestFactory_ClasseRequestContextImpl$9X_0(this$0, val$newClasse){
  this.val$newClasse = val$newClasse;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1576, 635, makeCastMap([Q$AbstractRequest]), ClasseRequestFactory_ClasseRequestContextImpl$9X_0);
_.makeRequestData = function makeRequestData_30(){
  return new RequestData_0('qQk$r3sTeAEe7mhBicsUYdskhB8=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newClasse]), this.propertyRefs, Lcom_lemania_sis_shared_ClasseProxy_2_classLit, null);
}
;
_.val$newClasse = null;
var Lcom_lemania_sis_client_presenter_FrmClasseListPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmClasseListPresenter', 885), Lcom_lemania_sis_client_presenter_FrmClasseListPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmClasseListPresenter$1', 886), Lcom_lemania_sis_client_presenter_FrmClasseListPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmClasseListPresenter$2', 887), Lcom_lemania_sis_client_presenter_FrmClasseListPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmClasseListPresenter$3', 888), Lcom_lemania_sis_client_presenter_FrmClasseListPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmClasseListPresenter$4', 889), Lcom_lemania_sis_client_view_FrmClasseListView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView', 1252), Lcom_lemania_sis_client_view_FrmClasseListView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView$1', 1253), Lcom_lemania_sis_client_view_FrmClasseListView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView$2', 1254), Lcom_lemania_sis_client_view_FrmClasseListView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView$3', 1255), Lcom_lemania_sis_client_view_FrmClasseListView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView$4', 1256), Lcom_lemania_sis_client_view_FrmClasseListView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView_BinderImpl', 1257), Lcom_lemania_sis_client_view_FrmClasseListView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView_BinderImpl$Widgets', 1258), Lcom_lemania_sis_client_view_FrmClasseListView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView_BinderImpl$Widgets$1', 1259), Lcom_lemania_sis_client_view_FrmClasseListView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView_BinderImpl$Widgets$2', 1260), Lcom_lemania_sis_shared_service_ClasseRequestFactory_1ClasseRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ClasseRequestFactory_ClasseRequestContextImpl$3X', 1572), Lcom_lemania_sis_shared_service_ClasseRequestFactory_1ClasseRequestContextImpl$9X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ClasseRequestFactory_ClasseRequestContextImpl$9X', 1576);
$entry(onLoad)(13);
