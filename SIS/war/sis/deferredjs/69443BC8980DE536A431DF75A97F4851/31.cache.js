function $addPeriod(this$static, classId, description, order, note, isActive){
  var rc, rf, x;
  if ($equals_5(classId, '')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' Classe');
    return;
  }
  if ($equals_5(description, '')) {
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
  if ($equals_5(classId, '')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' Classe');
    return;
  }
  rf = new PeriodRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new PeriodRequestFactory_PeriodRequestContextImpl_0(rf);
  $fire($listAllByClass(rc, classId), new PeriodManagementPresenter$2_0(this$static));
}

function $updatePeriod(this$static, pp, description, order, note, isActive){
  var pu, rc, rf, x;
  if ($equals_5(description, '')) {
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
  $fire((x = new PeriodRequestFactory_PeriodRequestContextImpl$7X_0(rc, pu) , $addInvocation(rc.state.dialect, x) , x), new PeriodManagementPresenter$4_0(this$static));
}

function PeriodManagementPresenter_0(eventBus, view, proxy){
  $clinit_PeriodManagementPresenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$PeriodManagementPresenter$MyView).setUiHandlers(this);
}

defineSeed(903, 725, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$PeriodManagementUiHandlers]), PeriodManagementPresenter_0);
_.onBind = function onBind_5(){
}
;
_.onReset = function onReset_4(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('periodmgt'), null);
  $initializeTable_0(dynamicCast(dynamicCast(this.view, Q$PeriodManagementPresenter$MyView), Q$PeriodManagementView));
  rf = new ClasseRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAllActive_0(rc), new PeriodManagementPresenter$1_0(this));
}
;
function $onSuccess_20(this$static, response){
  $setClassList_0(dynamicCast(this$static.this$0.view, Q$PeriodManagementPresenter$MyView), response);
}

function PeriodManagementPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(904, 664, makeCastMap([Q$Receiver]), PeriodManagementPresenter$1_0);
_.onFailure_0 = function onFailure_24(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_24(response){
  $onSuccess_20(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_21(this$static, response){
  $showPeriodData(dynamicCast(this$static.this$0.view, Q$PeriodManagementPresenter$MyView), response);
}

function PeriodManagementPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(905, 664, makeCastMap([Q$Receiver]), PeriodManagementPresenter$2_0);
_.onFailure_0 = function onFailure_25(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_25(response){
  $onSuccess_21(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_22(this$static, response){
  $addNewPeriod(dynamicCast(this$static.this$0.view, Q$PeriodManagementPresenter$MyView), response);
}

function PeriodManagementPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(906, 664, makeCastMap([Q$Receiver]), PeriodManagementPresenter$3_0);
_.onFailure_0 = function onFailure_26(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_26(response){
  $onSuccess_22(this, dynamicCast(response, Q$PeriodProxy));
}
;
_.this$0 = null;
function $onSuccess_23(this$static, response){
  $updatePeriod_0(dynamicCast(this$static.this$0.view, Q$PeriodManagementPresenter$MyView), response);
}

function PeriodManagementPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(907, 664, makeCastMap([Q$Receiver]), PeriodManagementPresenter$4_0);
_.onFailure_0 = function onFailure_27(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_27(response){
  $onSuccess_23(this, dynamicCast(response, Q$PeriodProxy));
}
;
_.this$0 = null;
function $addNewPeriod(this$static, period){
  $add_15(this$static.periodDataProvider.listWrapper, period);
  $flushNow(this$static.periodDataProvider.listWrapper);
}

function $initializeTable_0(this$static){
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
  $insertItem(this$static.lstClasses, '-', '', -1);
  for (clazz$iterator = classes.iterator(); clazz$iterator.hasNext();) {
    clazz = dynamicCast(clazz$iterator.next_0(), Q$ClasseProxy);
    $insertItem(this$static.lstClasses, clazz.getClassName(), '' + toString_6(clazz.getId_0().value_0), -1);
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
  $initWidget_0(this, $build_f_HTMLPanel1_2(new PeriodManagementView_BinderImpl$Widgets_0(this)));
}

defineSeed(910, 730, makeCastMap([Q$IsWidget, Q$PeriodManagementPresenter$MyView, Q$PeriodManagementView]), PeriodManagementView_0);
_.chkActif = null;
_.lstClasses = null;
_.selectedPeriodIndex = -1;
_.tblPeriods = null;
_.txtDescription = null;
_.txtNote = null;
_.txtOrder = null;
function PeriodManagementView$1_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(911, 382, makeCastMap([Q$HasCell, Q$Column]), PeriodManagementView$1_0);
_.getValue = function getValue_12(object){
  return '' + dynamicCast(object, Q$PeriodProxy).getOrder();
}
;
function $update_6(this$static, index, period, value){
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

defineSeed(912, 1, {}, PeriodManagementView$2_0);
_.update = function update_7(index, period, value){
  $update_6(this, index, dynamicCast(period, Q$PeriodProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function PeriodManagementView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(913, 382, makeCastMap([Q$HasCell, Q$Column]), PeriodManagementView$3_0);
_.getValue = function getValue_13(object){
  return dynamicCast(object, Q$PeriodProxy).getDescription();
}
;
function $update_7(this$static, index, period, value){
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

defineSeed(914, 1, {}, PeriodManagementView$4_0);
_.update = function update_8(index, period, value){
  $update_7(this, index, dynamicCast(period, Q$PeriodProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function PeriodManagementView$5_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(915, 382, makeCastMap([Q$HasCell, Q$Column]), PeriodManagementView$5_0);
_.getValue = function getValue_14(object){
  return dynamicCast(object, Q$PeriodProxy).getNote();
}
;
function $update_8(this$static, index, period, value){
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

defineSeed(916, 1, {}, PeriodManagementView$6_0);
_.update = function update_9(index, period, value){
  $update_8(this, index, dynamicCast(period, Q$PeriodProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function $getValue_5(period){
  return $clinit_Boolean() , period.isActive()?TRUE_1:FALSE_1;
}

function PeriodManagementView$7_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(917, 382, makeCastMap([Q$HasCell, Q$Column]), PeriodManagementView$7_0);
_.getValue = function getValue_15(period){
  return $getValue_5(dynamicCast(period, Q$PeriodProxy));
}
;
function $update_9(this$static, index, period, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedPeriodIndex = index;
    $updatePeriod(dynamicCast(this$static.this$0.uiHandlers, Q$PeriodManagementUiHandlers), period, period.getDescription(), period.getOrder(), period.getNote(), value.value_0);
  }
}

function PeriodManagementView$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(918, 1, {}, PeriodManagementView$8_0);
_.update = function update_10(index, period, value){
  $update_9(this, index, dynamicCast(period, Q$PeriodProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function PeriodManagementView_BinderImpl_0(){
}

defineSeed(919, 1, {}, PeriodManagementView_BinderImpl_0);
function $build_f_HTMLPanel1_2(this$static){
  var attachRecord30, f_HTMLPanel1, f_Label2, f_VerticalPanel3, f_VerticalPanel4, f_Label5, f_Grid6, f_Label7, lstClasses, f_Label8, txtDescription, f_Label9, txtOrder, f_Label10, txtNote, f_Label11, chkActif, f_HorizontalPanel13, f_Label14, f_Label15, tblPeriods, cmdAdd, sb;
  f_HTMLPanel1 = new HTMLPanel_0($html2_0(this$static.domId0, this$static.domId1).html);
  attachRecord30 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  $get_1(this$static.domId1Element);
  attachRecord30.origParent?$insertBefore(attachRecord30.origParent, attachRecord30.element, attachRecord30.origSibling):orphan(attachRecord30.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label2.directionalTextHelper, 'ORGANISATION DES PERIODES', false) , $updateHorizontalAlignment(f_Label2) , f_Label2), $get_1(this$static.domId0Element));
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel3 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel3, ALIGN_CENTER) , $add_12(f_VerticalPanel3, (f_VerticalPanel4 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel4, ALIGN_CENTER) , $setVerticalAlignment_0(f_VerticalPanel4, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_12(f_VerticalPanel4, (f_Label5 = new Label_0 , f_Label5.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label5.directionalTextHelper, 'Rajouter une p\xE9riode', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $add_12(f_VerticalPanel4, (f_Grid6 = new Grid_0 , $resizeColumns(f_Grid6, 2) , $resizeRows(f_Grid6, 6) , $setWidget_2(f_Grid6, 0, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Classe :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_2(f_Grid6, 0, 1, (lstClasses = new ListBox_0 , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstClasses = lstClasses , lstClasses)) , $setWidget_2(f_Grid6, 1, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Description :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_2(f_Grid6, 1, 1, (txtDescription = new TextBox_0 , this$static.owner.txtDescription = txtDescription , txtDescription)) , $setWidget_2(f_Grid6, 2, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Ordre :', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_2(f_Grid6, 2, 1, (txtOrder = new IntegerBox_0 , this$static.owner.txtOrder = txtOrder , txtOrder)) , $setWidget_2(f_Grid6, 3, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Note :', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_2(f_Grid6, 3, 1, (txtNote = new TextBox_0 , txtNote.element['className'] = 'sis_textbox' , this$static.owner.txtNote = txtNote , txtNote)) , $setWidget_2(f_Grid6, 4, 0, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Actif :', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_2(f_Grid6, 4, 1, (chkActif = new CheckBox_0 , $setValue_0(chkActif, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , this$static.owner.chkActif = chkActif , chkActif)) , $setWidget_2(f_Grid6, 5, 0, new Label_0) , $setWidget_2(f_Grid6, 5, 1, (f_HorizontalPanel13 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel13, ALIGN_RIGHT) , $add_10(f_HorizontalPanel13, (cmdAdd = new Button_0 , $setHTML(cmdAdd, (sb = new StringBuilder_0 , sb.impl.string += 'Ajouter' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , $setInnerText(cmdAdd.element, 'Enregistrer') , $addDomHandler(cmdAdd, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdAdd)) , f_HorizontalPanel13.element.style['width'] = '100%' , f_HorizontalPanel13)) , f_Grid6.element.style['width'] = '100%' , f_Grid6.tableElem['cellSpacing'] = 2 , f_Grid6.tableElem['cellPadding'] = 2 , f_Grid6)) , f_VerticalPanel4.element['className'] = 'subSection' , f_VerticalPanel4.element.style['width'] = '543px' , f_VerticalPanel4)) , $add_12(f_VerticalPanel3, (f_Label14 = new Label_0 , f_Label14.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label14.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $add_12(f_VerticalPanel3, (f_Label15 = new Label_0 , f_Label15.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label15.directionalTextHelper, 'Liste des salles de classe', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $add_12(f_VerticalPanel3, (tblPeriods = new CellTable_0 , tblPeriods.element.style['width'] = '100%' , this$static.owner.tblPeriods = tblPeriods , tblPeriods)) , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3.table['cellSpacing'] = 5 , f_VerticalPanel3), $get_1(this$static.domId1Element));
  return f_HTMLPanel1;
}

function PeriodManagementView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new PeriodManagementView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new PeriodManagementView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
  this.domId1Element = new LazyDomElement_0(this.domId1);
}

defineSeed(920, 1, {}, PeriodManagementView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.domId1 = null;
_.domId1Element = null;
_.owner = null;
function PeriodManagementView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(921, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), PeriodManagementView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_6(event_0){
  $onLstClassesChange_1(this.this$1.owner);
}
;
_.this$1 = null;
function PeriodManagementView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(922, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), PeriodManagementView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_6(event_0){
  $onCmdAddClick_0(this.this$1.owner);
}
;
_.this$1 = null;
function $html2_0(arg0, arg1){
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
    result = new PeriodManagementPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$form$periodmanagement$PeriodManagementView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$sis$client$form$periodmanagement$PeriodManagementPresenter$MyProxy$_annotation$$none$$(this$static));
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

defineSeed(926, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_28(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$form$periodmanagement$PeriodManagementPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1669, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$PeriodProxy]));
_.setActive_0 = function setActive_5(isActive){
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
defineSeed(1670, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$PeriodProxy]));
_.setActive_0 = function setActive_6(isActive){
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

defineSeed(1673, 668, makeCastMap([Q$AbstractRequest]), PeriodRequestFactory_PeriodRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_5(){
  return new RequestData_0('TnbZQPW_WTxg35s5w22gOpNFkjk=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$classId, this.val$description, valueOf_1(this.val$order), this.val$note, ($clinit_Boolean() , this.val$isActive?TRUE_1:FALSE_1)]), this.propertyRefs, Lcom_lemania_sis_shared_period_PeriodProxy_2_classLit, null);
}
;
_.val$classId = null;
_.val$description = null;
_.val$isActive = false;
_.val$note = null;
_.val$order = 0;
function PeriodRequestFactory_PeriodRequestContextImpl$7X_0(this$0, val$pp){
  this.val$pp = val$pp;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1675, 668, makeCastMap([Q$AbstractRequest]), PeriodRequestFactory_PeriodRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_7(){
  return new RequestData_0('NAPY50$RCB31_YxH$rQoBPsSAIE=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$pp]), this.propertyRefs, Lcom_lemania_sis_shared_period_PeriodProxy_2_classLit, null);
}
;
_.val$pp = null;
var Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementPresenter_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementPresenter', 903), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementPresenter$1_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementPresenter$1', 904), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementPresenter$2_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementPresenter$2', 905), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementPresenter$3_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementPresenter$3', 906), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementPresenter$4_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementPresenter$4', 907), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView', 910), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView$1_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView$1', 911), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView$2_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView$2', 912), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView$3_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView$3', 913), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView$4_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView$4', 914), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView$5_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView$5', 915), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView$6_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView$6', 916), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView$7_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView$7', 917), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView$8_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView$8', 918), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView_BinderImpl', 919), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView_BinderImpl$Widgets', 920), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView_BinderImpl$Widgets$1', 921), Lcom_lemania_sis_client_form_periodmanagement_PeriodManagementView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.form.periodmanagement.', 'PeriodManagementView_BinderImpl$Widgets$2', 922), Lcom_lemania_sis_shared_period_PeriodRequestFactory_1PeriodRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.period.', 'PeriodRequestFactory_PeriodRequestContextImpl$1X', 1673), Lcom_lemania_sis_shared_period_PeriodRequestFactory_1PeriodRequestContextImpl$7X_2_classLit = createForClass('com.lemania.sis.shared.period.', 'PeriodRequestFactory_PeriodRequestContextImpl$7X', 1675);
$entry(onLoad)(31);
