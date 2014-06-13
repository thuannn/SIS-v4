// Automatically Generated -- DO NOT EDIT
// com.lemania.sis.shared.service.StudentRequestFactory
package com.lemania.sis.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
public final class StudentRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("xcMXZI$R4WoJHZnKstFo2G9fVww="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/StudentProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Student;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.sis.shared.service.StudentRequestFactory$StudentRequestContext")
  .build());
withOperation(new OperationKey("wiynw$7muIzA0bNe2Iy$wadMq2w="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAllActiveWithoutBulletin")
  .withRequestContext("com.lemania.sis.shared.service.StudentRequestFactory$StudentRequestContext")
  .build());
withOperation(new OperationKey("G2KD$kkdT6sFEa2oTck82epBU2U="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.sis.shared.service.StudentRequestFactory$StudentRequestContext")
  .build());
withOperation(new OperationKey("U5iKnjkT5z54XNB7n73Lysgelew="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAllActive")
  .withRequestContext("com.lemania.sis.shared.service.StudentRequestFactory$StudentRequestContext")
  .build());
withOperation(new OperationKey("H7T3piM3Kmr8gzT3cosCJ1Jim9w="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;)Lcom/lemania/sis/server/Student;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.sis.shared.service.StudentRequestFactory$StudentRequestContext")
  .build());
withOperation(new OperationKey("qI0_B1hYf67V$_VpVTF2RqSn4Ag="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/StudentProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Student;)Lcom/lemania/sis/server/Student;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.sis.shared.service.StudentRequestFactory$StudentRequestContext")
  .build());
withOperation(new OperationKey("ZruoL8pExqDVRkRHUXsoNZvWYEs="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/StudentProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Student;)V")
  .withMethodName("removeStudent")
  .withRequestContext("com.lemania.sis.shared.service.StudentRequestFactory$StudentRequestContext")
  .build());
withOperation(new OperationKey("RcyhQIfmnhD7PKxyrrIRW8FXXcs="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("listByEmail")
  .withRequestContext("com.lemania.sis.shared.service.StudentRequestFactory$StudentRequestContext")
  .build());
withRawTypeToken("NYSAog3wZcLeCPWLtPhbElv09sg=", "com.lemania.sis.shared.StudentProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.sis.server.Student", Arrays.asList("com.lemania.sis.shared.StudentProxy"));
}}
