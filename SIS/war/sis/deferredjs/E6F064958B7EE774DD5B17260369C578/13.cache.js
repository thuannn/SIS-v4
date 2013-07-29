function DoubleParser_0(){
}

defineSeed(308, 1, {}, DoubleParser_0);
var INSTANCE_1 = null;
function DoubleRenderer_0(){
}

defineSeed(309, 310, {}, DoubleRenderer_0);
var INSTANCE_2 = null;
function ValueBox_0(element){
  ValueBoxBase_0.call(this, element);
}

defineSeed(432, 433, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
function DoubleBox_0(){
  ValueBox_0.call(this, $createInputElement($doc, 'text'), (!INSTANCE_2 && (INSTANCE_2 = new DoubleRenderer_0) , !INSTANCE_1 && (INSTANCE_1 = new DoubleParser_0)));
}

defineSeed(431, 432, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), DoubleBox_0);
function $createNewProfile(this$static, profileName){
  var profile, rc, rf, x;
  if (!profileName.length) {
    alert_0('Donn\xE9e Invalide - Nom du profil');
    return;
  }
  rf = new ProfileRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileRequestFactory_ProfileRequestContextImpl_0(rf);
  profile = dynamicCast($create_1(rc, Lcom_lemania_sis_shared_ProfileProxy_2_classLit), Q$ProfileProxy);
  profile.setProfileName(profileName);
  profile.setIsActive(($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
  $fire((x = new ProfileRequestFactory_ProfileRequestContextImpl$5X_0(rc, profile) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$4_0(this$static));
}

function $loadProfessorList(this$static, subjectId){
  var rc, rf, x;
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  $fire((x = new AssignmentRequestFactory_AssignmentRequestContextImpl$5X_0(rc, subjectId) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$5_0(this$static));
}

function $loadProfileList(this$static){
  var rc, rf, x;
  rf = new ProfileRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileRequestFactory_ProfileRequestContextImpl_0(rf);
  $fire((x = new ProfileRequestFactory_ProfileRequestContextImpl$2X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$3_0(this$static));
}

function ProfileManagementPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(820, 677, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ProfileManagementUiHandler]), ProfileManagementPresenter_0);
_.onBind = function onBind_15(){
  dynamicCast(this.view, Q$ProfileManagementPresenter$MyView).setUiHandlers(this);
}
;
_.onReset = function onReset_9(){
  var rf, rc, rf_0, rc_0;
  $resetForm_3(dynamicCast(this.view, Q$ProfileManagementPresenter$MyView));
  $loadProfileList(this);
  rf = new SubjectRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new SubjectRequestFactory_SubjectRequestContextImpl_0(rf);
  $fire($listAllActive(rc), new ProfileManagementPresenter$2_0(this));
  rf_0 = new BrancheRequestFactoryImpl_0;
  $initialize_0(rf_0, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc_0 = new BrancheRequestFactory_BrancheRequestContextImpl_0(rf_0);
  $fire($listAll_0(rc_0), new ProfileManagementPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_14(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_26(this$static, response){
  $setBrancheListData(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(821, 616, makeCastMap([Q$Receiver]), ProfileManagementPresenter$1_0);
_.onFailure_0 = function onFailure_26(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_26(response){
  $onSuccess_26(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_27(this$static, response){
  $setSubjectListData_0(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(822, 616, makeCastMap([Q$Receiver]), ProfileManagementPresenter$2_0);
_.onFailure_0 = function onFailure_27(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_27(response){
  $onSuccess_27(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_28(this$static, response){
  $setProfileListData(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(823, 616, makeCastMap([Q$Receiver]), ProfileManagementPresenter$3_0);
_.onFailure_0 = function onFailure_28(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_28(response){
  $onSuccess_28(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_29(this$static){
  $resetForm_3(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView));
  $loadProfileList(this$static.this$0);
}

function ProfileManagementPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(824, 616, makeCastMap([Q$Receiver]), ProfileManagementPresenter$4_0);
_.onFailure_0 = function onFailure_29(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_29(response){
  $onSuccess_29(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $onSuccess_30(this$static, response){
  $setProfessorListData(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(825, 616, makeCastMap([Q$Receiver]), ProfileManagementPresenter$5_0);
_.onFailure_0 = function onFailure_30(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_30(response){
  $onSuccess_30(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$_annotation$$none$$) {
    result = new ProfileManagementPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$_annotation$$none$$;
}

defineSeed(888, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_60(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onCmdCreateNewProfileClick(this$static){
  this$static.txtNewProfileName.element['value'] = '';
  $setVisible_0(this$static.pnlAddNewProfile, true);
}

function $onCmdSaveNewProfileClick(this$static){
  !!this$static.uiHandlers && $createNewProfile(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getPropertyString(this$static.txtNewProfileName.element, 'value'));
}

function $onLstSubjectsChange(this$static){
  !!this$static.uiHandlers && $loadProfessorList(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getValue_1(this$static.lstSubjects, this$static.lstSubjects.element.selectedIndex));
}

function $resetForm_3(this$static){
  $setVisible_0(this$static.pnlAddNewProfile, false);
  $clear_3(this$static.subjectDataProvider.listWrapper);
  $clear_3(this$static.brancheDataProvider.listWrapper);
  $selectClear(this$static.lstProfiles.element);
  $selectClear(this$static.lstSubjects.element);
  $selectClear(this$static.lstProfessors.element);
  $selectClear(this$static.lstBranches.element);
  this$static.txtSubjectCoef.element['value'] = '';
  this$static.txtBrancheCoef.element['value'] = '';
}

function $setBrancheListData(this$static, brancheList){
  var branche, branche$iterator;
  $selectClear(this$static.lstBranches.element);
  $insertItem(this$static.lstBranches, '-', '', -1);
  for (branche$iterator = brancheList.iterator(); branche$iterator.hasNext();) {
    branche = dynamicCast(branche$iterator.next_0(), Q$BrancheProxy);
    $insertItem(this$static.lstBranches, branche.getBrancheName(), '' + toString_6(branche.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstBranches, 0);
}

function $setProfessorListData(this$static, profs){
  var prof, prof$iterator;
  $selectClear(this$static.lstProfessors.element);
  $insertItem(this$static.lstProfessors, '-', '', -1);
  for (prof$iterator = profs.iterator(); prof$iterator.hasNext();) {
    prof = dynamicCast(prof$iterator.next_0(), Q$ProfessorProxy);
    $insertItem(this$static.lstProfessors, prof.getProfName(), '' + toString_6(prof.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstProfessors, 0);
}

function $setProfileListData(this$static, profiles){
  var profile, profile$iterator;
  $selectClear(this$static.lstProfiles.element);
  $insertItem(this$static.lstProfiles, '-', '', -1);
  for (profile$iterator = profiles.iterator(); profile$iterator.hasNext();) {
    profile = dynamicCast(profile$iterator.next_0(), Q$ProfileProxy);
    $insertItem(this$static.lstProfiles, profile.getProfileName(), '' + toString_6(profile.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstProfiles, 0);
}

function $setSubjectListData_0(this$static, subjectList){
  var subject, subject$iterator;
  $selectClear(this$static.lstSubjects.element);
  $insertItem(this$static.lstSubjects, '-', '', -1);
  for (subject$iterator = subjectList.iterator(); subject$iterator.hasNext();) {
    subject = dynamicCast(subject$iterator.next_0(), Q$SubjectProxy);
    $insertItem(this$static.lstSubjects, subject.getSubjectName(), '' + toString_6(subject.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstSubjects, 0);
}

function ProfileManagementView_0(){
  this.subjectDataProvider = new ListDataProvider_0;
  this.brancheDataProvider = new ListDataProvider_0;
  this.tblSubjects = new DataGrid_0;
  this.tblBranches = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_12(new ProfileManagementView_BinderImpl$Widgets_0(this));
}

defineSeed(1039, 682, makeCastMap([Q$IsWidget, Q$ProfileManagementPresenter$MyView]), ProfileManagementView_0);
_.asWidget = function asWidget_17(){
  return this.widget;
}
;
_.lstBranches = null;
_.lstProfessors = null;
_.lstProfiles = null;
_.lstSubjects = null;
_.pnlAddNewProfile = null;
_.txtBrancheCoef = null;
_.txtNewProfileName = null;
_.txtSubjectCoef = null;
_.widget = null;
function ProfileManagementView_BinderImpl_0(){
}

defineSeed(1040, 1, {}, ProfileManagementView_BinderImpl_0);
function $build_f_HTMLPanel1_12(this$static){
  var attachRecord12, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_VerticalPanel4, f_Grid5, f_Label6, lstProfiles, cmdCreateNewProfile, pnlAddNewProfile, f_Grid7, f_VerticalPanel8, f_VerticalPanel15, txtNewProfileName, cmdSaveNewProfile, f_Label9, f_Label10, f_Grid11, f_Label12, lstSubjects, txtSubjectCoef, f_Label13, lstProfessors, f_Label14, cmdAddSubject, sb, tblSubjects, f_Label16, f_Label17, f_Grid18, f_Label19, lstBranches, txtBrancheCoef, f_Label20, cmdAddBranche, f_Label21, tblBranches;
  f_HTMLPanel1 = new HTMLPanel_0($html2_1(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord12 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord12.origParent?$insertBefore(attachRecord12.origParent, attachRecord12.element, attachRecord12.origSibling):orphan(attachRecord12.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_9(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'GESTION DES PROFILS') , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_9(f_VerticalPanel2, (f_VerticalPanel4 = new VerticalPanel_0 , $add_9(f_VerticalPanel4, (f_Grid5 = new Grid_0 , $resizeColumns(f_Grid5, 4) , $resizeRows(f_Grid5, 1) , $setWidget_1(f_Grid5, 0, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'List des profils :') , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid5, 0, 1, (lstProfiles = new ListBox_0 , lstProfiles.element['className'] = 'sis_textbox' , this$static.owner.lstProfiles = lstProfiles , lstProfiles)) , $setWidget_1(f_Grid5, 0, 2, (cmdCreateNewProfile = new Button_0 , $setInnerText(cmdCreateNewProfile.element, 'Cr\xE9er un nouveau profil') , $addDomHandler(cmdCreateNewProfile, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdCreateNewProfile)) , $setWidget_1(f_Grid5, 0, 3, (pnlAddNewProfile = new FlowPanel_0 , $add_5(pnlAddNewProfile, (txtNewProfileName = new TextBox_0 , txtNewProfileName.element['className'] = 'sis_textbox' , this$static.owner.txtNewProfileName = txtNewProfileName , txtNewProfileName)) , $add_5(pnlAddNewProfile, (cmdSaveNewProfile = new Button_0 , $setInnerText(cmdSaveNewProfile.element, 'Enregistrer') , $addDomHandler(cmdSaveNewProfile, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , cmdSaveNewProfile)) , setVisible(pnlAddNewProfile.element, false) , this$static.owner.pnlAddNewProfile = pnlAddNewProfile , pnlAddNewProfile)) , f_Grid5.tableElem['cellSpacing'] = 5 , f_Grid5.tableElem['cellPadding'] = 5 , f_Grid5)) , $add_9(f_VerticalPanel4, (f_Grid7 = new Grid_0 , $resizeColumns(f_Grid7, 2) , $resizeRows(f_Grid7, 1) , $setWidget_1(f_Grid7, 0, 0, (f_VerticalPanel8 = new VerticalPanel_0 , $add_9(f_VerticalPanel8, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label9.directionalTextHelper, 'Mati\xE8res') , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $add_9(f_VerticalPanel8, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Rajouter une mati\xE8re au profil') , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $add_9(f_VerticalPanel8, (f_Grid11 = new Grid_0 , $resizeColumns(f_Grid11, 3) , $resizeRows(f_Grid11, 3) , $setWidget_1(f_Grid11, 0, 0, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Mati\xE8re :') , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_1(f_Grid11, 0, 1, (lstSubjects = new ListBox_0 , lstSubjects.element['className'] = 'sis_textbox' , $addDomHandler(lstSubjects, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstSubjects = lstSubjects , lstSubjects)) , $setWidget_1(f_Grid11, 0, 2, (txtSubjectCoef = new DoubleBox_0 , this$static.owner.txtSubjectCoef = txtSubjectCoef , txtSubjectCoef)) , $setWidget_1(f_Grid11, 1, 0, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'Professeur :') , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_1(f_Grid11, 1, 1, (lstProfessors = new ListBox_0 , lstProfessors.element['className'] = 'sis_textbox' , this$static.owner.lstProfessors = lstProfessors , lstProfessors)) , $setWidget_1(f_Grid11, 2, 0, (f_Label14 = new Label_0 , f_Label14.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label14.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_1(f_Grid11, 2, 1, (cmdAddSubject = new Button_0 , $setHTML(cmdAddSubject, (sb = new StringBuilder_0 , $append_1(sb.data, 'Ajouter') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $addDomHandler(cmdAddSubject, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_0) , cmdAddSubject)) , f_Grid11.element.style['width'] = '' , f_Grid11.tableElem['cellSpacing'] = 5 , f_Grid11.tableElem['cellPadding'] = 5 , f_Grid11)) , $add_9(f_VerticalPanel8, (tblSubjects = this$static.owner.tblSubjects , tblSubjects.element.style['height'] = '200px' , tblSubjects.element.style['width'] = '250px' , tblSubjects)) , f_VerticalPanel8.element.style['width'] = '' , f_VerticalPanel8.table['cellSpacing'] = 2 , f_VerticalPanel8)) , $setWidget_1(f_Grid7, 0, 1, (f_VerticalPanel15 = new VerticalPanel_0 , $add_9(f_VerticalPanel15, (f_Label16 = new Label_0 , f_Label16.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label16.directionalTextHelper, 'Branches') , $updateHorizontalAlignment(f_Label16) , f_Label16.element.style['width'] = '' , f_Label16)) , $add_9(f_VerticalPanel15, (f_Label17 = new Label_0 , $setTextOrHtml(f_Label17.directionalTextHelper, 'Rajouter une branche pour la mati\xE8re s\xE9lection\xE9e') , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $add_9(f_VerticalPanel15, (f_Grid18 = new Grid_0 , $resizeColumns(f_Grid18, 3) , $resizeRows(f_Grid18, 3) , $setWidget_1(f_Grid18, 0, 0, (f_Label19 = new Label_0 , $setTextOrHtml(f_Label19.directionalTextHelper, 'Branche :') , $updateHorizontalAlignment(f_Label19) , f_Label19)) , $setWidget_1(f_Grid18, 0, 1, (lstBranches = new ListBox_0 , lstBranches.element['className'] = 'sis_textbox' , this$static.owner.lstBranches = lstBranches , lstBranches)) , $setWidget_1(f_Grid18, 0, 2, (txtBrancheCoef = new DoubleBox_0 , this$static.owner.txtBrancheCoef = txtBrancheCoef , txtBrancheCoef)) , $setWidget_1(f_Grid18, 1, 0, (f_Label20 = new Label_0 , f_Label20.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label20.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label20) , f_Label20)) , $setWidget_1(f_Grid18, 1, 1, (cmdAddBranche = new Button_0 , $setInnerText(cmdAddBranche.element, 'Ajouter') , $addDomHandler(cmdAddBranche, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, TYPE_0) , cmdAddBranche)) , $setWidget_1(f_Grid18, 2, 0, (f_Label21 = new Label_0 , f_Label21.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label21.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label21) , f_Label21)) , f_Grid18.tableElem['cellSpacing'] = 5 , f_Grid18.tableElem['cellPadding'] = 5 , f_Grid18)) , $add_9(f_VerticalPanel15, (tblBranches = this$static.owner.tblBranches , tblBranches.element.style['height'] = '200px' , tblBranches.element.style['width'] = '250px' , tblBranches)) , f_VerticalPanel15.element.style['width'] = '' , f_VerticalPanel15.table['cellSpacing'] = 2 , f_VerticalPanel15)) , f_Grid7.element.style['width'] = '' , f_Grid7.tableElem['cellSpacing'] = 5 , f_Grid7.tableElem['cellPadding'] = 5 , f_Grid7)) , f_VerticalPanel4.element.style['width'] = '100%' , f_VerticalPanel4.table['cellSpacing'] = 2 , f_VerticalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ProfileManagementView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ProfileManagementView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ProfileManagementView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ProfileManagementView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ProfileManagementView_BinderImpl$Widgets$4_0;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new ProfileManagementView_BinderImpl$Widgets$5_0;
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1041, 1, {}, ProfileManagementView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function ProfileManagementView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1042, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_31(event_0){
  $onCmdCreateNewProfileClick(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1043, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_32(event_0){
  $onCmdSaveNewProfileClick(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1044, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_3(event_0){
  $onLstSubjectsChange(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$4_0(){
}

defineSeed(1045, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$4_0);
_.onClick = function onClick_33(event_0){
}
;
function ProfileManagementView_BinderImpl$Widgets$5_0(){
}

defineSeed(1046, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$5_0);
_.onClick = function onClick_34(event_0){
}
;
function $html2_1(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$) {
    result = new ProfileManagementView_0(new ProfileManagementView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$;
}

function $$init_14(this$static){
  this$static.shim = new ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_14(this);
}

function ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_14(this);
}

defineSeed(1129, 577, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_14(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_14(){
  return new ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_22(){
  return Lcom_lemania_sis_shared_ProfileProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_13(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getIsActive_1(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'isActive'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('isActive', value, propertyContext);
  value = $getId_8(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getProfileName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'profileName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('profileName', value, propertyContext);
}
;
function $getId_8(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getIsActive_1(this$static){
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

defineSeed(1130, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileProxy]), ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_40(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ProfileProxy).equals$(o);
}
;
_.getId_0 = function getId_13(){
  return $getId_8(this);
}
;
_.getIsActive = function getIsActive_3(){
  return $getIsActive_1(this);
}
;
_.getProfileName = function getProfileName(){
  return $getProfileName(this);
}
;
_.hashCode$ = function hashCode_40(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileProxy).hashCode$();
}
;
_.setIsActive = function setIsActive_3(isActive){
  dynamicCast($getWrapped(this.this$0), Q$ProfileProxy).setIsActive(isActive);
}
;
_.setProfileName = function setProfileName(profileName){
  dynamicCast($getWrapped(this.this$0), Q$ProfileProxy).setProfileName(profileName);
}
;
_.toString$ = function toString_30(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileProxy).toString$();
}
;
_.this$0 = null;
function ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1131, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileProxy]), ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_41(other){
  return equals_14(this.this$0, other);
}
;
_.getId_0 = function getId_14(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getIsActive = function getIsActive_4(){
  return dynamicCast($getOrReify(this.this$0, 'isActive'), Q$Boolean);
}
;
_.getProfileName = function getProfileName_0(){
  return dynamicCast($getOrReify(this.this$0, 'profileName'), Q$String);
}
;
_.hashCode$ = function hashCode_41(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setIsActive = function setIsActive_4(isActive){
  $setProperty(this.this$0, 'isActive', isActive);
}
;
_.setProfileName = function setProfileName_0(profileName){
  $setProperty(this.this$0, 'profileName', profileName);
}
;
_.this$0 = null;
function AssignmentRequestFactory_AssignmentRequestContextImpl$5X_0(this$0, val$subjectId){
  this.val$subjectId = val$subjectId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1147, 620, makeCastMap([Q$AbstractRequest]), AssignmentRequestFactory_AssignmentRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_0(){
  return new RequestData_0('7Aaa0cEufz9T7SRWFp03gtJeB_c=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$subjectId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ProfessorProxy_2_classLit);
}
;
_.val$subjectId = null;
function $clinit_ProfileRequestFactoryImpl(){
  $clinit_ProfileRequestFactoryImpl = nullMethod;
  tokensToTypes_5 = new HashMap_0;
  typesToTokens_5 = new HashMap_0;
  entityProxyTypes_5 = new HashSet_0;
  valueProxyTypes_5 = new HashSet_0;
  tokensToTypes_5.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_5.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_18(entityProxyTypes_5, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_5.put('4f6x2X$iTZunF$uRKvzBsMVHE8Q=', Lcom_lemania_sis_shared_ProfileProxy_2_classLit);
  typesToTokens_5.put(Lcom_lemania_sis_shared_ProfileProxy_2_classLit, '4f6x2X$iTZunF$uRKvzBsMVHE8Q=');
  $add_18(entityProxyTypes_5, Lcom_lemania_sis_shared_ProfileProxy_2_classLit);
}

function ProfileRequestFactoryImpl_0(){
  $clinit_ProfileRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1183, 611, {}, ProfileRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_5(){
  return 'com.lemania.sis.shared.service.ProfileRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_5(typeToken){
  return dynamicCast(tokensToTypes_5.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_9(type){
  return dynamicCast(typesToTokens_5.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_6(type){
  return $contains_1(entityProxyTypes_5, type);
}
;
_.isValueType = function isValueType_6(type){
  return $contains_1(valueProxyTypes_5, type);
}
;
var entityProxyTypes_5, tokensToTypes_5, typesToTokens_5, valueProxyTypes_5;
function ProfileRequestFactory_ProfileRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1184, 621, makeCastMap([Q$AbstractRequestContext]), ProfileRequestFactory_ProfileRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_5(){
  return !FACTORY_6 && (FACTORY_6 = new ProfileRequestFactory_ProfileRequestContextImpl_FactoryImpl_0) , FACTORY_6;
}
;
var FACTORY_6 = null;
function ProfileRequestFactory_ProfileRequestContextImpl$2X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1185, 620, makeCastMap([Q$AbstractRequest]), ProfileRequestFactory_ProfileRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_18(){
  return new RequestData_0('Y4ttalgWTxG4B8KpSodI3WUiu6Q=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ProfileProxy_2_classLit);
}
;
function ProfileRequestFactory_ProfileRequestContextImpl$5X_0(this$0, val$profile){
  this.val$profile = val$profile;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1186, 620, makeCastMap([Q$AbstractRequest]), ProfileRequestFactory_ProfileRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_19(){
  return new RequestData_0('4ZW3fByoCzqlWnOKyk3o7CsXeGI=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profile]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$profile = null;
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

defineSeed(1187, 549, makeCastMap([Q$EnumMap]), ProfileRequestFactory_ProfileRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_6(map){
  $add_13(map, Lcom_lemania_sis_shared_ProfileProxy_2_classLit, $getConstructors_com_lemania_sis_shared_ProfileProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_6(){
}
;
var Lcom_lemania_sis_client_presenter_ProfileManagementPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter', 820), Lcom_lemania_sis_shared_ProfileProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'ProfileProxy'), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$1', 821), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$2', 822), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$3', 823), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$4', 824), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$5', 825), Lcom_lemania_sis_client_view_ProfileManagementView_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView', 1039), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl', 1040), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets', 1041), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$1', 1042), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$2', 1043), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$3', 1044), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$4', 1045), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$5', 1046), Lcom_google_gwt_user_client_ui_ValueBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ValueBox', 432), Lcom_google_gwt_user_client_ui_DoubleBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DoubleBox', 431), Lcom_lemania_sis_shared_service_ProfileRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileRequestFactoryImpl', 1183), Lcom_lemania_sis_shared_service_ProfileRequestFactory_1ProfileRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileRequestFactory_ProfileRequestContextImpl', 1184), Lcom_lemania_sis_shared_service_ProfileRequestFactory_1ProfileRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileRequestFactory_ProfileRequestContextImpl$2X', 1185), Lcom_lemania_sis_shared_service_ProfileRequestFactory_1ProfileRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileRequestFactory_ProfileRequestContextImpl$5X', 1186), Lcom_lemania_sis_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$5X', 1147), Lcom_google_gwt_text_client_DoubleRenderer_2_classLit = createForClass('com.google.gwt.text.client.', 'DoubleRenderer', 309), Lcom_google_gwt_text_client_DoubleParser_2_classLit = createForClass('com.google.gwt.text.client.', 'DoubleParser', 308), Lcom_lemania_sis_shared_service_ProfileRequestFactory_1ProfileRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileRequestFactory_ProfileRequestContextImpl_FactoryImpl', 1187), Lcom_lemania_sis_shared_ProfileProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1129), Lcom_lemania_sis_shared_ProfileProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1130), Lcom_lemania_sis_shared_ProfileProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1131);
$entry(onLoad)(13);
