function $setTableLayoutFixed(this$static){
  if (!this$static.colGroupEnabled) {
    throw new IllegalStateException_1('Cannot set table to fixed layout when colgroup is disabled');
  }
  this$static.table.style['tableLayout'] = ($clinit_Style$TableLayout() , 'fixed');
}

function $setGlassEnabled(this$static){
  this$static.isGlassEnabled = true;
  if (!this$static.glass) {
    this$static.glass = $doc.createElement('div');
    this$static.glass.className = 'gwt-PopupPanelGlass';
    this$static.glass.style['position'] = ($clinit_Style$Position() , 'absolute');
    this$static.glass.style['left'] = 0 + ($clinit_Style$Unit() , 'px');
    this$static.glass.style['top'] = '0px';
  }
}

function $setHTML_0(this$static, html){
  $setHTML_1(this$static.caption, ($clinit_SafeHtmlUtils() , (new SafeHtmlString_0(html)).html));
}

function PeriodItemPopupCloseEvent_0(){
  $clinit_PeriodItemPopupCloseEvent();
}

defineSeed(863, 272, {}, PeriodItemPopupCloseEvent_0);
_.dispatch_0 = function dispatch_53(handler){
  dynamicCast(handler, Q$PeriodItemPopupCloseEvent$PeriodItemPopupCloseHandler).onPeriodItemPopupClose(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_54(){
  return TYPE_53;
}
;
function $addPeriod(this$static, classId, description, order, note, isActive){
  var rc, rf, x;
  if ($equals_6(classId, '')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' Classe');
    return;
  }
  if ($equals_6(description, '')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' Decsription');
    return;
  }
  rf = new PeriodRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new PeriodRequestFactory_PeriodRequestContextImpl_0(rf);
  $fire((x = new PeriodRequestFactory_PeriodRequestContextImpl$1X_0(rc, classId, description, order, note, isActive) , $addInvocation(rc.state.dialect, x) , x), new PeriodManagementPresenter$3_0(this$static));
}

function $onClassSelected(this$static, classId){
  var rc, rf;
  if ($equals_6(classId, '')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' Classe');
    return;
  }
  rf = new PeriodRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new PeriodRequestFactory_PeriodRequestContextImpl_0(rf);
  $fire($listAllByClass(rc, classId), new PeriodManagementPresenter$2_0(this$static));
}

function $onPeriodItemPopupClose(this$static){
  var rc, rf;
  rf = new PeriodItemRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new PeriodItemRequestFactory_PeriodItemRequestContextImpl_0(rf);
  $fire($listAll_0(rc), new PeriodManagementPresenter$5_0(this$static));
}

function $showPeriodItemPopup(this$static){
  $addToPopupSlot(this$static, this$static.periodItemPopup);
  $loadPeriods(this$static.periodItemPopup);
}

function $updatePeriod(this$static, pp, description, order, note, isActive){
  var pu, rc, rf, x;
  if ($equals_6(description, '')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' Decsription');
    return;
  }
  rf = new PeriodRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new PeriodRequestFactory_PeriodRequestContextImpl_0(rf);
  pu = dynamicCast($editProxy(rc, pp), Q$PeriodProxy);
  pu.setDescription(description);
  pu.setOrder(order);
  pu.setNote(note);
  pu.setActive_0(isActive);
  $fire((x = new PeriodRequestFactory_PeriodRequestContextImpl$8X_0(rc, pu) , $addInvocation(rc.state.dialect, x) , x), new PeriodManagementPresenter$4_0(this$static));
}

function PeriodManagementPresenter_0(eventBus, view, proxy, pp){
  $clinit_PeriodManagementPresenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  this.periodItemPopup = pp;
  dynamicCast(this.view, Q$PeriodManagementPresenter$MyView).setUiHandlers(this);
}

defineSeed(1011, 792, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$PeriodItemPopupCloseEvent$PeriodItemPopupCloseHandler, Q$PeriodManagementPresenter, Q$PeriodManagementUiHandlers]), PeriodManagementPresenter_0);
_.onBind = function onBind_6(){
}
;
_.onPeriodItemPopupClose = function onPeriodItemPopupClose(event_0){
  $onPeriodItemPopupClose(this);
}
;
_.onReset = function onReset_5(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('periodmgt'), null);
  $initializeTable_1(dynamicCast(dynamicCast(this.view, Q$PeriodManagementPresenter$MyView), Q$PeriodManagementView));
  rf = new ClasseRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAllActive_0(rc), new PeriodManagementPresenter$1_0(this));
  $onPeriodItemPopupClose(this);
}
;
_.periodItemPopup = null;
function $onSuccess_21(this$static, response){
  $setClassList_0(dynamicCast(this$static.this$0.view, Q$PeriodManagementPresenter$MyView), response);
}

function PeriodManagementPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1012, 723, makeCastMap([Q$Receiver]), PeriodManagementPresenter$1_0);
_.onFailure_0 = function onFailure_26(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_26(response){
  $onSuccess_21(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_22(this$static, response){
  $showPeriodData(dynamicCast(this$static.this$0.view, Q$PeriodManagementPresenter$MyView), response);
}

function PeriodManagementPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1013, 723, makeCastMap([Q$Receiver]), PeriodManagementPresenter$2_0);
_.onFailure_0 = function onFailure_27(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_27(response){
  $onSuccess_22(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_23(this$static, response){
  $addNewPeriod(dynamicCast(this$static.this$0.view, Q$PeriodManagementPresenter$MyView), response);
}

function PeriodManagementPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1014, 723, makeCastMap([Q$Receiver]), PeriodManagementPresenter$3_0);
_.onFailure_0 = function onFailure_28(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_28(response){
  $onSuccess_23(this, dynamicCast(response, Q$PeriodProxy));
}
;
_.this$0 = null;
function $onSuccess_24(this$static, response){
  $updatePeriod_0(dynamicCast(this$static.this$0.view, Q$PeriodManagementPresenter$MyView), response);
}

function PeriodManagementPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1015, 723, makeCastMap([Q$Receiver]), PeriodManagementPresenter$4_0);
_.onFailure_0 = function onFailure_29(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_29(response){
  $onSuccess_24(this, dynamicCast(response, Q$PeriodProxy));
}
;
_.this$0 = null;
function $onSuccess_25(this$static, response){
  $setPeriodListData(dynamicCast(this$static.this$0.view, Q$PeriodManagementPresenter$MyView), response);
}

function PeriodManagementPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1016, 723, makeCastMap([Q$Receiver]), PeriodManagementPresenter$5_0);
_.onFailure_0 = function onFailure_30(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_30(response){
  $onSuccess_25(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
defineSeed(1017, 820, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$PeriodItemPopupCloseEvent$PeriodItemPopupCloseHandler]));
_.onPeriodItemPopupClose = function onPeriodItemPopupClose_0(event_0){
  $getPresenter_0(this, new PeriodManagementPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
function $success_9(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new PeriodManagementPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function PeriodManagementPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1018, 805, {}, PeriodManagementPresenterMyProxyImpl$1_0);
_.success = function success_11(presenter){
  $success_9(this, dynamicCast(presenter, Q$PeriodManagementPresenter));
}
;
_.val$event = null;
function PeriodManagementPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(1019, 1, {}, PeriodManagementPresenterMyProxyImpl$1$1_0);
_.execute_1 = function execute_39(){
  $onPeriodItemPopupClose(this.val$presenter);
}
;
_.val$event = null;
_.val$presenter = null;
function $addNewPeriod(this$static, period){
  $add_15(this$static.periodDataProvider.listWrapper, period);
  $flushNow(this$static.periodDataProvider.listWrapper);
}

function $initializeTable_1(this$static){
  var cellActive, colActive, colDescription, colNote, colOrder;
  colOrder = new PeriodManagementView$1_0(new EditTextCell_0);
  $addColumn(this$static.tblPeriods, colOrder, 'Ordre');
  $setFieldUpdater(colOrder, new PeriodManagementView$2_0(this$static));
  colDescription = new PeriodManagementView$3_0(new EditTextCell_0);
  $addColumn(this$static.tblPeriods, colDescription, 'Description');
  $setFieldUpdater(colDescription, new PeriodManagementView$4_0(this$static));
  colNote = new PeriodManagementView$5_0(new EditTextCell_0);
  $addColumn(this$static.tblPeriods, colNote, 'Note');
  $setFieldUpdater(colNote, new PeriodManagementView$6_0(this$static));
  cellActive = new CheckboxCell_0;
  colActive = new PeriodManagementView$7_0(cellActive);
  $addColumn(this$static.tblPeriods, colActive, 'Active');
  $setFieldUpdater(colActive, new PeriodManagementView$8_0(this$static));
  $addDataDisplay(this$static.periodDataProvider, this$static.tblPeriods);
}

function $onCmdAddClick_0(this$static){
  if ($getValue_1(this$static.txtOrder) == null) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' Ordre');
    return;
  }
  $addPeriod(dynamicCast(this$static.uiHandlers, Q$PeriodManagementUiHandlers), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex), $getPropertyString(this$static.txtDescription.element, 'value'), dynamicCast($getValue_1(this$static.txtOrder), Q$Integer).value_0, $getPropertyString(this$static.txtNote.element, 'value'), $getValue_0(this$static.chkActif).value_0);
}

function $onLstClassesChange_1(this$static){
  $onClassSelected(dynamicCast(this$static.uiHandlers, Q$PeriodManagementUiHandlers), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $setClassList_0(this$static, classes){
  var clazz, clazz$iterator;
  $selectClear(this$static.lstClasses.element);
  $insertItem_0(this$static.lstClasses, '-', '', -1);
  for (clazz$iterator = classes.iterator(); clazz$iterator.hasNext();) {
    clazz = dynamicCast(clazz$iterator.next_0(), Q$ClasseProxy);
    $insertItem_0(this$static.lstClasses, clazz.getClassName(), '' + toString_6(clazz.getId_0().value_0), -1);
  }
}

function $setPeriodListData(this$static, periods){
  var pp, pp$iterator;
  $selectClear(this$static.lstPeriods.element);
  for (pp$iterator = periods.iterator(); pp$iterator.hasNext();) {
    pp = dynamicCast(pp$iterator.next_0(), Q$PeriodItemProxy);
    $insertItem_0(this$static.lstPeriods, pp.getPeriod(), '' + toString_6(pp.getId_0().value_0), -1);
  }
}

function $showPeriodData(this$static, periods){
  $clear_3(this$static.periodDataProvider.listWrapper);
  $setList(this$static.periodDataProvider, periods);
  $flushNow(this$static.periodDataProvider.listWrapper);
}

function $updatePeriod_0(this$static, period){
  $set_1(this$static.periodDataProvider.listWrapper, this$static.selectedPeriodIndex, period);
  $flushNow(this$static.periodDataProvider.listWrapper);
}

function PeriodManagementView_0(){
  this.periodDataProvider = new ListDataProvider_0;
  $initWidget_0(this, $build_f_HTMLPanel1_3(new PeriodManagementView_BinderImpl$Widgets_0(this)));
}

defineSeed(1021, 797, makeCastMap([Q$IsWidget, Q$PeriodManagementPresenter$MyView, Q$PeriodManagementView]), PeriodManagementView_0);
_.chkActif = null;
_.lstClasses = null;
_.lstPeriods = null;
_.selectedPeriodIndex = -1;
_.tblPeriods = null;
_.txtDescription = null;
_.txtNote = null;
_.txtOrder = null;
function PeriodManagementView$1_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1022, 423, makeCastMap([Q$HasCell, Q$Column]), PeriodManagementView$1_0);
_.getValue = function getValue_22(object){
  return '' + dynamicCast(object, Q$PeriodProxy).getOrder();
}
;
function $update_7(this$static, index, period, value){
  if (period.getOrder() != __parseAndValidateInt(value)) {
    if (this$static.this$0.uiHandlers) {
      this$static.this$0.selectedPeriodIndex = index;
      $updatePeriod(dynamicCast(this$static.this$0.uiHandlers, Q$PeriodManagementUiHandlers), period, period.getDescription(), __parseAndValidateInt(value), period.getNote(), period.isActive());
    }
  }
}

function PeriodManagementView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1023, 1, {}, PeriodManagementView$2_0);
_.update = function update_8(index, period, value){
  $update_7(this, index, dynamicCast(period, Q$PeriodProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function PeriodManagementView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1024, 423, makeCastMap([Q$HasCell, Q$Column]), PeriodManagementView$3_0);
_.getValue = function getValue_23(object){
  return dynamicCast(object, Q$PeriodProxy).getDescription();
}
;
function $update_8(this$static, index, period, value){
  if (period.getDescription() != value) {
    if (this$static.this$0.uiHandlers) {
      this$static.this$0.selectedPeriodIndex = index;
      $updatePeriod(dynamicCast(this$static.this$0.uiHandlers, Q$PeriodManagementUiHandlers), period, value, period.getOrder(), period.getNote(), period.isActive());
    }
  }
}

function PeriodManagementView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1025, 1, {}, PeriodManagementView$4_0);
_.update = function update_9(index, period, value){
  $update_8(this, index, dynamicCast(period, Q$PeriodProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function PeriodManagementView$5_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1026, 423, makeCastMap([Q$HasCell, Q$Column]), PeriodManagementView$5_0);
_.getValue = function getValue_24(object){
  return dynamicCast(object, Q$PeriodProxy).getNote();
}
;
function $update_9(this$static, index, period, value){
  if (period.getNote() != value) {
    if (this$static.this$0.uiHandlers) {
      this$static.this$0.selectedPeriodIndex = index;
      $updatePeriod(dynamicCast(this$static.this$0.uiHandlers, Q$PeriodManagementUiHandlers), period, period.getDescription(), period.getOrder(), value, period.isActive());
    }
  }
}

function PeriodManagementView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1027, 1, {}, PeriodManagementView$6_0);
_.update = function update_10(index, period, value){
  $update_9(this, index, dynamicCast(period, Q$PeriodProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function $getValue_5(period){
  return $clinit_Boolean() , period.isActive()?TRUE_1:FALSE_1;
}

function PeriodManagementView$7_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1028, 423, makeCastMap([Q$HasCell, Q$Column]), PeriodManagementView$7_0);
_.getValue = function getValue_25(period){
  return $getValue_5(dynamicCast(period, Q$PeriodProxy));
}
;
function $update_10(this$static, index, period, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedPeriodIndex = index;
    $updatePeriod(dynamicCast(this$static.this$0.uiHandlers, Q$PeriodManagementUiHandlers), period, period.getDescription(), period.getOrder(), period.getNote(), value.value_0);
  }
}

function PeriodManagementView$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1029, 1, {}, PeriodManagementView$8_0);
_.update = function update_11(index, period, value){
  $update_10(this, index, dynamicCast(period, Q$PeriodProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function PeriodManagementView_BinderImpl_0(){
}

defineSeed(1030, 1, {}, PeriodManagementView_BinderImpl_0);
function $build_f_HTMLPanel1_3(this$static){
  var attachRecord29, f_HTMLPanel1, f_Label2, f_VerticalPanel3, f_VerticalPanel4, f_Label5, f_Grid6, f_Label7, lstClasses, f_Label8, lstPeriods, cmdAddPeriodItem, f_Label9, txtDescription, f_Label10, txtOrder, f_Label11, txtNote, f_Label12, chkActif, f_HorizontalPanel14, f_Label15, f_Label16, tblPeriods, cmdAdd, sb;
  f_HTMLPanel1 = new HTMLPanel_0($html2_1(this$static.domId0, this$static.domId1).html);
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord29 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  $get_1(this$static.domId1Element);
  attachRecord29.origParent?$insertBefore(attachRecord29.origParent, attachRecord29.element, attachRecord29.origSibling):orphan(attachRecord29.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label2.directionalTextHelper, 'ORGANISATION DES PERIODES', false) , $updateHorizontalAlignment(f_Label2) , f_Label2), $get_1(this$static.domId0Element));
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel3 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel3, ALIGN_CENTER) , $add_12(f_VerticalPanel3, (f_VerticalPanel4 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel4, ALIGN_CENTER) , $setVerticalAlignment_0(f_VerticalPanel4, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_12(f_VerticalPanel4, (f_Label5 = new Label_0 , f_Label5.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label5.directionalTextHelper, 'Rajouter une p\xE9riode', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $add_12(f_VerticalPanel4, (f_Grid6 = new Grid_0 , $resizeColumns(f_Grid6, 3) , $resizeRows(f_Grid6, 7) , $setWidget_3(f_Grid6, 0, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Classe :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_3(f_Grid6, 0, 1, (lstClasses = new ListBox_0 , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstClasses = lstClasses , lstClasses)) , $setWidget_3(f_Grid6, 1, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'P\xE9riode :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_3(f_Grid6, 1, 1, (lstPeriods = new ListBox_0 , this$static.owner.lstPeriods = lstPeriods , lstPeriods)) , $setWidget_3(f_Grid6, 1, 2, (cmdAddPeriodItem = new Button_0 , $setInnerText(cmdAddPeriodItem.element, 'Rajouter une p\xE9riode') , $addDomHandler(cmdAddPeriodItem, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdAddPeriodItem)) , $setWidget_3(f_Grid6, 2, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Description :', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_3(f_Grid6, 2, 1, (txtDescription = new TextBox_0 , this$static.owner.txtDescription = txtDescription , txtDescription)) , $setWidget_3(f_Grid6, 3, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Ordre :', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_3(f_Grid6, 3, 1, (txtOrder = new IntegerBox_0 , this$static.owner.txtOrder = txtOrder , txtOrder)) , $setWidget_3(f_Grid6, 4, 0, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Note :', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_3(f_Grid6, 4, 1, (txtNote = new TextBox_0 , txtNote.element['className'] = 'sis_textbox' , this$static.owner.txtNote = txtNote , txtNote)) , $setWidget_3(f_Grid6, 5, 0, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Actif :', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_3(f_Grid6, 5, 1, (chkActif = new CheckBox_0 , $setValue_0(chkActif, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , this$static.owner.chkActif = chkActif , chkActif)) , $setWidget_3(f_Grid6, 6, 0, new Label_0) , $setWidget_3(f_Grid6, 6, 1, (f_HorizontalPanel14 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel14, ALIGN_RIGHT) , $add_10(f_HorizontalPanel14, (cmdAdd = new Button_0 , $setHTML(cmdAdd, (sb = new StringBuilder_0 , sb.impl.string += 'Ajouter' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , $setInnerText(cmdAdd.element, 'Enregistrer') , $addDomHandler(cmdAdd, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , cmdAdd)) , f_HorizontalPanel14.element.style['width'] = '100%' , f_HorizontalPanel14)) , f_Grid6.element.style['width'] = '100%' , f_Grid6.tableElem['cellSpacing'] = 2 , f_Grid6.tableElem['cellPadding'] = 2 , f_Grid6)) , f_VerticalPanel4.element['className'] = 'subSection' , f_VerticalPanel4.element.style['width'] = '543px' , f_VerticalPanel4)) , $add_12(f_VerticalPanel3, (f_Label15 = new Label_0 , f_Label15.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label15.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $add_12(f_VerticalPanel3, (f_Label16 = new Label_0 , f_Label16.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label16.directionalTextHelper, 'Liste des salles de classe', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $add_12(f_VerticalPanel3, (tblPeriods = new CellTable_0 , $setTableLayoutFixed(tblPeriods) , tblPeriods.element.style['height'] = '' , tblPeriods.element.style['width'] = '100%' , $setVisibleRange(tblPeriods, new Range_1($getVisibleRange(tblPeriods.presenter).start, 1000)) , this$static.owner.tblPeriods = tblPeriods , tblPeriods)) , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3.table['cellSpacing'] = 5 , f_VerticalPanel3), $get_1(this$static.domId1Element));
  return f_HTMLPanel1;
}

function PeriodManagementView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new PeriodManagementView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new PeriodManagementView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new PeriodManagementView_BinderImpl$Widgets$3_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
  this.domId1Element = new LazyDomElement_0(this.domId1);
}

defineSeed(1031, 1, {}, PeriodManagementView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.domId1 = null;
_.domId1Element = null;
_.owner = null;
function PeriodManagementView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1032, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), PeriodManagementView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_6(event_0){
  $onLstClassesChange_1(this.this$1.owner);
}
;
_.this$1 = null;
function PeriodManagementView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1033, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), PeriodManagementView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_13(event_0){
  $onCmdAddClick_0(this.this$1.owner);
}
;
_.this$1 = null;
function PeriodManagementView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1034, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), PeriodManagementView_BinderImpl$Widgets$3_0);
_.onClick = function onClick_14(event_0){
  $showPeriodItemPopup(dynamicCast(this.this$1.owner.uiHandlers, Q$PeriodManagementUiHandlers));
}
;
_.this$1 = null;
function $html2_1(arg0, arg1){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span> <span id='";
  $append_11(sb, htmlEscape(arg1));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$form$periodmanagement$PeriodManagementPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$periodmanagement$PeriodManagementPresenter$_annotation$$none$$) {
    result = new PeriodManagementPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$form$periodmanagement$PeriodManagementView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$sis$client$form$periodmanagement$PeriodManagementPresenter$MyProxy$_annotation$$none$$(this$static), $get_Key$type$com$lemania$sis$client$popup$periodlistpopup$PeriodListPopupPresenter$_annotation$$none$$($getFragment_com_lemania_sis_client_popup_periodlistpopup(this$static.injector)));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$form$periodmanagement$PeriodManagementPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$periodmanagement$PeriodManagementPresenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$sis$client$form$periodmanagement$PeriodManagementView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$periodmanagement$PeriodManagementView$_annotation$$none$$) {
    result = new PeriodManagementView_0(new PeriodManagementView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$form$periodmanagement$PeriodManagementView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$periodmanagement$PeriodManagementView$_annotation$$none$$;
}

defineSeed(1038, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_31(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$form$periodmanagement$PeriodManagementPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $getFragment_com_lemania_sis_client_popup_periodlistpopup(this$static){
  !this$static.fieldFragment_com$lemania$sis$client$popup$periodlistpopup && (this$static.fieldFragment_com$lemania$sis$client$popup$periodlistpopup = new com_lemania_sis_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_40(this$static));
  return this$static.fieldFragment_com$lemania$sis$client$popup$periodlistpopup;
}

function $addPeriod_0(this$static, fromHour, fromMinute, toHour, toMinute, note){
  var rc, rf, x;
  rf = new PeriodItemRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new PeriodItemRequestFactory_PeriodItemRequestContextImpl_0(rf);
  $fire((x = new PeriodItemRequestFactory_PeriodItemRequestContextImpl$1X_0(rc, fromHour, fromMinute, toHour, toMinute, note) , $addInvocation(rc.state.dialect, x) , x), new PeriodListPopupPresenter$2_0(this$static));
}

function $hidePopup(this$static){
  dynamicCast(this$static.view, Q$PeriodListPopupPresenter$MyView).hide();
  $doFire(this$static.eventBus, new PeriodItemPopupCloseEvent_0, null);
}

function $loadPeriods(this$static){
  var rc, rf;
  rf = new PeriodItemRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new PeriodItemRequestFactory_PeriodItemRequestContextImpl_0(rf);
  $fire($listAll_0(rc), new PeriodListPopupPresenter$1_0(this$static));
}

function PeriodListPopupPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
  dynamicCast(this.view, Q$PeriodListPopupPresenter$MyView).setUiHandlers(this);
}

defineSeed(1175, 793, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$PeriodListPopupUiHandlers]), PeriodListPopupPresenter_0);
_.onBind = function onBind_12(){
  $initializeUI_4(dynamicCast(this.view, Q$PeriodListPopupPresenter$MyView));
}
;
_.onReset = function onReset_11(){
  $resetUI_0(dynamicCast(this.view, Q$PeriodListPopupPresenter$MyView));
  $loadPeriods(this);
}
;
function $onSuccess_45(this$static, response){
  $setPeriodData(dynamicCast(this$static.this$0.view, Q$PeriodListPopupPresenter$MyView), response);
}

function PeriodListPopupPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1176, 723, makeCastMap([Q$Receiver]), PeriodListPopupPresenter$1_0);
_.onFailure_0 = function onFailure_59(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_59(response){
  $onSuccess_45(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_46(this$static, response){
  $addNewPeriodItem(dynamicCast(this$static.this$0.view, Q$PeriodListPopupPresenter$MyView), response);
}

function PeriodListPopupPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1177, 723, makeCastMap([Q$Receiver]), PeriodListPopupPresenter$2_0);
_.onFailure_0 = function onFailure_60(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_60(response){
  $onSuccess_46(this, dynamicCast(response, Q$PeriodItemProxy));
}
;
_.this$0 = null;
function $addNewPeriodItem(this$static, pi){
  $add_15(this$static.dataPeriods.listWrapper, pi);
  $flushNow(this$static.dataPeriods.listWrapper);
}

function $initializeUI_4(this$static){
  var i, colFromHour, colFromMinute, colToHour, colToMinute, colNote, cellActive, colActive;
  $selectClear(this$static.lstFromHour.element);
  $selectClear(this$static.lstToHour.element);
  for (i = 1; i < 25; ++i) {
    $insertItem_0(this$static.lstFromHour, '' + i, '' + i, -1);
    $insertItem_0(this$static.lstToHour, '' + i, '' + i, -1);
  }
  $selectClear(this$static.lstFromMinute.element);
  $selectClear(this$static.lstToMinute.element);
  for (i = 0; i < 61; ++i) {
    $insertItem_0(this$static.lstFromMinute, '' + i, '' + i, -1);
    $insertItem_0(this$static.lstToMinute, '' + i, '' + i, -1);
  }
  colFromHour = new PeriodListPopupView$1_0(new EditTextCell_0);
  $addColumn(this$static.tblPeriods, colFromHour, 'De');
  colFromMinute = new PeriodListPopupView$2_0(new EditTextCell_0);
  $addColumn(this$static.tblPeriods, colFromMinute, '');
  colToHour = new PeriodListPopupView$3_0(new EditTextCell_0);
  $addColumn(this$static.tblPeriods, colToHour, 'A');
  colToMinute = new PeriodListPopupView$4_0(new EditTextCell_0);
  $addColumn(this$static.tblPeriods, colToMinute, '');
  colNote = new PeriodListPopupView$5_0(new EditTextCell_0);
  $addColumn(this$static.tblPeriods, colNote, '');
  cellActive = new CheckboxCell_0;
  colActive = new PeriodListPopupView$6_0(cellActive);
  $addColumn(this$static.tblPeriods, colActive, 'Active');
  $addDataDisplay(this$static.dataPeriods, this$static.tblPeriods);
}

function $onCmdAddClick_2(this$static){
  $addPeriod_0(dynamicCast(this$static.uiHandlers, Q$PeriodListPopupUiHandlers), __parseAndValidateInt($getValue_2(this$static.lstFromHour, this$static.lstFromHour.element.selectedIndex)), __parseAndValidateInt($getValue_2(this$static.lstFromMinute, this$static.lstFromMinute.element.selectedIndex)), __parseAndValidateInt($getValue_2(this$static.lstToHour, this$static.lstToHour.element.selectedIndex)), __parseAndValidateInt($getValue_2(this$static.lstToMinute, this$static.lstToMinute.element.selectedIndex)), $getPropertyString(this$static.txtNote.element, 'value'));
}

function $resetUI_0(this$static){
  $setSelectedIndex_0(this$static.lstFromHour, 0);
  $setSelectedIndex_0(this$static.lstFromMinute, 0);
  $setSelectedIndex_0(this$static.lstToHour, 0);
  $setSelectedIndex_0(this$static.lstToMinute, 0);
  $setText_1(this$static.txtNote, '');
}

function $setPeriodData(this$static, periods){
  $clear_3(this$static.dataPeriods.listWrapper);
  $setList(this$static.dataPeriods, periods);
  $flushNow(this$static.dataPeriods.listWrapper);
}

function PeriodListPopupView_0(){
  this.tblPeriods = new CellTable_0;
  this.dataPeriods = new ListDataProvider_0;
  $initWidget_0(this, $build_dialog_0(new PeriodListPopupView_BinderImpl$Widgets_0(this)));
}

defineSeed(1178, 791, makeCastMap([Q$IsWidget, Q$PopupView, Q$PeriodListPopupPresenter$MyView]), PeriodListPopupView_0);
_.lstFromHour = null;
_.lstFromMinute = null;
_.lstToHour = null;
_.lstToMinute = null;
_.txtNote = null;
function PeriodListPopupView$1_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1179, 423, makeCastMap([Q$HasCell, Q$Column]), PeriodListPopupView$1_0);
_.getValue = function getValue_44(object){
  return '' + dynamicCast(object, Q$PeriodItemProxy).getFromHour();
}
;
function PeriodListPopupView$2_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1180, 423, makeCastMap([Q$HasCell, Q$Column]), PeriodListPopupView$2_0);
_.getValue = function getValue_45(object){
  return '' + dynamicCast(object, Q$PeriodItemProxy).getFromMinute();
}
;
function PeriodListPopupView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1181, 423, makeCastMap([Q$HasCell, Q$Column]), PeriodListPopupView$3_0);
_.getValue = function getValue_46(object){
  return '' + dynamicCast(object, Q$PeriodItemProxy).getToHour();
}
;
function PeriodListPopupView$4_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1182, 423, makeCastMap([Q$HasCell, Q$Column]), PeriodListPopupView$4_0);
_.getValue = function getValue_47(object){
  return '' + dynamicCast(object, Q$PeriodItemProxy).getToMinute();
}
;
function PeriodListPopupView$5_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1183, 423, makeCastMap([Q$HasCell, Q$Column]), PeriodListPopupView$5_0);
_.getValue = function getValue_48(object){
  return dynamicCast(object, Q$PeriodItemProxy).getNote();
}
;
function $getValue_6(period){
  return $clinit_Boolean() , period.isActive()?TRUE_1:FALSE_1;
}

function PeriodListPopupView$6_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1184, 423, makeCastMap([Q$HasCell, Q$Column]), PeriodListPopupView$6_0);
_.getValue = function getValue_49(period){
  return $getValue_6(dynamicCast(period, Q$PeriodItemProxy));
}
;
function PeriodListPopupView_BinderImpl_0(){
}

defineSeed(1185, 1, {}, PeriodListPopupView_BinderImpl_0);
function $build_dialog_0(this$static){
  var dialog, sb, HtmlPanel, attachRecord34, cmdClose, f_Label1, f_VerticalPanel2, f_HorizontalPanel3, f_Label4, f_Label5, lstFromHour, f_Label6, lstFromMinute, f_Label7, f_Label8, lstToHour, f_Label9, lstToMinute, f_HorizontalPanel10, f_Label11, txtNote, cmdAdd, f_Label12, tblPeriods;
  dialog = new DialogBox_0(true);
  $setHTML_0(dialog, (sb = new StringBuilder_0 , sb.impl.string += '<b>Liste des p\xE9riodes<\/b>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html);
  $setWidget_2(dialog, (HtmlPanel = new HTMLPanel_0($html1_7(this$static.domId0, this$static.domId1, this$static.domId2).html) , HtmlPanel.element.style['width'] = '400px' , attachRecord34 = attachToDom(HtmlPanel.element) , $get_1(this$static.domId0Element) , $get_1(this$static.domId1Element) , $get_1(this$static.domId2Element) , attachRecord34.origParent?$insertBefore(attachRecord34.origParent, attachRecord34.element, attachRecord34.origSibling):orphan(attachRecord34.element) , $addAndReplaceElement(HtmlPanel, (cmdClose = new Button_0 , cmdClose.element['className'] = 'popupCloseButton' , $setInnerText(cmdClose.element, 'X') , $addDomHandler(cmdClose, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdClose), $get_1(this$static.domId0Element)) , $addAndReplaceElement(HtmlPanel, (f_Label1 = new Label_0 , f_Label1.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label1.directionalTextHelper, 'Cr\xE9er une nouvelle p\xE9riode', false) , $updateHorizontalAlignment(f_Label1) , f_Label1), $get_1(this$static.domId1Element)) , $addAndReplaceElement(HtmlPanel, (f_VerticalPanel2 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT)) , $add_12(f_VerticalPanel2, (f_HorizontalPanel3 = new HorizontalPanel_0 , $add_10(f_HorizontalPanel3, (f_Label4 = new Label_0 , $setTextOrHtml(f_Label4.directionalTextHelper, 'P\xE9riod :', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , $add_10(f_HorizontalPanel3, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'de', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $add_10(f_HorizontalPanel3, (lstFromHour = new ListBox_0 , this$static.owner.lstFromHour = lstFromHour , lstFromHour)) , $add_10(f_HorizontalPanel3, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, ':', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_10(f_HorizontalPanel3, (lstFromMinute = new ListBox_0 , this$static.owner.lstFromMinute = lstFromMinute , lstFromMinute)) , $add_10(f_HorizontalPanel3, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label7.directionalTextHelper, '-----', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_10(f_HorizontalPanel3, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, '\xE0', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_10(f_HorizontalPanel3, (lstToHour = new ListBox_0 , this$static.owner.lstToHour = lstToHour , lstToHour)) , $add_10(f_HorizontalPanel3, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, ':', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $add_10(f_HorizontalPanel3, (lstToMinute = new ListBox_0 , this$static.owner.lstToMinute = lstToMinute , lstToMinute)) , f_HorizontalPanel3.element.style['width'] = '100%' , f_HorizontalPanel3)) , $add_12(f_VerticalPanel2, (f_HorizontalPanel10 = new HorizontalPanel_0 , $add_10(f_HorizontalPanel10, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Note :', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $add_10(f_HorizontalPanel10, (txtNote = new TextBox_0 , txtNote.element.style['width'] = '315px' , this$static.owner.txtNote = txtNote , txtNote)) , f_HorizontalPanel10.element.style['width'] = '100%' , f_HorizontalPanel10)) , $add_12(f_VerticalPanel2, (cmdAdd = new Button_0 , $setInnerText(cmdAdd.element, 'Ajouter') , $addDomHandler(cmdAdd, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , cmdAdd)) , $add_12(f_VerticalPanel2, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label12.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $add_12(f_VerticalPanel2, (tblPeriods = this$static.owner.tblPeriods , $setTableLayoutFixed(tblPeriods) , tblPeriods.element.style['height'] = '' , tblPeriods.element.style['width'] = '100%' , $setVisibleRange(tblPeriods, new Range_1($getVisibleRange(tblPeriods.presenter).start, 1000)) , tblPeriods)) , f_VerticalPanel2.element.style['height'] = '' , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 5 , f_VerticalPanel2), $get_1(this$static.domId2Element)) , HtmlPanel));
  $setGlassEnabled(dialog);
  dialog.isAnimationEnabled = true;
  $setWidth_0(dialog, '');
  dialog.autoHide = false;
  return dialog;
}

function PeriodListPopupView_BinderImpl$Widgets_0(owner){
  var style;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new PeriodListPopupView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new PeriodListPopupView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  style = (new PeriodListPopupView_BinderImpl_GenBundle_default_InlineClientBundleGenerator_0 , $clinit_PeriodListPopupView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_5);
  $ensureInjected_9(style);
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId2 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
  this.domId1Element = new LazyDomElement_0(this.domId1);
  this.domId2Element = new LazyDomElement_0(this.domId2);
}

defineSeed(1186, 1, {}, PeriodListPopupView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.domId1 = null;
_.domId1Element = null;
_.domId2 = null;
_.domId2Element = null;
_.owner = null;
function PeriodListPopupView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1187, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), PeriodListPopupView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_20(event_0){
  $hidePopup(dynamicCast(this.this$1.owner.uiHandlers, Q$PeriodListPopupUiHandlers));
}
;
_.this$1 = null;
function PeriodListPopupView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1188, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), PeriodListPopupView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_21(event_0){
  $onCmdAddClick_2(this.this$1.owner);
}
;
_.this$1 = null;
function PeriodListPopupView_BinderImpl_GenBundle_default_InlineClientBundleGenerator_0(){
}

defineSeed(1189, 1, {}, PeriodListPopupView_BinderImpl_GenBundle_default_InlineClientBundleGenerator_0);
var style_5 = null;
function $ensureInjected_9(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '');
    schedule();
    return true;
  }
  return false;
}

function PeriodListPopupView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(1190, 1, {}, PeriodListPopupView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1_0);
_.injected = false;
function $clinit_PeriodListPopupView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_PeriodListPopupView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_5 = new PeriodListPopupView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1_0;
}

function $html1_7(arg0, arg1, arg2){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span> <span id='";
  $append_11(sb, htmlEscape(arg1));
  sb.impl.string += "'><\/span> <span id='";
  $append_11(sb, htmlEscape(arg2));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $com$lemania$sis$client$popup$periodlistpopup$PeriodListPopupView_com$lemania$sis$client$popup$periodlistpopup$PeriodListPopupView_methodInjection(){
  return new PeriodListPopupView_0;
}

function $get_Key$type$com$lemania$sis$client$popup$periodlistpopup$PeriodListPopupPresenter$_annotation$$none$$(this$static){
  var result;
  result = new PeriodListPopupPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $com$lemania$sis$client$popup$periodlistpopup$PeriodListPopupView_com$lemania$sis$client$popup$periodlistpopup$PeriodListPopupView_methodInjection((new PeriodListPopupView_BinderImpl_0 , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)))));
  $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
  return result;
}

function com_lemania_sis_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_40(injector){
  this.injector = injector;
}

defineSeed(1193, 1, {}, com_lemania_sis_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_40);
_.injector = null;
defineSeed(1886, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$PeriodProxy]));
_.setActive_0 = function setActive_3(isActive){
  dynamicCast($getWrapped(this.this$0), Q$PeriodProxy).setActive_0(isActive);
  $clinit_Boolean();
}
;
_.setDescription = function setDescription(description){
  dynamicCast($getWrapped(this.this$0), Q$PeriodProxy).setDescription(description);
}
;
_.setNote = function setNote(note){
  dynamicCast($getWrapped(this.this$0), Q$PeriodProxy).setNote(note);
}
;
_.setOrder = function setOrder(order){
  dynamicCast($getWrapped(this.this$0), Q$PeriodProxy).setOrder(order);
  valueOf_1(order);
}
;
defineSeed(1887, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$PeriodProxy]));
_.setActive_0 = function setActive_4(isActive){
  $setProperty(this.this$0, 'active', ($clinit_Boolean() , isActive?TRUE_1:FALSE_1));
}
;
_.setDescription = function setDescription_0(description){
  $setProperty(this.this$0, 'description', description);
}
;
_.setNote = function setNote_0(note){
  $setProperty(this.this$0, 'note', note);
}
;
_.setOrder = function setOrder_0(order){
  $setProperty(this.this$0, 'order', valueOf_1(order));
}
;
function PeriodRequestFactory_PeriodRequestContextImpl$1X_0(this$0, val$classId, val$description, val$order, val$note, val$isActive){
  this.val$classId = val$classId;
  this.val$description = val$description;
  this.val$order = val$order;
  this.val$note = val$note;
  this.val$isActive = val$isActive;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1890, 727, makeCastMap([Q$AbstractRequest]), PeriodRequestFactory_PeriodRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_20(){
  return new RequestData_0('TnbZQPW_WTxg35s5w22gOpNFkjk=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$classId, this.val$description, valueOf_1(this.val$order), this.val$note, ($clinit_Boolean() , this.val$isActive?TRUE_1:FALSE_1)]), this.propertyRefs, Lcom_lemania_sis_shared_period_PeriodProxy_2_classLit, null);
}
;
_.val$classId = null;
_.val$description = null;
_.val$isActive = false;
_.val$note = null;
_.val$order = 0;
function PeriodRequestFactory_PeriodRequestContextImpl$8X_0(this$0, val$pp){
  this.val$pp = val$pp;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1893, 727, makeCastMap([Q$AbstractRequest]), PeriodRequestFactory_PeriodRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_23(){
  return new RequestData_0('NAPY50$RCB31_YxH$rQoBPsSAIE=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$pp]), this.propertyRefs, Lcom_lemania_sis_shared_period_PeriodProxy_2_classLit, null);
}
;
_.val$pp = null;
function $$init_31(this$static){
  this$static.shim = new PeriodItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function PeriodItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_31(this);
}

function PeriodItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_31(this);
}

defineSeed(1895, 684, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), PeriodItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, PeriodItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_29(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_29(){
  return new PeriodItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_37(){
  return Lcom_lemania_sis_shared_perioditem_PeriodItemProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_28(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = ($clinit_Boolean() , $isActive_1(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'active'), Z_classLit);
  visitor.visitValueProperty('active', value, propertyContext);
  value = valueOf_1($getFromHour(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fromHour'), I_classLit);
  visitor.visitValueProperty('fromHour', value, propertyContext);
  value = valueOf_1($getFromMinute(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fromMinute'), I_classLit);
  visitor.visitValueProperty('fromMinute', value, propertyContext);
  value = valueOf_1($getToHour(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'toHour'), I_classLit);
  visitor.visitValueProperty('toHour', value, propertyContext);
  value = valueOf_1($getToMinute(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'toMinute'), I_classLit);
  visitor.visitValueProperty('toMinute', value, propertyContext);
  value = $getId_21(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getNote_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'note'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('note', value, propertyContext);
  value = $getPeriod(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'period'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('period', value, propertyContext);
}
;
function $getFromHour(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$PeriodItemProxy).getFromHour();
  toReturn = dynamicCast(__intercept(this$static.this$0, valueOf_1(toReturn)), Q$Integer).value_0;
  return toReturn;
}

function $getFromMinute(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$PeriodItemProxy).getFromMinute();
  toReturn = dynamicCast(__intercept(this$static.this$0, valueOf_1(toReturn)), Q$Integer).value_0;
  return toReturn;
}

function $getId_21(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$PeriodItemProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getNote_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$PeriodItemProxy).getNote();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getPeriod(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$PeriodItemProxy).getPeriod();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getToHour(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$PeriodItemProxy).getToHour();
  toReturn = dynamicCast(__intercept(this$static.this$0, valueOf_1(toReturn)), Q$Integer).value_0;
  return toReturn;
}

function $getToMinute(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$PeriodItemProxy).getToMinute();
  toReturn = dynamicCast(__intercept(this$static.this$0, valueOf_1(toReturn)), Q$Integer).value_0;
  return toReturn;
}

function $isActive_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$PeriodItemProxy).isActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Boolean() , toReturn?TRUE_1:FALSE_1)), Q$Boolean).value_0;
  return toReturn;
}

function PeriodItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1896, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$PeriodItemProxy]), PeriodItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_70(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$PeriodItemProxy).equals$(o);
}
;
_.getFromHour = function getFromHour(){
  return $getFromHour(this);
}
;
_.getFromMinute = function getFromMinute(){
  return $getFromMinute(this);
}
;
_.getId_0 = function getId_39(){
  return $getId_21(this);
}
;
_.getNote = function getNote_1(){
  return $getNote_0(this);
}
;
_.getPeriod = function getPeriod(){
  return $getPeriod(this);
}
;
_.getToHour = function getToHour(){
  return $getToHour(this);
}
;
_.getToMinute = function getToMinute(){
  return $getToMinute(this);
}
;
_.hashCode$ = function hashCode_70(){
  return dynamicCast($getWrapped(this.this$0), Q$PeriodItemProxy).hashCode$();
}
;
_.isActive = function isActive_4(){
  return $isActive_1(this);
}
;
_.toString$ = function toString_46(){
  return dynamicCast($getWrapped(this.this$0), Q$PeriodItemProxy).toString$();
}
;
_.this$0 = null;
function PeriodItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1897, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$PeriodItemProxy]), PeriodItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_71(other){
  return equals_14(this.this$0, other);
}
;
_.getFromHour = function getFromHour_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fromHour'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFromMinute = function getFromMinute_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fromMinute'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getId_0 = function getId_40(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getNote = function getNote_2(){
  return dynamicCast($getOrReify(this.this$0, 'note'), Q$String);
}
;
_.getPeriod = function getPeriod_0(){
  return dynamicCast($getOrReify(this.this$0, 'period'), Q$String);
}
;
_.getToHour = function getToHour_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'toHour'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getToMinute = function getToMinute_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'toMinute'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.hashCode$ = function hashCode_71(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.isActive = function isActive_5(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'active'), Q$Boolean);
  return !!toReturn && toReturn.value_0;
}
;
_.this$0 = null;
function $clinit_PeriodItemRequestFactoryImpl(){
  $clinit_PeriodItemRequestFactoryImpl = nullMethod;
  tokensToTypes_4 = new HashMap_0;
  typesToTokens_4 = new HashMap_0;
  entityProxyTypes_4 = new HashSet_0;
  valueProxyTypes_4 = new HashSet_0;
  tokensToTypes_4.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_4.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_21(entityProxyTypes_4, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_4.put('m2W_bynBbfl5a$OtG1DzcGMAwwE=', Lcom_lemania_sis_shared_perioditem_PeriodItemProxy_2_classLit);
  typesToTokens_4.put(Lcom_lemania_sis_shared_perioditem_PeriodItemProxy_2_classLit, 'm2W_bynBbfl5a$OtG1DzcGMAwwE=');
  $add_21(entityProxyTypes_4, Lcom_lemania_sis_shared_perioditem_PeriodItemProxy_2_classLit);
}

function PeriodItemRequestFactoryImpl_0(){
  $clinit_PeriodItemRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1898, 718, {}, PeriodItemRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_4(){
  return 'com.lemania.sis.shared.perioditem.PeriodItemRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_4(typeToken){
  return dynamicCast(tokensToTypes_4.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_8(type){
  return dynamicCast(typesToTokens_4.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_5(type){
  return $contains_1(entityProxyTypes_4, type);
}
;
_.isValueType = function isValueType_5(type){
  return $contains_1(valueProxyTypes_4, type);
}
;
var entityProxyTypes_4, tokensToTypes_4, typesToTokens_4, valueProxyTypes_4;
function $listAll_0(this$static){
  var x;
  x = new PeriodItemRequestFactory_PeriodItemRequestContextImpl$3X_0(this$static);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function PeriodItemRequestFactory_PeriodItemRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1899, 728, makeCastMap([Q$AbstractRequestContext]), PeriodItemRequestFactory_PeriodItemRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_4(){
  return !FACTORY_5 && (FACTORY_5 = new PeriodItemRequestFactory_PeriodItemRequestContextImpl_FactoryImpl_0) , FACTORY_5;
}
;
var FACTORY_5 = null;
function PeriodItemRequestFactory_PeriodItemRequestContextImpl$1X_0(this$0, val$fromHour, val$fromMinute, val$toHour, val$toMinute, val$note){
  this.val$fromHour = val$fromHour;
  this.val$fromMinute = val$fromMinute;
  this.val$toHour = val$toHour;
  this.val$toMinute = val$toMinute;
  this.val$note = val$note;
  this.val$isActive = true;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1900, 727, makeCastMap([Q$AbstractRequest]), PeriodItemRequestFactory_PeriodItemRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_24(){
  return new RequestData_0('6TivlVMbKJhdasFZA$MnntyQewo=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(this.val$fromHour), valueOf_1(this.val$fromMinute), valueOf_1(this.val$toHour), valueOf_1(this.val$toMinute), this.val$note, ($clinit_Boolean() , this.val$isActive?TRUE_1:FALSE_1)]), this.propertyRefs, Lcom_lemania_sis_shared_perioditem_PeriodItemProxy_2_classLit, null);
}
;
_.val$fromHour = 0;
_.val$fromMinute = 0;
_.val$isActive = false;
_.val$note = null;
_.val$toHour = 0;
_.val$toMinute = 0;
function PeriodItemRequestFactory_PeriodItemRequestContextImpl$3X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1901, 727, makeCastMap([Q$AbstractRequest]), PeriodItemRequestFactory_PeriodItemRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_25(){
  return new RequestData_0('j2dc5MjKWqWMtNIh2dnmMtdyzXc=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_perioditem_PeriodItemProxy_2_classLit);
}
;
function $getConstructors_com_lemania_sis_shared_perioditem_PeriodItemProxy(){
  return [function(factory){
    return new PeriodItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new PeriodItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function PeriodItemRequestFactory_PeriodItemRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1902, 656, makeCastMap([Q$EnumMap]), PeriodItemRequestFactory_PeriodItemRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_5(map){
  $add_16(map, Lcom_lemania_sis_shared_perioditem_PeriodItemProxy_2_classLit, $getConstructors_com_lemania_sis_shared_perioditem_PeriodItemProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_5(){
}
;
var Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementPresenter_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementPresenter', 1011), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementPresenter$1_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementPresenter$1', 1012), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementPresenter$2_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementPresenter$2', 1013), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementPresenter$3_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementPresenter$3', 1014), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementPresenter$4_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementPresenter$4', 1015), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementPresenter$5_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementPresenter$5', 1016), Lcom_lemania_sis_client_event_PeriodItemPopupCloseEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'PeriodItemPopupCloseEvent', 863), Lcom_lemania_sis_client_popup_periodlistpopup_com_1lemania_1sis_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.lemania.sis.client.popup.periodlistpopup.', 'com_lemania_sis_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 1193), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementPresenterMyProxyImpl$1', 1018), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementPresenterMyProxyImpl$1$1', 1019), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView', 1021), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView$1_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView$1', 1022), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView$2_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView$2', 1023), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView$3_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView$3', 1024), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView$4_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView$4', 1025), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView$5_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView$5', 1026), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView$6_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView$6', 1027), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView$7_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView$7', 1028), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView$8_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView$8', 1029), Lcom_lemania_sis_client_popup_periodlistpopup_PeriodListPopupPresenter_2_classLit = createForClass('com.lemania.sis.client.popup.periodlistpopup.', 'PeriodListPopupPresenter', 1175), Lcom_lemania_sis_client_popup_periodlistpopup_PeriodListPopupPresenter$1_2_classLit = createForClass('com.lemania.sis.client.popup.periodlistpopup.', 'PeriodListPopupPresenter$1', 1176), Lcom_lemania_sis_client_popup_periodlistpopup_PeriodListPopupPresenter$2_2_classLit = createForClass('com.lemania.sis.client.popup.periodlistpopup.', 'PeriodListPopupPresenter$2', 1177), Lcom_lemania_sis_client_popup_periodlistpopup_PeriodListPopupView_2_classLit = createForClass('com.lemania.sis.client.popup.periodlistpopup.', 'PeriodListPopupView', 1178), Lcom_lemania_sis_client_popup_periodlistpopup_PeriodListPopupView$1_2_classLit = createForClass('com.lemania.sis.client.popup.periodlistpopup.', 'PeriodListPopupView$1', 1179), Lcom_lemania_sis_client_popup_periodlistpopup_PeriodListPopupView$2_2_classLit = createForClass('com.lemania.sis.client.popup.periodlistpopup.', 'PeriodListPopupView$2', 1180), Lcom_lemania_sis_client_popup_periodlistpopup_PeriodListPopupView$3_2_classLit = createForClass('com.lemania.sis.client.popup.periodlistpopup.', 'PeriodListPopupView$3', 1181), Lcom_lemania_sis_client_popup_periodlistpopup_PeriodListPopupView$4_2_classLit = createForClass('com.lemania.sis.client.popup.periodlistpopup.', 'PeriodListPopupView$4', 1182), Lcom_lemania_sis_client_popup_periodlistpopup_PeriodListPopupView$5_2_classLit = createForClass('com.lemania.sis.client.popup.periodlistpopup.', 'PeriodListPopupView$5', 1183), Lcom_lemania_sis_client_popup_periodlistpopup_PeriodListPopupView$6_2_classLit = createForClass('com.lemania.sis.client.popup.periodlistpopup.', 'PeriodListPopupView$6', 1184), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView_BinderImpl', 1030), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView_BinderImpl$Widgets', 1031), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView_BinderImpl$Widgets$1', 1032), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView_BinderImpl$Widgets$2', 1033), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView_BinderImpl$Widgets$3', 1034), Lcom_lemania_sis_client_popup_periodlistpopup_PeriodListPopupView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.popup.periodlistpopup.', 'PeriodListPopupView_BinderImpl', 1185), Lcom_lemania_sis_client_popup_periodlistpopup_PeriodListPopupView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.popup.periodlistpopup.', 'PeriodListPopupView_BinderImpl$Widgets', 1186), Lcom_lemania_sis_client_popup_periodlistpopup_PeriodListPopupView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.popup.periodlistpopup.', 'PeriodListPopupView_BinderImpl$Widgets$1', 1187), Lcom_lemania_sis_client_popup_periodlistpopup_PeriodListPopupView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.popup.periodlistpopup.', 'PeriodListPopupView_BinderImpl$Widgets$2', 1188), Lcom_lemania_sis_shared_perioditem_PeriodItemProxy_2_classLit = createForInterface('com.lemania.sis.shared.perioditem.', 'PeriodItemProxy'), Lcom_lemania_sis_shared_perioditem_PeriodItemRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.perioditem.', 'PeriodItemRequestFactoryImpl', 1898), Lcom_lemania_sis_client_popup_periodlistpopup_PeriodListPopupView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.lemania.sis.client.popup.periodlistpopup.', 'PeriodListPopupView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1189), Lcom_lemania_sis_client_popup_periodlistpopup_PeriodListPopupView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.lemania.sis.client.popup.periodlistpopup.', 'PeriodListPopupView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1', 1190), Lcom_lemania_sis_shared_perioditem_PeriodItemRequestFactory_1PeriodItemRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.perioditem.', 'PeriodItemRequestFactory_PeriodItemRequestContextImpl', 1899), Lcom_lemania_sis_shared_perioditem_PeriodItemRequestFactory_1PeriodItemRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.perioditem.', 'PeriodItemRequestFactory_PeriodItemRequestContextImpl$1X', 1900), Lcom_lemania_sis_shared_perioditem_PeriodItemRequestFactory_1PeriodItemRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.perioditem.', 'PeriodItemRequestFactory_PeriodItemRequestContextImpl$3X', 1901), Lcom_lemania_sis_shared_period_PeriodRequestFactory_1PeriodRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.period.', 'PeriodRequestFactory_PeriodRequestContextImpl$1X', 1890), Lcom_lemania_sis_shared_period_PeriodRequestFactory_1PeriodRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.period.', 'PeriodRequestFactory_PeriodRequestContextImpl$8X', 1893), Lcom_lemania_sis_shared_perioditem_PeriodItemRequestFactory_1PeriodItemRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.perioditem.', 'PeriodItemRequestFactory_PeriodItemRequestContextImpl_FactoryImpl', 1902), Lcom_lemania_sis_shared_perioditem_PeriodItemProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.perioditem.', 'PeriodItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1895), Lcom_lemania_sis_shared_perioditem_PeriodItemProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.perioditem.', 'PeriodItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1896), Lcom_lemania_sis_shared_perioditem_PeriodItemProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.perioditem.', 'PeriodItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1897);
$entry(onLoad)(30);
