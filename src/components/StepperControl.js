import React, { useState } from "react";
import { Slider, RangeSlider, Row, Col, InputGroup, InputNumber } from "rsuite";

export default function StepperControl({min, max, title, value, setValue}) {
  function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
  }

  return (
    <Col className="rounded-md bg-slate-50 shadow-inner px-3 py-2 my-3">
      <b>{title}</b>
      <Row>
        <Col className="px-3" md={16}>
          <Slider
            progress
            style={{ marginTop: 16 }}
            value={value}
            min={min}
            defaultValue={min}
            max={max}
            onChange={(value) => {
              setValue(value);
            }}
          />
        </Col>
        <Col md={8}>
          <InputNumber
            min={min}
            max={max}
            value={value}
            onChange={(value) => {
              if (isNumber(value) || value === null || value === "") {
                if (!(parseInt(value) > max)) {
                  setValue(value);
                }
              }
            }}
          />
        </Col>
      </Row>
    </Col>
  );
}
