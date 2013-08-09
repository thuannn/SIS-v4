function $onEcoleSelected_0(this$static, ecoleId){
  var rc, rf;
  if (!ecoleId.length) {
    return;
  }
  rf = new CoursRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  $fire($listAll_2(rc, ecoleId), new FrmClasseListPresenter$3_0(this$static));
}

function $onSubjectSelected(this$static, subjectId){
  var rc, rf;
  rf = new ClasseRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAll_1(rc, subjectId), new FrmClasseListPresenter$4_0(this$static));
}

function $updateClasse(this$static, classe, classeName, isActive){
  var classeForUpdate, rc, rf, x;
  rf = new ClasseRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  classeForUpdate = dynamicCast($editProxy(rc, classe), Q$ClasseProxy);
  classeForUpdate.setClassName(classeName);
  classeForUpdate.setIsActive(isActive);
  $fire((x = new ClasseRequestFactory_ClasseRequestContextImpl$8X_0(rc, classeForUpdate) , $addInvocation(rc.state.dialect, x) , x), new FrmClasseListPresenter$2_0(this$static));
}

function FrmClasseListPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(771, 664, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$FrmClasseListUiHandler]), FrmClasseListPresenter_0);
_.onBind = function onBind_9(){
  dynamicCast(this.view, Q$FrmClasseListPresenter$MyView).setUiHandlers(this);
  $initializeTable_1(dynamicCast(this.view, Q$FrmClasseListPresenter$MyView));
}
;
_.onReset = function onReset_5(){
  var rf, rc;
  rf = new EcoleRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_3(rc), new FrmClasseListPresenter$1_0(this));
  $resetForm_1(dynamicCast(this.view, Q$FrmClasseListPresenter$MyView));
}
;
_.revealInParent = function revealInParent_8(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_16(this$static, response){
  $setEcoleList_0(dynamicCast(this$static.this$0.view, Q$FrmClasseListPresenter$MyView), response);
}

function FrmClasseListPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(772, 603, makeCastMap([Q$Receiver]), FrmClasseListPresenter$1_0);
_.onFailure_0 = function onFailure_16(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_16(response){
  $onSuccess_16(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_17(this$static, response){
  $refreshUpdatedClasse(dynamicCast(this$static.this$0.view, Q$FrmClasseListPresenter$MyView), response);
}

function FrmClasseListPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(773, 603, makeCastMap([Q$Receiver]), FrmClasseListPresenter$2_0);
_.onFailure_0 = function onFailure_17(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_17(response){
  $onSuccess_17(this, dynamicCast(response, Q$ClasseProxy));
}
;
_.this$0 = null;
function $onSuccess_18(this$static, response){
  $setCoursList_0(dynamicCast(this$static.this$0.view, Q$FrmClasseListPresenter$MyView), response);
}

function FrmClasseListPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(774, 603, makeCastMap([Q$Receiver]), FrmClasseListPresenter$3_0);
_.onFailure_0 = function onFailure_18(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_18(response){
  $onSuccess_18(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_19(this$static, response){
  $setClasseListData(dynamicCast(this$static.this$0.view, Q$FrmClasseListPresenter$MyView), response);
}

function FrmClasseListPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(775, 603, makeCastMap([Q$Receiver]), FrmClasseListPresenter$4_0);
_.onFailure_0 = function onFailure_19(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_19(response){
  $onSuccess_19(this, dynamicCast(response, Q$List));
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

defineSeed(916, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_83(){
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
  !!this$static.uiHandlers && $onSubjectSelected(dynamicCast(this$static.uiHandlers, Q$FrmClasseListUiHandler), $getValue_1(this$static.lstCours, this$static.lstCours.element.selectedIndex));
}

function $onLstEcolesChange_0(this$static){
  if (!$getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex).length) {
    $selectClear(this$static.lstCours.element);
    return;
  }
  !!this$static.uiHandlers && $onEcoleSelected_0(dynamicCast(this$static.uiHandlers, Q$FrmClasseListUiHandler), $getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex));
}

function $refreshUpdatedClasse(this$static, classe){
  $remove_11(this$static.dataProvider.listWrapper, this$static.selectedClasse);
  $add_11(this$static.dataProvider.listWrapper, this$static.selectedClasse, classe);
  $refresh(this$static.dataProvider);
}

function $resetForm_1(this$static){
  $setSelectedIndex_0(this$static.lstEcoles, 0);
  $selectClear(this$static.lstCours.element);
  $clear_3(this$static.dataProvider.listWrapper);
}

function $setClasseListData(this$static, classeList){
  $setList(this$static.dataProvider, classeList);
}

function $setCoursList_0(this$static, subjectList){
  var cours, cours$iterator;
  $selectClear(this$static.lstCours.element);
  $insertItem(this$static.lstCours, '-', '', -1);
  for (cours$iterator = subjectList.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$CoursProxy);
    $insertItem(this$static.lstCours, cours.getCoursNom(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setEcoleList_0(this$static, ecoleList){
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
  this.widget = $build_f_HTMLPanel1_7(new FrmClasseListView_BinderImpl$Widgets_0(this));
}

defineSeed(973, 669, makeCastMap([Q$IsWidget, Q$FrmClasseListPresenter$MyView]), FrmClasseListView_0);
_.asWidget = function asWidget_11(){
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

defineSeed(974, 347, makeCastMap([Q$HasCell, Q$Column]), FrmClasseListView$1_0);
_.getValue = function getValue_9(object){
  return dynamicCast(object, Q$ClasseProxy).getClassName();
}
;
function $update_6(this$static, index, classe, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedClasse = index;
    $updateClasse(dynamicCast(this$static.this$0.uiHandlers, Q$FrmClasseListUiHandler), classe, value, classe.getIsActive());
  }
}

function FrmClasseListView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(975, 1, {}, FrmClasseListView$2_0);
_.update = function update_7(index, classe, value){
  $update_6(this, index, dynamicCast(classe, Q$ClasseProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmClasseListView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(976, 347, makeCastMap([Q$HasCell, Q$Column]), FrmClasseListView$3_0);
_.getValue = function getValue_10(classe){
  return dynamicCast(classe, Q$ClasseProxy).getIsActive();
}
;
function $update_7(this$static, index, classe, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedClasse = index;
    $updateClasse(dynamicCast(this$static.this$0.uiHandlers, Q$FrmClasseListUiHandler), classe, classe.getClassName(), value);
  }
}

function FrmClasseListView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(977, 1, {}, FrmClasseListView$4_0);
_.update = function update_8(index, classe, value){
  $update_7(this, index, dynamicCast(classe, Q$ClasseProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function FrmClasseListView_BinderImpl_0(){
}

defineSeed(978, 1, {}, FrmClasseListView_BinderImpl_0);
function $build_f_HTMLPanel1_7(this$static){
  var attachRecord8, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, lstEcoles, f_Label6, lstCours, tblClasseList;
  f_HTMLPanel1 = new HTMLPanel_0($html1_7(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord8 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord8.origParent?$insertBefore(attachRecord8.origParent, attachRecord8.element, attachRecord8.origSibling):orphan(attachRecord8.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_9(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'LISTE DES CLASSES') , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_9(f_VerticalPanel2, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 2) , $resizeRows(f_Grid4, 2) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Ecole :') , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 0, 1, (lstEcoles = new ListBox_0 , lstEcoles.element['className'] = 'sis_textbox' , $addDomHandler(lstEcoles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_1(f_Grid4, 1, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Programme :') , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 1, 1, (lstCours = new ListBox_0 , lstCours.element['className'] = 'sis_textbox' , $addDomHandler(lstCours, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstCours = lstCours , lstCours)) , f_Grid4.element.style['width'] = '80%' , f_Grid4.tableElem['cellSpacing'] = 5 , f_Grid4.tableElem['cellPadding'] = 5 , f_Grid4)) , $add_9(f_VerticalPanel2, (tblClasseList = this$static.owner.tblClasseList , tblClasseList.element.style['height'] = '200px' , tblClasseList.element.style['width'] = '80%' , tblClasseList)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmClasseListView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmClasseListView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new FrmClasseListView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(979, 1, {}, FrmClasseListView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmClasseListView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(980, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmClasseListView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_1(event_0){
  $onLstEcolesChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function FrmClasseListView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(981, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmClasseListView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_2(event_0){
  $onLstCoursChange(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_7(arg0){
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

function ClasseRequestFactory_ClasseRequestContextImpl$8X_0(this$0, val$newClasse){
  this.val$newClasse = val$newClasse;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1179, 607, makeCastMap([Q$AbstractRequest]), ClasseRequestFactory_ClasseRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_8(){
  return new RequestData_0('qQk$r3sTeAEe7mhBicsUYdskhB8=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newClasse]), this.propertyRefs, Lcom_lemania_sis_shared_ClasseProxy_2_classLit, null);
}
;
_.val$newClasse = null;
var Lcom_lemania_sis_client_presenter_FrmClasseListPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmClasseListPresenter', 771), Lcom_lemania_sis_client_presenter_FrmClasseListPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmClasseListPresenter$1', 772), Lcom_lemania_sis_client_presenter_FrmClasseListPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmClasseListPresenter$2', 773), Lcom_lemania_sis_client_presenter_FrmClasseListPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmClasseListPresenter$3', 774), Lcom_lemania_sis_client_presenter_FrmClasseListPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmClasseListPresenter$4', 775), Lcom_lemania_sis_client_view_FrmClasseListView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView', 973), Lcom_lemania_sis_client_view_FrmClasseListView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView$1', 974), Lcom_lemania_sis_client_view_FrmClasseListView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView$2', 975), Lcom_lemania_sis_client_view_FrmClasseListView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView$3', 976), Lcom_lemania_sis_client_view_FrmClasseListView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView$4', 977), Lcom_lemania_sis_client_view_FrmClasseListView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView_BinderImpl', 978), Lcom_lemania_sis_client_view_FrmClasseListView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView_BinderImpl$Widgets', 979), Lcom_lemania_sis_client_view_FrmClasseListView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView_BinderImpl$Widgets$1', 980), Lcom_lemania_sis_client_view_FrmClasseListView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmClasseListView_BinderImpl$Widgets$2', 981), Lcom_lemania_sis_shared_service_ClasseRequestFactory_1ClasseRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ClasseRequestFactory_ClasseRequestContextImpl$8X', 1179);
$entry(onLoad)(9);
