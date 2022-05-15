import { Fragment } from 'react';

import SubmitButton from '../../components/SubmitButton';
import { useTranslation } from "react-i18next";

interface ResultProps {
  prevStep: () => void;
  who: string;
  what: string;
  when: string;
  where: string;
}

const Result = (props: ResultProps) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className='card center'>
        <strong className='sentence'>{`${props.who} ${props.what} ${props.where} ${props.when}`}</strong>
        <SubmitButton value={t("buttons.back")} onClick={props.prevStep}></SubmitButton>
      </div>
    </Fragment>
  );
};

export default Result;
