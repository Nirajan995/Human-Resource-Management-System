package com.hrms.rest.application.test;

import com.namsor.oss.classify.bayes.ClassifyException;
import com.namsor.oss.classify.bayes.NaiveBayesClassifierMapImpl;
import com.namsor.oss.classify.bayes.PersistentClassifierException;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import com.namsor.oss.classify.bayes.IClassification;
import com.namsor.oss.classify.bayes.IClassificationExplained;
import com.namsor.oss.classify.bayes.NaiveBayesExplainerImpl;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

public class NaiveBayesTest {

    public static final String YES = "Yes";
    public static final String NO = "No";
    static final String[] colName = {
        "outlook", "temp", "humidity", "wind", "play"
    };

    public static final String[][] data = {
        {"Sunny", "Hot", "High", "Weak", "No"},
        {"Sunny", "Hot", "High", "Strong", "No"},
        {"Overcast", "Hot", "High", "Weak", "Yes"},
        {"Rain", "Mild", "High", "Weak", "Yes"},
        {"Rain", "Cool", "Normal", "Weak", "Yes"},
        {"Rain", "Cool", "Normal", "Strong", "No"},
        {"Overcast", "Cool", "Normal", "Strong", "Yes"},
        {"Sunny", "Mild", "High", "Weak", "No"},
        {"Sunny", "Cool", "Normal", "Weak", "Yes"},
        {"Rain", "Mild", "Normal", "Weak", "Yes"},
        {"Sunny", "Mild", "Normal", "Strong", "Yes"},
        {"Overcast", "Mild", "High", "Strong", "Yes"},
        {"Overcast", "Hot", "Normal", "Weak", "Yes"},
        {"Rain", "Mild", "High", "Strong", "No"},};

    public static final void main(String[] args) {

        try {
            String[] cats = {YES, NO};
            NaiveBayesClassifierMapImpl bayes = new NaiveBayesClassifierMapImpl("tennis", cats);
            
            for (int i = 0; i < data.length; i++) {
                Map<String, String> features = new HashMap<>();
                for (int j = 0; j < colName.length - 1; j++) {
                    features.put(colName[j], data[i][j]);
                }
                // learn ex. Category=Yes Conditions=Sunny, Cool, Normal and Weak.
                bayes.learn(data[i][colName.length - 1], features);
            }

            Map<String, String> features = new HashMap<>();
            features.put("outlook", "Sunny");
            features.put("temp", "Cool");
            features.put("humidity", "High");
            features.put("wind", "Strong");

            // Shall we play given weather conditions Sunny, Cool, Rainy and Windy ?
            IClassification predict = bayes.classify(features, true);
            for (int i = 0; i < predict.getClassProbabilities().length; i++) {
                System.out.println("P(" + predict.getClassProbabilities()[i].getCategory() + ")=" + predict.getClassProbabilities()[i].getProbability());
            }
            if (predict.getExplanationData() != null) {
                NaiveBayesExplainerImpl explainer = new NaiveBayesExplainerImpl();
                IClassificationExplained explained = explainer.explain(predict);
                System.out.println(explained.toString());
                
                ScriptEngineManager scriptEngineManager = new ScriptEngineManager();
                ScriptEngine scriptEngine = scriptEngineManager.getEngineByName("JavaScript");
                // JavaScript code from String
                Double proba = (Double) scriptEngine.eval(explained.toString());
                System.out.println("Result of evaluating mathematical expressions in String = " + proba);
            }
        } catch (PersistentClassifierException ex) {
            Logger.getLogger(NaiveBayesTest.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassifyException ex) {
            Logger.getLogger(NaiveBayesTest.class.getName()).log(Level.SEVERE, null, ex);
        } catch (Throwable ex) {
            Logger.getLogger(NaiveBayesTest.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}