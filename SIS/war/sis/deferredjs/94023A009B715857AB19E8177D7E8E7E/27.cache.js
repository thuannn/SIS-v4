function $getSubjectRequestContext(this$static){
  var rf;
  rf = new SubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  return new SubjectRequestFactory_SubjectRequestContextImpl_0(rf);
}

function $updateSubject(this$static, subject, subjectName, subjectCoef, isActive){
  var rc, x;
  if (!subjectName.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Nom de la mati\xE8re.');
    return;
  }
  if ($matches(subjectCoef, '-?\\d+(\\.\\d+)?')) {
    if (($clinit_Double() , __parseAndValidateDouble(subjectCoef)) < 0) {
      alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient');
      return;
    }
  }
   else {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient');
    return;
  }
  rc = $getSubjectRequestContext(this$static);
  subject = dynamicCast($editProxy(rc, subject), Q$SubjectProxy);
  subject.setSubjectName(subjectName);
  subject.setDefaultCoef(($clinit_Double() , new Double_0(__parseAndValidateDouble(subjectCoef))));
  subject.setIsActive(isActive);
  $fire((x = new SubjectRequestFactory_SubjectRequestContextImpl$8X_0(rc, subject) , $addInvocation(rc.state.dialect, x) , x), new FrmSubjectListPresenter$1_0(this$static));
}

function FrmSubjectListPresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
}

defineSeed(1131, 738, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$FrmSubjectListPresenter, Q$FrmSubjectListUiHandler]), FrmSubjectListPresenter_0);
_.onBind = function onBind_24(){
  dynamicCast(this.view, Q$FrmSubjectListPresenter$MyView).setUiHandlers(this);
  $initializeSubjectTable(dynamicCast(this.view, Q$FrmSubjectListPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_41(event_0){
}
;
_.onReset = function onReset_23(){
  var rc, x;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('subjectlist'), null);
  rc = $getSubjectRequestContext(this);
  $fire((x = new SubjectRequestFactory_SubjectRequestContextImpl$2X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new FrmSubjectListPresenter$2_0(this));
}
;
_.revealInParent = function revealInParent_20(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_100(this$static, response){
  $refreshUpdatedSubject(dynamicCast(this$static.this$0.view, Q$FrmSubjectListPresenter$MyView), response);
}

function FrmSubjectListPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1132, 677, makeCastMap([Q$Receiver]), FrmSubjectListPresenter$1_0);
_.onFailure_0 = function onFailure_109(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_109(response){
  $onSuccess_100(this, dynamicCast(response, Q$SubjectProxy));
}
;
_.this$0 = null;
function $onSuccess_101(this$static, response){
  $setSubjectListData_1(dynamicCast(this$static.this$0.view, Q$FrmSubjectListPresenter$MyView), response);
}

function FrmSubjectListPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1133, 677, makeCastMap([Q$Receiver]), FrmSubjectListPresenter$2_0);
_.onFailure_0 = function onFailure_110(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_110(response){
  $onSuccess_101(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$FrmSubjectListPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmSubjectListPresenter$_annotation$$none$$) {
    result = new FrmSubjectListPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmSubjectListView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmSubjectListPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmSubjectListPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmSubjectListPresenter$_annotation$$none$$;
}

defineSeed(1273, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_176(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmSubjectListPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeSubjectTable(this$static){
  var cellActive, colActive, colCoef, colSubjectName;
  colSubjectName = new FrmSubjectListView$1_0(new EditTextCell_0);
  $addColumn(this$static.tblSubjectList, colSubjectName, 'Nom');
  $setFieldUpdater(colSubjectName, new FrmSubjectListView$2_0(this$static));
  colCoef = new FrmSubjectListView$3_0(new EditTextCell_0);
  $addColumn(this$static.tblSubjectList, colCoef, 'Coefficient');
  $setColumnWidth_0(this$static.tblSubjectList, colCoef, 20 + ($clinit_Style$Unit() , '%'));
  $setFieldUpdater(colCoef, new FrmSubjectListView$4_0(this$static));
  cellActive = new CheckboxCell_0;
  colActive = new FrmSubjectListView$5_0(cellActive);
  $addColumn(this$static.tblSubjectList, colActive, 'Active');
  $setColumnWidth_0(this$static.tblSubjectList, colActive, '20%');
  $setFieldUpdater(colActive, new FrmSubjectListView$6_0(this$static));
  $setPageSize(this$static.tblSubjectList, 1000);
  $addDataDisplay(this$static.dataProvider, this$static.tblSubjectList);
}

function $refreshUpdatedSubject(this$static, subject){
  $remove_12(this$static.dataProvider.listWrapper, this$static.selectedSubject);
  $add_14(this$static.dataProvider.listWrapper, this$static.selectedSubject, subject);
  $refresh(this$static.dataProvider);
}

function $setSubjectListData_1(this$static, subjectList){
  $setList(this$static.dataProvider, subjectList);
  $setHeight(this$static.tblSubjectList, '' + subjectList.size_1() * ($clinit_NotificationTypes() , lineHeight).value_0 + 'px');
}

function FrmSubjectListView_0(){
  this.dataProvider = new ListDataProvider_0;
  this.tblSubjectList = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_21(new FrmSubjectListView_BinderImpl$Widgets_0(this));
}

defineSeed(1490, 743, makeCastMap([Q$IsWidget, Q$FrmSubjectListPresenter$MyView]), FrmSubjectListView_0);
_.asWidget = function asWidget_23(){
  return this.widget;
}
;
_.selectedSubject = -1;
_.widget = null;
function FrmSubjectListView$1_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1491, 389, makeCastMap([Q$HasCell, Q$Column]), FrmSubjectListView$1_0);
_.getValue = function getValue_69(object){
  return dynamicCast(object, Q$SubjectProxy).getSubjectName();
}
;
function $update_29(this$static, index, subject, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedSubject = index;
    $updateSubject(dynamicCast(this$static.this$0.uiHandlers, Q$FrmSubjectListUiHandler), subject, value, ($clinit_Double() , '' + subject.getDefaultCoef().value_0), subject.getIsActive());
  }
}

function FrmSubjectListView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1492, 1, {}, FrmSubjectListView$2_0);
_.update = function update_30(index, subject, value){
  $update_29(this, index, dynamicCast(subject, Q$SubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function $getValue_11(object){
  return $clinit_Double() , '' + object.getDefaultCoef().value_0;
}

function FrmSubjectListView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1493, 389, makeCastMap([Q$HasCell, Q$Column]), FrmSubjectListView$3_0);
_.getValue = function getValue_70(object){
  return $getValue_11(dynamicCast(object, Q$SubjectProxy));
}
;
function $update_30(this$static, index, subject, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedSubject = index;
    $updateSubject(dynamicCast(this$static.this$0.uiHandlers, Q$FrmSubjectListUiHandler), subject, subject.getSubjectName(), value, subject.getIsActive());
  }
}

function FrmSubjectListView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1494, 1, {}, FrmSubjectListView$4_0);
_.update = function update_31(index, subject, value){
  $update_30(this, index, dynamicCast(subject, Q$SubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmSubjectListView$5_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1495, 389, makeCastMap([Q$HasCell, Q$Column]), FrmSubjectListView$5_0);
_.getValue = function getValue_71(subject){
  return dynamicCast(subject, Q$SubjectProxy).getIsActive();
}
;
function $update_31(this$static, index, subject, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedSubject = index;
    $updateSubject(dynamicCast(this$static.this$0.uiHandlers, Q$FrmSubjectListUiHandler), subject, subject.getSubjectName(), ($clinit_Double() , '' + subject.getDefaultCoef().value_0), value);
  }
}

function FrmSubjectListView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1496, 1, {}, FrmSubjectListView$6_0);
_.update = function update_32(index, subject, value){
  $update_31(this, index, dynamicCast(subject, Q$SubjectProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function FrmSubjectListView_BinderImpl_0(){
}

defineSeed(1497, 1, {}, FrmSubjectListView_BinderImpl_0);
function $build_f_HTMLPanel1_21(this$static){
  var attachRecord26, f_HTMLPanel1, f_VerticalPanel2, f_Label3, tblSubjectList;
  f_HTMLPanel1 = new HTMLPanel_0($html1_14(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord26 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord26.origParent?$insertBefore(attachRecord26.origParent, attachRecord26.element, attachRecord26.origSibling):orphan(attachRecord26.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_12(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'LISTE DES MATIERES', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_12(f_VerticalPanel2, (tblSubjectList = this$static.owner.tblSubjectList , tblSubjectList.element.style['height'] = '500px' , tblSubjectList.element.style['width'] = '100%' , tblSubjectList)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmSubjectListView_BinderImpl$Widgets_0(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1498, 1, {}, FrmSubjectListView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function $html1_14(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$view$FrmSubjectListView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmSubjectListView$_annotation$$none$$) {
    result = new FrmSubjectListView_0(new FrmSubjectListView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmSubjectListView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmSubjectListView$_annotation$$none$$;
}

function SubjectRequestFactory_SubjectRequestContextImpl$2X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1820, 681, makeCastMap([Q$AbstractRequest]), SubjectRequestFactory_SubjectRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_80(){
  return new RequestData_0('thTlG6AsRrsgV9mCPA4Zy_KcFDc=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_SubjectProxy_2_classLit);
}
;
function SubjectRequestFactory_SubjectRequestContextImpl$8X_0(this$0, val$subject){
  this.val$subject = val$subject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1824, 681, makeCastMap([Q$AbstractRequest]), SubjectRequestFactory_SubjectRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_84(){
  return new RequestData_0('I7tXY9kiZKmIpV70FKXwhpS54p8=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$subject]), this.propertyRefs, Lcom_lemania_sis_shared_SubjectProxy_2_classLit, null);
}
;
_.val$subject = null;
var Lcom_lemania_sis_client_presenter_FrmSubjectListPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmSubjectListPresenter', 1131), Lcom_lemania_sis_client_presenter_FrmSubjectListPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmSubjectListPresenter$1', 1132), Lcom_lemania_sis_client_presenter_FrmSubjectListPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmSubjectListPresenter$2', 1133), Lcom_lemania_sis_client_view_FrmSubjectListView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectListView', 1490), Lcom_lemania_sis_client_view_FrmSubjectListView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectListView$1', 1491), Lcom_lemania_sis_client_view_FrmSubjectListView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectListView$2', 1492), Lcom_lemania_sis_client_view_FrmSubjectListView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectListView$3', 1493), Lcom_lemania_sis_client_view_FrmSubjectListView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectListView$4', 1494), Lcom_lemania_sis_client_view_FrmSubjectListView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectListView$5', 1495), Lcom_lemania_sis_client_view_FrmSubjectListView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectListView$6', 1496), Lcom_lemania_sis_client_view_FrmSubjectListView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectListView_BinderImpl', 1497), Lcom_lemania_sis_client_view_FrmSubjectListView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmSubjectListView_BinderImpl$Widgets', 1498), Lcom_lemania_sis_shared_service_SubjectRequestFactory_1SubjectRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SubjectRequestFactory_SubjectRequestContextImpl$2X', 1820), Lcom_lemania_sis_shared_service_SubjectRequestFactory_1SubjectRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SubjectRequestFactory_SubjectRequestContextImpl$8X', 1824);
$entry(onLoad)(27);
