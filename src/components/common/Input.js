import React from "react";

const Input = (props) => {
    const {
        id,
        name,
        type = "text",
        value,
        placeholder,
        onChange,
        onKeyUp,
        ref,
        className
    } = props;

    return (
        <>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onKeyUp={onKeyUp}
                value={value}
                className={`${className} ${props.error ? "error-field" : ""}`}
                ref={ref}
            />
            {
                props.error
                    ?
                    <div className="error-text">{props.helpertext}</div>
                    :
                    null
            }

        </>
    );
};

export default Input;
