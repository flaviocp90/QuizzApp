import { Dimensions } from "react-native";
import React, { Fragment, useRef, useEffect, useState } from "react";
import QuizContainer from "../../container/QuizContainer";
import theme, { Box } from "../../utils/theme";
import { verticalScale } from "react-native-size-matters";
import QuestionSlide from "../../components/QuestionSlide";
import { questions } from "./data";
import style from "./Question.style";
import Animated, { multiply, useAnimatedRef } from "react-native-reanimated";
import { useScrollHandler } from "react-native-redash";
import Answers from "../../components/Answers";
import { Button } from "../../components";
import { QuestionDifficulty } from "../../utils/Helper";

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
  const [allQuestions, setAllQuestions] = useState<[]>([]);
  const [userSelectedAnswers, setUserSelectedAnswers] =
    useState<currAnswerObjecetProps>([]);
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

  const startJob = () => {
    setqloading(true);
    setQuizOver(false);
    const newQuestion = await grabQuizQuestions(
      TOTAL_QUESTIONS,
      shuffleDifficulty[0]
    );
  };

  useEffect(() => {}, []);
  startJob();
  return (
    <QuizContainer>
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
              {questions.map(({ question }, index) => (
                <Fragment key={index}>
                  <QuestionSlide {...{ question }} />
                </Fragment>
              ))}
            </ScrollView>
          </View>
          <View style={style.AnswerContainer}>
            <Animated.View
              style={{
                backgroundColor: theme.colors["white"],
                width: width * questions.length,
                flexDirection: "row",
                transform: [{ translateX: multiply(x, -1) }],
              }}
            >
              {questions.map(({ answer }, index) => (
                <Fragment key={index}>
                  <Answers answers={answer} />
                </Fragment>
              ))}
            </Animated.View>
            <View
              style={{
                width: width * questions.length,
                backgroundColor: "with",
                flexDirection: "row",
                transform: [{ translateX: multiply(x, -1) }],
                flex: 1,
              }}
            >
              {questions.map(({ answer }, index) => {
                const last = index === questions.length - 1;
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
                        text={last ? "Submit" : "Next"}
                        onPress={() =>
                          scrollView.current.scrollTo({
                            x: width * (index + 1),
                            animated: true,
                          })
                        }
                      />
                    </View>
                  </Fragment>
                );
              })}
            </View>
          </View>
        </Box>
      </Box>
    </QuizContainer>
  );
};

export default Question;
