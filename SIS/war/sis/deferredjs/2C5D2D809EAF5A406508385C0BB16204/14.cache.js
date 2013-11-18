function FrmEvaluationInputPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(934, 734, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget]), FrmEvaluationInputPresenter_0);
_.onBind = function onBind_14(){
}
;
_.onReset = function onReset_13(){
  $doFire(this.eventBus, new PageAfterSelectEvent_0('evaluationinput'), null);
}
;
_.revealInParent = function revealInParent_13(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputPresenter$_annotation$$none$$) {
    result = new FrmEvaluationInputPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmEvaluationInputView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputPresenter$_annotation$$none$$;
}

defineSeed(1095, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_120(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function FrmEvaluationInputView_0(){
  this.widget = $build_f_HTMLPanel1_12(new FrmEvaluationInputView_BinderImpl$Widgets_0);
}

defineSeed(1263, 738, makeCastMap([Q$IsWidget]), FrmEvaluationInputView_0);
_.asWidget = function asWidget_16(){
  return this.widget;
}
;
_.widget = null;
function FrmEvaluationInputView_BinderImpl_0(){
}

defineSeed(1264, 1, {}, FrmEvaluationInputView_BinderImpl_0);
function $build_f_HTMLPanel1_12(this$static){
  var attachRecord13, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_VerticalPanel4, f_Grid5, f_Label6, f_Label8;
  f_HTMLPanel1 = new HTMLPanel_0($html1_10(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord13 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord13.origParent?$insertBefore(attachRecord13.origParent, attachRecord13.element, attachRecord13.origSibling):orphan(attachRecord13.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'EVALUATION INTERMEDIAIRE', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_VerticalPanel4 = new VerticalPanel_0 , $add_11(f_VerticalPanel4, (f_Grid5 = new Grid_0 , $resizeColumns(f_Grid5, 2) , $resizeRows(f_Grid5, 2) , $setWidget_1(f_Grid5, 0, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Ann\xE9e :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid5, 0, 1, new ListBox_0) , $setWidget_1(f_Grid5, 1, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Professeur :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid5, 1, 1, new ListBox_0) , f_Grid5)) , f_VerticalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmEvaluationInputView_BinderImpl$Widgets_0(){
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1265, 1, {}, FrmEvaluationInputView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
function $html1_10(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_12(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$view$FrmEvaluationInputView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationInputView$_annotation$$none$$) {
    result = new FrmEvaluationInputView_0(new FrmEvaluationInputView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationInputView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationInputView$_annotation$$none$$;
}

var Lcom_lemania_sis_client_presenter_FrmEvaluationInputPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputPresenter', 934), Lcom_lemania_sis_client_view_FrmEvaluationInputView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView', 1263), Lcom_lemania_sis_client_view_FrmEvaluationInputView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView_BinderImpl', 1264), Lcom_lemania_sis_client_view_FrmEvaluationInputView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputView_BinderImpl$Widgets', 1265);
$entry(onLoad)(14);
