import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({children, outline, className, onClick}) => {
    return (
        <button onClick={onClick} className={classNames('button', className, {
                'button--outline': outline
        })}>
            {children}
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
    outline: PropTypes.bool
}

export default Button;