function $setAriaPressedState(element, value){
  $set_0(($clinit_State() , PRESSED), element, initValues(_3Lcom_google_gwt_aria_client_PressedValue_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$PressedValue, [value]));
}

function $setAriaSelectedState(element, value){
  $set_0(($clinit_State() , SELECTED), element, initValues(_3Lcom_google_gwt_aria_client_SelectedValue_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$SelectedValue, [value]));
}

function $clinit_PressedValue(){
  $clinit_PressedValue = nullMethod;
  TRUE_0 = new PressedValue_0('TRUE', 0);
  FALSE_0 = new PressedValue_0('FALSE', 1);
  MIXED = new PressedValue_0('MIXED', 2);
  UNDEFINED_0 = new PressedValue_0('UNDEFINED', 3);
  $VALUES_0 = initValues(_3Lcom_google_gwt_aria_client_PressedValue_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$PressedValue, [TRUE_0, FALSE_0, MIXED, UNDEFINED_0]);
}

function PressedValue_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_PressedValue();
  return $VALUES_0;
}

defineSeed(56, 31, makeCastMap([Q$AriaAttributeType, Q$PressedValue, Q$Serializable, Q$Comparable, Q$Enum]), PressedValue_0);
_.getAriaValue = function getAriaValue_1(){
  switch (this.ordinal) {
    case 0:
      return 'true';
    case 1:
      return 'false';
    case 2:
      return 'mixed';
    case 3:
      return 'undefined';
  }
  return null;
}
;
var $VALUES_0, FALSE_0, MIXED, TRUE_0, UNDEFINED_0;
function $setDate(this$static, dayOfMonth){
  this$static.setDate(dayOfMonth);
  return this$static.getTime();
}

function $setFullYear(this$static, year){
  this$static.setFullYear(year);
  return this$static.getTime();
}

function $setFullYear_0(this$static, year, month, day){
  this$static.setFullYear(year, month, day);
  return this$static.getTime();
}

function $setHours(this$static, hours){
  this$static.setHours(hours);
  return this$static.getTime();
}

function $setHours_0(this$static, hours, mins, secs, ms){
  this$static.setHours(hours, mins, secs, ms);
  return this$static.getTime();
}

function $setMinutes(this$static, minutes){
  this$static.setMinutes(minutes);
  return this$static.getTime();
}

function $setMonth(this$static, month){
  this$static.setMonth(month);
  return this$static.getTime();
}

function $setSeconds(this$static, seconds){
  this$static.setSeconds(seconds);
  return this$static.getTime();
}

function $setTime(this$static, milliseconds){
  this$static.setTime(milliseconds);
  return this$static.getTime();
}

function create_0(year, month, dayOfMonth, hours, minutes, seconds, millis){
  return new Date(year, month, dayOfMonth, hours, minutes, seconds, millis);
}

function $clinit_BlurEvent(){
  $clinit_BlurEvent = nullMethod;
  TYPE = new DomEvent$Type_0('blur', new BlurEvent_0);
}

function $dispatch(handler){
  handler.this$0.popup.showing || $updateDateFromTextBox(handler.this$0);
}

function BlurEvent_0(){
}

defineSeed(230, 231, {}, BlurEvent_0);
_.dispatch_0 = function dispatch_0(handler){
  $dispatch(dynamicCast(handler, Q$BlurHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_1(){
  return TYPE;
}
;
var TYPE;
function $clinit_KeyDownEvent(){
  $clinit_KeyDownEvent = nullMethod;
  TYPE_3 = new DomEvent$Type_0('keydown', new KeyDownEvent_0);
}

function KeyDownEvent_0(){
}

defineSeed(244, 242, {}, KeyDownEvent_0);
_.dispatch_0 = function dispatch_4(handler){
  dynamicCast(handler, Q$KeyDownHandler).onKeyDown(this);
}
;
_.getAssociatedType_1 = function getAssociatedType_5(){
  return TYPE_3;
}
;
var TYPE_3;
defineSeed(258, 232, {});
_.dispatch_0 = function dispatch_14(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType_0 = function getAssociatedType_15(){
  return TYPE_13;
}
;
var TYPE_13 = null;
function fire_3(){
}

function $clinit_DateTimeFormat(){
  $clinit_DateTimeFormat = nullMethod;
  new HashMap_0;
}

function $addPart(this$static, buf, count){
  var oldLength;
  if ($toString_0(buf.data).length > 0) {
    $add_19(this$static.patternParts, new DateTimeFormat$PatternPart_0($toString_0(buf.data), count));
    oldLength = $toString_0(buf.data).length;
    0 < oldLength?($replace(buf.data, 0, oldLength, '') , buf):0 > oldLength && $append_6(buf, initDim(_3C_classLit, makeCastMap([Q$Serializable]), -1, -oldLength, 1));
  }
}

function $format(this$static, date, timeZone){
  var ch, diff, i, j, keepDate, keepTime, n, toAppendTo, trailQuote;
  !timeZone && (timeZone = createTimeZone(date.jsdate.getTimezoneOffset()));
  diff = (date.jsdate.getTimezoneOffset() - timeZone.standardOffset) * 60000;
  keepDate = new Date_3(add_0(fromDouble(date.jsdate.getTime()), fromInt(diff)));
  keepTime = keepDate;
  if (keepDate.jsdate.getTimezoneOffset() != date.jsdate.getTimezoneOffset()) {
    diff > 0?(diff -= 86400000):(diff += 86400000);
    keepTime = new Date_3(add_0(fromDouble(date.jsdate.getTime()), fromInt(diff)));
  }
  toAppendTo = new StringBuffer_1;
  n = this$static.pattern.length;
  for (i = 0; i < n;) {
    ch = $charAt(this$static.pattern, i);
    if (ch >= 97 && ch <= 122 || ch >= 65 && ch <= 90) {
      for (j = i + 1; j < n && $charAt(this$static.pattern, j) == ch; ++j) {
      }
      $subFormat(toAppendTo, ch, j - i, keepDate, keepTime, timeZone);
      i = j;
    }
     else if (ch == 39) {
      ++i;
      if (i < n && $charAt(this$static.pattern, i) == 39) {
        $appendNonNull(toAppendTo.data, "'");
        ++i;
        continue;
      }
      trailQuote = false;
      while (!trailQuote) {
        j = i;
        while (j < n && $charAt(this$static.pattern, j) != 39) {
          ++j;
        }
        if (j >= n) {
          throw new IllegalArgumentException_1("Missing trailing '");
        }
        j + 1 < n && $charAt(this$static.pattern, j + 1) == 39?++j:(trailQuote = true);
        $append_5(toAppendTo, $substring_0(this$static.pattern, i, j));
        i = j + 1;
      }
    }
     else {
      $appendNonNull(toAppendTo.data, String.fromCharCode(ch));
      ++i;
    }
  }
  return $toString_0(toAppendTo.data);
}

function $formatFractionalSeconds(buf, count, date){
  var time, value;
  time = fromDouble(date.jsdate.getTime());
  if (lt(time, P0_longLit)) {
    value = 1000 - toInt(mod(neg(time), P3e8_longLit));
    value == 1000 && (value = 0);
  }
   else {
    value = toInt(mod(time, P3e8_longLit));
  }
  if (count == 1) {
    value = ~~((value + 50) / 100) < 9?~~((value + 50) / 100):9;
    $appendNonNull(buf.data, String.fromCharCode(48 + value & 65535));
  }
   else if (count == 2) {
    value = ~~((value + 5) / 10) < 99?~~((value + 5) / 10):99;
    $zeroPaddingNumber(buf, value, 2);
  }
   else {
    $zeroPaddingNumber(buf, value, 3);
    count > 3 && $zeroPaddingNumber(buf, 0, count - 3);
  }
}

function $formatMonth(buf, count, date){
  var value;
  value = date.jsdate.getMonth();
  switch (count) {
    case 5:
      $append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value]);
      break;
    case 4:
      $append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value]);
      break;
    case 3:
      $append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value]);
      break;
    default:$zeroPaddingNumber(buf, value + 1, count);
  }
}

function $formatYear(buf, count, date){
  var value;
  value = date.jsdate.getFullYear() - 1900 + 1900;
  value < 0 && (value = -value);
  switch (count) {
    case 1:
      $append_0(buf.data, value);
      break;
    case 2:
      $zeroPaddingNumber(buf, value % 100, 2);
      break;
    default:$zeroPaddingNumber(buf, value, count);
  }
}

function $getNextCharCountInPattern(pattern, start){
  var ch, next;
  ch = pattern.charCodeAt(start);
  next = start + 1;
  while (next < pattern.length && pattern.charCodeAt(next) == ch) {
    ++next;
  }
  return next - start;
}

function $identifyAbutStart(this$static){
  var abut, i, len;
  abut = false;
  len = this$static.patternParts.size_0;
  for (i = 0; i < len; ++i) {
    if ($isNumeric(dynamicCast($get_8(this$static.patternParts, i), Q$DateTimeFormat$PatternPart))) {
      if (!abut && i + 1 < len && $isNumeric(dynamicCast($get_8(this$static.patternParts, i + 1), Q$DateTimeFormat$PatternPart))) {
        abut = true;
        dynamicCast($get_8(this$static.patternParts, i), Q$DateTimeFormat$PatternPart).abutStart = true;
      }
    }
     else {
      abut = false;
    }
  }
}

function $isNumeric(part){
  var i;
  if (part.count <= 0) {
    return false;
  }
  i = $indexOf_2('MLydhHmsSDkK', fromCodePoint(part.text_0.charCodeAt(0)));
  return i > 1 || i >= 0 && part.count < 3;
}

function $matchString(text, start, data, pos){
  var bestMatch, bestMatchLength, count, i, length_0, textInLowerCase;
  count = data.length;
  bestMatchLength = 0;
  bestMatch = -1;
  textInLowerCase = $substring(text, start).toLowerCase();
  for (i = 0; i < count; ++i) {
    length_0 = data[i].length;
    if (length_0 > bestMatchLength && $indexOf_2(textInLowerCase, data[i].toLowerCase()) == 0) {
      bestMatch = i;
      bestMatchLength = length_0;
    }
  }
  bestMatch >= 0 && (pos[0] = start + bestMatchLength);
  return bestMatch;
}

function $parse(this$static, text, date){
  var abutPass, abutPat, abutStart, cal, count, i, parsePos, part, s;
  cal = new DateRecord_0;
  parsePos = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [0]);
  abutPat = -1;
  abutStart = 0;
  abutPass = 0;
  for (i = 0; i < this$static.patternParts.size_0; ++i) {
    part = dynamicCast($get_8(this$static.patternParts, i), Q$DateTimeFormat$PatternPart);
    if (part.count > 0) {
      if (abutPat < 0 && part.abutStart) {
        abutPat = i;
        abutStart = parsePos[0];
        abutPass = 0;
      }
      if (abutPat >= 0) {
        count = part.count;
        if (i == abutPat) {
          count -= abutPass++;
          if (count == 0) {
            return 0;
          }
        }
        if (!$subParse(text, parsePos, part, count, cal)) {
          i = abutPat - 1;
          parsePos[0] = abutStart;
          continue;
        }
      }
       else {
        abutPat = -1;
        if (!$subParse(text, parsePos, part, 0, cal)) {
          return 0;
        }
      }
    }
     else {
      abutPat = -1;
      if (part.text_0.charCodeAt(0) == 32) {
        s = parsePos[0];
        $skipSpace(text, parsePos);
        if (parsePos[0] > s) {
          continue;
        }
      }
       else if ($startsWith(text, part.text_0, parsePos[0])) {
        parsePos[0] += part.text_0.length;
        continue;
      }
      return 0;
    }
  }
  if (!$calcDate(cal, date)) {
    return 0;
  }
  return parsePos[0];
}

function $parse_0(this$static, text){
  var charsConsumed, curDate, date;
  curDate = new Date_1;
  date = new Date_2(curDate.jsdate.getFullYear() - 1900, curDate.jsdate.getMonth(), curDate.jsdate.getDate());
  charsConsumed = $parse(this$static, text, date);
  if (charsConsumed == 0 || charsConsumed < text.length) {
    throw new IllegalArgumentException_1(text);
  }
  return date;
}

function $parseInt(text, pos){
  var ch, ind, ret;
  ret = 0;
  ind = pos[0];
  if (ind >= text.length) {
    return -1;
  }
  ch = text.charCodeAt(ind);
  while (ch >= 48 && ch <= 57) {
    ret = ret * 10 + (ch - 48);
    ++ind;
    if (ind >= text.length) {
      break;
    }
    ch = text.charCodeAt(ind);
  }
  ind > pos[0]?(pos[0] = ind):(ret = -1);
  return ret;
}

function $parsePattern(this$static, pattern){
  var buf, ch, count, i, inQuote;
  buf = new StringBuffer_1;
  inQuote = false;
  for (i = 0; i < pattern.length; ++i) {
    ch = pattern.charCodeAt(i);
    if (ch == 32) {
      $addPart(this$static, buf, 0);
      $appendNonNull(buf.data, ' ');
      $addPart(this$static, buf, 0);
      while (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 32) {
        ++i;
      }
      continue;
    }
    if (inQuote) {
      if (ch == 39) {
        if (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 39) {
          $appendNonNull(buf.data, "'");
          ++i;
        }
         else {
          inQuote = false;
        }
      }
       else {
        $appendNonNull(buf.data, String.fromCharCode(ch));
      }
      continue;
    }
    if ($indexOf_2('GyMLdkHmsSEcDahKzZv', fromCodePoint(ch)) > 0) {
      $addPart(this$static, buf, 0);
      $appendNonNull(buf.data, String.fromCharCode(ch));
      count = $getNextCharCountInPattern(pattern, i);
      $addPart(this$static, buf, count);
      i += count - 1;
      continue;
    }
    if (ch == 39) {
      if (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 39) {
        $appendNonNull(buf.data, "'");
        ++i;
      }
       else {
        inQuote = true;
      }
    }
     else {
      $appendNonNull(buf.data, String.fromCharCode(ch));
    }
  }
  $addPart(this$static, buf, 0);
  $identifyAbutStart(this$static);
}

function $parseTimeZoneOffset(text, pos, cal){
  var offset, sign, st, value;
  if (pos[0] >= text.length) {
    cal.tzOffset = 0;
    return true;
  }
  switch (text.charCodeAt(pos[0])) {
    case 43:
      sign = 1;
      break;
    case 45:
      sign = -1;
      break;
    default:cal.tzOffset = 0;
      return true;
  }
  ++pos[0];
  st = pos[0];
  value = $parseInt(text, pos);
  if (value == 0 && pos[0] == st) {
    return false;
  }
  if (pos[0] < text.length && text.charCodeAt(pos[0]) == 58) {
    offset = value * 60;
    ++pos[0];
    st = pos[0];
    value = $parseInt(text, pos);
    if (value == 0 && pos[0] == st) {
      return false;
    }
    offset += value;
  }
   else {
    offset = value;
    value < 24 && pos[0] - st <= 2?(offset *= 60):(offset = value % 100 + ~~(value / 100) * 60);
  }
  offset *= sign;
  cal.tzOffset = -offset;
  return true;
}

function $skipSpace(text, pos){
  while (pos[0] < text.length && $indexOf_2(' \t\r\n', fromCodePoint(text.charCodeAt(pos[0]))) >= 0) {
    ++pos[0];
  }
}

function $subFormat(buf, ch, count, adjustedDate, adjustedTime, timezone){
  var value, value_0, value_1, value_2, value_3, value_4, value_5, value_6, value_7, value_8, value_9, value_10;
  switch (ch) {
    case 71:
      value = adjustedDate.jsdate.getFullYear() - 1900 >= -1900?1:0;
      count >= 4?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Before Christ', 'Anno Domini'])[value]):$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['BC', 'AD'])[value]);
      break;
    case 121:
      $formatYear(buf, count, adjustedDate);
      break;
    case 77:
      $formatMonth(buf, count, adjustedDate);
      break;
    case 107:
      value_0 = adjustedTime.jsdate.getHours();
      value_0 == 0?$zeroPaddingNumber(buf, 24, count):$zeroPaddingNumber(buf, value_0, count);
      break;
    case 83:
      $formatFractionalSeconds(buf, count, adjustedTime);
      break;
    case 69:
      value_1 = adjustedDate.jsdate.getDay();
      count == 5?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value_1]):count == 4?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value_1]):$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value_1]);
      break;
    case 97:
      adjustedTime.jsdate.getHours() >= 12 && adjustedTime.jsdate.getHours() < 24?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['AM', 'PM'])[1]):$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['AM', 'PM'])[0]);
      break;
    case 104:
      value_2 = adjustedTime.jsdate.getHours() % 12;
      value_2 == 0?$zeroPaddingNumber(buf, 12, count):$zeroPaddingNumber(buf, value_2, count);
      break;
    case 75:
      value_3 = adjustedTime.jsdate.getHours() % 12;
      $zeroPaddingNumber(buf, value_3, count);
      break;
    case 72:
      value_4 = adjustedTime.jsdate.getHours();
      $zeroPaddingNumber(buf, value_4, count);
      break;
    case 99:
      value_5 = adjustedDate.jsdate.getDay();
      count == 5?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value_5]):count == 4?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value_5]):count == 3?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value_5]):$zeroPaddingNumber(buf, value_5, 1);
      break;
    case 76:
      value_6 = adjustedDate.jsdate.getMonth();
      count == 5?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value_6]):count == 4?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value_6]):count == 3?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value_6]):$zeroPaddingNumber(buf, value_6 + 1, count);
      break;
    case 81:
      value_7 = ~~(adjustedDate.jsdate.getMonth() / 3);
      count < 4?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Q1', 'Q2', 'Q3', 'Q4'])[value_7]):$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'])[value_7]);
      break;
    case 100:
      value_8 = adjustedDate.jsdate.getDate();
      $zeroPaddingNumber(buf, value_8, count);
      break;
    case 109:
      value_9 = adjustedTime.jsdate.getMinutes();
      $zeroPaddingNumber(buf, value_9, count);
      break;
    case 115:
      value_10 = adjustedTime.jsdate.getSeconds();
      $zeroPaddingNumber(buf, value_10, count);
      break;
    case 122:
      count < 4?$append_5(buf, timezone.tzNames[0]):$append_5(buf, timezone.tzNames[1]);
      break;
    case 118:
      $append_5(buf, timezone.timezoneID);
      break;
    case 90:
      count < 3?$append_5(buf, $getRFCTimeZoneString(timezone)):count == 3?$append_5(buf, $getISOTimeZoneString(timezone)):$append_5(buf, composeGMTString(timezone.standardOffset));
      break;
    default:return false;
  }
  return true;
}

function $subParse(text, pos, part, digitCount, cal){
  var ch, start, value;
  $skipSpace(text, pos);
  start = pos[0];
  ch = part.text_0.charCodeAt(0);
  value = -1;
  if ($isNumeric(part)) {
    if (digitCount > 0) {
      if (start + digitCount > text.length) {
        return false;
      }
      value = $parseInt(text.substr(0, start + digitCount - 0), pos);
    }
     else {
      value = $parseInt(text, pos);
    }
  }
  switch (ch) {
    case 71:
      value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Before Christ', 'Anno Domini']), pos);
      cal.era = value;
      return true;
    case 77:
      return $subParseMonth(text, pos, cal, value, start);
    case 76:
      return $subParseStandaloneMonth(text, pos, cal, value, start);
    case 69:
      return $subParseDayOfWeek(text, pos, start, cal);
    case 99:
      return $subParseStandaloneDay(text, pos, start, cal);
    case 97:
      value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['AM', 'PM']), pos);
      cal.ampm = value;
      return true;
    case 121:
      return $subParseYear(text, pos, start, value, part, cal);
    case 100:
      if (value <= 0) {
        return false;
      }

      cal.dayOfMonth = value;
      return true;
    case 83:
      if (value < 0) {
        return false;
      }

      return $subParseFractionalSeconds(value, start, pos[0], cal);
    case 104:
      value == 12 && (value = 0);
    case 75:
    case 107:
    case 72:
      if (value < 0) {
        return false;
      }

      cal.hours = value;
      return true;
    case 109:
      if (value < 0) {
        return false;
      }

      cal.minutes = value;
      return true;
    case 115:
      if (value < 0) {
        return false;
      }

      cal.seconds = value;
      return true;
    case 90:
      if (start < text.length && text.charCodeAt(start) == 90) {
        ++pos[0];
        cal.tzOffset = 0;
        return true;
      }

    case 122:
    case 118:
      return $subParseTimeZoneInGMT(text, start, pos, cal);
    default:return false;
  }
}

function $subParseDayOfWeek(text, pos, start, cal){
  var value;
  value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']), pos);
  value < 0 && (value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']), pos));
  if (value < 0) {
    return false;
  }
  cal.dayOfWeek = value;
  return true;
}

function $subParseFractionalSeconds(value, start, end, cal){
  var a, i;
  i = end - start;
  if (i < 3) {
    while (i < 3) {
      value *= 10;
      ++i;
    }
  }
   else {
    a = 1;
    while (i > 3) {
      a *= 10;
      --i;
    }
    value = ~~((value + (a >> 1)) / a);
  }
  cal.milliseconds = value;
  return true;
}

function $subParseMonth(text, pos, cal, value, start){
  if (value < 0) {
    value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']), pos);
    value < 0 && (value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']), pos));
    if (value < 0) {
      return false;
    }
    cal.month = value;
    return true;
  }
   else if (value > 0) {
    cal.month = value - 1;
    return true;
  }
  return false;
}

function $subParseStandaloneDay(text, pos, start, cal){
  var value;
  value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']), pos);
  value < 0 && (value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']), pos));
  if (value < 0) {
    return false;
  }
  cal.dayOfWeek = value;
  return true;
}

function $subParseStandaloneMonth(text, pos, cal, value, start){
  if (value < 0) {
    value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']), pos);
    value < 0 && (value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']), pos));
    if (value < 0) {
      return false;
    }
    cal.month = value;
    return true;
  }
   else if (value > 0) {
    cal.month = value - 1;
    return true;
  }
  return false;
}

function $subParseTimeZoneInGMT(text, start, pos, cal){
  if (!(start < 0 || start >= text.length) && text.indexOf('GMT', start) == start) {
    pos[0] = start + 3;
    return $parseTimeZoneOffset(text, pos, cal);
  }
  if (!(start < 0 || start >= text.length) && text.indexOf('UTC', start) == start) {
    pos[0] = start + 3;
    return $parseTimeZoneOffset(text, pos, cal);
  }
  return $parseTimeZoneOffset(text, pos, cal);
}

function $subParseYear(text, pos, start, value, part, cal){
  var ambiguousTwoDigitYear, ch, date, defaultCenturyStartYear;
  ch = 32;
  if (value < 0) {
    if (pos[0] >= text.length) {
      return false;
    }
    ch = text.charCodeAt(pos[0]);
    if (ch != 43 && ch != 45) {
      return false;
    }
    ++pos[0];
    value = $parseInt(text, pos);
    if (value < 0) {
      return false;
    }
    ch == 45 && (value = -value);
  }
  if (ch == 32 && pos[0] - start == 2 && part.count == 2) {
    date = new Date_1;
    defaultCenturyStartYear = date.jsdate.getFullYear() - 1900 + 1900 - 80;
    ambiguousTwoDigitYear = defaultCenturyStartYear % 100;
    cal.ambiguousYear = value == ambiguousTwoDigitYear;
    value += ~~(defaultCenturyStartYear / 100) * 100 + (value < ambiguousTwoDigitYear?100:0);
  }
  cal.year = value;
  return true;
}

function $zeroPaddingNumber(buf, value, minWidth){
  var b, i;
  b = 10;
  for (i = 0; i < minWidth - 1; ++i) {
    value < b && ($appendNonNull(buf.data, '0') , buf);
    b *= 10;
  }
  $append_0(buf.data, value);
}

defineSeed(285, 1, {});
_.pattern = null;
function $clinit_DateTimeFormat_0(){
  $clinit_DateTimeFormat_0 = nullMethod;
  $clinit_DateTimeFormat();
  cache = new HashMap_0;
}

function DateTimeFormat_1(pattern){
  $clinit_DateTimeFormat();
  this.patternParts = new ArrayList_0;
  this.pattern = pattern;
  $parsePattern(this, pattern);
}

function getFormat(predef){
  $clinit_DateTimeFormat_0();
  var dtfi, pattern;
  if (usesFixedEnglishStrings(predef)) {
    switch (predef.ordinal) {
      case 1:
        pattern = 'EEE, d MMM yyyy HH:mm:ss Z';
        break;
      case 0:
        pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZZZ";
        break;
      default:throw new IllegalStateException_1('Unexpected predef type ' + predef);
    }
    return getFormat_0(pattern, new DateTimeFormatInfoImpl_en_0);
  }
  dtfi = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1));
  switch (predef.ordinal) {
    case 2:
      pattern = dtfi.dateFormatFull();
      break;
    case 3:
      pattern = dtfi.dateFormatLong();
      break;
    case 4:
      pattern = dtfi.dateFormatMedium();
      break;
    case 5:
      pattern = dtfi.dateFormatShort();
      break;
    case 10:
      pattern = $dateTimeFull(dtfi.timeFormatFull(), dtfi.dateFormatFull());
      break;
    case 11:
      pattern = $dateTimeLong(dtfi.timeFormatLong(), dtfi.dateFormatLong());
      break;
    case 12:
      pattern = $dateTimeMedium(dtfi.timeFormatMedium(), dtfi.dateFormatMedium());
      break;
    case 13:
      pattern = $dateTimeShort(dtfi.timeFormatShort(), dtfi.dateFormatShort());
      break;
    case 14:
      pattern = 'd';
      break;
    case 17:
      pattern = 'HH:mm';
      break;
    case 18:
      pattern = 'HH:mm:ss';
      break;
    case 15:
      pattern = 'h:mm a';
      break;
    case 16:
      pattern = 'h:mm:ss a';
      break;
    case 19:
      pattern = 'mm:ss';
      break;
    case 20:
      pattern = 'LLLL';
      break;
    case 21:
      pattern = 'LLL';
      break;
    case 22:
      pattern = 'MMM d';
      break;
    case 23:
      pattern = 'MMMM d';
      break;
    case 24:
      pattern = dtfi.formatMonthNumDay();
      break;
    case 25:
      pattern = dtfi.formatMonthFullWeekdayDay();
      break;
    case 6:
      pattern = dtfi.timeFormatFull();
      break;
    case 7:
      pattern = dtfi.timeFormatLong();
      break;
    case 8:
      pattern = dtfi.timeFormatMedium();
      break;
    case 9:
      pattern = dtfi.timeFormatShort();
      break;
    case 26:
      pattern = 'y';
      break;
    case 27:
      pattern = dtfi.formatYearMonthFull();
      break;
    case 28:
      pattern = dtfi.formatYearMonthAbbrev();
      break;
    case 29:
      pattern = dtfi.formatYearMonthAbbrevDay();
      break;
    case 30:
      pattern = dtfi.formatYearMonthFullDay();
      break;
    case 31:
      pattern = dtfi.formatYearMonthNum();
      break;
    case 32:
      pattern = dtfi.formatYearMonthNumDay();
      break;
    case 33:
      pattern = dtfi.formatYearMonthWeekdayDay();
      break;
    case 34:
      pattern = dtfi.formatYearQuarterFull();
      break;
    case 35:
      pattern = dtfi.formatYearQuarterShort();
      break;
    default:throw new IllegalArgumentException_1('Unexpected predefined format ' + predef);
  }
  return getFormat_0(pattern, dtfi);
}

function getFormat_0(pattern, dtfi){
  $clinit_DateTimeFormat_0();
  var defaultDtfi, dtf;
  defaultDtfi = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1));
  dtf = null;
  dtfi == defaultDtfi && (dtf = dynamicCast(cache.get_1(pattern), Q$DateTimeFormat));
  if (!dtf) {
    dtf = new DateTimeFormat_1(pattern);
    dtfi == defaultDtfi && cache.put(pattern, dtf);
  }
  return dtf;
}

function usesFixedEnglishStrings(predef){
  switch (predef.ordinal) {
    case 0:
    case 1:
      return true;
    default:return false;
  }
}

defineSeed(284, 285, makeCastMap([Q$DateTimeFormat]), DateTimeFormat_1);
var cache = null;
function $clinit_DateTimeFormat$PredefinedFormat(){
  $clinit_DateTimeFormat$PredefinedFormat = nullMethod;
  ISO_8601 = new DateTimeFormat$PredefinedFormat_0('ISO_8601', 0);
  RFC_2822 = new DateTimeFormat$PredefinedFormat_0('RFC_2822', 1);
  DATE_FULL = new DateTimeFormat$PredefinedFormat_0('DATE_FULL', 2);
  DATE_LONG = new DateTimeFormat$PredefinedFormat_0('DATE_LONG', 3);
  DATE_MEDIUM = new DateTimeFormat$PredefinedFormat_0('DATE_MEDIUM', 4);
  DATE_SHORT = new DateTimeFormat$PredefinedFormat_0('DATE_SHORT', 5);
  TIME_FULL = new DateTimeFormat$PredefinedFormat_0('TIME_FULL', 6);
  TIME_LONG = new DateTimeFormat$PredefinedFormat_0('TIME_LONG', 7);
  TIME_MEDIUM = new DateTimeFormat$PredefinedFormat_0('TIME_MEDIUM', 8);
  TIME_SHORT = new DateTimeFormat$PredefinedFormat_0('TIME_SHORT', 9);
  DATE_TIME_FULL = new DateTimeFormat$PredefinedFormat_0('DATE_TIME_FULL', 10);
  DATE_TIME_LONG = new DateTimeFormat$PredefinedFormat_0('DATE_TIME_LONG', 11);
  DATE_TIME_MEDIUM = new DateTimeFormat$PredefinedFormat_0('DATE_TIME_MEDIUM', 12);
  DATE_TIME_SHORT = new DateTimeFormat$PredefinedFormat_0('DATE_TIME_SHORT', 13);
  DAY = new DateTimeFormat$PredefinedFormat_0('DAY', 14);
  HOUR_MINUTE = new DateTimeFormat$PredefinedFormat_0('HOUR_MINUTE', 15);
  HOUR_MINUTE_SECOND = new DateTimeFormat$PredefinedFormat_0('HOUR_MINUTE_SECOND', 16);
  HOUR24_MINUTE = new DateTimeFormat$PredefinedFormat_0('HOUR24_MINUTE', 17);
  HOUR24_MINUTE_SECOND = new DateTimeFormat$PredefinedFormat_0('HOUR24_MINUTE_SECOND', 18);
  MINUTE_SECOND = new DateTimeFormat$PredefinedFormat_0('MINUTE_SECOND', 19);
  MONTH = new DateTimeFormat$PredefinedFormat_0('MONTH', 20);
  MONTH_ABBR = new DateTimeFormat$PredefinedFormat_0('MONTH_ABBR', 21);
  MONTH_ABBR_DAY = new DateTimeFormat$PredefinedFormat_0('MONTH_ABBR_DAY', 22);
  MONTH_DAY = new DateTimeFormat$PredefinedFormat_0('MONTH_DAY', 23);
  MONTH_NUM_DAY = new DateTimeFormat$PredefinedFormat_0('MONTH_NUM_DAY', 24);
  MONTH_WEEKDAY_DAY = new DateTimeFormat$PredefinedFormat_0('MONTH_WEEKDAY_DAY', 25);
  YEAR = new DateTimeFormat$PredefinedFormat_0('YEAR', 26);
  YEAR_MONTH = new DateTimeFormat$PredefinedFormat_0('YEAR_MONTH', 27);
  YEAR_MONTH_ABBR = new DateTimeFormat$PredefinedFormat_0('YEAR_MONTH_ABBR', 28);
  YEAR_MONTH_ABBR_DAY = new DateTimeFormat$PredefinedFormat_0('YEAR_MONTH_ABBR_DAY', 29);
  YEAR_MONTH_DAY = new DateTimeFormat$PredefinedFormat_0('YEAR_MONTH_DAY', 30);
  YEAR_MONTH_NUM = new DateTimeFormat$PredefinedFormat_0('YEAR_MONTH_NUM', 31);
  YEAR_MONTH_NUM_DAY = new DateTimeFormat$PredefinedFormat_0('YEAR_MONTH_NUM_DAY', 32);
  YEAR_MONTH_WEEKDAY_DAY = new DateTimeFormat$PredefinedFormat_0('YEAR_MONTH_WEEKDAY_DAY', 33);
  YEAR_QUARTER = new DateTimeFormat$PredefinedFormat_0('YEAR_QUARTER', 34);
  YEAR_QUARTER_ABBR = new DateTimeFormat$PredefinedFormat_0('YEAR_QUARTER_ABBR', 35);
  $VALUES_11 = initValues(_3Lcom_google_gwt_i18n_client_DateTimeFormat$PredefinedFormat_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$DateTimeFormat$PredefinedFormat, [ISO_8601, RFC_2822, DATE_FULL, DATE_LONG, DATE_MEDIUM, DATE_SHORT, TIME_FULL, TIME_LONG, TIME_MEDIUM, TIME_SHORT, DATE_TIME_FULL, DATE_TIME_LONG, DATE_TIME_MEDIUM, DATE_TIME_SHORT, DAY, HOUR_MINUTE, HOUR_MINUTE_SECOND, HOUR24_MINUTE, HOUR24_MINUTE_SECOND, MINUTE_SECOND, MONTH, MONTH_ABBR, MONTH_ABBR_DAY, MONTH_DAY, MONTH_NUM_DAY, MONTH_WEEKDAY_DAY, YEAR, YEAR_MONTH, YEAR_MONTH_ABBR, YEAR_MONTH_ABBR_DAY, YEAR_MONTH_DAY, YEAR_MONTH_NUM, YEAR_MONTH_NUM_DAY, YEAR_MONTH_WEEKDAY_DAY, YEAR_QUARTER, YEAR_QUARTER_ABBR]);
}

function DateTimeFormat$PredefinedFormat_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_12(){
  $clinit_DateTimeFormat$PredefinedFormat();
  return $VALUES_11;
}

defineSeed(286, 31, makeCastMap([Q$DateTimeFormat$PredefinedFormat, Q$Serializable, Q$Comparable, Q$Enum]), DateTimeFormat$PredefinedFormat_0);
var $VALUES_11, DATE_FULL, DATE_LONG, DATE_MEDIUM, DATE_SHORT, DATE_TIME_FULL, DATE_TIME_LONG, DATE_TIME_MEDIUM, DATE_TIME_SHORT, DAY, HOUR24_MINUTE, HOUR24_MINUTE_SECOND, HOUR_MINUTE, HOUR_MINUTE_SECOND, ISO_8601, MINUTE_SECOND, MONTH, MONTH_ABBR, MONTH_ABBR_DAY, MONTH_DAY, MONTH_NUM_DAY, MONTH_WEEKDAY_DAY, RFC_2822, TIME_FULL, TIME_LONG, TIME_MEDIUM, TIME_SHORT, YEAR, YEAR_MONTH, YEAR_MONTH_ABBR, YEAR_MONTH_ABBR_DAY, YEAR_MONTH_DAY, YEAR_MONTH_NUM, YEAR_MONTH_NUM_DAY, YEAR_MONTH_WEEKDAY_DAY, YEAR_QUARTER, YEAR_QUARTER_ABBR;
function $dateTimeFull(timePattern, datePattern){
  return datePattern + ' ' + timePattern;
}

function $dateTimeLong(timePattern, datePattern){
  return datePattern + ' ' + timePattern;
}

function $dateTimeMedium(timePattern, datePattern){
  return datePattern + ' ' + timePattern;
}

function $dateTimeShort(timePattern, datePattern){
  return datePattern + ' ' + timePattern;
}

defineSeed(288, 1, {});
_.dateFormatFull = function dateFormatFull(){
  return 'EEEE, y MMMM dd';
}
;
_.dateFormatLong = function dateFormatLong(){
  return 'y MMMM d';
}
;
_.dateFormatMedium = function dateFormatMedium(){
  return 'y MMM d';
}
;
_.dateFormatShort = function dateFormatShort(){
  return 'yyyy-MM-dd';
}
;
_.firstDayOfTheWeek = function firstDayOfTheWeek(){
  return 1;
}
;
_.formatMonthFullWeekdayDay = function formatMonthFullWeekdayDay(){
  return 'EEEE MMMM d';
}
;
_.formatMonthNumDay = function formatMonthNumDay(){
  return 'M-d';
}
;
_.formatYearMonthAbbrev = function formatYearMonthAbbrev(){
  return 'y MMM';
}
;
_.formatYearMonthAbbrevDay = function formatYearMonthAbbrevDay(){
  return 'y MMM d';
}
;
_.formatYearMonthFull = function formatYearMonthFull(){
  return 'y MMMM';
}
;
_.formatYearMonthFullDay = function formatYearMonthFullDay(){
  return 'y MMMM d';
}
;
_.formatYearMonthNum = function formatYearMonthNum(){
  return 'y-M';
}
;
_.formatYearMonthNumDay = function formatYearMonthNumDay(){
  return 'y-M-d';
}
;
_.formatYearMonthWeekdayDay = function formatYearMonthWeekdayDay(){
  return 'EEE, y MMM d';
}
;
_.formatYearQuarterFull = function formatYearQuarterFull(){
  return 'y QQQQ';
}
;
_.formatYearQuarterShort = function formatYearQuarterShort(){
  return 'y Q';
}
;
_.timeFormatFull = function timeFormatFull(){
  return 'HH:mm:ss zzzz';
}
;
_.timeFormatLong = function timeFormatLong(){
  return 'HH:mm:ss z';
}
;
_.timeFormatMedium = function timeFormatMedium(){
  return 'HH:mm:ss';
}
;
_.timeFormatShort = function timeFormatShort(){
  return 'HH:mm';
}
;
defineSeed(287, 288, {});
function $getDateTimeFormatInfo(this$static){
  !this$static.dateTimeFormatInfo && (this$static.dateTimeFormatInfo = new DateTimeFormatInfoImpl_0);
  return this$static.dateTimeFormatInfo;
}

function $getISOTimeZoneString(this$static){
  var data, offset;
  offset = -this$static.standardOffset;
  data = initValues(_3C_classLit, makeCastMap([Q$Serializable]), -1, [43, 48, 48, 58, 48, 48]);
  if (offset < 0) {
    data[0] = 45;
    offset = -offset;
  }
  data[1] = data[1] + ~~(~~(offset / 60) / 10) & 65535;
  data[2] = data[2] + ~~(offset / 60) % 10 & 65535;
  data[4] = data[4] + ~~(offset % 60 / 10) & 65535;
  data[5] = data[5] + offset % 10 & 65535;
  return valueOf_5(data);
}

function $getRFCTimeZoneString(this$static){
  var data, offset;
  offset = -this$static.standardOffset;
  data = initValues(_3C_classLit, makeCastMap([Q$Serializable]), -1, [43, 48, 48, 48, 48]);
  if (offset < 0) {
    data[0] = 45;
    offset = -offset;
  }
  data[1] = data[1] + ~~(~~(offset / 60) / 10) & 65535;
  data[2] = data[2] + ~~(offset / 60) % 10 & 65535;
  data[3] = data[3] + ~~(offset % 60 / 10) & 65535;
  data[4] = data[4] + offset % 10 & 65535;
  return valueOf_5(data);
}

function TimeZone_0(){
}

function composeGMTString(offset){
  var data;
  data = initValues(_3C_classLit, makeCastMap([Q$Serializable]), -1, [71, 77, 84, 45, 48, 48, 58, 48, 48]);
  if (offset <= 0) {
    data[3] = 43;
    offset = -offset;
  }
  data[4] = data[4] + ~~(~~(offset / 60) / 10) & 65535;
  data[5] = data[5] + ~~(offset / 60) % 10 & 65535;
  data[7] = data[7] + ~~(offset % 60 / 10) & 65535;
  data[8] = data[8] + offset % 10 & 65535;
  return valueOf_5(data);
}

function composePOSIXTimeZoneID(offset){
  var str;
  if (offset == 0) {
    return 'Etc/GMT';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'Etc/GMT-';
  }
   else {
    str = 'Etc/GMT+';
  }
  return str + offsetDisplay(offset);
}

function composeUTCString(offset){
  var str;
  if (offset == 0) {
    return 'UTC';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'UTC+';
  }
   else {
    str = 'UTC-';
  }
  return str + offsetDisplay(offset);
}

function createTimeZone(timeZoneOffsetInMinutes){
  var tz;
  tz = new TimeZone_0;
  tz.standardOffset = timeZoneOffsetInMinutes;
  tz.timezoneID = composePOSIXTimeZoneID(timeZoneOffsetInMinutes);
  tz.tzNames = initDim(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, 2, 0);
  tz.tzNames[0] = composeUTCString(timeZoneOffsetInMinutes);
  tz.tzNames[1] = composeUTCString(timeZoneOffsetInMinutes);
  return tz;
}

function offsetDisplay(offset){
  var hour, mins;
  hour = ~~(offset / 60);
  mins = offset % 60;
  if (mins == 0) {
    return '' + hour;
  }
  return '' + hour + ':' + mins;
}

defineSeed(291, 1, {}, TimeZone_0);
_.standardOffset = 0;
_.timezoneID = null;
_.tzNames = null;
function DateTimeFormatInfoImpl_0(){
}

defineSeed(292, 287, {}, DateTimeFormatInfoImpl_0);
function DateTimeFormatInfoImpl_en_0(){
}

defineSeed(293, 292, {}, DateTimeFormatInfoImpl_en_0);
_.dateFormatFull = function dateFormatFull_0(){
  return 'EEEE, MMMM d, y';
}
;
_.dateFormatLong = function dateFormatLong_0(){
  return 'MMMM d, y';
}
;
_.dateFormatMedium = function dateFormatMedium_0(){
  return 'MMM d, y';
}
;
_.dateFormatShort = function dateFormatShort_0(){
  return 'M/d/yy';
}
;
_.firstDayOfTheWeek = function firstDayOfTheWeek_0(){
  return 0;
}
;
_.formatMonthFullWeekdayDay = function formatMonthFullWeekdayDay_0(){
  return 'EEEE, MMMM d';
}
;
_.formatMonthNumDay = function formatMonthNumDay_0(){
  return 'M/d';
}
;
_.formatYearMonthAbbrev = function formatYearMonthAbbrev_0(){
  return 'MMM y';
}
;
_.formatYearMonthAbbrevDay = function formatYearMonthAbbrevDay_0(){
  return 'MMM d, y';
}
;
_.formatYearMonthFull = function formatYearMonthFull_0(){
  return 'MMMM y';
}
;
_.formatYearMonthFullDay = function formatYearMonthFullDay_0(){
  return 'MMMM d, y';
}
;
_.formatYearMonthNum = function formatYearMonthNum_0(){
  return 'M/y';
}
;
_.formatYearMonthNumDay = function formatYearMonthNumDay_0(){
  return 'M/d/y';
}
;
_.formatYearMonthWeekdayDay = function formatYearMonthWeekdayDay_0(){
  return 'EEE, MMM d, y';
}
;
_.formatYearQuarterFull = function formatYearQuarterFull_0(){
  return 'QQQQ y';
}
;
_.formatYearQuarterShort = function formatYearQuarterShort_0(){
  return 'Q y';
}
;
_.timeFormatFull = function timeFormatFull_0(){
  return 'h:mm:ss a zzzz';
}
;
_.timeFormatLong = function timeFormatLong_0(){
  return 'h:mm:ss a z';
}
;
_.timeFormatMedium = function timeFormatMedium_0(){
  return 'h:mm:ss a';
}
;
_.timeFormatShort = function timeFormatShort_0(){
  return 'h:mm a';
}
;
function DateTimeFormat$PatternPart_0(txt, cnt){
  this.text_0 = txt;
  this.count = cnt;
  this.abutStart = false;
}

defineSeed(294, 1, makeCastMap([Q$DateTimeFormat$PatternPart]), DateTimeFormat$PatternPart_0);
_.abutStart = false;
_.count = 0;
_.text_0 = null;
function $fixDaylightSavings(this$static, hours){
  var badHours, copy, day, newTime, timeDiff, timeDiffHours, timeDiffMinutes;
  if (this$static.jsdate.getHours() % 24 != hours % 24) {
    copy = create(this$static.jsdate.getTime());
    $setDate(copy, copy.getDate() + 1);
    timeDiff = this$static.jsdate.getTimezoneOffset() - copy.getTimezoneOffset();
    if (timeDiff > 0) {
      timeDiffHours = ~~(timeDiff / 60);
      timeDiffMinutes = timeDiff % 60;
      day = this$static.jsdate.getDate();
      badHours = this$static.jsdate.getHours();
      badHours + timeDiffHours >= 24 && ++day;
      newTime = create_0(this$static.jsdate.getFullYear(), this$static.jsdate.getMonth(), day, hours + timeDiffHours, this$static.jsdate.getMinutes() + timeDiffMinutes, this$static.jsdate.getSeconds(), this$static.jsdate.getMilliseconds());
      $setTime(this$static.jsdate, newTime.getTime());
    }
  }
}

function $setDate_0(this$static, date){
  var hours;
  hours = this$static.jsdate.getHours();
  $setDate(this$static.jsdate, date);
  $fixDaylightSavings(this$static, hours);
}

function $setMinutes_0(this$static, minutes){
  var hours;
  hours = this$static.jsdate.getHours() + ~~(minutes / 60);
  $setMinutes(this$static.jsdate, minutes);
  $fixDaylightSavings(this$static, hours);
}

function $setMonth_0(this$static, month){
  var hours;
  hours = this$static.jsdate.getHours();
  $setMonth(this$static.jsdate, month);
  $fixDaylightSavings(this$static, hours);
}

function $setSeconds_0(this$static, seconds){
  var hours;
  hours = this$static.jsdate.getHours() + ~~(seconds / 3600);
  $setSeconds(this$static.jsdate, seconds);
  $fixDaylightSavings(this$static, hours);
}

function $setYear(this$static, year){
  var hours;
  hours = this$static.jsdate.getHours();
  $setFullYear(this$static.jsdate, year + 1900);
  $fixDaylightSavings(this$static, hours);
}

function Date_1(){
  this.jsdate = new Date;
}

function Date_2(year, month, date){
  this.jsdate = new Date;
  $setFullYear_0(this.jsdate, year + 1900, month, date);
  $setHours_0(this.jsdate, 0, 0, 0, 0);
  $fixDaylightSavings(this, 0);
}

function Date_4(date){
  Date_3.call(this, parse(date));
}

function parse(s){
  var parsed;
  parsed = Date.parse(s);
  if (isNaN_0(parsed)) {
    throw new IllegalArgumentException_0;
  }
  return fromDouble(parsed);
}

defineSeed(296, 1, makeCastMap([Q$Serializable, Q$Comparable, Q$Date]), Date_1, Date_2, Date_4);
_.setDate_0 = function setDate(date){
  $setDate_0(this, date);
}
;
_.setHours_0 = function setHours(hours){
  $setHours(this.jsdate, hours);
  $fixDaylightSavings(this, hours);
}
;
_.setMinutes_0 = function setMinutes(minutes){
  $setMinutes_0(this, minutes);
}
;
_.setMonth_0 = function setMonth(month){
  $setMonth_0(this, month);
}
;
_.setSeconds_0 = function setSeconds(seconds){
  $setSeconds_0(this, seconds);
}
;
_.setTime_0 = function setTime(time){
  $setTime(this.jsdate, toDouble(time));
}
;
_.setYear = function setYear(year){
  $setYear(this, year);
}
;
function $calcDate(this$static, date){
  var adjustment, daysInCurrentMonth, defaultCenturyStart, offset, orgDayOfMonth, orgMonth, tmp;
  this$static.era == 0 && this$static.year > 0 && (this$static.year = -(this$static.year - 1));
  this$static.year > -2147483648 && date.setYear(this$static.year - 1900);
  orgDayOfMonth = date.jsdate.getDate();
  date.setDate_0(1);
  this$static.month >= 0 && date.setMonth_0(this$static.month);
  if (this$static.dayOfMonth >= 0) {
    date.setDate_0(this$static.dayOfMonth);
  }
   else if (this$static.month >= 0) {
    tmp = new Date_2(date.jsdate.getFullYear() - 1900, date.jsdate.getMonth(), 35);
    daysInCurrentMonth = 35 - tmp.jsdate.getDate();
    date.setDate_0(daysInCurrentMonth < orgDayOfMonth?daysInCurrentMonth:orgDayOfMonth);
  }
   else {
    date.setDate_0(orgDayOfMonth);
  }
  this$static.hours < 0 && (this$static.hours = date.jsdate.getHours());
  this$static.ampm > 0 && this$static.hours < 12 && (this$static.hours += 12);
  date.setHours_0(this$static.hours);
  this$static.minutes >= 0 && date.setMinutes_0(this$static.minutes);
  this$static.seconds >= 0 && date.setSeconds_0(this$static.seconds);
  this$static.milliseconds >= 0 && date.setTime_0(add_0(mul(div_0(fromDouble(date.jsdate.getTime()), P3e8_longLit), P3e8_longLit), fromInt(this$static.milliseconds)));
  if (this$static.ambiguousYear) {
    defaultCenturyStart = new Date_1;
    defaultCenturyStart.setYear(defaultCenturyStart.jsdate.getFullYear() - 1900 - 80);
    lt(fromDouble(date.jsdate.getTime()), fromDouble(defaultCenturyStart.jsdate.getTime())) && date.setYear(defaultCenturyStart.jsdate.getFullYear() - 1900 + 100);
  }
  if (this$static.dayOfWeek >= 0) {
    if (this$static.dayOfMonth == -1) {
      adjustment = (7 + this$static.dayOfWeek - date.jsdate.getDay()) % 7;
      adjustment > 3 && (adjustment -= 7);
      orgMonth = date.jsdate.getMonth();
      date.setDate_0(date.jsdate.getDate() + adjustment);
      date.jsdate.getMonth() != orgMonth && date.setDate_0(date.jsdate.getDate() + (adjustment > 0?-7:7));
    }
     else {
      if (date.jsdate.getDay() != this$static.dayOfWeek) {
        return false;
      }
    }
  }
  if (this$static.tzOffset > -2147483648) {
    offset = date.jsdate.getTimezoneOffset();
    date.setTime_0(add_0(fromDouble(date.jsdate.getTime()), fromInt((this$static.tzOffset - offset) * 60 * 1000)));
  }
  return true;
}

function DateRecord_0(){
  Date_1.call(this);
  this.era = -1;
  this.ambiguousYear = false;
  this.year = -2147483648;
  this.month = -1;
  this.dayOfMonth = -1;
  this.ampm = -1;
  this.hours = -1;
  this.minutes = -1;
  this.seconds = -1;
  this.milliseconds = -1;
  this.dayOfWeek = -1;
  this.tzOffset = -2147483648;
}

defineSeed(295, 296, makeCastMap([Q$Serializable, Q$Comparable, Q$Date]), DateRecord_0);
_.setHours_0 = function setHours_0(hours){
  this.hours = hours;
}
;
_.setMinutes_0 = function setMinutes_0(minutes){
  this.minutes = minutes;
}
;
_.setMonth_0 = function setMonth_0(month){
  this.month = month;
}
;
_.setSeconds_0 = function setSeconds_0(seconds){
  this.seconds = seconds;
}
;
_.setYear = function setYear_0(value){
  this.year = value;
}
;
_.ambiguousYear = false;
_.ampm = 0;
_.dayOfMonth = 0;
_.dayOfWeek = 0;
_.era = 0;
_.hours = 0;
_.milliseconds = 0;
_.minutes = 0;
_.month = 0;
_.seconds = 0;
_.tzOffset = 0;
_.year = 0;
function $addStyleDependentName(this$static, styleSuffix){
  $setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + styleSuffix, true);
}

function $removeStyleDependentName(this$static, styleSuffix){
  $setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + styleSuffix, false);
}

function $setStyleName_0(this$static, style, add){
  setStyleName(this$static.element, style, add);
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

function releaseCapture(elem){
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  elem.releaseCapture();
}

function setCapture(elem){
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  elem.setCapture();
}

function $cleanupCaptureState(this$static){
  if (this$static.isCapturing || this$static.isFocusing) {
    releaseCapture(this$static.element);
    this$static.isCapturing = false;
    this$static.isFocusing = false;
    (1 & (!this$static.curFace && $setCurrentFace_0(this$static, this$static.up) , this$static.curFace.val$faceID)) > 0 && $toggleDown(this$static);
  }
}

function $getFaceFromID(this$static, id){
  switch (id) {
    case 1:
      return !this$static.down && $setDownFace(this$static, new CustomButton$2_0(this$static, this$static.up, 'down', 1)) , this$static.down;
    case 0:
      return this$static.up;
    case 3:
      return !this$static.downHovering && $setDownHoveringFace(this$static, new CustomButton$2_0(this$static, (!this$static.down && $setDownFace(this$static, new CustomButton$2_0(this$static, this$static.up, 'down', 1)) , this$static.down), 'down-hovering', 3)) , this$static.downHovering;
    case 2:
      return !this$static.upHovering && $setUpHoveringFace(this$static, new CustomButton$2_0(this$static, this$static.up, 'up-hovering', 2)) , this$static.upHovering;
    case 4:
      return !this$static.upDisabled && $setUpDisabledFace(this$static, new CustomButton$2_0(this$static, this$static.up, 'up-disabled', 4)) , this$static.upDisabled;
    case 5:
      return !this$static.downDisabled && $setDownDisabledFace(this$static, new CustomButton$2_0(this$static, (!this$static.down && $setDownFace(this$static, new CustomButton$2_0(this$static, this$static.up, 'down', 1)) , this$static.down), 'down-disabled', 5)) , this$static.downDisabled;
    default:throw new IllegalStateException_1(id + ' is not a known face id.');
  }
}

function $onClick(this$static){
  var evt, evt_0;
  this$static.allowClick = true;
  evt = (evt_0 = $doc.createEventObject() , evt_0.type = 'click' , evt_0.detail = 1 , evt_0.screenX = 0 , evt_0.screenY = 0 , evt_0.clientX = 0 , evt_0.clientY = 0 , evt_0.ctrlKey = false , evt_0.altKey = false , evt_0.shiftKey = false , evt_0.metaKey = false , evt_0.button = 1 , evt_0.relatedTarget = null , evt_0);
  $dispatchEvent(this$static.element, evt);
  this$static.allowClick = false;
}

function $setCurrentFace(this$static, faceID){
  var newFace;
  newFace = $getFaceFromID(this$static, faceID);
  $setCurrentFace_0(this$static, newFace);
}

function $setCurrentFace_0(this$static, newFace){
  var pressed;
  if (this$static.curFace != newFace) {
    !!this$static.curFace && $removeStyleDependentName(this$static, this$static.curFace.val$name);
    this$static.curFace = newFace;
    $setCurrentFaceElement(this$static, $getFace(newFace));
    $addStyleDependentName(this$static, this$static.curFace.val$name);
    !this$static.element['disabled'] && (pressed = (newFace.val$faceID & 1) == 1 , $clinit_Roles() , $setAriaPressedState(this$static.element, ($clinit_PressedValue() , pressed?TRUE_0:FALSE_0)) , undefined);
  }
}

function $setCurrentFaceElement(this$static, newFaceElement){
  if (this$static.curFaceElement != newFaceElement) {
    !!this$static.curFaceElement && $removeChild(this$static.element, this$static.curFaceElement);
    this$static.curFaceElement = newFaceElement;
    appendChild(this$static.element, this$static.curFaceElement);
  }
}

function $setDownDisabledFace(this$static, downDisabled){
  this$static.downDisabled = downDisabled;
}

function $setDownFace(this$static, down){
  this$static.down = down;
}

function $setDownHoveringFace(this$static, downHovering){
  this$static.downHovering = downHovering;
}

function $setUpDisabledFace(this$static, upDisabled){
  this$static.upDisabled = upDisabled;
}

function $setUpFace(this$static, up){
  this$static.up = up;
}

function $setUpHoveringFace(this$static, upHovering){
  this$static.upHovering = upHovering;
}

function $toggleDown(this$static){
  var newFaceID;
  newFaceID = (!this$static.curFace && $setCurrentFace_0(this$static, this$static.up) , this$static.curFace.val$faceID) ^ 1;
  $setCurrentFace(this$static, newFaceID);
}

function $toggleHover(this$static){
  var newFaceID;
  newFaceID = (!this$static.curFace && $setCurrentFace_0(this$static, this$static.up) , this$static.curFace.val$faceID) ^ 2;
  newFaceID &= -5;
  $setCurrentFace(this$static, newFaceID);
}

defineSeed(439, 434, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.getTabIndex = function getTabIndex_1(){
  return this.element.tabIndex;
}
;
_.onAttach = function onAttach_3(){
  !this.curFace && $setCurrentFace_0(this, this.up);
  $onAttach_0(this);
}
;
_.onBrowserEvent_0 = function onBrowserEvent_6(event_0){
  var keyCode, to, type;
  if (this.element['disabled']) {
    return;
  }
  type = $eventGetTypeInt(event_0.type);
  switch (type) {
    case 1:
      if (!this.allowClick) {
        $eventStopPropagation(event_0);
        return;
      }

      break;
    case 4:
      if ((event_0.button || 0) == 1) {
        $focus(this.element);
        (1 & (!this.curFace && $setCurrentFace_0(this, this.up) , this.curFace.val$faceID)) <= 0 && $toggleDown(this);
        setCapture(this.element);
        this.isCapturing = true;
        $eventPreventDefault(event_0);
      }

      break;
    case 8:
      if (this.isCapturing) {
        this.isCapturing = false;
        releaseCapture(this.element);
        (2 & (!this.curFace && $setCurrentFace_0(this, this.up) , this.curFace).val$faceID) > 0 && (event_0.button || 0) == 1 && ((1 & (!this.curFace && $setCurrentFace_0(this, this.up) , this.curFace.val$faceID)) > 0 && $toggleDown(this) , $onClick(this));
      }

      break;
    case 64:
      this.isCapturing && $eventPreventDefault(event_0);
      break;
    case 32:
      to = event_0.relatedTarget || event_0.toElement;
      if (isOrHasChild(this.element, event_0.srcElement) && (!to || !isOrHasChild(this.element, to))) {
        this.isCapturing && (1 & (!this.curFace && $setCurrentFace_0(this, this.up) , this.curFace.val$faceID)) > 0 && $toggleDown(this);
        (2 & (!this.curFace && $setCurrentFace_0(this, this.up) , this.curFace.val$faceID)) > 0 && $toggleHover(this);
      }

      break;
    case 16:
      if (isOrHasChild(this.element, event_0.srcElement)) {
        (2 & (!this.curFace && $setCurrentFace_0(this, this.up) , this.curFace.val$faceID)) <= 0 && $toggleHover(this);
        this.isCapturing && (1 & (!this.curFace && $setCurrentFace_0(this, this.up) , this.curFace.val$faceID)) <= 0 && $toggleDown(this);
      }

      break;
    case 4096:
      if (this.isFocusing) {
        this.isFocusing = false;
        (1 & (!this.curFace && $setCurrentFace_0(this, this.up) , this.curFace.val$faceID)) > 0 && $toggleDown(this);
      }

      break;
    case 8192:
      if (this.isCapturing) {
        this.isCapturing = false;
        (1 & (!this.curFace && $setCurrentFace_0(this, this.up) , this.curFace.val$faceID)) > 0 && $toggleDown(this);
      }

  }
  $onBrowserEvent_3(this, event_0);
  if (($eventGetTypeInt(event_0.type) & 896) != 0) {
    keyCode = (event_0.keyCode || 0) & 65535;
    switch (type) {
      case 128:
        if (keyCode == 32) {
          this.isFocusing = true;
          (1 & (!this.curFace && $setCurrentFace_0(this, this.up) , this.curFace.val$faceID)) <= 0 && $toggleDown(this);
        }

        break;
      case 512:
        if (this.isFocusing && keyCode == 32) {
          this.isFocusing = false;
          (1 & (!this.curFace && $setCurrentFace_0(this, this.up) , this.curFace.val$faceID)) > 0 && $toggleDown(this);
          $onClick(this);
        }

        break;
      case 256:
        if (keyCode == 10 || keyCode == 13) {
          (1 & (!this.curFace && $setCurrentFace_0(this, this.up) , this.curFace.val$faceID)) <= 0 && $toggleDown(this);
          (1 & (!this.curFace && $setCurrentFace_0(this, this.up) , this.curFace.val$faceID)) > 0 && $toggleDown(this);
          $onClick(this);
        }

    }
  }
}
;
_.onDetach = function onDetach_2(){
  $onDetach(this);
  $cleanupCaptureState(this);
  (2 & (!this.curFace && $setCurrentFace_0(this, this.up) , this.curFace.val$faceID)) > 0 && $toggleHover(this);
}
;
_.setFocus = function setFocus_2(focused){
  focused?$focus(this.element):(this.element.blur() , undefined);
}
;
_.setTabIndex = function setTabIndex_1(index){
  $setTabIndex(this.element, index);
}
;
_.allowClick = false;
_.curFace = null;
_.curFaceElement = null;
_.down = null;
_.downDisabled = null;
_.downHovering = null;
_.isCapturing = false;
_.isFocusing = false;
_.up = null;
_.upDisabled = null;
_.upHovering = null;
function $getFace(this$static){
  if (!this$static.face) {
    if (!this$static.delegateTo) {
      this$static.face = $createElement($doc, 'div');
      return this$static.face;
    }
     else {
      return $getFace(this$static.delegateTo);
    }
  }
   else {
    return this$static.face;
  }
}

function $setHTML_0(this$static, html){
  this$static.face = $createElement($doc, 'div');
  setStyleName(this$static.face, 'html-face', true);
  $setInnerHTML(this$static.face, html);
  !!this$static.this$0.curFace && $getFace(this$static.this$0.curFace) == $getFace(this$static) && $setCurrentFaceElement(this$static.this$0, this$static.face);
}

defineSeed(441, 1, {});
_.toString$ = function toString_10(){
  return this.val$name;
}
;
_.delegateTo = null;
_.face = null;
_.this$0 = null;
function CustomButton$2_0(this$0, $anonymous0, val$name, val$faceID){
  this.val$name = val$name;
  this.val$faceID = val$faceID;
  this.this$0 = this$0;
  this.delegateTo = $anonymous0;
}

defineSeed(440, 441, {}, CustomButton$2_0);
_.val$faceID = 0;
_.val$name = null;
function $getEventTargetCell(this$static, event_0){
  var body, td, tr;
  td = event_0.srcElement;
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

function Grid_1(){
  Grid_0.call(this);
  $resizeColumns(this, 3);
  $resizeRows(this, 1);
}

defineSeed(466, 462, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]), Grid_1);
function $addAutoHidePartner(this$static, partner){
  !this$static.autoHidePartners && (this$static.autoHidePartners = new ArrayList_0);
  $add_19(this$static.autoHidePartners, partner);
}

function $position_0(this$static, relativeObject, offsetWidth, offsetHeight){
  var distanceFromWindowLeft, distanceFromWindowTop, distanceToWindowBottom, distanceToWindowRight, left, offsetWidthDiff, textBoxOffsetWidth, top_0, windowBottom, windowLeft, windowRight, windowTop;
  textBoxOffsetWidth = $getPropertyInt(relativeObject.element, 'offsetWidth');
  offsetWidthDiff = offsetWidth - textBoxOffsetWidth;
  $clinit_LocaleInfo();
  left = $getAbsoluteLeft(relativeObject.element);
  if (offsetWidthDiff > 0) {
    windowRight = $getClientWidth($doc) + $getScrollLeft_0($doc);
    windowLeft = $getScrollLeft_0($doc);
    distanceToWindowRight = windowRight - left;
    distanceFromWindowLeft = left - windowLeft;
    distanceToWindowRight < offsetWidth && distanceFromWindowLeft >= offsetWidthDiff && (left -= offsetWidthDiff);
  }
  top_0 = $getAbsoluteTop(relativeObject.element);
  windowTop = $getScrollTop($doc);
  windowBottom = $getScrollTop($doc) + $getClientHeight($doc);
  distanceFromWindowTop = top_0 - windowTop;
  distanceToWindowBottom = windowBottom - (top_0 + $getPropertyInt(relativeObject.element, 'offsetHeight'));
  distanceToWindowBottom < offsetHeight && distanceFromWindowTop >= offsetHeight?(top_0 -= offsetHeight):(top_0 += $getPropertyInt(relativeObject.element, 'offsetHeight'));
  $setPopupPosition(this$static, left, top_0);
}

function $setPopupPositionAndShow(this$static, callback){
  this$static.element.style['visibility'] = 'hidden';
  this$static.element;
  $show(this$static);
  $setPosition_0(callback, $getPropertyInt(this$static.element, 'offsetWidth'), $getPropertyInt(this$static.element, 'offsetHeight'));
  this$static.element.style['visibility'] = 'visible';
  this$static.element;
}

function $showRelativeTo(this$static, target){
  $setPopupPositionAndShow(this$static, new PopupPanel$2_0(this$static, target));
}

function $setPosition_0(this$static, offsetWidth, offsetHeight){
  $position_0(this$static.this$0, this$static.val$target, offsetWidth, offsetHeight);
}

function PopupPanel$2_0(this$0, val$target){
  this.this$0 = this$0;
  this.val$target = val$target;
}

defineSeed(515, 1, {}, PopupPanel$2_0);
_.this$0 = null;
_.val$target = null;
function PushButton_0(){
  ButtonBase_0.call(this, $createFocusable());
  this.eventsToSink == -1?sinkEvents_0(this.element, 7165 | (this.element.__eventBits || 0)):(this.eventsToSink |= 7165);
  $setUpFace(this, new CustomButton$2_0(this, null, 'up', 0));
  this.element['className'] = 'gwt-CustomButton';
  $clinit_Roles();
  $set(BUTTON, this.element);
  this.element['className'] = 'gwt-PushButton';
}

defineSeed(521, 439, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), PushButton_0);
function RichTextArea_0(){
  this.impl = new RichTextAreaImplIE6_0;
  $setElement(this, this.impl.elem);
  this.element['className'] = 'gwt-RichTextArea';
}

defineSeed(524, 435, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), RichTextArea_0);
_.onAttach = function onAttach_8(){
  $onAttach_0(this);
  $initElement(this.impl);
}
;
_.onDetach = function onDetach_7(){
  $onDetach(this);
  $uninitElement(this.impl);
}
;
_.setFocus = function setFocus_3(focused){
  this.attached && $setFocus_1(this.impl, focused);
}
;
defineSeed(564, 1, {});
_.createElement_0 = function createElement(){
  return $createElement($doc, 'textarea');
}
;
_.elem = null;
function $createElement_0(){
  return $doc.createElement('iframe');
}

function $setFocus_1(this$static, focused){
  this$static.initializing?(this$static.isPendingFocus = focused):$setFocusImpl(this$static, focused);
}

function $setFocusImpl(this$static, focused){
  focused?this$static.elem.contentWindow.focus():this$static.elem.contentWindow.blur();
}

function $setHTMLImpl(this$static, html){
  this$static.elem.contentWindow.document.body.innerHTML = html;
}

function $uninitElement(this$static){
  var enabled, html;
  if (this$static.initializing) {
    this$static.initializing = false;
    return;
  }
  $unhookEvents(this$static);
  html = !this$static.beforeInitPlaceholder?this$static.elem.contentWindow.document.body.innerHTML:this$static.beforeInitPlaceholder.innerHTML;
  enabled = !this$static.beforeInitPlaceholder?$isEnabledImpl(this$static):!this$static.beforeInitPlaceholder['disabled'];
  this$static.beforeInitPlaceholder = $createElement($doc, 'div');
  $setInnerHTML(this$static.beforeInitPlaceholder, html);
  !this$static.beforeInitPlaceholder?$setEnabledImpl(this$static, enabled):(this$static.beforeInitPlaceholder['disabled'] = !enabled , undefined);
}

defineSeed(566, 564, {});
_.createElement_0 = function createElement_0(){
  return $createElement_0();
}
;
_.onElementInitialized = function onElementInitialized(){
  if (!this.initializing) {
    return;
  }
  this.initializing = false;
  if (this.beforeInitPlaceholder) {
    $setHTMLImpl(this, this.beforeInitPlaceholder.innerHTML);
    $setEnabledImpl(this, !this.beforeInitPlaceholder?$isEnabledImpl(this):!this.beforeInitPlaceholder['disabled']);
    this.beforeInitPlaceholder = null;
  }
  $hookEvents(this);
  if (this.isPendingFocus) {
    this.isPendingFocus = false;
    this.initializing?(this.isPendingFocus = true):$setFocusImpl(this, true);
  }
}
;
_.onElementInitializing = function onElementInitializing(){
  this.initializing = true;
  this.isPendingFocus = false;
}
;
_.initializing = false;
_.isPendingFocus = false;
function $hookEvents(this$static){
  var elem = this$static.elem;
  var body = elem.contentWindow.document.body;
  var handler = $entry(function(evt){
    if (elem.__listener) {
      if (isMyListener(elem.__listener)) {
        evt = evt || elem.contentWindow.event;
        dispatchEvent_2(evt, elem, elem.__listener);
      }
    }
  }
  );
  body.onkeydown = body.onkeyup = body.onkeypress = body.onmousedown = body.onmouseup = body.onmousemove = body.onmouseover = body.onmouseout = body.onclick = handler;
  elem.contentWindow.onfocus = elem.contentWindow.onblur = handler;
}

function $initElement(this$static){
  var _this = this$static;
  _this.onElementInitializing();
  setTimeout($entry(function(){
    if (_this.initializing == false) {
      return;
    }
    var elem = _this.elem;
    var doc = elem.contentWindow.document;
    if (!doc.body) {
      setTimeout(arguments.callee, 50);
      return;
    }
    doc.body.contentEditable = true;
    _this.onElementInitialized();
  }
  , 1));
}

function $isEnabledImpl(this$static){
  var elem = this$static.elem;
  return elem.contentWindow.document.body.contentEditable.toLowerCase() == 'true';
}

function $setEnabledImpl(this$static, enabled){
  var elem = this$static.elem;
  elem.contentWindow.document.body.contentEditable = enabled;
}

function $unhookEvents(this$static){
  var elem = this$static.elem;
  var body = elem.contentWindow.document.body;
  if (body) {
    body.onkeydown = body.onkeyup = body.onkeypress = body.onmousedown = body.onmouseup = body.onmousemove = body.onmouseover = body.onmouseout = body.onclick = null;
    elem.contentWindow.onfocus = elem.contentWindow.onblur = null;
  }
}

function RichTextAreaImplIE6_0(){
  this.elem = this.createElement_0();
  this.beforeInitPlaceholder = $createElement($doc, 'div');
}

defineSeed(565, 566, {}, RichTextAreaImplIE6_0);
_.createElement_0 = function createElement_1(){
  var elem;
  elem = $createElement_0();
  elem['src'] = "javascript:''";
  return elem;
}
;
function $clinit_CalendarModel(){
  $clinit_CalendarModel = nullMethod;
  dayOfWeekNames = initDim(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, 7, 0);
  dayOfMonthNames = initDim(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, 32, 0);
}

function $formatCurrentMonth(this$static){
  return $format(getFormat(($clinit_DateTimeFormat$PredefinedFormat() , YEAR_MONTH_ABBR)), this$static.currentMonth, null);
}

function $formatDayOfMonth(date){
  return dayOfMonthNames[date.jsdate.getDate()];
}

function $formatDayOfWeek(dayInWeek){
  return dayOfWeekNames[dayInWeek];
}

function $getCurrentFirstDayOfFirstWeek(this$static){
  var d, offset, start, wkDayOfMonth1st;
  wkDayOfMonth1st = this$static.currentMonth.jsdate.getDay();
  start = ($clinit_CalendarUtil() , $clinit_CalendarUtil() , startingDay);
  if (wkDayOfMonth1st == start) {
    return new Date_3(fromDouble(this$static.currentMonth.jsdate.getTime()));
  }
   else {
    d = new Date_3(fromDouble(this$static.currentMonth.jsdate.getTime()));
    offset = wkDayOfMonth1st - start > 0?wkDayOfMonth1st - start:7 - (start - wkDayOfMonth1st);
    d.setDate_0(d.jsdate.getDate() + -offset);
    return d;
  }
}

function $isInCurrentMonth(this$static, date){
  return this$static.currentMonth.jsdate.getMonth() == date.jsdate.getMonth();
}

function $setCurrentMonth(this$static, currentDate){
  this$static.currentMonth.setYear(currentDate.jsdate.getFullYear() - 1900);
  this$static.currentMonth.setMonth_0(currentDate.jsdate.getMonth());
}

function $shiftCurrentMonth(this$static, deltaMonths){
  addMonthsToDate(this$static.currentMonth, deltaMonths);
}

function CalendarModel_0(){
  $clinit_CalendarModel();
  var date, dayOfWeek, i;
  this.currentMonth = new Date_1;
  setToFirstDayOfMonth(this.currentMonth);
  date = new Date_1;
  for (i = 1; i <= 7; ++i) {
    date.setDate_0(i);
    dayOfWeek = date.jsdate.getDay();
    dayOfWeekNames[dayOfWeek] = $format(($clinit_DateTimeFormat_0() , getFormat_0('ccccc', $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1)))), date, null);
  }
  date.setMonth_0(0);
  for (i = 1; i < 32; ++i) {
    date.setDate_0(i);
    dayOfMonthNames[i] = $format(($clinit_DateTimeFormat_0() , getFormat_0('d', $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1)))), date, null);
  }
}

defineSeed(569, 1, {}, CalendarModel_0);
_.currentMonth = null;
var dayOfMonthNames, dayOfWeekNames;
function $clinit_CalendarUtil(){
  $clinit_CalendarUtil = nullMethod;
  var dateTimeFormatInfo;
  dateTimeFormatInfo = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1));
  firstDayOfWeekend = 6;
  lastDayOfWeekend = 0;
  startingDay = dateTimeFormatInfo.firstDayOfTheWeek();
}

function addDaysToDate(date, days){
  $clinit_CalendarUtil();
  date.setDate_0(date.jsdate.getDate() + days);
}

function addMonthsToDate(date, months){
  $clinit_CalendarUtil();
  var month, resultMonth, resultMonthCount, resultYear, year;
  if (months != 0) {
    month = date.jsdate.getMonth();
    year = date.jsdate.getFullYear() - 1900;
    resultMonthCount = year * 12 + month + months;
    resultYear = ~~(resultMonthCount / 12);
    resultMonth = resultMonthCount - resultYear * 12;
    date.setMonth_0(resultMonth);
    date.setYear(resultYear);
  }
}

function copyDate(date){
  $clinit_CalendarUtil();
  var newDate;
  if (!date) {
    return null;
  }
  newDate = new Date_1;
  newDate.setTime_0(fromDouble(date.jsdate.getTime()));
  return newDate;
}

function getDaysBetween(start, finish){
  $clinit_CalendarUtil();
  var aTime, adjust, bTime;
  start = copyDate(start);
  resetTime(start);
  finish = copyDate(finish);
  resetTime(finish);
  aTime = fromDouble(start.jsdate.getTime());
  bTime = fromDouble(finish.jsdate.getTime());
  adjust = P36ee80_longLit;
  adjust = gt(bTime, aTime)?adjust:neg(adjust);
  return toInt(div_0(add_0(sub(bTime, aTime), adjust), P5265c00_longLit));
}

function resetTime(date){
  var msec;
  msec = fromDouble(date.jsdate.getTime());
  msec = mul(div_0(msec, P3e8_longLit), P3e8_longLit);
  date.setTime_0(msec);
  date.setHours_0(12);
  date.setMinutes_0(0);
  date.setSeconds_0(0);
}

function setToFirstDayOfMonth(date){
  $clinit_CalendarUtil();
  resetTime(date);
  date.setDate_0(1);
}

var firstDayOfWeekend = 0, lastDayOfWeekend = 0, startingDay = 0;
function $addMonths(this$static, numMonths){
  $shiftCurrentMonth(this$static.datePicker.model, numMonths);
  $refreshAll(this$static.datePicker);
}

defineSeed(572, 356, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]));
_.datePicker = null;
defineSeed(571, 572, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]));
function $getCell(this$static, i){
  return dynamicCast($get_8(this$static.cellList, i), Q$CellGridImpl$Cell);
}

function $isActive(cell){
  return !!cell && cell.enabled;
}

function $setHighlighted(this$static, nextHighlighted){
  var oldHighlighted;
  if (nextHighlighted == this$static.highlightedCell) {
    return;
  }
  oldHighlighted = this$static.highlightedCell;
  this$static.highlightedCell = nextHighlighted;
  !!oldHighlighted && ($fireEvent_0(oldHighlighted.this$1.this$0.datePicker, new DatePicker$DateHighlightEvent_0) , $updateStyle(oldHighlighted));
  !!this$static.highlightedCell && $onHighlighted(this$static.highlightedCell);
}

function $setSelected_0(this$static, cell){
  var last;
  last = this$static.selectedCell;
  this$static.selectedCell = cell;
  !!last && $onSelected(last, false);
  !!this$static.selectedCell && $onSelected(this$static.selectedCell, true);
}

defineSeed(573, 466, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]));
_.onBrowserEvent_0 = function onBrowserEvent_12(event_0){
  var cell, e, td;
  switch ($eventGetTypeInt(event_0.type)) {
    case 1:
      {
        cell = (td = $getEventTargetCell(this, event_0) , td?dynamicCast($get_2(this.elementToCell, td), Q$CellGridImpl$Cell):null);
        !!cell && cell.enabled && $setSelected_0(this, cell);
        break;
      }

    case 32:
      {
        e = event_0.relatedTarget || event_0.fromElement;
        if (e) {
          cell = dynamicCast($get_2(this.elementToCell, e), Q$CellGridImpl$Cell);
          cell == this.highlightedCell && $setHighlighted(this, null);
        }
        break;
      }

    case 16:
      {
        e = event_0.relatedTarget || event_0.toElement;
        if (e) {
          cell = dynamicCast($get_2(this.elementToCell, e), Q$CellGridImpl$Cell);
          !!cell && cell.enabled && $setHighlighted(this, cell);
        }
        break;
      }

  }
}
;
_.onUnload = function onUnload_4(){
  $setHighlighted(this, null);
}
;
_.highlightedCell = null;
_.selectedCell = null;
function CellGridImpl$Cell_0(this$0, elem, value){
  this.this$0 = this$0;
  this.value_0 = value;
  $add_19(this$0.cellList, this);
  !!elem && (this.element = elem , undefined);
  $put_1(this$0.elementToCell, this);
  $addDomHandler(this, new CellGridImpl$Cell$1_0(this), ($clinit_KeyDownEvent() , $clinit_KeyDownEvent() , TYPE_3));
  $addDomHandler(this, new CellGridImpl$Cell$2_0(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
}

function CellGridImpl$Cell_1(this$0, value){
  CellGridImpl$Cell_0.call(this, this$0, $createElement($doc, 'div'), value);
}

defineSeed(574, 357, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$CellGridImpl$Cell]));
_.enabled = true;
_.this$0 = null;
_.value_0 = null;
function CellGridImpl$Cell$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(575, 1, makeCastMap([Q$KeyDownHandler, Q$EventHandler]), CellGridImpl$Cell$1_0);
_.onKeyDown = function onKeyDown(event_0){
  ((event_0.nativeEvent.keyCode || 0) == 13 || (event_0.nativeEvent.keyCode || 0) == 32) && $isActive(this.this$1) && $setSelected_0(this.this$1.this$0, this.this$1);
}
;
_.this$1 = null;
function CellGridImpl$Cell$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(576, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), CellGridImpl$Cell$2_0);
_.onClick = function onClick(event_0){
  $setSelected_0(this.this$1.this$0, this.this$1);
}
;
_.this$1 = null;
function $clinit_DateBox(){
  $clinit_DateBox = nullMethod;
  DEFAULT_FORMAT = new DateBox$DefaultFormat_0;
}

function $parseDate(this$static, reportError){
  var text;
  reportError && setStyleName(this$static.element, 'dateBoxFormatError', false);
  text = $trim($getPropertyString(this$static.box.element, 'value'));
  return $parse_1(this$static.format, this$static, text, reportError);
}

function $preventDatePickerPopup(this$static){
  this$static.allowDPShow = false;
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new DateBox$1_0(this$static));
}

function $setValue_3(this$static, oldDate, date, fireEvents, updateText){
  !!date && $setCurrentMonth_0(this$static.picker, date);
  $setValue_4(this$static.picker, date, false);
  if (updateText) {
    setStyleName(this$static.element, 'dateBoxFormatError', false);
    $setText(this$static.box, $format_0(this$static.format, date));
  }
  fireEvents && !!TYPE_15 && oldDate != date && (!oldDate || !(!!date && eq(fromDouble(oldDate.jsdate.getTime()), fromDouble(date.jsdate.getTime())))) && $fireEvent_0(this$static, new DateChangeEvent_0(date));
}

function $showDatePicker(this$static){
  var current;
  current = $parseDate(this$static, false);
  !current && (current = new Date_1);
  $setCurrentMonth_0(this$static.picker, current);
  $showRelativeTo(this$static.popup, this$static);
}

function $updateDateFromTextBox(this$static){
  var parsedDate;
  parsedDate = $parseDate(this$static, true);
  !!parsedDate && $setValue_3(this$static, copyDate(this$static.picker.value_0), parsedDate, true, false);
}

function DateBox_0(){
  $clinit_DateBox();
  DateBox_1.call(this, new DatePicker_0, DEFAULT_FORMAT);
}

function DateBox_1(picker, format){
  var handler;
  this.box = new TextBox_0;
  this.picker = picker;
  this.popup = new PopupPanel_0(true);
  this.format = format;
  $addAutoHidePartner(this.popup, this.box.element);
  $setWidget_2(this.popup, picker);
  $setStyleName(this.popup, 'dateBoxPopup');
  $initWidget(this, this.box);
  this.element['className'] = 'gwt-DateBox';
  handler = new DateBox$DateBoxHandler_0(this);
  $addHandler_0(picker, handler, (!TYPE_15 && (TYPE_15 = new GwtEvent$Type_0) , TYPE_15));
  $addDomHandler(this.box, handler, ($clinit_FocusEvent() , $clinit_FocusEvent() , TYPE_2));
  $addDomHandler(this.box, handler, ($clinit_BlurEvent() , $clinit_BlurEvent() , TYPE));
  $addDomHandler(this.box, handler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $addDomHandler(this.box, handler, ($clinit_KeyDownEvent() , $clinit_KeyDownEvent() , TYPE_3));
  this.box.autoDirHandler;
  $addHandler_0(this.popup, handler, TYPE_12?TYPE_12:(TYPE_12 = new GwtEvent$Type_0));
  $setValue_3(this, copyDate(this.picker.value_0), null, false, true);
}

defineSeed(577, 356, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]), DateBox_0);
_.allowDPShow = true;
_.format = null;
_.picker = null;
_.popup = null;
var DEFAULT_FORMAT;
function DateBox$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(578, 1, {}, DateBox$1_0);
_.execute_0 = function execute_20(){
  this.this$0.allowDPShow = true;
}
;
_.this$0 = null;
function DateBox$DateBoxHandler_0(this$0){
  this.this$0 = this$0;
}

defineSeed(579, 1, makeCastMap([Q$BlurHandler, Q$ClickHandler, Q$FocusHandler, Q$KeyDownHandler, Q$CloseHandler, Q$ValueChangeHandler, Q$EventHandler]), DateBox$DateBoxHandler_0);
_.onClick = function onClick_0(event_0){
  $showDatePicker(this.this$0);
}
;
_.onClose = function onClose_1(event_0){
  this.this$0.allowDPShow && $updateDateFromTextBox(this.this$0);
}
;
_.onFocus = function onFocus(event_0){
  this.this$0.allowDPShow && !this.this$0.popup.showing && $showDatePicker(this.this$0);
}
;
_.onKeyDown = function onKeyDown_0(event_0){
  switch (event_0.nativeEvent.keyCode || 0) {
    case 13:
    case 9:
      $updateDateFromTextBox(this.this$0);
    case 27:
    case 38:
      $hide(this.this$0.popup);
      break;
    case 40:
      $showDatePicker(this.this$0);
  }
}
;
_.onValueChange = function onValueChange_0(event_0){
  $setValue_3(this.this$0, $parseDate(this.this$0, false), dynamicCast(event_0.getValue_0(), Q$Date), true, true);
  $hide(this.this$0.popup);
  $preventDatePickerPopup(this.this$0);
  $setFocus_0(this.this$0.box, true);
}
;
_.this$0 = null;
function $format_0(this$static, date){
  return !date?'':$format(this$static.dateTimeFormat, date, null);
}

function $parse_1(this$static, dateBox, dateText, reportError){
  var date;
  date = null;
  try {
    dateText.length > 0 && (date = $parse_0(this$static.dateTimeFormat, dateText));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$IllegalArgumentException)) {
      try {
        date = new Date_4(dateText);
      }
       catch ($e1) {
        $e1 = caught_0($e1);
        if (instanceOf($e1, Q$IllegalArgumentException)) {
          reportError && setStyleName(dateBox.element, 'dateBoxFormatError', true);
          return null;
        }
         else 
          throw $e1;
      }
    }
     else 
      throw $e0;
  }
  return date;
}

function DateBox$DefaultFormat_0(){
  this.dateTimeFormat = ($clinit_DateTimeFormat_0() , getFormat(($clinit_DateTimeFormat$PredefinedFormat() , DATE_TIME_MEDIUM)));
}

defineSeed(580, 1, {}, DateBox$DefaultFormat_0);
_.dateTimeFormat = null;
function DateChangeEvent_0(value){
  ValueChangeEvent_0.call(this, copyDate(value));
}

defineSeed(581, 261, {}, DateChangeEvent_0);
_.getValue_0 = function getValue_0(){
  return copyDate(dynamicCast(this.value_0, Q$Date));
}
;
function $addStyleToDates(this$static, styleName, date){
  $setStyleName_4(this$static.styler, date, styleName, true);
  $isDateVisible(this$static, date) && $addStyleToDate(this$static.view, styleName, date);
}

function $getStyleOfDate(this$static, date){
  return $getStyleName(this$static.styler, date);
}

function $isDateVisible(this$static, date){
  var first, last, r;
  r = this$static.view;
  first = r.firstDisplayed;
  last = r.lastDisplayed;
  return !!date && ($clinit_CalendarUtil() , first.jsdate.getFullYear() - 1900 == date.jsdate.getFullYear() - 1900 && first.jsdate.getMonth() == date.jsdate.getMonth() && first.jsdate.getDate() == date.jsdate.getDate() || last.jsdate.getFullYear() - 1900 == date.jsdate.getFullYear() - 1900 && last.jsdate.getMonth() == date.jsdate.getMonth() && last.jsdate.getDate() == date.jsdate.getDate() || lt(fromDouble(first.jsdate.getTime()), fromDouble(date.jsdate.getTime())) && gt(fromDouble(last.jsdate.getTime()), fromDouble(date.jsdate.getTime())));
}

function $refreshAll(this$static){
  $refresh(this$static.view);
  $refresh_0(this$static.monthSelector);
  $isAttached(this$static) && fire_3((this$static.view , this$static.view));
  $setAriaSelectedCell(this$static.view, this$static.value_0);
}

function $removeStyleFromDates(this$static, styleName, date){
  $setStyleName_4(this$static.styler, date, styleName, false);
  $isDateVisible(this$static, date) && $removeStyleFromDate(this$static.view, styleName, date);
}

function $setCurrentMonth_0(this$static, month){
  $setCurrentMonth(this$static.model, month);
  $refreshAll(this$static);
}

function $setStyleName_3(this$static, styleName){
  this$static.css = new DatePicker$StandardCss_0(styleName);
  this$static.element['className'] = styleName;
}

function $setValue_4(this$static, newValue, fireEvents){
  var oldValue;
  oldValue = this$static.value_0;
  !!oldValue && $removeStyleFromDates(this$static, this$static.css.baseName + 'DayIsValue', oldValue);
  this$static.value_0 = copyDate(newValue);
  !!this$static.value_0 && $addStyleToDates(this$static, this$static.css.baseName + 'DayIsValue', this$static.value_0);
  $setAriaSelectedCell(this$static.view, newValue);
  fireEvents && !!TYPE_15 && oldValue != newValue && (!oldValue || !(!!newValue && eq(fromDouble(oldValue.jsdate.getTime()), fromDouble(newValue.jsdate.getTime())))) && $fireEvent_0(this$static, new DateChangeEvent_0(newValue));
}

function DatePicker_0(){
  DatePicker_1.call(this, new DefaultMonthSelector_0, new DefaultCalendarView_0, new CalendarModel_0);
}

function DatePicker_1(monthSelector, view, model){
  var formatter, panel;
  this.styler = new DatePicker$DateStyler_0;
  this.css = ($clinit_DatePicker$StandardCss() , DEFAULT_0);
  this.model = model;
  this.monthSelector = monthSelector;
  monthSelector.datePicker = this;
  this.view = view;
  view.datePicker = this;
  $setup(view);
  monthSelector.backwards = new PushButton_0;
  $addDomHandler(monthSelector.backwards, new DefaultMonthSelector$1_0(monthSelector), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $setHTML_0(monthSelector.backwards.up, '&laquo;');
  $setStyleName(monthSelector.backwards, monthSelector.datePicker.css.baseName + 'PreviousButton');
  monthSelector.forwards = new PushButton_0;
  $setHTML_0(monthSelector.forwards.up, '&raquo;');
  $setStyleName(monthSelector.forwards, monthSelector.datePicker.css.baseName + 'NextButton');
  $addDomHandler(monthSelector.forwards, new DefaultMonthSelector$2_0(monthSelector), TYPE_1);
  monthSelector.grid = new Grid_1;
  $setWidget_1(monthSelector.grid, 0, 0, monthSelector.backwards);
  $setWidget_1(monthSelector.grid, 0, 2, monthSelector.forwards);
  formatter = monthSelector.grid.cellFormatter;
  $setStyleName_1(formatter, 0, 1, monthSelector.datePicker.css.baseName + 'Month');
  formatter.this$0.prepareCell(0, 0);
  formatter.this$0.bodyElem.rows[0].cells[0]['width'] = '1';
  formatter.this$0.prepareCell(0, 1);
  formatter.this$0.bodyElem.rows[0].cells[1]['width'] = '100%';
  formatter.this$0.prepareCell(0, 2);
  formatter.this$0.bodyElem.rows[0].cells[2]['width'] = '1';
  $setStyleName(monthSelector.grid, monthSelector.datePicker.css.baseName + 'MonthSelector');
  $initWidget(monthSelector, monthSelector.grid);
  panel = new VerticalPanel_0;
  $initWidget(this, panel);
  panel.element['className'] = this.css.widgetName;
  $setStyleName_3(this, this.css.widgetName);
  $add_11(panel, this.monthSelector);
  $add_11(panel, this.view);
  $setCurrentMonth_0(this, new Date_1);
  $addStyleToDates(this, this.css.baseName + 'DayIsToday', new Date_1);
}

defineSeed(582, 356, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]), DatePicker_0);
_.onLoad = function onLoad_7(){
  fire_3(this.view);
}
;
_.model = null;
_.monthSelector = null;
_.value_0 = null;
_.view = null;
function DatePicker$DateHighlightEvent_0(){
}

defineSeed(583, 258, {}, DatePicker$DateHighlightEvent_0);
function $getStyleName(this$static, d){
  return dynamicCast(this$static.info.get_1(d.jsdate.getFullYear() - 1900 + '/' + d.jsdate.getMonth() + '/' + d.jsdate.getDate()), Q$String);
}

function $setStyleName_4(this$static, d, styleName, add){
  var current, key_0, newValue;
  styleName = ' ' + styleName + ' ';
  key_0 = d.jsdate.getFullYear() - 1900 + '/' + d.jsdate.getMonth() + '/' + d.jsdate.getDate();
  current = dynamicCast(this$static.info.get_1(key_0), Q$String);
  if (add) {
    current == null?this$static.info.put(key_0, styleName):current.indexOf(styleName) == -1 && this$static.info.put(key_0, current + styleName);
  }
   else {
    if (current != null) {
      newValue = $replaceAll(current, styleName, '');
      $trim(newValue).length == 0?this$static.info.remove_3(key_0):this$static.info.put(key_0, newValue);
    }
  }
}

function DatePicker$DateStyler_0(){
  this.info = new HashMap_0;
}

defineSeed(584, 1, {}, DatePicker$DateStyler_0);
function $clinit_DatePicker$StandardCss(){
  $clinit_DatePicker$StandardCss = nullMethod;
  DEFAULT_0 = new DatePicker$StandardCss_0('gwt-DatePicker');
}

function DatePicker$StandardCss_0(widgetName){
  $clinit_DatePicker$StandardCss();
  this.widgetName = widgetName;
  this.baseName = 'datePicker';
}

defineSeed(585, 1, {}, DatePicker$StandardCss_0);
_.baseName = null;
_.widgetName = null;
var DEFAULT_0;
function $addStyleToDate(this$static, styleName, date){
  $addStyleName_0($getCell_0(this$static, date), styleName);
}

function $getCell_0(this$static, d){
  var cell, index;
  index = getDaysBetween(this$static.firstDisplayed, d);
  if (index < 0 || this$static.grid.cellList.size_0 <= index) {
    return null;
  }
  cell = $getCell(this$static.grid, index);
  if (cell.value_0.jsdate.getDate() != d.jsdate.getDate()) {
    throw new IllegalStateException_1(d + ' cannot be associated with cell ' + cell + ' as it has date ' + cell.value_0);
  }
  return cell;
}

function $refresh(this$static){
  var cell, i;
  this$static.firstDisplayed = $getCurrentFirstDayOfFirstWeek(this$static.datePicker.model);
  this$static.firstDisplayed.jsdate.getDate() == 1 && addDaysToDate(this$static.firstDisplayed, -7);
  this$static.lastDisplayed.setTime_0(fromDouble(this$static.firstDisplayed.jsdate.getTime()));
  for (i = 0; i < this$static.grid.cellList.size_0; ++i) {
    i != 0 && addDaysToDate(this$static.lastDisplayed, 1);
    cell = $getCell(this$static.grid, i);
    $update_0(cell, this$static.lastDisplayed);
  }
  $setAriaSelectedCell(this$static, null);
}

function $removeStyleFromDate(this$static, styleName, date){
  $removeStyleName($getCell_0(this$static, date), styleName);
}

function $setAriaSelectedCell(this$static, date){
  var newSelectedCell;
  !!this$static.ariaSelectedCell && $setAriaSelected(this$static.ariaSelectedCell);
  newSelectedCell = date?$getCell_0(this$static, date):null;
  !!newSelectedCell && ($clinit_Roles() , $setAriaSelectedState(newSelectedCell.element, ($clinit_SelectedValue() , $clinit_SelectedValue() , TRUE_1)));
  this$static.ariaSelectedCell = newSelectedCell;
}

function $setup(this$static){
  var cell, column, dayIdx, formatter, i, row, shift, weekendEndColumn, weekendStartColumn;
  formatter = this$static.grid.cellFormatter;
  weekendStartColumn = -1;
  weekendEndColumn = -1;
  for (i = 0; i < 7; ++i) {
    shift = ($clinit_CalendarUtil() , $clinit_CalendarUtil() , startingDay);
    dayIdx = i + shift < 7?i + shift:i + shift - 7;
    $setText_0(this$static.grid, 0, i, $formatDayOfWeek((this$static.datePicker , dayIdx)));
    if (dayIdx == firstDayOfWeekend || dayIdx == lastDayOfWeekend) {
      $setStyleName_1(formatter, 0, i, this$static.datePicker.css.baseName + 'WeekendLabel');
      weekendStartColumn == -1?(weekendStartColumn = i):(weekendEndColumn = i);
    }
     else {
      $setStyleName_1(formatter, 0, i, this$static.datePicker.css.baseName + 'WeekdayLabel');
    }
  }
  for (row = 1; row <= 6; ++row) {
    for (column = 0; column < 7; ++column) {
      cell = new DefaultCalendarView$CellGrid$DateCell_0(this$static.grid, column == weekendStartColumn || column == weekendEndColumn);
      $setWidget_1(this$static.grid, row, column, cell);
    }
  }
  $initWidget(this$static, this$static.grid);
  $setStyleName(this$static.grid, this$static.datePicker.css.baseName + 'Days');
}

function DefaultCalendarView_0(){
  this.grid = new DefaultCalendarView$CellGrid_0(this);
  this.lastDisplayed = new Date_1;
}

defineSeed(586, 571, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]), DefaultCalendarView_0);
_.ariaSelectedCell = null;
_.firstDisplayed = null;
function DefaultCalendarView$CellGrid_0(this$0){
  this.this$0 = this$0;
  Grid_0.call(this);
  this.elementToCell = new ElementMapperImpl_0;
  this.cellList = new ArrayList_0;
  this.tableElem['cellPadding'] = 0;
  this.tableElem['cellSpacing'] = 0;
  this.tableElem['border'] = '0';
  this.eventsToSink == -1?sinkEvents_0(this.element, 49 | (this.element.__eventBits || 0)):(this.eventsToSink |= 49);
  $resizeColumns(this, 7);
  $resizeRows(this, 7);
}

defineSeed(587, 573, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]), DefaultCalendarView$CellGrid_0);
_.this$0 = null;
function $addStyleName_0(this$static, styleName){
  $indexOf_2(this$static.dateStyle, ' ' + styleName + ' ') == -1 && (this$static.dateStyle += styleName + ' ');
  $updateStyle(this$static);
}

function $onHighlighted(this$static){
  $fireEvent_0(this$static.this$1.this$0.datePicker, new DatePicker$DateHighlightEvent_0);
  $updateStyle(this$static);
}

function $onSelected(this$static, selected){
  if (selected) {
    $setValue_4(this$static.this$1.this$0.datePicker, this$static.value_0, true);
    !$isInCurrentMonth(this$static.this$1.this$0.datePicker.model, this$static.value_0) && $setCurrentMonth_0(this$static.this$1.this$0.datePicker, this$static.value_0);
  }
  $updateStyle(this$static);
}

function $removeStyleName(this$static, styleName){
  this$static.dateStyle = $replace_1(this$static.dateStyle, ' ' + styleName + ' ');
  $updateStyle(this$static);
}

function $setAriaSelected(this$static){
  $clinit_Roles();
  $setAriaSelectedState(this$static.element, ($clinit_SelectedValue() , $clinit_SelectedValue() , FALSE_1));
}

function $update_0(this$static, current){
  var extraStyle, value;
  this$static.enabled = true;
  $updateStyle(this$static);
  this$static.value_0.setTime_0(fromDouble(current.jsdate.getTime()));
  value = $formatDayOfMonth((this$static.this$1.this$0.datePicker , this$static.value_0));
  setInnerText(this$static.element, value);
  this$static.dateStyle = this$static.cellStyle;
  if ($isInCurrentMonth(this$static.this$1.this$0.datePicker.model, this$static.value_0)) {
    this$static.element.tabIndex = 0;
    extraStyle = $getStyleOfDate(this$static.this$1.this$0.datePicker, current);
    extraStyle != null && (this$static.dateStyle += ' ' + extraStyle);
  }
   else {
    this$static.element.tabIndex = -1;
    this$static.dateStyle += ' ' + this$static.this$1.this$0.datePicker.css.baseName + 'DayIsFiller';
  }
  this$static.dateStyle += ' ';
  $updateStyle(this$static);
}

function $updateStyle(this$static){
  var accum;
  accum = this$static.dateStyle;
  if (this$static == this$static.this$0.highlightedCell) {
    accum += ' ' + this$static.this$1.this$0.datePicker.css.baseName + 'DayIsHighlighted';
    this$static == this$static.this$0.highlightedCell && this$static.this$0.selectedCell == this$static && (accum += ' ' + this$static.this$1.this$0.datePicker.css.baseName + 'DayIsValueAndHighlighted');
  }
  this$static.enabled || (accum += ' ' + this$static.this$1.this$0.datePicker.css.baseName + 'DayIsDisabled');
  this$static.element['className'] = accum;
}

function DefaultCalendarView$CellGrid$DateCell_0(this$1, isWeekend){
  this.this$1 = this$1;
  CellGridImpl$Cell_1.call(this, this$1, new Date_1);
  this.cellStyle = this$1.this$0.datePicker.css.baseName + 'Day';
  isWeekend && (this.cellStyle += ' ' + this$1.this$0.datePicker.css.baseName + 'DayIsWeekend');
  $setTabIndex(this.element, $isInCurrentMonth(this.this$1.this$0.datePicker.model, this.value_0)?0:-1);
  $clinit_Roles();
  $setAriaSelectedState(this.element, ($clinit_SelectedValue() , $clinit_SelectedValue() , FALSE_1));
}

defineSeed(588, 574, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$CellGridImpl$Cell]), DefaultCalendarView$CellGrid$DateCell_0);
_.cellStyle = null;
_.dateStyle = null;
_.this$1 = null;
defineSeed(590, 572, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]));
function $refresh_0(this$static){
  var formattedMonth;
  formattedMonth = $formatCurrentMonth(this$static.datePicker.model);
  $setText_0(this$static.grid, 0, 1, formattedMonth);
}

function DefaultMonthSelector_0(){
}

defineSeed(589, 590, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]), DefaultMonthSelector_0);
_.backwards = null;
_.forwards = null;
_.grid = null;
function DefaultMonthSelector$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(591, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), DefaultMonthSelector$1_0);
_.onClick = function onClick_1(event_0){
  $addMonths(this.this$0, -1);
}
;
_.this$0 = null;
function DefaultMonthSelector$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(592, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), DefaultMonthSelector$2_0);
_.onClick = function onClick_2(event_0){
  $addMonths(this.this$0, 1);
}
;
_.this$0 = null;
function $checkFrozen_0(this$static){
  if (this$static.frozen) {
    throw new IllegalStateException_1('The Date has been frozen');
  }
}

defineSeed(705, 296, makeCastMap([Q$Poser, Q$DatePoser, Q$Serializable, Q$Comparable, Q$Date]));
_.setDate_0 = function setDate_0(date){
  $checkFrozen_0(this);
  $setDate_0(this, date);
}
;
_.setHours_0 = function setHours_1(hours){
  $checkFrozen_0(this);
  $setHours(this.jsdate, hours);
  $fixDaylightSavings(this, hours);
}
;
_.setMinutes_0 = function setMinutes_1(minutes){
  $checkFrozen_0(this);
  $setMinutes_0(this, minutes);
}
;
_.setMonth_0 = function setMonth_1(month){
  $checkFrozen_0(this);
  $setMonth_0(this, month);
}
;
_.setSeconds_0 = function setSeconds_1(seconds){
  $checkFrozen_0(this);
  $setSeconds_0(this, seconds);
}
;
_.setTime_0 = function setTime_0(time){
  $checkFrozen_0(this);
  $setTime(this.jsdate, toDouble(time));
}
;
_.setYear = function setYear_1(year){
  $checkFrozen_0(this);
  $setYear(this, year);
}
;
function FrmEvaluationReportListPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(941, 738, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget]), FrmEvaluationReportListPresenter_0);
_.onBind = function onBind_15(){
}
;
_.onReset = function onReset_14(){
  $doFire(this.eventBus, new PageAfterSelectEvent_0('evaluationlist'), null);
}
;
_.revealInParent = function revealInParent_14(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationReportListPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationReportListPresenter$_annotation$$none$$) {
    result = new FrmEvaluationReportListPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmEvaluationReportListView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationReportListPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationReportListPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationReportListPresenter$_annotation$$none$$;
}

defineSeed(1101, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_121(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationReportListPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function FrmEvaluationReportListView_0(){
  this.widget = $build_f_HTMLPanel1_13(new FrmEvaluationReportListView_BinderImpl$Widgets_0);
}

defineSeed(1271, 742, makeCastMap([Q$IsWidget]), FrmEvaluationReportListView_0);
_.asWidget = function asWidget_17(){
  return this.widget;
}
;
_.widget = null;
function FrmEvaluationReportListView_BinderImpl_0(){
}

defineSeed(1272, 1, {}, FrmEvaluationReportListView_BinderImpl_0);
function $build_f_HTMLPanel1_13(this$static){
  var attachRecord14, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_VerticalPanel4, f_Grid5, f_Label6, f_Label7, f_Label8, f_Label9, f_Label10, f_Label11, f_Button12, sb, f_Label13, f_Grid14, f_Label15, f_Label16, f_Label17, f_Label19, f_Label21, f_Label22, f_Label23, f_Label24, f_Label26, f_Button27, sb_0;
  f_HTMLPanel1 = new HTMLPanel_0($html3_0(this$static.domId0).html);
  f_HTMLPanel1.element.style['height'] = '';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord14 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord14.origParent?$insertBefore(attachRecord14.origParent, attachRecord14.element, attachRecord14.origSibling):orphan(attachRecord14.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, "LISTE DES RAPPORTS D'EVALUATION INTERMEDIAIRE", false) , $updateHorizontalAlignment(f_Label3) , f_Label3.element.style['width'] = '' , f_Label3)) , $add_11(f_VerticalPanel2, (f_VerticalPanel4 = new VerticalPanel_0 , $add_11(f_VerticalPanel4, (f_Grid5 = new Grid_0 , $resizeColumns(f_Grid5, 2) , $resizeRows(f_Grid5, 6) , $setWidget_1(f_Grid5, 0, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Ann\xE9e :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid5, 0, 1, new ListBox_0) , $setWidget_1(f_Grid5, 1, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Programme :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid5, 1, 1, new ListBox_0) , $setWidget_1(f_Grid5, 2, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Classe :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid5, 2, 1, new ListBox_0) , $setWidget_1(f_Grid5, 3, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, "Liste des rapports d'\xE9valuation :", false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid5, 3, 1, new ListBox_0) , $setWidget_1(f_Grid5, 4, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid5, 5, 0, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid5, 5, 1, (f_Button12 = new Button_0 , $setHTML(f_Button12, (sb = new StringBuilder_0 , $append_1(sb.data, 'Cr\xE9er un nouveau rapport') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , f_Button12)) , f_Grid5.element.style['width'] = '600px' , f_Grid5)) , $add_11(f_VerticalPanel4, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $add_11(f_VerticalPanel4, (f_Grid14 = new Grid_0 , $resizeColumns(f_Grid14, 2) , $resizeRows(f_Grid14, 7) , $setWidget_1(f_Grid14, 0, 0, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_1(f_Grid14, 0, 1, (f_Label16 = new Label_0 , f_Label16.element['className'] = 'bulletinTitle' , $setTextOrHtml(f_Label16.directionalTextHelper, 'EVALUATION INTERMEDIAIRE', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $setWidget_1(f_Grid14, 1, 0, (f_Label17 = new Label_0 , $setTextOrHtml(f_Label17.directionalTextHelper, 'Du :', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $setWidget_1(f_Grid14, 1, 1, new DateBox_0) , $setWidget_1(f_Grid14, 2, 0, (f_Label19 = new Label_0 , $setTextOrHtml(f_Label19.directionalTextHelper, 'Au :', false) , $updateHorizontalAlignment(f_Label19) , f_Label19)) , $setWidget_1(f_Grid14, 2, 1, new DateBox_0) , $setWidget_1(f_Grid14, 3, 0, (f_Label21 = new Label_0 , $setTextOrHtml(f_Label21.directionalTextHelper, 'Classe :', false) , $updateHorizontalAlignment(f_Label21) , f_Label21)) , $setWidget_1(f_Grid14, 3, 1, (f_Label22 = new Label_0 , $setTextOrHtml(f_Label22.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label22) , f_Label22)) , $setWidget_1(f_Grid14, 4, 0, (f_Label23 = new Label_0 , $setTextOrHtml(f_Label23.directionalTextHelper, 'Ma\xEEtre de classe :', false) , $updateHorizontalAlignment(f_Label23) , f_Label23)) , $setWidget_1(f_Grid14, 4, 1, new ListBox_0) , $setWidget_1(f_Grid14, 5, 0, (f_Label24 = new Label_0 , $setTextOrHtml(f_Label24.directionalTextHelper, "Note d'objectif sp\xE9cifique :", false) , $updateHorizontalAlignment(f_Label24) , f_Label24)) , $setWidget_1(f_Grid14, 5, 1, new RichTextArea_0) , $setWidget_1(f_Grid14, 6, 0, (f_Label26 = new Label_0 , $setTextOrHtml(f_Label26.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label26) , f_Label26)) , $setWidget_1(f_Grid14, 6, 1, (f_Button27 = new Button_0 , $setHTML(f_Button27, (sb_0 = new StringBuilder_0 , $append_1(sb_0.data, 'New Button') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))).html) , $setInnerText(f_Button27.element, 'Enregistrer') , f_Button27)) , f_Grid14.element.style['width'] = '600px' , f_Grid14)) , f_VerticalPanel4.table['cellSpacing'] = 5 , f_VerticalPanel4)) , f_VerticalPanel2.element.style['height'] = '' , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmEvaluationReportListView_BinderImpl$Widgets_0(){
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1273, 1, {}, FrmEvaluationReportListView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
function $html3_0(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$view$FrmEvaluationReportListView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationReportListView$_annotation$$none$$) {
    result = new FrmEvaluationReportListView_0(new FrmEvaluationReportListView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationReportListView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationReportListView$_annotation$$none$$;
}

function $replace_1(this$static, from){
  var regex;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  return $replaceAll(this$static, regex, ' ');
}

function $startsWith(this$static, prefix, toffset){
  return !(toffset < 0 || toffset >= this$static.length) && this$static.indexOf(prefix, toffset) == toffset;
}

function valueOf_5(x){
  return String.fromCharCode.apply(null, x);
}

function $append_6(this$static, x){
  $appendNonNull(this$static.data, valueOf_5(x));
  return this$static;
}

function StringBuffer_1(){
  $$init_24(this);
}

defineSeed(1646, 1, makeCastMap([Q$CharSequence]), StringBuffer_1);
var Lcom_lemania_sis_client_presenter_FrmEvaluationReportListPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationReportListPresenter', 941), Lcom_google_gwt_user_client_ui_PopupPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$2', 515), Lcom_lemania_sis_client_view_FrmEvaluationReportListView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationReportListView', 1271), Lcom_lemania_sis_client_view_FrmEvaluationReportListView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationReportListView_BinderImpl', 1272), Lcom_lemania_sis_client_view_FrmEvaluationReportListView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationReportListView_BinderImpl$Widgets', 1273), Lcom_google_gwt_user_datepicker_client_DateBox_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DateBox', 577), Lcom_google_gwt_user_datepicker_client_DateBox$DefaultFormat_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DateBox$DefaultFormat', 580), Lcom_google_gwt_user_datepicker_client_DateBox$DateBoxHandler_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DateBox$DateBoxHandler', 579), Lcom_google_gwt_user_datepicker_client_DateBox$1_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DateBox$1', 578), Lcom_google_gwt_user_client_ui_RichTextArea_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RichTextArea', 524), Lcom_google_gwt_user_datepicker_client_DatePicker_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DatePicker', 582), Lcom_google_gwt_user_datepicker_client_DatePicker$StandardCss_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DatePicker$StandardCss', 585), Lcom_google_gwt_event_logical_shared_HighlightEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'HighlightEvent', 258), Lcom_google_gwt_user_datepicker_client_DatePicker$DateHighlightEvent_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DatePicker$DateHighlightEvent', 583), Lcom_google_gwt_user_datepicker_client_DatePicker$DateStyler_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DatePicker$DateStyler', 584), Lcom_google_gwt_user_client_ui_impl_RichTextAreaImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'RichTextAreaImpl', 564), Lcom_google_gwt_aria_client_PressedValue_2_classLit = createForEnum('com.google.gwt.aria.client.', 'PressedValue', 56, Ljava_lang_Enum_2_classLit, values_1), _3Lcom_google_gwt_aria_client_PressedValue_2_classLit = createForArray('[Lcom.google.gwt.aria.client.', 'PressedValue;', 1746, Lcom_google_gwt_aria_client_PressedValue_2_classLit), Lcom_google_gwt_user_datepicker_client_DatePickerComponent_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DatePickerComponent', 572), Lcom_google_gwt_user_datepicker_client_MonthSelector_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'MonthSelector', 590), Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultMonthSelector', 589), Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector$1_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultMonthSelector$1', 591), Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector$2_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultMonthSelector$2', 592), Lcom_google_gwt_user_datepicker_client_CalendarView_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'CalendarView', 571), Lcom_google_gwt_user_datepicker_client_DefaultCalendarView_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultCalendarView', 586), Lcom_google_gwt_user_datepicker_client_CellGridImpl_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'CellGridImpl', 573), Lcom_google_gwt_user_datepicker_client_DefaultCalendarView$CellGrid_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultCalendarView$CellGrid', 587), Lcom_google_gwt_user_datepicker_client_CellGridImpl$Cell_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'CellGridImpl$Cell', 574), Lcom_google_gwt_user_datepicker_client_DefaultCalendarView$CellGrid$DateCell_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultCalendarView$CellGrid$DateCell', 588), Lcom_google_gwt_user_datepicker_client_CellGridImpl$Cell$1_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'CellGridImpl$Cell$1', 575), Lcom_google_gwt_user_datepicker_client_CellGridImpl$Cell$2_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'CellGridImpl$Cell$2', 576), Lcom_google_gwt_user_datepicker_client_CalendarModel_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'CalendarModel', 569), Lcom_google_gwt_user_client_ui_impl_RichTextAreaImplStandard_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'RichTextAreaImplStandard', 566), Lcom_google_gwt_user_client_ui_impl_RichTextAreaImplIE6_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'RichTextAreaImplIE6', 565), Lcom_google_gwt_i18n_shared_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.shared.', 'DateTimeFormat', 285), Lcom_google_gwt_i18n_shared_DateTimeFormat$PatternPart_2_classLit = createForClass('com.google.gwt.i18n.shared.', 'DateTimeFormat$PatternPart', 294), Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DateTimeFormat', 284), Lcom_google_gwt_i18n_client_DateTimeFormat$PredefinedFormat_2_classLit = createForEnum('com.google.gwt.i18n.client.', 'DateTimeFormat$PredefinedFormat', 286, Ljava_lang_Enum_2_classLit, values_12), _3Lcom_google_gwt_i18n_client_DateTimeFormat$PredefinedFormat_2_classLit = createForArray('[Lcom.google.gwt.i18n.client.', 'DateTimeFormat$PredefinedFormat;', 1749, Lcom_google_gwt_i18n_client_DateTimeFormat$PredefinedFormat_2_classLit), Lcom_google_gwt_event_dom_client_BlurEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'BlurEvent', 230), Lcom_google_gwt_event_dom_client_KeyDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyDownEvent', 244), Lcom_google_gwt_user_client_ui_CustomButton_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomButton', 439), Lcom_google_gwt_user_client_ui_PushButton_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PushButton', 521), Lcom_google_gwt_user_client_ui_CustomButton$Face_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomButton$Face', 441), Lcom_google_gwt_user_client_ui_CustomButton$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomButton$2', 440), Lcom_google_gwt_user_datepicker_client_DateChangeEvent_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DateChangeEvent', 581), Lcom_google_gwt_i18n_shared_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.shared.', 'DefaultDateTimeFormatInfo', 288), Lcom_google_gwt_i18n_client_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DefaultDateTimeFormatInfo', 287), Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.cldr.', 'DateTimeFormatInfoImpl', 292), Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_1en_2_classLit = createForClass('com.google.gwt.i18n.client.impl.cldr.', 'DateTimeFormatInfoImpl_en', 293), Lcom_google_gwt_i18n_client_TimeZone_2_classLit = createForClass('com.google.gwt.i18n.client.', 'TimeZone', 291), Lcom_google_gwt_i18n_shared_impl_DateRecord_2_classLit = createForClass('com.google.gwt.i18n.shared.impl.', 'DateRecord', 295);
$entry(onLoad)(15);
