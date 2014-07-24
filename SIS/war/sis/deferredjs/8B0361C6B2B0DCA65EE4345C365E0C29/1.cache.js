function $addClassroom(this$static, name_0, capacity, note, isActive){
  var rc, x;
  rc = $getRequestContext(this$static);
  $fire((x = new ClassroomRequestFactory_ClassroomRequestContextImpl$1X_0(rc, name_0, capacity, note, isActive) , $addInvocation(rc.state.dialect, x) , x), new ClassroomPresenter$2_0(this$static));
}

function $getRequestContext(this$static){
  var rf;
  rf = new ClassroomRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  return new ClassroomRequestFactory_ClassroomRequestContextImpl_0(rf);
}

function $updateClassroom(this$static, cp, name_0, capacity, note, isActive){
  var cu, rc, x;
  rc = $getRequestContext(this$static);
  cu = dynamicCast($editProxy(rc, cp), Q$ClassroomProxy);
  cu.setRoomName(name_0);
  cu.setRoomCapacity(capacity);
  cu.setRoomNote(note);
  cu.setActive_0(isActive);
  $fire((x = new ClassroomRequestFactory_ClassroomRequestContextImpl$6X_0(rc, cu) , $addInvocation(rc.state.dialect, x) , x), new ClassroomPresenter$3_0);
}

function ClassroomPresenter_0(eventBus, view, proxy){
  $clinit_ClassroomPresenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ClassroomPresenter$MyView).setUiHandlers(this);
}

defineSeed(907, 792, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ClassroomUiHandlers]), ClassroomPresenter_0);
_.onBind = function onBind_2(){
  $initializeTable(dynamicCast(dynamicCast(this.view, Q$ClassroomPresenter$MyView), Q$ClassroomView));
}
;
_.onReset = function onReset_1(){
  var rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('classroom'), null);
  rc = $getRequestContext(this);
  $fire($listAll(rc), new ClassroomPresenter$1_0(this));
}
;
function $onSuccess_10(this$static, response){
  $setClassroomTableData(dynamicCast(this$static.this$0.view, Q$ClassroomPresenter$MyView), response);
}

function ClassroomPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(908, 723, makeCastMap([Q$Receiver]), ClassroomPresenter$1_0);
_.onFailure_0 = function onFailure_11(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_11(response){
  $onSuccess_10(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_11(this$static, response){
  $addClassroomToList(dynamicCast(this$static.this$0.view, Q$ClassroomPresenter$MyView), response);
}

function ClassroomPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(909, 723, makeCastMap([Q$Receiver]), ClassroomPresenter$2_0);
_.onFailure_0 = function onFailure_12(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_12(response){
  $onSuccess_11(this, dynamicCast(response, Q$ClassroomProxy));
}
;
_.this$0 = null;
function ClassroomPresenter$3_0(){
}

defineSeed(910, 723, makeCastMap([Q$Receiver]), ClassroomPresenter$3_0);
_.onFailure_0 = function onFailure_13(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_13(response){
  dynamicCast(response, Q$ClassroomProxy);
}
;
function $addClassroomToList(this$static, cp){
  $add_15(this$static.classroomDataProvider.listWrapper, cp);
  $refresh(this$static.classroomDataProvider);
}

function $initializeTable(this$static){
  var cellActive, colActive, colCapacity, colName, colNote;
  colName = new ClassroomView$1_0(new EditTextCell_0);
  $addColumn(this$static.cellTable, colName, 'Nom');
  $setFieldUpdater(colName, new ClassroomView$2_0(this$static));
  colCapacity = new ClassroomView$3_0(new EditTextCell_0);
  $addColumn(this$static.cellTable, colCapacity, 'Capacit\xE9');
  $setFieldUpdater(colCapacity, new ClassroomView$4_0(this$static));
  colNote = new ClassroomView$5_0(new EditTextCell_0);
  $addColumn(this$static.cellTable, colNote, 'Commentaire');
  $setFieldUpdater(colNote, new ClassroomView$6_0(this$static));
  cellActive = new CheckboxCell_0;
  colActive = new ClassroomView$7_0(cellActive);
  $addColumn(this$static.cellTable, colActive, 'Active');
  $setFieldUpdater(colActive, new ClassroomView$8_0(this$static));
  $addDataDisplay(this$static.classroomDataProvider, this$static.cellTable);
}

function $onCmdAddClick(this$static){
  if ($getValue_1(this$static.txtCapacity) == null) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Capacit\xE9');
    return;
  }
  $addClassroom(dynamicCast(this$static.uiHandlers, Q$ClassroomUiHandlers), $getPropertyString(this$static.txtClassroomName.element, 'value'), dynamicCast($getValue_1(this$static.txtCapacity), Q$Integer).value_0, $getPropertyString(this$static.txtNote.element, 'value'), $getValue_0(this$static.chkActif).value_0);
}

function $setClassroomTableData(this$static, list){
  $clear_3(this$static.classroomDataProvider.listWrapper);
  $setList(this$static.classroomDataProvider, list);
  $flushNow(this$static.classroomDataProvider.listWrapper);
}

function ClassroomView_0(){
  this.cellTable = new CellTable_0;
  this.classroomDataProvider = new ListDataProvider_0;
  $initWidget_0(this, $build_f_HTMLPanel1_0(new ClassroomView_BinderImpl$Widgets_0(this)));
}

defineSeed(913, 797, makeCastMap([Q$IsWidget, Q$ClassroomPresenter$MyView, Q$ClassroomView]), ClassroomView_0);
_.chkActif = null;
_.txtCapacity = null;
_.txtClassroomName = null;
_.txtNote = null;
function ClassroomView$1_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(914, 423, makeCastMap([Q$HasCell, Q$Column]), ClassroomView$1_0);
_.getValue = function getValue_8(object){
  return dynamicCast(object, Q$ClassroomProxy).getRoomName();
}
;
function $update_2(this$static, classe, value){
  classe.getRoomName() != value && !!this$static.this$0.uiHandlers && $updateClassroom(dynamicCast(this$static.this$0.uiHandlers, Q$ClassroomUiHandlers), classe, value, classe.getRoomCapacity(), classe.getRoomNote(), classe.isActive());
}

function ClassroomView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(915, 1, {}, ClassroomView$2_0);
_.update = function update_3(index, classe, value){
  $update_2(this, dynamicCast(classe, Q$ClassroomProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function ClassroomView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(916, 423, makeCastMap([Q$HasCell, Q$Column]), ClassroomView$3_0);
_.getValue = function getValue_9(object){
  return '' + dynamicCast(object, Q$ClassroomProxy).getRoomCapacity();
}
;
function $update_3(this$static, classe, value){
  classe.getRoomCapacity() != __parseAndValidateInt(value) && !!this$static.this$0.uiHandlers && $updateClassroom(dynamicCast(this$static.this$0.uiHandlers, Q$ClassroomUiHandlers), classe, classe.getRoomName(), __parseAndValidateInt(value), classe.getRoomNote(), classe.isActive());
}

function ClassroomView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(917, 1, {}, ClassroomView$4_0);
_.update = function update_4(index, classe, value){
  $update_3(this, dynamicCast(classe, Q$ClassroomProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function ClassroomView$5_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(918, 423, makeCastMap([Q$HasCell, Q$Column]), ClassroomView$5_0);
_.getValue = function getValue_10(object){
  return dynamicCast(object, Q$ClassroomProxy).getRoomNote();
}
;
function $update_4(this$static, classe, value){
  classe.getRoomNote() != value && !!this$static.this$0.uiHandlers && $updateClassroom(dynamicCast(this$static.this$0.uiHandlers, Q$ClassroomUiHandlers), classe, classe.getRoomName(), classe.getRoomCapacity(), value, classe.isActive());
}

function ClassroomView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(919, 1, {}, ClassroomView$6_0);
_.update = function update_5(index, classe, value){
  $update_4(this, dynamicCast(classe, Q$ClassroomProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function $getValue_4(classe){
  return $clinit_Boolean() , classe.isActive()?TRUE_1:FALSE_1;
}

function ClassroomView$7_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(920, 423, makeCastMap([Q$HasCell, Q$Column]), ClassroomView$7_0);
_.getValue = function getValue_11(classe){
  return $getValue_4(dynamicCast(classe, Q$ClassroomProxy));
}
;
function $update_5(this$static, classe, value){
  !!this$static.this$0.uiHandlers && $updateClassroom(dynamicCast(this$static.this$0.uiHandlers, Q$ClassroomUiHandlers), classe, classe.getRoomName(), classe.getRoomCapacity(), classe.getRoomNote(), value.value_0);
}

function ClassroomView$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(921, 1, {}, ClassroomView$8_0);
_.update = function update_6(index, classe, value){
  $update_5(this, dynamicCast(classe, Q$ClassroomProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function ClassroomView_BinderImpl_0(){
}

defineSeed(922, 1, {}, ClassroomView_BinderImpl_0);
function $build_f_HTMLPanel1_0(this$static){
  var attachRecord0, f_HTMLPanel1, f_Label2, f_VerticalPanel3, f_VerticalPanel4, f_Label5, f_Grid6, f_Label7, txtClassroomName, f_Label8, txtCapacity, f_Label9, txtNote, f_Label10, chkActif, f_HorizontalPanel12, f_Label13, f_Label14, cellTable, cmdAdd, sb;
  f_HTMLPanel1 = new HTMLPanel_0($html2(this$static.domId0, this$static.domId1).html);
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  $get_1(this$static.domId1Element);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label2.directionalTextHelper, 'SALLE DE CLASSE', false) , $updateHorizontalAlignment(f_Label2) , f_Label2), $get_1(this$static.domId0Element));
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel3 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel3, ALIGN_CENTER) , $add_12(f_VerticalPanel3, (f_VerticalPanel4 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel4, ALIGN_CENTER) , $setVerticalAlignment_0(f_VerticalPanel4, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_12(f_VerticalPanel4, (f_Label5 = new Label_0 , f_Label5.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label5.directionalTextHelper, 'Rajouter une salle de classe', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $add_12(f_VerticalPanel4, (f_Grid6 = new Grid_0 , $resizeColumns(f_Grid6, 2) , $resizeRows(f_Grid6, 5) , $setWidget_3(f_Grid6, 0, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Nom de la salle :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_3(f_Grid6, 0, 1, (txtClassroomName = new TextBox_0 , txtClassroomName.element['className'] = 'sis_textbox' , txtClassroomName.element.style['width'] = '' , this$static.owner.txtClassroomName = txtClassroomName , txtClassroomName)) , $setWidget_3(f_Grid6, 1, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Capacit\xE9 :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_3(f_Grid6, 1, 1, (txtCapacity = new IntegerBox_0 , this$static.owner.txtCapacity = txtCapacity , txtCapacity)) , $setWidget_3(f_Grid6, 2, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Note :', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_3(f_Grid6, 2, 1, (txtNote = new TextBox_0 , txtNote.element['className'] = 'sis_textbox' , this$static.owner.txtNote = txtNote , txtNote)) , $setWidget_3(f_Grid6, 3, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Actif :', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_3(f_Grid6, 3, 1, (chkActif = new CheckBox_0 , $setValue_0(chkActif, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , this$static.owner.chkActif = chkActif , chkActif)) , $setWidget_3(f_Grid6, 4, 0, new Label_0) , $setWidget_3(f_Grid6, 4, 1, (f_HorizontalPanel12 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel12, ALIGN_RIGHT) , $add_10(f_HorizontalPanel12, (cmdAdd = new Button_0 , $setHTML(cmdAdd, (sb = new StringBuilder_0 , sb.impl.string += 'Ajouter' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , $setInnerText(cmdAdd.element, 'Enregistrer') , $addDomHandler(cmdAdd, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdAdd)) , f_HorizontalPanel12.element.style['width'] = '100%' , f_HorizontalPanel12)) , f_Grid6.element.style['width'] = '100%' , f_Grid6.tableElem['cellSpacing'] = 2 , f_Grid6.tableElem['cellPadding'] = 2 , f_Grid6)) , f_VerticalPanel4.element['className'] = 'subSection' , f_VerticalPanel4.element.style['width'] = '543px' , f_VerticalPanel4)) , $add_12(f_VerticalPanel3, (f_Label13 = new Label_0 , f_Label13.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label13.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $add_12(f_VerticalPanel3, (f_Label14 = new Label_0 , f_Label14.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label14.directionalTextHelper, 'Liste des salles de classe', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $add_12(f_VerticalPanel3, (cellTable = this$static.owner.cellTable , cellTable.element.style['width'] = '100%' , cellTable)) , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3.table['cellSpacing'] = 5 , f_VerticalPanel3), $get_1(this$static.domId1Element));
  return f_HTMLPanel1;
}

function ClassroomView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ClassroomView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
  this.domId1Element = new LazyDomElement_0(this.domId1);
}

defineSeed(923, 1, {}, ClassroomView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.domId1 = null;
_.domId1Element = null;
_.owner = null;
function ClassroomView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(924, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ClassroomView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_4(event_0){
  $onCmdAddClick(this.this$1.owner);
}
;
_.this$1 = null;
function $html2(arg0, arg1){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span> <span id='";
  $append_11(sb, htmlEscape(arg1));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$form$classroom$ClassroomPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$classroom$ClassroomPresenter$_annotation$$none$$) {
    result = new ClassroomPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$form$classroom$ClassroomView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$sis$client$form$classroom$ClassroomPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$form$classroom$ClassroomPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$classroom$ClassroomPresenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$sis$client$form$classroom$ClassroomView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$classroom$ClassroomView$_annotation$$none$$) {
    result = new ClassroomView_0(new ClassroomView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$form$classroom$ClassroomView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$classroom$ClassroomView$_annotation$$none$$;
}

defineSeed(928, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_14(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$form$classroom$ClassroomPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1855, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ClassroomProxy]));
_.setActive_0 = function setActive_3(isActive){
  dynamicCast($getWrapped(this.this$0), Q$ClassroomProxy).setActive_0(isActive);
  $clinit_Boolean();
}
;
_.setRoomCapacity = function setRoomCapacity(roomCapacity){
  dynamicCast($getWrapped(this.this$0), Q$ClassroomProxy).setRoomCapacity(roomCapacity);
  valueOf_1(roomCapacity);
}
;
_.setRoomName = function setRoomName(roomName){
  dynamicCast($getWrapped(this.this$0), Q$ClassroomProxy).setRoomName(roomName);
}
;
_.setRoomNote = function setRoomNote(roomNote){
  dynamicCast($getWrapped(this.this$0), Q$ClassroomProxy).setRoomNote(roomNote);
}
;
defineSeed(1856, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ClassroomProxy]));
_.setActive_0 = function setActive_4(isActive){
  $setProperty(this.this$0, 'active', ($clinit_Boolean() , isActive?TRUE_1:FALSE_1));
}
;
_.setRoomCapacity = function setRoomCapacity_0(roomCapacity){
  $setProperty(this.this$0, 'roomCapacity', valueOf_1(roomCapacity));
}
;
_.setRoomName = function setRoomName_0(roomName){
  $setProperty(this.this$0, 'roomName', roomName);
}
;
_.setRoomNote = function setRoomNote_0(roomNote){
  $setProperty(this.this$0, 'roomNote', roomNote);
}
;
function ClassroomRequestFactory_ClassroomRequestContextImpl$1X_0(this$0, val$name, val$capacity, val$note, val$isActive){
  this.val$name = val$name;
  this.val$capacity = val$capacity;
  this.val$note = val$note;
  this.val$isActive = val$isActive;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1859, 727, makeCastMap([Q$AbstractRequest]), ClassroomRequestFactory_ClassroomRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_9(){
  return new RequestData_0('$Jo1dmLlYJGv5eM_qBFDvuN2gak=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$name, valueOf_1(this.val$capacity), this.val$note, ($clinit_Boolean() , this.val$isActive?TRUE_1:FALSE_1)]), this.propertyRefs, Lcom_lemania_sis_shared_classroom_ClassroomProxy_2_classLit, null);
}
;
_.val$capacity = 0;
_.val$isActive = false;
_.val$name = null;
_.val$note = null;
function ClassroomRequestFactory_ClassroomRequestContextImpl$6X_0(this$0, val$c){
  this.val$c = val$c;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1861, 727, makeCastMap([Q$AbstractRequest]), ClassroomRequestFactory_ClassroomRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_11(){
  return new RequestData_0('8kcfrMtbpRupx3GA9pEsIHgjz3M=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$c]), this.propertyRefs, Lcom_lemania_sis_shared_classroom_ClassroomProxy_2_classLit, null);
}
;
_.val$c = null;
var Lcom_lemania_sis_client_form_classroom_ClassroomPresenter_2_classLit = createForClass('com.lemania.sis.client.form.classroom.', 'ClassroomPresenter', 907), Lcom_lemania_sis_client_form_classroom_ClassroomPresenter$1_2_classLit = createForClass('com.lemania.sis.client.form.classroom.', 'ClassroomPresenter$1', 908), Lcom_lemania_sis_client_form_classroom_ClassroomPresenter$2_2_classLit = createForClass('com.lemania.sis.client.form.classroom.', 'ClassroomPresenter$2', 909), Lcom_lemania_sis_client_form_classroom_ClassroomPresenter$3_2_classLit = createForClass('com.lemania.sis.client.form.classroom.', 'ClassroomPresenter$3', 910), Lcom_lemania_sis_client_form_classroom_ClassroomView_2_classLit = createForClass('com.lemania.sis.client.form.classroom.', 'ClassroomView', 913), Lcom_lemania_sis_client_form_classroom_ClassroomView$1_2_classLit = createForClass('com.lemania.sis.client.form.classroom.', 'ClassroomView$1', 914), Lcom_lemania_sis_client_form_classroom_ClassroomView$2_2_classLit = createForClass('com.lemania.sis.client.form.classroom.', 'ClassroomView$2', 915), Lcom_lemania_sis_client_form_classroom_ClassroomView$3_2_classLit = createForClass('com.lemania.sis.client.form.classroom.', 'ClassroomView$3', 916), Lcom_lemania_sis_client_form_classroom_ClassroomView$4_2_classLit = createForClass('com.lemania.sis.client.form.classroom.', 'ClassroomView$4', 917), Lcom_lemania_sis_client_form_classroom_ClassroomView$5_2_classLit = createForClass('com.lemania.sis.client.form.classroom.', 'ClassroomView$5', 918), Lcom_lemania_sis_client_form_classroom_ClassroomView$6_2_classLit = createForClass('com.lemania.sis.client.form.classroom.', 'ClassroomView$6', 919), Lcom_lemania_sis_client_form_classroom_ClassroomView$7_2_classLit = createForClass('com.lemania.sis.client.form.classroom.', 'ClassroomView$7', 920), Lcom_lemania_sis_client_form_classroom_ClassroomView$8_2_classLit = createForClass('com.lemania.sis.client.form.classroom.', 'ClassroomView$8', 921), Lcom_lemania_sis_client_form_classroom_ClassroomView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.form.classroom.', 'ClassroomView_BinderImpl', 922), Lcom_lemania_sis_client_form_classroom_ClassroomView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.form.classroom.', 'ClassroomView_BinderImpl$Widgets', 923), Lcom_lemania_sis_client_form_classroom_ClassroomView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.form.classroom.', 'ClassroomView_BinderImpl$Widgets$1', 924), Lcom_lemania_sis_shared_classroom_ClassroomRequestFactory_1ClassroomRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.classroom.', 'ClassroomRequestFactory_ClassroomRequestContextImpl$1X', 1859), Lcom_lemania_sis_shared_classroom_ClassroomRequestFactory_1ClassroomRequestContextImpl$6X_2_classLit = createForClass('com.lemania.sis.shared.classroom.', 'ClassroomRequestFactory_ClassroomRequestContextImpl$6X', 1861);
$entry(onLoad)(1);
