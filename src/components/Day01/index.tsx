import { createEffect, createSignal } from 'solid-js'
import { A } from "@solidjs/router"
import day01Input from './input.txt'

async function fetchInput() {
  return await fetch(day01Input)
    .then((r) => r.text())
    .then((text) => {
      return text.split('\n');
    });
}

const concatFirstAndLastNumber = (text: string) => {
  const numbersInText = text.split('').reduce((numberArray: string[], char: string) => {
    if (isNaN(parseInt(char))) return numberArray;

    return [...numberArray, char];
  }, []);

  return numbersInText[0] + numbersInText[numbersInText.length - 1];
};

const concatFirstAndLastNumberForPart2 = (text: string) => {
  const numbersInText = text.match(/\d/g);
  const firstNumberIndex = numbersInText ? text.indexOf(numbersInText[0]) : null;
  const lastNumberIndex = numbersInText
    ? text.lastIndexOf(numbersInText[numbersInText.length - 1])
    : null;
  const firstOneIndex = text.indexOf('one');
  const lastOneIndex = text.lastIndexOf('one');
  const firstTwoIndex = text.indexOf('two');
  const lastTwoIndex = text.lastIndexOf('two');
  const firstThreeIndex = text.indexOf('three');
  const lastThreeIndex = text.lastIndexOf('three');
  const firstFourIndex = text.indexOf('four');
  const lastFourIndex = text.lastIndexOf('four');
  const firstFiveIndex = text.indexOf('five');
  const lastFiveIndex = text.lastIndexOf('five');
  const firstSixIndex = text.indexOf('six');
  const lastSixIndex = text.lastIndexOf('six');
  const firstSevenIndex = text.indexOf('seven');
  const lastSevenIndex = text.lastIndexOf('seven');
  const firstEightIndex = text.indexOf('eight');
  const lastEightIndex = text.lastIndexOf('eight');
  const firstNineIndex = text.indexOf('nine');
  const lastNineIndex = text.lastIndexOf('nine');
  const firstIndexArray = [
    firstNumberIndex,
    firstOneIndex,
    firstTwoIndex,
    firstThreeIndex,
    firstFourIndex,
    firstFiveIndex,
    firstSixIndex,
    firstSevenIndex,
    firstEightIndex,
    firstNineIndex,
  ];
  const lastIndexArray = [
    lastNumberIndex,
    lastOneIndex,
    lastTwoIndex,
    lastThreeIndex,
    lastFourIndex,
    lastFiveIndex,
    lastSixIndex,
    lastSevenIndex,
    lastEightIndex,
    lastNineIndex,
  ];

  const firstIndexArrayWithoutNull = firstIndexArray.filter(
    (index) => index !== -1
  ) as number[];
  const lastIndexArrayWithoutNull = lastIndexArray.filter(
    (index) => index !== -1
  ) as number[];
  const minIndex = firstIndexArrayWithoutNull.reduce((a, b) => Math.min(a, b));
  const maxIndex = lastIndexArrayWithoutNull.reduce((a, b) => Math.max(a, b));
  const resultIndexes = [minIndex, maxIndex];

  const numbersInText2 = resultIndexes.map((index: number) => {
    if (text.charAt(index) === 'o') return '1';
    if (text.charAt(index) === 't' && text.charAt(index + 1) === 'w') return '2';
    if (text.charAt(index) === 't' && text.charAt(index + 1) === 'h') return '3';
    if (text.charAt(index) === 'f' && text.charAt(index + 1) === 'o') return '4';
    if (text.charAt(index) === 'f' && text.charAt(index + 1) === 'i') return '5';
    if (text.charAt(index) === 's' && text.charAt(index + 1) === 'i') return '6';
    if (text.charAt(index) === 's' && text.charAt(index + 1) === 'e') return '7';
    if (text.charAt(index) === 'e') return '8';
    if (text.charAt(index) === 'n') return '9';
    return text.charAt(index);
  });

  return numbersInText2[0] + numbersInText2[numbersInText2.length - 1];
};

const getSum = (numbers: string[]) => {
  return numbers.reduce((sum: number, num: string) => {
    return sum + parseInt(num);
  }, 0);
};

function Day01() {
  const [sum, setSum] = createSignal<number>(0);
  const [sumPart2, setSumPart2] = createSignal<number>(0);

  createEffect(() => {
    fetchInput().then((data) => {
      const allNumberStrings = data.map((line) => concatFirstAndLastNumber(line));
      const allNumberStringsPart2 = data.map((line) =>
        concatFirstAndLastNumberForPart2(line)
      );

      setSum(getSum(allNumberStrings));
      setSumPart2(getSum(allNumberStringsPart2));
    });
  });

  return (
    <>
      <A href='/2023/day01'>&lt; Back to overview</A>
      <h1>Day 01</h1>
      <h2>Task</h2>
      <a href='https://adventofcode.com/2023/day/1' target='_blank'>
        https://adventofcode.com/2023/day/1
      </a>
      <h2>My Solution</h2>
      <h3>Part 1</h3>
      <p>Sum of all Lines: {sum()}</p>
      <h3>Part 2</h3>
      <p>Sum of all Lines: {sumPart2()}</p>
    </>
  );
}

export default Day01;
