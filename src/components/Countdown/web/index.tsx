import * as React from 'react';
import Datespan, { DatespanUnit } from './datespan';
import styled from 'react-emotion';
import Period from './Period';

const Time = styled('time')({
  display: 'inline-flex'
});

interface CountdownProps {
  date: Date;
  maxUnit?: DatespanUnit;
  minUnit?: DatespanUnit;
}

interface CountdownState {
  datespan: Datespan;
}

export default class Countdown extends React.Component<CountdownProps, CountdownState> {
  static defaultProps = {
    date: new Date(),
    maxUnit: DatespanUnit.DAYS,
    minUnit: DatespanUnit.SECONDS,
  };

  interval: number;

  componentWillMount() {
    this.props.date && this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  componentWillReceiveProps(newProps: CountdownProps) {
    if (this.props.date !== newProps.date) {
      this.stop();
      this.start();
    }
  }

  private start() {
    this.update();
    this.interval = window.setInterval(this.update, 1000);
  }

  private stop() {
    window.clearInterval(this.interval);
  }

  private update = () => {
    const datespan = new Datespan(new Date(), this.props.date, {
      minUnit: this.props.minUnit,
      maxUnit: this.props.maxUnit,
    });

    this.setState({ datespan }, () => {
      datespan.isZero && this.stop();
    });
  }

  private renderDatespan() {
    const datespan = this.state.datespan;
    return datespan.toArray().map(d => <Period key={d.unit} {...d} />);
  }

  render() {
    return (
      <Time dateTime={this.props.date.toISOString()}>
        {this.renderDatespan()}
      </Time>
    );
  }
}
