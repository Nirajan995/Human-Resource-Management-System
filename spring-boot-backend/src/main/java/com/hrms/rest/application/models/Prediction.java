package com.hrms.rest.application.models;

public class Prediction {
	
	private String best;
	private String better;
	private String ok;
	private String bad;
	
	public Prediction() {
		
	}

	public Prediction(String best, String better, String ok, String bad) {
		super();
		this.best = best;
		this.better = better;
		this.ok = ok;
		this.bad = bad;
	}

	public String getBest() {
		return best;
	}
	public void setBest(String best) {
		this.best = best;
	}
	public String getBetter() {
		return better;
	}
	public void setBetter(String better) {
		this.better = better;
	}
	public String getOk() {
		return ok;
	}
	public void setOk(String ok) {
		this.ok = ok;
	}
	public String getBad() {
		return bad;
	}
	public void setBad(String bad) {
		this.bad = bad;
	}
	
	

}