function $onProfessorChange(this$static, profId){
  var rc, rf, x;
  rf = new MasterAgendaItemRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl_0(rf);
  $fire((x = new MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$5X_0(rc, profId) , $addInvocation(rc.state.dialect, x) , x), new ProfessorAgendaPresenter$2_0(this$static));
}

function ProfessorAgendaPresenter_0(eventBus, view, proxy){
  $clinit_ProfessorAgendaPresenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ProfessorAgendaPresenter$MyView).setUiHandlers(this);
}

defineSeed(1043, 796, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ProfessorAgendaUiHandlers]), ProfessorAgendaPresenter_0);
_.onBind = function onBind_7(){
}
;
_.onReset = function onReset_6(){
  var rf, rc, x;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('profagenda'), null);
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire((x = new ProfessorRequestFactory_ProfessorRequestContextImpl$4X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new ProfessorAgendaPresenter$1_0(this));
}
;
function $onSuccess_26(this$static, response){
  $setProfList(dynamicCast(this$static.this$0.view, Q$ProfessorAgendaPresenter$MyView), response);
}

function ProfessorAgendaPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1044, 727, makeCastMap([Q$Receiver]), ProfessorAgendaPresenter$1_0);
_.onFailure_0 = function onFailure_32(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_32(response){
  $onSuccess_26(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_27(this$static, response){
  $showMasterAgendaItemData_0(dynamicCast(this$static.this$0.view, Q$ProfessorAgendaPresenter$MyView), response);
}

function ProfessorAgendaPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1045, 727, makeCastMap([Q$Receiver]), ProfessorAgendaPresenter$2_0);
_.onFailure_0 = function onFailure_33(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_33(response){
  $onSuccess_27(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $clearTable(this$static){
  var i, j, k, vp;
  for (i = 1; i < this$static.tblAgenda.bodyElem.rows.length; ++i) {
    for (k = 1; k < $getCellCount(this$static.tblAgenda, 0); ++k) {
      vp = dynamicCast($getWidget(this$static.tblAgenda, i, k), Q$VerticalPanel);
      if (!vp)
        continue;
      for (j = 1; j < vp.children_0.size_0; ++j)
        $removeFromParent_0(dynamicCast($get_4(vp.children_0, j), Q$AgendaVerticalPanel));
    }
  }
}

function $drawTable_0(this$static){
  var i, j, vp;
  $removeAllRows(this$static.tblAgenda);
  $setText_2(this$static.tblAgenda, 0, 0, '');
  $setText_2(this$static.tblAgenda, 0, 1, getDayName('D2'));
  $setText_2(this$static.tblAgenda, 0, 2, getDayName('D3'));
  $setText_2(this$static.tblAgenda, 0, 3, getDayName('D4'));
  $setText_2(this$static.tblAgenda, 0, 4, getDayName('D5'));
  $setText_2(this$static.tblAgenda, 0, 5, getDayName('D6'));
  for (i = 0; i < $getCellCount(this$static.tblAgenda, 0); ++i) {
    $setText_2(this$static.tblAgenda, 1, i, ' ');
  }
  for (i = 1; i < this$static.tblAgenda.bodyElem.rows.length; ++i) {
    for (j = 1; j < $getCellCount(this$static.tblAgenda, 0); ++j) {
      vp = new VerticalPanel_0;
      $add_12(vp, new Label_2('+'));
      $get_4(vp.children_0, 0).getStyleElement()['className'] = 'hiddenText';
      $setWidget_3(this$static.tblAgenda, i, j, vp);
      $addDomHandler(vp, new ProfessorAgendaView$3_0(vp), ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_7));
      $addDomHandler(vp, new ProfessorAgendaView$4_0(vp), ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_6));
      vp.element['className'] = 'agendaItemContainer';
      $setWidget_3(this$static.tblAgenda, i, j, vp);
    }
  }
  i = this$static.tblAgenda.bodyElem.rows.length;
  $setText_2(this$static.tblAgenda, i, 0, '');
  $setText_2(this$static.tblAgenda, i, 1, 'D2');
  $setText_2(this$static.tblAgenda, i, 2, 'D3');
  $setText_2(this$static.tblAgenda, i, 3, 'D4');
  $setText_2(this$static.tblAgenda, i, 4, 'D5');
  $setText_2(this$static.tblAgenda, i, 5, 'D6');
  $styleTable_0(this$static);
}

function $getCellIndexById_0(this$static, jourCode){
  var i;
  for (i = 0; i < $getCellCount(this$static.tblAgenda, 0); ++i) {
    if ($equals_6($getText(this$static.tblAgenda, this$static.tblAgenda.bodyElem.rows.length - 1, i), jourCode))
      return i;
  }
  return -1;
}

function $getRowIndexById_0(){
  return 1;
}

function $onLstProfsChange(this$static){
  $onProfessorChange(dynamicCast(this$static.uiHandlers, Q$ProfessorAgendaUiHandlers), $getValue_2(this$static.lstProfs, this$static.lstProfs.element.selectedIndex));
}

function $setProfList(this$static, profs){
  var prof, prof$iterator;
  $selectClear(this$static.lstProfs.element);
  $insertItem_0(this$static.lstProfs, 'Choisir', '', -1);
  for (prof$iterator = profs.iterator(); prof$iterator.hasNext();) {
    prof = dynamicCast(prof$iterator.next_0(), Q$ProfessorProxy);
    $insertItem_0(this$static.lstProfs, prof.getProfName(), '' + toString_6(prof.getId_0().value_0), -1);
  }
}

function $showMasterAgendaItem_0(this$static, mai, rowIndex, cellIndex){
  var avp, duration, i, lblNormal, lblSubject;
  duration = mai.getDuration();
  for (i = 0; i < duration; ++i) {
    avp = new AgendaVerticalPanel_0;
    avp.element['className'] = 'agendaSelected';
    avp.element.style['backgroundColor'] = $get_10(($clinit_ClassPeriod() , colors), this$static.colorIndex);
    $addDomHandler(avp, new ProfessorAgendaView$1_0(avp), ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_7));
    $addDomHandler(avp, new ProfessorAgendaView$2_0(avp), ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_6));
    avp.mai = mai;
    avp.cellIndex_0 = cellIndex;
    avp.rowIndex = rowIndex;
    lblSubject = new Label_2(mai.getSubjectName());
    lblSubject.element['className'] = 'agendaSubjectText';
    $add_12(avp, lblSubject);
    lblNormal = new Label_2(mai.getProfName() + ' - ' + mai.getClassroomName());
    lblNormal.element['className'] = 'agendaNormalText';
    $add_12(avp, lblNormal);
    $add_12(dynamicCast($getWidget(this$static.tblAgenda, rowIndex, cellIndex), Q$VerticalPanel), avp);
  }
  this$static.colorIndex + 1 < ($clinit_ClassPeriod() , colors).array.length?++this$static.colorIndex:(this$static.colorIndex = 0);
}

function $showMasterAgendaItemData_0(this$static, mais){
  var cellIndex, mai, mai$iterator, rowIndex;
  $drawTable_0(this$static);
  $clearTable(this$static);
  for (mai$iterator = mais.iterator(); mai$iterator.hasNext();) {
    mai = dynamicCast(mai$iterator.next_0(), Q$MasterAgendaItemProxy);
    rowIndex = $getRowIndexById_0(mai.getPeriodId());
    cellIndex = $getCellIndexById_0(this$static, mai.getJourCode());
    rowIndex != -1 && cellIndex != -1 && $showMasterAgendaItem_0(this$static, mai, rowIndex, cellIndex);
  }
}

function $styleTable_0(this$static){
  var i, j;
  for (i = 0; i < this$static.tblAgenda.bodyElem.rows.length; ++i) {
    for (j = 0; j < $getCellCount(this$static.tblAgenda, 0); ++j) {
      $isCellPresent(this$static.tblAgenda, i, j) && $setStyleName_0(this$static.tblAgenda.cellFormatter, i, j, 'agendaNormal');
    }
  }
  for (j = 0; j < $getCellCount(this$static.tblAgenda, 0); ++j) {
    $isCellPresent(this$static.tblAgenda, this$static.tblAgenda.bodyElem.rows.length - 1, j) && $setStyleName_0(this$static.tblAgenda.cellFormatter, this$static.tblAgenda.bodyElem.rows.length - 1, j, 'agendaHidden');
  }
  for (i = 0; i < this$static.tblAgenda.bodyElem.rows.length; ++i)
    $isCellPresent(this$static.tblAgenda, i, $getCellCount(this$static.tblAgenda, 0)) && $setStyleName_0(this$static.tblAgenda.cellFormatter, i, $getCellCount(this$static.tblAgenda, 0), 'agendaHidden');
  for (j = 0; j < $getCellCount(this$static.tblAgenda, 0); ++j) {
    $isCellPresent(this$static.tblAgenda, 0, j) && $setStyleName_0(this$static.tblAgenda.cellFormatter, 0, j, 'agendaTitle');
  }
  for (i = 0; i < this$static.tblAgenda.bodyElem.rows.length - 1; ++i)
    $isCellPresent(this$static.tblAgenda, i, 0) && $setStyleName_0(this$static.tblAgenda.cellFormatter, i, 0, 'agendaTitle');
  this$static.tblAgenda.element.style['verticalAlign'] = ($clinit_Style$VerticalAlign() , 'bottom');
}

function ProfessorAgendaView_0(){
  $initWidget_0(this, $build_f_HTMLPanel1_4(new ProfessorAgendaView_BinderImpl$Widgets_0(this)));
}

defineSeed(1048, 801, makeCastMap([Q$IsWidget, Q$ProfessorAgendaPresenter$MyView]), ProfessorAgendaView_0);
_.colorIndex = 0;
_.lstProfs = null;
_.tblAgenda = null;
function ProfessorAgendaView$1_0(val$avp){
  this.val$avp = val$avp;
}

defineSeed(1049, 1, makeCastMap([Q$MouseOverHandler, Q$EventHandler]), ProfessorAgendaView$1_0);
_.onMouseOver = function onMouseOver_2(arg0){
  this.val$avp.element.style['borderStyle'] = ($clinit_Style$BorderStyle() , 'solid');
  this.val$avp.element.style['borderWidth'] = 1 + ($clinit_Style$Unit() , 'px');
  this.val$avp.element.style['borderColor'] = 'lightskyblue';
  this.val$avp.element.style['cursor'] = ($clinit_Style$Cursor() , 'pointer');
}
;
_.val$avp = null;
function ProfessorAgendaView$2_0(val$avp){
  this.val$avp = val$avp;
}

defineSeed(1050, 1, makeCastMap([Q$MouseOutHandler, Q$EventHandler]), ProfessorAgendaView$2_0);
_.onMouseOut = function onMouseOut_2(arg0){
  this.val$avp.element.style['borderColor'] = 'white';
  this.val$avp.element.style['cursor'] = ($clinit_Style$Cursor() , 'auto');
}
;
_.val$avp = null;
function ProfessorAgendaView$3_0(val$vp){
  this.val$vp = val$vp;
}

defineSeed(1051, 1, makeCastMap([Q$MouseOverHandler, Q$EventHandler]), ProfessorAgendaView$3_0);
_.onMouseOver = function onMouseOver_3(arg0){
  this.val$vp.element.style['backgroundColor'] = '#f2f2f2';
}
;
_.val$vp = null;
function ProfessorAgendaView$4_0(val$vp){
  this.val$vp = val$vp;
}

defineSeed(1052, 1, makeCastMap([Q$MouseOutHandler, Q$EventHandler]), ProfessorAgendaView$4_0);
_.onMouseOut = function onMouseOut_3(arg0){
  this.val$vp.element.style['backgroundColor'] = 'white';
}
;
_.val$vp = null;
function ProfessorAgendaView_BinderImpl_0(){
}

defineSeed(1053, 1, {}, ProfessorAgendaView_BinderImpl_0);
function $build_f_HTMLPanel1_4(this$static){
  var attachRecord30, f_HTMLPanel1, f_Label2, pnlPrincipal, f_VerticalPanel3, f_HorizontalPanel4, f_Label5, lstProfs, tblAgenda;
  f_HTMLPanel1 = new HTMLPanel_0($html1_3(this$static.domId0, this$static.domId1).html);
  attachRecord30 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  $get_1(this$static.domId1Element);
  attachRecord30.origParent?$insertBefore(attachRecord30.origParent, attachRecord30.element, attachRecord30.origSibling):orphan(attachRecord30.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label2.directionalTextHelper, 'Les horaires des enseignants', false) , $updateHorizontalAlignment(f_Label2) , f_Label2), $get_1(this$static.domId0Element));
  $addAndReplaceElement(f_HTMLPanel1, (pnlPrincipal = new VerticalPanel_0 , $setHorizontalAlignment_1(pnlPrincipal, ALIGN_CENTER) , $add_12(pnlPrincipal, (f_VerticalPanel3 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel3, ALIGN_CENTER) , $add_12(f_VerticalPanel3, (f_HorizontalPanel4 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel4, ALIGN_LEFT) , $add_10(f_HorizontalPanel4, (f_Label5 = new Label_0 , $setHorizontalAlignment(f_Label5, ALIGN_RIGHT) , $setTextOrHtml(f_Label5.directionalTextHelper, 'Professeur :', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $add_10(f_HorizontalPanel4, (lstProfs = new ListBox_0 , $addDomHandler(lstProfs, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstProfs = lstProfs , lstProfs)) , f_HorizontalPanel4.element['className'] = 'toolbar' , f_HorizontalPanel4.element.style['width'] = '80%' , f_HorizontalPanel4.table['cellSpacing'] = 5 , f_HorizontalPanel4)) , $add_12(f_VerticalPanel3, (tblAgenda = new FlexTable_0 , tblAgenda.tableElem['border'] = '0' , tblAgenda.element.style['width'] = '100%' , this$static.owner.tblAgenda = tblAgenda , tblAgenda)) , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3.table['cellSpacing'] = 10 , f_VerticalPanel3)) , pnlPrincipal.element.style['width'] = '100%' , pnlPrincipal.table['cellSpacing'] = 5 , pnlPrincipal), $get_1(this$static.domId1Element));
  return f_HTMLPanel1;
}

function ProfessorAgendaView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ProfessorAgendaView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
  this.domId1Element = new LazyDomElement_0(this.domId1);
}

defineSeed(1054, 1, {}, ProfessorAgendaView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.domId1 = null;
_.domId1Element = null;
_.owner = null;
function ProfessorAgendaView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1055, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfessorAgendaView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_7(event_0){
  $onLstProfsChange(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_3(arg0, arg1){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span> <span id='");
  $append_10(sb, htmlEscape(arg1));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$form$profagenda$ProfessorAgendaPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$profagenda$ProfessorAgendaPresenter$_annotation$$none$$) {
    result = new ProfessorAgendaPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$form$profagenda$ProfessorAgendaView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$sis$client$form$profagenda$ProfessorAgendaPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$form$profagenda$ProfessorAgendaPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$profagenda$ProfessorAgendaPresenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$sis$client$form$profagenda$ProfessorAgendaView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$profagenda$ProfessorAgendaView$_annotation$$none$$) {
    result = new ProfessorAgendaView_0(new ProfessorAgendaView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$form$profagenda$ProfessorAgendaView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$profagenda$ProfessorAgendaView$_annotation$$none$$;
}

defineSeed(1059, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_34(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$form$profagenda$ProfessorAgendaPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$5X_0(this$0, val$profId){
  this.val$profId = val$profId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1876, 731, makeCastMap([Q$AbstractRequest]), MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_14(){
  return new RequestData_0('$wo3LpoFvRfX5i0uOly5mIImV7o=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemProxy_2_classLit);
}
;
_.val$profId = null;
function ProfessorRequestFactory_ProfessorRequestContextImpl$4X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1988, 731, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_70(){
  return new RequestData_0('icO8LjOKzxdNAD951nu$Xj20xIs=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ProfessorProxy_2_classLit);
}
;
var Lcom_lemania_sis_client_form_profagenda_ProfessorAgendaPresenter_2_classLit = createForClass('com.lemania.sis.client.form.profagenda.', 'ProfessorAgendaPresenter', 1043), Lcom_lemania_sis_client_form_profagenda_ProfessorAgendaPresenter$1_2_classLit = createForClass('com.lemania.sis.client.form.profagenda.', 'ProfessorAgendaPresenter$1', 1044), Lcom_lemania_sis_client_form_profagenda_ProfessorAgendaPresenter$2_2_classLit = createForClass('com.lemania.sis.client.form.profagenda.', 'ProfessorAgendaPresenter$2', 1045), Lcom_lemania_sis_client_form_profagenda_ProfessorAgendaView_2_classLit = createForClass('com.lemania.sis.client.form.profagenda.', 'ProfessorAgendaView', 1048), Lcom_lemania_sis_client_form_profagenda_ProfessorAgendaView$1_2_classLit = createForClass('com.lemania.sis.client.form.profagenda.', 'ProfessorAgendaView$1', 1049), Lcom_lemania_sis_client_form_profagenda_ProfessorAgendaView$2_2_classLit = createForClass('com.lemania.sis.client.form.profagenda.', 'ProfessorAgendaView$2', 1050), Lcom_lemania_sis_client_form_profagenda_ProfessorAgendaView$3_2_classLit = createForClass('com.lemania.sis.client.form.profagenda.', 'ProfessorAgendaView$3', 1051), Lcom_lemania_sis_client_form_profagenda_ProfessorAgendaView$4_2_classLit = createForClass('com.lemania.sis.client.form.profagenda.', 'ProfessorAgendaView$4', 1052), Lcom_lemania_sis_client_form_profagenda_ProfessorAgendaView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.form.profagenda.', 'ProfessorAgendaView_BinderImpl', 1053), Lcom_lemania_sis_client_form_profagenda_ProfessorAgendaView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.form.profagenda.', 'ProfessorAgendaView_BinderImpl$Widgets', 1054), Lcom_lemania_sis_client_form_profagenda_ProfessorAgendaView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.form.profagenda.', 'ProfessorAgendaView_BinderImpl$Widgets$1', 1055), Lcom_lemania_sis_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$4X', 1988), Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemRequestFactory_1MasterAgendaItemRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.masteragendaitem.', 'MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$5X', 1876);
$entry(onLoad)(31);
