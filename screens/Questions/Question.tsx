import { Dimensions, Text } from "react-native";
import React, { Fragment, useRef, useEffect, useState } from "react";
import QuizContainer from "../../container/QuizContainer";
import theme, { Box } from "../../utils/theme";
import { verticalScale, moderateScale } from "react-native-size-matters";
import QuestionSlide from "../../components/QuestionSlide";
import { questions } from "./data";
import style from "./Question.style";
import Animated, { multiply, useAnimatedRef } from "react-native-reanimated";
import { useScrollHandler } from "react-native-redash";
import Answers from "../../components/Answers";
import { Button } from "../../components";
import {
  grabQuizQuestions,
  QuestionDifficulty,
  QuizPropsState,
  _,
} from "../../utils/Helper";

const { View, ScrollView } = Animated;
const { width, height } = Dimensions.get("window");

export type currAnswerObjecetProps = {
  question: string;
  answer: string;
  answerIsCorrect: boolean;
  correctAnswer: string;
};

const Question = () => {
  const { x, scrollHandler } = useScrollHandler();
  const scrollView = useRef<Animated.ScrollView>(null);

  const [qloading, setqloading] = useState<boolean>(false);
  const [allQuestions, setAllQuestions] = useState<QuizPropsState[]>([]);
  const [userSelectedAnswers, setUserSelectedAnswers] = useState<
    currAnswerObjecetProps[]
  >([]);
  const [score, setScore] = useState<number>(0);
  const [curNum, setCurNum] = useState<number>(0);
  const [TOTAL_QUESTIONS] = useState<number>(10);
  const [quizOver, setQuizOver] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);

  const shuffleDifficulty = _([
    QuestionDifficulty.EASY,
    QuestionDifficulty.MEDIUM,
    QuestionDifficulty.HARD,
  ]);

  const answerSelected = (answer: string, index: number) => {
    if (!quizOver) {
      // verifica se hai selezionato la risposta corretta
      const answerIsCorrect = allQuestions[curNum].correct_answer === answer;

      // incrementa il punteggio
      if (answerIsCorrect) setScore((currScore) => currScore + 1);

      // salva la risposta corrente
      const currAnswerObject = {
        question: allQuestions[curNum].question,
        answer,
        answerIsCorrect,
        correctAnswer: allQuestions[curNum].correct_answer,
      };

      setUserSelectedAnswers((curranswers) => [
        ...curranswers,
        currAnswerObject,
      ]);
    }
  };

  const startJob = async () => {
    setqloading(true);
    setQuizOver(false);
    const newQuestion = await grabQuizQuestions(
      TOTAL_QUESTIONS,
      shuffleDifficulty[0]
    );
    setAllQuestions(newQuestion);
    setScore(0);
    setUserSelectedAnswers([]);
    setqloading(false);
  };

  const nextQuestion = () => {
    // vai alla prossima domanda se non è l'ultima
    if (!quizOver && curNum < allQuestions.length - 1) {
      setCurNum((number) => number + 1);
    } else {
      setQuizOver(true);
    }
  };

  useEffect(() => {
    if (!quizOver) {
      if (scrollView.current) {
        scrollView.current.scrollTo({
          x: width * curNum,
          animated: true,
        });
      }
    }
  }, [curNum]);

  useEffect(() => {
    if (userSelectedAnswers.length > 0) {
      nextQuestion();
    }
  }, [userSelectedAnswers]);

  useEffect(() => {
    startJob();
  }, []);

  return (
    <QuizContainer>
      <>
        {qloading ? (
          <View style={style.loadContainer}>
            <Text style={style.loadText}>Quiz Loading...</Text>
          </View>
        ) : (
          <Box flex={1} justifyContent="flex-start">
            <Box justifyContent="flex-start" flex={1} flexDirection="column">
              <View style={style.container}>
                <ScrollView
                  ref={scrollView}
                  horizontal
                  snapToInterval={width}
                  decelerationRate="normal"
                  bounces={false}
                  {...scrollHandler}
                  pointerEvents="none"
                >
                  {allQuestions.map(({ question }, index) => (
                    <Fragment key={index}>
                      <QuestionSlide
                        {...{ question, index }}
                        questionNr={curNum + 1}
                      />
                    </Fragment>
                  ))}
                </ScrollView>
              </View>
              <View style={style.AnswerContainer}>
                <Animated.View
                  style={{
                    backgroundColor: theme.colors["white"],
                    width: width * allQuestions.length,
                    flexDirection: "row",
                    transform: [{ translateX: multiply(x, -1) }],
                  }}
                >
                  {allQuestions.map(({ answers }, index) => (
                    <Fragment key={index}>
                      <Answers {...{ answers, answerSelected }} />
                    </Fragment>
                  ))}
                </Animated.View>
                <View
                  style={{
                    width: width * allQuestions.length,
                    backgroundColor: "with",
                    flexDirection: "row",
                    transform: [{ translateX: multiply(x, -1) }],
                    flex: 1,
                  }}
                >
                  {allQuestions.map(({ answers }, index) => {
                    const last = index === allQuestions.length - 1;
                    return (
                      <Fragment key={index}>
                        <View
                          style={{
                            flex: 1,
                            width,
                            justifyContent: "center",
                            padding: 20,
                            alignItems: "center",
                          }}
                        >
                          <Button
                            width="70%"
                            text={last ? "Fine" : "Prossima"}
                            onPress={nextQuestion}
                          />
                        </View>
                      </Fragment>
                    );
                  })}
                </View>
              </View>
            </Box>
          </Box>
        )}
      </>
    </QuizContainer>
  );
};

export default Question;
