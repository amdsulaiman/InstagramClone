import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import validator from "email-validator";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import firebase  from "firebase";

const LoginForm = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(8, "Your password has to have at least 8 characters"),
  });

  const onLogin =  (email, password) => {
    
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          Alert.alert(error.message);
        });
    
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.wrapper}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            onLogin(values.email, values.password);
            console.log(values);
            navigation.push("HomeScreen");
          }}
          validationSchema={LoginFormSchema}
          validateOnMount={true}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
            <>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      values.email.length < 1 ||
                      validator.validate(values.email)
                        ? "#ccc"
                        : "red",
                  },
                ]}
              >
                <TextInput
                  placeholder="Phone number , username or email"
                  placeholderTextColor="#444"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoFocus={true}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
              </View>

              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      1 > values.password.length || values.password.length >= 6
                        ? "#ccc"
                        : "red",
                  },
                ]}
              >
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#444"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  textContentType="password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
              </View>
              <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
                <Text style={{ color: "#6BB0F5" }}>Frogot password?</Text>
              </View>
              <Pressable
                titleSize={20}
                style={styles.button(isValid)}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                <Text style={styles.buttonText}>Log in</Text>
              </Pressable>
              <View style={styles.signupContainer}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.push("SignupScreen")}
                >
                  <Text style={{ color: "#6BB0F5" }}> Sign up</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  inputField: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },
  wrapper: {
    marginTop: 80,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default LoginForm;
