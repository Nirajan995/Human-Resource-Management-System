package com.hrms.rest.application.services;

import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

import com.namsor.oss.classify.bayes.ClassifyException;
import com.namsor.oss.classify.bayes.IClassification;
import com.namsor.oss.classify.bayes.IClassificationExplained;
import com.namsor.oss.classify.bayes.NaiveBayesClassifierMapImpl;
import com.namsor.oss.classify.bayes.NaiveBayesExplainerImpl;
import com.namsor.oss.classify.bayes.PersistentClassifierException;

public class PredictionService {
	public static final String BEST = "Best";
	public static final String BETTER = "Better";
	public static final String OK = "Ok";
	public static final String BAD = "Bad";
	static final String[] colName = { "Behaviour_with_Colleagues", "Level_of_creativity", "Attendance",
			"Project_Punctuality", "Project_Quality", "Performance" };

	public static final String[][] data = {

			{ "Less_Cooperative", "Highly_Creative", "Mostly_Present", "Occasionally_Late", "Beyond_Expectation",
					"Best" },
			{ "Cooperative", "Less_Creative", "Rarely_Absent", "OnTime", "Little_Below_Expectation", "Best" },
			{ "Less_Cooperative", "Creative", "Mostly_Present", "Occasionally_Late", "Below Expectation", "Ok" },
			{ "Cooperative", "Less_Creative", "Sometimes_Absent", "Rarely_Late", "Little_Below_Expectation", "Better" },
			{ "Highly_Cooperative", "Creative", "Mostly_Present", "OnTime", "Beyond_Expectation", "Best" },
			{ "Highly_Cooperative", "Not_Creative", "Frequently_Absent", "Occasionally_Late",
					"Little_Below_Expectation", "Ok" },
			{ "Less_Cooperative", "Less_Creative", "Rarely_Absent", "Rarely_Late", "Beyond_Expectation", "Better" },
			{ "Cooperative", "Creative", "Sometimes_Absent", "Mostly_Late", "As_Expected", "Ok" },
			{ "Less_Cooperative", "Less_Creative", "Rarely_Absent", "Mostly_Late", "Little_Below_Expectation", "Bad" },
			{ "Not_Cooperative", "Creative", "Mostly_Present", "OnTime", "Little_Below_Expectation", "Better" },
			{ "Less_Cooperative", "Less_Creative", "Mostly_Present", "Occasionally_Late", "Below Expectation", "Bad" },
			{ "Less_Cooperative", "Highly_Creative", "Frequently_Absent", "Occasionally_Late", "As_Expected", "Ok" },
			{ "Less_Cooperative", "Creative", "Sometimes_Absent", "Occasionally_Late", "Beyond_Expectation", "Better" },
			{ "Highly_Cooperative", "Creative", "Sometimes_Absent", "Rarely_Late", "Beyond_Expectation", "Best" },
			{ "Cooperative", "Less_Creative", "Mostly_Present", "OnTime", "Little_Below_Expectation", "Better" },
			{ "Highly_Cooperative", "Highly_Creative", "Sometimes_Absent", "Mostly_Late", "As_Expected", "Better" },
			{ "Less_Cooperative", "Creative", "Sometimes_Absent", "Occasionally_Late", "Little_Below_Expectation",
					"Ok" },
			{ "Not_Cooperative", "Less_Creative", "Rarely_Absent", "Rarely_Late", "As_Expected", "Ok" },
			{ "Less_Cooperative", "Not_Creative", "Sometimes_Absent", "Rarely_Late", "As_Expected", "Ok" },
			{ "Not_Cooperative", "Less_Creative", "Frequently_Absent", "Occasionally_Late", "Little_Below_Expectation",
					"Bad" }, };

	public static final void main(String[] args) {

		try {
			String[] cats = { BEST, OK, BETTER, BAD };
			NaiveBayesClassifierMapImpl bayes = new NaiveBayesClassifierMapImpl("Performance", cats);

			for (int i = 0; i < data.length; i++) {
				Map<String, String> features = new HashMap<>();
				for (int j = 0; j < colName.length - 1; j++) {
					features.put(colName[j], data[i][j]);
				}
				// learn ex. Category=Yes Conditions=Sunny, Cool, Normal and Weak.
				bayes.learn(data[i][colName.length - 1], features);
			}

			Map<String, String> features = new HashMap<>();
			features.put("Behaviour_with_Colleagues", "Not_Cooperative");
			features.put("Level_of_Creativity", "Not_Creative");
			features.put("Attendance", "Sometimes_Absent");
			features.put("Project_Punctuality", "Occasionally_Late");
			features.put("Project_Quality", "Little_Below_Expectation");

			// Shall we play given weather conditions Sunny, Cool, Rainy and Windy ?
			IClassification predict = bayes.classify(features, true);
			for (int i = 0; i < predict.getClassProbabilities().length; i++) {
				System.out.println("P(" + predict.getClassProbabilities()[i].getCategory() + ")="
						+ predict.getClassProbabilities()[i].getProbability());
			}
			if (predict.getExplanationData() != null) {
				NaiveBayesExplainerImpl explainer = new NaiveBayesExplainerImpl();
				IClassificationExplained explained = explainer.explain(predict);
				System.out.println(explained.toString());

				ScriptEngineManager scriptEngineManager = new ScriptEngineManager();
				ScriptEngine scriptEngine = scriptEngineManager.getEngineByName("JavaScript");
				// JavaScript code from String
				Double proba = (Double) scriptEngine.eval(explained.toString());
				System.out.println("Result of calculating in Percentage = " + Math.round(proba * 100) + "%");
			}
		} catch (PersistentClassifierException ex) {
			Logger.getLogger(PredictionService.class.getName()).log(Level.SEVERE, null, ex);
		} catch (ClassifyException ex) {
			Logger.getLogger(PredictionService.class.getName()).log(Level.SEVERE, null, ex);
		} catch (Throwable ex) {
			Logger.getLogger(PredictionService.class.getName()).log(Level.SEVERE, null, ex);
		}
	}
}
