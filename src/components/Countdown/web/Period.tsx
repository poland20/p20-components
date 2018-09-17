import * as React from 'react';
import styled, { css } from 'react-emotion';
import { DatespanUnit, DatespanPeriod } from './datespan';
import { rhythm, Center } from 'components/typography';
import Arc from './Arc';

function unitString(unit: DatespanUnit, value: number) {
  const unitNames = {
    [DatespanUnit.YEARS]: 'year',
    [DatespanUnit.MONTHS]: 'month',
    [DatespanUnit.DAYS]: 'day',
    [DatespanUnit.HOURS]: 'hour',
    [DatespanUnit.MINUTES]: 'minute',
    [DatespanUnit.SECONDS]: 'second',
  };
  let s = unitNames[unit];
  if (value !== 1) {
    s += 's';
  }
  return s;
}

const Circle = styled('span')({
  position: 'relative',
  display: 'block',
  height: '100%',
  marginBottom: rhythm(0.5)
});

const Value = styled('h3')({
  display: 'block',
  position: 'absolute',
  top: rhythm(0.66)
});

const style = css({
  width: rhythm(3.25),
  height: rhythm(2),
  '& + &': {
    marginLeft: rhythm(1)
  },
  '*': {
    width: '100%'
  }
});

const Period: React.StatelessComponent<DatespanPeriod & { stroke?: string }> =
  ({ unit, value, max, stroke }) => (
    <Center className={style}>
      <Circle>
        <Arc max={max} value={value} stroke={stroke}/>
        <Value>{value}</Value>
      </Circle>
      <h3>{unitString(unit, value)}</h3>
    </Center>
  );

export default Period;
