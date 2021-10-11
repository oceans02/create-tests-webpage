import './custom-button.styles.scss'

export const CustomButton = ({children, inverted, ...otherProps}) => (
    <div className={`${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>{children}</div>
)