import './form-input.styles.scss';

export const FormInput = ({handleChange, label, ...formprops}) => {
    return(
        <div className="group">
            <input type="text" className="form-input"
                onChange= {handleChange} {...formprops} />
            {label ? 
            (<label className={`${formprops.value.length ? 'shrink' : ''} form-input-label`}>
            {label}</label>): null}
        </div>
    )
}
