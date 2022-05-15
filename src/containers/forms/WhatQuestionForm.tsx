import { Fragment } from 'react';
import InputField from '../../components/InputField';
import SubmitButton from '../../components/SubmitButton';
import { useTranslation } from "react-i18next";

interface WhatQuestionProps {
  prevStep: () => void;
  nextStep: () => void;
  getQuestion: (word: string) => void;
  answer: string;
}

const WhatQuestionForm = (props: WhatQuestionProps) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className='card center'>
        <form>
          <InputField
            label={t("inputs.what")}
            type={'string'}
            value={props.answer}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              props.getQuestion(e.target.value)
            }
          ></InputField>
          <SubmitButton value={t("buttons.back")} onClick={props.prevStep}></SubmitButton>
          <SubmitButton value={t("buttons.next")} onClick={props.nextStep}></SubmitButton>
        </form>
      </div>
    </Fragment>
  );
};

export default WhatQuestionForm;
