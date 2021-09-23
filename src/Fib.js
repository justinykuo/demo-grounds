import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import evenSumFib from './util/fibonacci';

const marks = [
  {
    value: 1,
    label: '1 million',
  },
  {
    value: 2,
    label: '2 million',
  },
  {
    value: 3,
    label: '3 million',
  },
  {
    value: 4,
    label: '4 million',
  },
  {
    value: 5,
    label: '5 million',
  },
  {
    value: 6,
    label: '6 million',
  },
  {
    value: 7,
    label: '7 million',
  },
  {
    value: 8,
    label: '8 million',
  },
];

function valuetext(value) {
  return value;
}

function getEvenSumFib(sliderValue) {
  const response = evenSumFib(sliderValue * 1000000);
  const { values, sum } = response;
  return `The numbers in the sequence (even numbers denoted with *) are: ${values.join(', ')}. The sum of the even numbers is ${sum}`;
}

export default function Fib() {
  const [sliderValue, setSliderValue] = useState(4);
  return (
    <Box sx={{ width: 800, mb: 10 }}>
      <Typography variant="h5" component="h1" sx={{ mb: 10 }}>
        Getting the sum of all even numbers in a fibonacci sequence (starting from a value of 1)
      </Typography>
      <Slider
        aria-label="Always visible"
        defaultValue={sliderValue}
        onChange={((e) => setSliderValue(e.target.value))}
        getAriaValueText={valuetext}
        marks={marks}
        valueLabelDisplay="on"
        step={0.1}
        min={1}
        max={8}
        sx={{ mb: 10 }}
      />
      <Typography variant="h5" component="h1" sx={{ mb: 10 }}>
        {getEvenSumFib(sliderValue)}
      </Typography>
    </Box>
  );
}
