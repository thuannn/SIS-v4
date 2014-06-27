function $getX(this$static){
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , (e.clientX || 0) - $getAbsoluteLeft(relativeElem) + $getScrollLeft(relativeElem) + $getScrollLeft(relativeElem.ownerDocument.body);
  }
  return this$static.nativeEvent.clientX || 0;
}

function $getY(this$static){
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , (e.clientY || 0) - $getAbsoluteTop(relativeElem) + (relativeElem.scrollTop || 0) + (relativeElem.ownerDocument.body.scrollTop || 0);
  }
  return this$static.nativeEvent.clientY || 0;
}

function $clinit_MouseDownEvent(){
  $clinit_MouseDownEvent = nullMethod;
  TYPE_4 = new DomEvent$Type_0('mousedown', new MouseDownEvent_0);
}

function $dispatch_0(this$static, handler){
  $beginDragging(handler.this$0, this$static);
}

function MouseDownEvent_0(){
}

defineSeed(251, 241, {}, MouseDownEvent_0);
_.dispatch_0 = function dispatch_5(handler){
  $dispatch_0(this, dynamicCast(handler, Q$MouseDownHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_6(){
  return TYPE_4;
}
;
var TYPE_4;
function $clinit_MouseMoveEvent(){
  $clinit_MouseMoveEvent = nullMethod;
  TYPE_5 = new DomEvent$Type_0('mousemove', new MouseMoveEvent_0);
}

function $dispatch_1(this$static, handler){
  $continueDragging(handler.this$0, this$static);
}

function MouseMoveEvent_0(){
}

defineSeed(252, 241, {}, MouseMoveEvent_0);
_.dispatch_0 = function dispatch_6(handler){
  $dispatch_1(this, dynamicCast(handler, Q$MouseMoveHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_7(){
  return TYPE_5;
}
;
var TYPE_5;
function $clinit_MouseOutEvent(){
  $clinit_MouseOutEvent = nullMethod;
  TYPE_6 = new DomEvent$Type_0('mouseout', new MouseOutEvent_0);
}

function MouseOutEvent_0(){
}

defineSeed(253, 241, {}, MouseOutEvent_0);
_.dispatch_0 = function dispatch_7(handler){
  dynamicCast(dynamicCast(handler, Q$MouseOutHandler), Q$DialogBox$MouseHandler);
}
;
_.getAssociatedType_1 = function getAssociatedType_8(){
  return TYPE_6;
}
;
var TYPE_6;
function $clinit_MouseOverEvent(){
  $clinit_MouseOverEvent = nullMethod;
  TYPE_7 = new DomEvent$Type_0('mouseover', new MouseOverEvent_0);
}

function MouseOverEvent_0(){
}

defineSeed(254, 241, {}, MouseOverEvent_0);
_.dispatch_0 = function dispatch_8(handler){
  dynamicCast(dynamicCast(handler, Q$MouseOverHandler), Q$DialogBox$MouseHandler);
}
;
_.getAssociatedType_1 = function getAssociatedType_9(){
  return TYPE_7;
}
;
var TYPE_7;
function $clinit_MouseUpEvent(){
  $clinit_MouseUpEvent = nullMethod;
  TYPE_8 = new DomEvent$Type_0('mouseup', new MouseUpEvent_0);
}

function $dispatch_2(this$static, handler){
  $endDragging(handler.this$0, this$static);
}

function MouseUpEvent_0(){
}

defineSeed(255, 241, {}, MouseUpEvent_0);
_.dispatch_0 = function dispatch_9(handler){
  $dispatch_2(this, dynamicCast(handler, Q$MouseUpHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_10(){
  return TYPE_8;
}
;
var TYPE_8;
function releaseCapture(elem){
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  elem === captureElem && (captureElem = null);
}

function setCapture(elem){
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  captureElem = elem;
}

function $adopt(this$static, child){
  $setParent(child, this$static);
}

defineSeed(460, 461, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]));
_.doAttachChildren = function doAttachChildren_2(){
  $onAttach(this.decPanel);
}
;
_.doDetachChildren = function doDetachChildren_2(){
  $onDetach(this.decPanel);
}
;
_.getWidget = function getWidget_0(){
  return this.decPanel.widget;
}
;
_.iterator = function iterator_2(){
  return new SimplePanel$1_0(this.decPanel);
}
;
_.remove = function remove_5(w){
  return $remove_3(this.decPanel, w);
}
;
_.setWidget = function setWidget_2(w){
  $setWidget(this.decPanel, w);
  $maybeUpdateSize(this);
}
;
_.decPanel = null;
function $getCellElement(this$static){
  var td, tr;
  tr = $getChild_0(this$static.tbody, 0);
  td = $getChild_0(tr, 1);
  return $getFirstChildElement(td);
}

function DecoratorPanel_0(rowStyles){
  var i, row, table, trElem;
  SimplePanel_1.call(this, $doc.createElement('table'));
  table = this.element;
  this.tbody = $doc.createElement('tbody');
  appendChild(table, this.tbody);
  table['cellSpacing'] = 0;
  table['cellPadding'] = 0;
  for (i = 0; i < rowStyles.length; ++i) {
    row = (trElem = $doc.createElement('tr') , trElem['className'] = rowStyles[i] , $clinit_LocaleInfo() , appendChild(trElem, createTD(rowStyles[i] + 'Left')) , appendChild(trElem, createTD(rowStyles[i] + 'Center')) , appendChild(trElem, createTD(rowStyles[i] + 'Right')) , trElem);
    appendChild(this.tbody, row);
    i == 1 && (this.containerElem = $getFirstChildElement($getChild_0(row, 1)));
  }
  this.element['className'] = 'gwt-DecoratorPanel';
}

function createTD(styleName){
  var inner, tdElem;
  tdElem = $doc.createElement('td');
  inner = $doc.createElement('div');
  $appendChild(tdElem, ($clinit_PotentialElement() , $resolve(inner)));
  tdElem['className'] = styleName;
  inner['className'] = styleName + 'Inner';
  return tdElem;
}

defineSeed(462, 450, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]), DecoratorPanel_0);
_.getContainerElement = function getContainerElement_2(){
  return this.containerElem;
}
;
_.containerElem = null;
_.tbody = null;
function $beginDragging(this$static, event_0){
  $onMouseDown(this$static, (this$static.caption , $getX(event_0)), $getY(event_0));
}

function $continueDragging(this$static, event_0){
  $onMouseMove(this$static, (this$static.caption , $getX(event_0)), $getY(event_0));
}

function $endDragging(this$static, event_0){
  $onMouseUp(this$static, (this$static.caption , $getX(event_0) , $getY(event_0)));
}

function $hide_0(this$static){
  if (this$static.resizeHandlerRegistration) {
    $removeHandler(this$static.resizeHandlerRegistration.real);
    this$static.resizeHandlerRegistration = null;
  }
  $hide(this$static);
}

function $isCaptionEvent(this$static, event_0){
  var target;
  target = $eventGetTarget(event_0);
  if (is_0(target)) {
    return $isOrHasChild($getParentElement($getCellElement(this$static.decPanel)), target);
  }
  return false;
}

function $onMouseDown(this$static, x, y){
  if (!sCaptureElem) {
    this$static.dragging = true;
    setCapture(this$static.element);
    this$static.dragStartX = x;
    this$static.dragStartY = y;
  }
}

function $onMouseMove(this$static, x, y){
  var absX, absY;
  if (this$static.dragging) {
    absX = x + $getAbsoluteLeft(this$static.element);
    absY = y + $getAbsoluteTop(this$static.element);
    if (absX < this$static.clientLeft || absX >= this$static.windowWidth || absY < this$static.clientTop) {
      return;
    }
    $setPopupPosition(this$static, absX - this$static.dragStartX, absY - this$static.dragStartY);
  }
}

function $onMouseUp(this$static){
  this$static.dragging = false;
  releaseCapture(this$static.element);
}

function $onPreviewNativeEvent(this$static, event_0){
  var nativeEvent;
  nativeEvent = event_0.nativeEvent;
  !event_0.isCanceled && $eventGetTypeInt(event_0.nativeEvent.type) == 4 && $isCaptionEvent(this$static, nativeEvent) && (nativeEvent.preventDefault() , undefined);
  event_0.isFirstHandler && (event_0.nativeEvent , false) && (event_0.isCanceled = true);
}

function $setText(this$static, text){
  $setText_0(this$static.caption, text);
}

function DialogBox_0(captionWidget){
  var mouseHandler, td, rowStyles;
  PopupPanel_0.call(this, true);
  this.modal = true;
  rowStyles = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['dialogTop', 'dialogMiddle', 'dialogBottom']);
  this.decPanel = new DecoratorPanel_0(rowStyles);
  $setStyleName(this.decPanel, '');
  setStylePrimaryName($getParentElement($getFirstChildElement(this.element)), 'gwt-DecoratedPopupPanel');
  $setWidget_1(this, this.decPanel);
  setStyleName($getFirstChildElement(this.element), 'popupContent', false);
  setStyleName(this.decPanel.containerElem, 'dialogContent', true);
  $removeFromParent_0(captionWidget);
  this.caption = captionWidget;
  td = $getCellElement(this.decPanel);
  $appendChild(td, ($clinit_PotentialElement() , $resolve(this.caption.element)));
  $adopt(this, this.caption);
  $getParentElement($getFirstChildElement(this.element))['className'] = 'gwt-DialogBox';
  this.windowWidth = $getClientWidth($doc);
  this.clientLeft = 0;
  this.clientTop = 0;
  mouseHandler = new DialogBox$MouseHandler_0(this);
  $addDomHandler(this, mouseHandler, ($clinit_MouseDownEvent() , $clinit_MouseDownEvent() , TYPE_4));
  $addDomHandler(this, mouseHandler, ($clinit_MouseUpEvent() , $clinit_MouseUpEvent() , TYPE_8));
  $addDomHandler(this, mouseHandler, ($clinit_MouseMoveEvent() , $clinit_MouseMoveEvent() , TYPE_5));
  $addDomHandler(this, mouseHandler, ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_7));
  $addDomHandler(this, mouseHandler, ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_6));
}

defineSeed(463, 460, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]));
_.doAttachChildren = function doAttachChildren_3(){
  try {
    $onAttach(this.decPanel);
  }
   finally {
    $onAttach(this.caption);
  }
}
;
_.doDetachChildren = function doDetachChildren_3(){
  try {
    $onDetach(this.decPanel);
  }
   finally {
    $onDetach(this.caption);
  }
}
;
_.hide = function hide_1(){
  $hide_0(this);
}
;
_.onBrowserEvent_0 = function onBrowserEvent_9(event_0){
  switch ($eventGetTypeInt(event_0.type)) {
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (!this.dragging && !$isCaptionEvent(this, event_0)) {
        return;
      }

  }
  $onBrowserEvent_5(this, event_0);
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent_1(event_0){
  $onPreviewNativeEvent(this, event_0);
}
;
_.show = function show_1(){
  !this.resizeHandlerRegistration && (this.resizeHandlerRegistration = addResizeHandler(new DialogBox$1_0(this)));
  $show(this);
}
;
_.caption = null;
_.clientLeft = 0;
_.clientTop = 0;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragging = false;
_.resizeHandlerRegistration = null;
_.windowWidth = 0;
function DialogBox$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(464, 1, makeCastMap([Q$ResizeHandler, Q$EventHandler]), DialogBox$1_0);
_.onResize = function onResize_5(event_0){
  this.this$0.windowWidth = event_0.width_0;
}
;
_.this$0 = null;
function Label_2(text){
  Label_0.call(this);
  $setTextOrHtml(this.directionalTextHelper, text, false);
  $updateHorizontalAlignment(this);
}

defineSeed(467, 468, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), Label_2);
function DialogBox$CaptionImpl_0(){
  HTML_0.call(this);
  this.element['className'] = 'Caption';
}

defineSeed(465, 466, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), DialogBox$CaptionImpl_0);
function DialogBox$MouseHandler_0(this$0){
  this.this$0 = this$0;
}

defineSeed(469, 1, makeCastMap([Q$MouseDownHandler, Q$MouseMoveHandler, Q$MouseOutHandler, Q$MouseOverHandler, Q$MouseUpHandler, Q$EventHandler, Q$DialogBox$MouseHandler]), DialogBox$MouseHandler_0);
_.this$0 = null;
function $getCellForEvent(this$static, event_0){
  var column, row, td;
  td = $getEventTargetCell(this$static, event_0.nativeEvent);
  if (!td) {
    return null;
  }
  row = $getParentElement(td).sectionRowIndex;
  column = td.cellIndex;
  return new HTMLTable$Cell_0(row, column);
}

function $getEventTargetCell(this$static, event_0){
  var body, td, tr;
  td = $eventGetTarget(event_0);
  for (; td; td = $getParentElement(td)) {
    if ($equalsIgnoreCase($getPropertyString(td, 'tagName'), 'td')) {
      tr = $getParentElement(td);
      body = $getParentElement(tr);
      if (body == this$static.bodyElem) {
        return td;
      }
    }
    if (td == this$static.bodyElem) {
      return null;
    }
  }
  return null;
}

function $getText(this$static, row, column){
  var e;
  $checkCellBounds(this$static, row, column);
  e = $getElement(this$static.cellFormatter, row, column);
  return e.textContent;
}

function $getWidget(this$static, row, column){
  var e, child;
  $checkCellBounds(this$static, row, column);
  return e = $getRawElement(this$static.cellFormatter, row, column) , child = $getFirstChildElement(e) , !child?null:dynamicCast($get_2(this$static.widgetMap, child), Q$Widget);
}

function $isVisible(this$static, row, column){
  var e;
  e = ($checkCellBounds(this$static.this$0, row, column) , $getCellElement_0(this$static.this$0.bodyElem, row, column));
  return e.style.display != 'none';
}

function $setVisible_1(this$static, row, column, visible){
  var e;
  e = (this$static.this$0.prepareCell(row, column) , $getCellElement_0(this$static.this$0.bodyElem, row, column));
  setVisible(e, visible);
}

function $setColSpan_0(this$static, row, column, colSpan){
  (this$static.this$0.prepareCell(row, column) , $getCellElement_0(this$static.this$0.bodyElem, row, column))['colSpan'] = colSpan;
}

function HTMLTable$Cell_0(rowIndex, cellIndex){
  this.cellIndex_0 = cellIndex;
  this.rowIndex = rowIndex;
}

defineSeed(488, 1, {}, HTMLTable$Cell_0);
_.cellIndex_0 = 0;
_.rowIndex = 0;
function AgendaVerticalPanel_0(){
  VerticalPanel_0.call(this);
}

defineSeed(773, 565, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$VerticalPanel, Q$Widget, Q$AgendaVerticalPanel, Q$Iterable]), AgendaVerticalPanel_0);
_.mai = null;
function getDayName(code){
  if ($equals_5(code, 'D2'))
    return 'lundi';
  if ($equals_5(code, 'D3'))
    return 'mardi';
  if ($equals_5(code, 'D4'))
    return 'mercredi';
  if ($equals_5(code, 'D5'))
    return 'jeudi';
  if ($equals_5(code, 'D6'))
    return 'vendredi';
  return '';
}

function selectItemByText(list, text){
  var i;
  for (i = 0; i < list.element.options.length; ++i)
    if (($checkIndex(list, i) , $getOptionText(list.element.options[i])) == text) {
      $setSelectedIndex(list.element, i);
      break;
    }
}

function MasterAgendaLoadEvent_0(profileId){
  $clinit_MasterAgendaLoadEvent();
  this.profileId = profileId;
}

defineSeed(794, 238, {}, MasterAgendaLoadEvent_0);
_.dispatch_0 = function dispatch_48(handler){
  dynamicCast(handler, Q$MasterAgendaLoadEvent$MasterAgendaLoadHandler).onMasterAgendaLoad(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_49(){
  return TYPE_48;
}
;
_.profileId = '';
function $addMasterAgendaItem(this$static, jourCode, periodId, profileId, profileSubjectId, classroomId, duration){
  var rc, rf, x;
  rf = new MasterAgendaItemRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl_0(rf);
  $fire((x = new MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$1X_0(rc, jourCode, periodId, profileId, profileSubjectId, classroomId, duration) , $addInvocation(rc.state.dialect, x) , x), new MasterAgendaPresenter$6_0(this$static));
}

function $onClassChanged_0(this$static, classId){
  var rf, rc, rf_0, rc_0;
  if (!classId.length)
    return;
  rf = new ProfileRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileRequestFactory_ProfileRequestContextImpl_0(rf);
  $fire($listAllActiveByClass_0(rc, classId), new MasterAgendaPresenter$4_0(this$static));
  rf_0 = new PeriodRequestFactoryImpl_0;
  $initialize(rf_0, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc_0 = new PeriodRequestFactory_PeriodRequestContextImpl_0(rf_0);
  $fire($listAllByClass(rc_0, classId), new MasterAgendaPresenter$3_0(this$static));
}

function $onMasterAgendaLoad(this$static, event_0){
  var rc, rf;
  rf = new MasterAgendaItemRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl_0(rf);
  $fire($listAllByProfile(rc, event_0.profileId), new MasterAgendaPresenter$7_0(this$static));
}

function $onProfileChanged(this$static, profileId){
  var rc, rf;
  if (!profileId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Profil');
    return;
  }
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  $fire($listAll_7(rc, profileId), new MasterAgendaPresenter$5_0(this$static, profileId));
}

function $removeMasterAgendaItem(this$static, mai){
  var rc, rf, x;
  rf = new MasterAgendaItemRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl_0(rf);
  $fire((x = new MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$5X_0(rc, mai) , $addInvocation(rc.state.dialect, x) , x), new MasterAgendaPresenter$8_0(this$static));
}

function MasterAgendaPresenter_0(eventBus, view, proxy){
  $clinit_MasterAgendaPresenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$MasterAgendaPresenter$MyView).setUiHandlers(this);
}

defineSeed(880, 729, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$MasterAgendaLoadEvent$MasterAgendaLoadHandler, Q$MasterAgendaPresenter, Q$MasterAgendaUiHandlers]), MasterAgendaPresenter_0);
_.onBind = function onBind_4(){
  $setEventHandlers(dynamicCast(this.view, Q$MasterAgendaPresenter$MyView));
}
;
_.onMasterAgendaLoad = function onMasterAgendaLoad(event_0){
  $onMasterAgendaLoad(this, event_0);
}
;
_.onReset = function onReset_3(){
  var rf, rc, rc_0, rf_0;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('masteragenda'), null);
  $initializeUI(dynamicCast(this.view, Q$MasterAgendaPresenter$MyView));
  rf = new ClasseRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAllActive_0(rc), new MasterAgendaPresenter$2_0(this));
  rc_0 = (rf_0 = new ClassroomRequestFactoryImpl_0 , $initialize(rf_0, this.eventBus, new EventSourceRequestTransport_0(this.eventBus)) , new ClassroomRequestFactory_ClassroomRequestContextImpl_0(rf_0));
  $fire($listAll(rc_0), new MasterAgendaPresenter$1_0(this));
}
;
function $onSuccess_12(this$static, response){
  $setClassroomList(dynamicCast(this$static.this$0.view, Q$MasterAgendaPresenter$MyView), response);
}

function MasterAgendaPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(881, 668, makeCastMap([Q$Receiver]), MasterAgendaPresenter$1_0);
_.onFailure_0 = function onFailure_15(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_15(response){
  $onSuccess_12(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_13(this$static, response){
  $setClassList(dynamicCast(this$static.this$0.view, Q$MasterAgendaPresenter$MyView), response);
}

function MasterAgendaPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(882, 668, makeCastMap([Q$Receiver]), MasterAgendaPresenter$2_0);
_.onFailure_0 = function onFailure_16(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_16(response){
  $onSuccess_13(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_14(this$static, response){
  $initializeUI_0(dynamicCast(this$static.this$0.view, Q$MasterAgendaPresenter$MyView), response);
}

function MasterAgendaPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(883, 668, makeCastMap([Q$Receiver]), MasterAgendaPresenter$3_0);
_.onFailure_0 = function onFailure_17(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_17(response){
  $onSuccess_14(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_15(this$static, response){
  $setProfileListData_0(dynamicCast(this$static.this$0.view, Q$MasterAgendaPresenter$MyView), response);
}

function MasterAgendaPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(884, 668, makeCastMap([Q$Receiver]), MasterAgendaPresenter$4_0);
_.onFailure_0 = function onFailure_18(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_18(response){
  $onSuccess_15(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_16(this$static, response){
  $setSubjectListData(dynamicCast(this$static.this$0.view, Q$MasterAgendaPresenter$MyView), response);
  $doFire(this$static.this$0.eventBus, new MasterAgendaLoadEvent_0(this$static.val$profileId), null);
}

function MasterAgendaPresenter$5_0(this$0, val$profileId){
  this.this$0 = this$0;
  this.val$profileId = val$profileId;
}

defineSeed(885, 668, makeCastMap([Q$Receiver]), MasterAgendaPresenter$5_0);
_.onFailure_0 = function onFailure_19(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_19(response){
  $onSuccess_16(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
_.val$profileId = null;
function $onSuccess_17(this$static, response){
  $showAddedMasterAgendaItem(dynamicCast(this$static.this$0.view, Q$MasterAgendaPresenter$MyView), response);
}

function MasterAgendaPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(886, 668, makeCastMap([Q$Receiver]), MasterAgendaPresenter$6_0);
_.onFailure_0 = function onFailure_20(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_20(response){
  $onSuccess_17(this, dynamicCast(response, Q$MasterAgendaItemProxy));
}
;
_.this$0 = null;
function $onSuccess_18(this$static, response){
  $showMasterAgendaItemData(dynamicCast(this$static.this$0.view, Q$MasterAgendaPresenter$MyView), response);
}

function MasterAgendaPresenter$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(887, 668, makeCastMap([Q$Receiver]), MasterAgendaPresenter$7_0);
_.onFailure_0 = function onFailure_21(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_21(response){
  $onSuccess_18(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_19(this$static){
  $clearSelectedMasterAgendaItem(dynamicCast(this$static.this$0.view, Q$MasterAgendaPresenter$MyView));
}

function MasterAgendaPresenter$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(888, 668, makeCastMap([Q$Receiver]), MasterAgendaPresenter$8_0);
_.onFailure_0 = function onFailure_22(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_22(response){
  $onSuccess_19(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
defineSeed(889, 760, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$MasterAgendaLoadEvent$MasterAgendaLoadHandler]));
_.onMasterAgendaLoad = function onMasterAgendaLoad_0(event_0){
  $getPresenter_0(this, new MasterAgendaPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
function $success_6(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MasterAgendaPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function MasterAgendaPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(890, 742, {}, MasterAgendaPresenterMyProxyImpl$1_0);
_.success = function success_8(presenter){
  $success_6(this, dynamicCast(presenter, Q$MasterAgendaPresenter));
}
;
_.val$event = null;
function MasterAgendaPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(891, 1, {}, MasterAgendaPresenterMyProxyImpl$1$1_0);
_.execute_1 = function execute_34(){
  $onMasterAgendaLoad(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $addRow(this$static, rowIndex){
  var j, lastCellIndex;
  lastCellIndex = $getCellCount(this$static.tblAgenda, 0) - 1;
  $insertRow(this$static.tblAgenda, rowIndex);
  for (j = 0; j < this$static.periods.size_0 + 3; ++j) {
    $insertCell(this$static.tblAgenda, rowIndex, j);
    $setStyleName_0(this$static.tblAgenda.cellFormatter, rowIndex, j, 'agendaNormal');
  }
  $setText_2(this$static.tblAgenda, rowIndex, 0, $getText(this$static.tblAgenda, rowIndex + 1, 0));
  $setStyleName_0(this$static.tblAgenda.cellFormatter, rowIndex, 0, 'agendaTitle');
  $setStyleName_0(this$static.tblAgenda.cellFormatter, rowIndex + 1, 0, 'agendaHidden');
  $setText_2(this$static.tblAgenda, rowIndex, 1, $getText(this$static.tblAgenda, rowIndex + 1, 1));
  $setText_2(this$static.tblAgenda, rowIndex + 1, 1, '');
  $setStyleName_0(this$static.tblAgenda.cellFormatter, rowIndex + 1, 1, 'agendaHidden');
  $setText_2(this$static.tblAgenda, rowIndex, lastCellIndex, $getText(this$static.tblAgenda, rowIndex + 1, lastCellIndex));
  $setStyleName_0(this$static.tblAgenda.cellFormatter, rowIndex, lastCellIndex, 'agendaHidden');
}

function $clearSelectedMasterAgendaItem(this$static){
  var i;
  $removeFromParent_0(dynamicCast($getWidget(this$static.tblAgenda, this$static.clickedRowIndex, this$static.clickedCellIndex), Q$VerticalPanel));
  for (i = 0; i < $getPropertyInt($getElement(dynamicCast(this$static.tblAgenda.cellFormatter, Q$FlexTable$FlexCellFormatter), this$static.clickedRowIndex, this$static.clickedCellIndex), 'colSpan'); ++i) {
    $setVisible_1(this$static.tblAgenda.cellFormatter, this$static.clickedRowIndex, this$static.clickedCellIndex + i, true);
    $setStyleName_0(dynamicCast(this$static.tblAgenda.cellFormatter, Q$FlexTable$FlexCellFormatter), this$static.clickedRowIndex, this$static.clickedCellIndex + i, 'agendaNormal');
  }
  $setColSpan_0(dynamicCast(this$static.tblAgenda.cellFormatter, Q$FlexTable$FlexCellFormatter), this$static.clickedRowIndex, this$static.clickedCellIndex, 1);
}

function $drawTable(this$static, periods){
  var i, j;
  $removeAllRows(this$static.tblAgenda);
  $setText_2(this$static.tblAgenda, 0, 0, '');
  $setText_2(this$static.tblAgenda, 1, 0, getDayName('D2'));
  $setText_2(this$static.tblAgenda, 2, 0, getDayName('D3'));
  $setText_2(this$static.tblAgenda, 3, 0, getDayName('D4'));
  $setText_2(this$static.tblAgenda, 4, 0, getDayName('D5'));
  $setText_2(this$static.tblAgenda, 5, 0, getDayName('D6'));
  $setText_2(this$static.tblAgenda, 0, 1, '');
  $setText_2(this$static.tblAgenda, 1, 1, '+');
  $setText_2(this$static.tblAgenda, 2, 1, '+');
  $setText_2(this$static.tblAgenda, 3, 1, '+');
  $setText_2(this$static.tblAgenda, 4, 1, '+');
  $setText_2(this$static.tblAgenda, 5, 1, '+');
  for (i = 0; i < periods.size_1(); ++i) {
    $setText_2(this$static.tblAgenda, 0, i + 2, dynamicCast(periods.get_0(i), Q$PeriodProxy).getDescription());
  }
  for (i = 1; i < this$static.tblAgenda.bodyElem.rows.length; ++i) {
    for (j = 2; j < $getCellCount(this$static.tblAgenda, 0); ++j) {
      $setText_2(this$static.tblAgenda, i, j, '');
    }
  }
  i = $getCellCount(this$static.tblAgenda, 0);
  $setText_2(this$static.tblAgenda, 0, i, '');
  $setText_2(this$static.tblAgenda, 1, i, 'D2');
  $setText_2(this$static.tblAgenda, 2, i, 'D3');
  $setText_2(this$static.tblAgenda, 3, i, 'D4');
  $setText_2(this$static.tblAgenda, 4, i, 'D5');
  $setText_2(this$static.tblAgenda, 5, i, 'D6');
  i = this$static.tblAgenda.bodyElem.rows.length;
  for (j = 0; j < periods.size_1(); ++j) {
    $setText_2(this$static.tblAgenda, i, j + 2, '' + toString_6(dynamicCast(periods.get_0(j), Q$PeriodProxy).getId_0().value_0));
  }
  $styleTable(this$static);
}

function $getCellIndexById(this$static, periodId){
  var i;
  for (i = 0; i < $getCellCount(this$static.tblAgenda, 0); ++i) {
    if ($equals_5($getText(this$static.tblAgenda, this$static.tblAgenda.bodyElem.rows.length - 1, i), periodId))
      return i;
  }
  return -1;
}

function $getRowIndexById(this$static, jourCode){
  var i;
  for (i = 0; i < this$static.tblAgenda.bodyElem.rows.length; ++i) {
    if ($equals_5($getText(this$static.tblAgenda, i, $getCellCount(this$static.tblAgenda, 0) - 1), jourCode))
      return i;
  }
  return -1;
}

function $initializeUI(this$static){
  $removeAllRows(this$static.tblAgenda);
  $selectClear(this$static.lstProfiles.element);
}

function $initializeUI_0(this$static, periods){
  $clear_5(this$static.periods);
  $addAll_1(this$static.periods, periods);
  $drawTable(this$static, periods);
}

function $onCmdDeleteClick(this$static){
  !!$getWidget(this$static.tblAgenda, this$static.clickedRowIndex, this$static.clickedCellIndex) && $removeMasterAgendaItem(dynamicCast(this$static.uiHandlers, Q$MasterAgendaUiHandlers), dynamicCast($getWidget(this$static.tblAgenda, this$static.clickedRowIndex, this$static.clickedCellIndex), Q$AgendaVerticalPanel).mai);
}

function $onCmdSaveClick(this$static){
  $addMasterAgendaItem(dynamicCast(this$static.uiHandlers, Q$MasterAgendaUiHandlers), $getText(this$static.tblAgenda, this$static.clickedRowIndex, $getCellCount(this$static.tblAgenda, 0) - 1), $getText(this$static.tblAgenda, this$static.tblAgenda.bodyElem.rows.length - 1, this$static.clickedCellIndex), $getValue_2(this$static.lstProfiles, this$static.lstProfiles.element.selectedIndex), $getValue_2(this$static.lstSubject, this$static.lstSubject.element.selectedIndex), $getValue_2(this$static.lstClassrooms, this$static.lstClassrooms.element.selectedIndex), __parseAndValidateInt($getValue_2(this$static.lstDuration, this$static.lstDuration.element.selectedIndex)));
}

function $onLstClassesChange_0(this$static){
  !!this$static.uiHandlers && $onClassChanged_0(dynamicCast(this$static.uiHandlers, Q$MasterAgendaUiHandlers), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $onLstProfilesChange(this$static){
  !!this$static.uiHandlers && $onProfileChanged(dynamicCast(this$static.uiHandlers, Q$MasterAgendaUiHandlers), $getValue_2(this$static.lstProfiles, this$static.lstProfiles.element.selectedIndex));
}

function $prepareDialogBox(this$static, popup, jour, period){
  var i, mai;
  mai = null;
  !!$getWidget(this$static.tblAgenda, this$static.clickedRowIndex, this$static.clickedCellIndex) && (mai = dynamicCast($getWidget(this$static.tblAgenda, this$static.clickedRowIndex, this$static.clickedCellIndex), Q$AgendaVerticalPanel).mai);
  $setVisible_0(this$static.pnlAdd, true);
  $add_4(popup, this$static.pnlAdd);
  popup.isAnimationEnabled = true;
  $setHeight_0(popup, $getPropertyInt(this$static.pnlAdd.element, 'offsetHeight') + 'px');
  $setWidth_0(popup, $getPropertyInt(this$static.pnlAdd.element, 'offsetWidth') + 'px');
  $setText(popup, ($clinit_NotificationTypes() , 'D\xE9tails des p\xE9riodes'));
  $center(popup);
  $selectClear(this$static.lstDuration.element);
  for (i = 0; i < this$static.periods.size_0 - this$static.clickedCellIndex + 2; ++i) {
    $insertItem(this$static.lstDuration, '' + (i + 1), '' + (i + 1), -1);
  }
  if (!mai) {
    $setText_0(this$static.txtJour, jour);
    $setText_0(this$static.txtPeriod, period);
    $setText_0(this$static.txtPeriodId, '');
    $setSelectedIndex_0(this$static.lstSubject, 0);
    $setEnabled(this$static.cmdSave, true);
    $setEnabled(this$static.cmdDelete, false);
  }
   else {
    $setText_0(this$static.txtJour, getDayName(mai.getJourCode()));
    $setText_0(this$static.txtPeriod, mai.getPeriodDescription());
    $setText_0(this$static.txtPeriodId, '' + toString_6(mai.getId_0().value_0));
    selectItemByText(this$static.lstSubject, mai.getSubjectName());
    selectItemByText(this$static.lstDuration, '' + mai.getDuration());
    selectItemByText(this$static.lstClassrooms, mai.getClassroomName());
    $setEnabled(this$static.cmdSave, false);
    $setEnabled(this$static.cmdDelete, true);
  }
}

function $prepareSubjectList(this$static, subjects){
  var subject, subject$iterator;
  $selectClear(this$static.lstSubject.element);
  $insertItem(this$static.lstSubject, '-', '', -1);
  for (subject$iterator = subjects.iterator(); subject$iterator.hasNext();) {
    subject = dynamicCast(subject$iterator.next_0(), Q$ProfileSubjectProxy);
    $insertItem(this$static.lstSubject, subject.getSubjectName() + ' - ' + subject.getProfName(), '' + toString_6(subject.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstSubject, 0);
}

function $setClassList(this$static, classes){
  var clazz, clazz$iterator;
  $selectClear(this$static.lstClasses.element);
  $insertItem(this$static.lstClasses, '-', '', -1);
  for (clazz$iterator = classes.iterator(); clazz$iterator.hasNext();) {
    clazz = dynamicCast(clazz$iterator.next_0(), Q$ClasseProxy);
    $insertItem(this$static.lstClasses, clazz.getClassName(), '' + toString_6(clazz.getId_0().value_0), -1);
  }
}

function $setClassroomList(this$static, rooms){
  var cp, cp$iterator;
  $selectClear(this$static.lstClassrooms.element);
  $insertItem(this$static.lstClassrooms, '-', '', -1);
  for (cp$iterator = rooms.iterator(); cp$iterator.hasNext();) {
    cp = dynamicCast(cp$iterator.next_0(), Q$ClassroomProxy);
    $insertItem(this$static.lstClassrooms, cp.getRoomName(), '' + toString_6(cp.getId_0().value_0), -1);
  }
}

function $setEventHandlers(this$static){
  $addDomHandler(this$static.tblAgenda, new MasterAgendaView$3_0(this$static), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
}

function $setProfileListData_0(this$static, profiles){
  var profile, profile$iterator;
  $selectClear(this$static.lstProfiles.element);
  $insertItem(this$static.lstProfiles, '-', '', -1);
  for (profile$iterator = profiles.iterator(); profile$iterator.hasNext();) {
    profile = dynamicCast(profile$iterator.next_0(), Q$ProfileProxy);
    $insertItem(this$static.lstProfiles, profile.getProfileName(), '' + toString_6(profile.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstProfiles, 0);
}

function $setSubjectListData(this$static, subjects){
  this$static.subjects = subjects;
  $prepareSubjectList(this$static, this$static.subjects);
}

function $showAddedMasterAgendaItem(this$static, mai){
  $showMasterAgendaItem(this$static, mai, this$static.clickedRowIndex, this$static.clickedCellIndex);
}

function $showMasterAgendaItem(this$static, mai, rowIndex, cellIndex){
  var avp, currentColspan, duration, i, j, k, lblSubject, newRowNeeded;
  newRowNeeded = false;
  duration = mai.getDuration();
  currentColspan = $getPropertyInt($getElement(dynamicCast(this$static.tblAgenda.cellFormatter, Q$FlexTable$FlexCellFormatter), rowIndex, cellIndex), 'colSpan');
  for (k = 0; k < duration; ++k) {
    if (!!$getWidget(this$static.tblAgenda, rowIndex, cellIndex + k) || !$isVisible(this$static.tblAgenda.cellFormatter, rowIndex, cellIndex + k)) {
      newRowNeeded = true;
      break;
    }
  }
  newRowNeeded && $addRow(this$static, rowIndex);
  if (currentColspan > 1) {
    for (i = 0; i < currentColspan; ++i)
      $setVisible_1(this$static.tblAgenda.cellFormatter, rowIndex, cellIndex + i, true);
  }
  for (j = 1; j < duration; ++j)
    $setVisible_1(this$static.tblAgenda.cellFormatter, rowIndex, cellIndex + j, false);
  $setColSpan_0(dynamicCast(this$static.tblAgenda.cellFormatter, Q$FlexTable$FlexCellFormatter), rowIndex, cellIndex, duration);
  $setStyleName_0(dynamicCast(this$static.tblAgenda.cellFormatter, Q$FlexTable$FlexCellFormatter), rowIndex, cellIndex, 'agendaSelected');
  avp = new AgendaVerticalPanel_0;
  avp.mai = mai;
  lblSubject = new Label_2(mai.getSubjectName());
  lblSubject.element['className'] = 'agendaSubjectText';
  $add_12(avp, lblSubject);
  $add_12(avp, new Label_2(mai.getProfName()));
  $add_12(avp, new Label_2(mai.getClassroomName()));
  $setWidget_2(this$static.tblAgenda, rowIndex, cellIndex, avp);
}

function $showMasterAgendaItemData(this$static, mais){
  var cellIndex, mai, mai$iterator, rowIndex;
  for (mai$iterator = mais.iterator(); mai$iterator.hasNext();) {
    mai = dynamicCast(mai$iterator.next_0(), Q$MasterAgendaItemProxy);
    rowIndex = $getRowIndexById(this$static, mai.getJourCode());
    cellIndex = $getCellIndexById(this$static, mai.getPeriodId());
    rowIndex != -1 && cellIndex != -1 && $showMasterAgendaItem(this$static, mai, rowIndex, cellIndex);
  }
}

function $showPopup(this$static, jour, period){
  var popup;
  popup = new MasterAgendaView$1_0;
  $addHandler_0(popup, new MasterAgendaView$2_0(this$static), TYPE_15?TYPE_15:(TYPE_15 = new GwtEvent$Type_0));
  $prepareDialogBox(this$static, popup, jour, period);
  !popup.resizeHandlerRegistration && (popup.resizeHandlerRegistration = addResizeHandler(new DialogBox$1_0(popup)));
  $show(popup);
}

function $styleTable(this$static){
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
    $isCellPresent(this$static.tblAgenda, i, $getCellCount(this$static.tblAgenda, 0) - 1) && $setStyleName_0(this$static.tblAgenda.cellFormatter, i, $getCellCount(this$static.tblAgenda, 0) - 1, 'agendaHidden');
  for (j = 0; j < $getCellCount(this$static.tblAgenda, 0) - 1; ++j) {
    $isCellPresent(this$static.tblAgenda, 0, j) && $setStyleName_0(this$static.tblAgenda.cellFormatter, 0, j, 'agendaTitle');
  }
  for (i = 0; i < this$static.tblAgenda.bodyElem.rows.length - 1; ++i)
    $isCellPresent(this$static.tblAgenda, i, 0) && $setStyleName_0(this$static.tblAgenda.cellFormatter, i, 0, 'agendaTitle');
}

function MasterAgendaView_0(){
  this.periods = new ArrayList_0;
  this.subjects = new ArrayList_0;
  $initWidget_0(this, $build_f_HTMLPanel1_1(new MasterAgendaView_BinderImpl$Widgets_0(this)));
}

defineSeed(893, 734, makeCastMap([Q$IsWidget, Q$MasterAgendaPresenter$MyView]), MasterAgendaView_0);
_.clickedCellIndex = 0;
_.clickedRowIndex = 0;
_.cmdDelete = null;
_.cmdSave = null;
_.lstClasses = null;
_.lstClassrooms = null;
_.lstDuration = null;
_.lstProfiles = null;
_.lstSubject = null;
_.pnlAdd = null;
_.pnlPrincipal = null;
_.tblAgenda = null;
_.txtJour = null;
_.txtPeriod = null;
_.txtPeriodId = null;
function MasterAgendaView$1_0(){
  DialogBox_0.call(this, new DialogBox$CaptionImpl_0);
}

defineSeed(894, 463, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]), MasterAgendaView$1_0);
_.onPreviewNativeEvent = function onPreviewNativeEvent_3(event_0){
  $onPreviewNativeEvent(this, event_0);
  $eventGetTypeInt(event_0.nativeEvent.type) == 128 && (event_0.nativeEvent.keyCode || 0) == 27 && $hide_0(this);
}
;
function MasterAgendaView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(895, 1, makeCastMap([Q$CloseHandler, Q$EventHandler]), MasterAgendaView$2_0);
_.onClose = function onClose_1(event_0){
  $add_12(this.this$0.pnlPrincipal, this.this$0.pnlAdd);
  $setVisible_0(this.this$0.pnlAdd, false);
}
;
_.this$0 = null;
function MasterAgendaView$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(896, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), MasterAgendaView$3_0);
_.onClick = function onClick_3(event_0){
  this.this$0.clickedCellIndex = $getCellForEvent(this.this$0.tblAgenda, event_0).cellIndex_0;
  this.this$0.clickedRowIndex = $getCellForEvent(this.this$0.tblAgenda, event_0).rowIndex;
  this.this$0.clickedCellIndex > 1 && $showPopup(this.this$0, $getText(this.this$0.tblAgenda, this.this$0.clickedRowIndex, 0), $getText(this.this$0.tblAgenda, 0, this.this$0.clickedCellIndex));
  $equals_5($getText(this.this$0.tblAgenda, this.this$0.clickedRowIndex, this.this$0.clickedCellIndex), '+') && $addRow(this.this$0, this.this$0.clickedRowIndex);
}
;
_.this$0 = null;
function MasterAgendaView_BinderImpl_0(){
}

defineSeed(897, 1, {}, MasterAgendaView_BinderImpl_0);
function $build_f_HTMLPanel1_1(this$static){
  var attachRecord29, f_HTMLPanel1, f_Label2, pnlPrincipal, f_VerticalPanel3, f_HorizontalPanel4, f_Label5, lstClasses, f_Label6, lstProfiles, tblAgenda, pnlAdd, f_VerticalPanel7, f_Grid8, f_Label9, txtJour, f_Label10, txtPeriod, f_Label11, lstSubject, f_Label12, lstDuration, f_Label13, lstClassrooms, f_Label14, f_HorizontalPanel15, txtPeriodId, cmdSave, cmdDelete;
  f_HTMLPanel1 = new HTMLPanel_0($html1_2(this$static.domId0, this$static.domId1).html);
  attachRecord29 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  $get_1(this$static.domId1Element);
  attachRecord29.origParent?$insertBefore(attachRecord29.origParent, attachRecord29.element, attachRecord29.origSibling):orphan(attachRecord29.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label2.directionalTextHelper, 'HORAIRES CADRES', false) , $updateHorizontalAlignment(f_Label2) , f_Label2), $get_1(this$static.domId0Element));
  $addAndReplaceElement(f_HTMLPanel1, (pnlPrincipal = new VerticalPanel_0 , $setHorizontalAlignment_1(pnlPrincipal, ALIGN_CENTER) , $add_12(pnlPrincipal, (f_VerticalPanel3 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel3, ALIGN_CENTER) , $add_12(f_VerticalPanel3, (f_HorizontalPanel4 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel4, ALIGN_LEFT) , $add_10(f_HorizontalPanel4, (f_Label5 = new Label_0 , $setHorizontalAlignment(f_Label5, ALIGN_RIGHT) , $setTextOrHtml(f_Label5.directionalTextHelper, 'Classe :', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $add_10(f_HorizontalPanel4, (lstClasses = new ListBox_0 , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstClasses = lstClasses , lstClasses)) , $add_10(f_HorizontalPanel4, (f_Label6 = new Label_0 , $setHorizontalAlignment(f_Label6, ALIGN_RIGHT) , $setTextOrHtml(f_Label6.directionalTextHelper, 'Profil :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_10(f_HorizontalPanel4, (lstProfiles = new ListBox_0 , $addDomHandler(lstProfiles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this$static.owner.lstProfiles = lstProfiles , lstProfiles)) , f_HorizontalPanel4.element['className'] = 'toolbar' , f_HorizontalPanel4.element.style['width'] = '50%' , f_HorizontalPanel4.table['cellSpacing'] = 5 , f_HorizontalPanel4)) , $add_12(f_VerticalPanel3, (tblAgenda = new FlexTable_0 , tblAgenda.tableElem['border'] = '0' , tblAgenda.element.style['width'] = '100%' , this$static.owner.tblAgenda = tblAgenda , tblAgenda)) , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3.table['cellSpacing'] = 10 , f_VerticalPanel3)) , $add_12(pnlPrincipal, (pnlAdd = new FlowPanel_0 , $add_8(pnlAdd, (f_VerticalPanel7 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel7, ALIGN_RIGHT) , $add_12(f_VerticalPanel7, (f_Grid8 = new Grid_0 , $resizeColumns(f_Grid8, 2) , $resizeRows(f_Grid8, 5) , $setWidget_2(f_Grid8, 0, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Jour :', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_2(f_Grid8, 0, 1, (txtJour = new Label_0 , this$static.owner.txtJour = txtJour , txtJour)) , $setWidget_2(f_Grid8, 1, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'P\xE9riode :', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_2(f_Grid8, 1, 1, (txtPeriod = new Label_0 , this$static.owner.txtPeriod = txtPeriod , txtPeriod)) , $setWidget_2(f_Grid8, 2, 0, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Mati\xE8re :', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_2(f_Grid8, 2, 1, (lstSubject = new ListBox_0 , this$static.owner.lstSubject = lstSubject , lstSubject)) , $setWidget_2(f_Grid8, 3, 0, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Dur\xE9e :', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_2(f_Grid8, 3, 1, (lstDuration = new ListBox_0 , this$static.owner.lstDuration = lstDuration , lstDuration)) , $setWidget_2(f_Grid8, 4, 0, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'Salle de classe :', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_2(f_Grid8, 4, 1, (lstClassrooms = new ListBox_0 , this$static.owner.lstClassrooms = lstClassrooms , lstClassrooms)) , f_Grid8.element.style['width'] = '100%' , f_Grid8.tableElem['cellSpacing'] = 2 , f_Grid8.tableElem['cellPadding'] = 2 , f_Grid8)) , $add_12(f_VerticalPanel7, (f_Label14 = new Label_0 , f_Label14.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label14.directionalTextHelper, '-', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $add_12(f_VerticalPanel7, (f_HorizontalPanel15 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel15, ALIGN_RIGHT) , $add_10(f_HorizontalPanel15, (txtPeriodId = new Label_0 , txtPeriodId.element['className'] = 'hiddenText' , $setTextOrHtml(txtPeriodId.directionalTextHelper, '', false) , $updateHorizontalAlignment(txtPeriodId) , this$static.owner.txtPeriodId = txtPeriodId , txtPeriodId)) , $add_10(f_HorizontalPanel15, (cmdSave = new Button_0 , $setInnerText(cmdSave.element, 'Enregistrer') , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , this$static.owner.cmdSave = cmdSave , cmdSave)) , $add_10(f_HorizontalPanel15, (cmdDelete = new Button_0 , $setInnerText(cmdDelete.element, 'Supprimer') , $addDomHandler(cmdDelete, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_0) , this$static.owner.cmdDelete = cmdDelete , cmdDelete)) , f_HorizontalPanel15.element.style['width'] = '60%' , f_HorizontalPanel15.table['cellSpacing'] = 10 , f_HorizontalPanel15)) , f_VerticalPanel7.element.style['width'] = '100%' , f_VerticalPanel7)) , setVisible(pnlAdd.element, false) , pnlAdd.element.style['width'] = '500px' , this$static.owner.pnlAdd = pnlAdd , pnlAdd)) , pnlPrincipal.element.style['width'] = '100%' , pnlPrincipal.table['cellSpacing'] = 5 , this$static.owner.pnlPrincipal = pnlPrincipal , pnlPrincipal), $get_1(this$static.domId1Element));
  return f_HTMLPanel1;
}

function MasterAgendaView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new MasterAgendaView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new MasterAgendaView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new MasterAgendaView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new MasterAgendaView_BinderImpl$Widgets$4_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
  this.domId1Element = new LazyDomElement_0(this.domId1);
}

defineSeed(898, 1, {}, MasterAgendaView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.domId1 = null;
_.domId1Element = null;
_.owner = null;
function MasterAgendaView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(899, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), MasterAgendaView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_4(event_0){
  $onCmdSaveClick(this.this$1.owner);
}
;
_.this$1 = null;
function MasterAgendaView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(900, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), MasterAgendaView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_4(event_0){
  $onLstClassesChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function MasterAgendaView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(901, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), MasterAgendaView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_5(event_0){
  $onLstProfilesChange(this.this$1.owner);
}
;
_.this$1 = null;
function MasterAgendaView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(902, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), MasterAgendaView_BinderImpl$Widgets$4_0);
_.onClick = function onClick_5(event_0){
  $onCmdDeleteClick(this.this$1.owner);
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

function $get_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaPresenter$_annotation$$none$$) {
    result = new MasterAgendaPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaPresenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaView$_annotation$$none$$) {
    result = new MasterAgendaView_0(new MasterAgendaView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaView$_annotation$$none$$;
}

defineSeed(906, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_23(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$form$masteragenda$MasterAgendaPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $$init_30(this$static){
  this$static.shim = new MasterAgendaItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function MasterAgendaItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_30(this);
}

function MasterAgendaItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_30(this);
}

defineSeed(1663, 629, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), MasterAgendaItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, MasterAgendaItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_28(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_28(){
  return new MasterAgendaItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_36(){
  return Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_27(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = valueOf_1($getDuration(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'duration'), I_classLit);
  visitor.visitValueProperty('duration', value, propertyContext);
  value = $getId_20(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getClassroomName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'classroomName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('classroomName', value, propertyContext);
  value = $getJourCode(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'jourCode'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('jourCode', value, propertyContext);
  value = $getPeriodDescription(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'periodDescription'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('periodDescription', value, propertyContext);
  value = $getPeriodId(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'periodId'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('periodId', value, propertyContext);
  value = $getProfName_2(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'profName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('profName', value, propertyContext);
  value = $getSubjectName_4(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'subjectName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('subjectName', value, propertyContext);
}
;
function $getClassroomName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$MasterAgendaItemProxy).getClassroomName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getDuration(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$MasterAgendaItemProxy).getDuration();
  toReturn = dynamicCast(__intercept(this$static.this$0, valueOf_1(toReturn)), Q$Integer).value_0;
  return toReturn;
}

function $getId_20(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$MasterAgendaItemProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getJourCode(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$MasterAgendaItemProxy).getJourCode();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getPeriodDescription(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$MasterAgendaItemProxy).getPeriodDescription();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getPeriodId(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$MasterAgendaItemProxy).getPeriodId();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getProfName_2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$MasterAgendaItemProxy).getProfName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getSubjectName_4(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$MasterAgendaItemProxy).getSubjectName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function MasterAgendaItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1664, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$MasterAgendaItemProxy]), MasterAgendaItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_68(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$MasterAgendaItemProxy).equals$(o);
}
;
_.getClassroomName = function getClassroomName(){
  return $getClassroomName(this);
}
;
_.getDuration = function getDuration(){
  return $getDuration(this);
}
;
_.getId_0 = function getId_37(){
  return $getId_20(this);
}
;
_.getJourCode = function getJourCode(){
  return $getJourCode(this);
}
;
_.getPeriodDescription = function getPeriodDescription(){
  return $getPeriodDescription(this);
}
;
_.getPeriodId = function getPeriodId(){
  return $getPeriodId(this);
}
;
_.getProfName = function getProfName_5(){
  return $getProfName_2(this);
}
;
_.getSubjectName = function getSubjectName_9(){
  return $getSubjectName_4(this);
}
;
_.hashCode$ = function hashCode_68(){
  return dynamicCast($getWrapped(this.this$0), Q$MasterAgendaItemProxy).hashCode$();
}
;
_.toString$ = function toString_44(){
  return dynamicCast($getWrapped(this.this$0), Q$MasterAgendaItemProxy).toString$();
}
;
_.this$0 = null;
function MasterAgendaItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1665, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$MasterAgendaItemProxy]), MasterAgendaItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_69(other){
  return equals_14(this.this$0, other);
}
;
_.getClassroomName = function getClassroomName_0(){
  return dynamicCast($getOrReify(this.this$0, 'classroomName'), Q$String);
}
;
_.getDuration = function getDuration_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'duration'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getId_0 = function getId_38(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getJourCode = function getJourCode_0(){
  return dynamicCast($getOrReify(this.this$0, 'jourCode'), Q$String);
}
;
_.getPeriodDescription = function getPeriodDescription_0(){
  return dynamicCast($getOrReify(this.this$0, 'periodDescription'), Q$String);
}
;
_.getPeriodId = function getPeriodId_0(){
  return dynamicCast($getOrReify(this.this$0, 'periodId'), Q$String);
}
;
_.getProfName = function getProfName_6(){
  return dynamicCast($getOrReify(this.this$0, 'profName'), Q$String);
}
;
_.getSubjectName = function getSubjectName_10(){
  return dynamicCast($getOrReify(this.this$0, 'subjectName'), Q$String);
}
;
_.hashCode$ = function hashCode_69(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.this$0 = null;
function $clinit_MasterAgendaItemRequestFactoryImpl(){
  $clinit_MasterAgendaItemRequestFactoryImpl = nullMethod;
  tokensToTypes_0 = new HashMap_0;
  typesToTokens_0 = new HashMap_0;
  entityProxyTypes_0 = new HashSet_0;
  valueProxyTypes_0 = new HashSet_0;
  tokensToTypes_0.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_0.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_21(entityProxyTypes_0, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_0.put('uO$d9RnGYSsxANtwnp0W2BAljbY=', Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemProxy_2_classLit);
  typesToTokens_0.put(Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemProxy_2_classLit, 'uO$d9RnGYSsxANtwnp0W2BAljbY=');
  $add_21(entityProxyTypes_0, Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemProxy_2_classLit);
}

function MasterAgendaItemRequestFactoryImpl_0(){
  $clinit_MasterAgendaItemRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1666, 663, {}, MasterAgendaItemRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_0(){
  return 'com.lemania.sis.shared.masteragendaitem.MasterAgendaItemRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_0(typeToken){
  return dynamicCast(tokensToTypes_0.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_4(type){
  return dynamicCast(typesToTokens_0.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_1(type){
  return $contains_1(entityProxyTypes_0, type);
}
;
_.isValueType = function isValueType_1(type){
  return $contains_1(valueProxyTypes_0, type);
}
;
var entityProxyTypes_0, tokensToTypes_0, typesToTokens_0, valueProxyTypes_0;
function $listAllByProfile(this$static, profileId){
  var x;
  x = new MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$4X_0(this$static, profileId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1667, 673, makeCastMap([Q$AbstractRequestContext]), MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_0(){
  return !FACTORY_1 && (FACTORY_1 = new MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl_FactoryImpl_0) , FACTORY_1;
}
;
var FACTORY_1 = null;
function MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$1X_0(this$0, val$jourCode, val$periodId, val$profileId, val$profileSubjectId, val$classroomId, val$duration){
  this.val$jourCode = val$jourCode;
  this.val$periodId = val$periodId;
  this.val$profileId = val$profileId;
  this.val$profileSubjectId = val$profileSubjectId;
  this.val$classroomId = val$classroomId;
  this.val$duration = val$duration;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1668, 672, makeCastMap([Q$AbstractRequest]), MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_2(){
  return new RequestData_0('FWLKnQxUKk6meMxRXRWVJySbNCE=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$jourCode, this.val$periodId, this.val$profileId, this.val$profileSubjectId, this.val$classroomId, valueOf_1(this.val$duration)]), this.propertyRefs, Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemProxy_2_classLit, null);
}
;
_.val$classroomId = null;
_.val$duration = 0;
_.val$jourCode = null;
_.val$periodId = null;
_.val$profileId = null;
_.val$profileSubjectId = null;
function MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$4X_0(this$0, val$profileId){
  this.val$profileId = val$profileId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1669, 672, makeCastMap([Q$AbstractRequest]), MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_3(){
  return new RequestData_0('p0rYJ4mETAj2w3IE14w9JbJZ8cY=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemProxy_2_classLit);
}
;
_.val$profileId = null;
function MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$5X_0(this$0, val$mai){
  this.val$mai = val$mai;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1670, 672, makeCastMap([Q$AbstractRequest]), MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_4(){
  return new RequestData_0('xW6rEJ1X4DGY4zZF4diCThn0I4c=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$mai]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$mai = null;
function $getConstructors_com_lemania_sis_shared_masteragendaitem_MasterAgendaItemProxy(){
  return [function(factory){
    return new MasterAgendaItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new MasterAgendaItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1671, 601, makeCastMap([Q$EnumMap]), MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_1(map){
  $add_16(map, Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemProxy_2_classLit, $getConstructors_com_lemania_sis_shared_masteragendaitem_MasterAgendaItemProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_1(){
}
;
var Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter', 880), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter$1_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter$1', 881), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter$2_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter$2', 882), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter$3_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter$3', 883), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter$4_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter$4', 884), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter$5_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter$5', 885), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter$6_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter$6', 886), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter$7_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter$7', 887), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenter$8_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenter$8', 888), Lcom_lemania_sis_client_event_MasterAgendaLoadEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'MasterAgendaLoadEvent', 794), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenterMyProxyImpl$1', 890), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaPresenterMyProxyImpl$1$1', 891), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView', 893), Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratedPopupPanel', 460), Lcom_google_gwt_user_client_ui_DialogBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox', 463), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView$1_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView$1', 894), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView$2_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView$2', 895), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView$3_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView$3', 896), Lcom_google_gwt_user_client_ui_DialogBox$CaptionImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$CaptionImpl', 465), Lcom_google_gwt_user_client_ui_DialogBox$MouseHandler_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$MouseHandler', 469), Lcom_google_gwt_user_client_ui_DialogBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$1', 464), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView_BinderImpl', 897), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView_BinderImpl$Widgets', 898), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView_BinderImpl$Widgets$1', 899), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView_BinderImpl$Widgets$2', 900), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView_BinderImpl$Widgets$3', 901), Lcom_lemania_sis_client_form_masteragenda_MasterAgendaView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.form.masteragenda.', 'MasterAgendaView_BinderImpl$Widgets$4', 902), Lcom_google_gwt_user_client_ui_HTMLTable$Cell_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$Cell', 488), Lcom_lemania_sis_client_AgendaVerticalPanel_2_classLit = createForClass('com.lemania.sis.client.', 'AgendaVerticalPanel', 773), Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemProxy_2_classLit = createForInterface('com.lemania.sis.shared.masteragendaitem.', 'MasterAgendaItemProxy'), Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.masteragendaitem.', 'MasterAgendaItemRequestFactoryImpl', 1666), Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratorPanel', 462), Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemRequestFactory_1MasterAgendaItemRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.masteragendaitem.', 'MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl', 1667), Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemRequestFactory_1MasterAgendaItemRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.masteragendaitem.', 'MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$1X', 1668), Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemRequestFactory_1MasterAgendaItemRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.masteragendaitem.', 'MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$4X', 1669), Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemRequestFactory_1MasterAgendaItemRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.masteragendaitem.', 'MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl$5X', 1670), Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseDownEvent', 251), Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseUpEvent', 255), Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseMoveEvent', 252), Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseOverEvent', 254), Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseOutEvent', 253), Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.masteragendaitem.', 'MasterAgendaItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1663), Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.masteragendaitem.', 'MasterAgendaItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1664), Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.masteragendaitem.', 'MasterAgendaItemProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1665), Lcom_lemania_sis_shared_masteragendaitem_MasterAgendaItemRequestFactory_1MasterAgendaItemRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.masteragendaitem.', 'MasterAgendaItemRequestFactory_MasterAgendaItemRequestContextImpl_FactoryImpl', 1671);
$entry(onLoad)(30);
