import styled from "styled-components";

import { useState, FormEvent, useMemo } from "react";
import ChooseLocation from "./components/ChooseLocation";
import { useMultistepForm } from "./hooks/useMulitstepForm";
import TeacherForm from "./components/TeacherForm";
import AddressForm from "./components/AddressForm";
import AccountForm from "./components/AccountForm";
import MunicipalityForm from "./components/MunicipalityForm";
import CountryForm from "./components/CountryForm";
import nextSvg from "./assets/svg/next.svg";
import backSvg from "./assets/svg/back.svg";
import ClassForm from "./components/ClassForm";
export type FormData = {
  local: boolean | null;
  country: string;
  municipality?: string;
  school: string;

  classGrade: string;
  studentsCount: number;
  teachersCount: number;
  havePayedTour: boolean;

  firstName: string;
  lastName: string;
  phone?: string;
  email?: string;
};
const INITIAL_DATA: FormData = {
  local: null,
  country: "",
  school: "",
  classGrade: "",
  studentsCount: 0,
  teachersCount: 0,
  havePayedTour: false,
  firstName: "Khaled",
  lastName: "Abo",
  phone: "0762440447",
  email: "",
};
function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const {
    steps,
    step,
    goTo,
    back,
    next,
    currentStepIndex,
    isFirstStep,
    isLastStep,
  } = useMultistepForm([
    <ChooseLocation local={data.local} updateFields={updateFields} />,
    // data.local === true ? (
    //   <MunicipalityForm />
    // ) : data.local === false ? (
    //   <CountryForm country={data.country} updateFields={updateFields} />
    // ) : (
    //   <ChooseLocation local={data.local} updateFields={updateFields} />
    // ),
    <AddressForm
      local={data.local}
      country={data.country}
      municipality={data.municipality}
      updateFields={updateFields}
    />,
    <TeacherForm
      firstName={data.firstName}
      lastName={data.lastName}
      phone={data.phone}
      email={data.email}
      updateFields={updateFields}
    />,
    <ClassForm
      updateFields={updateFields}
      studentsCount={data.studentsCount}
      teachersCount={data.teachersCount}
      havePayedTour={data.havePayedTour}
      classGrade={data.classGrade}
    />,
  ]);
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    next();
  }

  return (
    <AppWrapper className="bg-img">
      <form onSubmit={onSubmit}>
        {!isFirstStep && (
          <PageIndicator>
            {currentStepIndex + 1}/{steps.length}
          </PageIndicator>
        )}
        {step}

        <PrevButton>
          {!isFirstStep && (
            <button type="button" onClick={back}>
              <img src={backSvg} height="50" width={50} />
            </button>
          )}
        </PrevButton>
        <NextButton>
          {
            <button type="submit" disabled={data.local == null}>
              {isLastStep ? (
                "Finish"
              ) : (
                <img src={nextSvg} height="50" width={50} />
              )}
            </button>
          }
        </NextButton>
      </form>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  // border: 2px dotted red;
`;
const PageIndicator = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-weight: bold;
  // border: 2px solid lime;
`;

const NextButton = styled.div`
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  right: 0.5rem;
  background-color: none;
`;
const PrevButton = styled.div`
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  left: 0.5rem;
`;
