// Automatically Generated -- DO NOT EDIT
// com.lemania.sis.shared.service.SubjectRequestFactory
package com.lemania.sis.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
public final class SubjectRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("k$JK6orbDR9gy4pyPOcLB4mMzQo="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/SubjectProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Subject;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.sis.shared.service.SubjectRequestFactory$SubjectRequestContext")
  .build());
withOperation(new OperationKey("K7KNwqW$sLQ_nhTaC55sPTL_$is="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/BulletinProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Bulletin;)Ljava/util/List;")
  .withMethodName("listAllActiveByProfile")
  .withRequestContext("com.lemania.sis.shared.service.SubjectRequestFactory$SubjectRequestContext")
  .build());
withOperation(new OperationKey("thTlG6AsRrsgV9mCPA4Zy_KcFDc="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.sis.shared.service.SubjectRequestFactory$SubjectRequestContext")
  .build());
withOperation(new OperationKey("MPFmfLNlkc0etb$Pi_O8mA63K60="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAllActive")
  .withRequestContext("com.lemania.sis.shared.service.SubjectRequestFactory$SubjectRequestContext")
  .build());
withOperation(new OperationKey("I7tXY9kiZKmIpV70FKXwhpS54p8="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/SubjectProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Subject;)Lcom/lemania/sis/server/Subject;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.sis.shared.service.SubjectRequestFactory$SubjectRequestContext")
  .build());
withOperation(new OperationKey("cl6MM5h09gODKn4k2fzgNI3zjWQ="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/SubjectProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Subject;)V")
  .withMethodName("removeSubject")
  .withRequestContext("com.lemania.sis.shared.service.SubjectRequestFactory$SubjectRequestContext")
  .build());
withOperation(new OperationKey("DaOK700FEqNvkqiZLH5oytuN3Vs="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()V")
  .withMethodName("initialize")
  .withRequestContext("com.lemania.sis.shared.service.SubjectRequestFactory$SubjectRequestContext")
  .build());
withRawTypeToken("PkLDLJoNPIgrtihI5OG0UPtvprs=", "com.lemania.sis.shared.BulletinProxy");
withRawTypeToken("abvmZrXvW20lV3odxZOEzl3XlbY=", "com.lemania.sis.shared.SubjectProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.sis.server.Bulletin", Arrays.asList("com.lemania.sis.shared.BulletinProxy"));
withClientToDomainMappings("com.lemania.sis.server.Subject", Arrays.asList("com.lemania.sis.shared.SubjectProxy"));
}}
