function BrancheNameAfterChangeEvent_0(){
  $clinit_BrancheNameAfterChangeEvent();
}

defineSeed(801, 233, {}, BrancheNameAfterChangeEvent_0);
_.dispatch_0 = function dispatch_37(handler){
  dynamicCast(handler, Q$BrancheNameAfterChangeEvent$BrancheNameAfterChangeHandler).onBrancheNameAfterChange(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_38(){
  return TYPE_37;
}
;
function $getBrancheRequestContext(this$static){
  var rf;
  rf = new BrancheRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  return new BrancheRequestFactory_BrancheRequestContextImpl_0(rf);
}

function $onBrancheNameAfterChange(this$static){
  var rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new BulletinBrancheRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl_0(rf);
  $fire($refreshBulletinBrancheNames(rc, this$static.oldBrancheName, this$static.newBrancheName), new FrmBrancheListPresenter$3_0);
}

function $updateBranche(this$static, branche, brancheName, brancheCoef, isActive){
  var rc, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!brancheName.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Nom de la branche.');
    return;
  }
  if ($matches(brancheCoef, '-?\\d+(\\.\\d+)?')) {
    if (($clinit_Double() , __parseAndValidateDouble(brancheCoef)) < 0) {
      alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient');
      return;
    }
  }
   else {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient');
    return;
  }
  if (!$equals_5(branche.getBrancheName(), brancheName)) {
    this$static.oldBrancheName = branche.getBrancheName();
    this$static.newBrancheName = brancheName;
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

defineSeed(862, 747, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$BrancheNameAfterChangeEvent$BrancheNameAfterChangeHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$FrmBrancheListPresenter, Q$FrmBrancheListUiHandler]), FrmBrancheListPresenter_0);
_.onBind = function onBind_7(){
  dynamicCast(this.view, Q$FrmBrancheListPresenter$MyView).setUiHandlers(this);
  $initializeBrancheTable(dynamicCast(this.view, Q$FrmBrancheListPresenter$MyView));
}
;
_.onBrancheNameAfterChange = function onBrancheNameAfterChange(event_0){
  $onBrancheNameAfterChange(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_13(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_6(){
  var rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('branchelist'), null);
  rc = $getBrancheRequestContext(this);
  $fire($listAll_0(rc), new FrmBrancheListPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_6(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
_.newBrancheName = '';
_.oldBrancheName = '';
function $onSuccess_12(this$static, response){
  $setBrancheTableData(dynamicCast(this$static.this$0.view, Q$FrmBrancheListPresenter$MyView), response);
}

function FrmBrancheListPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(863, 687, makeCastMap([Q$Receiver]), FrmBrancheListPresenter$1_0);
_.onFailure_0 = function onFailure_12(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_12(response){
  $onSuccess_12(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_13(this$static, response){
  $refreshUpdatedBranche(dynamicCast(this$static.this$0.view, Q$FrmBrancheListPresenter$MyView), response);
  $equals_5(this$static.this$0.oldBrancheName, this$static.this$0.newBrancheName) || $doFire(this$static.this$0.eventBus, new BrancheNameAfterChangeEvent_0, null);
}

function FrmBrancheListPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(864, 687, makeCastMap([Q$Receiver]), FrmBrancheListPresenter$2_0);
_.onFailure_0 = function onFailure_13(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_13(response){
  $onSuccess_13(this, dynamicCast(response, Q$BrancheProxy));
}
;
_.this$0 = null;
function FrmBrancheListPresenter$3_0(){
}

defineSeed(865, 687, makeCastMap([Q$Receiver]), FrmBrancheListPresenter$3_0);
_.onFailure_0 = function onFailure_14(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_14(response){
  throwClassCastExceptionUnlessNull(response);
}
;
defineSeed(866, 778, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$BrancheNameAfterChangeEvent$BrancheNameAfterChangeHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler]));
_.onBrancheNameAfterChange = function onBrancheNameAfterChange_0(event_0){
  $getPresenter_0(this, new FrmBrancheListPresenterMyProxyImpl$2_0(this.eventBus, event_0));
}
;
function $success_8(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new FrmBrancheListPresenterMyProxyImpl$2$1_0(presenter, this$static.val$event));
}

function FrmBrancheListPresenterMyProxyImpl$2_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(869, 760, {}, FrmBrancheListPresenterMyProxyImpl$2_0);
_.success = function success_10(presenter){
  $success_8(this, dynamicCast(presenter, Q$FrmBrancheListPresenter));
}
;
_.val$event = null;
function FrmBrancheListPresenterMyProxyImpl$2$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(870, 1, {}, FrmBrancheListPresenterMyProxyImpl$2$1_0);
_.execute_0 = function execute_39(){
  $onBrancheNameAfterChange(this.val$presenter);
}
;
_.val$event = null;
_.val$presenter = null;
function $get_Key$type$com$lemania$sis$client$presenter$FrmBrancheListPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBrancheListPresenter$_annotation$$none$$) {
    result = new FrmBrancheListPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmBrancheListView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmBrancheListPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBrancheListPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBrancheListPresenter$_annotation$$none$$;
}

defineSeed(1147, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_139(){
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
  $remove_12(this$static.dataProvider.listWrapper, this$static.selectedBranche);
  $add_13(this$static.dataProvider.listWrapper, this$static.selectedBranche, branche);
  $refresh_1(this$static.dataProvider);
}

function $setBrancheTableData(this$static, branches){
  $setList(this$static.dataProvider, branches);
  $setHeight(this$static.tblBranche, '' + branches.size_1() * ($clinit_NotificationTypes() , lineHeight).value_0 + 'px');
}

function FrmBrancheListView_0(){
  this.dataProvider = new ListDataProvider_0;
  this.tblBranche = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_5(new FrmBrancheListView_BinderImpl$Widgets_0(this));
}

defineSeed(1192, 752, makeCastMap([Q$IsWidget, Q$FrmBrancheListPresenter$MyView]), FrmBrancheListView_0);
_.asWidget = function asWidget_9(){
  return this.widget;
}
;
_.selectedBranche = -1;
_.widget = null;
function FrmBrancheListView$1_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1193, 380, makeCastMap([Q$HasCell, Q$Column]), FrmBrancheListView$1_0);
_.getValue = function getValue_8(object){
  return dynamicCast(object, Q$BrancheProxy).getBrancheName();
}
;
function $update_4(this$static, index, branche, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedBranche = index;
    $updateBranche(dynamicCast(this$static.this$0.uiHandlers, Q$FrmBrancheListUiHandler), branche, value, ($clinit_Double() , '' + branche.getDefaultCoef().value_0), branche.getIsActive());
  }
}

function FrmBrancheListView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1194, 1, {}, FrmBrancheListView$2_0);
_.update = function update_4(index, branche, value){
  $update_4(this, index, dynamicCast(branche, Q$BrancheProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function $getValue_3(object){
  return $clinit_Double() , '' + object.getDefaultCoef().value_0;
}

function FrmBrancheListView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1195, 380, makeCastMap([Q$HasCell, Q$Column]), FrmBrancheListView$3_0);
_.getValue = function getValue_9(object){
  return $getValue_3(dynamicCast(object, Q$BrancheProxy));
}
;
function $update_5(this$static, index, branche, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedBranche = index;
    $updateBranche(dynamicCast(this$static.this$0.uiHandlers, Q$FrmBrancheListUiHandler), branche, branche.getBrancheName(), value, branche.getIsActive());
  }
}

function FrmBrancheListView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1196, 1, {}, FrmBrancheListView$4_0);
_.update = function update_5(index, branche, value){
  $update_5(this, index, dynamicCast(branche, Q$BrancheProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmBrancheListView$5_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1197, 380, makeCastMap([Q$HasCell, Q$Column]), FrmBrancheListView$5_0);
_.getValue = function getValue_10(branche){
  return dynamicCast(branche, Q$BrancheProxy).getIsActive();
}
;
function $update_6(this$static, index, branche, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedBranche = index;
    $updateBranche(dynamicCast(this$static.this$0.uiHandlers, Q$FrmBrancheListUiHandler), branche, branche.getBrancheName(), ($clinit_Double() , '' + branche.getDefaultCoef().value_0), value);
  }
}

function FrmBrancheListView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1198, 1, {}, FrmBrancheListView$6_0);
_.update = function update_6(index, branche, value){
  $update_6(this, index, dynamicCast(branche, Q$BrancheProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function FrmBrancheListView_BinderImpl_0(){
}

defineSeed(1199, 1, {}, FrmBrancheListView_BinderImpl_0);
function $build_f_HTMLPanel1_5(this$static){
  var attachRecord6, f_HTMLPanel1, f_VerticalPanel2, f_Label3, tblBranche;
  f_HTMLPanel1 = new HTMLPanel_0($html1_5(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord6 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord6.origParent?$insertBefore(attachRecord6.origParent, attachRecord6.element, attachRecord6.origSibling):orphan(attachRecord6.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'LISTE DES BRANCHES', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (tblBranche = this$static.owner.tblBranche , tblBranche.element.style['height'] = '500px' , tblBranche.element.style['width'] = '100%' , tblBranche)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmBrancheListView_BinderImpl$Widgets_0(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1200, 1, {}, FrmBrancheListView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function $html1_5(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
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

defineSeed(1498, 691, makeCastMap([Q$AbstractRequest]), BrancheRequestFactory_BrancheRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_6(){
  return new RequestData_0('$9BcvfdD2LPuGI_zpqkVb$Ujea0=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$branche]), this.propertyRefs, Lcom_lemania_sis_shared_BrancheProxy_2_classLit, null);
}
;
_.val$branche = null;
function $refreshBulletinBrancheNames(this$static, oldBrancheName, newBrancheName){
  var x;
  x = new BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$6X_0(this$static, oldBrancheName, newBrancheName);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$6X_0(this$0, val$oldBrancheName, val$newBrancheName){
  this.val$oldBrancheName = val$oldBrancheName;
  this.val$newBrancheName = val$newBrancheName;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1505, 691, makeCastMap([Q$AbstractRequest]), BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_10(){
  return new RequestData_0('palA0JlGeFBjYltyOPZe05GZ3zU=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$oldBrancheName, this.val$newBrancheName]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$newBrancheName = null;
_.val$oldBrancheName = null;
var Lcom_lemania_sis_client_presenter_FrmBrancheListPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBrancheListPresenter', 862), Lcom_lemania_sis_client_presenter_FrmBrancheListPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBrancheListPresenter$1', 863), Lcom_lemania_sis_client_presenter_FrmBrancheListPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBrancheListPresenter$2', 864), Lcom_lemania_sis_client_presenter_FrmBrancheListPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBrancheListPresenter$3', 865), Lcom_lemania_sis_client_event_BrancheNameAfterChangeEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'BrancheNameAfterChangeEvent', 801), Lcom_lemania_sis_client_presenter_FrmBrancheListPresenterMyProxyImpl$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBrancheListPresenterMyProxyImpl$2', 869), Lcom_lemania_sis_client_presenter_FrmBrancheListPresenterMyProxyImpl$2$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBrancheListPresenterMyProxyImpl$2$1', 870), Lcom_lemania_sis_client_view_FrmBrancheListView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView', 1192), Lcom_lemania_sis_client_view_FrmBrancheListView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView$1', 1193), Lcom_lemania_sis_client_view_FrmBrancheListView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView$2', 1194), Lcom_lemania_sis_client_view_FrmBrancheListView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView$3', 1195), Lcom_lemania_sis_client_view_FrmBrancheListView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView$4', 1196), Lcom_lemania_sis_client_view_FrmBrancheListView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView$5', 1197), Lcom_lemania_sis_client_view_FrmBrancheListView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView$6', 1198), Lcom_lemania_sis_client_view_FrmBrancheListView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView_BinderImpl', 1199), Lcom_lemania_sis_client_view_FrmBrancheListView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheListView_BinderImpl$Widgets', 1200), Lcom_lemania_sis_shared_service_BrancheRequestFactory_1BrancheRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BrancheRequestFactory_BrancheRequestContextImpl$5X', 1498), Lcom_lemania_sis_shared_service_BulletinBrancheRequestFactory_1BulletinBrancheRequestContextImpl$6X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$6X', 1505);
$entry(onLoad)(7);
