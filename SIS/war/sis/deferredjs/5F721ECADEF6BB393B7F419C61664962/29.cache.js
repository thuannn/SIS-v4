function $clinit_Title(){
  $clinit_Title = nullMethod;
  titles = new ArrayList_2(new Arrays$ArrayList_0(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Monsieur', 'Madame'])));
}

var titles;
function ParentAfterAddEvent_0(addedParent){
  $clinit_ParentAfterAddEvent();
  this.addedParent = addedParent;
}

defineSeed(865, 276, {}, ParentAfterAddEvent_0);
_.dispatch_0 = function dispatch_51(handler){
  dynamicCast(handler, Q$ParentAfterAddEvent$ParentAfterAddHandler).onParentAfterAdd(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_52(){
  return TYPE_51;
}
;
_.addedParent = null;
function ParentAfterUpdateEvent_0(updatedParent){
  $clinit_ParentAfterUpdateEvent();
  this.updatedParent = updatedParent;
}

defineSeed(866, 276, {}, ParentAfterUpdateEvent_0);
_.dispatch_0 = function dispatch_52(handler){
  dynamicCast(handler, Q$ParentAfterUpdateEvent$ParentAfterUpdateHandler).onParentAfterUpdate(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_53(){
  return TYPE_52;
}
;
_.updatedParent = null;
function $editParent(this$static, parent_0){
  $addToPopupSlot(this$static, this$static.popupParentProfile);
  $loadActiveStudents(this$static.popupParentProfile);
  this$static.popupParentProfile.editExisting = true;
  this$static.popupParentProfile.existingParent = parent_0;
  $showParentDetail(this$static.popupParentProfile, parent_0);
}

function $onParentAfterAdd(this$static, event_0){
  $addNewParent(dynamicCast(this$static.view, Q$ParentManagementPresenter$MyView), event_0.addedParent);
}

function $onParentAfterUpdate(this$static, event_0){
  $updateParent(dynamicCast(this$static.view, Q$ParentManagementPresenter$MyView), event_0.updatedParent);
}

function $showParentProfilePopup(this$static){
  $addToPopupSlot(this$static, this$static.popupParentProfile);
  $loadActiveStudents(this$static.popupParentProfile);
  this$static.popupParentProfile.editExisting = false;
  $resetUI(dynamicCast(this$static.popupParentProfile.view, Q$ParentProfilePresenter$MyView));
}

function ParentManagementPresenter_0(eventBus, view, proxy, pp){
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ParentManagementPresenter$MyView).setUiHandlers(this);
  this.popupParentProfile = pp;
}

defineSeed(986, 796, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ParentAfterAddEvent$ParentAfterAddHandler, Q$ParentAfterUpdateEvent$ParentAfterUpdateHandler, Q$ParentManagementPresenter, Q$ParentManagementUiHandlers]), ParentManagementPresenter_0);
_.onBind = function onBind_5(){
  $initializeTable_0(dynamicCast(dynamicCast(this.view, Q$ParentManagementPresenter$MyView), Q$ParentManagementView));
}
;
_.onParentAfterAdd = function onParentAfterAdd(event_0){
  $onParentAfterAdd(this, event_0);
}
;
_.onParentAfterUpdate = function onParentAfterUpdate(event_0){
  $onParentAfterUpdate(this, event_0);
}
;
_.onReset = function onReset_4(){
  var rf, rc, x;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('parentmgt'), null);
  rf = new ParentRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ParentRequestFactory_ParentRequestContextImpl_0(rf);
  $fire((x = new ParentRequestFactory_ParentRequestContextImpl$1X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new ParentManagementPresenter$1_0(this));
}
;
_.popupParentProfile = null;
function $onSuccess_20(this$static, response){
  $setParentData(dynamicCast(this$static.this$0.view, Q$ParentManagementPresenter$MyView), response);
}

function ParentManagementPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(987, 727, makeCastMap([Q$Receiver]), ParentManagementPresenter$1_0);
_.onFailure_0 = function onFailure_24(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_24(response){
  $onSuccess_20(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
defineSeed(988, 824, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$ParentAfterAddEvent$ParentAfterAddHandler, Q$ParentAfterUpdateEvent$ParentAfterUpdateHandler]));
_.onParentAfterAdd = function onParentAfterAdd_0(event_0){
  $getPresenter_0(this, new ParentManagementPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
_.onParentAfterUpdate = function onParentAfterUpdate_0(event_0){
  $getPresenter_0(this, new ParentManagementPresenterMyProxyImpl$2_0(this.eventBus, event_0));
}
;
function $success_7(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new ParentManagementPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function ParentManagementPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(989, 809, {}, ParentManagementPresenterMyProxyImpl$1_0);
_.success = function success_9(presenter){
  $success_7(this, dynamicCast(presenter, Q$ParentManagementPresenter));
}
;
_.val$event = null;
function ParentManagementPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(990, 1, {}, ParentManagementPresenterMyProxyImpl$1$1_0);
_.execute_1 = function execute_36(){
  $onParentAfterAdd(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $success_8(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new ParentManagementPresenterMyProxyImpl$2$1_0(presenter, this$static.val$event));
}

function ParentManagementPresenterMyProxyImpl$2_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(991, 809, {}, ParentManagementPresenterMyProxyImpl$2_0);
_.success = function success_10(presenter){
  $success_8(this, dynamicCast(presenter, Q$ParentManagementPresenter));
}
;
_.val$event = null;
function ParentManagementPresenterMyProxyImpl$2$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(992, 1, {}, ParentManagementPresenterMyProxyImpl$2$1_0);
_.execute_1 = function execute_37(){
  $onParentAfterUpdate(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $addNewParent(this$static, newParent){
  $add_15(this$static.providerParents.listWrapper, newParent);
  $flushNow(this$static.providerParents.listWrapper);
}

function $initializeTable_0(this$static){
  var cellEdit, colAcceptEmail, colEdit, colEmail, colFirstName, colHomePhone, colLastName, colMobile, colSMS, colTitle, colWorkPhone, selectionModel;
  colTitle = new ParentManagementView$1_0;
  $addColumn(this$static.tblParents, colTitle, 'Civilit\xE9');
  colLastName = new ParentManagementView$2_0;
  $addColumn(this$static.tblParents, colLastName, 'Nom');
  colFirstName = new ParentManagementView$3_0;
  $addColumn(this$static.tblParents, colFirstName, 'Pr\xE9nom');
  colEmail = new ParentManagementView$4_0;
  $addColumn(this$static.tblParents, colEmail, 'Email');
  colMobile = new ParentManagementView$5_0;
  $addColumn(this$static.tblParents, colMobile, 'Mobile');
  colHomePhone = new ParentManagementView$6_0;
  $addColumn(this$static.tblParents, colHomePhone, 'T\xE9l. Domicile');
  colWorkPhone = new ParentManagementView$7_0;
  $addColumn(this$static.tblParents, colWorkPhone, 'T\xE9l. Travail');
  colAcceptEmail = new ParentManagementView$8_0;
  $addColumn(this$static.tblParents, colAcceptEmail, 'Notif. Email');
  colSMS = new ParentManagementView$9_0;
  $addColumn(this$static.tblParents, colSMS, 'Notif. SMS');
  cellEdit = new ParentManagementView$10_0;
  colEdit = new ParentManagementView$11_0(cellEdit);
  $setFieldUpdater(colEdit, new ParentManagementView$12_0(this$static));
  $addColumn(this$static.tblParents, colEdit, '');
  selectionModel = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblParents, selectionModel);
  $addSelectionChangeHandler(selectionModel, new ParentManagementView$13_0(this$static, selectionModel));
  $addDataDisplay(this$static.providerParents, this$static.tblParents);
  $setDisplay_0(this$static.pagerParents, this$static.tblParents);
}

function $setParentData(this$static, parents){
  $clear_3(this$static.providerParents.listWrapper);
  $addAll(this$static.providerParents.listWrapper, parents);
  $flushNow(this$static.providerParents.listWrapper);
}

function $updateParent(this$static, updatedParent){
  $set_1(this$static.providerParents.listWrapper, this$static.selectedParentIndex, updatedParent);
  $flushNow(this$static.providerParents.listWrapper);
}

function ParentManagementView_0(){
  this.tblParents = new DataGrid_0;
  this.providerParents = new ListDataProvider_0;
  $initWidget_0(this, $build_f_HTMLPanel1_2(new ParentManagementView_BinderImpl$Widgets_0(this)));
}

defineSeed(994, 801, makeCastMap([Q$IsWidget, Q$ParentManagementPresenter$MyView, Q$ParentManagementView]), ParentManagementView_0);
_.pagerParents = null;
_.selectedParent = null;
_.selectedParentIndex = -1;
function ParentManagementView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(995, 472, makeCastMap([Q$HasCell, Q$Column]), ParentManagementView$1_0);
_.getValue = function getValue_12(object){
  return dynamicCast(object, Q$ParentProxy).getTitle();
}
;
function ParentManagementView$10_0(){
  ButtonCell_0.call(this);
}

defineSeed(996, 90, {}, ParentManagementView$10_0);
_.render_0 = function render_5(context, data, sb){
  $append_11(sb.sb, '<button type="button" class="gridButton" tabindex="-1">');
  !!data && ($append_11(sb.sb, data.html) , sb);
  $append_11(sb.sb, '<\/button>');
}
;
function ParentManagementView$11_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(997, 427, makeCastMap([Q$HasCell, Q$Column]), ParentManagementView$11_0);
_.getValue = function getValue_13(object){
  return dynamicCast(object, Q$ParentProxy) , 'Editer';
}
;
function $update_6(this$static, index, object){
  this$static.this$0.selectedParentIndex = index;
  $editParent(dynamicCast(this$static.this$0.uiHandlers, Q$ParentManagementUiHandlers), object);
}

function ParentManagementView$12_0(this$0){
  this.this$0 = this$0;
}

defineSeed(998, 1, {}, ParentManagementView$12_0);
_.update = function update_7(index, object, value){
  $update_6(this, index, dynamicCast(object, Q$ParentProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function ParentManagementView$13_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(999, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), ParentManagementView$13_0);
_.onSelectionChange = function onSelectionChange_1(event_0){
  this.this$0.selectedParent = dynamicCast($getSelectedObject(this.val$selectionModel), Q$ParentProxy);
  this.this$0.selectedParentIndex = $indexOf_0(this.this$0.providerParents.listWrapper, this.this$0.selectedParent);
}
;
_.this$0 = null;
_.val$selectionModel = null;
function ParentManagementView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(1000, 472, makeCastMap([Q$HasCell, Q$Column]), ParentManagementView$2_0);
_.getValue = function getValue_14(object){
  return dynamicCast(object, Q$ParentProxy).getLastName();
}
;
function ParentManagementView$3_0(){
  TextColumn_0.call(this);
}

defineSeed(1001, 472, makeCastMap([Q$HasCell, Q$Column]), ParentManagementView$3_0);
_.getValue = function getValue_15(object){
  return dynamicCast(object, Q$ParentProxy).getFirstName();
}
;
function ParentManagementView$4_0(){
  TextColumn_0.call(this);
}

defineSeed(1002, 472, makeCastMap([Q$HasCell, Q$Column]), ParentManagementView$4_0);
_.getValue = function getValue_16(object){
  return dynamicCast(object, Q$ParentProxy).geteMail();
}
;
function ParentManagementView$5_0(){
  TextColumn_0.call(this);
}

defineSeed(1003, 472, makeCastMap([Q$HasCell, Q$Column]), ParentManagementView$5_0);
_.getValue = function getValue_17(object){
  return dynamicCast(object, Q$ParentProxy).getPhoneMobile();
}
;
function ParentManagementView$6_0(){
  TextColumn_0.call(this);
}

defineSeed(1004, 472, makeCastMap([Q$HasCell, Q$Column]), ParentManagementView$6_0);
_.getValue = function getValue_18(object){
  return dynamicCast(object, Q$ParentProxy).getPhoneHome();
}
;
function ParentManagementView$7_0(){
  TextColumn_0.call(this);
}

defineSeed(1005, 472, makeCastMap([Q$HasCell, Q$Column]), ParentManagementView$7_0);
_.getValue = function getValue_19(object){
  return dynamicCast(object, Q$ParentProxy).getPhoneWork();
}
;
function ParentManagementView$8_0(){
  TextColumn_0.call(this);
}

defineSeed(1006, 472, makeCastMap([Q$HasCell, Q$Column]), ParentManagementView$8_0);
_.getValue = function getValue_20(object){
  return dynamicCast(object, Q$ParentProxy).isAcceptEmail()?'Oui':'Non';
}
;
function ParentManagementView$9_0(){
  TextColumn_0.call(this);
}

defineSeed(1007, 472, makeCastMap([Q$HasCell, Q$Column]), ParentManagementView$9_0);
_.getValue = function getValue_21(object){
  return dynamicCast(object, Q$ParentProxy).isAcceptSMS()?'Oui':'Non';
}
;
function ParentManagementView_BinderImpl_0(){
}

defineSeed(1008, 1, {}, ParentManagementView_BinderImpl_0);
function $build_f_HTMLPanel1_2(this$static){
  var attachRecord28, f_HTMLPanel1, f_Label2, f_VerticalPanel3, f_HorizontalPanel4, cmdAdd, tblParents;
  f_HTMLPanel1 = new HTMLPanel_0($html1_2(this$static.domId0, this$static.domId1).html);
  attachRecord28 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  $get_1(this$static.domId1Element);
  attachRecord28.origParent?$insertBefore(attachRecord28.origParent, attachRecord28.element, attachRecord28.origSibling):orphan(attachRecord28.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label2.directionalTextHelper, 'Responsables', false) , $updateHorizontalAlignment(f_Label2) , f_Label2), $get_1(this$static.domId0Element));
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel3 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel3, ALIGN_RIGHT) , $add_12(f_VerticalPanel3, (f_HorizontalPanel4 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel4, ALIGN_LEFT) , $add_10(f_HorizontalPanel4, (cmdAdd = new Button_0 , cmdAdd.element['className'] = 'buttonToolbar' , $setInnerText(cmdAdd.element, 'Rajouter un Responsable') , $addDomHandler(cmdAdd, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdAdd)) , f_HorizontalPanel4)) , $add_12(f_VerticalPanel3, (tblParents = this$static.owner.tblParents , tblParents.element.style['height'] = '550px' , tblParents.element.style['width'] = '100%' , $setVisibleRange(tblParents, new Range_1($getVisibleRange(tblParents.presenter).start, 15)) , tblParents)) , $add_12(f_VerticalPanel3, this$static.pagerParents) , $setCellHorizontalAlignment(f_VerticalPanel3, this$static.pagerParents, ALIGN_CENTER) , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3.table['cellSpacing'] = 5 , f_VerticalPanel3), $get_1(this$static.domId1Element));
  return f_HTMLPanel1;
}

function ParentManagementView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ParentManagementView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.pagerParents = new SimplePager_0;
  $setPage(this.pagerParents, 0);
  $setPageSize_0(this.pagerParents, 15);
  $setPageStart(this.pagerParents, 0);
  this.owner.pagerParents = this.pagerParents;
  this.domId0Element = new LazyDomElement_0(this.domId0);
  this.domId1Element = new LazyDomElement_0(this.domId1);
}

defineSeed(1009, 1, {}, ParentManagementView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.domId1 = null;
_.domId1Element = null;
_.owner = null;
_.pagerParents = null;
function ParentManagementView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1010, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ParentManagementView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_12(event_0){
  $showParentProfilePopup(dynamicCast(this.this$1.owner.uiHandlers, Q$ParentManagementUiHandlers));
}
;
_.this$1 = null;
function $html1_2(arg0, arg1){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span> <span id='";
  $append_11(sb, htmlEscape(arg1));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$form$parentmgt$ParentManagementPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$parentmgt$ParentManagementPresenter$_annotation$$none$$) {
    result = new ParentManagementPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$form$parentmgt$ParentManagementView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$sis$client$form$parentmgt$ParentManagementPresenter$MyProxy$_annotation$$none$$(this$static), $get_Key$type$com$lemania$sis$client$popup$parentprofile$ParentProfilePresenter$_annotation$$none$$($getFragment_com_lemania_sis_client_popup_parentprofile(this$static.injector)));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$form$parentmgt$ParentManagementPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$parentmgt$ParentManagementPresenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$sis$client$form$parentmgt$ParentManagementView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$parentmgt$ParentManagementView$_annotation$$none$$) {
    result = new ParentManagementView_0(new ParentManagementView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$form$parentmgt$ParentManagementView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$parentmgt$ParentManagementView$_annotation$$none$$;
}

defineSeed(1014, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_25(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$form$parentmgt$ParentManagementPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onParentAfterAdd_0(this$static, event_0){
  var parent_0, rc, rf, updatedUser;
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  parent_0 = event_0.addedParent;
  updatedUser = dynamicCast($create_1(rc, Lcom_lemania_sis_shared_user_UserProxy_2_classLit), Q$UserProxy);
  updatedUser.setFullName(parent_0.getLastName() + ' ' + parent_0.getFirstName());
  updatedUser.setActive(($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
  updatedUser.setAdmin(FALSE_1);
  updatedUser.setIsProf(FALSE_1);
  updatedUser.setIsStudent(FALSE_1);
  updatedUser.setIsParent(TRUE_1);
  updatedUser.setEmail(parent_0.geteMail());
  updatedUser.setUserName(parent_0.geteMail());
  updatedUser.setPassword($substring(toPowerOfTwoString_0(doubleToLongBits(Math.random())), 8));
  $fire($save_3(rc, updatedUser), new UserManagementPresenter$8_0);
}

function UserManagementPresenter$8_0(){
}

defineSeed(1115, 727, makeCastMap([Q$Receiver]), UserManagementPresenter$8_0);
_.onFailure_0 = function onFailure_54(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_54(response){
  throwClassCastExceptionUnlessNull(response);
  alert_0(($clinit_NotificationTypes() , "Code d'acc\xE8s cr\xE9\xE9 pour cet utilisateur."));
}
;
defineSeed(1116, 824, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ParentAfterAddEvent$ParentAfterAddHandler, Q$ProfessorAfterAddEvent$ProfessorAfterAddHandler, Q$StudentAfterAddEvent$StudentAfterAddHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler]));
_.onParentAfterAdd = function onParentAfterAdd_2(event_0){
  $getPresenter_0(this, new UserManagementPresenterMyProxyImpl$5_0(this.eventBus, event_0));
}
;
function $success_15(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new UserManagementPresenterMyProxyImpl$5$1_0(presenter, this$static.val$event));
}

function UserManagementPresenterMyProxyImpl$5_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1125, 809, {}, UserManagementPresenterMyProxyImpl$5_0);
_.success = function success_17(presenter){
  $success_15(this, dynamicCast(presenter, Q$UserManagementPresenter));
}
;
_.val$event = null;
function UserManagementPresenterMyProxyImpl$5$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(1126, 1, {}, UserManagementPresenterMyProxyImpl$5$1_0);
_.execute_1 = function execute_44(){
  $onParentAfterAdd_0(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $getFragment_com_lemania_sis_client_popup_parentprofile(this$static){
  !this$static.fieldFragment_com$lemania$sis$client$popup$parentprofile && (this$static.fieldFragment_com$lemania$sis$client$popup$parentprofile = new com_lemania_sis_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_38(this$static));
  return this$static.fieldFragment_com$lemania$sis$client$popup$parentprofile;
}

function $loadActiveStudents(this$static){
  var rc, rf, x;
  rc = (rf = new StudentRequestFactoryImpl_0 , $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus)) , new StudentRequestFactory_StudentRequestContextImpl_0(rf));
  $fire((x = new StudentRequestFactory_StudentRequestContextImpl$2X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new ParentProfilePresenter$2_0(this$static));
}

function $saveParent(this$static, title, firstName, lastName, eMail, phoneMobile, phoneHome, phoneWork, acceptSMS, acceptEmail, children){
  var childrenIds, pp, rc, rf, sp, sp$iterator, x;
  childrenIds = '';
  for (sp$iterator = new ListDataProvider$ListWrapper$WrappedListIterator_0(children); sp$iterator.i < sp$iterator.this$1.list.size_1();) {
    sp = dynamicCast($next_4(sp$iterator), Q$StudentProxy);
    childrenIds = childrenIds + '' + toString_6(sp.getId_0().value_0) + ' ';
  }
  rf = new ParentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ParentRequestFactory_ParentRequestContextImpl_0(rf);
  this$static.editExisting?(pp = dynamicCast($editProxy(rc, this$static.existingParent), Q$ParentProxy)):(pp = dynamicCast($create_1(rc, Lcom_lemania_sis_shared_parent_ParentProxy_2_classLit), Q$ParentProxy));
  pp.setChildIds(childrenIds);
  pp.setTitle(title);
  pp.setFirstName(firstName);
  pp.setLastName(lastName);
  pp.seteMail(eMail);
  pp.setPhoneHome(phoneHome);
  pp.setPhoneMobile(phoneMobile);
  pp.setPhoneWork(phoneWork);
  pp.setAcceptEmail(acceptEmail);
  pp.setAcceptSMS(acceptSMS);
  $fire((x = new ParentRequestFactory_ParentRequestContextImpl$5X_0(rc, pp) , $addInvocation(rc.state.dialect, x) , x), new ParentProfilePresenter$3_0(this$static));
}

function $showParentDetail(this$static, parent_0){
  var rc, rf, x;
  if (this$static.editExisting) {
    rf = new ParentRequestFactoryImpl_0;
    $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
    rc = new ParentRequestFactory_ParentRequestContextImpl_0(rf);
    $fire((x = new ParentRequestFactory_ParentRequestContextImpl$2X_0(rc, parent_0) , $addInvocation(rc.state.dialect, x) , x), new ParentProfilePresenter$1_0(this$static, parent_0));
  }
}

function ParentProfilePresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
  dynamicCast(this.view, Q$ParentProfilePresenter$MyView).setUiHandlers(this);
}

defineSeed(1157, 797, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ParentProfileUiHandlers]), ParentProfilePresenter_0);
_.onBind = function onBind_11(){
  $initializeUI_3(dynamicCast(this.view, Q$ParentProfilePresenter$MyView));
}
;
_.onReset = function onReset_10(){
}
;
_.editExisting = false;
_.existingParent = null;
function $onSuccess_42(this$static, response){
  $showParentDetails(dynamicCast(this$static.this$0.view, Q$ParentProfilePresenter$MyView), this$static.val$parent);
  $showChildren(dynamicCast(this$static.this$0.view, Q$ParentProfilePresenter$MyView), response);
}

function ParentProfilePresenter$1_0(this$0, val$parent){
  this.this$0 = this$0;
  this.val$parent = val$parent;
}

defineSeed(1158, 727, makeCastMap([Q$Receiver]), ParentProfilePresenter$1_0);
_.onFailure_0 = function onFailure_56(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_56(response){
  $onSuccess_42(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
_.val$parent = null;
function $onSuccess_43(this$static, response){
  $setStudentsData(dynamicCast(this$static.this$0.view, Q$ParentProfilePresenter$MyView), response);
}

function ParentProfilePresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1159, 727, makeCastMap([Q$Receiver]), ParentProfilePresenter$2_0);
_.onFailure_0 = function onFailure_57(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_57(response){
  $onSuccess_43(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_44(this$static, response){
  this$static.this$0.editExisting?$doFire(this$static.this$0.eventBus, new ParentAfterUpdateEvent_0(response), null):$doFire(this$static.this$0.eventBus, new ParentAfterAddEvent_0(response), null);
}

function ParentProfilePresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1160, 727, makeCastMap([Q$Receiver]), ParentProfilePresenter$3_0);
_.onFailure_0 = function onFailure_58(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_58(response){
  $onSuccess_44(this, dynamicCast(response, Q$ParentProxy));
}
;
_.this$0 = null;
function $initializeList(this$static){
  var i;
  $selectClear(this$static.lstTitle.element);
  $insertItem(this$static.lstTitle, 'Choisir');
  for (i = 0; i < ($clinit_Title() , titles).size_0; ++i)
    $insertItem_0(this$static.lstTitle, dynamicCast($get_9(titles, i), Q$String), dynamicCast($get_9(titles, i), Q$String), -1);
}

function $initializeUI_3(this$static){
  var colFirstName, colLastName, selectionModel, colFirstName_0, colLastName_0, selectionModel_0;
  colFirstName = new ParentProfileView$1_0;
  $addColumn(this$static.tblStudents, colFirstName, 'Nom');
  colLastName = new ParentProfileView$2_0;
  $addColumn(this$static.tblStudents, colLastName, 'Pr\xE9nom');
  selectionModel = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblStudents, selectionModel);
  $addSelectionChangeHandler(selectionModel, new ParentProfileView$3_0(this$static, selectionModel));
  $addDataDisplay(this$static.providerStudents, this$static.tblStudents);
  $setDisplay_0(this$static.pagerStudents, this$static.tblStudents);
  colFirstName_0 = new ParentProfileView$4_0;
  $addColumn(this$static.tblChildren, colFirstName_0, 'Nom');
  colLastName_0 = new ParentProfileView$5_0;
  $addColumn(this$static.tblChildren, colLastName_0, 'Pr\xE9nom');
  selectionModel_0 = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblChildren, selectionModel_0);
  $addSelectionChangeHandler(selectionModel_0, new ParentProfileView$6_0(this$static, selectionModel_0));
  $addDataDisplay(this$static.providerChildren, this$static.tblChildren);
  $initializeList(this$static);
}

function $onCmdAddClick_1(this$static){
  if (!this$static.selectedStudent) {
    alert_0(($clinit_NotificationTypes() , "Aucun \xE9l\xE8ve n'est s\xE9lectionn\xE9 !"));
    return;
  }
  $add_15(this$static.providerChildren.listWrapper, this$static.selectedStudent);
  $flushNow(this$static.providerChildren.listWrapper);
  $remove_12(this$static.providerStudents.listWrapper, $indexOf_0(this$static.providerStudents.listWrapper, this$static.selectedStudent));
  $flushNow(this$static.providerStudents.listWrapper);
}

function $onCmdRemoveClick(this$static){
  if (!this$static.selectedChild) {
    alert_0(($clinit_NotificationTypes() , "Aucun enfant n'est s\xE9lectionn\xE9 !"));
    return;
  }
  $add_15(this$static.providerStudents.listWrapper, this$static.selectedChild);
  $flushNow(this$static.providerStudents.listWrapper);
  $remove_12(this$static.providerChildren.listWrapper, $indexOf_0(this$static.providerChildren.listWrapper, this$static.selectedChild));
  $flushNow(this$static.providerChildren.listWrapper);
}

function $onCmdSaveClick_0(this$static){
  $saveParent(dynamicCast(this$static.uiHandlers, Q$ParentProfileUiHandlers), $getItemText(this$static.lstTitle, this$static.lstTitle.element.selectedIndex), $getPropertyString(this$static.txtFirstName.element, 'value'), $getPropertyString(this$static.txtLastName.element, 'value'), $getPropertyString(this$static.txtEmail.element, 'value'), $getPropertyString(this$static.txtMobile.element, 'value'), $getPropertyString(this$static.txtPhoneHome.element, 'value'), $getPropertyString(this$static.txtPhoneWork.element, 'value'), $getValue_0(this$static.chkAcceptSMS).value_0, $getValue_0(this$static.chkAcceptEmail).value_0, this$static.providerChildren.listWrapper);
}

function $resetUI(this$static){
  $setSelectedIndex_0(this$static.lstTitle, 0);
  $setText_1(this$static.txtFirstName, '');
  $setText_1(this$static.txtLastName, '');
  $setText_1(this$static.txtEmail, '');
  $setText_1(this$static.txtMobile, '');
  $setText_1(this$static.txtPhoneHome, '');
  $setText_1(this$static.txtPhoneWork, '');
  $setValue_0(this$static.chkAcceptSMS, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1));
  $setValue_0(this$static.chkAcceptEmail, FALSE_1);
  $clear_3(this$static.providerChildren.listWrapper);
  $flushNow(this$static.providerChildren.listWrapper);
}

function $setStudentsData(this$static, students){
  $clear_3(this$static.providerStudents.listWrapper);
  $addAll(this$static.providerStudents.listWrapper, students);
  $flushNow(this$static.providerStudents.listWrapper);
}

function $showChildren(this$static, children){
  $clear_3(this$static.providerChildren.listWrapper);
  $addAll(this$static.providerChildren.listWrapper, children);
  $flushNow(this$static.providerChildren.listWrapper);
}

function $showParentDetails(this$static, parent_0){
  selectItemByText(this$static.lstTitle, parent_0.getTitle());
  $setText_1(this$static.txtFirstName, parent_0.getFirstName());
  $setText_1(this$static.txtLastName, parent_0.getLastName());
  $setText_1(this$static.txtEmail, parent_0.geteMail());
  $setText_1(this$static.txtMobile, parent_0.getPhoneMobile());
  $setText_1(this$static.txtPhoneHome, parent_0.getPhoneHome());
  $setText_1(this$static.txtPhoneWork, parent_0.getPhoneWork());
  $setValue_0(this$static.chkAcceptSMS, ($clinit_Boolean() , parent_0.isAcceptSMS()?TRUE_1:FALSE_1));
  $setValue_0(this$static.chkAcceptEmail, parent_0.isAcceptEmail()?TRUE_1:FALSE_1);
}

function ParentProfileView_0(){
  this.tblStudents = new DataGrid_0;
  this.tblChildren = new DataGrid_0;
  this.providerStudents = new ListDataProvider_0;
  this.providerChildren = new ListDataProvider_0;
  $initWidget_0(this, $build_dialog(new ParentProfileView_BinderImpl$Widgets_0(this)));
}

defineSeed(1161, 795, makeCastMap([Q$IsWidget, Q$PopupView, Q$ParentProfilePresenter$MyView]), ParentProfileView_0);
_.chkAcceptEmail = null;
_.chkAcceptSMS = null;
_.lstTitle = null;
_.pagerStudents = null;
_.selectedChild = null;
_.selectedStudent = null;
_.txtEmail = null;
_.txtFirstName = null;
_.txtLastName = null;
_.txtMobile = null;
_.txtPhoneHome = null;
_.txtPhoneWork = null;
function ParentProfileView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1162, 472, makeCastMap([Q$HasCell, Q$Column]), ParentProfileView$1_0);
_.getValue = function getValue_40(object){
  return dynamicCast(object, Q$StudentProxy).getLastName();
}
;
function ParentProfileView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(1163, 472, makeCastMap([Q$HasCell, Q$Column]), ParentProfileView$2_0);
_.getValue = function getValue_41(object){
  return dynamicCast(object, Q$StudentProxy).getFirstName();
}
;
function ParentProfileView$3_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1164, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), ParentProfileView$3_0);
_.onSelectionChange = function onSelectionChange_2(event_0){
  this.this$0.selectedStudent = dynamicCast($getSelectedObject(this.val$selectionModel), Q$StudentProxy);
}
;
_.this$0 = null;
_.val$selectionModel = null;
function ParentProfileView$4_0(){
  TextColumn_0.call(this);
}

defineSeed(1165, 472, makeCastMap([Q$HasCell, Q$Column]), ParentProfileView$4_0);
_.getValue = function getValue_42(object){
  return dynamicCast(object, Q$StudentProxy).getLastName();
}
;
function ParentProfileView$5_0(){
  TextColumn_0.call(this);
}

defineSeed(1166, 472, makeCastMap([Q$HasCell, Q$Column]), ParentProfileView$5_0);
_.getValue = function getValue_43(object){
  return dynamicCast(object, Q$StudentProxy).getFirstName();
}
;
function ParentProfileView$6_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1167, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), ParentProfileView$6_0);
_.onSelectionChange = function onSelectionChange_3(event_0){
  this.this$0.selectedChild = dynamicCast($getSelectedObject(this.val$selectionModel), Q$StudentProxy);
}
;
_.this$0 = null;
_.val$selectionModel = null;
function ParentProfileView_BinderImpl_0(){
}

defineSeed(1168, 1, {}, ParentProfileView_BinderImpl_0);
function $build_dialog(this$static){
  var dialog, f_VerticalPanel1, cmdClose, sb, f_HorizontalPanel2, f_VerticalPanel3, f_VerticalPanel15, f_Label20, cmdSave, f_Label4, f_Grid5, f_Label6, lstTitle, f_Label7, txtLastName, f_Label8, txtFirstName, f_Label9, txtEmail, f_Label10, txtMobile, f_Label11, txtPhoneHome, f_Label12, txtPhoneWork, f_Label13, chkAcceptEmail, f_Label14, chkAcceptSMS, f_Label16;
  dialog = new DialogBox_0(false);
  $setWidget_2(dialog, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_12(f_VerticalPanel1, (cmdClose = new Button_0 , $setHTML(cmdClose, (sb = new StringBuilder_0 , sb.impl.string += 'X' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , cmdClose.element['className'] = 'popupCloseButton' , $addDomHandler(cmdClose, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdClose)) , $add_12(f_VerticalPanel1, (f_HorizontalPanel2 = new HorizontalPanel_0 , $add_10(f_HorizontalPanel2, (f_VerticalPanel3 = new VerticalPanel_0 , $add_12(f_VerticalPanel3, (f_Label4 = new Label_0 , $setTextOrHtml(f_Label4.directionalTextHelper, 'Profile du responsable', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , $add_12(f_VerticalPanel3, (f_Grid5 = new Grid_0 , $resizeColumns(f_Grid5, 2) , $resizeRows(f_Grid5, 9) , $setWidget_3(f_Grid5, 0, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Civilit\xE9', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_3(f_Grid5, 0, 1, (lstTitle = new ListBox_0 , this$static.owner.lstTitle = lstTitle , lstTitle)) , $setWidget_3(f_Grid5, 1, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Nom', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_3(f_Grid5, 1, 1, (txtLastName = new TextBox_0 , this$static.owner.txtLastName = txtLastName , txtLastName)) , $setWidget_3(f_Grid5, 2, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Pr\xE9nom', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_3(f_Grid5, 2, 1, (txtFirstName = new TextBox_0 , this$static.owner.txtFirstName = txtFirstName , txtFirstName)) , $setWidget_3(f_Grid5, 3, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Email', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_3(f_Grid5, 3, 1, (txtEmail = new TextBox_0 , this$static.owner.txtEmail = txtEmail , txtEmail)) , $setWidget_3(f_Grid5, 4, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Mobile', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_3(f_Grid5, 4, 1, (txtMobile = new TextBox_0 , this$static.owner.txtMobile = txtMobile , txtMobile)) , $setWidget_3(f_Grid5, 5, 0, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'T\xE9l\xE9phone \xE0 domicile', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_3(f_Grid5, 5, 1, (txtPhoneHome = new TextBox_0 , this$static.owner.txtPhoneHome = txtPhoneHome , txtPhoneHome)) , $setWidget_3(f_Grid5, 6, 0, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'T\xE9l\xE9phone au travail', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_3(f_Grid5, 6, 1, (txtPhoneWork = new TextBox_0 , this$static.owner.txtPhoneWork = txtPhoneWork , txtPhoneWork)) , $setWidget_3(f_Grid5, 7, 0, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'Notifications', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_3(f_Grid5, 7, 1, (chkAcceptEmail = new CheckBox_0 , $setTextOrHtml(chkAcceptEmail.directionalTextHelper, 'Email', false) , this$static.owner.chkAcceptEmail = chkAcceptEmail , chkAcceptEmail)) , $setWidget_3(f_Grid5, 8, 0, (f_Label14 = new Label_0 , f_Label14.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label14.directionalTextHelper, '-', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_3(f_Grid5, 8, 1, (chkAcceptSMS = new CheckBox_0 , $setTextOrHtml(chkAcceptSMS.directionalTextHelper, 'SMS', false) , this$static.owner.chkAcceptSMS = chkAcceptSMS , chkAcceptSMS)) , f_Grid5.element.style['width'] = '100%' , f_Grid5)) , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3.table['cellSpacing'] = 5 , f_VerticalPanel3)) , $add_10(f_HorizontalPanel2, (f_VerticalPanel15 = new VerticalPanel_0 , $add_12(f_VerticalPanel15, (f_Label16 = new Label_0 , $setTextOrHtml(f_Label16.directionalTextHelper, "Acc\xE8s \xE0 l'espace parent des \xE9l\xE8ves", false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $add_12(f_VerticalPanel15, this$static.f_HorizontalPanel17) , $setCellWidth(f_VerticalPanel15, this$static.f_HorizontalPanel17) , f_VerticalPanel15.element.style['width'] = '100%' , f_VerticalPanel15.table['cellSpacing'] = 5 , f_VerticalPanel15)) , f_HorizontalPanel2.element.style['width'] = '100%' , f_HorizontalPanel2.table['cellSpacing'] = 5 , f_HorizontalPanel2)) , $add_12(f_VerticalPanel1, (f_Label20 = new Label_0 , f_Label20.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label20.directionalTextHelper, '-', false) , $updateHorizontalAlignment(f_Label20) , f_Label20)) , $add_12(f_VerticalPanel1, (cmdSave = new Button_0 , $setInnerText(cmdSave.element, 'Valider') , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , cmdSave)) , f_VerticalPanel1.element.style['height'] = '100%' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  $setText_0(dialog.caption, 'Responsable');
  $setHeight_0(dialog, '');
  $setWidth_0(dialog, '900px');
  return dialog;
}

function ParentProfileView_BinderImpl$Widgets_0(owner){
  var style, tblChildren, f_VerticalPanel18, f_VerticalPanel19, cmdAdd, cmdRemove, tblStudents;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ParentProfileView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ParentProfileView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ParentProfileView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ParentProfileView_BinderImpl$Widgets$4_0(this);
  this.owner = owner;
  style = (new ParentProfileView_BinderImpl_GenBundle_default_InlineClientBundleGenerator_0 , $clinit_ParentProfileView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_4);
  $ensureInjected_8(style);
  this.pagerStudents = new SimplePager_0;
  $setPage(this.pagerStudents, 0);
  $setPageSize_0(this.pagerStudents, 10);
  $setPageStart(this.pagerStudents, 0);
  this.owner.pagerStudents = this.pagerStudents;
  this.f_HorizontalPanel17 = new HorizontalPanel_0;
  $setVerticalAlignment(this.f_HorizontalPanel17, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  $add_10(this.f_HorizontalPanel17, (tblChildren = this.owner.tblChildren , tblChildren.element.style['height'] = '330px' , tblChildren.element.style['width'] = '270px' , tblChildren));
  $add_10(this.f_HorizontalPanel17, (f_VerticalPanel18 = new VerticalPanel_0 , $add_12(f_VerticalPanel18, (cmdAdd = new Button_0 , $setInnerText(cmdAdd.element, '<<') , $addDomHandler(cmdAdd, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdAdd)) , $add_12(f_VerticalPanel18, (cmdRemove = new Button_0 , $setInnerText(cmdRemove.element, '>>') , $addDomHandler(cmdRemove, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_0) , cmdRemove)) , f_VerticalPanel18.table['cellSpacing'] = 5 , f_VerticalPanel18));
  $add_10(this.f_HorizontalPanel17, (f_VerticalPanel19 = new VerticalPanel_0 , $add_12(f_VerticalPanel19, (tblStudents = this.owner.tblStudents , tblStudents.element.style['height'] = '300px' , tblStudents.element.style['width'] = '270px' , $setVisibleRange(tblStudents, new Range_1($getVisibleRange(tblStudents.presenter).start, 10)) , tblStudents)) , $add_12(f_VerticalPanel19, this.pagerStudents) , $setCellHorizontalAlignment(f_VerticalPanel19, this.pagerStudents, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , f_VerticalPanel19));
  $setWidth(this.f_HorizontalPanel17, '100%');
}

defineSeed(1169, 1, {}, ParentProfileView_BinderImpl$Widgets_0);
_.f_HorizontalPanel17 = null;
_.owner = null;
_.pagerStudents = null;
function ParentProfileView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1170, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ParentProfileView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_16(event_0){
  dynamicCast(this.this$1.owner.widget_0, Q$PopupPanel).hide();
}
;
_.this$1 = null;
function ParentProfileView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1171, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ParentProfileView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_17(event_0){
  $onCmdSaveClick_0(this.this$1.owner);
}
;
_.this$1 = null;
function ParentProfileView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1172, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ParentProfileView_BinderImpl$Widgets$3_0);
_.onClick = function onClick_18(event_0){
  $onCmdAddClick_1(this.this$1.owner);
}
;
_.this$1 = null;
function ParentProfileView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1173, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ParentProfileView_BinderImpl$Widgets$4_0);
_.onClick = function onClick_19(event_0){
  $onCmdRemoveClick(this.this$1.owner);
}
;
_.this$1 = null;
function ParentProfileView_BinderImpl_GenBundle_default_InlineClientBundleGenerator_0(){
}

defineSeed(1174, 1, {}, ParentProfileView_BinderImpl_GenBundle_default_InlineClientBundleGenerator_0);
var style_4 = null;
function $ensureInjected_8(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '');
    schedule();
    return true;
  }
  return false;
}

function ParentProfileView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(1175, 1, {}, ParentProfileView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1_0);
_.injected = false;
function $clinit_ParentProfileView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_ParentProfileView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_4 = new ParentProfileView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1_0;
}

function $com$lemania$sis$client$popup$parentprofile$ParentProfileView_com$lemania$sis$client$popup$parentprofile$ParentProfileView_methodInjection(){
  return new ParentProfileView_0;
}

function $get_Key$type$com$lemania$sis$client$popup$parentprofile$ParentProfilePresenter$_annotation$$none$$(this$static){
  var result;
  result = new ParentProfilePresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $com$lemania$sis$client$popup$parentprofile$ParentProfileView_com$lemania$sis$client$popup$parentprofile$ParentProfileView_methodInjection((new ParentProfileView_BinderImpl_0 , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)))));
  $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
  return result;
}

function com_lemania_sis_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_38(injector){
  this.injector = injector;
}

defineSeed(1178, 1, {}, com_lemania_sis_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_38);
_.injector = null;
function $$init_29(this$static){
  this$static.shim = new ParentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ParentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_29(this);
}

function ParentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_29(this);
}

defineSeed(1880, 688, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ParentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, ParentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_27(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_27(){
  return new ParentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_35(){
  return Lcom_lemania_sis_shared_parent_ParentProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_26(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = ($clinit_Boolean() , $isAcceptEmail(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'acceptEmail'), Z_classLit);
  visitor.visitValueProperty('acceptEmail', value, propertyContext);
  value = $isAcceptSMS(as)?TRUE_1:FALSE_1;
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'acceptSMS'), Z_classLit);
  visitor.visitValueProperty('acceptSMS', value, propertyContext);
  value = $getId_19(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getChildIds(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'childIds'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('childIds', value, propertyContext);
  value = $getFirstName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'firstName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('firstName', value, propertyContext);
  value = $getLastName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'lastName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('lastName', value, propertyContext);
  value = $getPhoneHome(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'phoneHome'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('phoneHome', value, propertyContext);
  value = $getPhoneMobile(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'phoneMobile'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('phoneMobile', value, propertyContext);
  value = $getPhoneWork(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'phoneWork'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('phoneWork', value, propertyContext);
  value = $getTitle(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'title'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('title', value, propertyContext);
  value = $geteMail(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'eMail'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('eMail', value, propertyContext);
}
;
function $getChildIds(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ParentProxy).getChildIds();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getFirstName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ParentProxy).getFirstName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getId_19(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ParentProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getLastName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ParentProxy).getLastName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getPhoneHome(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ParentProxy).getPhoneHome();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getPhoneMobile(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ParentProxy).getPhoneMobile();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getPhoneWork(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ParentProxy).getPhoneWork();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getTitle(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ParentProxy).getTitle();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $geteMail(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ParentProxy).geteMail();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $isAcceptEmail(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ParentProxy).isAcceptEmail();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Boolean() , toReturn?TRUE_1:FALSE_1)), Q$Boolean).value_0;
  return toReturn;
}

function $isAcceptSMS(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ParentProxy).isAcceptSMS();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Boolean() , toReturn?TRUE_1:FALSE_1)), Q$Boolean).value_0;
  return toReturn;
}

function ParentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1881, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ParentProxy]), ParentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_66(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ParentProxy).equals$(o);
}
;
_.getChildIds = function getChildIds(){
  return $getChildIds(this);
}
;
_.getFirstName = function getFirstName(){
  return $getFirstName(this);
}
;
_.getId_0 = function getId_35(){
  return $getId_19(this);
}
;
_.getLastName = function getLastName(){
  return $getLastName(this);
}
;
_.getPhoneHome = function getPhoneHome(){
  return $getPhoneHome(this);
}
;
_.getPhoneMobile = function getPhoneMobile(){
  return $getPhoneMobile(this);
}
;
_.getPhoneWork = function getPhoneWork(){
  return $getPhoneWork(this);
}
;
_.getTitle = function getTitle(){
  return $getTitle(this);
}
;
_.geteMail = function geteMail(){
  return $geteMail(this);
}
;
_.hashCode$ = function hashCode_66(){
  return dynamicCast($getWrapped(this.this$0), Q$ParentProxy).hashCode$();
}
;
_.isAcceptEmail = function isAcceptEmail(){
  return $isAcceptEmail(this);
}
;
_.isAcceptSMS = function isAcceptSMS(){
  return $isAcceptSMS(this);
}
;
_.setAcceptEmail = function setAcceptEmail(acceptEmail){
  dynamicCast($getWrapped(this.this$0), Q$ParentProxy).setAcceptEmail(acceptEmail);
  $clinit_Boolean();
}
;
_.setAcceptSMS = function setAcceptSMS(acceptSMS){
  dynamicCast($getWrapped(this.this$0), Q$ParentProxy).setAcceptSMS(acceptSMS);
  $clinit_Boolean();
}
;
_.setChildIds = function setChildIds(childIds){
  dynamicCast($getWrapped(this.this$0), Q$ParentProxy).setChildIds(childIds);
}
;
_.setFirstName = function setFirstName(firstName){
  dynamicCast($getWrapped(this.this$0), Q$ParentProxy).setFirstName(firstName);
}
;
_.setLastName = function setLastName(lastName){
  dynamicCast($getWrapped(this.this$0), Q$ParentProxy).setLastName(lastName);
}
;
_.setPhoneHome = function setPhoneHome(phoneHome){
  dynamicCast($getWrapped(this.this$0), Q$ParentProxy).setPhoneHome(phoneHome);
}
;
_.setPhoneMobile = function setPhoneMobile(phoneMobile){
  dynamicCast($getWrapped(this.this$0), Q$ParentProxy).setPhoneMobile(phoneMobile);
}
;
_.setPhoneWork = function setPhoneWork(phoneWork){
  dynamicCast($getWrapped(this.this$0), Q$ParentProxy).setPhoneWork(phoneWork);
}
;
_.setTitle = function setTitle(title){
  dynamicCast($getWrapped(this.this$0), Q$ParentProxy).setTitle(title);
}
;
_.seteMail = function seteMail(eMail){
  dynamicCast($getWrapped(this.this$0), Q$ParentProxy).seteMail(eMail);
}
;
_.toString$ = function toString_44(){
  return dynamicCast($getWrapped(this.this$0), Q$ParentProxy).toString$();
}
;
_.this$0 = null;
function ParentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1882, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ParentProxy]), ParentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_67(other){
  return equals_14(this.this$0, other);
}
;
_.getChildIds = function getChildIds_0(){
  return dynamicCast($getOrReify(this.this$0, 'childIds'), Q$String);
}
;
_.getFirstName = function getFirstName_0(){
  return dynamicCast($getOrReify(this.this$0, 'firstName'), Q$String);
}
;
_.getId_0 = function getId_36(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getLastName = function getLastName_0(){
  return dynamicCast($getOrReify(this.this$0, 'lastName'), Q$String);
}
;
_.getPhoneHome = function getPhoneHome_0(){
  return dynamicCast($getOrReify(this.this$0, 'phoneHome'), Q$String);
}
;
_.getPhoneMobile = function getPhoneMobile_0(){
  return dynamicCast($getOrReify(this.this$0, 'phoneMobile'), Q$String);
}
;
_.getPhoneWork = function getPhoneWork_0(){
  return dynamicCast($getOrReify(this.this$0, 'phoneWork'), Q$String);
}
;
_.getTitle = function getTitle_0(){
  return dynamicCast($getOrReify(this.this$0, 'title'), Q$String);
}
;
_.geteMail = function geteMail_0(){
  return dynamicCast($getOrReify(this.this$0, 'eMail'), Q$String);
}
;
_.hashCode$ = function hashCode_67(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.isAcceptEmail = function isAcceptEmail_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'acceptEmail'), Q$Boolean);
  return !!toReturn && toReturn.value_0;
}
;
_.isAcceptSMS = function isAcceptSMS_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'acceptSMS'), Q$Boolean);
  return !!toReturn && toReturn.value_0;
}
;
_.setAcceptEmail = function setAcceptEmail_0(acceptEmail){
  $setProperty(this.this$0, 'acceptEmail', ($clinit_Boolean() , acceptEmail?TRUE_1:FALSE_1));
}
;
_.setAcceptSMS = function setAcceptSMS_0(acceptSMS){
  $setProperty(this.this$0, 'acceptSMS', ($clinit_Boolean() , acceptSMS?TRUE_1:FALSE_1));
}
;
_.setChildIds = function setChildIds_0(childIds){
  $setProperty(this.this$0, 'childIds', childIds);
}
;
_.setFirstName = function setFirstName_0(firstName){
  $setProperty(this.this$0, 'firstName', firstName);
}
;
_.setLastName = function setLastName_0(lastName){
  $setProperty(this.this$0, 'lastName', lastName);
}
;
_.setPhoneHome = function setPhoneHome_0(phoneHome){
  $setProperty(this.this$0, 'phoneHome', phoneHome);
}
;
_.setPhoneMobile = function setPhoneMobile_0(phoneMobile){
  $setProperty(this.this$0, 'phoneMobile', phoneMobile);
}
;
_.setPhoneWork = function setPhoneWork_0(phoneWork){
  $setProperty(this.this$0, 'phoneWork', phoneWork);
}
;
_.setTitle = function setTitle_0(title){
  $setProperty(this.this$0, 'title', title);
}
;
_.seteMail = function seteMail_0(eMail){
  $setProperty(this.this$0, 'eMail', eMail);
}
;
_.this$0 = null;
function $clinit_ParentRequestFactoryImpl(){
  $clinit_ParentRequestFactoryImpl = nullMethod;
  tokensToTypes_2 = new HashMap_0;
  typesToTokens_2 = new HashMap_0;
  entityProxyTypes_2 = new HashSet_0;
  valueProxyTypes_2 = new HashSet_0;
  tokensToTypes_2.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_2.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_21(entityProxyTypes_2, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_2.put('wqGmS1zH$Ap06saQIbP$2CCkXdI=', Lcom_lemania_sis_shared_parent_ParentProxy_2_classLit);
  typesToTokens_2.put(Lcom_lemania_sis_shared_parent_ParentProxy_2_classLit, 'wqGmS1zH$Ap06saQIbP$2CCkXdI=');
  $add_21(entityProxyTypes_2, Lcom_lemania_sis_shared_parent_ParentProxy_2_classLit);
  tokensToTypes_2.put('ilSRScSO8AM__5_eu$efLUKOWGY=', Lcom_lemania_sis_shared_student_StudentProxy_2_classLit);
  typesToTokens_2.put(Lcom_lemania_sis_shared_student_StudentProxy_2_classLit, 'ilSRScSO8AM__5_eu$efLUKOWGY=');
  $add_21(entityProxyTypes_2, Lcom_lemania_sis_shared_student_StudentProxy_2_classLit);
}

function ParentRequestFactoryImpl_0(){
  $clinit_ParentRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1883, 722, {}, ParentRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_2(){
  return 'com.lemania.sis.shared.parent.ParentRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_2(typeToken){
  return dynamicCast(tokensToTypes_2.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_6(type){
  return dynamicCast(typesToTokens_2.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_3(type){
  return $contains_1(entityProxyTypes_2, type);
}
;
_.isValueType = function isValueType_3(type){
  return $contains_1(valueProxyTypes_2, type);
}
;
var entityProxyTypes_2, tokensToTypes_2, typesToTokens_2, valueProxyTypes_2;
function ParentRequestFactory_ParentRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1884, 732, makeCastMap([Q$AbstractRequestContext]), ParentRequestFactory_ParentRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_2(){
  return !FACTORY_3 && (FACTORY_3 = new ParentRequestFactory_ParentRequestContextImpl_FactoryImpl_0) , FACTORY_3;
}
;
var FACTORY_3 = null;
function ParentRequestFactory_ParentRequestContextImpl$1X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1885, 731, makeCastMap([Q$AbstractRequest]), ParentRequestFactory_ParentRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_17(){
  return new RequestData_0('EdXM2XST75IJAqtolLnMoIRpH$s=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_parent_ParentProxy_2_classLit);
}
;
function ParentRequestFactory_ParentRequestContextImpl$2X_0(this$0, val$parent){
  this.val$parent = val$parent;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1886, 731, makeCastMap([Q$AbstractRequest]), ParentRequestFactory_ParentRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_18(){
  return new RequestData_0('2pTZy49tvYjIc82cYh1enno5EMo=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$parent]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_student_StudentProxy_2_classLit);
}
;
_.val$parent = null;
function ParentRequestFactory_ParentRequestContextImpl$5X_0(this$0, val$parent){
  this.val$parent = val$parent;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1887, 731, makeCastMap([Q$AbstractRequest]), ParentRequestFactory_ParentRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_19(){
  return new RequestData_0('XeuKe0IsLGALmV_jDm2oey521xI=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$parent]), this.propertyRefs, Lcom_lemania_sis_shared_parent_ParentProxy_2_classLit, null);
}
;
_.val$parent = null;
function $getConstructors_com_lemania_sis_shared_parent_ParentProxy(){
  return [function(factory){
    return new ParentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new ParentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_lemania_sis_shared_student_StudentProxy(){
  return [function(factory){
    return new StudentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new StudentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function ParentRequestFactory_ParentRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1888, 660, makeCastMap([Q$EnumMap]), ParentRequestFactory_ParentRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_3(map){
  $add_16(map, Lcom_lemania_sis_shared_parent_ParentProxy_2_classLit, $getConstructors_com_lemania_sis_shared_parent_ParentProxy());
  $add_16(map, Lcom_lemania_sis_shared_student_StudentProxy_2_classLit, $getConstructors_com_lemania_sis_shared_student_StudentProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_3(){
}
;
function StudentRequestFactory_StudentRequestContextImpl$2X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(2031, 731, makeCastMap([Q$AbstractRequest]), StudentRequestFactory_StudentRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_92(){
  return new RequestData_0('TQU0sJESTIAtY0PybXWRO9JlTfo=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_student_StudentProxy_2_classLit);
}
;
var Lcom_lemania_sis_client_form_parentmgt_ParentManagementPresenter_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementPresenter', 986), Lcom_lemania_sis_client_form_parentmgt_ParentManagementPresenter$1_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementPresenter$1', 987), Lcom_lemania_sis_client_event_ParentAfterAddEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'ParentAfterAddEvent', 865), Lcom_lemania_sis_client_event_ParentAfterUpdateEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'ParentAfterUpdateEvent', 866), Lcom_lemania_sis_client_form_usermgt_UserManagementPresenter$8_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementPresenter$8', 1115), Lcom_lemania_sis_client_popup_parentprofile_com_1lemania_1sis_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'com_lemania_sis_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 1178), Lcom_lemania_sis_client_form_parentmgt_ParentManagementPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementPresenterMyProxyImpl$1', 989), Lcom_lemania_sis_client_form_parentmgt_ParentManagementPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementPresenterMyProxyImpl$1$1', 990), Lcom_lemania_sis_client_form_parentmgt_ParentManagementPresenterMyProxyImpl$2_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementPresenterMyProxyImpl$2', 991), Lcom_lemania_sis_client_form_parentmgt_ParentManagementPresenterMyProxyImpl$2$1_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementPresenterMyProxyImpl$2$1', 992), Lcom_lemania_sis_client_form_usermgt_UserManagementPresenterMyProxyImpl$5_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementPresenterMyProxyImpl$5', 1125), Lcom_lemania_sis_client_form_usermgt_UserManagementPresenterMyProxyImpl$5$1_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementPresenterMyProxyImpl$5$1', 1126), Lcom_lemania_sis_client_form_parentmgt_ParentManagementView_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementView', 994), Lcom_lemania_sis_client_form_parentmgt_ParentManagementView$1_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementView$1', 995), Lcom_lemania_sis_client_form_parentmgt_ParentManagementView$2_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementView$2', 1000), Lcom_lemania_sis_client_form_parentmgt_ParentManagementView$3_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementView$3', 1001), Lcom_lemania_sis_client_form_parentmgt_ParentManagementView$4_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementView$4', 1002), Lcom_lemania_sis_client_form_parentmgt_ParentManagementView$5_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementView$5', 1003), Lcom_lemania_sis_client_form_parentmgt_ParentManagementView$6_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementView$6', 1004), Lcom_lemania_sis_client_form_parentmgt_ParentManagementView$7_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementView$7', 1005), Lcom_lemania_sis_client_form_parentmgt_ParentManagementView$8_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementView$8', 1006), Lcom_lemania_sis_client_form_parentmgt_ParentManagementView$9_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementView$9', 1007), Lcom_lemania_sis_client_form_parentmgt_ParentManagementView$10_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementView$10', 996), Lcom_lemania_sis_client_form_parentmgt_ParentManagementView$11_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementView$11', 997), Lcom_lemania_sis_client_form_parentmgt_ParentManagementView$12_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementView$12', 998), Lcom_lemania_sis_client_form_parentmgt_ParentManagementView$13_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementView$13', 999), Lcom_lemania_sis_client_popup_parentprofile_ParentProfilePresenter_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfilePresenter', 1157), Lcom_lemania_sis_shared_parent_ParentProxy_2_classLit = createForInterface('com.lemania.sis.shared.parent.', 'ParentProxy'), Lcom_lemania_sis_client_popup_parentprofile_ParentProfilePresenter$1_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfilePresenter$1', 1158), Lcom_lemania_sis_client_popup_parentprofile_ParentProfilePresenter$2_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfilePresenter$2', 1159), Lcom_lemania_sis_client_popup_parentprofile_ParentProfilePresenter$3_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfilePresenter$3', 1160), Lcom_lemania_sis_client_popup_parentprofile_ParentProfileView_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfileView', 1161), Lcom_lemania_sis_client_popup_parentprofile_ParentProfileView$1_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfileView$1', 1162), Lcom_lemania_sis_client_popup_parentprofile_ParentProfileView$2_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfileView$2', 1163), Lcom_lemania_sis_client_popup_parentprofile_ParentProfileView$3_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfileView$3', 1164), Lcom_lemania_sis_client_popup_parentprofile_ParentProfileView$4_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfileView$4', 1165), Lcom_lemania_sis_client_popup_parentprofile_ParentProfileView$5_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfileView$5', 1166), Lcom_lemania_sis_client_popup_parentprofile_ParentProfileView$6_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfileView$6', 1167), Lcom_lemania_sis_client_form_parentmgt_ParentManagementView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementView_BinderImpl', 1008), Lcom_lemania_sis_client_form_parentmgt_ParentManagementView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementView_BinderImpl$Widgets', 1009), Lcom_lemania_sis_client_form_parentmgt_ParentManagementView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.form.parentmgt.', 'ParentManagementView_BinderImpl$Widgets$1', 1010), Lcom_lemania_sis_client_popup_parentprofile_ParentProfileView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfileView_BinderImpl', 1168), Lcom_lemania_sis_client_popup_parentprofile_ParentProfileView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfileView_BinderImpl$Widgets', 1169), Lcom_lemania_sis_client_popup_parentprofile_ParentProfileView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfileView_BinderImpl$Widgets$1', 1170), Lcom_lemania_sis_client_popup_parentprofile_ParentProfileView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfileView_BinderImpl$Widgets$2', 1171), Lcom_lemania_sis_client_popup_parentprofile_ParentProfileView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfileView_BinderImpl$Widgets$3', 1172), Lcom_lemania_sis_client_popup_parentprofile_ParentProfileView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfileView_BinderImpl$Widgets$4', 1173), Lcom_lemania_sis_shared_parent_ParentRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.parent.', 'ParentRequestFactoryImpl', 1883), Lcom_lemania_sis_client_popup_parentprofile_ParentProfileView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfileView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1174), Lcom_lemania_sis_client_popup_parentprofile_ParentProfileView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.lemania.sis.client.popup.parentprofile.', 'ParentProfileView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1', 1175), Lcom_lemania_sis_shared_parent_ParentRequestFactory_1ParentRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.parent.', 'ParentRequestFactory_ParentRequestContextImpl', 1884), Lcom_lemania_sis_shared_parent_ParentRequestFactory_1ParentRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.parent.', 'ParentRequestFactory_ParentRequestContextImpl$1X', 1885), Lcom_lemania_sis_shared_parent_ParentRequestFactory_1ParentRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.parent.', 'ParentRequestFactory_ParentRequestContextImpl$2X', 1886), Lcom_lemania_sis_shared_parent_ParentRequestFactory_1ParentRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.parent.', 'ParentRequestFactory_ParentRequestContextImpl$5X', 1887), Lcom_lemania_sis_shared_student_StudentRequestFactory_1StudentRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.student.', 'StudentRequestFactory_StudentRequestContextImpl$2X', 2031), Lcom_lemania_sis_shared_parent_ParentRequestFactory_1ParentRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.parent.', 'ParentRequestFactory_ParentRequestContextImpl_FactoryImpl', 1888), Lcom_lemania_sis_shared_parent_ParentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.parent.', 'ParentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1880), Lcom_lemania_sis_shared_parent_ParentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.parent.', 'ParentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1881), Lcom_lemania_sis_shared_parent_ParentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.parent.', 'ParentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1882);
$entry(onLoad)(29);
