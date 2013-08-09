function $getBrancheRequestContext(this$static){
  var rf;
  rf = new BrancheRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  return new BrancheRequestFactory_BrancheRequestContextImpl_0(rf);
}

function $updateBranche(this$static, branche, brancheName, brancheCoef, isActive){
  var rc, x;
  if (!brancheName.length) {
    alert_0('Donn\xE9e Invalide - Nom de la branche.');
    return;
  }
  if ($matches(brancheCoef, '-?\\d+(\\.\\d+)?')) {
    if (($clinit_Double() , __parseAndValidateDouble(brancheCoef)) < 0) {
      alert_0('Donn\xE9e Invalide - Coefficient');
      return;
    }
  }
   else {
    alert_0('Donn\xE9e Invalide - Coefficient');
    return;
  }
  rc = $getBrancheRequestContext(this$static);
  branche = dynamicCast($editProxy(rc, branche), Q$BrancheProxy);
  branche.setBrancheName(brancheName);
  branche.setDefaultCoef(($clinit_Double() , new Double_0(__parseAndValidateDouble(brancheCoef))));
  branche.setIsActive(isActive);
  $fire((x = new BrancheRequestFactory_BrancheRequestContextImpl$5X_0(rc, branche) , $addInvocation(rc.state.dialect, x) , x), new FrmBrancheListPresenter$2_0(this$static));
}

function FrmBrancheListPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(760, 664, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$FrmBrancheListUiHandler]), FrmBrancheListPresenter_0);
_.onBind = function onBind_7(){
  dynamicCast(this.view, Q$FrmBrancheListPresenter$MyView).setUiHandlers(this);
  $initializeBrancheTable(dynamicCast(this.view, Q$FrmBrancheListPresenter$MyView));
}
;
_.onReset = function onReset_3(){
  var rc;
  rc = $getBrancheRequestContext(this);
  $fire($listAll_0(rc), new FrmBrancheListPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_6(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_11(this$static, response){
  $setBrancheTableData(dynamicCast(this$static.this$0.view, Q$FrmBrancheListPresenter$MyView), response);
}

function FrmBrancheListPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(761, 603, makeCastMap([Q$Receiver]), FrmBrancheListPresenter$1_0);
_.onFailure_0 = function onFailure_11(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_11(response){
  $onSuccess_11(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_12(this$static, response){
  $refreshUpdatedBranche(dynamicCast(this$static.this$0.view, Q$FrmBrancheListPresenter$MyView), response);
}

function FrmBrancheListPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(762, 603, makeCastMap([Q$Receiver]), FrmBrancheListPresenter$2_0);
_.onFailure_0 = function onFailure_12(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_12(response){
  $onSuccess_12(this, dynamicCast(response, Q$BrancheProxy));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$FrmBrancheListPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBrancheListPresenter$_annotation$$none$$) {
    result = new FrmBrancheListPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmBrancheListView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmBrancheListPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBrancheListPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBrancheListPresenter$_annotation$$none$$;
}

defineSeed(912, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_81(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmBrancheListPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeBrancheTable(this$static){
  var cellActive, colActive, colBrancheName, colCoef;
  colBrancheName = new FrmBrancheListView$1_0(new EditTextCell_0);
  $addColumn(this$static.tblBranche, colBrancheName, 'Nom');
  $setFieldUpdater(colBrancheName, new FrmBrancheListView$2_0(this$static));
  colCoef = new FrmBrancheListView$3_0(new EditTextCell_0);
  $addColumn(this$static.tblBranche, colCoef, 'Coefficient');
  $setFieldUpdater(colCoef, new FrmBrancheListView$4_0(this$static));
  cellActive = new CheckboxCell_0;
  colActive = new FrmBrancheListView$5_0(cellActive);
  $addColumn(this$static.tblBranche, colActive, 'Active');
  $setFieldUpdater(colActive, new FrmBrancheListView$6_0(this$static));
  $addDataDisplay(this$static.dataProvider, this$static.tblBranche);
}

function $refreshUpdatedBranche(this$static, branche){
  $remove_11(this$static.dataProvider.listWrapper, this$static.selectedBranche);
  $add_11(this$static.dataProvider.listWrapper, this$static.selectedBranche, branche);
  $refresh(this$static.dataProvider);
}

function $setBrancheTableData(this$static, branches){
  $setList(this$static.dataProvider, branches);
}

function FrmBrancheListView_0(){
  this.dataProvider = new ListDataProvider_0;
  this.tblBranche = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_5(new FrmBrancheListView_BinderImpl$Widgets_0(this));
}

defineSeed(956, 669, makeCastMap([Q$IsWidget, Q$FrmBrancheListPresenter$MyView]), FrmBrancheListView_0);
_.asWidget = function asWidget_9(){
  return this.widget;
}
;
_.selectedBranche = -1;
_.widget = null;
function FrmBrancheListView$1_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(957, 347, makeCastMap([Q$HasCell, Q$Column]), FrmBrancheListView$1_0);
_.getValue = function getValue_6(object){
  return dynamicCast(object, Q$BrancheProxy).getBrancheName();
}
;
function $update_3(this$static, index, branche, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedBranche = index;
    $updateBranche(dynamicCast(this$static.this$0.uiHandlers, Q$FrmBrancheListUiHandler), branche, value, ($clinit_Double() , '' + branche.getDefaultCoef().value_0), branche.getIsActive());
  }
}

function FrmBrancheListView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(958, 1, {}, FrmBrancheListView$2_0);
_.update = function update_4(index, branche, value){
  $update_3(this, index, dynamicCast(branche, Q$BrancheProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function $getValue_3(object){
  return $clinit_Double() , '' + object.getDefaultCoef().value_0;
}

function FrmBrancheListView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(959, 347, makeCastMap([Q$HasCell, Q$Column]), FrmBrancheListView$3_0);
_.getValue = function getValue_7(object){
  return $getValue_3(dynamicCast(object, Q$BrancheProxy));
}
;
function $update_4(this$static, index, branche, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedBranche = index;
    $updateBranche(dynamicCast(this$static.this$0.uiHandlers, Q$FrmBrancheListUiHandler), branche, branche.getBrancheName(), value, branche.getIsActive());
  }
}

function FrmBrancheListView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(960, 1, {}, FrmBrancheListView$4_0);
_.update = function update_5(index, branche, value){
  $update_4(this, index, dynamicCast(branche, Q$BrancheProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmBrancheListView$5_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(961, 347, makeCastMap([Q$HasCell, Q$Column]), FrmBrancheListView$5_0);
_.getValue = function getValue_8(branche){
  return dynamicCast(branche, Q$BrancheProxy).getIsActive();
}
;
function $update_5(this$static, index, branche, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedBranche = index;
    $updateBranche(dynamicCast(this$static.this$0.uiHandlers, Q$FrmBrancheListUiHandler), branche, branche.getBrancheName(), ($clinit_Double() , '' + branche.getDefaultCoef().value_0), value);
  }
}

function FrmBrancheListView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(962, 1, {}, FrmBrancheListView$6_0);
_.update = function update_6(index, branche, value){
  $update_5(this, index, dynamicCast(branche, Q$BrancheProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function FrmBrancheListView_BinderImpl_0(){
}

defineSeed(963, 1, {}, FrmBrancheListView_BinderImpl_0);
function $build_f_HTMLPanel1_5(this$static){
  var attachRecord6, f_HTMLPanel1, f_VerticalPanel2, f_Label3, tblBranche;
  f_HTMLPanel1 = new HTMLPanel_0($html1_6(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord6 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord6.origParent?$insertBefore(attachRecord6.origParent, attachRecord6.element, attachRecord6.origSibling):orphan(attachRecord6.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_9(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'LISTE DES BRANCHES') , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_9(f_VerticalPanel2, (tblBranche = this$static.owner.tblBranche , tblBranche.element.style['height'] = '600px' , tblBranche.element.style['width'] = '80%' , tblBranche)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmBrancheListView_BinderImpl$Widgets_0(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(964, 1, {}, FrmBrancheListView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function $html1_6(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$view$FrmBrancheListView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBrancheListView$_annotation$$none$$) {
    result = new FrmBrancheListView_0(new FrmBrancheListView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBrancheListView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBrancheListView$_annotation$$none$$;
}

function BrancheRequestFactory_BrancheRequestContextImpl$5X_0(this$0, val$branche){
  this.val$branche = val$branche;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1173, 607, makeCastMap([Q$AbstractRequest]), BrancheRequestFactory_BrancheRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_5(){
  return new RequestData_0('$9BcvfdD2LPuGI_zpqkVb$Ujea0=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$branche]), this.propertyRefs, Lcom_lemania_sis_shared_BrancheProxy_2_classLit, null);
}
;
_.val$branche = null;
var Lcom_lemania_sis_client_presenter_FrmBrancheListPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBrancheListPresenter', 760), Lcom_lemania_sis_client_presenter_FrmBrancheListPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBrancheListPresenter$1', 761), Lcom_lemania_sis_client_presenter_FrmBrancheListPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBrancheListPresenter$2', 762), Lcom_lemania_sis_client_view_FrmBrancheListView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView', 956), Lcom_lemania_sis_client_view_FrmBrancheListView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView$1', 957), Lcom_lemania_sis_client_view_FrmBrancheListView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView$2', 958), Lcom_lemania_sis_client_view_FrmBrancheListView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView$3', 959), Lcom_lemania_sis_client_view_FrmBrancheListView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView$4', 960), Lcom_lemania_sis_client_view_FrmBrancheListView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView$5', 961), Lcom_lemania_sis_client_view_FrmBrancheListView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView$6', 962), Lcom_lemania_sis_client_view_FrmBrancheListView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView_BinderImpl', 963), Lcom_lemania_sis_client_view_FrmBrancheListView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView_BinderImpl$Widgets', 964), Lcom_lemania_sis_shared_service_BrancheRequestFactory_1BrancheRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BrancheRequestFactory_BrancheRequestContextImpl$5X', 1173);
$entry(onLoad)(7);
