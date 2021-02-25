package com.hrms.rest.application.models;


public class Prediction {

	private String behaviourWithColleagues;
	private String levelOfCreativity;
	private String attendance;
	private String projectPunctuality;
	private String projectQuality;

	public Prediction() {

	}

	public Prediction(String behaviourWithColleagues, String levelOfCreativity, String attendance,
			String projectPunctuality, String projectQuality) {
		super();
		this.behaviourWithColleagues = behaviourWithColleagues;
		this.levelOfCreativity = levelOfCreativity;
		this.attendance = attendance;
		this.projectPunctuality = projectPunctuality;
		this.projectQuality = projectQuality;
	}

	public String getBehaviourWithColleagues() {
		return behaviourWithColleagues;
	}

	public void setBehaviourWithColleagues(String behaviourWithColleagues) {
		this.behaviourWithColleagues = behaviourWithColleagues;
	}

	public String getLevelOfCreativity() {
		return levelOfCreativity;
	}

	public void setLevelOfCreativity(String levelOfCreativity) {
		this.levelOfCreativity = levelOfCreativity;
	}

	public String getAttendance() {
		return attendance;
	}

	public void setAttendance(String attendance) {
		this.attendance = attendance;
	}

	public String getProjectPunctuality() {
		return projectPunctuality;
	}

	public void setProjectPunctuality(String projectPunctuality) {
		this.projectPunctuality = projectPunctuality;
	}

	public String getProjectQuality() {
		return projectQuality;
	}

	public void setProjectQuality(String projectQuality) {
		this.projectQuality = projectQuality;
	}
	
	

}
