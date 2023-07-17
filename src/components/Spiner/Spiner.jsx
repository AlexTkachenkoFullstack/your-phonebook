import { RotatingLines, ProgressBar } from  'react-loader-spinner'
export const Spinner = () => {
    return (<div style={{transform: 'translate(-50%, -50%)', position:'absolute', top:'50%', left:'50%'}}>
                <RotatingLines
                strokeColor="blue"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
                />
            </div>
    )
}

export const ContactsSpinner = () => {
    return (<div style={{transform: 'translate(-50%, -50%)', position:'absolute', top:'50%', left:'50%'}}>
                <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor = '#F4442E'
                barColor = '#51E5FF'
                />
            </div>
    )
}
