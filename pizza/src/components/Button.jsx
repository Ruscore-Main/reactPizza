import React, {Component} from 'react';
import classNames from 'classnames';

const Button = ({children, outline, className, onClick}) => {
    return (
        <button onClick={onClick} className={classNames('button', className, {
                'button--outline': outline
        })}>
            {children}
        </button>
    );
}

export default Button;