// Automatically Generated -- DO NOT EDIT
// com.lemania.sis.shared.service.ProfileSubjectRequestFactory
package com.lemania.sis.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
public final class ProfileSubjectRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("xXKM4ftCdI9TlcI2aT5k5t2FvDY="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/ProfileSubjectProxy;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/ProfileSubject;Ljava/lang/String;)Lcom/lemania/sis/server/ProfileSubject;")
  .withMethodName("updateSubjectProf")
  .withRequestContext("com.lemania.sis.shared.service.ProfileSubjectRequestFactory$ProfileSubjectRequestContext")
  .build());
withOperation(new OperationKey("4oslgQo44QiRUaRMww77Wr0Ja8E="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/ProfileSubjectProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/ProfileSubject;)Ljava/lang/Boolean;")
  .withMethodName("removeProfileSubject")
  .withRequestContext("com.lemania.sis.shared.service.ProfileSubjectRequestFactory$ProfileSubjectRequestContext")
  .build());
withOperation(new OperationKey("25Q7WxkRRjyKLyoFSeslgouJIgU="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/ProfileSubjectProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/ProfileSubject;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.sis.shared.service.ProfileSubjectRequestFactory$ProfileSubjectRequestContext")
  .build());
withOperation(new OperationKey("B0_ScOvIe5fsGZmYTLPkqUso$H0="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.sis.shared.service.ProfileSubjectRequestFactory$ProfileSubjectRequestContext")
  .build());
withOperation(new OperationKey("9yjny_sIdQooOpdnpZufcosh7MQ="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.sis.shared.service.ProfileSubjectRequestFactory$ProfileSubjectRequestContext")
  .build());
withOperation(new OperationKey("qTOdZ6XT2bC4RQ$sfLmvUoGt3gg="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;)Lcom/lemania/sis/server/ProfileSubject;")
  .withMethodName("calculateTotalBrancheCoef")
  .withRequestContext("com.lemania.sis.shared.service.ProfileSubjectRequestFactory$ProfileSubjectRequestContext")
  .build());
withOperation(new OperationKey("IcnkMtdZgCQ8S6KSdnuHt4TYDhI="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAllActive")
  .withRequestContext("com.lemania.sis.shared.service.ProfileSubjectRequestFactory$ProfileSubjectRequestContext")
  .build());
withOperation(new OperationKey("8SLCmloTUXnDwqJAzEjz$AwsCug="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/lemania/sis/server/ProfileSubject;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.sis.shared.service.ProfileSubjectRequestFactory$ProfileSubjectRequestContext")
  .build());
withOperation(new OperationKey("DiLXneANl$CK767vopw82RFxJQw="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/ProfileSubjectProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/ProfileSubject;)Lcom/lemania/sis/server/ProfileSubject;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.sis.shared.service.ProfileSubjectRequestFactory$ProfileSubjectRequestContext")
  .build());
withOperation(new OperationKey("k7u_yhtyjbULamASOOqH904Nms0="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()V")
  .withMethodName("initialize")
  .withRequestContext("com.lemania.sis.shared.service.ProfileSubjectRequestFactory$ProfileSubjectRequestContext")
  .build());
withRawTypeToken("j7rtdtaz0ZtchwX8fbXOqSPLDOo=", "com.lemania.sis.shared.ProfileSubjectProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.sis.server.ProfileSubject", Arrays.asList("com.lemania.sis.shared.ProfileSubjectProxy"));
}}
