import React from 'react';
import { useRef } from 'react';
import { Animated } from 'react-native';

export const useFade = () => {
  const opacity = useRef(new Animated.Value(0.5)).current;

  const fadeIn = (callback?: Function) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start(() => callback ? callback() : null);
  };

  const fadeOut = (duration: number = 300) => {
    Animated.timing(opacity, {
      duration,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    fadeIn,
    fadeOut,
  };
};
