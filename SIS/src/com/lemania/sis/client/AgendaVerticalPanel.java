package com.lemania.sis.client;

import com.google.gwt.user.client.ui.VerticalPanel;
import com.lemania.sis.shared.masteragendaitem.MasterAgendaItemProxy;

public class AgendaVerticalPanel extends VerticalPanel {
	//
	private MasterAgendaItemProxy mai;

	public MasterAgendaItemProxy getMai() {
		return mai;
	}

	public void setMai(MasterAgendaItemProxy mai) {
		this.mai = mai;
	}	
}
