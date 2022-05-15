/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react';

interface SubmitButtonProps {
  value: string;
  onClick: () => void;
}

const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <Fragment>
      <div className='center'>
        <a href="#" className="button" onClick={() => {
          props.onClick();
        }}>{props.value}</a>
      </div>
    </Fragment>
  );
};

export default SubmitButton;
