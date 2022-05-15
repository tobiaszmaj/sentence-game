import { Fragment } from 'react';
import InputField from '../../components/InputField';
import SubmitButton from '../../components/SubmitButton';
import { useTranslation } from "react-i18next";

interface WhoQuestionProps {
  nextStep: () => void;
  answer: string;
  getQuestion: (word: string) => void;
}

const WhoQuestionForm = (props: WhoQuestionProps) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className='card center'>
        <form>
          <InputField
            label={t("inputs.who")}
            type={'string'}
            value={props.answer}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              props.getQuestion(e.target.value)
            }
          ></InputField>
          <SubmitButton value={t("buttons.next")} onClick={props.nextStep}></SubmitButton>
        </form>
      </div>
    </Fragment>
  );
};

export default WhoQuestionForm;
