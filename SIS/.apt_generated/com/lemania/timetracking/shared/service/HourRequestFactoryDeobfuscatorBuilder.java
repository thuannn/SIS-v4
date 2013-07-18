// Automatically Generated -- DO NOT EDIT
// com.lemania.timetracking.shared.service.HourRequestFactory
package com.lemania.timetracking.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
public final class HourRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("06zlf_S06Qf0fgIAWDR2xgeRdw0="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/HourProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Hour;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.timetracking.shared.service.HourRequestFactory$HourRequestContext")
  .build());
withOperation(new OperationKey("hHIGDYdiV71mvdBD0I7wOSf1uVY="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.timetracking.shared.service.HourRequestFactory$HourRequestContext")
  .build());
withOperation(new OperationKey("2oE9TeDfHm6YdhaKKsZA1ezTfUA="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/HourProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Hour;)Lcom/lemania/timetracking/server/Hour;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.timetracking.shared.service.HourRequestFactory$HourRequestContext")
  .build());
withOperation(new OperationKey("zROCcnpqFDvdp36sAinHHYJ3mPA="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/HourProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Hour;)V")
  .withMethodName("removeHour")
  .withRequestContext("com.lemania.timetracking.shared.service.HourRequestFactory$HourRequestContext")
  .build());
withRawTypeToken("HgpIM2kEyHaG08QkBCgF0QkWPAc=", "com.lemania.timetracking.shared.HourProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.timetracking.server.Hour", Arrays.asList("com.lemania.timetracking.shared.HourProxy"));
}}
