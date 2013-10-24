defineSeed(1, -1, CM$);
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
function $onBrowserEvent(this$static, context, parent_0, value, event_0, valueUpdater){
  var eventType;
  eventType = event_0.type;
  $equals_5('keydown', eventType) && (event_0.keyCode || 0) == 13 && this$static.onEnterKeyDown(context, parent_0, value, event_0, valueUpdater);
}

function $setValue(this$static, context, parent_0, value){
  var sb;
  sb = new SafeHtmlBuilder_0;
  $render_1(this$static, context, value, sb);
  $setInnerHTML(parent_0, (new SafeHtmlString_0($toString_0(sb.sb.data))).html);
}

function AbstractCell_0(consumedEvents){
  var event_0, event$index, event$max, events;
  events = null;
  if (consumedEvents != null && consumedEvents.length > 0) {
    events = new HashSet_0;
    for (event$index = 0 , event$max = consumedEvents.length; event$index < event$max; ++event$index) {
      event_0 = consumedEvents[event$index];
      $add_20(events, event_0);
    }
  }
  !!events && (this.consumedEvents = ($clinit_Collections() , new Collections$UnmodifiableSet_0(events)));
}

defineSeed(84, 1, {});
_.dependsOnSelection_0 = function dependsOnSelection(){
  return false;
}
;
_.handlesSelection_0 = function handlesSelection(){
  return false;
}
;
_.isEditing_0 = function isEditing_0(context, parent_0, value){
  return false;
}
;
_.onBrowserEvent = function onBrowserEvent(context, parent_0, value, event_0, valueUpdater){
  $onBrowserEvent(this, context, parent_0, value, event_0, valueUpdater);
}
;
_.onEnterKeyDown = function onEnterKeyDown(context, parent_0, value, event_0, valueUpdater){
}
;
_.resetFocus = function resetFocus(context, parent_0, value){
  return false;
}
;
_.consumedEvents = null;
function $clearViewData(this$static, key_0){
  key_0 != null && this$static.viewDataMap.remove_3(key_0);
}

function $getViewData(this$static, key_0){
  return key_0 == null?null:this$static.viewDataMap.get_1(key_0);
}

function $setViewData(this$static, key_0, viewData){
  if (key_0 == null) {
    return;
  }
  viewData == null?key_0 != null && this$static.viewDataMap.remove_3(key_0):this$static.viewDataMap.put(key_0, viewData);
}

function AbstractEditableCell_0(consumedEvents){
  AbstractCell_0.call(this, consumedEvents);
  this.viewDataMap = new HashMap_0;
}

defineSeed(85, 84, {});
function $render(this$static, context, data, sb){
  data == null?this$static.render_0(context, null, sb):this$static.render_0(context, $render_2(dynamicCast(data, Q$String)), sb);
}

function AbstractSafeHtmlCell_0(renderer, consumedEvents){
  AbstractCell_0.call(this, consumedEvents);
  if (!renderer) {
    throw new IllegalArgumentException_1('renderer == null');
  }
}

defineSeed(86, 84, {});
_.render = function render(context, data, sb){
  $render(this, context, data, sb);
}
;
function $onBrowserEvent_0(this$static, context, parent_0, value, event_0, valueUpdater){
  var eventTarget;
  $onBrowserEvent(this$static, context, parent_0, value, event_0, valueUpdater);
  if ($equals_5('click', event_0.type)) {
    eventTarget = event_0.srcElement;
    if (!is_0(eventTarget)) {
      return;
    }
    isOrHasChildImpl($getFirstChildElement(parent_0), eventTarget) && !!valueUpdater && valueUpdater.update_0(value);
  }
}

function $onEnterKeyDown(value, valueUpdater){
  !!valueUpdater && valueUpdater.update_0(value);
}

function ButtonCell_0(){
  ButtonCell_1.call(this, (!instance_2 && (instance_2 = new SimpleSafeHtmlRenderer_0) , instance_2));
}

function ButtonCell_1(renderer){
  AbstractSafeHtmlCell_0.call(this, renderer, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['click', 'keydown']));
}

defineSeed(87, 86, {}, ButtonCell_0);
_.onBrowserEvent = function onBrowserEvent_0(context, parent_0, value, event_0, valueUpdater){
  $onBrowserEvent_0(this, context, parent_0, dynamicCast(value, Q$String), event_0, valueUpdater);
}
;
_.onEnterKeyDown = function onEnterKeyDown_0(context, parent_0, value, event_0, valueUpdater){
  $onEnterKeyDown(dynamicCast(value, Q$String), valueUpdater);
}
;
_.render_0 = function render_0(context, data, sb){
  $append_10(sb.sb, '<button type="button" tabindex="-1">');
  !!data && ($append_10(sb.sb, data.html) , sb);
  $append_10(sb.sb, '<\/button>');
}
;
function Cell$Context_0(index, column, key_0){
  Cell$Context_1.call(this, index, column, key_0, 0);
}

function Cell$Context_1(index, column, key_0, subindex){
  this.index_0 = index;
  this.column = column;
  this.key = key_0;
  this.subindex = subindex;
}

defineSeed(88, 1, {}, Cell$Context_0, Cell$Context_1);
_.column = 0;
_.index_0 = 0;
_.key = null;
_.subindex = 0;
function $clinit_CheckboxCell(){
  $clinit_CheckboxCell = nullMethod;
  INPUT_CHECKED = ($clinit_SafeHtmlUtils() , new SafeHtmlString_0('<input type="checkbox" tabindex="-1" checked/>'));
  INPUT_UNCHECKED = new SafeHtmlString_0('<input type="checkbox" tabindex="-1"/>');
}

function $onBrowserEvent_1(this$static, context, parent_0, value, event_0, valueUpdater){
  var enterPressed, input, isChecked, type;
  type = event_0.type;
  enterPressed = $equals_5('keydown', type) && (event_0.keyCode || 0) == 13;
  if ($equals_5('change', type) || enterPressed) {
    input = parent_0.firstChild;
    isChecked = ($clinit_Boolean() , input.checked?TRUE_1:FALSE_1);
    if (enterPressed && (this$static.handlesSelection || !this$static.dependsOnSelection)) {
      isChecked = isChecked.value_0?FALSE_1:TRUE_1;
      $setChecked(input, isChecked.value_0);
    }
    value != isChecked && !this$static.dependsOnSelection?$setViewData(this$static, context.key, isChecked):$clearViewData(this$static, context.key);
    !!valueUpdater && valueUpdater.update_0(isChecked);
  }
}

function $render_0(this$static, context, value, sb){
  var key_0, viewData;
  key_0 = context.key;
  viewData = dynamicCast(key_0 == null?null:this$static.viewDataMap.get_1(key_0), Q$Boolean);
  if (!!viewData && !!value && value.value_0 == viewData.value_0) {
    key_0 != null && this$static.viewDataMap.remove_3(key_0);
    viewData = null;
  }
  !!value && (viewData?viewData:value).value_0?$append_4(sb, INPUT_CHECKED):$append_4(sb, INPUT_UNCHECKED);
}

function CheckboxCell_0(){
  $clinit_CheckboxCell();
  AbstractEditableCell_0.call(this, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['change', 'keydown']));
  this.dependsOnSelection = false;
  this.handlesSelection = false;
}

defineSeed(89, 85, {}, CheckboxCell_0);
_.dependsOnSelection_0 = function dependsOnSelection_0(){
  return this.dependsOnSelection;
}
;
_.handlesSelection_0 = function handlesSelection_0(){
  return this.handlesSelection;
}
;
_.isEditing_0 = function isEditing_1(context, parent_0, value){
  return dynamicCast(value, Q$Boolean) , false;
}
;
_.onBrowserEvent = function onBrowserEvent_1(context, parent_0, value, event_0, valueUpdater){
  $onBrowserEvent_1(this, context, parent_0, dynamicCast(value, Q$Boolean), event_0, valueUpdater);
}
;
_.render = function render_1(context, value, sb){
  $render_0(this, context, dynamicCast(value, Q$Boolean), sb);
}
;
_.dependsOnSelection = false;
_.handlesSelection = false;
var INPUT_CHECKED, INPUT_UNCHECKED;
function $clearInput(input){
  input.selectionEnd?(input.selectionEnd = input.selectionStart):$doc.selection && $doc.selection.clear();
}

function $commit(this$static, context, parent_0, viewData, valueUpdater){
  var value;
  value = $updateViewData(parent_0, viewData, false);
  $clearInput(parent_0.firstChild);
  $setValue(this$static, context, parent_0, viewData.original);
  !!valueUpdater && valueUpdater.update_0(value);
}

function $editEvent(this$static, context, parent_0, value, viewData, event_0, valueUpdater){
  var eventTarget, keyCode, keyDown, keyUp, originalText, target, type;
  type = event_0.type;
  keyUp = $equals_5('keyup', type);
  keyDown = $equals_5('keydown', type);
  if (keyUp || keyDown) {
    keyCode = event_0.keyCode || 0;
    if (keyUp && keyCode == 13) {
      $commit(this$static, context, parent_0, viewData, valueUpdater);
    }
     else if (keyUp && keyCode == 27) {
      originalText = viewData.original;
      if (viewData.isEditingAgain) {
        viewData.text_0 = originalText;
        $setEditing(viewData, false);
      }
       else {
        $setViewData(this$static, context.key, null);
      }
      $clearInput(parent_0.firstChild);
      $setValue(this$static, context, parent_0, value);
    }
     else {
      $updateViewData(parent_0, viewData, true);
    }
  }
   else if ($equals_5('blur', type)) {
    eventTarget = event_0.srcElement;
    if (is_0(eventTarget)) {
      target = eventTarget;
      $equals_5('input', $getTagName(target).toLowerCase()) && $commit(this$static, context, parent_0, viewData, valueUpdater);
    }
  }
}

function $isEditing(this$static, context){
  var viewData;
  viewData = dynamicCast($getViewData(this$static, context.key), Q$EditTextCell$ViewData);
  return !!viewData && viewData.isEditing;
}

function $onBrowserEvent_2(this$static, context, parent_0, value, event_0, valueUpdater){
  var enterPressed, key_0, keyCode, type, viewData, input;
  key_0 = context.key;
  viewData = dynamicCast(key_0 == null?null:this$static.viewDataMap.get_1(key_0), Q$EditTextCell$ViewData);
  if (!!viewData && viewData.isEditing) {
    $editEvent(this$static, context, parent_0, value, viewData, event_0, valueUpdater);
  }
   else {
    type = event_0.type;
    keyCode = event_0.keyCode || 0;
    enterPressed = $equals_5('keyup', type) && keyCode == 13;
    if ($equals_5('click', type) || enterPressed) {
      if (!viewData) {
        viewData = new EditTextCell$ViewData_0(value);
        $setViewData(this$static, key_0, viewData);
      }
       else {
        $setEditing(viewData, true);
      }
      $setValue(this$static, context, parent_0, value);
      input = parent_0.firstChild;
      input.focus();
      input.select();
    }
  }
}

function $render_1(this$static, context, value, sb){
  var key_0, text, toRender, viewData, sb_0;
  key_0 = context.key;
  viewData = dynamicCast(key_0 == null?null:this$static.viewDataMap.get_1(key_0), Q$EditTextCell$ViewData);
  if (!!viewData && !viewData.isEditing && value != null && $equals_5(value, viewData.text_0)) {
    key_0 != null && this$static.viewDataMap.remove_3(key_0);
    viewData = null;
  }
  toRender = value;
  if (viewData) {
    text = viewData.text_0;
    if (viewData.isEditing) {
      $append_4(sb, (sb_0 = new StringBuilder_0 , $append_1(sb_0.data, '<input type="text" value="') , $append_10(sb_0, htmlEscape(text)) , $append_1(sb_0.data, '" tabindex="-1"><\/input>') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))));
      return;
    }
     else {
      toRender = text;
    }
  }
  toRender != null && $trim(toRender).length > 0?$append_4(sb, toRender == null?($clinit_SafeHtmlUtils() , EMPTY_SAFE_HTML):($clinit_SafeHtmlUtils() , new SafeHtmlString_0(htmlEscape(toRender)))):($append_10(sb.sb, '\xA0') , sb);
}

function $resetFocus(this$static, context, parent_0){
  if ($isEditing(this$static, context)) {
    parent_0.firstChild.focus();
    return true;
  }
  return false;
}

function $updateViewData(parent_0, viewData, isEditing){
  var input, value;
  input = parent_0.firstChild;
  value = input.value;
  viewData.text_0 = value;
  $setEditing(viewData, isEditing);
  return value;
}

function EditTextCell_0(){
  EditTextCell_1.call(this, (!instance_2 && (instance_2 = new SimpleSafeHtmlRenderer_0) , instance_2));
}

function EditTextCell_1(renderer){
  AbstractEditableCell_0.call(this, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['click', 'keyup', 'keydown', 'blur']));
  !template && (template = new EditTextCell_TemplateImpl_0);
  if (!renderer) {
    throw new IllegalArgumentException_1('renderer == null');
  }
}

defineSeed(90, 85, {}, EditTextCell_0);
_.isEditing_0 = function isEditing_2(context, parent_0, value){
  return $isEditing(this, context, dynamicCast(value, Q$String));
}
;
_.onBrowserEvent = function onBrowserEvent_2(context, parent_0, value, event_0, valueUpdater){
  $onBrowserEvent_2(this, context, parent_0, dynamicCast(value, Q$String), event_0, valueUpdater);
}
;
_.render = function render_2(context, value, sb){
  $render_1(this, context, dynamicCast(value, Q$String), sb);
}
;
_.resetFocus = function resetFocus_0(context, parent_0, value){
  return $resetFocus(this, context, parent_0, dynamicCast(value, Q$String));
}
;
var template = null;
function $equalsOrBothNull(o1, o2){
  return o1 == null?o2 == null:$equals_5(o1, o2);
}

function $setEditing(this$static, isEditing){
  var wasEditing;
  wasEditing = this$static.isEditing;
  this$static.isEditing = isEditing;
  if (!wasEditing && isEditing) {
    this$static.isEditingAgain = true;
    this$static.original = this$static.text_0;
  }
}

function EditTextCell$ViewData_0(text){
  this.original = text;
  this.text_0 = text;
  this.isEditing = true;
  this.isEditingAgain = false;
}

defineSeed(91, 1, makeCastMap([Q$EditTextCell$ViewData]), EditTextCell$ViewData_0);
_.equals$ = function equals_1(o){
  var vd;
  if (o == null) {
    return false;
  }
  vd = dynamicCast(o, Q$EditTextCell$ViewData);
  return $equalsOrBothNull(this.original, vd.original) && $equalsOrBothNull(this.text_0, vd.text_0) && this.isEditing == vd.isEditing && this.isEditingAgain == vd.isEditingAgain;
}
;
_.hashCode$ = function hashCode_2(){
  return getHashCode_1(this.original) + getHashCode_1(this.text_0) + (($clinit_Boolean() , this.isEditing?TRUE_1:FALSE_1).value_0?1231:1237) * 29 + ((this.isEditingAgain?TRUE_1:FALSE_1).value_0?1231:1237);
}
;
_.isEditing = false;
_.isEditingAgain = false;
_.original = null;
_.text_0 = null;
function EditTextCell_TemplateImpl_0(){
}

defineSeed(92, 1, {}, EditTextCell_TemplateImpl_0);
function TextCell_0(){
  AbstractSafeHtmlCell_0.call(this, (!instance_2 && (instance_2 = new SimpleSafeHtmlRenderer_0) , instance_2), initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, []));
}

defineSeed(93, 86, {}, TextCell_0);
_.render_0 = function render_3(context, value, sb){
  !!value && ($append_10(sb.sb, value.html) , sb);
}
;
function $elapsedMillis(this$static){
  return currentTimeMillis() - this$static.start;
}

function $initCause(this$static, cause){
  if (this$static.cause) {
    throw new IllegalStateException_1("Can't overwrite cause");
  }
  if (cause == this$static) {
    throw new IllegalArgumentException_1('Self-causation not permitted');
  }
  this$static.cause = cause;
  return this$static;
}

function RuntimeException_2(cause){
  $fillInStackTrace();
  this.detailMessage = !cause?null:$toString(cause);
  this.cause = cause;
}

defineSeed(97, 98, makeCastMap([Q$Serializable, Q$RuntimeException, Q$Throwable]), RuntimeException_2);
function $push(this$static, value){
  this$static[this$static.length] = value;
}

function $push_0(this$static, value){
  this$static[this$static.length] = value;
}

function create(milliseconds){
  return new Date(milliseconds);
}

function $clinit_JsonUtils(){
  var out;
  $clinit_JsonUtils = nullMethod;
  escapeTable = (out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'] , out[34] = '\\"' , out[92] = '\\\\' , out[173] = '\\u00ad' , out[1536] = '\\u0600' , out[1537] = '\\u0601' , out[1538] = '\\u0602' , out[1539] = '\\u0603' , out[1757] = '\\u06dd' , out[1807] = '\\u070f' , out[6068] = '\\u17b4' , out[6069] = '\\u17b5' , out[8203] = '\\u200b' , out[8204] = '\\u200c' , out[8205] = '\\u200d' , out[8206] = '\\u200e' , out[8207] = '\\u200f' , out[8232] = '\\u2028' , out[8233] = '\\u2029' , out[8234] = '\\u202a' , out[8235] = '\\u202b' , out[8236] = '\\u202c' , out[8237] = '\\u202d' , out[8238] = '\\u202e' , out[8288] = '\\u2060' , out[8289] = '\\u2061' , out[8290] = '\\u2062' , out[8291] = '\\u2063' , out[8292] = '\\u2064' , out[8298] = '\\u206a' , out[8299] = '\\u206b' , out[8300] = '\\u206c' , out[8301] = '\\u206d' , out[8302] = '\\u206e' , out[8303] = '\\u206f' , out[65279] = '\\ufeff' , out[65529] = '\\ufff9' , out[65530] = '\\ufffa' , out[65531] = '\\ufffb' , out);
  hasJsonParse = typeof JSON == 'object' && typeof JSON.parse == 'function';
}

function escapeChar(c){
  var lookedUp = escapeTable[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function escapeJsonForEval(toEscape){
  var s = toEscape.replace(/[\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]/g, function(x){
    return escapeChar(x);
  }
  );
  return s;
}

function escapeValue(toEscape){
  $clinit_JsonUtils();
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x){
    return escapeChar(x);
  }
  );
  return '"' + s + '"';
}

function safeEval(json){
  $clinit_JsonUtils();
  var v;
  if (hasJsonParse) {
    try {
      return JSON.parse(json);
    }
     catch (e) {
      return throwIllegalArgumentException('Error parsing JSON: ' + e, json);
    }
  }
   else {
    if (/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(json.replace(/"(\\.|[^"\\])*"/g, ''))) {
      return throwIllegalArgumentException('Illegal character in JSON string', json);
    }
    json = escapeJsonForEval(json);
    try {
      return eval('(' + json + ')');
    }
     catch (e) {
      return throwIllegalArgumentException('Error parsing JSON: ' + e, json);
    }
  }
}

function throwIllegalArgumentException(message, data){
  throw new IllegalArgumentException_1(message + '\n' + data);
}

var escapeTable, hasJsonParse;
function $append(a, x){
  a[a.explicitLength++] = x;
}

function $append_0(a, x){
  a[a.explicitLength++] = x;
}

function $append_2(a, x){
  a[a.explicitLength++] = x;
}

function $replace(a, start, end, toInsert){
  var s;
  s = $takeString(a);
  $appendNonNull(a, s.substr(0, start - 0));
  a[a.explicitLength++] = toInsert == null?'null':toInsert;
  $appendNonNull(a, $substring(s, end));
}

function get(instance, key_0){
  if (instance.expando$) {
    return instance.expando$[':' + key_0];
  }
  return null;
}

function setNative(instance, key_0, value){
  !instance.expando$ && (instance.expando$ = {});
  instance.expando$[':' + key_0] = value;
}

function $html(this$static, html){
  $html_0(this$static.delegate_0, html);
  return this$static.returnBuilder;
}

defineSeed(130, 1, {});
_.html_0 = function html_0(html){
  return $html(this, html);
}
;
_.delegate_0 = null;
_.isEndTagForbidden = false;
_.returnBuilder = null;
defineSeed(131, 1, {});
function $assertCanAddStylePropertyImpl(this$static){
  $assertStartTagOpen(this$static, 'Style properties cannot be added after appending HTML or adding a child element.');
  if (this$static.isStyleClosed) {
    throw new IllegalStateException_1('Style properties must be added at the same time. If you already added style properties, you cannot add more after adding non-style attributes.');
  }
  if (!this$static.isStyleOpen) {
    this$static.isStyleOpen = true;
    $append_10(this$static.sb, ' style="');
  }
}

function $assertEndTagNotForbidden(this$static, operation){
  if ($peek_0(this$static.stack).builder.isEndTagForbidden) {
    throw new UnsupportedOperationException_1($peek_0(this$static.stack).tagName_0 + ' does not support ' + operation);
  }
}

function $assertStartTagOpen(this$static, message){
  if (!this$static.isStartTagOpen) {
    throw new IllegalStateException_1(message);
  }
}

function $assertValidTagName(tagName){
  if (!$test(HTML_TAG_REGEX, tagName)) {
    throw new IllegalArgumentException_1('The specified tag name is invalid: ' + tagName);
  }
}

function $end(this$static){
  $endImpl(this$static, $peek_0(this$static.stack).tagName_0);
}

function $end_0(this$static, tagName){
  var topItem;
  topItem = $peek_0(this$static.stack).tagName_0;
  if (!$equalsIgnoreCase(topItem, tagName)) {
    throw new IllegalStateException_1('Specified tag "' + tagName + '" does not match the current element "' + topItem + '"');
  }
  $endImpl(this$static, topItem);
}

function $endAllTags(this$static){
  while (this$static.stack.top_0) {
    $endImpl(this$static, $peek_0(this$static.stack).tagName_0);
  }
}

function $endImpl(this$static, tagName){
  $maybeCloseStartTag(this$static);
  $peek_0(this$static.stack).builder.isEndTagForbidden?$append_10(this$static.sb, ' />'):$append_10($append_10($append_10(this$static.sb, '<\/'), tagName), '>');
  this$static.isStartTagOpen = false;
  this$static.isStyleClosed = true;
  $pop(this$static.stack);
  this$static.isHtmlOrTextAdded = false;
}

function $endStyle(this$static){
  if (!this$static.isStyleOpen) {
    throw new IllegalStateException_1("Attempting to close a style attribute, but the style attribute isn't open");
  }
  $maybeCloseStyleAttribute(this$static);
}

function $html_0(this$static, html){
  $assertStartTagOpen(this$static, 'html cannot be set on an element that already contains other content or elements.');
  $maybeCloseStartTag(this$static);
  $assertEndTagNotForbidden(this$static, 'html');
  this$static.isHtmlOrTextAdded = true;
  $append_10(this$static.sb, html.html);
}

function $maybeCloseStartTag(this$static){
  $maybeCloseStyleAttribute(this$static);
  if (this$static.isStartTagOpen) {
    this$static.isStartTagOpen = false;
    $peek_0(this$static.stack).builder.isEndTagForbidden || $append_10(this$static.sb, '>');
  }
}

function $maybeCloseStyleAttribute(this$static){
  if (this$static.isStyleOpen) {
    this$static.isStyleOpen = false;
    this$static.isStyleClosed = true;
    $append_10(this$static.sb, '"');
  }
}

function $onStart(this$static, tagName, builder){
  if (this$static.isEmpty) {
    this$static.isEmpty = false;
  }
   else if (!this$static.stack.top_0) {
    throw new IllegalStateException_1('You can only build one top level element.');
  }
   else {
    $assertEndTagNotForbidden(this$static, 'child elements');
    if ($peek_0(this$static.stack).builder.isEndTagForbidden) {
      throw new UnsupportedOperationException_1($peek_0(this$static.stack).tagName_0 + ' does not support child elements.');
    }
  }
  if (this$static.isHtmlOrTextAdded) {
    throw new IllegalStateException_1('Cannot append an element after setting text of html.');
  }
  $assertValidTagName(tagName);
  $maybeCloseStartTag(this$static);
  $push_1(this$static.stack, builder, tagName);
  this$static.isStartTagOpen = true;
  this$static.isStyleOpen = false;
  this$static.isStyleClosed = false;
  this$static.isHtmlOrTextAdded = false;
}

defineSeed(132, 1, {});
_.isEmpty = true;
_.isHtmlOrTextAdded = false;
_.isStartTagOpen = false;
_.isStyleClosed = false;
_.isStyleOpen = false;
var HTML_TAG_REGEX = null;
function $assertNotEmpty(this$static){
  if (!this$static.top_0) {
    throw new IllegalStateException_1('There are no elements on the stack.');
  }
}

function $peek_0(this$static){
  $assertNotEmpty(this$static);
  return this$static.top_0;
}

function $pop(this$static){
  var toRet;
  $assertNotEmpty(this$static);
  toRet = this$static.top_0;
  this$static.top_0 = this$static.top_0.next;
  --this$static.size_0;
  return toRet;
}

function $push_1(this$static, builder, tagName){
  var node;
  node = new ElementBuilderImpl$StackNode_0(tagName, builder);
  node.next = this$static.top_0;
  this$static.top_0 = node;
  ++this$static.size_0;
}

function ElementBuilderImpl$FastPeekStack_0(){
}

defineSeed(133, 1, {}, ElementBuilderImpl$FastPeekStack_0);
_.size_0 = 0;
_.top_0 = null;
function ElementBuilderImpl$StackNode_0(tagName, builder){
  this.builder = builder;
  this.tagName_0 = tagName;
}

defineSeed(134, 1, {}, ElementBuilderImpl$StackNode_0);
_.builder = null;
_.next = null;
_.tagName_0 = null;
function HtmlBuilderFactory_0(){
}

defineSeed(135, 131, {}, HtmlBuilderFactory_0);
var instance_0 = null;
function $asSafeHtml(this$static){
  $endAllTags(this$static);
  return $clinit_SafeHtmlUtils() , new SafeHtmlString_0($toString_0(this$static.sb.data));
}

function $attribute(this$static, name_0, value){
  $trustedAttribute(this$static, htmlEscape(name_0), value);
}

function $attribute_0(this$static, name_0, value){
  $trustedAttribute_0(this$static, htmlEscape(name_0), value);
}

function $startDiv(this$static){
  $trustedStart(this$static, 'div', this$static.divBuilder);
  return this$static.divBuilder;
}

function $startTD(this$static){
  $trustedStart(this$static, 'td', this$static.tableCellBuilder);
  return this$static.tableCellBuilder;
}

function $startTH(this$static){
  $trustedStart(this$static, 'th', this$static.tableCellBuilder);
  return this$static.tableCellBuilder;
}

function $startTR(this$static){
  $trustedStart(this$static, 'tr', this$static.tableRowBuilder);
  return this$static.tableRowBuilder;
}

function $startTableSection(this$static, tagName){
  !this$static.tableSectionBuilder && (this$static.tableSectionBuilder = new HtmlTableSectionBuilder_0(this$static));
  $trustedStart(this$static, tagName, this$static.tableSectionBuilder);
  return this$static.tableSectionBuilder;
}

function $styleProperty(this$static, style){
  $assertCanAddStylePropertyImpl(this$static);
  $append_10(this$static.sb, style.css);
  return this$static.stylesBuilder;
}

function $trustedAttribute(this$static, name_0, value){
  $assertStartTagOpen(this$static, 'Attributes cannot be added after appending HTML or adding a child element.');
  $maybeCloseStyleAttribute(this$static);
  $append_10($append_8($append_10($append_10($append_10(this$static.sb, ' '), name_0), '="'), value), '"');
}

function $trustedAttribute_0(this$static, name_0, value){
  $assertStartTagOpen(this$static, 'Attributes cannot be added after appending HTML or adding a child element.');
  $maybeCloseStyleAttribute(this$static);
  $append_10($append_10($append_10($append_10($append_10(this$static.sb, ' '), name_0), '="'), htmlEscape(value)), '"');
}

function $trustedStart(this$static, tagName, builder){
  $onStart(this$static, tagName, builder);
  $append_10($append_10(this$static.sb, '<'), tagName);
}

function HtmlBuilderImpl_0(){
  this.stack = new ElementBuilderImpl$FastPeekStack_0;
  !HTML_TAG_REGEX && (HTML_TAG_REGEX = new RegExp('^[a-z][a-z0-9]*$', 'i'));
  this.divBuilder = new HtmlDivBuilder_0(this);
  new HtmlElementBuilder_0(this);
  new HtmlInputBuilder_0(this);
  new HtmlLIBuilder_0(this);
  new HtmlOptionBuilder_0(this);
  new HtmlSpanBuilder_0(this);
  this.stylesBuilder = new HtmlStylesBuilder_0(this);
  this.tableCellBuilder = new HtmlTableCellBuilder_0(this);
  this.tableRowBuilder = new HtmlTableRowBuilder_0(this);
  this.sb = new StringBuilder_0;
}

defineSeed(136, 132, {}, HtmlBuilderImpl_0);
_.tableSectionBuilder = null;
function $attribute_1(this$static, name_0, value){
  $attribute(this$static.delegate, name_0, value);
  return this$static.returnBuilder;
}

function $className(this$static, className){
  return $trustedAttribute_0(this$static.delegate, 'class', className) , this$static.returnBuilder;
}

function HtmlElementBuilderBase_0(delegate){
  HtmlElementBuilderBase_1.call(this, delegate, false);
}

function HtmlElementBuilderBase_1(delegate, isEndTagForbidden){
  this.delegate_0 = delegate;
  this.isEndTagForbidden = isEndTagForbidden;
  this.returnBuilder = this;
  this.delegate = delegate;
}

defineSeed(138, 130, {});
_.delegate = null;
function HtmlDivBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(137, 138, {}, HtmlDivBuilder_0);
function HtmlElementBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(139, 138, {}, HtmlElementBuilder_0);
function HtmlInputBuilder_0(delegate){
  HtmlElementBuilderBase_1.call(this, delegate, true);
}

defineSeed(140, 138, {}, HtmlInputBuilder_0);
function HtmlLIBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(141, 138, {}, HtmlLIBuilder_0);
function HtmlOptionBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(142, 138, {}, HtmlOptionBuilder_0);
function HtmlSpanBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(143, 138, {}, HtmlSpanBuilder_0);
function $left(this$static){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('left:0.0px;'));
}

function $lineHeight(this$static){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('line-height:0.0px;'));
}

function $marginTop(this$static, value){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('margin-top:' + value + 'px;'));
}

function $outlineStyle(this$static){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('outline-style:none;'));
}

function $paddingLeft(this$static, value){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('padding-left:' + value + 'px;'));
}

function $position(this$static, value){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('position:' + value.getCssName() + ';'));
}

function $top(this$static){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('top:50.0%;'));
}

function $trustedProperty(this$static, name_0){
  name_0 = toHyphenatedForm(name_0);
  return $styleProperty(this$static.delegate, new SafeStylesString_0(name_0 + ':1;'));
}

function HtmlStylesBuilder_0(delegate){
  this.delegate = delegate;
}

function toHyphenatedForm(name_0){
  var hyphenated, matches, word;
  if (!camelCaseWord) {
    camelCaseMap = new HtmlStylesBuilder$FastStringMapClient_0;
    camelCaseWord = new RegExp('([A-Za-z])([^A-Z]*)', 'g');
    caseWord = new RegExp('[A-Z]([^A-Z]*)');
  }
  if (name_0.indexOf('-') != -1) {
    return name_0;
  }
  hyphenated = $get_0(camelCaseMap, name_0);
  if (hyphenated == null) {
    hyphenated = '';
    while (matches = $exec(camelCaseWord, name_0)) {
      word = matches[0];
      if (!$exec(caseWord, word)) {
        hyphenated += word;
      }
       else {
        hyphenated += '-' + matches[1].toLowerCase();
        matches.length > 1 && (hyphenated += matches[2]);
      }
    }
    $put(camelCaseMap, name_0, hyphenated);
  }
  return hyphenated;
}

defineSeed(144, 1, {}, HtmlStylesBuilder_0);
_.delegate = null;
var camelCaseMap = null, camelCaseWord = null, caseWord = null;
function $get_0(this$static, key_0){
  return this$static.map[key_0] || null;
}

function $put(this$static, key_0, value){
  this$static.map[key_0] = value;
}

function HtmlStylesBuilder$FastStringMapClient_0(){
  this.map = {};
}

defineSeed(145, 1, {}, HtmlStylesBuilder$FastStringMapClient_0);
function $colSpan(this$static, colSpan){
  return $trustedAttribute(this$static.delegate, 'colSpan', colSpan) , dynamicCast(this$static.returnBuilder, Q$TableCellBuilder);
}

function HtmlTableCellBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(146, 138, makeCastMap([Q$TableCellBuilder]), HtmlTableCellBuilder_0);
function $html_1(){
  throw new UnsupportedOperationException_1('Table row elements do not support setting inner html or text. Use startTD/startTH() instead to append a table cell to the section.');
}

function HtmlTableRowBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(147, 138, {}, HtmlTableRowBuilder_0);
_.html_0 = function html_1(html){
  return $html_1();
}
;
function $html_2(){
  throw new UnsupportedOperationException_1('Table section elements do not support setting inner html or text. Use startTR() instead to append a table row to the section.');
}

function HtmlTableSectionBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(148, 138, {}, HtmlTableSectionBuilder_0);
_.html_0 = function html_2(html){
  return $html_2();
}
;
function $getChild(this$static, index){
  return this$static.childNodes[index];
}

function $replaceChild(this$static, newChild, oldChild){
  return this$static.replaceChild(newChild, oldChild);
}

function $setScrollTop(this$static, scrollTop){
  this$static.scrollTop = scrollTop;
}

function $createCheckInputElement(doc){
  var e = doc.createElement('INPUT');
  e.type = 'checkbox';
  e.value = 'on';
  return e;
}

function $createInputElement(doc, type){
  var e = doc.createElement('INPUT');
  e.type = type;
  return e;
}

function $getNextSiblingElement(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}

function $selectClear(select){
  select.options.length = 0;
}

function $getAttribute(elem, name_0){
  var attr = elem.getAttribute(name_0);
  return attr == null?'':attr + '';
}

function $selectAdd(select, option, before){
  before?select.add(option, before.index):select.add(option);
}

function $setScrollLeft(elem, left){
  elem.currentStyle.direction == 'rtl' && (left += (elem.scrollWidth || 0) - elem.clientWidth);
  elem.scrollLeft = left;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $getScrollLeft_0(this$static){
  return $getScrollLeft($equals_5(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body);
}

function $getScrollTop(this$static){
  return ($equals_5(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollTop || 0;
}

function $setChecked(this$static, checked){
  this$static.checked = checked;
}

function $setDefaultChecked(this$static, defaultChecked){
  this$static.defaultChecked = defaultChecked;
}

function $setDisabled(this$static, disabled){
  this$static.disabled = disabled;
}

function $setHtmlFor(this$static, htmlFor){
  this$static.htmlFor = htmlFor;
}

function $setSelectedIndex(this$static, index){
  this$static.selectedIndex = index;
}

function $clinit_Style$OutlineStyle(){
  $clinit_Style$OutlineStyle = nullMethod;
  NONE_0 = new Style$OutlineStyle$1_0;
  DASHED = new Style$OutlineStyle$2_0;
  DOTTED = new Style$OutlineStyle$3_0;
  DOUBLE = new Style$OutlineStyle$4_0;
  GROOVE = new Style$OutlineStyle$5_0;
  INSET = new Style$OutlineStyle$6_0;
  OUTSET = new Style$OutlineStyle$7_0;
  RIDGE = new Style$OutlineStyle$8_0;
  SOLID = new Style$OutlineStyle$9_0;
  $VALUES_2 = initValues(_3Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$OutlineStyle, [NONE_0, DASHED, DOTTED, DOUBLE, GROOVE, INSET, OUTSET, RIDGE, SOLID]);
}

function values_3(){
  $clinit_Style$OutlineStyle();
  return $VALUES_2;
}

defineSeed(173, 31, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_2, DASHED, DOTTED, DOUBLE, GROOVE, INSET, NONE_0, OUTSET, RIDGE, SOLID;
function Style$OutlineStyle$1_0(){
  Enum_0.call(this, 'NONE', 0);
}

defineSeed(174, 173, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$1_0);
function Style$OutlineStyle$2_0(){
  Enum_0.call(this, 'DASHED', 1);
}

defineSeed(175, 173, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$2_0);
function Style$OutlineStyle$3_0(){
  Enum_0.call(this, 'DOTTED', 2);
}

defineSeed(176, 173, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$3_0);
function Style$OutlineStyle$4_0(){
  Enum_0.call(this, 'DOUBLE', 3);
}

defineSeed(177, 173, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$4_0);
function Style$OutlineStyle$5_0(){
  Enum_0.call(this, 'GROOVE', 4);
}

defineSeed(178, 173, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$5_0);
function Style$OutlineStyle$6_0(){
  Enum_0.call(this, 'INSET', 5);
}

defineSeed(179, 173, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$6_0);
function Style$OutlineStyle$7_0(){
  Enum_0.call(this, 'OUTSET', 6);
}

defineSeed(180, 173, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$7_0);
function Style$OutlineStyle$8_0(){
  Enum_0.call(this, 'RIDGE', 7);
}

defineSeed(181, 173, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$8_0);
function Style$OutlineStyle$9_0(){
  Enum_0.call(this, 'SOLID', 8);
}

defineSeed(182, 173, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$9_0);
defineSeed(184, 183, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName(){
  return 'visible';
}
;
defineSeed(185, 183, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName_0(){
  return 'hidden';
}
;
defineSeed(186, 183, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName_1(){
  return 'scroll';
}
;
defineSeed(187, 183, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName_2(){
  return 'auto';
}
;
defineSeed(189, 188, makeCastMap([Q$Style$HasCssName, Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName_3(){
  return 'static';
}
;
defineSeed(190, 188, makeCastMap([Q$Style$HasCssName, Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName_4(){
  return 'relative';
}
;
defineSeed(191, 188, makeCastMap([Q$Style$HasCssName, Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName_5(){
  return 'absolute';
}
;
defineSeed(192, 188, makeCastMap([Q$Style$HasCssName, Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName_6(){
  return 'fixed';
}
;
function $clinit_Style$TableLayout(){
  $clinit_Style$TableLayout = nullMethod;
  AUTO_0 = new Style$TableLayout$1_0;
  FIXED_0 = new Style$TableLayout$2_0;
  $VALUES_5 = initValues(_3Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$TableLayout, [AUTO_0, FIXED_0]);
}

function values_6(){
  $clinit_Style$TableLayout();
  return $VALUES_5;
}

defineSeed(193, 31, makeCastMap([Q$Style$HasCssName, Q$Style$TableLayout, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_5, AUTO_0, FIXED_0;
function Style$TableLayout$1_0(){
  Enum_0.call(this, 'AUTO', 0);
}

defineSeed(194, 193, makeCastMap([Q$Style$HasCssName, Q$Style$TableLayout, Q$Serializable, Q$Comparable, Q$Enum]), Style$TableLayout$1_0);
function Style$TableLayout$2_0(){
  Enum_0.call(this, 'FIXED', 1);
}

defineSeed(195, 193, makeCastMap([Q$Style$HasCssName, Q$Style$TableLayout, Q$Serializable, Q$Comparable, Q$Enum]), Style$TableLayout$2_0);
function $clinit_StyleInjector(){
  $clinit_StyleInjector = nullMethod;
  toInject = [];
  toInjectAtEnd = [];
  toInjectAtStart = [];
  flusher = new StyleInjector$1_0;
}

function flush(){
  $clinit_StyleInjector();
  var css, maybeReturn, toReturn;
  toReturn = null;
  if (toInjectAtStart.length != 0) {
    css = toInjectAtStart.join('');
    maybeReturn = $injectStyleSheetAtStart(($clinit_StyleInjector$StyleInjectorImpl() , css));
    !toInjectAtStart && (toReturn = maybeReturn);
    toInjectAtStart.length = 0;
  }
  if (toInject.length != 0) {
    css = toInject.join('');
    maybeReturn = $injectStyleSheet(($clinit_StyleInjector$StyleInjectorImpl() , css));
    !toInject && (toReturn = maybeReturn);
    toInject.length = 0;
  }
  if (toInjectAtEnd.length != 0) {
    css = toInjectAtEnd.join('');
    maybeReturn = $injectStyleSheetAtEnd(($clinit_StyleInjector$StyleInjectorImpl() , css));
    !toInjectAtEnd && (toReturn = maybeReturn);
    toInjectAtEnd.length = 0;
  }
  needsInjection = false;
  return toReturn;
}

function schedule(){
  $clinit_StyleInjector();
  if (!needsInjection) {
    needsInjection = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_0), flusher);
  }
}

var flusher, needsInjection = false, toInject, toInjectAtEnd, toInjectAtStart;
function StyleInjector$1_0(){
}

defineSeed(222, 1, {}, StyleInjector$1_0);
_.execute_0 = function execute_2(){
  ($clinit_StyleInjector() , needsInjection) && flush();
}
;
function $clinit_StyleInjector$StyleInjectorImpl(){
  $clinit_StyleInjector$StyleInjectorImpl = nullMethod;
  $clinit_StyleInjector$StyleInjectorImplIE();
}

function $clinit_StyleInjector$StyleInjectorImplIE(){
  $clinit_StyleInjector$StyleInjectorImplIE = nullMethod;
  $clinit_StyleInjector$StyleInjectorImpl();
  styleSheetLengths = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 30, 1);
}

function $appendToStyleSheet(idx, contents, append){
  var style;
  style = $doc.styleSheets[idx];
  append?(style.cssText += contents , undefined):(style.cssText = contents + style.cssText , undefined);
  return style;
}

function $createNewStyleSheet(contents){
  var style;
  style = $doc.createStyleSheet();
  style.cssText = contents;
  return style;
}

function $injectStyleSheet(contents){
  var i, len, numStyles, shortestIdx, shortestLen;
  numStyles = $doc.styleSheets.length;
  if (numStyles < 30) {
    return $createNewStyleSheet(contents);
  }
   else {
    shortestLen = 2147483647;
    shortestIdx = -1;
    for (i = 0; i < numStyles; ++i) {
      len = styleSheetLengths[i];
      len == 0 && (len = styleSheetLengths[i] = $doc.styleSheets[i].cssText.length);
      if (len <= shortestLen) {
        shortestLen = len;
        shortestIdx = i;
      }
    }
    styleSheetLengths[shortestIdx] += contents.length;
    return $appendToStyleSheet(shortestIdx, contents, true);
  }
}

function $injectStyleSheetAtEnd(contents){
  var documentStyleCount;
  documentStyleCount = $doc.styleSheets.length;
  if (documentStyleCount == 0) {
    return $createNewStyleSheet(contents);
  }
  return $appendToStyleSheet(documentStyleCount - 1, contents, true);
}

function $injectStyleSheetAtStart(contents){
  if ($doc.styleSheets.length == 0) {
    return $createNewStyleSheet(contents);
  }
  return $appendToStyleSheet(0, contents, false);
}

var styleSheetLengths;
function $clinit_ChangeEvent(){
  $clinit_ChangeEvent = nullMethod;
  TYPE = new DomEvent$Type_0('change', new ChangeEvent_0);
}

function ChangeEvent_0(){
}

defineSeed(230, 231, {}, ChangeEvent_0);
_.dispatch_0 = function dispatch_0(handler){
  dynamicCast(handler, Q$ChangeHandler).onChange(this);
}
;
_.getAssociatedType_1 = function getAssociatedType_1(){
  return TYPE;
}
;
var TYPE;
defineSeed(242, 231, {});
defineSeed(241, 242, {});
function $clinit_KeyUpEvent(){
  $clinit_KeyUpEvent = nullMethod;
  TYPE_3 = new DomEvent$Type_0('keyup', new KeyUpEvent_0);
}

function KeyUpEvent_0(){
}

defineSeed(244, 241, {}, KeyUpEvent_0);
_.dispatch_0 = function dispatch_4(handler){
  dynamicCast(handler, Q$KeyUpHandler).onKeyUp(this);
}
;
_.getAssociatedType_1 = function getAssociatedType_5(){
  return TYPE_3;
}
;
var TYPE_3;
function $clinit_ScrollEvent(){
  $clinit_ScrollEvent = nullMethod;
  TYPE_4 = new DomEvent$Type_0('scroll', new ScrollEvent_0);
}

function ScrollEvent_0(){
}

defineSeed(247, 231, {}, ScrollEvent_0);
_.dispatch_0 = function dispatch_5(handler){
  dynamicCast(handler, Q$ScrollHandler).onScroll(this);
}
;
_.getAssociatedType_1 = function getAssociatedType_6(){
  return TYPE_4;
}
;
var TYPE_4;
defineSeed(249, 236, {});
var impl_0 = null;
function $clinit_TouchCancelEvent(){
  $clinit_TouchCancelEvent = nullMethod;
  TYPE_5 = new DomEvent$Type_0('touchcancel', new TouchCancelEvent_0);
}

function TouchCancelEvent_0(){
}

defineSeed(248, 249, {}, TouchCancelEvent_0);
_.dispatch_0 = function dispatch_6(handler){
  $onTouchEnd(dynamicCast(dynamicCast(handler, Q$TouchCancelHandler), Q$TouchScroller$5).this$0);
}
;
_.getAssociatedType_1 = function getAssociatedType_7(){
  return TYPE_5;
}
;
var TYPE_5;
function $clinit_TouchEndEvent(){
  $clinit_TouchEndEvent = nullMethod;
  TYPE_6 = new DomEvent$Type_0('touchend', new TouchEndEvent_0);
}

function TouchEndEvent_0(){
}

defineSeed(250, 249, {}, TouchEndEvent_0);
_.dispatch_0 = function dispatch_7(handler){
  $onTouchEnd(dynamicCast(dynamicCast(handler, Q$TouchEndHandler), Q$TouchScroller$4).this$0);
}
;
_.getAssociatedType_1 = function getAssociatedType_8(){
  return TYPE_6;
}
;
var TYPE_6;
function TouchEvent$TouchSupportDetector_0(){
  var elem;
  this.isSupported = (elem = document.createElement('div') , elem.setAttribute('ontouchstart', 'return;') , typeof elem.ontouchstart == 'function');
}

defineSeed(251, 1, {}, TouchEvent$TouchSupportDetector_0);
function $clinit_TouchMoveEvent(){
  $clinit_TouchMoveEvent = nullMethod;
  TYPE_7 = new DomEvent$Type_0('touchmove', new TouchMoveEvent_0);
}

function $dispatch_0(this$static, handler){
  $onTouchMove(handler.this$0, this$static);
}

function TouchMoveEvent_0(){
}

defineSeed(252, 249, {}, TouchMoveEvent_0);
_.dispatch_0 = function dispatch_8(handler){
  $dispatch_0(this, dynamicCast(handler, Q$TouchMoveHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_9(){
  return TYPE_7;
}
;
var TYPE_7;
function $clinit_TouchStartEvent(){
  $clinit_TouchStartEvent = nullMethod;
  TYPE_8 = new DomEvent$Type_0('touchstart', new TouchStartEvent_0);
}

function $dispatch_1(this$static, handler){
  $onTouchStart(handler.this$0, this$static);
}

function TouchStartEvent_0(){
}

defineSeed(253, 249, {}, TouchStartEvent_0);
_.dispatch_0 = function dispatch_9(handler){
  $dispatch_1(this, dynamicCast(handler, Q$TouchStartHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_10(){
  return TYPE_8;
}
;
var TYPE_8;
function $cancel_2(this$static){
  var xmlHttp;
  if (this$static.xmlHttpRequest) {
    xmlHttp = this$static.xmlHttpRequest;
    this$static.xmlHttpRequest = null;
    $clearOnReadyStateChange(xmlHttp);
    xmlHttp.abort();
    !!this$static.timer && $cancel_0(this$static.timer);
  }
}

function $fireOnResponseReceived(this$static, callback){
  var errorMsg, exception, response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  !!this$static.timer && $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  errorMsg = $getBrowserSpecificFailure(xhr);
  if (errorMsg != null) {
    exception = new RuntimeException_0(errorMsg);
    $onTransportFailure_0(callback.val$receiver, new ServerFailure_0(exception.getMessage()));
  }
   else {
    response = new Request$RequestImplIE6To9$1_0(xhr);
    $onResponseReceived(callback, response);
  }
}

function $fireOnTimeout(this$static, callback){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_2(this$static);
  $onError(callback, new RequestTimeoutException_0(this$static.timeoutMillis));
}

function $getBrowserSpecificFailure(xhr){
  try {
    if (xhr.status === undefined) {
      return 'XmlHttpRequest.status == undefined, please see Safari bug http://bugs.webkit.org/show_bug.cgi?id=3810 for more details';
    }
    return null;
  }
   catch (e) {
    return 'Unable to read XmlHttpRequest.status; likely causes are a networking error or bad cross-domain request. Please see https://bugzilla.mozilla.org/show_bug.cgi?id=238559 for more details';
  }
}

function Request_0(xmlHttpRequest, timeoutMillis, callback){
  if (!xmlHttpRequest) {
    throw new NullPointerException_0;
  }
  if (!callback) {
    throw new NullPointerException_0;
  }
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException_0;
  }
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  if (timeoutMillis > 0) {
    this.timer = new Request$1_0(this, callback);
    $schedule(this.timer, timeoutMillis);
  }
   else {
    this.timer = null;
  }
}

defineSeed(265, 1, {}, Request_0);
_.timeoutMillis = 0;
_.timer = null;
_.xmlHttpRequest = null;
function Request$1_0(this$0, val$callback){
  $clinit_Timer();
  this.this$0 = this$0;
  this.val$callback = val$callback;
}

defineSeed(266, 10, makeCastMap([Q$Timer]), Request$1_0);
_.run = function run_0(){
  $fireOnTimeout(this.this$0, this.val$callback);
}
;
_.this$0 = null;
_.val$callback = null;
defineSeed(269, 1, {});
defineSeed(268, 269, {});
_.xmlHttpRequest = null;
function $getStatusCode(this$static){
  var statusCode;
  statusCode = this$static.xmlHttpRequest.status;
  return statusCode == 1223?204:statusCode;
}

function Request$RequestImplIE6To9$1_0($anonymous0){
  this.xmlHttpRequest = $anonymous0;
}

defineSeed(267, 268, {}, Request$RequestImplIE6To9$1_0);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = nullMethod;
  new RequestBuilder$Method_0('DELETE');
  new RequestBuilder$Method_0('GET');
  new RequestBuilder$Method_0('HEAD');
  POST = new RequestBuilder$Method_0('POST');
  new RequestBuilder$Method_0('PUT');
}

function $doSend(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = create_3();
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$JavaScriptException)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException_0(this$static.url);
      $initCause(requestPermissionException, new RequestException_0((e.message_0 == null && $init_0(e) , e.message_0)));
      throw requestPermissionException;
    }
     else 
      throw $e0;
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request_0(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1_0(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$JavaScriptException)) {
      e = $e0;
      throw new RequestException_0((e.message_0 == null && $init_0(e) , e.message_0));
    }
     else 
      throw $e0;
  }
  return request;
}

function $setCallback(this$static, callback){
  throwIfNull('callback', callback);
  this$static.callback = callback;
}

function $setHeader(this$static, header, value){
  throwIfEmptyOrNull('header', header);
  throwIfEmptyOrNull('value', value);
  !this$static.headers && (this$static.headers = new HashMap_0);
  this$static.headers.put(header, value);
}

function $setHeaders(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.headers && this$static.headers.size_1() > 0) {
    for (header$iterator = this$static.headers.entrySet_0().iterator(); header$iterator.hasNext();) {
      header = dynamicCast(header$iterator.next_0(), Q$Map$Entry);
      try {
        $setRequestHeader(xmlHttpRequest, dynamicCast(header.getKey(), Q$String), dynamicCast(header.getValue_0(), Q$String));
      }
       catch ($e0) {
        $e0 = caught_0($e0);
        if (instanceOf($e0, Q$JavaScriptException)) {
          e = $e0;
          throw new RequestException_0((e.message_0 == null && $init_0(e) , e.message_0));
        }
         else 
          throw $e0;
      }
    }
  }
   else {
    xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  }
}

function RequestBuilder_0(httpMethod, url){
  $clinit_RequestBuilder();
  RequestBuilder_1.call(this, !httpMethod?null:httpMethod.name_0, url);
}

function RequestBuilder_1(httpMethod, url){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url);
  this.httpMethod = httpMethod;
  this.url = url;
}

defineSeed(270, 1, {}, RequestBuilder_0);
_.callback = null;
_.headers = null;
_.httpMethod = null;
_.includeCredentials = false;
_.requestData = null;
_.timeoutMillis = 0;
_.url = null;
var POST;
function RequestBuilder$1_0(val$request, val$callback){
  this.val$request = val$request;
  this.val$callback = val$callback;
}

defineSeed(271, 1, {}, RequestBuilder$1_0);
_.onReadyStateChange = function onReadyStateChange_0(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request, this.val$callback);
  }
}
;
_.val$callback = null;
_.val$request = null;
function RequestBuilder$Method_0(name_0){
  this.name_0 = name_0;
}

defineSeed(272, 1, {}, RequestBuilder$Method_0);
_.toString$ = function toString_5(){
  return this.name_0;
}
;
_.name_0 = null;
function RequestException_0(message){
  Exception_0.call(this, message);
}

defineSeed(273, 98, makeCastMap([Q$RequestException, Q$Serializable, Q$Throwable]), RequestException_0);
function RequestPermissionException_0(url){
  $fillInStackTrace();
  this.detailMessage = 'The URL ' + url + ' is invalid or violates the same-origin security restriction';
}

defineSeed(274, 273, makeCastMap([Q$RequestException, Q$Serializable, Q$Throwable]), RequestPermissionException_0);
function RequestTimeoutException_0(timeoutMillis){
  $fillInStackTrace();
  this.detailMessage = 'A request timeout has expired after ' + timeoutMillis + ' ms';
}

defineSeed(275, 273, makeCastMap([Q$RequestException, Q$Serializable, Q$Throwable]), RequestTimeoutException_0);
function throwIfEmptyOrNull(name_0, value){
  throwIfNull(name_0, value);
  if (0 == $trim(value).length) {
    throw new IllegalArgumentException_1(name_0 + ' cannot be empty');
  }
}

function AutoDirectionHandler_0(){
}

defineSeed(278, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), AutoDirectionHandler_0);
_.onKeyUp = function onKeyUp(event_0){
}
;
function dynamicCastAllowJso(src, dstId){
  if (src != null && !(src.typeMarker$ != nullMethod && !canCast(src, 1)) && !canCastUnsafe(src, dstId)) {
    throw new ClassCastException_0;
  }
  return src;
}

function instanceOfOrJso(src, dstId){
  return src != null && (src.typeMarker$ != nullMethod && !canCast(src, 1) || canCast(src, dstId));
}

function round_byte(x){
  return round_int(x) << 24 >> 24;
}

function round_short(x){
  return round_int(x) << 16 >> 16;
}

function create_0(value){
  var a0, a1, a2;
  a0 = value & 4194303;
  a1 = value >> 22 & 4194303;
  a2 = value < 0?1048575:0;
  return create0(a0, a1, a2);
}

function create_1(a){
  return create0(a.l, a.m, a.h);
}

function create0(l_0, m_0, h_0){
  return _ = new LongLibBase$LongEmul_0 , _.l = l_0 , _.m = m_0 , _.h = h_0 , _;
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw new ArithmeticException_0;
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == 524288 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == 524288 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_1(($clinit_LongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (!gte_0(a, b)) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == 524288 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_1(($clinit_LongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift, a1, a2, a0;
  shift = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift);
  quotient = create0(0, 0, 0);
  while (shift >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift < 22?(quotient.l |= 1 << shift , undefined):shift < 44?(quotient.m |= 1 << shift - 22 , undefined):(quotient.h |= 1 << shift - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    bshift.h = a2 >>> 1;
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub(remainder, ($clinit_LongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & 4194303;
  neg1 = ~a.m + (neg0 == 0?1:0) & 4194303;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & 1048575;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h_0, l_0, m_0;
  l_0 = a.l;
  if ((l_0 & l_0 - 1) != 0) {
    return -1;
  }
  m_0 = a.m;
  if ((m_0 & m_0 - 1) != 0) {
    return -1;
  }
  h_0 = a.h;
  if ((h_0 & h_0 - 1) != 0) {
    return -1;
  }
  if (h_0 == 0 && m_0 == 0 && l_0 == 0) {
    return -1;
  }
  if (h_0 == 0 && m_0 == 0 && l_0 != 0) {
    return numberOfTrailingZeros(l_0);
  }
  if (h_0 == 0 && m_0 != 0 && l_0 == 0) {
    return numberOfTrailingZeros(m_0) + 22;
  }
  if (h_0 != 0 && m_0 == 0 && l_0 == 0) {
    return numberOfTrailingZeros(h_0) + 44;
  }
  return -1;
}

function toDoubleHelper(a){
  return a.l + a.m * 4194304 + a.h * 17592186044416;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  a.l = sum0 & 4194303;
  a.m = sum1 & 4194303;
  a.h = sum2 & 1048575;
  return true;
}

var remainder = null;
function add_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return create0(sum0 & 4194303, sum1 & 4194303, sum2 & 1048575);
}

function and(a, b){
  return create0(a.l & b.l, a.m & b.m, a.h & b.h);
}

function div_0(a, b){
  return divMod(a, b, false);
}

function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromDouble(value){
  var a0, a1, a2, negative, result;
  if (isNaN_0(value)) {
    return $clinit_LongLib$Const() , ZERO;
  }
  if (value < -9223372036854775808) {
    return $clinit_LongLib$Const() , MIN_VALUE;
  }
  if (value >= 9223372036854775807) {
    return $clinit_LongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value < 0) {
    negative = true;
    value = -value;
  }
  a2 = 0;
  if (value >= 17592186044416) {
    a2 = round_int(value / 17592186044416);
    value -= a2 * 17592186044416;
  }
  a1 = 0;
  if (value >= 4194304) {
    a1 = round_int(value / 4194304);
    value -= a1 * 4194304;
  }
  a0 = round_int(value);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function fromInt(value){
  var rebase, result;
  if (value > -129 && value < 128) {
    rebase = value + 128;
    boxedValues == null && (boxedValues = initDim(_3Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$LongLibBase$LongEmul, 256, 0));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create_0(value));
    return result;
  }
  return create_0(value);
}

function gt(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l > b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l <= b.l);
}

function gte_0(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function lt(a, b){
  return !gte_0(a, b);
}

function lte(a, b){
  return !gt(a, b);
}

function mod(a, b){
  divMod(a, b, true);
  return remainder;
}

function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & 4194303;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= 4194303;
  c2 += c1 >> 22;
  c1 &= 4194303;
  c2 &= 1048575;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & 4194303;
  neg1 = ~a.m + (neg0 == 0?1:0) & 4194303;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & 1048575;
  return create0(neg0, neg1, neg2);
}

function neq(a, b){
  return a.l != b.l || a.m != b.m || a.h != b.h;
}

function or(a, b){
  return create0(a.l | b.l, a.m | b.m, a.h | b.h);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return create0(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & 524288) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?1048575:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?1048575:0;
    res1 = negative?4194303:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & 1048575;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return create0(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}

function sub(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & 4194303, sum1 & 4194303, sum2 & 1048575);
}

function toDouble(a){
  if (eq(a, ($clinit_LongLib$Const() , MIN_VALUE))) {
    return -9223372036854775808;
  }
  if (!gte_0(a, ZERO)) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * 4194304 + a.h * 17592186044416;
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_6(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == 524288 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_6(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = fromInt(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; --zeroesNeeded) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return create0(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
}

var boxedValues = null;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = nullMethod;
  MAX_VALUE = create0(4194303, 4194303, 524287);
  MIN_VALUE = create0(0, 0, 524288);
  ONE = fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function LongLibBase$LongEmul_0(){
}

defineSeed(290, 1, makeCastMap([Q$LongLibBase$LongEmul]), LongLibBase$LongEmul_0);
function $setBottomHeight(this$static, bottomUnit, height, heightUnit){
  this$static.setTargetBottom = this$static.setTargetHeight = true;
  this$static.setTargetTop = false;
  this$static.targetBottom = 0;
  this$static.targetHeight = height;
  this$static.targetBottomUnit = bottomUnit;
  this$static.targetHeightUnit = heightUnit;
}

function $setLeftRight(this$static, left, leftUnit, right, rightUnit){
  this$static.setTargetLeft = this$static.setTargetRight = true;
  this$static.setTargetWidth = false;
  this$static.targetLeft = left;
  this$static.targetRight = right;
  this$static.targetLeftUnit = leftUnit;
  this$static.targetRightUnit = rightUnit;
}

function $setLeftWidth(this$static, leftUnit, width, widthUnit){
  this$static.setTargetLeft = this$static.setTargetWidth = true;
  this$static.setTargetRight = false;
  this$static.targetLeft = 0;
  this$static.targetWidth = width;
  this$static.targetLeftUnit = leftUnit;
  this$static.targetWidthUnit = widthUnit;
}

function $setRightWidth(this$static, rightUnit, width, widthUnit){
  this$static.setTargetRight = this$static.setTargetWidth = true;
  this$static.setTargetLeft = false;
  this$static.targetRight = 0;
  this$static.targetWidth = width;
  this$static.targetRightUnit = rightUnit;
  this$static.targetWidthUnit = widthUnit;
}

function $setTopBottom(this$static, topUnit, bottom, bottomUnit){
  this$static.setTargetTop = this$static.setTargetBottom = true;
  this$static.setTargetHeight = false;
  this$static.targetTop = 0;
  this$static.targetBottom = bottom;
  this$static.targetTopUnit = topUnit;
  this$static.targetBottomUnit = bottomUnit;
}

function $setVisible(this$static, visible){
  this$static.visible = visible;
}

function $exec(this$static, input){
  return this$static.exec(input);
}

function $test(this$static, input){
  return this$static.test(input);
}

function getInlineBlockStyle(){
  var style;
  style = (!instance_1 && (instance_1 = new CommonResources_Bundle_ie6_default_StaticClientBundleGenerator_0) , $clinit_CommonResources_Bundle_ie6_default_StaticClientBundleGenerator$inlineBlockStyleInitializer() , inlineBlockStyle);
  $ensureInjected(style);
  return 'GPBYFDEH';
}

var instance_1 = null;
function CommonResources_Bundle_ie6_default_StaticClientBundleGenerator_0(){
}

defineSeed(305, 1, {}, CommonResources_Bundle_ie6_default_StaticClientBundleGenerator_0);
var inlineBlockStyle = null;
function $ensureInjected(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.GPBYFDEH{position:relative;display:inline-block;zoom:1;display:inline;}');
    schedule();
    return true;
  }
  return false;
}

function CommonResources_Bundle_ie6_default_StaticClientBundleGenerator$1_0(){
}

defineSeed(306, 1, {}, CommonResources_Bundle_ie6_default_StaticClientBundleGenerator$1_0);
_.injected = false;
function $clinit_CommonResources_Bundle_ie6_default_StaticClientBundleGenerator$inlineBlockStyleInitializer(){
  $clinit_CommonResources_Bundle_ie6_default_StaticClientBundleGenerator$inlineBlockStyleInitializer = nullMethod;
  inlineBlockStyle = new CommonResources_Bundle_ie6_default_StaticClientBundleGenerator$1_0;
}

function $append_4(this$static, html){
  $append_10(this$static.sb, html.asString());
  return this$static;
}

function SafeHtmlBuilder_0(){
  this.sb = new StringBuilder_0;
}

defineSeed(313, 1, {}, SafeHtmlBuilder_0);
function DoubleParser_0(){
}

defineSeed(318, 1, {}, DoubleParser_0);
var INSTANCE_1 = null;
defineSeed(320, 1, {});
function DoubleRenderer_0(){
}

defineSeed(319, 320, {}, DoubleRenderer_0);
var INSTANCE_2 = null;
function $render_2(object){
  return object == null?($clinit_SafeHtmlUtils() , EMPTY_SAFE_HTML):($clinit_SafeHtmlUtils() , new SafeHtmlString_0(htmlEscape(object)));
}

function SimpleSafeHtmlRenderer_0(){
}

defineSeed(321, 1, {}, SimpleSafeHtmlRenderer_0);
var instance_2 = null;
function PassthroughParser_0(){
}

defineSeed(322, 1, {}, PassthroughParser_0);
var INSTANCE_3 = null;
function PassthroughRenderer_0(){
}

defineSeed(323, 320, {}, PassthroughRenderer_0);
var INSTANCE_4 = null;
function $calcNewVelocity(initialVelocity, decelFactor, oldVelocity, minDecel){
  var maxVelocityX, minVelocityX, newVelocity;
  newVelocity = initialVelocity * decelFactor;
  if (oldVelocity >= 0) {
    maxVelocityX = 0 > oldVelocity - minDecel?0:oldVelocity - minDecel;
    newVelocity = newVelocity < maxVelocityX?newVelocity:maxVelocityX;
  }
   else {
    minVelocityX = 0 < oldVelocity + minDecel?0:oldVelocity + minDecel;
    newVelocity = newVelocity > minVelocityX?newVelocity:minVelocityX;
  }
  return newVelocity;
}

function $updateState(state){
  var decelFactor, dist, elapsedMillis, ellapsedMillis, initialVelocity, minDecel, newVelocity, newVelocityX, newVelocityY, oldVelocity, position, totalEllapsedMillis;
  ellapsedMillis = state.elapsedMillis;
  totalEllapsedMillis = state.cumulativeElapsedMillis;
  initialVelocity = state.initialVelocity;
  oldVelocity = state.velocity;
  decelFactor = Math.pow(0.9993, totalEllapsedMillis);
  minDecel = ellapsedMillis * 5.0E-4;
  newVelocityX = $calcNewVelocity(initialVelocity.x, decelFactor, oldVelocity.x, minDecel);
  newVelocityY = $calcNewVelocity(initialVelocity.y, decelFactor, oldVelocity.y, minDecel);
  newVelocity = new Point_0(newVelocityX, newVelocityY);
  state.velocity = newVelocity;
  elapsedMillis = state.elapsedMillis;
  dist = $mult(newVelocity, new Point_0(elapsedMillis, elapsedMillis));
  position = state.position_0;
  $setPosition(state, new Point_0(position.x + dist.x, position.y + dist.y));
  if (abs(newVelocity.x) < 0.02 && abs(newVelocity.y) < 0.02) {
    return false;
  }
  return true;
}

function DefaultMomentum_0(){
}

defineSeed(324, 1, {}, DefaultMomentum_0);
function $setCumulativeElapsedMillis(this$static, cumulativeElapsedMillis){
  this$static.cumulativeElapsedMillis = cumulativeElapsedMillis;
}

function $setElapsedMillis(this$static, elapsedMillis){
  this$static.elapsedMillis = elapsedMillis;
}

function $setPosition(this$static, position){
  this$static.position_0 = position;
}

function Momentum$State_0(initialPosition, initialVelocity){
  this.initialVelocity = initialVelocity;
  this.position_0 = new Point_1(initialPosition);
  this.velocity = new Point_1(initialVelocity);
}

defineSeed(325, 1, {}, Momentum$State_0);
_.cumulativeElapsedMillis = 0;
_.elapsedMillis = 0;
_.initialVelocity = null;
_.position_0 = null;
_.velocity = null;
function $minus(this$static, c){
  return new Point_0(this$static.x - c.x, this$static.y - c.y);
}

function $mult(this$static, c){
  return new Point_0(this$static.x * c.x, this$static.y * c.y);
}

function $plus(this$static, c){
  return new Point_0(this$static.x + c.x, this$static.y + c.y);
}

function Point_0(x, y){
  this.x = x;
  this.y = y;
}

function Point_1(c){
  Point_0.call(this, c.x, c.y);
}

defineSeed(326, 1, makeCastMap([Q$Point]), Point_0, Point_1);
_.equals$ = function equals_6(obj){
  var c;
  if (!instanceOf(obj, Q$Point)) {
    return false;
  }
  c = dynamicCast(obj, Q$Point);
  return this.x == c.x && this.y == c.y;
}
;
_.hashCode$ = function hashCode_8(){
  return round_int(this.x) ^ round_int(this.y);
}
;
_.toString$ = function toString_7(){
  return 'Point(' + this.x + ',' + this.y + ')';
}
;
_.x = 0;
_.y = 0;
function $calculateEndVelocity(from, to){
  var dist, time;
  time = to.time - from.time;
  if (time <= 0) {
    return null;
  }
  dist = $minus(from.point, to.point);
  return new Point_0(dist.x / time, dist.y / time);
}

function $cancelAll(this$static){
  this$static.touching = false;
  this$static.dragging = false;
  this$static.momentumCommand = null;
}

function $getTouchFromEvent(event_0){
  var touches;
  touches = event_0.nativeEvent.touches;
  return touches.length > 0?touches[0]:null;
}

function $getWidgetScrollPosition(this$static){
  return new Point_0($getScrollLeft(this$static.widget.scrollableElem), this$static.widget.scrollableElem.scrollTop || 0);
}

function $hitTest(point1, point2){
  var absDiffX, absDiffY, diff;
  diff = new Point_0(point1.x - point2.x, point1.y - point2.y);
  absDiffX = abs(diff.x);
  absDiffY = abs(diff.y);
  return absDiffX <= 25 && absDiffY <= 25;
}

function $isClickScrollTriggeringTouch(this$static, clickPoint){
  if (this$static.recentScrollTriggeringTouchPosition.point) {
    return $hitTest(clickPoint, this$static.recentScrollTriggeringTouchPosition.point);
  }
  return false;
}

function $isClickTouchPositionDuringMomentum(this$static, clickPoint){
  var currentTime, point, point$iterator, same;
  currentTime = currentTimeMillis();
  same = false;
  for (point$iterator = new AbstractList$IteratorImpl_0(this$static.touchPositionsDuringMomentum); point$iterator.i < point$iterator.this$0_0.size_1();) {
    point = dynamicCast($next_4(point$iterator), Q$TouchScroller$TemporalPoint);
    if (currentTime - point.time <= 2500 && $hitTest(clickPoint, point.point)) {
      same = true;
      break;
    }
  }
  return same;
}

function $onDragEnd(this$static){
  var endVelocity;
  if (!this$static.momentum) {
    return;
  }
  endVelocity = $calculateEndVelocity(this$static.recentTouchPosition, this$static.lastTouchPosition);
  if (endVelocity) {
    this$static.momentumCommand = new TouchScroller$MomentumCommand_0(this$static, endVelocity);
    scheduleFixedDelayImpl(($clinit_SchedulerImpl() , this$static.momentumCommand), 16);
  }
}

function $onTouchEnd(this$static){
  if (!this$static.touching) {
    return;
  }
  this$static.touching = false;
  if (this$static.dragging) {
    this$static.dragging = false;
    $onDragEnd(this$static);
  }
}

function $onTouchMove(this$static, event_0){
  var absDiffX, absDiffY, diff, hMax, hMin, hPosition, touch, touchPoint, touchTime, trackingTime, vMax, vPosition, diff_0, curScrollPosition;
  if (!this$static.touching) {
    return;
  }
  touch = $getTouchFromEvent(event_0);
  touchPoint = new Point_0(touch.pageX, touch.pageY);
  touchTime = currentTimeMillis();
  $setTemporalPoint(this$static.lastTouchPosition, touchPoint, touchTime);
  if (!this$static.dragging) {
    diff = $minus(touchPoint, this$static.startTouchPosition);
    absDiffX = abs(diff.x);
    absDiffY = abs(diff.y);
    if (absDiffX > 5 || absDiffY > 5) {
      $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, this$static.recentTouchPosition.point, this$static.recentTouchPosition.time);
      if (absDiffX > absDiffY) {
        hPosition = $getScrollLeft(this$static.widget.scrollableElem);
        hMin = $getMinimumHorizontalScrollPosition(this$static.widget);
        hMax = $getMaximumHorizontalScrollPosition(this$static.widget);
        if (diff.x < 0 && hMax <= hPosition) {
          $cancelAll(this$static);
          return;
        }
         else if (diff.x > 0 && hMin >= hPosition) {
          $cancelAll(this$static);
          return;
        }
      }
       else {
        vPosition = this$static.widget.scrollableElem.scrollTop || 0;
        vMax = $getMaximumVerticalScrollPosition(this$static.widget);
        if (diff.y < 0 && vMax <= vPosition) {
          $cancelAll(this$static);
          return;
        }
         else if (diff.y > 0 && 0 >= vPosition) {
          $cancelAll(this$static);
          return;
        }
      }
      this$static.dragging = true;
    }
  }
  $eventPreventDefault(event_0.nativeEvent);
  if (this$static.dragging) {
    diff_0 = $minus(this$static.startTouchPosition, this$static.lastTouchPosition.point);
    curScrollPosition = $plus(this$static.startScrollPosition, diff_0);
    $setHorizontalScrollPosition(this$static.widget, round_int(curScrollPosition.x));
    $setVerticalScrollPosition(this$static.widget, round_int(curScrollPosition.y));
    trackingTime = touchTime - this$static.recentTouchPosition.time;
    if (trackingTime > 200 && !!this$static.recentTouchPositionOnDeck) {
      $setTemporalPoint(this$static.recentTouchPosition, this$static.recentTouchPositionOnDeck.point, this$static.recentTouchPositionOnDeck.time);
      this$static.recentTouchPositionOnDeck = null;
    }
     else 
      trackingTime > 100 && !this$static.recentTouchPositionOnDeck && (this$static.recentTouchPositionOnDeck = new TouchScroller$TemporalPoint_1(touchPoint, touchTime));
  }
}

function $onTouchStart(this$static, event_0){
  var startTouchTime, touch;
  $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, null, 0);
  if (this$static.touching) {
    return;
  }
  touch = $getTouchFromEvent(event_0);
  this$static.startTouchPosition = new Point_0(touch.pageX, touch.pageY);
  startTouchTime = currentTimeMillis();
  $setTemporalPoint(this$static.recentTouchPosition, this$static.startTouchPosition, startTouchTime);
  $setTemporalPoint(this$static.lastTouchPosition, this$static.startTouchPosition, startTouchTime);
  this$static.recentTouchPositionOnDeck = null;
  if (this$static.momentumCommand) {
    $add_19(this$static.touchPositionsDuringMomentum, new TouchScroller$TemporalPoint_1(this$static.startTouchPosition, startTouchTime));
    scheduleFixedDelayImpl(($clinit_SchedulerImpl() , this$static.momentumTouchRemovalCommand), 2500);
  }
  this$static.startScrollPosition = new Point_0($getScrollLeft(this$static.widget.scrollableElem), this$static.widget.scrollableElem.scrollTop || 0);
  $cancelAll(this$static);
  this$static.touching = true;
}

function $removeAttachHandler(this$static){
  if (this$static.attachHandlerReg) {
    $removeHandler(this$static.attachHandlerReg.real);
    this$static.attachHandlerReg = null;
  }
}

function $removeBustClickHandler(this$static){
  if (this$static.bustClickHandlerReg) {
    $removeHandler(this$static.bustClickHandlerReg.real);
    this$static.bustClickHandlerReg = null;
  }
}

function $setMomentum(this$static, momentum){
  this$static.momentum = momentum;
  !momentum && (this$static.momentumCommand = null);
}

function $setTargetWidget(this$static, widget){
  var reg, reg$iterator;
  if (this$static.widget == widget) {
    return;
  }
  $cancelAll(this$static);
  for (reg$iterator = new AbstractList$IteratorImpl_0(this$static.handlerRegs); reg$iterator.i < reg$iterator.this$0_0.size_1();) {
    reg = dynamicCast($next_4(reg$iterator), Q$HandlerRegistration);
    $removeHandler(reg.real);
  }
  $clear_5(this$static.handlerRegs);
  $removeAttachHandler(this$static);
  $removeBustClickHandler(this$static);
  this$static.widget = widget;
  if (widget) {
    widget.attached && ($removeBustClickHandler(this$static) , this$static.bustClickHandlerReg = addNativePreviewHandler(new TouchScroller$6_0(this$static)));
    this$static.attachHandlerReg = $addHandler_0(widget, new TouchScroller$1_0(this$static), (!TYPE_9 && (TYPE_9 = new GwtEvent$Type_0) , TYPE_9));
    $add_19(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$2_0(this$static), ($clinit_TouchStartEvent() , $clinit_TouchStartEvent() , TYPE_8)));
    $add_19(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$3_0(this$static), ($clinit_TouchMoveEvent() , $clinit_TouchMoveEvent() , TYPE_7)));
    $add_19(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$4_0(this$static), ($clinit_TouchEndEvent() , $clinit_TouchEndEvent() , TYPE_6)));
    $add_19(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$5_0(this$static), ($clinit_TouchCancelEvent() , $clinit_TouchCancelEvent() , TYPE_5)));
  }
}

function $setWidgetScrollPosition(this$static, position){
  $setHorizontalScrollPosition(this$static.widget, round_int(position.x));
  $setVerticalScrollPosition(this$static.widget, round_int(position.y));
}

function $setupBustClickHandler(this$static){
  $removeBustClickHandler(this$static);
  this$static.bustClickHandlerReg = addNativePreviewHandler(new TouchScroller$6_0(this$static));
}

function TouchScroller_0(){
  this.handlerRegs = new ArrayList_0;
  this.lastTouchPosition = new TouchScroller$TemporalPoint_0;
  this.recentTouchPosition = new TouchScroller$TemporalPoint_0;
  this.recentScrollTriggeringTouchPosition = new TouchScroller$TemporalPoint_0;
  this.touchPositionsDuringMomentum = new ArrayList_0;
  this.momentumTouchRemovalCommand = new TouchScroller$MomentumTouchRemovalCommand_0(this);
  $setMomentum(this, new DefaultMomentum_0);
}

defineSeed(327, 1, {}, TouchScroller_0);
_.attachHandlerReg = null;
_.bustClickHandlerReg = null;
_.dragging = false;
_.momentum = null;
_.momentumCommand = null;
_.recentTouchPositionOnDeck = null;
_.startScrollPosition = null;
_.startTouchPosition = null;
_.touching = false;
_.widget = null;
var isSupported = null;
function TouchScroller$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(328, 1, makeCastMap([Q$AttachEvent$Handler, Q$EventHandler]), TouchScroller$1_0);
_.onAttachOrDetach = function onAttachOrDetach(event_0){
  event_0.attached?$setupBustClickHandler(this.this$0):$removeBustClickHandler(this.this$0);
}
;
_.this$0 = null;
function TouchScroller$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(329, 1, makeCastMap([Q$TouchStartHandler, Q$EventHandler]), TouchScroller$2_0);
_.this$0 = null;
function TouchScroller$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(330, 1, makeCastMap([Q$TouchMoveHandler, Q$EventHandler]), TouchScroller$3_0);
_.this$0 = null;
function TouchScroller$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(331, 1, makeCastMap([Q$TouchEndHandler, Q$EventHandler, Q$TouchScroller$4]), TouchScroller$4_0);
_.this$0 = null;
function TouchScroller$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(332, 1, makeCastMap([Q$TouchCancelHandler, Q$EventHandler, Q$TouchScroller$5]), TouchScroller$5_0);
_.this$0 = null;
function TouchScroller$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(333, 1, makeCastMap([Q$EventHandler, Q$Event$NativePreviewHandler]), TouchScroller$6_0);
_.onPreviewNativeEvent = function onPreviewNativeEvent(event_0){
  var clickPoint;
  if (1 == $eventGetTypeInt(event_0.nativeEvent.type)) {
    clickPoint = new Point_0(event_0.nativeEvent.clientX || 0, event_0.nativeEvent.clientY || 0);
    if ($isClickScrollTriggeringTouch(this.this$0, clickPoint) || $isClickTouchPositionDuringMomentum(this.this$0, clickPoint)) {
      event_0.isCanceled = true;
      event_0.nativeEvent.cancelBubble = true;
      $eventPreventDefault(event_0.nativeEvent);
    }
  }
}
;
_.this$0 = null;
function $finish(this$static){
  if (this$static.windowResizeHandler) {
    $removeHandler(this$static.windowResizeHandler.real);
    this$static.windowResizeHandler = null;
  }
  this$static == this$static.this$0.momentumCommand && (this$static.this$0.momentumCommand = null);
}

function TouchScroller$MomentumCommand_0(this$0, endVelocity){
  this.this$0 = this$0;
  this.duration = new Duration_0;
  this.initialPosition = $getWidgetScrollPosition(this.this$0);
  this.state = new Momentum$State_0(this.initialPosition, endVelocity);
  this.windowResizeHandler = addResizeHandler(new TouchScroller$MomentumCommand$1_0(this));
}

defineSeed(334, 1, {}, TouchScroller$MomentumCommand_0);
_.execute = function execute_3(){
  var cumulativeElapsedMillis, hMax, hMin, hPos, notDone, vMax, vPos;
  if (this != this.this$0.momentumCommand) {
    $finish(this);
    return false;
  }
  cumulativeElapsedMillis = $elapsedMillis(this.duration);
  $setElapsedMillis(this.state, cumulativeElapsedMillis - this.lastElapsedMillis);
  this.lastElapsedMillis = cumulativeElapsedMillis;
  $setCumulativeElapsedMillis(this.state, cumulativeElapsedMillis);
  notDone = $updateState(this.state);
  notDone || $finish(this);
  $setWidgetScrollPosition(this.this$0, this.state.position_0);
  hPos = round_int(this.state.position_0.x);
  hMin = $getMinimumHorizontalScrollPosition(this.this$0.widget);
  hMax = $getMaximumHorizontalScrollPosition(this.this$0.widget);
  vMax = $getMaximumVerticalScrollPosition(this.this$0.widget);
  vPos = round_int(this.state.position_0.y);
  if ((vMax <= vPos || 0 >= vPos) && (hMax <= hPos || hMin >= hPos)) {
    $finish(this);
    return false;
  }
  return notDone;
}
;
_.lastElapsedMillis = 0;
_.state = null;
_.this$0 = null;
_.windowResizeHandler = null;
function TouchScroller$MomentumCommand$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(335, 1, makeCastMap([Q$ResizeHandler, Q$EventHandler]), TouchScroller$MomentumCommand$1_0);
_.onResize = function onResize_0(event_0){
  $finish(this.this$1);
}
;
_.this$1 = null;
function TouchScroller$MomentumTouchRemovalCommand_0(this$0){
  this.this$0 = this$0;
}

defineSeed(336, 1, {}, TouchScroller$MomentumTouchRemovalCommand_0);
_.execute = function execute_4(){
  var currentTime, iter, point;
  currentTime = currentTimeMillis();
  iter = new AbstractList$IteratorImpl_0(this.this$0.touchPositionsDuringMomentum);
  while (iter.i < iter.this$0_0.size_1()) {
    point = dynamicCast($next_4(iter), Q$TouchScroller$TemporalPoint);
    currentTime - point.time >= 2500 && $remove_17(iter);
  }
  return this.this$0.touchPositionsDuringMomentum.size_0 != 0;
}
;
_.this$0 = null;
function $setTemporalPoint(this$static, point, time){
  this$static.point = point;
  this$static.time = time;
}

function TouchScroller$TemporalPoint_0(){
}

function TouchScroller$TemporalPoint_1(point, time){
  this.point = point;
  this.time = time;
}

defineSeed(337, 1, makeCastMap([Q$TouchScroller$TemporalPoint]), TouchScroller$TemporalPoint_0, TouchScroller$TemporalPoint_1);
_.point = null;
_.time = 0;
function $get_1(this$static){
  if (!this$static.element) {
    this$static.element = $getElementById($doc, this$static.domId);
    if (!this$static.element) {
      throw new RuntimeException_0('Cannot find element with id "' + this$static.domId + '". Perhaps it is not attached to the document body.');
    }
    this$static.element.removeAttribute('id');
  }
  return this$static.element;
}

function LazyDomElement_0(domId){
  this.domId = domId;
}

defineSeed(338, 1, {}, LazyDomElement_0);
_.domId = null;
_.element = null;
function attachToDom(element){
  var origParent, origSibling;
  ensureHiddenDiv();
  origParent = $getParentElement(element);
  origSibling = $getNextSiblingElement(element);
  $appendChild(hiddenDiv, element);
  return new UiBinderUtil$TempAttachment_0(origParent, origSibling, element);
}

function ensureHiddenDiv(){
  if (!hiddenDiv) {
    hiddenDiv = $createElement($doc, 'div');
    setVisible(hiddenDiv, false);
    $appendChild(getBodyElement(), hiddenDiv);
  }
}

function fromHtml(html){
  var newbie;
  ensureHiddenDiv();
  $setInnerHTML(hiddenDiv, html);
  newbie = $getFirstChildElement(hiddenDiv);
  $removeChild(newbie.parentNode, newbie);
  return newbie;
}

function orphan(node){
  $removeChild(node.parentNode, node);
}

var hiddenDiv = null;
function UiBinderUtil$TempAttachment_0(origParent, origSibling, element){
  this.origParent = origParent;
  this.origSibling = origSibling;
  this.element = element;
}

defineSeed(340, 1, {}, UiBinderUtil$TempAttachment_0);
_.element = null;
_.origParent = null;
_.origSibling = null;
function $resolvePotentialElement(){
  throw new UnsupportedOperationException_0;
}

function $setHeight(this$static, height){
  setStyleAttribute(this$static.element, 'height', height);
}

function $setSize(this$static, width, height){
  $setWidth_1(this$static, width);
  $setHeight_0(this$static, height);
}

function $setStyleName(this$static, style){
  this$static.getStyleElement()['className'] = style;
}

function $setStyleName_0(this$static, style, add){
  setStyleName(this$static.element, style, add);
}

function $setWidth(this$static, width){
  setStyleAttribute(this$static.element, 'width', width);
}

function getStylePrimaryName(elem){
  var fullClassName, spaceIdx;
  fullClassName = $getPropertyString(elem, 'className');
  spaceIdx = $indexOf_2(fullClassName, fromCodePoint(32));
  if (spaceIdx >= 0) {
    return fullClassName.substr(0, spaceIdx - 0);
  }
  return fullClassName;
}

function setStylePrimaryName(elem, style){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_1('Style names cannot be empty');
  }
  updatePrimaryAndDependentStyleNames(elem, style);
}

function updatePrimaryAndDependentStyleNames(elem, newPrimaryStyle){
  var classes = elem.className.split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i = 1, n = classes.length; i < n; i++) {
    var name_0 = classes[i];
    name_0.length > oldPrimaryStyleLen && name_0.charAt(oldPrimaryStyleLen) == '-' && name_0.indexOf(oldPrimaryStyle) == 0 && (classes[i] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen));
  }
  elem.className = classes.join(' ');
}

defineSeed(345, 1, makeCastMap([Q$HasVisibility, Q$UIObject]));
_.getOffsetHeight = function getOffsetHeight(){
  return $getPropertyInt(this.element, 'offsetHeight');
}
;
_.getOffsetWidth = function getOffsetWidth(){
  return $getPropertyInt(this.element, 'offsetWidth');
}
;
_.getStyleElement = function getStyleElement(){
  return this.element;
}
;
_.resolvePotentialElement = function resolvePotentialElement(){
  return $resolvePotentialElement();
}
;
_.setHeight_0 = function setHeight(height){
  $setHeight(this, height);
}
;
_.setWidth_0 = function setWidth(width){
  $setWidth(this, width);
}
;
defineSeed(344, 345, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.asWidget = function asWidget(){
  return this;
}
;
function $initWidget(this$static, widget){
  var elem;
  if (this$static.widget) {
    throw new IllegalStateException_1('Composite.initWidget() may only be called once.');
  }
  $removeFromParent_0(widget);
  elem = widget.element;
  this$static.element = elem;
  isPotential(elem) && $setResolver(($clinit_PotentialElement() , elem), this$static);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

function $isAttached(this$static){
  if (this$static.widget) {
    return this$static.widget.attached;
  }
  return false;
}

defineSeed(343, 344, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.isAttached_0 = function isAttached_0(){
  return $isAttached(this);
}
;
_.onAttach = function onAttach_0(){
  if (this.eventsToSink != -1) {
    $sinkEvents(this.widget, this.eventsToSink);
    this.eventsToSink = -1;
  }
  $onAttach_2(this.widget);
  this.element.__listener = this;
  fire_0(this, true);
}
;
_.onBrowserEvent_0 = function onBrowserEvent_4(event_0){
  $onBrowserEvent_3(this, event_0);
  $onBrowserEvent_3(this.widget, event_0);
}
;
_.onDetach = function onDetach_0(){
  try {
    this.onUnload();
    fire_0(this, false);
  }
   finally {
    $onDetach_2(this.widget);
  }
}
;
_.resolvePotentialElement = function resolvePotentialElement_0(){
  $setElement(this, $resolvePotentialElement());
  return this.element;
}
;
_.widget = null;
function $addCellPreviewHandler(this$static, handler){
  return $addCellPreviewHandler_0(this$static.presenter, handler);
}

function $addRangeChangeHandler(this$static, handler){
  return $addRangeChangeHandler_0(this$static.presenter, handler);
}

function $cellConsumesEventType(cell, eventType){
  var consumedEvents;
  consumedEvents = cell.consumedEvents;
  return !!consumedEvents && consumedEvents.contains_0(eventType);
}

function $checkRowBounds(this$static, row){
  if (!(row >= 0 && row < $getVisibleItemCount(this$static.presenter))) {
    throw new IndexOutOfBoundsException_1('Row index: ' + row + ', Row size: ' + $getCurrentState(this$static.presenter).rowCount);
  }
}

function $getValueKey(this$static, value){
  this$static.presenter;
  return value;
}

function $setFocus(this$static, focused){
  var elem;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static));
  !!elem && (focused?(elem.focus() , undefined):(elem.blur() , undefined));
}

function $setFocusable(this$static, elem, focusable){
  var rowElem;
  if (focusable) {
    rowElem = elem;
    $setTabIndex(rowElem, this$static.tabIndex_0);
  }
   else {
    elem.tabIndex = -1;
    elem.removeAttribute('tabIndex');
    elem.removeAttribute('accessKey');
  }
}

function $setKeyboardSelectionHandler(this$static, keyboardSelectionReg){
  if (this$static.keyboardSelectionReg) {
    $removeHandler(this$static.keyboardSelectionReg.real);
    this$static.keyboardSelectionReg = null;
  }
  !!keyboardSelectionReg && (this$static.keyboardSelectionReg = $addCellPreviewHandler_0(this$static.presenter, keyboardSelectionReg));
}

function $setPageSize(this$static, pageSize){
  $setVisibleRange(this$static, new Range_1($getVisibleRange(this$static.presenter).start, pageSize));
}

function $setRowCount(this$static, count){
  $setRowCount_1(this$static.presenter, count, true);
}

function $setRowCount_0(this$static, size, isExact){
  $setRowCount_1(this$static.presenter, size, isExact);
}

function $setRowData(this$static, start, values){
  $setRowData_1(this$static.presenter, start, values);
}

function $setRowData_0(this$static, values){
  $setRowCount(this$static, values.size_1());
  $setVisibleRange(this$static, new Range_1(0, values.size_1()));
  $setRowData_1(this$static.presenter, 0, values);
}

function $setSelectionModel(this$static, selectionModel){
  $setSelectionModel_0(this$static.presenter, selectionModel);
}

function $setVisibleRange(this$static, range){
  $setVisibleRange_0(this$static.presenter, range, false);
}

defineSeed(342, 343, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$HasData]));
_.getVisibleRange = function getVisibleRange(){
  return $getVisibleRange(this.presenter);
}
;
_.onBrowserEvent_0 = function onBrowserEvent_5(event_0){
  var eventTarget, eventType, target;
  !impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0);
  $onBrowserEvent_4(impl_1, this, event_0);
  if (this.isRefreshing) {
    return;
  }
  eventTarget = event_0.srcElement;
  if (!is_0(eventTarget)) {
    return;
  }
  target = eventTarget;
  if (!isOrHasChildImpl(this.element, eventTarget)) {
    return;
  }
  $onBrowserEvent_3(this, event_0);
  $onBrowserEvent_3(this.widget, event_0);
  eventType = event_0.type;
  if ($equals_5('focus', eventType)) {
    this.isFocused = true;
    $onFocus(this);
  }
   else if ($equals_5('blur', eventType)) {
    this.isFocused = false;
    $onBlur(this);
  }
   else 
    $equals_5('keydown', eventType)?(this.isFocused = true):$equals_5('mousedown', eventType) && (!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , $isFocusable(impl_1, target)) && (this.isFocused = true);
  $onBrowserEvent2(this, event_0);
}
;
_.onUnload = function onUnload_0(){
  this.isFocused = false;
}
;
_.setFocus = function setFocus(focused){
  $setFocus(this, focused);
}
;
_.setRowCount = function setRowCount(size, isExact){
  $setRowCount_1(this.presenter, size, isExact);
}
;
_.setRowData = function setRowData(start, values){
  $setRowData_1(this.presenter, start, values);
}
;
_.isFocused = false;
_.isRefreshing = false;
_.keyboardSelectionReg = null;
_.presenter = null;
_.tabIndex_0 = 0;
function $addColumn(this$static, col, headerString){
  $insertColumn(this$static, this$static.columns.size_0, col, new TextHeader_0(headerString));
}

function $buildRowValues(this$static, values, start, isRebuildingAllRows){
  var end, i, length_0, tableSectionBuilder, value;
  length_0 = values.size_1();
  end = start + length_0;
  $start(this$static.tableBuilder, isRebuildingAllRows);
  for (i = start; i < end; ++i) {
    value = values.get_0(i - start);
    $buildRow(this$static.tableBuilder, value, i);
  }
  $coalesceCellProperties(this$static);
  tableSectionBuilder = $finish_0(this$static.tableBuilder);
  return tableSectionToSafeHtml(tableSectionBuilder);
}

function $checkColumnBounds(this$static, col){
  if (col < 0 || col >= this$static.columns.size_0) {
    throw new IndexOutOfBoundsException_1('Column index is out of bounds: ' + col);
  }
}

function $coalesceCellProperties(this$static){
  var cell, column, column$iterator;
  this$static.handlesSelection = false;
  this$static.isInteractive = false;
  for (column$iterator = $iterator_0($values(this$static.tableBuilder.idToCellMap)); column$iterator.val$outerIter.hasNext();) {
    column = dynamicCast($next_6(column$iterator), Q$HasCell);
    cell = column.getCell();
    cell.dependsOnSelection_0();
    cell.handlesSelection_0() && (this$static.handlesSelection = true);
    isColumnInteractive(column) && (this$static.isInteractive = true);
  }
}

function $createHeaders(this$static, isFooter){
  var section;
  section = isFooter?$buildFooter(this$static.footerBuilder):$buildHeader(this$static.headerBuilder);
  if (section) {
    $replaceAllRows(TABLE_IMPL, this$static, isFooter?this$static.tableFooter.section:this$static.tableHeader.section, tableSectionToSafeHtml(section));
    isFooter?$setFooterWidget(this$static.headerPanel, this$static.tableFooterContainer):$setHeaderWidget(this$static.headerPanel, this$static.tableHeaderContainer);
  }
   else {
    isFooter?$setFooterWidget(this$static.headerPanel, null):$setHeaderWidget(this$static.headerPanel, null);
  }
}

function $fireEventToCell(this$static, event_0, eventType, parentElem, rowValue, context, column){
  var cell, cellValue, cellWasEditing, col, fieldUpdater, index, valueUpdater, index_0, valueUpdater_0;
  cell = column.getCell();
  if (!$cellConsumesEventType(cell, eventType)) {
    return;
  }
  cellValue = column.getValue(rowValue);
  cellWasEditing = cell.isEditing_0(context, parentElem, cellValue);
  if (instanceOf(column, Q$Column)) {
    col = dynamicCast(column, Q$Column);
    index_0 = context.index_0;
    valueUpdater_0 = !col.fieldUpdater?null:new Column$1_0(col, index_0, rowValue);
    col.cell.onBrowserEvent(context, parentElem, col.getValue(rowValue), event_0, valueUpdater_0);
  }
   else {
    fieldUpdater = column.getFieldUpdater();
    index = context.index_0;
    valueUpdater = !fieldUpdater?null:new AbstractCellTable$3_0(fieldUpdater, index, rowValue);
    cell.onBrowserEvent(context, parentElem, cellValue, event_0, valueUpdater);
  }
  this$static.cellIsEditing = cell.isEditing_0(context, parentElem, cellValue);
  cellWasEditing && !this$static.cellIsEditing && (!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , $resetFocus_1(new AbstractCellTable$4_0(this$static)));
}

function $getColumn(this$static, col){
  $checkColumnBounds(this$static, col);
  return dynamicCast($get_8(this$static.columns, col), Q$Column);
}

function $getFooter(this$static, index){
  return dynamicCast($get_8(this$static.footers, index), Q$Header);
}

function $getHeader(this$static, index){
  return dynamicCast($get_8(this$static.headers, index), Q$Header);
}

function $getKeyboardSelectedColumn(this$static){
  return ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy?-1:this$static.keyboardSelectedColumn;
}

function $getKeyboardSelectedElement(td){
  var firstChild;
  if (!td) {
    return null;
  }
  if ($getCellId(td) != null) {
    return td;
  }
  firstChild = $getFirstChildElement(td);
  if (!!firstChild && td.childNodes.length == 1 && $equalsIgnoreCase('div', $getTagName(firstChild))) {
    return firstChild;
  }
  return td;
}

function $getKeyboardSelectedSubRow(this$static){
  return ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy?-1:this$static.keyboardSelectedSubrow;
}

function $getKeyboardSelectedTableCellElement(this$static){
  var cellCount, colIndex, column, rowIndex, tr;
  colIndex = ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy?-1:this$static.keyboardSelectedColumn;
  if (colIndex < 0) {
    return null;
  }
  rowIndex = $getKeyboardSelectedRow(this$static.presenter);
  if (rowIndex < 0 || rowIndex >= this$static.tableData.section.rows.length) {
    return null;
  }
  tr = $getSubRowElement(this$static, rowIndex + $getVisibleRange(this$static.presenter).start, this$static.keyboardSelectedSubrow);
  if (tr) {
    cellCount = tr.cells.length;
    if (cellCount > 0) {
      column = colIndex < cellCount - 1?colIndex:cellCount - 1;
      return tr.cells[column];
    }
  }
  return null;
}

function $getSubRowElement(this$static, absRow, subrow){
  var curRow, domIndex, frameEnd, frameStart, offset, relRow, rowCount, rowValueIndex, rows, subrowIndex, subrowValueIndex;
  relRow = absRow - $getVisibleRange(this$static.presenter).start;
  $checkRowBounds(this$static, relRow);
  rows = this$static.tableData.section.rows;
  rowCount = rows.length;
  if (rowCount == 0) {
    return null;
  }
  frameStart = 0;
  frameEnd = rowCount - 1;
  domIndex = relRow < frameEnd?relRow:frameEnd;
  while (domIndex >= frameStart && domIndex <= frameEnd) {
    curRow = rows[domIndex];
    rowValueIndex = $getRowValueIndex(this$static.tableBuilder, curRow);
    if (rowValueIndex == absRow) {
      subrowValueIndex = $getSubrowValueIndex(curRow);
      if (subrow != subrowValueIndex) {
        offset = subrow - subrowValueIndex;
        subrowIndex = domIndex + offset;
        if (subrowIndex >= rows.length) {
          return null;
        }
        curRow = rows[subrowIndex];
        if ($getRowValueIndex(this$static.tableBuilder, curRow) != absRow) {
          return null;
        }
      }
      return curRow;
    }
     else 
      rowValueIndex > absRow?(frameEnd = domIndex - 1):(frameStart = domIndex + 1);
    domIndex = ~~((frameStart + frameEnd) / 2);
  }
  return null;
}

function $insertColumn(this$static, beforeIndex, col, header){
  var cellEvents, consumedEvents, headerEvents;
  beforeIndex != this$static.columns.size_0 && $checkColumnBounds(this$static, beforeIndex);
  $add_18(this$static.headers, beforeIndex, header);
  $add_18(this$static.footers, beforeIndex, null);
  $add_18(this$static.columns, beforeIndex, col);
  beforeIndex <= this$static.keyboardSelectedColumn && (this$static.keyboardSelectedColumn = min(this$static.keyboardSelectedColumn + 1, this$static.columns.size_0 - 1));
  isColumnInteractive(col) && (this$static.keyboardSelectedColumn >= this$static.columns.size_0 || !isColumnInteractive(dynamicCast($get_8(this$static.columns, this$static.keyboardSelectedColumn), Q$HasCell))) && (this$static.keyboardSelectedColumn = beforeIndex);
  consumedEvents = new HashSet_0;
  cellEvents = col.cell.consumedEvents;
  !!cellEvents && $addAll(consumedEvents, cellEvents);
  if (header) {
    headerEvents = header.cell.consumedEvents;
    !!headerEvents && $addAll(consumedEvents, headerEvents);
  }
  $sinkEvents_0((!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , impl_1), this$static, consumedEvents);
  this$static.headersDirty = true;
  this$static.columnWidthsDirty = true;
  $ensurePendingState(this$static.presenter).redrawRequired = true;
}

function $onBlur(this$static){
  var td, tr;
  td = $getKeyboardSelectedTableCellElement(this$static);
  if (td) {
    tr = $getParentElement(td);
    $removeClassName(td, 'GPBYFDELG');
    $setRowStyleName(tr, 'GPBYFDEMG', 'GPBYFDENG', false);
  }
}

function $onBrowserEvent2(this$static, event_0){
  var absRow, cellParent, clientX, clientY, col, column, columnParent, context, cur, eventTarget, eventType, footerColumnParent, footerParent, header, headerColumnParent, headerIndex, headerParent, isHeader, isSelect, isSelectionHandled, maybeTableCell, previewEvent, relRow, rowBottom, rowHeight, rowLeft, rowRight, rowTop, rowWidth, subrow, tagName, target, targetTableCell, targetTableRow, targetTableSection, tbody, tfoot, thead, unhover, value;
  eventTarget = event_0.srcElement;
  if (!is_0(eventTarget)) {
    return;
  }
  target = event_0.srcElement;
  tbody = this$static.tableData.section;
  tfoot = this$static.tableFooter.section;
  thead = this$static.tableHeader.section;
  targetTableSection = null;
  targetTableCell = null;
  cellParent = null;
  headerParent = null;
  headerColumnParent = null;
  footerParent = null;
  footerColumnParent = null;
  maybeTableCell = null;
  cur = target;
  $equalsIgnoreCase('td', $getTagName(target)) && $getCellId($getFirstChildElement(target)) != null && (cur = $getFirstChildElement(target));
  while (!!cur && !targetTableSection) {
    if (cur == tbody || cur == tfoot || cur == thead) {
      targetTableSection = cur;
      if (maybeTableCell) {
        targetTableCell = maybeTableCell;
        break;
      }
    }
    tagName = $getTagName(cur);
    ($equalsIgnoreCase('td', tagName) || $equalsIgnoreCase('th', tagName)) && (maybeTableCell = cur);
    !cellParent && $getCellId(cur) != null && (cellParent = cur);
    !headerParent && $getElementAttribute(cur, '__gwt_header') != null && (headerParent = cur);
    !footerParent && $getElementAttribute(cur, '__gwt_header') != null && (footerParent = cur);
    !headerColumnParent && $getElementAttribute(cur, '__gwt_column') != null && (headerColumnParent = cur);
    !footerColumnParent && $getElementAttribute(cur, '__gwt_column') != null && (footerColumnParent = cur);
    cur = $getParentElement(cur);
  }
  if (!targetTableCell) {
    return;
  }
  this$static.legacyRenderRowValues && (cellParent = $getFirstChildElement(targetTableCell));
  targetTableRow = $getParentElement(targetTableCell);
  eventType = event_0.type;
  isSelect = $equals_5('click', eventType) || $equals_5('keydown', eventType) && (event_0.keyCode || 0) == 13;
  col = targetTableCell.cellIndex;
  if (targetTableSection == thead || targetTableSection == tfoot) {
    isHeader = targetTableSection == thead;
    headerParent = isHeader?headerParent:footerParent;
    columnParent = isHeader?headerColumnParent:footerColumnParent;
    if (headerParent) {
      header = isHeader?$getHeader_0(this$static.headerBuilder, headerParent):$getHeader_0(this$static.footerBuilder, footerParent);
      if (header) {
        headerIndex = isHeader?__parseAndValidateInt($getAttribute(targetTableRow, '__gwt_header_row')):__parseAndValidateInt($getAttribute(targetTableRow, '__gwt_header_row'));
        context = new Cell$Context_0(headerIndex, col, header.text_0);
        $cellConsumesEventType(header.cell, eventType) && $onBrowserEvent(header.cell, context, headerParent, header.text_0, event_0, header.updater);
      }
    }
    isSelect && !!columnParent && (isHeader?$getColumn_1(this$static.headerBuilder, columnParent):$getColumn_1(this$static.footerBuilder, columnParent));
  }
   else if (targetTableSection == tbody) {
    absRow = $getRowValueIndex(this$static.tableBuilder, targetTableRow);
    relRow = absRow - $getVisibleRange(this$static.presenter).start;
    subrow = $getSubrowValueIndex(targetTableRow);
    if (!this$static.skipRowHoverCheck) {
      if ($equals_5('mouseover', eventType)) {
        !!this$static.hoveringRow && isOrHasChildImpl(this$static.tableData.section, this$static.hoveringRow) && $setRowHover(this$static, this$static.hoveringRow, false);
        this$static.hoveringRow = targetTableRow;
        $setRowHover(this$static, this$static.hoveringRow, true);
      }
       else if ($equals_5('mouseout', eventType) && !!this$static.hoveringRow) {
        unhover = true;
        if (!this$static.skipRowHoverFloatElementCheck) {
          clientX = (event_0.clientX || 0) + $getScrollLeft_0($doc);
          clientY = (event_0.clientY || 0) + $getScrollTop($doc);
          rowLeft = $getAbsoluteLeft(this$static.hoveringRow);
          rowTop = $getAbsoluteTop(this$static.hoveringRow);
          rowWidth = this$static.hoveringRow.offsetWidth || 0;
          rowHeight = this$static.hoveringRow.offsetHeight || 0;
          rowBottom = rowTop + rowHeight;
          rowRight = rowLeft + rowWidth;
          unhover = clientX < rowLeft || clientX > rowRight || clientY < rowTop || clientY > rowBottom;
        }
        if (unhover) {
          $setRowHover(this$static, this$static.hoveringRow, false);
          this$static.hoveringRow = null;
        }
      }
    }
    if (!(relRow >= 0 && relRow < $getVisibleItemCount(this$static.presenter))) {
      return;
    }
    isSelectionHandled = this$static.handlesSelection || ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , BOUND_TO_SELECTION) == this$static.presenter.keyboardSelectionPolicy;
    value = ($checkRowBounds(this$static, relRow) , $getVisibleItem(this$static.presenter, relRow));
    context = new Cell$Context_1(absRow, col, (this$static.presenter , value), subrow);
    previewEvent = fire_5(this$static, event_0, this$static, context, value, this$static.cellIsEditing, isSelectionHandled);
    if (!!cellParent && !previewEvent.isCanceled) {
      this$static.legacyRenderRowValues?(column = dynamicCast($get_8(this$static.columns, col), Q$HasCell)):(column = $getColumn_0(this$static.tableBuilder, cellParent));
      !!column && $fireEventToCell(this$static, event_0, eventType, cellParent, value, context, column);
    }
  }
}

function $onFocus(this$static){
  var td, tr;
  td = $getKeyboardSelectedTableCellElement(this$static);
  if (td) {
    tr = $getParentElement(td);
    $addClassName(td, 'GPBYFDELG');
    $setRowStyleName(tr, 'GPBYFDEMG', 'GPBYFDENG', true);
  }
}

function $refreshColumnWidths(this$static){
  var columnCount, i, width;
  columnCount = max(this$static.columns.size_0, this$static.maxColumnIndex + 1);
  for (i = 0; i < columnCount; ++i) {
    $doSetColumnWidth(this$static, i, (width = null , this$static.columns.size_0 > i && (width = dynamicCast(this$static.columnWidths.get_1($get_8(this$static.columns, i)), Q$String)) , width == null && (width = dynamicCast(this$static.columnWidthsByIndex.get_1(valueOf_1(i)), Q$String)) , width));
  }
}

function $refreshHeadersAndColumnsImpl(this$static){
  var wereHeadersDirty, columnCount;
  if (this$static.columnWidthsDirty) {
    this$static.columnWidthsDirty = false;
    $refreshColumnWidths(this$static);
    columnCount = max(this$static.columns.size_0, this$static.maxColumnIndex + 1);
    $hideUnusedColumns(this$static.tableHeader, columnCount);
    $hideUnusedColumns(this$static.tableData, columnCount);
    $hideUnusedColumns(this$static.tableFooter, columnCount);
  }
  wereHeadersDirty = this$static.headersDirty;
  this$static.headersDirty = false;
  (wereHeadersDirty || !this$static.headerRefreshDisabled) && $createHeaders(this$static, false);
  (wereHeadersDirty || !this$static.footerRefreshDisabled) && $createHeaders(this$static, true);
}

function $renderRowValues(this$static){
  this$static.legacyRenderRowValues = false;
  throw new UnsupportedOperationException_0;
}

function $replaceAllChildren(this$static, values, html){
  $refreshHeadersAndColumnsImpl(this$static);
  !html && (html = $buildRowValues(this$static, values, $getVisibleRange(this$static.presenter).start, true));
  $replaceAllRows(TABLE_IMPL, this$static, this$static.tableData.section, (!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , $processHtml(impl_1, html)));
}

function $replaceChildren(this$static, values, start, html){
  $refreshHeadersAndColumnsImpl(this$static);
  !html && (html = $buildRowValues(this$static, values, $getVisibleRange(this$static.presenter).start + start, false));
  $replaceChildren_0(TABLE_IMPL, this$static, this$static.tableData.section, (!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , $processHtml(impl_1, html)), start, values.size_0);
}

function $resetFocusOnCell(this$static){
  var col, column, context, elem, key_0, row, value, cellValue, cell;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static));
  if (!elem) {
    return false;
  }
  row = $getKeyboardSelectedRow(this$static.presenter);
  col = ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy?-1:this$static.keyboardSelectedColumn;
  value = ($checkRowBounds(this$static, row) , $getVisibleItem(this$static.presenter, row));
  key_0 = (this$static.presenter , value);
  context = new Cell$Context_0(row + $getVisibleRange(this$static.presenter).start, col, key_0);
  column = $getColumn_0(this$static.tableBuilder, elem);
  if (!column) {
    return false;
  }
  cellValue = column.getValue(value);
  cell = column.getCell();
  cell.resetFocus(context, elem, cellValue);
  return false;
}

function $setColumnWidth_0(this$static, column, width){
  this$static.columnWidths.put(column, width);
  $updateColumnWidthImpl(this$static, column, width);
}

function $setKeyboardSelected(this$static, index, selected, stealFocus){
  var cells, focusable, i, isKeyboardSelected, keyboardColumn, subrow, td, tr, updatedSelection;
  if (($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy || !(index >= 0 && index < $getVisibleItemCount(this$static.presenter))) {
    return;
  }
  subrow = this$static.lastKeyboardSelectedSubrow;
  if (selected) {
    subrow = this$static.keyboardSelectedSubrow;
    this$static.lastKeyboardSelectedSubrow = this$static.keyboardSelectedSubrow;
  }
  tr = $getSubRowElement(this$static, index + $getVisibleRange(this$static.presenter).start, subrow);
  if (!tr) {
    return;
  }
  updatedSelection = !selected || this$static.isFocused || stealFocus;
  $setRowStyleName(tr, 'GPBYFDEMG', 'GPBYFDENG', selected);
  cells = tr.cells;
  keyboardColumn = min(DISABLED == this$static.presenter.keyboardSelectionPolicy?-1:this$static.keyboardSelectedColumn, cells.length - 1);
  for (i = 0; i < cells.length; ++i) {
    td = cells[i];
    isKeyboardSelected = i == keyboardColumn;
    setStyleName(td, 'GPBYFDELG', updatedSelection && selected && isKeyboardSelected);
    focusable = $getKeyboardSelectedElement(td);
    $setFocusable(this$static, focusable, selected && isKeyboardSelected);
    selected && stealFocus && !this$static.cellIsEditing && isKeyboardSelected && (!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , $resetFocus_1(new AbstractCellTable$2_0(focusable)));
  }
}

function $setKeyboardSelectedColumn(this$static, column, stealFocus){
  if (($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy) {
    return;
  }
  this$static.keyboardSelectedColumn = column;
  $setKeyboardSelectedRow(this$static, $getKeyboardSelectedRow(this$static.presenter), this$static.keyboardSelectedSubrow, stealFocus);
}

function $setKeyboardSelectedRow(this$static, row, subrow, stealFocus){
  this$static.keyboardSelectedSubrow = subrow;
  $setKeyboardSelectedRow_2(this$static.presenter, row, stealFocus, true);
}

function $setKeyboardSelectedRow_0(this$static, row, stealFocus){
  this$static.keyboardSelectedSubrow = 0;
  $setKeyboardSelectedRow_2(this$static.presenter, row, stealFocus, true);
}

function $setRowHover(this$static, tr, isHovering){
  this$static.skipRowHoverStyleUpdate || $setRowStyleName(tr, 'GPBYFDEJG', 'GPBYFDEKG', isHovering);
  new RowHoverEvent_0;
}

function $setRowStyleName(tr, rowStyle, cellStyle, add){
  var cells, i;
  setStyleName(tr, rowStyle, add);
  cells = tr.cells;
  for (i = 0; i < cells.length; ++i) {
    setStyleName(cells[i], cellStyle, add);
  }
}

function $updateColumnWidthImpl(this$static, column, width){
  var columnCount, i;
  columnCount = this$static.columns.size_0;
  for (i = 0; i < columnCount; ++i) {
    $get_8(this$static.columns, i) === column && $doSetColumnWidth(this$static, i, width);
  }
}

function AbstractCellTable_0(widget, resources){
  var eventTypes, eventTypes_0;
  $initWidget(this, widget);
  this.presenter = new HasDataPresenter_0(this, new AbstractHasData$View_0(this));
  eventTypes = new HashSet_0;
  $add_20(eventTypes, 'focus');
  $add_20(eventTypes, 'blur');
  $add_20(eventTypes, 'keydown');
  $add_20(eventTypes, 'keyup');
  $add_20(eventTypes, 'click');
  $add_20(eventTypes, 'mousedown');
  $sinkEvents_0((!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , impl_1), this, eventTypes);
  $addCellPreviewHandler(this, new DefaultSelectionEventManager_0);
  $setKeyboardSelectionHandler(this, new AbstractHasData$DefaultKeyboardSelectionHandler_0(this));
  this.columns = new ArrayList_0;
  this.columnWidths = new HashMap_0;
  this.columnWidthsByIndex = new HashMap_0;
  this.footers = new ArrayList_0;
  this.headers = new ArrayList_0;
  this.sortList = new ColumnSortList_0;
  this.resources = resources;
  !TABLE_IMPL && (TABLE_IMPL = new AbstractCellTable$ImplTrident_0);
  !template_0 && (template_0 = new AbstractCellTable_TemplateImpl_0);
  eventTypes_0 = new HashSet_0;
  $add_20(eventTypes_0, 'mouseover');
  $add_20(eventTypes_0, 'mouseout');
  $sinkEvents_0((!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , impl_1), this, eventTypes_0);
  this.tableBuilder = new DefaultCellTableBuilder_0(this);
  this.headerBuilder = new DefaultHeaderOrFooterBuilder_0(this, false);
  this.footerBuilder = new DefaultHeaderOrFooterBuilder_0(this, true);
  $setKeyboardSelectionHandler(this, new AbstractCellTable$CellTableKeyboardSelectionHandler_0(this));
}

function isColumnInteractive(column){
  var consumedEvents;
  consumedEvents = column.getCell().consumedEvents;
  return !!consumedEvents && consumedEvents.coll.size_1() > 0;
}

function tableSectionToSafeHtml(section){
  var rawHtml;
  if (!section) {
    throw new IllegalArgumentException_1('Only HtmlTableSectionBuilder is supported at this time');
  }
  rawHtml = $asSafeHtml(section.delegate).html;
  rawHtml = $substring_0(rawHtml, 7, rawHtml.length - 8);
  return $clinit_SafeHtmlUtils() , new SafeHtmlString_0(rawHtml);
}

defineSeed(341, 342, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$HasData]));
_.cellIsEditing = false;
_.columnWidthsDirty = false;
_.footerBuilder = null;
_.footerRefreshDisabled = false;
_.handlesSelection = false;
_.headerBuilder = null;
_.headerRefreshDisabled = false;
_.headersDirty = false;
_.hoveringRow = null;
_.isInteractive = false;
_.keyboardSelectedColumn = 0;
_.keyboardSelectedSubrow = 0;
_.lastKeyboardSelectedSubrow = 0;
_.legacyRenderRowValues = true;
_.maxColumnIndex = -1;
_.resources = null;
_.skipRowHoverCheck = false;
_.skipRowHoverFloatElementCheck = false;
_.skipRowHoverStyleUpdate = false;
_.tableBuilder = null;
var TABLE_IMPL = null, template_0 = null;
function AbstractCellTable$2_0(val$focusable){
  this.val$focusable = val$focusable;
}

defineSeed(346, 1, {}, AbstractCellTable$2_0);
_.execute_0 = function execute_5(){
  this.val$focusable.focus();
}
;
_.val$focusable = null;
function AbstractCellTable$3_0(val$fieldUpdater, val$index, val$rowValue){
  this.val$fieldUpdater = val$fieldUpdater;
  this.val$index = val$index;
  this.val$rowValue = val$rowValue;
}

defineSeed(347, 1, {}, AbstractCellTable$3_0);
_.update_0 = function update(value){
  this.val$fieldUpdater.update(this.val$index, this.val$rowValue, value);
}
;
_.val$fieldUpdater = null;
_.val$index = 0;
_.val$rowValue = null;
function AbstractCellTable$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(348, 1, {}, AbstractCellTable$4_0);
_.execute_0 = function execute_6(){
  $setFocus(this.this$0, true);
}
;
_.this$0 = null;
function $onCellPreview(this$static, event_0){
  var eventType, isFocusable, nativeEvent, relRow, target, keyboardPagingPolicy, keyboardPagingPolicy_0;
  nativeEvent = event_0.nativeEvent;
  eventType = event_0.nativeEvent.type;
  if ($equals_5('keydown', eventType) && !event_0.isCellEditing) {
    switch (nativeEvent.keyCode || 0) {
      case 40:
        $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) + 1);
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
      case 38:
        $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) - 1);
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
      case 34:
        keyboardPagingPolicy = this$static.display_0.presenter.keyboardPagingPolicy;
        ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE) == keyboardPagingPolicy?$setKeyboardSelectedRow_1(this$static, $getVisibleRange(this$static.display_0.presenter).length_0):INCREASE_RANGE == keyboardPagingPolicy && $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) + 30);
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
      case 33:
        keyboardPagingPolicy_0 = this$static.display_0.presenter.keyboardPagingPolicy;
        ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE) == keyboardPagingPolicy_0?$setKeyboardSelectedRow_1(this$static, -$getVisibleRange(this$static.display_0.presenter).length_0):INCREASE_RANGE == keyboardPagingPolicy_0 && $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) - 30);
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
      case 36:
        $setKeyboardSelectedRow_1(this$static, -$getVisibleRange(this$static.display_0.presenter).start);
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
      case 35:
        $setKeyboardSelectedRow_1(this$static, $getCurrentState(this$static.display_0.presenter).rowCount - 1);
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
      case 32:
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
    }
  }
   else if ($equals_5('click', eventType)) {
    relRow = event_0.context.index_0 - $getVisibleRange(this$static.display_0.presenter).start;
    target = event_0.nativeEvent.srcElement;
    isFocusable = (!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , $isFocusable(impl_1, target));
    $setKeyboardSelectedRow_0(this$static.display_0, relRow, !isFocusable);
  }
   else if ($equals_5('focus', eventType)) {
    relRow = event_0.context.index_0 - $getVisibleRange(this$static.display_0.presenter).start;
    if ($getKeyboardSelectedRow(this$static.display_0.presenter) != relRow) {
      $setKeyboardSelectedRow_0(this$static.display_0, event_0.context.index_0, false);
      return;
    }
  }
}

function $setKeyboardSelectedRow_1(this$static, row){
  $setKeyboardSelectedRow_0(this$static.display_0, row, true);
}

function AbstractHasData$DefaultKeyboardSelectionHandler_0(display){
  this.display_0 = display;
}

defineSeed(350, 1, makeCastMap([Q$EventHandler, Q$CellPreviewEvent$Handler]), AbstractHasData$DefaultKeyboardSelectionHandler_0);
_.onCellPreview = function onCellPreview(event_0){
  $onCellPreview(this, event_0);
}
;
_.display_0 = null;
function $findInteractiveColumn(this$static, start, reverse){
  var i;
  if (this$static.table.isInteractive) {
    if (reverse) {
      for (i = start - 1; i >= 0; --i) {
        if (isColumnInteractive($getColumn(this$static.table, i))) {
          return i;
        }
      }
      for (i = this$static.table.columns.size_0 - 1; i >= start; --i) {
        if (isColumnInteractive($getColumn(this$static.table, i))) {
          return i;
        }
      }
    }
     else {
      for (i = start + 1; i < this$static.table.columns.size_0; ++i) {
        if (isColumnInteractive($getColumn(this$static.table, i))) {
          return i;
        }
      }
      for (i = 0; i <= start; ++i) {
        if (isColumnInteractive($getColumn(this$static.table, i))) {
          return i;
        }
      }
    }
  }
   else {
    return 0;
  }
  return 0;
}

function AbstractCellTable$CellTableKeyboardSelectionHandler_0(table){
  this.display_0 = table;
  this.table = table;
}

defineSeed(349, 350, makeCastMap([Q$EventHandler, Q$CellPreviewEvent$Handler]), AbstractCellTable$CellTableKeyboardSelectionHandler_0);
_.onCellPreview = function onCellPreview_0(event_0){
  var col, eventType, keyCode, nativeEvent, nextColumn, oldColumn, oldRow, prevColumn, relRow, stealFocus, subrow, target;
  nativeEvent = event_0.nativeEvent;
  eventType = event_0.nativeEvent.type;
  if ($equals_5('keydown', eventType) && !event_0.isCellEditing) {
    oldRow = $getKeyboardSelectedRow(this.table.presenter);
    oldColumn = $getKeyboardSelectedColumn(this.table);
    keyCode = nativeEvent.keyCode || 0;
    if (keyCode == 39) {
      nextColumn = $findInteractiveColumn(this, oldColumn, false);
      if (nextColumn <= oldColumn) {
        $setKeyboardSelectedRow_0(this.table, oldRow + 1, true);
        if ($getKeyboardSelectedRow(this.table.presenter) != oldRow) {
          $setKeyboardSelectedColumn(this.table, nextColumn, true);
          event_0.isCanceled = true;
          $eventPreventDefault(event_0.nativeEvent);
          return;
        }
      }
       else {
        $setKeyboardSelectedColumn(this.table, nextColumn, true);
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
      }
    }
     else if (keyCode == 37) {
      prevColumn = $findInteractiveColumn(this, oldColumn, true);
      if (prevColumn >= oldColumn) {
        $setKeyboardSelectedRow_0(this.table, oldRow - 1, true);
        if ($getKeyboardSelectedRow(this.table.presenter) != oldRow) {
          $setKeyboardSelectedColumn(this.table, prevColumn, true);
          event_0.isCanceled = true;
          $eventPreventDefault(event_0.nativeEvent);
          return;
        }
      }
       else {
        $setKeyboardSelectedColumn(this.table, prevColumn, true);
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
      }
    }
  }
   else if ($equals_5('click', eventType) || $equals_5('focus', eventType)) {
    col = event_0.context.column;
    relRow = event_0.context.index_0 - $getVisibleRange(this.table.presenter).start;
    subrow = event_0.context.subindex;
    if ($getKeyboardSelectedColumn(this.table) != col || $getKeyboardSelectedRow(this.table.presenter) != relRow || $getKeyboardSelectedSubRow(this.table) != subrow) {
      stealFocus = false;
      if ($equals_5('click', eventType)) {
        target = event_0.nativeEvent.srcElement;
        stealFocus = (!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , !$isFocusable(impl_1, target));
      }
      $setKeyboardSelectedRow(this.table, relRow, subrow, stealFocus);
      $setKeyboardSelectedColumn(this.table, col, stealFocus);
    }
    return;
  }
  $onCellPreview(this, event_0);
}
;
_.table = null;
function $convertToSectionElement(this$static, table, sectionTag, rowHtml){
  var tableElem, sb, sb_0, sb_1;
  $setEventListener(this$static.tmpElem, table);
  sectionTag = sectionTag.toLowerCase();
  if ($equals_5('tbody', sectionTag)) {
    $setInnerHTML(this$static.tmpElem, (sb = new StringBuilder_0 , $append_1(sb.data, '<table><tbody>') , $append_10(sb, rowHtml.html) , $append_1(sb.data, '<\/tbody><\/table>') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html);
  }
   else if ($equals_5('thead', sectionTag)) {
    $setInnerHTML(this$static.tmpElem, (sb_0 = new StringBuilder_0 , $append_1(sb_0.data, '<table><thead>') , $append_10(sb_0, rowHtml.html) , $append_1(sb_0.data, '<\/thead><\/table>') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))).html);
  }
   else if ($equals_5('tfoot', sectionTag)) {
    $setInnerHTML(this$static.tmpElem, (sb_1 = new StringBuilder_0 , $append_1(sb_1.data, '<table><tfoot>') , $append_10(sb_1, rowHtml.html) , $append_1(sb_1.data, '<\/tfoot><\/table>') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_1.data))).html);
  }
   else {
    throw new IllegalArgumentException_1('Invalid table section tag: ' + sectionTag);
  }
  tableElem = $getFirstChildElement(this$static.tmpElem);
  this$static.tmpElem.__listener = null;
  if ($equals_5('tbody', sectionTag)) {
    return tableElem.tBodies[0];
  }
   else if ($equals_5('thead', sectionTag)) {
    return tableElem.tHead;
  }
   else if ($equals_5('tfoot', sectionTag)) {
    return tableElem.tFoot;
  }
   else {
    throw new IllegalArgumentException_1('Invalid table section tag: ' + sectionTag);
  }
}

function $replaceAllRows(this$static, table, section, html){
  $isAttached(table) || $setEventListener(table.element, table);
  $getParentElement(section);
  $getNextSiblingElement(section);
  $replaceAllRowsImplLegacy(this$static, table, section, html);
  $isAttached(table) || (table.element.__listener = null , undefined);
}

function $replaceChildren_0(this$static, table, section, html, startIndex, childCount){
  var absEndIndex, count, insertBefore, newChild, newSection, next;
  $isAttached(table) || $setEventListener(table.element, table);
  $getParentElement(section);
  $getNextSiblingElement(section);
  absEndIndex = $getVisibleRange(table.presenter).start + startIndex + childCount;
  insertBefore = $getSubRowElement(table, startIndex + $getVisibleRange(table.presenter).start, 0);
  if (table.legacyRenderRowValues) {
    count = 0;
    while (!!insertBefore && count < childCount) {
      next = $getNextSiblingElement(insertBefore);
      section.removeChild(insertBefore);
      insertBefore = !next?null:next;
      ++count;
    }
  }
   else {
    while (!!insertBefore && $getRowValueIndex(table.tableBuilder, insertBefore) < absEndIndex) {
      next = $getNextSiblingElement(insertBefore);
      section.removeChild(insertBefore);
      insertBefore = !next?null:next;
    }
  }
  newSection = $convertToSectionElement(this$static, table, $getTagName(section), html);
  newChild = $getFirstChildElement(newSection);
  while (newChild) {
    next = $getNextSiblingElement(newChild);
    section.insertBefore(newChild, insertBefore);
    newChild = next;
  }
  $isAttached(table) || (table.element.__listener = null , undefined);
}

defineSeed(351, 1, {});
function $replaceAllRowsImplLegacy(this$static, table, section, html){
  var child, newSection, next;
  child = $getFirstChildElement(section);
  while (child) {
    next = $getNextSiblingElement(child);
    section.removeChild(child);
    child = next;
  }
  newSection = $convertToSectionElement(this$static, table, $getTagName(section), html);
  child = $getFirstChildElement(newSection);
  while (child) {
    next = $getNextSiblingElement(child);
    section.appendChild(child);
    child = next;
  }
}

function AbstractCellTable$ImplTrident_0(){
  this.tmpElem = $createElement($doc, 'div');
}

defineSeed(352, 351, {}, AbstractCellTable$ImplTrident_0);
function $buildRow(this$static, rowValue, absRowIndex){
  this$static.rowIndex = absRowIndex;
  $getValueKey(this$static.cellTable, rowValue);
  this$static.subrowIndex = 0;
  $buildRowImpl(this$static, rowValue, absRowIndex);
}

function $finish_0(this$static){
  while (this$static.tbody.delegate_0.stack.size_0 > 0) {
    $end_0(this$static.tbody.delegate_0, 'tbody');
  }
  return this$static.tbody;
}

function $getCellId(elem){
  var cellId;
  if (!elem) {
    return null;
  }
  cellId = $getAttribute(elem, '__gwt_cell');
  return cellId == null || cellId.length == 0?null:cellId;
}

function $getColumn_0(this$static, elem){
  var cellId;
  cellId = $getCellId(elem);
  return cellId == null?null:dynamicCast(this$static.idToCellMap.get_1(cellId), Q$HasCell);
}

function $getRowValueIndex(this$static, row){
  try {
    return __parseAndValidateInt($getAttribute(row, '__gwt_row'));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$NumberFormatException)) {
      return row.sectionRowIndex + $getVisibleRange(this$static.cellTable.presenter).start;
    }
     else 
      throw $e0;
  }
}

function $getSubrowValueIndex(row){
  try {
    return __parseAndValidateInt($getAttribute(row, '__gwt_subrow'));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$NumberFormatException)) {
      return 0;
    }
     else 
      throw $e0;
  }
}

function $renderCell(this$static, builder, context, column, rowValue){
  var cellBuilder, cellId;
  cellId = dynamicCast(this$static.cellToIdMap.get_1(column), Q$String);
  if (cellId == null) {
    cellId = 'cell-' + $createUniqueId($doc);
    this$static.idToCellMap.put(cellId, column);
    this$static.cellToIdMap.put(column, cellId);
  }
  $attribute_0(builder.delegate, '__gwt_cell', cellId);
  cellBuilder = new SafeHtmlBuilder_0;
  column?column.cell.render(context, column.getValue(rowValue), cellBuilder):null.cell.render(context, null.nullMethod(), cellBuilder);
  $html(builder, new SafeHtmlString_0($toString_0(cellBuilder.sb.data)));
}

function $start(this$static, isRebuildingAllRows){
  this$static.tbody = $startTableSection((!instance_0 && (instance_0 = new HtmlBuilderFactory_0) , new HtmlBuilderImpl_0), 'tbody');
  if (isRebuildingAllRows) {
    this$static.cellToIdMap.clear_0();
    this$static.idToCellMap.clear_0();
  }
}

function $startRow(this$static){
  var row;
  while (this$static.tbody.delegate_0.stack.size_0 > 1) {
    $end(this$static.tbody.delegate_0);
  }
  if (this$static.tbody.delegate_0.stack.size_0 < 1) {
    throw new IllegalStateException_1('Cannot start a row.  Did you call TableRowBuilder.end() too many times?');
  }
  row = $startTR(this$static.tbody.delegate);
  $attribute_1(row, '__gwt_row', this$static.rowIndex);
  $attribute_1(row, '__gwt_subrow', this$static.subrowIndex);
  ++this$static.subrowIndex;
  return row;
}

defineSeed(353, 1, {});
_.cellTable = null;
_.rowIndex = 0;
_.subrowIndex = 0;
_.tbody = null;
function AbstractCellTable_TemplateImpl_0(){
}

defineSeed(354, 1, {}, AbstractCellTable_TemplateImpl_0);
function $addHandler_1(this$static, handler, type){
  return $addHandler_0(this$static.hasData, handler, type);
}

function $renderRowValues_0(this$static){
  var sb;
  try {
    sb = new SafeHtmlBuilder_0;
    $renderRowValues(this$static.hasData);
    return new SafeHtmlString_0($toString_0(sb.sb.data));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$UnsupportedOperationException)) {
      return null;
    }
     else 
      throw $e0;
  }
}

function $replaceAllChildren_0(this$static, values, stealFocus){
  var elem, html;
  html = $renderRowValues_0(this$static, $getVisibleRange(this$static.hasData.presenter));
  this$static.hasData.isFocused = this$static.hasData.isFocused || stealFocus;
  this$static.wasFocused = this$static.hasData.isFocused;
  this$static.hasData.isRefreshing = true;
  $replaceAllChildren(this$static.hasData, values, html);
  this$static.hasData.isRefreshing = false;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static.hasData));
  if (elem) {
    $setFocusable(this$static.hasData, elem, true);
    this$static.hasData.isFocused && $onFocus(this$static.hasData);
  }
  $fireEvent_0(this$static.hasData, new AbstractHasData$View$2_0(unmodifiableList($getCurrentState(this$static.hasData.presenter).rowData)));
}

function $replaceChildren_1(this$static, values, start, stealFocus){
  var elem, html;
  html = $renderRowValues_0(this$static, $getVisibleRange(this$static.hasData.presenter).start + start);
  this$static.hasData.isFocused = this$static.hasData.isFocused || stealFocus;
  this$static.wasFocused = this$static.hasData.isFocused;
  this$static.hasData.isRefreshing = true;
  $replaceChildren(this$static.hasData, values, start, html);
  this$static.hasData.isRefreshing = false;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static.hasData));
  if (elem) {
    $setFocusable(this$static.hasData, elem, true);
    this$static.hasData.isFocused && $onFocus(this$static.hasData);
  }
  $fireEvent_0(this$static.hasData, new AbstractHasData$View$2_0(unmodifiableList($getCurrentState(this$static.hasData.presenter).rowData)));
}

function $resetFocus_0(this$static){
  this$static.wasFocused && (!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , $resetFocus_1(new AbstractHasData$View$1_0(this$static)));
}

function $setKeyboardSelected_0(this$static, index, seleted, stealFocus){
  this$static.hasData.isFocused = this$static.hasData.isFocused || stealFocus;
  $setKeyboardSelected(this$static.hasData, index, seleted, stealFocus);
}

function $setLoadingState(this$static, state){
  this$static.hasData.isRefreshing = true;
  $onLoadingStateChanged(this$static.hasData, state);
  this$static.hasData.isRefreshing = false;
}

function AbstractHasData$View_0(hasData){
  this.hasData = hasData;
}

defineSeed(355, 1, {}, AbstractHasData$View_0);
_.hasData = null;
_.wasFocused = false;
function AbstractHasData$View$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(356, 1, {}, AbstractHasData$View$1_0);
_.execute_0 = function execute_7(){
  var elem;
  if (!$resetFocusOnCell(this.this$1.hasData)) {
    elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this.this$1.hasData));
    !!elem && (elem.focus() , undefined);
  }
}
;
_.this$1 = null;
function AbstractHasData$View$2_0($anonymous0){
  this.value_0 = $anonymous0;
}

defineSeed(357, 257, {}, AbstractHasData$View$2_0);
function $buildFooter(this$static){
  if (!this$static.isFooter) {
    throw new UnsupportedOperationException_1('Cannot build footer because this builder is designated to build a header');
  }
  return $buildHeaderOrFooter(this$static);
}

function $buildHeader(this$static){
  if (this$static.isFooter) {
    throw new UnsupportedOperationException_1('Cannot build header because this builder is designated to build a footer');
  }
  return $buildHeaderOrFooter(this$static);
}

function $buildHeaderOrFooter(this$static){
  this$static.section = this$static.isFooter?$startTableSection((!instance_0 && (instance_0 = new HtmlBuilderFactory_0) , new HtmlBuilderImpl_0), 'tfoot'):$startTableSection((!instance_0 && (instance_0 = new HtmlBuilderFactory_0) , new HtmlBuilderImpl_0), 'thead');
  $clear_0(this$static.idToHeaderMap);
  this$static.idToColumnMap.clear_0();
  this$static.rowIndex = 0;
  if (!$buildHeaderOrFooterImpl(this$static)) {
    return null;
  }
  while (this$static.section.delegate_0.stack.size_0 > 0) {
    $end(this$static.section.delegate_0);
  }
  return this$static.section;
}

function $enableColumnHandlers(this$static, builder, column){
  var columnId;
  columnId = 'column-' + $createUniqueId($doc);
  this$static.idToColumnMap.put(columnId, column);
  $attribute_0(builder.delegate, '__gwt_column', columnId);
}

function $getColumn_1(this$static, elem){
  var cellId;
  cellId = $getElementAttribute(elem, '__gwt_column');
  return cellId == null?null:dynamicCast(this$static.idToColumnMap.get_1(cellId), Q$Column);
}

function $getElementAttribute(elem, attribute){
  var value;
  if (!elem) {
    return null;
  }
  value = $getAttribute(elem, attribute);
  return value == null || value.length == 0?null:value;
}

function $getHeader_0(this$static, elem){
  var headerId;
  headerId = $getElementAttribute(elem, '__gwt_header');
  return headerId == null?null:dynamicCast($getValue(this$static.idToHeaderMap, headerId), Q$Header);
}

function $getSortIcon(this$static){
  var proto;
  if (!this$static.sortDescIconHtml) {
    proto = create_2(($clinit_DataGrid_Resources_default_StaticClientBundleGenerator$dataGridSortDescendingInitializer() , $clinit_DataGrid_Resources_default_StaticClientBundleGenerator() , dataGridSortDescending));
    this$static.sortDescIconHtml = ($clinit_SafeHtmlUtils() , new SafeHtmlString_0($getSafeHtml(proto.url, proto.left_0, proto.top_0, proto.width_0, proto.height_0).html));
  }
  return this$static.sortDescIconHtml;
}

function $renderHeader(this$static, out, context, header){
  var headerId, sb;
  headerId = dynamicCast($getKey(this$static.idToHeaderMap, header), Q$String);
  if (headerId == null) {
    headerId = 'header-' + $createUniqueId($doc);
    $put_0(this$static.idToHeaderMap, headerId, header);
  }
  $attribute_0(out.delegate, '__gwt_header', headerId);
  sb = new SafeHtmlBuilder_0;
  $render(header.cell, context, header.text_0, sb);
  out.html_0(new SafeHtmlString_0($toString_0(sb.sb.data)));
}

function $renderSortableHeader(this$static, out, context, header, isSorted){
  var halfHeight, headerContainer, iconWidth, imageHolder, outerDiv, style;
  headerContainer = out;
  isSorted = isSorted && !this$static.isFooter;
  if (isSorted) {
    iconWidth = this$static.sortDescIconWidth;
    halfHeight = this$static.sortDescIconHalfHeight;
    outerDiv = $startDiv(out.delegate);
    style = $trustedProperty($position(outerDiv.delegate_0.stylesBuilder, ($clinit_Style$Position() , RELATIVE)), 'zoom');
    $paddingLeft(style, iconWidth, $clinit_Style$Unit());
    $endStyle(style.delegate);
    imageHolder = $startDiv(outerDiv.delegate);
    style = $marginTop($lineHeight($top($position(outerDiv.delegate_0.stylesBuilder, ABSOLUTE), $clinit_Style$Unit()), $clinit_Style$Unit()), -halfHeight, $clinit_Style$Unit());
    $left(style, $clinit_Style$Unit());
    $endStyle(style.delegate);
    $html(imageHolder, $getSortIcon(this$static));
    $end_0(imageHolder.delegate_0, 'div');
    headerContainer = $startDiv(outerDiv.delegate);
  }
  $renderHeader(this$static, headerContainer, context, header);
  if (isSorted) {
    $end_0(headerContainer.delegate_0, 'div');
    $end_0(headerContainer.delegate_0, 'div');
  }
}

function $startRow_0(this$static){
  var row;
  while (this$static.section.delegate_0.stack.size_0 > 1) {
    $end(this$static.section.delegate_0);
  }
  if (this$static.section.delegate_0.stack.size_0 < 1) {
    throw new IllegalStateException_1('Cannot start a row.  Did you call TableRowBuilder.end() too many times?');
  }
  row = $startTR(this$static.section.delegate);
  $attribute_1(row, '__gwt_header_row', this$static.rowIndex);
  ++this$static.rowIndex;
  return row;
}

function AbstractHeaderOrFooterBuilder_0(table, isFooter){
  var asc, desc;
  this.idToColumnMap = new HashMap_0;
  this.idToHeaderMap = new AbstractHeaderOrFooterBuilder$TwoWayHashMap_0;
  this.isFooter = isFooter;
  this.table = table;
  asc = ($clinit_DataGrid_Resources_default_StaticClientBundleGenerator$dataGridSortAscendingInitializer() , $clinit_DataGrid_Resources_default_StaticClientBundleGenerator() , dataGridSortAscending);
  desc = ($clinit_DataGrid_Resources_default_StaticClientBundleGenerator$dataGridSortDescendingInitializer() , dataGridSortDescending);
  if (asc) {
    asc.width_0 + 6;
    toInt(fromDouble(round0(asc.height_0 / 2)));
  }
  if (desc) {
    this.sortDescIconWidth = desc.width_0 + 6;
    this.sortDescIconHalfHeight = toInt(fromDouble(round0(desc.height_0 / 2)));
  }
   else {
    this.sortDescIconWidth = 0;
    this.sortDescIconHalfHeight = 0;
  }
}

defineSeed(358, 1, {});
_.isFooter = false;
_.rowIndex = 0;
_.section = null;
_.sortDescIconHalfHeight = 0;
_.sortDescIconHtml = null;
_.sortDescIconWidth = 0;
_.table = null;
function $clear_0(this$static){
  this$static.keyToValue.clear_0();
  this$static.valueToKey.clear_0();
}

function $getKey(this$static, value){
  return this$static.valueToKey.get_1(value);
}

function $getValue(this$static, key_0){
  return this$static.keyToValue.get_1(key_0);
}

function $put_0(this$static, key_0, value){
  this$static.keyToValue.put(key_0, value);
  this$static.valueToKey.put(value, key_0);
}

function AbstractHeaderOrFooterBuilder$TwoWayHashMap_0(){
  this.keyToValue = new HashMap_0;
  this.valueToKey = new HashMap_0;
}

defineSeed(359, 1, {}, AbstractHeaderOrFooterBuilder$TwoWayHashMap_0);
function $sinkEvents_0(this$static, widget, typeNames){
  var eventsToSink, typeInt, typeName, typeName$iterator;
  if (!typeNames) {
    return;
  }
  eventsToSink = 0;
  for (typeName$iterator = $iterator($keySet(typeNames.map)); typeName$iterator.val$outerIter.hasNext();) {
    typeName = dynamicCast($next_5(typeName$iterator), Q$String);
    typeInt = $eventGetTypeInt(typeName);
    if (typeInt < 0) {
      widget.element;
    }
     else {
      typeInt = $sinkEvent(this$static, widget, typeName);
      typeInt > 0 && (eventsToSink |= typeInt);
    }
  }
  eventsToSink > 0 && (widget.eventsToSink == -1?sinkEvents_0(widget.element, eventsToSink | (widget.element.__eventBits || 0)):(widget.eventsToSink |= eventsToSink));
}

defineSeed(360, 1, {});
_.focusableTypes = null;
var impl_1 = null;
function $initFocusEventSystem(){
  dispatchFocusEvent = $entry(function(){
    handleNonBubblingEvent($wnd.event);
  }
  );
}

function $initLoadEvents(moduleName){
  !$wnd.__gwt_CellBasedWidgetImplLoadListeners && ($wnd.__gwt_CellBasedWidgetImplLoadListeners = new Array);
  $wnd.__gwt_CellBasedWidgetImplLoadListeners[moduleName] = $entry(function(){
    handleNonBubblingEvent($wnd.event);
  }
  );
}

function $isFocusable(this$static, elem){
  var attrNode;
  return $contains_1(this$static.focusableTypes, $getTagName(elem).toLowerCase()) || (attrNode = elem.getAttributeNode('tabIndex') , attrNode != null && attrNode.specified?elem.tabIndex:-1) >= 0;
}

function $onBrowserEvent_4(this$static, widget, event_0){
  var eventTarget, target, type;
  type = event_0.type.toLowerCase();
  if ($equals_5('focus', type) || $equals_5('blur', type) || $equals_5('change', type)) {
    eventTarget = event_0.srcElement;
    if (is_0(eventTarget)) {
      target = eventTarget;
      target != widget.element && (target.__listener = null , undefined);
    }
  }
  !!focusedInput && $equals_5('change', type) && (focusedInputValue = getInputValue(focusedInput));
  !!focusedInput && !focusedInputChangesOnBlurOnly && $contains_1(this$static.changeEventTriggers, type) && $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new CellBasedWidgetImplTrident$1_0(widget));
}

function $processHtml(this$static, html){
  var htmlString, listener, moduleName;
  if (this$static.loadEventsInitialized && !!html) {
    moduleName = $moduleName;
    listener = '__gwt_CellBasedWidgetImplLoadListeners["' + moduleName + '"]();';
    htmlString = html.html;
    htmlString = $replaceAll(htmlString, '(<img)([\\s/>])', "<img onload='" + listener + "' onerror='" + listener + "'$2");
    html = ($clinit_SafeHtmlUtils() , new SafeHtmlString_0(htmlString));
  }
  return html;
}

function $resetFocus_1(command){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), command);
}

function $sinkEvent(this$static, widget, typeName){
  var elem, eventsToSink, trigger, trigger$iterator;
  if ($equals_5('change', typeName) || $equals_5('focus', typeName) || $equals_5('blur', typeName)) {
    !dispatchFocusEvent && $initFocusEventSystem();
    eventsToSink = 0;
    elem = widget.element;
    if (!$equals_5('true', $getAttribute(elem, '__gwtCellBasedWidgetImplDispatchingFocus'))) {
      elem.setAttribute('__gwtCellBasedWidgetImplDispatchingFocus', 'true');
      elem.attachEvent('onfocusin', dispatchFocusEvent);
      elem.attachEvent('onfocusout', dispatchFocusEvent);
      for (trigger$iterator = $iterator($keySet(this$static.changeEventTriggers.map)); trigger$iterator.val$outerIter.hasNext();) {
        trigger = dynamicCast($next_5(trigger$iterator), Q$String);
        eventsToSink |= $eventGetTypeInt(trigger);
      }
    }
    return eventsToSink;
  }
   else if ($equals_5('load', typeName) || $equals_5('error', typeName)) {
    if (!this$static.loadEventsInitialized) {
      this$static.loadEventsInitialized = true;
      $initLoadEvents($moduleName);
    }
    return -1;
  }
   else {
    return $eventGetTypeInt(typeName);
  }
}

function CellBasedWidgetImplTrident_0(){
  this.focusableTypes = new HashSet_0;
  $add_20(this.focusableTypes, 'select');
  $add_20(this.focusableTypes, 'input');
  $add_20(this.focusableTypes, 'textarea');
  $add_20(this.focusableTypes, 'option');
  $add_20(this.focusableTypes, 'button');
  $add_20(this.focusableTypes, 'label');
  if (!inputTypes) {
    inputTypes = new HashSet_0;
    $add_20(inputTypes, 'select');
    $add_20(inputTypes, 'input');
    $add_20(inputTypes, 'textarea');
  }
  this.changeEventTriggers = new HashSet_0;
  $add_20(this.changeEventTriggers, 'mouseup');
  $add_20(this.changeEventTriggers, 'mousewheel');
}

function dispatchCellEvent(widget, target, eventBits, event_0){
  if (!isOrHasChildImpl(widget.element, target)) {
    return;
  }
  target.__listener = widget;
  sinkEvents_0(target, eventBits | (target.__eventBits || 0));
  !!event_0 && $dispatchEvent(target, event_0);
}

function dispatchEvent_1(evt, elem, listener){
  dispatchEvent_2(evt, elem, listener);
}

function getInputValue(elem){
  if (isCheckbox(elem)) {
    return $clinit_Boolean() , elem.checked?TRUE_1:FALSE_1;
  }
  return elem.value;
}

function handleNonBubblingEvent(event_0){
  var curElem, eventTarget, listener, tagName, target, type, widget;
  eventTarget = event_0.srcElement;
  if (!is_0(eventTarget)) {
    return;
  }
  target = eventTarget;
  curElem = target;
  listener = target.__listener;
  while (!!curElem && !listener) {
    curElem = $getParentElement(curElem);
    listener = !curElem?null:curElem.__listener;
  }
  if (!instanceOf(listener, Q$Widget)) {
    return;
  }
  widget = dynamicCast(listener, Q$Widget);
  if (target == widget.element) {
    return;
  }
  type = event_0.type;
  if ($equals_5('focusin', type)) {
    tagName = $getTagName(target).toLowerCase();
    if ($contains_1(inputTypes, tagName)) {
      focusedInput = target;
      focusedInputValue = getInputValue(target);
      focusedInputChangesOnBlurOnly = !$equals_5('select', tagName) && !isCheckbox(target);
    }
    dispatchCellEvent(widget, target, 2048, null);
  }
   else if ($equals_5('focusout', type)) {
    maybeFireChangeEvent(widget);
    focusedInput = null;
    $createHtmlEvent($doc, 'focus');
    dispatchCellEvent(widget, target, 4096, null);
  }
   else 
    ($equals_5('load', type) || $equals_5('error', type)) && dispatchEvent_1(event_0, widget.element, listener);
}

function isCheckbox(elem){
  var inputType;
  if (!elem || !$equalsIgnoreCase('input', $getTagName(elem))) {
    return false;
  }
  inputType = elem.type.toLowerCase();
  return $equals_5('checkbox', inputType) || $equals_5('radio', inputType);
}

function maybeFireChangeEvent(widget){
  var changeEvent, newValue, target;
  if (!focusedInput) {
    return;
  }
  newValue = getInputValue(focusedInput);
  if (!equals__devirtual$(newValue, focusedInputValue)) {
    focusedInputValue = newValue;
    target = focusedInput;
    changeEvent = $createHtmlEvent($doc, 'change');
    dispatchCellEvent(widget, target, 1024, changeEvent);
  }
}

defineSeed(361, 360, {}, CellBasedWidgetImplTrident_0);
_.changeEventTriggers = null;
_.loadEventsInitialized = false;
var dispatchFocusEvent = null, focusedInput = null, focusedInputChangesOnBlurOnly = false, focusedInputValue = null, inputTypes = null;
function CellBasedWidgetImplTrident$1_0(val$widget){
  this.val$widget = val$widget;
}

defineSeed(362, 1, {}, CellBasedWidgetImplTrident$1_0);
_.execute_0 = function execute_8(){
  maybeFireChangeEvent(this.val$widget);
}
;
_.val$widget = null;
function $setFieldUpdater(this$static, fieldUpdater){
  this$static.fieldUpdater = fieldUpdater;
}

function Column_0(cell){
  this.cell = cell;
}

defineSeed(363, 1, makeCastMap([Q$HasCell, Q$Column]));
_.getCell = function getCell(){
  return this.cell;
}
;
_.getFieldUpdater = function getFieldUpdater(){
  return this.fieldUpdater;
}
;
_.cell = null;
_.fieldUpdater = null;
function Column$1_0(this$0, val$index, val$object){
  this.this$0 = this$0;
  this.val$index = val$index;
  this.val$object = val$object;
}

defineSeed(364, 1, {}, Column$1_0);
_.update_0 = function update_0(value){
  this.this$0.fieldUpdater.update(this.val$index, this.val$object, value);
}
;
_.this$0 = null;
_.val$index = 0;
_.val$object = null;
function ColumnSortList_0(){
  this.infos = new ArrayList_0;
}

defineSeed(365, 1, makeCastMap([Q$ColumnSortList]), ColumnSortList_0);
_.equals$ = function equals_7(obj){
  var other;
  if (obj === this) {
    return true;
  }
   else if (!instanceOf(obj, Q$ColumnSortList)) {
    return false;
  }
  other = dynamicCast(obj, Q$ColumnSortList);
  return $equals(this.infos, other.infos);
}
;
_.hashCode$ = function hashCode_9(){
  return 31 * $hashCode(this.infos) + 13;
}
;
function $doSetColumnWidth(this$static, column, width){
  if (width == null) {
    $ensureTableColElement(this$static.tableData, column).style['width'] = '';
    $ensureTableColElement(this$static.tableHeader, column).style['width'] = '';
    $ensureTableColElement(this$static.tableFooter, column).style['width'] = '';
  }
   else {
    $ensureTableColElement(this$static.tableData, column).style['width'] = width;
    $ensureTableColElement(this$static.tableHeader, column).style['width'] = width;
    $ensureTableColElement(this$static.tableFooter, column).style['width'] = width;
  }
}

function $onLoadingStateChanged(this$static, state){
  var message;
  message = this$static.tableData;
  state == ($clinit_LoadingStateChangeEvent$LoadingState() , LOADING)?(message = this$static.loadingIndicatorContainer):state == LOADED && $isEmpty_0(this$static.presenter) && (message = this$static.emptyTableWidgetContainer);
  $setWidget_0(this$static.tableDataScroller, message);
  $fireEvent_0(this$static, new LoadingStateChangeEvent_0);
}

function DataGrid_0(){
  DataGrid_1.call(this, !DEFAULT_RESOURCES && (DEFAULT_RESOURCES = new DataGrid_Resources_default_StaticClientBundleGenerator_0));
}

function DataGrid_1(){
  DataGrid_2.call(this, createDefaultLoadingIndicator());
}

function DataGrid_2(loadingIndicator){
  AbstractCellTable_0.call(this, new HeaderPanel_0, new DataGrid$ResourcesAdapter_0);
  this.headerPanel = this.widget;
  this.style_0 = ($clinit_DataGrid_Resources_default_StaticClientBundleGenerator$dataGridStyleInitializer() , $clinit_DataGrid_Resources_default_StaticClientBundleGenerator() , dataGridStyle);
  $ensureInjected_0(this.style_0);
  this.tableHeader = new DataGrid$TableWidget_0;
  this.tableHeader.section = this.tableHeader.tableElem.createTHead();
  this.tableFooter = new DataGrid$TableWidget_0;
  this.tableFooter.section = this.tableFooter.tableElem.createTFoot();
  this.tableHeaderContainer = new SimplePanel_2(this.tableHeader);
  this.tableFooterContainer = new SimplePanel_2(this.tableFooter);
  $setHeaderWidget(this.headerPanel, this.tableHeaderContainer);
  this.tableHeaderScroller = $getParentElement(this.tableHeaderContainer.element);
  $setFooterWidget(this.headerPanel, this.tableFooterContainer);
  this.tableFooterScroller = $getParentElement(this.tableFooterContainer.element);
  this.tableHeaderScroller.style['overflow'] = ($clinit_Style$Overflow() , 'hidden');
  this.tableFooterScroller.style['overflow'] = 'hidden';
  this.tableData = new DataGrid$TableWidget_0;
  if (this.tableData.tableElem.tBodies.length > 0) {
    this.tableData.section = this.tableData.tableElem.tBodies[0];
  }
   else {
    this.tableData.section = $createElement($doc, 'tbody');
    $appendChild(this.tableData.tableElem, this.tableData.section);
  }
  this.tableDataScroller = new CustomScrollPanel_1(this.tableData);
  $setHeight(this.tableDataScroller, '100%');
  $setContentWidget(this.headerPanel, this.tableDataScroller);
  this.tableDataContainer = $getParentElement(this.tableData.element);
  this.tableDataContainer.style['display'] = ($clinit_Style$Display() , 'block');
  this.emptyTableWidgetContainer = new FlexTable_0;
  this.emptyTableWidgetContainer.element.setAttribute('align', 'center');
  this.loadingIndicatorContainer = new FlexTable_0;
  this.loadingIndicatorContainer.element.setAttribute('align', 'center');
  $setWidget_1(this.loadingIndicatorContainer, 0, 0, loadingIndicator);
  $addScrollHandler_0(this.tableDataScroller, new DataGrid$1_0(this));
}

function createDefaultLoadingIndicator(){
  var image, loadingImg;
  loadingImg = ($clinit_DataGrid_Resources_default_StaticClientBundleGenerator$dataGridLoadingInitializer() , $clinit_DataGrid_Resources_default_StaticClientBundleGenerator() , dataGridLoading);
  if (!loadingImg) {
    return null;
  }
  image = new Image_2(loadingImg);
  image.element.style['marginTop'] = 30 + ($clinit_Style$Unit() , 'px');
  return image;
}

defineSeed(366, 341, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasVisibility, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$HasData]), DataGrid_0);
_.onResize_0 = function onResize_1(){
  $scheduledLayout(this.headerPanel);
}
;
_.emptyTableWidgetContainer = null;
_.headerPanel = null;
_.loadingIndicatorContainer = null;
_.style_0 = null;
_.tableData = null;
_.tableDataContainer = null;
_.tableDataScroller = null;
_.tableFooter = null;
_.tableFooterContainer = null;
_.tableFooterScroller = null;
_.tableHeader = null;
_.tableHeaderContainer = null;
_.tableHeaderScroller = null;
var DEFAULT_RESOURCES = null;
function DataGrid$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(367, 1, makeCastMap([Q$ScrollHandler, Q$EventHandler]), DataGrid$1_0);
_.onScroll = function onScroll(event_0){
  var scrollLeft;
  scrollLeft = $getScrollLeft(this.this$0.tableDataScroller.scrollableElem);
  $setScrollLeft(this.this$0.tableHeaderScroller, scrollLeft);
  $setScrollLeft(this.this$0.tableFooterScroller, scrollLeft);
}
;
_.this$0 = null;
function DataGrid$ResourcesAdapter_0(){
  $clinit_DataGrid_Resources_default_StaticClientBundleGenerator$dataGridStyleInitializer();
  $clinit_DataGrid_Resources_default_StaticClientBundleGenerator();
}

defineSeed(368, 1, {}, DataGrid$ResourcesAdapter_0);
function $ensureTableColElement(this$static, index){
  var i;
  for (i = this$static.colgroup.childNodes.length; i <= index; ++i) {
    $appendChild(this$static.colgroup, $createElement($doc, 'col'));
  }
  return $getChild(this$static.colgroup, index);
}

function $hideUnusedColumns(this$static, start){
  var colCount, i;
  colCount = this$static.colgroup.childNodes.length;
  for (i = start; i < colCount; ++i) {
    $ensureTableColElement(this$static, i).style['width'] = '0px';
  }
}

function DataGrid$TableWidget_0(){
  this.tableElem = $createElement($doc, 'table');
  this.tableElem.cellSpacing = 0;
  this.tableElem.style['tableLayout'] = ($clinit_Style$TableLayout() , 'fixed');
  this.tableElem.style['width'] = 100 + ($clinit_Style$Unit() , '%');
  $setElement(this, this.tableElem);
  this.colgroup = $createElement($doc, 'colgroup');
  $appendChild(this.tableElem, this.colgroup);
}

defineSeed(369, 344, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), DataGrid$TableWidget_0);
_.colgroup = null;
_.section = null;
_.tableElem = null;
function $clinit_DataGrid_Resources_default_StaticClientBundleGenerator(){
  $clinit_DataGrid_Resources_default_StaticClientBundleGenerator = nullMethod;
  bundledImage_None = $moduleBase + 'AB196D9D7834625802449A82C5811B43.cache.png';
  externalImage = $moduleBase + '0F89659FF3F324AE4116F700257E32BD.cache.gif';
}

function $dataGridStyleInitializer(){
  dataGridStyle = new DataGrid_Resources_default_StaticClientBundleGenerator$1_0;
}

function DataGrid_Resources_default_StaticClientBundleGenerator_0(){
  $clinit_DataGrid_Resources_default_StaticClientBundleGenerator();
}

defineSeed(370, 1, {}, DataGrid_Resources_default_StaticClientBundleGenerator_0);
var bundledImage_None, dataGridLoading = null, dataGridSortAscending = null, dataGridSortDescending = null, dataGridStyle = null, externalImage;
function $ensureInjected_0(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.GPBYFDEHG{border-top:2px solid #6f7277;padding:3px 15px;text-align:left;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden;white-space:nowrap;}.GPBYFDEIG{border-bottom:2px solid #6f7277;padding:3px 15px;text-align:left;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden;white-space:nowrap;}.GPBYFDEBG{padding:2px 15px;overflow:hidden;}.GPBYFDEFH{cursor:pointer;cursor:hand;}.GPBYFDEFH:hover{color:#6c6b6b;}.GPBYFDECG{background:#fff;}.GPBYFDEDG{border:2px solid #fff;}.GPBYFDEBH{background:#f3f7fb;}.GPBYFDECH{border:2px solid #f3f7fb;}.GPBYFDEJG{background:#eee;}.GPBYFDEKG{border:2px solid #eee;}.GPBYFDEMG{background:#ffc;}.GPBYFDENG{border:2px solid #ffc;}.GPBYFDEDH{background:#628cd5;color:white;height:auto;overflow:auto;}.GPBYFDEEH{border:2px solid #628cd5;}.GPBYFDELG{border:2px solid #d7dde8;}');
    schedule();
    return true;
  }
  return false;
}

function DataGrid_Resources_default_StaticClientBundleGenerator$1_0(){
}

defineSeed(371, 1, {}, DataGrid_Resources_default_StaticClientBundleGenerator$1_0);
_.injected = false;
function $clinit_DataGrid_Resources_default_StaticClientBundleGenerator$dataGridLoadingInitializer(){
  $clinit_DataGrid_Resources_default_StaticClientBundleGenerator$dataGridLoadingInitializer = nullMethod;
  $clinit_DataGrid_Resources_default_StaticClientBundleGenerator();
  dataGridLoading = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0(externalImage)), 0, 43, 11);
}

function $clinit_DataGrid_Resources_default_StaticClientBundleGenerator$dataGridSortAscendingInitializer(){
  $clinit_DataGrid_Resources_default_StaticClientBundleGenerator$dataGridSortAscendingInitializer = nullMethod;
  $clinit_DataGrid_Resources_default_StaticClientBundleGenerator();
  dataGridSortAscending = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0(bundledImage_None)), 11, 11, 7);
}

function $clinit_DataGrid_Resources_default_StaticClientBundleGenerator$dataGridSortDescendingInitializer(){
  $clinit_DataGrid_Resources_default_StaticClientBundleGenerator$dataGridSortDescendingInitializer = nullMethod;
  $clinit_DataGrid_Resources_default_StaticClientBundleGenerator();
  dataGridSortDescending = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0(bundledImage_None)), 0, 11, 7);
}

function $clinit_DataGrid_Resources_default_StaticClientBundleGenerator$dataGridStyleInitializer(){
  $clinit_DataGrid_Resources_default_StaticClientBundleGenerator$dataGridStyleInitializer = nullMethod;
  $dataGridStyleInitializer($clinit_DataGrid_Resources_default_StaticClientBundleGenerator());
}

function $buildRowImpl(this$static, rowValue, absRowIndex){
  var column, columnCount, context, curColumn, div, isEven, isSelected, selectionModel, td, tdClasses, tr, trClasses;
  selectionModel = this$static.cellTable.presenter.selectionModel;
  isSelected = !(!selectionModel || rowValue == null) && $isSelected(selectionModel, rowValue);
  isEven = absRowIndex % 2 == 0;
  trClasses = new StringBuilder_2(isEven?this$static.evenRowStyle:this$static.oddRowStyle);
  isSelected && $append_10(trClasses, this$static.selectedRowStyle);
  this$static.cellTable;
  tr = $startRow(this$static);
  $className(tr, $toString_0(trClasses.data));
  columnCount = this$static.cellTable.columns.size_0;
  for (curColumn = 0; curColumn < columnCount; ++curColumn) {
    column = $getColumn(this$static.cellTable, curColumn);
    tdClasses = new StringBuilder_2(this$static.cellStyle);
    $append_10(tdClasses, isEven?this$static.evenCellStyle:this$static.oddCellStyle);
    curColumn == 0 && $append_10(tdClasses, this$static.firstColumnStyle);
    isSelected && $append_10(tdClasses, this$static.selectedCellStyle);
    curColumn == columnCount - 1 && $append_10(tdClasses, this$static.lastColumnStyle);
    context = new Cell$Context_0(absRowIndex, curColumn, $getValueKey(this$static.cellTable, rowValue));
    td = $startTD(tr.delegate);
    $className(td, $toString_0(tdClasses.data));
    div = $startDiv(td.delegate);
    $endStyle($outlineStyle(div.delegate_0.stylesBuilder, $clinit_Style$OutlineStyle()).delegate);
    $renderCell(this$static, div, context, column, rowValue);
    $end_0(div.delegate_0, 'div');
    $end_0(td.delegate_0, 'td');
  }
  $end_0(tr.delegate_0, 'tr');
}

function DefaultCellTableBuilder_0(cellTable){
  this.idToCellMap = new HashMap_0;
  this.cellToIdMap = new HashMap_0;
  this.cellTable = cellTable;
  cellTable.resources;
  this.evenRowStyle = 'GPBYFDECG';
  this.oddRowStyle = 'GPBYFDEBH';
  this.selectedRowStyle = ' GPBYFDEDH';
  this.cellStyle = 'GPBYFDEBG';
  this.evenCellStyle = ' GPBYFDEDG';
  this.oddCellStyle = ' GPBYFDECH';
  this.firstColumnStyle = ' GPBYFDEEG';
  this.lastColumnStyle = ' GPBYFDEOG';
  this.selectedCellStyle = ' GPBYFDEEH';
}

defineSeed(376, 353, {}, DefaultCellTableBuilder_0);
_.cellStyle = null;
_.evenCellStyle = null;
_.evenRowStyle = null;
_.firstColumnStyle = null;
_.lastColumnStyle = null;
_.oddCellStyle = null;
_.oddRowStyle = null;
_.selectedCellStyle = null;
_.selectedRowStyle = null;
function $appendExtraStyles(header){
  if (!header) {
    return;
  }
}

function $buildHeaderOrFooterImpl(this$static){
  var className, classesBuilder, column, columnCount, context, curColumn, hasHeader, header, i, isFooter, prevColspan, prevHeader, sortList, table, th, tr;
  table = this$static.table;
  isFooter = this$static.isFooter;
  columnCount = table.columns.size_0;
  if (columnCount == 0) {
    return false;
  }
  hasHeader = false;
  for (i = 0; i < columnCount; ++i) {
    if (this$static.isFooter?$getFooter(this$static.table, i):$getHeader(this$static.table, i)) {
      hasHeader = true;
      break;
    }
  }
  if (!hasHeader) {
    return false;
  }
  sortList = table.sortList;
  sortList.infos.size_0 == 0?null:throwClassCastExceptionUnlessNull($get_8(sortList.infos, 0));
  this$static.table.resources;
  className = this$static.isFooter?'GPBYFDEHG':'GPBYFDEIG';
  prevHeader = this$static.isFooter?$getFooter(this$static.table, 0):$getHeader(this$static.table, 0);
  column = $getColumn(this$static.table, 0);
  prevColspan = 1;
  classesBuilder = new StringBuilder_2(className);
  $append_1(classesBuilder.data, ' ' + (isFooter?'GPBYFDEFG':'GPBYFDEGG'));
  tr = $startRow_0(this$static);
  for (curColumn = 1; curColumn < columnCount; ++curColumn) {
    header = this$static.isFooter?$getFooter(this$static.table, curColumn):$getHeader(this$static.table, curColumn);
    if (header != prevHeader) {
      $appendExtraStyles(prevHeader);
      th = dynamicCast($className($colSpan($startTH(tr.delegate), prevColspan), $toString_0(classesBuilder.data)), Q$TableCellBuilder);
      $enableColumnHandlers(this$static, th, column);
      if (prevHeader) {
        context = new Cell$Context_0(0, curColumn - prevColspan, prevHeader.text_0);
        $renderSortableHeader(this$static, th, context, prevHeader, false);
      }
      $end_0(th.delegate_0, 'th');
      prevHeader = header;
      prevColspan = 1;
      classesBuilder = new StringBuilder_2(className);
    }
     else {
      ++prevColspan;
    }
    column = ($checkColumnBounds(table, curColumn) , dynamicCast($get_8(table.columns, curColumn), Q$Column));
  }
  $append_10(($append_1(classesBuilder.data, ' ') , classesBuilder), isFooter?'GPBYFDEPG':'GPBYFDEAH');
  $appendExtraStyles(prevHeader);
  th = dynamicCast($className($colSpan($startTH(tr.delegate), prevColspan), $toString_0(classesBuilder.data)), Q$TableCellBuilder);
  $enableColumnHandlers(this$static, th, column);
  if (prevHeader) {
    context = new Cell$Context_0(0, curColumn - prevColspan, prevHeader.text_0);
    $renderSortableHeader(this$static, th, context, prevHeader, false);
  }
  $end_0(th.delegate_0, 'th');
  $end_0(tr.delegate_0, 'tr');
  return true;
}

function DefaultHeaderOrFooterBuilder_0(table, isFooter){
  AbstractHeaderOrFooterBuilder_0.call(this, table, isFooter);
}

defineSeed(377, 358, {}, DefaultHeaderOrFooterBuilder_0);
function $addCellPreviewHandler_0(this$static, handler){
  return $addHandler_1(this$static.view, handler, (!TYPE_17 && (TYPE_17 = new GwtEvent$Type_0) , TYPE_17));
}

function $addRangeChangeHandler_0(this$static, handler){
  return $addHandler_1(this$static.view, handler, (!TYPE_18 && (TYPE_18 = new GwtEvent$Type_0) , TYPE_18));
}

function $calculateModifiedRanges(modifiedRows, pageStart, pageEnd){
  var diff, i, index, maxDiff, rangeEnd0, rangeEnd1, rangeLength0, rangeLength1, rangeStart0, rangeStart1, toRet;
  sortJsArrayInteger(modifiedRows);
  rangeStart0 = -1;
  rangeEnd0 = -1;
  rangeStart1 = -1;
  rangeEnd1 = -1;
  maxDiff = 0;
  for (i = 0; i < modifiedRows.length; ++i) {
    index = modifiedRows[i];
    if (index < pageStart || index >= pageEnd) {
      continue;
    }
     else if (rangeStart0 == -1) {
      rangeStart0 = index;
      rangeEnd0 = index;
    }
     else if (rangeStart1 == -1) {
      maxDiff = index - rangeEnd0;
      rangeStart1 = index;
      rangeEnd1 = index;
    }
     else {
      diff = index - rangeEnd1;
      if (diff > maxDiff) {
        rangeEnd0 = rangeEnd1;
        rangeStart1 = index;
        rangeEnd1 = index;
        maxDiff = diff;
      }
       else {
        rangeEnd1 = index;
      }
    }
  }
  rangeEnd0 += 1;
  rangeEnd1 += 1;
  if (rangeStart1 == rangeEnd0) {
    rangeEnd0 = rangeEnd1;
    rangeStart1 = -1;
    rangeEnd1 = -1;
  }
  toRet = new ArrayList_0;
  if (rangeStart0 != -1) {
    rangeLength0 = rangeEnd0 - rangeStart0;
    $add_19(toRet, new Range_1(rangeStart0, rangeLength0));
  }
  if (rangeStart1 != -1) {
    rangeLength1 = rangeEnd1 - rangeStart1;
    $add_19(toRet, new Range_1(rangeStart1, rangeLength1));
  }
  return toRet;
}

function $clearSelectionModel(this$static){
  if (this$static.selectionHandler) {
    $removeHandler(this$static.selectionHandler.real);
    this$static.selectionHandler = null;
  }
  this$static.selectionModel = null;
}

function $ensurePendingState(this$static){
  !this$static.pendingState && (this$static.pendingState = new HasDataPresenter$PendingState_0(this$static.state));
  this$static.pendingStateCommand = new HasDataPresenter$2_0(this$static);
  $scheduleFinally_0(this$static.pendingStateCommand);
  return this$static.pendingState;
}

function $findIndexOfBestMatch(state, value, initialIndex){
  var bestMatchDiff, bestMatchIndex, curValue, diff, i, rowDataCount;
  if (value == null) {
    return -1;
  }
  bestMatchIndex = -1;
  bestMatchDiff = 2147483647;
  rowDataCount = state.rowData.size_0;
  for (i = 0; i < rowDataCount; ++i) {
    curValue = $get_8(state.rowData, i);
    if (equals__devirtual$(value, curValue)) {
      diff = initialIndex - i < 0?-(initialIndex - i):initialIndex - i;
      if (diff < bestMatchDiff) {
        bestMatchIndex = i;
        bestMatchDiff = diff;
      }
    }
  }
  return bestMatchIndex;
}

function $getCurrentState(this$static){
  return !this$static.pendingState?this$static.state:this$static.pendingState;
}

function $getKeyboardSelectedRow(this$static){
  return ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.keyboardSelectionPolicy?-1:(!this$static.pendingState?this$static.state:this$static.pendingState).keyboardSelectedRow;
}

function $getVisibleItem(this$static, indexOnPage){
  return $getRowDataValue(!this$static.pendingState?this$static.state:this$static.pendingState, indexOnPage);
}

function $getVisibleItemCount(this$static){
  return (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.size_0;
}

function $getVisibleRange(this$static){
  return new Range_1((!this$static.pendingState?this$static.state:this$static.pendingState).pageStart, (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize);
}

function $isEmpty_0(this$static){
  return (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact && (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount == 0;
}

function $resolvePendingState(this$static, modifiedRows){
  var absStart, bestMatchIndex, e, i, isSelected, keyboardRowChanged, length_0, modifiedRanges, newSelectedRow, newState, newValue, newValueWasSelected, newlySelectedRows, oldPageSize, oldPageStart, oldRowDataCount, oldSelectedRow, oldState, oldValue, oldValueWasSelected, pageEnd, pageSize, pageStart, range, range$iterator, range0, range1, redrawRequired, relStart, replaceDiff, replaceValues, replacedEmptyRange, replacedRange, replacedRange$iterator, rowDataCount, rowValue, start, wasSelected, cacheSize, curPageSize;
  this$static.pendingStateCommand = null;
  if (this$static.isResolvingState) {
    return false;
  }
  this$static.isResolvingState = true;
  if (!this$static.pendingState) {
    this$static.isResolvingState = false;
    this$static.pendingStateLoop = 0;
    return false;
  }
  ++this$static.pendingStateLoop;
  if (this$static.pendingStateLoop > 10) {
    this$static.isResolvingState = false;
    this$static.pendingStateLoop = 0;
    throw new IllegalStateException_1('A possible infinite loop has been detected in a Cell Widget. This usually happens when your SelectionModel triggers a SelectionChangeEvent when SelectionModel.isSelection() is called, which causes the table to redraw continuously.');
  }
  oldState = this$static.state;
  newState = this$static.pendingState;
  this$static.state = this$static.pendingState;
  this$static.pendingState = null;
  !modifiedRows && (modifiedRows = []);
  pageStart = newState.pageStart;
  pageSize = newState.pageSize;
  pageEnd = pageStart + pageSize;
  rowDataCount = newState.rowData.size_0;
  newState.keyboardSelectedRow = max(0, min(newState.keyboardSelectedRow, rowDataCount - 1));
  if (($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.keyboardSelectionPolicy) {
    newState.keyboardSelectedRow = 0;
    newState.keyboardSelectedRowValue = null;
  }
   else if (newState.keyboardSelectedRowChanged) {
    newState.keyboardSelectedRowValue = rowDataCount > 0?$getRowDataValue(newState, newState.keyboardSelectedRow):null;
  }
   else if (newState.keyboardSelectedRowValue != null) {
    bestMatchIndex = $findIndexOfBestMatch(newState, newState.keyboardSelectedRowValue, newState.keyboardSelectedRow);
    if (bestMatchIndex >= 0) {
      newState.keyboardSelectedRow = bestMatchIndex;
      newState.keyboardSelectedRowValue = rowDataCount > 0?$getRowDataValue(newState, newState.keyboardSelectedRow):null;
    }
     else {
      newState.keyboardSelectedRow = 0;
      newState.keyboardSelectedRowValue = null;
    }
  }
  try {
    if (BOUND_TO_SELECTION == this$static.keyboardSelectionPolicy && !!this$static.selectionModel && newState.viewTouched) {
      oldValue = oldState.selectedValue;
      newValue = rowDataCount > 0?$getRowDataValue(newState, newState.keyboardSelectedRow):null;
      if (newValue != null) {
        oldValueWasSelected = oldValue != null && $isSelected(this$static.selectionModel, oldValue);
        newValueWasSelected = newValue != null && $isSelected(this$static.selectionModel, newValue);
        if (equals__devirtual$(newValue, oldValue)) {
          newValueWasSelected || (newState.selectedValue = null);
        }
         else {
          oldValueWasSelected && $setSelected_0(this$static.selectionModel, oldValue, false);
          newState.selectedValue = newValue;
          newValue != null && !newValueWasSelected && $setSelected_0(this$static.selectionModel, newValue, true);
        }
      }
    }
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RuntimeException)) {
      e = $e0;
      this$static.isResolvingState = false;
      this$static.pendingStateLoop = 0;
      throw e;
    }
     else 
      throw $e0;
  }
  keyboardRowChanged = newState.keyboardSelectedRowChanged || oldState.keyboardSelectedRow != newState.keyboardSelectedRow || oldState.keyboardSelectedRowValue == null && newState.keyboardSelectedRowValue != null;
  newlySelectedRows = new HashSet_0;
  try {
    for (i = pageStart; i < pageStart + rowDataCount; ++i) {
      rowValue = $get_8(newState.rowData, i - pageStart);
      isSelected = rowValue != null && !!this$static.selectionModel && $isSelected(this$static.selectionModel, rowValue);
      wasSelected = $contains_1(oldState.selectedRows, valueOf_1(i));
      if (isSelected) {
        $add_20(newState.selectedRows, valueOf_1(i));
        $add_20(newlySelectedRows, valueOf_1(i));
        wasSelected || $push(modifiedRows, i);
      }
       else 
        wasSelected && $push(modifiedRows, i);
    }
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RuntimeException)) {
      e = $e0;
      this$static.isResolvingState = false;
      this$static.pendingStateLoop = 0;
      throw e;
    }
     else 
      throw $e0;
  }
  replacedEmptyRange = false;
  for (replacedRange$iterator = new AbstractList$IteratorImpl_0(newState.replacedRanges); replacedRange$iterator.i < replacedRange$iterator.this$0_0.size_1();) {
    replacedRange = dynamicCast($next_4(replacedRange$iterator), Q$Range);
    start = replacedRange.start;
    length_0 = replacedRange.length_0;
    length_0 == 0 && (replacedEmptyRange = true);
    for (i = start; i < start + length_0; ++i) {
      $push(modifiedRows, i);
    }
  }
  if (modifiedRows.length > 0 && keyboardRowChanged) {
    $push(modifiedRows, oldState.keyboardSelectedRow);
    $push(modifiedRows, newState.keyboardSelectedRow);
  }
  if (this$static.pendingState) {
    this$static.isResolvingState = false;
    this$static.pendingState.selectedValue = newState.selectedValue;
    $addAll(this$static.pendingState.selectedRows, newlySelectedRows);
    keyboardRowChanged && (this$static.pendingState.keyboardSelectedRowChanged = true);
    newState.keyboardStealFocus && (this$static.pendingState.keyboardStealFocus = true);
    $push(modifiedRows, oldState.keyboardSelectedRow);
    $push(modifiedRows, newState.keyboardSelectedRow);
    if ($resolvePendingState(this$static, modifiedRows)) {
      return true;
    }
  }
  modifiedRanges = $calculateModifiedRanges(modifiedRows, pageStart, pageEnd);
  range0 = modifiedRanges.size_0 > 0?(checkIndex(0, modifiedRanges.size_0) , dynamicCast(modifiedRanges.array[0], Q$Range)):null;
  range1 = modifiedRanges.size_0 > 1?(checkIndex(1, modifiedRanges.size_0) , dynamicCast(modifiedRanges.array[1], Q$Range)):null;
  replaceDiff = 0;
  for (range$iterator = new AbstractList$IteratorImpl_0(modifiedRanges); range$iterator.i < range$iterator.this$0_0.size_1();) {
    range = dynamicCast($next_4(range$iterator), Q$Range);
    replaceDiff += range.length_0;
  }
  oldPageStart = oldState.pageStart;
  oldPageSize = oldState.pageSize;
  oldRowDataCount = oldState.rowData.size_0;
  redrawRequired = newState.redrawRequired;
  pageStart != oldPageStart?(redrawRequired = true):rowDataCount < oldRowDataCount?(redrawRequired = true):!range1 && !!range0 && range0.start == pageStart && (replaceDiff >= oldRowDataCount || replaceDiff > oldPageSize)?(redrawRequired = true):replaceDiff >= 5 && replaceDiff > 0.3 * oldRowDataCount?(redrawRequired = true):replacedEmptyRange && oldRowDataCount == 0 && (redrawRequired = true);
  cacheSize = (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.size_0;
  curPageSize = (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact?min((!this$static.pendingState?this$static.state:this$static.pendingState).pageSize, (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount - (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart):(!this$static.pendingState?this$static.state:this$static.pendingState).pageSize;
  cacheSize >= curPageSize?$setLoadingState(this$static.view, ($clinit_LoadingStateChangeEvent$LoadingState() , LOADED)):cacheSize == 0?$setLoadingState(this$static.view, ($clinit_LoadingStateChangeEvent$LoadingState() , LOADING)):$setLoadingState(this$static.view, ($clinit_LoadingStateChangeEvent$LoadingState() , PARTIALLY_LOADED));
  try {
    if (redrawRequired) {
      new SafeHtmlBuilder_0;
      $replaceAllChildren_0(this$static.view, newState.rowData, newState.keyboardStealFocus);
      $resetFocus_0(this$static.view);
    }
     else if (range0) {
      absStart = range0.start;
      relStart = absStart - pageStart;
      new SafeHtmlBuilder_0;
      replaceValues = new AbstractList$SubList_0(newState.rowData, relStart, relStart + range0.length_0);
      $replaceChildren_1(this$static.view, replaceValues, relStart, newState.keyboardStealFocus);
      if (range1) {
        absStart = range1.start;
        relStart = absStart - pageStart;
        new SafeHtmlBuilder_0;
        replaceValues = new AbstractList$SubList_0(newState.rowData, relStart, relStart + range1.length_0);
        $replaceChildren_1(this$static.view, replaceValues, relStart, newState.keyboardStealFocus);
      }
      $resetFocus_0(this$static.view);
    }
     else if (keyboardRowChanged) {
      oldSelectedRow = oldState.keyboardSelectedRow;
      oldSelectedRow >= 0 && oldSelectedRow < rowDataCount && $setKeyboardSelected_0(this$static.view, oldSelectedRow, false, false);
      newSelectedRow = newState.keyboardSelectedRow;
      newSelectedRow >= 0 && newSelectedRow < rowDataCount && $setKeyboardSelected_0(this$static.view, newSelectedRow, true, newState.keyboardStealFocus);
    }
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Error)) {
      e = $e0;
      throw new RuntimeException_2(e);
    }
     else 
      throw $e0;
  }
   finally {
    this$static.isResolvingState = false;
  }
  $resolvePendingState(this$static, null);
  return true;
}

function $scheduleFinally_0(command){
  $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_0), command);
}

function $setKeyboardSelectedRow_2(this$static, index, stealFocus, forceUpdate){
  var absIndex, newPageSize, newPageStart, pageSize, pageStart, pending, rowCount, shift;
  if (($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.keyboardSelectionPolicy) {
    return;
  }
  this$static.keyboardPagingPolicy.isLimitedToRange && (index = max(0, min(index, (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.size_0 - 1)));
  $ensurePendingState(this$static).viewTouched = true;
  if (!forceUpdate && (DISABLED == this$static.keyboardSelectionPolicy?-1:(!this$static.pendingState?this$static.state:this$static.pendingState).keyboardSelectedRow) == index && (DISABLED == this$static.keyboardSelectionPolicy?null:(!this$static.pendingState?this$static.state:this$static.pendingState).keyboardSelectedRowValue) != null) {
    return;
  }
  pageStart = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart;
  pageSize = (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize;
  rowCount = (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount;
  absIndex = pageStart + index;
  absIndex >= rowCount && (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact && (absIndex = rowCount - 1);
  index = (0 > absIndex?0:absIndex) - pageStart;
  this$static.keyboardPagingPolicy.isLimitedToRange && (index = 0 > (index < pageSize - 1?index:pageSize - 1)?0:index < pageSize - 1?index:pageSize - 1);
  newPageStart = pageStart;
  newPageSize = pageSize;
  pending = $ensurePendingState(this$static);
  pending.keyboardSelectedRow = 0;
  pending.keyboardSelectedRowValue = null;
  pending.keyboardSelectedRowChanged = true;
  if (index >= 0 && index < pageSize) {
    pending.keyboardSelectedRow = index;
    pending.keyboardSelectedRowValue = index < pending.rowData.size_0?$getRowDataValue($ensurePendingState(this$static), index):null;
    pending.keyboardStealFocus = stealFocus;
    return;
  }
   else if (($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE) == this$static.keyboardPagingPolicy) {
    while (index < 0) {
      shift = pageSize < newPageStart?pageSize:newPageStart;
      newPageStart -= shift;
      index += shift;
    }
    while (index >= pageSize) {
      newPageStart += pageSize;
      index -= pageSize;
    }
  }
   else if (INCREASE_RANGE == this$static.keyboardPagingPolicy) {
    while (index < 0) {
      shift = 30 < newPageStart?30:newPageStart;
      newPageSize += shift;
      newPageStart -= shift;
      index += shift;
    }
    while (index >= newPageSize) {
      newPageSize += 30;
    }
    if ((!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact) {
      newPageSize = newPageSize < rowCount - newPageStart?newPageSize:rowCount - newPageStart;
      index >= rowCount && (index = rowCount - 1);
    }
  }
  if (newPageStart != pageStart || newPageSize != pageSize) {
    pending.keyboardSelectedRow = index;
    $setVisibleRange_0(this$static, new Range_1(newPageStart, newPageSize), false);
  }
}

function $setRowCount_1(this$static, count, isExact){
  if (count == (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount && isExact == (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact) {
    return;
  }
  $ensurePendingState(this$static).rowCount = count;
  $ensurePendingState(this$static).rowCountIsExact = isExact;
  $updateCachedData(this$static);
}

function $setRowData_1(this$static, start, values){
  var boundedEnd, boundedStart, cacheOffset, dataIndex, i, pageEnd, pageStart, pending, value, valuesEnd, valuesLength;
  valuesLength = values.size_1();
  valuesEnd = start + valuesLength;
  pageStart = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart;
  pageEnd = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart + (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize;
  boundedStart = start > pageStart?start:pageStart;
  boundedEnd = valuesEnd < pageEnd?valuesEnd:pageEnd;
  if (start != pageStart && boundedStart >= boundedEnd) {
    return;
  }
  pending = $ensurePendingState(this$static);
  cacheOffset = max(0, boundedStart - pageStart - (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.size_0);
  for (i = 0; i < cacheOffset; ++i) {
    $add_19(pending.rowData, null);
  }
  for (i = boundedStart; i < boundedEnd; ++i) {
    value = values.get_0(i - start);
    dataIndex = i - pageStart;
    dataIndex < (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.size_0?$set_5(pending.rowData, dataIndex, value):$add_19(pending.rowData, value);
  }
  $add_19(pending.replacedRanges, new Range_1(boundedStart - cacheOffset, boundedEnd - (boundedStart - cacheOffset)));
  valuesEnd > (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount && $setRowCount_1(this$static, valuesEnd, (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact);
}

function $setSelectionModel_0(this$static, selectionModel){
  $clearSelectionModel(this$static);
  this$static.selectionModel = selectionModel;
  !!selectionModel && (this$static.selectionHandler = $addSelectionChangeHandler(selectionModel, new HasDataPresenter$1_0(this$static)));
  $ensurePendingState(this$static);
}

function $setVisibleRange_0(this$static, range, clearData){
  var decrease, i, increase, length_0, pageSize, pageSizeChanged, pageStart, pageStartChanged, pending, start;
  start = range.start;
  length_0 = range.length_0;
  if (start < 0) {
    throw new IllegalArgumentException_1('Range start cannot be less than 0');
  }
  if (length_0 < 0) {
    throw new IllegalArgumentException_1('Range length cannot be less than 0');
  }
  pageStart = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart;
  pageSize = (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize;
  pageStartChanged = pageStart != start;
  if (pageStartChanged) {
    pending = $ensurePendingState(this$static);
    if (!clearData) {
      if (start > pageStart) {
        increase = start - pageStart;
        if ((!this$static.pendingState?this$static.state:this$static.pendingState).rowData.size_0 > increase) {
          for (i = 0; i < increase; ++i) {
            $remove_18(pending.rowData, 0);
          }
        }
         else {
          $clear_5(pending.rowData);
        }
      }
       else {
        decrease = pageStart - start;
        if ((!this$static.pendingState?this$static.state:this$static.pendingState).rowData.size_0 > 0 && decrease < pageSize) {
          for (i = 0; i < decrease; ++i) {
            $add_18(pending.rowData, 0, null);
          }
          $add_19(pending.replacedRanges, new Range_1(start, start + decrease - start));
        }
         else {
          $clear_5(pending.rowData);
        }
      }
    }
    pending.pageStart = start;
  }
  pageSizeChanged = pageSize != length_0;
  pageSizeChanged && ($ensurePendingState(this$static).pageSize = length_0);
  clearData && $clear_5($ensurePendingState(this$static).rowData);
  $updateCachedData(this$static);
  (pageStartChanged || pageSizeChanged) && fire_6(this$static.display_0, new Range_1((!this$static.pendingState?this$static.state:this$static.pendingState).pageStart, (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize));
}

function $updateCachedData(this$static){
  var expectedLastIndex, lastIndex, pageStart;
  pageStart = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart;
  expectedLastIndex = max(0, min((!this$static.pendingState?this$static.state:this$static.pendingState).pageSize, (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount - pageStart));
  lastIndex = (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.size_0 - 1;
  while (lastIndex >= expectedLastIndex) {
    $remove_18($ensurePendingState(this$static).rowData, lastIndex);
    --lastIndex;
  }
}

function HasDataPresenter_0(display, view){
  this.keyboardPagingPolicy = ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE);
  this.keyboardSelectionPolicy = ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , ENABLED);
  this.display_0 = display;
  this.view = view;
  this.state = new HasDataPresenter$DefaultState_0(50);
}

function sortJsArrayInteger(array){
  array.sort(function(x, y){
    return x - y;
  }
  );
}

defineSeed(378, 1, makeCastMap([Q$HasHandlers, Q$HasData]), HasDataPresenter_0);
_.fireEvent_0 = function fireEvent_2(event_0){
  throw new UnsupportedOperationException_0;
}
;
_.getVisibleRange = function getVisibleRange_0(){
  return $getVisibleRange(this);
}
;
_.setRowCount = function setRowCount_0(count, isExact){
  $setRowCount_1(this, count, isExact);
}
;
_.setRowData = function setRowData_0(start, values){
  $setRowData_1(this, start, values);
}
;
_.display_0 = null;
_.isResolvingState = false;
_.pendingState = null;
_.pendingStateCommand = null;
_.pendingStateLoop = 0;
_.selectionHandler = null;
_.selectionModel = null;
_.state = null;
_.view = null;
function HasDataPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(379, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), HasDataPresenter$1_0);
_.onSelectionChange = function onSelectionChange(event_0){
  $ensurePendingState(this.this$0);
}
;
_.this$0 = null;
function HasDataPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(380, 1, {}, HasDataPresenter$2_0);
_.execute_0 = function execute_9(){
  this.this$0.pendingStateCommand == this && $resolvePendingState(this.this$0, null);
}
;
_.this$0 = null;
function $getRowDataValue(this$static, index){
  return $get_8(this$static.rowData, index);
}

function HasDataPresenter$DefaultState_0(pageSize){
  this.rowData = new ArrayList_0;
  this.selectedRows = new HashSet_0;
  this.pageSize = pageSize;
}

defineSeed(381, 1, {}, HasDataPresenter$DefaultState_0);
_.keyboardSelectedRow = 0;
_.keyboardSelectedRowValue = null;
_.pageSize = 0;
_.pageStart = 0;
_.rowCount = 0;
_.rowCountIsExact = false;
_.selectedValue = null;
_.viewTouched = false;
function HasDataPresenter$PendingState_0(state){
  var i, rowDataSize;
  HasDataPresenter$DefaultState_0.call(this, state.pageSize);
  this.replacedRanges = new ArrayList_0;
  this.keyboardSelectedRow = state.keyboardSelectedRow;
  this.keyboardSelectedRowValue = state.keyboardSelectedRowValue;
  this.pageSize = state.pageSize;
  this.pageStart = state.pageStart;
  this.rowCount = state.rowCount;
  this.rowCountIsExact = state.rowCountIsExact;
  this.selectedValue = state.selectedValue;
  this.viewTouched = state.viewTouched;
  rowDataSize = state.rowData.size_0;
  for (i = 0; i < rowDataSize; ++i) {
    $add_19(this.rowData, $get_8(state.rowData, i));
  }
}

defineSeed(382, 381, {}, HasDataPresenter$PendingState_0);
_.keyboardSelectedRowChanged = false;
_.keyboardStealFocus = false;
_.redrawRequired = false;
function $clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy(){
  $clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy = nullMethod;
  CURRENT_PAGE = new HasKeyboardPagingPolicy$KeyboardPagingPolicy_0('CURRENT_PAGE', 0, true);
  CHANGE_PAGE = new HasKeyboardPagingPolicy$KeyboardPagingPolicy_0('CHANGE_PAGE', 1, false);
  INCREASE_RANGE = new HasKeyboardPagingPolicy$KeyboardPagingPolicy_0('INCREASE_RANGE', 2, false);
  $VALUES_12 = initValues(_3Lcom_google_gwt_user_cellview_client_HasKeyboardPagingPolicy$KeyboardPagingPolicy_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$HasKeyboardPagingPolicy$KeyboardPagingPolicy, [CURRENT_PAGE, CHANGE_PAGE, INCREASE_RANGE]);
}

function HasKeyboardPagingPolicy$KeyboardPagingPolicy_0(enum$name, enum$ordinal, isLimitedToRange){
  Enum_0.call(this, enum$name, enum$ordinal);
  this.isLimitedToRange = isLimitedToRange;
}

function values_13(){
  $clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy();
  return $VALUES_12;
}

defineSeed(383, 31, makeCastMap([Q$HasKeyboardPagingPolicy$KeyboardPagingPolicy, Q$Serializable, Q$Comparable, Q$Enum]), HasKeyboardPagingPolicy$KeyboardPagingPolicy_0);
_.isLimitedToRange = false;
var $VALUES_12, CHANGE_PAGE, CURRENT_PAGE, INCREASE_RANGE;
function $clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy(){
  $clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy = nullMethod;
  DISABLED = new HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_0('DISABLED', 0);
  ENABLED = new HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_0('ENABLED', 1);
  BOUND_TO_SELECTION = new HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_0('BOUND_TO_SELECTION', 2);
  $VALUES_13 = initValues(_3Lcom_google_gwt_user_cellview_client_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$HasKeyboardSelectionPolicy$KeyboardSelectionPolicy, [DISABLED, ENABLED, BOUND_TO_SELECTION]);
}

function HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_14(){
  $clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy();
  return $VALUES_13;
}

defineSeed(384, 31, makeCastMap([Q$HasKeyboardSelectionPolicy$KeyboardSelectionPolicy, Q$Serializable, Q$Comparable, Q$Enum]), HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_0);
var $VALUES_13, BOUND_TO_SELECTION, DISABLED, ENABLED;
function Header_0(cell){
  this.cell = cell;
}

defineSeed(385, 1, makeCastMap([Q$Header]));
_.cell = null;
_.updater = null;
function $clinit_LoadingStateChangeEvent(){
  $clinit_LoadingStateChangeEvent = nullMethod;
  TYPE_13 = new GwtEvent$Type_0;
}

function LoadingStateChangeEvent_0(){
  $clinit_LoadingStateChangeEvent();
}

defineSeed(386, 232, {}, LoadingStateChangeEvent_0);
_.dispatch_0 = function dispatch_14(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType_0 = function getAssociatedType_15(){
  return TYPE_13;
}
;
var TYPE_13;
function LoadingStateChangeEvent$DefaultLoadingState_0(){
}

defineSeed(387, 1, {}, LoadingStateChangeEvent$DefaultLoadingState_0);
function $clinit_LoadingStateChangeEvent$LoadingState(){
  $clinit_LoadingStateChangeEvent$LoadingState = nullMethod;
  LOADING = new LoadingStateChangeEvent$DefaultLoadingState_0;
  PARTIALLY_LOADED = new LoadingStateChangeEvent$DefaultLoadingState_0;
  LOADED = new LoadingStateChangeEvent$DefaultLoadingState_0;
}

var LOADED, LOADING, PARTIALLY_LOADED;
function RowHoverEvent_0(){
}

defineSeed(388, 232, {}, RowHoverEvent_0);
_.dispatch_0 = function dispatch_15(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType_0 = function getAssociatedType_16(){
  return TYPE_14;
}
;
var TYPE_14 = null;
function TextColumn_0(){
  Column_0.call(this, new TextCell_0);
}

defineSeed(389, 363, makeCastMap([Q$HasCell, Q$Column]));
function TextHeader_0(text){
  Header_0.call(this, new TextCell_0);
  this.text_0 = text;
}

defineSeed(390, 385, makeCastMap([Q$Header]), TextHeader_0);
_.text_0 = null;
function alert_0(msg){
  $wnd.alert(msg);
}

function $addScrollHandler(this$static, handler){
  sinkEvents_1(this$static.getScrollableElement(), 16384);
  return $addHandler_0(this$static, handler, ($clinit_ScrollEvent() , $clinit_ScrollEvent() , TYPE_4));
}

function maybeRecalculateNativeScrollbarSize(){
  var content_0, scrollable;
  if (nativeHeight > -1) {
    return;
  }
  scrollable = $createElement($doc, 'div');
  scrollable.style['position'] = ($clinit_Style$Position() , 'absolute');
  scrollable.style['top'] = -1000 + ($clinit_Style$Unit() , 'px');
  scrollable.style['left'] = '-1000px';
  scrollable.style['height'] = '100px';
  scrollable.style['width'] = '100px';
  scrollable.style['overflow'] = ($clinit_Style$Overflow() , 'scroll');
  scrollable.style['direction'] = 'rtl';
  $appendChild($doc.body, scrollable);
  content_0 = $createElement($doc, 'div');
  $setInnerText(content_0, 'content');
  scrollable.appendChild(content_0);
  nativeHeight = (scrollable.offsetHeight || 0) - scrollable.clientHeight;
  nativeWidth = (scrollable.offsetWidth || 0) - scrollable.clientWidth;
  nativeRtl = $getAbsoluteLeft(content_0) > $getAbsoluteLeft(scrollable);
  $removeFromParent(scrollable);
}

defineSeed(417, 344, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.onAttach = function onAttach_1(){
  $onAttach_1(this);
  this.getScrollableElement().__listener = this;
}
;
_.onDetach = function onDetach_1(){
  this.getScrollableElement().__listener = null;
  $onDetach_1(this);
}
;
var nativeHeight = -1, nativeRtl = false, nativeWidth = -1;
function tryCommand(c, widgets){
  $clinit_AttachDetachException();
  var caught, e, w, w$index, w$max;
  caught = null;
  for (w$index = 0 , w$max = widgets.length; w$index < w$max; ++w$index) {
    w = widgets[w$index];
    try {
      !!w && c.execute_1(w.asWidget());
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, Q$Throwable)) {
        e = $e0;
        !caught && (caught = new HashSet_0);
        $add_20(caught, e);
      }
       else 
        throw $e0;
    }
  }
  if (caught) {
    throw new AttachDetachException_0(caught);
  }
}

function $setEnabled(this$static, enabled){
  this$static.element['disabled'] = !enabled;
}

defineSeed(423, 344, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.setEnabled = function setEnabled(enabled){
  $setEnabled(this, enabled);
}
;
function $setHTML(this$static, html){
  $setInnerHTML(this$static.element, html);
}

function $getValue_0(this$static){
  return this$static.attached?($clinit_Boolean() , this$static.inputElem.checked?TRUE_1:FALSE_1):($clinit_Boolean() , this$static.inputElem.defaultChecked?TRUE_1:FALSE_1);
}

function $setValue_0(this$static, value){
  var oldValue;
  !value && (value = ($clinit_Boolean() , FALSE_1));
  oldValue = this$static.attached?($clinit_Boolean() , this$static.inputElem.checked?TRUE_1:FALSE_1):($clinit_Boolean() , this$static.inputElem.defaultChecked?TRUE_1:FALSE_1);
  $setChecked(this$static.inputElem, value.value_0);
  $setDefaultChecked(this$static.inputElem, value.value_0);
  if (!!oldValue && oldValue.value_0 == value.value_0) {
    return;
  }
}

function CheckBox_0(){
  CheckBox_1.call(this, $createCheckInputElement($doc));
  this.element['className'] = 'gwt-CheckBox';
}

function CheckBox_1(elem){
  var uid;
  ButtonBase_0.call(this, $createElement($doc, 'span'));
  this.inputElem = elem;
  this.labelElem = $createElement($doc, 'label');
  $appendChild(this.element, this.inputElem);
  $appendChild(this.element, this.labelElem);
  uid = $createUniqueId($doc);
  this.inputElem['id'] = uid;
  $setHtmlFor(this.labelElem, uid);
  this.directionalTextHelper = new DirectionalTextHelper_0(this.labelElem);
  !!this.inputElem && (this.inputElem.tabIndex = 0 , undefined);
}

defineSeed(425, 422, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), CheckBox_0);
_.getTabIndex = function getTabIndex_0(){
  return this.inputElem.tabIndex;
}
;
_.onLoad = function onLoad_1(){
  this.inputElem.__listener = this;
}
;
_.onUnload = function onUnload_1(){
  this.inputElem.__listener = null;
  $setValue_0(this, this.attached?($clinit_Boolean() , this.inputElem.checked?TRUE_1:FALSE_1):($clinit_Boolean() , this.inputElem.defaultChecked?TRUE_1:FALSE_1));
}
;
_.setEnabled = function setEnabled_0(enabled){
  $setDisabled(this.inputElem, !enabled);
  enabled?$setStyleName_0(this, getStylePrimaryName(this.element) + '-disabled', false):$setStyleName_0(this, getStylePrimaryName(this.element) + '-disabled', true);
}
;
_.setFocus = function setFocus_1(focused){
  focused?(this.inputElem.focus() , undefined):(this.inputElem.blur() , undefined);
}
;
_.setTabIndex = function setTabIndex_0(index){
  !!this.inputElem && $setTabIndex(this.inputElem, index);
}
;
_.sinkEvents = function sinkEvents_2(eventBitsToAdd){
  this.eventsToSink == -1?sinkEvents_1(this.inputElem, eventBitsToAdd | (this.inputElem.__eventBits || 0)):this.eventsToSink == -1?sinkEvents_0(this.element, eventBitsToAdd | (this.element.__eventBits || 0)):(this.eventsToSink |= eventBitsToAdd);
}
;
_.directionalTextHelper = null;
_.inputElem = null;
_.labelElem = null;
function $add_4(this$static, w){
  if (this$static.widget) {
    throw new IllegalStateException_1('SimplePanel can only contain one child widget');
  }
  $setWidget(this$static, w);
  $maybeUpdateSize(this$static);
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent_0(w);
  !!this$static.widget && this$static.remove(this$static.widget);
  this$static.widget = w;
  if (w) {
    appendChild(this$static.getContainerElement(), this$static.widget.element);
    $setParent(w, this$static);
  }
}

function SimplePanel_2(child){
  SimplePanel_0.call(this);
  this.setWidget(child);
}

defineSeed(429, 415, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]), SimplePanel_2);
_.setWidget = function setWidget(w){
  $setWidget(this, w);
}
;
function $addScrollHandler_0(this$static, handler){
  sinkEvents_1(this$static.scrollableElem, 16384);
  return $addHandler_0(this$static, handler, ($clinit_ScrollEvent() , $clinit_ScrollEvent() , TYPE_4));
}

function $getMaximumHorizontalScrollPosition(this$static){
  return $getMaximumHorizontalScrollPosition_0((!impl_3 && (impl_3 = new ScrollImpl$ScrollImplTrident_0) , this$static.scrollableElem));
}

function $getMaximumVerticalScrollPosition(this$static){
  return (this$static.scrollableElem.scrollHeight || 0) - this$static.scrollableElem.clientHeight;
}

function $getMinimumHorizontalScrollPosition(this$static){
  return $getMinimumHorizontalScrollPosition_0((!impl_3 && (impl_3 = new ScrollImpl$ScrollImplTrident_0) , this$static.scrollableElem));
}

function $onResize(this$static){
  var child;
  child = this$static.widget;
  !!child && instanceOf(child, Q$RequiresResize) && dynamicCast(child, Q$RequiresResize).onResize_0();
}

function $setHorizontalScrollPosition(this$static, position){
  $setScrollLeft(this$static.scrollableElem, position);
}

function $setTouchScrollingDisabled(this$static){
  var scroller, ua;
  if (this$static.touchScroller) {
    return false;
  }
  this$static.touchScroller = (scroller = (!isSupported && (isSupported = ($clinit_Boolean() , !impl_0 && (impl_0 = new TouchEvent$TouchSupportDetector_0) , impl_0.isSupported && !(ua = navigator.userAgent.toLowerCase() , /android ([3-9]+)\.([0-9]+)/.exec(ua) != null)?TRUE_1:FALSE_1)) , isSupported.value_0?new TouchScroller_0:null) , !!scroller && $setTargetWidget(scroller, this$static) , scroller);
  return !this$static.touchScroller;
}

function $setVerticalScrollPosition(this$static, position){
  $setScrollTop(this$static.scrollableElem, position);
}

function ScrollPanel_0(root, scrollable, container){
  this.element = root;
  this.scrollableElem = scrollable;
  this.containerElem = container;
  this.setAlwaysShowScrollBars(false);
  this.scrollableElem.style['position'] = ($clinit_Style$Position() , 'relative');
  this.containerElem.style['position'] = 'relative';
  this.scrollableElem.style['zoom'] = '1';
  this.containerElem.style['zoom'] = '1';
  $setTouchScrollingDisabled(this);
  !impl_3 && (impl_3 = new ScrollImpl$ScrollImplTrident_0);
  $initialize(this.scrollableElem, this.containerElem);
}

defineSeed(428, 429, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Iterable]));
_.getContainerElement = function getContainerElement_0(){
  return this.containerElem;
}
;
_.onAttach = function onAttach_3(){
  $onAttach_1(this);
  this.scrollableElem.__listener = this;
}
;
_.onDetach = function onDetach_2(){
  this.scrollableElem.__listener = null;
  $onDetach_1(this);
}
;
_.onResize_0 = function onResize_3(){
  $onResize(this);
}
;
_.setAlwaysShowScrollBars = function setAlwaysShowScrollBars(alwaysShow){
  this.scrollableElem.style['overflow'] = (alwaysShow?($clinit_Style$Overflow() , SCROLL):($clinit_Style$Overflow() , AUTO)).getCssName();
}
;
_.setHeight_0 = function setHeight_0(height){
  setStyleAttribute(this.element, 'height', height);
}
;
_.setWidth_0 = function setWidth_0(width){
  setStyleAttribute(this.element, 'width', width);
}
;
_.containerElem = null;
_.scrollableElem = null;
_.touchScroller = null;
function $add_5(this$static, w, toReplace, layer){
  var toRet;
  if (w == toReplace) {
    return layer;
  }
  !!w && $removeFromParent_0(w);
  !!toReplace && $remove_4(this$static, !toReplace?null:toReplace);
  toRet = null;
  if (w) {
    toRet = $attachChild(this$static.layout, w.element, null);
    $setParent(w, this$static);
  }
  return toRet;
}

function $maybeUpdateScrollbarPositions(this$static){
  var hPos, vPos;
  if (!this$static.attached) {
    return;
  }
  if (this$static.hScrollbar) {
    hPos = $getScrollLeft(this$static.scrollableElem);
    $getScrollLeft(this$static.hScrollbar.scrollable) != hPos && $setHorizontalScrollPosition_0(this$static.hScrollbar, hPos);
  }
  if (this$static.vScrollbar) {
    vPos = this$static.scrollableElem.scrollTop || 0;
    (this$static.vScrollbar.scrollable.scrollTop || 0) != vPos && $setVerticalScrollPosition_0(this$static.vScrollbar, vPos);
  }
  $getScrollLeft(this$static.element) != 0 && $setScrollLeft(this$static.element, 0);
  (this$static.element.scrollTop || 0) != 0 && (this$static.element.scrollTop = 0 , undefined);
}

function $maybeUpdateScrollbars(this$static){
  var contentHeight, contentWidth, isRtl, realScrollbarHeight, realScrollbarWidth, w;
  if (!this$static.attached) {
    return;
  }
  w = this$static.widget;
  contentHeight = !w?0:w.getOffsetHeight();
  contentWidth = !w?0:w.getOffsetWidth();
  realScrollbarHeight = 0;
  realScrollbarWidth = 0;
  !!this$static.hScrollbar && (this$static.alwaysShowScrollbars || this$static.element.clientWidth < contentWidth) && (realScrollbarHeight = this$static.hScrollbarHeight);
  !!this$static.vScrollbar && (this$static.alwaysShowScrollbars || this$static.element.clientHeight < contentHeight) && (realScrollbarWidth = this$static.vScrollbarWidth);
  if (w) {
    if (realScrollbarHeight > 0) {
      w.element.style['marginBottom'] = realScrollbarHeight + ($clinit_Style$Unit() , 'px');
      contentHeight += realScrollbarHeight;
    }
     else {
      w.element.style['marginBottom'] = '';
    }
  }
  isRtl = (!impl_3 && (impl_3 = new ScrollImpl$ScrollImplTrident_0) , this$static.scrollableElem.currentStyle.direction == 'rtl');
  if (realScrollbarHeight > 0) {
    this$static.hScrollbarLayer.visible = true;
    isRtl?$setLeftRight(this$static.hScrollbarLayer, realScrollbarWidth, ($clinit_Style$Unit() , PX), 0, PX):$setLeftRight(this$static.hScrollbarLayer, 0, ($clinit_Style$Unit() , PX), realScrollbarWidth, PX);
    $setBottomHeight(this$static.hScrollbarLayer, ($clinit_Style$Unit() , PX), realScrollbarHeight, PX);
    $setScrollWidth(this$static.hScrollbar, 0 > contentWidth - realScrollbarWidth?0:contentWidth - realScrollbarWidth);
  }
   else 
    !!this$static.hScrollbarLayer && (this$static.hScrollbarLayer.visible = false , undefined);
  if (realScrollbarWidth > 0) {
    this$static.vScrollbarLayer.visible = true;
    $setTopBottom(this$static.vScrollbarLayer, ($clinit_Style$Unit() , PX), realScrollbarHeight, PX);
    isRtl?$setLeftWidth(this$static.vScrollbarLayer, PX, realScrollbarWidth, PX):$setRightWidth(this$static.vScrollbarLayer, PX, realScrollbarWidth, PX);
    $setScrollHeight(this$static.vScrollbar, 0 > contentHeight - realScrollbarHeight?0:contentHeight - realScrollbarHeight);
  }
   else 
    !!this$static.vScrollbarLayer && (this$static.vScrollbarLayer.visible = false , undefined);
  $setBottomHeight(this$static.cornerLayer, ($clinit_Style$Unit() , PX), realScrollbarHeight, PX);
  isRtl?$setLeftWidth(this$static.cornerLayer, PX, realScrollbarWidth, PX):$setRightWidth(this$static.cornerLayer, PX, realScrollbarWidth, PX);
  $setVisible(this$static.cornerLayer, this$static.hScrollbarHeight > 0 && this$static.vScrollbarWidth > 0);
  $layout(this$static.layout, 0, null);
  $maybeUpdateScrollbarPositions(this$static);
}

function $onResize_0(this$static){
  $maybeUpdateScrollbars(this$static);
  $onResize(this$static);
}

function $remove_4(this$static, w){
  var hScrollbarWidget, toRet, vScrollbarWidget;
  if (w.parent_0 != this$static) {
    return false;
  }
  if (w == this$static.widget) {
    toRet = $remove_3(this$static, w);
    $maybeUpdateScrollbars(this$static);
    return toRet;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeFromParent(w.element);
    hScrollbarWidget = !this$static.hScrollbar?null:this$static.hScrollbar;
    vScrollbarWidget = !this$static.vScrollbar?null:this$static.vScrollbar;
    if (w == hScrollbarWidget) {
      this$static.hScrollbar = null;
      $removeHandler(this$static.hScrollbarHandler.real);
      this$static.hScrollbarHandler = null;
      $removeChild_0(this$static.layout, this$static.hScrollbarLayer);
      this$static.hScrollbarLayer = null;
    }
     else if (w == vScrollbarWidget) {
      this$static.vScrollbar = null;
      $removeHandler(this$static.vScrollbarHandler.real);
      this$static.vScrollbarHandler = null;
      $removeChild_0(this$static.layout, this$static.vScrollbarLayer);
      this$static.vScrollbarLayer = null;
    }
  }
  $maybeUpdateScrollbars(this$static);
  return true;
}

function $setHorizontalScrollbar(this$static, scrollbar, height){
  this$static.hScrollbarLayer = $add_5(this$static, scrollbar, this$static.hScrollbar, this$static.hScrollbarLayer);
  this$static.hScrollbar = scrollbar;
  this$static.hScrollbarHeight = height;
  !!scrollbar && (this$static.hScrollbarHandler = $addScrollHandler(scrollbar, new CustomScrollPanel$2_0(this$static, scrollbar)));
  $maybeUpdateScrollbars(this$static);
}

function $setVerticalScrollbar(this$static, scrollbar, width){
  this$static.vScrollbarLayer = $add_5(this$static, scrollbar, this$static.vScrollbar, this$static.vScrollbarLayer);
  this$static.vScrollbar = scrollbar;
  this$static.vScrollbarWidth = width;
  !!scrollbar && (this$static.vScrollbarHandler = $addScrollHandler(scrollbar, new CustomScrollPanel$3_0(this$static, scrollbar)));
  $maybeUpdateScrollbars(this$static);
}

function $setWidget_0(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  $setWidget(this$static, w);
  $maybeUpdateScrollbars(this$static);
}

function CustomScrollPanel_0(){
  var containerElem, containerResizeDelegate, scrollable, style;
  ScrollPanel_0.call(this, $createElement($doc, 'div'), $createElement($doc, 'div'), $createElement($doc, 'div'));
  this.containerResizeImpl = new ResizeLayoutPanel$ImplIE6_0;
  style = ($clinit_CustomScrollPanel_Resources_default_StaticClientBundleGenerator$customScrollPanelStyleInitializer() , customScrollPanelStyle);
  $ensureInjected_1(style);
  this.element['className'] = 'GPBYFDEMH';
  this.layout = new Layout_0(this.element);
  containerElem = this.containerElem;
  $setClassName(containerElem, getInlineBlockStyle());
  scrollable = this.scrollableElem;
  scrollable.style['overflow'] = ($clinit_Style$Overflow() , 'scroll');
  scrollable.appendChild(containerElem);
  this.scrollableLayer = $attachChild(this.layout, scrollable, null);
  this.element.style['overflow'] = 'hidden';
  this.cornerElem = $createElement($doc, 'div');
  $addClassName(this.cornerElem, 'GPBYFDENH');
  this.cornerLayer = $attachChild(this.layout, this.cornerElem, null);
  $setHorizontalScrollbar(this, new NativeHorizontalScrollbar_0, (maybeRecalculateNativeScrollbarSize() , nativeHeight));
  $setVerticalScrollbar(this, new NativeVerticalScrollbar_0, (maybeRecalculateNativeScrollbarSize() , nativeWidth));
  containerResizeDelegate = new CustomScrollPanel$1_0(this);
  $init_2(this.containerResizeImpl, this.containerElem, containerResizeDelegate);
  sinkEvents_1(this.element, 16384);
  sinkEvents_1(this.scrollableElem, 16384);
}

function CustomScrollPanel_1(child){
  CustomScrollPanel_0.call(this, !DEFAULT_RESOURCES_0 && (DEFAULT_RESOURCES_0 = new CustomScrollPanel_Resources_default_StaticClientBundleGenerator_0));
  $setWidget_0(this, child);
}

defineSeed(427, 428, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Iterable]), CustomScrollPanel_1);
_.doAttachChildren = function doAttachChildren_1(){
  tryCommand(($clinit_AttachDetachException() , attachCommand), initValues(_3Lcom_google_gwt_user_client_ui_IsWidget_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$IsWidget, [this.widget, this.hScrollbar, this.vScrollbar]));
}
;
_.doDetachChildren = function doDetachChildren_1(){
  tryCommand(($clinit_AttachDetachException() , detachCommand), initValues(_3Lcom_google_gwt_user_client_ui_IsWidget_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$IsWidget, [this.widget, this.hScrollbar, this.vScrollbar]));
}
;
_.onAttach = function onAttach_4(){
  $onAttach_1(this);
  this.scrollableElem.__listener = this;
  $onAttach_3(this.containerResizeImpl);
  $onAttach(this.layout);
}
;
_.onBrowserEvent_0 = function onBrowserEvent_6(event_0){
  var curTime;
  if (16384 == $eventGetTypeInt(event_0.type)) {
    curTime = currentTimeMillis();
    if (curTime > this.ignoreContentUntil) {
      this.ignoreScrollbarsUntil = curTime + 500;
      $maybeUpdateScrollbarPositions(this);
    }
  }
  $onBrowserEvent_3(this, event_0);
}
;
_.onDetach = function onDetach_3(){
  this.scrollableElem.__listener = null;
  $onDetach_1(this);
  $onDetach_3(this.containerResizeImpl);
  $onDetach(this.layout);
}
;
_.onLoad = function onLoad_2(){
  var barWidth, barHeight;
  barWidth = (maybeRecalculateNativeScrollbarSize() , nativeWidth);
  barHeight = (maybeRecalculateNativeScrollbarSize() , nativeHeight);
  $setTopBottom(this.scrollableLayer, ($clinit_Style$Unit() , PX), -barHeight, PX);
  maybeRecalculateNativeScrollbarSize();
  nativeRtl && (!impl_3 && (impl_3 = new ScrollImpl$ScrollImplTrident_0) , this.scrollableElem.currentStyle.direction == 'rtl')?$setLeftRight(this.scrollableLayer, -barWidth, PX, 0, PX):$setLeftRight(this.scrollableLayer, 0, PX, -barWidth, PX);
  $layout(this.layout, 0, null);
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new CustomScrollPanel$4_0(this));
}
;
_.onResize_0 = function onResize_4(){
  $onResize_0(this);
}
;
_.remove = function remove_3(w){
  return $remove_4(this, w);
}
;
_.setAlwaysShowScrollBars = function setAlwaysShowScrollBars_0(alwaysShow){
  if (this.alwaysShowScrollbars != alwaysShow) {
    this.alwaysShowScrollbars = alwaysShow;
    $maybeUpdateScrollbars(this);
  }
}
;
_.setWidget = function setWidget_0(w){
  $setWidget_0(this, w);
}
;
_.alwaysShowScrollbars = false;
_.cornerElem = null;
_.cornerLayer = null;
_.hScrollbar = null;
_.hScrollbarHandler = null;
_.hScrollbarHeight = 0;
_.hScrollbarLayer = null;
_.ignoreContentUntil = 0;
_.ignoreScrollbarsUntil = 0;
_.layout = null;
_.scrollableLayer = null;
_.vScrollbar = null;
_.vScrollbarHandler = null;
_.vScrollbarLayer = null;
_.vScrollbarWidth = 0;
var DEFAULT_RESOURCES_0 = null;
function CustomScrollPanel$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(430, 1, {}, CustomScrollPanel$1_0);
_.onResize_0 = function onResize_5(){
  $maybeUpdateScrollbars(this.this$0);
}
;
_.this$0 = null;
function CustomScrollPanel$2_0(this$0, val$scrollbar){
  this.this$0 = this$0;
  this.val$scrollbar = val$scrollbar;
}

defineSeed(431, 1, makeCastMap([Q$ScrollHandler, Q$EventHandler]), CustomScrollPanel$2_0);
_.onScroll = function onScroll_0(event_0){
  var curTime, hPos;
  curTime = currentTimeMillis();
  if (curTime > this.this$0.ignoreScrollbarsUntil) {
    this.this$0.ignoreContentUntil = curTime + 500;
    hPos = $getScrollLeft(this.val$scrollbar.scrollable);
    $getScrollLeft(this.this$0.scrollableElem) != hPos && $setHorizontalScrollPosition(this.this$0, hPos);
  }
}
;
_.this$0 = null;
_.val$scrollbar = null;
function CustomScrollPanel$3_0(this$0, val$scrollbar){
  this.this$0 = this$0;
  this.val$scrollbar = val$scrollbar;
}

defineSeed(432, 1, makeCastMap([Q$ScrollHandler, Q$EventHandler]), CustomScrollPanel$3_0);
_.onScroll = function onScroll_1(event_0){
  var curTime, vPos;
  curTime = currentTimeMillis();
  if (curTime > this.this$0.ignoreScrollbarsUntil) {
    this.this$0.ignoreContentUntil = curTime + 500;
    vPos = this.val$scrollbar.scrollable.scrollTop || 0;
    this.this$0.scrollableElem.scrollTop || 0;
    (this.this$0.scrollableElem.scrollTop || 0) != vPos && $setVerticalScrollPosition(this.this$0, vPos);
  }
}
;
_.this$0 = null;
_.val$scrollbar = null;
function CustomScrollPanel$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(433, 1, {}, CustomScrollPanel$4_0);
_.execute_0 = function execute_15(){
  $maybeUpdateScrollbars(this.this$0);
}
;
_.this$0 = null;
function CustomScrollPanel_Resources_default_StaticClientBundleGenerator_0(){
}

defineSeed(434, 1, {}, CustomScrollPanel_Resources_default_StaticClientBundleGenerator_0);
var customScrollPanelStyle = null;
function $ensureInjected_1(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.GPBYFDENH{background:#efefef;}');
    schedule();
    return true;
  }
  return false;
}

function CustomScrollPanel_Resources_default_StaticClientBundleGenerator$1_0(){
}

defineSeed(435, 1, {}, CustomScrollPanel_Resources_default_StaticClientBundleGenerator$1_0);
_.injected = false;
function $clinit_CustomScrollPanel_Resources_default_StaticClientBundleGenerator$customScrollPanelStyleInitializer(){
  $clinit_CustomScrollPanel_Resources_default_StaticClientBundleGenerator$customScrollPanelStyleInitializer = nullMethod;
  customScrollPanelStyle = new CustomScrollPanel_Resources_default_StaticClientBundleGenerator$1_0;
}

function $setText(this$static, text){
  this$static.element['value'] = text != null?text:'';
}

function ValueBoxBase_0(elem){
  this.element = elem;
  this.autoDirHandler = new AutoDirectionHandler_0;
}

defineSeed(444, 423, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.onBrowserEvent_0 = function onBrowserEvent_7(event_0){
  var type;
  type = $eventGetTypeInt(event_0.type);
  (type & 896) != 0?$onBrowserEvent_3(this, event_0):$onBrowserEvent_3(this, event_0);
}
;
_.onLoad = function onLoad_3(){
}
;
_.autoDirHandler = null;
function ValueBox_0(element){
  ValueBoxBase_0.call(this, element);
}

defineSeed(443, 444, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
function DoubleBox_0(){
  ValueBox_0.call(this, $createInputElement($doc, 'text'), (!INSTANCE_2 && (INSTANCE_2 = new DoubleRenderer_0) , !INSTANCE_1 && (INSTANCE_1 = new DoubleParser_0)));
}

defineSeed(442, 443, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), DoubleBox_0);
function $next(this$static){
  var i, w;
  for (i = this$static.index_0 + 1; i < this$static.widgetCount; ++i) {
    this$static.index_0 = i;
    w = $get_3(this$static.provider, i);
    if (w) {
      return w;
    }
  }
  throw new NoSuchElementException_0;
}

function FiniteWidgetIterator_0(provider){
  this.provider = provider;
  this.widgetCount = 3;
}

defineSeed(445, 1, makeCastMap([Q$Iterator]), FiniteWidgetIterator_0);
_.hasNext = function hasNext(){
  var i, w;
  for (i = this.index_0 + 1; i < this.widgetCount; ++i) {
    w = $get_3(this.provider, i);
    if (w) {
      return true;
    }
  }
  return false;
}
;
_.next_0 = function next_0(){
  return $next(this);
}
;
_.remove_0 = function remove_5(){
  var w;
  if (this.index_0 < 0 || this.index_0 >= this.widgetCount) {
    throw new IllegalStateException_0;
  }
  w = $get_3(this.provider, this.index_0);
  if (!w) {
    throw new IllegalStateException_1('Widget was already removed.');
  }
  $removeFromParent_0(w);
}
;
_.index_0 = -1;
_.provider = null;
_.widgetCount = 0;
function $getDOMCellCount(tableBody, row){
  return tableBody.rows[row].cells.length;
}

function $isCellPresent(this$static, row, column){
  if (row >= this$static.bodyElem.rows.length || row < 0) {
    return false;
  }
  return !(column < 0 || column >= ($checkRowBounds_0(this$static, row) , $getDOMCellCount(this$static.bodyElem, row)));
}

function $setText_0(this$static, row, column, text){
  var td;
  $prepareCell(this$static, row, column);
  td = $cleanCell(this$static, row, column, text == null);
  text != null && $setInnerText(td, text);
}

function $getCellCount(this$static, row){
  $checkRowBounds_0(this$static, row);
  return $getDOMCellCount(this$static.bodyElem, row);
}

function $prepareCell(this$static, row, column){
  var cellCount, required;
  $prepareRow(this$static, row);
  if (column < 0) {
    throw new IndexOutOfBoundsException_1('Cannot create a column with a negative index: ' + column);
  }
  cellCount = ($checkRowBounds_0(this$static, row) , $getDOMCellCount(this$static.bodyElem, row));
  required = column + 1 - cellCount;
  required > 0 && addCells(this$static.bodyElem, row, required);
}

function $prepareRow(this$static, row){
  var i, rowCount, tr;
  if (row < 0) {
    throw new IndexOutOfBoundsException_1('Cannot create a row with a negative index: ' + row);
  }
  rowCount = this$static.bodyElem.rows.length;
  for (i = rowCount; i <= row; ++i) {
    i != this$static.bodyElem.rows.length && $checkRowBounds_0(this$static, i);
    tr = $createElement($doc, 'tr');
    insertChild(this$static.bodyElem, tr, i);
  }
}

function $removeAllRows(this$static){
  var i, numRows;
  numRows = this$static.bodyElem.rows.length;
  for (i = 0; i < numRows; ++i) {
    $removeRow(this$static, 0);
  }
}

function FlexTable_0(){
  HTMLTable_0.call(this);
  $setCellFormatter(this, new FlexTable$FlexCellFormatter_0(this));
  $setRowFormatter(this, new HTMLTable$RowFormatter_0(this));
  $setColumnFormatter(this, new HTMLTable$ColumnFormatter_0(this));
}

function addCells(table, row, num){
  var rowElem = table.rows[row];
  for (var i = 0; i < num; i++) {
    var cell = $doc.createElement('td');
    rowElem.appendChild(cell);
  }
}

defineSeed(446, 447, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]), FlexTable_0);
_.getCellCount = function getCellCount(row){
  return $getCellCount(this, row);
}
;
_.getRowCount = function getRowCount(){
  return this.bodyElem.rows.length;
}
;
_.prepareCell = function prepareCell(row, column){
  $prepareCell(this, row, column);
}
;
_.prepareRow = function prepareRow(row){
  $prepareRow(this, row);
}
;
function $getElement(this$static, row, column){
  $checkCellBounds(this$static.this$0, row, column);
  return $getCellElement(this$static.this$0.bodyElem, row, column);
}

function $setStyleName_1(this$static, row, column, styleName){
  this$static.this$0.prepareCell(row, column);
  $getCellElement(this$static.this$0.bodyElem, row, column)['className'] = styleName;
}

function FlexTable$FlexCellFormatter_0(this$0){
  this.this$0 = this$0;
}

defineSeed(448, 449, makeCastMap([Q$FlexTable$FlexCellFormatter]), FlexTable$FlexCellFormatter_0);
defineSeed(451, 447, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]));
_.prepareRow = function prepareRow_0(row){
  $prepareRow_0(this, row);
}
;
function $addAndReplaceElement(this$static, widget, toReplace){
  var clientElem;
  clientElem = toReplace;
  $addAndReplaceElement_0(this$static, widget, clientElem);
}

function $addAndReplaceElement_0(this$static, widget, toReplace){
  var children, next, toRemove;
  if (toReplace == widget.element) {
    return;
  }
  $removeFromParent_0(widget);
  toRemove = null;
  children = new WidgetCollection$WidgetIterator_0(this$static.children_0);
  while (children.index_0 < children.this$0.size_0 - 1) {
    next = $next_2(children);
    if (isOrHasChildImpl(toReplace, next.element)) {
      if (next.element == toReplace) {
        toRemove = next;
        break;
      }
      $remove_11(children);
    }
  }
  $add_12(this$static.children_0, widget);
  if (!toRemove) {
    $replaceChild(toReplace.parentNode, widget.element, toReplace);
  }
   else {
    $insertBefore(toReplace.parentNode, widget.element, toReplace);
    $remove_1(this$static, toRemove);
  }
  $setParent(widget, this$static);
}

function HTMLPanel_0(html){
  ComplexPanel_0.call(this);
  $setElement(this, $createElement($doc, 'div'));
  $setInnerHTML(this.element, html);
}

defineSeed(455, 414, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]), HTMLPanel_0);
function $setStyleName_2(this$static, row){
  (this$static.this$0.prepareRow(row) , $getRow(this$static.this$0.bodyElem, row))['className'] = 'bulletinHeader';
}

function $add_8(this$static, w, toReplace, container){
  if (w == toReplace) {
    return;
  }
  !!w && $removeFromParent_0(w);
  !!toReplace && $remove_7(this$static, toReplace);
  if (w) {
    $appendChild(container, w.element);
    $setParent(w, this$static);
  }
}

function $createContainer(){
  var container;
  container = $createElement($doc, 'div');
  container.style['position'] = ($clinit_Style$Position() , 'absolute');
  container.style['display'] = ($clinit_Style$Display() , 'none');
  container.style['left'] = 0 + ($clinit_Style$Unit() , 'px');
  container.style['width'] = '100%';
  return container;
}

function $forceLayout(this$static){
  var height, remainingHeight;
  if (!this$static.attached || !this$static.content_0) {
    return;
  }
  remainingHeight = this$static.element.clientHeight;
  if (this$static.header) {
    height = max(0, this$static.headerContainer.offsetHeight || 0);
    remainingHeight -= height;
    this$static.contentContainer.style['top'] = height + ($clinit_Style$Unit() , 'px');
  }
   else {
    this$static.contentContainer.style['top'] = 0 + ($clinit_Style$Unit() , 'px');
  }
  !!this$static.footer && (remainingHeight -= this$static.footerContainer.offsetHeight || 0);
  this$static.contentContainer.style['height'] = (0 > remainingHeight?0:remainingHeight) + ($clinit_Style$Unit() , 'px');
  !!this$static.content_0 && $onResize_0(this$static.content_0);
}

function $onAttach_2(this$static){
  $onAttach_1(this$static);
  $onAttach_3(this$static.headerImpl);
  $onAttach_3(this$static.footerImpl);
  $scheduledLayout(this$static);
}

function $onDetach_2(this$static){
  $onDetach_1(this$static);
  $onDetach_3(this$static.headerImpl);
  $onDetach_3(this$static.footerImpl);
}

function $remove_7(this$static, w){
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeFromParent(w.element);
    if (w == this$static.content_0) {
      this$static.content_0 = null;
      this$static.contentContainer.style['display'] = ($clinit_Style$Display() , 'none');
    }
     else if (w == this$static.header) {
      this$static.header = null;
      this$static.headerContainer.style['display'] = ($clinit_Style$Display() , 'none');
    }
     else if (w == this$static.footer) {
      this$static.footer = null;
      this$static.footerContainer.style['display'] = ($clinit_Style$Display() , 'none');
    }
  }
  return true;
}

function $scheduledLayout(this$static){
  if (this$static.attached && !this$static.layoutScheduled) {
    this$static.layoutScheduled = true;
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), this$static.layoutCmd);
  }
}

function $setContentWidget(this$static, w){
  this$static.contentContainer.style['display'] = '';
  $add_8(this$static, w, this$static.content_0, this$static.contentContainer);
  this$static.content_0 = w;
  $scheduledLayout(this$static);
}

function $setFooterWidget(this$static, w){
  this$static.footerContainer.style['display'] = '';
  $add_8(this$static, w, this$static.footer, this$static.footerContainer);
  this$static.footer = w;
  $scheduledLayout(this$static);
}

function $setHeaderWidget(this$static, w){
  this$static.headerContainer.style['display'] = '';
  $add_8(this$static, w, this$static.header, this$static.headerContainer);
  this$static.header = w;
  $scheduledLayout(this$static);
}

function HeaderPanel_0(){
  var elem, resizeDelegate;
  this.footerImpl = new ResizeLayoutPanel$ImplIE6_0;
  this.headerImpl = new ResizeLayoutPanel$ImplIE6_0;
  this.layoutCmd = new HeaderPanel$1_0(this);
  elem = $createElement($doc, 'div');
  elem.style['position'] = ($clinit_Style$Position() , 'relative');
  elem.style['overflow'] = ($clinit_Style$Overflow() , 'hidden');
  this.element = elem;
  resizeDelegate = new HeaderPanel$2_0(this);
  this.headerContainer = $createContainer();
  this.headerContainer.style['top'] = 0 + ($clinit_Style$Unit() , 'px');
  $init_2(this.headerImpl, this.headerContainer, resizeDelegate);
  $appendChild(elem, this.headerContainer);
  this.footerContainer = $createContainer();
  this.footerContainer.style['bottom'] = '0px';
  $init_2(this.footerImpl, this.footerContainer, resizeDelegate);
  $appendChild(elem, this.footerContainer);
  this.contentContainer = $createContainer();
  this.contentContainer.style['overflow'] = 'hidden';
  this.contentContainer.style['top'] = '0px';
  this.contentContainer.style['height'] = '0px';
  $appendChild(elem, this.contentContainer);
}

defineSeed(462, 415, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Iterable]), HeaderPanel_0);
_.iterator = function iterator_3(){
  return new FiniteWidgetIterator_0(new HeaderPanel$WidgetProviderImpl_0(this));
}
;
_.onAttach = function onAttach_5(){
  $onAttach_2(this);
}
;
_.onDetach = function onDetach_4(){
  $onDetach_2(this);
}
;
_.onResize_0 = function onResize_6(){
  $scheduledLayout(this);
}
;
_.remove = function remove_8(w){
  return $remove_7(this, w);
}
;
_.content_0 = null;
_.contentContainer = null;
_.footer = null;
_.footerContainer = null;
_.header = null;
_.headerContainer = null;
_.layoutScheduled = false;
function HeaderPanel$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(463, 1, {}, HeaderPanel$1_0);
_.execute_0 = function execute_16(){
  this.this$0.layoutScheduled = false;
  $forceLayout(this.this$0);
}
;
_.this$0 = null;
function HeaderPanel$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(464, 1, {}, HeaderPanel$2_0);
_.onResize_0 = function onResize_7(){
  $scheduledLayout(this.this$0);
}
;
_.this$0 = null;
function $get_3(this$static, index){
  switch (index) {
    case 0:
      return this$static.this$0.header;
    case 1:
      return this$static.this$0.content_0;
    case 2:
      return this$static.this$0.footer;
  }
  throw new ArrayIndexOutOfBoundsException_0(index);
}

function HeaderPanel$WidgetProviderImpl_0(this$0){
  this.this$0 = this$0;
}

defineSeed(465, 1, {}, HeaderPanel$WidgetProviderImpl_0);
_.this$0 = null;
function Image_2(resource){
  $clinit_Image();
  Image_4.call(this, resource.url.uri, resource.left_0, resource.top_0, resource.width_0, resource.height_0);
}

function Image_4(url, left, top_0, width, height){
  Image_3.call(this, ($clinit_UriUtils() , new SafeUriString_0(url)), left, top_0, width, height);
}

defineSeed(468, 344, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), Image_2);
function $checkIndex(this$static, index){
  if (index < 0 || index >= this$static.element.options.length) {
    throw new IndexOutOfBoundsException_0;
  }
}

function $getItemText(this$static, index){
  $checkIndex(this$static, index);
  return $getOptionText(this$static.element.options[index]);
}

function $getOptionText(option){
  var text, node;
  text = option.text;
  (node = option.getAttributeNode('bidiwrapped') , !!(node && node.specified)) && text.length > 1 && (text = $substring_0(text, 1, text.length - 1));
  return text;
}

function $getValue_1(this$static, index){
  $checkIndex(this$static, index);
  return this$static.element.options[index].value;
}

function $insertItem(this$static, item, value, index){
  var before, itemCount, option, select;
  select = this$static.element;
  option = $createElement($doc, 'option');
  option.text = item;
  option.removeAttribute('bidiwrapped');
  option.value = value;
  itemCount = select.options.length;
  (index < 0 || index > itemCount) && (index = itemCount);
  if (index == itemCount) {
    $selectAdd(select, option, null);
  }
   else {
    before = select.options[index];
    $selectAdd(select, option, before);
  }
}

function $setSelectedIndex_0(this$static, index){
  $setSelectedIndex(this$static.element, index);
}

function ListBox_0(){
  var html;
  FocusWidget_0.call(this, (html = '<SELECT>' , $doc.createElement(html)));
  this.element['className'] = 'gwt-ListBox';
}

defineSeed(476, 423, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), ListBox_0);
function $setHorizontalScrollPosition_0(this$static, position){
  $setScrollLeft(this$static.scrollable, position);
}

function $setScrollWidth(this$static, width){
  this$static.contentDiv.style['width'] = width + ($clinit_Style$Unit() , 'px');
}

function NativeHorizontalScrollbar_0(){
  var style;
  $setElement(this, $build_f_div1(new NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$Widgets_0(this)));
  $addClassName(this.element, getInlineBlockStyle());
  $setHeight(this, (maybeRecalculateNativeScrollbarSize() , nativeHeight) + 'px');
  style = ($clinit_NativeHorizontalScrollbar_ResourcesTransparant_default_StaticClientBundleGenerator$nativeHorizontalScrollbarStyleInitializer() , nativeHorizontalScrollbarStyle);
  $ensureInjected_3(style);
  $addClassName(this.scrollable, 'GPBYFDEOH');
  !impl_3 && (impl_3 = new ScrollImpl$ScrollImplTrident_0);
  $initialize(this.scrollable, this.contentDiv);
}

defineSeed(477, 417, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), NativeHorizontalScrollbar_0);
_.getScrollableElement = function getScrollableElement(){
  return this.scrollable;
}
;
_.contentDiv = null;
_.scrollable = null;
function $build_f_div1(this$static){
  var attachRecord26, f_div1, scrollable, contentDiv;
  f_div1 = fromHtml($html1(this$static.domId0, this$static.domId1).html);
  attachRecord26 = attachToDom(f_div1);
  scrollable = $get_1(new LazyDomElement_0(this$static.domId0));
  this$static.owner.scrollable = scrollable;
  contentDiv = $get_1(new LazyDomElement_0(this$static.domId1));
  this$static.owner.contentDiv = contentDiv;
  attachRecord26.origParent?$insertBefore(attachRecord26.origParent, attachRecord26.element, attachRecord26.origSibling):orphan(attachRecord26.element);
  return f_div1;
}

function NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$Widgets_0(owner){
  this.owner = owner;
  this.style_0 = (new NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator_0 , $clinit_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator$styleInitializer() , style_0);
  $ensureInjected_2(this.style_0);
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
}

defineSeed(478, 1, {}, NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$Widgets_0);
_.domId0 = null;
_.domId1 = null;
_.owner = null;
_.style_0 = null;
function NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator_0(){
}

defineSeed(479, 1, {}, NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator_0);
var style_0 = null;
function $ensureInjected_2(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.GPBYFDEGI{position:relative;overflow:hidden;}.GPBYFDEFI{position:absolute;left:0;bottom:0;width:100%;height:100px;overflow:auto;overflow-x:scroll;overflow-y:hidden;}.GPBYFDEEI{height:1px;}');
    schedule();
    return true;
  }
  return false;
}

function NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator$1_0(){
}

defineSeed(480, 1, {}, NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator$1_0);
_.injected = false;
function $clinit_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator$styleInitializer(){
  $clinit_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator$styleInitializer = nullMethod;
  style_0 = new NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator$1_0;
}

function $html1(arg2, arg4){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<div class='");
  $append_10(sb, htmlEscape('GPBYFDEGI'));
  $append_1(sb.data, "'><div class='");
  $append_10(sb, htmlEscape('GPBYFDEFI'));
  $append_1(sb.data, "' id='");
  $append_10(sb, htmlEscape(arg2));
  $append_1(sb.data, "'> <div class='");
  $append_10(sb, htmlEscape('GPBYFDEEI'));
  $append_1(sb.data, "' id='");
  $append_10(sb, htmlEscape(arg4));
  $append_1(sb.data, "'><\/div> <\/div><\/div>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

var nativeHorizontalScrollbarStyle = null;
function $ensureInjected_3(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.GPBYFDEOH{opacity:0.7;filter:alpha(opacity = 70);-webkit-transition:opacity 350ms;-moz-transition:opacity 350ms;-o-transition:opacity 350ms;transition:opacity 350ms;}.GPBYFDEOH:hover{opacity:1;filter:alpha(opacity = 100);}');
    schedule();
    return true;
  }
  return false;
}

function NativeHorizontalScrollbar_ResourcesTransparant_default_StaticClientBundleGenerator$1_0(){
}

defineSeed(484, 1, {}, NativeHorizontalScrollbar_ResourcesTransparant_default_StaticClientBundleGenerator$1_0);
_.injected = false;
function $clinit_NativeHorizontalScrollbar_ResourcesTransparant_default_StaticClientBundleGenerator$nativeHorizontalScrollbarStyleInitializer(){
  $clinit_NativeHorizontalScrollbar_ResourcesTransparant_default_StaticClientBundleGenerator$nativeHorizontalScrollbarStyleInitializer = nullMethod;
  nativeHorizontalScrollbarStyle = new NativeHorizontalScrollbar_ResourcesTransparant_default_StaticClientBundleGenerator$1_0;
}

function $setScrollHeight(this$static, height){
  this$static.contentDiv.style['height'] = height + ($clinit_Style$Unit() , 'px');
}

function $setVerticalScrollPosition_0(this$static, position){
  $setScrollTop(this$static.scrollable, position);
}

function NativeVerticalScrollbar_0(){
  var style;
  $setElement(this, $build_f_div1_0(new NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl$Widgets_0(this)));
  $addClassName(this.element, getInlineBlockStyle());
  $setWidth(this, (maybeRecalculateNativeScrollbarSize() , nativeWidth) + 'px');
  style = ($clinit_NativeVerticalScrollbar_ResourcesTransparant_default_StaticClientBundleGenerator$nativeVerticalScrollbarStyleInitializer() , nativeVerticalScrollbarStyle);
  $ensureInjected_5(style);
  $addClassName(this.scrollable, 'GPBYFDEAI');
  !impl_3 && (impl_3 = new ScrollImpl$ScrollImplTrident_0);
  $initialize(this.scrollable, this.contentDiv);
}

defineSeed(486, 417, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), NativeVerticalScrollbar_0);
_.getScrollableElement = function getScrollableElement_0(){
  return this.scrollable;
}
;
_.contentDiv = null;
_.scrollable = null;
function $build_f_div1_0(this$static){
  var attachRecord27, f_div1, scrollable, contentDiv;
  f_div1 = fromHtml($html1_0(this$static.domId0, this$static.domId1).html);
  attachRecord27 = attachToDom(f_div1);
  scrollable = $get_1(new LazyDomElement_0(this$static.domId0));
  this$static.owner.scrollable = scrollable;
  contentDiv = $get_1(new LazyDomElement_0(this$static.domId1));
  this$static.owner.contentDiv = contentDiv;
  attachRecord27.origParent?$insertBefore(attachRecord27.origParent, attachRecord27.element, attachRecord27.origSibling):orphan(attachRecord27.element);
  return f_div1;
}

function NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl$Widgets_0(owner){
  this.owner = owner;
  this.style_0 = (new NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator_0 , $clinit_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator$styleInitializer() , style_1);
  $ensureInjected_4(this.style_0);
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
}

defineSeed(487, 1, {}, NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl$Widgets_0);
_.domId0 = null;
_.domId1 = null;
_.owner = null;
_.style_0 = null;
function NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator_0(){
}

defineSeed(488, 1, {}, NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator_0);
var style_1 = null;
function $ensureInjected_4(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.GPBYFDEII{position:relative;overflow:hidden;direction:ltr;}.GPBYFDEHI{position:absolute;top:0;right:0;height:100%;width:100px;overflow-y:scroll;overflow-x:hidden;}');
    schedule();
    return true;
  }
  return false;
}

function NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator$1_0(){
}

defineSeed(489, 1, {}, NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator$1_0);
_.injected = false;
function $clinit_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator$styleInitializer(){
  $clinit_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator$styleInitializer = nullMethod;
  style_1 = new NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator$1_0;
}

function $html1_0(arg2, arg3){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<div class='");
  $append_10(sb, htmlEscape('GPBYFDEII'));
  $append_1(sb.data, "'><div class='");
  $append_10(sb, htmlEscape('GPBYFDEHI'));
  $append_1(sb.data, "' id='");
  $append_10(sb, htmlEscape(arg2));
  $append_1(sb.data, "'> <div id='");
  $append_10(sb, htmlEscape(arg3));
  $append_1(sb.data, "'><\/div> <\/div><\/div>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

var nativeVerticalScrollbarStyle = null;
function $ensureInjected_5(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.GPBYFDEAI{opacity:0.7;filter:alpha(opacity = 70);-webkit-transition:opacity 350ms;-moz-transition:opacity 350ms;-o-transition:opacity 350ms;transition:opacity 350ms;}.GPBYFDEAI:hover{opacity:1;filter:alpha(opacity = 100);}');
    schedule();
    return true;
  }
  return false;
}

function NativeVerticalScrollbar_ResourcesTransparant_default_StaticClientBundleGenerator$1_0(){
}

defineSeed(493, 1, {}, NativeVerticalScrollbar_ResourcesTransparant_default_StaticClientBundleGenerator$1_0);
_.injected = false;
function $clinit_NativeVerticalScrollbar_ResourcesTransparant_default_StaticClientBundleGenerator$nativeVerticalScrollbarStyleInitializer(){
  $clinit_NativeVerticalScrollbar_ResourcesTransparant_default_StaticClientBundleGenerator$nativeVerticalScrollbarStyleInitializer = nullMethod;
  nativeVerticalScrollbarStyle = new NativeVerticalScrollbar_ResourcesTransparant_default_StaticClientBundleGenerator$1_0;
}

function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = nullMethod;
  $clinit_ValueBoxBase$TextAlignment();
}

function TextBoxBase_0(elem){
  ValueBoxBase_0.call(this, elem, (!INSTANCE_4 && (INSTANCE_4 = new PassthroughRenderer_0) , !INSTANCE_3 && (INSTANCE_3 = new PassthroughParser_0)));
}

defineSeed(497, 444, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
function TextBox_0(){
  $clinit_TextBoxBase();
  TextBox_1.call(this, $createInputElement($doc, 'text'), 'gwt-TextBox');
}

function TextBox_1(element, styleName){
  TextBoxBase_0.call(this, element);
  styleName != null && (this.element['className'] = styleName , undefined);
}

defineSeed(496, 497, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), TextBox_0);
function $center(this$static){
  var elem, initiallyAnimated, initiallyShowing, left, top_0;
  initiallyShowing = this$static.showing;
  initiallyAnimated = this$static.isAnimationEnabled;
  if (!initiallyShowing) {
    this$static.element.style['visibility'] = 'hidden';
    $setVisible_1(this$static.element, false);
    this$static.isAnimationEnabled = false;
    $show(this$static);
  }
  elem = this$static.element;
  elem.style['left'] = 0 + ($clinit_Style$Unit() , 'px');
  elem.style['top'] = '0px';
  left = $getClientWidth($doc) - $getPropertyInt(this$static.element, 'offsetWidth') >> 1;
  top_0 = $getClientHeight($doc) - $getPropertyInt(this$static.element, 'offsetHeight') >> 1;
  $setPopupPosition(this$static, max($getScrollLeft_0($doc) + left, 0), max($getScrollTop($doc) + top_0, 0));
  if (!initiallyShowing) {
    this$static.isAnimationEnabled = initiallyAnimated;
    if (initiallyAnimated) {
      $setClip(this$static.element, 'rect(0px, 0px, 0px, 0px)');
      this$static.element.style['visibility'] = 'visible';
      $setVisible_1(this$static.element, true);
      $run(this$static.resizeAnimation, 200, currentTimeMillis());
    }
     else {
      this$static.element.style['visibility'] = 'visible';
      $setVisible_1(this$static.element, true);
    }
  }
}

function $maybeUpdateSize(this$static){
  var w;
  w = this$static.widget;
  if (w) {
    this$static.desiredHeight != null && w.setHeight_0(this$static.desiredHeight);
    this$static.desiredWidth != null && w.setWidth_0(this$static.desiredWidth);
  }
}

function $setHeight_0(this$static, height){
  this$static.desiredHeight = height;
  $maybeUpdateSize(this$static);
  height.length == 0 && (this$static.desiredHeight = null);
}

function $setWidth_1(this$static, width){
  this$static.desiredWidth = width;
  $maybeUpdateSize(this$static);
  width.length == 0 && (this$static.desiredWidth = null);
}

function $show(this$static){
  if (this$static.showing) {
    return;
  }
   else 
    this$static.attached && $removeFromParent_0(this$static);
  $setState(this$static.resizeAnimation, true, false);
}

defineSeed(498, 429, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]));
_.getOffsetHeight = function getOffsetHeight_0(){
  return $getPropertyInt(this.element, 'offsetHeight');
}
;
_.getOffsetWidth = function getOffsetWidth_0(){
  return $getPropertyInt(this.element, 'offsetWidth');
}
;
_.getStyleElement = function getStyleElement_0(){
  return $getParentElement($getFirstChildElement(this.element));
}
;
_.setHeight_0 = function setHeight_1(height){
  $setHeight_0(this, height);
}
;
_.setWidget = function setWidget_1(w){
  $setWidget(this, w);
  $maybeUpdateSize(this);
}
;
_.setWidth_0 = function setWidth_1(width){
  $setWidth_1(this, width);
}
;
function $setResolver(this$static, resolver){
  this$static.__gwt_resolve = buildResolveCallback(resolver);
}

function buildResolveCallback(resolver){
  return function(){
    this.__gwt_resolve = cannotResolveTwice;
    return resolver.resolvePotentialElement();
  }
  ;
}

function cannotResolveTwice(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function isPotential(o){
  $clinit_PotentialElement();
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

defineSeed(505, 1, {});
_.handleResize = function handleResize_0(){
  this.isAttached && !!this.delegate && this.delegate.onResize_0();
}
;
_.delegate = null;
_.isAttached = false;
_.parent_0 = null;
function $init_2(this$static, elem, delegate){
  this$static.parent_0 = elem;
  this$static.delegate = delegate;
  $initResizeEventListener(elem);
}

function $initResizeEventListener(elem){
  var theElem = elem;
  var handleResize = $entry(function(){
    theElem.__resizeImpl && theElem.__resizeImpl.handleResize();
  }
  );
  elem.attachEvent('onresize', handleResize);
}

function $onDetach_3(this$static){
  this$static.isAttached = false;
  this$static.parent_0.__resizeImpl = null;
}

function $setResizeEventListener(elem, listener){
  elem.__resizeImpl = listener;
}

defineSeed(507, 505, {});
function $onAttach_3(this$static){
  this$static.isAttached = true;
  $setResizeEventListener(this$static.parent_0, this$static);
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new ResizeLayoutPanel$ImplIE6$1_0(this$static));
}

function ResizeLayoutPanel$ImplIE6_0(){
}

defineSeed(506, 507, {}, ResizeLayoutPanel$ImplIE6_0);
function ResizeLayoutPanel$ImplIE6$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(508, 1, {}, ResizeLayoutPanel$ImplIE6$1_0);
_.execute_0 = function execute_19(){
  this.this$1.isAttached && (this.this$1.parent_0.style['zoom'] = '1' , undefined);
}
;
_.this$1 = null;
function $getMaximumHorizontalScrollPosition_0(scrollable){
  return scrollable.currentStyle.direction == 'rtl'?0:(scrollable.scrollWidth || 0) - scrollable.clientWidth;
}

function $getMinimumHorizontalScrollPosition_0(scrollable){
  return scrollable.currentStyle.direction == 'rtl'?scrollable.clientWidth - (scrollable.scrollWidth || 0):0;
}

defineSeed(515, 1, {});
var impl_3 = null;
function $initialize(scrollable, container){
  scrollable.__lastScrollTop = scrollable.__lastScrollLeft = 0;
  scrollable.attachEvent('onscroll', scrollHandler);
  scrollable.attachEvent('onresize', resizeHandler_1);
  container.attachEvent('onresize', resizeHandler_1);
  container.__isScrollContainer = true;
}

function ScrollImpl$ScrollImplTrident_0(){
  initStaticHandlers();
}

function initStaticHandlers(){
  scrollHandler = function(){
    var scrollableElem = $wnd.event.srcElement;
    scrollableElem.__lastScrollTop = scrollableElem.scrollTop;
    scrollableElem.__lastScrollLeft = scrollableElem.scrollLeft;
  }
  ;
  resizeHandler_1 = function(){
    var scrollableElem = $wnd.event.srcElement;
    scrollableElem.__isScrollContainer && (scrollableElem = scrollableElem.parentNode);
    setTimeout($entry(function(){
      if (scrollableElem.scrollTop != scrollableElem.__lastScrollTop || scrollableElem.scrollLeft != scrollableElem.__lastScrollLeft) {
        scrollableElem.__lastScrollTop = scrollableElem.scrollTop;
        scrollableElem.__lastScrollLeft = scrollableElem.scrollLeft;
        triggerScrollEvent(scrollableElem);
      }
    }
    ), 1);
  }
  ;
}

function triggerScrollEvent(elem){
  $dispatchEvent(elem, $createHtmlEvent($doc, 'scroll'));
}

defineSeed(516, 515, {}, ScrollImpl$ScrollImplTrident_0);
var resizeHandler_1 = null, scrollHandler = null;
function $getValue_2(this$static){
  var propName;
  propName = this$static.attached?'checked':'defaultChecked';
  return $clinit_Boolean() , this$static.element[propName]?TRUE_1:FALSE_1;
}

function $setValue_1(this$static, value){
  !value && (value = ($clinit_Boolean() , FALSE_1));
  $setChecked(this$static.element, value.value_0);
  $setDefaultChecked(this$static.element, value.value_0);
}

function SimpleCheckBox_0(){
  SimpleCheckBox_1.call(this, $createCheckInputElement($doc));
}

function SimpleCheckBox_1(element){
  this.element = element;
  this.element['className'] = 'gwt-SimpleCheckBox';
}

defineSeed(517, 423, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), SimpleCheckBox_0);
_.onUnload = function onUnload_3(){
  $setValue_1(this, $getValue_2(this));
}
;
_.setEnabled = function setEnabled_1(enabled){
  this.element['disabled'] = !enabled;
  enabled?$setStyleName_0(this, getStylePrimaryName(this.element) + '-disabled', false):$setStyleName_0(this, getStylePrimaryName(this.element) + '-disabled', true);
}
;
function TextArea_1(){
  $clinit_TextBoxBase();
  TextBoxBase_0.call(this, $createElement($doc, 'textarea'));
  this.element['className'] = 'gwt-TextArea';
}

defineSeed(519, 497, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), TextArea_1);
function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = nullMethod;
  CENTER_1 = new ValueBoxBase$TextAlignment$1_0;
  JUSTIFY_0 = new ValueBoxBase$TextAlignment$2_0;
  LEFT_0 = new ValueBoxBase$TextAlignment$3_0;
  RIGHT_0 = new ValueBoxBase$TextAlignment$4_0;
  $VALUES_14 = initValues(_3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$ValueBoxBase$TextAlignment, [CENTER_1, JUSTIFY_0, LEFT_0, RIGHT_0]);
}

function values_15(){
  $clinit_ValueBoxBase$TextAlignment();
  return $VALUES_14;
}

defineSeed(530, 31, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_14, CENTER_1, JUSTIFY_0, LEFT_0, RIGHT_0;
function ValueBoxBase$TextAlignment$1_0(){
  Enum_0.call(this, 'CENTER', 0);
}

defineSeed(531, 530, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]), ValueBoxBase$TextAlignment$1_0);
function ValueBoxBase$TextAlignment$2_0(){
  Enum_0.call(this, 'JUSTIFY', 1);
}

defineSeed(532, 530, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]), ValueBoxBase$TextAlignment$2_0);
function ValueBoxBase$TextAlignment$3_0(){
  Enum_0.call(this, 'LEFT', 2);
}

defineSeed(533, 530, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]), ValueBoxBase$TextAlignment$3_0);
function ValueBoxBase$TextAlignment$4_0(){
  Enum_0.call(this, 'RIGHT', 3);
}

defineSeed(534, 530, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]), ValueBoxBase$TextAlignment$4_0);
function $setVisible_1(popup, visible){
  popup.__frame && (popup.__frame.style.visibility = visible?'visible':'hidden');
}

function $addDataDisplay(this$static, display){
  var handler;
  if (!display) {
    throw new IllegalArgumentException_1('display cannot be null');
  }
   else if ($contains_1(this$static.displays, display)) {
    throw new IllegalStateException_1('The specified display has already been added to this adapter.');
  }
  $add_20(this$static.displays, display);
  handler = $addRangeChangeHandler(display, new AbstractDataProvider$1_0(this$static, display));
  this$static.rangeChangeHandlers.put(display, handler);
  this$static.lastRowCount >= 0 && $setRowCount_0(display, this$static.lastRowCount, this$static.lastRowCountExact);
  $onRangeChanged(this$static, display);
}

function $updateRowCount(this$static, count){
  var display, display$iterator;
  this$static.lastRowCount = count;
  this$static.lastRowCountExact = true;
  for (display$iterator = $iterator($keySet(this$static.displays.map)); display$iterator.val$outerIter.hasNext();) {
    display = dynamicCast($next_5(display$iterator), Q$HasData);
    display.setRowCount(count, true);
  }
}

function $updateRowData(this$static, start, values){
  var display, display$iterator;
  for (display$iterator = $iterator($keySet(this$static.displays.map)); display$iterator.val$outerIter.hasNext();) {
    display = dynamicCast($next_5(display$iterator), Q$HasData);
    $updateRowData_0(display, start, values);
  }
}

function $updateRowData_0(display, start, values){
  var curEnd, curLength, curStart, end, range, realEnd, realLength, realStart, realValues;
  end = start + values.size_1();
  range = display.getVisibleRange();
  curStart = range.start;
  curLength = range.length_0;
  curEnd = curStart + curLength;
  if (start == curStart || curStart < end && curEnd > start) {
    realStart = curStart < start?start:curStart;
    realEnd = curEnd > end?end:curEnd;
    realLength = realEnd - realStart;
    realValues = values.subList(realStart - start, realStart - start + realLength);
    display.setRowData(realStart, realValues);
  }
}

defineSeed(554, 1, {});
_.lastRowCount = -1;
_.lastRowCountExact = false;
function AbstractDataProvider$1_0(this$0, val$display){
  this.this$0 = this$0;
  this.val$display = val$display;
}

defineSeed(555, 1, makeCastMap([Q$EventHandler, Q$RangeChangeEvent$Handler]), AbstractDataProvider$1_0);
_.this$0 = null;
_.val$display = null;
function CellPreviewEvent_0(nativeEvent, display, context, value, isCellEditing, isSelectionHandled){
  this.nativeEvent = nativeEvent;
  this.display_0 = display;
  this.context = context;
  this.value_0 = value;
  this.isCellEditing = isCellEditing;
  this.isSelectionHandled = isSelectionHandled;
}

function fire_5(source, nativeEvent, display, context, value, isCellEditing, isSelectionHandled){
  var event_0;
  event_0 = new CellPreviewEvent_0(nativeEvent, display, context, value, isCellEditing, isSelectionHandled);
  !!TYPE_17 && !!source.handlerManager && $fireEvent(source.handlerManager, event_0);
  return event_0;
}

defineSeed(556, 232, {}, CellPreviewEvent_0);
_.dispatch_0 = function dispatch_18(handler){
  dynamicCast(handler, Q$CellPreviewEvent$Handler).onCellPreview(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_19(){
  return TYPE_17;
}
;
_.context = null;
_.display_0 = null;
_.isCanceled = false;
_.isCellEditing = false;
_.isSelectionHandled = false;
_.nativeEvent = null;
_.value_0 = null;
var TYPE_17 = null;
function $handleSelectionEvent(event_0, action, selectionModel){
  var keyCode, nativeEvent, type, value;
  value = event_0.value_0;
  if (action) {
    switch (action.ordinal) {
      case 4:
        return;
      case 1:
        $setSelected_0(selectionModel, value, true);
        return;
      case 2:
        $setSelected_0(selectionModel, value, false);
        return;
      case 3:
        $setSelected_0(selectionModel, value, !$isSelected(selectionModel, value));
        return;
    }
  }
  nativeEvent = event_0.nativeEvent;
  type = nativeEvent.type;
  if ($equals_5('click', type)) {
    !!nativeEvent.ctrlKey || !!nativeEvent.metaKey?$setSelected_0(selectionModel, value, !$isSelected(selectionModel, value)):$setSelected_0(selectionModel, value, true);
  }
   else if ($equals_5('keyup', type)) {
    keyCode = nativeEvent.keyCode || 0;
    keyCode == 32 && $setSelected_0(selectionModel, value, !$isSelected(selectionModel, value));
  }
}

function DefaultSelectionEventManager_0(){
}

defineSeed(557, 1, makeCastMap([Q$EventHandler, Q$CellPreviewEvent$Handler]), DefaultSelectionEventManager_0);
_.onCellPreview = function onCellPreview_1(event_0){
  var action, display, selectionModel;
  if (event_0.isCellEditing || event_0.isSelectionHandled) {
    return;
  }
  display = event_0.display_0;
  selectionModel = display.presenter.selectionModel;
  if (!selectionModel) {
    return;
  }
  action = ($clinit_DefaultSelectionEventManager$SelectAction() , DEFAULT_0);
  $handleSelectionEvent(event_0, action, selectionModel);
}
;
function $clinit_DefaultSelectionEventManager$SelectAction(){
  $clinit_DefaultSelectionEventManager$SelectAction = nullMethod;
  DEFAULT_0 = new DefaultSelectionEventManager$SelectAction_0('DEFAULT', 0);
  SELECT = new DefaultSelectionEventManager$SelectAction_0('SELECT', 1);
  DESELECT = new DefaultSelectionEventManager$SelectAction_0('DESELECT', 2);
  TOGGLE = new DefaultSelectionEventManager$SelectAction_0('TOGGLE', 3);
  IGNORE = new DefaultSelectionEventManager$SelectAction_0('IGNORE', 4);
  $VALUES_15 = initValues(_3Lcom_google_gwt_view_client_DefaultSelectionEventManager$SelectAction_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$DefaultSelectionEventManager$SelectAction, [DEFAULT_0, SELECT, DESELECT, TOGGLE, IGNORE]);
}

function DefaultSelectionEventManager$SelectAction_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_16(){
  $clinit_DefaultSelectionEventManager$SelectAction();
  return $VALUES_15;
}

defineSeed(558, 31, makeCastMap([Q$DefaultSelectionEventManager$SelectAction, Q$Serializable, Q$Comparable, Q$Enum]), DefaultSelectionEventManager$SelectAction_0);
var $VALUES_15, DEFAULT_0, DESELECT, IGNORE, SELECT, TOGGLE;
function $onRangeChanged(this$static, display){
  var size;
  size = this$static.listWrapper.list.size_1();
  size > 0 && $updateRowData_0(display, 0, this$static.listWrapper);
}

function $refresh(this$static){
  $updateRowData(this$static, 0, this$static.listWrapper);
}

function $setList(this$static, listToWrap){
  this$static.listWrapper = new ListDataProvider$ListWrapper_0(this$static, listToWrap);
  this$static.listWrapper.minModified = 0;
  this$static.listWrapper.maxModified = this$static.listWrapper.list.size_1();
  this$static.listWrapper.modified = true;
  $flushNow(this$static.listWrapper);
}

function ListDataProvider_0(){
  ListDataProvider_1.call(this, new ArrayList_0);
}

function ListDataProvider_1(listToWrap){
  this.displays = new HashSet_0;
  this.rangeChangeHandlers = new HashMap_0;
  this.listWrapper = new ListDataProvider$ListWrapper_0(this, listToWrap);
}

defineSeed(559, 554, {}, ListDataProvider_0);
_.listWrapper = null;
function $add_13(this$static, index, element){
  var e;
  try {
    this$static.list.add_0(index, element);
    this$static.minModified = min(this$static.minModified, index);
    this$static.maxModified = this$static.list.size_1();
    this$static.modified = true;
    $flush(this$static);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$IndexOutOfBoundsException)) {
      e = $e0;
      throw new IndexOutOfBoundsException_1(e.detailMessage);
    }
     else 
      throw $e0;
  }
}

function $add_14(this$static, e){
  var toRet;
  toRet = this$static.list.add_1(e);
  this$static.minModified = min(this$static.minModified, this$static.list.size_1() - 1);
  this$static.maxModified = this$static.list.size_1();
  this$static.modified = true;
  $flush(this$static);
  return toRet;
}

function $clear_3(this$static){
  this$static.list.clear_0();
  this$static.minModified = this$static.maxModified = 0;
  this$static.modified = true;
  $flush(this$static);
}

function $flush(this$static){
  if (this$static.delegate) {
    this$static.delegate.minModified = min(this$static.minModified + this$static.offset, this$static.delegate.minModified);
    this$static.delegate.maxModified = max(this$static.maxModified + this$static.offset, this$static.delegate.maxModified);
    this$static.delegate.modified = this$static.modified || this$static.delegate.modified;
    $flush(this$static.delegate);
    return;
  }
  this$static.flushCancelled = false;
  if (!this$static.flushPending) {
    this$static.flushPending = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_0), this$static.flushCommand);
  }
}

function $flushNow(this$static){
  var newSize;
  this$static.flushPending && (this$static.flushCancelled = true);
  if (this$static.this$0.listWrapper != this$static) {
    return;
  }
  newSize = this$static.list.size_1();
  if (this$static.curSize != newSize) {
    this$static.curSize = newSize;
    $updateRowCount(this$static.this$0, this$static.curSize);
  }
  if (this$static.modified) {
    $updateRowData(this$static.this$0, this$static.minModified, this$static.list.subList(this$static.minModified, this$static.maxModified));
    this$static.modified = false;
  }
  this$static.minModified = 2147483647;
  this$static.maxModified = -2147483648;
}

function $get_4(this$static, index){
  return this$static.list.get_0(index);
}

function $indexOf_0(this$static, o){
  return this$static.list.indexOf_0(o);
}

function $remove_12(this$static, index){
  var e, toRet;
  try {
    toRet = this$static.list.remove_1(index);
    this$static.minModified = min(this$static.minModified, index);
    this$static.maxModified = this$static.list.size_1();
    this$static.modified = true;
    $flush(this$static);
    return toRet;
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$IndexOutOfBoundsException)) {
      e = $e0;
      throw new IndexOutOfBoundsException_1(e.detailMessage);
    }
     else 
      throw $e0;
  }
}

function $remove_13(this$static, o){
  var index;
  index = this$static.list.indexOf_0(o);
  if (index == -1) {
    return false;
  }
  $remove_12(this$static, index);
  return true;
}

function $set_1(this$static, index, element){
  var toRet;
  toRet = this$static.list.set(index, element);
  this$static.minModified = min(this$static.minModified, index);
  this$static.maxModified = max(this$static.maxModified, index + 1);
  this$static.modified = true;
  $flush(this$static);
  return toRet;
}

function ListDataProvider$ListWrapper_0(this$0, list){
  ListDataProvider$ListWrapper_1.call(this, this$0, list, null, 0);
  $updateRowCount(this$0, list.size_1());
}

function ListDataProvider$ListWrapper_1(this$0, list, delegate, offset){
  this.this$0 = this$0;
  this.flushCommand = new ListDataProvider$ListWrapper$1_0(this);
  this.list = list;
  this.delegate = delegate;
  this.offset = offset;
}

defineSeed(560, 1, makeCastMap([Q$Iterable, Q$Collection, Q$List]), ListDataProvider$ListWrapper_0, ListDataProvider$ListWrapper_1);
_.add_0 = function add_1(index, element){
  $add_13(this, index, element);
}
;
_.add_1 = function add_2(e){
  return $add_14(this, e);
}
;
_.clear_0 = function clear(){
  $clear_3(this);
}
;
_.contains_0 = function contains(o){
  return this.list.contains_0(o);
}
;
_.equals$ = function equals_8(o){
  return this.list.equals$(o);
}
;
_.get_0 = function get_2(index){
  return this.list.get_0(index);
}
;
_.hashCode$ = function hashCode_10(){
  return this.list.hashCode$();
}
;
_.indexOf_0 = function indexOf(o){
  return this.list.indexOf_0(o);
}
;
_.isEmpty_0 = function isEmpty(){
  return this.list.isEmpty_0();
}
;
_.iterator = function iterator_6(){
  return new ListDataProvider$ListWrapper$WrappedListIterator_0(this);
}
;
_.listIterator = function listIterator(){
  return new ListDataProvider$ListWrapper$WrappedListIterator_0(this);
}
;
_.listIterator_0 = function listIterator_0(index){
  return new ListDataProvider$ListWrapper$WrappedListIterator_1(this, index);
}
;
_.remove_1 = function remove_16(index){
  return $remove_12(this, index);
}
;
_.remove_2 = function remove_17(o){
  return $remove_13(this, o);
}
;
_.set = function set_0(index, element){
  return $set_1(this, index, element);
}
;
_.size_1 = function size_0(){
  return this.list.size_1();
}
;
_.subList = function subList(fromIndex, toIndex){
  return new ListDataProvider$ListWrapper_1(this.this$0, this.list.subList(fromIndex, toIndex), this, fromIndex);
}
;
_.toArray = function toArray(){
  return this.list.toArray();
}
;
_.curSize = 0;
_.delegate = null;
_.flushCancelled = false;
_.flushPending = false;
_.list = null;
_.maxModified = -2147483648;
_.minModified = 2147483647;
_.modified = false;
_.offset = 0;
_.this$0 = null;
function ListDataProvider$ListWrapper$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(561, 1, {}, ListDataProvider$ListWrapper$1_0);
_.execute_0 = function execute_21(){
  this.this$1.flushPending = false;
  if (this.this$1.flushCancelled) {
    this.this$1.flushCancelled = false;
    return;
  }
  $flushNow(this.this$1);
}
;
_.this$1 = null;
function ListDataProvider$ListWrapper$WrappedListIterator_0(this$1){
  this.this$1 = this$1;
}

function ListDataProvider$ListWrapper$WrappedListIterator_1(this$1, start){
  var size;
  this.this$1 = this$1;
  size = this$1.list.size_1();
  if (start < 0 || start > size) {
    throw new IndexOutOfBoundsException_1('Index: ' + start + ', Size: ' + size);
  }
  this.i = start;
}

defineSeed(562, 1, makeCastMap([Q$Iterator, Q$ListIterator]), ListDataProvider$ListWrapper$WrappedListIterator_0, ListDataProvider$ListWrapper$WrappedListIterator_1);
_.hasNext = function hasNext_4(){
  return this.i < this.this$1.list.size_1();
}
;
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.next_0 = function next_5(){
  if (this.i >= this.this$1.list.size_1()) {
    throw new NoSuchElementException_0;
  }
  return $get_4(this.this$1, this.last = this.i++);
}
;
_.previous = function previous_0(){
  if (this.i <= 0) {
    throw new NoSuchElementException_0;
  }
  return $get_4(this.this$1, this.last = --this.i);
}
;
_.remove_0 = function remove_18(){
  if (this.last < 0) {
    throw new IllegalStateException_1('Cannot call add/remove more than once per call to next/previous.');
  }
  $remove_12(this.this$1, this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
_.this$1 = null;
function Range_1(start, length_0){
  this.start = start;
  this.length_0 = length_0;
}

defineSeed(563, 1, makeCastMap([Q$Range, Q$Serializable]), Range_1);
_.equals$ = function equals_9(o){
  var r;
  if (!instanceOf(o, Q$Range)) {
    return false;
  }
  r = dynamicCast(o, Q$Range);
  return this.start == r.start && this.length_0 == r.length_0;
}
;
_.hashCode$ = function hashCode_11(){
  return this.length_0 * 31 ^ this.start;
}
;
_.toString$ = function toString_9(){
  return 'Range(' + this.start + ',' + this.length_0 + ')';
}
;
_.length_0 = 0;
_.start = 0;
function $dispatch_2(handler){
  $onRangeChanged(handler.this$0, handler.val$display);
}

function RangeChangeEvent_0(){
}

function fire_6(source){
  var event_0;
  if (TYPE_18) {
    event_0 = new RangeChangeEvent_0;
    !!source.handlerManager && $fireEvent(source.handlerManager, event_0);
  }
}

defineSeed(564, 232, {}, RangeChangeEvent_0);
_.dispatch_0 = function dispatch_19(handler){
  $dispatch_2(dynamicCast(handler, Q$RangeChangeEvent$Handler));
}
;
_.getAssociatedType_0 = function getAssociatedType_20(){
  return TYPE_18;
}
;
var TYPE_18 = null;
function SelectionChangeEvent_0(){
}

function fire_7(source){
  var event_0;
  if (TYPE_19) {
    event_0 = new SelectionChangeEvent_0;
    $fireEvent(source.handlerManager, event_0);
  }
}

defineSeed(565, 232, {}, SelectionChangeEvent_0);
_.dispatch_0 = function dispatch_20(handler){
  dynamicCast(handler, Q$SelectionChangeEvent$Handler).onSelectionChange(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_21(){
  return TYPE_19;
}
;
var TYPE_19 = null;
function $addSelectionChangeHandler(this$static, handler){
  return $addHandler(this$static.handlerManager, (!TYPE_19 && (TYPE_19 = new GwtEvent$Type_0) , TYPE_19), handler);
}

function $scheduleSelectionChangeEvent(this$static){
  this$static.isEventCancelled = false;
  if (!this$static.isEventScheduled) {
    this$static.isEventScheduled = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_0), new SelectionModel$AbstractSelectionModel$1_0(this$static));
  }
}

defineSeed(566, 1, makeCastMap([Q$HasHandlers]));
_.fireEvent_0 = function fireEvent_4(event_0){
  $fireEvent(this.handlerManager, event_0);
}
;
_.isEventCancelled = false;
_.isEventScheduled = false;
function SelectionModel$AbstractSelectionModel$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(567, 1, {}, SelectionModel$AbstractSelectionModel$1_0);
_.execute_0 = function execute_22(){
  this.this$1.isEventScheduled = false;
  if (this.this$1.isEventCancelled) {
    this.this$1.isEventCancelled = false;
    return;
  }
  $fireSelectionChangeEvent(this.this$1);
}
;
_.this$1 = null;
function $equalsOrBothNull_0(a, b){
  return a == null?b == null:equals__devirtual$(a, b);
}

function $fireSelectionChangeEvent(this$static){
  this$static.isEventScheduled && (this$static.isEventCancelled = true);
  $resolveChanges(this$static);
}

function $getSelectedObject(this$static){
  $resolveChanges(this$static);
  return this$static.curSelection;
}

function $isSelected(this$static, item){
  $resolveChanges(this$static);
  if (this$static.curSelection == null || this$static.curKey == null || item == null) {
    return false;
  }
  return equals__devirtual$(this$static.curKey, item);
}

function $resolveChanges(this$static){
  var changed, key_0, sameKey;
  if (!this$static.newSelectedPending) {
    return;
  }
  key_0 = this$static.newSelectedItem;
  sameKey = $equalsOrBothNull_0(this$static.curKey, key_0);
  changed = false;
  if (this$static.newSelected) {
    changed = !sameKey;
    this$static.curSelection = this$static.newSelectedItem;
    this$static.curKey = key_0;
  }
   else if (sameKey) {
    changed = true;
    this$static.curSelection = null;
    this$static.curKey = null;
  }
  this$static.newSelectedItem = null;
  this$static.newSelectedPending = false;
  changed && fire_7(this$static);
}

function $setSelected_0(this$static, item, selected){
  var oldKey;
  if (!selected) {
    oldKey = this$static.newSelectedPending?this$static.newSelectedItem:this$static.curKey;
    if (!(oldKey == null?item == null:equals__devirtual$(oldKey, item))) {
      return;
    }
  }
  this$static.newSelectedItem = item;
  this$static.newSelected = selected;
  this$static.newSelectedPending = true;
  $scheduleSelectionChangeEvent(this$static);
}

function SingleSelectionModel_0(){
  this.handlerManager = new HandlerManager_0(this);
}

defineSeed(568, 566, makeCastMap([Q$HasHandlers]), SingleSelectionModel_0);
_.curKey = null;
_.curSelection = null;
_.newSelected = false;
_.newSelectedItem = null;
_.newSelectedPending = false;
function $setRequestHeader(this$static, header, value){
  this$static.setRequestHeader(header, value);
}

function $create(this$static, clazz){
  $maybeInitializeCreatorMap(this$static);
  return $create_0(this$static.creatorMap, clazz, this$static);
}

function $maybeInitializeCreatorMap(this$static){
  if (!this$static.creatorMap) {
    this$static.creatorMap = {};
    this$static.initializeCreatorMap(this$static.creatorMap);
  }
}

function $maybeInitializeEnumMap(this$static){
  if (!this$static.enumToStringMap) {
    this$static.enumToStringMap = new HashMap_0;
    this$static.stringsToEnumsMap = new HashMap_0;
    this$static.initializeEnumMap();
  }
}

defineSeed(570, 1, makeCastMap([Q$EnumMap]));
_.create = function create_4(clazz){
  return $create(this, clazz);
}
;
_.getEnum = function getEnum(clazz, token){
  var e, e$iterator, list, clazz_0, superclass;
  $maybeInitializeEnumMap(this);
  list = dynamicCast(this.stringsToEnumsMap.get_1(token), Q$List);
  if (!list) {
    throw new IllegalArgumentException_1(token);
  }
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = dynamicCast(e$iterator.next_0(), Q$Enum);
    if ((clazz_0 = e.___clazz$ , superclass = clazz_0.enumSuperclass , superclass == Ljava_lang_Enum_2_classLit?clazz_0:superclass) == clazz) {
      return e;
    }
  }
  throw new IllegalArgumentException_1(clazz.typeName);
}
;
_.getToken = function getToken(e){
  var toReturn;
  $maybeInitializeEnumMap(this);
  toReturn = dynamicCast(this.enumToStringMap.get_1(e), Q$String);
  if (toReturn == null) {
    throw new IllegalArgumentException_1(e.name_0);
  }
  return toReturn;
}
;
_.creatorMap = null;
_.enumToStringMap = null;
_.stringsToEnumsMap = null;
function $getElementType(this$static){
  if (this$static.paramTypes == null || this$static.paramTypes.length < 2) {
    return null;
  }
  if (Ljava_util_List_2_classLit == this$static.paramTypes[0] || Ljava_util_Set_2_classLit == this$static.paramTypes[0]) {
    return this$static.paramTypes[1];
  }
  return null;
}

function $set_2(this$static, value){
  $call(this$static.setter, this$static.instance, value);
}

function $traverse(this$static, visitor, count){
  var i, paramCount, type;
  if (this$static.simpleType) {
    visitor.endVisitType(this$static.simpleType);
    return 0;
  }
  type = this$static.paramTypes[count];
  paramCount = this$static.paramCounts[count];
  ++count;
  for (i = 0; i < paramCount; ++i) {
    count = $traverse(this$static, visitor, count);
  }
  visitor.endVisitType(type);
  return count;
}

function ClientPropertyContext_0(instance, setter, type){
  this.instance = instance;
  this.setter = setter;
  this.simpleType = type;
  this.paramTypes = null;
  this.paramCounts = null;
}

function ClientPropertyContext_1(instance, setter, types, paramCounts){
  this.instance = instance;
  this.setter = setter;
  this.simpleType = null;
  this.paramTypes = types;
  this.paramCounts = paramCounts;
}

defineSeed(571, 1, {}, ClientPropertyContext_0, ClientPropertyContext_1);
_.instance = null;
_.paramCounts = null;
_.paramTypes = null;
_.setter = null;
_.simpleType = null;
function $call(this$static, instance, value){
  this$static.call(instance, value);
}

function beanSetter(bean, key_0){
  return function(value){
    bean.setProperty(key_0, value);
  }
  ;
}

function $add_15(this$static, clazz, constructors){
  this$static[clazz.typeName] = constructors;
}

function $create_0(this$static, clazz, factory){
  var arr;
  arr = this$static[clazz.typeName];
  if (!!arr && !!arr[0]) {
    return arr[0](factory, null);
  }
  return null;
}

function $assign(this$static, parent_0, index){
  $isString(this$static)?(parent_0[index] = this$static.__s , undefined):(parent_0[index] = this$static , undefined);
}

function $assign_0(this$static, parent_0, index){
  $isString(this$static)?(parent_0[index] = this$static.__s , undefined):(parent_0[index] = this$static , undefined);
}

function $getPayload(this$static){
  var sb;
  if ($isString(this$static)) {
    return escapeValue(this$static.__s);
  }
  if (stringifyFastSupported()) {
    return $stringifyFast(this$static);
  }
  return sb = new StringBuilder_0 , $stringifySlow(this$static, sb) , $toString_0(sb.data);
}

function $getPropertyKeys(this$static){
  var toReturn;
  toReturn = new ArrayList_0;
  $getPropertyKeys0(this$static, toReturn);
  return $clinit_Collections() , toReturn?new Collections$UnmodifiableRandomAccessList_0(toReturn):new Collections$UnmodifiableList_0(null);
}

function $getPropertyKeys0(this$static, list){
  for (key in this$static) {
    this$static.hasOwnProperty(key) && list.add_1(key);
  }
}

function $getRaw(this$static, index){
  _ = this$static[index];
  if (_ == null) {
    return null;
  }
  if (isUnwrappedString(_)) {
    return {__s:_};
  }
  return Object(_);
}

function $getRaw_0(this$static, index){
  _ = this$static[index];
  if (_ == null) {
    return null;
  }
  if (isUnwrappedString(_)) {
    return {__s:_};
  }
  return Object(_);
}

function $getReified(this$static, key_0){
  return this$static.__reified && this$static.__reified[':' + key_0];
}

function $isIndexed(this$static){
  return Object.prototype.toString.call(this$static) == '[object Array]';
}

function $isNumber(this$static){
  return Object.prototype.toString.call(this$static) == '[object Number]';
}

function $isReified(this$static, key_0){
  return !!(this$static.__reified && this$static.__reified.hasOwnProperty(':' + key_0));
}

function $isString(this$static){
  return this$static && this$static.__s != null;
}

function $setReified(this$static, key_0, object){
  (this$static.__reified || (this$static.__reified = function(){
  }
  ))[':' + key_0] = object;
}

function $setSize_0(this$static, size){
  this$static.length = size;
}

function $stringifyFast(this$static){
  return $wnd.JSON.stringify(this$static, function(key_0, value){
    if (key_0 == '$H') {
      return;
    }
    return value;
  }
  );
}

function $stringifySlow(this$static, sb){
  var i, j, key_0, key$iterator, needsComma, value;
  if (this$static == ($clinit_Splittable() , NULL)) {
    $append_1(sb.data, 'null');
    return;
  }
  if (Object.prototype.toString.call(this$static) == '[object Boolean]') {
    $append_2(sb.data, this$static == true);
    return;
  }
  if ($isNumber(this$static)) {
    $append_7(sb, Number(this$static));
    return;
  }
  if ($isString(this$static)) {
    $append_10(sb, escapeValue(this$static.__s));
    return;
  }
  if ($isIndexed(this$static)) {
    $append_1(sb.data, '[');
    for (i = 0 , j = this$static.length; i < j; ++i) {
      i > 0 && ($append_1(sb.data, ',') , sb);
      $stringifySlow($getRaw(this$static, i), sb);
    }
    $append_1(sb.data, ']');
    return;
  }
  $append_1(sb.data, '{');
  needsComma = false;
  for (key$iterator = new Collections$UnmodifiableCollectionIterator_0($getPropertyKeys(this$static).coll.iterator()); key$iterator.it.hasNext();) {
    key_0 = dynamicCast(key$iterator.it.next_0(), Q$String);
    needsComma?($append_1(sb.data, ',') , sb):(needsComma = true);
    value = $getRaw_0(this$static, key_0);
    if (!(Object.prototype.toString.call(value) == '[object Function]')) {
      if ($equals_5('$H', key_0)) {
        continue;
      }
      $append_10(sb, escapeValue(key_0));
      $append_1(sb.data, ':');
      $stringifySlow(value, sb);
    }
  }
  $append_1(sb.data, '}');
}

function create0_0(object){
  return Number(object);
}

function create0_1(object){
  return Boolean(object);
}

function isUnwrappedString(obj){
  return Object.prototype.toString.call(obj) == '[object String]';
}

function stringifyFastSupported(){
  if (stringifyFastTested) {
    return stringifyFastResult;
  }
  stringifyFastTested = true;
  return stringifyFastResult = stringifyFastSupported0();
}

function stringifyFastSupported0(){
  return $wnd.JSON && $wnd.JSON.stringify && $wnd.JSON.stringify({b:function(){
  }
  }) == '{}';
}

var stringifyFastResult = false, stringifyFastTested = false;
function decode(factory, clazz, data){
  return doDecode(new AutoBeanCodexImpl$EncodeState_0(factory, null), clazz, data);
}

function decode_0(factory, clazz, payload){
  var data;
  data = split_0(payload);
  return doDecode(new AutoBeanCodexImpl$EncodeState_0(factory, null), clazz, data);
}

function encode(bean){
  var sb, state;
  if (!bean) {
    return $clinit_Splittable() , NULL;
  }
  sb = new StringBuilder_0;
  state = new AutoBeanCodexImpl$EncodeState_0(bean.factory, sb);
  doEncode(state, bean);
  return split_0($toString_0(sb.data));
}

function diff_1(a, b){
  var toReturn;
  if (a == b) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_MAP;
  }
  toReturn = getAllProperties(b);
  a.accept(new AutoBeanUtils$1_0(toReturn));
  return toReturn;
}

function getAllProperties(bean){
  var toReturn;
  toReturn = new LinkedHashMap_0;
  bean.accept(new AutoBeanUtils$2_0(toReturn));
  return toReturn;
}

function getAutoBean(delegate){
  return delegate == null?null:dynamicCast(get(delegate, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean);
}

defineSeed(578, 1, {});
_.endVisit = function endVisit(bean, ctx){
}
;
_.visit = function visit(bean, ctx){
  return true;
}
;
_.visitCollectionProperty = function visitCollectionProperty(propertyName, value, ctx){
  return this.visitReferenceProperty(propertyName, value, ctx);
}
;
_.visitReferenceProperty = function visitReferenceProperty(propertyName, value, ctx){
  return true;
}
;
_.visitValueProperty = function visitValueProperty(propertyName, value, ctx){
  return true;
}
;
function $equal(this$static, propertyName, previousValue){
  var currentValue;
  currentValue = $get_7(this$static.val$toReturn, propertyName);
  return previousValue == null && currentValue == null || previousValue != null && equals__devirtual$(previousValue, currentValue);
}

function AutoBeanUtils$1_0(val$toReturn){
  this.val$toReturn = val$toReturn;
}

defineSeed(577, 578, {}, AutoBeanUtils$1_0);
_.visitReferenceProperty = function visitReferenceProperty_0(propertyName, previousValue, ctx){
  $containsKey(this.val$toReturn, propertyName)?(!previousValue && $get_7(this.val$toReturn, propertyName) == null || !!previousValue && $equal(this, propertyName, previousValue.as())) && $remove_16(this.val$toReturn, propertyName):$put_3(this.val$toReturn, propertyName, null);
  return false;
}
;
_.visitValueProperty = function visitValueProperty_0(propertyName, previousValue, ctx){
  $containsKey(this.val$toReturn, propertyName)?$equal(this, propertyName, previousValue) && $remove_16(this.val$toReturn, propertyName):$put_3(this.val$toReturn, propertyName, null);
  return false;
}
;
_.val$toReturn = null;
function AutoBeanUtils$2_0(val$toReturn){
  this.val$toReturn = val$toReturn;
}

defineSeed(579, 578, {}, AutoBeanUtils$2_0);
_.visitReferenceProperty = function visitReferenceProperty_1(propertyName, value, ctx){
  $put_3(this.val$toReturn, propertyName, !value?null:value.as());
  return false;
}
;
_.visitValueProperty = function visitValueProperty_1(propertyName, value, ctx){
  $put_3(this.val$toReturn, propertyName, value);
  return false;
}
;
_.val$toReturn = null;
defineSeed(580, 1, {});
_.endVisitType = function endVisitType(type){
}
;
function $clinit_Splittable(){
  $clinit_Splittable = nullMethod;
  NULL = null;
}

var NULL;
function $clinit_ValueCodex(){
  $clinit_ValueCodex = nullMethod;
  var t, t$array, t$index, t$max, temp;
  temp = new HashMap_0;
  for (t$array = ($clinit_ValueCodex$Type() , $clinit_ValueCodex$Type() , $VALUES_16) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    temp.put(t.type_0, t);
    !!t.primitiveType && temp.put(t.primitiveType, t);
  }
  $clinit_Collections();
  new Collections$UnmodifiableSet_0($keySet(temp));
  TYPES_BY_CLASS = new Collections$UnmodifiableMap_0(temp);
}

function canDecode(clazz){
  $clinit_ValueCodex();
  if (findType(clazz)) {
    return true;
  }
  return false;
}

function decode_1(clazz, split){
  $clinit_ValueCodex();
  if (!split || split == ($clinit_Splittable() , NULL)) {
    return null;
  }
  return getTypeOrDie(clazz).decode(clazz, split);
}

function encode_0(clazz, obj){
  $clinit_ValueCodex();
  if (obj == null) {
    return $clinit_Splittable() , NULL;
  }
  return getTypeOrDie(clazz).encode(obj);
}

function encode_1(obj){
  $clinit_ValueCodex();
  var maybe, maybe$array, maybe$index, maybe$max, t;
  if (obj == null) {
    return $clinit_Splittable() , NULL;
  }
  t = findType(getClass__devirtual$(obj));
  if (!t) {
    for (maybe$array = ($clinit_ValueCodex$Type() , $clinit_ValueCodex$Type() , $VALUES_16) , maybe$index = 0 , maybe$max = maybe$array.length; maybe$index < maybe$max; ++maybe$index) {
      maybe = maybe$array[maybe$index];
      if (maybe.canUpcast(obj)) {
        t = maybe;
        break;
      }
    }
  }
  if (!t) {
    throw new UnsupportedOperationException_1(getClass__devirtual$(obj).typeName);
  }
  return t.encode(obj);
}

function findType(clazz){
  if ((clazz.modifiers & 8) != 0) {
    return $clinit_ValueCodex$Type() , ENUM;
  }
  return dynamicCast($get_9(TYPES_BY_CLASS, clazz), Q$ValueCodex$Type);
}

function getTypeOrDie(clazz){
  var toReturn;
  toReturn = findType(clazz);
  if (!toReturn) {
    throw new UnsupportedOperationException_1(clazz.typeName);
  }
  return toReturn;
}

function getUninitializedFieldValue(clazz){
  $clinit_ValueCodex();
  var type;
  type = getTypeOrDie(clazz);
  if (clazz == type.primitiveType) {
    return type.defaultValue;
  }
  return null;
}

var TYPES_BY_CLASS = null;
function $clinit_ValueCodex$Type(){
  $clinit_ValueCodex$Type = nullMethod;
  BIG_DECIMAL = new ValueCodex$Type$1_0(Ljava_math_BigDecimal_2_classLit);
  BIG_INTEGER = new ValueCodex$Type$2_0(Ljava_math_BigInteger_2_classLit);
  BOOLEAN = new ValueCodex$Type$3_0(Ljava_lang_Boolean_2_classLit, Z_classLit, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1));
  BYTE = new ValueCodex$Type$4_0(Ljava_lang_Byte_2_classLit, B_classLit, valueOf(0));
  CHARACTER = new ValueCodex$Type$5_0(Ljava_lang_Character_2_classLit, C_classLit, valueOf_0(0));
  DATE = new ValueCodex$Type$6_0(Ljava_util_Date_2_classLit);
  DOUBLE_0 = new ValueCodex$Type$7_0(Ljava_lang_Double_2_classLit, D_classLit, ($clinit_Double() , new Double_0(0)));
  ENUM = new ValueCodex$Type$8_0(Ljava_lang_Enum_2_classLit);
  FLOAT = new ValueCodex$Type$9_0(Ljava_lang_Float_2_classLit, F_classLit, new Float_0(0));
  INTEGER = new ValueCodex$Type$10_0(Ljava_lang_Integer_2_classLit, I_classLit, valueOf_1(0));
  LONG = new ValueCodex$Type$11_0(Ljava_lang_Long_2_classLit, J_classLit, valueOf_2(P0_longLit));
  SHORT = new ValueCodex$Type$12_0(Ljava_lang_Short_2_classLit, S_classLit, valueOf_3(0));
  STRING = new ValueCodex$Type$13_0(Ljava_lang_String_2_classLit);
  SPLITTABLE = new ValueCodex$Type$14_0(Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit);
  VOID = new ValueCodex$Type$15_0(Ljava_lang_Void_2_classLit, V_classLit);
  $VALUES_16 = initValues(_3Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$ValueCodex$Type, [BIG_DECIMAL, BIG_INTEGER, BOOLEAN, BYTE, CHARACTER, DATE, DOUBLE_0, ENUM, FLOAT, INTEGER, LONG, SHORT, STRING, SPLITTABLE, VOID]);
}

function ValueCodex$Type_0(enum$name, enum$ordinal, objectType){
  ValueCodex$Type_1.call(this, enum$name, enum$ordinal, objectType, null, null);
}

function ValueCodex$Type_1(enum$name, enum$ordinal, objectType, primitiveType, defaultValue){
  Enum_0.call(this, enum$name, enum$ordinal);
  this.type_0 = objectType;
  this.primitiveType = primitiveType;
  this.defaultValue = defaultValue;
}

function values_17(){
  $clinit_ValueCodex$Type();
  return $VALUES_16;
}

defineSeed(582, 31, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]));
_.canUpcast = function canUpcast(value){
  return false;
}
;
_.defaultValue = null;
_.primitiveType = null;
_.type_0 = null;
var $VALUES_16, BIG_DECIMAL, BIG_INTEGER, BOOLEAN, BYTE, CHARACTER, DATE, DOUBLE_0, ENUM, FLOAT, INTEGER, LONG, SHORT, SPLITTABLE, STRING, VOID;
function ValueCodex$Type$1_0($anonymous0){
  ValueCodex$Type_0.call(this, 'BIG_DECIMAL', 0, $anonymous0);
}

defineSeed(583, 582, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$1_0);
_.canUpcast = function canUpcast_0(value){
  return instanceOf(value, Q$BigDecimal);
}
;
_.decode = function decode_2(clazz, value){
  return new BigDecimal_1(value.__s);
}
;
_.encode = function encode_2(value){
  return {__s:$toString_3(dynamicCast(value, Q$BigDecimal))};
}
;
function ValueCodex$Type$10_0($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_1.call(this, 'INTEGER', 9, $anonymous0, $anonymous1, $anonymous2);
}

defineSeed(584, 582, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$10_0);
_.decode = function decode_3(clazz, value){
  return valueOf_1(round_int(Number(value)));
}
;
_.encode = function encode_3(value){
  return create0_0(dynamicCast(value, Q$Integer).value_0);
}
;
function $decode(value){
  if ($isNumber(value)) {
    return valueOf_2(fromDouble(Number(value)));
  }
  return valueOf_2(__parseAndValidateLong(value.__s));
}

function ValueCodex$Type$11_0($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_1.call(this, 'LONG', 10, $anonymous0, $anonymous1, $anonymous2);
}

defineSeed(585, 582, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$11_0);
_.decode = function decode_4(clazz, value){
  return $decode(value);
}
;
_.encode = function encode_4(value){
  return {__s:'' + dynamicCast(value, Q$Long)};
}
;
function ValueCodex$Type$12_0($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_1.call(this, 'SHORT', 11, $anonymous0, $anonymous1, $anonymous2);
}

defineSeed(586, 582, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$12_0);
_.decode = function decode_5(clazz, value){
  return valueOf_3(round_short(Number(value)));
}
;
_.encode = function encode_5(value){
  return create0_0(dynamicCast(value, Q$Short).value_0);
}
;
function ValueCodex$Type$13_0($anonymous0){
  ValueCodex$Type_0.call(this, 'STRING', 12, $anonymous0);
}

defineSeed(587, 582, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$13_0);
_.decode = function decode_6(clazz, value){
  return value.__s;
}
;
_.encode = function encode_6(value){
  return {__s:dynamicCast(value, Q$String)};
}
;
function ValueCodex$Type$14_0($anonymous0){
  ValueCodex$Type_0.call(this, 'SPLITTABLE', 13, $anonymous0);
}

defineSeed(588, 582, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$14_0);
_.decode = function decode_7(clazz, value){
  return value;
}
;
_.encode = function encode_7(value){
  return dynamicCastJso(value);
}
;
function ValueCodex$Type$15_0($anonymous0, $anonymous1){
  ValueCodex$Type_1.call(this, 'VOID', 14, $anonymous0, $anonymous1, null);
}

defineSeed(589, 582, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$15_0);
_.decode = function decode_8(clazz, value){
  return null;
}
;
_.encode = function encode_8(value){
  return null;
}
;
function ValueCodex$Type$2_0($anonymous0){
  ValueCodex$Type_0.call(this, 'BIG_INTEGER', 1, $anonymous0);
}

defineSeed(590, 582, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$2_0);
_.canUpcast = function canUpcast_1(value){
  return instanceOf(value, Q$BigInteger);
}
;
_.decode = function decode_9(clazz, value){
  return new BigInteger_4(value.__s);
}
;
_.encode = function encode_9(value){
  return {__s:toDecimalScaledString_0(dynamicCast(value, Q$BigInteger), 0)};
}
;
function ValueCodex$Type$3_0($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_1.call(this, 'BOOLEAN', 2, $anonymous0, $anonymous1, $anonymous2);
}

defineSeed(591, 582, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$3_0);
_.decode = function decode_10(clazz, value){
  return $clinit_Boolean() , value == true?TRUE_1:FALSE_1;
}
;
_.encode = function encode_10(value){
  return create0_1(dynamicCast(value, Q$Boolean).value_0);
}
;
function ValueCodex$Type$4_0($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_1.call(this, 'BYTE', 3, $anonymous0, $anonymous1, $anonymous2);
}

defineSeed(592, 582, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$4_0);
_.decode = function decode_11(clazz, value){
  return valueOf(round_byte(Number(value)));
}
;
_.encode = function encode_11(value){
  return create0_0(dynamicCast(value, Q$Byte).value_0);
}
;
function ValueCodex$Type$5_0($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_1.call(this, 'CHARACTER', 4, $anonymous0, $anonymous1, $anonymous2);
}

defineSeed(593, 582, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$5_0);
_.decode = function decode_12(clazz, value){
  return valueOf_0(value.__s.charCodeAt(0));
}
;
_.encode = function encode_12(value){
  return {__s:'' + dynamicCast(value, Q$Character)};
}
;
function $decode_0(value){
  if ($isNumber(value)) {
    return new Date_1(fromDouble(Number(value)));
  }
  return tryParseDate(value.__s);
}

function ValueCodex$Type$6_0($anonymous0){
  ValueCodex$Type_0.call(this, 'DATE', 5, $anonymous0);
}

defineSeed(594, 582, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$6_0);
_.canUpcast = function canUpcast_2(value){
  return instanceOf(value, Q$Date);
}
;
_.decode = function decode_13(clazz, value){
  return $decode_0(value);
}
;
_.encode = function encode_13(value){
  return {__s:'' + toString_6(fromDouble(dynamicCast(value, Q$Date).jsdate.getTime()))};
}
;
function ValueCodex$Type$7_0($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_1.call(this, 'DOUBLE', 6, $anonymous0, $anonymous1, $anonymous2);
}

defineSeed(595, 582, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$7_0);
_.decode = function decode_14(clazz, value){
  return $clinit_Double() , new Double_0(Number(value));
}
;
_.encode = function encode_14(value){
  return create0_0(dynamicCast(value, Q$Double).value_0);
}
;
function ValueCodex$Type$8_0($anonymous0){
  ValueCodex$Type_0.call(this, 'ENUM', 7, $anonymous0);
}

defineSeed(596, 582, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$8_0);
_.canUpcast = function canUpcast_3(value){
  return instanceOf(value, Q$Enum);
}
;
_.decode = function decode_15(clazz, value){
  return dynamicCast($getEnumConstants(clazz)[round_int(Number(value))], Q$Enum);
}
;
_.encode = function encode_15(value){
  return create0_0(dynamicCast(value, Q$Enum).ordinal);
}
;
function ValueCodex$Type$9_0($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_1.call(this, 'FLOAT', 8, $anonymous0, $anonymous1, $anonymous2);
}

defineSeed(597, 582, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$9_0);
_.decode = function decode_16(clazz, value){
  return new Float_0(Number(value));
}
;
_.encode = function encode_16(value){
  return create0_0(dynamicCast(value, Q$Float).value_0);
}
;
function $checkFrozen(this$static){
  if (this$static.frozen) {
    throw new IllegalStateException_1('The AutoBean has been frozen');
  }
}

function $checkWrapped(this$static){
  if (this$static.wrapped == null && !this$static.usingSimplePeer) {
    throw new IllegalStateException_1('The AutoBean has been unwrapped');
  }
}

function $getOrReify(this$static, propertyName){
  var coder, temp, toReturn;
  $checkWrapped(this$static);
  if ($isReified(this$static.data, propertyName)) {
    temp = $getReified(this$static.data, propertyName);
    return temp;
  }
  if (this$static.data[propertyName] == null) {
    return null;
  }
  $setReified(this$static.data, propertyName, null);
  coder = doCoderFor(this$static, propertyName);
  toReturn = coder.decode_0(new AutoBeanCodexImpl$EncodeState_0(this$static.factory, null), $getRaw_0(this$static.data, propertyName));
  $setReified(this$static.data, propertyName, toReturn);
  return toReturn;
}

function $getTag(this$static, tagName){
  return !this$static.tags?null:this$static.tags.get_1(tagName);
}

function $getWrapped(this$static){
  $checkWrapped(this$static);
  return this$static.wrapped;
}

function $setData(this$static, data){
  this$static.data = data;
  this$static.wrapped = this$static.createSimplePeer();
}

function $setProperty(this$static, propertyName, value){
  var backing, coder;
  $checkWrapped(this$static);
  $checkFrozen(this$static);
  $setReified(this$static.data, propertyName, value);
  if (value == null) {
    $assign_0(($clinit_Splittable() , NULL), this$static.data, propertyName);
    return;
  }
  coder = doCoderFor(this$static, propertyName);
  backing = coder.extractSplittable(new AutoBeanCodexImpl$EncodeState_0(this$static.factory, null), value);
  !backing?$setReified(this$static.data, '__unsplittableValues', ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)):$assign_0(backing, this$static.data, propertyName);
}

function $traverse_0(this$static, visitor, ctx){
  if (!$add_20(ctx.seen, this$static)) {
    return;
  }
  visitor.visit(this$static, ctx) && this$static.traverseProperties(visitor, ctx);
  visitor.endVisit(this$static, ctx);
}

function AbstractAutoBean_0(factory){
  AbstractAutoBean_1.call(this, factory, {});
}

function AbstractAutoBean_1(factory, data){
  this.data = data;
  this.factory = factory;
  this.usingSimplePeer = true;
  this.wrapped = this.createSimplePeer();
}

function AbstractAutoBean_2(wrapped, factory){
  this.factory = factory;
  this.usingSimplePeer = false;
  this.data = null;
  this.wrapped = wrapped;
  setNative(wrapped, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this);
}

defineSeed(598, 1, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]));
_.accept = function accept(visitor){
  $traverse_0(this, visitor, new AbstractAutoBean$OneShotContext_0);
}
;
_.createSimplePeer = function createSimplePeer(){
  throw new UnsupportedOperationException_0;
}
;
_.getFactory = function getFactory(){
  return this.factory;
}
;
_.getSplittable = function getSplittable(){
  return this.data;
}
;
_.getTag = function getTag(tagName){
  return $getTag(this, tagName);
}
;
_.isFrozen = function isFrozen(){
  return this.frozen;
}
;
_.setFrozen = function setFrozen(frozen){
  this.frozen = frozen;
}
;
_.setProperty = function setProperty(propertyName, value){
  $setProperty(this, propertyName, value);
}
;
_.setTag = function setTag(tagName, value){
  !this.tags && (this.tags = new HashMap_0);
  this.tags.put(tagName, value);
}
;
_.data = null;
_.factory = null;
_.frozen = false;
_.tags = null;
_.usingSimplePeer = false;
_.wrapped = null;
function AbstractAutoBean$OneShotContext_0(){
  this.seen = new HashSet_0;
}

defineSeed(599, 1, {}, AbstractAutoBean$OneShotContext_0);
function $clinit_AutoBeanCodexImpl(){
  $clinit_AutoBeanCodexImpl = nullMethod;
  coderFor = new HashMap_0;
  coders = new HashMap_0;
}

function doCoderFor(bean, propertyName){
  $clinit_AutoBeanCodexImpl();
  var key_0, toReturn;
  key_0 = bean.getType_0().typeName + ':' + propertyName;
  toReturn = dynamicCast(coderFor.get_1(key_0), Q$AutoBeanCodexImpl$Coder);
  if (!toReturn) {
    $traverse_0(bean, new AutoBeanCodexImpl$PropertyCoderCreator_0, new AbstractAutoBean$OneShotContext_0);
    toReturn = dynamicCast(coderFor.get_1(key_0), Q$AutoBeanCodexImpl$Coder);
    if (!toReturn) {
      throw new IllegalArgumentException_1(propertyName);
    }
  }
  return toReturn;
}

function doDecode(state, clazz, data){
  $clinit_AutoBeanCodexImpl();
  var toReturn;
  toReturn = dynamicCast($getReified(data, Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl_2_classLit.typeName), Q$AutoBean);
  if (toReturn) {
    return toReturn;
  }
  toReturn = state.factory.create(clazz);
  $setReified(data, Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl_2_classLit.typeName, toReturn);
  if (!toReturn) {
    throw new IllegalArgumentException_1(clazz.typeName);
  }
  $setData(dynamicCast(toReturn, Q$AbstractAutoBean), data);
  return toReturn;
}

function doEncode(state, bean){
  $clinit_AutoBeanCodexImpl();
  var e, ex;
  e = new AutoBeanCodexImpl$PropertyGetter_0(state);
  try {
    bean.accept(e);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$AutoBeanCodexImpl$HaltException)) {
      ex = $e0;
      throw dynamicCast(ex.cause, Q$RuntimeException);
    }
     else 
      throw $e0;
  }
}

function enumCoder(type){
  $clinit_AutoBeanCodexImpl();
  var toReturn;
  toReturn = dynamicCast(coders.get_1(type), Q$AutoBeanCodexImpl$Coder);
  if (!toReturn) {
    toReturn = new AutoBeanCodexImpl$EnumCoder_0(type);
    coders.put(type, toReturn);
  }
  return toReturn;
}

function key_1(bean, propertyName){
  $clinit_AutoBeanCodexImpl();
  return bean.getType_0().typeName + ':' + propertyName;
}

function objectCoder(type){
  $clinit_AutoBeanCodexImpl();
  var toReturn;
  toReturn = dynamicCast(coders.get_1(type), Q$AutoBeanCodexImpl$Coder);
  if (!toReturn) {
    toReturn = new AutoBeanCodexImpl$ObjectCoder_0(type);
    coders.put(type, toReturn);
  }
  return toReturn;
}

function tryExtractSplittable(value){
  var maybeJsoInvocation;
  $clinit_AutoBeanCodexImpl();
  var bean;
  bean = value == null?null:dynamicCast(get(value, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean);
  if (instanceOfOrJso(bean, Q$HasSplittable)) {
    return maybeJsoInvocation = dynamicCastAllowJso(bean, Q$HasSplittable) , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.getSplittable():maybeJsoInvocation;
  }
  return null;
}

function valueCoder_0(type){
  $clinit_AutoBeanCodexImpl();
  var toReturn;
  toReturn = dynamicCast(coders.get_1(type), Q$AutoBeanCodexImpl$Coder);
  if (!toReturn) {
    toReturn = new AutoBeanCodexImpl$ValueCoder_0(type);
    coders.put(type, toReturn);
  }
  return toReturn;
}

var coderFor, coders;
function AutoBeanCodexImpl$CoderCreator_0(){
  this.stack = new Stack_0;
}

defineSeed(601, 580, {}, AutoBeanCodexImpl$CoderCreator_0);
_.endVisitType = function endVisitType_0(type){
  Ljava_util_List_2_classLit == type || Ljava_util_Set_2_classLit == type?$add_21(this.stack, ($clinit_AutoBeanCodexImpl() , new AutoBeanCodexImpl$CollectionCoder_0(type, dynamicCast($pop_0(this.stack), Q$AutoBeanCodexImpl$Coder)))):Ljava_util_Map_2_classLit == type?$add_21(this.stack, ($clinit_AutoBeanCodexImpl() , new AutoBeanCodexImpl$MapCoder_0(dynamicCast($pop_0(this.stack), Q$AutoBeanCodexImpl$Coder), dynamicCast($pop_0(this.stack), Q$AutoBeanCodexImpl$Coder)))):Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit == type?$add_21(this.stack, ($clinit_AutoBeanCodexImpl() , $clinit_AutoBeanCodexImpl$SplittableCoder() , INSTANCE_5)):$getEnumConstants(type) != null?$add_21(this.stack, enumCoder(type)):canDecode(type)?$push_2(this.stack, valueCoder_0(type)):$push_2(this.stack, objectCoder(type));
}
;
function $encode(this$static, state, value){
  var it;
  if (value == null) {
    $append_10(state.sb, 'null');
    return;
  }
  it = dynamicCast(value, Q$Collection).iterator();
  $append_10(state.sb, '[');
  if (it.hasNext()) {
    this$static.elementDecoder.encode_0(state, it.next_0());
    while (it.hasNext()) {
      $append_10(state.sb, ',');
      this$static.elementDecoder.encode_0(state, it.next_0());
    }
  }
  $append_10(state.sb, ']');
}

function AutoBeanCodexImpl$CollectionCoder_0(type, elementDecoder){
  this.elementDecoder = elementDecoder;
  this.type_0 = type;
}

defineSeed(602, 1, makeCastMap([Q$AutoBeanCodexImpl$Coder]), AutoBeanCodexImpl$CollectionCoder_0);
_.decode_0 = function decode_17(state, data){
  var collection;
  if (Ljava_util_List_2_classLit == this.type_0) {
    collection = new SplittableList_0(data, this.elementDecoder, state);
  }
   else if (Ljava_util_Set_2_classLit == this.type_0) {
    collection = new SplittableSet_0(data, this.elementDecoder, state);
  }
   else {
    throw new RuntimeException_0(this.type_0.typeName);
  }
  return collection;
}
;
_.encode_0 = function encode_17(state, value){
  $encode(this, state, value);
}
;
_.extractSplittable = function extractSplittable(state, value){
  return tryExtractSplittable(value);
}
;
_.elementDecoder = null;
_.type_0 = null;
function AutoBeanCodexImpl$EncodeState_0(factory, sb){
  this.factory = factory;
  this.enumMap = instanceOf(factory, Q$EnumMap)?dynamicCast(factory, Q$EnumMap):null;
  this.sb = sb;
  this.seen = !sb?null:new Stack_0;
}

defineSeed(603, 1, {}, AutoBeanCodexImpl$EncodeState_0);
_.enumMap = null;
_.factory = null;
_.sb = null;
_.seen = null;
function AutoBeanCodexImpl$EnumCoder_0(type){
  this.type_0 = type;
}

defineSeed(604, 1, makeCastMap([Q$AutoBeanCodexImpl$Coder]), AutoBeanCodexImpl$EnumCoder_0);
_.decode_0 = function decode_18(state, data){
  return state.enumMap.getEnum(this.type_0, data.__s);
}
;
_.encode_0 = function encode_18(state, value){
  if (value == null) {
    $append_10(state.sb, 'null');
    return;
  }
  $append_10(state.sb, escapeValue(state.enumMap.getToken(dynamicCast(value, Q$Enum))));
}
;
_.extractSplittable = function extractSplittable_0(state, value){
  return split_0(escapeValue(state.enumMap.getToken(dynamicCast(value, Q$Enum))));
}
;
_.type_0 = null;
function AutoBeanCodexImpl$HaltException_0(cause){
  RuntimeException_2.call(this, cause);
}

defineSeed(605, 97, makeCastMap([Q$AutoBeanCodexImpl$HaltException, Q$Serializable, Q$RuntimeException, Q$Throwable]), AutoBeanCodexImpl$HaltException_0);
function AutoBeanCodexImpl$MapCoder_0(valueDecoder, keyDecoder){
  this.keyDecoder = keyDecoder;
  this.valueDecoder = valueDecoder;
}

defineSeed(606, 1, makeCastMap([Q$AutoBeanCodexImpl$Coder]), AutoBeanCodexImpl$MapCoder_0);
_.decode_0 = function decode_19(state, data){
  var toReturn;
  $isIndexed(data)?(toReturn = new SplittableComplexMap_0(data, this.keyDecoder, this.valueDecoder, state)):(toReturn = new SplittableSimpleMap_0(data, this.keyDecoder, this.valueDecoder, state));
  return toReturn;
}
;
_.encode_0 = function encode_19(state, value){
  var entry, entry$iterator, first, isSimpleMap, keys, map, mapKey, mapValue, values;
  if (value == null) {
    $append_10(state.sb, 'null');
    return;
  }
  map = dynamicCast(value, Q$Map);
  isSimpleMap = instanceOf(this.keyDecoder, Q$AutoBeanCodexImpl$ValueCoder);
  if (isSimpleMap) {
    first = true;
    $append_10(state.sb, '{');
    for (entry$iterator = map.entrySet_0().iterator(); entry$iterator.hasNext();) {
      entry = dynamicCast(entry$iterator.next_0(), Q$Map$Entry);
      mapKey = entry.getKey();
      if (mapKey == null) {
        continue;
      }
      mapValue = entry.getValue_0();
      first?(first = false):$append_10(state.sb, ',');
      this.keyDecoder.encode_0(state, mapKey);
      $append_10(state.sb, ':');
      mapValue == null?$append_10(state.sb, 'null'):this.valueDecoder.encode_0(state, mapValue);
    }
    $append_10(state.sb, '}');
  }
   else {
    keys = new ArrayList_1(map.size_1());
    values = new ArrayList_1(map.size_1());
    for (entry$iterator = map.entrySet_0().iterator(); entry$iterator.hasNext();) {
      entry = dynamicCast(entry$iterator.next_0(), Q$Map$Entry);
      $add_19(keys, entry.getKey());
      $add_19(values, entry.getValue_0());
    }
    $append_10(state.sb, '[');
    $clinit_AutoBeanCodexImpl();
    $encode(new AutoBeanCodexImpl$CollectionCoder_0(Ljava_util_List_2_classLit, this.keyDecoder), state, keys);
    $append_10(state.sb, ',');
    $encode(new AutoBeanCodexImpl$CollectionCoder_0(Ljava_util_List_2_classLit, this.valueDecoder), state, values);
    $append_10(state.sb, ']');
  }
}
;
_.extractSplittable = function extractSplittable_1(state, value){
  return tryExtractSplittable(value);
}
;
_.keyDecoder = null;
_.valueDecoder = null;
function AutoBeanCodexImpl$ObjectCoder_0(type){
  this.type_0 = type;
}

defineSeed(607, 1, makeCastMap([Q$AutoBeanCodexImpl$Coder]), AutoBeanCodexImpl$ObjectCoder_0);
_.decode_0 = function decode_20(state, data){
  var bean;
  bean = doDecode(state, this.type_0, data);
  return !bean?null:bean.as();
}
;
_.encode_0 = function encode_20(state, value){
  if (value == null) {
    $append_10(state.sb, 'null');
    return;
  }
  doEncode(state, value == null?null:dynamicCast(get(value, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean));
}
;
_.extractSplittable = function extractSplittable_2(state, value){
  return tryExtractSplittable(value);
}
;
_.type_0 = null;
function $maybeCreateCoder(this$static, propertyName, ctx){
  var creator;
  creator = new AutoBeanCodexImpl$CoderCreator_0;
  $traverse(ctx, creator, 0);
  ($clinit_AutoBeanCodexImpl() , coderFor).put(key_1(this$static.bean, propertyName), dynamicCast($pop_0(creator.stack), Q$AutoBeanCodexImpl$Coder));
}

function AutoBeanCodexImpl$PropertyCoderCreator_0(){
}

defineSeed(608, 578, {}, AutoBeanCodexImpl$PropertyCoderCreator_0);
_.visit = function visit_0(bean, ctx){
  this.bean = bean;
  return true;
}
;
_.visitReferenceProperty = function visitReferenceProperty_2(propertyName, value, ctx){
  $maybeCreateCoder(this, propertyName, ctx);
  return false;
}
;
_.visitValueProperty = function visitValueProperty_2(propertyName, value, ctx){
  $maybeCreateCoder(this, propertyName, ctx);
  return false;
}
;
_.bean = null;
function $encodeProperty(this$static, propertyName, value, ctx){
  var decoder, pd;
  pd = new AutoBeanCodexImpl$CoderCreator_0;
  $traverse(ctx, pd, 0);
  decoder = dynamicCast($pop_0(pd.stack), Q$AutoBeanCodexImpl$Coder);
  this$static.first?(this$static.first = false):$append_10(this$static.state.sb, ',');
  $append_10(this$static.state.sb, escapeValue(propertyName));
  $append_10(this$static.state.sb, ':');
  decoder.encode_0(this$static.state, value);
}

function AutoBeanCodexImpl$PropertyGetter_0(state){
  this.state = state;
}

defineSeed(609, 578, {}, AutoBeanCodexImpl$PropertyGetter_0);
_.endVisit = function endVisit_0(bean, ctx){
  $append_10(this.state.sb, '}');
  $pop_0(this.state.seen);
}
;
_.visit = function visit_1(bean, ctx){
  if ($contains_2(this.state.seen, bean)) {
    throw new AutoBeanCodexImpl$HaltException_0(new UnsupportedOperationException_1('Cycles not supported'));
  }
  $add_21(this.state.seen, bean);
  $append_10(this.state.sb, '{');
  return true;
}
;
_.visitReferenceProperty = function visitReferenceProperty_3(propertyName, value, ctx){
  !!value && $encodeProperty(this, propertyName, value.as(), ctx);
  return false;
}
;
_.visitValueProperty = function visitValueProperty_3(propertyName, value, ctx){
  value != null && !equals__devirtual$(value, getUninitializedFieldValue(!ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType)) && $encodeProperty(this, propertyName, value, ctx);
  return false;
}
;
_.first = true;
_.state = null;
function $clinit_AutoBeanCodexImpl$SplittableCoder(){
  $clinit_AutoBeanCodexImpl$SplittableCoder = nullMethod;
  INSTANCE_5 = new AutoBeanCodexImpl$SplittableCoder_0;
}

function AutoBeanCodexImpl$SplittableCoder_0(){
}

defineSeed(610, 1, makeCastMap([Q$AutoBeanCodexImpl$Coder]), AutoBeanCodexImpl$SplittableCoder_0);
_.decode_0 = function decode_21(state, data){
  return data;
}
;
_.encode_0 = function encode_21(state, value){
  if (value == null) {
    $append_10(state.sb, 'null');
    return;
  }
  $append_10(state.sb, $getPayload(dynamicCastJso(value)));
}
;
_.extractSplittable = function extractSplittable_3(state, value){
  return dynamicCastJso(value);
}
;
var INSTANCE_5;
function AutoBeanCodexImpl$ValueCoder_0(type){
  this.type_0 = type;
}

defineSeed(611, 1, makeCastMap([Q$AutoBeanCodexImpl$Coder, Q$AutoBeanCodexImpl$ValueCoder]), AutoBeanCodexImpl$ValueCoder_0);
_.decode_0 = function decode_22(state, propertyValue){
  if (!propertyValue || propertyValue == ($clinit_Splittable() , NULL)) {
    return getUninitializedFieldValue(this.type_0);
  }
  return decode_1(this.type_0, propertyValue);
}
;
_.encode_0 = function encode_22(state, value){
  $append_10(state.sb, $getPayload(encode_0(this.type_0, value)));
}
;
_.extractSplittable = function extractSplittable_4(state, value){
  return encode_0(this.type_0, value);
}
;
_.type_0 = null;
function SplittableComplexMap_0(data, keyCoder, valueCoder, state){
  this.data = data;
  this.keys = new SplittableList_0($getRaw(data, 0), keyCoder, state);
  this.values = new SplittableList_0($getRaw(data, 1), valueCoder, state);
}

defineSeed(612, 1, makeCastMap([Q$Map]), SplittableComplexMap_0);
_.containsKey = function containsKey(key_0){
  return $contains(this.keys, key_0);
}
;
_.entrySet_0 = function entrySet_0(){
  return new SplittableComplexMap$1_0(this);
}
;
_.get_1 = function get_3(key_0){
  var idx;
  idx = $indexOf_1(this.keys, key_0);
  if (idx == -1) {
    return null;
  }
  return $get_5(this.values, idx);
}
;
_.getSplittable = function getSplittable_0(){
  return this.data;
}
;
_.isEmpty_0 = function isEmpty_0(){
  return this.keys.data.length == 0;
}
;
_.put = function put(key_0, value){
  var idx;
  idx = $indexOf_1(this.keys, key_0);
  if (idx == -1) {
    $add_16(this.keys, key_0);
    $add_16(this.values, value);
    return null;
  }
  return $set_3(this.values, idx, value);
}
;
_.remove_3 = function remove_19(key_0){
  var idx;
  idx = $indexOf_1(this.keys, key_0);
  if (idx == -1) {
    return null;
  }
  $remove_15(this.keys, idx);
  return $remove_15(this.values, idx);
}
;
_.size_1 = function size_1(){
  return this.keys.data.length;
}
;
_.data = null;
_.keys = null;
_.values = null;
function $addAll(this$static, c){
  var changed, iter;
  iter = c.iterator();
  changed = false;
  while (iter.hasNext()) {
    this$static.add_1(iter.next_0()) && (changed = true);
  }
  return changed;
}

defineSeed(615, 1, makeCastMap([Q$Iterable, Q$Collection]));
_.addAll = function addAll(c){
  return $addAll(this, c);
}
;
function SplittableComplexMap$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(613, 614, makeCastMap([Q$Iterable, Q$Collection, Q$Set]), SplittableComplexMap$1_0);
_.iterator = function iterator_7(){
  return new SplittableComplexMap$1$1_0(this);
}
;
_.size_1 = function size_2(){
  return this.this$0.keys.data.length;
}
;
_.this$0 = null;
function SplittableComplexMap$1$1_0(this$1){
  this.this$1 = this$1;
  this.keyIt = new AbstractList$IteratorImpl_0(this.this$1.this$0.keys);
  this.valueIt = new AbstractList$ListIteratorImpl_0(this.this$1.this$0.values, 0);
}

defineSeed(616, 1, makeCastMap([Q$Iterator]), SplittableComplexMap$1$1_0);
_.hasNext = function hasNext_5(){
  return $hasNext_1(this.keyIt);
}
;
_.next_0 = function next_6(){
  return new SplittableComplexMap$1$1$1_0(this);
}
;
_.remove_0 = function remove_21(){
  $remove_17(this.keyIt);
  $remove_17(this.valueIt);
}
;
_.this$1 = null;
function SplittableComplexMap$1$1$1_0(this$2){
  this.this$2 = this$2;
  this.key = $next_4(this.this$2.keyIt);
  this.value_0 = $next_4(this.this$2.valueIt);
}

defineSeed(617, 1, makeCastMap([Q$Map$Entry]), SplittableComplexMap$1$1$1_0);
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue_0 = function getValue(){
  return this.value_0;
}
;
_.setValue = function setValue(value){
  $set_4(this.this$2.valueIt, value);
  return value;
}
;
_.this$2 = null;
function $indexOf_1(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size_1(); i < n; ++i) {
    if (toFind == null?this$static.get_0(i) == null:equals__devirtual$(toFind, this$static.get_0(i))) {
      return i;
    }
  }
  return -1;
}

defineSeed(619, 615, makeCastMap([Q$Iterable, Q$Collection, Q$List]));
_.indexOf_0 = function indexOf_0(toFind){
  return $indexOf_1(this, toFind);
}
;
_.set = function set_1(index, o){
  throw new UnsupportedOperationException_1('Set not supported on this list');
}
;
_.subList = function subList_0(fromIndex, toIndex){
  return new AbstractList$SubList_0(this, fromIndex, toIndex);
}
;
function $get_5(this$static, index){
  var toReturn;
  if ($isReified(this$static.data, '' + index)) {
    toReturn = $getReified(this$static.data, '' + index);
    return toReturn;
  }
  return reify(this$static.state, this$static.data, index, this$static.elementCoder);
}

function $remove_15(this$static, index){
  var i, newSize, toReturn;
  toReturn = $get_5(this$static, index);
  newSize = this$static.data.length - 1;
  for (i = index; i < newSize; ++i) {
    $assign($getRaw(this$static.data, i + 1), this$static.data, i);
    $setReified(this$static.data, '' + i, $getReified(this$static.data, '' + (i + 1)));
  }
  $setSize_0(this$static.data, newSize);
  return toReturn;
}

function $set_3(this$static, index, element){
  var previous;
  previous = $get_5(this$static, index);
  set_3(this$static.state, this$static.data, index, this$static.elementCoder, element);
  return previous;
}

function SplittableList_0(data, elementCoder, state){
  this.data = data;
  this.elementCoder = elementCoder;
  this.state = state;
}

function reify(state, data, index, coder){
  var toReturn;
  if (data[index] == null) {
    return null;
  }
  toReturn = coder.decode_0(state, $getRaw(data, index));
  $setReified(data, '' + index, toReturn);
  return toReturn;
}

function set_3(state, data, index, coder, value){
  var backing;
  $setReified(data, '' + index, value);
  if (value == null) {
    $assign(($clinit_Splittable() , NULL), data, index);
    return;
  }
  backing = coder.extractSplittable(state, value);
  !backing?$setReified(data, '__unsplittableValues', ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)):$isString(backing)?(data[index] = backing.__s , undefined):(data[index] = backing , undefined);
}

defineSeed(618, 619, makeCastMap([Q$Iterable, Q$Collection, Q$List]), SplittableList_0);
_.add_0 = function add_6(index, element){
  set_3(this.state, this.data, index, this.elementCoder, element);
}
;
_.get_0 = function get_4(index){
  return $get_5(this, index);
}
;
_.getSplittable = function getSplittable_1(){
  return this.data;
}
;
_.remove_1 = function remove_23(index){
  return $remove_15(this, index);
}
;
_.set = function set_2(index, element){
  return $set_3(this, index, element);
}
;
_.size_1 = function size_3(){
  return this.data.length;
}
;
_.data = null;
_.elementCoder = null;
_.state = null;
function SplittableSet_0(data, elementCoder, state){
  this.data = new SplittableList_0(data, elementCoder, state);
}

defineSeed(620, 614, makeCastMap([Q$Iterable, Q$Collection, Q$Set]), SplittableSet_0);
_.add_1 = function add_7(e){
  if (!$contains(this.data, e)) {
    $add_16(this.data, e);
    return true;
  }
  return false;
}
;
_.getSplittable = function getSplittable_2(){
  return this.data.data;
}
;
_.iterator = function iterator_9(){
  return new AbstractList$IteratorImpl_0(this.data);
}
;
_.remove_2 = function remove_24(o){
  return $remove_14(this.data, o);
}
;
_.size_1 = function size_4(){
  return this.data.data.length;
}
;
_.data = null;
function $get_6(this$static, key_0){
  var encodedKey;
  encodedKey = this$static.keyCoder.extractSplittable(this$static.state, key_0).__s;
  return $getRaw_1(this$static, encodedKey);
}

function $getRaw_1(this$static, encodedKey){
  var toReturn, value;
  if ($isReified(this$static.reified, encodedKey)) {
    toReturn = $getReified(this$static.reified, encodedKey);
    return toReturn;
  }
  if (this$static.data[encodedKey] == null) {
    return null;
  }
  value = $getRaw_0(this$static.data, encodedKey);
  toReturn = this$static.valueCoder.decode_0(this$static.state, value);
  $setReified(this$static.reified, encodedKey, toReturn);
  return toReturn;
}

function $put_2(this$static, key_0, value){
  var encodedKey, encodedValue, toReturn;
  toReturn = $get_6(this$static, key_0);
  encodedKey = this$static.keyCoder.extractSplittable(this$static.state, key_0).__s;
  $setReified(this$static.reified, encodedKey, value);
  encodedValue = this$static.valueCoder.extractSplittable(this$static.state, value);
  !encodedValue?$setReified(this$static.reified, '__unsplittableValues', ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)):$assign_0(encodedValue, this$static.data, encodedKey);
  return toReturn;
}

function SplittableSimpleMap_0(data, keyCoder, valueCoder, state){
  this.reified = {};
  this.data = data;
  this.keyCoder = keyCoder;
  this.state = state;
  this.valueCoder = valueCoder;
}

defineSeed(621, 1, makeCastMap([Q$Map]), SplittableSimpleMap_0);
_.containsKey = function containsKey_0(key_0){
  var encodedKey;
  encodedKey = this.keyCoder.extractSplittable(this.state, key_0).__s;
  return !(this.data[encodedKey] === undefined) || $isReified(this.reified, encodedKey);
}
;
_.entrySet_0 = function entrySet_1(){
  return new SplittableSimpleMap$1_0(this);
}
;
_.get_1 = function get_5(key_0){
  return $get_6(this, key_0);
}
;
_.getSplittable = function getSplittable_3(){
  return this.data;
}
;
_.isEmpty_0 = function isEmpty_2(){
  return $getPropertyKeys(this.data).list.isEmpty_0();
}
;
_.put = function put_0(key_0, value){
  return $put_2(this, key_0, value);
}
;
_.remove_3 = function remove_25(key_0){
  var encodedKey, toReturn;
  toReturn = $get_6(this, key_0);
  encodedKey = this.keyCoder.extractSplittable(this.state, key_0).__s;
  $setReified(this.reified, encodedKey, null);
  $assign_0(($clinit_Splittable() , NULL), this.data, encodedKey);
  return toReturn;
}
;
_.size_1 = function size_5(){
  return $getPropertyKeys(this.data).coll.size_1();
}
;
_.data = null;
_.keyCoder = null;
_.state = null;
_.valueCoder = null;
function SplittableSimpleMap$1_0(this$0){
  this.this$0 = this$0;
  this.keys = $getPropertyKeys(this.this$0.data);
}

defineSeed(622, 614, makeCastMap([Q$Iterable, Q$Collection, Q$Set]), SplittableSimpleMap$1_0);
_.iterator = function iterator_10(){
  return new SplittableSimpleMap$1$1_0(this);
}
;
_.size_1 = function size_6(){
  return this.keys.coll.size_1();
}
;
_.this$0 = null;
function SplittableSimpleMap$1$1_0(this$1){
  this.this$1 = this$1;
  this.keyIterator = new Collections$UnmodifiableCollectionIterator_0(this.this$1.keys.coll.iterator());
}

defineSeed(623, 1, makeCastMap([Q$Iterator]), SplittableSimpleMap$1$1_0);
_.hasNext = function hasNext_6(){
  return this.keyIterator.it.hasNext();
}
;
_.next_0 = function next_7(){
  return this.encodedKey = dynamicCast(this.keyIterator.it.next_0(), Q$String) , new SplittableSimpleMap$1$1$1_0(this);
}
;
_.remove_0 = function remove_26(){
  $assign_0(($clinit_Splittable() , NULL), this.this$1.this$0.data, this.encodedKey);
  $setReified(this.this$1.this$0.reified, this.encodedKey, null);
}
;
_.encodedKey = null;
_.this$1 = null;
function SplittableSimpleMap$1$1$1_0(this$2){
  this.this$2 = this$2;
  this.key = this.this$2.this$1.this$0.keyCoder.decode_0(this.this$2.this$1.this$0.state, split_0(escapeValue(this.this$2.encodedKey)));
  this.value_0 = this.this$2.this$1.this$0.valueCoder.decode_0(this.this$2.this$1.this$0.state, $getRaw_0(this.this$2.this$1.this$0.data, this.this$2.encodedKey));
}

defineSeed(624, 1, makeCastMap([Q$Map$Entry]), SplittableSimpleMap$1$1$1_0);
_.getKey = function getKey_0(){
  return this.key;
}
;
_.getValue_0 = function getValue_0(){
  return this.value_0;
}
;
_.setValue = function setValue_0(newValue){
  return $put_2(this.this$2.this$1.this$0, this.key, newValue);
}
;
_.this$2 = null;
function split_0(payload){
  var c, isSimple, toReturn;
  c = payload.charCodeAt(0);
  isSimple = c != 123 && c != 91;
  isSimple && (payload = '[' + payload + ']');
  toReturn = safeEval(payload);
  isSimple && (toReturn = $getRaw(toReturn, 0));
  return toReturn;
}

function tryParseDate(date){
  var js;
  try {
    return new Date_1(__parseAndValidateLong(date));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$NumberFormatException))
      throw $e0;
  }
  try {
    js = new Date(date);
    return new Date_1(fromDouble(js.getTime()));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$JavaScriptException))
      throw $e0;
  }
  return null;
}

function $send(this$static, payload, receiver){
  var builder;
  builder = new RequestBuilder_0(($clinit_RequestBuilder() , POST), this$static.requestUrl);
  $setHeader(builder, 'Content-Type', 'application/json; charset=utf-8');
  $setHeader(builder, 'pageurl', $wnd.location.href);
  $setHeader(builder, 'X-GWT-Permutation', $strongName);
  builder.requestData = payload;
  $setCallback(builder, new DefaultRequestTransport$1_0(receiver));
  try {
    throwIfNull('callback', builder.callback);
    $doSend(builder, builder.requestData, builder.callback);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$RequestException))
      throw $e0;
  }
}

function DefaultRequestTransport_0(){
  this.requestUrl = getHostPageBaseURL() + 'gwtRequest';
}

defineSeed(630, 1, {}, DefaultRequestTransport_0);
function $onError(this$static, exception){
  $onTransportFailure_0(this$static.val$receiver, new ServerFailure_0(exception.detailMessage));
}

function $onResponseReceived(this$static, response){
  var message, text;
  if (200 == $getStatusCode(response)) {
    text = response.xmlHttpRequest.responseText;
    $onTransportSuccess_0(this$static.val$receiver, text);
  }
   else {
    message = 'Server Error ' + $getStatusCode(response) + ' ' + response.xmlHttpRequest.responseText;
    $onTransportFailure_0(this$static.val$receiver, new ServerFailure_0(message));
  }
}

function DefaultRequestTransport$1_0(val$receiver){
  this.val$receiver = val$receiver;
}

defineSeed(631, 1, {}, DefaultRequestTransport$1_0);
_.val$receiver = null;
function $allocateId(this$static, clazz){
  var toReturn;
  toReturn = $createId(this$static, clazz, this$static.ephemeralIds.size_1() + 1);
  this$static.ephemeralIds.put($getHistoryToken(this$static, toReturn), toReturn);
  return toReturn;
}

function $createId(this$static, clazz, clientId){
  var temp, toReturn;
  if (this$static.isValueType(clazz)) {
    toReturn = new SimpleProxyId_0(clazz, clientId);
  }
   else {
    temp = new SimpleEntityProxyId_0(clazz, clientId);
    toReturn = temp;
  }
  return toReturn;
}

function $createId_0(this$static, clazz, serverId){
  var temp, toReturn;
  if (this$static.isValueType(clazz)) {
    toReturn = new SimpleProxyId_1(clazz, serverId);
  }
   else {
    temp = new SimpleEntityProxyId_1(clazz, serverId);
    toReturn = temp;
  }
  return toReturn;
}

function $getHistoryToken(this$static, proxy){
  var token;
  token = this$static.getTypeToken(proxy.proxyClass);
  return proxy.encodedAddress == null?proxy.clientId + '@1@' + token:proxy.syntheticId > 0?proxy.syntheticId + '@2@' + token:proxy.encodedAddress + '@0@' + token;
}

function $getId(this$static, typeToken, serverId, clientId){
  var clazz, ephemeralKey, serverKey, toReturn;
  if (clientId > 0) {
    ephemeralKey = clientId + '@1@' + typeToken;
    toReturn = dynamicCast(this$static.ephemeralIds.get_1(ephemeralKey), Q$SimpleProxyId);
    if (!toReturn) {
      clazz = this$static.getTypeFromToken(typeToken);
      toReturn = $createId(this$static, clazz, clientId);
      this$static.ephemeralIds.put(ephemeralKey, toReturn);
    }
    if (toReturn.encodedAddress == null) {
      if (serverId != null) {
        $setServerId(toReturn, serverId);
        serverKey = serverId + '@0@' + typeToken;
        this$static.ephemeralIds.put(serverKey, toReturn);
      }
    }
    return toReturn;
  }
  serverKey = serverId + '@0@' + typeToken;
  toReturn = dynamicCast(this$static.ephemeralIds.get_1(serverKey), Q$SimpleProxyId);
  if (toReturn) {
    return toReturn;
  }
  clazz = this$static.getTypeFromToken(typeToken);
  return $createId_0(this$static, clazz, serverId);
}

defineSeed(634, 1, {});
function $hasVersionChanged(this$static, id, observedVersion){
  var existingVersion, key_0, toReturn;
  key_0 = $getHistoryToken(this$static, id);
  existingVersion = dynamicCast($get_7(this$static.version, key_0), Q$String);
  toReturn = existingVersion == null || !$equals_5(existingVersion, observedVersion);
  toReturn && $put_3(this$static.version, key_0, observedVersion);
  return toReturn;
}

function $initialize_0(this$static, eventBus, transport){
  this$static.eventBus = eventBus;
  this$static.transport = transport;
}

defineSeed(633, 634, {});
_.eventBus = null;
_.transport = null;
function AbstractClientRequestFactory_0(){
  this.ephemeralIds = new HashMap_0;
  this.version = new AbstractRequestFactory$1_0;
}

defineSeed(632, 633, {});
function $clinit_EntityProxyChange(){
  $clinit_EntityProxyChange = nullMethod;
  TYPE_20 = new Event$Type_0;
}

function EntityProxyChange_0(){
  $clinit_EntityProxyChange();
}

defineSeed(635, 233, {}, EntityProxyChange_0);
_.dispatch = function dispatch_21(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_22(){
  return TYPE_20;
}
;
var TYPE_20;
defineSeed(637, 1, makeCastMap([Q$Receiver]));
_.onConstraintViolation = function onConstraintViolation(violations){
  var converted, v$iterator;
  converted = new HashSet_0;
  for (v$iterator = violations.iterator(); v$iterator.hasNext();) {
    dynamicCast(v$iterator.next_0(), Q$ConstraintViolation);
    $add_20(converted, new Receiver$1_0);
  }
  this.onViolation(($clinit_Collections() , new Collections$UnmodifiableSet_0(converted)));
}
;
_.onFailure_0 = function onFailure(error){
  if (error.fatal) {
    throw new RuntimeException_0(error.message_0);
  }
}
;
_.onViolation = function onViolation(errors){
  errors.isEmpty_0() || this.onFailure_0(new ServerFailure_0('The call failed on the server due to a ConstraintViolation'));
}
;
function $add_17(this$static, receiver){
  if (!receiver) {
    throw new IllegalArgumentException_0;
  }
  !this$static.toCall && (this$static.toCall = new ArrayList_0);
  $add_19(this$static.toCall, receiver);
}

function $finish_1(this$static){
  var causes;
  if (this$static.toThrow) {
    causes = this$static.toThrow;
    this$static.toThrow = null;
    throw new UmbrellaException_1(causes);
  }
}

function FanoutReceiver_0(){
}

defineSeed(636, 637, makeCastMap([Q$Receiver]), FanoutReceiver_0);
_.onConstraintViolation = function onConstraintViolation_0(violations){
  var r, r$iterator, t;
  try {
    if (this.toCall) {
      for (r$iterator = new AbstractList$IteratorImpl_0(this.toCall); r$iterator.i < r$iterator.this$0_0.size_1();) {
        r = dynamicCast($next_4(r$iterator), Q$Receiver);
        try {
          r.onConstraintViolation(violations);
        }
         catch ($e0) {
          $e0 = caught_0($e0);
          if (instanceOf($e0, Q$Throwable)) {
            t = $e0;
            !this.toThrow && (this.toThrow = new LinkedHashSet_0);
            $add_20(this.toThrow, t);
          }
           else 
            throw $e0;
        }
      }
    }
  }
   finally {
    $finish_1(this);
  }
}
;
_.onFailure_0 = function onFailure_0(error){
  var r, r$iterator, t;
  try {
    if (this.toCall) {
      for (r$iterator = new AbstractList$IteratorImpl_0(this.toCall); r$iterator.i < r$iterator.this$0_0.size_1();) {
        r = dynamicCast($next_4(r$iterator), Q$Receiver);
        try {
          r.onFailure_0(error);
        }
         catch ($e0) {
          $e0 = caught_0($e0);
          if (instanceOf($e0, Q$Throwable)) {
            t = $e0;
            !this.toThrow && (this.toThrow = new LinkedHashSet_0);
            $add_20(this.toThrow, t);
          }
           else 
            throw $e0;
        }
      }
    }
  }
   finally {
    $finish_1(this);
  }
}
;
_.onSuccess_0 = function onSuccess(response){
  var r, r$iterator, t;
  try {
    if (this.toCall) {
      for (r$iterator = new AbstractList$IteratorImpl_0(this.toCall); r$iterator.i < r$iterator.this$0_0.size_1();) {
        r = dynamicCast($next_4(r$iterator), Q$Receiver);
        try {
          r.onSuccess_0(response);
        }
         catch ($e0) {
          $e0 = caught_0($e0);
          if (instanceOf($e0, Q$Throwable)) {
            t = $e0;
            !this.toThrow && (this.toThrow = new LinkedHashSet_0);
            $add_20(this.toThrow, t);
          }
           else 
            throw $e0;
        }
      }
    }
  }
   finally {
    $finish_1(this);
  }
}
;
_.onViolation = function onViolation_0(errors){
  var r, r$iterator, t;
  try {
    if (this.toCall) {
      for (r$iterator = new AbstractList$IteratorImpl_0(this.toCall); r$iterator.i < r$iterator.this$0_0.size_1();) {
        r = dynamicCast($next_4(r$iterator), Q$Receiver);
        try {
          r.onViolation(errors);
        }
         catch ($e0) {
          $e0 = caught_0($e0);
          if (instanceOf($e0, Q$Throwable)) {
            t = $e0;
            !this.toThrow && (this.toThrow = new LinkedHashSet_0);
            $add_20(this.toThrow, t);
          }
           else 
            throw $e0;
        }
      }
    }
  }
   finally {
    $finish_1(this);
  }
}
;
_.toCall = null;
_.toThrow = null;
function Receiver$1_0(){
}

defineSeed(638, 1, {}, Receiver$1_0);
function ServerFailure_0(message){
  ServerFailure_1.call(this, message, true);
}

function ServerFailure_1(message, fatal){
  this.message_0 = message;
  this.fatal = fatal;
}

defineSeed(639, 1, {}, ServerFailure_0, ServerFailure_1);
_.fatal = false;
_.message_0 = null;
function $clinit_WriteOperation(){
  $clinit_WriteOperation = nullMethod;
  PERSIST = new WriteOperation_0('PERSIST', 0);
  UPDATE = new WriteOperation_0('UPDATE', 1);
  DELETE = new WriteOperation_0('DELETE', 2);
  $VALUES_17 = initValues(_3Lcom_google_web_bindery_requestfactory_shared_WriteOperation_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$WriteOperation, [PERSIST, UPDATE, DELETE]);
}

function WriteOperation_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_18(){
  $clinit_WriteOperation();
  return $VALUES_17;
}

defineSeed(640, 31, makeCastMap([Q$WriteOperation, Q$Serializable, Q$Comparable, Q$Enum]), WriteOperation_0);
var $VALUES_17, DELETE, PERSIST, UPDATE;
function $fire(this$static, receiver){
  this$static.receiver = receiver;
  $fire_0(this$static.requestContext);
}

function $onFail(this$static, failure){
  !!this$static.receiver && this$static.receiver.onFailure_0(failure);
}

function $onSuccess(this$static, split){
  var result;
  if (this$static.receiver) {
    result = decode_23(this$static.requestContext, this$static.requestData.returnType, this$static.requestData.elementType, split);
    this$static.receiver.onSuccess_0(result);
  }
}

function AbstractRequest_0(requestContext){
  this.propertyRefs = new HashSet_0;
  this.requestContext = requestContext;
}

defineSeed(641, 1, makeCastMap([Q$AbstractRequest]));
_.receiver = null;
_.requestContext = null;
_.requestData = null;
function $clinit_AbstractRequestContext(){
  $clinit_AbstractRequestContext = nullMethod;
  DELETE_ONLY = initValues(_3Lcom_google_web_bindery_requestfactory_shared_WriteOperation_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$WriteOperation, [($clinit_WriteOperation() , DELETE)]);
  PERSIST_AND_UPDATE = initValues(_3Lcom_google_web_bindery_requestfactory_shared_WriteOperation_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$WriteOperation, [PERSIST, UPDATE]);
  UPDATE_ONLY = initValues(_3Lcom_google_web_bindery_requestfactory_shared_WriteOperation_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$WriteOperation, [UPDATE]);
}

function $allocateSyntheticId(this$static, typeToken, syntheticId){
  var toReturn;
  toReturn = dynamicCast(this$static.state.syntheticIds.get_1(valueOf_1(syntheticId)), Q$SimpleProxyId);
  if (!toReturn) {
    toReturn = $allocateId(this$static.state.requestFactory, this$static.state.requestFactory.getTypeFromToken(typeToken));
    this$static.state.syntheticIds.put(valueOf_1(syntheticId), toReturn);
  }
  return toReturn;
}

function $checkLocked(this$static){
  if (this$static.state.locked) {
    throw new IllegalStateException_1('A request is already in progress');
  }
}

function $checkStreamsNotCrossed(this$static, object){
  var bean, otherState;
  bean = !object?null:dynamicCast(get(object, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean);
  if (!bean) {
    throw new IllegalArgumentException_1(object.___clazz$.typeName);
  }
  otherState = dynamicCast(bean.getTag('requestContext'), Q$AbstractRequestContext$State);
  if (!bean.isFrozen() && otherState != this$static.state) {
    throw new IllegalArgumentException_1('Attempting to edit an EntityProxy previously edited by another RequestContext');
  }
  return bean;
}

function $create_1(this$static, clazz){
  var created, id;
  $checkLocked(this$static);
  id = $allocateId(this$static.state.requestFactory, clazz);
  created = $createProxy(this$static, clazz, id, false);
  return $takeOwnership(this$static, created);
}

function $createProxy(this$static, clazz, id, useAppendedContexts){
  var created, ctx, ctx$iterator;
  created = null;
  if (useAppendedContexts) {
    for (ctx$iterator = this$static.state.appendedContexts.iterator(); ctx$iterator.hasNext();) {
      ctx = dynamicCast(ctx$iterator.next_0(), Q$AbstractRequestContext);
      created = $create(ctx.getAutoBeanFactory(), clazz);
      if (created) {
        break;
      }
    }
  }
   else {
    created = $create(this$static.getAutoBeanFactory(), clazz);
  }
  if (created) {
    created.setTag('stableId', id);
    return created;
  }
  throw new IllegalArgumentException_1('Unknown proxy type ' + clazz.typeName);
}

function $doFire_0(this$static, receiver){
  var finalReceiver, payload;
  if (this$static.state.fireDisabled) {
    if (receiver) {
      !this$static.state.fanout && (this$static.state.fanout = new FanoutReceiver_0);
      $add_17(this$static.state.fanout, receiver);
    }
    return;
  }
   else if (this$static.state.fanout) {
    !!receiver && $add_17(this$static.state.fanout, receiver);
    finalReceiver = this$static.state.fanout;
  }
   else {
    finalReceiver = receiver;
  }
  $checkLocked(this$static);
  this$static.state.locked = true;
  $freezeEntities(this$static, true);
  payload = $makePayload(this$static.state.dialect);
  $send_0(this$static.state.requestFactory.transport, payload, new AbstractRequestContext$5_0(this$static, finalReceiver));
}

function $editProxy(this$static, object){
  var bean, parent_0, previouslySeen, clone;
  bean = $checkStreamsNotCrossed(this$static, object);
  $checkLocked(this$static);
  previouslySeen = dynamicCast($get_7(this$static.state.editedProxies, dynamicCast(bean.getTag('stableId'), Q$SimpleProxyId)), Q$AutoBean);
  if (!!previouslySeen && !previouslySeen.isFrozen()) {
    return dynamicCast(previouslySeen.as(), Q$BaseProxy);
  }
  parent_0 = bean;
  bean = (clone = bean.getFactory().create(bean.getType_0()) , clone.setTag('stableId', bean.getTag('stableId')) , clone.setTag('version', bean.getTag('version')) , $takeOwnership(this$static, clone) , clone.accept(new AbstractRequestContext$4_0(this$static, bean)) , clone);
  bean.setTag('parentObject', parent_0);
  return dynamicCast(bean.as(), Q$BaseProxy);
}

function $fail(this$static, receiver, failure){
  var causes, request, request$iterator, t;
  $freezeEntities(this$static, false);
  this$static.state.locked = false;
  causes = null;
  for (request$iterator = new AbstractList$IteratorImpl_0(new ArrayList_2(this$static.state.invocations)); request$iterator.i < request$iterator.this$0_0.size_1();) {
    request = dynamicCast($next_4(request$iterator), Q$AbstractRequest);
    try {
      !!request.receiver && request.receiver.onFailure_0(failure);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, Q$Throwable)) {
        t = $e0;
        !causes && (causes = new HashSet_0);
        $add_20(causes, t);
      }
       else 
        throw $e0;
    }
  }
  if (receiver) {
    try {
      receiver.onFailure_0(failure);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, Q$Throwable)) {
        t = $e0;
        !causes && (causes = new HashSet_0);
        $add_20(causes, t);
      }
       else 
        throw $e0;
    }
  }
  if (causes) {
    throw new UmbrellaException_1(causes);
  }
}

function $fire_0(this$static){
  var needsReceiver, request, request$iterator;
  needsReceiver = true;
  for (request$iterator = new AbstractList$IteratorImpl_0(this$static.state.invocations); request$iterator.i < request$iterator.this$0_0.size_1();) {
    request = dynamicCast($next_4(request$iterator), Q$AbstractRequest);
    if (request.receiver) {
      needsReceiver = false;
      break;
    }
  }
  needsReceiver?$doFire_0(this$static, new AbstractRequestContext$2_0):$doFire_0(this$static, null);
}

function $freezeEntities(this$static, frozen){
  var bean, bean$iterator;
  for (bean$iterator = $iterator_0($values(this$static.state.editedProxies)); bean$iterator.val$outerIter.hasNext();) {
    bean = dynamicCast($next_6(bean$iterator), Q$AutoBean);
    bean.setFrozen(frozen);
  }
}

function $getId_0(this$static, op){
  if (($clinit_IdMessage$Strength() , SYNTHETIC) == op.getStrength()) {
    return $allocateSyntheticId(this$static, op.getTypeToken_0(), op.getSyntheticId());
  }
  return $getId(this$static.state.requestFactory, op.getTypeToken_0(), op.getServerId(), op.getClientId());
}

function $getProxyForReturnPayloadGraph(this$static, id){
  var bean, proxyClass;
  bean = dynamicCast(this$static.state.returnedProxies.get_1(id), Q$AutoBean);
  if (!bean) {
    proxyClass = id.proxyClass;
    bean = $createProxy(this$static, proxyClass, id, true);
    this$static.state.returnedProxies.put(id, bean);
  }
  return bean;
}

function $isEntityType(this$static, clazz){
  return this$static.state.requestFactory.isEntityType(clazz);
}

function $isValueType(this$static, clazz){
  return this$static.state.requestFactory.isValueType(clazz);
}

function $makeOperationMessage(this$static, stableId, proxyBean){
  var diff, entry, entry$iterator, operation, parent_0, propertyMap, toReturn, version;
  toReturn = new OperationMessageAutoBean_0(($clinit_MessageFactoryHolder() , FACTORY));
  operation = toReturn.shim;
  $setTypeToken_0(operation, this$static.state.requestFactory.getTypeToken(stableId.proxyClass));
  if (stableId.encodedAddress == null) {
    parent_0 = $createProxy(this$static, stableId.proxyClass, stableId, true);
    $setOperation_0(operation, ($clinit_WriteOperation() , PERSIST));
    $setClientId_0(operation, stableId.clientId);
    $setStrength_0(operation, ($clinit_IdMessage$Strength() , EPHEMERAL));
  }
   else if (stableId.syntheticId > 0) {
    parent_0 = $createProxy(this$static, stableId.proxyClass, stableId, true);
    $setOperation_0(operation, ($clinit_WriteOperation() , PERSIST));
    $setSyntheticId_0(operation, stableId.syntheticId);
    $setStrength_0(operation, ($clinit_IdMessage$Strength() , SYNTHETIC));
  }
   else {
    parent_0 = dynamicCast(proxyBean.getTag('parentObject'), Q$AutoBean);
    $setServerId_1(operation, stableId.encodedAddress);
    $setOperation_0(operation, ($clinit_WriteOperation() , UPDATE));
  }
  version = dynamicCast(proxyBean.getTag('version'), Q$String);
  version != null && dynamicCast($getWrapped(operation.this$0), Q$OperationMessage).setVersion(version);
  diff = ($clinit_Collections() , $clinit_Collections() , EMPTY_MAP);
  $isEntityType(this$static, stableId.proxyClass)?(diff = diff_1(parent_0, proxyBean)):$isValueType(this$static, stableId.proxyClass) && (diff = getAllProperties(proxyBean));
  if (diff.size_1() != 0) {
    propertyMap = new HashMap_0;
    for (entry$iterator = diff.entrySet_0().iterator(); entry$iterator.hasNext();) {
      entry = dynamicCast(entry$iterator.next_0(), Q$Map$Entry);
      propertyMap.put(dynamicCast(entry.getKey(), Q$String), encode_23(this$static, entry.getValue_0()));
    }
    dynamicCast($getWrapped(operation.this$0), Q$OperationMessage).setPropertyMap(propertyMap);
  }
  return toReturn;
}

function $makePayloadInvocations(this$static){
  var data, f, invocation, invocation$iterator, invocationMessages, message, param, param$array, param$index, param$max, parameters, refsToSend;
  f = ($clinit_MessageFactoryHolder() , FACTORY);
  invocationMessages = new ArrayList_0;
  for (invocation$iterator = new AbstractList$IteratorImpl_0(this$static.state.invocations); invocation$iterator.i < invocation$iterator.this$0_0.size_1();) {
    invocation = dynamicCast($next_4(invocation$iterator), Q$AbstractRequest);
    data = (!invocation.requestData && (invocation.requestData = invocation.makeRequestData()) , invocation.requestData);
    message = (new InvocationMessageAutoBean_0(f)).shim;
    $setOperation(message, data.operation);
    refsToSend = data.propertyRefs;
    refsToSend.map.size_1() == 0 || dynamicCast($getWrapped(message.this$0), Q$InvocationMessage).setPropertyRefs(refsToSend);
    parameters = new ArrayList_1(data.parameters.length);
    for (param$array = data.parameters , param$index = 0 , param$max = param$array.length; param$index < param$max; ++param$index) {
      param = param$array[param$index];
      $add_19(parameters, encode_23(this$static, param));
    }
    parameters.size_0 == 0 || dynamicCast($getWrapped(message.this$0), Q$InvocationMessage).setParameters(parameters);
    setCheck(invocationMessages.array, invocationMessages.size_0++, message);
  }
  return invocationMessages;
}

function $makePayloadOperations(this$static){
  var currentView, currentView$iterator, operation, operations;
  this$static.state.diffing = true;
  try {
    operations = new ArrayList_0;
    for (currentView$iterator = $iterator_0($values(this$static.state.editedProxies)); currentView$iterator.val$outerIter.hasNext();) {
      currentView = dynamicCast($next_6(currentView$iterator), Q$AutoBean);
      operation = $makeOperationMessage(this$static, dynamicCast(currentView.getTag('stableId'), Q$SimpleProxyId), currentView).shim;
      setCheck(operations.array, operations.size_0++, operation);
    }
    return operations;
  }
   finally {
    this$static.state.diffing = false;
  }
}

function $processReturnOperation(this$static, id, op, operations){
  var properties, proxy, toMutate, writeOperation, writeOperation$index, writeOperation$max;
  toMutate = $getProxyForReturnPayloadGraph(this$static, id);
  toMutate.setTag('version', op.getVersion());
  properties = op.getPropertyMap();
  !!properties && toMutate.accept(new AbstractRequestContext$3_0(this$static, properties));
  toMutate.setTag('parentObject', toMutate);
  toMutate.setTag('requestContext', null);
  toMutate.setFrozen(true);
  proxy = dynamicCast(toMutate.as(), Q$BaseProxy);
  if (operations != null && this$static.state.requestFactory.isEntityType(id.proxyClass)) {
    for (writeOperation$index = 0 , writeOperation$max = operations.length; writeOperation$index < writeOperation$max; ++writeOperation$index) {
      writeOperation = operations[writeOperation$index];
      if (writeOperation == ($clinit_WriteOperation() , UPDATE) && !$hasVersionChanged(this$static.state.requestFactory, id, op.getVersion())) {
        continue;
      }
      $fireEventFromSource(this$static.state.requestFactory.eventBus, new EntityProxyChange_0(dynamicCast(proxy, Q$EntityProxy)), id.proxyClass);
    }
  }
  return proxy;
}

function $processReturnOperations(this$static, response){
  var effect, id, op, op$iterator, ops, toPropagate;
  ops = response.getOperations();
  if (!ops) {
    return;
  }
  for (op$iterator = ops.iterator(); op$iterator.hasNext();) {
    op = dynamicCast(op$iterator.next_0(), Q$OperationMessage);
    id = $getId_0(this$static, op);
    toPropagate = null;
    effect = op.getOperation_0();
    if (effect) {
      switch (effect.ordinal) {
        case 2:
          toPropagate = DELETE_ONLY;
          break;
        case 0:
          toPropagate = PERSIST_AND_UPDATE;
          break;
        case 1:
          toPropagate = UPDATE_ONLY;
          break;
        default:throw new RuntimeException_0(effect.name_0);
      }
    }
    $processReturnOperation(this$static, id, op, toPropagate);
  }
}

function $retainArg(this$static, arg){
  var o, o$iterator;
  if (instanceOf(arg, Q$Iterable)) {
    for (o$iterator = dynamicCast(arg, Q$Iterable).iterator(); o$iterator.hasNext();) {
      o = o$iterator.next_0();
      $retainArg(this$static, o);
    }
  }
   else 
    instanceOf(arg, Q$BaseProxy) && $editProxy(this$static, dynamicCast(arg, Q$BaseProxy));
}

function $setState_1(this$static, state){
  this$static.state = state;
  $addContext(state, this$static);
}

function $takeOwnership(this$static, bean){
  $put_3(this$static.state.editedProxies, dynamicCast(bean.getTag('stableId'), Q$SimpleProxyId), bean);
  bean.setTag('requestContext', this$static.state);
  return dynamicCast(bean.as(), Q$BaseProxy);
}

function $violation(this$static, receiver, errors){
  var causes, request, request$iterator, t;
  $freezeEntities(this$static, false);
  this$static.state.locked = false;
  causes = null;
  for (request$iterator = new AbstractList$IteratorImpl_0(new ArrayList_2(this$static.state.invocations)); request$iterator.i < request$iterator.this$0_0.size_1();) {
    request = dynamicCast($next_4(request$iterator), Q$AbstractRequest);
    try {
      !!request.receiver && request.receiver.onConstraintViolation(errors);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, Q$Throwable)) {
        t = $e0;
        !causes && (causes = new HashSet_0);
        $add_20(causes, t);
      }
       else 
        throw $e0;
    }
  }
  if (receiver) {
    try {
      receiver.onConstraintViolation(errors);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, Q$Throwable)) {
        t = $e0;
        !causes && (causes = new HashSet_0);
        $add_20(causes, t);
      }
       else 
        throw $e0;
    }
  }
  if (causes) {
    throw new UmbrellaException_1(causes);
  }
}

function AbstractRequestContext_0(factory){
  $setState_1(this, new AbstractRequestContext$State_0(factory, new AbstractRequestContext$StandardPayloadDialect_0(this), this));
}

defineSeed(642, 1, makeCastMap([Q$AbstractRequestContext]));
_.getBeanForPayload = function getBeanForPayload(serializedProxyId){
  var id, ref;
  ref = dynamicCast(decode(($clinit_MessageFactoryHolder() , FACTORY), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage_2_classLit, serializedProxyId).as(), Q$IdMessage);
  id = $getId_0(this, ref);
  return $getProxyForReturnPayloadGraph(this, id);
}
;
_.getSerializedProxyId = function getSerializedProxyId(stableId){
  var bean, ref;
  bean = new IdMessageAutoBean_0(($clinit_MessageFactoryHolder() , FACTORY));
  ref = bean.shim;
  $setServerId_0(ref, stableId.encodedAddress);
  $setTypeToken(ref, this.state.requestFactory.getTypeToken(stableId.proxyClass));
  if (stableId.syntheticId > 0) {
    $setStrength(ref, ($clinit_IdMessage$Strength() , SYNTHETIC));
    $setSyntheticId(ref, stableId.syntheticId);
  }
   else if (stableId.encodedAddress == null) {
    $setStrength(ref, ($clinit_IdMessage$Strength() , EPHEMERAL));
    $setClientId(ref, stableId.clientId);
  }
  return encode(bean);
}
;
_.isEntityType = function isEntityType(clazz){
  return this.state.requestFactory.isEntityType(clazz);
}
;
_.isValueType = function isValueType(clazz){
  return this.state.requestFactory.isValueType(clazz);
}
;
_.state = null;
var DELETE_ONLY, PERSIST_AND_UPDATE, UPDATE_ONLY;
function AbstractRequestContext$2_0(){
}

defineSeed(643, 637, makeCastMap([Q$Receiver]), AbstractRequestContext$2_0);
_.onSuccess_0 = function onSuccess_0(response){
  throwClassCastExceptionUnlessNull(response);
}
;
function AbstractRequestContext$3_0(this$0, val$properties){
  this.this$0 = this$0;
  this.val$properties = val$properties;
}

defineSeed(644, 578, {}, AbstractRequestContext$3_0);
_.visitReferenceProperty = function visitReferenceProperty_4(propertyName, value, ctx){
  var decoded, elementType, raw;
  if (ctx.setter) {
    if (this.val$properties.containsKey(propertyName)) {
      raw = dynamicCastJso(this.val$properties.get_1(propertyName));
      elementType = ctx?$getElementType(ctx):null;
      decoded = decode_23(this.this$0, !ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType, elementType, raw);
      $call(ctx.setter, ctx.instance, decoded);
    }
  }
  return false;
}
;
_.visitValueProperty = function visitValueProperty_4(propertyName, value, ctx){
  var decoded, raw;
  if (ctx.setter) {
    if (this.val$properties.containsKey(propertyName)) {
      raw = dynamicCastJso(this.val$properties.get_1(propertyName));
      decoded = decode_1(!ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType, raw);
      decoded != null && Ljava_util_Date_2_classLit == (!ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType) && (decoded = new DatePoser_0(dynamicCast(decoded, Q$Date)));
      $call(ctx.setter, ctx.instance, decoded);
    }
  }
  return false;
}
;
_.this$0 = null;
_.val$properties = null;
function AbstractRequestContext$4_0(this$0, val$toClone){
  this.this$0 = this$0;
  this.val$toClone = val$toClone;
  this.values = getAllProperties(this.val$toClone);
}

defineSeed(645, 578, {}, AbstractRequestContext$4_0);
_.visitCollectionProperty = function visitCollectionProperty_0(propertyName, value, ctx){
  var collection, o, o$iterator;
  value = getAutoBean(dynamicCast($get_7(this.values, propertyName), Q$Collection));
  if (value) {
    if (Ljava_util_List_2_classLit == (!ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType)) {
      collection = new ArrayList_0;
    }
     else if (Ljava_util_Set_2_classLit == (!ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType)) {
      collection = new HashSet_0;
    }
     else {
      throw new IllegalArgumentException_1((!ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType).typeName);
    }
    if ($isValueType(this.this$0, $getElementType(ctx)) || $isEntityType(this.this$0, $getElementType(ctx))) {
      for (o$iterator = dynamicCast(value.as(), Q$Collection).iterator(); o$iterator.hasNext();) {
        o = o$iterator.next_0();
        o == null?collection.add_1(null):collection.add_1($editProxy(this.this$0, dynamicCast(o, Q$BaseProxy)));
      }
    }
     else {
      collection.addAll(dynamicCast(value.as(), Q$Collection));
    }
    $call(ctx.setter, ctx.instance, collection);
  }
  return false;
}
;
_.visitReferenceProperty = function visitReferenceProperty_5(propertyName, value, ctx){
  value = getAutoBean($get_7(this.values, propertyName));
  !!value && ($isValueType(this.this$0, !ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType) || $isEntityType(this.this$0, !ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType)?$set_2(ctx, $editProxy(this.this$0, dynamicCast(value.as(), Q$BaseProxy))):$set_2(ctx, value.as()));
  return false;
}
;
_.visitValueProperty = function visitValueProperty_5(propertyName, value, ctx){
  $set_2(ctx, $get_7(this.values, propertyName));
  return false;
}
;
_.this$0 = null;
_.val$toClone = null;
function $onTransportFailure(this$static, failure){
  $fail(this$static.this$0, this$static.val$finalReceiver, failure);
}

function $onTransportSuccess(this$static, payload){
  $processPayload(this$static.this$0.state.dialect, this$static.val$finalReceiver, payload);
}

function AbstractRequestContext$5_0(this$0, val$finalReceiver){
  this.this$0 = this$0;
  this.val$finalReceiver = val$finalReceiver;
}

defineSeed(646, 1, {}, AbstractRequestContext$5_0);
_.this$0 = null;
_.val$finalReceiver = null;
function $clinit_AbstractRequestContext$Dialect(){
  $clinit_AbstractRequestContext$Dialect = nullMethod;
  STANDARD = new AbstractRequestContext$Dialect$1_0;
  JSON_RPC = new AbstractRequestContext$Dialect$2_0;
  $VALUES_18 = initValues(_3Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$Dialect_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$AbstractRequestContext$Dialect, [STANDARD, JSON_RPC]);
}

function values_19(){
  $clinit_AbstractRequestContext$Dialect();
  return $VALUES_18;
}

defineSeed(647, 31, makeCastMap([Q$AbstractRequestContext$Dialect, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_18, JSON_RPC, STANDARD;
function AbstractRequestContext$Dialect$1_0(){
  Enum_0.call(this, 'STANDARD', 0);
}

defineSeed(648, 647, makeCastMap([Q$AbstractRequestContext$Dialect, Q$Serializable, Q$Comparable, Q$Enum]), AbstractRequestContext$Dialect$1_0);
function AbstractRequestContext$Dialect$2_0(){
  Enum_0.call(this, 'JSON_RPC', 1);
}

defineSeed(649, 647, makeCastMap([Q$AbstractRequestContext$Dialect, Q$Serializable, Q$Comparable, Q$Enum]), AbstractRequestContext$Dialect$2_0);
function $findEditedProxy(this$static, idMessage){
  var rootId, stub;
  rootId = $getId_0(this$static.this$0, idMessage);
  stub = $getProxyForReturnPayloadGraph(this$static.this$0, rootId);
  return dynamicCast($get_7(this$static.this$0.state.editedProxies, dynamicCast(stub.getTag('stableId'), Q$SimpleProxyId)), Q$AutoBean);
}

function AbstractRequestContext$MyConstraintViolation_0(this$0, msg){
  var leafProxy, rootProxy;
  this.this$0 = this$0;
  leafProxy = $findEditedProxy(this, msg.getLeafBeanId());
  !leafProxy?null:dynamicCast(leafProxy.as(), Q$BaseProxy);
  msg.getMessage();
  msg.getMessageTemplate();
  msg.getPath();
  rootProxy = $findEditedProxy(this, msg.getRootBeanId());
  rootProxy.getType_0();
  dynamicCast(rootProxy.as(), Q$BaseProxy);
}

defineSeed(650, 1, makeCastMap([Q$ConstraintViolation]), AbstractRequestContext$MyConstraintViolation_0);
_.this$0 = null;
function $addInvocation(this$static, request){
  var arg, arg$array, arg$index, arg$max;
  $add_19(this$static.this$0.state.invocations, request);
  for (arg$array = (!request.requestData && (request.requestData = request.makeRequestData()) , request.requestData).parameters , arg$index = 0 , arg$max = arg$array.length; arg$index < arg$max; ++arg$index) {
    arg = arg$array[arg$index];
    $retainArg(this$static.this$0, arg);
  }
}

function $makePayload(this$static){
  var bean, f, invocationMessages, operations, requestMessage;
  f = ($clinit_MessageFactoryHolder() , FACTORY);
  operations = $makePayloadOperations(this$static.this$0);
  invocationMessages = $makePayloadInvocations(this$static.this$0);
  bean = new RequestMessageAutoBean_0(f);
  requestMessage = bean.shim;
  $setRequestFactory(requestMessage, this$static.this$0.state.requestFactory.getFactoryTypeToken());
  invocationMessages.size_0 == 0 || dynamicCast($getWrapped(requestMessage.this$0), Q$RequestMessage).setInvocations(invocationMessages);
  operations.size_0 == 0 || dynamicCast($getWrapped(requestMessage.this$0), Q$RequestMessage).setOperations(operations);
  return $getPayload(encode(bean));
}

function $processPayload(this$static, receiver, payload){
  var causes, errors, fail, failure, i, j, message, message$iterator, response, t;
  response = dynamicCast(decode_0(($clinit_MessageFactoryHolder() , FACTORY), Lcom_google_web_bindery_requestfactory_shared_messages_ResponseMessage_2_classLit, payload).as(), Q$ResponseMessage);
  if (response.getGeneralFailure()) {
    failure = response.getGeneralFailure();
    fail = new ServerFailure_1(failure.getMessage(), (failure.getExceptionType() , failure.getStackTrace() , failure.isFatal()));
    $fail(this$static.this$0, receiver, fail);
    return;
  }
  if (response.getViolations()) {
    errors = new HashSet_0;
    for (message$iterator = response.getViolations().iterator(); message$iterator.hasNext();) {
      message = dynamicCast(message$iterator.next_0(), Q$ViolationMessage);
      $add_20(errors, new AbstractRequestContext$MyConstraintViolation_0(this$static.this$0, message));
    }
    $violation(this$static.this$0, receiver, errors);
    return;
  }
  $processReturnOperations(this$static.this$0, response);
  causes = null;
  for (i = 0 , j = this$static.this$0.state.invocations.size_0; i < j; ++i) {
    try {
      if (dynamicCast(response.getStatusCodes().get_0(i), Q$Boolean).value_0) {
        $onSuccess(dynamicCast($get_8(this$static.this$0.state.invocations, i), Q$AbstractRequest), dynamicCastJso(response.getInvocationResults().get_0(i)));
      }
       else {
        failure = dynamicCast(decode(FACTORY, Lcom_google_web_bindery_requestfactory_shared_messages_ServerFailureMessage_2_classLit, dynamicCastJso(response.getInvocationResults().get_0(i))).as(), Q$ServerFailureMessage);
        $onFail(dynamicCast($get_8(this$static.this$0.state.invocations, i), Q$AbstractRequest), new ServerFailure_1(failure.getMessage(), (failure.getExceptionType() , failure.getStackTrace() , failure.isFatal())));
      }
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, Q$Throwable)) {
        t = $e0;
        !causes && (causes = new HashSet_0);
        $add_20(causes, t);
      }
       else 
        throw $e0;
    }
  }
  if (receiver) {
    try {
      receiver.onSuccess_0(null);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, Q$Throwable)) {
        t = $e0;
        !causes && (causes = new HashSet_0);
        $add_20(causes, t);
      }
       else 
        throw $e0;
    }
  }
  $clear_4(this$static.this$0.state.editedProxies);
  $clear_5(this$static.this$0.state.invocations);
  this$static.this$0.state.returnedProxies.clear_0();
  if (causes) {
    throw new UmbrellaException_1(causes);
  }
}

function AbstractRequestContext$StandardPayloadDialect_0(this$0){
  this.this$0 = this$0;
}

defineSeed(651, 1, {}, AbstractRequestContext$StandardPayloadDialect_0);
_.this$0 = null;
function $addContext(this$static, ctx){
  var set;
  if (!this$static.appendedContexts) {
    this$static.appendedContexts = ($clinit_Collections() , set = new HashSet_1 , $add_20(set, ctx) , new Collections$UnmodifiableSet_0(set));
  }
   else {
    this$static.appendedContexts.size_1() == 1 && (this$static.appendedContexts = new LinkedHashSet_1(this$static.appendedContexts));
    this$static.appendedContexts.add_1(ctx);
  }
}

function AbstractRequestContext$State_0(requestFactory, dialect, canonical){
  this.invocations = new ArrayList_0;
  this.editedProxies = new LinkedHashMap_0;
  this.returnedProxies = new HashMap_0;
  this.syntheticIds = new HashMap_0;
  this.requestFactory = requestFactory;
  this.canonical = canonical;
  this.dialect = dialect;
}

defineSeed(652, 1, makeCastMap([Q$AbstractRequestContext$State]), AbstractRequestContext$State_0);
_.appendedContexts = null;
_.canonical = null;
_.dialect = null;
_.diffing = false;
_.fanout = null;
_.fireDisabled = false;
_.locked = false;
_.requestFactory = null;
function AbstractHashMap_0(ignored, alsoIgnored){
  $clearImpl(this);
  if (ignored < 0 || alsoIgnored < 0) {
    throw new IllegalArgumentException_1('initial capacity was negative or load factor was non-positive');
  }
}

function HashMap_1(){
  AbstractHashMap_0.call(this, 1, 0);
}

function HashMap_2(){
  AbstractHashMap_0.call(this, 16, 0.75);
}

defineSeed(655, 656, makeCastMap([Q$Serializable, Q$Map]), HashMap_1);
function LinkedHashMap_1(){
  HashMap_2.call(this);
  $$init(this);
}

defineSeed(654, 655, makeCastMap([Q$Serializable, Q$Map]), LinkedHashMap_1);
function AbstractRequestFactory$1_0(){
  HashMap_2.call(this);
  $$init(this);
  this.accessOrder = true;
}

defineSeed(653, 654, makeCastMap([Q$Serializable, Q$Map]), AbstractRequestFactory$1_0);
_.removeEldestEntry = function removeEldestEntry_0(eldest){
  return this.map.size_1() > 10000;
}
;
function __intercept(bean, returnValue_0){
  var context, otherBean, toReturn;
  context = requestContext_0(bean);
  if (!context || context.state.locked || context.state.diffing) {
    return returnValue_0;
  }
  if (instanceOf(returnValue_0, Q$BaseProxy)) {
    toReturn = $editProxy(context, dynamicCast(returnValue_0, Q$BaseProxy));
    return toReturn;
  }
  instanceOf(returnValue_0, Q$Poser) && (dynamicCast(returnValue_0, Q$Poser) , undefined);
  otherBean = returnValue_0 == null?null:dynamicCast(get(returnValue_0, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean);
  !!otherBean && otherBean.setTag('requestContext', !bean.tags?null:bean.tags.get_1('requestContext'));
  return returnValue_0;
}

function requestContext_0(bean){
  var state;
  state = dynamicCast(bean.getTag('requestContext'), Q$AbstractRequestContext$State);
  return !state?null:state.canonical;
}

function decode_23(source, type, elementType, split){
  var collection, element, i, j;
  if (!split || split == ($clinit_Splittable() , NULL)) {
    return null;
  }
  if (elementType) {
    if (Ljava_util_List_2_classLit == type) {
      collection = new ArrayList_0;
    }
     else if (Ljava_util_Set_2_classLit == type) {
      collection = new HashSet_0;
    }
     else {
      throw new UnsupportedOperationException_0;
    }
    if (canDecode(elementType)) {
      for (i = 0 , j = split.length; i < j; ++i) {
        if (split[i] == null) {
          collection.add_1(null);
        }
         else {
          element = decode_1(elementType, $getRaw(split, i));
          collection.add_1(element);
        }
      }
    }
     else {
      for (i = 0 , j = split.length; i < j; ++i) {
        if (split[i] == null) {
          collection.add_1(null);
        }
         else {
          element = decode_23(source, elementType, null, $getRaw(split, i));
          collection.add_1(element);
        }
      }
    }
    return collection;
  }
  if (source.isEntityType(type) || source.isValueType(type) || Lcom_google_web_bindery_requestfactory_shared_EntityProxyId_2_classLit == type) {
    return source.getBeanForPayload(split).as();
  }
  return decode_1(type, split);
}

function encode_23(source, value){
  var autoBean, first, toReturn, val, val$iterator;
  if (value == null) {
    return $clinit_Splittable() , NULL;
  }
  instanceOf(value, Q$Poser) && (value = new Date_1(fromDouble(dynamicCast(dynamicCast(value, Q$Poser), Q$DatePoser).jsdate.getTime())));
  if (instanceOf(value, Q$Iterable)) {
    toReturn = new StringBuffer_0;
    $appendNonNull(toReturn.data, '[');
    first = true;
    for (val$iterator = dynamicCast(value, Q$Iterable).iterator(); val$iterator.hasNext();) {
      val = val$iterator.next_0();
      first?(first = false):($appendNonNull(toReturn.data, ',') , toReturn);
      val == null?($append_1(toReturn.data, 'null') , toReturn):$append_5(toReturn, $getPayload(encode_23(source, val)));
    }
    $appendNonNull(toReturn.data, ']');
    return split_0($toString_0(toReturn.data));
  }
  if (instanceOf(value, Q$BaseProxy)) {
    autoBean = getAutoBean(dynamicCast(value, Q$BaseProxy));
    value = dynamicCast(autoBean.getTag('stableId'), Q$SimpleProxyId);
  }
  if (instanceOf(value, Q$SimpleProxyId)) {
    return source.getSerializedProxyId(dynamicCast(value, Q$SimpleProxyId));
  }
  return encode_1(value);
}

function equals_14(bean, o){
  var other;
  if (!instanceOf(o, Q$EntityProxy)) {
    return false;
  }
  other = getAutoBean(dynamicCast(o, Q$EntityProxy));
  if (!other) {
    return false;
  }
  return $equals_1(dynamicCast(!bean.tags?null:bean.tags.get_1('stableId'), Q$SimpleEntityProxyId), dynamicCast(other.getTag('stableId'), Q$SimpleEntityProxyId)) && nonDiffingRequestContext(bean) == nonDiffingRequestContext(other);
}

function nonDiffingRequestContext(bean){
  var context;
  context = requestContext_0(bean);
  !!context && context.state.diffing && (context = null);
  return context;
}

function $clinit_MessageFactoryHolder(){
  $clinit_MessageFactoryHolder = nullMethod;
  FACTORY = new MessageFactoryImpl_0;
}

var FACTORY;
function RequestData_0(operation, parameters, propertyRefs, returnType, elementType){
  this.operation = operation;
  this.parameters = parameters;
  this.returnType = returnType;
  this.elementType = elementType;
  this.propertyRefs = propertyRefs;
}

defineSeed(661, 1, {}, RequestData_0);
_.elementType = null;
_.operation = null;
_.parameters = null;
_.propertyRefs = null;
_.returnType = null;
function $equals_1(this$static, o){
  var other;
  if (this$static === o) {
    return true;
  }
  if (!instanceOf(o, Q$SimpleProxyId)) {
    return false;
  }
  other = dynamicCast(o, Q$SimpleProxyId);
  if (this$static.proxyClass != other.proxyClass) {
    return false;
  }
  if (this$static.clientId != -1 && this$static.clientId == other.clientId) {
    return true;
  }
  if (this$static.encodedAddress != null && $equals_5(this$static.encodedAddress, other.encodedAddress)) {
    return true;
  }
  return false;
}

function $setServerId(this$static, encodedAddress){
  if (this$static.encodedAddress != null) {
    throw new IllegalStateException_0;
  }
  this$static.encodedAddress = encodedAddress;
}

function SimpleProxyId_0(proxyClass, clientId){
  this.clientId = clientId;
  this.proxyClass = proxyClass;
  this.hashCode = clientId;
}

function SimpleProxyId_1(proxyClass, encodedAddress){
  $setServerId(this, encodedAddress);
  this.clientId = -1;
  this.hashCode = getHashCode_1(encodedAddress);
  this.proxyClass = proxyClass;
}

defineSeed(663, 1, makeCastMap([Q$SimpleProxyId]), SimpleProxyId_0, SimpleProxyId_1);
_.equals$ = function equals_15(o){
  return $equals_1(this, o);
}
;
_.hashCode$ = function hashCode_15(){
  return this.hashCode;
}
;
_.toString$ = function toString_12(){
  return this.encodedAddress == null?this.clientId + '@1@' + this.proxyClass.typeName:this.syntheticId > 0?this.syntheticId + '@2@' + this.proxyClass.typeName:this.encodedAddress + '@0@' + this.proxyClass.typeName;
}
;
_.clientId = 0;
_.encodedAddress = null;
_.hashCode = 0;
_.proxyClass = null;
_.syntheticId = 0;
function SimpleEntityProxyId_0(proxyClass, clientId){
  SimpleProxyId_0.call(this, proxyClass, clientId);
}

function SimpleEntityProxyId_1(proxyClass, encodedAddress){
  SimpleProxyId_1.call(this, proxyClass, encodedAddress);
}

defineSeed(662, 663, makeCastMap([Q$SimpleEntityProxyId, Q$SimpleProxyId]), SimpleEntityProxyId_0, SimpleEntityProxyId_1);
function Date_1(date){
  this.jsdate = create(toDouble(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineSeed(665, 1, makeCastMap([Q$Serializable, Q$Comparable, Q$Date]), Date_1);
_.equals$ = function equals_16(obj){
  return instanceOf(obj, Q$Date) && eq(fromDouble(this.jsdate.getTime()), fromDouble(dynamicCast(obj, Q$Date).jsdate.getTime()));
}
;
_.hashCode$ = function hashCode_16(){
  var time;
  time = fromDouble(this.jsdate.getTime());
  return toInt(xor(time, shru(time, 32)));
}
;
_.toString$ = function toString_13(){
  var hourOffset, minuteOffset, offset;
  offset = -this.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + ~~(offset / 60);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:'' + (offset < 0?-offset:offset) % 60;
  return ($clinit_Date$StringData() , DAYS)[this.jsdate.getDay()] + ' ' + MONTHS[this.jsdate.getMonth()] + ' ' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this.jsdate.getFullYear();
}
;
_.jsdate = null;
function DatePoser_0(copy){
  Date_1.call(this, fromDouble(copy.jsdate.getTime()));
}

defineSeed(664, 665, makeCastMap([Q$Poser, Q$DatePoser, Q$Serializable, Q$Comparable, Q$Date]), DatePoser_0);
function $clinit_IdMessage$Strength(){
  $clinit_IdMessage$Strength = nullMethod;
  PERSISTED = new IdMessage$Strength_0('PERSISTED', 0);
  EPHEMERAL = new IdMessage$Strength_0('EPHEMERAL', 1);
  SYNTHETIC = new IdMessage$Strength_0('SYNTHETIC', 2);
  $VALUES_19 = initValues(_3Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage$Strength_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$IdMessage$Strength, [PERSISTED, EPHEMERAL, SYNTHETIC]);
}

function IdMessage$Strength_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_20(){
  $clinit_IdMessage$Strength();
  return $VALUES_19;
}

defineSeed(666, 31, makeCastMap([Q$IdMessage$Strength, Q$Serializable, Q$Comparable, Q$Enum]), IdMessage$Strength_0);
var $VALUES_19, EPHEMERAL, PERSISTED, SYNTHETIC;
function $$init_0(this$static){
  this$static.shim = new IdMessageAutoBean$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function IdMessageAutoBean_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_0(this);
}

function IdMessageAutoBean_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_0(this);
}

defineSeed(667, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), IdMessageAutoBean_0, IdMessageAutoBean_1);
_.as = function as_0(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_0(){
  return new IdMessageAutoBean$2_0(this);
}
;
_.getType_0 = function getType_8(){
  return Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage_2_classLit;
}
;
_.traverseProperties = function traverseProperties(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getStrength(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'R'), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage$Strength_2_classLit);
  visitor.visitValueProperty('R', value, propertyContext);
  value = valueOf_1($getClientId(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'C'), I_classLit);
  visitor.visitValueProperty('C', value, propertyContext);
  value = valueOf_1($getSyntheticId(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'Y'), I_classLit);
  visitor.visitValueProperty('Y', value, propertyContext);
  value = $getServerId(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'S'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('S', value, propertyContext);
  value = $getTypeToken(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'T'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('T', value, propertyContext);
}
;
function $getClientId(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).getClientId();
  return toReturn;
}

function $getServerId(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).getServerId();
  return toReturn;
}

function $getStrength(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).getStrength();
  return toReturn;
}

function $getSyntheticId(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).getSyntheticId();
  return toReturn;
}

function $getTypeToken(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).getTypeToken_0();
  return toReturn;
}

function $setClientId(this$static, value){
  dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).setClientId(value);
  valueOf_1(value);
}

function $setServerId_0(this$static, value){
  dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).setServerId(value);
}

function $setStrength(this$static, value){
  dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).setStrength(value);
}

function $setSyntheticId(this$static, value){
  dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).setSyntheticId(value);
  valueOf_1(value);
}

function $setTypeToken(this$static, value){
  dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).setTypeToken(value);
}

function IdMessageAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(668, 1, makeCastMap([Q$IdMessage]), IdMessageAutoBean$1_0);
_.equals$ = function equals_17(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$IdMessage).equals$(o);
}
;
_.getClientId = function getClientId(){
  return $getClientId(this);
}
;
_.getServerId = function getServerId(){
  return $getServerId(this);
}
;
_.getStrength = function getStrength(){
  return $getStrength(this);
}
;
_.getSyntheticId = function getSyntheticId(){
  return $getSyntheticId(this);
}
;
_.getTypeToken_0 = function getTypeToken(){
  return $getTypeToken(this);
}
;
_.hashCode$ = function hashCode_17(){
  return dynamicCast($getWrapped(this.this$0), Q$IdMessage).hashCode$();
}
;
_.setClientId = function setClientId(value){
  $setClientId(this, value);
}
;
_.setServerId = function setServerId(value){
  $setServerId_0(this, value);
}
;
_.setStrength = function setStrength(value){
  $setStrength(this, value);
}
;
_.setSyntheticId = function setSyntheticId(value){
  $setSyntheticId(this, value);
}
;
_.setTypeToken = function setTypeToken(value){
  $setTypeToken(this, value);
}
;
_.toString$ = function toString_14(){
  return dynamicCast($getWrapped(this.this$0), Q$IdMessage).toString$();
}
;
_.this$0 = null;
function IdMessageAutoBean$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(669, 1, makeCastMap([Q$IdMessage]), IdMessageAutoBean$2_0);
_.getClientId = function getClientId_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'C'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getServerId = function getServerId_0(){
  return dynamicCast($getOrReify(this.this$0, 'S'), Q$String);
}
;
_.getStrength = function getStrength_0(){
  return dynamicCast($getOrReify(this.this$0, 'R'), Q$IdMessage$Strength);
}
;
_.getSyntheticId = function getSyntheticId_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'Y'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTypeToken_0 = function getTypeToken_0(){
  return dynamicCast($getOrReify(this.this$0, 'T'), Q$String);
}
;
_.setClientId = function setClientId_0(value){
  $setProperty(this.this$0, 'C', valueOf_1(value));
}
;
_.setServerId = function setServerId_0(value){
  $setProperty(this.this$0, 'S', value);
}
;
_.setStrength = function setStrength_0(value){
  $setProperty(this.this$0, 'R', value);
}
;
_.setSyntheticId = function setSyntheticId_0(value){
  $setProperty(this.this$0, 'Y', valueOf_1(value));
}
;
_.setTypeToken = function setTypeToken_0(value){
  $setProperty(this.this$0, 'T', value);
}
;
_.this$0 = null;
function $$init_1(this$static){
  this$static.shim = new InvocationMessageAutoBean$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function InvocationMessageAutoBean_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_1(this);
}

function InvocationMessageAutoBean_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_1(this);
}

defineSeed(670, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), InvocationMessageAutoBean_0, InvocationMessageAutoBean_1);
_.as = function as_1(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_1(){
  return new InvocationMessageAutoBean$2_0(this);
}
;
_.getType_0 = function getType_9(){
  return Lcom_google_web_bindery_requestfactory_shared_messages_InvocationMessage_2_classLit;
}
;
_.traverseProperties = function traverseProperties_0(visitor, ctx){
  var as, bean, propertyContext, value;
  as = this.shim;
  value = $getOperation(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'O'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('O', value, propertyContext);
  bean = dynamicCast(getAutoBean($getParameters(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'P'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_List_2_classLit, Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 0]));
  visitor.visitCollectionProperty('P', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  bean = dynamicCast(getAutoBean($getPropertyRefs(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'R'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_Set_2_classLit, Ljava_lang_String_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 0]));
  visitor.visitCollectionProperty('R', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
}
;
function $getOperation(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$InvocationMessage).getOperation();
  return toReturn;
}

function $getParameters(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$InvocationMessage).getParameters();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$List)):(toReturn = (new ListAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getPropertyRefs(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$InvocationMessage).getPropertyRefs();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$Set)):(toReturn = (new SetAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $setOperation(this$static, value){
  dynamicCast($getWrapped(this$static.this$0), Q$InvocationMessage).setOperation(value);
}

function InvocationMessageAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(671, 1, makeCastMap([Q$InvocationMessage]), InvocationMessageAutoBean$1_0);
_.equals$ = function equals_18(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$InvocationMessage).equals$(o);
}
;
_.getOperation = function getOperation(){
  return $getOperation(this);
}
;
_.getParameters = function getParameters(){
  return $getParameters(this);
}
;
_.getPropertyRefs = function getPropertyRefs(){
  return $getPropertyRefs(this);
}
;
_.hashCode$ = function hashCode_18(){
  return dynamicCast($getWrapped(this.this$0), Q$InvocationMessage).hashCode$();
}
;
_.setOperation = function setOperation(value){
  $setOperation(this, value);
}
;
_.setParameters = function setParameters(value){
  dynamicCast($getWrapped(this.this$0), Q$InvocationMessage).setParameters(value);
}
;
_.setPropertyRefs = function setPropertyRefs(value){
  dynamicCast($getWrapped(this.this$0), Q$InvocationMessage).setPropertyRefs(value);
}
;
_.toString$ = function toString_15(){
  return dynamicCast($getWrapped(this.this$0), Q$InvocationMessage).toString$();
}
;
_.this$0 = null;
function InvocationMessageAutoBean$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(672, 1, makeCastMap([Q$InvocationMessage]), InvocationMessageAutoBean$2_0);
_.getOperation = function getOperation_0(){
  return dynamicCast($getOrReify(this.this$0, 'O'), Q$String);
}
;
_.getParameters = function getParameters_0(){
  return dynamicCast($getOrReify(this.this$0, 'P'), Q$List);
}
;
_.getPropertyRefs = function getPropertyRefs_0(){
  return dynamicCast($getOrReify(this.this$0, 'R'), Q$Set);
}
;
_.setOperation = function setOperation_0(value){
  $setProperty(this.this$0, 'O', value);
}
;
_.setParameters = function setParameters_0(value){
  $setProperty(this.this$0, 'P', value);
}
;
_.setPropertyRefs = function setPropertyRefs_0(value){
  $setProperty(this.this$0, 'R', value);
}
;
_.this$0 = null;
function $$init_2(this$static){
  this$static.shim = new JsonRpcRequestAutoBean$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function JsonRpcRequestAutoBean_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_2(this);
}

function JsonRpcRequestAutoBean_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_2(this);
}

defineSeed(673, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), JsonRpcRequestAutoBean_0, JsonRpcRequestAutoBean_1);
_.as = function as_2(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_2(){
  return new JsonRpcRequestAutoBean$2_0(this);
}
;
_.getType_0 = function getType_10(){
  return Lcom_google_web_bindery_requestfactory_shared_messages_JsonRpcRequest_2_classLit;
}
;
_.traverseProperties = function traverseProperties_1(visitor, ctx){
  var as, bean, propertyContext, value;
  as = this.shim;
  value = valueOf_1($getId_1(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), I_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getApiVersion(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'apiVersion'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('apiVersion', value, propertyContext);
  value = $getMethod(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'method'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('method', value, propertyContext);
  value = $getVersion(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'jsonrpc'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('jsonrpc', value, propertyContext);
  bean = dynamicCast(getAutoBean($getParams(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'params'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_Map_2_classLit, Ljava_lang_String_2_classLit, Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [2, 0, 0]));
  visitor.visitReferenceProperty('params', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
}
;
function $getApiVersion(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$JsonRpcRequest).getApiVersion();
  return toReturn;
}

function $getId_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$JsonRpcRequest).getId();
  return toReturn;
}

function $getMethod(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$JsonRpcRequest).getMethod();
  return toReturn;
}

function $getParams(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$JsonRpcRequest).getParams();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$Map)):(toReturn = (new MapAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getVersion(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$JsonRpcRequest).getVersion();
  return toReturn;
}

function JsonRpcRequestAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(674, 1, makeCastMap([Q$JsonRpcRequest]), JsonRpcRequestAutoBean$1_0);
_.equals$ = function equals_19(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$JsonRpcRequest).equals$(o);
}
;
_.getApiVersion = function getApiVersion(){
  return $getApiVersion(this);
}
;
_.getId = function getId(){
  return $getId_1(this);
}
;
_.getMethod = function getMethod(){
  return $getMethod(this);
}
;
_.getParams = function getParams(){
  return $getParams(this);
}
;
_.getVersion = function getVersion(){
  return $getVersion(this);
}
;
_.hashCode$ = function hashCode_19(){
  return dynamicCast($getWrapped(this.this$0), Q$JsonRpcRequest).hashCode$();
}
;
_.toString$ = function toString_16(){
  return dynamicCast($getWrapped(this.this$0), Q$JsonRpcRequest).toString$();
}
;
_.this$0 = null;
function JsonRpcRequestAutoBean$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(675, 1, makeCastMap([Q$JsonRpcRequest]), JsonRpcRequestAutoBean$2_0);
_.getApiVersion = function getApiVersion_0(){
  return dynamicCast($getOrReify(this.this$0, 'apiVersion'), Q$String);
}
;
_.getId = function getId_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'id'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getMethod = function getMethod_0(){
  return dynamicCast($getOrReify(this.this$0, 'method'), Q$String);
}
;
_.getParams = function getParams_0(){
  return dynamicCast($getOrReify(this.this$0, 'params'), Q$Map);
}
;
_.getVersion = function getVersion_0(){
  return dynamicCast($getOrReify(this.this$0, 'jsonrpc'), Q$String);
}
;
_.this$0 = null;
function $getConstructors_com_google_web_bindery_requestfactory_shared_messages_IdMessage(){
  return [function(factory){
    return new IdMessageAutoBean_0(factory);
  }
  , function(factory, wrapped){
    return new IdMessageAutoBean_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_google_web_bindery_requestfactory_shared_messages_InvocationMessage(){
  return [function(factory){
    return new InvocationMessageAutoBean_0(factory);
  }
  , function(factory, wrapped){
    return new InvocationMessageAutoBean_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_google_web_bindery_requestfactory_shared_messages_JsonRpcRequest(){
  return [function(factory){
    return new JsonRpcRequestAutoBean_0(factory);
  }
  , function(factory, wrapped){
    return new JsonRpcRequestAutoBean_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_google_web_bindery_requestfactory_shared_messages_OperationMessage(){
  return [function(factory){
    return new OperationMessageAutoBean_0(factory);
  }
  , function(factory, wrapped){
    return new OperationMessageAutoBean_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_google_web_bindery_requestfactory_shared_messages_RequestMessage(){
  return [function(factory){
    return new RequestMessageAutoBean_0(factory);
  }
  , function(factory, wrapped){
    return new RequestMessageAutoBean_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_google_web_bindery_requestfactory_shared_messages_ResponseMessage(){
  return [function(factory){
    return new ResponseMessageAutoBean_0(factory);
  }
  , function(factory, wrapped){
    return new ResponseMessageAutoBean_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_google_web_bindery_requestfactory_shared_messages_ServerFailureMessage(){
  return [function(factory){
    return new ServerFailureMessageAutoBean_0(factory);
  }
  , function(factory, wrapped){
    return new ServerFailureMessageAutoBean_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_google_web_bindery_requestfactory_shared_messages_ViolationMessage(){
  return [function(factory){
    return new ViolationMessageAutoBean_0(factory);
  }
  , function(factory, wrapped){
    return new ViolationMessageAutoBean_1(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_Collection(){
  return [undefined, function(factory, wrapped){
    return new CollectionAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_Iterator(){
  return [undefined, function(factory, wrapped){
    return new IteratorAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_List(){
  return [undefined, function(factory, wrapped){
    return new ListAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_ListIterator(){
  return [undefined, function(factory, wrapped){
    return new ListIteratorAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_Map(){
  return [undefined, function(factory, wrapped){
    return new MapAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_Map_Entry(){
  return [undefined, function(factory, wrapped){
    return new Map_EntryAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_Set(){
  return [undefined, function(factory, wrapped){
    return new SetAutoBean_0(factory, wrapped);
  }
  ];
}

function MessageFactoryImpl_0(){
}

defineSeed(676, 570, makeCastMap([Q$EnumMap]), MessageFactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap(map){
  $add_15(map, Lcom_google_web_bindery_requestfactory_shared_messages_ServerFailureMessage_2_classLit, $getConstructors_com_google_web_bindery_requestfactory_shared_messages_ServerFailureMessage());
  $add_15(map, Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage_2_classLit, $getConstructors_com_google_web_bindery_requestfactory_shared_messages_IdMessage());
  $add_15(map, Lcom_google_web_bindery_requestfactory_shared_messages_InvocationMessage_2_classLit, $getConstructors_com_google_web_bindery_requestfactory_shared_messages_InvocationMessage());
  $add_15(map, Lcom_google_web_bindery_requestfactory_shared_messages_JsonRpcRequest_2_classLit, $getConstructors_com_google_web_bindery_requestfactory_shared_messages_JsonRpcRequest());
  $add_15(map, Lcom_google_web_bindery_requestfactory_shared_messages_OperationMessage_2_classLit, $getConstructors_com_google_web_bindery_requestfactory_shared_messages_OperationMessage());
  $add_15(map, Lcom_google_web_bindery_requestfactory_shared_messages_RequestMessage_2_classLit, $getConstructors_com_google_web_bindery_requestfactory_shared_messages_RequestMessage());
  $add_15(map, Lcom_google_web_bindery_requestfactory_shared_messages_ResponseMessage_2_classLit, $getConstructors_com_google_web_bindery_requestfactory_shared_messages_ResponseMessage());
  $add_15(map, Lcom_google_web_bindery_requestfactory_shared_messages_ViolationMessage_2_classLit, $getConstructors_com_google_web_bindery_requestfactory_shared_messages_ViolationMessage());
  $add_15(map, Ljava_util_List_2_classLit, $getConstructors_java_util_List());
  $add_15(map, Ljava_util_Set_2_classLit, $getConstructors_java_util_Set());
  $add_15(map, Ljava_util_Map_2_classLit, $getConstructors_java_util_Map());
  $add_15(map, Ljava_util_Iterator_2_classLit, $getConstructors_java_util_Iterator());
  $add_15(map, Ljava_util_ListIterator_2_classLit, $getConstructors_java_util_ListIterator());
  $add_15(map, Ljava_util_Map$Entry_2_classLit, $getConstructors_java_util_Map_Entry());
  $add_15(map, Ljava_util_Collection_2_classLit, $getConstructors_java_util_Collection());
}
;
_.initializeEnumMap = function initializeEnumMap(){
  this.enumToStringMap.put(($clinit_IdMessage$Strength() , PERSISTED), '0');
  this.enumToStringMap.put(EPHEMERAL, '1');
  this.enumToStringMap.put(SYNTHETIC, '2');
  this.enumToStringMap.put(($clinit_WriteOperation() , PERSIST), 'PERSIST');
  this.enumToStringMap.put(UPDATE, 'UPDATE');
  this.enumToStringMap.put(DELETE, 'DELETE');
  this.stringsToEnumsMap.put('UPDATE', ($clinit_Collections() , new Collections$SingletonList_0(UPDATE)));
  this.stringsToEnumsMap.put('2', new Collections$SingletonList_0(SYNTHETIC));
  this.stringsToEnumsMap.put('1', new Collections$SingletonList_0(EPHEMERAL));
  this.stringsToEnumsMap.put('0', new Collections$SingletonList_0(PERSISTED));
  this.stringsToEnumsMap.put('DELETE', new Collections$SingletonList_0(DELETE));
  this.stringsToEnumsMap.put('PERSIST', new Collections$SingletonList_0(PERSIST));
}
;
function $$init_3(this$static){
  this$static.shim = new OperationMessageAutoBean$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function OperationMessageAutoBean_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_3(this);
}

function OperationMessageAutoBean_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_3(this);
}

defineSeed(677, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), OperationMessageAutoBean_0, OperationMessageAutoBean_1);
_.as = function as_3(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_3(){
  return new OperationMessageAutoBean$2_0(this);
}
;
_.getType_0 = function getType_11(){
  return Lcom_google_web_bindery_requestfactory_shared_messages_OperationMessage_2_classLit;
}
;
_.traverseProperties = function traverseProperties_2(visitor, ctx){
  var as, bean, propertyContext, value;
  as = this.shim;
  value = $getOperation_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'O'), Lcom_google_web_bindery_requestfactory_shared_WriteOperation_2_classLit);
  visitor.visitValueProperty('O', value, propertyContext);
  value = $getStrength_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'R'), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage$Strength_2_classLit);
  visitor.visitValueProperty('R', value, propertyContext);
  value = valueOf_1($getClientId_0(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'C'), I_classLit);
  visitor.visitValueProperty('C', value, propertyContext);
  value = valueOf_1($getSyntheticId_0(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'Y'), I_classLit);
  visitor.visitValueProperty('Y', value, propertyContext);
  value = $getServerId_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'S'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('S', value, propertyContext);
  value = $getTypeToken_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'T'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('T', value, propertyContext);
  value = $getVersion_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'V'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('V', value, propertyContext);
  bean = dynamicCast(getAutoBean($getPropertyMap(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'P'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_Map_2_classLit, Ljava_lang_String_2_classLit, Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [2, 0, 0]));
  visitor.visitReferenceProperty('P', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
}
;
function $getClientId_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).getClientId();
  return toReturn;
}

function $getOperation_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).getOperation_0();
  return toReturn;
}

function $getPropertyMap(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).getPropertyMap();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$Map)):(toReturn = (new MapAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getServerId_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).getServerId();
  return toReturn;
}

function $getStrength_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).getStrength();
  return toReturn;
}

function $getSyntheticId_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).getSyntheticId();
  return toReturn;
}

function $getTypeToken_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).getTypeToken_0();
  return toReturn;
}

function $getVersion_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).getVersion();
  return toReturn;
}

function $setClientId_0(this$static, value){
  dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).setClientId(value);
  valueOf_1(value);
}

function $setOperation_0(this$static, value){
  dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).setOperation_0(value);
}

function $setServerId_1(this$static, value){
  dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).setServerId(value);
}

function $setStrength_0(this$static, value){
  dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).setStrength(value);
}

function $setSyntheticId_0(this$static, value){
  dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).setSyntheticId(value);
  valueOf_1(value);
}

function $setTypeToken_0(this$static, value){
  dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).setTypeToken(value);
}

function OperationMessageAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(678, 1, makeCastMap([Q$IdMessage, Q$OperationMessage]), OperationMessageAutoBean$1_0);
_.equals$ = function equals_20(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$OperationMessage).equals$(o);
}
;
_.getClientId = function getClientId_1(){
  return $getClientId_0(this);
}
;
_.getOperation_0 = function getOperation_1(){
  return $getOperation_0(this);
}
;
_.getPropertyMap = function getPropertyMap(){
  return $getPropertyMap(this);
}
;
_.getServerId = function getServerId_1(){
  return $getServerId_0(this);
}
;
_.getStrength = function getStrength_1(){
  return $getStrength_0(this);
}
;
_.getSyntheticId = function getSyntheticId_1(){
  return $getSyntheticId_0(this);
}
;
_.getTypeToken_0 = function getTypeToken_1(){
  return $getTypeToken_0(this);
}
;
_.getVersion = function getVersion_1(){
  return $getVersion_0(this);
}
;
_.hashCode$ = function hashCode_20(){
  return dynamicCast($getWrapped(this.this$0), Q$OperationMessage).hashCode$();
}
;
_.setClientId = function setClientId_1(value){
  $setClientId_0(this, value);
}
;
_.setOperation_0 = function setOperation_1(value){
  $setOperation_0(this, value);
}
;
_.setPropertyMap = function setPropertyMap(map){
  dynamicCast($getWrapped(this.this$0), Q$OperationMessage).setPropertyMap(map);
}
;
_.setServerId = function setServerId_1(value){
  $setServerId_1(this, value);
}
;
_.setStrength = function setStrength_1(value){
  $setStrength_0(this, value);
}
;
_.setSyntheticId = function setSyntheticId_1(value){
  $setSyntheticId_0(this, value);
}
;
_.setTypeToken = function setTypeToken_1(value){
  $setTypeToken_0(this, value);
}
;
_.setVersion = function setVersion(version){
  dynamicCast($getWrapped(this.this$0), Q$OperationMessage).setVersion(version);
}
;
_.toString$ = function toString_17(){
  return dynamicCast($getWrapped(this.this$0), Q$OperationMessage).toString$();
}
;
_.this$0 = null;
function OperationMessageAutoBean$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(679, 1, makeCastMap([Q$IdMessage, Q$OperationMessage]), OperationMessageAutoBean$2_0);
_.getClientId = function getClientId_2(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'C'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getOperation_0 = function getOperation_2(){
  return dynamicCast($getOrReify(this.this$0, 'O'), Q$WriteOperation);
}
;
_.getPropertyMap = function getPropertyMap_0(){
  return dynamicCast($getOrReify(this.this$0, 'P'), Q$Map);
}
;
_.getServerId = function getServerId_2(){
  return dynamicCast($getOrReify(this.this$0, 'S'), Q$String);
}
;
_.getStrength = function getStrength_2(){
  return dynamicCast($getOrReify(this.this$0, 'R'), Q$IdMessage$Strength);
}
;
_.getSyntheticId = function getSyntheticId_2(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'Y'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTypeToken_0 = function getTypeToken_2(){
  return dynamicCast($getOrReify(this.this$0, 'T'), Q$String);
}
;
_.getVersion = function getVersion_2(){
  return dynamicCast($getOrReify(this.this$0, 'V'), Q$String);
}
;
_.setClientId = function setClientId_2(value){
  $setProperty(this.this$0, 'C', valueOf_1(value));
}
;
_.setOperation_0 = function setOperation_2(value){
  $setProperty(this.this$0, 'O', value);
}
;
_.setPropertyMap = function setPropertyMap_0(map){
  $setProperty(this.this$0, 'P', map);
}
;
_.setServerId = function setServerId_2(value){
  $setProperty(this.this$0, 'S', value);
}
;
_.setStrength = function setStrength_2(value){
  $setProperty(this.this$0, 'R', value);
}
;
_.setSyntheticId = function setSyntheticId_2(value){
  $setProperty(this.this$0, 'Y', valueOf_1(value));
}
;
_.setTypeToken = function setTypeToken_2(value){
  $setProperty(this.this$0, 'T', value);
}
;
_.setVersion = function setVersion_0(version){
  $setProperty(this.this$0, 'V', version);
}
;
_.this$0 = null;
function $$init_4(this$static){
  this$static.shim = new RequestMessageAutoBean$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function RequestMessageAutoBean_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_4(this);
}

function RequestMessageAutoBean_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_4(this);
}

defineSeed(680, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), RequestMessageAutoBean_0, RequestMessageAutoBean_1);
_.as = function as_4(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_4(){
  return new RequestMessageAutoBean$2_0(this);
}
;
_.getType_0 = function getType_12(){
  return Lcom_google_web_bindery_requestfactory_shared_messages_RequestMessage_2_classLit;
}
;
_.traverseProperties = function traverseProperties_3(visitor, ctx){
  var as, bean, propertyContext, value;
  as = this.shim;
  value = $getRequestFactory(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'F'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('F', value, propertyContext);
  value = $getVersion_1(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'V'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('V', value, propertyContext);
  bean = dynamicCast(getAutoBean($getInvocations(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'I'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_List_2_classLit, Lcom_google_web_bindery_requestfactory_shared_messages_InvocationMessage_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 0]));
  visitor.visitCollectionProperty('I', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  bean = dynamicCast(getAutoBean($getOperations(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'O'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_List_2_classLit, Lcom_google_web_bindery_requestfactory_shared_messages_OperationMessage_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 0]));
  visitor.visitCollectionProperty('O', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
}
;
function $getInvocations(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$RequestMessage).getInvocations();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$List)):(toReturn = (new ListAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getOperations(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$RequestMessage).getOperations();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$List)):(toReturn = (new ListAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getRequestFactory(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$RequestMessage).getRequestFactory();
  return toReturn;
}

function $getVersion_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$RequestMessage).getVersion();
  return toReturn;
}

function $setRequestFactory(this$static, value){
  dynamicCast($getWrapped(this$static.this$0), Q$RequestMessage).setRequestFactory(value);
}

function RequestMessageAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(681, 1, makeCastMap([Q$RequestMessage]), RequestMessageAutoBean$1_0);
_.equals$ = function equals_21(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$RequestMessage).equals$(o);
}
;
_.getInvocations = function getInvocations(){
  return $getInvocations(this);
}
;
_.getOperations = function getOperations(){
  return $getOperations(this);
}
;
_.getRequestFactory = function getRequestFactory(){
  return $getRequestFactory(this);
}
;
_.getVersion = function getVersion_3(){
  return $getVersion_1(this);
}
;
_.hashCode$ = function hashCode_21(){
  return dynamicCast($getWrapped(this.this$0), Q$RequestMessage).hashCode$();
}
;
_.setInvocations = function setInvocations(value){
  dynamicCast($getWrapped(this.this$0), Q$RequestMessage).setInvocations(value);
}
;
_.setOperations = function setOperations(value){
  dynamicCast($getWrapped(this.this$0), Q$RequestMessage).setOperations(value);
}
;
_.setRequestFactory = function setRequestFactory(value){
  $setRequestFactory(this, value);
}
;
_.setVersion = function setVersion_1(version){
  dynamicCast($getWrapped(this.this$0), Q$RequestMessage).setVersion(version);
}
;
_.toString$ = function toString_18(){
  return dynamicCast($getWrapped(this.this$0), Q$RequestMessage).toString$();
}
;
_.this$0 = null;
function RequestMessageAutoBean$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(682, 1, makeCastMap([Q$RequestMessage]), RequestMessageAutoBean$2_0);
_.getInvocations = function getInvocations_0(){
  return dynamicCast($getOrReify(this.this$0, 'I'), Q$List);
}
;
_.getOperations = function getOperations_0(){
  return dynamicCast($getOrReify(this.this$0, 'O'), Q$List);
}
;
_.getRequestFactory = function getRequestFactory_0(){
  return dynamicCast($getOrReify(this.this$0, 'F'), Q$String);
}
;
_.getVersion = function getVersion_4(){
  return dynamicCast($getOrReify(this.this$0, 'V'), Q$String);
}
;
_.setInvocations = function setInvocations_0(value){
  $setProperty(this.this$0, 'I', value);
}
;
_.setOperations = function setOperations_0(value){
  $setProperty(this.this$0, 'O', value);
}
;
_.setRequestFactory = function setRequestFactory_0(value){
  $setProperty(this.this$0, 'F', value);
}
;
_.setVersion = function setVersion_2(version){
  $setProperty(this.this$0, 'V', version);
}
;
_.this$0 = null;
function $$init_5(this$static){
  this$static.shim = new ResponseMessageAutoBean$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ResponseMessageAutoBean_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_5(this);
}

function ResponseMessageAutoBean_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_5(this);
}

defineSeed(683, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ResponseMessageAutoBean_0, ResponseMessageAutoBean_1);
_.as = function as_5(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_5(){
  return new ResponseMessageAutoBean$2_0(this);
}
;
_.getType_0 = function getType_13(){
  return Lcom_google_web_bindery_requestfactory_shared_messages_ResponseMessage_2_classLit;
}
;
_.traverseProperties = function traverseProperties_4(visitor, ctx){
  var as, bean, propertyContext, value;
  as = this.shim;
  bean = dynamicCast(getAutoBean($getGeneralFailure(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'F'), Lcom_google_web_bindery_requestfactory_shared_messages_ServerFailureMessage_2_classLit);
  visitor.visitReferenceProperty('F', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  value = $getVersion_2(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'V'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('V', value, propertyContext);
  bean = dynamicCast(getAutoBean($getInvocationResults(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'I'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_List_2_classLit, Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 0]));
  visitor.visitCollectionProperty('I', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  bean = dynamicCast(getAutoBean($getOperations_0(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'O'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_List_2_classLit, Lcom_google_web_bindery_requestfactory_shared_messages_OperationMessage_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 0]));
  visitor.visitCollectionProperty('O', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  bean = dynamicCast(getAutoBean($getViolations(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'X'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_List_2_classLit, Lcom_google_web_bindery_requestfactory_shared_messages_ViolationMessage_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 0]));
  visitor.visitCollectionProperty('X', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  bean = dynamicCast(getAutoBean($getStatusCodes(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'S'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_List_2_classLit, Ljava_lang_Boolean_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 0]));
  visitor.visitCollectionProperty('S', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
}
;
function $getGeneralFailure(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ResponseMessage).getGeneralFailure();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$ServerFailureMessage)):(toReturn = (new ServerFailureMessageAutoBean_1(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getInvocationResults(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ResponseMessage).getInvocationResults();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$List)):(toReturn = (new ListAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getOperations_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ResponseMessage).getOperations();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$List)):(toReturn = (new ListAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getStatusCodes(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ResponseMessage).getStatusCodes();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$List)):(toReturn = (new ListAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getVersion_2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ResponseMessage).getVersion();
  return toReturn;
}

function $getViolations(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ResponseMessage).getViolations();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$List)):(toReturn = (new ListAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function ResponseMessageAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(684, 1, makeCastMap([Q$ResponseMessage]), ResponseMessageAutoBean$1_0);
_.equals$ = function equals_22(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ResponseMessage).equals$(o);
}
;
_.getGeneralFailure = function getGeneralFailure(){
  return $getGeneralFailure(this);
}
;
_.getInvocationResults = function getInvocationResults(){
  return $getInvocationResults(this);
}
;
_.getOperations = function getOperations_1(){
  return $getOperations_0(this);
}
;
_.getStatusCodes = function getStatusCodes(){
  return $getStatusCodes(this);
}
;
_.getVersion = function getVersion_5(){
  return $getVersion_2(this);
}
;
_.getViolations = function getViolations(){
  return $getViolations(this);
}
;
_.hashCode$ = function hashCode_22(){
  return dynamicCast($getWrapped(this.this$0), Q$ResponseMessage).hashCode$();
}
;
_.setVersion = function setVersion_3(version){
  dynamicCast($getWrapped(this.this$0), Q$ResponseMessage).setVersion(version);
}
;
_.toString$ = function toString_19(){
  return dynamicCast($getWrapped(this.this$0), Q$ResponseMessage).toString$();
}
;
_.this$0 = null;
function ResponseMessageAutoBean$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(685, 1, makeCastMap([Q$ResponseMessage]), ResponseMessageAutoBean$2_0);
_.getGeneralFailure = function getGeneralFailure_0(){
  return dynamicCast($getOrReify(this.this$0, 'F'), Q$ServerFailureMessage);
}
;
_.getInvocationResults = function getInvocationResults_0(){
  return dynamicCast($getOrReify(this.this$0, 'I'), Q$List);
}
;
_.getOperations = function getOperations_2(){
  return dynamicCast($getOrReify(this.this$0, 'O'), Q$List);
}
;
_.getStatusCodes = function getStatusCodes_0(){
  return dynamicCast($getOrReify(this.this$0, 'S'), Q$List);
}
;
_.getVersion = function getVersion_6(){
  return dynamicCast($getOrReify(this.this$0, 'V'), Q$String);
}
;
_.getViolations = function getViolations_0(){
  return dynamicCast($getOrReify(this.this$0, 'X'), Q$List);
}
;
_.setVersion = function setVersion_4(version){
  $setProperty(this.this$0, 'V', version);
}
;
_.this$0 = null;
function $$init_6(this$static){
  this$static.shim = new ServerFailureMessageAutoBean$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ServerFailureMessageAutoBean_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_6(this);
}

function ServerFailureMessageAutoBean_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_6(this);
}

defineSeed(686, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ServerFailureMessageAutoBean_0, ServerFailureMessageAutoBean_1);
_.as = function as_6(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_6(){
  return new ServerFailureMessageAutoBean$2_0(this);
}
;
_.getType_0 = function getType_14(){
  return Lcom_google_web_bindery_requestfactory_shared_messages_ServerFailureMessage_2_classLit;
}
;
_.traverseProperties = function traverseProperties_5(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = ($clinit_Boolean() , $isFatal(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'F'), Z_classLit);
  visitor.visitValueProperty('F', value, propertyContext);
  value = $getExceptionType(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'X'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('X', value, propertyContext);
  value = $getMessage(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'M'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('M', value, propertyContext);
  value = $getStackTrace(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'S'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('S', value, propertyContext);
}
;
function $getExceptionType(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ServerFailureMessage).getExceptionType();
  return toReturn;
}

function $getMessage(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ServerFailureMessage).getMessage();
  return toReturn;
}

function $getStackTrace(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ServerFailureMessage).getStackTrace();
  return toReturn;
}

function $isFatal(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ServerFailureMessage).isFatal();
  return toReturn;
}

function ServerFailureMessageAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(687, 1, makeCastMap([Q$ServerFailureMessage]), ServerFailureMessageAutoBean$1_0);
_.equals$ = function equals_23(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ServerFailureMessage).equals$(o);
}
;
_.getExceptionType = function getExceptionType(){
  return $getExceptionType(this);
}
;
_.getMessage = function getMessage_1(){
  return $getMessage(this);
}
;
_.getStackTrace = function getStackTrace(){
  return $getStackTrace(this);
}
;
_.hashCode$ = function hashCode_23(){
  return dynamicCast($getWrapped(this.this$0), Q$ServerFailureMessage).hashCode$();
}
;
_.isFatal = function isFatal(){
  return $isFatal(this);
}
;
_.toString$ = function toString_20(){
  return dynamicCast($getWrapped(this.this$0), Q$ServerFailureMessage).toString$();
}
;
_.this$0 = null;
function ServerFailureMessageAutoBean$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(688, 1, makeCastMap([Q$ServerFailureMessage]), ServerFailureMessageAutoBean$2_0);
_.getExceptionType = function getExceptionType_0(){
  return dynamicCast($getOrReify(this.this$0, 'X'), Q$String);
}
;
_.getMessage = function getMessage_2(){
  return dynamicCast($getOrReify(this.this$0, 'M'), Q$String);
}
;
_.getStackTrace = function getStackTrace_0(){
  return dynamicCast($getOrReify(this.this$0, 'S'), Q$String);
}
;
_.isFatal = function isFatal_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'F'), Q$Boolean);
  return !!toReturn && toReturn.value_0;
}
;
_.this$0 = null;
function $$init_7(this$static){
  this$static.shim = new ViolationMessageAutoBean$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ViolationMessageAutoBean_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_7(this);
}

function ViolationMessageAutoBean_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_7(this);
}

defineSeed(689, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ViolationMessageAutoBean_0, ViolationMessageAutoBean_1);
_.as = function as_7(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_7(){
  return new ViolationMessageAutoBean$2_0(this);
}
;
_.getType_0 = function getType_15(){
  return Lcom_google_web_bindery_requestfactory_shared_messages_ViolationMessage_2_classLit;
}
;
_.traverseProperties = function traverseProperties_6(visitor, ctx){
  var as, bean, propertyContext, value;
  as = this.shim;
  bean = dynamicCast(getAutoBean($getLeafBeanId(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'L'), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage_2_classLit);
  visitor.visitReferenceProperty('L', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  bean = dynamicCast(getAutoBean($getRootBeanId(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'R'), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage_2_classLit);
  visitor.visitReferenceProperty('R', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  value = $getMessage_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'M'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('M', value, propertyContext);
  value = $getMessageTemplate(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'T'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('T', value, propertyContext);
  value = $getPath(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'P'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('P', value, propertyContext);
}
;
function $getLeafBeanId(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ViolationMessage).getLeafBeanId();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$IdMessage)):(toReturn = (new IdMessageAutoBean_1(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getMessage_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ViolationMessage).getMessage();
  return toReturn;
}

function $getMessageTemplate(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ViolationMessage).getMessageTemplate();
  return toReturn;
}

function $getPath(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ViolationMessage).getPath();
  return toReturn;
}

function $getRootBeanId(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ViolationMessage).getRootBeanId();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$IdMessage)):(toReturn = (new IdMessageAutoBean_1(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function ViolationMessageAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(690, 1, makeCastMap([Q$ViolationMessage]), ViolationMessageAutoBean$1_0);
_.equals$ = function equals_24(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ViolationMessage).equals$(o);
}
;
_.getLeafBeanId = function getLeafBeanId(){
  return $getLeafBeanId(this);
}
;
_.getMessage = function getMessage_3(){
  return $getMessage_0(this);
}
;
_.getMessageTemplate = function getMessageTemplate(){
  return $getMessageTemplate(this);
}
;
_.getPath = function getPath(){
  return $getPath(this);
}
;
_.getRootBeanId = function getRootBeanId(){
  return $getRootBeanId(this);
}
;
_.hashCode$ = function hashCode_24(){
  return dynamicCast($getWrapped(this.this$0), Q$ViolationMessage).hashCode$();
}
;
_.toString$ = function toString_21(){
  return dynamicCast($getWrapped(this.this$0), Q$ViolationMessage).toString$();
}
;
_.this$0 = null;
function ViolationMessageAutoBean$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(691, 1, makeCastMap([Q$ViolationMessage]), ViolationMessageAutoBean$2_0);
_.getLeafBeanId = function getLeafBeanId_0(){
  return dynamicCast($getOrReify(this.this$0, 'L'), Q$IdMessage);
}
;
_.getMessage = function getMessage_4(){
  return dynamicCast($getOrReify(this.this$0, 'M'), Q$String);
}
;
_.getMessageTemplate = function getMessageTemplate_0(){
  return dynamicCast($getOrReify(this.this$0, 'T'), Q$String);
}
;
_.getPath = function getPath_0(){
  return dynamicCast($getOrReify(this.this$0, 'P'), Q$String);
}
;
_.getRootBeanId = function getRootBeanId_0(){
  return dynamicCast($getOrReify(this.this$0, 'R'), Q$IdMessage);
}
;
_.this$0 = null;
defineSeed(699, 696, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget]));
_.asWidget = function asWidget_0(){
  return !this.view?null:this.view.asWidget();
}
;
function isValidEmailAddress(value){
  var valid;
  if (value == null)
    return false;
  $equals_5(((Ljava_lang_String_2_classLit.modifiers & 2) != 0?'interface ':(Ljava_lang_String_2_classLit.modifiers & 1) != 0?'':'class ') + Ljava_lang_String_2_classLit.typeName, ((Ljava_lang_String_2_classLit.modifiers & 2) != 0?'interface ':(Ljava_lang_String_2_classLit.modifiers & 1) != 0?'':'class ') + Ljava_lang_String_2_classLit.typeName)?(valid = $matches(value, '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(?:[a-zA-Z]{2,6})$')):(valid = $matches(value, '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(?:[a-zA-Z]{2,6})$'));
  return valid;
}

function isValidUserName(userName){
  if (userName == null)
    return false;
  return userName.length >= 6;
}

function $clinit_NotificationTypes(){
  $clinit_NotificationTypes = nullMethod;
  lineHeight = valueOf_1(29);
  lineHeightShortList = valueOf_1(34);
  headerHeight = valueOf_1(32);
  pageSize_0 = valueOf_1(820);
  valueOf_1(40);
  bulletinPageHeight = valueOf_1(680);
  bulletinPageHeightChrome = valueOf_1(1150);
  bulletinDirectionRemarque = valueOf_1(100);
}

var bulletinDirectionRemarque, bulletinPageHeight, bulletinPageHeightChrome, headerHeight, lineHeight, lineHeightShortList, pageSize_0;
function ActionCompletedEvent_0(){
  $clinit_ActionCompletedEvent();
}

defineSeed(749, 232, {}, ActionCompletedEvent_0);
_.dispatch_0 = function dispatch_31(handler){
  dynamicCast(handler, Q$ActionCompletedEvent$ActionCompletedHandler).onActionCompleted(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_32(){
  return TYPE_31;
}
;
function ActionInProgressEvent_0(){
  $clinit_ActionInProgressEvent();
}

defineSeed(750, 232, {}, ActionInProgressEvent_0);
_.dispatch_0 = function dispatch_32(handler){
  dynamicCast(handler, Q$ActionInProgressEvent$ActionInProgressHandler).onActionInProgress(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_33(){
  return TYPE_32;
}
;
function PageAfterSelectEvent_0(tokenName){
  $clinit_PageAfterSelectEvent();
  this.tokenName = tokenName;
}

defineSeed(756, 232, {}, PageAfterSelectEvent_0);
_.dispatch_0 = function dispatch_38(handler){
  dynamicCast(handler, Q$PageAfterSelectEvent$PageAfterSelectHandler).onPageAfterSelect(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_39(){
  return TYPE_38;
}
;
_.tokenName = '';
defineSeed(831, 698, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler, Q$FrmBulletinManagementPresenter, Q$FrmBulletinManagementUiHandler]));
_.currentUser = null;
defineSeed(865, 698, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$FrmBulletinViewSummaryPresenter, Q$FrmBulletinViewSummaryUiHandler]));
_.currentUser = null;
function $onActionCompleted(this$static){
  $showProgressBar(dynamicCast(this$static.view, Q$MainPagePresenter$MyView), false);
  $enableMainPanel(dynamicCast(this$static.view, Q$MainPagePresenter$MyView), ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
}

function $onActionInProgress(this$static){
  $showProgressBar(dynamicCast(this$static.view, Q$MainPagePresenter$MyView), true);
  $enableMainPanel(dynamicCast(this$static.view, Q$MainPagePresenter$MyView), ($clinit_Boolean() , $clinit_Boolean() , FALSE_1));
}

function $onPageAfterSelect(this$static, event_0){
  $showCurrentPageOnMenu(dynamicCast(this$static.view, Q$MainPagePresenter$MyView), event_0.tokenName);
}

defineSeed(934, 698, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onActionCompleted = function onActionCompleted(event_0){
  $onActionCompleted(this);
}
;
_.onActionInProgress = function onActionInProgress(event_0){
  $onActionInProgress(this);
}
;
_.onPageAfterSelect = function onPageAfterSelect(event_0){
  $onPageAfterSelect(this, event_0);
}
;
defineSeed(935, 722, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onActionCompleted = function onActionCompleted_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$3_0(this.eventBus, event_0));
}
;
_.onActionInProgress = function onActionInProgress_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$2_0(this.eventBus, event_0));
}
;
_.onPageAfterSelect = function onPageAfterSelect_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$4_0(this.eventBus, event_0));
}
;
function $success_23(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$2$1_0(presenter, this$static.val$event));
}

function MainPagePresenterMyProxyImpl$2_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(938, 711, {}, MainPagePresenterMyProxyImpl$2_0);
_.success = function success_25(presenter){
  $success_23(this, dynamicCast(presenter, Q$MainPagePresenter));
}
;
_.val$event = null;
function MainPagePresenterMyProxyImpl$2$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(939, 1, {}, MainPagePresenterMyProxyImpl$2$1_0);
_.execute_0 = function execute_53(){
  $onActionInProgress(this.val$presenter);
}
;
_.val$event = null;
_.val$presenter = null;
function $success_24(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$3$1_0(presenter, this$static.val$event));
}

function MainPagePresenterMyProxyImpl$3_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(940, 711, {}, MainPagePresenterMyProxyImpl$3_0);
_.success = function success_26(presenter){
  $success_24(this, dynamicCast(presenter, Q$MainPagePresenter));
}
;
_.val$event = null;
function MainPagePresenterMyProxyImpl$3$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(941, 1, {}, MainPagePresenterMyProxyImpl$3$1_0);
_.execute_0 = function execute_54(){
  $onActionCompleted(this.val$presenter);
}
;
_.val$event = null;
_.val$presenter = null;
function $success_25(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$4$1_0(presenter, this$static.val$event));
}

function MainPagePresenterMyProxyImpl$4_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(942, 711, {}, MainPagePresenterMyProxyImpl$4_0);
_.success = function success_27(presenter){
  $success_25(this, dynamicCast(presenter, Q$MainPagePresenter));
}
;
_.val$event = null;
function MainPagePresenterMyProxyImpl$4$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(943, 1, {}, MainPagePresenterMyProxyImpl$4$1_0);
_.execute_0 = function execute_55(){
  $onPageAfterSelect(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $enableAllChildren(this$static, enable, widget){
  var iter, nextWidget;
  if (instanceOf(widget, Q$HasWidgets)) {
    iter = dynamicCast(widget, Q$HasWidgets).iterator();
    while (iter.hasNext()) {
      nextWidget = dynamicCast(iter.next_0(), Q$Widget);
      $enableAllChildren(this$static, enable, nextWidget);
      instanceOf(nextWidget, Q$FocusWidget) && dynamicCast(nextWidget, Q$FocusWidget).setEnabled(enable);
    }
  }
}

function $enableMainPanel(this$static, enabled){
  $enableAllChildren(this$static, enabled.value_0, this$static.mainContentPanel);
}

function $showCurrentPageOnMenu(this$static, tokenName){
  $equals_5(tokenName, '!homepage') && $switchStyle(this$static, this$static.cmdHome, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, 'profilemgt') && $switchStyle(this$static, this$static.cmdProfileManagement, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, 'bulletincreation') && $switchStyle(this$static, this$static.cmdAttribution, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, 'bulletinmanagement') && $switchStyle(this$static, this$static.cmdAttributionPerson, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  if ($equals_5(tokenName, 'bulletindetail')) {
    $switchStyle(this$static, this$static.cmdMarkView, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
    $switchStyle(this$static, this$static.cmdMarkViewProf, TRUE_1, FALSE_1);
    $switchStyle(this$static, this$static.cmdMarkViewStudent, FALSE_1, TRUE_1);
  }
  if ($equals_5(tokenName, 'markinput')) {
    $switchStyle(this$static, this$static.cmdMarkInput, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
    $switchStyle(this$static, this$static.cmdMarkInputProf, TRUE_1, FALSE_1);
  }
  $equals_5(tokenName, 'students') && $switchStyle(this$static, this$static.cmdStudentList, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, 'studentadd') && $switchStyle(this$static, this$static.cmdStudentAdd, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, '!profs') && $switchStyle(this$static, this$static.cmdProfList, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, '!profsadd') && $switchStyle(this$static, this$static.cmdProfAdd, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, 'branchelist') && $switchStyle(this$static, this$static.cmdBrancheList, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, 'brancheadd') && $switchStyle(this$static, this$static.cmdBrancheAdd, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, 'subjectlist') && $switchStyle(this$static, this$static.cmdSubjectList, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, 'subjectadd') && $switchStyle(this$static, this$static.cmdSubjectAdd, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, 'classlist') && $switchStyle(this$static, this$static.cmdClassList, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, 'classeadd') && $switchStyle(this$static, this$static.cmdClassAdd, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, '!cours') && $switchStyle(this$static, this$static.cmdProgrammeList, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, 'coursadd') && $switchStyle(this$static, this$static.cmdProgrammeAdd, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, '!ecolepage') && $switchStyle(this$static, this$static.cmdSchoolList, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, '!addecole') && $switchStyle(this$static, this$static.cmdSchoolAdd, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, 'usermanagement') && $switchStyle(this$static, this$static.cmdUserManagement, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  $equals_5(tokenName, 'settings') && $switchStyle(this$static, this$static.cmdSettings, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
  if ($equals_5(tokenName, 'password')) {
    $switchStyle(this$static, this$static.cmdPassword, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
    $switchStyle(this$static, this$static.cmdPasswordProf, TRUE_1, FALSE_1);
    $switchStyle(this$static, this$static.cmdPasswordStudent, FALSE_1, TRUE_1);
  }
  if ($equals_5(tokenName, '!contact')) {
    $switchStyle(this$static, this$static.cmdHelp, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
    $switchStyle(this$static, this$static.cmdHelpProf, TRUE_1, FALSE_1);
    $switchStyle(this$static, this$static.cmdHelpStudent, FALSE_1, TRUE_1);
  }
  $equals_5(tokenName, 'bulletin') && $switchStyle(this$static, this$static.cmdBulletin, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1), FALSE_1);
}

function $showProgressBar(this$static, visible){
  this$static.pnlProgressBar.parent_0 == this$static.popup || $add_4(this$static.popup, this$static.pnlProgressBar);
  $setVisible_0(this$static.pnlProgressBar, visible);
  $setSize(this$static.popup, '' + $getClientWidth($doc) + 'px', '' + $getClientHeight($doc) + 'px');
  $setStyleName(this$static.popup, 'progressBarPopup');
  visible?$center(this$static.popup):$hide(this$static.popup);
}

function $switchStyle(this$static, link, prof, student){
  if (!prof.value_0 && !student.value_0) {
    !!this$static.lastPage && $setStyleName(this$static.lastPage, '');
    !!this$static.lastPageProf && $setStyleName(this$static.lastPageProf, '');
    !!this$static.lastPageStudent && $setStyleName(this$static.lastPageStudent, '');
  }
  link.element['className'] = 'currentPage';
  prof.value_0 && (this$static.lastPageProf = link);
  student.value_0 && (this$static.lastPageStudent = link);
  !prof.value_0 && !student.value_0 && (this$static.lastPage = link);
}

function $$init_8(this$static){
  this$static.shim = new AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_8(this);
}

function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_8(this);
}

defineSeed(1359, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_8(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_8(){
  return new AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_16(){
  return Lcom_lemania_sis_shared_AssignmentProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_7(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getActive(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'active'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('active', value, propertyContext);
  value = $getId_2(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getClasseName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'classeName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('classeName', value, propertyContext);
  value = $getCourseName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'courseName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('courseName', value, propertyContext);
  value = $getProgrammeName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'programmeName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('programmeName', value, propertyContext);
  value = $getSchoolName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'schoolName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('schoolName', value, propertyContext);
  value = $getSubjectName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'subjectName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('subjectName', value, propertyContext);
}
;
function $getActive(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getClasseName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getClasseName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getCourseName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getCourseName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getId_2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getProgrammeName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getProgrammeName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getSchoolName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getSchoolName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getSubjectName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getSubjectName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1360, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$AssignmentProxy]), AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_28(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$AssignmentProxy).equals$(o);
}
;
_.getActive = function getActive(){
  return $getActive(this);
}
;
_.getClasseName = function getClasseName(){
  return $getClasseName(this);
}
;
_.getCourseName = function getCourseName(){
  return $getCourseName(this);
}
;
_.getId_0 = function getId_1(){
  return $getId_2(this);
}
;
_.getProgrammeName = function getProgrammeName(){
  return $getProgrammeName(this);
}
;
_.getSchoolName = function getSchoolName(){
  return $getSchoolName(this);
}
;
_.getSubjectName = function getSubjectName(){
  return $getSubjectName(this);
}
;
_.hashCode$ = function hashCode_28(){
  return dynamicCast($getWrapped(this.this$0), Q$AssignmentProxy).hashCode$();
}
;
_.toString$ = function toString_24(){
  return dynamicCast($getWrapped(this.this$0), Q$AssignmentProxy).toString$();
}
;
_.this$0 = null;
function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1361, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$AssignmentProxy]), AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_29(other){
  return equals_14(this.this$0, other);
}
;
_.getActive = function getActive_0(){
  return dynamicCast($getOrReify(this.this$0, 'active'), Q$Boolean);
}
;
_.getClasseName = function getClasseName_0(){
  return dynamicCast($getOrReify(this.this$0, 'classeName'), Q$String);
}
;
_.getCourseName = function getCourseName_0(){
  return dynamicCast($getOrReify(this.this$0, 'courseName'), Q$String);
}
;
_.getId_0 = function getId_2(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getProgrammeName = function getProgrammeName_0(){
  return dynamicCast($getOrReify(this.this$0, 'programmeName'), Q$String);
}
;
_.getSchoolName = function getSchoolName_0(){
  return dynamicCast($getOrReify(this.this$0, 'schoolName'), Q$String);
}
;
_.getSubjectName = function getSubjectName_0(){
  return dynamicCast($getOrReify(this.this$0, 'subjectName'), Q$String);
}
;
_.hashCode$ = function hashCode_29(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.this$0 = null;
function $$init_9(this$static){
  this$static.shim = new BrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function BrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_9(this);
}

function BrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_9(this);
}

defineSeed(1362, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), BrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, BrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_9(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_9(){
  return new BrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_17(){
  return Lcom_lemania_sis_shared_BrancheProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_8(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getIsActive(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'isActive'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('isActive', value, propertyContext);
  value = $getDefaultCoef(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'defaultCoef'), Ljava_lang_Double_2_classLit);
  visitor.visitValueProperty('defaultCoef', value, propertyContext);
  value = $getId_3(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getBrancheName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'brancheName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('brancheName', value, propertyContext);
}
;
function $getBrancheName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BrancheProxy).getBrancheName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getDefaultCoef(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BrancheProxy).getDefaultCoef();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Double);
  return toReturn;
}

function $getId_3(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BrancheProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getIsActive(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BrancheProxy).getIsActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function BrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1363, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BrancheProxy]), BrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_30(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$BrancheProxy).equals$(o);
}
;
_.getBrancheName = function getBrancheName(){
  return $getBrancheName(this);
}
;
_.getDefaultCoef = function getDefaultCoef(){
  return $getDefaultCoef(this);
}
;
_.getId_0 = function getId_3(){
  return $getId_3(this);
}
;
_.getIsActive = function getIsActive(){
  return $getIsActive(this);
}
;
_.hashCode$ = function hashCode_30(){
  return dynamicCast($getWrapped(this.this$0), Q$BrancheProxy).hashCode$();
}
;
_.setBrancheName = function setBrancheName(brancheName){
  dynamicCast($getWrapped(this.this$0), Q$BrancheProxy).setBrancheName(brancheName);
}
;
_.setDefaultCoef = function setDefaultCoef(defaultCoef){
  dynamicCast($getWrapped(this.this$0), Q$BrancheProxy).setDefaultCoef(defaultCoef);
}
;
_.setIsActive = function setIsActive(isActive){
  dynamicCast($getWrapped(this.this$0), Q$BrancheProxy).setIsActive(isActive);
}
;
_.toString$ = function toString_25(){
  return dynamicCast($getWrapped(this.this$0), Q$BrancheProxy).toString$();
}
;
_.this$0 = null;
function BrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1364, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BrancheProxy]), BrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_31(other){
  return equals_14(this.this$0, other);
}
;
_.getBrancheName = function getBrancheName_0(){
  return dynamicCast($getOrReify(this.this$0, 'brancheName'), Q$String);
}
;
_.getDefaultCoef = function getDefaultCoef_0(){
  return dynamicCast($getOrReify(this.this$0, 'defaultCoef'), Q$Double);
}
;
_.getId_0 = function getId_4(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getIsActive = function getIsActive_0(){
  return dynamicCast($getOrReify(this.this$0, 'isActive'), Q$Boolean);
}
;
_.hashCode$ = function hashCode_31(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setBrancheName = function setBrancheName_0(brancheName){
  $setProperty(this.this$0, 'brancheName', brancheName);
}
;
_.setDefaultCoef = function setDefaultCoef_0(defaultCoef){
  $setProperty(this.this$0, 'defaultCoef', defaultCoef);
}
;
_.setIsActive = function setIsActive_0(isActive){
  $setProperty(this.this$0, 'isActive', isActive);
}
;
_.this$0 = null;
function $$init_10(this$static){
  this$static.shim = new BulletinBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function BulletinBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_10(this);
}

function BulletinBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_10(this);
}

defineSeed(1365, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), BulletinBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, BulletinBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_10(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_10(){
  return new BulletinBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_18(){
  return Lcom_lemania_sis_shared_BulletinBrancheProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_9(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getBrancheCoef(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'brancheCoef'), Ljava_lang_Double_2_classLit);
  visitor.visitValueProperty('brancheCoef', value, propertyContext);
  value = $getBulletinSubjectId(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'bulletinSubjectId'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('bulletinSubjectId', value, propertyContext);
  value = $getId_4(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getAn(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'an'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('an', value, propertyContext);
  value = $getBulletinBrancheName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'bulletinBrancheName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('bulletinBrancheName', value, propertyContext);
  value = $getT1(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't1'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t1', value, propertyContext);
  value = $getT1_1(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't1_1'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t1_1', value, propertyContext);
  value = $getT1_2(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't1_2'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t1_2', value, propertyContext);
  value = $getT1_3(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't1_3'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t1_3', value, propertyContext);
  value = $getT1_4(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't1_4'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t1_4', value, propertyContext);
  value = $getT1_5(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't1_5'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t1_5', value, propertyContext);
  value = $getT2(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't2'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t2', value, propertyContext);
  value = $getT2_1(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't2_1'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t2_1', value, propertyContext);
  value = $getT2_2(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't2_2'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t2_2', value, propertyContext);
  value = $getT2_3(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't2_3'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t2_3', value, propertyContext);
  value = $getT2_4(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't2_4'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t2_4', value, propertyContext);
  value = $getT2_5(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't2_5'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t2_5', value, propertyContext);
  value = $getT3(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't3'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t3', value, propertyContext);
  value = $getT3_1(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't3_1'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t3_1', value, propertyContext);
  value = $getT3_2(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't3_2'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t3_2', value, propertyContext);
  value = $getT3_3(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't3_3'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t3_3', value, propertyContext);
  value = $getT3_4(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't3_4'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t3_4', value, propertyContext);
  value = $getT3_5(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't3_5'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t3_5', value, propertyContext);
}
;
function $getAn(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getAn();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getBrancheCoef(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getBrancheCoef();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Double);
  return toReturn;
}

function $getBulletinBrancheName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getBulletinBrancheName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getBulletinSubjectId(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getBulletinSubjectId();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getId_4(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getT1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT1();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT1_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT1_1();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT1_2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT1_2();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT1_3(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT1_3();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT1_4(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT1_4();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT1_5(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT1_5();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT2();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT2_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT2_1();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT2_2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT2_2();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT2_3(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT2_3();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT2_4(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT2_4();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT2_5(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT2_5();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT3(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT3();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT3_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT3_1();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT3_2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT3_2();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT3_3(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT3_3();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT3_4(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT3_4();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT3_5(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinBrancheProxy).getT3_5();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function BulletinBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1366, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinBrancheProxy]), BulletinBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_32(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).equals$(o);
}
;
_.getAn = function getAn(){
  return $getAn(this);
}
;
_.getBrancheCoef = function getBrancheCoef(){
  return $getBrancheCoef(this);
}
;
_.getBulletinBrancheName = function getBulletinBrancheName(){
  return $getBulletinBrancheName(this);
}
;
_.getBulletinSubjectId = function getBulletinSubjectId(){
  return $getBulletinSubjectId(this);
}
;
_.getId_0 = function getId_5(){
  return $getId_4(this);
}
;
_.getT1 = function getT1(){
  return $getT1(this);
}
;
_.getT1_1 = function getT1_1(){
  return $getT1_1(this);
}
;
_.getT1_2 = function getT1_2(){
  return $getT1_2(this);
}
;
_.getT1_3 = function getT1_3(){
  return $getT1_3(this);
}
;
_.getT1_4 = function getT1_4(){
  return $getT1_4(this);
}
;
_.getT1_5 = function getT1_5(){
  return $getT1_5(this);
}
;
_.getT2 = function getT2(){
  return $getT2(this);
}
;
_.getT2_1 = function getT2_1(){
  return $getT2_1(this);
}
;
_.getT2_2 = function getT2_2(){
  return $getT2_2(this);
}
;
_.getT2_3 = function getT2_3(){
  return $getT2_3(this);
}
;
_.getT2_4 = function getT2_4(){
  return $getT2_4(this);
}
;
_.getT2_5 = function getT2_5(){
  return $getT2_5(this);
}
;
_.getT3 = function getT3(){
  return $getT3(this);
}
;
_.getT3_1 = function getT3_1(){
  return $getT3_1(this);
}
;
_.getT3_2 = function getT3_2(){
  return $getT3_2(this);
}
;
_.getT3_3 = function getT3_3(){
  return $getT3_3(this);
}
;
_.getT3_4 = function getT3_4(){
  return $getT3_4(this);
}
;
_.getT3_5 = function getT3_5(){
  return $getT3_5(this);
}
;
_.hashCode$ = function hashCode_32(){
  return dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).hashCode$();
}
;
_.toString$ = function toString_26(){
  return dynamicCast($getWrapped(this.this$0), Q$BulletinBrancheProxy).toString$();
}
;
_.this$0 = null;
function BulletinBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1367, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinBrancheProxy]), BulletinBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_33(other){
  return equals_14(this.this$0, other);
}
;
_.getAn = function getAn_0(){
  return dynamicCast($getOrReify(this.this$0, 'an'), Q$String);
}
;
_.getBrancheCoef = function getBrancheCoef_0(){
  return dynamicCast($getOrReify(this.this$0, 'brancheCoef'), Q$Double);
}
;
_.getBulletinBrancheName = function getBulletinBrancheName_0(){
  return dynamicCast($getOrReify(this.this$0, 'bulletinBrancheName'), Q$String);
}
;
_.getBulletinSubjectId = function getBulletinSubjectId_0(){
  return dynamicCast($getOrReify(this.this$0, 'bulletinSubjectId'), Q$Long);
}
;
_.getId_0 = function getId_6(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getT1 = function getT1_0(){
  return dynamicCast($getOrReify(this.this$0, 't1'), Q$String);
}
;
_.getT1_1 = function getT1_1_0(){
  return dynamicCast($getOrReify(this.this$0, 't1_1'), Q$String);
}
;
_.getT1_2 = function getT1_2_0(){
  return dynamicCast($getOrReify(this.this$0, 't1_2'), Q$String);
}
;
_.getT1_3 = function getT1_3_0(){
  return dynamicCast($getOrReify(this.this$0, 't1_3'), Q$String);
}
;
_.getT1_4 = function getT1_4_0(){
  return dynamicCast($getOrReify(this.this$0, 't1_4'), Q$String);
}
;
_.getT1_5 = function getT1_5_0(){
  return dynamicCast($getOrReify(this.this$0, 't1_5'), Q$String);
}
;
_.getT2 = function getT2_0(){
  return dynamicCast($getOrReify(this.this$0, 't2'), Q$String);
}
;
_.getT2_1 = function getT2_1_0(){
  return dynamicCast($getOrReify(this.this$0, 't2_1'), Q$String);
}
;
_.getT2_2 = function getT2_2_0(){
  return dynamicCast($getOrReify(this.this$0, 't2_2'), Q$String);
}
;
_.getT2_3 = function getT2_3_0(){
  return dynamicCast($getOrReify(this.this$0, 't2_3'), Q$String);
}
;
_.getT2_4 = function getT2_4_0(){
  return dynamicCast($getOrReify(this.this$0, 't2_4'), Q$String);
}
;
_.getT2_5 = function getT2_5_0(){
  return dynamicCast($getOrReify(this.this$0, 't2_5'), Q$String);
}
;
_.getT3 = function getT3_0(){
  return dynamicCast($getOrReify(this.this$0, 't3'), Q$String);
}
;
_.getT3_1 = function getT3_1_0(){
  return dynamicCast($getOrReify(this.this$0, 't3_1'), Q$String);
}
;
_.getT3_2 = function getT3_2_0(){
  return dynamicCast($getOrReify(this.this$0, 't3_2'), Q$String);
}
;
_.getT3_3 = function getT3_3_0(){
  return dynamicCast($getOrReify(this.this$0, 't3_3'), Q$String);
}
;
_.getT3_4 = function getT3_4_0(){
  return dynamicCast($getOrReify(this.this$0, 't3_4'), Q$String);
}
;
_.getT3_5 = function getT3_5_0(){
  return dynamicCast($getOrReify(this.this$0, 't3_5'), Q$String);
}
;
_.hashCode$ = function hashCode_33(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.this$0 = null;
function $$init_11(this$static){
  this$static.shim = new BulletinProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function BulletinProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_11(this);
}

function BulletinProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_11(this);
}

defineSeed(1368, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), BulletinProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, BulletinProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_11(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_11(){
  return new BulletinProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_19(){
  return Lcom_lemania_sis_shared_BulletinProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_10(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getIsActive_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'isActive'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('isActive', value, propertyContext);
  value = $getId_5(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getBulletinName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'bulletinName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('bulletinName', value, propertyContext);
  value = $getClasseName_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'classeName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('classeName', value, propertyContext);
  value = $getProgrammeName_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'programmeName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('programmeName', value, propertyContext);
  value = $getRemarqueDirection(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'remarqueDirection'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('remarqueDirection', value, propertyContext);
  value = $getStudentName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'studentName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('studentName', value, propertyContext);
  value = $getYear(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'year'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('year', value, propertyContext);
}
;
function $getBulletinName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinProxy).getBulletinName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getClasseName_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinProxy).getClasseName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getId_5(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getIsActive_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinProxy).getIsActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getProgrammeName_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinProxy).getProgrammeName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getRemarqueDirection(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinProxy).getRemarqueDirection();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getStudentName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinProxy).getStudentName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getYear(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinProxy).getYear();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function BulletinProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1369, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinProxy]), BulletinProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_34(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$BulletinProxy).equals$(o);
}
;
_.getBulletinName = function getBulletinName(){
  return $getBulletinName(this);
}
;
_.getClasseName = function getClasseName_1(){
  return $getClasseName_0(this);
}
;
_.getId_0 = function getId_7(){
  return $getId_5(this);
}
;
_.getIsActive = function getIsActive_1(){
  return $getIsActive_0(this);
}
;
_.getProgrammeName = function getProgrammeName_1(){
  return $getProgrammeName_0(this);
}
;
_.getRemarqueDirection = function getRemarqueDirection(){
  return $getRemarqueDirection(this);
}
;
_.getStudentName = function getStudentName(){
  return $getStudentName(this);
}
;
_.getYear = function getYear(){
  return $getYear(this);
}
;
_.hashCode$ = function hashCode_34(){
  return dynamicCast($getWrapped(this.this$0), Q$BulletinProxy).hashCode$();
}
;
_.toString$ = function toString_27(){
  return dynamicCast($getWrapped(this.this$0), Q$BulletinProxy).toString$();
}
;
_.this$0 = null;
function BulletinProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1370, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinProxy]), BulletinProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_35(other){
  return equals_14(this.this$0, other);
}
;
_.getBulletinName = function getBulletinName_0(){
  return dynamicCast($getOrReify(this.this$0, 'bulletinName'), Q$String);
}
;
_.getClasseName = function getClasseName_2(){
  return dynamicCast($getOrReify(this.this$0, 'classeName'), Q$String);
}
;
_.getId_0 = function getId_8(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getIsActive = function getIsActive_2(){
  return dynamicCast($getOrReify(this.this$0, 'isActive'), Q$Boolean);
}
;
_.getProgrammeName = function getProgrammeName_2(){
  return dynamicCast($getOrReify(this.this$0, 'programmeName'), Q$String);
}
;
_.getRemarqueDirection = function getRemarqueDirection_0(){
  return dynamicCast($getOrReify(this.this$0, 'remarqueDirection'), Q$String);
}
;
_.getStudentName = function getStudentName_0(){
  return dynamicCast($getOrReify(this.this$0, 'studentName'), Q$String);
}
;
_.getYear = function getYear_0(){
  return dynamicCast($getOrReify(this.this$0, 'year'), Q$String);
}
;
_.hashCode$ = function hashCode_35(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.this$0 = null;
function $$init_12(this$static){
  this$static.shim = new BulletinSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function BulletinSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_12(this);
}

function BulletinSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_12(this);
}

defineSeed(1371, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), BulletinSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, BulletinSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_12(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_12(){
  return new BulletinSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_20(){
  return Lcom_lemania_sis_shared_BulletinSubjectProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_11(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getIsActive_1(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'isActive'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('isActive', value, propertyContext);
  value = $getSubjectCoef(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'subjectCoef'), Ljava_lang_Double_2_classLit);
  visitor.visitValueProperty('subjectCoef', value, propertyContext);
  value = $getTotalBrancheCoef(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'totalBrancheCoef'), Ljava_lang_Double_2_classLit);
  visitor.visitValueProperty('totalBrancheCoef', value, propertyContext);
  value = $getId_6(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getAn_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'an'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('an', value, propertyContext);
  value = $getExamT1(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'examT1'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('examT1', value, propertyContext);
  value = $getExamT2(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'examT2'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('examT2', value, propertyContext);
  value = $getExamT3(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'examT3'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('examT3', value, propertyContext);
  value = $getProfName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'profName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('profName', value, propertyContext);
  value = $getRemarqueT1(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'remarqueT1'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('remarqueT1', value, propertyContext);
  value = $getRemarqueT2(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'remarqueT2'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('remarqueT2', value, propertyContext);
  value = $getRemarqueT3(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'remarqueT3'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('remarqueT3', value, propertyContext);
  value = $getStudentName_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'studentName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('studentName', value, propertyContext);
  value = $getSubjectName_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'subjectName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('subjectName', value, propertyContext);
  value = $getT1_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't1'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t1', value, propertyContext);
  value = $getT2_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't2'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t2', value, propertyContext);
  value = $getT3_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 't3'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('t3', value, propertyContext);
}
;
function $getAn_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinSubjectProxy).getAn();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getExamT1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinSubjectProxy).getExamT1();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getExamT2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinSubjectProxy).getExamT2();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getExamT3(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinSubjectProxy).getExamT3();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getId_6(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinSubjectProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getIsActive_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinSubjectProxy).getIsActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getProfName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinSubjectProxy).getProfName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getRemarqueT1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinSubjectProxy).getRemarqueT1();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getRemarqueT2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinSubjectProxy).getRemarqueT2();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getRemarqueT3(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinSubjectProxy).getRemarqueT3();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getStudentName_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinSubjectProxy).getStudentName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getSubjectCoef(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinSubjectProxy).getSubjectCoef();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Double);
  return toReturn;
}

function $getSubjectName_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinSubjectProxy).getSubjectName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT1_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinSubjectProxy).getT1();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT2_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinSubjectProxy).getT2();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getT3_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinSubjectProxy).getT3();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getTotalBrancheCoef(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$BulletinSubjectProxy).getTotalBrancheCoef();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Double);
  return toReturn;
}

function BulletinSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1372, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinSubjectProxy]), BulletinSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_36(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$BulletinSubjectProxy).equals$(o);
}
;
_.getAn = function getAn_1(){
  return $getAn_0(this);
}
;
_.getExamT1 = function getExamT1(){
  return $getExamT1(this);
}
;
_.getExamT2 = function getExamT2(){
  return $getExamT2(this);
}
;
_.getExamT3 = function getExamT3(){
  return $getExamT3(this);
}
;
_.getId_0 = function getId_9(){
  return $getId_6(this);
}
;
_.getIsActive = function getIsActive_3(){
  return $getIsActive_1(this);
}
;
_.getProfName = function getProfName(){
  return $getProfName(this);
}
;
_.getRemarqueT1 = function getRemarqueT1(){
  return $getRemarqueT1(this);
}
;
_.getRemarqueT2 = function getRemarqueT2(){
  return $getRemarqueT2(this);
}
;
_.getRemarqueT3 = function getRemarqueT3(){
  return $getRemarqueT3(this);
}
;
_.getStudentName = function getStudentName_1(){
  return $getStudentName_0(this);
}
;
_.getSubjectCoef = function getSubjectCoef(){
  return $getSubjectCoef(this);
}
;
_.getSubjectName = function getSubjectName_1(){
  return $getSubjectName_0(this);
}
;
_.getT1 = function getT1_6(){
  return $getT1_0(this);
}
;
_.getT2 = function getT2_6(){
  return $getT2_0(this);
}
;
_.getT3 = function getT3_6(){
  return $getT3_0(this);
}
;
_.getTotalBrancheCoef = function getTotalBrancheCoef(){
  return $getTotalBrancheCoef(this);
}
;
_.hashCode$ = function hashCode_36(){
  return dynamicCast($getWrapped(this.this$0), Q$BulletinSubjectProxy).hashCode$();
}
;
_.toString$ = function toString_28(){
  return dynamicCast($getWrapped(this.this$0), Q$BulletinSubjectProxy).toString$();
}
;
_.this$0 = null;
function BulletinSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1373, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$BulletinSubjectProxy]), BulletinSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_37(other){
  return equals_14(this.this$0, other);
}
;
_.getAn = function getAn_2(){
  return dynamicCast($getOrReify(this.this$0, 'an'), Q$String);
}
;
_.getExamT1 = function getExamT1_0(){
  return dynamicCast($getOrReify(this.this$0, 'examT1'), Q$String);
}
;
_.getExamT2 = function getExamT2_0(){
  return dynamicCast($getOrReify(this.this$0, 'examT2'), Q$String);
}
;
_.getExamT3 = function getExamT3_0(){
  return dynamicCast($getOrReify(this.this$0, 'examT3'), Q$String);
}
;
_.getId_0 = function getId_10(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getIsActive = function getIsActive_4(){
  return dynamicCast($getOrReify(this.this$0, 'isActive'), Q$Boolean);
}
;
_.getProfName = function getProfName_0(){
  return dynamicCast($getOrReify(this.this$0, 'profName'), Q$String);
}
;
_.getRemarqueT1 = function getRemarqueT1_0(){
  return dynamicCast($getOrReify(this.this$0, 'remarqueT1'), Q$String);
}
;
_.getRemarqueT2 = function getRemarqueT2_0(){
  return dynamicCast($getOrReify(this.this$0, 'remarqueT2'), Q$String);
}
;
_.getRemarqueT3 = function getRemarqueT3_0(){
  return dynamicCast($getOrReify(this.this$0, 'remarqueT3'), Q$String);
}
;
_.getStudentName = function getStudentName_2(){
  return dynamicCast($getOrReify(this.this$0, 'studentName'), Q$String);
}
;
_.getSubjectCoef = function getSubjectCoef_0(){
  return dynamicCast($getOrReify(this.this$0, 'subjectCoef'), Q$Double);
}
;
_.getSubjectName = function getSubjectName_2(){
  return dynamicCast($getOrReify(this.this$0, 'subjectName'), Q$String);
}
;
_.getT1 = function getT1_7(){
  return dynamicCast($getOrReify(this.this$0, 't1'), Q$String);
}
;
_.getT2 = function getT2_7(){
  return dynamicCast($getOrReify(this.this$0, 't2'), Q$String);
}
;
_.getT3 = function getT3_7(){
  return dynamicCast($getOrReify(this.this$0, 't3'), Q$String);
}
;
_.getTotalBrancheCoef = function getTotalBrancheCoef_0(){
  return dynamicCast($getOrReify(this.this$0, 'totalBrancheCoef'), Q$Double);
}
;
_.hashCode$ = function hashCode_37(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.this$0 = null;
function $$init_13(this$static){
  this$static.shim = new ClasseProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ClasseProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_13(this);
}

function ClasseProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_13(this);
}

defineSeed(1374, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ClasseProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, ClasseProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_13(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_13(){
  return new ClasseProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_21(){
  return Lcom_lemania_sis_shared_ClasseProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_12(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getIsActive_2(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'isActive'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('isActive', value, propertyContext);
  value = $getId_7(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getClassName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'className'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('className', value, propertyContext);
  value = $getProgrammeName_1(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'programmeName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('programmeName', value, propertyContext);
}
;
function $getClassName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ClasseProxy).getClassName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getId_7(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ClasseProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getIsActive_2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ClasseProxy).getIsActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getProgrammeName_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ClasseProxy).getProgrammeName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function ClasseProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1375, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ClasseProxy]), ClasseProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_38(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ClasseProxy).equals$(o);
}
;
_.getClassName = function getClassName(){
  return $getClassName(this);
}
;
_.getId_0 = function getId_11(){
  return $getId_7(this);
}
;
_.getIsActive = function getIsActive_5(){
  return $getIsActive_2(this);
}
;
_.getProgrammeName = function getProgrammeName_3(){
  return $getProgrammeName_1(this);
}
;
_.hashCode$ = function hashCode_38(){
  return dynamicCast($getWrapped(this.this$0), Q$ClasseProxy).hashCode$();
}
;
_.setClassName = function setClassName(className){
  dynamicCast($getWrapped(this.this$0), Q$ClasseProxy).setClassName(className);
}
;
_.setIsActive = function setIsActive_1(isActive){
  dynamicCast($getWrapped(this.this$0), Q$ClasseProxy).setIsActive(isActive);
}
;
_.toString$ = function toString_29(){
  return dynamicCast($getWrapped(this.this$0), Q$ClasseProxy).toString$();
}
;
_.this$0 = null;
function ClasseProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1376, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ClasseProxy]), ClasseProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_39(other){
  return equals_14(this.this$0, other);
}
;
_.getClassName = function getClassName_0(){
  return dynamicCast($getOrReify(this.this$0, 'className'), Q$String);
}
;
_.getId_0 = function getId_12(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getIsActive = function getIsActive_6(){
  return dynamicCast($getOrReify(this.this$0, 'isActive'), Q$Boolean);
}
;
_.getProgrammeName = function getProgrammeName_4(){
  return dynamicCast($getOrReify(this.this$0, 'programmeName'), Q$String);
}
;
_.hashCode$ = function hashCode_39(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setClassName = function setClassName_0(className){
  $setProperty(this.this$0, 'className', className);
}
;
_.setIsActive = function setIsActive_2(isActive){
  $setProperty(this.this$0, 'isActive', isActive);
}
;
_.this$0 = null;
function $$init_14(this$static){
  this$static.shim = new CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_14(this);
}

function CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_14(this);
}

defineSeed(1377, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_14(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_14(){
  return new CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_22(){
  return Lcom_lemania_sis_shared_CoursProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_13(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getCoursActif(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'coursActif'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('coursActif', value, propertyContext);
  value = $getId_8(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getCoursNom(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'coursNom'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('coursNom', value, propertyContext);
  value = $getSchoolName_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'schoolName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('schoolName', value, propertyContext);
}
;
function $getCoursActif(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$CoursProxy).getCoursActif();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getCoursNom(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$CoursProxy).getCoursNom();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getId_8(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$CoursProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getSchoolName_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$CoursProxy).getSchoolName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1378, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$CoursProxy]), CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_40(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$CoursProxy).equals$(o);
}
;
_.getCoursActif = function getCoursActif(){
  return $getCoursActif(this);
}
;
_.getCoursNom = function getCoursNom(){
  return $getCoursNom(this);
}
;
_.getId_0 = function getId_13(){
  return $getId_8(this);
}
;
_.getSchoolName = function getSchoolName_1(){
  return $getSchoolName_0(this);
}
;
_.hashCode$ = function hashCode_40(){
  return dynamicCast($getWrapped(this.this$0), Q$CoursProxy).hashCode$();
}
;
_.setCoursActif = function setCoursActif(coursActif){
  dynamicCast($getWrapped(this.this$0), Q$CoursProxy).setCoursActif(coursActif);
}
;
_.setCoursNom = function setCoursNom(coursNom){
  dynamicCast($getWrapped(this.this$0), Q$CoursProxy).setCoursNom(coursNom);
}
;
_.toString$ = function toString_30(){
  return dynamicCast($getWrapped(this.this$0), Q$CoursProxy).toString$();
}
;
_.this$0 = null;
function CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1379, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$CoursProxy]), CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_41(other){
  return equals_14(this.this$0, other);
}
;
_.getCoursActif = function getCoursActif_0(){
  return dynamicCast($getOrReify(this.this$0, 'coursActif'), Q$Boolean);
}
;
_.getCoursNom = function getCoursNom_0(){
  return dynamicCast($getOrReify(this.this$0, 'coursNom'), Q$String);
}
;
_.getId_0 = function getId_14(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getSchoolName = function getSchoolName_2(){
  return dynamicCast($getOrReify(this.this$0, 'schoolName'), Q$String);
}
;
_.hashCode$ = function hashCode_41(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setCoursActif = function setCoursActif_0(coursActif){
  $setProperty(this.this$0, 'coursActif', coursActif);
}
;
_.setCoursNom = function setCoursNom_0(coursNom){
  $setProperty(this.this$0, 'coursNom', coursNom);
}
;
_.this$0 = null;
function $$init_15(this$static){
  this$static.shim = new EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_15(this);
}

function EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_15(this);
}

defineSeed(1380, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_15(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_15(){
  return new EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_23(){
  return Lcom_lemania_sis_shared_EcoleProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_14(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getSchoolStatus(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'schoolStatus'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('schoolStatus', value, propertyContext);
  value = $getId_9(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getSchoolAddress(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'schoolAddress'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('schoolAddress', value, propertyContext);
  value = $getSchoolName_1(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'schoolName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('schoolName', value, propertyContext);
}
;
function $getId_9(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$EcoleProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getSchoolAddress(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$EcoleProxy).getSchoolAddress();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getSchoolName_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$EcoleProxy).getSchoolName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getSchoolStatus(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$EcoleProxy).getSchoolStatus();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1381, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$EcoleProxy]), EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_42(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$EcoleProxy).equals$(o);
}
;
_.getId_0 = function getId_15(){
  return $getId_9(this);
}
;
_.getSchoolAddress = function getSchoolAddress(){
  return $getSchoolAddress(this);
}
;
_.getSchoolName = function getSchoolName_3(){
  return $getSchoolName_1(this);
}
;
_.getSchoolStatus = function getSchoolStatus(){
  return $getSchoolStatus(this);
}
;
_.hashCode$ = function hashCode_42(){
  return dynamicCast($getWrapped(this.this$0), Q$EcoleProxy).hashCode$();
}
;
_.setSchoolStatus = function setSchoolStatus(active){
  dynamicCast($getWrapped(this.this$0), Q$EcoleProxy).setSchoolStatus(active);
}
;
_.toString$ = function toString_31(){
  return dynamicCast($getWrapped(this.this$0), Q$EcoleProxy).toString$();
}
;
_.this$0 = null;
function EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1382, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$EcoleProxy]), EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_43(other){
  return equals_14(this.this$0, other);
}
;
_.getId_0 = function getId_16(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getSchoolAddress = function getSchoolAddress_0(){
  return dynamicCast($getOrReify(this.this$0, 'schoolAddress'), Q$String);
}
;
_.getSchoolName = function getSchoolName_4(){
  return dynamicCast($getOrReify(this.this$0, 'schoolName'), Q$String);
}
;
_.getSchoolStatus = function getSchoolStatus_0(){
  return dynamicCast($getOrReify(this.this$0, 'schoolStatus'), Q$Boolean);
}
;
_.hashCode$ = function hashCode_43(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setSchoolStatus = function setSchoolStatus_0(active){
  $setProperty(this.this$0, 'schoolStatus', active);
}
;
_.this$0 = null;
function $$init_16(this$static){
  this$static.shim = new ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_16(this);
}

function ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_16(this);
}

defineSeed(1383, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_16(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_16(){
  return new ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_24(){
  return Lcom_lemania_sis_shared_ProfessorProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_15(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = ($clinit_Double() , new Double_0($getFee_01(as)));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_01'), D_classLit);
  visitor.visitValueProperty('fee_01', value, propertyContext);
  value = new Double_0($getFee_02(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_02'), D_classLit);
  visitor.visitValueProperty('fee_02', value, propertyContext);
  value = new Double_0($getFee_03(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_03'), D_classLit);
  visitor.visitValueProperty('fee_03', value, propertyContext);
  value = new Double_0($getFee_04(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_04'), D_classLit);
  visitor.visitValueProperty('fee_04', value, propertyContext);
  value = new Double_0($getFee_05(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_05'), D_classLit);
  visitor.visitValueProperty('fee_05', value, propertyContext);
  value = new Double_0($getFee_06(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_06'), D_classLit);
  visitor.visitValueProperty('fee_06', value, propertyContext);
  value = new Double_0($getFee_07(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_07'), D_classLit);
  visitor.visitValueProperty('fee_07', value, propertyContext);
  value = new Double_0($getFee_08(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_08'), D_classLit);
  visitor.visitValueProperty('fee_08', value, propertyContext);
  value = new Double_0($getFee_09(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_09'), D_classLit);
  visitor.visitValueProperty('fee_09', value, propertyContext);
  value = new Double_0($getFee_10(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_10'), D_classLit);
  visitor.visitValueProperty('fee_10', value, propertyContext);
  value = new Double_0($getFee_11(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_11'), D_classLit);
  visitor.visitValueProperty('fee_11', value, propertyContext);
  value = new Double_0($getFee_12(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_12'), D_classLit);
  visitor.visitValueProperty('fee_12', value, propertyContext);
  value = new Double_0($getTotal_01(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_01'), D_classLit);
  visitor.visitValueProperty('total_01', value, propertyContext);
  value = new Double_0($getTotal_02(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_02'), D_classLit);
  visitor.visitValueProperty('total_02', value, propertyContext);
  value = new Double_0($getTotal_03(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_03'), D_classLit);
  visitor.visitValueProperty('total_03', value, propertyContext);
  value = new Double_0($getTotal_04(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_04'), D_classLit);
  visitor.visitValueProperty('total_04', value, propertyContext);
  value = new Double_0($getTotal_05(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_05'), D_classLit);
  visitor.visitValueProperty('total_05', value, propertyContext);
  value = new Double_0($getTotal_06(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_06'), D_classLit);
  visitor.visitValueProperty('total_06', value, propertyContext);
  value = new Double_0($getTotal_07(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_07'), D_classLit);
  visitor.visitValueProperty('total_07', value, propertyContext);
  value = new Double_0($getTotal_08(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_08'), D_classLit);
  visitor.visitValueProperty('total_08', value, propertyContext);
  value = new Double_0($getTotal_09(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_09'), D_classLit);
  visitor.visitValueProperty('total_09', value, propertyContext);
  value = new Double_0($getTotal_10(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_10'), D_classLit);
  visitor.visitValueProperty('total_10', value, propertyContext);
  value = new Double_0($getTotal_11(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_11'), D_classLit);
  visitor.visitValueProperty('total_11', value, propertyContext);
  value = new Double_0($getTotal_12(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_12'), D_classLit);
  visitor.visitValueProperty('total_12', value, propertyContext);
  value = $getProfActive(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'profActive'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('profActive', value, propertyContext);
  value = $getId_10(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getLogModifyDate(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'logModifyDate'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('logModifyDate', value, propertyContext);
  value = $getProfEmail(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'profEmail'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('profEmail', value, propertyContext);
  value = $getProfName_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'profName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('profName', value, propertyContext);
}
;
function $getFee_01(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_01();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getFee_02(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_02();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getFee_03(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_03();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getFee_04(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_04();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getFee_05(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_05();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getFee_06(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_06();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getFee_07(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_07();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getFee_08(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_08();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getFee_09(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_09();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getFee_10(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_10();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getFee_11(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_11();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getFee_12(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_12();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getId_10(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getLogModifyDate(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getLogModifyDate();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getProfActive(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getProfActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getProfEmail(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getProfEmail();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getProfName_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getProfName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getTotal_01(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_01();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getTotal_02(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_02();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getTotal_03(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_03();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getTotal_04(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_04();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getTotal_05(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_05();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getTotal_06(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_06();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getTotal_07(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_07();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getTotal_08(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_08();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getTotal_09(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_09();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getTotal_10(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_10();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getTotal_11(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_11();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function $getTotal_12(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_12();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Double() , new Double_0(toReturn))), Q$Double).value_0;
  return toReturn;
}

function ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1384, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfessorProxy]), ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_44(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ProfessorProxy).equals$(o);
}
;
_.getFee_01 = function getFee_01(){
  return $getFee_01(this);
}
;
_.getFee_02 = function getFee_02(){
  return $getFee_02(this);
}
;
_.getFee_03 = function getFee_03(){
  return $getFee_03(this);
}
;
_.getFee_04 = function getFee_04(){
  return $getFee_04(this);
}
;
_.getFee_05 = function getFee_05(){
  return $getFee_05(this);
}
;
_.getFee_06 = function getFee_06(){
  return $getFee_06(this);
}
;
_.getFee_07 = function getFee_07(){
  return $getFee_07(this);
}
;
_.getFee_08 = function getFee_08(){
  return $getFee_08(this);
}
;
_.getFee_09 = function getFee_09(){
  return $getFee_09(this);
}
;
_.getFee_10 = function getFee_10(){
  return $getFee_10(this);
}
;
_.getFee_11 = function getFee_11(){
  return $getFee_11(this);
}
;
_.getFee_12 = function getFee_12(){
  return $getFee_12(this);
}
;
_.getId_0 = function getId_17(){
  return $getId_10(this);
}
;
_.getLogModifyDate = function getLogModifyDate(){
  return $getLogModifyDate(this);
}
;
_.getProfActive = function getProfActive(){
  return $getProfActive(this);
}
;
_.getProfEmail = function getProfEmail(){
  return $getProfEmail(this);
}
;
_.getProfName = function getProfName_1(){
  return $getProfName_0(this);
}
;
_.getTotal_01 = function getTotal_01(){
  return $getTotal_01(this);
}
;
_.getTotal_02 = function getTotal_02(){
  return $getTotal_02(this);
}
;
_.getTotal_03 = function getTotal_03(){
  return $getTotal_03(this);
}
;
_.getTotal_04 = function getTotal_04(){
  return $getTotal_04(this);
}
;
_.getTotal_05 = function getTotal_05(){
  return $getTotal_05(this);
}
;
_.getTotal_06 = function getTotal_06(){
  return $getTotal_06(this);
}
;
_.getTotal_07 = function getTotal_07(){
  return $getTotal_07(this);
}
;
_.getTotal_08 = function getTotal_08(){
  return $getTotal_08(this);
}
;
_.getTotal_09 = function getTotal_09(){
  return $getTotal_09(this);
}
;
_.getTotal_10 = function getTotal_10(){
  return $getTotal_10(this);
}
;
_.getTotal_11 = function getTotal_11(){
  return $getTotal_11(this);
}
;
_.getTotal_12 = function getTotal_12(){
  return $getTotal_12(this);
}
;
_.hashCode$ = function hashCode_44(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfessorProxy).hashCode$();
}
;
_.setProfActive = function setProfActive(profActive){
  dynamicCast($getWrapped(this.this$0), Q$ProfessorProxy).setProfActive(profActive);
}
;
_.toString$ = function toString_32(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfessorProxy).toString$();
}
;
_.this$0 = null;
function ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1385, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfessorProxy]), ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_45(other){
  return equals_14(this.this$0, other);
}
;
_.getFee_01 = function getFee_01_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_01'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_02 = function getFee_02_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_02'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_03 = function getFee_03_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_03'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_04 = function getFee_04_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_04'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_05 = function getFee_05_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_05'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_06 = function getFee_06_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_06'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_07 = function getFee_07_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_07'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_08 = function getFee_08_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_08'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_09 = function getFee_09_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_09'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_10 = function getFee_10_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_10'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_11 = function getFee_11_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_11'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_12 = function getFee_12_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_12'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getId_0 = function getId_18(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getLogModifyDate = function getLogModifyDate_0(){
  return dynamicCast($getOrReify(this.this$0, 'logModifyDate'), Q$String);
}
;
_.getProfActive = function getProfActive_0(){
  return dynamicCast($getOrReify(this.this$0, 'profActive'), Q$Boolean);
}
;
_.getProfEmail = function getProfEmail_0(){
  return dynamicCast($getOrReify(this.this$0, 'profEmail'), Q$String);
}
;
_.getProfName = function getProfName_2(){
  return dynamicCast($getOrReify(this.this$0, 'profName'), Q$String);
}
;
_.getTotal_01 = function getTotal_01_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_01'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_02 = function getTotal_02_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_02'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_03 = function getTotal_03_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_03'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_04 = function getTotal_04_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_04'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_05 = function getTotal_05_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_05'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_06 = function getTotal_06_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_06'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_07 = function getTotal_07_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_07'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_08 = function getTotal_08_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_08'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_09 = function getTotal_09_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_09'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_10 = function getTotal_10_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_10'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_11 = function getTotal_11_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_11'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_12 = function getTotal_12_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_12'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.hashCode$ = function hashCode_45(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setProfActive = function setProfActive_0(profActive){
  $setProperty(this.this$0, 'profActive', profActive);
}
;
_.this$0 = null;
function $$init_18(this$static){
  this$static.shim = new ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_18(this);
}

function ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_18(this);
}

defineSeed(1389, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_18(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_18(){
  return new ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_26(){
  return Lcom_lemania_sis_shared_ProfileProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_17(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getIsActive_3(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'isActive'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('isActive', value, propertyContext);
  value = $getId_12(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getProfileName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'profileName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('profileName', value, propertyContext);
}
;
function $getId_12(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getIsActive_3(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileProxy).getIsActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getProfileName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileProxy).getProfileName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1390, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileProxy]), ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_48(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ProfileProxy).equals$(o);
}
;
_.getId_0 = function getId_21(){
  return $getId_12(this);
}
;
_.getIsActive = function getIsActive_7(){
  return $getIsActive_3(this);
}
;
_.getProfileName = function getProfileName(){
  return $getProfileName(this);
}
;
_.hashCode$ = function hashCode_48(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileProxy).hashCode$();
}
;
_.toString$ = function toString_34(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileProxy).toString$();
}
;
_.this$0 = null;
function ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1391, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileProxy]), ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_49(other){
  return equals_14(this.this$0, other);
}
;
_.getId_0 = function getId_22(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getIsActive = function getIsActive_8(){
  return dynamicCast($getOrReify(this.this$0, 'isActive'), Q$Boolean);
}
;
_.getProfileName = function getProfileName_0(){
  return dynamicCast($getOrReify(this.this$0, 'profileName'), Q$String);
}
;
_.hashCode$ = function hashCode_49(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.this$0 = null;
function $$init_20(this$static){
  this$static.shim = new SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_20(this);
}

function SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_20(this);
}

defineSeed(1395, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_20(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_20(){
  return new SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_28(){
  return Lcom_lemania_sis_shared_SettingOptionProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_19(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getOptionName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'optionName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('optionName', value, propertyContext);
  value = $getOptionValue(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'optionValue'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('optionValue', value, propertyContext);
}
;
function $getOptionName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$SettingOptionProxy).getOptionName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getOptionValue(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$SettingOptionProxy).getOptionValue();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1396, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$SettingOptionProxy]), SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_52(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$SettingOptionProxy).equals$(o);
}
;
_.getOptionName = function getOptionName(){
  return $getOptionName(this);
}
;
_.getOptionValue = function getOptionValue(){
  return $getOptionValue(this);
}
;
_.hashCode$ = function hashCode_52(){
  return dynamicCast($getWrapped(this.this$0), Q$SettingOptionProxy).hashCode$();
}
;
_.toString$ = function toString_36(){
  return dynamicCast($getWrapped(this.this$0), Q$SettingOptionProxy).toString$();
}
;
_.this$0 = null;
function SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1397, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$SettingOptionProxy]), SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_53(other){
  return equals_14(this.this$0, other);
}
;
_.getOptionName = function getOptionName_0(){
  return dynamicCast($getOrReify(this.this$0, 'optionName'), Q$String);
}
;
_.getOptionValue = function getOptionValue_0(){
  return dynamicCast($getOrReify(this.this$0, 'optionValue'), Q$String);
}
;
_.hashCode$ = function hashCode_53(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.this$0 = null;
function $$init_21(this$static){
  this$static.shim = new StudentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function StudentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_21(this);
}

function StudentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_21(this);
}

defineSeed(1398, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), StudentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, StudentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_21(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_21(){
  return new StudentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_29(){
  return Lcom_lemania_sis_shared_StudentProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_20(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getIsActive_5(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'isActive'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('isActive', value, propertyContext);
  value = $getId_14(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getEmail(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'email'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('email', value, propertyContext);
  value = $getFirstName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'firstName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('firstName', value, propertyContext);
  value = $getLastName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'lastName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('lastName', value, propertyContext);
}
;
function $getEmail(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$StudentProxy).getEmail();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getFirstName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$StudentProxy).getFirstName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getId_14(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$StudentProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getIsActive_5(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$StudentProxy).getIsActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getLastName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$StudentProxy).getLastName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function StudentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1399, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$StudentProxy]), StudentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_54(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$StudentProxy).equals$(o);
}
;
_.getEmail = function getEmail(){
  return $getEmail(this);
}
;
_.getFirstName = function getFirstName(){
  return $getFirstName(this);
}
;
_.getId_0 = function getId_25(){
  return $getId_14(this);
}
;
_.getIsActive = function getIsActive_11(){
  return $getIsActive_5(this);
}
;
_.getLastName = function getLastName(){
  return $getLastName(this);
}
;
_.hashCode$ = function hashCode_54(){
  return dynamicCast($getWrapped(this.this$0), Q$StudentProxy).hashCode$();
}
;
_.toString$ = function toString_37(){
  return dynamicCast($getWrapped(this.this$0), Q$StudentProxy).toString$();
}
;
_.this$0 = null;
function StudentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1400, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$StudentProxy]), StudentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_55(other){
  return equals_14(this.this$0, other);
}
;
_.getEmail = function getEmail_0(){
  return dynamicCast($getOrReify(this.this$0, 'email'), Q$String);
}
;
_.getFirstName = function getFirstName_0(){
  return dynamicCast($getOrReify(this.this$0, 'firstName'), Q$String);
}
;
_.getId_0 = function getId_26(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getIsActive = function getIsActive_12(){
  return dynamicCast($getOrReify(this.this$0, 'isActive'), Q$Boolean);
}
;
_.getLastName = function getLastName_0(){
  return dynamicCast($getOrReify(this.this$0, 'lastName'), Q$String);
}
;
_.hashCode$ = function hashCode_55(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.this$0 = null;
function $$init_22(this$static){
  this$static.shim = new SubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function SubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_22(this);
}

function SubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_22(this);
}

defineSeed(1401, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), SubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, SubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_22(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_22(){
  return new SubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_30(){
  return Lcom_lemania_sis_shared_SubjectProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_21(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getIsActive_6(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'isActive'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('isActive', value, propertyContext);
  value = $getDefaultCoef_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'defaultCoef'), Ljava_lang_Double_2_classLit);
  visitor.visitValueProperty('defaultCoef', value, propertyContext);
  value = $getId_15(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getSubjectName_2(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'subjectName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('subjectName', value, propertyContext);
}
;
function $getDefaultCoef_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$SubjectProxy).getDefaultCoef();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Double);
  return toReturn;
}

function $getId_15(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$SubjectProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getIsActive_6(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$SubjectProxy).getIsActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getSubjectName_2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$SubjectProxy).getSubjectName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function SubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1402, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$SubjectProxy]), SubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_56(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$SubjectProxy).equals$(o);
}
;
_.getDefaultCoef = function getDefaultCoef_1(){
  return $getDefaultCoef_0(this);
}
;
_.getId_0 = function getId_27(){
  return $getId_15(this);
}
;
_.getIsActive = function getIsActive_13(){
  return $getIsActive_6(this);
}
;
_.getSubjectName = function getSubjectName_5(){
  return $getSubjectName_2(this);
}
;
_.hashCode$ = function hashCode_56(){
  return dynamicCast($getWrapped(this.this$0), Q$SubjectProxy).hashCode$();
}
;
_.setDefaultCoef = function setDefaultCoef_1(defaultCoef){
  dynamicCast($getWrapped(this.this$0), Q$SubjectProxy).setDefaultCoef(defaultCoef);
}
;
_.setIsActive = function setIsActive_7(isActive){
  dynamicCast($getWrapped(this.this$0), Q$SubjectProxy).setIsActive(isActive);
}
;
_.setSubjectName = function setSubjectName(subjectName){
  dynamicCast($getWrapped(this.this$0), Q$SubjectProxy).setSubjectName(subjectName);
}
;
_.toString$ = function toString_38(){
  return dynamicCast($getWrapped(this.this$0), Q$SubjectProxy).toString$();
}
;
_.this$0 = null;
function SubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1403, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$SubjectProxy]), SubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_57(other){
  return equals_14(this.this$0, other);
}
;
_.getDefaultCoef = function getDefaultCoef_2(){
  return dynamicCast($getOrReify(this.this$0, 'defaultCoef'), Q$Double);
}
;
_.getId_0 = function getId_28(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getIsActive = function getIsActive_14(){
  return dynamicCast($getOrReify(this.this$0, 'isActive'), Q$Boolean);
}
;
_.getSubjectName = function getSubjectName_6(){
  return dynamicCast($getOrReify(this.this$0, 'subjectName'), Q$String);
}
;
_.hashCode$ = function hashCode_57(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setDefaultCoef = function setDefaultCoef_2(defaultCoef){
  $setProperty(this.this$0, 'defaultCoef', defaultCoef);
}
;
_.setIsActive = function setIsActive_8(isActive){
  $setProperty(this.this$0, 'isActive', isActive);
}
;
_.setSubjectName = function setSubjectName_0(subjectName){
  $setProperty(this.this$0, 'subjectName', subjectName);
}
;
_.this$0 = null;
function $$init_23(this$static){
  this$static.shim = new UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_23(this);
}

function UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_23(this);
}

defineSeed(1404, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_23(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_23(){
  return new UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_31(){
  return Lcom_lemania_sis_shared_UserProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_22(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = valueOf_1($getCurrentDay(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'currentDay'), I_classLit);
  visitor.visitValueProperty('currentDay', value, propertyContext);
  value = valueOf_1($getCurrentMonth(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'currentMonth'), I_classLit);
  visitor.visitValueProperty('currentMonth', value, propertyContext);
  value = valueOf_1($getCurrentYear(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'currentYear'), I_classLit);
  visitor.visitValueProperty('currentYear', value, propertyContext);
  value = $getActive_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'active'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('active', value, propertyContext);
  value = $getAdmin(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'admin'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('admin', value, propertyContext);
  value = $getIsProf(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'isProf'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('isProf', value, propertyContext);
  value = $getIsReadOnly(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'isReadOnly'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('isReadOnly', value, propertyContext);
  value = $getIsStudent(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'isStudent'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('isStudent', value, propertyContext);
  value = $getId_16(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getCurrentLoggedInTime(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'currentLoggedInTime'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('currentLoggedInTime', value, propertyContext);
  value = $getEmail_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'email'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('email', value, propertyContext);
  value = $getFullName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fullName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('fullName', value, propertyContext);
  value = $getLastLoggedInTime(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'lastLoggedInTime'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('lastLoggedInTime', value, propertyContext);
  value = $getPassword(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'password'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('password', value, propertyContext);
  value = $getUserName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'userName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('userName', value, propertyContext);
}
;
function $getActive_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getAdmin(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getAdmin();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getCurrentDay(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getCurrentDay();
  toReturn = dynamicCast(__intercept(this$static.this$0, valueOf_1(toReturn)), Q$Integer).value_0;
  return toReturn;
}

function $getCurrentLoggedInTime(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getCurrentLoggedInTime();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getCurrentMonth(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getCurrentMonth();
  toReturn = dynamicCast(__intercept(this$static.this$0, valueOf_1(toReturn)), Q$Integer).value_0;
  return toReturn;
}

function $getCurrentYear(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getCurrentYear();
  toReturn = dynamicCast(__intercept(this$static.this$0, valueOf_1(toReturn)), Q$Integer).value_0;
  return toReturn;
}

function $getEmail_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getEmail();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getFullName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getFullName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getId_16(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getIsProf(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getIsProf();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getIsReadOnly(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getIsReadOnly();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getIsStudent(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getIsStudent();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getLastLoggedInTime(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getLastLoggedInTime();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getPassword(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getPassword();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getUserName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getUserName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1405, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$UserProxy]), UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_58(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$UserProxy).equals$(o);
}
;
_.getActive = function getActive_1(){
  return $getActive_0(this);
}
;
_.getAdmin = function getAdmin(){
  return $getAdmin(this);
}
;
_.getCurrentDay = function getCurrentDay(){
  return $getCurrentDay(this);
}
;
_.getCurrentLoggedInTime = function getCurrentLoggedInTime(){
  return $getCurrentLoggedInTime(this);
}
;
_.getCurrentMonth = function getCurrentMonth(){
  return $getCurrentMonth(this);
}
;
_.getCurrentYear = function getCurrentYear(){
  return $getCurrentYear(this);
}
;
_.getEmail = function getEmail_1(){
  return $getEmail_0(this);
}
;
_.getFullName = function getFullName(){
  return $getFullName(this);
}
;
_.getId_0 = function getId_29(){
  return $getId_16(this);
}
;
_.getIsProf = function getIsProf(){
  return $getIsProf(this);
}
;
_.getIsReadOnly = function getIsReadOnly(){
  return $getIsReadOnly(this);
}
;
_.getIsStudent = function getIsStudent(){
  return $getIsStudent(this);
}
;
_.getLastLoggedInTime = function getLastLoggedInTime(){
  return $getLastLoggedInTime(this);
}
;
_.getPassword = function getPassword(){
  return $getPassword(this);
}
;
_.getUserName = function getUserName(){
  return $getUserName(this);
}
;
_.hashCode$ = function hashCode_58(){
  return dynamicCast($getWrapped(this.this$0), Q$UserProxy).hashCode$();
}
;
_.setActive = function setActive_1(active){
  dynamicCast($getWrapped(this.this$0), Q$UserProxy).setActive(active);
}
;
_.setAdmin = function setAdmin(admin){
  dynamicCast($getWrapped(this.this$0), Q$UserProxy).setAdmin(admin);
}
;
_.setEmail = function setEmail_1(email){
  dynamicCast($getWrapped(this.this$0), Q$UserProxy).setEmail(email);
}
;
_.setFullName = function setFullName(fullName){
  dynamicCast($getWrapped(this.this$0), Q$UserProxy).setFullName(fullName);
}
;
_.setIsProf = function setIsProf(isProf){
  dynamicCast($getWrapped(this.this$0), Q$UserProxy).setIsProf(isProf);
}
;
_.setIsStudent = function setIsStudent(isStudent){
  dynamicCast($getWrapped(this.this$0), Q$UserProxy).setIsStudent(isStudent);
}
;
_.setPassword = function setPassword(password){
  dynamicCast($getWrapped(this.this$0), Q$UserProxy).setPassword(password);
}
;
_.setUserName = function setUserName(userName){
  dynamicCast($getWrapped(this.this$0), Q$UserProxy).setUserName(userName);
}
;
_.toString$ = function toString_39(){
  return dynamicCast($getWrapped(this.this$0), Q$UserProxy).toString$();
}
;
_.this$0 = null;
function UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1406, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$UserProxy]), UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_59(other){
  return equals_14(this.this$0, other);
}
;
_.getActive = function getActive_2(){
  return dynamicCast($getOrReify(this.this$0, 'active'), Q$Boolean);
}
;
_.getAdmin = function getAdmin_0(){
  return dynamicCast($getOrReify(this.this$0, 'admin'), Q$Boolean);
}
;
_.getCurrentDay = function getCurrentDay_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'currentDay'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getCurrentLoggedInTime = function getCurrentLoggedInTime_0(){
  return dynamicCast($getOrReify(this.this$0, 'currentLoggedInTime'), Q$String);
}
;
_.getCurrentMonth = function getCurrentMonth_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'currentMonth'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getCurrentYear = function getCurrentYear_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'currentYear'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getEmail = function getEmail_2(){
  return dynamicCast($getOrReify(this.this$0, 'email'), Q$String);
}
;
_.getFullName = function getFullName_0(){
  return dynamicCast($getOrReify(this.this$0, 'fullName'), Q$String);
}
;
_.getId_0 = function getId_30(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getIsProf = function getIsProf_0(){
  return dynamicCast($getOrReify(this.this$0, 'isProf'), Q$Boolean);
}
;
_.getIsReadOnly = function getIsReadOnly_0(){
  return dynamicCast($getOrReify(this.this$0, 'isReadOnly'), Q$Boolean);
}
;
_.getIsStudent = function getIsStudent_0(){
  return dynamicCast($getOrReify(this.this$0, 'isStudent'), Q$Boolean);
}
;
_.getLastLoggedInTime = function getLastLoggedInTime_0(){
  return dynamicCast($getOrReify(this.this$0, 'lastLoggedInTime'), Q$String);
}
;
_.getPassword = function getPassword_0(){
  return dynamicCast($getOrReify(this.this$0, 'password'), Q$String);
}
;
_.getUserName = function getUserName_0(){
  return dynamicCast($getOrReify(this.this$0, 'userName'), Q$String);
}
;
_.hashCode$ = function hashCode_59(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setActive = function setActive_2(active){
  $setProperty(this.this$0, 'active', active);
}
;
_.setAdmin = function setAdmin_0(admin){
  $setProperty(this.this$0, 'admin', admin);
}
;
_.setEmail = function setEmail_2(email){
  $setProperty(this.this$0, 'email', email);
}
;
_.setFullName = function setFullName_0(fullName){
  $setProperty(this.this$0, 'fullName', fullName);
}
;
_.setIsProf = function setIsProf_0(isProf){
  $setProperty(this.this$0, 'isProf', isProf);
}
;
_.setIsStudent = function setIsStudent_0(isStudent){
  $setProperty(this.this$0, 'isStudent', isStudent);
}
;
_.setPassword = function setPassword_0(password){
  $setProperty(this.this$0, 'password', password);
}
;
_.setUserName = function setUserName_0(userName){
  $setProperty(this.this$0, 'userName', userName);
}
;
_.this$0 = null;
function $clinit_AssignmentRequestFactoryImpl(){
  $clinit_AssignmentRequestFactoryImpl = nullMethod;
  tokensToTypes = new HashMap_0;
  typesToTokens = new HashMap_0;
  entityProxyTypes = new HashSet_0;
  valueProxyTypes = new HashSet_0;
  tokensToTypes.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_20(entityProxyTypes, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes.put('Y4M9ZJCEf0FkvayQ8GKQxdNeYE4=', Lcom_lemania_sis_shared_AssignmentProxy_2_classLit);
  typesToTokens.put(Lcom_lemania_sis_shared_AssignmentProxy_2_classLit, 'Y4M9ZJCEf0FkvayQ8GKQxdNeYE4=');
  $add_20(entityProxyTypes, Lcom_lemania_sis_shared_AssignmentProxy_2_classLit);
  tokensToTypes.put('GRB8BzGrI1tM_EULmiOBQtqIX0o=', Lcom_lemania_sis_shared_ProfessorProxy_2_classLit);
  typesToTokens.put(Lcom_lemania_sis_shared_ProfessorProxy_2_classLit, 'GRB8BzGrI1tM_EULmiOBQtqIX0o=');
  $add_20(entityProxyTypes, Lcom_lemania_sis_shared_ProfessorProxy_2_classLit);
}

function AssignmentRequestFactoryImpl_0(){
  $clinit_AssignmentRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1407, 632, {}, AssignmentRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken(){
  return 'com.lemania.sis.shared.service.AssignmentRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken(typeToken){
  return dynamicCast(tokensToTypes.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_3(type){
  return dynamicCast(typesToTokens.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_0(type){
  return $contains_1(entityProxyTypes, type);
}
;
_.isValueType = function isValueType_0(type){
  return $contains_1(valueProxyTypes, type);
}
;
var entityProxyTypes, tokensToTypes, typesToTokens, valueProxyTypes;
function $listAllProfessorBySubject(this$static, subjectId, classId){
  var x;
  x = new AssignmentRequestFactory_AssignmentRequestContextImpl$7X_0(this$static, subjectId, classId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function AssignmentRequestFactory_AssignmentRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1408, 642, makeCastMap([Q$AbstractRequestContext]), AssignmentRequestFactory_AssignmentRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory(){
  return !FACTORY_0 && (FACTORY_0 = new AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl_0) , FACTORY_0;
}
;
var FACTORY_0 = null;
function AssignmentRequestFactory_AssignmentRequestContextImpl$7X_0(this$0, val$subjectId, val$classId){
  this.val$subjectId = val$subjectId;
  this.val$classId = val$classId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1413, 641, makeCastMap([Q$AbstractRequest]), AssignmentRequestFactory_AssignmentRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_3(){
  return new RequestData_0('BMm_jYk_A4Udbgyj$htHc6BEofE=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$subjectId, this.val$classId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ProfessorProxy_2_classLit);
}
;
_.val$classId = null;
_.val$subjectId = null;
function $getConstructors_com_lemania_sis_shared_AssignmentProxy(){
  return [function(factory){
    return new AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_lemania_sis_shared_ProfessorProxy(){
  return [function(factory){
    return new ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1414, 570, makeCastMap([Q$EnumMap]), AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_0(map){
  $add_15(map, Lcom_lemania_sis_shared_AssignmentProxy_2_classLit, $getConstructors_com_lemania_sis_shared_AssignmentProxy());
  $add_15(map, Lcom_lemania_sis_shared_ProfessorProxy_2_classLit, $getConstructors_com_lemania_sis_shared_ProfessorProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_0(){
}
;
function $clinit_BrancheRequestFactoryImpl(){
  $clinit_BrancheRequestFactoryImpl = nullMethod;
  tokensToTypes_0 = new HashMap_0;
  typesToTokens_0 = new HashMap_0;
  entityProxyTypes_0 = new HashSet_0;
  valueProxyTypes_0 = new HashSet_0;
  tokensToTypes_0.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_0.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_20(entityProxyTypes_0, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_0.put('UbixFtEaeOPe3anYEVvFIm96h$s=', Lcom_lemania_sis_shared_BrancheProxy_2_classLit);
  typesToTokens_0.put(Lcom_lemania_sis_shared_BrancheProxy_2_classLit, 'UbixFtEaeOPe3anYEVvFIm96h$s=');
  $add_20(entityProxyTypes_0, Lcom_lemania_sis_shared_BrancheProxy_2_classLit);
}

function BrancheRequestFactoryImpl_0(){
  $clinit_BrancheRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1415, 632, {}, BrancheRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_0(){
  return 'com.lemania.sis.shared.service.BrancheRequestFactory';
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
function $listAll_0(this$static){
  var x;
  x = new BrancheRequestFactory_BrancheRequestContextImpl$2X_0(this$static);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function BrancheRequestFactory_BrancheRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1416, 642, makeCastMap([Q$AbstractRequestContext]), BrancheRequestFactory_BrancheRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_0(){
  return !FACTORY_1 && (FACTORY_1 = new BrancheRequestFactory_BrancheRequestContextImpl_FactoryImpl_0) , FACTORY_1;
}
;
var FACTORY_1 = null;
function BrancheRequestFactory_BrancheRequestContextImpl$2X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1417, 641, makeCastMap([Q$AbstractRequest]), BrancheRequestFactory_BrancheRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_4(){
  return new RequestData_0('_JUym1B4QtYE68teW63m02qjAog=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_BrancheProxy_2_classLit);
}
;
function $getConstructors_com_lemania_sis_shared_BrancheProxy(){
  return [function(factory){
    return new BrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new BrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function BrancheRequestFactory_BrancheRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1420, 570, makeCastMap([Q$EnumMap]), BrancheRequestFactory_BrancheRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_1(map){
  $add_15(map, Lcom_lemania_sis_shared_BrancheProxy_2_classLit, $getConstructors_com_lemania_sis_shared_BrancheProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_1(){
}
;
function $clinit_BulletinBrancheRequestFactoryImpl(){
  $clinit_BulletinBrancheRequestFactoryImpl = nullMethod;
  tokensToTypes_1 = new HashMap_0;
  typesToTokens_1 = new HashMap_0;
  entityProxyTypes_1 = new HashSet_0;
  valueProxyTypes_1 = new HashSet_0;
  tokensToTypes_1.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_1.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_20(entityProxyTypes_1, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_1.put('tbhvsQOA$IEZ2Js6MZPzVibn3aM=', Lcom_lemania_sis_shared_BulletinSubjectProxy_2_classLit);
  typesToTokens_1.put(Lcom_lemania_sis_shared_BulletinSubjectProxy_2_classLit, 'tbhvsQOA$IEZ2Js6MZPzVibn3aM=');
  $add_20(entityProxyTypes_1, Lcom_lemania_sis_shared_BulletinSubjectProxy_2_classLit);
  tokensToTypes_1.put('YuIuTJVt_dm5r2rhBMjc2iu61aY=', Lcom_lemania_sis_shared_BulletinBrancheProxy_2_classLit);
  typesToTokens_1.put(Lcom_lemania_sis_shared_BulletinBrancheProxy_2_classLit, 'YuIuTJVt_dm5r2rhBMjc2iu61aY=');
  $add_20(entityProxyTypes_1, Lcom_lemania_sis_shared_BulletinBrancheProxy_2_classLit);
}

function BulletinBrancheRequestFactoryImpl_0(){
  $clinit_BulletinBrancheRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1421, 632, {}, BulletinBrancheRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_1(){
  return 'com.lemania.sis.shared.service.BulletinBrancheRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_1(typeToken){
  return dynamicCast(tokensToTypes_1.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_5(type){
  return dynamicCast(typesToTokens_1.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_2(type){
  return $contains_1(entityProxyTypes_1, type);
}
;
_.isValueType = function isValueType_2(type){
  return $contains_1(valueProxyTypes_1, type);
}
;
var entityProxyTypes_1, tokensToTypes_1, typesToTokens_1, valueProxyTypes_1;
function $listAll_1(this$static, bulletinSubjectId){
  var x;
  x = new BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$3X_0(this$static, bulletinSubjectId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function $saveAndReturn(this$static, branche){
  var x;
  x = new BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$8X_0(this$static, branche);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1422, 642, makeCastMap([Q$AbstractRequestContext]), BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_1(){
  return !FACTORY_2 && (FACTORY_2 = new BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl_FactoryImpl_0) , FACTORY_2;
}
;
var FACTORY_2 = null;
function BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$3X_0(this$0, val$bulletinSubjectId){
  this.val$bulletinSubjectId = val$bulletinSubjectId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1423, 641, makeCastMap([Q$AbstractRequest]), BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_7(){
  return new RequestData_0('SGLafRpPY7QFjMpdqzrKLZ0q7f0=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$bulletinSubjectId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_BulletinBrancheProxy_2_classLit);
}
;
_.val$bulletinSubjectId = null;
function BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$8X_0(this$0, val$branche){
  this.val$branche = val$branche;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1426, 641, makeCastMap([Q$AbstractRequest]), BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_10(){
  return new RequestData_0('Kf2RiekkWBDFUvUHNA91iC23_GI=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$branche]), this.propertyRefs, Lcom_lemania_sis_shared_BulletinBrancheProxy_2_classLit, null);
}
;
_.val$branche = null;
function $getConstructors_com_lemania_sis_shared_BulletinBrancheProxy(){
  return [function(factory){
    return new BulletinBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new BulletinBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_lemania_sis_shared_BulletinSubjectProxy(){
  return [function(factory){
    return new BulletinSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new BulletinSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1428, 570, makeCastMap([Q$EnumMap]), BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_2(map){
  $add_15(map, Lcom_lemania_sis_shared_BulletinBrancheProxy_2_classLit, $getConstructors_com_lemania_sis_shared_BulletinBrancheProxy());
  $add_15(map, Lcom_lemania_sis_shared_BulletinSubjectProxy_2_classLit, $getConstructors_com_lemania_sis_shared_BulletinSubjectProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_2(){
}
;
function $clinit_BulletinRequestFactoryImpl(){
  $clinit_BulletinRequestFactoryImpl = nullMethod;
  tokensToTypes_2 = new HashMap_0;
  typesToTokens_2 = new HashMap_0;
  entityProxyTypes_2 = new HashSet_0;
  valueProxyTypes_2 = new HashSet_0;
  tokensToTypes_2.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_2.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_20(entityProxyTypes_2, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_2.put('PkLDLJoNPIgrtihI5OG0UPtvprs=', Lcom_lemania_sis_shared_BulletinProxy_2_classLit);
  typesToTokens_2.put(Lcom_lemania_sis_shared_BulletinProxy_2_classLit, 'PkLDLJoNPIgrtihI5OG0UPtvprs=');
  $add_20(entityProxyTypes_2, Lcom_lemania_sis_shared_BulletinProxy_2_classLit);
}

function BulletinRequestFactoryImpl_0(){
  $clinit_BulletinRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1429, 632, {}, BulletinRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_2(){
  return 'com.lemania.sis.shared.service.BulletinRequestFactory';
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
function $listAllActiveByClass(this$static, classId){
  var x;
  x = new BulletinRequestFactory_BulletinRequestContextImpl$6X_0(this$static, classId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function BulletinRequestFactory_BulletinRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1430, 642, makeCastMap([Q$AbstractRequestContext]), BulletinRequestFactory_BulletinRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_2(){
  return !FACTORY_3 && (FACTORY_3 = new BulletinRequestFactory_BulletinRequestContextImpl_FactoryImpl_0) , FACTORY_3;
}
;
var FACTORY_3 = null;
function BulletinRequestFactory_BulletinRequestContextImpl$6X_0(this$0, val$classId){
  this.val$classId = val$classId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1435, 641, makeCastMap([Q$AbstractRequest]), BulletinRequestFactory_BulletinRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_16(){
  return new RequestData_0('GeQFcHgSiGjEGr83C2DRhvSmRF4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$classId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_BulletinProxy_2_classLit);
}
;
_.val$classId = null;
function $getConstructors_com_lemania_sis_shared_BulletinProxy(){
  return [function(factory){
    return new BulletinProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new BulletinProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function BulletinRequestFactory_BulletinRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1439, 570, makeCastMap([Q$EnumMap]), BulletinRequestFactory_BulletinRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_3(map){
  $add_15(map, Lcom_lemania_sis_shared_BulletinProxy_2_classLit, $getConstructors_com_lemania_sis_shared_BulletinProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_3(){
}
;
function $clinit_BulletinSubjectRequestFactoryImpl(){
  $clinit_BulletinSubjectRequestFactoryImpl = nullMethod;
  tokensToTypes_3 = new HashMap_0;
  typesToTokens_3 = new HashMap_0;
  entityProxyTypes_3 = new HashSet_0;
  valueProxyTypes_3 = new HashSet_0;
  tokensToTypes_3.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_3.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_20(entityProxyTypes_3, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_3.put('tbhvsQOA$IEZ2Js6MZPzVibn3aM=', Lcom_lemania_sis_shared_BulletinSubjectProxy_2_classLit);
  typesToTokens_3.put(Lcom_lemania_sis_shared_BulletinSubjectProxy_2_classLit, 'tbhvsQOA$IEZ2Js6MZPzVibn3aM=');
  $add_20(entityProxyTypes_3, Lcom_lemania_sis_shared_BulletinSubjectProxy_2_classLit);
}

function BulletinSubjectRequestFactoryImpl_0(){
  $clinit_BulletinSubjectRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1440, 632, {}, BulletinSubjectRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_3(){
  return 'com.lemania.sis.shared.service.BulletinSubjectRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_3(typeToken){
  return dynamicCast(tokensToTypes_3.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_7(type){
  return dynamicCast(typesToTokens_3.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_4(type){
  return $contains_1(entityProxyTypes_3, type);
}
;
_.isValueType = function isValueType_4(type){
  return $contains_1(valueProxyTypes_3, type);
}
;
var entityProxyTypes_3, tokensToTypes_3, typesToTokens_3, valueProxyTypes_3;
function $listAll_2(this$static, bulletinId){
  var x;
  x = new BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$4X_0(this$static, bulletinId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function $saveAndReturn_0(this$static, newBulletinSubject){
  var x;
  x = new BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$9X_0(this$static, newBulletinSubject);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1441, 642, makeCastMap([Q$AbstractRequestContext]), BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_3(){
  return !FACTORY_4 && (FACTORY_4 = new BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl_FactoryImpl_0) , FACTORY_4;
}
;
var FACTORY_4 = null;
function BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$4X_0(this$0, val$bulletinId){
  this.val$bulletinId = val$bulletinId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1443, 641, makeCastMap([Q$AbstractRequest]), BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_21(){
  return new RequestData_0('IHxjV6mfFBceYw_hi0xQETlgpgo=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$bulletinId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_BulletinSubjectProxy_2_classLit);
}
;
_.val$bulletinId = null;
function BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$9X_0(this$0, val$newBulletinSubject){
  this.val$newBulletinSubject = val$newBulletinSubject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1446, 641, makeCastMap([Q$AbstractRequest]), BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$9X_0);
_.makeRequestData = function makeRequestData_24(){
  return new RequestData_0('QMUic$jEPHqwl3tp5BKvZGnEzFw=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newBulletinSubject]), this.propertyRefs, Lcom_lemania_sis_shared_BulletinSubjectProxy_2_classLit, null);
}
;
_.val$newBulletinSubject = null;
function $getConstructors_com_lemania_sis_shared_BulletinSubjectProxy_0(){
  return [function(factory){
    return new BulletinSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new BulletinSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1447, 570, makeCastMap([Q$EnumMap]), BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_4(map){
  $add_15(map, Lcom_lemania_sis_shared_BulletinSubjectProxy_2_classLit, $getConstructors_com_lemania_sis_shared_BulletinSubjectProxy_0());
}
;
_.initializeEnumMap = function initializeEnumMap_4(){
}
;
function $clinit_ClasseRequestFactoryImpl(){
  $clinit_ClasseRequestFactoryImpl = nullMethod;
  tokensToTypes_4 = new HashMap_0;
  typesToTokens_4 = new HashMap_0;
  entityProxyTypes_4 = new HashSet_0;
  valueProxyTypes_4 = new HashSet_0;
  tokensToTypes_4.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_4.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_20(entityProxyTypes_4, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_4.put('GXkHkceU5VK8LLT6b3YWvHuUxMk=', Lcom_lemania_sis_shared_ClasseProxy_2_classLit);
  typesToTokens_4.put(Lcom_lemania_sis_shared_ClasseProxy_2_classLit, 'GXkHkceU5VK8LLT6b3YWvHuUxMk=');
  $add_20(entityProxyTypes_4, Lcom_lemania_sis_shared_ClasseProxy_2_classLit);
}

function ClasseRequestFactoryImpl_0(){
  $clinit_ClasseRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1448, 632, {}, ClasseRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_4(){
  return 'com.lemania.sis.shared.service.ClasseRequestFactory';
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
function $listAllActive(this$static){
  var x;
  x = new ClasseRequestFactory_ClasseRequestContextImpl$4X_0(this$static);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function $listAllActive_0(this$static, coursId){
  var x;
  x = new ClasseRequestFactory_ClasseRequestContextImpl$5X_0(this$static, coursId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ClasseRequestFactory_ClasseRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1449, 642, makeCastMap([Q$AbstractRequestContext]), ClasseRequestFactory_ClasseRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_4(){
  return !FACTORY_5 && (FACTORY_5 = new ClasseRequestFactory_ClasseRequestContextImpl_FactoryImpl_0) , FACTORY_5;
}
;
var FACTORY_5 = null;
function ClasseRequestFactory_ClasseRequestContextImpl$4X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1451, 641, makeCastMap([Q$AbstractRequest]), ClasseRequestFactory_ClasseRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_26(){
  return new RequestData_0('_j4hQiT$m5mYgf8ecu3o3CdgfgA=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ClasseProxy_2_classLit);
}
;
function ClasseRequestFactory_ClasseRequestContextImpl$5X_0(this$0, val$coursId){
  this.val$coursId = val$coursId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1452, 641, makeCastMap([Q$AbstractRequest]), ClasseRequestFactory_ClasseRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_27(){
  return new RequestData_0('uOH97$bebic2rF8Bya5wQepOGUc=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$coursId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ClasseProxy_2_classLit);
}
;
_.val$coursId = null;
function $getConstructors_com_lemania_sis_shared_ClasseProxy(){
  return [function(factory){
    return new ClasseProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new ClasseProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function ClasseRequestFactory_ClasseRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1455, 570, makeCastMap([Q$EnumMap]), ClasseRequestFactory_ClasseRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_5(map){
  $add_15(map, Lcom_lemania_sis_shared_ClasseProxy_2_classLit, $getConstructors_com_lemania_sis_shared_ClasseProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_5(){
}
;
function $clinit_CoursRequestFactoryImpl(){
  $clinit_CoursRequestFactoryImpl = nullMethod;
  tokensToTypes_6 = new HashMap_0;
  typesToTokens_6 = new HashMap_0;
  entityProxyTypes_6 = new HashSet_0;
  valueProxyTypes_6 = new HashSet_0;
  tokensToTypes_6.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_6.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_20(entityProxyTypes_6, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_6.put('y14WGzt2YIBX7Es0viykmBagpww=', Lcom_lemania_sis_shared_CoursProxy_2_classLit);
  typesToTokens_6.put(Lcom_lemania_sis_shared_CoursProxy_2_classLit, 'y14WGzt2YIBX7Es0viykmBagpww=');
  $add_20(entityProxyTypes_6, Lcom_lemania_sis_shared_CoursProxy_2_classLit);
}

function CoursRequestFactoryImpl_0(){
  $clinit_CoursRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1460, 632, {}, CoursRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_6(){
  return 'com.lemania.sis.shared.service.CoursRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_6(typeToken){
  return dynamicCast(tokensToTypes_6.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_10(type){
  return dynamicCast(typesToTokens_6.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_7(type){
  return $contains_1(entityProxyTypes_6, type);
}
;
_.isValueType = function isValueType_7(type){
  return $contains_1(valueProxyTypes_6, type);
}
;
var entityProxyTypes_6, tokensToTypes_6, typesToTokens_6, valueProxyTypes_6;
function $listAll_3(this$static, ecoleId){
  var x;
  x = new CoursRequestFactory_CoursRequestContextImpl$3X_0(this$static, ecoleId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function $listAllActive_1(this$static, ecoleId){
  var x;
  x = new CoursRequestFactory_CoursRequestContextImpl$4X_0(this$static, ecoleId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function CoursRequestFactory_CoursRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1461, 642, makeCastMap([Q$AbstractRequestContext]), CoursRequestFactory_CoursRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_6(){
  return !FACTORY_7 && (FACTORY_7 = new CoursRequestFactory_CoursRequestContextImpl_FactoryImpl_0) , FACTORY_7;
}
;
var FACTORY_7 = null;
function CoursRequestFactory_CoursRequestContextImpl$3X_0(this$0, val$ecoleId){
  this.val$ecoleId = val$ecoleId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1462, 641, makeCastMap([Q$AbstractRequest]), CoursRequestFactory_CoursRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_31(){
  return new RequestData_0('BNAm7BVlQVkBO2XHugvmFs5nYu8=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$ecoleId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_CoursProxy_2_classLit);
}
;
_.val$ecoleId = null;
function CoursRequestFactory_CoursRequestContextImpl$4X_0(this$0, val$ecoleId){
  this.val$ecoleId = val$ecoleId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1463, 641, makeCastMap([Q$AbstractRequest]), CoursRequestFactory_CoursRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_32(){
  return new RequestData_0('K1zlzZSuskrku2VPPhppvJx6X08=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$ecoleId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_CoursProxy_2_classLit);
}
;
_.val$ecoleId = null;
function $getConstructors_com_lemania_sis_shared_CoursProxy(){
  return [function(factory){
    return new CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function CoursRequestFactory_CoursRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1466, 570, makeCastMap([Q$EnumMap]), CoursRequestFactory_CoursRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_7(map){
  $add_15(map, Lcom_lemania_sis_shared_CoursProxy_2_classLit, $getConstructors_com_lemania_sis_shared_CoursProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_7(){
}
;
function $clinit_EcoleRequestFactoryImpl(){
  $clinit_EcoleRequestFactoryImpl = nullMethod;
  tokensToTypes_7 = new HashMap_0;
  typesToTokens_7 = new HashMap_0;
  entityProxyTypes_7 = new HashSet_0;
  valueProxyTypes_7 = new HashSet_0;
  tokensToTypes_7.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_7.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_20(entityProxyTypes_7, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_7.put('YDw$y3tEecJwr7ZsLzBbvDxEoGQ=', Lcom_lemania_sis_shared_EcoleProxy_2_classLit);
  typesToTokens_7.put(Lcom_lemania_sis_shared_EcoleProxy_2_classLit, 'YDw$y3tEecJwr7ZsLzBbvDxEoGQ=');
  $add_20(entityProxyTypes_7, Lcom_lemania_sis_shared_EcoleProxy_2_classLit);
}

function EcoleRequestFactoryImpl_0(){
  $clinit_EcoleRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1467, 632, {}, EcoleRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_7(){
  return 'com.lemania.sis.shared.service.EcoleRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_7(typeToken){
  return dynamicCast(tokensToTypes_7.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_11(type){
  return dynamicCast(typesToTokens_7.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_8(type){
  return $contains_1(entityProxyTypes_7, type);
}
;
_.isValueType = function isValueType_8(type){
  return $contains_1(valueProxyTypes_7, type);
}
;
var entityProxyTypes_7, tokensToTypes_7, typesToTokens_7, valueProxyTypes_7;
function $listAll_4(this$static){
  var x;
  x = new EcoleRequestFactory_EcoleRequestContextImpl$2X_0(this$static);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function EcoleRequestFactory_EcoleRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1468, 642, makeCastMap([Q$AbstractRequestContext]), EcoleRequestFactory_EcoleRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_7(){
  return !FACTORY_8 && (FACTORY_8 = new EcoleRequestFactory_EcoleRequestContextImpl_FactoryImpl_0) , FACTORY_8;
}
;
var FACTORY_8 = null;
function EcoleRequestFactory_EcoleRequestContextImpl$2X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1469, 641, makeCastMap([Q$AbstractRequest]), EcoleRequestFactory_EcoleRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_35(){
  return new RequestData_0('50fV5XB3_10H9LwVMzQQW0OFtB8=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_EcoleProxy_2_classLit);
}
;
function $getConstructors_com_lemania_sis_shared_EcoleProxy(){
  return [function(factory){
    return new EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function EcoleRequestFactory_EcoleRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1472, 570, makeCastMap([Q$EnumMap]), EcoleRequestFactory_EcoleRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_8(map){
  $add_15(map, Lcom_lemania_sis_shared_EcoleProxy_2_classLit, $getConstructors_com_lemania_sis_shared_EcoleProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_8(){
}
;
function $send_0(this$static, payload, receiver){
  var myReceiver;
  myReceiver = new EventSourceRequestTransport$1_0(this$static, receiver);
  try {
    $send(this$static.wrapped, payload, myReceiver);
  }
   finally {
    $doFire(this$static.eventBus, new ActionInProgressEvent_0, null);
  }
}

function EventSourceRequestTransport_0(eventBus){
  EventSourceRequestTransport_1.call(this, eventBus, new DefaultRequestTransport_0);
}

function EventSourceRequestTransport_1(eventBus, wrapped){
  this.eventBus = eventBus;
  this.wrapped = wrapped;
}

defineSeed(1473, 1, {}, EventSourceRequestTransport_0);
_.eventBus = null;
_.wrapped = null;
function $onTransportFailure_0(this$static, failure){
  try {
    $onTransportFailure(this$static.val$receiver, failure);
  }
   finally {
    $doFire(this$static.this$0.eventBus, new ActionCompletedEvent_0, null);
  }
}

function $onTransportSuccess_0(this$static, payload){
  try {
    $onTransportSuccess(this$static.val$receiver, payload);
  }
   finally {
    $doFire(this$static.this$0.eventBus, new ActionCompletedEvent_0, null);
  }
}

function EventSourceRequestTransport$1_0(this$0, val$receiver){
  this.this$0 = this$0;
  this.val$receiver = val$receiver;
}

defineSeed(1474, 1, {}, EventSourceRequestTransport$1_0);
_.this$0 = null;
_.val$receiver = null;
function $clinit_ProfessorRequestFactoryImpl(){
  $clinit_ProfessorRequestFactoryImpl = nullMethod;
  tokensToTypes_8 = new HashMap_0;
  typesToTokens_8 = new HashMap_0;
  entityProxyTypes_8 = new HashSet_0;
  valueProxyTypes_8 = new HashSet_0;
  tokensToTypes_8.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_8.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_20(entityProxyTypes_8, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_8.put('GRB8BzGrI1tM_EULmiOBQtqIX0o=', Lcom_lemania_sis_shared_ProfessorProxy_2_classLit);
  typesToTokens_8.put(Lcom_lemania_sis_shared_ProfessorProxy_2_classLit, 'GRB8BzGrI1tM_EULmiOBQtqIX0o=');
  $add_20(entityProxyTypes_8, Lcom_lemania_sis_shared_ProfessorProxy_2_classLit);
}

function ProfessorRequestFactoryImpl_0(){
  $clinit_ProfessorRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1475, 632, {}, ProfessorRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_8(){
  return 'com.lemania.sis.shared.service.ProfessorRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_8(typeToken){
  return dynamicCast(tokensToTypes_8.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_12(type){
  return dynamicCast(typesToTokens_8.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_9(type){
  return $contains_1(entityProxyTypes_8, type);
}
;
_.isValueType = function isValueType_9(type){
  return $contains_1(valueProxyTypes_8, type);
}
;
var entityProxyTypes_8, tokensToTypes_8, typesToTokens_8, valueProxyTypes_8;
function $listAll_5(this$static){
  var x;
  x = new ProfessorRequestFactory_ProfessorRequestContextImpl$3X_0(this$static);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ProfessorRequestFactory_ProfessorRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1476, 642, makeCastMap([Q$AbstractRequestContext]), ProfessorRequestFactory_ProfessorRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_8(){
  return !FACTORY_9 && (FACTORY_9 = new ProfessorRequestFactory_ProfessorRequestContextImpl_FactoryImpl_0) , FACTORY_9;
}
;
var FACTORY_9 = null;
function ProfessorRequestFactory_ProfessorRequestContextImpl$3X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1478, 641, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_39(){
  return new RequestData_0('FASF6T$HSOeNninmyDnq50cS85c=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ProfessorProxy_2_classLit);
}
;
function $getConstructors_com_lemania_sis_shared_ProfessorProxy_0(){
  return [function(factory){
    return new ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function ProfessorRequestFactory_ProfessorRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1481, 570, makeCastMap([Q$EnumMap]), ProfessorRequestFactory_ProfessorRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_9(map){
  $add_15(map, Lcom_lemania_sis_shared_ProfessorProxy_2_classLit, $getConstructors_com_lemania_sis_shared_ProfessorProxy_0());
}
;
_.initializeEnumMap = function initializeEnumMap_9(){
}
;
function $clinit_ProfileRequestFactoryImpl(){
  $clinit_ProfileRequestFactoryImpl = nullMethod;
  tokensToTypes_10 = new HashMap_0;
  typesToTokens_10 = new HashMap_0;
  entityProxyTypes_10 = new HashSet_0;
  valueProxyTypes_10 = new HashSet_0;
  tokensToTypes_10.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_10.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_20(entityProxyTypes_10, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_10.put('4f6x2X$iTZunF$uRKvzBsMVHE8Q=', Lcom_lemania_sis_shared_ProfileProxy_2_classLit);
  typesToTokens_10.put(Lcom_lemania_sis_shared_ProfileProxy_2_classLit, '4f6x2X$iTZunF$uRKvzBsMVHE8Q=');
  $add_20(entityProxyTypes_10, Lcom_lemania_sis_shared_ProfileProxy_2_classLit);
}

function ProfileRequestFactoryImpl_0(){
  $clinit_ProfileRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1489, 632, {}, ProfileRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_10(){
  return 'com.lemania.sis.shared.service.ProfileRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_10(typeToken){
  return dynamicCast(tokensToTypes_10.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_14(type){
  return dynamicCast(typesToTokens_10.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_11(type){
  return $contains_1(entityProxyTypes_10, type);
}
;
_.isValueType = function isValueType_11(type){
  return $contains_1(valueProxyTypes_10, type);
}
;
var entityProxyTypes_10, tokensToTypes_10, typesToTokens_10, valueProxyTypes_10;
function $listAllActiveByClass_0(this$static, classId){
  var x;
  x = new ProfileRequestFactory_ProfileRequestContextImpl$4X_0(this$static, classId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ProfileRequestFactory_ProfileRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1490, 642, makeCastMap([Q$AbstractRequestContext]), ProfileRequestFactory_ProfileRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_10(){
  return !FACTORY_11 && (FACTORY_11 = new ProfileRequestFactory_ProfileRequestContextImpl_FactoryImpl_0) , FACTORY_11;
}
;
var FACTORY_11 = null;
function ProfileRequestFactory_ProfileRequestContextImpl$4X_0(this$0, val$classId){
  this.val$classId = val$classId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1491, 641, makeCastMap([Q$AbstractRequest]), ProfileRequestFactory_ProfileRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_46(){
  return new RequestData_0('mROjoNsnTj_BlFzWjghGLNwSFKs=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$classId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ProfileProxy_2_classLit);
}
;
_.val$classId = null;
function $getConstructors_com_lemania_sis_shared_ProfileProxy(){
  return [function(factory){
    return new ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function ProfileRequestFactory_ProfileRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1493, 570, makeCastMap([Q$EnumMap]), ProfileRequestFactory_ProfileRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_11(map){
  $add_15(map, Lcom_lemania_sis_shared_ProfileProxy_2_classLit, $getConstructors_com_lemania_sis_shared_ProfileProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_11(){
}
;
function $clinit_SettingOptionRequestFactoryImpl(){
  $clinit_SettingOptionRequestFactoryImpl = nullMethod;
  tokensToTypes_12 = new HashMap_0;
  typesToTokens_12 = new HashMap_0;
  entityProxyTypes_12 = new HashSet_0;
  valueProxyTypes_12 = new HashSet_0;
  tokensToTypes_12.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_12.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_20(entityProxyTypes_12, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_12.put('g6NMIe_XPgibzcVVmqYF7GEq47E=', Lcom_lemania_sis_shared_SettingOptionProxy_2_classLit);
  typesToTokens_12.put(Lcom_lemania_sis_shared_SettingOptionProxy_2_classLit, 'g6NMIe_XPgibzcVVmqYF7GEq47E=');
  $add_20(entityProxyTypes_12, Lcom_lemania_sis_shared_SettingOptionProxy_2_classLit);
}

function SettingOptionRequestFactoryImpl_0(){
  $clinit_SettingOptionRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1502, 632, {}, SettingOptionRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_12(){
  return 'com.lemania.sis.shared.service.SettingOptionRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_12(typeToken){
  return dynamicCast(tokensToTypes_12.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_16(type){
  return dynamicCast(typesToTokens_12.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_13(type){
  return $contains_1(entityProxyTypes_12, type);
}
;
_.isValueType = function isValueType_13(type){
  return $contains_1(valueProxyTypes_12, type);
}
;
var entityProxyTypes_12, tokensToTypes_12, typesToTokens_12, valueProxyTypes_12;
function $listAll_6(this$static){
  var x;
  x = new SettingOptionRequestFactory_SettingOptionRequestContextImpl$2X_0(this$static);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1503, 642, makeCastMap([Q$AbstractRequestContext]), SettingOptionRequestFactory_SettingOptionRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_12(){
  return !FACTORY_13 && (FACTORY_13 = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_FactoryImpl_0) , FACTORY_13;
}
;
var FACTORY_13 = null;
function SettingOptionRequestFactory_SettingOptionRequestContextImpl$2X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1504, 641, makeCastMap([Q$AbstractRequest]), SettingOptionRequestFactory_SettingOptionRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_53(){
  return new RequestData_0('9OtpVjaZhsMx0CKdUzXSYDjQr7I=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_SettingOptionProxy_2_classLit);
}
;
function $getConstructors_com_lemania_sis_shared_SettingOptionProxy(){
  return [function(factory){
    return new SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function SettingOptionRequestFactory_SettingOptionRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1506, 570, makeCastMap([Q$EnumMap]), SettingOptionRequestFactory_SettingOptionRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_13(map){
  $add_15(map, Lcom_lemania_sis_shared_SettingOptionProxy_2_classLit, $getConstructors_com_lemania_sis_shared_SettingOptionProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_13(){
}
;
function $clinit_StudentRequestFactoryImpl(){
  $clinit_StudentRequestFactoryImpl = nullMethod;
  tokensToTypes_13 = new HashMap_0;
  typesToTokens_13 = new HashMap_0;
  entityProxyTypes_13 = new HashSet_0;
  valueProxyTypes_13 = new HashSet_0;
  tokensToTypes_13.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_13.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_20(entityProxyTypes_13, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_13.put('NYSAog3wZcLeCPWLtPhbElv09sg=', Lcom_lemania_sis_shared_StudentProxy_2_classLit);
  typesToTokens_13.put(Lcom_lemania_sis_shared_StudentProxy_2_classLit, 'NYSAog3wZcLeCPWLtPhbElv09sg=');
  $add_20(entityProxyTypes_13, Lcom_lemania_sis_shared_StudentProxy_2_classLit);
}

function StudentRequestFactoryImpl_0(){
  $clinit_StudentRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1507, 632, {}, StudentRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_13(){
  return 'com.lemania.sis.shared.service.StudentRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_13(typeToken){
  return dynamicCast(tokensToTypes_13.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_17(type){
  return dynamicCast(typesToTokens_13.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_14(type){
  return $contains_1(entityProxyTypes_13, type);
}
;
_.isValueType = function isValueType_14(type){
  return $contains_1(valueProxyTypes_13, type);
}
;
var entityProxyTypes_13, tokensToTypes_13, typesToTokens_13, valueProxyTypes_13;
function StudentRequestFactory_StudentRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1508, 642, makeCastMap([Q$AbstractRequestContext]), StudentRequestFactory_StudentRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_13(){
  return !FACTORY_14 && (FACTORY_14 = new StudentRequestFactory_StudentRequestContextImpl_FactoryImpl_0) , FACTORY_14;
}
;
var FACTORY_14 = null;
function $getConstructors_com_lemania_sis_shared_StudentProxy(){
  return [function(factory){
    return new StudentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new StudentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function StudentRequestFactory_StudentRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1513, 570, makeCastMap([Q$EnumMap]), StudentRequestFactory_StudentRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_14(map){
  $add_15(map, Lcom_lemania_sis_shared_StudentProxy_2_classLit, $getConstructors_com_lemania_sis_shared_StudentProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_14(){
}
;
function $clinit_SubjectRequestFactoryImpl(){
  $clinit_SubjectRequestFactoryImpl = nullMethod;
  tokensToTypes_14 = new HashMap_0;
  typesToTokens_14 = new HashMap_0;
  entityProxyTypes_14 = new HashSet_0;
  valueProxyTypes_14 = new HashSet_0;
  tokensToTypes_14.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_14.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_20(entityProxyTypes_14, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_14.put('abvmZrXvW20lV3odxZOEzl3XlbY=', Lcom_lemania_sis_shared_SubjectProxy_2_classLit);
  typesToTokens_14.put(Lcom_lemania_sis_shared_SubjectProxy_2_classLit, 'abvmZrXvW20lV3odxZOEzl3XlbY=');
  $add_20(entityProxyTypes_14, Lcom_lemania_sis_shared_SubjectProxy_2_classLit);
  tokensToTypes_14.put('PkLDLJoNPIgrtihI5OG0UPtvprs=', Lcom_lemania_sis_shared_BulletinProxy_2_classLit);
  typesToTokens_14.put(Lcom_lemania_sis_shared_BulletinProxy_2_classLit, 'PkLDLJoNPIgrtihI5OG0UPtvprs=');
  $add_20(entityProxyTypes_14, Lcom_lemania_sis_shared_BulletinProxy_2_classLit);
}

function SubjectRequestFactoryImpl_0(){
  $clinit_SubjectRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1514, 632, {}, SubjectRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_14(){
  return 'com.lemania.sis.shared.service.SubjectRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_14(typeToken){
  return dynamicCast(tokensToTypes_14.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_18(type){
  return dynamicCast(typesToTokens_14.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_15(type){
  return $contains_1(entityProxyTypes_14, type);
}
;
_.isValueType = function isValueType_15(type){
  return $contains_1(valueProxyTypes_14, type);
}
;
var entityProxyTypes_14, tokensToTypes_14, typesToTokens_14, valueProxyTypes_14;
function $listAllActive_2(this$static){
  var x;
  x = new SubjectRequestFactory_SubjectRequestContextImpl$3X_0(this$static);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function SubjectRequestFactory_SubjectRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1515, 642, makeCastMap([Q$AbstractRequestContext]), SubjectRequestFactory_SubjectRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_14(){
  return !FACTORY_15 && (FACTORY_15 = new SubjectRequestFactory_SubjectRequestContextImpl_FactoryImpl_0) , FACTORY_15;
}
;
var FACTORY_15 = null;
function SubjectRequestFactory_SubjectRequestContextImpl$3X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1517, 641, makeCastMap([Q$AbstractRequest]), SubjectRequestFactory_SubjectRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_60(){
  return new RequestData_0('MPFmfLNlkc0etb$Pi_O8mA63K60=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_SubjectProxy_2_classLit);
}
;
function $getConstructors_com_lemania_sis_shared_BulletinProxy_0(){
  return [function(factory){
    return new BulletinProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new BulletinProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_lemania_sis_shared_SubjectProxy(){
  return [function(factory){
    return new SubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new SubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function SubjectRequestFactory_SubjectRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1521, 570, makeCastMap([Q$EnumMap]), SubjectRequestFactory_SubjectRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_15(map){
  $add_15(map, Lcom_lemania_sis_shared_BulletinProxy_2_classLit, $getConstructors_com_lemania_sis_shared_BulletinProxy_0());
  $add_15(map, Lcom_lemania_sis_shared_SubjectProxy_2_classLit, $getConstructors_com_lemania_sis_shared_SubjectProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_15(){
}
;
function $clinit_UserRequestFactoryImpl(){
  $clinit_UserRequestFactoryImpl = nullMethod;
  tokensToTypes_15 = new HashMap_0;
  typesToTokens_15 = new HashMap_0;
  entityProxyTypes_15 = new HashSet_0;
  valueProxyTypes_15 = new HashSet_0;
  tokensToTypes_15.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_15.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_20(entityProxyTypes_15, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_15.put('vjebS9kwVOhUGNVJkvXEc$old28=', Lcom_lemania_sis_shared_UserProxy_2_classLit);
  typesToTokens_15.put(Lcom_lemania_sis_shared_UserProxy_2_classLit, 'vjebS9kwVOhUGNVJkvXEc$old28=');
  $add_20(entityProxyTypes_15, Lcom_lemania_sis_shared_UserProxy_2_classLit);
}

function UserRequestFactoryImpl_0(){
  $clinit_UserRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1522, 632, {}, UserRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_15(){
  return 'com.lemania.sis.shared.service.UserRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_15(typeToken){
  return dynamicCast(tokensToTypes_15.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_19(type){
  return dynamicCast(typesToTokens_15.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_16(type){
  return $contains_1(entityProxyTypes_15, type);
}
;
_.isValueType = function isValueType_16(type){
  return $contains_1(valueProxyTypes_15, type);
}
;
var entityProxyTypes_15, tokensToTypes_15, typesToTokens_15, valueProxyTypes_15;
function $save_3(this$static, user){
  var x;
  x = new UserRequestFactory_UserRequestContextImpl$9X_0(this$static, user);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function UserRequestFactory_UserRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1523, 642, makeCastMap([Q$AbstractRequestContext]), UserRequestFactory_UserRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_15(){
  return !FACTORY_16 && (FACTORY_16 = new UserRequestFactory_UserRequestContextImpl_FactoryImpl_0) , FACTORY_16;
}
;
var FACTORY_16 = null;
function UserRequestFactory_UserRequestContextImpl$9X_0(this$0, val$user){
  this.val$user = val$user;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1530, 641, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$9X_0);
_.makeRequestData = function makeRequestData_70(){
  return new RequestData_0('HY$Q6oBY89$1fBStbC1WG4a6TSA=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$user]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$user = null;
function $getConstructors_com_lemania_sis_shared_UserProxy(){
  return [function(factory){
    return new UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function UserRequestFactory_UserRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1531, 570, makeCastMap([Q$EnumMap]), UserRequestFactory_UserRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_16(map){
  $add_15(map, Lcom_lemania_sis_shared_UserProxy_2_classLit, $getConstructors_com_lemania_sis_shared_UserProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_16(){
}
;
function CollectionAutoBean_0(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  this.shim = new CollectionAutoBean$1_0(this);
  setNative(this.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this);
}

defineSeed(1532, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), CollectionAutoBean_0);
_.as = function as_24(){
  return this.shim;
}
;
_.getType_0 = function getType_32(){
  return Ljava_util_Collection_2_classLit;
}
;
_.traverseProperties = function traverseProperties_23(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = ($clinit_Boolean() , $isEmpty_1(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'empty'), Z_classLit);
  visitor.visitValueProperty('empty', value, propertyContext);
}
;
function $isEmpty_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$Collection).isEmpty_0();
  return toReturn;
}

function CollectionAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1533, 1, makeCastMap([Q$Iterable, Q$Collection]), CollectionAutoBean$1_0);
_.add_1 = function add_8(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Collection).add_1(o);
  $clinit_Boolean();
  return toReturn;
}
;
_.contains_0 = function contains_1(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Collection).contains_0(o);
  $clinit_Boolean();
  return toReturn;
}
;
_.equals$ = function equals_60(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$Collection).equals$(o);
}
;
_.hashCode$ = function hashCode_60(){
  return dynamicCast($getWrapped(this.this$0), Q$Collection).hashCode$();
}
;
_.isEmpty_0 = function isEmpty_4(){
  return $isEmpty_1(this);
}
;
_.iterator = function iterator_11(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Collection).iterator();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$Iterator)):(toReturn = (new IteratorAutoBean_0(this.this$0.factory, toReturn)).shim));
  return toReturn;
}
;
_.size_1 = function size_10(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Collection).size_1();
  valueOf_1(toReturn);
  return toReturn;
}
;
_.toArray = function toArray_2(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Collection).toArray();
  return toReturn;
}
;
_.toString$ = function toString_40(){
  return dynamicCast($getWrapped(this.this$0), Q$Collection).toString$();
}
;
_.this$0 = null;
function IteratorAutoBean_0(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  this.shim = new IteratorAutoBean$1_0(this);
  setNative(this.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this);
}

defineSeed(1534, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), IteratorAutoBean_0);
_.as = function as_25(){
  return this.shim;
}
;
_.getType_0 = function getType_33(){
  return Ljava_util_Iterator_2_classLit;
}
;
_.traverseProperties = function traverseProperties_24(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = ($clinit_Boolean() , $hasNext(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'next'), Z_classLit);
  visitor.visitValueProperty('next', value, propertyContext);
}
;
function $hasNext(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$Iterator).hasNext();
  return toReturn;
}

function IteratorAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1535, 1, makeCastMap([Q$Iterator]), IteratorAutoBean$1_0);
_.equals$ = function equals_61(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$Iterator).equals$(o);
}
;
_.hasNext = function hasNext_7(){
  return $hasNext(this);
}
;
_.hashCode$ = function hashCode_61(){
  return dynamicCast($getWrapped(this.this$0), Q$Iterator).hashCode$();
}
;
_.next_0 = function next_8(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Iterator).next_0();
  toReturn != null && !!(toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  return toReturn;
}
;
_.remove_0 = function remove_30(){
  dynamicCast($getWrapped(this.this$0), Q$Iterator).remove_0();
}
;
_.toString$ = function toString_41(){
  return dynamicCast($getWrapped(this.this$0), Q$Iterator).toString$();
}
;
_.this$0 = null;
function ListAutoBean_0(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  this.shim = new ListAutoBean$1_0(this);
  setNative(this.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this);
}

defineSeed(1536, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ListAutoBean_0);
_.as = function as_26(){
  return this.shim;
}
;
_.getType_0 = function getType_34(){
  return Ljava_util_List_2_classLit;
}
;
_.traverseProperties = function traverseProperties_25(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = ($clinit_Boolean() , $isEmpty_2(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'empty'), Z_classLit);
  visitor.visitValueProperty('empty', value, propertyContext);
}
;
function $isEmpty_2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$List).isEmpty_0();
  return toReturn;
}

function ListAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1537, 1, makeCastMap([Q$Iterable, Q$Collection, Q$List]), ListAutoBean$1_0);
_.add_0 = function add_9(index, element){
  dynamicCast($getWrapped(this.this$0), Q$List).add_0(index, element);
  initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(index), element]);
}
;
_.add_1 = function add_10(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).add_1(o);
  $clinit_Boolean();
  return toReturn;
}
;
_.clear_0 = function clear_3(){
  dynamicCast($getWrapped(this.this$0), Q$List).clear_0();
}
;
_.contains_0 = function contains_2(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).contains_0(o);
  $clinit_Boolean();
  return toReturn;
}
;
_.equals$ = function equals_62(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$List).equals$(o);
}
;
_.get_0 = function get_36(index){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).get_0(index);
  toReturn != null && !!(toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(index)]);
  return toReturn;
}
;
_.hashCode$ = function hashCode_62(){
  return dynamicCast($getWrapped(this.this$0), Q$List).hashCode$();
}
;
_.indexOf_0 = function indexOf_1(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).indexOf_0(o);
  valueOf_1(toReturn);
  return toReturn;
}
;
_.isEmpty_0 = function isEmpty_5(){
  return $isEmpty_2(this);
}
;
_.iterator = function iterator_12(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).iterator();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$Iterator)):(toReturn = (new IteratorAutoBean_0(this.this$0.factory, toReturn)).shim));
  return toReturn;
}
;
_.listIterator = function listIterator_3(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).listIterator();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$ListIterator)):(toReturn = (new ListIteratorAutoBean_0(this.this$0.factory, toReturn)).shim));
  return toReturn;
}
;
_.listIterator_0 = function listIterator_4(from){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).listIterator_0(from);
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$ListIterator)):(toReturn = (new ListIteratorAutoBean_0(this.this$0.factory, toReturn)).shim));
  initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(from)]);
  return toReturn;
}
;
_.remove_1 = function remove_31(index){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).remove_1(index);
  toReturn != null && !!(toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(index)]);
  return toReturn;
}
;
_.remove_2 = function remove_32(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).remove_2(o);
  $clinit_Boolean();
  return toReturn;
}
;
_.set = function set_4(index, element){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).set(index, element);
  toReturn != null && !!(toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(index), element]);
  return toReturn;
}
;
_.size_1 = function size_11(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).size_1();
  valueOf_1(toReturn);
  return toReturn;
}
;
_.subList = function subList_1(fromIndex, toIndex){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).subList(fromIndex, toIndex);
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$List)):(toReturn = (new ListAutoBean_0(this.this$0.factory, toReturn)).shim));
  initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(fromIndex), valueOf_1(toIndex)]);
  return toReturn;
}
;
_.toArray = function toArray_3(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).toArray();
  return toReturn;
}
;
_.toString$ = function toString_42(){
  return dynamicCast($getWrapped(this.this$0), Q$List).toString$();
}
;
_.this$0 = null;
function ListIteratorAutoBean_0(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  this.shim = new ListIteratorAutoBean$1_0(this);
  setNative(this.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this);
}

defineSeed(1538, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ListIteratorAutoBean_0);
_.as = function as_27(){
  return this.shim;
}
;
_.getType_0 = function getType_35(){
  return Ljava_util_ListIterator_2_classLit;
}
;
_.traverseProperties = function traverseProperties_26(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = ($clinit_Boolean() , $hasNext_0(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'next'), Z_classLit);
  visitor.visitValueProperty('next', value, propertyContext);
  value = $hasPrevious(as)?TRUE_1:FALSE_1;
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'previous'), Z_classLit);
  visitor.visitValueProperty('previous', value, propertyContext);
}
;
function $hasNext_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ListIterator).hasNext();
  return toReturn;
}

function $hasPrevious(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ListIterator).hasPrevious();
  return toReturn;
}

function ListIteratorAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1539, 1, makeCastMap([Q$Iterator, Q$ListIterator]), ListIteratorAutoBean$1_0);
_.equals$ = function equals_63(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ListIterator).equals$(o);
}
;
_.hasNext = function hasNext_8(){
  return $hasNext_0(this);
}
;
_.hasPrevious = function hasPrevious_0(){
  return $hasPrevious(this);
}
;
_.hashCode$ = function hashCode_63(){
  return dynamicCast($getWrapped(this.this$0), Q$ListIterator).hashCode$();
}
;
_.next_0 = function next_9(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$ListIterator).next_0();
  toReturn != null && !!(toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  return toReturn;
}
;
_.previous = function previous_1(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$ListIterator).previous();
  toReturn != null && !!(toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  return toReturn;
}
;
_.remove_0 = function remove_33(){
  dynamicCast($getWrapped(this.this$0), Q$ListIterator).remove_0();
}
;
_.toString$ = function toString_43(){
  return dynamicCast($getWrapped(this.this$0), Q$ListIterator).toString$();
}
;
_.this$0 = null;
function MapAutoBean_0(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  this.shim = new MapAutoBean$1_0(this);
  setNative(this.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this);
}

defineSeed(1540, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), MapAutoBean_0);
_.as = function as_28(){
  return this.shim;
}
;
_.getType_0 = function getType_36(){
  return Ljava_util_Map_2_classLit;
}
;
_.traverseProperties = function traverseProperties_27(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = ($clinit_Boolean() , $isEmpty_3(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'empty'), Z_classLit);
  visitor.visitValueProperty('empty', value, propertyContext);
}
;
function $isEmpty_3(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$Map).isEmpty_0();
  return toReturn;
}

function MapAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1541, 1, makeCastMap([Q$Map]), MapAutoBean$1_0);
_.containsKey = function containsKey_4(key_0){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Map).containsKey(key_0);
  $clinit_Boolean();
  return toReturn;
}
;
_.entrySet_0 = function entrySet_4(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Map).entrySet_0();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$Set)):(toReturn = (new SetAutoBean_0(this.this$0.factory, toReturn)).shim));
  return toReturn;
}
;
_.equals$ = function equals_64(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$Map).equals$(o);
}
;
_.get_1 = function get_37(key_0){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Map).get_1(key_0);
  toReturn != null && !!(toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  return toReturn;
}
;
_.hashCode$ = function hashCode_64(){
  return dynamicCast($getWrapped(this.this$0), Q$Map).hashCode$();
}
;
_.isEmpty_0 = function isEmpty_6(){
  return $isEmpty_3(this);
}
;
_.put = function put_4(key_0, value){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Map).put(key_0, value);
  toReturn != null && !!(toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  return toReturn;
}
;
_.remove_3 = function remove_34(key_0){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Map).remove_3(key_0);
  toReturn != null && !!(toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  return toReturn;
}
;
_.size_1 = function size_12(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Map).size_1();
  valueOf_1(toReturn);
  return toReturn;
}
;
_.toString$ = function toString_44(){
  return dynamicCast($getWrapped(this.this$0), Q$Map).toString$();
}
;
_.this$0 = null;
function Map_EntryAutoBean_0(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  this.shim = new Map_EntryAutoBean$1_0(this);
  setNative(this.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this);
}

defineSeed(1542, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), Map_EntryAutoBean_0);
_.as = function as_29(){
  return this.shim;
}
;
_.getType_0 = function getType_37(){
  return Ljava_util_Map$Entry_2_classLit;
}
;
_.traverseProperties = function traverseProperties_28(visitor, ctx){
  var as, bean, propertyContext;
  as = this.shim;
  bean = dynamicCast(getAutoBean($getKey_0(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'key'), Ljava_lang_Object_2_classLit);
  visitor.visitReferenceProperty('key', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  bean = dynamicCast(getAutoBean($getValue_12(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_0(as, as.setValue, Ljava_lang_Object_2_classLit);
  visitor.visitReferenceProperty('value', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
}
;
function $getKey_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$Map$Entry).getKey();
  toReturn != null && !!(toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  return toReturn;
}

function $getValue_12(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$Map$Entry).getValue_0();
  toReturn != null && !!(toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  return toReturn;
}

function Map_EntryAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1543, 1, makeCastMap([Q$Map$Entry]), Map_EntryAutoBean$1_0);
_.equals$ = function equals_65(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$Map$Entry).equals$(o);
}
;
_.getKey = function getKey_1(){
  return $getKey_0(this);
}
;
_.getValue_0 = function getValue_70(){
  return $getValue_12(this);
}
;
_.hashCode$ = function hashCode_65(){
  return dynamicCast($getWrapped(this.this$0), Q$Map$Entry).hashCode$();
}
;
_.setValue = function setValue_1(value){
  dynamicCast($getWrapped(this.this$0), Q$Map$Entry).setValue(value);
  return this;
}
;
_.toString$ = function toString_45(){
  return dynamicCast($getWrapped(this.this$0), Q$Map$Entry).toString$();
}
;
_.this$0 = null;
function SetAutoBean_0(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  this.shim = new SetAutoBean$1_0(this);
  setNative(this.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this);
}

defineSeed(1544, 598, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), SetAutoBean_0);
_.as = function as_30(){
  return this.shim;
}
;
_.getType_0 = function getType_38(){
  return Ljava_util_Set_2_classLit;
}
;
_.traverseProperties = function traverseProperties_29(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = ($clinit_Boolean() , $isEmpty_4(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'empty'), Z_classLit);
  visitor.visitValueProperty('empty', value, propertyContext);
}
;
function $isEmpty_4(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$Set).isEmpty_0();
  return toReturn;
}

function SetAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1545, 1, makeCastMap([Q$Iterable, Q$Collection, Q$Set]), SetAutoBean$1_0);
_.add_1 = function add_11(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Set).add_1(o);
  $clinit_Boolean();
  return toReturn;
}
;
_.contains_0 = function contains_3(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Set).contains_0(o);
  $clinit_Boolean();
  return toReturn;
}
;
_.equals$ = function equals_66(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$Set).equals$(o);
}
;
_.hashCode$ = function hashCode_66(){
  return dynamicCast($getWrapped(this.this$0), Q$Set).hashCode$();
}
;
_.isEmpty_0 = function isEmpty_7(){
  return $isEmpty_4(this);
}
;
_.iterator = function iterator_13(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Set).iterator();
  !!toReturn && ((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$Iterator)):(toReturn = (new IteratorAutoBean_0(this.this$0.factory, toReturn)).shim));
  return toReturn;
}
;
_.size_1 = function size_13(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Set).size_1();
  valueOf_1(toReturn);
  return toReturn;
}
;
_.toArray = function toArray_4(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Set).toArray();
  return toReturn;
}
;
_.toString$ = function toString_46(){
  return dynamicCast($getWrapped(this.this$0), Q$Set).toString$();
}
;
_.this$0 = null;
function ArithmeticException_0(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineSeed(1546, 97, makeCastMap([Q$Serializable, Q$RuntimeException, Q$Throwable]), ArithmeticException_0);
function ArrayIndexOutOfBoundsException_0(index){
  $fillInStackTrace();
  this.detailMessage = 'Array index ' + index + ' out of range';
}

defineSeed(1547, 1548, makeCastMap([Q$Serializable, Q$IndexOutOfBoundsException, Q$RuntimeException, Q$Throwable]), ArrayIndexOutOfBoundsException_0);
function ArrayStoreException_1(message){
  RuntimeException_0.call(this, message);
}

defineSeed(1549, 97, makeCastMap([Q$Serializable, Q$RuntimeException, Q$Throwable]), ArrayStoreException_1);
function __parseAndValidateDouble(s){
  var floatRegex;
  if (!(floatRegex = floatRegex_0 , !floatRegex && (floatRegex = floatRegex_0 = /^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/) , floatRegex.test(s))) {
    throw new NumberFormatException_0('For input string: "' + s + '"');
  }
  return parseFloat(s);
}

function __parseAndValidateInt(s){
  var i, length_0, startIndex, toReturn;
  if (s == null) {
    throw new NumberFormatException_0('null');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && s.charCodeAt(0) == 45?1:0;
  for (i = startIndex; i < length_0; ++i) {
    if (digit(s.charCodeAt(i)) == -1) {
      throw new NumberFormatException_0('For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, 10);
  if (isNaN(toReturn)) {
    throw new NumberFormatException_0('For input string: "' + s + '"');
  }
   else if (toReturn < -2147483648 || toReturn > 2147483647) {
    throw new NumberFormatException_0('For input string: "' + s + '"');
  }
  return toReturn;
}

function __parseAndValidateLong(s){
  var c, firstTime, head, i, length_0, maxDigits, minValue, negative, orig, radixPower, toReturn;
  if (s == null) {
    throw new NumberFormatException_0('null');
  }
  orig = s;
  length_0 = s.length;
  negative = length_0 > 0 && s.charCodeAt(0) == 45;
  if (negative) {
    s = $substring(s, 1);
    --length_0;
  }
  if (length_0 == 0) {
    throw new NumberFormatException_0('For input string: "' + orig + '"');
  }
  while (s.length > 0 && s.charCodeAt(0) == 48) {
    s = $substring(s, 1);
    --length_0;
  }
  if (length_0 > ($clinit_Number$__ParseLong() , maxLengthForRadix)[10]) {
    throw new NumberFormatException_0('For input string: "' + orig + '"');
  }
  for (i = 0; i < length_0; ++i) {
    c = s.charCodeAt(i);
    if (c >= 48 && c < 58) {
      continue;
    }
    if (c >= 97 && c < 97) {
      continue;
    }
    if (c >= 65 && c < 65) {
      continue;
    }
    throw new NumberFormatException_0('For input string: "' + orig + '"');
  }
  toReturn = P0_longLit;
  maxDigits = maxDigitsForRadix[10];
  radixPower = fromInt(maxDigitsRadixPower[10]);
  minValue = neg(maxValueForRadix[10]);
  firstTime = true;
  head = length_0 % maxDigits;
  if (head > 0) {
    toReturn = fromInt(-__parseInt(s.substr(0, head - 0), 10));
    s = $substring(s, head);
    length_0 -= head;
    firstTime = false;
  }
  while (length_0 >= maxDigits) {
    head = __parseInt(s.substr(0, maxDigits - 0), 10);
    s = $substring(s, maxDigits);
    length_0 -= maxDigits;
    if (firstTime) {
      firstTime = false;
    }
     else {
      if (!gte_0(toReturn, minValue)) {
        throw new NumberFormatException_0(s);
      }
      toReturn = mul(toReturn, radixPower);
    }
    toReturn = sub(toReturn, fromInt(head));
  }
  if (gt(toReturn, P0_longLit)) {
    throw new NumberFormatException_0('For input string: "' + orig + '"');
  }
  if (!negative) {
    toReturn = neg(toReturn);
    if (lt(toReturn, P0_longLit)) {
      throw new NumberFormatException_0('For input string: "' + orig + '"');
    }
  }
  return toReturn;
}

function __parseInt(s, radix){
  return parseInt(s, radix);
}

var floatRegex_0 = null;
function Byte_0(value){
  this.value_0 = value;
}

function valueOf(b){
  var rebase, result;
  rebase = b + 128;
  result = ($clinit_Byte$BoxedValues() , boxedValues_0)[rebase];
  !result && (result = boxedValues_0[rebase] = new Byte_0(b));
  return result;
}

defineSeed(1551, 1552, makeCastMap([Q$Serializable, Q$Byte, Q$Comparable, Q$Number]), Byte_0);
_.equals$ = function equals_68(o){
  return instanceOf(o, Q$Byte) && dynamicCast(o, Q$Byte).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_68(){
  return this.value_0;
}
;
_.toString$ = function toString_48(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
function $clinit_Byte$BoxedValues(){
  $clinit_Byte$BoxedValues = nullMethod;
  boxedValues_0 = initDim(_3Ljava_lang_Byte_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Byte, 256, 0);
}

var boxedValues_0;
function Character_0(value){
  this.value_0 = value;
}

function digit(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function valueOf_0(c){
  var result;
  if (c < 128) {
    result = ($clinit_Character$BoxedValues() , boxedValues_1)[c];
    !result && (result = boxedValues_1[c] = new Character_0(c));
    return result;
  }
  return new Character_0(c);
}

defineSeed(1554, 1, makeCastMap([Q$Serializable, Q$Character, Q$Comparable]), Character_0);
_.equals$ = function equals_69(o){
  return instanceOf(o, Q$Character) && dynamicCast(o, Q$Character).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_69(){
  return this.value_0;
}
;
_.toString$ = function toString_49(){
  return valueOf_4(this.value_0);
}
;
_.value_0 = 0;
function $clinit_Character$BoxedValues(){
  $clinit_Character$BoxedValues = nullMethod;
  boxedValues_1 = initDim(_3Ljava_lang_Character_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Character, 128, 0);
}

var boxedValues_1;
function $getEnumConstants(this$static){
  return this$static.enumConstantsFunc && this$static.enumConstantsFunc();
}

function $clinit_Double(){
  $clinit_Double = nullMethod;
  powers = initValues(_3D_classLit, makeCastMap([Q$Serializable]), -1, [1.3407807929942597E154, 1.157920892373162E77, 3.4028236692093846E38, 1.8446744073709552E19, 4294967296, 65536, 256, 16, 4, 2]);
  invPowers = initValues(_3D_classLit, makeCastMap([Q$Serializable]), -1, [7.458340731200207E-155, 8.636168555094445E-78, 2.9387358770557188E-39, 5.421010862427522E-20, 2.3283064365386963E-10, 1.52587890625E-5, 0.00390625, 0.0625, 0.25, 0.5]);
}

function Double_0(value){
  $clinit_Double();
  this.value_0 = value;
}

function doubleToLongBits(value){
  $clinit_Double();
  var bit, exp, i, ihi, ilo, negative;
  if (isNaN_0(value)) {
    return P7ff8000000000000_longLit;
  }
  negative = false;
  if (value == 0) {
    return 1 / value == -Infinity?N8000000000000000_longLit:P0_longLit;
  }
  if (value < 0) {
    negative = true;
    value = -value;
  }
  if (!isFinite(value)) {
    return negative?N10000000000000_longLit:P7ff0000000000000_longLit;
  }
  exp = 0;
  if (value < 1) {
    bit = 512;
    for (i = 0; i < 10; ++i , bit >>= 1) {
      if (value < invPowers[i] && exp - bit >= -1023) {
        value *= powers[i];
        exp -= bit;
      }
    }
    if (value < 1 && exp - 1 >= -1023) {
      value *= 2;
      --exp;
    }
  }
   else if (value >= 2) {
    bit = 512;
    for (i = 0; i < 10; ++i , bit >>= 1) {
      if (value >= powers[i]) {
        value *= invPowers[i];
        exp += bit;
      }
    }
  }
  exp > -1023?(value -= 1):(value *= 0.5);
  ihi = fromDouble(value * 1048576);
  value -= toDouble(ihi) * 9.5367431640625E-7;
  ilo = fromDouble(value * 4503599627370496);
  ihi = or(ihi, fromInt(exp + 1023 << 20));
  negative && (ihi = or(ihi, P80000000_longLit));
  return or(shl(ihi, 32), ilo);
}

function isNaN_0(x){
  $clinit_Double();
  return isNaN(x);
}

defineSeed(1558, 1552, makeCastMap([Q$Serializable, Q$Comparable, Q$Double, Q$Number]), Double_0);
_.equals$ = function equals_70(o){
  return instanceOf(o, Q$Double) && dynamicCast(o, Q$Double).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_70(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_51(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var invPowers, powers;
function Float_0(value){
  this.value_0 = value;
}

defineSeed(1559, 1552, makeCastMap([Q$Serializable, Q$Comparable, Q$Float, Q$Number]), Float_0);
_.equals$ = function equals_71(o){
  return instanceOf(o, Q$Float) && dynamicCast(o, Q$Float).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_71(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_52(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
function IllegalArgumentException_0(){
  $fillInStackTrace();
}

defineSeed(1560, 97, makeCastMap([Q$Serializable, Q$RuntimeException, Q$Throwable]), IllegalArgumentException_0);
function numberOfLeadingZeros_0(i){
  var m_0, n, y;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y = -(i >> 16);
    m_0 = y >> 16 & 16;
    n = 16 - m_0;
    i = i >> m_0;
    y = i - 256;
    m_0 = y >> 16 & 8;
    n += m_0;
    i <<= m_0;
    y = i - 4096;
    m_0 = y >> 16 & 4;
    n += m_0;
    i <<= m_0;
    y = i - 16384;
    m_0 = y >> 16 & 2;
    n += m_0;
    i <<= m_0;
    y = i >> 14;
    m_0 = y & ~(y >> 1);
    return n + 2 - m_0;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function $equals_4(this$static, o){
  return instanceOf(o, Q$Long) && eq(dynamicCast(o, Q$Long).value_0, this$static.value_0);
}

function Long_0(value){
  this.value_0 = value;
}

function toPowerOfTwoString_0(value){
  var buf, digits, pos;
  buf = initDim(_3C_classLit, makeCastMap([Q$Serializable]), -1, 16, 1);
  digits = ($clinit_Number$__Digits() , digits_0);
  pos = 15;
  if (gte_0(value, P0_longLit)) {
    while (gt(value, Pf_longLit)) {
      buf[pos--] = digits[toInt(and(value, Pf_longLit))];
      value = shr(value, 4);
    }
  }
   else {
    while (pos > 0) {
      buf[pos--] = digits[toInt(and(value, Pf_longLit))];
      value = shr(value, 4);
    }
  }
  buf[pos] = digits[toInt(and(value, Pf_longLit))];
  return __valueOf(buf, pos, 16);
}

function valueOf_2(i){
  var rebase, result;
  if (gt(i, N81_longLit) && lt(i, P80_longLit)) {
    rebase = toInt(i) + 128;
    result = ($clinit_Long$BoxedValues() , boxedValues_3)[rebase];
    !result && (result = boxedValues_3[rebase] = new Long_0(i));
    return result;
  }
  return new Long_0(i);
}

defineSeed(1564, 1552, makeCastMap([Q$Serializable, Q$Comparable, Q$Long, Q$Number]), Long_0);
_.equals$ = function equals_73(o){
  return $equals_4(this, o);
}
;
_.hashCode$ = function hashCode_73(){
  return toInt(this.value_0);
}
;
_.toString$ = function toString_54(){
  return '' + toString_6(this.value_0);
}
;
_.value_0 = P0_longLit;
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = nullMethod;
  boxedValues_3 = initDim(_3Ljava_lang_Long_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Long, 256, 0);
}

var boxedValues_3;
function abs(x){
  return x <= 0?0 - x:x;
}

function pow(x, exp){
  return Math.pow(x, exp);
}

function round0(x){
  return Math.round(x);
}

function $clinit_Number$__ParseLong(){
  $clinit_Number$__ParseLong = nullMethod;
  var i;
  maxDigitsForRadix = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [-1, -1, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
  maxDigitsRadixPower = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 37, 1);
  maxLengthForRadix = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [-1, -1, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13]);
  maxValueForRadix = initDim(_3J_classLit, makeCastMap([Q$Serializable]), -1, 37, 3);
  for (i = 2; i <= 36; ++i) {
    maxDigitsRadixPower[i] = round_int(pow(i, maxDigitsForRadix[i]));
    maxValueForRadix[i] = div_0(P7fffffffffffffff_longLit, fromInt(maxDigitsRadixPower[i]));
  }
}

var maxDigitsForRadix, maxDigitsRadixPower, maxLengthForRadix, maxValueForRadix;
function NumberFormatException_0(message){
  IllegalArgumentException_1.call(this, message);
}

defineSeed(1570, 1560, makeCastMap([Q$Serializable, Q$NumberFormatException, Q$RuntimeException, Q$Throwable]), NumberFormatException_0);
function Short_0(value){
  this.value_0 = value;
}

function valueOf_3(s){
  var rebase, result;
  if (s > -129 && s < 128) {
    rebase = s + 128;
    result = ($clinit_Short$BoxedValues() , boxedValues_4)[rebase];
    !result && (result = boxedValues_4[rebase] = new Short_0(s));
    return result;
  }
  return new Short_0(s);
}

defineSeed(1571, 1552, makeCastMap([Q$Serializable, Q$Comparable, Q$Number, Q$Short]), Short_0);
_.equals$ = function equals_74(o){
  return instanceOf(o, Q$Short) && dynamicCast(o, Q$Short).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_74(){
  return this.value_0;
}
;
_.toString$ = function toString_55(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
function $clinit_Short$BoxedValues(){
  $clinit_Short$BoxedValues = nullMethod;
  boxedValues_4 = initDim(_3Ljava_lang_Short_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Short, 256, 0);
}

var boxedValues_4;
function $matches(this$static, regex){
  return (new RegExp('^(' + regex + ')$')).test(this$static);
}

function $replaceAll(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex, 'g'), replace);
}

function __checkBounds(legalCount, start, end){
  if (start < 0) {
    throw new StringIndexOutOfBoundsException_0(start);
  }
  if (end < start) {
    throw new StringIndexOutOfBoundsException_0(end - start);
  }
  if (end > legalCount) {
    throw new StringIndexOutOfBoundsException_0(end);
  }
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos - 0) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos - 0) + $substring(replaceStr, ++pos));
  }
  return replaceStr;
}

function valueOf_5(x, offset, count){
  var end;
  end = offset + count;
  __checkBounds(x.length, offset, end);
  return __valueOf(x, offset, end);
}

function $append_6(this$static, x){
  $appendNonNull(this$static.data, String.fromCharCode(x));
  return this$static;
}

function $append_7(this$static, x){
  $append(this$static.data, x);
  return this$static;
}

function $append_8(this$static, x){
  $append_0(this$static.data, x);
  return this$static;
}

function $append_9(this$static, x, start, end){
  x == null && (x = 'null');
  $appendNonNull(this$static.data, '' + x.substr(start, end - start));
  return this$static;
}

function $insert_2(this$static, index, x){
  return $replace(this$static.data, index, index, x) , this$static;
}

function StringBuilder_1(){
  $$init_24(this);
}

defineSeed(1576, 1, makeCastMap([Q$CharSequence]), StringBuilder_1);
function StringIndexOutOfBoundsException_0(index){
  Exception_0.call(this, 'String index out of range: ' + index);
}

defineSeed(1577, 1548, makeCastMap([Q$Serializable, Q$IndexOutOfBoundsException, Q$RuntimeException, Q$Throwable]), StringIndexOutOfBoundsException_0);
function arraycopy(src, srcOfs, dest, destOfs, len){
  var destArray, destComp, destEnd, destType, destlen, srcArray, srcComp, srcType, srclen;
  if (src == null || dest == null) {
    throw new NullPointerException_0;
  }
  srcType = src.___clazz$;
  destType = dest.___clazz$;
  if ((srcType.modifiers & 4) == 0 || (destType.modifiers & 4) == 0) {
    throw new ArrayStoreException_1('Must be array types');
  }
  srcComp = srcType.componentType;
  destComp = destType.componentType;
  if (!((srcComp.modifiers & 1) != 0?srcComp == destComp:(destComp.modifiers & 1) == 0)) {
    throw new ArrayStoreException_1('Array types must match');
  }
  srclen = src.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw new IndexOutOfBoundsException_0;
  }
  if (((srcComp.modifiers & 1) == 0 || (srcComp.modifiers & 4) != 0) && srcType != destType) {
    srcArray = dynamicCast(src, Q$Object_$1);
    destArray = dynamicCast(dest, Q$Object_$1);
    if (src === dest && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        setCheck(destArray, destEnd, srcArray[--srcOfs]);
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        setCheck(destArray, destOfs++, srcArray[srcOfs++]);
      }
    }
  }
   else {
    Array.prototype.splice.apply(dest, [destOfs, len].concat(src.slice(srcOfs, srcOfs + len)));
  }
}

function $clinit_BigDecimal(){
  $clinit_BigDecimal = nullMethod;
  var i, j;
  new BigDecimal_0(P1_longLit, 0);
  new BigDecimal_0(Pa_longLit, 0);
  new BigDecimal_0(P0_longLit, 0);
  BI_SCALED_BY_ZERO = initDim(_3Ljava_math_BigDecimal_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$BigDecimal, 11, 0);
  CH_ZEROS = initDim(_3C_classLit, makeCastMap([Q$Serializable]), -1, 100, 1);
  DOUBLE_FIVE_POW = initValues(_3D_classLit, makeCastMap([Q$Serializable]), -1, [1, 5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125, 9765625, 48828125, 244140625, 1220703125, 6103515625, 30517578125, 152587890625, 762939453125, 3814697265625, 19073486328125, 95367431640625, 476837158203125, 2384185791015625]);
  DOUBLE_FIVE_POW_BIT_LENGTH = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, DOUBLE_FIVE_POW.length, 1);
  DOUBLE_TEN_POW = initValues(_3D_classLit, makeCastMap([Q$Serializable]), -1, [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1000000000000, 10000000000000, 100000000000000, 1000000000000000, 10000000000000000]);
  DOUBLE_TEN_POW_BIT_LENGTH = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, DOUBLE_TEN_POW.length, 1);
  ZERO_SCALED_BY = initDim(_3Ljava_math_BigDecimal_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$BigDecimal, 11, 0);
  i = 0;
  for (; i < ZERO_SCALED_BY.length; ++i) {
    BI_SCALED_BY_ZERO[i] = new BigDecimal_0(fromInt(i), 0);
    ZERO_SCALED_BY[i] = new BigDecimal_0(P0_longLit, i);
    CH_ZEROS[i] = 48;
  }
  for (; i < CH_ZEROS.length; ++i) {
    CH_ZEROS[i] = 48;
  }
  for (j = 0; j < DOUBLE_FIVE_POW_BIT_LENGTH.length; ++j) {
    DOUBLE_FIVE_POW_BIT_LENGTH[j] = bitLength(DOUBLE_FIVE_POW[j]);
  }
  for (j = 0; j < DOUBLE_TEN_POW_BIT_LENGTH.length; ++j) {
    DOUBLE_TEN_POW_BIT_LENGTH[j] = bitLength(DOUBLE_TEN_POW[j]);
  }
  $clinit_Multiplication();
}

function $initFrom(this$static, val){
  var begin, ch, i, last, offset, scaleString, unscaled, unscaledBuffer;
  begin = 0;
  offset = 0;
  last = val.length;
  unscaledBuffer = new StringBuilder_1(val.length);
  if (0 < last && val.charCodeAt(0) == 43) {
    ++offset;
    ++begin;
    if (offset < last && (val.charCodeAt(offset) == 43 || val.charCodeAt(offset) == 45)) {
      throw new NumberFormatException_0('For input string: "' + val + '"');
    }
  }
  while (offset < last && val.charCodeAt(offset) != 46 && val.charCodeAt(offset) != 101 && val.charCodeAt(offset) != 69) {
    ++offset;
  }
  $append_9(unscaledBuffer, val, begin, offset);
  if (offset < last && val.charCodeAt(offset) == 46) {
    ++offset;
    begin = offset;
    while (offset < last && val.charCodeAt(offset) != 101 && val.charCodeAt(offset) != 69) {
      ++offset;
    }
    this$static.scale = offset - begin;
    $append_9(unscaledBuffer, val, begin, offset);
  }
   else {
    this$static.scale = 0;
  }
  if (offset < last && (val.charCodeAt(offset) == 101 || val.charCodeAt(offset) == 69)) {
    ++offset;
    begin = offset;
    if (offset < last && val.charCodeAt(offset) == 43) {
      ++offset;
      offset < last && val.charCodeAt(offset) != 45 && ++begin;
    }
    scaleString = val.substr(begin, last - begin);
    this$static.scale = this$static.scale - __parseAndValidateInt(scaleString);
    if (this$static.scale != round_int(this$static.scale)) {
      throw new NumberFormatException_0('Scale out of range.');
    }
  }
  unscaled = $toString_0(unscaledBuffer.data);
  if (unscaled.length < 16) {
    this$static.smallValue = parseUnscaled(unscaled);
    if (isNaN_0(this$static.smallValue)) {
      throw new NumberFormatException_0('For input string: "' + val + '"');
    }
    this$static.bitLength = bitLength(this$static.smallValue);
  }
   else {
    $setUnscaledValue(this$static, new BigInteger_4(unscaled));
  }
  this$static.precision = $toString_0(unscaledBuffer.data).length;
  for (i = 0; i < $toString_0(unscaledBuffer.data).length; ++i) {
    ch = $charAt($toString_0(unscaledBuffer.data), i);
    if (ch != 45 && ch != 48) {
      break;
    }
    --this$static.precision;
  }
  this$static.precision == 0 && (this$static.precision = 1);
}

function $setUnscaledValue(this$static, unscaledValue){
  var value;
  this$static.intVal = unscaledValue;
  this$static.bitLength = bitLength_1(unscaledValue);
  this$static.bitLength < 54 && (this$static.smallValue = toDouble((value = unscaledValue.numberLength > 1?or(shl(fromInt(unscaledValue.digits[1]), 32), and(fromInt(unscaledValue.digits[0]), Pffffffff_longLit)):and(fromInt(unscaledValue.digits[0]), Pffffffff_longLit) , mul(fromInt(unscaledValue.sign), value))));
}

function $toString_3(this$static){
  var begin, end, exponent, intString, result;
  if (this$static.toStringImage != null) {
    return this$static.toStringImage;
  }
  if (this$static.bitLength < 32) {
    this$static.toStringImage = toDecimalScaledString(fromDouble(this$static.smallValue), round_int(this$static.scale));
    return this$static.toStringImage;
  }
  intString = toDecimalScaledString_0((!this$static.intVal && (this$static.intVal = valueOf_6(this$static.smallValue)) , this$static.intVal), 0);
  if (this$static.scale == 0) {
    return intString;
  }
  begin = (!this$static.intVal && (this$static.intVal = valueOf_6(this$static.smallValue)) , this$static.intVal).sign < 0?2:1;
  end = intString.length;
  exponent = -this$static.scale + end - begin;
  result = new StringBuilder_0;
  $append_1(result.data, intString);
  if (this$static.scale > 0 && exponent >= -6) {
    if (exponent >= 0) {
      $insert_2(result, end - round_int(this$static.scale), '.');
    }
     else {
      $replace(result.data, begin - 1, begin - 1, '0.');
      $insert_2(result, begin + 1, valueOf_5(CH_ZEROS, 0, -round_int(exponent) - 1));
    }
  }
   else {
    if (end - begin >= 1) {
      $replace(result.data, begin, begin, '.');
      ++end;
    }
    $replace(result.data, end, end, 'E');
    exponent > 0 && $insert_2(result, ++end, '+');
    $insert_2(result, ++end, '' + toString_6(fromDouble(exponent)));
  }
  this$static.toStringImage = $toString_0(result.data);
  return this$static.toStringImage;
}

function BigDecimal_0(smallValue, scale){
  this.scale = scale;
  this.bitLength = bitLength_0(smallValue);
  this.bitLength < 54?(this.smallValue = toDouble(smallValue)):(this.intVal = valueOf_7(smallValue));
}

function BigDecimal_1(val){
  $clinit_BigDecimal();
  $initFrom(this, val);
}

function bitLength(value){
  var negative, result;
  if (value > -140737488355328 && value < 140737488355328) {
    if (value == 0) {
      return 0;
    }
    negative = value < 0;
    negative && (value = -value);
    result = round_int(floor(Math.log(value) / 0.6931471805599453));
    (!negative || value != Math.pow(2, result)) && ++result;
    return result;
  }
  return bitLength_0(fromDouble(value));
}

function bitLength_0(value){
  var high;
  lt(value, P0_longLit) && (value = create0(~value.l & 4194303, ~value.m & 4194303, ~value.h & 1048575));
  return 64 - (high = toInt(shr(value, 32)) , high != 0?numberOfLeadingZeros_0(high):numberOfLeadingZeros_0(toInt(value)) + 32);
}

function parseUnscaled(str){
  var unscaledRegex = unscaledRegex_0;
  !unscaledRegex && (unscaledRegex = unscaledRegex_0 = /^[+-]?\d*$/i);
  if (unscaledRegex.test(str)) {
    return parseInt(str, 10);
  }
   else {
    return Number.NaN;
  }
}

defineSeed(1580, 1552, makeCastMap([Q$Serializable, Q$Comparable, Q$Number, Q$BigDecimal]), BigDecimal_0, BigDecimal_1);
_.equals$ = function equals_76(x){
  var x1;
  if (this === x) {
    return true;
  }
  if (instanceOf(x, Q$BigDecimal)) {
    x1 = dynamicCast(x, Q$BigDecimal);
    return x1.scale == this.scale && (this.bitLength < 54?x1.smallValue == this.smallValue:$equals_6(this.intVal, x1.intVal));
  }
  return false;
}
;
_.hashCode$ = function hashCode_76(){
  var longValue;
  if (this.hashCode != 0) {
    return this.hashCode;
  }
  if (this.bitLength < 54) {
    longValue = fromDouble(this.smallValue);
    this.hashCode = toInt(and(longValue, N1_longLit));
    this.hashCode = 33 * this.hashCode + toInt(and(shr(longValue, 32), N1_longLit));
    this.hashCode = 17 * this.hashCode + round_int(this.scale);
    return this.hashCode;
  }
  this.hashCode = 17 * $hashCode_1(this.intVal) + round_int(this.scale);
  return this.hashCode;
}
;
_.toString$ = function toString_59(){
  return $toString_3(this);
}
;
_.bitLength = 0;
_.hashCode = 0;
_.intVal = null;
_.precision = 0;
_.scale = 0;
_.smallValue = 0;
_.toStringImage = null;
var BI_SCALED_BY_ZERO, CH_ZEROS, DOUBLE_FIVE_POW, DOUBLE_FIVE_POW_BIT_LENGTH, DOUBLE_TEN_POW, DOUBLE_TEN_POW_BIT_LENGTH, ZERO_SCALED_BY, unscaledRegex_0 = null;
function $clinit_BigInteger(){
  $clinit_BigInteger = nullMethod;
  var i;
  ONE_0 = new BigInteger_1(1, 1);
  TEN = new BigInteger_1(1, 10);
  ZERO_0 = new BigInteger_1(0, 0);
  MINUS_ONE = new BigInteger_1(-1, 1);
  SMALL_VALUES = initValues(_3Ljava_math_BigInteger_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$BigInteger, [ZERO_0, ONE_0, new BigInteger_1(1, 2), new BigInteger_1(1, 3), new BigInteger_1(1, 4), new BigInteger_1(1, 5), new BigInteger_1(1, 6), new BigInteger_1(1, 7), new BigInteger_1(1, 8), new BigInteger_1(1, 9), TEN]);
  TWO_POWS = initDim(_3Ljava_math_BigInteger_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$BigInteger, 32, 0);
  for (i = 0; i < TWO_POWS.length; ++i) {
    TWO_POWS[i] = valueOf_7(shl(P1_longLit, i));
  }
}

function $cutOffLeadingZeroes(this$static){
  while (this$static.numberLength > 0 && this$static.digits[--this$static.numberLength] == 0) {
  }
  this$static.digits[this$static.numberLength++] == 0 && (this$static.sign = 0);
}

function $equals_6(this$static, x){
  var x1;
  if (this$static === x) {
    return true;
  }
  if (instanceOf(x, Q$BigInteger)) {
    x1 = dynamicCast(x, Q$BigInteger);
    return this$static.sign == x1.sign && this$static.numberLength == x1.numberLength && $equalsArrays(this$static, x1.digits);
  }
  return false;
}

function $equalsArrays(this$static, b){
  var i;
  for (i = this$static.numberLength - 1; i >= 0 && this$static.digits[i] == b[i]; --i) {
  }
  return i < 0;
}

function $getFirstNonzeroDigit(this$static){
  var i;
  if (this$static.firstNonzeroDigit == -2) {
    if (this$static.sign == 0) {
      i = -1;
    }
     else {
      for (i = 0; this$static.digits[i] == 0; ++i) {
      }
    }
    this$static.firstNonzeroDigit = i;
  }
  return this$static.firstNonzeroDigit;
}

function $hashCode_1(this$static){
  var i;
  if (this$static.hashCode != 0) {
    return this$static.hashCode;
  }
  for (i = 0; i < this$static.digits.length; ++i) {
    this$static.hashCode = this$static.hashCode * 33 + (this$static.digits[i] & -1);
  }
  this$static.hashCode = this$static.hashCode * this$static.sign;
  return this$static.hashCode;
}

function $multiply(this$static, val){
  if (val.sign == 0) {
    return ZERO_0;
  }
  if (this$static.sign == 0) {
    return ZERO_0;
  }
  return $clinit_Multiplication() , karatsuba(this$static, val);
}

function $shiftLeft(this$static, n){
  if (n == 0 || this$static.sign == 0) {
    return this$static;
  }
  return n > 0?shiftLeft(this$static, n):shiftRight(this$static, -n);
}

function $shiftRight(this$static, n){
  if (n == 0 || this$static.sign == 0) {
    return this$static;
  }
  return n > 0?shiftRight(this$static, n):shiftLeft(this$static, -n);
}

function BigInteger_0(sign, val){
  this.sign = sign;
  if (val < 4294967296) {
    this.numberLength = 1;
    this.digits = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [~~val]);
  }
   else {
    this.numberLength = 2;
    this.digits = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [~~(val % 4294967296), ~~(val / 4294967296)]);
  }
}

function BigInteger_1(sign, value){
  $clinit_BigInteger();
  this.sign = sign;
  this.numberLength = 1;
  this.digits = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [value]);
}

function BigInteger_2(sign, numberLength, digits){
  $clinit_BigInteger();
  this.sign = sign;
  this.numberLength = numberLength;
  this.digits = digits;
}

function BigInteger_3(sign, val){
  this.sign = sign;
  if (eq(and(val, N100000000_longLit), P0_longLit)) {
    this.numberLength = 1;
    this.digits = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [toInt(val)]);
  }
   else {
    this.numberLength = 2;
    this.digits = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [toInt(val), toInt(shr(val, 32))]);
  }
}

function BigInteger_4(val){
  $clinit_BigInteger();
  BigInteger_5.call(this, val);
}

function BigInteger_5(val){
  if (val == null) {
    throw new NullPointerException_0;
  }
  if (val.length == 0) {
    throw new NumberFormatException_0('Zero length BigInteger');
  }
  setFromString(this, val);
}

function setFromString(bi, val){
  var bigRadix, bigRadixDigit, bigRadixDigitsLength, charsPerInt, digitIndex, digits, endChar, newDigit, sign, startChar, stringLength, substrEnd, substrStart, topChars;
  stringLength = val.length;
  endChar = stringLength;
  if (val.charCodeAt(0) == 45) {
    sign = -1;
    startChar = 1;
    --stringLength;
  }
   else {
    sign = 1;
    startChar = 0;
  }
  charsPerInt = ($clinit_Conversion() , digitFitInInt)[10];
  bigRadixDigitsLength = ~~(stringLength / charsPerInt);
  topChars = stringLength % charsPerInt;
  topChars != 0 && ++bigRadixDigitsLength;
  digits = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, bigRadixDigitsLength, 1);
  bigRadix = bigRadices[8];
  digitIndex = 0;
  substrEnd = startChar + (topChars == 0?charsPerInt:topChars);
  for (substrStart = startChar; substrStart < endChar; substrStart = substrEnd , substrEnd = substrEnd + charsPerInt) {
    bigRadixDigit = __parseAndValidateInt(val.substr(substrStart, substrEnd - substrStart));
    newDigit = ($clinit_Multiplication() , multiplyByInt(digits, digits, digitIndex, bigRadix));
    newDigit += inplaceAdd(digits, digitIndex, bigRadixDigit);
    digits[digitIndex++] = newDigit;
  }
  bi.sign = sign;
  bi.numberLength = digitIndex;
  bi.digits = digits;
  $cutOffLeadingZeroes(bi);
}

function valueOf_6(val){
  $clinit_BigInteger();
  if (val < 0) {
    if (val != -1) {
      return new BigInteger_0(-1, -val);
    }
    return MINUS_ONE;
  }
   else 
    return val <= 10?SMALL_VALUES[round_int(val)]:new BigInteger_0(1, val);
}

function valueOf_7(val){
  $clinit_BigInteger();
  if (lt(val, P0_longLit)) {
    if (neq(val, N1_longLit)) {
      return new BigInteger_3(-1, neg(val));
    }
    return MINUS_ONE;
  }
   else 
    return lte(val, Pa_longLit)?SMALL_VALUES[toInt(val)]:new BigInteger_3(1, val);
}

defineSeed(1581, 1552, makeCastMap([Q$Serializable, Q$Comparable, Q$Number, Q$BigInteger]), BigInteger_0, BigInteger_1, BigInteger_2, BigInteger_3, BigInteger_4);
_.equals$ = function equals_77(x){
  return $equals_6(this, x);
}
;
_.hashCode$ = function hashCode_77(){
  return $hashCode_1(this);
}
;
_.toString$ = function toString_60(){
  return toDecimalScaledString_0(this, 0);
}
;
_.digits = null;
_.firstNonzeroDigit = -2;
_.hashCode = 0;
_.numberLength = 0;
_.sign = 0;
var MINUS_ONE, ONE_0, SMALL_VALUES, TEN, TWO_POWS = null, ZERO_0;
function bitLength_1(val){
  var bLength, highDigit, i;
  if (val.sign == 0) {
    return 0;
  }
  bLength = val.numberLength << 5;
  highDigit = val.digits[val.numberLength - 1];
  if (val.sign < 0) {
    i = $getFirstNonzeroDigit(val);
    i == val.numberLength - 1 && (highDigit = ~~(highDigit - 1));
  }
  bLength -= numberOfLeadingZeros_0(highDigit);
  return bLength;
}

function shiftLeft(source, count){
  var intCount, resDigits, resLength, result;
  intCount = count >> 5;
  count &= 31;
  resLength = source.numberLength + intCount + (count == 0?0:1);
  resDigits = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, resLength, 1);
  shiftLeft_0(resDigits, source.digits, intCount, count);
  result = new BigInteger_2(source.sign, resLength, resDigits);
  $cutOffLeadingZeroes(result);
  return result;
}

function shiftLeft_0(result, source, intCount, count){
  var i, rightShiftCount;
  if (count == 0) {
    arraycopy(source, 0, result, intCount, result.length - intCount);
  }
   else {
    rightShiftCount = 32 - count;
    result[result.length - 1] = 0;
    for (i = result.length - 1; i > intCount; --i) {
      result[i] |= source[i - intCount - 1] >>> rightShiftCount;
      result[i - 1] = source[i - intCount - 1] << count;
    }
  }
  for (i = 0; i < intCount; ++i) {
    result[i] = 0;
  }
}

function shiftLeftOneBit(result, source, srcLen){
  var carry, i, val;
  carry = 0;
  for (i = 0; i < srcLen; ++i) {
    val = source[i];
    result[i] = val << 1 | carry;
    carry = val >>> 31;
  }
  carry != 0 && (result[srcLen] = carry);
}

function shiftRight(source, count){
  var i, intCount, resDigits, resLength, result;
  intCount = count >> 5;
  count &= 31;
  if (intCount >= source.numberLength) {
    return source.sign < 0?($clinit_BigInteger() , MINUS_ONE):($clinit_BigInteger() , ZERO_0);
  }
  resLength = source.numberLength - intCount;
  resDigits = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, resLength + 1, 1);
  shiftRight_0(resDigits, resLength, source.digits, intCount, count);
  if (source.sign < 0) {
    for (i = 0; i < intCount && source.digits[i] == 0; ++i) {
    }
    if (i < intCount || count > 0 && source.digits[i] << 32 - count != 0) {
      for (i = 0; i < resLength && resDigits[i] == -1; ++i) {
        resDigits[i] = 0;
      }
      i == resLength && ++resLength;
      ++resDigits[i];
    }
  }
  result = new BigInteger_2(source.sign, resLength, resDigits);
  $cutOffLeadingZeroes(result);
  return result;
}

function shiftRight_0(result, resultLen, source, intCount, count){
  var allZero, i, leftShiftCount;
  allZero = true;
  for (i = 0; i < intCount; ++i) {
    allZero = allZero & source[i] == 0;
  }
  if (count == 0) {
    arraycopy(source, intCount, result, 0, resultLen);
  }
   else {
    leftShiftCount = 32 - count;
    allZero = allZero & source[i] << leftShiftCount == 0;
    for (i = 0; i < resultLen - 1; ++i) {
      result[i] = source[i + intCount] >>> count | source[i + intCount + 1] << leftShiftCount;
    }
    result[i] = source[i + intCount] >>> count;
    ++i;
  }
  return allZero;
}

function $clinit_Conversion(){
  $clinit_Conversion = nullMethod;
  bigRadices = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [-2147483648, 1162261467, 1073741824, 1220703125, 362797056, 1977326743, 1073741824, 387420489, 1000000000, 214358881, 429981696, 815730721, 1475789056, 170859375, 268435456, 410338673, 612220032, 893871739, 1280000000, 1801088541, 113379904, 148035889, 191102976, 244140625, 308915776, 387420489, 481890304, 594823321, 729000000, 887503681, 1073741824, 1291467969, 1544804416, 1838265625, 60466176]);
  digitFitInInt = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [-1, -1, 31, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
}

function divideLongByBillion(a){
  var aPos, quot, rem;
  if (gte_0(a, P0_longLit)) {
    quot = div_0(a, P3b9aca00_longLit);
    rem = mod(a, P3b9aca00_longLit);
  }
   else {
    aPos = shru(a, 1);
    quot = div_0(aPos, P1dcd6500_longLit);
    rem = mod(aPos, P1dcd6500_longLit);
    rem = add_0(shl(rem, 1), and(a, P1_longLit));
  }
  return or(shl(rem, 32), and(quot, Pffffffff_longLit));
}

function toDecimalScaledString(value, scale){
  $clinit_Conversion();
  var currentChar, exponent, insertPoint, j, negNumber, prev, result, result1, startPoint, v;
  negNumber = lt(value, P0_longLit);
  negNumber && (value = neg(value));
  if (eq(value, P0_longLit)) {
    switch (scale) {
      case 0:
        return '0';
      case 1:
        return '0.0';
      case 2:
        return '0.00';
      case 3:
        return '0.000';
      case 4:
        return '0.0000';
      case 5:
        return '0.00000';
      case 6:
        return '0.000000';
      default:result1 = new StringBuilder_0;
        scale < 0?($append_1(result1.data, '0E+') , result1):($append_1(result1.data, '0E') , result1);
        $append_1(result1.data, scale == -2147483648?'2147483648':'' + -scale);
        return $toString_0(result1.data);
    }
  }
  result = initDim(_3C_classLit, makeCastMap([Q$Serializable]), -1, 19, 1);
  currentChar = 18;
  v = value;
  do {
    prev = v;
    v = div_0(v, Pa_longLit);
    result[--currentChar] = toInt(add_0(P30_longLit, sub(prev, mul(v, Pa_longLit)))) & 65535;
  }
   while (neq(v, P0_longLit));
  exponent = sub(sub(sub(P12_longLit, fromInt(currentChar)), fromInt(scale)), P1_longLit);
  if (scale == 0) {
    negNumber && (result[--currentChar] = 45);
    return valueOf_5(result, currentChar, 18 - currentChar);
  }
  if (scale > 0 && gte_0(exponent, N6_longLit)) {
    if (gte_0(exponent, P0_longLit)) {
      insertPoint = currentChar + toInt(exponent);
      for (j = 17; j >= insertPoint; --j) {
        result[j + 1] = result[j];
      }
      result[++insertPoint] = 46;
      negNumber && (result[--currentChar] = 45);
      return valueOf_5(result, currentChar, 18 - currentChar + 1);
    }
    for (j = 2; lt(fromInt(j), add_0(neg(exponent), P1_longLit)); ++j) {
      result[--currentChar] = 48;
    }
    result[--currentChar] = 46;
    result[--currentChar] = 48;
    negNumber && (result[--currentChar] = 45);
    return valueOf_5(result, currentChar, 18 - currentChar);
  }
  startPoint = currentChar + 1;
  result1 = new StringBuilder_1;
  negNumber && ($appendNonNull(result1.data, '-') , result1);
  if (18 - startPoint >= 1) {
    $append_6(result1, result[currentChar]);
    $appendNonNull(result1.data, '.');
    $appendNonNull(result1.data, valueOf_5(result, currentChar + 1, 18 - currentChar - 1));
  }
   else {
    $appendNonNull(result1.data, valueOf_5(result, currentChar, 18 - currentChar));
  }
  $appendNonNull(result1.data, 'E');
  gt(exponent, P0_longLit) && ($appendNonNull(result1.data, '+') , result1);
  $append_1(result1.data, '' + toString_6(exponent));
  return $toString_0(result1.data);
}

function toDecimalScaledString_0(val, scale){
  $clinit_Conversion();
  var currentChar, delta, digits, exponent, highDigit, i, i1, insertPoint, j, negNumber, numberLength, prev, previous, res, resDigit, resLengthInChars, result, result1, result11, sign, startPoint, temp, temp1, tempLen, v;
  sign = val.sign;
  numberLength = val.numberLength;
  digits = val.digits;
  if (sign == 0) {
    switch (scale) {
      case 0:
        return '0';
      case 1:
        return '0.0';
      case 2:
        return '0.00';
      case 3:
        return '0.000';
      case 4:
        return '0.0000';
      case 5:
        return '0.00000';
      case 6:
        return '0.000000';
      default:result1 = new StringBuilder_0;
        scale < 0?($append_1(result1.data, '0E+') , result1):($append_1(result1.data, '0E') , result1);
        $append_0(result1.data, -scale);
        return $toString_0(result1.data);
    }
  }
  resLengthInChars = numberLength * 10 + 1 + 7;
  result = initDim(_3C_classLit, makeCastMap([Q$Serializable]), -1, resLengthInChars + 1, 1);
  currentChar = resLengthInChars;
  if (numberLength == 1) {
    highDigit = digits[0];
    if (highDigit < 0) {
      v = and(fromInt(highDigit), Pffffffff_longLit);
      do {
        prev = v;
        v = div_0(v, Pa_longLit);
        result[--currentChar] = 48 + toInt(sub(prev, mul(v, Pa_longLit))) & 65535;
      }
       while (neq(v, P0_longLit));
    }
     else {
      v = highDigit;
      do {
        prev = v;
        v = ~~(v / 10);
        result[--currentChar] = 48 + (prev - v * 10) & 65535;
      }
       while (v != 0);
    }
  }
   else {
    temp = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, numberLength, 1);
    tempLen = numberLength;
    arraycopy(digits, 0, temp, 0, numberLength);
    BIG_LOOP: while (true) {
      result11 = P0_longLit;
      for (i1 = tempLen - 1; i1 >= 0; --i1) {
        temp1 = add_0(shl(result11, 32), and(fromInt(temp[i1]), Pffffffff_longLit));
        res = divideLongByBillion(temp1);
        temp[i1] = toInt(res);
        result11 = fromInt(toInt(shr(res, 32)));
      }
      resDigit = toInt(result11);
      previous = currentChar;
      do {
        result[--currentChar] = 48 + resDigit % 10 & 65535;
      }
       while ((resDigit = ~~(resDigit / 10)) != 0 && currentChar != 0);
      delta = 9 - previous + currentChar;
      for (i = 0; i < delta && currentChar > 0; ++i) {
        result[--currentChar] = 48;
      }
      j = tempLen - 1;
      for (; temp[j] == 0; --j) {
        if (j == 0) {
          break BIG_LOOP;
        }
      }
      tempLen = j + 1;
    }
    while (result[currentChar] == 48) {
      ++currentChar;
    }
  }
  negNumber = sign < 0;
  exponent = resLengthInChars - currentChar - scale - 1;
  if (scale == 0) {
    negNumber && (result[--currentChar] = 45);
    return valueOf_5(result, currentChar, resLengthInChars - currentChar);
  }
  if (scale > 0 && exponent >= -6) {
    if (exponent >= 0) {
      insertPoint = currentChar + exponent;
      for (j = resLengthInChars - 1; j >= insertPoint; --j) {
        result[j + 1] = result[j];
      }
      result[++insertPoint] = 46;
      negNumber && (result[--currentChar] = 45);
      return valueOf_5(result, currentChar, resLengthInChars - currentChar + 1);
    }
    for (j = 2; j < -exponent + 1; ++j) {
      result[--currentChar] = 48;
    }
    result[--currentChar] = 46;
    result[--currentChar] = 48;
    negNumber && (result[--currentChar] = 45);
    return valueOf_5(result, currentChar, resLengthInChars - currentChar);
  }
  startPoint = currentChar + 1;
  result1 = new StringBuilder_1;
  negNumber && ($appendNonNull(result1.data, '-') , result1);
  if (resLengthInChars - startPoint >= 1) {
    $append_6(result1, result[currentChar]);
    $appendNonNull(result1.data, '.');
    $appendNonNull(result1.data, valueOf_5(result, currentChar + 1, resLengthInChars - currentChar - 1));
  }
   else {
    $appendNonNull(result1.data, valueOf_5(result, currentChar, resLengthInChars - currentChar));
  }
  $appendNonNull(result1.data, 'E');
  exponent > 0 && ($appendNonNull(result1.data, '+') , result1);
  $append_1(result1.data, '' + exponent);
  return $toString_0(result1.data);
}

var bigRadices, digitFitInInt;
function add_12(op1, op2){
  var a, b, cmp, op1Len, op1Sign, op2Len, op2Sign, res, resDigits, resSign, valueHi, valueLo;
  op1Sign = op1.sign;
  op2Sign = op2.sign;
  if (op1Sign == 0) {
    return op2;
  }
  if (op2Sign == 0) {
    return op1;
  }
  op1Len = op1.numberLength;
  op2Len = op2.numberLength;
  if (op1Len + op2Len == 2) {
    a = and(fromInt(op1.digits[0]), Pffffffff_longLit);
    b = and(fromInt(op2.digits[0]), Pffffffff_longLit);
    if (op1Sign == op2Sign) {
      res = add_0(a, b);
      valueLo = toInt(res);
      valueHi = toInt(shru(res, 32));
      return valueHi == 0?new BigInteger_1(op1Sign, valueLo):new BigInteger_2(op1Sign, 2, initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [valueLo, valueHi]));
    }
    return valueOf_7(op1Sign < 0?sub(b, a):sub(a, b));
  }
   else if (op1Sign == op2Sign) {
    resSign = op1Sign;
    resDigits = op1Len >= op2Len?add_13(op1.digits, op1Len, op2.digits, op2Len):add_13(op2.digits, op2Len, op1.digits, op1Len);
  }
   else {
    cmp = op1Len != op2Len?op1Len > op2Len?1:-1:compareArrays(op1.digits, op2.digits, op1Len);
    if (cmp == 0) {
      return $clinit_BigInteger() , ZERO_0;
    }
    if (cmp == 1) {
      resSign = op1Sign;
      resDigits = subtract_0(op1.digits, op1Len, op2.digits, op2Len);
    }
     else {
      resSign = op2Sign;
      resDigits = subtract_0(op2.digits, op2Len, op1.digits, op1Len);
    }
  }
  res = new BigInteger_2(resSign, resDigits.length, resDigits);
  $cutOffLeadingZeroes(res);
  return res;
}

function add_13(a, aSize, b, bSize){
  var res;
  res = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, aSize + 1, 1);
  add_14(res, a, aSize, b, bSize);
  return res;
}

function add_14(res, a, aSize, b, bSize){
  var carry, i;
  carry = add_0(and(fromInt(a[0]), Pffffffff_longLit), and(fromInt(b[0]), Pffffffff_longLit));
  res[0] = toInt(carry);
  carry = shr(carry, 32);
  if (aSize >= bSize) {
    for (i = 1; i < bSize; ++i) {
      carry = add_0(carry, add_0(and(fromInt(a[i]), Pffffffff_longLit), and(fromInt(b[i]), Pffffffff_longLit)));
      res[i] = toInt(carry);
      carry = shr(carry, 32);
    }
    for (; i < aSize; ++i) {
      carry = add_0(carry, and(fromInt(a[i]), Pffffffff_longLit));
      res[i] = toInt(carry);
      carry = shr(carry, 32);
    }
  }
   else {
    for (i = 1; i < aSize; ++i) {
      carry = add_0(carry, add_0(and(fromInt(a[i]), Pffffffff_longLit), and(fromInt(b[i]), Pffffffff_longLit)));
      res[i] = toInt(carry);
      carry = shr(carry, 32);
    }
    for (; i < bSize; ++i) {
      carry = add_0(carry, and(fromInt(b[i]), Pffffffff_longLit));
      res[i] = toInt(carry);
      carry = shr(carry, 32);
    }
  }
  neq(carry, P0_longLit) && (res[i] = toInt(carry));
}

function compareArrays(a, b, size){
  var i;
  for (i = size - 1; i >= 0 && a[i] == b[i]; --i) {
  }
  return i < 0?0:lt(and(fromInt(a[i]), Pffffffff_longLit), and(fromInt(b[i]), Pffffffff_longLit))?-1:1;
}

function inplaceAdd(a, aSize, addend){
  var carry, i;
  carry = and(fromInt(addend), Pffffffff_longLit);
  for (i = 0; neq(carry, P0_longLit) && i < aSize; ++i) {
    carry = add_0(carry, and(fromInt(a[i]), Pffffffff_longLit));
    a[i] = toInt(carry);
    carry = shr(carry, 32);
  }
  return toInt(carry);
}

function subtract(op1, op2){
  var a, b, cmp, op1Len, op1Sign, op2Len, op2Sign, res, resDigits, resSign;
  op1Sign = op1.sign;
  op2Sign = op2.sign;
  if (op2Sign == 0) {
    return op1;
  }
  if (op1Sign == 0) {
    return op2.sign == 0?op2:new BigInteger_2(-op2.sign, op2.numberLength, op2.digits);
  }
  op1Len = op1.numberLength;
  op2Len = op2.numberLength;
  if (op1Len + op2Len == 2) {
    a = and(fromInt(op1.digits[0]), Pffffffff_longLit);
    b = and(fromInt(op2.digits[0]), Pffffffff_longLit);
    op1Sign < 0 && (a = neg(a));
    op2Sign < 0 && (b = neg(b));
    return valueOf_7(sub(a, b));
  }
  cmp = op1Len != op2Len?op1Len > op2Len?1:-1:compareArrays(op1.digits, op2.digits, op1Len);
  if (cmp == -1) {
    resSign = -op2Sign;
    resDigits = op1Sign == op2Sign?subtract_0(op2.digits, op2Len, op1.digits, op1Len):add_13(op2.digits, op2Len, op1.digits, op1Len);
  }
   else {
    resSign = op1Sign;
    if (op1Sign == op2Sign) {
      if (cmp == 0) {
        return $clinit_BigInteger() , ZERO_0;
      }
      resDigits = subtract_0(op1.digits, op1Len, op2.digits, op2Len);
    }
     else {
      resDigits = add_13(op1.digits, op1Len, op2.digits, op2Len);
    }
  }
  res = new BigInteger_2(resSign, resDigits.length, resDigits);
  $cutOffLeadingZeroes(res);
  return res;
}

function subtract_0(a, aSize, b, bSize){
  var res;
  res = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, aSize, 1);
  subtract_1(res, a, aSize, b, bSize);
  return res;
}

function subtract_1(res, a, aSize, b, bSize){
  var borrow, i;
  borrow = P0_longLit;
  for (i = 0; i < bSize; ++i) {
    borrow = add_0(borrow, sub(and(fromInt(a[i]), Pffffffff_longLit), and(fromInt(b[i]), Pffffffff_longLit)));
    res[i] = toInt(borrow);
    borrow = shr(borrow, 32);
  }
  for (; i < aSize; ++i) {
    borrow = add_0(borrow, and(fromInt(a[i]), Pffffffff_longLit));
    res[i] = toInt(borrow);
    borrow = shr(borrow, 32);
  }
}

function $clinit_Multiplication(){
  $clinit_Multiplication = nullMethod;
  var fivePow, i;
  bigFivePows = initDim(_3Ljava_math_BigInteger_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$BigInteger, 32, 0);
  bigTenPows = initDim(_3Ljava_math_BigInteger_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$BigInteger, 32, 0);
  fivePow = P1_longLit;
  for (i = 0; i <= 18; ++i) {
    bigFivePows[i] = valueOf_7(fivePow);
    bigTenPows[i] = valueOf_7(shl(fivePow, i));
    fivePow = mul(fivePow, P5_longLit);
  }
  for (; i < bigTenPows.length; ++i) {
    bigFivePows[i] = $multiply(bigFivePows[i - 1], bigFivePows[1]);
    bigTenPows[i] = $multiply(bigTenPows[i - 1], ($clinit_BigInteger() , TEN));
  }
}

function karatsuba(op1, op2){
  $clinit_Multiplication();
  var lower, lowerOp1, lowerOp2, middle, ndiv2, temp, upper, upperOp1, upperOp2;
  if (op2.numberLength > op1.numberLength) {
    temp = op1;
    op1 = op2;
    op2 = temp;
  }
  if (op2.numberLength < 63) {
    return multiplyPAP(op1, op2);
  }
  ndiv2 = (op1.numberLength & -2) << 4;
  upperOp1 = $shiftRight(op1, ndiv2);
  upperOp2 = $shiftRight(op2, ndiv2);
  lowerOp1 = subtract(op1, $shiftLeft(upperOp1, ndiv2));
  lowerOp2 = subtract(op2, $shiftLeft(upperOp2, ndiv2));
  upper = karatsuba(upperOp1, upperOp2);
  lower = karatsuba(lowerOp1, lowerOp2);
  middle = karatsuba(subtract(upperOp1, lowerOp1), subtract(lowerOp2, upperOp2));
  middle = add_12(add_12(middle, upper), lower);
  middle = $shiftLeft(middle, ndiv2);
  upper = $shiftLeft(upper, ndiv2 << 1);
  return add_12(add_12(upper, middle), lower);
}

function multArraysPAP(aDigits, aLen, bDigits, bLen, resDigits){
  if (aLen == 0 || bLen == 0) {
    return;
  }
  aLen == 1?(resDigits[bLen] = multiplyByInt(resDigits, bDigits, bLen, aDigits[0])):bLen == 1?(resDigits[aLen] = multiplyByInt(resDigits, aDigits, aLen, bDigits[0])):multPAP(aDigits, bDigits, resDigits, aLen, bLen);
}

function multPAP(a, b, t, aLen, bLen){
  var aI, carry, i, j;
  if (maskUndefined(a) === maskUndefined(b) && aLen == bLen) {
    square(a, aLen, t);
    return;
  }
  for (i = 0; i < aLen; ++i) {
    carry = P0_longLit;
    aI = a[i];
    for (j = 0; j < bLen; ++j) {
      carry = add_0(add_0(mul(and(fromInt(aI), Pffffffff_longLit), and(fromInt(b[j]), Pffffffff_longLit)), and(fromInt(t[i + j]), Pffffffff_longLit)), and(fromInt(toInt(carry)), Pffffffff_longLit));
      t[i + j] = toInt(carry);
      carry = shru(carry, 32);
    }
    t[i + bLen] = toInt(carry);
  }
}

function multiplyByInt(res, a, aSize, factor){
  $clinit_Multiplication();
  var carry, i;
  carry = P0_longLit;
  for (i = 0; i < aSize; ++i) {
    carry = add_0(mul(and(fromInt(a[i]), Pffffffff_longLit), and(fromInt(factor), Pffffffff_longLit)), and(fromInt(toInt(carry)), Pffffffff_longLit));
    res[i] = toInt(carry);
    carry = shru(carry, 32);
  }
  return toInt(carry);
}

function multiplyPAP(a, b){
  var aDigits, aLen, bDigits, bLen, resDigits, resLength, resSign, result, val, valueHi, valueLo;
  aLen = a.numberLength;
  bLen = b.numberLength;
  resLength = aLen + bLen;
  resSign = a.sign != b.sign?-1:1;
  if (resLength == 2) {
    val = mul(and(fromInt(a.digits[0]), Pffffffff_longLit), and(fromInt(b.digits[0]), Pffffffff_longLit));
    valueLo = toInt(val);
    valueHi = toInt(shru(val, 32));
    return valueHi == 0?new BigInteger_1(resSign, valueLo):new BigInteger_2(resSign, 2, initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [valueLo, valueHi]));
  }
  aDigits = a.digits;
  bDigits = b.digits;
  resDigits = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, resLength, 1);
  multArraysPAP(aDigits, aLen, bDigits, bLen, resDigits);
  result = new BigInteger_2(resSign, resLength, resDigits);
  $cutOffLeadingZeroes(result);
  return result;
}

function square(a, aLen, res){
  var carry, i, index, j;
  for (i = 0; i < aLen; ++i) {
    carry = P0_longLit;
    for (j = i + 1; j < aLen; ++j) {
      carry = add_0(add_0(mul(and(fromInt(a[i]), Pffffffff_longLit), and(fromInt(a[j]), Pffffffff_longLit)), and(fromInt(res[i + j]), Pffffffff_longLit)), and(fromInt(toInt(carry)), Pffffffff_longLit));
      res[i + j] = toInt(carry);
      carry = shru(carry, 32);
    }
    res[i + aLen] = toInt(carry);
  }
  shiftLeftOneBit(res, res, aLen << 1);
  carry = P0_longLit;
  for (i = 0 , index = 0; i < aLen; ++i , ++index) {
    carry = add_0(add_0(mul(and(fromInt(a[i]), Pffffffff_longLit), and(fromInt(a[i]), Pffffffff_longLit)), and(fromInt(res[index]), Pffffffff_longLit)), and(fromInt(toInt(carry)), Pffffffff_longLit));
    res[index] = toInt(carry);
    carry = shru(carry, 32);
    ++index;
    carry = add_0(carry, and(fromInt(res[index]), Pffffffff_longLit));
    res[index] = toInt(carry);
    carry = shru(carry, 32);
  }
  return res;
}

var bigFivePows, bigTenPows;
function $set_4(this$static, o){
  if (this$static.last == -1) {
    throw new IllegalStateException_0;
  }
  this$static.this$0.set(this$static.last, o);
}

function AbstractList$SubList_0(wrapped, fromIndex, toIndex){
  this.wrapped = wrapped;
  this.fromIndex = fromIndex;
  this.size_0 = toIndex - fromIndex;
  if (fromIndex > toIndex) {
    throw new IllegalArgumentException_1('fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
  }
  if (fromIndex < 0) {
    throw new IndexOutOfBoundsException_1('fromIndex: ' + fromIndex + ' < 0');
  }
  if (toIndex > wrapped.size_1()) {
    throw new IndexOutOfBoundsException_1('toIndex: ' + toIndex + ' > wrapped.size() ' + wrapped.size_1());
  }
}

defineSeed(1593, 619, makeCastMap([Q$Iterable, Q$Collection, Q$List]), AbstractList$SubList_0);
_.add_0 = function add_15(index, element){
  checkIndex(index, this.size_0 + 1);
  ++this.size_0;
  this.wrapped.add_0(this.fromIndex + index, element);
}
;
_.get_0 = function get_38(index){
  checkIndex(index, this.size_0);
  return this.wrapped.get_0(this.fromIndex + index);
}
;
_.remove_1 = function remove_38(index){
  var result;
  checkIndex(index, this.size_0);
  result = this.wrapped.remove_1(this.fromIndex + index);
  --this.size_0;
  return result;
}
;
_.set = function set_5(index, element){
  checkIndex(index, this.size_0);
  return this.wrapped.set(this.fromIndex + index, element);
}
;
_.size_1 = function size_15(){
  return this.size_0;
}
;
_.fromIndex = 0;
_.size_0 = 0;
_.wrapped = null;
defineSeed(1598, 619, makeCastMap([Q$Serializable, Q$Iterable, Q$Collection, Q$List]));
_.addAll = function addAll_0(c){
  return $addAll_0(this, c);
}
;
_.indexOf_0 = function indexOf_2(o){
  return $indexOf_3(this, o, 0);
}
;
_.set = function set_6(index, o){
  return $set_5(this, index, o);
}
;
function unmodifiableList(list){
  $clinit_Collections();
  return list?new Collections$UnmodifiableRandomAccessList_0(list):new Collections$UnmodifiableList_0(null);
}

function Collections$SingletonList_0(element){
  this.element = element;
}

defineSeed(1604, 619, makeCastMap([Q$Serializable, Q$Iterable, Q$Collection, Q$List]), Collections$SingletonList_0);
_.contains_0 = function contains_10(item){
  return equalsWithNullCheck(this.element, item);
}
;
_.get_0 = function get_42(index){
  if (index == 0) {
    return this.element;
  }
   else {
    throw new IndexOutOfBoundsException_0;
  }
}
;
_.size_1 = function size_22(){
  return 1;
}
;
_.element = null;
defineSeed(1605, 1, makeCastMap([Q$Iterable, Q$Collection]));
_.add_1 = function add_18(o){
  throw new UnsupportedOperationException_0;
}
;
_.clear_0 = function clear_5(){
  throw new UnsupportedOperationException_0;
}
;
_.contains_0 = function contains_11(o){
  return this.coll.contains_0(o);
}
;
_.isEmpty_0 = function isEmpty_9(){
  return this.coll.isEmpty_0();
}
;
_.iterator = function iterator_18(){
  return new Collections$UnmodifiableCollectionIterator_0(this.coll.iterator());
}
;
_.remove_2 = function remove_44(o){
  throw new UnsupportedOperationException_0;
}
;
_.size_1 = function size_23(){
  return this.coll.size_1();
}
;
_.toArray = function toArray_7(){
  return this.coll.toArray();
}
;
_.toString$ = function toString_62(){
  return this.coll.toString$();
}
;
_.coll = null;
function Collections$UnmodifiableCollectionIterator_0(it){
  this.it = it;
}

defineSeed(1606, 1, makeCastMap([Q$Iterator]), Collections$UnmodifiableCollectionIterator_0);
_.hasNext = function hasNext_14(){
  return this.it.hasNext();
}
;
_.next_0 = function next_15(){
  return this.it.next_0();
}
;
_.remove_0 = function remove_45(){
  throw new UnsupportedOperationException_0;
}
;
_.it = null;
function Collections$UnmodifiableList_0(list){
  this.coll = list;
  this.list = list;
}

defineSeed(1607, 1605, makeCastMap([Q$Iterable, Q$Collection, Q$List]), Collections$UnmodifiableList_0);
_.add_0 = function add_19(index, element){
  throw new UnsupportedOperationException_0;
}
;
_.equals$ = function equals_79(o){
  return this.list.equals$(o);
}
;
_.get_0 = function get_43(index){
  return this.list.get_0(index);
}
;
_.hashCode$ = function hashCode_79(){
  return this.list.hashCode$();
}
;
_.indexOf_0 = function indexOf_3(o){
  return this.list.indexOf_0(o);
}
;
_.isEmpty_0 = function isEmpty_10(){
  return this.list.isEmpty_0();
}
;
_.listIterator = function listIterator_5(){
  return new Collections$UnmodifiableListIterator_0(this.list.listIterator_0(0));
}
;
_.listIterator_0 = function listIterator_6(from){
  return new Collections$UnmodifiableListIterator_0(this.list.listIterator_0(from));
}
;
_.remove_1 = function remove_46(index){
  throw new UnsupportedOperationException_0;
}
;
_.set = function set_7(index, element){
  throw new UnsupportedOperationException_0;
}
;
_.subList = function subList_2(fromIndex, toIndex){
  return new Collections$UnmodifiableList_0(this.list.subList(fromIndex, toIndex));
}
;
_.list = null;
function Collections$UnmodifiableListIterator_0(lit){
  this.it = lit;
  this.lit = lit;
}

defineSeed(1608, 1606, makeCastMap([Q$Iterator, Q$ListIterator]), Collections$UnmodifiableListIterator_0);
_.hasPrevious = function hasPrevious_2(){
  return this.lit.hasPrevious();
}
;
_.previous = function previous_3(){
  return this.lit.previous();
}
;
_.lit = null;
function $get_9(this$static, key_0){
  return this$static.map.get_1(key_0);
}

function Collections$UnmodifiableMap_0(map){
  this.map = map;
}

defineSeed(1609, 1, makeCastMap([Q$Map]), Collections$UnmodifiableMap_0);
_.containsKey = function containsKey_6(key_0){
  return this.map.containsKey(key_0);
}
;
_.entrySet_0 = function entrySet_6(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet_0(this.map.entrySet_0()));
  return this.entrySet;
}
;
_.equals$ = function equals_80(o){
  return $equals_0(this.map, o);
}
;
_.get_1 = function get_44(key_0){
  return this.map.get_1(key_0);
}
;
_.hashCode$ = function hashCode_80(){
  return $hashCode_0(this.map);
}
;
_.isEmpty_0 = function isEmpty_11(){
  return this.map.size_1() == 0;
}
;
_.put = function put_5(key_0, value){
  throw new UnsupportedOperationException_0;
}
;
_.remove_3 = function remove_47(key_0){
  throw new UnsupportedOperationException_0;
}
;
_.size_1 = function size_24(){
  return this.map.size_1();
}
;
_.toString$ = function toString_63(){
  return $toString_2(this.map);
}
;
_.entrySet = null;
_.map = null;
function Collections$UnmodifiableSet_0(set){
  this.coll = set;
}

defineSeed(1611, 1605, makeCastMap([Q$Iterable, Q$Collection, Q$Set]), Collections$UnmodifiableSet_0);
_.equals$ = function equals_81(o){
  return this.coll.equals$(o);
}
;
_.hashCode$ = function hashCode_81(){
  return this.coll.hashCode$();
}
;
function $wrap(array, size){
  var i;
  for (i = 0; i < size; ++i) {
    setCheck(array, i, new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_0(dynamicCast(array[i], Q$Map$Entry)));
  }
}

function Collections$UnmodifiableMap$UnmodifiableEntrySet_0(s){
  this.coll = s;
}

defineSeed(1610, 1611, makeCastMap([Q$Iterable, Q$Collection, Q$Set]), Collections$UnmodifiableMap$UnmodifiableEntrySet_0);
_.contains_0 = function contains_12(o){
  return this.coll.contains_0(o);
}
;
_.iterator = function iterator_19(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1_0(it);
}
;
_.toArray = function toArray_8(){
  var array;
  array = this.coll.toArray();
  $wrap(array, array.length);
  return array;
}
;
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1_0(val$it){
  this.val$it = val$it;
}

defineSeed(1612, 1, makeCastMap([Q$Iterator]), Collections$UnmodifiableMap$UnmodifiableEntrySet$1_0);
_.hasNext = function hasNext_15(){
  return this.val$it.hasNext();
}
;
_.next_0 = function next_16(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_0(dynamicCast(this.val$it.next_0(), Q$Map$Entry));
}
;
_.remove_0 = function remove_48(){
  throw new UnsupportedOperationException_0;
}
;
_.val$it = null;
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_0(entry){
  this.entry = entry;
}

defineSeed(1613, 1, makeCastMap([Q$Map$Entry]), Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_0);
_.equals$ = function equals_82(o){
  return this.entry.equals$(o);
}
;
_.getKey = function getKey_4(){
  return this.entry.getKey();
}
;
_.getValue_0 = function getValue_73(){
  return this.entry.getValue_0();
}
;
_.hashCode$ = function hashCode_82(){
  return this.entry.hashCode$();
}
;
_.setValue = function setValue_4(value){
  throw new UnsupportedOperationException_0;
}
;
_.toString$ = function toString_64(){
  return this.entry.toString$();
}
;
_.entry = null;
function Collections$UnmodifiableRandomAccessList_0(list){
  Collections$UnmodifiableList_0.call(this, list);
}

defineSeed(1614, 1607, makeCastMap([Q$Iterable, Q$Collection, Q$List]), Collections$UnmodifiableRandomAccessList_0);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = nullMethod;
  DAYS = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function EmptyStackException_0(){
  $fillInStackTrace();
}

defineSeed(1616, 97, makeCastMap([Q$Serializable, Q$RuntimeException, Q$Throwable]), EmptyStackException_0);
function HashSet_1(){
  this.map = new HashMap_1;
}

function HashSet_2(map){
  this.map = map;
}

defineSeed(1617, 614, makeCastMap([Q$Serializable, Q$Iterable, Q$Collection, Q$Set]), HashSet_1);
function LinkedHashSet_0(){
  HashSet_2.call(this, new LinkedHashMap_1);
}

function LinkedHashSet_1(c){
  HashSet_2.call(this, new LinkedHashMap_1);
  $addAll(this, c);
}

defineSeed(1622, 1617, makeCastMap([Q$Serializable, Q$Iterable, Q$Collection, Q$Set]), LinkedHashSet_0, LinkedHashSet_1);
function $add_21(this$static, o){
  return $add_19(this$static.arrayList, o);
}

function $contains_2(this$static, elem){
  return $indexOf_3(this$static.arrayList, elem, 0) != -1;
}

defineSeed(1625, 619, makeCastMap([Q$Serializable, Q$Iterable, Q$Collection, Q$List]));
_.add_0 = function add_21(index, o){
  $add_18(this.arrayList, index, o);
}
;
_.add_1 = function add_22(o){
  return $add_19(this.arrayList, o);
}
;
_.addAll = function addAll_1(c){
  return $addAll_0(this.arrayList, c);
}
;
_.clear_0 = function clear_6(){
  $clear_5(this.arrayList);
}
;
_.contains_0 = function contains_15(elem){
  return $contains_2(this, elem);
}
;
_.get_0 = function get_45(index){
  return $get_8(this.arrayList, index);
}
;
_.indexOf_0 = function indexOf_4(elem){
  return $indexOf_3(this.arrayList, elem, 0);
}
;
_.isEmpty_0 = function isEmpty_13(){
  return this.arrayList.size_0 == 0;
}
;
_.iterator = function iterator_22(){
  return new AbstractList$IteratorImpl_0(this.arrayList);
}
;
_.remove_1 = function remove_51(index){
  return $remove_18(this.arrayList, index);
}
;
_.removeRange = function removeRange_1(fromIndex, endIndex){
  $removeRange(this.arrayList, fromIndex, endIndex);
}
;
_.set = function set_8(index, elem){
  return $set_5(this.arrayList, index, elem);
}
;
_.size_1 = function size_27(){
  return this.arrayList.size_0;
}
;
_.subList = function subList_3(fromIndex, toIndex){
  return new AbstractList$SubList_0(this.arrayList, fromIndex, toIndex);
}
;
_.toArray = function toArray_9(){
  return $toArray_0(this.arrayList);
}
;
_.toArray_0 = function toArray_10(a){
  return $toArray_1(this.arrayList, a);
}
;
_.toString$ = function toString_66(){
  return $toString_1(this.arrayList);
}
;
_.arrayList = null;
function $pop_0(this$static){
  var sz;
  sz = this$static.arrayList.size_0;
  if (sz > 0) {
    return $remove_18(this$static.arrayList, sz - 1);
  }
   else {
    throw new EmptyStackException_0;
  }
}

function $push_2(this$static, o){
  $add_19(this$static.arrayList, o);
  return o;
}

function Stack_0(){
  this.arrayList = new ArrayList_0;
}

defineSeed(1624, 1625, makeCastMap([Q$Serializable, Q$Iterable, Q$Collection, Q$List]), Stack_0);
var Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang.', 'LongLibBase$LongEmul', 290), _3Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForArray('[Lcom.google.gwt.lang.', 'LongLibBase$LongEmul;', 1638, Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit), B_classLit = createForPrimitive('byte', ' B'), Ljava_lang_Byte_2_classLit = createForClass('java.lang.', 'Byte', 1551), _3Ljava_lang_Byte_2_classLit = createForArray('[Ljava.lang.', 'Byte;', 1639, Ljava_lang_Byte_2_classLit), J_classLit = createForPrimitive('long', ' J'), _3J_classLit = createForArray('', '[J', 1641, J_classLit), Ljava_lang_Character_2_classLit = createForClass('java.lang.', 'Character', 1554), _3Ljava_lang_Character_2_classLit = createForArray('[Ljava.lang.', 'Character;', 1642, Ljava_lang_Character_2_classLit), D_classLit = createForPrimitive('double', ' D'), _3D_classLit = createForArray('', '[D', 1643, D_classLit), Ljava_lang_Double_2_classLit = createForClass('java.lang.', 'Double', 1558), F_classLit = createForPrimitive('float', ' F'), Ljava_lang_Float_2_classLit = createForClass('java.lang.', 'Float', 1559), Ljava_lang_Long_2_classLit = createForClass('java.lang.', 'Long', 1564), _3Ljava_lang_Long_2_classLit = createForArray('[Ljava.lang.', 'Long;', 1645, Ljava_lang_Long_2_classLit), S_classLit = createForPrimitive('short', ' S'), Ljava_lang_Short_2_classLit = createForClass('java.lang.', 'Short', 1571), _3Ljava_lang_Short_2_classLit = createForArray('[Ljava.lang.', 'Short;', 1646, Ljava_lang_Short_2_classLit), Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang.', 'ArithmeticException', 1546), Ljava_util_AbstractList$SubList_2_classLit = createForClass('java.util.', 'AbstractList$SubList', 1593), Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.', 'Receiver', 637), Lcom_google_web_bindery_requestfactory_shared_Receiver$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.', 'Receiver$1', 638), Lcom_lemania_sis_shared_CoursProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'CoursProxy'), Lcom_lemania_sis_shared_EcoleProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'EcoleProxy'), Lcom_lemania_sis_shared_BrancheProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'BrancheProxy'), Lcom_lemania_sis_shared_ClasseProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'ClasseProxy'), Lcom_lemania_sis_shared_SubjectProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'SubjectProxy'), Lcom_lemania_sis_client_event_ActionInProgressEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'ActionInProgressEvent', 750), Lcom_lemania_sis_client_event_ActionCompletedEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'ActionCompletedEvent', 749), Lcom_lemania_sis_client_event_PageAfterSelectEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'PageAfterSelectEvent', 756), Lcom_lemania_sis_shared_ProfessorProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'ProfessorProxy'), Lcom_lemania_sis_shared_UserProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'UserProxy'), Lcom_lemania_sis_client_presenter_MainPagePresenterMyProxyImpl$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'MainPagePresenterMyProxyImpl$2', 938), Lcom_lemania_sis_client_presenter_MainPagePresenterMyProxyImpl$2$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'MainPagePresenterMyProxyImpl$2$1', 939), Lcom_lemania_sis_client_presenter_MainPagePresenterMyProxyImpl$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'MainPagePresenterMyProxyImpl$3', 940), Lcom_lemania_sis_client_presenter_MainPagePresenterMyProxyImpl$3$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'MainPagePresenterMyProxyImpl$3$1', 941), Lcom_lemania_sis_client_presenter_MainPagePresenterMyProxyImpl$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'MainPagePresenterMyProxyImpl$4', 942), Lcom_lemania_sis_client_presenter_MainPagePresenterMyProxyImpl$4$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'MainPagePresenterMyProxyImpl$4$1', 943), Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util.', 'Collections$SingletonList', 1604), Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableCollection', 1605), Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableList', 1607), Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableMap', 1609), Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableSet', 1611), Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableMap$UnmodifiableEntrySet', 1610), Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry', 1613), Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableRandomAccessList', 1614), Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableCollectionIterator', 1606), Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableListIterator', 1608), Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableMap$UnmodifiableEntrySet$1', 1612), Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle', 173, Ljava_lang_Enum_2_classLit, values_3), _3Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$OutlineStyle;', 1650, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit), Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TableLayout', 193, Ljava_lang_Enum_2_classLit, values_6), _3Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$TableLayout;', 1653, Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit), Lcom_google_gwt_dom_client_Style$OutlineStyle$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$1', 174, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$2', 175, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$3', 176, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$4', 177, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$5_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$5', 178, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$6_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$6', 179, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$7_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$7', 180, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$8_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$8', 181, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$9_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$9', 182, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$TableLayout$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TableLayout$1', 194, Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit, null), Lcom_google_gwt_dom_client_Style$TableLayout$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TableLayout$2', 195, Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit, null), Lcom_google_gwt_user_cellview_client_Column_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'Column', 363), Lcom_google_gwt_user_cellview_client_Column$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'Column$1', 364), Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'TextColumn', 389), Lcom_google_gwt_view_client_SelectionChangeEvent_2_classLit = createForClass('com.google.gwt.view.client.', 'SelectionChangeEvent', 565), Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.', 'EntityProxy'), Lcom_lemania_sis_shared_SettingOptionProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'SettingOptionProxy'), Lcom_google_web_bindery_requestfactory_shared_impl_IdFactory_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'IdFactory', 634), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestFactory_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestFactory', 633), Lcom_google_web_bindery_requestfactory_gwt_client_impl_AbstractClientRequestFactory_2_classLit = createForClass('com.google.web.bindery.requestfactory.gwt.client.impl.', 'AbstractClientRequestFactory', 632), Lcom_lemania_sis_shared_service_SettingOptionRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SettingOptionRequestFactoryImpl', 1502), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestFactory$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestFactory$1', 653), Lcom_google_web_bindery_requestfactory_shared_WriteOperation_2_classLit = createForEnum('com.google.web.bindery.requestfactory.shared.', 'WriteOperation', 640, Ljava_lang_Enum_2_classLit, values_18), _3Lcom_google_web_bindery_requestfactory_shared_WriteOperation_2_classLit = createForArray('[Lcom.google.web.bindery.requestfactory.shared.', 'WriteOperation;', 1657, Lcom_google_web_bindery_requestfactory_shared_WriteOperation_2_classLit), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext', 642), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.messages.', 'IdMessage'), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$Dialect_2_classLit = createForEnum('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$Dialect', 647, Ljava_lang_Enum_2_classLit, values_19), _3Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$Dialect_2_classLit = createForArray('[Lcom.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$Dialect;', 1658, Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$Dialect_2_classLit), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$State_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$State', 652), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$StandardPayloadDialect_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$StandardPayloadDialect', 651), Lcom_google_web_bindery_requestfactory_shared_messages_ResponseMessage_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.messages.', 'ResponseMessage'), Lcom_google_web_bindery_requestfactory_shared_messages_ServerFailureMessage_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.messages.', 'ServerFailureMessage'), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$MyConstraintViolation_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$MyConstraintViolation', 650), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$Dialect$1_2_classLit = createForEnum('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$Dialect$1', 648, Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$Dialect_2_classLit, null), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$Dialect$2_2_classLit = createForEnum('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$Dialect$2', 649, Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$Dialect_2_classLit, null), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$2', 643), Lcom_google_web_bindery_autobean_shared_AutoBeanVisitor_2_classLit = createForClass('com.google.web.bindery.autobean.shared.', 'AutoBeanVisitor', 578), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$3_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$3', 644), Ljava_util_Date_2_classLit = createForClass('java.util.', 'Date', 665), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$4_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$4', 645), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$5_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$5', 646), Lcom_google_web_bindery_requestfactory_shared_EntityProxyId_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.', 'EntityProxyId'), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequest', 641), Lcom_google_web_bindery_autobean_shared_AutoBeanVisitor$ParameterizationVisitor_2_classLit = createForClass('com.google.web.bindery.autobean.shared.', 'AutoBeanVisitor$ParameterizationVisitor', 580), Lcom_lemania_sis_shared_service_EventSourceRequestTransport_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EventSourceRequestTransport', 1473), Lcom_lemania_sis_shared_service_EventSourceRequestTransport$1_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EventSourceRequestTransport$1', 1474), Lcom_google_web_bindery_requestfactory_gwt_client_DefaultRequestTransport_2_classLit = createForClass('com.google.web.bindery.requestfactory.gwt.client.', 'DefaultRequestTransport', 630), Lcom_google_web_bindery_requestfactory_gwt_client_DefaultRequestTransport$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.gwt.client.', 'DefaultRequestTransport$1', 631), Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Composite', 343), Lcom_google_gwt_user_cellview_client_AbstractHasData_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHasData', 342), Lcom_google_gwt_user_cellview_client_AbstractCellTable_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable', 341), Lcom_google_gwt_user_cellview_client_DataGrid_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DataGrid', 366), Lcom_google_gwt_user_cellview_client_DataGrid$TableWidget_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DataGrid$TableWidget', 369), Lcom_google_gwt_user_cellview_client_DataGrid$ResourcesAdapter_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DataGrid$ResourcesAdapter', 368), Lcom_google_gwt_user_cellview_client_DataGrid$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DataGrid$1', 367), Lcom_google_gwt_user_cellview_client_AbstractHasData$DefaultKeyboardSelectionHandler_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHasData$DefaultKeyboardSelectionHandler', 350), Lcom_google_gwt_user_cellview_client_AbstractCellTable$CellTableKeyboardSelectionHandler_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$CellTableKeyboardSelectionHandler', 349), Lcom_google_gwt_user_cellview_client_AbstractCellTable$Impl_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$Impl', 351), Lcom_google_gwt_user_cellview_client_AbstractCellTable$ImplTrident_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$ImplTrident', 352), Lcom_google_gwt_user_cellview_client_AbstractCellTable$2_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$2', 346), Lcom_google_gwt_user_cellview_client_AbstractCellTable$3_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$3', 347), Lcom_google_gwt_user_cellview_client_AbstractCellTable$4_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$4', 348), Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHasData$View', 355), Lcom_google_gwt_user_cellview_client_AbstractHasData$View$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHasData$View$1', 356), Lcom_google_gwt_user_cellview_client_AbstractHasData$View$2_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHasData$View$2', 357), Lcom_google_gwt_user_cellview_client_HasKeyboardPagingPolicy$KeyboardPagingPolicy_2_classLit = createForEnum('com.google.gwt.user.cellview.client.', 'HasKeyboardPagingPolicy$KeyboardPagingPolicy', 383, Ljava_lang_Enum_2_classLit, values_13), _3Lcom_google_gwt_user_cellview_client_HasKeyboardPagingPolicy$KeyboardPagingPolicy_2_classLit = createForArray('[Lcom.google.gwt.user.cellview.client.', 'HasKeyboardPagingPolicy$KeyboardPagingPolicy;', 1662, Lcom_google_gwt_user_cellview_client_HasKeyboardPagingPolicy$KeyboardPagingPolicy_2_classLit), Lcom_google_gwt_user_cellview_client_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_2_classLit = createForEnum('com.google.gwt.user.cellview.client.', 'HasKeyboardSelectionPolicy$KeyboardSelectionPolicy', 384, Ljava_lang_Enum_2_classLit, values_14), _3Lcom_google_gwt_user_cellview_client_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_2_classLit = createForArray('[Lcom.google.gwt.user.cellview.client.', 'HasKeyboardSelectionPolicy$KeyboardSelectionPolicy;', 1663, Lcom_google_gwt_user_cellview_client_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_2_classLit), Lcom_google_gwt_view_client_CellPreviewEvent_2_classLit = createForClass('com.google.gwt.view.client.', 'CellPreviewEvent', 556), Lcom_google_gwt_user_cellview_client_HasDataPresenter_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'HasDataPresenter', 378), Lcom_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'HasDataPresenter$DefaultState', 381), Lcom_google_gwt_user_cellview_client_HasDataPresenter$PendingState_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'HasDataPresenter$PendingState', 382), Lcom_google_gwt_user_cellview_client_HasDataPresenter$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'HasDataPresenter$1', 379), Lcom_google_gwt_user_cellview_client_HasDataPresenter$2_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'HasDataPresenter$2', 380), Lcom_google_gwt_user_cellview_client_ColumnSortList_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'ColumnSortList', 365), Lcom_google_gwt_cell_client_AbstractCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'AbstractCell', 84), Lcom_google_gwt_cell_client_AbstractEditableCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'AbstractEditableCell', 85), Lcom_google_gwt_cell_client_EditTextCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'EditTextCell', 90), Lcom_google_gwt_cell_client_EditTextCell$ViewData_2_classLit = createForClass('com.google.gwt.cell.client.', 'EditTextCell$ViewData', 91), Lcom_google_gwt_cell_client_Cell$Context_2_classLit = createForClass('com.google.gwt.cell.client.', 'Cell$Context', 88), Lcom_google_gwt_cell_client_CheckboxCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'CheckboxCell', 89), Lcom_google_gwt_view_client_AbstractDataProvider_2_classLit = createForClass('com.google.gwt.view.client.', 'AbstractDataProvider', 554), Lcom_google_gwt_view_client_ListDataProvider_2_classLit = createForClass('com.google.gwt.view.client.', 'ListDataProvider', 559), Lcom_google_gwt_view_client_ListDataProvider$ListWrapper_2_classLit = createForClass('com.google.gwt.view.client.', 'ListDataProvider$ListWrapper', 560), Lcom_google_gwt_view_client_ListDataProvider$ListWrapper$WrappedListIterator_2_classLit = createForClass('com.google.gwt.view.client.', 'ListDataProvider$ListWrapper$WrappedListIterator', 562), Lcom_google_gwt_view_client_ListDataProvider$ListWrapper$1_2_classLit = createForClass('com.google.gwt.view.client.', 'ListDataProvider$ListWrapper$1', 561), Lcom_google_gwt_view_client_AbstractDataProvider$1_2_classLit = createForClass('com.google.gwt.view.client.', 'AbstractDataProvider$1', 555), Lcom_google_gwt_view_client_RangeChangeEvent_2_classLit = createForClass('com.google.gwt.view.client.', 'RangeChangeEvent', 564), Lcom_lemania_sis_shared_service_SettingOptionRequestFactory_1SettingOptionRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SettingOptionRequestFactory_SettingOptionRequestContextImpl', 1503), Lcom_lemania_sis_shared_service_SettingOptionRequestFactory_1SettingOptionRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SettingOptionRequestFactory_SettingOptionRequestContextImpl$2X', 1504), Ljava_lang_Void_2_classLit = createForClass('java.lang.', 'Void', null), Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ValueBoxBase', 444), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment', 530, Ljava_lang_Enum_2_classLit, values_15), _3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment;', 1664, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$1', 531, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$2', 532, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$3', 533, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$4', 534, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null), Lcom_google_gwt_i18n_client_AutoDirectionHandler_2_classLit = createForClass('com.google.gwt.i18n.client.', 'AutoDirectionHandler', 278), Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextBoxBase', 497), Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextBox', 496), Lcom_google_gwt_view_client_SelectionModel$AbstractSelectionModel_2_classLit = createForClass('com.google.gwt.view.client.', 'SelectionModel$AbstractSelectionModel', 566), Lcom_google_gwt_view_client_SingleSelectionModel_2_classLit = createForClass('com.google.gwt.view.client.', 'SingleSelectionModel', 568), Lcom_google_gwt_view_client_SelectionModel$AbstractSelectionModel$1_2_classLit = createForClass('com.google.gwt.view.client.', 'SelectionModel$AbstractSelectionModel$1', 567), Lcom_google_gwt_user_client_ui_HTMLPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLPanel', 455), Lcom_google_gwt_text_shared_SimpleSafeHtmlRenderer_2_classLit = createForClass('com.google.gwt.text.shared.', 'SimpleSafeHtmlRenderer', 321), Lcom_google_gwt_cell_client_AbstractSafeHtmlCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'AbstractSafeHtmlCell', 86), Lcom_google_gwt_cell_client_ButtonCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'ButtonCell', 87), Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListBox', 476), Lcom_google_gwt_uibinder_client_LazyDomElement_2_classLit = createForClass('com.google.gwt.uibinder.client.', 'LazyDomElement', 338), Lcom_google_gwt_cell_client_EditTextCell_1TemplateImpl_2_classLit = createForClass('com.google.gwt.cell.client.', 'EditTextCell_TemplateImpl', 92), Lcom_google_gwt_user_cellview_client_Header_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'Header', 385), Lcom_google_gwt_user_cellview_client_TextHeader_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'TextHeader', 390), Lcom_google_gwt_cell_client_TextCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'TextCell', 93), Lcom_google_gwt_view_client_Range_2_classLit = createForClass('com.google.gwt.view.client.', 'Range', 563), Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2_classLit = createForClass('com.google.gwt.uibinder.client.', 'UiBinderUtil$TempAttachment', 340), Lcom_google_gwt_user_cellview_client_DataGrid_1Resources_1default_1StaticClientBundleGenerator_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DataGrid_Resources_default_StaticClientBundleGenerator', 370), Lcom_google_gwt_user_cellview_client_DataGrid_1Resources_1default_1StaticClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DataGrid_Resources_default_StaticClientBundleGenerator$1', 371), Lcom_google_gwt_user_cellview_client_CellBasedWidgetImpl_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'CellBasedWidgetImpl', 360), Lcom_google_gwt_user_cellview_client_CellBasedWidgetImplTrident_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'CellBasedWidgetImplTrident', 361), Lcom_google_gwt_user_cellview_client_CellBasedWidgetImplTrident$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'CellBasedWidgetImplTrident$1', 362), Lcom_google_web_bindery_requestfactory_shared_FanoutReceiver_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.', 'FanoutReceiver', 636), Lcom_google_gwt_user_client_ui_HeaderPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HeaderPanel', 462), Lcom_google_gwt_user_client_ui_HeaderPanel$WidgetProviderImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HeaderPanel$WidgetProviderImpl', 465), Lcom_google_gwt_user_client_ui_HeaderPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HeaderPanel$1', 463), Lcom_google_gwt_user_client_ui_HeaderPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HeaderPanel$2', 464), Lcom_google_gwt_user_client_ui_FiniteWidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FiniteWidgetIterator', 445), Lcom_google_gwt_user_client_ui_ResizeLayoutPanel$Impl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ResizeLayoutPanel$Impl', 505), Lcom_google_gwt_user_client_ui_ResizeLayoutPanel$ImplTrident_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ResizeLayoutPanel$ImplTrident', 507), Lcom_google_gwt_user_client_ui_ResizeLayoutPanel$ImplIE6_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ResizeLayoutPanel$ImplIE6', 506), Lcom_google_gwt_user_client_ui_ResizeLayoutPanel$ImplIE6$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ResizeLayoutPanel$ImplIE6$1', 508), Lcom_google_gwt_user_client_ui_ScrollPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ScrollPanel', 428), Lcom_google_gwt_user_client_ui_CustomScrollPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomScrollPanel', 427), _3Lcom_google_gwt_user_client_ui_IsWidget_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'IsWidget;', 1665, Lcom_google_gwt_user_client_ui_IsWidget_2_classLit), Lcom_google_gwt_user_client_ui_CustomScrollPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomScrollPanel$1', 430), Lcom_google_gwt_user_client_ui_CustomScrollPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomScrollPanel$2', 431), Lcom_google_gwt_user_client_ui_CustomScrollPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomScrollPanel$3', 432), Lcom_google_gwt_user_client_ui_CustomScrollPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomScrollPanel$4', 433), Lcom_google_gwt_user_client_ui_FlexTable_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlexTable', 446), Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlexTable$FlexCellFormatter', 448), Ljava_util_LinkedHashSet_2_classLit = createForClass('java.util.', 'LinkedHashSet', 1622), Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestBuilder', 270), Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestBuilder$Method', 272), Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestBuilder$1', 271), Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestException', 273), Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client.', 'Request', 265), Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client.', 'Response', 269), Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client.', 'ResponseImpl', 268), Lcom_google_gwt_http_client_Request$RequestImplIE6To9$1_2_classLit = createForClass('com.google.gwt.http.client.', 'Request$RequestImplIE6To9$1', 267), Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client.', 'Request$1', 266), Lcom_lemania_sis_shared_service_EcoleRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EcoleRequestFactoryImpl', 1467), Lcom_google_gwt_user_client_ui_TextArea_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextArea', 519), Lcom_google_gwt_user_client_ui_CheckBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CheckBox', 425), Lcom_google_gwt_user_client_ui_ValueBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ValueBox', 443), Lcom_google_gwt_user_client_ui_DoubleBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DoubleBox', 442), Lcom_lemania_sis_shared_service_BrancheRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BrancheRequestFactoryImpl', 1415), Lcom_lemania_sis_shared_service_ClasseRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ClasseRequestFactoryImpl', 1448), Lcom_lemania_sis_shared_BulletinProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'BulletinProxy'), Lcom_lemania_sis_shared_service_BulletinRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinRequestFactoryImpl', 1429), Lcom_lemania_sis_shared_service_ProfessorRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfessorRequestFactoryImpl', 1475), Lcom_lemania_sis_shared_service_SubjectRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SubjectRequestFactoryImpl', 1514), Lcom_google_gwt_event_dom_client_ScrollEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ScrollEvent', 247), Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2_classLit = createForClass('com.google.gwt.safehtml.shared.', 'SafeHtmlBuilder', 313), Lcom_lemania_sis_shared_StudentProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'StudentProxy'), Lcom_lemania_sis_shared_service_StudentRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'StudentRequestFactoryImpl', 1507), Lcom_google_gwt_view_client_DefaultSelectionEventManager_2_classLit = createForClass('com.google.gwt.view.client.', 'DefaultSelectionEventManager', 557), Lcom_google_gwt_view_client_DefaultSelectionEventManager$SelectAction_2_classLit = createForEnum('com.google.gwt.view.client.', 'DefaultSelectionEventManager$SelectAction', 558, Ljava_lang_Enum_2_classLit, values_16), _3Lcom_google_gwt_view_client_DefaultSelectionEventManager$SelectAction_2_classLit = createForArray('[Lcom.google.gwt.view.client.', 'DefaultSelectionEventManager$SelectAction;', 1667, Lcom_google_gwt_view_client_DefaultSelectionEventManager$SelectAction_2_classLit), Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable_TemplateImpl', 354), Lcom_google_gwt_user_cellview_client_AbstractCellTableBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTableBuilder', 353), Lcom_google_gwt_user_cellview_client_DefaultCellTableBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DefaultCellTableBuilder', 376), Lcom_google_gwt_user_cellview_client_AbstractHeaderOrFooterBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHeaderOrFooterBuilder', 358), Lcom_google_gwt_user_cellview_client_DefaultHeaderOrFooterBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DefaultHeaderOrFooterBuilder', 377), Lcom_google_gwt_user_cellview_client_AbstractHeaderOrFooterBuilder$TwoWayHashMap_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHeaderOrFooterBuilder$TwoWayHashMap', 359), Lcom_google_gwt_user_client_ui_CustomScrollPanel_1Resources_1default_1StaticClientBundleGenerator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomScrollPanel_Resources_default_StaticClientBundleGenerator', 434), Lcom_google_gwt_user_client_ui_CustomScrollPanel_1Resources_1default_1StaticClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomScrollPanel_Resources_default_StaticClientBundleGenerator$1', 435), Lcom_google_gwt_user_client_ui_AbstractNativeScrollbar_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbstractNativeScrollbar', 417), Lcom_google_gwt_user_client_ui_NativeHorizontalScrollbar_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeHorizontalScrollbar', 477), Lcom_google_gwt_user_client_ui_NativeVerticalScrollbar_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeVerticalScrollbar', 486), Lcom_google_gwt_user_client_ui_NativeHorizontalScrollbar_1ResourcesTransparant_1default_1StaticClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeHorizontalScrollbar_ResourcesTransparant_default_StaticClientBundleGenerator$1', 484), Lcom_google_gwt_user_client_ui_NativeVerticalScrollbar_1ResourcesTransparant_1default_1StaticClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeVerticalScrollbar_ResourcesTransparant_default_StaticClientBundleGenerator$1', 493), Lcom_google_gwt_user_client_ui_SimpleCheckBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimpleCheckBox', 517), Lcom_google_web_bindery_requestfactory_shared_impl_RequestData_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'RequestData', 661), Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestPermissionException', 274), Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'LoadingStateChangeEvent', 386), Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent$DefaultLoadingState_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'LoadingStateChangeEvent$DefaultLoadingState', 387), Lcom_lemania_sis_shared_service_EcoleRequestFactory_1EcoleRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EcoleRequestFactory_EcoleRequestContextImpl', 1468), Lcom_lemania_sis_shared_service_EcoleRequestFactory_1EcoleRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EcoleRequestFactory_EcoleRequestContextImpl$2X', 1469), Lcom_lemania_sis_shared_service_BrancheRequestFactory_1BrancheRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BrancheRequestFactory_BrancheRequestContextImpl', 1416), Lcom_lemania_sis_shared_service_BrancheRequestFactory_1BrancheRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BrancheRequestFactory_BrancheRequestContextImpl$2X', 1417), Lcom_lemania_sis_shared_service_ClasseRequestFactory_1ClasseRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ClasseRequestFactory_ClasseRequestContextImpl', 1449), Lcom_lemania_sis_shared_service_ClasseRequestFactory_1ClasseRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ClasseRequestFactory_ClasseRequestContextImpl$4X', 1451), Lcom_lemania_sis_shared_service_ClasseRequestFactory_1ClasseRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ClasseRequestFactory_ClasseRequestContextImpl$5X', 1452), Lcom_lemania_sis_shared_service_BulletinRequestFactory_1BulletinRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinRequestFactory_BulletinRequestContextImpl', 1430), Lcom_lemania_sis_shared_service_BulletinRequestFactory_1BulletinRequestContextImpl$6X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinRequestFactory_BulletinRequestContextImpl$6X', 1435), Lcom_lemania_sis_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl', 1476), Lcom_lemania_sis_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$3X', 1478), Lcom_lemania_sis_shared_service_SubjectRequestFactory_1SubjectRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SubjectRequestFactory_SubjectRequestContextImpl', 1515), Lcom_lemania_sis_shared_service_SubjectRequestFactory_1SubjectRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SubjectRequestFactory_SubjectRequestContextImpl$3X', 1517), Lcom_google_gwt_user_client_ui_ScrollImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ScrollImpl', 515), Lcom_google_gwt_user_client_ui_ScrollImpl$ScrollImplTrident_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ScrollImpl$ScrollImplTrident', 516), Lcom_google_web_bindery_autobean_gwt_client_impl_AbstractAutoBeanFactory_2_classLit = createForClass('com.google.web.bindery.autobean.gwt.client.impl.', 'AbstractAutoBeanFactory', 570), Lcom_google_web_bindery_requestfactory_shared_messages_MessageFactoryImpl_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'MessageFactoryImpl', 676), Lcom_google_web_bindery_requestfactory_shared_messages_InvocationMessage_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.messages.', 'InvocationMessage'), Lcom_google_web_bindery_requestfactory_shared_messages_JsonRpcRequest_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.messages.', 'JsonRpcRequest'), Lcom_google_web_bindery_requestfactory_shared_messages_OperationMessage_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.messages.', 'OperationMessage'), Lcom_google_web_bindery_requestfactory_shared_messages_RequestMessage_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.messages.', 'RequestMessage'), Lcom_google_web_bindery_requestfactory_shared_messages_ViolationMessage_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.messages.', 'ViolationMessage'), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage$Strength_2_classLit = createForEnum('com.google.web.bindery.requestfactory.shared.messages.', 'IdMessage$Strength', 666, Ljava_lang_Enum_2_classLit, values_20), _3Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage$Strength_2_classLit = createForArray('[Lcom.google.web.bindery.requestfactory.shared.messages.', 'IdMessage$Strength;', 1670, Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage$Strength_2_classLit), Lcom_google_web_bindery_requestfactory_shared_impl_SimpleProxyId_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'SimpleProxyId', 663), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl', null), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$EncodeState_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$EncodeState', 603), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$CoderCreator_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$CoderCreator', 601), Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit = createForInterface('com.google.web.bindery.autobean.shared.', 'Splittable'), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$CollectionCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$CollectionCoder', 602), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$EnumCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$EnumCoder', 604), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$HaltException_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$HaltException', 605), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$MapCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$MapCoder', 606), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$ObjectCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$ObjectCoder', 607), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$PropertyCoderCreator_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$PropertyCoderCreator', 608), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$PropertyGetter_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$PropertyGetter', 609), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$SplittableCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$SplittableCoder', 610), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$ValueCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$ValueCoder', 611), Lcom_lemania_sis_shared_service_StudentRequestFactory_1StudentRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'StudentRequestFactory_StudentRequestContextImpl', 1508), Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang.', 'NumberFormatException', 1570), Lcom_google_gwt_resources_client_CommonResources_1Bundle_1ie6_1default_1StaticClientBundleGenerator_2_classLit = createForClass('com.google.gwt.resources.client.', 'CommonResources_Bundle_ie6_default_StaticClientBundleGenerator', 305), Lcom_google_gwt_resources_client_CommonResources_1Bundle_1ie6_1default_1StaticClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.resources.client.', 'CommonResources_Bundle_ie6_default_StaticClientBundleGenerator$1', 306), Lcom_google_gwt_user_client_ui_NativeHorizontalScrollbar_1NativeHorizontalScrollbarUiBinderImpl$Widgets_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$Widgets', 478), Lcom_google_gwt_user_client_ui_NativeVerticalScrollbar_1NativeVerticalScrollbarUiBinderImpl$Widgets_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl$Widgets', 487), Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit = createForInterface('com.google.web.bindery.autobean.shared.', 'AutoBean'), Lcom_google_web_bindery_autobean_shared_AutoBeanUtils$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.', 'AutoBeanUtils$1', 577), Lcom_google_web_bindery_autobean_shared_AutoBeanUtils$2_2_classLit = createForClass('com.google.web.bindery.autobean.shared.', 'AutoBeanUtils$2', 579), Ljava_math_BigDecimal_2_classLit = createForClass('java.math.', 'BigDecimal', 1580), Ljava_math_BigInteger_2_classLit = createForClass('java.math.', 'BigInteger', 1581), V_classLit = createForPrimitive('void', ' V'), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type', 582, Ljava_lang_Enum_2_classLit, values_17), _3Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit = createForArray('[Lcom.google.web.bindery.autobean.shared.', 'ValueCodex$Type;', 1671, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$1_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$1', 583, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$2_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$2', 590, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$3_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$3', 591, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$4_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$4', 592, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$5_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$5', 593, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$6_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$6', 594, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$7_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$7', 595, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$8_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$8', 596, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$9_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$9', 597, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$10_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$10', 584, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$11_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$11', 585, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$12_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$12', 586, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$13_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$13', 587, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$14_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$14', 588, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$15_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$15', 589, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ChangeEvent', 230), Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit = createForClass('com.google.gwt.dom.client.', 'StyleInjector$1', 222), Lcom_google_gwt_touch_client_TouchScroller_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller', 327), Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$TemporalPoint', 337), Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$MomentumCommand', 334), Lcom_google_gwt_touch_client_TouchScroller$MomentumTouchRemovalCommand_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$MomentumTouchRemovalCommand', 336), Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand$1_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$MomentumCommand$1', 335), Lcom_google_gwt_touch_client_TouchScroller$1_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$1', 328), Lcom_google_gwt_touch_client_TouchScroller$2_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$2', 329), Lcom_google_gwt_touch_client_TouchScroller$3_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$3', 330), Lcom_google_gwt_touch_client_TouchScroller$4_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$4', 331), Lcom_google_gwt_touch_client_TouchScroller$5_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$5', 332), Lcom_google_gwt_touch_client_TouchScroller$6_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$6', 333), Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyEvent', 242), Lcom_google_web_bindery_autobean_shared_impl_AbstractAutoBean_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AbstractAutoBean', 598), Lcom_google_web_bindery_requestfactory_shared_messages_InvocationMessageAutoBean_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'InvocationMessageAutoBean', 670), _3Ljava_lang_Class_2_classLit = createForArray('[Ljava.lang.', 'Class;', 1672, Ljava_lang_Class_2_classLit), Lcom_google_web_bindery_requestfactory_shared_messages_InvocationMessageAutoBean$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'InvocationMessageAutoBean$1', 671), Lcom_google_web_bindery_requestfactory_shared_messages_InvocationMessageAutoBean$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'InvocationMessageAutoBean$2', 672), Lcom_google_web_bindery_autobean_shared_impl_AbstractAutoBean$OneShotContext_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AbstractAutoBean$OneShotContext', 599), Lcom_google_web_bindery_requestfactory_shared_messages_JsonRpcRequestAutoBean_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'JsonRpcRequestAutoBean', 673), Lcom_google_web_bindery_requestfactory_shared_messages_JsonRpcRequestAutoBean$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'JsonRpcRequestAutoBean$1', 674), Lcom_google_web_bindery_requestfactory_shared_messages_JsonRpcRequestAutoBean$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'JsonRpcRequestAutoBean$2', 675), Lcom_google_web_bindery_requestfactory_shared_messages_RequestMessageAutoBean_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'RequestMessageAutoBean', 680), Lcom_google_web_bindery_requestfactory_shared_messages_RequestMessageAutoBean$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'RequestMessageAutoBean$1', 681), Lcom_google_web_bindery_requestfactory_shared_messages_RequestMessageAutoBean$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'RequestMessageAutoBean$2', 682), Lcom_google_web_bindery_requestfactory_shared_messages_OperationMessageAutoBean_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'OperationMessageAutoBean', 677), Lcom_google_web_bindery_requestfactory_shared_messages_OperationMessageAutoBean$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'OperationMessageAutoBean$1', 678), Lcom_google_web_bindery_requestfactory_shared_messages_OperationMessageAutoBean$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'OperationMessageAutoBean$2', 679), Ljava_util_Vector_2_classLit = createForClass('java.util.', 'Vector', 1625), Ljava_util_Stack_2_classLit = createForClass('java.util.', 'Stack', 1624), Lcom_lemania_sis_shared_AssignmentProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'AssignmentProxy'), Lcom_lemania_sis_shared_service_AssignmentRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactoryImpl', 1407), Lcom_lemania_sis_shared_BulletinSubjectProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'BulletinSubjectProxy'), Lcom_lemania_sis_shared_service_BulletinSubjectRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinSubjectRequestFactoryImpl', 1440), Lcom_lemania_sis_shared_BulletinBrancheProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'BulletinBrancheProxy'), Lcom_lemania_sis_shared_service_BulletinBrancheRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinBrancheRequestFactoryImpl', 1421), Lcom_google_gwt_event_dom_client_KeyCodeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyCodeEvent', 241), Lcom_google_gwt_event_dom_client_KeyUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyUpEvent', 244), Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'ArrayIndexOutOfBoundsException', 1547), Lcom_google_gwt_event_dom_client_TouchEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchEvent', 249), Lcom_google_gwt_event_dom_client_TouchStartEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchStartEvent', 253), Lcom_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchEvent$TouchSupportDetector', 251), Lcom_google_gwt_event_dom_client_TouchMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchMoveEvent', 252), Lcom_google_gwt_event_dom_client_TouchEndEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchEndEvent', 250), Lcom_google_gwt_event_dom_client_TouchCancelEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchCancelEvent', 248), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessageAutoBean_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'IdMessageAutoBean', 667), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessageAutoBean$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'IdMessageAutoBean$1', 668), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessageAutoBean$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'IdMessageAutoBean$2', 669), _3Ljava_math_BigDecimal_2_classLit = createForArray('[Ljava.math.', 'BigDecimal;', 1673, Ljava_math_BigDecimal_2_classLit), _3Ljava_math_BigInteger_2_classLit = createForArray('[Ljava.math.', 'BigInteger;', 1674, Ljava_math_BigInteger_2_classLit), Lcom_lemania_sis_shared_service_SettingOptionRequestFactory_1SettingOptionRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SettingOptionRequestFactory_SettingOptionRequestContextImpl_FactoryImpl', 1506), Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestTimeoutException', 275), Lcom_google_web_bindery_requestfactory_shared_ServerFailure_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.', 'ServerFailure', 639), Lcom_lemania_sis_shared_service_EcoleRequestFactory_1EcoleRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EcoleRequestFactory_EcoleRequestContextImpl_FactoryImpl', 1472), Lcom_lemania_sis_shared_service_BrancheRequestFactory_1BrancheRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BrancheRequestFactory_BrancheRequestContextImpl_FactoryImpl', 1420), Lcom_lemania_sis_shared_service_ClasseRequestFactory_1ClasseRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ClasseRequestFactory_ClasseRequestContextImpl_FactoryImpl', 1455), Lcom_lemania_sis_shared_service_BulletinRequestFactory_1BulletinRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinRequestFactory_BulletinRequestContextImpl_FactoryImpl', 1439), Lcom_lemania_sis_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl_FactoryImpl', 1481), Lcom_lemania_sis_shared_service_SubjectRequestFactory_1SubjectRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'SubjectRequestFactory_SubjectRequestContextImpl_FactoryImpl', 1521), Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared.', 'AbstractRenderer', 320), Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing.', 'PassthroughRenderer', 323), Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing.', 'PassthroughParser', 322), Lcom_google_gwt_dom_builder_shared_AbstractElementBuilderBase_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'AbstractElementBuilderBase', 130), Lcom_google_gwt_dom_builder_shared_HtmlElementBuilderBase_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlElementBuilderBase', 138), Lcom_google_gwt_dom_builder_shared_HtmlTableSectionBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlTableSectionBuilder', 148), Lcom_google_gwt_dom_builder_shared_ElementBuilderFactory_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'ElementBuilderFactory', 131), Lcom_google_gwt_dom_builder_shared_HtmlBuilderFactory_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlBuilderFactory', 135), Lcom_lemania_sis_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl', 1408), Lcom_lemania_sis_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$7X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$7X', 1413), Lcom_lemania_sis_shared_service_BulletinSubjectRequestFactory_1BulletinSubjectRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl', 1441), Lcom_lemania_sis_shared_service_BulletinSubjectRequestFactory_1BulletinSubjectRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$4X', 1443), Lcom_lemania_sis_shared_service_BulletinSubjectRequestFactory_1BulletinSubjectRequestContextImpl$9X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl$9X', 1446), Lcom_lemania_sis_shared_service_BulletinBrancheRequestFactory_1BulletinBrancheRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl', 1422), Lcom_lemania_sis_shared_service_BulletinBrancheRequestFactory_1BulletinBrancheRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$3X', 1423), Lcom_lemania_sis_shared_service_BulletinBrancheRequestFactory_1BulletinBrancheRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$8X', 1426), Lcom_lemania_sis_shared_service_StudentRequestFactory_1StudentRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'StudentRequestFactory_StudentRequestContextImpl_FactoryImpl', 1513), Lcom_google_gwt_dom_builder_shared_ElementBuilderImpl_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'ElementBuilderImpl', 132), Lcom_google_gwt_dom_builder_shared_HtmlBuilderImpl_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlBuilderImpl', 136), Lcom_google_gwt_dom_builder_shared_ElementBuilderImpl$StackNode_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'ElementBuilderImpl$StackNode', 134), Lcom_google_gwt_dom_builder_shared_ElementBuilderImpl$FastPeekStack_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'ElementBuilderImpl$FastPeekStack', 133), Lcom_google_gwt_touch_client_DefaultMomentum_2_classLit = createForClass('com.google.gwt.touch.client.', 'DefaultMomentum', 324), Lcom_google_gwt_touch_client_Momentum$State_2_classLit = createForClass('com.google.gwt.touch.client.', 'Momentum$State', 325), Lcom_google_gwt_user_cellview_client_RowHoverEvent_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'RowHoverEvent', 388), Lcom_google_gwt_touch_client_Point_2_classLit = createForClass('com.google.gwt.touch.client.', 'Point', 326), Lemul_java_util_SetAutoBean_2_classLit = createForClass('emul.java.util.', 'SetAutoBean', 1544), Lemul_java_util_SetAutoBean$1_2_classLit = createForClass('emul.java.util.', 'SetAutoBean$1', 1545), Lcom_google_web_bindery_autobean_gwt_client_impl_ClientPropertyContext_2_classLit = createForClass('com.google.web.bindery.autobean.gwt.client.impl.', 'ClientPropertyContext', 571), Lcom_google_web_bindery_requestfactory_shared_messages_ServerFailureMessageAutoBean_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ServerFailureMessageAutoBean', 686), Lcom_google_web_bindery_requestfactory_shared_messages_ServerFailureMessageAutoBean$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ServerFailureMessageAutoBean$1', 687), Lcom_google_web_bindery_requestfactory_shared_messages_ServerFailureMessageAutoBean$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ServerFailureMessageAutoBean$2', 688), Lcom_google_web_bindery_requestfactory_shared_messages_ResponseMessageAutoBean_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ResponseMessageAutoBean', 683), Lcom_google_web_bindery_requestfactory_shared_messages_ResponseMessageAutoBean$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ResponseMessageAutoBean$1', 684), Lcom_google_web_bindery_requestfactory_shared_messages_ResponseMessageAutoBean$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ResponseMessageAutoBean$2', 685), Lcom_google_web_bindery_requestfactory_shared_messages_ViolationMessageAutoBean_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ViolationMessageAutoBean', 689), Lcom_google_web_bindery_requestfactory_shared_messages_ViolationMessageAutoBean$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ViolationMessageAutoBean$1', 690), Lcom_google_web_bindery_requestfactory_shared_messages_ViolationMessageAutoBean$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ViolationMessageAutoBean$2', 691), Lemul_java_util_ListAutoBean_2_classLit = createForClass('emul.java.util.', 'ListAutoBean', 1536), Lemul_java_util_ListAutoBean$1_2_classLit = createForClass('emul.java.util.', 'ListAutoBean$1', 1537), Lemul_java_util_MapAutoBean_2_classLit = createForClass('emul.java.util.', 'MapAutoBean', 1540), Lemul_java_util_MapAutoBean$1_2_classLit = createForClass('emul.java.util.', 'MapAutoBean$1', 1541), Lemul_java_util_IteratorAutoBean_2_classLit = createForClass('emul.java.util.', 'IteratorAutoBean', 1534), Lemul_java_util_IteratorAutoBean$1_2_classLit = createForClass('emul.java.util.', 'IteratorAutoBean$1', 1535), Lemul_java_util_ListIteratorAutoBean_2_classLit = createForClass('emul.java.util.', 'ListIteratorAutoBean', 1538), Lemul_java_util_ListIteratorAutoBean$1_2_classLit = createForClass('emul.java.util.', 'ListIteratorAutoBean$1', 1539), Lemul_java_util_Map_1EntryAutoBean_2_classLit = createForClass('emul.java.util.', 'Map_EntryAutoBean', 1542), Lemul_java_util_Map_1EntryAutoBean$1_2_classLit = createForClass('emul.java.util.', 'Map_EntryAutoBean$1', 1543), Lemul_java_util_CollectionAutoBean_2_classLit = createForClass('emul.java.util.', 'CollectionAutoBean', 1532), Lemul_java_util_CollectionAutoBean$1_2_classLit = createForClass('emul.java.util.', 'CollectionAutoBean$1', 1533), Lcom_lemania_sis_shared_SettingOptionProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1395), Lcom_lemania_sis_shared_SettingOptionProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1396), Lcom_lemania_sis_shared_SettingOptionProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1397), Lcom_lemania_sis_shared_EcoleProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1380), Lcom_lemania_sis_shared_EcoleProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1381), Lcom_lemania_sis_shared_EcoleProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1382), Lcom_lemania_sis_shared_BrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'BrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1362), Lcom_lemania_sis_shared_BrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'BrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1363), Lcom_lemania_sis_shared_BrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'BrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1364), Lcom_lemania_sis_shared_ClasseProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'ClasseProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1374), Lcom_lemania_sis_shared_ClasseProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'ClasseProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1375), Lcom_lemania_sis_shared_ClasseProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'ClasseProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1376), Lcom_lemania_sis_shared_BulletinProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'BulletinProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1368), Lcom_lemania_sis_shared_BulletinProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'BulletinProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1369), Lcom_lemania_sis_shared_BulletinProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'BulletinProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1370), Lcom_lemania_sis_shared_ProfessorProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1383), Lcom_lemania_sis_shared_ProfessorProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1384), Lcom_lemania_sis_shared_ProfessorProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1385), Lcom_lemania_sis_shared_SubjectProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'SubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1401), Lcom_lemania_sis_shared_SubjectProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'SubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1402), Lcom_lemania_sis_shared_SubjectProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'SubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1403), Lcom_lemania_sis_shared_StudentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'StudentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1398), Lcom_lemania_sis_shared_StudentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'StudentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1399), Lcom_lemania_sis_shared_StudentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'StudentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1400), Lcom_google_gwt_dom_builder_shared_HtmlTableRowBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlTableRowBuilder', 147), Ljava_util_EmptyStackException_2_classLit = createForClass('java.util.', 'EmptyStackException', 1616), Lcom_google_web_bindery_requestfactory_shared_EntityProxyChange_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.', 'EntityProxyChange', 635), Lcom_google_web_bindery_requestfactory_shared_impl_SimpleEntityProxyId_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'SimpleEntityProxyId', 662), Lcom_google_gwt_dom_builder_shared_HtmlDivBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlDivBuilder', 137), Lcom_google_gwt_dom_builder_shared_HtmlElementBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlElementBuilder', 139), Lcom_google_gwt_dom_builder_shared_HtmlInputBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlInputBuilder', 140), Lcom_google_gwt_dom_builder_shared_HtmlLIBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlLIBuilder', 141), Lcom_google_gwt_dom_builder_shared_HtmlOptionBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlOptionBuilder', 142), Lcom_google_gwt_dom_builder_shared_HtmlSpanBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlSpanBuilder', 143), Lcom_google_gwt_dom_builder_shared_HtmlStylesBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlStylesBuilder', 144), Lcom_google_gwt_dom_builder_shared_HtmlStylesBuilder$FastStringMapClient_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlStylesBuilder$FastStringMapClient', 145), Lcom_google_gwt_dom_builder_shared_HtmlTableCellBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlTableCellBuilder', 146), Lcom_google_gwt_user_client_ui_NativeHorizontalScrollbar_1NativeHorizontalScrollbarUiBinderImpl_1GenBundle_1default_1StaticClientBundleGenerator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator', 479), Lcom_google_gwt_user_client_ui_NativeHorizontalScrollbar_1NativeHorizontalScrollbarUiBinderImpl_1GenBundle_1default_1StaticClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator$1', 480), Lcom_google_gwt_user_client_ui_NativeVerticalScrollbar_1NativeVerticalScrollbarUiBinderImpl_1GenBundle_1default_1StaticClientBundleGenerator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator', 488), Lcom_google_gwt_user_client_ui_NativeVerticalScrollbar_1NativeVerticalScrollbarUiBinderImpl_1GenBundle_1default_1StaticClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_default_StaticClientBundleGenerator$1', 489), Lcom_lemania_sis_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl', 1414), Lcom_lemania_sis_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1359), Lcom_lemania_sis_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1360), Lcom_lemania_sis_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1361), Lcom_lemania_sis_shared_service_BulletinSubjectRequestFactory_1BulletinSubjectRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl_FactoryImpl', 1447), Lcom_lemania_sis_shared_BulletinSubjectProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'BulletinSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1371), Lcom_lemania_sis_shared_BulletinSubjectProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'BulletinSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1372), Lcom_lemania_sis_shared_BulletinSubjectProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'BulletinSubjectProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1373), Lcom_lemania_sis_shared_service_BulletinBrancheRequestFactory_1BulletinBrancheRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl_FactoryImpl', 1428), Lcom_lemania_sis_shared_BulletinBrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'BulletinBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1365), Lcom_lemania_sis_shared_BulletinBrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'BulletinBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1366), Lcom_lemania_sis_shared_BulletinBrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'BulletinBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1367), Lcom_lemania_sis_shared_service_CoursRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'CoursRequestFactoryImpl', 1460), Lcom_lemania_sis_shared_service_UserRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'UserRequestFactoryImpl', 1522), Lcom_lemania_sis_shared_ProfileProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'ProfileProxy'), Lcom_lemania_sis_shared_service_ProfileRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileRequestFactoryImpl', 1489), Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'StringIndexOutOfBoundsException', 1577), Lcom_google_web_bindery_requestfactory_shared_impl_posers_DatePoser_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.posers.', 'DatePoser', 664), Lcom_google_gwt_text_client_DoubleRenderer_2_classLit = createForClass('com.google.gwt.text.client.', 'DoubleRenderer', 319), Lcom_google_gwt_text_client_DoubleParser_2_classLit = createForClass('com.google.gwt.text.client.', 'DoubleParser', 318), Lcom_lemania_sis_shared_service_CoursRequestFactory_1CoursRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'CoursRequestFactory_CoursRequestContextImpl', 1461), Lcom_lemania_sis_shared_service_CoursRequestFactory_1CoursRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'CoursRequestFactory_CoursRequestContextImpl$3X', 1462), Lcom_lemania_sis_shared_service_CoursRequestFactory_1CoursRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'CoursRequestFactory_CoursRequestContextImpl$4X', 1463), Lcom_lemania_sis_shared_service_UserRequestFactory_1UserRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'UserRequestFactory_UserRequestContextImpl', 1523), Lcom_lemania_sis_shared_service_UserRequestFactory_1UserRequestContextImpl$9X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'UserRequestFactory_UserRequestContextImpl$9X', 1530), Lcom_lemania_sis_shared_service_ProfileRequestFactory_1ProfileRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileRequestFactory_ProfileRequestContextImpl', 1490), Lcom_lemania_sis_shared_service_ProfileRequestFactory_1ProfileRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileRequestFactory_ProfileRequestContextImpl$4X', 1491), Lcom_google_web_bindery_autobean_shared_impl_SplittableList_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableList', 618), Lcom_google_web_bindery_autobean_shared_impl_SplittableSet_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableSet', 620), Lcom_google_web_bindery_autobean_shared_impl_SplittableComplexMap_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableComplexMap', 612), Lcom_google_web_bindery_autobean_shared_impl_SplittableComplexMap$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableComplexMap$1', 613), Lcom_google_web_bindery_autobean_shared_impl_SplittableComplexMap$1$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableComplexMap$1$1', 616), Lcom_google_web_bindery_autobean_shared_impl_SplittableComplexMap$1$1$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableComplexMap$1$1$1', 617), Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableSimpleMap', 621), Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableSimpleMap$1', 622), Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap$1$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableSimpleMap$1$1', 623), Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap$1$1$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableSimpleMap$1$1$1', 624), Lcom_lemania_sis_shared_service_CoursRequestFactory_1CoursRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'CoursRequestFactory_CoursRequestContextImpl_FactoryImpl', 1466), Lcom_lemania_sis_shared_CoursProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1377), Lcom_lemania_sis_shared_CoursProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1378), Lcom_lemania_sis_shared_CoursProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1379), Lcom_lemania_sis_shared_UserProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1404), Lcom_lemania_sis_shared_UserProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1405), Lcom_lemania_sis_shared_UserProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1406), Lcom_lemania_sis_shared_service_UserRequestFactory_1UserRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'UserRequestFactory_UserRequestContextImpl_FactoryImpl', 1531), Lcom_lemania_sis_shared_service_ProfileRequestFactory_1ProfileRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileRequestFactory_ProfileRequestContextImpl_FactoryImpl', 1493), Lcom_lemania_sis_shared_ProfileProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1389), Lcom_lemania_sis_shared_ProfileProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1390), Lcom_lemania_sis_shared_ProfileProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1391);
$entry(onLoad)(26);
