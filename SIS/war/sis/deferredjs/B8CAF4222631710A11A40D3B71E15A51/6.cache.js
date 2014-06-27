function $updateEcoleStatus(this$static, ecole, value){
  var ecoleForUpdate, rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new EcoleRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  ecoleForUpdate = dynamicCast($editProxy(rc, ecole), Q$EcoleProxy);
  ecoleForUpdate.setSchoolStatus(value);
  $fire((x = new EcoleRequestFactory_EcoleRequestContextImpl$6X_0(rc, ecoleForUpdate) , $addInvocation(rc.state.dialect, x) , x), new EcolePresenter$2_0(this$static));
}

function EcolePresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
  dynamicCast(this.view, Q$EcolePresenter$MyView).setUiHandlers(this);
}

defineSeed(966, 729, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$EcoleAddedEvent$EcoleAddedHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$EcolePresenter, Q$EcoleListUiHandler]), EcolePresenter_0);
_.onBind = function onBind_10(){
  $initializeTable_2(dynamicCast(this.view, Q$EcolePresenter$MyView));
}
;
_.onEcoleAdded = function onEcoleAdded(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, '!ecolepage', true);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_13(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_9(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('!ecolepage'), null);
  rf = new EcoleRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_5(rc), new EcolePresenter$1_0(this));
}
;
_.onReveal = function onReveal_0(){
}
;
_.revealInParent = function revealInParent_6(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_32(this$static, response){
  $setData_1(dynamicCast(this$static.this$0.view, Q$EcolePresenter$MyView), response);
}

function EcolePresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(967, 668, makeCastMap([Q$Receiver]), EcolePresenter$1_0);
_.onFailure_0 = function onFailure_37(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_37(response){
  $onSuccess_32(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_33(this$static, response){
  $refreshTable_0(dynamicCast(this$static.this$0.view, Q$EcolePresenter$MyView), response);
}

function EcolePresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(968, 668, makeCastMap([Q$Receiver]), EcolePresenter$2_0);
_.onFailure_0 = function onFailure_38(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_38(response){
  $onSuccess_33(this, dynamicCast(response, Q$EcoleProxy));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$EcolePresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$EcolePresenter$_annotation$$none$$) {
    result = new EcolePresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$EcoleView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$EcolePresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$EcolePresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$EcolePresenter$_annotation$$none$$;
}

defineSeed(1272, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_180(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$EcolePresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeTable_2(this$static){
  var cellActive, colActive, colAddress, colName;
  colName = new EcoleView$1_0;
  $addColumn(this$static.tblEcoles, colName, 'Nom');
  colAddress = new EcoleView$2_0;
  $addColumn(this$static.tblEcoles, colAddress, 'Adresse');
  cellActive = new CheckboxCell_0;
  colActive = new EcoleView$3_0(cellActive);
  $addColumn(this$static.tblEcoles, colActive, 'Active');
  $setFieldUpdater(colActive, new EcoleView$4_0(this$static));
}

function $refreshTable_0(this$static, updatedEcole){
  var ecoles;
  ecoles = new ArrayList_0;
  setCheck(ecoles.array, ecoles.size_0++, updatedEcole);
  $setRowData(this$static.tblEcoles, this$static.selectedEcole, ecoles);
  $ensurePendingState(this$static.tblEcoles.presenter).redrawRequired = true;
  alert_0("Statut de l'\xE9cole mis \xE0 jour.");
}

function $setData_1(this$static, ecoleList){
  $setRowData_0(this$static.tblEcoles, ecoleList);
  $setRowCount_0(this$static.tblEcoles, ecoleList.size_1(), true);
}

function EcoleView_0(){
  this.tblEcoles = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_7(new EcoleView_BinderImpl$Widgets_0(this));
}

defineSeed(1307, 734, makeCastMap([Q$IsWidget, Q$EcolePresenter$MyView]), EcoleView_0);
_.asWidget = function asWidget_9(){
  return this.widget;
}
;
_.selectedEcole = 0;
_.widget = null;
function EcoleView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1308, 412, makeCastMap([Q$HasCell, Q$Column]), EcoleView$1_0);
_.getValue = function getValue_18(object){
  return dynamicCast(object, Q$EcoleProxy).getSchoolName();
}
;
function EcoleView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(1309, 412, makeCastMap([Q$HasCell, Q$Column]), EcoleView$2_0);
_.getValue = function getValue_19(object){
  return dynamicCast(object, Q$EcoleProxy).getSchoolAddress();
}
;
function EcoleView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1310, 385, makeCastMap([Q$HasCell, Q$Column]), EcoleView$3_0);
_.getValue = function getValue_20(ecole){
  return dynamicCast(ecole, Q$EcoleProxy).getSchoolStatus();
}
;
function $update_12(this$static, index, ecole, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedEcole = index;
    $updateEcoleStatus(dynamicCast(this$static.this$0.uiHandlers, Q$EcoleListUiHandler), ecole, value);
  }
}

function EcoleView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1311, 1, {}, EcoleView$4_0);
_.update = function update_13(index, ecole, value){
  $update_12(this, index, dynamicCast(ecole, Q$EcoleProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function EcoleView_BinderImpl_0(){
}

defineSeed(1312, 1, {}, EcoleView_BinderImpl_0);
function $build_f_HTMLPanel1_7(this$static){
  var attachRecord5, f_HTMLPanel1, f_FlowPanel2, f_VerticalPanel3, f_Label4, tblEcoles;
  f_HTMLPanel1 = new HTMLPanel_0($html1_5(this$static.domId0).html);
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord5 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord5.origParent?$insertBefore(attachRecord5.origParent, attachRecord5.element, attachRecord5.origSibling):orphan(attachRecord5.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_FlowPanel2 = new FlowPanel_0 , $add_8(f_FlowPanel2, (f_VerticalPanel3 = new VerticalPanel_0 , $add_12(f_VerticalPanel3, (f_Label4 = new Label_0 , f_Label4.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label4, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label4.directionalTextHelper, 'LISTE DES ECOLES', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , $add_12(f_VerticalPanel3, (tblEcoles = this$static.owner.tblEcoles , tblEcoles.element.style['height'] = '500px' , tblEcoles.element.style['width'] = '100%' , tblEcoles)) , f_VerticalPanel3.element.style['height'] = '100%' , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3.table['cellSpacing'] = 2 , f_VerticalPanel3)) , f_FlowPanel2.element.style['height'] = '100%' , f_FlowPanel2.element.style['width'] = '100%' , f_FlowPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function EcoleView_BinderImpl$Widgets_0(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1313, 1, {}, EcoleView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function $html1_5(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$view$EcoleView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$EcoleView$_annotation$$none$$) {
    result = new EcoleView_0(new EcoleView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$EcoleView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$EcoleView$_annotation$$none$$;
}

function EcoleRequestFactory_EcoleRequestContextImpl$6X_0(this$0, val$newEcole){
  this.val$newEcole = val$newEcole;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1747, 672, makeCastMap([Q$AbstractRequest]), EcoleRequestFactory_EcoleRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_48(){
  return new RequestData_0('HBx1Wni$Iz7CbIgjDbxQeQJKTtg=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newEcole]), this.propertyRefs, Lcom_lemania_sis_shared_EcoleProxy_2_classLit, null);
}
;
_.val$newEcole = null;
var Lcom_lemania_sis_client_presenter_EcolePresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'EcolePresenter', 966), Lcom_lemania_sis_client_presenter_EcolePresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'EcolePresenter$1', 967), Lcom_lemania_sis_client_presenter_EcolePresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'EcolePresenter$2', 968), Lcom_lemania_sis_client_view_EcoleView_2_classLit = createForClass('com.lemania.sis.client.view.', 'EcoleView', 1307), Lcom_lemania_sis_client_view_EcoleView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'EcoleView$1', 1308), Lcom_lemania_sis_client_view_EcoleView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'EcoleView$2', 1309), Lcom_lemania_sis_client_view_EcoleView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'EcoleView$3', 1310), Lcom_lemania_sis_client_view_EcoleView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'EcoleView$4', 1311), Lcom_lemania_sis_client_view_EcoleView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'EcoleView_BinderImpl', 1312), Lcom_lemania_sis_client_view_EcoleView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'EcoleView_BinderImpl$Widgets', 1313), Lcom_lemania_sis_shared_service_EcoleRequestFactory_1EcoleRequestContextImpl$6X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EcoleRequestFactory_EcoleRequestContextImpl$6X', 1747);
$entry(onLoad)(6);
