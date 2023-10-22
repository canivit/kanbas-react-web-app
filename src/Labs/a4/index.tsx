import { Add } from "./Add";
import { ArrayStateVariable } from "./ArrayStateVariable";
import { BooleanStateVariable } from "./BooleanStateVariable";
import { ClickEvent } from "./ClickEvent";
import { Counter } from "./Counter";
import { DateStateVariable } from "./DateStateVariable";
import { EventObject } from "./EventObject";
import { ObjectStateVariable } from "./ObjectStateVariable";
import { ParentStateComponent } from "./ParentStateComponent";
import { PassingDataOnEvent } from "./PassingDataOnEvent";
import { PassingFunctions } from "./PassingFunctions";
import { ReduxExamples } from "./ReduxExamples";
import { StringStateVariable } from "./StringStateVariable";

export function Assignment4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div>
      <h1>Assignment 4</h1>
      <ReduxExamples />
      <Add x={1} y={2} />
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariable />
      <StringStateVariable />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
    </div>
  );
}
